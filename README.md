# 🧪 Form Layout E2E Testing with Playwright

Ce projet permet de tester automatiquement une application Angular basée sur le thème [ngx-admin](https://github.com/akveo/ngx-admin) à l’aide de **Playwright**.  
Il simule des interactions utilisateur sur des formulaires dynamiques (login, inputs, boutons...).

---

## 🚀 Objectifs

- ✅ Tester la logique des formulaires (saisie, validation, clic)
- ♻️ Écrire des tests modulaires et maintenables (helpers, hooks)
- 📈 Améliorer la couverture de test avec des outils Playwright avancés

---

## 📦 Technologies utilisées

- 🔧 Angular 14 (frontend)
- 🎭 Playwright (tests E2E)
- 🖼️ Ngx-Admin UI (theme Akveo)
- 🧪 TypeScript

---

## 🔧 Installation & Setup

### 1. Cloner le projet

```bash
git clone https://github.com/ton-user/ton-repo.git
cd ton-repo
```

### 2. Installer les dépendances

```bash
npm install
```

> ℹ️ Assurez-vous d’avoir Node.js >= 16 installé.

### 3. Installer Playwright (navigateurs)

```bash
npx playwright install
```

---

## ▶️ Lancer l’application Angular

Dans un autre terminal (à la racine de l’app Angular) :

```bash
npm install
npm start
```

> L'application tourne ensuite sur :  
> 👉 [http://localhost:4200](http://localhost:4200)

---

## 🧪 Lancer les tests Playwright

### Lancer tous les tests :
```bash
npx playwright test
```

### Lancer depuis l’interface UI :
```bash
npx playwright test --ui
```

### Lancer un test en mode "headed" (navigateur visible) :
```bash
npx playwright test --project=chromium -g "first test" --headed
```

---

## 🔬 Outils avancés Playwright

### Codegen (génération automatique de code) :
```bash
npx playwright codegen http://localhost:4200/
```

> 🧠 Enregistre toutes tes actions (clics, saisies, etc.) et génère le code automatiquement.

---

### Traces (voir l’historique visuel d’un test)

1. Activer les traces :
```bash
npx playwright test --trace on
```

2. Lire la trace générée :
```bash
npx playwright show-trace trace.zip
```

> Tu verras une **reconstitution visuelle complète du test** (clics, erreurs, champs saisis), parfaite pour analyser les bugs.

---

## 📂 Arborescence

```
├── tests/
│   ├── firstTest.spec.ts           # Tests E2E Playwright
│   └── helpers/
│       └── formHelpers.ts          # Fonctions réutilisables
├── README.md
├── package.json
```

---

## 💡 Case Design – Stratégie de test

| Cas d’usage                         | Objectif                                 | Statut |
|-------------------------------------|------------------------------------------|--------|
| ✅ Soumission du formulaire         | Vérifie la saisie des champs             | OK     |
| ✅ Vérification du bouton "Submit"  | Vérifie le texte du bouton               | OK     |
| 🔲 Test d’erreur (email vide)       | Valider la gestion d'erreur              | À venir |

---

## ✨ Pourquoi Playwright ?

- Support de TypeScript
- Génération de rapports, vidéos, traces
- Débogage facile
- Multi-navigateurs
- Intégrable en CI/CD

---

## 📬 Contact

Créé avec ❤️ par Daura Rady  
Portfolio : https://github.com/DauraRady


---

## 📄 Licence

Ce projet est basé sur [ngx-admin](https://github.com/akveo/ngx-admin).  
Licence MIT – libre d'utilisation avec attribution.

© 2017 akveo.com
