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
    <main>
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
