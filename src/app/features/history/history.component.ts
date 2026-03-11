import { Component, inject, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthStore, RecurringStore, ExpenseStore } from '@data/store';
import { RecurringRepository, ExpenseRepository } from '@data/repositories';
import { EuroCurrencyPipe } from '@shared/pipes/euro-currency.pipe';
import { formatDateIT } from '@shared/utils/date.utils';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

interface HistoryItem {
  id: string;
  type: 'recurring' | 'expense';
  name: string;
  amount: number;
  categoryId: string;
  date: Date;
  extra?: string;
}

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, EuroCurrencyPipe, TabViewModule, ButtonModule, TagModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="ft-page ft-animate-in">
      <div class="ft-page-header">
        <h1 class="ft-page-title">Storico</h1>
      </div>

      <p-tabView>
        <p-tabPanel header="Pagamenti pagati">
          <div class="history-list">
            @for (item of recurringHistory(); track item.id) {
              <div class="history-item">
                <div class="history-left">
                  <div class="history-dot" [style.background]="getCategoryColor(item.categoryId)"></div>
                  <div class="history-info">
                    <span class="history-name">{{ item.recurringPaymentName }}</span>
                    <span class="history-meta">
                      Pagato il {{ formatDate(item.paidDate) }}
                      · Scadenza {{ formatDate(item.dueDate) }}
                      · {{ getCategoryName(item.categoryId) }}
                    </span>
                  </div>
                </div>
                <span class="history-amount">{{ item.amount | euroCurrency }}</span>
              </div>
            } @empty {
              <p class="empty-text">Nessun pagamento nello storico</p>
            }
          </div>
        </p-tabPanel>

        <p-tabPanel header="Tutte le spese">
          <div class="history-list">
            @for (expense of allExpenses(); track expense.id) {
              <div class="history-item">
                <div class="history-left">
                  <div class="history-dot" [style.background]="getCategoryColor(expense.categoryId)"></div>
                  <div class="history-info">
                    <span class="history-name">{{ expense.description }}</span>
                    <span class="history-meta">
                      {{ formatDate(expense.date) }} · {{ getCategoryName(expense.categoryId) }}
                    </span>
                  </div>
                </div>
                <span class="history-amount">{{ expense.amount | euroCurrency }}</span>
              </div>
            } @empty {
              <p class="empty-text">Nessuna spesa registrata</p>
            }
          </div>
        </p-tabPanel>
      </p-tabView>
    </div>
  `,
  styles: [`
    .history-list { display: flex; flex-direction: column; gap: 0.5rem; padding-top: 0.5rem; }

    .history-item {
      display: flex; justify-content: space-between; align-items: center;
      padding: 0.75rem 1rem; background: var(--ft-bg-primary);
      border-radius: 8px; transition: var(--ft-transition);
    }

    .history-item:hover { background: var(--ft-bg-card-hover); }

    .history-left { display: flex; align-items: center; gap: 0.75rem; flex: 1; min-width: 0; }
    .history-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
    .history-info { display: flex; flex-direction: column; min-width: 0; }
    .history-name { font-weight: 600; font-size: 0.9375rem; }
    .history-meta { font-size: 0.8125rem; color: var(--ft-text-secondary); }
    .history-amount { font-weight: 700; white-space: nowrap; }
    .empty-text { color: var(--ft-text-muted); padding: 2rem 0; text-align: center; }
  `]
})
export class HistoryComponent implements OnInit {
  private authStore = inject(AuthStore);
  private recurringRepo = inject(RecurringRepository);
  private expenseRepo = inject(ExpenseRepository);

  recurringHistory = signal<any[]>([]);
  allExpenses = signal<any[]>([]);

  async ngOnInit(): Promise<void> {
    const userId = this.authStore.userId();
    if (!userId) return;

    const history = await this.recurringRepo.getHistory(userId);
    this.recurringHistory.set(history);

    const expenses = await this.expenseRepo.getAll(userId);
    this.allExpenses.set(expenses);
  }

  getCategoryName(id: string): string {
    return this.authStore.categories().find(c => c.id === id)?.name || id;
  }

  getCategoryColor(id: string): string {
    return this.authStore.categories().find(c => c.id === id)?.color || '#64748b';
  }

  formatDate(d: Date): string { return formatDateIT(d); }
}
