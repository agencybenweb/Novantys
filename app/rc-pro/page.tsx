"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Briefcase,
  FileText,
  Gavel,
  Scale,
  Sparkles,
  CheckCircle2,
  Mail,
  Phone,
  Globe,
} from "lucide-react";

type FormState = {
  nom: string;
  email: string;
  telephone: string;
  activite: string;
  codeNAF: string;
  chiffreAffaires: string;
  effectif: string;
  zoneGeographique: string;
  rcExploitation: boolean;
  rcPro: boolean;
  defenseRecours: boolean;
  protectionJuridique: boolean;
  franchise: string;
  message: string;
};

export default function RCProPage() {
  const [formData, setFormData] = useState<FormState>({
    nom: "",
    email: "",
    telephone: "",
    activite: "",
    codeNAF: "",
    chiffreAffaires: "",
    effectif: "",
    zoneGeographique: "",
    rcExploitation: false,
    rcPro: true,
    defenseRecours: false,
    protectionJuridique: false,
    franchise: "",
    message: "",
  });

  const garanties = [
    {
      icon: Shield,
      title: "RC Exploitation",
      desc: "Dommages causés par vos locaux, votre matériel ou vos salariés.",
      gradient: "from-blue-400 to-cyan-400",
    },
    {
      icon: Briefcase,
      title: "RC Professionnelle",
      desc: "Erreurs, omissions, négligences dans la prestation de service.",
      gradient: "from-emerald-400 to-teal-400",
    },
    {
      icon: Gavel,
      title: "Défense - Recours",
      desc: "Frais de justice et expertise en cas de litige.",
      gradient: "from-amber-400 to-orange-400",
    },
    {
      icon: Scale,
      title: "Protection Juridique",
      desc: "Accompagnement juridique pour vos différends professionnels.",
      gradient: "from-purple-400 to-pink-400",
    },
  ];

  const activites = [
    {
      title: "Professions de santé",
      exemples: "Médecins, kinés, infirmiers, dentistes…",
    },
    {
      title: "Bâtiment & études",
      exemples: "Artisans, architectes, bureaux d'études…",
    },
    {
      title: "Services & conseil",
      exemples: "Consultants, experts-comptables, formateurs…",
    },
    {
      title: "Métiers du web",
      exemples: "Développeurs, designers, community managers…",
    },
    {
      title: "Immobilier",
      exemples: "Agents, syndics, gestionnaires…",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Votre demande RC Pro a bien été envoyée. Un conseiller vous contactera sous 24h.");
  };

  return (
    <main className="relative overflow-hidden bg-beigeluxe transition-colors duration-300 dark:bg-black pb-20 pt-35 lg:pt-40 xl:pb-25 xl:pt-46">
      <div className="absolute inset-0 -z-1">
        <motion.div
          className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/10 via-pink-100/20 to-transparent blur-3xl opacity-50"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/20 via-amber-500/10 to-primary/20 px-4 py-2 backdrop-blur-sm ring-1 ring-beigeborder dark:ring-white/10">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">RC Professionnelle</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-beigetext dark:text-white xl:text-hero">
            Couvrez votre activité <span className="bg-gradient-to-r from-primary via-amber-500 to-primary bg-clip-text text-transparent">en toute sérénité</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-beigetextlight dark:text-manatee">
            RC Exploitation, RC Pro, Défense/Recours, Protection Juridique. Un contrat sur-mesure pour protéger vos projets et votre patrimoine.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm font-semibold text-beigetextlight dark:text-manatee">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 ring-1 ring-beigeborder dark:bg-blacksection/80 dark:ring-white/10">
              <CheckCircle2 className="h-4 w-4 text-primary" /> Professions réglementées & non réglementées
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 ring-1 ring-beigeborder dark:bg-blacksection/80 dark:ring-white/10">
              <CheckCircle2 className="h-4 w-4 text-primary" /> Attestations rapides
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 ring-1 ring-beigeborder dark:bg-blacksection/80 dark:ring-white/10">
              <CheckCircle2 className="h-4 w-4 text-primary" /> Défense juridique incluse
            </span>
          </div>
        </motion.div>

        {/* Garanties */}
        <div className="mt-14 flex flex-wrap justify-center gap-8">
          {garanties.map((g, idx) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative w-full sm:w-[calc(50%-1rem)] xl:w-[calc(25%-1.5rem)] max-w-[300px] overflow-hidden rounded-2xl bg-white/80 p-6 shadow-lg ring-1 ring-beigeborder backdrop-blur-sm transition-all hover:shadow-2xl dark:bg-blacksection/80 dark:ring-white/10"
            >
              <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${g.gradient} shadow-lg`}>
                <g.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-beigetext dark:text-white">{g.title}</h3>
              <p className="text-sm text-beigetextlight dark:text-manatee">{g.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Activités concernées */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl bg-white/80 p-8 shadow-2xl ring-1 ring-beigeborder backdrop-blur-xl dark:bg-blacksection/90 dark:ring-white/10"
        >
          <div className="mb-6 flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            <div>
              <p className="text-sm font-semibold text-primary">À qui s'adresse la RC Pro ?</p>
              <p className="text-sm text-beigetextlight dark:text-manatee">Exemples d'activités couvertes</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {activites.map((act, idx) => (
              <div
                key={idx}
                className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-1rem)] max-w-[350px] rounded-2xl border border-beigeborder bg-beigesection p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-black"
              >
                <h4 className="mb-1 text-base font-bold text-beigetext dark:text-white">{act.title}</h4>
                <p className="text-sm text-beigetextlight dark:text-manatee">{act.exemples}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Formulaire */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 space-y-8 rounded-3xl bg-white/80 p-8 shadow-2xl ring-1 ring-beigeborder backdrop-blur-xl dark:bg-blacksection/90 dark:ring-white/10"
        >
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-primary" />
            <div>
              <p className="text-sm font-semibold text-primary">Demande de devis RC Pro</p>
              <p className="text-sm text-beigetextlight dark:text-manatee">Réponse sous 24h par un expert</p>
            </div>
          </div>

          {/* Identité & contact */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-beigetext dark:text-white">Nom *</label>
              <input
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
                className="w-full rounded-xl border-2 border-beigeborder bg-white px-4 py-3 text-beigetext transition focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-white/10 dark:bg-blacksection dark:text-white"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-beigetext dark:text-white">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border-2 border-beigeborder bg-white px-4 py-3 text-beigetext transition focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-white/10 dark:bg-blacksection dark:text-white"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-beigetext dark:text-white">Téléphone *</label>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                required
                className="w-full rounded-xl border-2 border-beigeborder bg-white px-4 py-3 text-beigetext transition focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-white/10 dark:bg-blacksection dark:text-white"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-beigetext dark:text-white">Zone géographique</label>
              <div className="relative">
                <Globe className="pointer-events-none absolute right-3 top-3 h-5 w-5 text-beigetextlight dark:text-manatee" />
                <input
                  name="zoneGeographique"
                  value={formData.zoneGeographique}
                  onChange={handleChange}
                  placeholder="France, Europe..."
                  className="w-full rounded-xl border-2 border-beigeborder bg-white px-4 py-3 pr-10 text-beigetext transition focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-white/10 dark:bg-blacksection dark:text-white"
                />
              </div>
            </div>
          </div>

          {/* Activité */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-beigetext dark:text-white">Activité *</label>
              <input
                name="activite"
                value={formData.activite}
                onChange={handleChange}
                required
                className="w-full rounded-xl border-2 border-beigeborder bg-white px-4 py-3 text-beigetext transition focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-white/10 dark:bg-blacksection dark:text-white"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-beigetext dark:text-white">Code NAF / APE</label>
              <input
                name="codeNAF"
                value={formData.codeNAF}
                onChange={handleChange}
                className="w-full rounded-xl border-2 border-beigeborder bg-white px-4 py-3 text-beigetext transition focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-white/10 dark:bg-blacksection dark:text-white"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-beigetext dark:text-white">Chiffre d'affaires (€)</label>
              <input
                type="number"
                name="chiffreAffaires"
                value={formData.chiffreAffaires}
                onChange={handleChange}
                min="0"
                className="w-full rounded-xl border-2 border-beigeborder bg-white px-4 py-3 text-beigetext transition focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-white/10 dark:bg-blacksection dark:text-white"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-beigetext dark:text-white">Effectif</label>
              <input
                type="number"
                name="effectif"
                value={formData.effectif}
                onChange={handleChange}
                min="0"
                className="w-full rounded-xl border-2 border-beigeborder bg-white px-4 py-3 text-beigetext transition focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-white/10 dark:bg-blacksection dark:text-white"
              />
            </div>
          </div>

          {/* Garanties optionnelles */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-beigetext dark:text-white">Garanties souhaitées</p>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {[
                { key: "rcExploitation", label: "RC Exploitation" },
                { key: "rcPro", label: "RC Professionnelle" },
                { key: "defenseRecours", label: "Défense - Recours" },
                { key: "protectionJuridique", label: "Protection Juridique" },
              ].map((g) => (
                <label
                  key={g.key}
                  className="flex items-center gap-2 rounded-xl border-2 border-beigeborder bg-beigesection px-4 py-3 text-sm font-semibold text-beigetext transition hover:border-primary/50 dark:border-white/10 dark:bg-black dark:text-white"
                >
                  <input
                    type="checkbox"
                    name={g.key}
                    checked={(formData as any)[g.key]}
                    onChange={handleChange}
                    className="h-4 w-4 text-primary focus:ring-primary"
                  />
                  {g.label}
                </label>
              ))}
            </div>
          </div>

          {/* Franchise */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-beigetext dark:text-white">Franchise souhaitée</label>
              <input
                name="franchise"
                value={formData.franchise}
                onChange={handleChange}
                placeholder="Ex: 500 €"
                className="w-full rounded-xl border-2 border-beigeborder bg-white px-4 py-3 text-beigetext transition focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-white/10 dark:bg-blacksection dark:text-white"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-beigetext dark:text-white">Précisions / risques spécifiques</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Décrivez vos prestations, zones d intervention, certificats, sous-traitance..."
              className="w-full rounded-xl border-2 border-beigeborder bg-white px-4 py-3 text-beigetext transition focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-white/10 dark:bg-blacksection dark:text-white"
            />
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-2 text-center">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-amber-500 to-primary px-10 py-4 text-lg font-semibold text-white shadow-xl transition hover:shadow-2xl"
            >
              <Shield className="h-5 w-5" />
              Demander un devis RC Pro
            </motion.button>
            <p className="text-xs text-beigetextlight dark:text-manatee">
              En application des Articles L 520-1 et R 520-2 du Code des Assurances
            </p>
          </div>
        </motion.form>
      </div>
    </main>
  );
}
