import { Injectable } from '@angular/core';
import { db } from '../db/database';
import { Expense, ExpenseFilter } from '../models/expense.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({ providedIn: 'root' })
export class ExpenseRepository {

  async getAll(userId: string): Promise<Expense[]> {
    return db.expenses
      .where('userId')
      .equals(userId)
      .reverse()
      .sortBy('date');
  }

  async getById(id: string): Promise<Expense | undefined> {
    return db.expenses.get(id);
  }

  async getByDateRange(userId: string, from: Date, to: Date): Promise<Expense[]> {
    return db.expenses
      .where('[userId+date]')
      .between([userId, from], [userId, to], true, true)
      .toArray();
  }

  async getByCategory(userId: string, categoryId: string): Promise<Expense[]> {
    return db.expenses
      .where('[userId+categoryId]')
      .equals([userId, categoryId])
      .reverse()
      .sortBy('date');
  }

  async getFiltered(userId: string, filter: ExpenseFilter): Promise<Expense[]> {
    let collection = db.expenses.where('userId').equals(userId);
    let results = await collection.toArray();

    if (filter.categoryId) {
      results = results.filter(e => e.categoryId === filter.categoryId);
    }
    if (filter.tags && filter.tags.length > 0) {
      results = results.filter(e =>
        filter.tags!.some(tag => e.tags.includes(tag))
      );
    }
    if (filter.dateFrom) {
      results = results.filter(e => new Date(e.date) >= filter.dateFrom!);
    }
    if (filter.dateTo) {
      results = results.filter(e => new Date(e.date) <= filter.dateTo!);
    }
    if (filter.amountMin !== undefined) {
      results = results.filter(e => e.amount >= filter.amountMin!);
    }
    if (filter.amountMax !== undefined) {
      results = results.filter(e => e.amount <= filter.amountMax!);
    }
    if (filter.searchText) {
      const search = filter.searchText.toLowerCase();
      results = results.filter(e =>
        e.description.toLowerCase().includes(search) ||
        (e.notes && e.notes.toLowerCase().includes(search))
      );
    }

    return results.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  async create(expense: Omit<Expense, 'id' | 'createdAt' | 'updatedAt'>): Promise<Expense> {
    const now = new Date();
    const newExpense: Expense = {
      ...expense,
      id: uuidv4(),
      createdAt: now,
      updatedAt: now
    };
    await db.expenses.add(newExpense);
    return newExpense;
  }

  async update(id: string, data: Partial<Expense>): Promise<void> {
    await db.expenses.update(id, {
      ...data,
      updatedAt: new Date()
    });
  }

  async delete(id: string): Promise<void> {
    await db.expenses.delete(id);
  }

  async getMonthlyTotal(userId: string, year: number, month: number): Promise<number> {
    const from = new Date(year, month, 1);
    const to = new Date(year, month + 1, 0, 23, 59, 59);
    const expenses = await this.getByDateRange(userId, from, to);
    return expenses.reduce((sum, e) => sum + e.amount, 0);
  }

  async getYearlyTotal(userId: string, year: number): Promise<number> {
    const from = new Date(year, 0, 1);
    const to = new Date(year, 11, 31, 23, 59, 59);
    const expenses = await this.getByDateRange(userId, from, to);
    return expenses.reduce((sum, e) => sum + e.amount, 0);
  }

  async getCategoryTotals(userId: string, from: Date, to: Date): Promise<Map<string, number>> {
    const expenses = await this.getByDateRange(userId, from, to);
    const totals = new Map<string, number>();
    expenses.forEach(e => {
      totals.set(e.categoryId, (totals.get(e.categoryId) || 0) + e.amount);
    });
    return totals;
  }

  async getMonthlyTotals(userId: string, year: number): Promise<number[]> {
    const totals: number[] = [];
    for (let month = 0; month < 12; month++) {
      totals.push(await this.getMonthlyTotal(userId, year, month));
    }
    return totals;
  }

  async getAllTags(userId: string): Promise<string[]> {
    const expenses = await this.getAll(userId);
    const tagSet = new Set<string>();
    expenses.forEach(e => e.tags.forEach(t => tagSet.add(t)));
    return Array.from(tagSet).sort();
  }
}
