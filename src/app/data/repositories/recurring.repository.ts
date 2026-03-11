import { Injectable } from '@angular/core';
import { db } from '../db/database';
import { RecurringPayment, RecurringPaymentHistory, calculateNextDueDate } from '../models/recurring.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({ providedIn: 'root' })
export class RecurringRepository {

  // --- Recurring Payments ---

  async getAll(userId: string): Promise<RecurringPayment[]> {
    return db.recurringPayments
      .where('userId')
      .equals(userId)
      .sortBy('nextDueDate');
  }

  async getActive(userId: string): Promise<RecurringPayment[]> {
    return db.recurringPayments
      .where('[userId+isActive]')
      .equals([userId, 1])
      .sortBy('nextDueDate');
  }

  async getById(id: string): Promise<RecurringPayment | undefined> {
    return db.recurringPayments.get(id);
  }

  async getUpcoming(userId: string, days: number = 30): Promise<RecurringPayment[]> {
    const now = new Date();
    const future = new Date();
    future.setDate(future.getDate() + days);

    const all = await this.getActive(userId);
    return all.filter(p => {
      const due = new Date(p.nextDueDate);
      return due >= now && due <= future;
    });
  }

  async getOverdue(userId: string): Promise<RecurringPayment[]> {
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    const all = await this.getActive(userId);
    return all.filter(p => new Date(p.nextDueDate) < now);
  }

  async create(payment: Omit<RecurringPayment, 'id' | 'createdAt' | 'updatedAt'>): Promise<RecurringPayment> {
    const now = new Date();
    const newPayment: RecurringPayment = {
      ...payment,
      id: uuidv4(),
      createdAt: now,
      updatedAt: now
    };
    await db.recurringPayments.add(newPayment);
    return newPayment;
  }

  async update(id: string, data: Partial<RecurringPayment>): Promise<void> {
    await db.recurringPayments.update(id, {
      ...data,
      updatedAt: new Date()
    });
  }

  async delete(id: string): Promise<void> {
    await db.recurringPayments.delete(id);
  }

  async duplicate(id: string): Promise<RecurringPayment> {
    const original = await this.getById(id);
    if (!original) throw new Error('Recurring payment not found');

    const { id: _, createdAt, updatedAt, ...data } = original;
    return this.create({
      ...data,
      name: `${data.name} (copia)`
    });
  }

  async markAsPaid(id: string, paidDate: Date = new Date()): Promise<RecurringPaymentHistory> {
    const payment = await this.getById(id);
    if (!payment) throw new Error('Recurring payment not found');

    // Create history entry
    const historyEntry: RecurringPaymentHistory = {
      id: uuidv4(),
      userId: payment.userId,
      recurringPaymentId: payment.id!,
      recurringPaymentName: payment.name,
      amount: payment.amount,
      categoryId: payment.categoryId,
      paidDate,
      dueDate: payment.nextDueDate,
      createdAt: new Date()
    };
    await db.recurringPaymentHistory.add(historyEntry);

    // Update next due date
    const nextDueDate = calculateNextDueDate(payment.nextDueDate, payment.frequency, payment.customDays);
    await this.update(payment.id!, { nextDueDate });

    return historyEntry;
  }

  async getMonthlyRecurringTotal(userId: string): Promise<number> {
    const active = await this.getActive(userId);
    return active.reduce((sum, p) => {
      const multiplier = this.getMonthlyMultiplier(p);
      return sum + (p.amount * multiplier);
    }, 0);
  }

  private getMonthlyMultiplier(p: RecurringPayment): number {
    switch (p.frequency) {
      case 'monthly': return 1;
      case 'bimonthly': return 0.5;
      case 'quarterly': return 1 / 3;
      case 'semiannual': return 1 / 6;
      case 'annual': return 1 / 12;
      case 'custom': return 30 / (p.customDays || 30);
    }
  }

  // --- History ---

  async getHistory(userId: string): Promise<RecurringPaymentHistory[]> {
    return db.recurringPaymentHistory
      .where('userId')
      .equals(userId)
      .reverse()
      .sortBy('paidDate');
  }

  async getHistoryByDateRange(userId: string, from: Date, to: Date): Promise<RecurringPaymentHistory[]> {
    return db.recurringPaymentHistory
      .where('[userId+paidDate]')
      .between([userId, from], [userId, to], true, true)
      .toArray();
  }

  async getHistoryForPayment(recurringPaymentId: string): Promise<RecurringPaymentHistory[]> {
    return db.recurringPaymentHistory
      .where('recurringPaymentId')
      .equals(recurringPaymentId)
      .reverse()
      .sortBy('paidDate');
  }
}
