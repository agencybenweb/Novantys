"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Puzzle, Coins, UserCheck, Sparkles, ArrowRight } from "lucide-react";

const Mission = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const missionPoints = [
    {
      id: 1,
      icon: Puzzle,
      title: "Solutions Sur-Mesure",
      description: "Vous apporter des solutions sur-mesure et adaptées à votre situation personnelle et professionnelle.",
      gradient: "from-primary to-amber-500",
      bgGradient: "from-primary/20 to-amber-500/10"
    },
    {
      id: 2,
      icon: Coins,
      title: "Gain de Temps et d'Argent",
      description: "Vous faire gagner du temps et de l'argent grâce à notre expertise et nos partenariats solides.",
      gradient: "from-amber-500 to-primary",
      bgGradient: "from-amber-500/20 to-primary/10"
    },
    {
      id: 3,
      icon: UserCheck,
      title: "Conseil Transparent",
      description: "Vous conseiller avec transparence, bienveillance et réactivité.",
      gradient: "from-primary to-goldlight",
      bgGradient: "from-primary/20 to-goldlight/10"
    }
  ];

  return (
    <section ref={ref} className="relative overflow-hidden bg-beigeluxe py-20 transition-colors duration-300 dark:bg-black lg:py-25 xl:py-30" id="mission">
      {/* Animated background elements replaced by Gold/Black theme */}
      {/* Plain Background for visual alternation */}
      <div className="absolute inset-0 -z-1 bg-beigeluxe dark:bg-black" />

      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* Section Title */}
        <div className="animate_top mx-auto mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Notre Mission</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mx-auto mb-4 text-3xl font-bold text-beigetext dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3"
          >
            Votre Succès, Notre{" "}
            <span className="bg-gradient-to-r from-primary via-goldlight to-primary bg-clip-text text-transparent">
              Priorité
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto text-lg text-beigetextlight dark:text-manatee md:w-4/5 xl:w-1/2"
          >
            Nous vous accompagnons dans vos projets d'assurance et de financement
            avec une approche personnalisée, humaine et professionnelle
          </motion.p>
        </div>

        {/* Mission Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {missionPoints.map((point, index) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="animate_top group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] max-w-[400px]"
            >
              <div className="relative h-full overflow-hidden rounded-3xl bg-white border border-stroke p-8 shadow-solid-5 transition-all hover:border-primary/50 dark:bg-blacksection xl:p-10">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                {/* Content */}
                <div className="relative text-center">
                  <motion.div
                    className={`mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-black border border-primary/20 shadow-lg`}
                    whileHover={{
                      scale: 1.15,
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <point.icon className="h-10 w-10 text-primary" strokeWidth={1.5} />
                  </motion.div>

                  <h3 className="mb-4 text-xl font-bold text-beigetext dark:text-white xl:text-itemtitle">
                    {point.title}
                  </h3>

                  <p className="mb-6 text-base leading-relaxed text-beigetextlight dark:text-manatee">
                    {point.description}
                  </p>

                  {/* Decorative Element */}
                  <motion.div
                    className={`mx-auto h-1 w-16 rounded-full bg-primary`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;

