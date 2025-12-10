"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { useRef } from "react";
import { 
  User, 
  Briefcase, 
  Handshake, 
  Shield, 
  ArrowRight,
  Sparkles,
  CheckCircle2
} from "lucide-react";

const Services = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const [activeTab, setActiveTab] = useState<"particulier" | "pro">("particulier");

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const services = [
    // Particuliers
    {
      id: 1,
      icon: Briefcase,
      title: "Plan Épargne Retraite",
      description: "Optimisez votre retraite avec un PER sur-mesure et des avantages fiscaux.",
      features: ["PER personnalisé", "Optimisation fiscale", "Simulation rapide"],
      gradient: "from-blue-400 to-cyan-400",
      bgGradient: "from-blue-50/50 to-cyan-50/30",
      link: "/simulateur-per",
      segment: "particulier" as const
    },
    {
      id: 2,
      icon: Handshake,
      title: "Assurance de Prêt",
      description: "Sécurisez votre crédit immobilier avec une couverture complète et compétitive.",
      features: ["Garantie emprunteur", "Taux optimisés", "Changement d’assurance"],
      gradient: "from-primary to-amber-500",
      bgGradient: "from-amber-50/50 to-orange-50/30",
      link: "/assurance-pret",
      segment: "particulier" as const
    },
    {
      id: 3,
      icon: User,
      title: "Complémentaire Santé",
      description: "Une mutuelle santé sur-mesure pour vous et votre famille.",
      features: ["Formule ajustable", "Remboursements rapides", "Optique & dentaire renforcés"],
      gradient: "from-rose-400 to-pink-400",
      bgGradient: "from-rose-50/50 to-pink-50/30",
      link: "/complementaire-sante",
      segment: "particulier" as const
    },
    // Professionnels
    {
      id: 4,
      icon: Shield,
      title: "Assurance Pro",
      description: "Protégez votre activité avec des garanties adaptées à votre métier.",
      features: ["Multirisque Pro", "Protection juridique", "Matériel & locaux"],
      gradient: "from-emerald-400 to-teal-400",
      bgGradient: "from-emerald-50/50 to-teal-50/30",
      link: "/travailleurs-non-salaries",
      segment: "pro" as const
    },
    {
      id: 5,
      icon: Briefcase,
      title: "Prévoyance TNS",
      description: "Sécurisez vos revenus en cas d’arrêt de travail ou d’imprévu.",
      features: ["Indemnités journalières", "Capital & rente", "Protection famille"],
      gradient: "from-blue-500 to-indigo-500",
      bgGradient: "from-blue-50/50 to-indigo-50/30",
      link: "/travailleurs-non-salaries",
      segment: "pro" as const
    },
    {
      id: 6,
      icon: Shield,
      title: "RC Professionnelle",
      description: "Couvrez votre responsabilité civile et vos prestations professionnelles.",
      features: ["Protection totale", "Devis rapide", "Garanties optimales"],
      gradient: "from-amber-400 to-orange-400",
      bgGradient: "from-amber-50/50 to-orange-50/30",
      link: "/rc-pro",
      segment: "pro" as const
    }
  ];

  const filteredServices = services.filter(s => activeTab === "particulier" ? s.segment === "particulier" : s.segment === "pro");

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-b from-white via-alabaster to-white py-20 dark:from-black dark:via-blacksection dark:to-black lg:py-25 xl:py-30" id="services">
      {/* Premium Animated background */}
      <div className="absolute inset-0 -z-1">
        <motion.div
          className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/10 via-pink-100/20 to-transparent blur-3xl"
          animate={{
            y: [0, 50, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-purple-100/20 via-primary/10 to-transparent blur-3xl"
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
      
      <motion.div 
        style={{ scale }}
        className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0"
      >
        {/* Section Title */}
        <div className="animate_top mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 via-pink-50/50 to-purple-50/50 px-4 py-2 backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Nos Solutions Premium</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3"
          >
            Des Services d'
            <span className="bg-gradient-to-r from-primary via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Excellence
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 text-lg text-waterloo dark:text-manatee md:w-4/5 xl:w-1/2"
          >
            Une expertise reconnue dans quatre domaines clés pour protéger ce qui compte vraiment pour vous
          </motion.p>
        </div>

        {/* Tabs Particulier / Pro */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {[
            { key: "particulier", label: "Pour les Particuliers", icon: User, count: services.filter(s => s.segment === "particulier").length },
            { key: "pro", label: "Pour les Professionnels", icon: Briefcase, count: services.filter(s => s.segment === "pro").length },
          ].map((tab) => (
            <motion.button
              key={tab.key}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveTab(tab.key as "particulier" | "pro")}
              className={`group inline-flex items-center gap-3 rounded-full border-2 px-5 py-3 text-sm font-semibold transition-all backdrop-blur-sm ${
                activeTab === tab.key
                  ? "border-primary bg-gradient-to-r from-primary/10 via-amber-500/10 to-primary/10 text-primary shadow-lg"
                  : "border-black/10 bg-white/80 text-black shadow-sm hover:border-primary/50 hover:text-primary dark:border-white/10 dark:bg-blacksection/80 dark:text-white"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
              <span className="rounded-full bg-black/5 px-2 py-0.5 text-xs font-bold text-black group-hover:bg-primary/10 group-hover:text-primary dark:bg-white/10 dark:text-white">
                {tab.count}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Premium Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="animate_top group"
            >
              <Link href={service.link}>
                <div className="relative h-full overflow-hidden rounded-2xl bg-white/80 p-8 shadow-lg ring-1 ring-black/5 backdrop-blur-sm transition-all hover:shadow-2xl dark:bg-blacksection/80 dark:ring-white/10 xl:p-10">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                  
                  {/* Content */}
                  <div className="relative">
                    {/* Icon & Title */}
                    <div className="mb-6 flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <motion.div
                          className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg`}
                          whileHover={{ 
                            scale: 1.1,
                            rotate: [0, -10, 10, -10, 0],
                            transition: { duration: 0.5 }
                          }}
                        >
                          <service.icon className="h-8 w-8 text-white" strokeWidth={2} />
                        </motion.div>
                        <div>
                          <h4 className="text-xl font-bold text-black dark:text-white xl:text-itemtitle">
                            {service.title}
                          </h4>
                        </div>
                      </div>
                      
                      <motion.div
                        className="rounded-full bg-white/80 p-2 shadow-sm dark:bg-blacksection/80"
                        whileHover={{ scale: 1.2, rotate: 45 }}
                      >
                        <ArrowRight className="h-5 w-5 text-primary" />
                      </motion.div>
                    </div>
                    
                    {/* Description */}
                    <p className="mb-6 text-base leading-relaxed text-waterloo dark:text-manatee">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle2 className={`h-5 w-5 bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`} />
                          <span className="text-sm font-medium text-black dark:text-white">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* CTA */}
                    <motion.div 
                      className="mt-6 flex items-center gap-2 text-primary"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-sm font-semibold">Découvrir ce service</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Premium CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="animate_top mx-auto mt-16 max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-white/90 via-white/50 to-white/30 p-10 shadow-2xl ring-1 ring-black/5 backdrop-blur-xl dark:from-blacksection/90 dark:via-blacksection/50 dark:to-blacksection/30 dark:ring-white/10"
        >
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-pink-50/30 to-purple-50/20 dark:from-primary/10 dark:via-pink-900/10 dark:to-purple-900/10" />
          
          <div className="relative text-center">
            <Sparkles className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h4 className="mb-4 text-2xl font-bold text-black dark:text-white">
              Une Approche{" "}
              <span className="bg-gradient-to-r from-primary via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Sur-Mesure
              </span>
            </h4>
            <p className="mb-6 text-base leading-relaxed text-waterloo dark:text-manatee">
              Nous avons structuré nos services pour répondre précisément aux besoins de chaque profil. 
              Notre partenariat avec EMPRUNTIS et nos compagnies d'assurance de référence nous permet 
              de vous offrir des solutions complètes, personnalisées et toujours au meilleur prix.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-amber-500 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:shadow-xl"
            >
              <span>Parlez-nous de votre projet</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;