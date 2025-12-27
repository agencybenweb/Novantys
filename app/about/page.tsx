"use client";
import { motion } from "framer-motion";
import { Puzzle, Shield, Handshake, TrendingUp, Users, Phone, Sparkles } from "lucide-react";

export default function AboutPage() {
  const features = [
    {
      icon: Puzzle,
      title: "Solutions Personnalisées",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: Shield,
      title: "Protection Sociale",
      color: "from-emerald-400 to-teal-400"
    },
    {
      icon: Handshake,
      title: "Expertise & Partenariats",
      color: "from-primary to-amber-400"
    },
    {
      icon: TrendingUp,
      title: "Croissance & Performance",
      color: "from-purple-400 to-pink-400"
    }
  ];

  return (
    <main>
      <section className="pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col items-center gap-7.5 lg:flex-row xl:gap-25">
            {/* Left Side - Image with Badge */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative w-full lg:w-[calc(50%-50px)]"
            >
              <div className="relative h-[400px] overflow-hidden rounded-2xl">
                {/* Placeholder - replace with actual image */}
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-beigesection via-white to-beigesection dark:from-black dark:via-blacksection dark:to-black">
                  <Users className="h-48 w-48 text-primary/10" strokeWidth={1} />
                </div>

                {/* Experience Badge */}
                <div className="absolute left-0 top-0 h-50 w-50 rounded-br-2xl rounded-tl-2xl bg-white p-5 shadow-solid-7 border border-beigeborder dark:bg-blacksection dark:border-white/10">
                  <div className="flex h-full flex-col items-center justify-center rounded-xl bg-primary p-4">
                    <h1 className="mb-0 text-5xl font-extrabold text-white">25</h1>
                    <h2 className="text-xl font-bold text-white">Ans</h2>
                    <h5 className="text-sm font-semibold text-white">d'Expérience</h5>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right w-full lg:w-[calc(50%-50px)]"
            >
              <h1 className="mb-5 text-3xl font-bold text-beigetext dark:text-white xl:text-hero">
                Qui Sommes Nous ?
              </h1>

              <p className="mb-4 text-xl font-semibold text-primary">
                Novantys Solutions : votre partenaire confiance en assurance et financement
              </p>

              <p className="mb-6 text-base text-beigetextlight dark:text-manatee">
                Chez Novantys Solutions, nous accompagnons chaque jour des particuliers, des professionnels
                et des chefs d'entreprise dans la protection de leurs proches, de leur santé et de leurs projets financiers.
              </p>

              {/* Features Grid */}
              <div className="mb-6 flex flex-wrap gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex w-full min-w-[200px] items-center gap-3 rounded-lg border border-beigeborder bg-white p-4 shadow-solid-3 transition-all hover:shadow-solid-5 dark:border-white/10 dark:bg-blacksection sm:w-[calc(50%-0.75rem)]"
                  >
                    <div
                      className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${feature.color} shadow-lg`}
                    >
                      <feature.icon className="h-7 w-7 text-white" />
                    </div>
                    <h5 className="text-sm font-semibold text-beigetext dark:text-white">
                      {feature.title}
                    </h5>
                  </div>
                ))}
              </div>

              <p className="mb-6 text-base text-beigetextlight dark:text-manatee">
                Notre équipe d'experts vous accompagne dans vos démarches d'assurance et de financement
                avec une approche personnalisée et professionnelle, adaptée à vos besoins spécifiques.
              </p>

              {/* Contact CTA */}
              <div className="mt-7.5 border-t border-beigeborder pt-7.5 dark:border-white/10">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-primary to-amber-500 shadow-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h5 className="mb-1 text-lg font-semibold text-beigetext dark:text-white">
                      Appelez-nous
                    </h5>
                    <p className="text-base font-medium text-primary">
                      +33 6 37 76 41 90
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
