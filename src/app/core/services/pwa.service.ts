import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PwaService {
  private deferredPrompt: any = null;

  canInstall = signal(false);
  isInstalled = signal(false);

  constructor() {
    this.checkIfInstalled();

    window.addEventListener('beforeinstallprompt', (e: Event) => {
      e.preventDefault();
      this.deferredPrompt = e;
      this.canInstall.set(true);
    });

    window.addEventListener('appinstalled', () => {
      this.canInstall.set(false);
      this.isInstalled.set(true);
      this.deferredPrompt = null;
    });
  }

  async promptInstall(): Promise<boolean> {
    if (!this.deferredPrompt) return false;

    this.deferredPrompt.prompt();
    const result = await this.deferredPrompt.userChoice;
    this.deferredPrompt = null;

    if (result.outcome === 'accepted') {
      this.canInstall.set(false);
      return true;
    }
    return false;
  }

  dismissInstall(): void {
    this.canInstall.set(false);
    sessionStorage.setItem('pwa_dismissed', '1');
  }

  private checkIfInstalled(): void {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches
      || (window.navigator as any).standalone === true;
    this.isInstalled.set(isStandalone);

    if (isStandalone || sessionStorage.getItem('pwa_dismissed')) {
      this.canInstall.set(false);
    }
  }
}
