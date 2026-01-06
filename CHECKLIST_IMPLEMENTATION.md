# ✅ CHECKLIST IMPLÉMENTATION - NOVANTYS

**Cochez les cases au fur et à mesure de votre progression**

---

## 🔥 PRIORITÉ 1 - SEMAINE 1 (10.5h)

### Jour 1 : Corrections Visuelles (0.5h)

- [ ] **Uniformiser la palette de couleurs** (30 min)
  - [ ] Ouvrir `components/Hero/index.tsx`
  - [ ] Rechercher tous les `pink-`, `purple-`, `violet-`
  - [ ] Remplacer par `primary`, `gold`, `goldlight`
  - [ ] Vérifier visuellement le résultat
  - [ ] Tester en mode dark et light
  - [ ] Commit: `fix: uniformize color palette to gold only`

---

### Jour 2-3 : Backend & Formulaire (2.5h)

- [ ] **Installer les dépendances email** (5 min)
  ```bash
  npm install nodemailer
  npm install --save-dev @types/nodemailer
  ```

- [ ] **Créer l'API Route** (30 min)
  - [ ] Créer le fichier `app/api/contact/route.ts`
  - [ ] Copier le code depuis `PLAN_ACTION_MODIFICATIONS.md` section 1.2
  - [ ] Adapter les types TypeScript si nécessaire
  - [ ] Commit: `feat: add contact form API route`

- [ ] **Configurer les variables d'environnement** (10 min)
  - [ ] Créer `.env.local` à la racine
  - [ ] Ajouter SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD
  - [ ] Ajouter CONTACT_EMAIL
  - [ ] Tester la connexion SMTP

- [ ] **Mettre à jour le formulaire de contact** (45 min)
  - [ ] Ouvrir `app/contact/page.tsx`
  - [ ] Implémenter la logique de soumission
  - [ ] Ajouter les états de chargement
  - [ ] Gérer les erreurs et succès avec Toast
  - [ ] Commit: `feat: implement contact form frontend`

- [ ] **Tester le formulaire** (30 min)
  - [ ] Remplir et envoyer un test
  - [ ] Vérifier réception de l'email
  - [ ] Tester les validations (champs vides, email invalide)
  - [ ] Tester en mode responsive (mobile)
  - [ ] Commit: `test: validate contact form functionality`

---

### Jour 3 : SEO & Analytics (1.5h)

- [ ] **Ajouter les meta tags Open Graph** (30 min)
  - [ ] Ouvrir `app/layout.tsx`
  - [ ] Copier le code depuis `PLAN_ACTION_MODIFICATIONS.md` section 1.3
  - [ ] Personnaliser les textes
  - [ ] Commit: `feat: add Open Graph and Twitter meta tags`

- [ ] **Créer l'image Open Graph** (20 min)
  - [ ] Utiliser Canva ou Photoshop
  - [ ] Dimensions : 1200x630px
  - [ ] Inclure logo + texte "Courtier en Assurance"
  - [ ] Sauvegarder dans `/public/og-image.jpg`
  - [ ] Commit: `assets: add Open Graph image`

- [ ] **Créer sitemap et robots.txt** (20 min)
  - [ ] Créer `app/sitemap.ts`
  - [ ] Créer `app/robots.ts`
  - [ ] Copier le code depuis `PLAN_ACTION_MODIFICATIONS.md` section 2.3
  - [ ] Commit: `feat: add sitemap and robots.txt`

- [ ] **Installer Google Analytics** (20 min)
  - [ ] Créer compte GA4 sur analytics.google.com
  - [ ] Récupérer l'ID (G-XXXXXXXXXX)
  - [ ] Créer `components/GoogleAnalytics/index.tsx`
  - [ ] Intégrer dans `app/layout.tsx`
  - [ ] Commit: `feat: integrate Google Analytics 4`

- [ ] **Tester SEO** (20 min)
  - [ ] Vérifier `/sitemap.xml`
  - [ ] Vérifier `/robots.txt`
  - [ ] Tester l'OG avec https://www.opengraph.xyz/
  - [ ] Vérifier GA avec DebugView

---

### Jour 4 : Accessibilité (3h)

- [ ] **Audit avec Lighthouse** (15 min)
  - [ ] Ouvrir Chrome DevTools
  - [ ] Lancer Lighthouse
  - [ ] Noter les scores actuel

- [ ] **Header - Améliorer l'accessibilité** (30 min)
  - [ ] Ajouter `role="navigation"` sur `<nav>`
  - [ ] Ajouter `aria-expanded` sur les dropdowns
  - [ ] Améliorer les `aria-label` des boutons
  - [ ] Tester navigation au clavier (Tab)
  - [ ] Commit: `a11y: improve header accessibility`

- [ ] **Formulaires - Labels et ARIA** (30 min)
  - [ ] Vérifier tous les `<label>` avec `htmlFor`
  - [ ] Ajouter `aria-required="true"` sur champs obligatoires
  - [ ] Ajouter `aria-live` pour les messages d'erreur
  - [ ] Tester avec lecteur d'écran
  - [ ] Commit: `a11y: improve form accessibility`

- [ ] **Images - Alt text** (20 min)
  - [ ] Vérifier toutes les images ont un `alt`
  - [ ] Images décoratives : `alt=""`
  - [ ] Images significatives : description claire
  - [ ] Commit: `a11y: add alt text to all images`

- [ ] **Contraste des couleurs** (30 min)
  - [ ] Tester sur https://webaim.org/resources/contrastchecker/
  - [ ] Texte normal : min 4.5:1
  - [ ] Texte large : min 3:1
  - [ ] Ajuster si nécessaire
  - [ ] Commit: `a11y: improve color contrast`

- [ ] **Focus visible** (20 min)
  - [ ] Ajouter outline doré sur focus
  - [ ] Tester tous les éléments interactifs
  - [ ] Commit: `a11y: add visible focus indicators`

- [ ] **Re-test Lighthouse** (15 min)
  - [ ] Nouveau score accessibilité
  - [ ] Objectif : > 95

---

### Jour 5 : Performance (2h)

- [ ] **Optimiser les images** (45 min)
  - [ ] Convertir toutes les images en WebP
  - [ ] Compresser avec TinyPNG ou Squoosh
  - [ ] Vérifier que `<Image>` utilise `loading="lazy"`
  - [ ] Sauf Hero : `priority={true}`
  - [ ] Commit: `perf: optimize images to WebP`

- [ ] **Lazy loading des composants** (30 min)
  - [ ] Identifier les composants lourds (Testimonials, Partenaires)
  - [ ] Utiliser `dynamic()` de Next.js
  - [ ] Ajouter un skeleton/loader
  - [ ] Commit: `perf: lazy load heavy components`

- [ ] **Optimiser les animations mobiles** (30 min)
  - [ ] Créer `lib/useMediaQuery.ts`
  - [ ] Réduire particules sur mobile (15 → 5)
  - [ ] Support `prefers-reduced-motion`
  - [ ] Commit: `perf: optimize animations for mobile`

- [ ] **Test performance** (15 min)
  - [ ] Lighthouse Performance
  - [ ] PageSpeed Insights
  - [ ] Objectif : > 90

---

### Jour 5 : Tests Responsive (1h)

- [ ] **Tests Desktop**
  - [ ] Chrome (Windows/Mac)
  - [ ] Firefox
  - [ ] Safari (Mac)
  - [ ] Edge

- [ ] **Tests Tablette**
  - [ ] iPad (Safari)
  - [ ] Tablette Android (Chrome)
  - [ ] Mode paysage et portrait

- [ ] **Tests Mobile**
  - [ ] iPhone (Safari)
  - [ ] Android (Chrome)
  - [ ] Petit écran (320px)
  - [ ] Grand écran (428px)

- [ ] **Tests Fonctionnels**
  - [ ] Navigation menu
  - [ ] Dropdowns
  - [ ] Formulaire de contact
  - [ ] Scroll to top
  - [ ] Dark/Light mode toggle

---

## 🎨 PRIORITÉ 2 - SEMAINE 2 (12h)

### Contenu & Images

- [ ] **Organiser le shooting photo** (4h)
  - [ ] Trouver photographe professionnel
  - [ ] Préparer tenue élégante (blazer, couleurs neutres/or)
  - [ ] Choisir lieu (bureau moderne ou fond neutre)
  - [ ] Réaliser le shooting
  - [ ] Sélectionner les meilleures photos
  - [ ] Retouche si nécessaire

- [ ] **Intégrer les photos** (30 min)
  - [ ] Optimiser (WebP, compression)
  - [ ] Remplacer placeholder dans AboutCourtier
  - [ ] Ajouter aux pages nécessaires
  - [ ] Commit: `assets: add professional photos`

- [ ] **Rédiger "À propos de la courtière"** (1h)
  - [ ] Utiliser template dans `RECOMMANDATIONS_CONTENU.md`
  - [ ] Personnaliser avec l'histoire de la courtière
  - [ ] Ajouter certifications ORIAS
  - [ ] Relire et corriger
  - [ ] Commit: `content: add personalized about section`

- [ ] **Rédiger descriptions services** (4h)
  - [ ] PER (Plan Épargne Retraite)
  - [ ] Assurance de Prêt
  - [ ] Complémentaire Santé
  - [ ] Accompagnement Stratégique
  - [ ] Assurance TNS
  - [ ] RC Professionnelle
  - [ ] Utiliser templates dans `RECOMMANDATIONS_CONTENU.md`
  - [ ] Commit: `content: add detailed service descriptions`

- [ ] **Créer 3-5 témoignages clients** (1h)
  - [ ] Contacter anciens clients
  - [ ] Demander autorisation écrite
  - [ ] Rédiger au format recommandé
  - [ ] Ajouter photos si possible
  - [ ] Commit: `content: add real client testimonials`

- [ ] **Relecture complète** (30 min)
  - [ ] Vérifier orthographe
  - [ ] Vérifier cohérence du ton
  - [ ] Vérifier CTA clairs

---

## 🚀 PRIORITÉ 3 - SEMAINE 3-4 (8h)

### Pré-déploiement

- [ ] **Tests navigateurs finaux** (2h)
  - [ ] Chrome (dernière version)
  - [ ] Firefox (dernière version)
  - [ ] Safari (dernière version)
  - [ ] Edge (dernière version)
  - [ ] Documenter les bugs éventuels
  - [ ] Corriger les bugs critiques

- [ ] **Tests mobiles finaux** (2h)
  - [ ] iPhone iOS (Safari)
  - [ ] Android (Chrome)
  - [ ] Tester toutes les interactions
  - [ ] Tester le formulaire
  - [ ] Vérifier la vitesse

- [ ] **Audit final Lighthouse** (1h)
  - [ ] Performance > 90
  - [ ] Accessibility > 95
  - [ ] Best Practices > 95
  - [ ] SEO > 95
  - [ ] Corriger si nécessaire

---

### Déploiement

- [ ] **Configuration HTTPS** (30 min)
  - [ ] Vérifier certificat SSL
  - [ ] Forcer HTTPS
  - [ ] Configurer redirections

- [ ] **Déploiement Vercel/Netlify** (1h)
  - [ ] Créer compte Vercel
  - [ ] Connecter repo GitHub
  - [ ] Configurer variables d'environnement
  - [ ] Déployer
  - [ ] Vérifier le build
  - [ ] Tester le site en production

- [ ] **Configuration DNS** (30 min)
  - [ ] Pointer le domaine vers Vercel/Netlify
  - [ ] Configurer www et @
  - [ ] Attendre propagation (24-48h)

---

### Post-déploiement

- [ ] **Google Search Console** (1h)
  - [ ] Créer compte GSC
  - [ ] Vérifier propriété du site
  - [ ] Soumettre sitemap.xml
  - [ ] Vérifier indexation

- [ ] **Google Analytics vérification** (15 min)
  - [ ] Vérifier que le tracking fonctionne
  - [ ] Tester un événement de conversion
  - [ ] Configurer objectifs de conversion

- [ ] **Google My Business** (45 min)
  - [ ] Créer/mettre à jour fiche GMB
  - [ ] Ajouter photos du bureau
  - [ ] Ajouter horaires d'ouverture
  - [ ] Ajouter catégories (Courtier en assurance)
  - [ ] Vérifier adresse et téléphone

---

## 📊 VALIDATION FINALE

### Checklist Technique

- [ ] ✅ Formulaire de contact envoie bien des emails
- [ ] ✅ Google Analytics track les visites
- [ ] ✅ Sitemap accessible (/sitemap.xml)
- [ ] ✅ Robots.txt accessible (/robots.txt)
- [ ] ✅ Meta OG fonctionnent (tester partage Facebook/LinkedIn)
- [ ] ✅ HTTPS activé et forcé
- [ ] ✅ Favicon visible
- [ ] ✅ Toutes les pages chargent sans erreur

### Checklist Contenu

- [ ] ✅ Texte "À propos" personnalisé
- [ ] ✅ Photos professionnelles de la courtière
- [ ] ✅ Descriptions services détaillées
- [ ] ✅ 3-5 témoignages clients réels
- [ ] ✅ Coordonnées de contact à jour
- [ ] ✅ Numéro ORIAS visible
- [ ] ✅ Mentions légales complètes
- [ ] ✅ Politique de confidentialité (RGPD)

### Checklist Performance

- [ ] ✅ Lighthouse Performance > 90
- [ ] ✅ Lighthouse Accessibility > 95
- [ ] ✅ Lighthouse Best Practices > 95
- [ ] ✅ Lighthouse SEO > 95
- [ ] ✅ Temps de chargement < 3s
- [ ] ✅ Images optimisées (WebP)
- [ ] ✅ Pas d'erreurs console

### Checklist UX

- [ ] ✅ Navigation intuitive
- [ ] ✅ CTA clairs et visibles
- [ ] ✅ Formulaire facile à remplir
- [ ] ✅ Mobile-friendly
- [ ] ✅ Dark/Light mode fonctionnel
- [ ] ✅ Animations fluides (pas de lag)

---

## 🎯 OBJECTIFS POST-LANCEMENT

### Mois 1
- [ ] Atteindre 50 visiteurs/mois organiques
- [ ] Recevoir 2-3 demandes de devis
- [ ] Ajouter 5 avis Google
- [ ] Publier 2 posts sur LinkedIn

### Mois 3
- [ ] Atteindre 100 visiteurs/mois
- [ ] Convertir 5 demandes de devis/mois
- [ ] Obtenir 2 nouveaux clients/mois
- [ ] 10 avis Google positifs

### Mois 6
- [ ] Atteindre 300 visiteurs/mois
- [ ] 12 demandes de devis/mois
- [ ] 4 nouveaux clients/mois
- [ ] 20 avis Google

---

## 📝 NOTES & REMARQUES

**Bugs rencontrés :**
```
[Espace pour noter les bugs et leur résolution]
```

**Améliorations futures :**
```
[Idées pour la v2 du site]
- Calculateur PER
- Blog
- Chat en direct
- Espace client
```

**Temps réel vs Estimé :**
```
Tâche                    | Estimé | Réel | Écart
─────────────────────────┼────────┼──────┼──────
Uniformisation couleurs  | 0.5h   |      |
Formulaire contact       | 2h     |      |
SEO                      | 1h     |      |
Google Analytics         | 0.5h   |      |
Accessibilité            | 3h     |      |
Performance              | 2h     |      |
Contenu                  | 12h    |      |
Tests & Déploiement      | 8h     |      |
─────────────────────────┼────────┼──────┼──────
TOTAL                    | 29h    |      |
```

---

**Bon courage pour la mise en œuvre ! 🚀**

Pensez à commit régulièrement avec des messages clairs :
- `feat:` pour les nouvelles fonctionnalités
- `fix:` pour les corrections
- `perf:` pour les optimisations de performance
- `a11y:` pour l'accessibilité
- `content:` pour le contenu
- `assets:` pour les images/fichiers

---

**Checklist créée par Antigravity AI**  
27 Décembre 2024
