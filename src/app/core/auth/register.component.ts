import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from '@core/auth/auth.service';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, InputTextModule, PasswordModule, ButtonModule, RippleModule],
  template: `
    <div class="auth-container">
      <div class="auth-card ft-animate-in">
        <div class="auth-header">
          <span class="auth-logo">💰</span>
          <h1>Crea Account</h1>
          <p>Registrati per iniziare a gestire le tue finanze</p>
        </div>

        @if (errorMessage()) {
          <div class="auth-error">
            <i class="pi pi-exclamation-circle"></i>
            {{ errorMessage() }}
          </div>
        }

        <form [formGroup]="form" (ngSubmit)="onSubmit()">
          <div class="field">
            <label for="displayName">Nome visualizzato</label>
            <input pInputText id="displayName" formControlName="displayName"
                   placeholder="Come vuoi essere chiamato" class="w-full" />
          </div>

          <div class="field">
            <label for="username">Username</label>
            <input pInputText id="username" formControlName="username"
                   placeholder="Scegli un username" class="w-full" autocomplete="username" />
          </div>

          <div class="field">
            <label for="email">Email</label>
            <input pInputText id="email" formControlName="email" type="email"
                   placeholder="La tua email" class="w-full" autocomplete="email" />
          </div>

          <div class="field">
            <label for="password">Password</label>
            <p-password id="password" formControlName="password"
                        placeholder="Minimo 6 caratteri" [toggleMask]="true"
                        styleClass="w-full" inputStyleClass="w-full"
                        autocomplete="new-password"
                        promptLabel="Inserisci una password"
                        weakLabel="Debole" mediumLabel="Media" strongLabel="Forte">
            </p-password>
          </div>

          <div class="field">
            <label for="confirmPassword">Conferma Password</label>
            <p-password id="confirmPassword" formControlName="confirmPassword"
                        placeholder="Ripeti la password" [toggleMask]="true"
                        [feedback]="false" styleClass="w-full" inputStyleClass="w-full"
                        autocomplete="new-password">
            </p-password>
            @if (form.hasError('passwordMismatch') && form.get('confirmPassword')?.touched) {
              <small class="field-error">Le password non coincidono</small>
            }
          </div>

          <button pButton pRipple type="submit" label="Registrati" icon="pi pi-user-plus"
                  class="w-full p-button-lg" [loading]="isLoading()"
                  [disabled]="form.invalid || isLoading()">
          </button>
        </form>

        <div class="auth-footer">
          <span>Hai già un account?</span>
          <a routerLink="/login">Accedi</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .auth-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      background: var(--ft-bg-primary);
    }

    .auth-card {
      width: 100%;
      max-width: 420px;
      background: var(--ft-bg-card);
      border: 1px solid var(--ft-border);
      border-radius: 16px;
      padding: 2.5rem 2rem;
      box-shadow: var(--ft-shadow-lg);
    }

    .auth-header { text-align: center; margin-bottom: 2rem; }
    .auth-logo { font-size: 3rem; display: block; margin-bottom: 0.75rem; }
    .auth-header h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 0.25rem; }
    .auth-header p { color: var(--ft-text-secondary); font-size: 0.9375rem; }

    .auth-error {
      background: rgba(239, 68, 68, 0.1);
      border: 1px solid rgba(239, 68, 68, 0.3);
      border-radius: 8px;
      padding: 0.75rem 1rem;
      margin-bottom: 1.5rem;
      color: #ef4444;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.875rem;
    }

    .field { margin-bottom: 1.25rem; }
    .field label {
      display: block; font-weight: 500; margin-bottom: 0.5rem;
      font-size: 0.875rem; color: var(--ft-text-secondary);
    }
    .field-error { color: #ef4444; font-size: 0.8125rem; margin-top: 0.25rem; display: block; }
    .w-full { width: 100%; }

    .auth-footer {
      text-align: center; margin-top: 1.5rem;
      font-size: 0.875rem; color: var(--ft-text-secondary);
    }
    .auth-footer a { color: var(--ft-accent); font-weight: 600; margin-left: 0.25rem; }
  `]
})
export class RegisterComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  isLoading = signal(false);
  errorMessage = signal<string | null>(null);

  form = this.fb.nonNullable.group({
    displayName: ['', [Validators.required, Validators.minLength(2)]],
    username: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z0-9_]+$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]]
  }, { validators: [this.passwordMatchValidator] });

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirm = control.get('confirmPassword')?.value;
    return password === confirm ? null : { passwordMismatch: true };
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid) return;

    this.isLoading.set(true);
    this.errorMessage.set(null);

    const { displayName, username, email, password } = this.form.getRawValue();
    const result = await this.authService.register(username, email, password, displayName);

    this.isLoading.set(false);

    if (result.success) {
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage.set(result.error || 'Errore durante la registrazione');
    }
  }
}
