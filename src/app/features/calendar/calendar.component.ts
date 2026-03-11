import { Component, inject, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthStore } from '@data/store';
import { ExpenseRepository, RecurringRepository } from '@data/repositories';
import { EuroCurrencyPipe } from '@shared/pipes/euro-currency.pipe';
import { formatDateIT, startOfMonth, endOfMonth, isSameDay } from '@shared/utils/date.utils';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { RippleModule } from 'primeng/ripple';

interface CalendarEvent {
  date: Date;
  type: 'expense' | 'recurring';
  name: string;
  amount: number;
  categoryId: string;
  color: string;
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, FormsModule, EuroCurrencyPipe, CalendarModule, ButtonModule, TagModule, RippleModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="ft-page ft-animate-in">
      <div class="ft-page-header">
        <h1 class="ft-page-title">Calendario Finanziario</h1>
      </div>

      <div class="calendar-layout">
        <div class="calendar-widget">
          <p-calendar [(ngModel)]="selectedDate" [inline]="true" styleClass="w-full"
                      (onMonthChange)="onMonthChange($event)"
                      (onSelect)="onDateSelect($event)">
          </p-calendar>
        </div>

        <div class="calendar-events">
          <h3>{{ selectedDate | date:'dd MMMM yyyy':'':'it' }}</h3>

          @if (selectedDayEvents().length > 0) {
            <div class="events-list">
              @for (event of selectedDayEvents(); track $index) {
                <div class="event-item" [style.border-left-color]="event.color">
                  <div class="event-info">
                    <span class="event-name">{{ event.name }}</span>
                    <span class="event-type">
                      {{ event.type === 'recurring' ? '🔄 Ricorrente' : '💸 Spesa' }}
                      · {{ getCategoryName(event.categoryId) }}
                    </span>
                  </div>
                  <span class="event-amount">{{ event.amount | euroCurrency }}</span>
                </div>
              }
            </div>
            <div class="events-total">
              Totale giorno: <strong>{{ dayTotal() | euroCurrency }}</strong>
            </div>
          } @else {
            <p class="no-events">Nessun evento per questo giorno</p>
          }

          <!-- Month summary -->
          <div class="month-summary">
            <h4>Riepilogo mese</h4>
            <div class="month-stats">
              <div class="month-stat">
                <span class="stat-val">{{ monthEvents().length }}</span>
                <span class="stat-lbl">Eventi</span>
              </div>
              <div class="month-stat">
                <span class="stat-val">{{ monthTotal() | euroCurrency }}</span>
                <span class="stat-lbl">Totale mese</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .calendar-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      align-items: start;
    }

    .calendar-widget {
      background: var(--ft-bg-card);
      border: 1px solid var(--ft-border);
      border-radius: var(--ft-border-radius);
      padding: 1rem;
    }

    .calendar-events {
      background: var(--ft-bg-card);
      border: 1px solid var(--ft-border);
      border-radius: var(--ft-border-radius);
      padding: 1.25rem;
    }

    .calendar-events h3 { margin-bottom: 1rem; text-transform: capitalize; }

    .events-list { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1rem; }

    .event-item {
      display: flex; justify-content: space-between; align-items: center;
      padding: 0.75rem; background: var(--ft-bg-primary);
      border-radius: 8px; border-left: 3px solid var(--ft-accent);
    }

    .event-info { display: flex; flex-direction: column; }
    .event-name { font-weight: 600; font-size: 0.9375rem; }
    .event-type { font-size: 0.8125rem; color: var(--ft-text-secondary); }
    .event-amount { font-weight: 700; white-space: nowrap; }

    .events-total {
      padding: 0.75rem; background: var(--ft-bg-primary);
      border-radius: 8px; text-align: right;
      font-size: 0.9375rem;
    }

    .events-total strong { color: var(--ft-accent); }

    .no-events { color: var(--ft-text-muted); padding: 1rem 0; }

    .month-summary {
      margin-top: 1.5rem; padding-top: 1rem;
      border-top: 1px solid var(--ft-border);
    }

    .month-summary h4 { margin-bottom: 0.75rem; }

    .month-stats { display: flex; gap: 1rem; }

    .month-stat {
      flex: 1; text-align: center; padding: 0.75rem;
      background: var(--ft-bg-primary); border-radius: 8px;
    }

    .stat-val { display: block; font-weight: 700; font-size: 1.125rem; }
    .stat-lbl { font-size: 0.8125rem; color: var(--ft-text-secondary); }

    .w-full { width: 100%; }

    @media (max-width: 768px) {
      .calendar-layout { grid-template-columns: 1fr; }
    }
  `]
})
export class CalendarComponent implements OnInit {
  private authStore = inject(AuthStore);
  private expenseRepo = inject(ExpenseRepository);
  private recurringRepo = inject(RecurringRepository);

  selectedDate = new Date();
  allEvents = signal<CalendarEvent[]>([]);
  monthEvents = signal<CalendarEvent[]>([]);
  selectedDayEvents = signal<CalendarEvent[]>([]);
  dayTotal = signal(0);
  monthTotal = signal(0);

  async ngOnInit(): Promise<void> {
    await this.loadMonthEvents(this.selectedDate);
    this.updateSelectedDay();
  }

  async onMonthChange(event: any): Promise<void> {
    const date = new Date(event.year, event.month - 1, 1);
    await this.loadMonthEvents(date);
  }

  onDateSelect(date: Date): void {
    this.selectedDate = date;
    this.updateSelectedDay();
  }

  private async loadMonthEvents(date: Date): Promise<void> {
    const userId = this.authStore.userId();
    if (!userId) return;

    const from = startOfMonth(date);
    const to = endOfMonth(date);
    const categories = this.authStore.categories();
    const events: CalendarEvent[] = [];

    // Expenses
    const expenses = await this.expenseRepo.getByDateRange(userId, from, to);
    for (const exp of expenses) {
      const cat = categories.find(c => c.id === exp.categoryId);
      events.push({
        date: new Date(exp.date),
        type: 'expense',
        name: exp.description,
        amount: exp.amount,
        categoryId: exp.categoryId,
        color: cat?.color || '#64748b'
      });
    }

    // Recurring payments due this month
    const recurring = await this.recurringRepo.getActive(userId);
    for (const rec of recurring) {
      const dueDate = new Date(rec.nextDueDate);
      if (dueDate >= from && dueDate <= to) {
        const cat = categories.find(c => c.id === rec.categoryId);
        events.push({
          date: dueDate,
          type: 'recurring',
          name: rec.name,
          amount: rec.amount,
          categoryId: rec.categoryId,
          color: cat?.color || '#3b82f6'
        });
      }
    }

    this.allEvents.set(events);
    this.monthEvents.set(events);
    this.monthTotal.set(events.reduce((s, e) => s + e.amount, 0));
    this.updateSelectedDay();
  }

  private updateSelectedDay(): void {
    const dayEvents = this.allEvents().filter(e => isSameDay(e.date, this.selectedDate));
    this.selectedDayEvents.set(dayEvents);
    this.dayTotal.set(dayEvents.reduce((s, e) => s + e.amount, 0));
  }

  getCategoryName(id: string): string {
    return this.authStore.categories().find(c => c.id === id)?.name || id;
  }
}
