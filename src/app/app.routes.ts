import { Routes } from '@angular/router';
import { authGuard, guestGuard } from '@core/guards/auth.guard';
import { LayoutComponent } from '@shared/components/layout/layout.component';

export const routes: Routes = [
  {
    path: 'login',
    canActivate: [guestGuard],
    loadComponent: () => import('@core/auth/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    canActivate: [guestGuard],
    loadComponent: () => import('@core/auth/register.component').then(m => m.RegisterComponent)
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('@features/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'recurring',
        loadComponent: () => import('@features/recurring/recurring.component').then(m => m.RecurringComponent)
      },
      {
        path: 'expenses',
        loadComponent: () => import('@features/expenses/expenses.component').then(m => m.ExpensesComponent)
      },
      {
        path: 'calendar',
        loadComponent: () => import('@features/calendar/calendar.component').then(m => m.CalendarComponent)
      },
      {
        path: 'statistics',
        loadComponent: () => import('@features/statistics/statistics.component').then(m => m.StatisticsComponent)
      },
      {
        path: 'history',
        loadComponent: () => import('@features/history/history.component').then(m => m.HistoryComponent)
      },
      {
        path: 'settings',
        loadComponent: () => import('@features/settings/settings.component').then(m => m.SettingsComponent)
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'login' }
];
