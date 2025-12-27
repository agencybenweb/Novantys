"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, LineChart, Wrench, ShoppingCart, CheckCircle, ExternalLink, Phone, Sparkles } from "lucide-react";

export default function PartenaireEmpruntisPage() {
  const services = [
    {
      icon: Home,
      title: "Crédit Immobilier",
      description: "Financez votre projet d'achat immobilier aux meilleures conditions",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: LineChart,
      title: "Rachat de Crédit",
      description: "Regroupez vos crédits et réduisez vos mensualités",
      color: "from-emerald-400 to-teal-400"
    },
    {
      icon: Wrench,
      title: "Prêt Travaux",
      description: "Financez vos travaux de rénovation et d'amélioration",
      color: "from-amber-400 to-orange-400"
    },
    {
      icon: ShoppingCart,
      title: "Crédit Consommation",
      description: "Pour tous vos projets personnels",
      color: "from-purple-400 to-pink-400"
    }
  ];

  const avantages = [
    "100% gratuit et sans engagement",
    "Comparaison parmi 100+ banques",
    "Accompagnement personnalisé",
    "Gain de temps garanti",
    "Meilleurs taux du marché",
    "Expertise reconnue depuis 20 ans"
  ];

  const etapes = [
    {
      number: "1",
      title: "Votre Projet",
      description: "Décrivez votre projet en quelques clics"
    },
    {
      number: "2",
      title: "Comparaison",
      description: "Nous comparons les offres de nos partenaires"
    },
    {
      number: "3",
      title: "Accompagnement",
      description: "Un conseiller dédié vous accompagne"
    },
    {
      number: "4",
      title: "Financement",
      description: "Obtenez votre financement au meilleur taux"
    }
  ];

  return (
    <main className="pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h1 className="mb-5 text-3xl font-bold text-white xl:text-hero">
              Partenaire{" "}
              <span className="text-primary">EMPRUNTIS</span>
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-xl text-manatee">
              Leader du courtage en crédit, EMPRUNTIS vous accompagne dans tous vos projets de financement
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-20 bg-black py-20">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-15 text-center text-3xl font-bold text-white"
          >
            Nos Services
          </motion.h2>

          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="rounded-lg border border-white/10 bg-blacksection p-7.5 shadow-solid-3 transition-all hover:-translate-y-2 hover:shadow-solid-7">
                  <div
                    className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} shadow-lg`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-manatee">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="mb-20">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-15 text-center text-3xl font-bold text-white"
          >
            Pourquoi Choisir EMPRUNTIS ?
          </motion.h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {avantages.map((avantage, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 rounded-lg border border-white/10 bg-blacksection p-5"
              >
                <CheckCircle className="h-6 w-6 text-primary" />
                <span className="text-base font-medium text-white">
                  {avantage}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Étapes Section */}
      <section className="mb-20 bg-black py-20">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-15 text-center text-3xl font-bold text-white"
          >
            Les 4 Étapes de Votre Projet
          </motion.h2>

          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-4">
            {etapes.map((etape, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-5 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-amber-500 text-3xl font-bold text-white shadow-lg ring-1 ring-white/10">
                  {etape.number}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {etape.title}
                </h3>
                <p className="text-base text-manatee">
                  {etape.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-lg border border-white/10 bg-gradient-to-r from-primary/20 to-primary/10 p-12.5 text-center"
          >
            <h2 className="mb-5 text-2xl font-bold text-white xl:text-itemtitle">
              Prêt à Démarrer Votre Projet ?
            </h2>
            <p className="mb-7.5 text-base text-manatee">
              Nos conseillers experts vous accompagnent gratuitement et sans engagement
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <a
                href="https://www.empruntis.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-7.5 py-4 text-regular font-bold text-black shadow-lg transition-all hover:shadow-xl"
              >
                <ExternalLink className="h-5 w-5" />
                Visiter EMPRUNTIS
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary bg-transparent px-7.5 py-4 text-regular font-bold text-primary transition-all hover:bg-primary hover:text-black shadow-lg hover:shadow-xl"
              >
                <Phone className="h-5 w-5" />
                Nous Contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

