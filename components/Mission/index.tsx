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
      gradient: "from-purple-400 to-violet-400",
      bgGradient: "from-purple-50/50 to-violet-50/30"
    },
    {
      id: 2,
      icon: Coins,
      title: "Gain de Temps et d'Argent",
      description: "Vous faire gagner du temps et de l'argent grâce à notre expertise et nos partenariats solides.",
      gradient: "from-orange-400 to-amber-400",
      bgGradient: "from-orange-50/50 to-amber-50/30"
    },
    {
      id: 3,
      icon: UserCheck,
      title: "Conseil Transparent",
      description: "Vous conseiller avec transparence, bienveillance et réactivité.",
      gradient: "from-teal-400 to-emerald-400",
      bgGradient: "from-teal-50/50 to-emerald-50/30"
    }
  ];

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-b from-alabaster via-white to-alabaster py-20 dark:from-blacksection dark:via-black dark:to-blacksection lg:py-25 xl:py-30" id="mission">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-1">
        <motion.div 
          style={{ y }}
          className="absolute right-0 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-primary/10 via-pink-100/20 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute left-0 bottom-20 h-80 w-80 rounded-full bg-gradient-to-tl from-purple-100/20 via-primary/10 to-transparent blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
      
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* Section Title */}
        <div className="animate_top mx-auto mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 via-pink-50/50 to-purple-50/50 px-4 py-2 backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Notre Mission</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3"
          >
            Votre Succès, Notre{" "}
            <span className="bg-gradient-to-r from-primary via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Priorité
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto text-lg text-waterloo dark:text-manatee md:w-4/5 xl:w-1/2"
          >
            Nous vous accompagnons dans vos projets d'assurance et de financement 
            avec une approche personnalisée, humaine et professionnelle
          </motion.p>
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {missionPoints.map((point, index) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="animate_top group"
            >
              <div className="relative h-full overflow-hidden rounded-3xl bg-white/80 p-8 shadow-lg ring-1 ring-black/5 backdrop-blur-sm transition-all hover:shadow-2xl dark:bg-blacksection/80 dark:ring-white/10 xl:p-10">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${point.bgGradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                
                {/* Content */}
                <div className="relative text-center">
                  <motion.div
                    className={`mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${point.gradient} shadow-lg`}
                    whileHover={{ 
                      scale: 1.15,
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <point.icon className="h-10 w-10 text-white" strokeWidth={2} />
                  </motion.div>
                  
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white xl:text-itemtitle">
                    {point.title}
                  </h3>
                  
                  <p className="mb-6 text-base leading-relaxed text-waterloo dark:text-manatee">
                    {point.description}
                  </p>

                  {/* Decorative Element */}
                  <motion.div
                    className={`mx-auto h-1 w-16 rounded-full bg-gradient-to-r ${point.gradient}`}
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

