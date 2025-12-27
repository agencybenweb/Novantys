"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Calculator, Phone, Sparkles } from "lucide-react";

export default function SimulateurPERPage() {
  const [age, setAge] = useState(35);
  const [revenu, setRevenu] = useState(40000);
  const [versement, setVersement] = useState(3000);

  const calculateResults = () => {
    const years = 65 - age;
    const capital = versement * years + (versement * years * 0.03);
    const rente = capital * 0.04 / 12;
    const economie = versement * 0.3;

    return {
      capital: Math.round(capital),
      rente: Math.round(rente),
      economie: Math.round(economie)
    };
  };

  const results = calculateResults();

  return (
    <main className="pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h1 className="mb-5 text-center text-3xl font-bold text-white xl:text-hero">
            Simulateur <span className="text-primary">PER</span>
          </h1>
          <p className="mx-auto mb-20 max-w-3xl text-center text-xl text-manatee">
            Plan Épargne Retraite - Préparez votre retraite en optimisant votre fiscalité
          </p>

          <div className="flex flex-wrap items-center justify-center gap-25">
            {/* Formulaire */}
            <div className="w-full max-w-[600px] rounded-lg border border-white/10 bg-blacksection p-7.5 shadow-solid-3 lg:w-[calc(50%-50px)]">
              <h3 className="mb-7.5 text-xl font-bold text-white">
                Vos Informations
              </h3>

              <div className="space-y-5">
                <div>
                  <label className="mb-3 block text-sm font-medium text-white">
                    Votre âge: <span className="text-primary">{age} ans</span>
                  </label>
                  <input
                    type="range"
                    min="25"
                    max="60"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-white">
                    Revenu annuel: <span className="text-primary">{revenu.toLocaleString()} €</span>
                  </label>
                  <input
                    type="range"
                    min="20000"
                    max="200000"
                    step="5000"
                    value={revenu}
                    onChange={(e) => setRevenu(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-white">
                    Versement annuel: <span className="text-primary">{versement.toLocaleString()} €</span>
                  </label>
                  <input
                    type="range"
                    min="1000"
                    max="20000"
                    step="500"
                    value={versement}
                    onChange={(e) => setVersement(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Résultats */}
            <div className="w-full max-w-[600px] rounded-lg border border-white/10 bg-gradient-to-br from-primary/20 to-primary/10 p-7.5 shadow-solid-3 lg:w-[calc(50%-50px)]">
              <h3 className="mb-7.5 text-xl font-bold text-white">
                Résultats Estimés
              </h3>

              <div className="space-y-5">
                <div className="rounded-lg bg-black p-5">
                  <div className="mb-2 text-sm text-manatee">
                    Capital estimé à la retraite
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    {results.capital.toLocaleString()} €
                  </div>
                </div>

                <div className="rounded-lg bg-black p-5">
                  <div className="mb-2 text-sm text-manatee">
                    Rente mensuelle estimée
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    {results.rente.toLocaleString()} € / mois
                  </div>
                </div>

                <div className="rounded-lg bg-black p-5">
                  <div className="mb-2 text-sm text-manatee">
                    Économie d'impôt annuelle
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    {results.economie.toLocaleString()} €
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-7.5 flex items-center justify-center gap-2 rounded-full gradient-primary px-7.5 py-4 text-regular font-bold text-black shadow-lg transition-all hover:shadow-xl"
              >
                <Phone className="h-5 w-5" />
                Être Rappelé par un Expert
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

