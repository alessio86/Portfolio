# 💰 FinanceTracker PWA

Applicazione PWA offline-first per la gestione di spese personali e pagamenti ricorrenti.

## 🚀 Quick Start

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm start

# L'app sarà disponibile su http://localhost:4200
```

## 📦 Build & Deploy

```bash
# Build di produzione per GitHub Pages
npm run build

# Deploy su GitHub Pages
npm run deploy
```

## 🏛️ Stack Tecnologico

- **Angular 19** con standalone components e signals
- **@ngrx/signals** per state management
- **PrimeNG 19** + PrimeFlex + PrimeIcons per la UI
- **Dexie.js** (IndexedDB wrapper) per database locale
- **bcrypt.js** per hashing password
- **Service Worker** per funzionalità PWA

## 📁 Struttura del Progetto

```
src/app/
├── core/          # Auth, guards, servizi core
├── shared/        # Componenti, pipe, utility condivisi
├── features/      # Feature modules (lazy loaded)
│   ├── dashboard/
│   ├── recurring/
│   ├── expenses/
│   ├── calendar/
│   ├── statistics/
│   ├── history/
│   └── settings/
└── data/          # Modelli, repository, store, database
    ├── models/
    ├── repositories/
    ├── store/
    └── db/
```

## 🔧 Funzionalità

- ✅ Autenticazione locale con password hashate
- ✅ Dashboard con statistiche e grafici
- ✅ CRUD pagamenti ricorrenti (mensile, trimestrale, annuale, personalizzata)
- ✅ CRUD spese singole con categorie e tag
- ✅ Calendario finanziario
- ✅ Statistiche avanzate con grafici
- ✅ Storico pagamenti
- ✅ Notifiche scadenze (Web Notifications API)
- ✅ PWA installabile con banner di installazione
- ✅ Dark/Light mode
- ✅ Categorie personalizzabili
- ✅ Mobile-first responsive design
- ✅ Offline-first (tutti i dati in IndexedDB)

## 🔮 Predisposizione Firebase

L'architettura Repository pattern permette una migrazione semplice a Firebase:
1. Crea nuovi repository che implementano le stesse interfacce
2. Sostituisci i provider nel modulo
3. I componenti non cambiano

## 📱 PWA

L'app è installabile come PWA su smartphone e desktop. Al primo accesso viene mostrato un banner di installazione.

## 📄 Licenza

Progetto personale - Tutti i diritti riservati.
