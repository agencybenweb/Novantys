"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  Shield, 
  Heart, 
  Activity,
  Bed, 
  UserMinus, 
  Clock, 
  Briefcase,
  DollarSign,
  Settings,
  Handshake,
  Users,
  TrendingUp,
  Building,
  Sparkles,
  Phone,
  Calendar,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function AssurancePret() {
  const garanties = [
    {
      id: 1,
      icon: Heart,
      title: "Décès (DC)",
      description: "Protection de votre famille en cas de décès prématuré",
      gradient: "from-red-400 to-rose-400"
    },
    {
      id: 2,
      icon: Activity,
      title: "Perte Totale et Irréversible d'Autonomie (PTIA)",
      description: "Couverture en cas de perte totale et irréversible d'autonomie",
      gradient: "from-orange-400 to-amber-400"
    },
    {
      id: 3,
      icon: Bed,
      title: "Invalidité Permanente Totale (IPT)",
      description: "Protection en cas d'invalidité permanente totale",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      id: 4,
      icon: UserMinus,
      title: "Invalidité Permanente Partielle (IPP)",
      description: "Couverture en cas d'invalidité permanente partielle",
      gradient: "from-amber-400 to-yellow-400"
    },
    {
      id: 5,
      icon: Clock,
      title: "Incapacité Temporaire Totale de Travail (ITT)",
      description: "Protection pendant les arrêts de travail temporaires",
      gradient: "from-cyan-400 to-teal-400"
    },
    {
      id: 6,
      icon: Briefcase,
      title: "Perte d'Emploi",
      description: "Couverture optionnelle selon compagnie",
      gradient: "from-emerald-400 to-green-400"
    }
  ];

  const pourquoiSouscrire = [
    {
      id: 1,
      icon: DollarSign,
      title: "Économies Importantes",
      description: "Les assurances de prêt proposées par les banques (contrat groupe) sont souvent plus chères que les contrats externes souscrits auprès d'assureurs spécialisés.",
      gradient: "from-emerald-400 to-teal-400"
    },
    {
      id: 2,
      icon: Settings,
      title: "Garanties Personnalisées",
      description: "Les délégations d'assurance s'adaptent à votre âge, état de santé, profession et type de prêt (résidence principale, investissement locatif, prêt professionnel).",
      gradient: "from-amber-400 to-orange-400"
    },
    {
      id: 3,
      icon: Handshake,
      title: "Liberté de Choix",
      description: "Depuis la loi Lagarde, vous pouvez choisir votre assurance dès la souscription du prêt. Avec la loi Hamon et la loi Bourquin, vous pouvez la changer.",
      gradient: "from-blue-400 to-indigo-400"
    }
  ];

  const pourQui = [
    {
      id: 1,
      icon: Users,
      title: "Particuliers",
      description: "Salariés, TNS, retraités",
      gradient: "from-emerald-400 to-teal-400"
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Investisseurs Locatifs",
      description: "Pour les investisseurs qui souhaitent sécuriser leurs emprunts locatifs",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      id: 3,
      icon: Building,
      title: "Professionnels",
      description: "Finançant murs commerciaux ou SCI",
      gradient: "from-purple-400 to-pink-400"
    }
  ];

  const exemplesEconomie = [
    {
      nom: "Mr Martin",
      age: "35 ans",
      montant: "250 000€",
      duree: "20 ans",
      assuranceBanque: "0,35% = 14 000€",
      assuranceExterne: "0,10% = 5 000€",
      economie: "9 000€",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      nom: "Mme Dubois",
      age: "28 ans",
      montant: "180 000€",
      duree: "25 ans",
      assuranceBanque: "0,40% = 12 000€",
      assuranceExterne: "0,12% = 3 600€",
      economie: "8 400€",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      nom: "Mr Laurent",
      age: "42 ans",
      montant: "320 000€",
      duree: "15 ans",
      assuranceBanque: "0,45% = 15 360€",
      assuranceExterne: "0,15% = 5 120€",
      economie: "10 240€",
      gradient: "from-primary to-amber-400"
    }
  ];

  return (
    <main className="relative overflow-hidden bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-alabaster via-white to-alabaster py-20 dark:from-blacksection dark:via-black dark:to-blacksection lg:py-25 xl:py-30">
        <div className="absolute inset-0 -z-1">
        <motion.div
            className="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/10 via-pink-100/20 to-transparent blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 via-pink-50/50 to-purple-50/50 px-4 py-2 backdrop-blur-sm">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Assurance de Prêt</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold text-black dark:text-white xl:text-hero">
              Assurance de Prêt Immobilier –{" "}
              <span className="bg-gradient-to-r from-primary via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Économisez
              </span>{" "}
              sur Votre Financement
            </h1>
            
            <p className="mx-auto mb-8 max-w-3xl text-lg text-waterloo dark:text-manatee">
              Découvrez comment réduire vos mensualités et protéger votre prêt immobilier avec une assurance adaptée à votre profil et votre projet.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-amber-500 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:shadow-xl"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Prendre Rendez-vous</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Qu'est-ce que l'Assurance de Prêt */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
          viewport={{ once: true }}
            >
              <h2 className="mb-6 text-3xl font-bold text-black dark:text-white">
                Qu'est-ce que l'{" "}
                <span className="bg-gradient-to-r from-primary via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Assurance de Prêt
                </span>{" "}
                ?
              </h2>
              
              <p className="mb-6 text-base leading-relaxed text-waterloo dark:text-manatee">
                L'assurance emprunteur garantit le remboursement total ou partiel de votre prêt immobilier en cas :
              </p>

              <div className="space-y-4">
                {[
                  { icon: Heart, text: "de décès", color: "from-red-400 to-rose-400" },
                  { icon: UserMinus, text: "d'invalidité permanente ou temporaire", color: "from-orange-400 to-amber-400" },
                  { icon: Clock, text: "d'incapacité de travail", color: "from-blue-400 to-cyan-400" },
                  { icon: Briefcase, text: "et parfois de perte d'emploi (en option)", color: "from-purple-400 to-pink-400" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <div className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}>
                      <item.icon className="h-7 w-7 text-white" strokeWidth={2} />
                    </div>
                    <span className="text-base font-medium text-black dark:text-white">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-gradient-to-br from-primary/10 via-pink-50/50 to-purple-50/30 p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <Shield className="h-8 w-8 flex-shrink-0 text-emerald-500" strokeWidth={2} />
                  <div>
                    <p className="font-semibold text-black dark:text-white">Protection complète de votre emprunt</p>
                    <p className="mt-2 text-sm text-waterloo dark:text-manatee">
                      Elle est exigée par les banques pour sécuriser le remboursement du crédit, même si ce n'est pas légalement obligatoire.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-full min-h-[500px] overflow-hidden rounded-3xl">
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10">
                  <Shield className="h-48 w-48 text-primary/30" strokeWidth={1} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pourquoi Souscrire */}
      <section className="relative overflow-hidden bg-alabaster py-20 dark:bg-blacksection lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              Pourquoi Souscrire une{" "}
              <span className="bg-gradient-to-r from-primary via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Assurance de Prêt
              </span>{" "}
              ?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {pourquoiSouscrire.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative h-full overflow-hidden rounded-3xl bg-white/80 p-8 text-center shadow-lg ring-1 ring-black/5 backdrop-blur-sm transition-all hover:shadow-2xl dark:bg-blacksection/80 dark:ring-white/10">
                  <motion.div
                    className={`mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <item.icon className="h-10 w-10 text-white" strokeWidth={2} />
                  </motion.div>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-waterloo dark:text-manatee">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Garanties Principales */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              Garanties Principales d'une{" "}
              <span className="bg-gradient-to-r from-primary via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Assurance de Prêt
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {garanties.map((garantie, index) => (
              <motion.div
                key={garantie.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
                className="group"
              >
                <div className="flex items-start gap-4 rounded-2xl bg-white/80 p-6 shadow-md ring-1 ring-black/5 backdrop-blur-sm transition-all hover:shadow-lg dark:bg-blacksection/80 dark:ring-white/10">
                  <div className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${garantie.gradient} shadow-lg`}>
                    <garantie.icon className="h-8 w-8 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
                      {garantie.title}
                    </h3>
                    <p className="text-sm text-waterloo dark:text-manatee">
                      {garantie.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pour Qui */}
      <section className="relative overflow-hidden bg-alabaster py-20 dark:bg-blacksection lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              Pour Qui ?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {pourQui.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-full overflow-hidden rounded-3xl bg-white/80 p-8 text-center shadow-lg ring-1 ring-black/5 backdrop-blur-sm transition-all hover:shadow-2xl dark:bg-blacksection/80 dark:ring-white/10">
                  <motion.div
                    className={`mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <item.icon className="h-10 w-10 text-white" strokeWidth={2} />
                  </motion.div>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-base text-waterloo dark:text-manatee">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exemples d'Économies */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              Exemples d'{" "}
              <span className="bg-gradient-to-r from-primary via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Économies Réalisées
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-waterloo dark:text-manatee">
              Découvrez les économies que nos clients ont pu réaliser grâce à notre expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {exemplesEconomie.map((exemple, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className={`relative h-full overflow-hidden rounded-3xl bg-gradient-to-br ${exemple.gradient} p-8 text-white shadow-2xl`}>
                  <div className="relative">
                    <h3 className="mb-2 text-2xl font-bold">{exemple.nom}, {exemple.age}</h3>
                    <p className="mb-6 text-sm opacity-90">Emprunte {exemple.montant} sur {exemple.duree}</p>
                    
                    <div className="space-y-3 border-t border-white/20 pt-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Assurance banque :</span>
                        <span className="font-semibold">{exemple.assuranceBanque}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Assurance externe :</span>
                        <span className="font-semibold">{exemple.assuranceExterne}</span>
                      </div>
                      <div className="mt-4 flex items-center justify-between rounded-xl bg-white/20 p-4 backdrop-blur-sm">
                        <span className="font-bold">Économie :</span>
                        <span className="text-3xl font-extrabold">{exemple.economie}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative overflow-hidden bg-gradient-to-b from-alabaster via-white to-alabaster py-20 dark:from-blacksection dark:via-black dark:to-blacksection lg:py-25">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-gradient-to-br from-white/90 via-white/50 to-white/30 p-12 text-center shadow-2xl ring-1 ring-black/5 backdrop-blur-xl dark:from-blacksection/90 dark:via-blacksection/50 dark:to-blacksection/30 dark:ring-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-pink-50/30 to-purple-50/20 dark:from-primary/10 dark:via-pink-900/10 dark:to-purple-900/10" />
            
            <div className="relative">
              <Sparkles className="mx-auto mb-6 h-16 w-16 text-primary" />
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">
                Faites Votre Devis Assurance de Prêt
            </h2>
              <p className="mb-8 text-lg text-waterloo dark:text-manatee">
                Avec votre conseillère en prenant un rendez-vous
            </p>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
            <Link
              href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-amber-500 px-10 py-5 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-xl"
            >
                  <Calendar className="h-6 w-6" />
                  <span>Prendre Rendez-Vous</span>
                  <ArrowRight className="h-5 w-5" />
            </Link>
              </motion.div>
          </div>
        </motion.div>
      </div>
      </section>
    </main>
  );
}
