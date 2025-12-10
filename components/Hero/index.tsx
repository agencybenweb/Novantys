"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { 
  Sparkles, 
  Shield, 
  TrendingUp, 
  Users, 
  ArrowRight, 
  Calculator,
  Award,
  Heart,
  Zap
} from "lucide-react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <>
      <section ref={ref} className="relative overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        {/* Premium Animated Background */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 -z-1"
        >
          {/* Gradient Orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -left-1/4 top-0 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-primary/20 via-pink-200/10 to-transparent blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute -right-1/4 bottom-0 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-purple-200/20 via-primary/10 to-transparent blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </div>
          
          {/* Floating Elegant Particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                background: i % 3 === 0 
                  ? 'rgba(212, 175, 55, 0.3)'
                  : i % 3 === 1 
                  ? 'rgba(255, 192, 203, 0.3)'
                  : 'rgba(147, 51, 234, 0.3)',
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        <motion.div 
          style={{ opacity }}
          className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="animate_left md:w-1/2"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 via-pink-50/50 to-purple-50/50 px-4 py-2 backdrop-blur-sm"
              >
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Expertise Premium depuis 1999</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h1 className="mb-5 text-4xl font-bold leading-tight text-black dark:text-white xl:text-hero">
                  Protégez ce qui{" "}
                  <motion.span 
                    className="relative inline-block"
                    initial={{ width: 0 }}
                    animate={{ width: "auto" }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <span className="relative z-10 bg-gradient-to-r from-primary via-pink-400 to-purple-400 bg-clip-text text-transparent">
                      vous est cher
                    </span>
                    <motion.span
                      className="absolute bottom-2 left-0 -z-1 h-4 w-full bg-gradient-to-r from-primary/30 via-pink-200/30 to-purple-200/30"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      style={{ originX: 0 }}
                    />
                  </motion.span>
                </h1>
              </motion.div>

              <motion.p 
                className="mb-8 text-lg font-medium leading-relaxed text-waterloo dark:text-manatee xl:text-para2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Votre partenaire de confiance en assurance et financement. 
                Un accompagnement personnalisé, humain et expert pour tous vos projets de vie.
              </motion.p>

              {/* Premium Features Pills */}
              <div className="mb-10 flex flex-wrap gap-3">
                {[
                  { icon: Heart, label: "Approche Humaine", color: "from-pink-400 to-rose-400" },
                  { icon: Shield, label: "100% Sécurisé", color: "from-primary to-amber-400" },
                  { icon: Zap, label: "Réponse 24h", color: "from-purple-400 to-indigo-400" },
                  { icon: Award, label: "25 ans d'expertise", color: "from-blue-400 to-cyan-400" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className={`group relative overflow-hidden rounded-full bg-white px-4 py-2.5 shadow-sm ring-1 ring-black/5 transition-all hover:shadow-lg dark:bg-blacksection dark:ring-white/10`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 transition-opacity group-hover:opacity-10`} />
                    <div className="relative flex items-center gap-2">
                      <item.icon className="h-4 w-4 text-primary group-hover:text-primary" />
                      <span className="text-sm font-semibold text-black dark:text-white">
                        {item.label}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-amber-500 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:shadow-xl"
                  >
                    <Calculator className="h-5 w-5" />
                    <span>Obtenir mon Devis Gratuit</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#services"
                    className="group inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-white/80 px-8 py-4 font-semibold text-black backdrop-blur-sm transition-all hover:border-primary hover:bg-white hover:shadow-lg dark:bg-blacksection/80 dark:text-white dark:hover:bg-blacksection"
                  >
                    <span>Découvrir nos Services</span>
                    <Sparkles className="h-4 w-4 text-primary" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="mt-10 flex items-center gap-6 text-sm text-waterloo dark:text-manatee"
              >
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="font-medium">+5000 clients satisfaits</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span className="font-medium">98% de satisfaction</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Premium Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="animate_right relative mx-auto mt-10 aspect-[700/444] w-full md:mt-0 md:w-1/2"
            >
              {/* Main Card */}
              <motion.div 
                className="relative h-full w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glassmorphism Container with hero image */}
                <div className="relative h-full w-full overflow-hidden rounded-3xl bg-gradient-to-br from-white/90 via-white/50 to-white/30 p-6 shadow-2xl backdrop-blur-xl ring-1 ring-black/5 dark:from-blacksection/90 dark:via-blacksection/50 dark:to-blacksection/30 dark:ring-white/10">
                  <div className="relative h-full w-full">
                    <Image
                      src="/assets/images/Accueil_AUTO_1920x548.jpeg"
                      alt="Couple heureux en voiture avec vue sur la mer"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    />
                    {/* Overlay gradient for readability */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-black/15 via-primary/10 to-transparent"
                      animate={{
                        opacity: [0.6, 0.8, 0.6],
                      }}
                      transition={{ duration: 6, repeat: Infinity }}
                    />
                  </div>

                {/* Experience Badge */}
                <motion.div 
                    className="absolute left-6 top-6 rounded-2xl bg-gradient-to-br from-white via-white/95 to-white/90 p-6 shadow-xl ring-1 ring-black/5 backdrop-blur-sm dark:from-black dark:via-black/95 dark:to-black/90 dark:ring-white/10"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <motion.div 
                      className="text-center"
                      animate={{ 
                        y: [0, -5, 0],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.h1 
                        className="mb-1 bg-gradient-to-r from-primary via-amber-500 to-primary bg-clip-text text-5xl font-extrabold text-transparent"
                        animate={{ 
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        25+
                      </motion.h1>
                      <p className="text-xs font-bold uppercase tracking-wider text-black dark:text-white">Années</p>
                      <p className="text-xs font-medium text-waterloo">d'Excellence</p>
                    </motion.div>
                  </motion.div>

                  {/* Floating Stats Cards */}
                  <motion.div
                    className="absolute bottom-6 right-6 rounded-xl bg-gradient-to-br from-white via-white/95 to-white/90 p-4 shadow-lg ring-1 ring-black/5 backdrop-blur-sm dark:from-black dark:via-black/95 dark:to-black/90 dark:ring-white/10"
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 1, type: "spring" }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-gradient-to-br from-primary to-amber-500 p-2">
                        <Award className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-waterloo">Taux de satisfaction</p>
                        <p className="text-lg font-bold text-primary">98%</p>
                      </div>
                    </div>
                </motion.div>
                </div>

                {/* Decorative floating elements */}
                <motion.div 
                  className="absolute -right-4 top-1/4 h-20 w-20 rounded-full bg-gradient-to-br from-pink-200/40 to-purple-200/40 backdrop-blur-sm"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
              <motion.div 
                  className="absolute -left-4 bottom-1/4 h-16 w-16 rounded-full bg-gradient-to-br from-primary/30 to-amber-200/30 backdrop-blur-sm"
                  animate={{
                    y: [0, 20, 0],
                    rotate: [360, 180, 0],
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;