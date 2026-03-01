# Workshop n°5 — Les Services dans Angular

> Solution Angular complète pour la manipulation des services et HTTPClient.

---

## 📁 Structure du projet

```
src/app/
├── app.component.ts/html/scss
├── app.module.ts                    ← provideHttpClient() ajouté dans providers
├── app-routing.module.ts
│
├── Core/
│   └── Services/
│       └── suggestion.service.ts   ← SuggestionService avec toutes méthodes CRUD
│
├── core/
│   ├── header/                     ← HeaderComponent
│   ├── home/                       ← HomeComponent
│   └── notfound/                   ← NotfoundComponent
│
├── features/
│   ├── suggestions/
│   │   ├── suggestions.module.ts
│   │   ├── suggestions-routing.module.ts
│   │   ├── suggestions.component.ts
│   │   ├── suggestion-list/         ← Liste + Like + Supprimer
│   │   ├── suggestion-details/      ← Détails + Update + Supprimer
│   │   └── add-suggestion/          ← Formulaire Ajout / Modification
│   └── users/
│
└── shared/
    └── models/
        └── suggestion.model.ts
```

---

## 🚀 Mise en place

### 1. Backend

```bash
# Installer XAMPP, lancer Apache + MySQL
# Créer la BDD suggestions_db dans phpMyAdmin avec la table suggestions

# Cloner et lancer le backend
git clone https://github.com/oussemasellami/backendmysql-sugg.git
cd backendmysql-sugg
npm install
npm run dev
# → http://localhost:3000/suggestions
```

### 2. Frontend

```bash
npm install
ng serve
# → http://localhost:4200
```

---

## ✅ Fonctionnalités implémentées

| # | Fonctionnalité |
|---|---|
| P1-1 | Service `SuggestionService` créé dans `Core/Services` |
| P1-2 | Données déplacées dans le service |
| P1-3 | `SuggestionListComponent` utilise le service |
| P1-4 | `SuggestionDetailsComponent` utilise le service avec filtrage par id |
| P2-1 | `provideHttpClient()` dans `AppModule` |
| P2-2 | `HttpClient` injecté dans `SuggestionService` |
| P2-3 | `suggestionUrl` défini |
| P2-4 | `getSuggestionsList()` → GET |
| P2-5 | Service injecté dans `ListSuggestionComponent` |
| P2-6 | `getSuggestionById()` → GET /:id |
| P2-7 | Service injecté dans `SuggestionDetailsComponent` |
| P2-8 | `deleteSuggestion()` → DELETE /:id |
| P2-9 | Bouton Supprimer + redirection |
| P2-10 | `addSuggestion()` → POST |
| P2-11 | `AddSuggestionComponent` + redirection |
| P2-12 | `updateSuggestion()` → PUT /:id |
| P2-13 | Bouton Update → pré-remplissage du formulaire |
| P2-14 | Save → mise à jour via `updateSuggestion()` |
| P2-15 | `updateLikes()` → PATCH /:id + bouton Like |

---

## Routes

| Route | Composant |
|---|---|
| `/` | Redirige → `/home` |
| `/home` | `HomeComponent` |
| `/suggestions` | `SuggestionListComponent` |
| `/suggestions/add` | `AddSuggestionComponent` |
| `/suggestions/edit/:id` | `AddSuggestionComponent` (edit) |
| `/suggestions/:id` | `SuggestionDetailsComponent` |
| `/users` | `UsersComponent` |
| `/**` | `NotfoundComponent` |
