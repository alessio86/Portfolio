export interface Expense {
  id?: string;
  userId: string;
  amount: number;
  description: string;
  categoryId: string;
  tags: string[];
  date: Date;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ExpenseFilter {
  categoryId?: string;
  tags?: string[];
  dateFrom?: Date;
  dateTo?: Date;
  amountMin?: number;
  amountMax?: number;
  searchText?: string;
}
