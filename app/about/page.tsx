"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  const features = [
    {
      icon: "fas fa-puzzle-piece",
      title: "Solutions Personnalisées",
      color: "#3498db"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Protection Sociale",
      color: "#27ae60"
    },
    {
      icon: "fas fa-handshake",
      title: "Expertise et Partenariats",
      color: "#f39c12"
    },
    {
      icon: "fas fa-chart-bar",
      title: "Croissance et Performance",
      color: "#9b59b6"
    }
  ];

  return (
    <main>
      <section className="pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col gap-7.5 lg:flex-row xl:gap-12.5">
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
              className="animate_left relative w-full lg:w-1/2"
            >
              <div className="relative h-[400px] overflow-hidden rounded-2xl">
                {/* Placeholder - replace with actual image */}
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10">
                  <i className="fas fa-users text-9xl text-primary/30"></i>
                </div>

                {/* Experience Badge */}
                <div className="absolute left-0 top-0 h-50 w-50 rounded-br-2xl rounded-tl-2xl bg-white p-5 shadow-solid-7 dark:bg-black">
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
              className="animate_right w-full lg:w-1/2"
            >
              <h1 className="mb-5 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Qui Sommes Nous ?
              </h1>
              
              <p className="mb-4 text-xl font-semibold text-primary">
                Novantys Solutions : votre partenaire confiance en assurance et financement
              </p>

              <p className="mb-6 text-base text-waterloo dark:text-manatee">
                Chez Novantys Solutions, nous accompagnons chaque jour des particuliers, des professionnels 
                et des chefs d'entreprise dans la protection de leurs proches, de leur santé et de leurs projets financiers.
              </p>

              {/* Features Grid */}
              <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg border border-stroke bg-white p-4 shadow-solid-3 transition-all hover:shadow-solid-5 dark:border-strokedark dark:bg-blacksection"
                  >
                    <div
                      className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full"
                      style={{
                        background: `linear-gradient(135deg, ${feature.color}, ${feature.color}dd)`,
                      }}
                    >
                      <i className={`${feature.icon} text-2xl text-white`}></i>
                    </div>
                    <h5 className="text-sm font-semibold text-black dark:text-white">
                      {feature.title}
                    </h5>
                  </div>
                ))}
              </div>

              <p className="mb-6 text-base text-waterloo dark:text-manatee">
                Notre équipe d'experts vous accompagne dans vos démarches d'assurance et de financement 
                avec une approche personnalisée et professionnelle, adaptée à vos besoins spécifiques.
              </p>

              {/* Contact CTA */}
              <div className="mt-7.5 border-t border-stroke pt-7.5 dark:border-strokedark">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                    <i className="fas fa-phone-alt text-2xl text-white"></i>
                  </div>
                  <div>
                    <h5 className="mb-1 text-lg font-semibold text-black dark:text-white">
                      Appelez-nous
                    </h5>
                    <p className="text-base font-medium text-primary">
                      +33 1 23 45 67 89
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

