import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserRepository } from '@data/repositories';
import { AuthStore } from '@data/store';
import { User } from '@data/models';

const AUTH_KEY = 'ft_current_user_id';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userRepo = inject(UserRepository);
  private authStore = inject(AuthStore);
  private router = inject(Router);

  async initialize(): Promise<void> {
    const savedUserId = sessionStorage.getItem(AUTH_KEY);
    if (savedUserId) {
      const user = await this.userRepo.findById(savedUserId);
      if (user) {
        this.authStore.loginSuccess(user);
        return;
      }
    }
    sessionStorage.removeItem(AUTH_KEY);
  }

  async register(username: string, email: string, password: string, displayName: string): Promise<{ success: boolean; error?: string }> {
    try {
      this.authStore.setLoading(true);

      const existingUsername = await this.userRepo.findByUsername(username);
      if (existingUsername) {
        this.authStore.setError('Username già in uso');
        return { success: false, error: 'Username già in uso' };
      }

      const existingEmail = await this.userRepo.findByEmail(email);
      if (existingEmail) {
        this.authStore.setError('Email già registrata');
        return { success: false, error: 'Email già registrata' };
      }

      const user = await this.userRepo.create(username, email, password, displayName);
      this.authStore.loginSuccess(user);
      sessionStorage.setItem(AUTH_KEY, user.id!);

      return { success: true };
    } catch (e) {
      const error = 'Errore durante la registrazione';
      this.authStore.setError(error);
      return { success: false, error };
    }
  }

  async login(username: string, password: string): Promise<{ success: boolean; error?: string }> {
    try {
      this.authStore.setLoading(true);

      const user = await this.userRepo.findByUsername(username);
      if (!user) {
        this.authStore.setError('Credenziali non valide');
        return { success: false, error: 'Credenziali non valide' };
      }

      const valid = await this.userRepo.verifyPassword(user, password);
      if (!valid) {
        this.authStore.setError('Credenziali non valide');
        return { success: false, error: 'Credenziali non valide' };
      }

      this.authStore.loginSuccess(user);
      sessionStorage.setItem(AUTH_KEY, user.id!);

      return { success: true };
    } catch (e) {
      const error = 'Errore durante il login';
      this.authStore.setError(error);
      return { success: false, error };
    }
  }

  logout(): void {
    sessionStorage.removeItem(AUTH_KEY);
    this.authStore.logout();
    this.router.navigate(['/login']);
  }

  async updateSettings(settings: Partial<User['settings']>): Promise<void> {
    const userId = this.authStore.userId();
    if (!userId) return;

    await this.userRepo.updateSettings(userId, settings);
    this.authStore.updateSettings(settings);
  }

  async updateProfile(data: { displayName?: string; email?: string }): Promise<void> {
    const userId = this.authStore.userId();
    if (!userId) return;

    await this.userRepo.updateProfile(userId, data);
    this.authStore.updateUser(data);
  }

  async changePassword(currentPassword: string, newPassword: string): Promise<{ success: boolean; error?: string }> {
    const user = this.authStore.currentUser();
    if (!user) return { success: false, error: 'Non autenticato' };

    const valid = await this.userRepo.verifyPassword(user, currentPassword);
    if (!valid) {
      return { success: false, error: 'Password attuale non corretta' };
    }

    await this.userRepo.changePassword(user.id!, newPassword);
    return { success: true };
  }
}
