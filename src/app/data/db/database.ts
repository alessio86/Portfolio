import Dexie, { Table } from 'dexie';
import { User } from '../models/user.model';
import { Expense } from '../models/expense.model';
import { RecurringPayment, RecurringPaymentHistory } from '../models/recurring.model';

export class FinanceTrackerDB extends Dexie {
  users!: Table<User, string>;
  expenses!: Table<Expense, string>;
  recurringPayments!: Table<RecurringPayment, string>;
  recurringPaymentHistory!: Table<RecurringPaymentHistory, string>;

  constructor() {
    super('FinanceTrackerDB');

    this.version(1).stores({
      users: 'id, username, email',
      expenses: 'id, userId, categoryId, date, [userId+date], [userId+categoryId]',
      recurringPayments: 'id, userId, categoryId, nextDueDate, isActive, [userId+isActive], [userId+nextDueDate]',
      recurringPaymentHistory: 'id, userId, recurringPaymentId, paidDate, [userId+paidDate]'
    });
  }
}

export const db = new FinanceTrackerDB();
