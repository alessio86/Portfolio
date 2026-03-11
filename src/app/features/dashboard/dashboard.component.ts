import { Component, inject, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AuthStore, ExpenseStore, RecurringStore } from '@data/store';
import { ExpenseRepository, RecurringRepository } from '@data/repositories';
import { NotificationService } from '@core/services/notification.service';
import { EuroCurrencyPipe } from '@shared/pipes/euro-currency.pipe';
import { startOfMonth, endOfMonth, startOfYear, endOfYear, formatDateIT, daysDiff, getMonthNames } from '@shared/utils/date.utils';
import { Category } from '@data/models';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TagModule } from 'primeng/tag';
import { SkeletonModule } from 'primeng/skeleton';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule, EuroCurrencyPipe,
    CardModule, ButtonModule, ChartModule, DialogModule, InputTextModule,
    InputNumberModule, DropdownModule, CalendarModule, TagModule,
    SkeletonModule, RippleModule, TooltipModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="ft-page ft-animate-in">
      <div class="ft-page-header">
        <h1 class="ft-page-title">Dashboard</h1>
        <button pButton pRipple label="Spesa rapida" icon="pi pi-plus"
                class="p-button-sm" (click)="showQuickExpense.set(true)"></button>
      </div>

      <!-- Stats Cards -->
      <div class="stats-grid">
        <div class="ft-stat-card">
          <div class="stat-icon" style="background: rgba(239, 68, 68, 0.15);">
            <i class="pi pi-wallet" style="color: #ef4444;"></i>
          </div>
          <div class="stat-content">
            <div class="stat-value">{{ monthlyExpenses() | euroCurrency }}</div>
            <div class="stat-label">Spese questo mese</div>
          </div>
        </div>

        <div class="ft-stat-card">
          <div class="stat-icon" style="background: rgba(59, 130, 246, 0.15);">
            <i class="pi pi-replay" style="color: #3b82f6;"></i>
          </div>
          <div class="stat-content">
            <div class="stat-value">{{ recurringStore.monthlyTotal() | euroCurrency }}</div>
            <div class="stat-label">Ricorrenti / mese</div>
          </div>
        </div>

        <div class="ft-stat-card">
          <div class="stat-icon" style="background: rgba(245, 158, 11, 0.15);">
            <i class="pi pi-calendar" style="color: #f59e0b;"></i>
          </div>
          <div class="stat-content">
            <div class="stat-value">{{ yearlyExpenses() | euroCurrency }}</div>
            <div class="stat-label">Spese annuali</div>
          </div>
        </div>

        <div class="ft-stat-card">
          <div class="stat-icon" style="background: rgba(34, 197, 94, 0.15);">
            <i class="pi pi-check-circle" style="color: #22c55e;"></i>
          </div>
          <div class="stat-content">
            <div class="stat-value">{{ recurringStore.activeCount() }}</div>
            <div class="stat-label">Abbonamenti attivi</div>
          </div>
        </div>
      </div>

      <!-- Overdue + Upcoming -->
      @if (recurringStore.overduePayments().length > 0) {
        <div class="section-card overdue-section">
          <h3><i class="pi pi-exclamation-triangle"></i> Pagamenti scaduti</h3>
          <div class="payments-list">
            @for (payment of recurringStore.overduePayments(); track payment.id) {
              <div class="payment-item overdue">
                <div class="payment-info">
                  <span class="payment-name">{{ payment.name }}</span>
                  <span class="payment-due">Scaduto il {{ formatDate(payment.nextDueDate) }}</span>
                </div>
                <span class="payment-amount">{{ payment.amount | euroCurrency }}</span>
              </div>
            }
          </div>
        </div>
      }

      <div class="charts-grid">
        <!-- Category Chart -->
        <div class="ft-card">
          <h3 style="margin-bottom: 1rem;">Spese per categoria</h3>
          @if (categoryChartData()) {
            <p-chart type="doughnut" [data]="categoryChartData()!" [options]="doughnutOptions"
                     [style]="{ width: '100%', maxWidth: '300px', margin: '0 auto' }"></p-chart>
          } @else {
            <p style="color: var(--ft-text-muted); text-align: center; padding: 2rem 0;">
              Nessuna spesa questo mese
            </p>
          }
        </div>

        <!-- Monthly Trend Chart -->
        <div class="ft-card">
          <h3 style="margin-bottom: 1rem;">Andamento mensile</h3>
          @if (trendChartData()) {
            <p-chart type="bar" [data]="trendChartData()!" [options]="barOptions"
                     [style]="{ width: '100%' }"></p-chart>
          } @else {
            <p style="color: var(--ft-text-muted); text-align: center; padding: 2rem 0;">
              Dati insufficienti
            </p>
          }
        </div>
      </div>

      <!-- Upcoming Payments -->
      <div class="ft-card" style="margin-top: 1.5rem;">
        <div class="section-header">
          <h3>Prossimi pagamenti</h3>
          <a routerLink="/recurring" class="see-all">Vedi tutti →</a>
        </div>
        @if (recurringStore.upcomingPayments().length > 0) {
          <div class="payments-list">
            @for (payment of recurringStore.upcomingPayments().slice(0, 5); track payment.id) {
              <div class="payment-item">
                <div class="payment-info">
                  <span class="payment-name">{{ payment.name }}</span>
                  <span class="payment-due">
                    {{ formatDate(payment.nextDueDate) }}
                    <span class="days-badge">tra {{ getDaysUntil(payment.nextDueDate) }} gg</span>
                  </span>
                </div>
                <span class="payment-amount">{{ payment.amount | euroCurrency }}</span>
              </div>
            }
          </div>
        } @else {
          <p style="color: var(--ft-text-muted); padding: 1rem 0;">Nessun pagamento in scadenza nei prossimi 30 giorni</p>
        }
      </div>

      <!-- Recent Expenses -->
      <div class="ft-card" style="margin-top: 1.5rem;">
        <div class="section-header">
          <h3>Spese recenti</h3>
          <a routerLink="/expenses" class="see-all">Vedi tutte →</a>
        </div>
        @if (expenseStore.recentExpenses().length > 0) {
          <div class="payments-list">
            @for (expense of expenseStore.recentExpenses().slice(0, 5); track expense.id) {
              <div class="payment-item">
                <div class="payment-info">
                  <span class="payment-name">{{ expense.description }}</span>
                  <span class="payment-due">{{ formatDate(expense.date) }} · {{ getCategoryName(expense.categoryId) }}</span>
                </div>
                <span class="payment-amount expense-amount">-{{ expense.amount | euroCurrency }}</span>
              </div>
            }
          </div>
        } @else {
          <p style="color: var(--ft-text-muted); padding: 1rem 0;">Nessuna spesa registrata</p>
        }
      </div>
    </div>

    <!-- Quick Expense Dialog -->
    <p-dialog header="Spesa rapida" [(visible)]="showQuickExpense" [modal]="true"
              [style]="{ width: '95vw', maxWidth: '450px' }" [draggable]="false">
      <form [formGroup]="quickExpenseForm" (ngSubmit)="saveQuickExpense()">
        <div class="field">
          <label>Descrizione</label>
          <input pInputText formControlName="description" placeholder="Es: Pranzo, Benzina..." class="w-full" />
        </div>
        <div class="field">
          <label>Importo (€)</label>
          <p-inputNumber formControlName="amount" mode="currency" currency="EUR" locale="it-IT"
                         [minFractionDigits]="2" [maxFractionDigits]="2" class="w-full"
                         inputStyleClass="w-full">
          </p-inputNumber>
        </div>
        <div class="field">
          <label>Categoria</label>
          <p-dropdown formControlName="categoryId" [options]="categoryOptions()"
                      optionLabel="name" optionValue="id"
                      placeholder="Seleziona categoria" styleClass="w-full">
          </p-dropdown>
        </div>
        <div class="field">
          <label>Data</label>
          <p-calendar formControlName="date" dateFormat="dd/mm/yy" [showIcon]="true"
                      styleClass="w-full" inputStyleClass="w-full">
          </p-calendar>
        </div>
        <div style="display: flex; justify-content: flex-end; gap: 0.5rem; margin-top: 1.5rem;">
          <button pButton type="button" label="Annulla" class="p-button-text"
                  (click)="showQuickExpense.set(false)"></button>
          <button pButton type="submit" label="Salva" icon="pi pi-check"
                  [disabled]="quickExpenseForm.invalid"></button>
        </div>
      </form>
    </p-dialog>
  `,
  styles: [`
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .charts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 1.5rem;
    }

    .section-card {
      background: var(--ft-bg-card);
      border: 1px solid var(--ft-border);
      border-radius: var(--ft-border-radius);
      padding: 1.25rem;
      margin-bottom: 1.5rem;
    }

    .overdue-section {
      border-color: rgba(239, 68, 68, 0.4);
      background: rgba(239, 68, 68, 0.05);
    }

    .overdue-section h3 {
      color: #ef4444;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .see-all {
      font-size: 0.875rem;
      color: var(--ft-accent);
      font-weight: 500;
    }

    .payments-list {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .payment-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem;
      border-radius: 8px;
      background: var(--ft-bg-primary);
      transition: var(--ft-transition);
    }

    .payment-item:hover { background: var(--ft-bg-card-hover); }

    .payment-item.overdue {
      background: rgba(239, 68, 68, 0.08);
      border-left: 3px solid #ef4444;
    }

    .payment-info { display: flex; flex-direction: column; gap: 2px; }
    .payment-name { font-weight: 600; font-size: 0.9375rem; }
    .payment-due { font-size: 0.8125rem; color: var(--ft-text-secondary); }
    .payment-amount { font-weight: 700; font-size: 1rem; white-space: nowrap; }
    .expense-amount { color: #ef4444; }

    .days-badge {
      display: inline-block;
      background: rgba(59, 130, 246, 0.15);
      color: var(--ft-accent);
      font-size: 0.75rem;
      padding: 1px 6px;
      border-radius: 4px;
      margin-left: 0.25rem;
      font-weight: 600;
    }

    .field { margin-bottom: 1rem; }
    .field label {
      display: block; font-weight: 500; margin-bottom: 0.5rem;
      font-size: 0.875rem; color: var(--ft-text-secondary);
    }
    .w-full { width: 100%; }

    @media (max-width: 768px) {
      .stats-grid { grid-template-columns: repeat(2, 1fr); }
      .charts-grid { grid-template-columns: 1fr; }
    }

    @media (max-width: 480px) {
      .stats-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class DashboardComponent implements OnInit {
  authStore = inject(AuthStore);
  expenseStore = inject(ExpenseStore);
  recurringStore = inject(RecurringStore);
  private expenseRepo = inject(ExpenseRepository);
  private recurringRepo = inject(RecurringRepository);
  private notificationService = inject(NotificationService);
  private fb = inject(FormBuilder);

  showQuickExpense = signal(false);
  monthlyExpenses = signal(0);
  yearlyExpenses = signal(0);
  categoryChartData = signal<any>(null);
  trendChartData = signal<any>(null);

  categoryOptions = signal<Category[]>([]);

  doughnutOptions: any = {
    plugins: {
      legend: { position: 'bottom', labels: { color: '#94a3b8', padding: 12, font: { size: 11 } } }
    },
    responsive: true,
    maintainAspectRatio: true
  };

  barOptions: any = {
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(148, 163, 184, 0.1)' } },
      y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(148, 163, 184, 0.1)' } }
    },
    responsive: true,
    maintainAspectRatio: false
  };

  quickExpenseForm = this.fb.nonNullable.group({
    description: ['', Validators.required],
    amount: [0, [Validators.required, Validators.min(0.01)]],
    categoryId: ['', Validators.required],
    date: [new Date(), Validators.required]
  });

  async ngOnInit(): Promise<void> {
    const userId = this.authStore.userId();
    if (!userId) return;

    this.categoryOptions.set(this.authStore.categories());

    // Load data
    await this.loadData(userId);

    // Notifications
    await this.notificationService.requestPermission();
    await this.notificationService.checkAndNotify();
  }

  private async loadData(userId: string): Promise<void> {
    const now = new Date();

    // Load expenses
    const monthStart = startOfMonth(now);
    const monthEnd = endOfMonth(now);
    const monthExpenses = await this.expenseRepo.getByDateRange(userId, monthStart, monthEnd);
    this.expenseStore.setExpenses(monthExpenses);
    this.monthlyExpenses.set(monthExpenses.reduce((s, e) => s + e.amount, 0));

    const yearStart = startOfYear(now);
    const yearEnd = endOfYear(now);
    const yearExpenses = await this.expenseRepo.getByDateRange(userId, yearStart, yearEnd);
    this.yearlyExpenses.set(yearExpenses.reduce((s, e) => s + e.amount, 0));

    // Load recurring
    const payments = await this.recurringRepo.getAll(userId);
    this.recurringStore.setPayments(payments);

    // Build charts
    this.buildCategoryChart(monthExpenses);
    await this.buildTrendChart(userId, now.getFullYear());
  }

  private buildCategoryChart(expenses: any[]): void {
    const categories = this.authStore.categories();
    const catTotals = new Map<string, number>();
    expenses.forEach(e => {
      catTotals.set(e.categoryId, (catTotals.get(e.categoryId) || 0) + e.amount);
    });

    if (catTotals.size === 0) {
      this.categoryChartData.set(null);
      return;
    }

    const labels: string[] = [];
    const data: number[] = [];
    const colors: string[] = [];

    catTotals.forEach((total, catId) => {
      const cat = categories.find(c => c.id === catId);
      labels.push(cat?.name || catId);
      data.push(Math.round(total * 100) / 100);
      colors.push(cat?.color || '#64748b');
    });

    this.categoryChartData.set({
      labels,
      datasets: [{ data, backgroundColor: colors, borderWidth: 0, hoverOffset: 8 }]
    });
  }

  private async buildTrendChart(userId: string, year: number): Promise<void> {
    const monthNames = getMonthNames();
    const totals = await this.expenseRepo.getMonthlyTotals(userId, year);

    if (totals.every(t => t === 0)) {
      this.trendChartData.set(null);
      return;
    }

    this.trendChartData.set({
      labels: monthNames.map(m => m.substring(0, 3)),
      datasets: [{
        label: 'Spese',
        data: totals.map(t => Math.round(t * 100) / 100),
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderRadius: 6,
        borderSkipped: false
      }]
    });
  }

  async saveQuickExpense(): Promise<void> {
    if (this.quickExpenseForm.invalid) return;

    const userId = this.authStore.userId();
    const { description, amount, categoryId, date } = this.quickExpenseForm.getRawValue();

    const expense = await this.expenseRepo.create({
      userId,
      description,
      amount,
      categoryId,
      tags: [],
      date,
      notes: ''
    });

    this.expenseStore.addExpense(expense);
    this.showQuickExpense.set(false);
    this.quickExpenseForm.reset({ date: new Date(), amount: 0 });

    // Refresh monthly total
    this.monthlyExpenses.update(v => v + amount);
    this.yearlyExpenses.update(v => v + amount);
  }

  getCategoryName(id: string): string {
    return this.authStore.categories().find(c => c.id === id)?.name || id;
  }

  formatDate(date: Date): string {
    return formatDateIT(date);
  }

  getDaysUntil(date: Date): number {
    return Math.max(0, daysDiff(new Date(), date));
  }
}
