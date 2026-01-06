"use client";
import { motion } from "framer-motion";
import { UserCheck, Percent, Award, Zap, Sparkles, CheckCircle2 } from "lucide-react";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: UserCheck,
      title: "Accompagnement Personnalisé",
      description: "Chaque client est unique, nous adaptons nos solutions à votre situation et vos objectifs.",
      gradient: "from-purple-400 to-indigo-400",
      benefits: ["Analyse détaillée", "Solutions sur-mesure", "Suivi personnalisé"]
    },
    {
      id: 2,
      icon: Percent,
      title: "Économies Garanties",
      description: "Nous comparons pour vous parmi nos partenaires pour obtenir les meilleures conditions.",
      gradient: "from-blue-400 to-cyan-400",
      benefits: ["Comparateur gratuit", "Meilleurs tarifs", "Sans engagement"]
    },
    {
      id: 3,
      icon: Award,
      title: "Expertise Reconnue",
      description: "Plus de 25 ans d'expérience dans l'assurance et le financement immobilier.",
      gradient: "from-amber-400 to-orange-400",
      benefits: ["25+ ans", "Certifié ORIAS", "Excellence service"]
    },
    {
      id: 4,
      icon: Zap,
      title: "Réactivité Premium",
      description: "Réponse sous 24h et accompagnement jusqu'à la signature de votre contrat.",
      gradient: "from-rose-400 to-pink-400",
      benefits: ["Réponse 24h", "Disponibilité", "Accompagnement total"]
    }
  ];

  return (
    <section className="relative overflow-hidden bg-beigesection py-20 lg:py-25 xl:py-30">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-1">
        <motion.div
          className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl opacity-50"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl opacity-50"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Nos Avantages</span>
          </div>

          <h2 className="mb-4 text-3xl font-bold !text-black xl:text-sectiontitle3">
            Pourquoi Choisir{" "}
            <span className="bg-gradient-to-r from-primary via-amber-600 to-primary bg-clip-text text-transparent">
              Novantys ?
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg !text-black/80">
            Une approche premium qui fait toute la différence pour votre protection et votre avenir
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group w-full md:w-[calc(50%-1rem)] max-w-[580px]"
            >
              <div className="relative h-full overflow-hidden rounded-3xl bg-white border border-beigeborder p-8 shadow-solid-1 transition-all hover:border-primary/50 hover:shadow-solid-7">
                {/* Icon & Title */}
                <div className="mb-6 flex items-start gap-4">
                  <motion.div
                    className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-white border border-beigeborder shadow-md transition-shadow group-hover:shadow-primary/20`}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <feature.icon className="h-8 w-8 text-primary" strokeWidth={2} />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold !text-black">
                      {feature.title}
                    </h3>
                    <p className="text-base !text-black/70">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mt-6 space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className={`h-5 w-5 text-primary`} />
                      <span className="text-sm font-bold !text-black/80">
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
