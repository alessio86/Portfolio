import { Component, inject, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AuthStore, ExpenseStore } from '@data/store';
import { ExpenseRepository } from '@data/repositories';
import { Expense, ExpenseFilter, Category } from '@data/models';
import { EuroCurrencyPipe } from '@shared/pipes/euro-currency.pipe';
import { formatDateIT } from '@shared/utils/date.utils';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { InputTextarea } from 'primeng/inputtextarea';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, EuroCurrencyPipe,
    ButtonModule, DialogModule, InputTextModule, InputNumberModule,
    DropdownModule, CalendarModule, ChipsModule, InputTextarea,
    ConfirmDialogModule, ToastModule, RippleModule, AccordionModule
  ],
  providers: [ConfirmationService, MessageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="ft-page ft-animate-in">
      <div class="ft-page-header">
        <h1 class="ft-page-title">Spese</h1>
        <button pButton pRipple label="Nuova spesa" icon="pi pi-plus"
                class="p-button-sm" (click)="openDialog()"></button>
      </div>

      <!-- Filters -->
      <div class="filter-bar">
        <p-dropdown [options]="categoryFilterOptions()" optionLabel="name" optionValue="id"
                    placeholder="Tutte le categorie" [showClear]="true"
                    (onChange)="onFilterChange('category', $event.value)" styleClass="filter-dropdown">
        </p-dropdown>
        <p-calendar placeholder="Da" dateFormat="dd/mm/yy" [showIcon]="true"
                    (onSelect)="onFilterChange('dateFrom', $event)" styleClass="filter-calendar"
                    inputStyleClass="filter-input"></p-calendar>
        <p-calendar placeholder="A" dateFormat="dd/mm/yy" [showIcon]="true"
                    (onSelect)="onFilterChange('dateTo', $event)" styleClass="filter-calendar"
                    inputStyleClass="filter-input"></p-calendar>
        <span class="p-input-icon-left filter-search">
          <i class="pi pi-search"></i>
          <input pInputText placeholder="Cerca..." (input)="onSearchChange($event)" />
        </span>
      </div>

      <!-- Total -->
      <div class="total-bar">
        <span>Totale: <strong>{{ expenseStore.totalExpenses() | euroCurrency }}</strong></span>
        <span class="expense-count">{{ expenseStore.expenseCount() }} spese</span>
      </div>

      <!-- Expenses List -->
      <div class="expenses-list">
        @for (expense of filteredExpenses(); track expense.id) {
          <div class="expense-card">
            <div class="expense-left">
              <div class="expense-cat-dot" [style.background]="getCategoryColor(expense.categoryId)"></div>
              <div class="expense-info">
                <span class="expense-desc">{{ expense.description }}</span>
                <span class="expense-meta">
                  {{ formatDate(expense.date) }} · {{ getCategoryName(expense.categoryId) }}
                  @for (tag of expense.tags; track tag) {
                    <span class="expense-tag">#{{ tag }}</span>
                  }
                </span>
              </div>
            </div>
            <div class="expense-right">
              <span class="expense-amount">-{{ expense.amount | euroCurrency }}</span>
              <div class="expense-actions">
                <button pButton icon="pi pi-pencil" class="p-button-text p-button-sm"
                        (click)="openDialog(expense)"></button>
                <button pButton icon="pi pi-trash" class="p-button-text p-button-sm p-button-danger"
                        (click)="confirmDelete(expense)"></button>
              </div>
            </div>
          </div>
        } @empty {
          <div class="empty-state">
            <i class="pi pi-wallet" style="font-size: 3rem; color: var(--ft-text-muted);"></i>
            <p>Nessuna spesa trovata</p>
            <button pButton label="Aggiungi spesa" icon="pi pi-plus"
                    class="p-button-sm" (click)="openDialog()"></button>
          </div>
        }
      </div>
    </div>

    <!-- Create/Edit Dialog -->
    <p-dialog [header]="editingExpense() ? 'Modifica Spesa' : 'Nuova Spesa'"
              [(visible)]="showDialog" [modal]="true"
              [style]="{ width: '95vw', maxWidth: '480px' }" [draggable]="false">
      <form [formGroup]="form" (ngSubmit)="saveExpense()">
        <div class="field">
          <label>Descrizione</label>
          <input pInputText formControlName="description" placeholder="Descrizione spesa" class="w-full" />
        </div>
        <div class="form-row">
          <div class="field flex-1">
            <label>Importo (€)</label>
            <p-inputNumber formControlName="amount" mode="currency" currency="EUR" locale="it-IT"
                           [minFractionDigits]="2" inputStyleClass="w-full"></p-inputNumber>
          </div>
          <div class="field flex-1">
            <label>Data</label>
            <p-calendar formControlName="date" dateFormat="dd/mm/yy" [showIcon]="true"
                        styleClass="w-full" inputStyleClass="w-full"></p-calendar>
          </div>
        </div>
        <div class="field">
          <label>Categoria</label>
          <p-dropdown formControlName="categoryId" [options]="categoryOptions()"
                      optionLabel="name" optionValue="id"
                      placeholder="Seleziona categoria" styleClass="w-full"></p-dropdown>
        </div>
        <div class="field">
          <label>Tag</label>
          <p-chips formControlName="tags" placeholder="Aggiungi tag..." styleClass="w-full"></p-chips>
        </div>
        <div class="field">
          <label>Note</label>
          <textarea pInputTextarea formControlName="notes" rows="2" class="w-full"
                    placeholder="Note opzionali..."></textarea>
        </div>
        <div style="display: flex; justify-content: flex-end; gap: 0.5rem; margin-top: 1.5rem;">
          <button pButton type="button" label="Annulla" class="p-button-text"
                  (click)="showDialog.set(false)"></button>
          <button pButton type="submit" label="Salva" icon="pi pi-check"
                  [disabled]="form.invalid"></button>
        </div>
      </form>
    </p-dialog>

    <p-confirmDialog></p-confirmDialog>
    <p-toast></p-toast>
  `,
  styles: [`
    .filter-bar {
      display: flex; gap: 0.5rem; margin-bottom: 1rem; flex-wrap: wrap;
    }

    .filter-dropdown, .filter-calendar { min-width: 160px; }
    .filter-search input { width: 100%; }

    .total-bar {
      display: flex; justify-content: space-between; align-items: center;
      padding: 0.75rem 1rem; background: var(--ft-bg-card);
      border: 1px solid var(--ft-border); border-radius: 8px;
      margin-bottom: 1rem;
    }

    .total-bar strong { color: var(--ft-accent); }
    .expense-count { font-size: 0.8125rem; color: var(--ft-text-secondary); }

    .expenses-list { display: flex; flex-direction: column; gap: 0.5rem; }

    .expense-card {
      display: flex; justify-content: space-between; align-items: center;
      padding: 0.875rem 1rem; background: var(--ft-bg-card);
      border: 1px solid var(--ft-border); border-radius: 10px;
      transition: var(--ft-transition);
    }

    .expense-card:hover { box-shadow: var(--ft-shadow); }

    .expense-left { display: flex; align-items: center; gap: 0.75rem; flex: 1; min-width: 0; }

    .expense-cat-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }

    .expense-info { display: flex; flex-direction: column; min-width: 0; }
    .expense-desc { font-weight: 600; font-size: 0.9375rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .expense-meta { font-size: 0.8125rem; color: var(--ft-text-secondary); }
    .expense-tag {
      background: rgba(59, 130, 246, 0.1); color: var(--ft-accent);
      font-size: 0.6875rem; padding: 0 4px; border-radius: 3px; margin-left: 4px;
    }

    .expense-right { display: flex; align-items: center; gap: 0.5rem; flex-shrink: 0; }
    .expense-amount { font-weight: 700; color: #ef4444; white-space: nowrap; }
    .expense-actions { display: flex; }

    .empty-state {
      text-align: center; padding: 3rem 1rem; color: var(--ft-text-muted);
      display: flex; flex-direction: column; align-items: center; gap: 1rem;
    }

    .form-row { display: flex; gap: 1rem; }
    .flex-1 { flex: 1; }
    .field { margin-bottom: 1rem; }
    .field label { display: block; font-weight: 500; margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--ft-text-secondary); }
    .w-full { width: 100%; }

    @media (max-width: 480px) {
      .form-row { flex-direction: column; gap: 0; }
      .filter-bar { flex-direction: column; }
    }
  `]
})
export class ExpensesComponent implements OnInit {
  authStore = inject(AuthStore);
  expenseStore = inject(ExpenseStore);
  private expenseRepo = inject(ExpenseRepository);
  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);
  private fb = inject(FormBuilder);

  showDialog = signal(false);
  editingExpense = signal<Expense | null>(null);
  categoryOptions = signal<Category[]>([]);
  categoryFilterOptions = signal<Category[]>([]);
  filteredExpenses = signal<Expense[]>([]);

  private currentFilter: ExpenseFilter = {};

  form = this.fb.nonNullable.group({
    description: ['', Validators.required],
    amount: [0, [Validators.required, Validators.min(0.01)]],
    categoryId: ['', Validators.required],
    date: [new Date(), Validators.required],
    tags: [[] as string[]],
    notes: ['']
  });

  async ngOnInit(): Promise<void> {
    const categories = this.authStore.categories();
    this.categoryOptions.set(categories);
    this.categoryFilterOptions.set(categories);

    await this.loadExpenses();
  }

  private async loadExpenses(): Promise<void> {
    const userId = this.authStore.userId();
    if (!userId) return;

    const expenses = await this.expenseRepo.getFiltered(userId, this.currentFilter);
    this.expenseStore.setExpenses(expenses);
    this.filteredExpenses.set(expenses);
  }

  onFilterChange(type: string, value: any): void {
    switch (type) {
      case 'category': this.currentFilter.categoryId = value || undefined; break;
      case 'dateFrom': this.currentFilter.dateFrom = value || undefined; break;
      case 'dateTo': this.currentFilter.dateTo = value || undefined; break;
    }
    this.loadExpenses();
  }

  onSearchChange(event: Event): void {
    const text = (event.target as HTMLInputElement).value;
    this.currentFilter.searchText = text || undefined;
    this.loadExpenses();
  }

  openDialog(expense?: Expense): void {
    if (expense) {
      this.editingExpense.set(expense);
      this.form.patchValue({
        description: expense.description,
        amount: expense.amount,
        categoryId: expense.categoryId,
        date: new Date(expense.date),
        tags: expense.tags,
        notes: expense.notes || ''
      });
    } else {
      this.editingExpense.set(null);
      this.form.reset({ date: new Date(), amount: 0, tags: [], notes: '' });
    }
    this.showDialog.set(true);
  }

  async saveExpense(): Promise<void> {
    if (this.form.invalid) return;
    const userId = this.authStore.userId();
    const values = this.form.getRawValue();
    const editing = this.editingExpense();

    if (editing) {
      await this.expenseRepo.update(editing.id!, values);
      this.messageService.add({ severity: 'success', summary: 'Aggiornato', detail: 'Spesa modificata' });
    } else {
      await this.expenseRepo.create({ ...values, userId });
      this.messageService.add({ severity: 'success', summary: 'Creato', detail: 'Spesa aggiunta' });
    }

    this.showDialog.set(false);
    await this.loadExpenses();
  }

  confirmDelete(expense: Expense): void {
    this.confirmationService.confirm({
      message: `Eliminare "${expense.description}"?`,
      header: 'Conferma eliminazione',
      icon: 'pi pi-trash',
      acceptLabel: 'Elimina',
      rejectLabel: 'Annulla',
      accept: async () => {
        await this.expenseRepo.delete(expense.id!);
        this.expenseStore.removeExpense(expense.id!);
        this.filteredExpenses.update(list => list.filter(e => e.id !== expense.id));
        this.messageService.add({ severity: 'warn', summary: 'Eliminato', detail: 'Spesa eliminata' });
      }
    });
  }

  getCategoryName(id: string): string { return this.authStore.categories().find(c => c.id === id)?.name || id; }
  getCategoryColor(id: string): string { return this.authStore.categories().find(c => c.id === id)?.color || '#64748b'; }
  formatDate(d: Date): string { return formatDateIT(d); }
}
