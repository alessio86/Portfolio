export type RecurringFrequency =
  | 'monthly'
  | 'bimonthly'
  | 'quarterly'
  | 'semiannual'
  | 'annual'
  | 'custom';

export interface RecurringPayment {
  id?: string;
  userId: string;
  name: string;
  amount: number;
  categoryId: string;
  tags: string[];
  frequency: RecurringFrequency;
  customDays?: number; // used when frequency === 'custom'
  startDate: Date;
  nextDueDate: Date;
  notes?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface RecurringPaymentHistory {
  id?: string;
  userId: string;
  recurringPaymentId: string;
  recurringPaymentName: string;
  amount: number;
  categoryId: string;
  paidDate: Date;
  dueDate: Date;
  notes?: string;
  createdAt: Date;
}

export function getFrequencyLabel(freq: RecurringFrequency, customDays?: number): string {
  const labels: Record<RecurringFrequency, string> = {
    monthly: 'Mensile',
    bimonthly: 'Bimestrale',
    quarterly: 'Trimestrale',
    semiannual: 'Semestrale',
    annual: 'Annuale',
    custom: `Ogni ${customDays} giorni`
  };
  return labels[freq];
}

export function calculateNextDueDate(currentDueDate: Date, frequency: RecurringFrequency, customDays?: number): Date {
  const next = new Date(currentDueDate);

  switch (frequency) {
    case 'monthly':
      next.setMonth(next.getMonth() + 1);
      break;
    case 'bimonthly':
      next.setMonth(next.getMonth() + 2);
      break;
    case 'quarterly':
      next.setMonth(next.getMonth() + 3);
      break;
    case 'semiannual':
      next.setMonth(next.getMonth() + 6);
      break;
    case 'annual':
      next.setFullYear(next.getFullYear() + 1);
      break;
    case 'custom':
      next.setDate(next.getDate() + (customDays || 30));
      break;
  }

  return next;
}

export function getFrequencyMonthlyMultiplier(frequency: RecurringFrequency, customDays?: number): number {
  switch (frequency) {
    case 'monthly': return 1;
    case 'bimonthly': return 0.5;
    case 'quarterly': return 1 / 3;
    case 'semiannual': return 1 / 6;
    case 'annual': return 1 / 12;
    case 'custom': return 30 / (customDays || 30);
  }
}
