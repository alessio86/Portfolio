export interface User {
  id?: string;
  username: string;
  email: string;
  passwordHash: string;
  displayName: string;
  createdAt: Date;
  updatedAt: Date;
  settings: UserSettings;
}

export interface UserSettings {
  darkMode: boolean;
  currency: string;
  locale: string;
  notifications: NotificationSettings;
  categories: Category[];
}

export interface NotificationSettings {
  enabled: boolean;
  notifySevenDaysBefore: boolean;
  notifyThreeDaysBefore: boolean;
  notifyOnDueDate: boolean;
  notifyOverdue: boolean;
  notifyRenewal: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  isSystem: boolean;
}

export const DEFAULT_CATEGORIES: Category[] = [
  { id: 'casa', name: 'Casa', icon: 'pi pi-home', color: '#8b5cf6', isSystem: true },
  { id: 'auto', name: 'Auto', icon: 'pi pi-car', color: '#f59e0b', isSystem: true },
  { id: 'alimentari', name: 'Alimentari', icon: 'pi pi-shopping-cart', color: '#22c55e', isSystem: true },
  { id: 'tempo-libero', name: 'Tempo Libero', icon: 'pi pi-heart', color: '#ec4899', isSystem: true },
  { id: 'salute', name: 'Salute', icon: 'pi pi-plus-circle', color: '#ef4444', isSystem: true },
  { id: 'tasse', name: 'Tasse', icon: 'pi pi-file', color: '#6366f1', isSystem: true },
  { id: 'servizi', name: 'Servizi', icon: 'pi pi-cog', color: '#06b6d4', isSystem: true },
  { id: 'abbonamenti', name: 'Abbonamenti', icon: 'pi pi-replay', color: '#3b82f6', isSystem: true },
  { id: 'ristorante', name: 'Ristorante', icon: 'pi pi-star', color: '#f97316', isSystem: true },
  { id: 'carburante', name: 'Carburante', icon: 'pi pi-bolt', color: '#a855f7', isSystem: true },
  { id: 'shopping', name: 'Shopping', icon: 'pi pi-shopping-bag', color: '#ec4899', isSystem: true },
  { id: 'farmacia', name: 'Farmacia', icon: 'pi pi-plus', color: '#14b8a6', isSystem: true },
  { id: 'supermercato', name: 'Supermercato', icon: 'pi pi-shopping-cart', color: '#84cc16', isSystem: true },
  { id: 'impreviste', name: 'Impreviste', icon: 'pi pi-exclamation-triangle', color: '#ef4444', isSystem: true },
  { id: 'altro', name: 'Altro', icon: 'pi pi-ellipsis-h', color: '#64748b', isSystem: true }
];

export const DEFAULT_NOTIFICATION_SETTINGS: NotificationSettings = {
  enabled: true,
  notifySevenDaysBefore: true,
  notifyThreeDaysBefore: true,
  notifyOnDueDate: true,
  notifyOverdue: true,
  notifyRenewal: true
};

export const DEFAULT_USER_SETTINGS: UserSettings = {
  darkMode: true,
  currency: 'EUR',
  locale: 'it-IT',
  notifications: DEFAULT_NOTIFICATION_SETTINGS,
  categories: DEFAULT_CATEGORIES
};
