import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthStore } from '@data/store';
import { AuthService } from '@core/auth/auth.service';
import { PwaService } from '@core/services/pwa.service';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { AvatarModule } from 'primeng/avatar';

interface NavItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule, SidebarModule, RippleModule, TooltipModule, AvatarModule],
  template: `
    <!-- Mobile Topbar -->
    <div class="topbar">
      <button pButton pRipple icon="pi pi-bars" class="p-button-text p-button-plain topbar-menu-btn"
              (click)="sidebarVisible.set(true)"></button>
      <span class="topbar-title">💰 FinanceTracker</span>
      <div class="topbar-right">
        <p-avatar [label]="authStore.displayName().charAt(0).toUpperCase()"
                  shape="circle" size="normal"
                  [style]="{ 'background-color': 'var(--ft-accent)', 'color': 'white' }">
        </p-avatar>
      </div>
    </div>

    <!-- Sidebar (mobile overlay + desktop permanent) -->
    <p-sidebar [(visible)]="sidebarVisible" [modal]="true" [showCloseIcon]="false"
               styleClass="sidebar-mobile" [style]="{ width: '280px' }"
               [baseZIndex]="1000" [dismissible]="true" [closeOnEscape]="true">
      <ng-template pTemplate="content">
        <ng-container *ngTemplateOutlet="sidebarContent"></ng-container>
      </ng-template>
    </p-sidebar>

    <aside class="sidebar-desktop">
      <ng-container *ngTemplateOutlet="sidebarContent"></ng-container>
    </aside>

    <!-- Sidebar Content Template -->
    <ng-template #sidebarContent>
      <div class="sidebar-header">
        <span class="sidebar-logo">💰</span>
        <span class="sidebar-brand">FinanceTracker</span>
      </div>
      <nav class="sidebar-nav">
        @for (item of navItems; track item.route) {
          <a [routerLink]="item.route" routerLinkActive="active"
             class="sidebar-nav-item" (click)="sidebarVisible.set(false)">
            <i [class]="item.icon"></i>
            <span>{{ item.label }}</span>
          </a>
        }
      </nav>
      <div class="sidebar-footer">
        <div class="sidebar-user">
          <p-avatar [label]="authStore.displayName().charAt(0).toUpperCase()"
                    shape="circle" size="normal"
                    [style]="{ 'background-color': 'var(--ft-accent)', 'color': 'white' }">
          </p-avatar>
          <div class="sidebar-user-info">
            <span class="user-name">{{ authStore.displayName() }}</span>
          </div>
        </div>
        <button pButton pRipple icon="pi pi-sign-out" label="Esci"
                class="p-button-text p-button-danger p-button-sm sidebar-logout"
                (click)="onLogout()"></button>
      </div>
    </ng-template>

    <!-- Main Content -->
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>

    <!-- PWA Install Banner -->
    @if (pwaService.canInstall()) {
      <div class="pwa-install-banner">
        <span class="banner-text">📱 Installa FinanceTracker sul tuo dispositivo!</span>
        <div class="banner-actions">
          <button pButton label="Installa" class="p-button-sm p-button-contrast"
                  (click)="pwaService.promptInstall()"></button>
          <button pButton icon="pi pi-times" class="p-button-sm p-button-text"
                  (click)="pwaService.dismissInstall()"></button>
        </div>
      </div>
    }
  `,
  styles: [`
    :host {
      display: flex;
      min-height: 100vh;
    }

    .topbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: var(--ft-topbar-height);
      background: var(--ft-bg-secondary);
      border-bottom: 1px solid var(--ft-border);
      display: flex;
      align-items: center;
      padding: 0 1rem;
      z-index: 100;
      gap: 0.75rem;
    }

    .topbar-title {
      font-size: 1.125rem;
      font-weight: 700;
      flex: 1;
    }

    .topbar-menu-btn {
      font-size: 1.25rem;
    }

    /* Desktop sidebar */
    .sidebar-desktop {
      display: none;
      width: var(--ft-sidebar-width);
      background: var(--ft-bg-secondary);
      border-right: 1px solid var(--ft-border);
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      padding: 1.5rem 0;
      overflow-y: auto;
      z-index: 200;
    }

    @media (min-width: 992px) {
      .sidebar-desktop { display: flex; flex-direction: column; }
      .topbar { display: none; }
      .main-content { margin-left: var(--ft-sidebar-width); padding-top: 0; }
    }

    .sidebar-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0 1.5rem 1.5rem;
      border-bottom: 1px solid var(--ft-border);
      margin-bottom: 0.5rem;
    }

    .sidebar-logo { font-size: 1.75rem; }
    .sidebar-brand { font-size: 1.25rem; font-weight: 700; }

    .sidebar-nav {
      flex: 1;
      padding: 0.5rem 0.75rem;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .sidebar-nav-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 1rem;
      border-radius: 8px;
      color: var(--ft-text-secondary);
      transition: var(--ft-transition);
      font-weight: 500;
      font-size: 0.9375rem;
      text-decoration: none;
    }

    .sidebar-nav-item:hover {
      background: var(--ft-bg-card-hover);
      color: var(--ft-text-primary);
    }

    .sidebar-nav-item.active {
      background: rgba(59, 130, 246, 0.15);
      color: var(--ft-accent);
    }

    .sidebar-nav-item i { font-size: 1.125rem; width: 20px; text-align: center; }

    .sidebar-footer {
      padding: 1rem 1.25rem;
      border-top: 1px solid var(--ft-border);
      margin-top: auto;
    }

    .sidebar-user {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.75rem;
    }

    .user-name { font-weight: 600; font-size: 0.9375rem; }

    .sidebar-logout { width: 100%; justify-content: flex-start; }

    /* Main content */
    .main-content {
      flex: 1;
      padding-top: var(--ft-topbar-height);
      min-height: 100vh;
      width: 100%;
    }

    @media (min-width: 992px) {
      .main-content {
        padding-top: 0;
      }
    }
  `]
})
export class LayoutComponent {
  authStore = inject(AuthStore);
  pwaService = inject(PwaService);
  private authService = inject(AuthService);

  sidebarVisible = signal(false);

  navItems: NavItem[] = [
    { label: 'Dashboard', icon: 'pi pi-home', route: '/dashboard' },
    { label: 'Pagamenti Ricorrenti', icon: 'pi pi-replay', route: '/recurring' },
    { label: 'Spese', icon: 'pi pi-wallet', route: '/expenses' },
    { label: 'Calendario', icon: 'pi pi-calendar', route: '/calendar' },
    { label: 'Statistiche', icon: 'pi pi-chart-bar', route: '/statistics' },
    { label: 'Storico', icon: 'pi pi-history', route: '/history' },
    { label: 'Impostazioni', icon: 'pi pi-cog', route: '/settings' }
  ];

  onLogout(): void {
    this.sidebarVisible.set(false);
    this.authService.logout();
  }
}
