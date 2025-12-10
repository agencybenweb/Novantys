"use client";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileCheck, UserCheck, Mail, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function PolitiqueConfidentialitePage() {
  const sections = [
    {
      icon: Shield,
      title: "1. Collecte des données personnelles",
      content: [
        "Novantis Solutions collecte des données personnelles dans le cadre de ses activités de courtage en assurance. Les données collectées peuvent inclure :",
        "• Nom, prénom, date de naissance",
        "• Adresse postale et électronique",
        "• Numéro de téléphone",
        "• Informations professionnelles",
        "• Données relatives à votre situation financière et patrimoniale (dans le cadre de l'évaluation de vos besoins en assurance)",
        "• Données de navigation sur notre site web (cookies, adresse IP)",
      ],
    },
    {
      icon: Lock,
      title: "2. Finalités du traitement",
      content: [
        "Vos données personnelles sont traitées pour les finalités suivantes :",
        "• Gestion de votre dossier client et suivi de votre relation avec Novantis Solutions",
        "• Évaluation de vos besoins en assurance et proposition de solutions adaptées",
        "• Souscription et gestion de vos contrats d'assurance",
        "• Respect de nos obligations légales et réglementaires (Code des assurances)",
        "• Amélioration de nos services et de notre site web",
        "• Envoi d'informations commerciales (avec votre consentement)",
      ],
    },
    {
      icon: Eye,
      title: "3. Base légale du traitement",
      content: [
        "Le traitement de vos données personnelles est fondé sur :",
        "• L'exécution d'un contrat ou de mesures précontractuelles",
        "• Le respect d'obligations légales et réglementaires",
        "• Votre consentement pour les opérations de prospection commerciale",
        "• Notre intérêt légitime pour l'amélioration de nos services",
      ],
    },
    {
      icon: FileCheck,
      title: "4. Conservation des données",
      content: [
        "Vos données personnelles sont conservées :",
        "• Pendant toute la durée de la relation contractuelle",
        "• Pendant les délais légaux de conservation (notamment pour les documents contractuels)",
        "• Pour les données de prospection : jusqu'à 3 ans après le dernier contact",
        "• Les données peuvent être archivées au-delà de ces délais pour répondre à des obligations légales ou pour la gestion des contentieux",
      ],
    },
    {
      icon: UserCheck,
      title: "5. Vos droits",
      content: [
        "Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :",
        "• Droit d'accès : vous pouvez obtenir une copie de vos données personnelles",
        "• Droit de rectification : vous pouvez demander la correction de vos données inexactes",
        "• Droit à l'effacement : vous pouvez demander la suppression de vos données dans certains cas",
        "• Droit à la limitation du traitement",
        "• Droit à la portabilité de vos données",
        "• Droit d'opposition : vous pouvez vous opposer au traitement de vos données pour des motifs légitimes",
        "• Droit de retirer votre consentement à tout moment",
        "• Droit de définir des directives relatives au sort de vos données après votre décès",
      ],
    },
    {
      icon: AlertCircle,
      title: "6. Sécurité des données",
      content: [
        "Novantis Solutions met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre :",
        "• L'accès non autorisé",
        "• La perte ou la destruction accidentelle",
        "• La modification ou la divulgation non autorisée",
        "Ces mesures incluent notamment la sécurisation de nos systèmes d'information, la formation de nos collaborateurs et la mise en place de procédures de contrôle d'accès.",
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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 via-pink-50/50 to-purple-50/50 px-4 py-2 backdrop-blur-sm">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Protection des données</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-black dark:text-white xl:text-hero">
            Politique de Confidentialité
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-waterloo dark:text-manatee">
            Novantis Solutions s'engage à protéger vos données personnelles conformément au RGPD et à la loi Informatique et Libertés
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-waterloo dark:text-manatee">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 rounded-2xl border border-stroke bg-white p-8 shadow-lg dark:border-strokedark dark:bg-blacksection"
        >
          <p className="text-lg leading-relaxed text-waterloo dark:text-manatee">
            Novantis Solutions, en tant que courtier en assurance, attache une grande importance à la protection de vos données personnelles. Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons, partageons et protégeons vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
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
              className="rounded-2xl border border-stroke bg-white p-8 shadow-lg dark:border-strokedark dark:bg-blacksection"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-amber-500">
                  <section.icon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-black dark:text-white">{section.title}</h2>
              </div>
              <div className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <p key={itemIndex} className="text-waterloo dark:text-manatee">
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Partage des données */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-stroke bg-white p-8 shadow-lg dark:border-strokedark dark:bg-blacksection"
          >
            <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">7. Partage des données</h2>
            <div className="space-y-4 text-waterloo dark:text-manatee">
              <p>
                Vos données personnelles peuvent être partagées avec :
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Les compagnies d'assurance avec lesquelles nous travaillons pour la souscription et la gestion de vos contrats</li>
                <li>Nos prestataires techniques (hébergeur, outils informatiques) dans le cadre de la gestion de nos services</li>
                <li>Les autorités compétentes si la loi l'exige (ORIAS, autorités de contrôle)</li>
                <li>Nos partenaires commerciaux, uniquement avec votre consentement explicite</li>
              </ul>
              <p className="mt-4">
                Nous nous assurons que tous nos partenaires respectent les mêmes standards de protection des données que nous.
              </p>
            </div>
          </motion.div>

          {/* Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-stroke bg-white p-8 shadow-lg dark:border-strokedark dark:bg-blacksection"
          >
            <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">8. Cookies et technologies similaires</h2>
            <div className="space-y-4 text-waterloo dark:text-manatee">
              <p>
                Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers texte stockés sur votre appareil.
              </p>
              <p>
                Types de cookies utilisés :
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Cookies strictement nécessaires : indispensables au fonctionnement du site</li>
                <li>Cookies de performance : pour analyser l'utilisation du site</li>
                <li>Cookies de fonctionnalité : pour mémoriser vos préférences</li>
              </ul>
              <p className="mt-4">
                Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.
              </p>
            </div>
          </motion.div>

          {/* Exercice des droits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gradient-to-br from-primary/10 via-pink-50/50 to-purple-50/50 p-8 backdrop-blur-sm dark:from-primary/20 dark:via-pink-900/20 dark:to-purple-900/20"
          >
            <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Exercer vos droits</h2>
            <p className="mb-6 text-waterloo dark:text-manatee">
              Pour exercer vos droits ou pour toute question concernant le traitement de vos données personnelles, vous pouvez nous contacter :
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:contact@novantys-solutions.fr" className="text-lg font-semibold text-primary hover:underline">
                  contact@novantys-solutions.fr
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg font-semibold text-black dark:text-white">Par courrier :</span>
                <span className="text-waterloo dark:text-manatee">Novantis Solutions - 31 rue Bistanclaque, 38110 Cessieu</span>
              </div>
            </div>
            <p className="mt-6 text-sm text-waterloo dark:text-manatee">
              Vous avez également le droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD.
            </p>
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

