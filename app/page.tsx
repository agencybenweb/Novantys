"use client";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import AboutCourtier from "@/components/AboutCourtier";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Partenaires from "@/components/Partenaires";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <main className="relative overflow-hidden">
      {/* Subtle White Luxury Accents Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Soft white glow top right for contrast */}
        <div className="absolute -right-1/4 top-1/4 h-[800px] w-[800px] rounded-full bg-white/5 blur-[120px]" />

        {/* Subtle white streak center left */}
        <div className="absolute -left-1/4 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-slate-100/3 blur-[140px]" />

        {/* Soft silver glow near bottom */}
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-white/5 blur-[100px]" />

        {/* Floating white micro-particles for luxury feel */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/20"
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0,
              scale: 0
            }}
            animate={{
              opacity: [0, 0.4, 0],
              scale: [0, 1.5, 0],
              y: [0, -30, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 10
            }}
          />
        ))}
      </div>

      <Hero />
      <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.05 }}>
        <Mission />
      </motion.div>
      <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.1 }}>
        <Services />
      </motion.div>
      <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.15 }}>
        <AboutCourtier />
      </motion.div>
      <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.2 }}>
        <Stats />
      </motion.div>
      <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.25 }}>
        <Features />
      </motion.div>
      <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.3 }}>
        <Testimonials />
      </motion.div>
      <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.35 }}>
        <Partenaires />
      </motion.div>
    </main>
  );
}
