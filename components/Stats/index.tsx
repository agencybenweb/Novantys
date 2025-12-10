"use client";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { 
  Users, 
  Award, 
  Heart, 
  TrendingUp,
  Shield,
  CheckCircle2
} from "lucide-react";

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString();
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
}

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    {
      icon: Users,
      value: 5000,
      suffix: "+",
      label: "Clients Accompagnés",
      description: "Des particuliers et professionnels font confiance à notre expertise",
      gradient: "from-blue-400 to-cyan-400",
      bgGradient: "from-blue-50/50 to-cyan-50/30"
    },
    {
      icon: Award,
      value: 25,
      suffix: "+",
      label: "Années d'Expertise",
      description: "Un quart de siècle au service de vos projets",
      gradient: "from-primary to-amber-400",
      bgGradient: "from-amber-50/50 to-yellow-50/30"
    },
    {
      icon: Heart,
      value: 98,
      suffix: "%",
      label: "Satisfaction Client",
      description: "Notre engagement qualité reconnu par nos clients",
      gradient: "from-pink-400 to-rose-400",
      bgGradient: "from-pink-50/50 to-rose-50/30"
    },
    {
      icon: TrendingUp,
      value: 100,
      suffix: "%",
      label: "Engagés pour Vous",
      description: "Un accompagnement personnalisé du début à la fin",
      gradient: "from-emerald-400 to-teal-400",
      bgGradient: "from-emerald-50/50 to-teal-50/30"
    }
  ];

  const certifications = [
    { icon: Shield, text: "Certifié ORIAS" },
    { icon: CheckCircle2, text: "Partenaire EMPRUNTIS" },
    { icon: Award, text: "Excellence Service" },
    { icon: Heart, text: "Approche Humaine" }
  ];

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-b from-alabaster via-white to-alabaster py-20 dark:from-blacksection dark:via-black dark:to-blacksection lg:py-25 xl:py-30">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-1">
        <motion.div
          className="absolute left-0 top-1/3 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/10 via-pink-100/20 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-0 bottom-1/3 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-purple-100/20 via-primary/10 to-transparent blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
            Des Chiffres qui{" "}
            <span className="bg-gradient-to-r from-primary via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Parlent d'Eux-Mêmes
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-waterloo dark:text-manatee">
            Notre réussite se mesure à travers la confiance que vous nous accordez
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative h-full overflow-hidden rounded-3xl bg-white/80 p-8 shadow-lg ring-1 ring-black/5 backdrop-blur-sm transition-all hover:shadow-2xl dark:bg-blacksection/80 dark:ring-white/10">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                
                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <motion.div
                    className={`mb-6 inline-flex rounded-2xl bg-gradient-to-br ${stat.gradient} p-4 shadow-lg`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <stat.icon className="h-8 w-8 text-white" strokeWidth={2} />
                  </motion.div>

                  {/* Number */}
                  <div className="mb-3">
                    <motion.h3 
                      className={`text-5xl font-extrabold bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`}
                    >
                      <AnimatedCounter value={stat.value} />
                      {stat.suffix}
                    </motion.h3>
                  </div>

                  {/* Label */}
                  <h4 className="mb-3 text-lg font-bold text-black dark:text-white">
                    {stat.label}
                  </h4>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-waterloo dark:text-manatee">
                    {stat.description}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute right-0 top-0 h-20 w-20 bg-gradient-to-br ${stat.gradient} opacity-5 blur-2xl transition-opacity group-hover:opacity-10`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/90 via-white/50 to-white/30 p-8 shadow-2xl ring-1 ring-black/5 backdrop-blur-xl dark:from-blacksection/90 dark:via-blacksection/50 dark:to-blacksection/30 dark:ring-white/10"
        >
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-pink-50/30 to-purple-50/20 dark:from-primary/10 dark:via-pink-900/10 dark:to-purple-900/10" />
          
          <div className="relative">
            <h3 className="mb-8 text-center text-2xl font-bold text-black dark:text-white">
              Nos Garanties & Certifications
            </h3>
            
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center gap-3 rounded-2xl bg-white/80 p-6 text-center shadow-sm ring-1 ring-black/5 backdrop-blur-sm transition-all hover:shadow-lg dark:bg-blacksection/80 dark:ring-white/10"
                >
                  <div className="rounded-xl bg-gradient-to-br from-primary to-amber-500 p-3">
                    <cert.icon className="h-6 w-6 text-white" strokeWidth={2} />
                  </div>
                  <span className="text-sm font-semibold text-black dark:text-white">
                    {cert.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;

