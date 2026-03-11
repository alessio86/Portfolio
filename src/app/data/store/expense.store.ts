import { computed } from '@angular/core';
import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';
import { Expense, ExpenseFilter } from '../models/expense.model';

export interface ExpenseState {
  expenses: Expense[];
  filter: ExpenseFilter;
  isLoading: boolean;
  error: string | null;
}

const initialState: ExpenseState = {
  expenses: [],
  filter: {},
  isLoading: false,
  error: null
};

export const ExpenseStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store) => ({
    totalExpenses: computed(() =>
      store.expenses().reduce((sum, e) => sum + e.amount, 0)
    ),
    expenseCount: computed(() => store.expenses().length),
    expensesByCategory: computed(() => {
      const map = new Map<string, number>();
      store.expenses().forEach(e => {
        map.set(e.categoryId, (map.get(e.categoryId) || 0) + e.amount);
      });
      return map;
    }),
    recentExpenses: computed(() =>
      [...store.expenses()]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 10)
    ),
    allTags: computed(() => {
      const tagSet = new Set<string>();
      store.expenses().forEach(e => e.tags.forEach(t => tagSet.add(t)));
      return Array.from(tagSet).sort();
    })
  })),
  withMethods((store) => ({
    setExpenses(expenses: Expense[]) {
      patchState(store, { expenses, isLoading: false });
    },
    addExpense(expense: Expense) {
      patchState(store, { expenses: [expense, ...store.expenses()] });
    },
    updateExpense(updated: Expense) {
      patchState(store, {
        expenses: store.expenses().map(e => e.id === updated.id ? updated : e)
      });
    },
    removeExpense(id: string) {
      patchState(store, {
        expenses: store.expenses().filter(e => e.id !== id)
      });
    },
    setFilter(filter: ExpenseFilter) {
      patchState(store, { filter });
    },
    clearFilter() {
      patchState(store, { filter: {} });
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
