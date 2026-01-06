# 🎯 PLAN D'ACTION - MODIFICATIONS NOVANTYS

**Date de création :** 27 Décembre 2024  
**Objectif :** Transformer le site Novantys en un site premium, féminin, moderne et orienté conversion

---

## 📋 PRIORITÉS

### 🔴 PRIORITÉ 1 - CRITIQUE (Cette semaine)
### 🟡 PRIORITÉ 2 - IMPORTANTE (Semaine prochaine)
### 🟢 PRIORITÉ 3 - AMÉLIORATION (À planifier)

---

## 🔴 PRIORITÉ 1 - MODIFICATIONS CRITIQUES

### 1.1 Uniformisation de la Palette de Couleurs

**Problème :** Hero contient des gradients roses/violets hors charte  
**Impact :** ❌ Incohérence visuelle majeure  
**Temps estimé :** 30 minutes

#### Fichiers à modifier :

**`components/Hero/index.tsx`**

```tsx
// TROUVER ET REMPLACER :

// ❌ AVANT
className="bg-gradient-to-r from-primary via-pink-500 to-purple-600 bg-clip-text text-transparent"

// ✅ APRÈS
className="bg-gradient-to-r from-primary via-primaryho to-gold bg-clip-text text-transparent"
```

```tsx
// Vérifier aussi les orbes en arrière-plan
// ❌ AVANT
<div className="... bg-purple-500/10 ..." />
<div className="... bg-pink-500/10 ..." />

// ✅ APRÈS
<div className="... bg-primary/10 ..." />
<div className="... bg-goldlight/10 ..." />
```

**Action :**
- [ ] Ouvrir `components/Hero/index.tsx`
- [ ] Remplacer tous les `pink-`, `purple-`, `violet-` par des variantes de `primary`, `gold`
- [ ] Tester visuellement le résultat
- [ ] Valider la cohérence avec la charte

---

### 1.2 Implémentation du Formulaire de Contact

**Problème :** Formulaire non fonctionnel, aucune conversion possible  
**Impact :** ❌ Bloquant pour l'activité commerciale  
**Temps estimé :** 2 heures

#### Étape 1 : Créer l'API Route

**Créer le fichier :** `app/api/contact/route.ts`

```typescript
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, subject } = body;

    // Validation des champs obligatoires
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nom, email et message sont obligatoires" },
        { status: 400 }
      );
    }

    // Validation format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Format d'email invalide" },
        { status: 400 }
      );
    }

    // Configuration du transporteur email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Envoi de l'email
    await transporter.sendMail({
      from: `"Site Novantys" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || "contact@novantys.fr",
      replyTo: email,
      subject: `[Novantys] Nouveau message: ${subject || "Contact"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #C9A557 0%, #E8D5A8 100%); padding: 20px; text-align: center;">
            <h1 style="color: #000; margin: 0;">Nouveau message depuis le site</h1>
          </div>
          
          <div style="background: #f9f9f9; padding: 30px; border: 1px solid #e0e0e0;">
            <h2 style="color: #C9A557; margin-top: 0;">Détails du contact</h2>
            
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Téléphone :</strong> ${phone}</p>` : ""}
            ${subject ? `<p><strong>Sujet :</strong> ${subject}</p>` : ""}
            
            <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
            
            <h3 style="color: #C9A557;">Message :</h3>
            <div style="background: white; padding: 15px; border-left: 4px solid #C9A557;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <div style="background: #2A2A2A; color: #D0D0D0; padding: 15px; text-align: center; font-size: 12px;">
            <p>Cet email a été envoyé automatiquement depuis le formulaire de contact de novantys.fr</p>
          </div>
        </div>
      `,
      text: `
Nouveau message depuis le site Novantys

Nom: ${name}
Email: ${email}
${phone ? `Téléphone: ${phone}` : ""}
${subject ? `Sujet: ${subject}` : ""}

Message:
${message}
      `,
    });

    return NextResponse.json(
      { success: true, message: "Message envoyé avec succès !" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Erreur envoi email:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
```

#### Étape 2 : Installer les dépendances

```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

#### Étape 3 : Configurer les variables d'environnement

**Créer/Modifier :** `.env.local`

```env
# Configuration SMTP (exemple avec Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre-email@gmail.com
SMTP_PASSWORD=votre-mot-de-passe-application

# Email de destination
CONTACT_EMAIL=contact@novantys.fr
```

**⚠️ Important pour Gmail :**
1. Activer l'authentification à 2 facteurs
2. Générer un "Mot de passe d'application"
3. Utiliser ce mot de passe dans `SMTP_PASSWORD`

#### Étape 4 : Mettre à jour le composant de contact

**Modifier :** `app/contact/page.tsx`

```tsx
"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Message envoyé avec succès !");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        toast.error(data.error || "Erreur lors de l'envoi");
      }
    } catch (error) {
      toast.error("Erreur réseau. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 lg:py-25">
      <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0">
        <motion.form
          onSubmit={handleSubmit}
          className="card-gold max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="heading-gold text-4xl mb-8">Contactez-nous</h1>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Nom complet <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-stroke dark:border-strokedark bg-white dark:bg-blacksection text-beigetext dark:text-white focus:border-primary focus:outline-none transition"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Email <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-stroke dark:border-strokedark bg-white dark:bg-blacksection text-beigetext dark:text-white focus:border-primary focus:outline-none transition"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-stroke dark:border-strokedark bg-white dark:bg-blacksection text-beigetext dark:text-white focus:border-primary focus:outline-none transition"
                placeholder="06 12 34 56 78"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Sujet
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-stroke dark:border-strokedark bg-white dark:bg-blacksection text-beigetext dark:text-white focus:border-primary focus:outline-none transition"
                placeholder="Sujet de votre message"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Message <span className="text-primary">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-stroke dark:border-strokedark bg-white dark:bg-blacksection text-beigetext dark:text-white focus:border-primary focus:outline-none transition resize-none"
                placeholder="Décrivez votre besoin..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-gold w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>Envoi en cours...</>
              ) : (
                <>
                  Envoyer le message
                  <Send className="h-5 w-5" />
                </>
              )}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
```

**Actions :**
- [ ] Créer l'API route
- [ ] Installer nodemailer
- [ ] Configurer les variables d'environnement
- [ ] Mettre à jour le formulaire
- [ ] Tester l'envoi d'email

---

### 1.3 Optimisation SEO - Meta Tags

**Problème :** Meta tags incomplets, pas d'Open Graph  
**Impact :** ⚠️ Mauvais partage sur réseaux sociaux, SEO sous-optimal  
**Temps estimé :** 1 heure

#### Fichier à modifier : `app/layout.tsx`

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://novantys-solutions.fr"),
  
  title: {
    default: "Novantys Solutions | Courtier en Assurance & Financement",
    template: "%s | Novantys Solutions",
  },
  
  description:
    "Courtier en assurance et financement à votre écoute. Accompagnement personnalisé pour particuliers et professionnels. Devis gratuit et conseil expert.",
  
  keywords: [
    "courtier assurance",
    "assurance prêt immobilier",
    "plan épargne retraite",
    "complémentaire santé",
    "RC professionnelle",
    "assurance TNS",
    "courtage assurance",
    "financement",
  ],
  
  authors: [{ name: "Novantys Solutions" }],
  
  creator: "Novantys Solutions",
  
  publisher: "Novantys Solutions",
  
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://novantys-solutions.fr",
    siteName: "Novantys Solutions",
    title: "Novantys Solutions | Courtier en Assurance & Financement",
    description:
      "Courtier en assurance et financement à votre écoute. Accompagnement personnalisé pour particuliers et professionnels.",
    images: [
      {
        url: "/og-image.jpg", // À créer
        width: 1200,
        height: 630,
        alt: "Novantys Solutions - Courtier en Assurance",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Novantys Solutions | Courtier en Assurance",
    description:
      "Courtier en assurance et financement à votre écoute. Devis gratuit.",
    images: ["/og-image.jpg"],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  icons: {
    icon: [
      { url: "/assets/images/logo-dor-removebg-preview.png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  
  manifest: "/site.webmanifest",
  
  alternates: {
    canonical: "https://novantys-solutions.fr",
  },
};
```

#### Créer l'image Open Graph

**Créer :** `/public/og-image.jpg` (1200x630px)
- Logo Novantys
- Texte : "Courtier en Assurance & Financement"
- Fond : noir avec accents dorés

**Actions :**
- [ ] Modifier `app/layout.tsx` avec les nouvelles meta tags
- [ ] Créer l'image OG (1200x630px)
- [ ] Créer les favicons (utiliser https://realfavicongenerator.net/)
- [ ] Tester avec https://www.opengraph.xyz/

---

### 1.4 Ajouter Google Analytics

**Problème :** Aucun tracking des visiteurs et conversions  
**Impact :** ❌ Impossible de mesurer la performance  
**Temps estimé :** 30 minutes

#### Étape 1 : Créer un compte Google Analytics
1. Aller sur https://analytics.google.com/
2. Créer une propriété GA4
3. Récupérer l'ID de mesure (format : G-XXXXXXXXXX)

#### Étape 2 : Créer le composant Analytics

**Créer :** `components/GoogleAnalytics/index.tsx`

```tsx
"use client";

import Script from "next/script";

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
```

#### Étape 3 : Intégrer dans le layout

**Modifier :** `app/layout.tsx`

```tsx
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-XXXXXXXXXX" />
        <Providers>
          {/* ... reste du code */}
        </Providers>
      </body>
    </html>
  );
}
```

#### Étape 4 : Tracker les événements de conversion

**Créer :** `lib/analytics.ts`

```typescript
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, eventParams);
  }
};

// Événements prédéfinis
export const trackFormSubmit = (formName: string) => {
  trackEvent("form_submit", { form_name: formName });
};

export const trackCTAClick = (ctaName: string) => {
  trackEvent("cta_click", { cta_name: ctaName });
};

export const trackServiceView = (serviceName: string) => {
  trackEvent("service_view", { service_name: serviceName });
};
```

**Actions :**
- [ ] Créer compte Google Analytics
- [ ] Créer le composant GoogleAnalytics
- [ ] Intégrer dans le layout
- [ ] Ajouter le tracking des événements
- [ ] Tester avec Google Analytics DebugView

---

## 🟡 PRIORITÉ 2 - MODIFICATIONS IMPORTANTES

### 2.1 Améliorer l'Accessibilité

**Temps estimé :** 3 heures

#### Checklist WCAG AA

**Header :**
- [ ] Ajouter `role="navigation"` sur la nav
- [ ] Ajouter `aria-expanded` sur les dropdowns
- [ ] Améliorer les labels pour les lecteurs d'écran

**Formulaires :**
- [ ] Associer tous les labels avec `htmlFor`
- [ ] Ajouter `aria-required` sur les champs obligatoires
- [ ] Messages d'erreur avec `aria-live`

**Boutons :**
- [ ] Tous les boutons doivent avoir du texte ou `aria-label`
- [ ] Focus visible avec outline doré

**Images :**
- [ ] Vérifier tous les `alt` text
- [ ] Images décoratives avec `alt=""`

**Contraste :**
- [ ] Vérifier le contraste (minimum 4.5:1 pour texte normal)
- [ ] Utiliser https://webaim.org/resources/contrastchecker/

---

### 2.2 Optimiser les Performances

**Temps estimé :** 2 heures

#### Images
```bash
# Installer sharp pour optimisation
npm install sharp
```

**Créer :** `next.config.ts`
```typescript
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
```

#### Lazy Loading
- [ ] Vérifier que tous les `<Image>` utilisent `loading="lazy"` (sauf hero)
- [ ] Lazy load des composants lourds avec `dynamic`

```tsx
import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div>Chargement...</div>,
});
```

#### Bundle Size
```bash
# Analyser le bundle
npm install @next/bundle-analyzer
```

---

### 2.3 Créer le Sitemap et Robots.txt

**Temps estimé :** 30 minutes

**Créer :** `app/sitemap.ts`

```typescript
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://novantys-solutions.fr";
  
  const routes = [
    "",
    "/about",
    "/contact",
    "/simulateur-per",
    "/assurance-pret",
    "/complementaire-sante",
    "/accompagnement-strategique",
    "/travailleurs-non-salaries",
    "/rc-pro",
    "/partenaire-empruntis",
    "/mentions-legales",
    "/politique-confidentialite",
    "/cgv",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
```

**Créer :** `app/robots.ts`

```typescript
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: "https://novantys-solutions.fr/sitemap.xml",
  };
}
```

**Actions :**
- [ ] Créer sitemap.ts
- [ ] Créer robots.ts
- [ ] Tester sur https://novantys-solutions.fr/sitemap.xml
- [ ] Soumettre à Google Search Console

---

### 2.4 Améliorer les Animations Mobile

**Temps estimé :** 1 heure

**Créer :** `lib/useMediaQuery.ts`

```typescript
import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

export const useIsMobile = () => useMediaQuery("(max-width: 768px)");
export const usePrefersReducedMotion = () =>
  useMediaQuery("(prefers-reduced-motion: reduce)");
```

**Utilisation dans Hero :**

```tsx
import { useIsMobile, usePrefersReducedMotion } from "@/lib/useMediaQuery";

export default function Hero() {
  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();

  // Réduire le nombre de particules sur mobile
  const particleCount = isMobile ? 5 : 15;
  
  // Désactiver les animations si l'utilisateur préfère
  const shouldAnimate = !prefersReducedMotion;

  return (
    // ...
    {[...Array(particleCount)].map((_, i) => (
      <motion.div
        animate={shouldAnimate ? { /* animations */ } : {}}
      />
    ))}
  );
}
```

---

## 🟢 PRIORITÉ 3 - AMÉLIORATIONS

### 3.1 Ajouter un Chat en Direct

**Options :**
- Crisp (gratuit) : https://crisp.chat/
- Tawk.to (gratuit) : https://www.tawk.to/
- Intercom (payant) : https://www.intercom.com/

**Temps estimé :** 15 minutes

---

### 3.2 Intégrer des Calculateurs

**Idées :**
- Simulateur PER (calcul épargne retraite)
- Simulateur crédit immobilier
- Calculateur d'assurance emprunteur

**Temps estimé :** 8-10 heures par calculateur

---

### 3.3 Ajouter un Blog

**Bénéfices :**
- SEO (mots-clés longue traîne)
- Autorité sur le secteur
- Engagement des visiteurs

**Structure :**
```
app/blog/
├── page.tsx           # Liste des articles
├── [slug]/
│   └── page.tsx       # Article individuel
└── layout.tsx
```

**Temps estimé :** 6-8 heures (structure) + rédaction

---

### 3.4 Espace Client Sécurisé

**Fonctionnalités :**
- Connexion sécurisée
- Dashboard client
- Documents (devis, contrats)
- Messagerie avec la courtière

**Temps estimé :** 40-60 heures

---

## 📊 RÉCAPITULATIF TEMPS

| Priorité | Tâche | Temps |
|----------|-------|-------|
| 🔴 1.1 | Uniformisation couleurs | 0.5h |
| 🔴 1.2 | Formulaire contact | 2h |
| 🔴 1.3 | SEO Meta Tags | 1h |
| 🔴 1.4 | Google Analytics | 0.5h |
| 🟡 2.1 | Accessibilité | 3h |
| 🟡 2.2 | Performance | 2h |
| 🟡 2.3 | Sitemap/Robots | 0.5h |
| 🟡 2.4 | Animations mobile | 1h |
| **TOTAL P1+P2** | | **10.5h** |

---

## ✅ CHECKLIST FINALE

### Avant de déployer
- [ ] Tests sur Chrome, Firefox, Safari, Edge
- [ ] Tests mobile (iOS + Android)
- [ ] Vérifier tous les liens
- [ ] Vérifier toutes les images
- [ ] Test formulaire de contact
- [ ] Vérifier Google Analytics
- [ ] Audit Lighthouse (score > 90)
- [ ] Audit accessibilité (WAVE)
- [ ] Vérifier sitemap.xml
- [ ] Vérifier robots.txt

### Après déploiement
- [ ] Soumettre sitemap à Google Search Console
- [ ] Configurer Google My Business
- [ ] Vérifier les Core Web Vitals
- [ ] Monitorer les conversions
- [ ] Récolter les premiers témoignages

---

**Document créé par Antigravity AI**  
Prêt pour l'implémentation !
