import { Injectable, inject } from '@angular/core';
import { AuthStore, RecurringStore } from '@data/store';
import { RecurringPayment } from '@data/models';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private authStore = inject(AuthStore);
  private recurringStore = inject(RecurringStore);

  private hasPermission = false;

  async requestPermission(): Promise<boolean> {
    if (!('Notification' in window)) {
      console.warn('Notifications not supported');
      return false;
    }

    if (Notification.permission === 'granted') {
      this.hasPermission = true;
      return true;
    }

    if (Notification.permission === 'denied') {
      return false;
    }

    const result = await Notification.requestPermission();
    this.hasPermission = result === 'granted';
    return this.hasPermission;
  }

  async checkAndNotify(): Promise<void> {
    const settings = this.authStore.notificationSettings();
    if (!settings?.enabled || !this.hasPermission) return;

    const payments = this.recurringStore.activePayments();
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    const notifications: { title: string; body: string; tag: string }[] = [];
    const todayKey = now.toISOString().split('T')[0];

    for (const payment of payments) {
      const dueDate = new Date(payment.nextDueDate);
      dueDate.setHours(0, 0, 0, 0);
      const diffDays = Math.ceil((dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

      if (diffDays < 0 && settings.notifyOverdue) {
        notifications.push({
          title: '⚠️ Pagamento scaduto',
          body: `${payment.name}: €${payment.amount.toFixed(2)} - scaduto da ${Math.abs(diffDays)} giorni`,
          tag: `overdue-${payment.id}-${todayKey}`
        });
      } else if (diffDays === 0 && settings.notifyOnDueDate) {
        notifications.push({
          title: '📅 Pagamento in scadenza oggi',
          body: `${payment.name}: €${payment.amount.toFixed(2)}`,
          tag: `due-today-${payment.id}-${todayKey}`
        });
      } else if (diffDays <= 3 && diffDays > 0 && settings.notifyThreeDaysBefore) {
        notifications.push({
          title: `📌 Pagamento tra ${diffDays} giorni`,
          body: `${payment.name}: €${payment.amount.toFixed(2)} - scade il ${this.formatDate(dueDate)}`,
          tag: `due-3d-${payment.id}-${todayKey}`
        });
      } else if (diffDays <= 7 && diffDays > 3 && settings.notifySevenDaysBefore) {
        notifications.push({
          title: `🔔 Pagamento tra ${diffDays} giorni`,
          body: `${payment.name}: €${payment.amount.toFixed(2)} - scade il ${this.formatDate(dueDate)}`,
          tag: `due-7d-${payment.id}-${todayKey}`
        });
      }
    }

    // Group by day — max 5 notifications
    const toShow = notifications.slice(0, 5);
    if (toShow.length > 3) {
      // Summarize
      this.showNotification(
        `💰 ${toShow.length} pagamenti richiedono attenzione`,
        toShow.map(n => n.body).join('\n'),
        `summary-${todayKey}`
      );
    } else {
      for (const n of toShow) {
        this.showNotification(n.title, n.body, n.tag);
      }
    }
  }

  private showNotification(title: string, body: string, tag: string): void {
    // Avoid duplicates using sessionStorage
    const shownKey = `notif_shown_${tag}`;
    if (sessionStorage.getItem(shownKey)) return;

    try {
      new Notification(title, {
        body,
        tag,
        icon: 'assets/icons/icon-192x192.png',
        badge: 'assets/icons/icon-96x96.png',
        requireInteraction: false
      });
      sessionStorage.setItem(shownKey, '1');
    } catch (e) {
      console.error('Notification error:', e);
    }
  }

  private formatDate(date: Date): string {
    return date.toLocaleDateString('it-IT', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }
}
