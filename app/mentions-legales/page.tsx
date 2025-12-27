"use client";
import { motion } from "framer-motion";
import { FileText, Building2, Phone, Mail, Scale } from "lucide-react";
import Link from "next/link";

export default function MentionsLegalesPage() {
  const sections = [
    {
      icon: Building2,
      title: "Informations légales",
      content: [
        {
          label: "Raison sociale",
          value: "NOVANTYS SOLUTION",
        },
        {
          label: "Forme juridique",
          value: "Société à responsabilité limitée (sans autre indication)",
        },
        {
          label: "Siège social",
          value: "31 RUE BISTANCLAQUE, 38110 CESSIEU, France",
        },
        {
          label: "SIREN",
          value: "989 017 223",
        },
        {
          label: "SIRET du siège social",
          value: "989 017 223 00011",
        },
        {
          label: "TVA Intracommunautaire",
          value: "FR64 989 017 223",
        },
        {
          label: "Code NAF/APE",
          value: "66.22Z",
        },
        {
          label: "Activité principale",
          value: "Activités des agents et courtiers d&apos;assurances",
        },
      ],
    },
    {
      icon: Phone,
      title: "Coordonnées",
      content: [
        {
          label: "Téléphone",
          value: "06 37 76 41 90",
        },
        {
          label: "Email",
          value: "contact@novantys-solutions.fr",
        },
        {
          label: "Site web",
          value: "www.novantys-solutions.fr",
        },
      ],
    },
    {
      icon: Scale,
      title: "Autorisations et garanties",
      content: [
        {
          label: "Autorité de contrôle",
          value: "ORIAS (Organisme pour le Registre des Intermédiaires en Assurance)",
        },
        {
          label: "Numéro ORIAS",
          value: "À compléter",
        },
        {
          label: "Garantie financière",
          value: "Conformément à l'article L. 530-1 du Code des assurances",
        },
        {
          label: "Assurance responsabilité civile professionnelle",
          value: "Conformément à l'article L. 530-1 du Code des assurances",
        },
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
            <span className="text-sm font-medium text-primary">Informations légales</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white xl:text-hero">
            Mentions Légales
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-manatee">
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l&apos;économie numérique
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
              <div className="space-y-4">
                {section.content.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex flex-col gap-2 border-b border-white/10 pb-4 last:border-0 md:flex-row md:items-center"
                  >
                    <span className="min-w-[200px] font-semibold text-white">{item.label} :</span>
                    <span className="text-manatee">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Hébergement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-blacksection p-8 shadow-lg"
          >
            <h2 className="mb-6 text-2xl font-bold text-white">Hébergement et Prestation Web</h2>
            <div className="space-y-4 text-manatee">
              <p>
                Le site web a été réalisé et est hébergé par <strong className="text-white">My Atlantic Agency</strong>, prestataire technique.
              </p>
            </div>
          </motion.div>

          {/* Propriété intellectuelle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-blacksection p-8 shadow-lg"
          >
            <h2 className="mb-6 text-2xl font-bold text-white">Propriété Intellectuelle</h2>
            <div className="space-y-4 text-manatee">
              <p>
                L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p>
                La reproduction de tout ou partie de ce site sur un support électronique quel qu&apos;il soit est formellement interdite sauf autorisation expresse de NOVANTYS SOLUTION.
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
            <h2 className="mb-6 text-2xl font-bold text-white">Protection des Données Personnelles</h2>
            <div className="space-y-4 text-manatee">
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition aux données personnelles vous concernant.
              </p>
              <p>
                Pour exercer ces droits, vous pouvez nous contacter à l&apos;adresse :{" "}
                <a href="mailto:contact@novantys-solutions.fr" className="text-primary hover:underline">
                  contact@novantys-solutions.fr
                </a>
              </p>
              <p>
                Pour plus d&apos;informations, consultez notre{" "}
                <Link href="/politique-confidentialite" className="text-primary hover:underline">
                  Politique de Confidentialité
                </Link>
                .
              </p>
            </div>
          </motion.div>

          {/* Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-blacksection p-8 shadow-lg"
          >
            <h2 className="mb-6 text-2xl font-bold text-white">Cookies</h2>
            <div className="space-y-4 text-manatee">
              <p>
                Ce site utilise des cookies pour améliorer l&apos;expérience utilisateur. En continuant à naviguer sur ce site, vous acceptez l&apos;utilisation de cookies conformément à notre politique de confidentialité.
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
            <h2 className="mb-6 text-2xl font-bold text-white">Limitation de Responsabilité</h2>
            <div className="space-y-4 text-manatee">
              <p>
                NOVANTYS SOLUTION s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu.
              </p>
              <p>
                Toutefois, NOVANTYS SOLUTION ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition sur ce site. En conséquence, NOVANTYS SOLUTION décline toute responsabilité pour tout dommage résultant d&apos;une intrusion d&apos;un tiers ayant entraîné une modification des informations mises à disposition sur le site.
              </p>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gradient-to-br from-primary/10 via-pink-900/20 to-purple-900/20 p-8 backdrop-blur-sm"
          >
            <h2 className="mb-4 text-2xl font-bold text-white">Contact</h2>
            <p className="mb-6 text-manatee">
              Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
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

