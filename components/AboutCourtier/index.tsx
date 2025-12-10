"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { 
  Heart, 
  Award, 
  Users, 
  Sparkles,
  Shield,
  Phone,
  Mail,
  Calendar
} from "lucide-react";
import Link from "next/link";

const AboutCourtier = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { icon: Users, value: "5000+", label: "Clients Accompagnés" },
    { icon: Award, value: "25+", label: "Années d'Expertise" },
    { icon: Heart, value: "98%", label: "Satisfaction Client" },
    { icon: Shield, value: "100%", label: "Engagée pour Vous" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Proximité Humaine",
      description: "Une relation de confiance basée sur l'écoute et la compréhension de vos besoins",
      gradient: "from-pink-400 to-rose-400"
    },
    {
      icon: Sparkles,
      title: "Excellence Premium",
      description: "Des solutions d'assurance haut de gamme adaptées à vos exigences",
      gradient: "from-primary to-amber-400"
    },
    {
      icon: Shield,
      title: "Protection Maximale",
      description: "Votre sécurité et celle de vos proches est notre priorité absolue",
      gradient: "from-blue-400 to-cyan-400"
    },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-b from-alabaster via-white to-alabaster py-20 dark:from-blacksection dark:via-black dark:to-blacksection lg:py-25 xl:py-30">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-1">
        <motion.div
          className="absolute left-0 top-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/10 via-pink-100/20 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-0 bottom-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-purple-100/20 via-primary/10 to-transparent blur-3xl"
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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 via-pink-50/50 to-purple-50/50 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Votre Courtière Experte</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
            Une Professionnelle à{" "}
            <span className="bg-gradient-to-r from-primary via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Votre Écoute
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-waterloo dark:text-manatee">
            Passionnée par mon métier, je mets mon expertise et mon engagement au service 
            de vos projets pour vous offrir des solutions sur-mesure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Image & Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Profile Card */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/90 via-white/50 to-white/30 p-8 shadow-2xl ring-1 ring-black/5 backdrop-blur-xl dark:from-blacksection/90 dark:via-blacksection/50 dark:to-blacksection/30 dark:ring-white/10">
              
              {/* Profile Image */}
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-primary/10 via-pink-50/30 to-purple-50/20">
                  <Image
                    src="/assets/images/profile.jpg"
                    alt="Courtière Novantys Solutions"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
                {/* Decorative corner */}
                <div className="absolute right-4 top-4 rounded-full bg-white/90 p-3 shadow-lg backdrop-blur-sm dark:bg-black/90">
                  <Award className="h-6 w-6 text-primary" />
                </div>
              </div>

              {/* Profile Info */}
              <div className="relative">
                <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
                  Votre Courtière
                </h3>
                <p className="mb-4 font-medium text-primary">
                  Experte en Assurance & Financement
                </p>
                <p className="mb-6 text-base leading-relaxed text-waterloo dark:text-manatee">
                  Avec plus de 25 ans d'expérience, je suis à vos côtés pour vous accompagner 
                  dans tous vos projets d'assurance et de financement. Mon approche personnalisée 
                  et humaine fait toute la différence.
                </p>

                {/* Quick Contact */}
                <div className="space-y-3">
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-primary to-amber-500 p-4 text-white shadow-lg transition-all hover:shadow-xl"
                  >
                    <Calendar className="h-5 w-5" />
                    <div>
                      <p className="text-sm font-medium">Prendre Rendez-vous</p>
                      <p className="text-xs opacity-90">Consultation gratuite</p>
                    </div>
                  </motion.a>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <motion.a
                      href="tel:+33637764190"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm ring-1 ring-black/5 transition-all hover:shadow-md dark:bg-blacksection dark:ring-white/10"
                    >
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-xs font-medium text-black dark:text-white">Appeler</span>
                    </motion.a>
                    <motion.a
                      href="mailto:contact@novantys.fr"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm ring-1 ring-black/5 transition-all hover:shadow-md dark:bg-blacksection dark:ring-white/10"
                    >
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="text-xs font-medium text-black dark:text-white">Email</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decoration */}
            <motion.div
              className="absolute -right-6 top-1/3 h-24 w-24 rounded-full bg-gradient-to-br from-pink-200/40 to-purple-200/40 blur-2xl"
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </motion.div>

          {/* Right: Values & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5 transition-all hover:shadow-xl dark:bg-blacksection dark:ring-white/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-pink-50/30 to-purple-50/20 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <stat.icon className="mb-3 h-8 w-8 text-primary" strokeWidth={1.5} />
                    <p className="mb-1 text-3xl font-bold text-black dark:text-white">
                      {stat.value}
                    </p>
                    <p className="text-sm font-medium text-waterloo dark:text-manatee">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Values Cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-black dark:text-white">
                Mes Valeurs
              </h3>
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-md ring-1 ring-black/5 transition-all hover:shadow-lg dark:bg-blacksection dark:ring-white/10"
                >
                  <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${value.gradient}`} />
                  <div className="flex items-start gap-4">
                    <div className={`rounded-lg bg-gradient-to-br ${value.gradient} p-3`}>
                      <value.icon className="h-6 w-6 text-white" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2 font-semibold text-black dark:text-white">
                        {value.title}
                      </h4>
                      <p className="text-sm text-waterloo dark:text-manatee">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Testimonial Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-pink-50/50 to-purple-50/30 p-8 backdrop-blur-sm"
            >
              <Sparkles className="absolute right-4 top-4 h-12 w-12 text-primary/20" />
              <blockquote className="relative">
                <p className="mb-4 text-lg font-medium italic leading-relaxed text-black dark:text-white">
                  "Mon engagement : vous offrir un service d'excellence avec une approche 
                  personnalisée et bienveillante pour protéger ce qui compte vraiment pour vous."
                </p>
                <div className="flex items-center gap-2">
                  <div className="h-1 w-12 bg-gradient-to-r from-primary to-pink-400" />
                  <p className="font-semibold text-primary">Votre Courtière, Novantys Solutions</p>
                </div>
              </blockquote>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCourtier;

