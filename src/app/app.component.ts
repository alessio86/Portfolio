import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PwaService } from '@core/services/pwa.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: `
    <router-outlet></router-outlet>

    @if (pwa.canInstall()) {
      <div class="pwa-install-banner">
        <span class="banner-text">📱 Installa FinanceTracker sul tuo dispositivo</span>
        <div class="banner-actions">
          <button class="pwa-btn pwa-btn-install" (click)="pwa.promptInstall()">Installa</button>
          <button class="pwa-btn pwa-btn-dismiss" (click)="pwa.dismissInstall()">✕</button>
        </div>
      </div>
    }
  `
})
export class AppComponent {
  pwa = inject(PwaService);
}
