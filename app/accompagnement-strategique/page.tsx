"use client";
import { motion } from "framer-motion";
import {
  Briefcase,
  Shield,
  TrendingUp,
  Users,
  FileText,
  Calculator,
  Target,
  Handshake,
  CheckCircle2,
  Sparkles,
  Phone,
  Mail,
} from "lucide-react";

export default function AccompagnementStrategiquePage() {
  const services = [
    {
      icon: Briefcase,
      title: "Création d'entreprise",
      description: "Accompagnement dans le montage de projet, le lancement de l'activité et la mise en place de bases solides.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Développement & Croissance",
      description: "Suivi régulier, stratégique et administratif pour garantir la pérennité et l'optimisation de l'entreprise.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: Shield,
      title: "Protection sur mesure",
      description: "Solutions de protection adaptées : protection de l'activité, du dirigeant et de ses collaborateurs.",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: Calculator,
      title: "Accompagnement Comptable & Financier",
      description: "Suivi des obligations, lecture claire des chiffres, préparation des bilans et aide à la prise de décisions.",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const valeurs = [
    {
      icon: Handshake,
      title: "Relation humaine",
      description: "Proximité et transparence au cœur de notre engagement",
    },
    {
      icon: Target,
      title: "Solutions sur mesure",
      description: "Chaque entreprise est unique, nous construisons des solutions évolutives",
    },
    {
      icon: Users,
      title: "Indépendance",
      description: "Approche indépendante orientée uniquement vers l'intérêt du client",
    },
    {
      icon: FileText,
      title: "Accompagnement durable",
      description: "Suivi personnalisé et durable pensé pour répondre aux besoins réels",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-white via-alabaster to-white pb-20 pt-35 dark:from-black dark:via-blacksection dark:to-black lg:pt-40 xl:pb-25 xl:pt-46">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-1">
        <motion.div
          className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/10 via-pink-100/20 to-transparent blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-cyan-100/20 via-blue-100/20 to-transparent blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 via-pink-50/50 to-purple-50/50 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Novantis Solutions</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-black dark:text-white xl:text-hero">
            L'accompagnement stratégique{" "}
            <span className="bg-gradient-to-r from-primary via-amber-500 to-primary bg-clip-text text-transparent">
              des professionnels
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-waterloo dark:text-manatee">
            Un cabinet de courtage en assurance dédié à l'accompagnement des professionnels à chaque étape de leur parcours entrepreneurial.
          </p>
        </motion.div>

        {/* Introduction Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-14 rounded-3xl bg-white/90 p-8 shadow-xl ring-1 ring-black/5 backdrop-blur-sm dark:bg-blacksection/90 dark:ring-white/10 md:p-12"
        >
          <div className="mx-auto max-w-4xl">
            <p className="mb-6 text-lg leading-relaxed text-waterloo dark:text-manatee">
              Créer, développer et sécuriser une activité professionnelle demande des choix structurants, souvent complexes. C'est pourquoi{" "}
              <span className="font-semibold text-black dark:text-white">Novantis Solutions</span> propose un accompagnement global, personnalisé et durable, pensé pour répondre aux besoins réels des entrepreneurs, dirigeants et indépendants.
            </p>
            <p className="text-lg leading-relaxed text-waterloo dark:text-manatee">
              Nous intervenons dès la création de l'entreprise, en accompagnant nos clients dans le montage de leur projet, le lancement de leur activité et la mise en place de bases solides. Une fois l'activité lancée, nous assurons un suivi régulier, stratégique et administratif, afin de garantir la pérennité et l'optimisation de l'entreprise.
            </p>
          </div>
        </motion.section>

        {/* Services Section */}
        <section className="mt-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-4xl">
              Nos domaines d'intervention
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-waterloo dark:text-manatee">
              Des solutions adaptées à chaque étape de votre parcours professionnel
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-white/80 p-6 shadow-lg ring-1 ring-black/5 backdrop-blur-sm transition-all hover:-translate-y-2 hover:shadow-2xl dark:bg-blacksection/80 dark:ring-white/10"
              >
                <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-black dark:text-white">{service.title}</h3>
                <p className="text-base leading-relaxed text-waterloo dark:text-manatee">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Assurance Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-14 rounded-3xl bg-gradient-to-br from-primary/10 via-pink-50/50 to-purple-50/50 p-8 backdrop-blur-sm dark:from-primary/20 dark:via-pink-900/20 dark:to-purple-900/20 md:p-12"
        >
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-amber-500 shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-black dark:text-white">Courtage en assurance</h2>
            </div>
            <p className="mb-4 text-lg leading-relaxed text-waterloo dark:text-manatee">
              En tant que courtier en assurance, <span className="font-semibold text-black dark:text-white">Novantis Solutions</span> sélectionne et met en place des solutions de protection adaptées à chaque situation professionnelle : protection de l'activité, du dirigeant et de ses collaborateurs.
            </p>
            <p className="text-lg leading-relaxed text-waterloo dark:text-manatee">
              Notre approche est <span className="font-semibold text-black dark:text-white">indépendante</span> et orientée uniquement vers l'intérêt du client.
            </p>
          </div>
        </motion.section>

        {/* Comptabilité & Finance Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-14 rounded-3xl bg-white/90 p-8 shadow-xl ring-1 ring-black/5 backdrop-blur-sm dark:bg-blacksection/90 dark:ring-white/10 md:p-12"
        >
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-black dark:text-white">Accompagnement Comptable & Financier</h2>
            </div>
            <p className="mb-4 text-lg leading-relaxed text-waterloo dark:text-manatee">
              Au-delà de l'assurance, nous accompagnons également nos clients sur les aspects comptables et financiers, avec :
            </p>
            <ul className="space-y-3">
              {[
                "Un suivi des obligations",
                "Une lecture claire des chiffres",
                "La préparation des bilans",
                "Une aide à la prise de décisions",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-lg text-waterloo dark:text-manatee"
                >
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            <p className="mt-6 text-lg leading-relaxed text-waterloo dark:text-manatee">
              L'objectif est simple : offrir aux dirigeants une <span className="font-semibold text-black dark:text-white">visibilité globale</span> sur leur activité et les libérer des contraintes techniques pour se concentrer sur leur développement.
            </p>
          </div>
        </motion.section>

        {/* Valeurs Section */}
        <section className="mt-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-4xl">
              Nos valeurs
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-waterloo dark:text-manatee">
              La relation humaine, la proximité et la transparence au cœur de notre engagement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {valeurs.map((valeur, idx) => (
              <motion.div
                key={valeur.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl bg-white/80 p-6 shadow-lg ring-1 ring-black/5 backdrop-blur-sm transition-all hover:-translate-y-2 hover:shadow-xl dark:bg-blacksection/80 dark:ring-white/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-amber-500/20">
                  <valeur.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-black dark:text-white">{valeur.title}</h3>
                <p className="text-sm leading-relaxed text-waterloo dark:text-manatee">{valeur.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Conclusion Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-14 rounded-3xl bg-gradient-to-br from-primary via-amber-500 to-primary p-8 text-center shadow-2xl md:p-12"
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold text-white xl:text-4xl">
              Votre partenaire de confiance
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-white/90">
              Chez Novantis Solutions, chaque entreprise est unique, c'est pourquoi nous construisons des solutions sur mesure, évolutives et adaptées aux ambitions de chacun.
            </p>
            <p className="text-2xl font-bold text-white">
              Novantis Solutions, votre partenaire de confiance pour entreprendre, sécuriser et piloter votre activité professionnelle dans la durée.
            </p>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-14 rounded-3xl bg-white/90 p-8 shadow-xl ring-1 ring-black/5 backdrop-blur-sm dark:bg-blacksection/90 dark:ring-white/10 md:p-12"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="mb-8 text-lg text-waterloo dark:text-manatee">
              Contactez-nous pour un accompagnement personnalisé adapté à vos besoins
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-amber-500 to-primary px-8 py-4 text-lg font-semibold text-white shadow-xl transition hover:shadow-2xl"
              >
                <Mail className="h-5 w-5" />
                Nous contacter
              </motion.a>
              <motion.a
                href="tel:+33637764190"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-transparent px-8 py-4 text-lg font-semibold text-primary transition hover:bg-primary hover:text-white"
              >
                <Phone className="h-5 w-5" />
                +33 6 37 76 41 90
              </motion.a>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

