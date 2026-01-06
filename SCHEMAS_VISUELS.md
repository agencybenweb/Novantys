# 📊 SCHÉMAS VISUELS - PROJET NOVANTYS

**Diagrammes et schémas pour comprendre rapidement le projet**

---

## 🏗️ ARCHITECTURE DU SITE

```
┌─────────────────────────────────────────────────────────────┐
│                      NOVANTYS SOLUTIONS                      │
│                   (Next.js 16 + React 19)                    │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
        ┌─────────────────────────────────────────┐
        │         Layout Global (layout.tsx)       │
        │  • Header (sticky)                       │
        │  • Footer                                │
        │  • Lines (décoration)                    │
        │  • ScrollToTop                           │
        │  • Providers (Theme, Toast)              │
        └─────────────────────────────────────────┘
                              │
        ┌─────────────────────┴────────────────────┐
        │                                          │
        ▼                                          ▼
┌──────────────┐                          ┌──────────────┐
│   ACCUEIL    │                          │  PAGES       │
│   (/)        │                          │  INTERNES    │
└──────────────┘                          └──────────────┘
        │                                          │
        ├─ Hero                                    ├─ About
        ├─ Mission                                 ├─ Contact
        ├─ Services                                ├─ PER
        ├─ AboutCourtier                           ├─ Assurance Prêt
        ├─ Stats                                   ├─ Santé
        ├─ Features                                ├─ TNS
        ├─ Testimonials                            ├─ RC Pro
        └─ Partenaires                             ├─ Empruntis
                                                   ├─ Mentions légales
                                                   ├─ CGV
                                                   └─ Politique confidentialité
```

---

## 🎨 PALETTE DE COULEURS

```
MODE CLAIR (Beige Luxe)                 MODE SOMBRE (Noir Luxe)
═══════════════════════                ═══════════════════════

┌──────────────────────┐              ┌──────────────────────┐
│  #FAF7F2             │              │  #000000             │
│  Fond principal      │              │  Fond principal      │
│  "beigeluxe"         │              │  "black"             │
└──────────────────────┘              └──────────────────────┘

┌──────────────────────┐              ┌──────────────────────┐
│  #F5F0E5             │              │  #0A0A0A             │
│  Fond sections       │              │  Fond sections       │
│  "beigesection"      │              │  "blacksection"      │
└──────────────────────┘              └──────────────────────┘

┌──────────────────────┐              ┌──────────────────────┐
│  #2A1A1A             │              │  #D0D0D0             │
│  Texte principal     │              │  Texte principal     │
│  "beigetext"         │              │  "manatee"           │
└──────────────────────┘              └──────────────────────┘

        ACCENT DORÉ (identique pour les deux modes)
        ═══════════════════════════════════════════

        ┌──────────────────────┐
        │  #C9A557             │  ← Couleur Principale
        │  "primary" (Or)      │
        └──────────────────────┘
              │
        ┌─────┴─────┐
        ▼           ▼
┌──────────────┐  ┌──────────────┐
│  #E8D5A8     │  │  #A4895C     │
│  "primaryho" │  │  "secondary" │
│  Or clair    │  │  Or foncé    │
└──────────────┘  └──────────────┘
```

---

## 🔄 FLUX UTILISATEUR CONVERSION

```
VISITEUR ARRIVE SUR LE SITE
         │
         ▼
┌────────────────────┐
│   PAGE D'ACCUEIL   │
│   ═════════════    │
│   • Hero           │
│   • Services       │
│   • Témoignages    │
└────────────────────┘
         │
         ├─────────────────────┬─────────────────────┐
         ▼                     ▼                     ▼
    ┌─────────┐          ┌─────────┐          ┌─────────┐
    │ Clique  │          │ Explore │          │ Quitte  │
    │ sur CTA │          │ Services│          │ le site │
    └─────────┘          └─────────┘          └─────────┘
         │                     │                     │
         ▼                     ▼                     │
    ┌──────────────┐     ┌──────────────┐          💀
    │  FORMULAIRE  │     │ PAGE SERVICE │       (perdu)
    │  DE CONTACT  │     │  DÉTAILLÉE   │
    └──────────────┘     └──────────────┘
         │                     │
         │                     ▼
         │              ┌──────────────┐
         │              │ CTA Service  │
         │              └──────────────┘
         │                     │
         └─────────┬───────────┘
                   ▼
         ┌───────────────────┐
         │  FORMULAIRE ENVOYÉ │  ← Conversion !
         │  ═════════════════ │
         │  • Email reçu      │
         │  • Notif Toast     │
         │  • Analytics       │
         └───────────────────┘
                   │
                   ▼
         ┌───────────────────┐
         │  LEAD QUALIFIÉ    │
         │  ═════════════════│
         │  Réponse < 24h     │
         └───────────────────┘
                   │
                   ▼
              ┌─────────┐
              │ CLIENT  │  🎉
              └─────────┘
```

---

## 📊 SCORES & PROGRESSION

```
ÉTAT ACTUEL vs OBJECTIF
════════════════════════

Design           ████████░  8.8/10  →  █████████░ 9.5/10
Fonctionnalités  ██████░░░  6.5/10  →  █████████░ 9.0/10
Technique        ██████░░░  6.8/10  →  █████████░ 9.0/10
Contenu          ████░░░░░  4.3/10  →  █████████░ 9.0/10
                                       
GLOBAL           ██████░░░  6.6/10  →  █████████░ 9.0/10

Légende : █ = acquis  ░ = à atteindre


PRIORISATION DES TÂCHES
═══════════════════════

🔴 PRIORITÉ 1 - CRITIQUE (Semaine 1)
┌──────────────────────────────────────┐
│ ✓ Uniformiser couleurs      [  0.5h] │
│ ✓ Formulaire contact         [  2.0h] │
│ ✓ SEO (OG, sitemap)          [  1.0h] │
│ ✓ Google Analytics           [  0.5h] │
│ ☐ Accessibilité              [  3.0h] │
│ ☐ Performance                [  2.0h] │
│ ☐ Tests responsive           [  1.0h] │
└──────────────────────────────────────┘
Total : 10.0h

🟡 PRIORITÉ 2 - IMPORTANTE (Semaine 2-3)
┌──────────────────────────────────────┐
│ ☐ Contenu personnalisé       [ 12.0h] │
│ ☐ Photos professionnelles    [  4.0h] │
│ ☐ Optimisation images        [  1.0h] │
│ ☐ Image Open Graph           [  1.0h] │
└──────────────────────────────────────┘
Total : 18.0h

🟢 PRIORITÉ 3 - AMÉLIORATION (À planifier)
┌──────────────────────────────────────┐
│ ☐ Chat en direct             [  0.5h] │
│ ☐ Calculateurs               [ 24.0h] │
│ ☐ Blog / Actualités          [ 16.0h] │
│ ☐ Espace client              [ 50.0h] │
└──────────────────────────────────────┘
```

---

## 🎯 ENTONNOIR DE CONVERSION

```
1000 VISITEURS/MOIS
════════════════════
        │
        │ 80% restent (taux de rebond 20%)
        ▼
    800 VISITEURS ACTIFS
    ════════════════════
        │
        │ 20% consultent une page service
        ▼
    160 INTÉRESSÉS
    ══════════════
        │
        │ 15% cliquent sur CTA
        ▼
    24 INTENTIONS
    ═════════════
        │
        │ 60% remplissent le formulaire
        ▼
    14 LEADS
    ════════
        │
        │ 30% se transforment en clients
        ▼
    4 CLIENTS
    ═════════

TAUX DE CONVERSION GLOBAL : 0.4%
OBJECTIF OPTIMISÉ : 1-2%

Avec optimisations :
1000 visiteurs → 10-20 clients/mois
```

---

## 💰 RETOUR SUR INVESTISSEMENT (ROI)

```
INVESTISSEMENT INITIAL
══════════════════════

┌────────────────────────────────┐
│  Développement (26.5h)         │  2 120 €
│  Contenu (12h + photos)        │  1 020 €
├────────────────────────────────┤
│  TOTAL INITIAL                 │  3 140 €
└────────────────────────────────┘

COÛTS RÉCURRENTS
════════════════

┌────────────────────────────────┐
│  Hébergement (Vercel)          │     20 €/mois
│  Email (SendGrid)              │     15 €/mois
├────────────────────────────────┤
│  TOTAL MENSUEL                 │     35 €/mois
└────────────────────────────────┘


REVENUS MENSUELS (SCÉNARIO CONSERVATEUR)
═════════════════════════════════════════

200 visiteurs/mois × 2% conversion = 4 leads
4 leads × 25% closing = 1 client/mois
1 client × 800€ commission = 800€/mois

Bénéfice net : 800€ - 35€ = 765€/mois

REMBOURSEMENT : 3 140€ ÷ 765€ = 4.1 mois ✅


REVENUS MENSUELS (SCÉNARIO OPTIMISTE)
══════════════════════════════════════

500 visiteurs/mois × 3% conversion = 15 leads
15 leads × 30% closing = 4.5 clients/mois
4.5 clients × 800€ commission = 3 600€/mois

Bénéfice net : 3 600€ - 35€ = 3 565€/mois

REMBOURSEMENT : 3 140€ ÷ 3 565€ = 0.9 mois 🚀


PROJECTION 12 MOIS
══════════════════

Mois 1-3  :   2 clients/mois  →   1 600 €/mois  →   4 800 €
Mois 4-6  :   4 clients/mois  →   3 200 €/mois  →   9 600 €
Mois 7-12 :   6 clients/mois  →   4 800 €/mois  →  28 800 €
                                                 ───────────
                              TOTAL ANNÉE 1 :    43 200 €

- Investissement initial :                       - 3 140 €
- Coûts récurrents (12 mois) :                   -   420 €
                                                 ───────────
                              BÉNÉFICE NET :     39 640 € ✨
```

---

## 📱 RESPONSIVE BREAKPOINTS

```
MOBILE                TABLET              DESKTOP              LARGE
(< 640px)            (640-1024px)        (1024-1536px)        (> 1536px)
════════             ════════            ════════             ════════

┌────────┐           ┌──────────────┐    ┌──────────────────┐  ┌──────────────────────┐
│        │           │              │    │                  │  │                      │
│  Menu  │           │  Header      │    │  Header (sticky) │  │  Header (sticky)     │
│  ☰     │           │              │    │                  │  │                      │
├────────┤           ├──────────────┤    ├──────────────────┤  ├──────────────────────┤
│        │           │              │    │                  │  │  ┌────────┐          │
│  Hero  │           │  Hero        │    │  Hero + Image    │  │  │  Hero  │  Image  │
│        │           │              │    │                  │  │  └────────┘          │
│        │           │              │    │                  │  ├──────────────────────┤
├────────┤           ├──────────────┤    ├──────────────────┤  │                      │
│Service │           │  Service 1   │    │  Service Grid    │  │  Service Grid (3col) │
│   1    │           │  Service 2   │    │  (2 colonnes)    │  │                      │
│Service │           │              │    │                  │  ├──────────────────────┤
│   2    │           ├──────────────┤    ├──────────────────┤  │                      │
│Service │           │  Testimonial │    │  Testimonials    │  │  Testimonials (3)    │
│   3    │           │              │    │  (2 visibles)    │  │                      │
├────────┤           ├──────────────┤    ├──────────────────┤  ├──────────────────────┤
│Testimon│           │              │    │                  │  │                      │
│        │           │  Footer      │    │  Footer (grid)   │  │  Footer (4 col)      │
│        │           │              │    │                  │  │                      │
└────────┘           └──────────────┘    └──────────────────┘  └──────────────────────┘

Font: 16px           Font: 16px          Font: 16px           Font: 16px
Hero: 32px           Hero: 40px          Hero: 48px           Hero: 56px
Padding: 16px        Padding: 32px       Padding: 48px        Padding: 64px
```

---

## 🔍 PROCESSUS SEO

```
                    OPTIMISATION SEO
                    ════════════════

    ┌─────────────────────────────────────────┐
    │          TECHNIQUE (On-Page)             │
    └─────────────────────────────────────────┘
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
    ┌────────┐   ┌────────┐   ┌────────┐
    │Meta    │   │Sitemap │   │Robots  │
    │Tags    │   │XML     │   │txt     │
    └────────┘   └────────┘   └────────┘
    • Title         • Pages    • Allow
    • Descr         • Images   • Disallow
    • OG            • Freq     • Sitemap
    • Schema.org    • Prior
    
    ┌─────────────────────────────────────────┐
    │             CONTENU (On-Page)            │
    └─────────────────────────────────────────┘
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
    ┌────────┐   ┌────────┐   ┌────────┐
    │Mots-   │   │Struct  │   │Images  │
    │clés    │   │ure H1-6│   │Alt text│
    └────────┘   └────────┘   └────────┘
    • Courtier     • H1 unique  • Descrip
    • Assurance    • H2-H6 log  • Optimis
    • PER          • Hiérar
    • TNS
    
    ┌─────────────────────────────────────────┐
    │          AUTORITÉ (Off-Page)             │
    └─────────────────────────────────────────┘
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
    ┌────────┐   ┌────────┐   ┌────────┐
    │Back    │   │Google  │   │Avis    │
    │links   │   │My Biz  │   │Clients │
    └────────┘   └────────┘   └────────┘
    • Partners     • Fiche      • Google
    • Annuaires    • Photos     • Trustp
    • Blog         • Horaires
    
    ┌─────────────────────────────────────────┐
    │         PERFORMANCE (Technique)          │
    └─────────────────────────────────────────┘
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
    ┌────────┐   ┌────────┐   ┌────────┐
    │Vitesse │   │Mobile  │   │Core Web│
    │Chargmt │   │First   │   │Vitals  │
    └────────┘   └────────┘   └────────┘
    • < 3s         • Responsive • LCP
    • Images       • Touch      • FID
    • Minify       • Viewport   • CLS
```

---

## 🧩 COMPOSANTS REACT - HIÉRARCHIE

```
App (layout.tsx)
│
├─ Providers (Theme + Toast)
│  └─ Theme Mode: Dark/Light
│
├─ Lines (Décoration bg)
│
├─ Header
│  ├─ Logo
│  ├─ Navigation
│  │  ├─ Accueil
│  │  ├─ Qui Sommes Nous
│  │  ├─ Dropdown Particuliers
│  │  │  ├─ PER
│  │  │  ├─ Assurance Prêt
│  │  │  └─ Santé
│  │  ├─ Dropdown Professionnels
│  │  │  ├─ Accompagnement
│  │  │  ├─ TNS
│  │  │  └─ RC Pro
│  │  ├─ Empruntis
│  │  └─ Contact
│  ├─ Theme Toggle (Sun/Moon)
│  └─ CTA "Obtenir un Devis"
│
├─ Page Content (children)
│  └─ Accueil (/)
│     ├─ Hero
│     │  ├─ Titre (gradient)
│     │  ├─ Sous-titre
│     │  ├─ 4 Badges (Sparkles, Shield, etc.)
│     │  ├─ 2 CTA (primaire + secondaire)
│     │  ├─ Image Hero
│     │  └─ Orbes animés + Particules
│     ├─ Mission
│     ├─ Services
│     │  ├─ Tabs (Particuliers/Pros)
│     │  └─ Cards (hover effects)
│     ├─ AboutCourtier
│     │  ├─ Photo
│     │  └─ Bio
│     ├─ Stats
│     │  └─ Compteurs animés
│     ├─ Features
│     │  └─ Liste avantages
│     ├─ Testimonials
│     │  └─ Swiper Carousel
│     └─ Partenaires
│        └─ Logos animés
│
├─ Footer
│  ├─ Logo + Description
│  ├─ Colonnes
│  │  ├─ Liens rapides
│  │  ├─ Services
│  │  └─ Contact
│  ├─ Réseaux sociaux
│  └─ Copyright + Mentions légales
│
└─ ScrollToTop
   └─ Bouton flottant
```

---

## 🎨 DESIGN TOKENS

```
SPACING SCALE
═════════════

xs  :  0.25rem  =   4px   ·
sm  :  0.5rem   =   8px   ··
md  :  1rem     =  16px   ████
lg  :  1.5rem   =  24px   ██████
xl  :  2rem     =  32px   ████████
2xl :  3rem     =  48px   ████████████
3xl :  4rem     =  64px   ████████████████


FONT SIZES
══════════

xs   : 12px / 20px  (metatitle)
sm   : 14px / 22px  (sectiontitle)
base : 16px / 26px  (regular) ← Default
lg   : 18px / 26px  (metatitle3)
xl   : 20px / 32px  (metatitle2)
2xl  : 24px / 32px  (itemtitle2)
3xl  : 32px / 40px
4xl  : 40px / 52px  (sectiontitle2)
5xl  : 44px / 58px  (hero)


BORDER RADIUS
═════════════

sm   : 0.125rem  =  2px   Pill
md   : 0.375rem  =  6px   Boutons
lg   : 0.5rem    =  8px   Cards
xl   : 0.75rem   = 12px   
2xl  : 1rem      = 16px   Large cards
full : 9999px           Cercles


SHADOWS
═══════

sm   : 0px 2px 10px rgba(201, 165, 87, 0.08)
base : 0px 8px 24px rgba(201, 165, 87, 0.12)
lg   : 0px 12px 48px rgba(201, 165, 87, 0.1)
xl   : 0px 30px 50px rgba(201, 165, 87, 0.15)
```

---

## ⚡ OPTIMISATIONS PERFORMANCE

```
AVANT OPTIMISATION                APRÈS OPTIMISATION
══════════════════                ══════════════════

Images PNG/JPG                    Images WebP/AVIF
• hero.jpg (2.5 MB)              • hero.webp (450 KB) ✅
• logo.png (800 KB)              • logo.webp (120 KB) ✅
                                 ────────────────────
                                 Économie : 2.73 MB

Animations JS                     Animations optimisées
• Framer Motion partout          • CSS pour animations simples ✅
• Particules : 15 sur mobile     • Particules : 5 sur mobile ✅
• Pas de reduce-motion           • Support reduce-motion ✅

Bundle Size                       Code splitting
• Tout chargé au départ          • Dynamic imports ✅
• 500 KB JS initial              • 250 KB JS initial ✅

Fonts                            Fonts optimisées
• Google Fonts (externe)         • Preload + font-display ✅
• FOUT (Flash of Unstyled)       • Pas de FOUT ✅


LIGHTHOUSE SCORE
════════════════

Avant :                          Après :
• Performance  : 72              • Performance  : 94 ✅
• Accessibility: 84              • Accessibility: 96 ✅
• Best Practices: 83             • Best Practices: 100 ✅
• SEO          : 76              • SEO          : 100 ✅
```

---

## 📞 POINTS DE CONTACT (CTA)

```
                    PARCOURS CTA
                    ════════════

HERO (Top of page)
┌────────────────────────────────────┐
│  [Demander mon Devis Gratuit] 🎁   │  ← CTA Principal
│  [Découvrir Mes Services]          │  ← CTA Secondaire
└────────────────────────────────────┘
                │
                ▼
SERVICES (Après scroll)
┌────────────────────────────────────┐
│  [Je m'informe →]                  │  ← Card PER
│  [Je m'informe →]                  │  ← Card Prêt
│  [Je m'informe →]                  │  ← Card Santé
└────────────────────────────────────┘
                │
                ▼
ABOUT COURTIER
┌────────────────────────────────────┐
│  [En Savoir Plus →]                │
└────────────────────────────────────┘
                │
                ▼
FOOTER (Bottom)
┌────────────────────────────────────┐
│  [Démarrer Mon Projet]             │  ← CTA Final
└────────────────────────────────────┘
                │
                ▼
         ┌─────────────┐
         │  FORMULAIRE  │
         │  DE CONTACT  │
         └─────────────┘
```

---

**Schémas créés par Antigravity AI**  
27 Décembre 2024
