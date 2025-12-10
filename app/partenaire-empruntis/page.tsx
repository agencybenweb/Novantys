"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PartenaireEmpruntisPage() {
  const services = [
    {
      icon: "fas fa-home",
      title: "Crédit Immobilier",
      description: "Financez votre projet d'achat immobilier aux meilleures conditions",
      color: "#3498db"
    },
    {
      icon: "fas fa-chart-line",
      title: "Rachat de Crédit",
      description: "Regroupez vos crédits et réduisez vos mensualités",
      color: "#27ae60"
    },
    {
      icon: "fas fa-tools",
      title: "Prêt Travaux",
      description: "Financez vos travaux de rénovation et d'amélioration",
      color: "#f39c12"
    },
    {
      icon: "fas fa-shopping-cart",
      title: "Crédit Consommation",
      description: "Pour tous vos projets personnels",
      color: "#e74c3c"
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
            <h1 className="mb-5 text-3xl font-bold text-black dark:text-white xl:text-hero">
              Partenaire{" "}
              <span className="text-primary">EMPRUNTIS</span>
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-xl text-waterloo dark:text-manatee">
              Leader du courtage en crédit, EMPRUNTIS vous accompagne dans tous vos projets de financement
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-20 bg-alabaster py-20 dark:bg-blacksection">
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
            className="mb-15 text-center text-3xl font-bold text-black dark:text-white"
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
                <div className="rounded-lg border border-stroke bg-white p-7.5 shadow-solid-3 transition-all hover:-translate-y-2 hover:shadow-solid-7 dark:border-strokedark dark:bg-black">
                  <div
                    className="mb-5 flex h-16 w-16 items-center justify-center rounded-full"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`,
                    }}
                  >
                    <i className={`${service.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-waterloo dark:text-manatee">
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
            className="mb-15 text-center text-3xl font-bold text-black dark:text-white"
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
                className="flex items-center gap-4 rounded-lg border border-stroke bg-white p-5 dark:border-strokedark dark:bg-blacksection"
              >
                <i className="fas fa-check-circle text-2xl text-primary"></i>
                <span className="text-base font-medium text-black dark:text-white">
                  {avantage}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Étapes Section */}
      <section className="mb-20 bg-alabaster py-20 dark:bg-blacksection">
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
            className="mb-15 text-center text-3xl font-bold text-black dark:text-white"
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
                <div className="mb-5 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary text-3xl font-bold text-white">
                  {etape.number}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  {etape.title}
                </h3>
                <p className="text-base text-waterloo dark:text-manatee">
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
            className="rounded-lg border border-stroke bg-gradient-to-r from-primary/10 to-primary/5 p-12.5 text-center dark:border-strokedark dark:from-primary/20 dark:to-primary/10"
          >
            <h2 className="mb-5 text-2xl font-bold text-black dark:text-white xl:text-itemtitle">
              Prêt à Démarrer Votre Projet ?
            </h2>
            <p className="mb-7.5 text-base text-waterloo dark:text-manatee">
              Nos conseillers experts vous accompagnent gratuitement et sans engagement
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <a
                href="https://www.empruntis.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho"
              >
                <i className="fas fa-external-link-alt mr-2"></i>
                Visiter EMPRUNTIS
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-primary bg-transparent px-7.5 py-2.5 text-regular text-primary duration-300 ease-in-out hover:bg-primary hover:text-white"
              >
                <i className="fas fa-phone mr-2"></i>
                Nous Contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

