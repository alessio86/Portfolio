import { Component, inject, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthStore } from '@data/store';
import { ExpenseRepository, RecurringRepository } from '@data/repositories';
import { EuroCurrencyPipe } from '@shared/pipes/euro-currency.pipe';
import { startOfMonth, endOfMonth, startOfYear, endOfYear, getMonthNames } from '@shared/utils/date.utils';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule, EuroCurrencyPipe, ChartModule, DropdownModule, ButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="ft-page ft-animate-in">
      <div class="ft-page-header">
        <h1 class="ft-page-title">Statistiche</h1>
        <p-dropdown [options]="yearOptions" [(ngModel)]="selectedYear"
                    (onChange)="loadStats()" styleClass="year-select"></p-dropdown>
      </div>

      <!-- Summary cards -->
      <div class="stats-summary">
        <div class="ft-stat-card">
          <div class="stat-icon" style="background: rgba(239, 68, 68, 0.15);">
            <i class="pi pi-wallet" style="color: #ef4444;"></i>
          </div>
          <div class="stat-content">
            <div class="stat-value">{{ yearlyTotal() | euroCurrency }}</div>
            <div class="stat-label">Spese annuali</div>
          </div>
        </div>
        <div class="ft-stat-card">
          <div class="stat-icon" style="background: rgba(59, 130, 246, 0.15);">
            <i class="pi pi-chart-line" style="color: #3b82f6;"></i>
          </div>
          <div class="stat-content">
            <div class="stat-value">{{ monthlyAvg() | euroCurrency }}</div>
            <div class="stat-label">Media mensile</div>
          </div>
        </div>
        <div class="ft-stat-card">
          <div class="stat-icon" style="background: rgba(34, 197, 94, 0.15);">
            <i class="pi pi-replay" style="color: #22c55e;"></i>
          </div>
          <div class="stat-content">
            <div class="stat-value">{{ recurringYearlyTotal() | euroCurrency }}</div>
            <div class="stat-label">Ricorrenti annuali</div>
          </div>
        </div>
      </div>

      <!-- Charts -->
      <div class="charts-grid">
        <div class="ft-card">
          <h3>Andamento spese mensili</h3>
          @if (monthlyChartData()) {
            <p-chart type="line" [data]="monthlyChartData()!" [options]="lineOptions"
                     [style]="{ width: '100%', height: '300px' }"></p-chart>
          }
        </div>

        <div class="ft-card">
          <h3>Spese per categoria</h3>
          @if (categoryChartData()) {
            <p-chart type="pie" [data]="categoryChartData()!" [options]="pieOptions"
                     [style]="{ width: '100%', maxWidth: '350px', margin: '0 auto' }"></p-chart>
          }
        </div>

        <div class="ft-card">
          <h3>Ricorrenti vs Singole</h3>
          @if (typeComparisonData()) {
            <p-chart type="bar" [data]="typeComparisonData()!" [options]="barOptions"
                     [style]="{ width: '100%', height: '300px' }"></p-chart>
          }
        </div>

        <div class="ft-card">
          <h3>Top categorie</h3>
          <div class="category-ranking">
            @for (cat of topCategories(); track cat.id) {
              <div class="ranking-item">
                <div class="ranking-bar-wrapper">
                  <span class="ranking-name">{{ cat.name }}</span>
                  <div class="ranking-bar" [style.width.%]="cat.percentage" [style.background]="cat.color"></div>
                </div>
                <span class="ranking-value">{{ cat.total | euroCurrency }}</span>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .stats-summary {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .charts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 1.5rem;
    }

    .ft-card h3 { margin-bottom: 1rem; }

    .year-select { min-width: 120px; }

    .category-ranking { display: flex; flex-direction: column; gap: 0.75rem; }

    .ranking-item {
      display: flex; align-items: center; gap: 1rem;
    }

    .ranking-bar-wrapper { flex: 1; }
    .ranking-name { display: block; font-size: 0.875rem; margin-bottom: 4px; font-weight: 500; }

    .ranking-bar {
      height: 8px; border-radius: 4px;
      min-width: 4px; transition: width 0.5s ease;
    }

    .ranking-value { font-weight: 700; font-size: 0.9375rem; white-space: nowrap; }

    @media (max-width: 768px) {
      .charts-grid { grid-template-columns: 1fr; }
      .stats-summary { grid-template-columns: 1fr; }
    }
  `]
})
export class StatisticsComponent implements OnInit {
  private authStore = inject(AuthStore);
  private expenseRepo = inject(ExpenseRepository);
  private recurringRepo = inject(RecurringRepository);

  selectedYear = new Date().getFullYear();
  yearOptions = Array.from({ length: 5 }, (_, i) => ({
    label: String(new Date().getFullYear() - i),
    value: new Date().getFullYear() - i
  }));

  yearlyTotal = signal(0);
  monthlyAvg = signal(0);
  recurringYearlyTotal = signal(0);
  monthlyChartData = signal<any>(null);
  categoryChartData = signal<any>(null);
  typeComparisonData = signal<any>(null);
  topCategories = signal<{ id: string; name: string; color: string; total: number; percentage: number }[]>([]);

  lineOptions: any = {
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(148,163,184,0.1)' } },
      y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(148,163,184,0.1)' } }
    },
    responsive: true, maintainAspectRatio: false
  };

  pieOptions: any = {
    plugins: { legend: { position: 'bottom', labels: { color: '#94a3b8', padding: 12 } } },
    responsive: true, maintainAspectRatio: true
  };

  barOptions: any = {
    plugins: { legend: { labels: { color: '#94a3b8' } } },
    scales: {
      x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(148,163,184,0.1)' } },
      y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(148,163,184,0.1)' } }
    },
    responsive: true, maintainAspectRatio: false
  };

  async ngOnInit(): Promise<void> {
    await this.loadStats();
  }

  async loadStats(): Promise<void> {
    const userId = this.authStore.userId();
    if (!userId) return;
    const year = this.selectedYear;
    const categories = this.authStore.categories();
    const monthNames = getMonthNames();

    // Monthly totals
    const monthlyTotals = await this.expenseRepo.getMonthlyTotals(userId, year);
    const total = monthlyTotals.reduce((s, v) => s + v, 0);
    const nonZeroMonths = monthlyTotals.filter(t => t > 0).length || 1;

    this.yearlyTotal.set(total);
    this.monthlyAvg.set(total / nonZeroMonths);

    // Recurring yearly
    const recurringMonthly = await this.recurringRepo.getMonthlyRecurringTotal(userId);
    this.recurringYearlyTotal.set(recurringMonthly * 12);

    // Monthly chart
    this.monthlyChartData.set({
      labels: monthNames.map(m => m.substring(0, 3)),
      datasets: [{
        label: 'Spese',
        data: monthlyTotals.map(t => Math.round(t * 100) / 100),
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: '#3b82f6'
      }]
    });

    // Category chart
    const from = startOfYear(new Date(year, 0, 1));
    const to = endOfYear(new Date(year, 0, 1));
    const catTotals = await this.expenseRepo.getCategoryTotals(userId, from, to);

    const labels: string[] = [];
    const data: number[] = [];
    const colors: string[] = [];
    const topCats: any[] = [];

    const sorted = [...catTotals.entries()].sort((a, b) => b[1] - a[1]);
    const maxTotal = sorted.length > 0 ? sorted[0][1] : 1;

    sorted.forEach(([catId, catTotal]) => {
      const cat = categories.find(c => c.id === catId);
      labels.push(cat?.name || catId);
      data.push(Math.round(catTotal * 100) / 100);
      colors.push(cat?.color || '#64748b');
      topCats.push({
        id: catId,
        name: cat?.name || catId,
        color: cat?.color || '#64748b',
        total: catTotal,
        percentage: (catTotal / maxTotal) * 100
      });
    });

    this.categoryChartData.set(labels.length > 0 ? {
      labels, datasets: [{ data, backgroundColor: colors, borderWidth: 0 }]
    } : null);

    this.topCategories.set(topCats.slice(0, 8));

    // Recurring vs Single comparison
    const recurringHistTotals = [];
    const singleTotals = [];
    for (let m = 0; m < 12; m++) {
      const mFrom = new Date(year, m, 1);
      const mTo = new Date(year, m + 1, 0, 23, 59, 59);
      const hist = await this.recurringRepo.getHistoryByDateRange(userId, mFrom, mTo);
      recurringHistTotals.push(hist.reduce((s, h) => s + h.amount, 0));
      singleTotals.push(monthlyTotals[m]);
    }

    this.typeComparisonData.set({
      labels: monthNames.map(m => m.substring(0, 3)),
      datasets: [
        {
          label: 'Ricorrenti', data: recurringHistTotals.map(t => Math.round(t * 100) / 100),
          backgroundColor: 'rgba(59, 130, 246, 0.6)', borderRadius: 4
        },
        {
          label: 'Singole', data: singleTotals.map(t => Math.round(t * 100) / 100),
          backgroundColor: 'rgba(239, 68, 68, 0.6)', borderRadius: 4
        }
      ]
    });
  }
}
