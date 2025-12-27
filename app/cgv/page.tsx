"use client";
import { motion } from "framer-motion";
import { FileText, CheckCircle2, AlertTriangle, Clock, Shield, Handshake, Mail } from "lucide-react";
import Link from "next/link";

export default function CGVPage() {
  const sections = [
    {
      icon: FileText,
      title: "1. Objet et champ d'application",
      content: [
        "Les présentes Conditions Générales de Vente (CGV) régissent les relations entre Novantis Solutions, courtier en assurance, et ses clients dans le cadre de la fourniture de services de courtage en assurance.",
        "Toute commande ou prestation implique l'acceptation sans réserve des présentes CGV par le client.",
      ],
    },
    {
      icon: Handshake,
      title: "2. Services proposés",
      content: [
        "Novantis Solutions propose des services de courtage en assurance, notamment :",
        "• Conseil et accompagnement dans le choix de solutions d'assurance adaptées",
        "• Comparaison et sélection de contrats d'assurance",
        "• Souscription de contrats d'assurance auprès de compagnies d'assurance partenaires",
        "• Gestion et suivi de vos contrats d'assurance",
        "• Accompagnement dans vos démarches de sinistres",
        "• Accompagnement comptable et financier pour les professionnels",
      ],
    },
    {
      icon: Shield,
      title: "3. Obligations de Novantis Solutions",
      content: [
        "Novantis Solutions s'engage à :",
        "• Fournir des conseils adaptés à la situation du client",
        "• Respecter le devoir de conseil conformément à l'article L. 520-1 du Code des assurances",
        "• Informer le client de manière claire et transparente sur les produits proposés",
        "• Assurer un suivi régulier de la relation client",
        "• Respecter la confidentialité des informations communiquées par le client",
      ],
    },
    {
      icon: CheckCircle2,
      title: "4. Obligations du client",
      content: [
        "Le client s'engage à :",
        "• Fournir des informations exactes, complètes et à jour",
        "• Informer Novantis Solutions de tout changement de situation",
        "• Respecter les obligations contractuelles des contrats d'assurance souscrits",
        "• Payer les primes d'assurance dans les délais convenus",
        "• Respecter les conditions générales des contrats d'assurance",
      ],
    },
    {
      icon: Clock,
      title: "5. Commande et acceptation",
      content: [
        "Toute commande de service est soumise à l'acceptation préalable de Novantis Solutions.",
        "L'acceptation de la commande est confirmée par l'envoi d'un devis ou d'une proposition d'assurance.",
        "Le client dispose d'un délai de réflexion pour accepter la proposition.",
      ],
    },
    {
      icon: AlertTriangle,
      title: "6. Tarifs et modalités de paiement",
      content: [
        "Les tarifs des services de courtage sont communiqués au client avant toute prestation.",
        "Novantis Solutions peut percevoir des commissions de la part des compagnies d'assurance, conformément à la réglementation en vigueur.",
        "Les primes d'assurance sont payables directement aux compagnies d'assurance selon les modalités prévues dans les contrats.",
        "En cas de défaut de paiement, Novantis Solutions se réserve le droit de suspendre les prestations.",
      ],
    },
  ];

  return (
    <main className="pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/20 via-amber-500/10 to-primary/20 px-4 py-2 backdrop-blur-sm ring-1 ring-white/10">
            <FileText className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Conditions générales</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white xl:text-hero">
            Conditions Générales de Vente
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-manatee">
            Les présentes CGV régissent les relations entre Novantis Solutions et ses clients
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-manatee">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 rounded-2xl border border-white/10 bg-blacksection p-8 shadow-lg"
        >
          <p className="text-lg leading-relaxed text-manatee">
            Les présentes Conditions Générales de Vente (CGV) s'appliquent à tous les services proposés par Novantis Solutions, société de courtage en assurance. En faisant appel à nos services, vous reconnaissez avoir pris connaissance et accepté ces conditions.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-blacksection p-8 shadow-lg"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-amber-500">
                  <section.icon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              </div>
              <div className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <p key={itemIndex} className="text-manatee">
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Droit de rétractation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-blacksection p-8 shadow-lg"
          >
            <h2 className="mb-6 text-2xl font-bold text-white">7. Droit de rétractation</h2>
            <div className="space-y-4 text-manatee">
              <p>
                Conformément à la réglementation en vigueur, le client dispose d'un délai de rétractation de 14 jours calendaires à compter de la souscription du contrat d'assurance, sauf exceptions prévues par la loi.
              </p>
              <p>
                Pour exercer son droit de rétractation, le client doit notifier sa décision à Novantis Solutions ou directement à la compagnie d'assurance par lettre recommandée avec accusé de réception ou par tout autre moyen durable.
              </p>
            </div>
          </motion.div>

          {/* Responsabilité */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-blacksection p-8 shadow-lg"
          >
            <h2 className="mb-6 text-2xl font-bold text-white">8. Responsabilité</h2>
            <div className="space-y-4 text-manatee">
              <p>
                Novantis Solutions est tenue à une obligation de moyens et non de résultats. Sa responsabilité ne peut être engagée qu'en cas de faute prouvée dans l'exécution de ses prestations.
              </p>
              <p>
                Novantis Solutions dispose d'une assurance responsabilité civile professionnelle conformément à l'article L. 530-1 du Code des assurances.
              </p>
              <p>
                La responsabilité de Novantis Solutions ne peut être engagée pour les dommages résultant de l'exécution des contrats d'assurance souscrits, qui relèvent de la responsabilité des compagnies d'assurance.
              </p>
            </div>
          </motion.div>

          {/* Protection des données */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-blacksection p-8 shadow-lg"
          >
            <h2 className="mb-6 text-2xl font-bold text-white">9. Protection des données personnelles</h2>
            <div className="space-y-4 text-manatee">
              <p>
                Le traitement des données personnelles collectées dans le cadre de nos services est effectué conformément au RGPD et à notre politique de confidentialité.
              </p>
              <p>
                Pour plus d'informations, consultez notre{" "}
                <Link href="/politique-confidentialite" className="text-primary hover:underline">
                  Politique de Confidentialité
                </Link>
                .
              </p>
            </div>
          </motion.div>

          {/* Litiges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-blacksection p-8 shadow-lg"
          >
            <h2 className="mb-6 text-2xl font-bold text-white">10. Médiation et litiges</h2>
            <div className="space-y-4 text-manatee">
              <p>
                Conformément à l'article L. 612-1 du Code de la consommation, le client peut recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable d'un litige qui l'oppose à Novantis Solutions.
              </p>
              <p>
                Le médiateur compétent pour les intermédiaires en assurance est le Médiateur de l'Assurance (MDA).</p>
              <p>
                À défaut de résolution amiable, tout litige relève de la compétence des tribunaux français, conformément à la réglementation en vigueur.
              </p>
            </div>
          </motion.div>

          {/* Droit applicable */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-blacksection p-8 shadow-lg"
          >
            <h2 className="mb-6 text-2xl font-bold text-white">11. Droit applicable et modifications</h2>
            <div className="space-y-4 text-manatee">
              <p>
                Les présentes CGV sont régies par le droit français. Tout litige relatif à leur interprétation ou à leur exécution relève des tribunaux français.
              </p>
              <p>
                Novantis Solutions se réserve le droit de modifier les présentes CGV à tout moment. Les modifications sont applicables aux commandes passées après leur publication sur le site.
              </p>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gradient-to-br from-primary/10 via-amber-900/10 to-transparent p-8 backdrop-blur-sm ring-1 ring-white/10"
          >
            <h2 className="mb-4 text-2xl font-bold text-white">Contact</h2>
            <p className="mb-6 text-manatee">
              Pour toute question concernant ces Conditions Générales de Vente, vous pouvez nous contacter :
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:contact@novantys-solutions.fr" className="text-lg font-semibold text-primary hover:underline">
                  contact@novantys-solutions.fr
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg font-semibold text-white">Par courrier :</span>
                <span className="text-manatee">Novantis Solutions - 31 rue Bistanclaque, 38110 Cessieu</span>
              </div>
            </div>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary via-amber-500 to-primary px-6 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl"
              >
                <Mail className="h-5 w-5" />
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

