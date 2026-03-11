import { Injectable, inject, effect } from '@angular/core';
import { AuthStore } from '@data/store';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private authStore = inject(AuthStore);

  constructor() {
    effect(() => {
      const isDark = this.authStore.isDarkMode();
      this.applyTheme(isDark);
    });
  }

  applyTheme(isDark: boolean): void {
    const html = document.documentElement;
    if (isDark) {
      html.removeAttribute('data-theme');
      html.classList.add('dark');
    } else {
      html.setAttribute('data-theme', 'light');
      html.classList.remove('dark');
    }
  }

  toggleTheme(): void {
    const current = this.authStore.isDarkMode();
    // This will be called from settings; the actual store update
    // happens through AuthService.updateSettings
  }
}
