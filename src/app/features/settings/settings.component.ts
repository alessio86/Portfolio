import { Component, inject, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, Validators } from '@angular/forms';
import { AuthStore } from '@data/store';
import { AuthService } from '@core/auth/auth.service';
import { Category, DEFAULT_CATEGORIES } from '@data/models';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { DialogModule } from 'primeng/dialog';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule,
    InputTextModule, InputSwitchModule, ButtonModule, PasswordModule,
    DialogModule, ColorPickerModule, ToastModule, RippleModule, DividerModule
  ],
  providers: [MessageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="ft-page ft-animate-in">
      <h1 class="ft-page-title" style="margin-bottom: 1.5rem;">Impostazioni</h1>

      <!-- Profile -->
      <div class="settings-section">
        <h3><i class="pi pi-user"></i> Profilo</h3>
        <form [formGroup]="profileForm" (ngSubmit)="saveProfile()">
          <div class="settings-row">
            <div class="field">
              <label>Nome visualizzato</label>
              <input pInputText formControlName="displayName" class="w-full" />
            </div>
            <div class="field">
              <label>Email</label>
              <input pInputText formControlName="email" class="w-full" />
            </div>
          </div>
          <button pButton type="submit" label="Salva profilo" icon="pi pi-check"
                  class="p-button-sm" [disabled]="profileForm.invalid"></button>
        </form>
      </div>

      <!-- Appearance -->
      <div class="settings-section">
        <h3><i class="pi pi-palette"></i> Aspetto</h3>
        <div class="setting-item">
          <div>
            <span class="setting-label">Dark Mode</span>
            <span class="setting-desc">Attiva il tema scuro</span>
          </div>
          <p-inputSwitch [ngModel]="authStore.isDarkMode()"
                         (onChange)="toggleDarkMode($event.checked)"></p-inputSwitch>
        </div>
      </div>

      <!-- Notifications -->
      <div class="settings-section">
        <h3><i class="pi pi-bell"></i> Notifiche</h3>
        <div class="setting-item">
          <div>
            <span class="setting-label">Abilita notifiche</span>
            <span class="setting-desc">Ricevi avvisi per pagamenti in scadenza</span>
          </div>
          <p-inputSwitch [ngModel]="notifEnabled()" (onChange)="toggleNotif('enabled', $event.checked)"></p-inputSwitch>
        </div>
        @if (notifEnabled()) {
          <div class="setting-item sub">
            <span class="setting-label">7 giorni prima</span>
            <p-inputSwitch [ngModel]="notifSettings()?.notifySevenDaysBefore"
                           (onChange)="toggleNotif('notifySevenDaysBefore', $event.checked)"></p-inputSwitch>
          </div>
          <div class="setting-item sub">
            <span class="setting-label">3 giorni prima</span>
            <p-inputSwitch [ngModel]="notifSettings()?.notifyThreeDaysBefore"
                           (onChange)="toggleNotif('notifyThreeDaysBefore', $event.checked)"></p-inputSwitch>
          </div>
          <div class="setting-item sub">
            <span class="setting-label">Il giorno della scadenza</span>
            <p-inputSwitch [ngModel]="notifSettings()?.notifyOnDueDate"
                           (onChange)="toggleNotif('notifyOnDueDate', $event.checked)"></p-inputSwitch>
          </div>
          <div class="setting-item sub">
            <span class="setting-label">Pagamenti scaduti</span>
            <p-inputSwitch [ngModel]="notifSettings()?.notifyOverdue"
                           (onChange)="toggleNotif('notifyOverdue', $event.checked)"></p-inputSwitch>
          </div>
          <div class="setting-item sub">
            <span class="setting-label">Rinnovi abbonamenti</span>
            <p-inputSwitch [ngModel]="notifSettings()?.notifyRenewal"
                           (onChange)="toggleNotif('notifyRenewal', $event.checked)"></p-inputSwitch>
          </div>
        }
      </div>

      <!-- Categories -->
      <div class="settings-section">
        <h3><i class="pi pi-tag"></i> Categorie</h3>
        <div class="categories-grid">
          @for (cat of authStore.categories(); track cat.id) {
            <div class="category-chip" [class.system]="cat.isSystem">
              <span class="cat-dot" [style.background]="cat.color"></span>
              <i [class]="cat.icon" style="font-size: 0.875rem;"></i>
              <span>{{ cat.name }}</span>
              @if (!cat.isSystem) {
                <button pButton icon="pi pi-times" class="p-button-text p-button-sm p-button-danger"
                        (click)="removeCategory(cat)"></button>
              }
            </div>
          }
        </div>
        <div style="margin-top: 1rem;">
          <button pButton label="Aggiungi categoria" icon="pi pi-plus"
                  class="p-button-sm p-button-outlined"
                  (click)="showCatDialog.set(true)"></button>
        </div>
      </div>

      <!-- Change Password -->
      <div class="settings-section">
        <h3><i class="pi pi-lock"></i> Cambia Password</h3>
        <form [formGroup]="passwordForm" (ngSubmit)="changePassword()">
          <div class="field">
            <label>Password attuale</label>
            <p-password formControlName="currentPassword" [toggleMask]="true" [feedback]="false"
                        styleClass="w-full" inputStyleClass="w-full"></p-password>
          </div>
          <div class="field">
            <label>Nuova password</label>
            <p-password formControlName="newPassword" [toggleMask]="true"
                        styleClass="w-full" inputStyleClass="w-full"
                        promptLabel="Nuova password"
                        weakLabel="Debole" mediumLabel="Media" strongLabel="Forte"></p-password>
          </div>
          <button pButton type="submit" label="Cambia password" icon="pi pi-lock"
                  class="p-button-sm p-button-warning" [disabled]="passwordForm.invalid"></button>
        </form>
      </div>
    </div>

    <!-- Add Category Dialog -->
    <p-dialog header="Nuova categoria" [(visible)]="showCatDialog" [modal]="true"
              [style]="{ width: '95vw', maxWidth: '400px' }">
      <form [formGroup]="catForm" (ngSubmit)="addCategory()">
        <div class="field">
          <label>Nome</label>
          <input pInputText formControlName="name" placeholder="Nome categoria" class="w-full" />
        </div>
        <div class="field">
          <label>Icona (classe PrimeIcon)</label>
          <input pInputText formControlName="icon" placeholder="pi pi-star" class="w-full" />
        </div>
        <div class="field">
          <label>Colore</label>
          <p-colorPicker formControlName="color"></p-colorPicker>
        </div>
        <div style="display: flex; justify-content: flex-end; gap: 0.5rem; margin-top: 1rem;">
          <button pButton type="button" label="Annulla" class="p-button-text"
                  (click)="showCatDialog.set(false)"></button>
          <button pButton type="submit" label="Aggiungi" icon="pi pi-check"
                  [disabled]="catForm.invalid"></button>
        </div>
      </form>
    </p-dialog>

    <p-toast></p-toast>
  `,
  styles: [`
    .settings-section {
      background: var(--ft-bg-card);
      border: 1px solid var(--ft-border);
      border-radius: var(--ft-border-radius);
      padding: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .settings-section h3 {
      display: flex; align-items: center; gap: 0.5rem;
      margin-bottom: 1.25rem; font-size: 1.125rem;
    }

    .settings-row { display: flex; gap: 1rem; flex-wrap: wrap; }
    .settings-row .field { flex: 1; min-width: 200px; }

    .setting-item {
      display: flex; justify-content: space-between; align-items: center;
      padding: 0.75rem 0;
      border-bottom: 1px solid var(--ft-border);
    }

    .setting-item:last-child { border-bottom: none; }
    .setting-item.sub { padding-left: 1.5rem; }

    .setting-label { font-weight: 500; font-size: 0.9375rem; display: block; }
    .setting-desc { font-size: 0.8125rem; color: var(--ft-text-secondary); }

    .categories-grid {
      display: flex; flex-wrap: wrap; gap: 0.5rem;
    }

    .category-chip {
      display: flex; align-items: center; gap: 0.5rem;
      padding: 0.5rem 0.75rem; background: var(--ft-bg-primary);
      border-radius: 8px; font-size: 0.875rem;
    }

    .cat-dot { width: 8px; height: 8px; border-radius: 50%; }

    .field { margin-bottom: 1rem; }
    .field label {
      display: block; font-weight: 500; margin-bottom: 0.5rem;
      font-size: 0.875rem; color: var(--ft-text-secondary);
    }
    .w-full { width: 100%; }
  `]
})
export class SettingsComponent implements OnInit {
  authStore = inject(AuthStore);
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);
  private messageService = inject(MessageService);

  showCatDialog = signal(false);
  notifEnabled = signal(true);
  notifSettings = signal(this.authStore.notificationSettings());

  profileForm = this.fb.nonNullable.group({
    displayName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });

  passwordForm = this.fb.nonNullable.group({
    currentPassword: ['', Validators.required],
    newPassword: ['', [Validators.required, Validators.minLength(6)]]
  });

  catForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    icon: ['pi pi-tag', Validators.required],
    color: ['#3b82f6']
  });

  ngOnInit(): void {
    const user = this.authStore.currentUser();
    if (user) {
      this.profileForm.patchValue({
        displayName: user.displayName,
        email: user.email
      });
      this.notifEnabled.set(user.settings.notifications.enabled);
      this.notifSettings.set(user.settings.notifications);
    }
  }

  async saveProfile(): Promise<void> {
    if (this.profileForm.invalid) return;
    await this.authService.updateProfile(this.profileForm.getRawValue());
    this.messageService.add({ severity: 'success', summary: 'Salvato', detail: 'Profilo aggiornato' });
  }

  async toggleDarkMode(checked: boolean): Promise<void> {
    await this.authService.updateSettings({ darkMode: checked });
  }

  async toggleNotif(key: string, checked: boolean): Promise<void> {
    const current = this.authStore.notificationSettings() || {} as any;
    const updated = { ...current, [key]: checked };
    await this.authService.updateSettings({ notifications: updated });
    this.notifEnabled.set(updated.enabled);
    this.notifSettings.set(updated);
  }

  async addCategory(): Promise<void> {
    if (this.catForm.invalid) return;
    const { name, icon, color } = this.catForm.getRawValue();
    const categories = [...this.authStore.categories()];
    const newCat: Category = {
      id: name.toLowerCase().replace(/\s+/g, '-'),
      name, icon,
      color: typeof color === 'string' ? color : `#${color}`,
      isSystem: false
    };
    categories.push(newCat);
    await this.authService.updateSettings({ categories });
    this.showCatDialog.set(false);
    this.catForm.reset({ icon: 'pi pi-tag', color: '#3b82f6' });
    this.messageService.add({ severity: 'success', summary: 'Aggiunta', detail: 'Categoria creata' });
  }

  async removeCategory(cat: Category): Promise<void> {
    const categories = this.authStore.categories().filter(c => c.id !== cat.id);
    await this.authService.updateSettings({ categories });
    this.messageService.add({ severity: 'info', summary: 'Rimossa', detail: 'Categoria eliminata' });
  }

  async changePassword(): Promise<void> {
    if (this.passwordForm.invalid) return;
    const { currentPassword, newPassword } = this.passwordForm.getRawValue();
    const result = await this.authService.changePassword(currentPassword, newPassword);
    if (result.success) {
      this.passwordForm.reset();
      this.messageService.add({ severity: 'success', summary: 'Aggiornata', detail: 'Password cambiata' });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Errore', detail: result.error || 'Errore' });
    }
  }
}
