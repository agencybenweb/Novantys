"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, CheckCircle, Euro, Shield, Phone } from "lucide-react";

const Partenaires = () => {
  const partenaires = [
    {
      id: 1,
      nom: "GENERALI",
      url: "https://www.generali.fr/",
      description: "Leader de l'assurance en Europe",
      logo: "/assets/images/generali-logo.svg",
      gradient: "from-red-400 to-orange-400"
    },
    {
      id: 2,
      nom: "SWISS LIFE",
      url: "https://www.swisslife.fr/",
      description: "Expert en assurance vie et prévoyance",
      logo: "/assets/images/swisslife-svg.svg",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      id: 3,
      nom: "MALAKOFF HUMANIS",
      url: "https://www.malakoffhumanis.com/",
      description: "Protection sociale et épargne retraite",
      logo: "/assets/images/malaoff humanis.png",
      gradient: "from-green-400 to-emerald-400"
    },
    {
      id: 4,
      nom: "ALLIANZ",
      url: "https://www.allianz.fr/",
      description: "Assureur mondial de référence",
      logo: "/assets/images/allianz-logo.svg",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      id: 5,
      nom: "PRO BTP",
      url: "https://www.probtp.com/",
      description: "Protection sociale du BTP",
      logo: "/assets/images/probtp.png",
      gradient: "from-yellow-400 to-orange-400"
    },
    {
      id: 6,
      nom: "SMATIS",
      url: "https://www.smatis.fr/",
      description: "Mutuelle santé et prévoyance",
      logo: "/assets/images/smatiss.png",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      id: 7,
      nom: "EMPRUNTIS",
      url: "https://www.empruntis.com/",
      description: "Courtier en crédit immobilier",
      logo: "/assets/images/empruntis-25.svg",
      gradient: "from-primary to-amber-400"
    },
  ];

  return (
    <section className="relative overflow-hidden bg-beigeluxe py-20 lg:py-25 xl:py-30">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-1">
        <motion.div
          className="absolute left-1/3 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/10 via-amber-100/20 to-transparent blur-3xl opacity-30"
          animate={{
            y: [0, 50, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        {/* Section Title */}
        <div className="animate_top mx-auto mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/20 via-amber-500/10 to-primary/20 px-4 py-2 backdrop-blur-sm ring-1 ring-beigeborder"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Nos Partenaires</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mx-auto mb-4 text-3xl font-bold !text-black md:w-4/5 xl:w-1/2 xl:text-sectiontitle3"
          >
            Des Partenaires{" "}
            <span className="bg-gradient-to-r from-primary via-amber-600 to-primary bg-clip-text text-transparent">
              d'Excellence
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto text-lg !text-black/80 md:w-4/5 xl:w-1/2"
          >
            Nous collaborons avec les leaders de l'assurance pour vous garantir les meilleures solutions
          </motion.p>
        </div>

        {/* Partners Marquee */}
        <div className="relative mb-16 overflow-hidden">
          <div className="absolute inset-y-0 left-0 z-1 w-24 bg-gradient-to-r from-beigeluxe to-transparent" />
          <div className="absolute inset-y-0 right-0 z-1 w-24 bg-gradient-to-l from-beigeluxe to-transparent" />

          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 18, ease: "linear", repeat: Infinity }}
            className="flex min-w-[200%] gap-6"
          >
            {[...partenaires, ...partenaires].map((partenaire, index) => (
              <motion.div
                key={`${partenaire.id}-${index}`}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group w-[220px] shrink-0"
              >
                <a
                  href={partenaire.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white p-5 shadow-lg border border-beigeborder transition-all hover:shadow-2xl hover:border-primary/30">
                    <div className={`absolute inset-0 bg-gradient-to-br ${partenaire.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-5`} />

                    <div className="relative mb-4 flex h-20 items-center justify-center">
                      <div className="relative h-14 w-28">
                        <Image
                          src={partenaire.logo}
                          alt={`Logo ${partenaire.nom}`}
                          fill
                          className="object-contain"
                          sizes="112px"
                          priority={index < partenaires.length}
                        />
                      </div>
                    </div>

                    <h5 className="mb-1 text-center text-sm font-bold !text-black" style={{ color: 'black' }}>
                      {partenaire.nom}
                    </h5>
                    <p className="text-center text-[11px] !text-black/60 font-medium">
                      {partenaire.description}
                    </p>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="animate_top mx-auto max-w-4xl"
        >
          <div className="overflow-hidden rounded-3xl bg-beigesection p-10 shadow-xl border border-beigeborder backdrop-blur-xl">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-amber-500/10 to-primary/5" />

            <div className="relative">
              <h3 className="mb-10 text-center text-2xl font-bold !text-black">
                Les Avantages de Nos{" "}
                <span className="bg-gradient-to-r from-primary via-amber-500 to-primary bg-clip-text text-transparent">
                  Partenariats
                </span>
              </h3>

              <div className="flex flex-wrap justify-center gap-8">
                {[
                  {
                    icon: CheckCircle,
                    title: "Choix Élargi",
                    description: "Accès à une large gamme de produits adaptés à tous les profils",
                    gradient: "from-blue-400 to-cyan-400"
                  },
                  {
                    icon: Euro,
                    title: "Tarifs Négociés",
                    description: "Conditions avantageuses grâce à nos volumes d'affaires",
                    gradient: "from-emerald-400 to-teal-400"
                  },
                  {
                    icon: Shield,
                    title: "Sécurité Maximale",
                    description: "Partenaires reconnus et régulés pour votre protection",
                    gradient: "from-amber-400 to-orange-400"
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-full max-w-[280px] text-center md:w-[calc(33.33%-1.5rem)]"
                  >
                    <motion.div
                      className={`mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${benefit.gradient} shadow-lg`}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      <benefit.icon className="h-8 w-8 text-white" strokeWidth={2} />
                    </motion.div>
                    <h5 className="mb-3 text-lg font-bold !text-black">
                      {benefit.title}
                    </h5>
                    <p className="text-sm leading-relaxed !text-black/70 font-medium">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="animate_top mt-16 text-center"
        >
          <h4 className="mb-6 text-2xl font-bold !text-black">
            Intéressé par nos solutions ?
          </h4>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-amber-500 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:shadow-xl"
            >
              <Phone className="h-5 w-5" />
              <span>Contactez-nous</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      {/* Subtle transition to black footer */}
      <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-black/5 to-transparent" />
    </section>
  );
};

export default Partenaires;
