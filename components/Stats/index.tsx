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
    <section ref={ref} className="relative overflow-hidden bg-blacksection py-20 lg:py-25 xl:py-30">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-1">
        <motion.div
          className="absolute left-0 top-1/3 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-0 bottom-1/3 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1],
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
          <h2 className="mb-4 text-3xl font-bold text-white xl:text-sectiontitle3">
            Des Chiffres qui{" "}
            <span className="bg-gradient-to-r from-primary via-goldlight to-primary bg-clip-text text-transparent">
              Parlent d'Eux-Mêmes
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-manatee">
            Notre réussite se mesure à travers la confiance que vous nous accordez
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="mb-16 flex flex-wrap justify-center gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-[300px]"
            >
              <div className="relative h-full overflow-hidden rounded-3xl bg-black border border-white/10 p-8 shadow-solid-5 transition-all hover:border-primary/50">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <motion.div
                    className={`mb-6 inline-flex rounded-2xl bg-black border border-primary/20 p-4 shadow-lg`}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <stat.icon className="h-8 w-8 text-primary" strokeWidth={2} />
                  </motion.div>

                  {/* Number */}
                  <div className="mb-3">
                    <motion.h3
                      className={`text-5xl font-extrabold text-white`}
                    >
                      <AnimatedCounter value={stat.value} />
                      <span className="text-primary">{stat.suffix}</span>
                    </motion.h3>
                  </div>

                  {/* Label */}
                  <h4 className="mb-3 text-lg font-bold text-white">
                    {stat.label}
                  </h4>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-manatee">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-black border border-white/10 p-8 shadow-lg"
        >
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent" />

          <div className="relative">
            <h3 className="mb-8 text-center text-2xl font-bold text-white">
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
                  className="flex flex-col items-center gap-3 rounded-2xl bg-blacksection border border-white/10 p-6 text-center shadow-sm transition-all hover:border-primary/50"
                >
                  <div className="rounded-xl bg-primary/10 p-3">
                    <cert.icon className="h-6 w-6 text-primary" strokeWidth={2} />
                  </div>
                  <span className="text-sm font-semibold text-white">
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


