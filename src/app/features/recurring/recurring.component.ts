import { Component, inject, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AuthStore, RecurringStore } from '@data/store';
import { RecurringRepository } from '@data/repositories';
import { RecurringPayment, RecurringFrequency, getFrequencyLabel } from '@data/models';
import { EuroCurrencyPipe } from '@shared/pipes/euro-currency.pipe';
import { formatDateIT, daysDiff } from '@shared/utils/date.utils';
import { Category } from '@data/models';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TagModule } from 'primeng/tag';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { ChipsModule } from 'primeng/chips';
import { InputTextarea } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';

@Component({
  selector: 'app-recurring',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, EuroCurrencyPipe,
    TableModule, ButtonModule, DialogModule, InputTextModule, InputNumberModule,
    DropdownModule, CalendarModule, TagModule, ConfirmDialogModule, ToastModule,
    RippleModule, TooltipModule, ChipsModule, InputTextarea, InputSwitchModule
  ],
  providers: [ConfirmationService, MessageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="ft-page ft-animate-in">
      <div class="ft-page-header">
        <h1 class="ft-page-title">Pagamenti Ricorrenti</h1>
        <button pButton pRipple label="Nuovo" icon="pi pi-plus"
                class="p-button-sm" (click)="openDialog()"></button>
      </div>

      <!-- Summary -->
      <div class="summary-bar">
        <div class="summary-item">
          <span class="summary-value">{{ recurringStore.activeCount() }}</span>
          <span class="summary-label">Attivi</span>
        </div>
        <div class="summary-item">
          <span class="summary-value">{{ recurringStore.monthlyTotal() | euroCurrency }}</span>
          <span class="summary-label">Costo mensile</span>
        </div>
        <div class="summary-item warning">
          <span class="summary-value">{{ recurringStore.overduePayments().length }}</span>
          <span class="summary-label">Scaduti</span>
        </div>
      </div>

      <!-- Payments List (mobile-friendly cards) -->
      <div class="payments-grid">
        @for (payment of recurringStore.payments(); track payment.id) {
          <div class="payment-card" [class.overdue]="isOverdue(payment)" [class.inactive]="!payment.isActive">
            <div class="payment-card-header">
              <div class="payment-card-title">
                <span class="payment-name">{{ payment.name }}</span>
                <span class="payment-freq">{{ getFreqLabel(payment) }}</span>
              </div>
              <span class="payment-card-amount">{{ payment.amount | euroCurrency }}</span>
            </div>

            <div class="payment-card-meta">
              <span class="meta-item">
                <i class="pi pi-calendar"></i>
                {{ formatDate(payment.nextDueDate) }}
                @if (isOverdue(payment)) {
                  <span class="badge-overdue">Scaduto</span>
                } @else {
                  <span class="badge-days">tra {{ getDaysUntil(payment.nextDueDate) }} gg</span>
                }
              </span>
              <span class="meta-item">
                <i class="pi pi-tag"></i>
                {{ getCategoryName(payment.categoryId) }}
              </span>
            </div>

            <div class="payment-card-actions">
              <button pButton pRipple icon="pi pi-check" label="Pagato"
                      class="p-button-sm p-button-success p-button-outlined"
                      (click)="markAsPaid(payment)" [disabled]="!payment.isActive"
                      pTooltip="Segna come pagato"></button>
              <button pButton pRipple icon="pi pi-pencil"
                      class="p-button-sm p-button-text" (click)="openDialog(payment)"></button>
              <button pButton pRipple icon="pi pi-copy"
                      class="p-button-sm p-button-text" (click)="duplicatePayment(payment)"></button>
              <button pButton pRipple icon="pi pi-trash"
                      class="p-button-sm p-button-text p-button-danger"
                      (click)="confirmDelete(payment)"></button>
            </div>
          </div>
        } @empty {
          <div class="empty-state">
            <i class="pi pi-replay" style="font-size: 3rem; color: var(--ft-text-muted);"></i>
            <p>Nessun pagamento ricorrente</p>
            <button pButton label="Aggiungi il primo" icon="pi pi-plus"
                    class="p-button-sm" (click)="openDialog()"></button>
          </div>
        }
      </div>
    </div>

    <!-- Create/Edit Dialog -->
    <p-dialog [header]="editingPayment() ? 'Modifica Pagamento' : 'Nuovo Pagamento'"
              [(visible)]="showDialog" [modal]="true"
              [style]="{ width: '95vw', maxWidth: '520px' }" [draggable]="false">
      <form [formGroup]="form" (ngSubmit)="savePayment()">
        <div class="field">
          <label>Nome</label>
          <input pInputText formControlName="name" placeholder="Es: Netflix, Affitto..." class="w-full" />
        </div>
        <div class="form-row">
          <div class="field flex-1">
            <label>Importo (€)</label>
            <p-inputNumber formControlName="amount" mode="currency" currency="EUR" locale="it-IT"
                           [minFractionDigits]="2" inputStyleClass="w-full"></p-inputNumber>
          </div>
          <div class="field flex-1">
            <label>Categoria</label>
            <p-dropdown formControlName="categoryId" [options]="categoryOptions()"
                        optionLabel="name" optionValue="id"
                        placeholder="Seleziona" styleClass="w-full"></p-dropdown>
          </div>
        </div>
        <div class="form-row">
          <div class="field flex-1">
            <label>Frequenza</label>
            <p-dropdown formControlName="frequency" [options]="frequencyOptions"
                        optionLabel="label" optionValue="value"
                        placeholder="Seleziona" styleClass="w-full"></p-dropdown>
          </div>
          @if (form.get('frequency')?.value === 'custom') {
            <div class="field flex-1">
              <label>Ogni N giorni</label>
              <p-inputNumber formControlName="customDays" [min]="1" [max]="365"
                             inputStyleClass="w-full"></p-inputNumber>
            </div>
          }
        </div>
        <div class="form-row">
          <div class="field flex-1">
            <label>Data inizio</label>
            <p-calendar formControlName="startDate" dateFormat="dd/mm/yy" [showIcon]="true"
                        styleClass="w-full" inputStyleClass="w-full"></p-calendar>
          </div>
          <div class="field flex-1">
            <label>Prossima scadenza</label>
            <p-calendar formControlName="nextDueDate" dateFormat="dd/mm/yy" [showIcon]="true"
                        styleClass="w-full" inputStyleClass="w-full"></p-calendar>
          </div>
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
        <div class="field" style="display: flex; align-items: center; gap: 0.75rem;">
          <p-inputSwitch formControlName="isActive"></p-inputSwitch>
          <label style="margin: 0;">Attivo</label>
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
    .summary-bar {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.5rem;
      flex-wrap: wrap;
    }

    .summary-item {
      background: var(--ft-bg-card);
      border: 1px solid var(--ft-border);
      border-radius: 8px;
      padding: 0.75rem 1.25rem;
      text-align: center;
      flex: 1;
      min-width: 120px;
    }

    .summary-item.warning .summary-value { color: #ef4444; }
    .summary-value { display: block; font-size: 1.25rem; font-weight: 700; }
    .summary-label { font-size: 0.8125rem; color: var(--ft-text-secondary); }

    .payments-grid {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .payment-card {
      background: var(--ft-bg-card);
      border: 1px solid var(--ft-border);
      border-radius: var(--ft-border-radius);
      padding: 1rem 1.25rem;
      transition: var(--ft-transition);
    }

    .payment-card:hover { box-shadow: var(--ft-shadow); }
    .payment-card.overdue { border-left: 3px solid #ef4444; }
    .payment-card.inactive { opacity: 0.5; }

    .payment-card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 0.5rem;
    }

    .payment-card-title { display: flex; flex-direction: column; }
    .payment-name { font-weight: 600; font-size: 1rem; }
    .payment-freq { font-size: 0.8125rem; color: var(--ft-text-secondary); }
    .payment-card-amount { font-size: 1.25rem; font-weight: 700; color: var(--ft-accent); }

    .payment-card-meta {
      display: flex; gap: 1rem; margin-bottom: 0.75rem;
      flex-wrap: wrap;
    }

    .meta-item {
      font-size: 0.8125rem; color: var(--ft-text-secondary);
      display: flex; align-items: center; gap: 0.25rem;
    }

    .badge-overdue {
      background: rgba(239, 68, 68, 0.15); color: #ef4444;
      font-size: 0.6875rem; padding: 1px 6px; border-radius: 4px; font-weight: 600;
    }

    .badge-days {
      background: rgba(59, 130, 246, 0.15); color: var(--ft-accent);
      font-size: 0.6875rem; padding: 1px 6px; border-radius: 4px; font-weight: 600;
    }

    .payment-card-actions {
      display: flex; gap: 0.25rem; flex-wrap: wrap;
    }

    .empty-state {
      text-align: center; padding: 3rem 1rem;
      color: var(--ft-text-muted);
      display: flex; flex-direction: column; align-items: center; gap: 1rem;
    }

    .form-row { display: flex; gap: 1rem; }
    .flex-1 { flex: 1; }
    .field { margin-bottom: 1rem; }
    .field label {
      display: block; font-weight: 500; margin-bottom: 0.5rem;
      font-size: 0.875rem; color: var(--ft-text-secondary);
    }
    .w-full { width: 100%; }

    @media (max-width: 480px) {
      .form-row { flex-direction: column; gap: 0; }
    }
  `]
})
export class RecurringComponent implements OnInit {
  authStore = inject(AuthStore);
  recurringStore = inject(RecurringStore);
  private recurringRepo = inject(RecurringRepository);
  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);
  private fb = inject(FormBuilder);

  showDialog = signal(false);
  editingPayment = signal<RecurringPayment | null>(null);
  categoryOptions = signal<Category[]>([]);

  frequencyOptions = [
    { label: 'Mensile', value: 'monthly' },
    { label: 'Bimestrale', value: 'bimonthly' },
    { label: 'Trimestrale', value: 'quarterly' },
    { label: 'Semestrale', value: 'semiannual' },
    { label: 'Annuale', value: 'annual' },
    { label: 'Personalizzata', value: 'custom' }
  ];

  form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    amount: [0, [Validators.required, Validators.min(0.01)]],
    categoryId: ['', Validators.required],
    frequency: ['monthly' as RecurringFrequency, Validators.required],
    customDays: [30],
    startDate: [new Date(), Validators.required],
    nextDueDate: [new Date(), Validators.required],
    tags: [[] as string[]],
    notes: [''],
    isActive: [true]
  });

  async ngOnInit(): Promise<void> {
    this.categoryOptions.set(this.authStore.categories());
    const userId = this.authStore.userId();
    if (!userId) return;

    const payments = await this.recurringRepo.getAll(userId);
    this.recurringStore.setPayments(payments);
  }

  openDialog(payment?: RecurringPayment): void {
    if (payment) {
      this.editingPayment.set(payment);
      this.form.patchValue({
        name: payment.name,
        amount: payment.amount,
        categoryId: payment.categoryId,
        frequency: payment.frequency,
        customDays: payment.customDays || 30,
        startDate: new Date(payment.startDate),
        nextDueDate: new Date(payment.nextDueDate),
        tags: payment.tags,
        notes: payment.notes || '',
        isActive: payment.isActive
      });
    } else {
      this.editingPayment.set(null);
      this.form.reset({
        frequency: 'monthly',
        customDays: 30,
        startDate: new Date(),
        nextDueDate: new Date(),
        tags: [],
        notes: '',
        isActive: true,
        amount: 0
      });
    }
    this.showDialog.set(true);
  }

  async savePayment(): Promise<void> {
    if (this.form.invalid) return;
    const userId = this.authStore.userId();
    const values = this.form.getRawValue();
    const editing = this.editingPayment();

    if (editing) {
      await this.recurringRepo.update(editing.id!, {
        ...values,
        customDays: values.frequency === 'custom' ? values.customDays : undefined
      });
      const updated = await this.recurringRepo.getById(editing.id!);
      if (updated) this.recurringStore.updatePayment(updated);
      this.messageService.add({ severity: 'success', summary: 'Aggiornato', detail: 'Pagamento modificato' });
    } else {
      const payment = await this.recurringRepo.create({
        ...values,
        userId,
        customDays: values.frequency === 'custom' ? values.customDays : undefined
      });
      this.recurringStore.addPayment(payment);
      this.messageService.add({ severity: 'success', summary: 'Creato', detail: 'Pagamento aggiunto' });
    }

    this.showDialog.set(false);
  }

  async markAsPaid(payment: RecurringPayment): Promise<void> {
    const historyEntry = await this.recurringRepo.markAsPaid(payment.id!);
    this.recurringStore.addHistoryEntry(historyEntry);
    const updated = await this.recurringRepo.getById(payment.id!);
    if (updated) this.recurringStore.updatePayment(updated);
    this.messageService.add({ severity: 'success', summary: 'Pagato', detail: `${payment.name} segnato come pagato` });
  }

  async duplicatePayment(payment: RecurringPayment): Promise<void> {
    const dup = await this.recurringRepo.duplicate(payment.id!);
    this.recurringStore.addPayment(dup);
    this.messageService.add({ severity: 'info', summary: 'Duplicato', detail: 'Pagamento duplicato' });
  }

  confirmDelete(payment: RecurringPayment): void {
    this.confirmationService.confirm({
      message: `Eliminare "${payment.name}"?`,
      header: 'Conferma eliminazione',
      icon: 'pi pi-trash',
      acceptLabel: 'Elimina',
      rejectLabel: 'Annulla',
      accept: async () => {
        await this.recurringRepo.delete(payment.id!);
        this.recurringStore.removePayment(payment.id!);
        this.messageService.add({ severity: 'warn', summary: 'Eliminato', detail: 'Pagamento eliminato' });
      }
    });
  }

  isOverdue(p: RecurringPayment): boolean {
    const now = new Date(); now.setHours(0, 0, 0, 0);
    return p.isActive && new Date(p.nextDueDate) < now;
  }

  getFreqLabel(p: RecurringPayment): string { return getFrequencyLabel(p.frequency, p.customDays); }
  getCategoryName(id: string): string { return this.authStore.categories().find(c => c.id === id)?.name || id; }
  formatDate(d: Date): string { return formatDateIT(d); }
  getDaysUntil(d: Date): number { return Math.max(0, daysDiff(new Date(), d)); }
}
