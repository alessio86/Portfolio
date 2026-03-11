import { computed } from '@angular/core';
import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';
import { User } from '../models/user.model';

export interface AuthState {
  currentUser: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  currentUser: null,
  isAuthenticated: false,
  isLoading: false,
  error: null
};

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store) => ({
    userId: computed(() => store.currentUser()?.id ?? ''),
    displayName: computed(() => store.currentUser()?.displayName ?? ''),
    settings: computed(() => store.currentUser()?.settings ?? null),
    isDarkMode: computed(() => store.currentUser()?.settings?.darkMode ?? true),
    categories: computed(() => store.currentUser()?.settings?.categories ?? []),
    notificationSettings: computed(() => store.currentUser()?.settings?.notifications ?? null)
  })),
  withMethods((store) => ({
    setLoading(isLoading: boolean) {
      patchState(store, { isLoading });
    },
    setError(error: string | null) {
      patchState(store, { error, isLoading: false });
    },
    loginSuccess(user: User) {
      patchState(store, {
        currentUser: user,
        isAuthenticated: true,
        isLoading: false,
        error: null
      });
    },
    logout() {
      patchState(store, { ...initialState });
    },
    updateUser(user: Partial<User>) {
      const current = store.currentUser();
      if (current) {
        patchState(store, {
          currentUser: { ...current, ...user }
        });
      }
    },
    updateSettings(settings: Partial<User['settings']>) {
      const current = store.currentUser();
      if (current) {
        patchState(store, {
          currentUser: {
            ...current,
            settings: { ...current.settings, ...settings }
          }
        });
      }
    }
  }))
);
