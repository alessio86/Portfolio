import { computed } from '@angular/core';
import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';
import { RecurringPayment, RecurringPaymentHistory } from '../models/recurring.model';

export interface RecurringState {
  payments: RecurringPayment[];
  history: RecurringPaymentHistory[];
  isLoading: boolean;
  error: string | null;
}

const initialState: RecurringState = {
  payments: [],
  history: [],
  isLoading: false,
  error: null
};

export const RecurringStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store) => ({
    activePayments: computed(() =>
      store.payments().filter(p => p.isActive)
    ),
    activeCount: computed(() =>
      store.payments().filter(p => p.isActive).length
    ),
    overduePayments: computed(() => {
      const now = new Date();
      now.setHours(0, 0, 0, 0);
      return store.payments().filter(p =>
        p.isActive && new Date(p.nextDueDate) < now
      );
    }),
    upcomingPayments: computed(() => {
      const now = new Date();
      const future = new Date();
      future.setDate(future.getDate() + 30);
      return store.payments()
        .filter(p => {
          const due = new Date(p.nextDueDate);
          return p.isActive && due >= now && due <= future;
        })
        .sort((a, b) => new Date(a.nextDueDate).getTime() - new Date(b.nextDueDate).getTime());
    }),
    monthlyTotal: computed(() =>
      store.payments()
        .filter(p => p.isActive)
        .reduce((sum, p) => {
          let multiplier = 1;
          switch (p.frequency) {
            case 'monthly': multiplier = 1; break;
            case 'bimonthly': multiplier = 0.5; break;
            case 'quarterly': multiplier = 1 / 3; break;
            case 'semiannual': multiplier = 1 / 6; break;
            case 'annual': multiplier = 1 / 12; break;
            case 'custom': multiplier = 30 / (p.customDays || 30); break;
          }
          return sum + (p.amount * multiplier);
        }, 0)
    ),
    recentHistory: computed(() =>
      [...store.history()]
        .sort((a, b) => new Date(b.paidDate).getTime() - new Date(a.paidDate).getTime())
        .slice(0, 20)
    )
  })),
  withMethods((store) => ({
    setPayments(payments: RecurringPayment[]) {
      patchState(store, { payments, isLoading: false });
    },
    addPayment(payment: RecurringPayment) {
      patchState(store, { payments: [...store.payments(), payment] });
    },
    updatePayment(updated: RecurringPayment) {
      patchState(store, {
        payments: store.payments().map(p => p.id === updated.id ? updated : p)
      });
    },
    removePayment(id: string) {
      patchState(store, {
        payments: store.payments().filter(p => p.id !== id)
      });
    },
    setHistory(history: RecurringPaymentHistory[]) {
      patchState(store, { history });
    },
    addHistoryEntry(entry: RecurringPaymentHistory) {
      patchState(store, { history: [entry, ...store.history()] });
    },
    setLoading(isLoading: boolean) {
      patchState(store, { isLoading });
    },
    setError(error: string | null) {
      patchState(store, { error, isLoading: false });
    },
    reset() {
      patchState(store, initialState);
    }
  }))
);
