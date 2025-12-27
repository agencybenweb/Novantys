"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  HeartPulse,
  Umbrella,
  Calendar,
  Activity,
  Briefcase,
  Mail,
  Phone,
  Sparkles,
  CheckCircle2,
  ClipboardCheck,
} from "lucide-react";

type FormState = {
  civilite: string;
  nom: string;
  prenom: string;
  email: string;
  telPortable: string;
  dateNaissance: string;
  situationProfessionnelle: string;
  codeAPE: string;
  profession: string;
  revenuAnnuel: string;
  ittFranchise: string;
  ittRevenuAnnuelNet: string;
  invaliditeDuree: string;
  iptFraisGeneraux: string;
  decesCapital: string;
  decesRenteConjoint: string;
  commentaire: string;
};

export default function TravailleursNonSalariesPage() {
  const [formData, setFormData] = useState<FormState>({
    civilite: "",
    nom: "",
    prenom: "",
    email: "",
    telPortable: "",
    dateNaissance: "",
    situationProfessionnelle: "",
    codeAPE: "",
    profession: "",
    revenuAnnuel: "",
    ittFranchise: "",
    ittRevenuAnnuelNet: "",
    invaliditeDuree: "",
    iptFraisGeneraux: "",
    decesCapital: "",
    decesRenteConjoint: "",
    commentaire: "",
  });

  const garanties = [
    {
      icon: Calendar,
      title: "Indemnités Journalières",
      description: "Franchise personnalisable pour compenser la perte de revenus en cas d’arrêt.",
      gradient: "from-blue-400 to-cyan-400",
    },
    {
      icon: Activity,
      title: "Rente d'Invalidité",
      description: "Rente en cas d’invalidité partielle ou totale pour sécuriser votre foyer.",
      gradient: "from-emerald-400 to-teal-400",
    },
    {
      icon: HeartPulse,
      title: "Capital Décès / PTIA",
      description: "Capital ou rente éducation pour protéger vos proches.",
      gradient: "from-amber-400 to-orange-400",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Votre demande TNS a été envoyée. Un conseiller vous contactera rapidement.");
  };

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-black via-blacksection to-black pb-20 pt-35 lg:pt-40 xl:pb-25 xl:pt-46">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-1">
        <motion.div
          className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/10 via-pink-100/20 to-transparent blur-3xl"
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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/20 via-amber-500/10 to-primary/20 px-4 py-2 backdrop-blur-sm ring-1 ring-white/10">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Solutions Pro & TNS</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white xl:text-hero">
            Protection Complète <span className="bg-gradient-to-r from-primary via-amber-500 to-primary bg-clip-text text-transparent">TNS</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-manatee">
            Santé, prévoyance et revenus garantis. Des garanties sur-mesure pour indépendants, professions libérales et dirigeants.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-manatee">
            <span className="inline-flex items-center gap-2 rounded-full bg-blacksection/80 px-4 py-2 ring-1 ring-white/10">
              <CheckCircle2 className="h-4 w-4 text-primary" /> Délais rapides
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-blacksection/80 px-4 py-2 ring-1 ring-white/10">
              <CheckCircle2 className="h-4 w-4 text-primary" /> Fiscalité optimisée
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-blacksection/80 px-4 py-2 ring-1 ring-white/10">
              <CheckCircle2 className="h-4 w-4 text-primary" /> Couverture adaptée
            </span>
          </div>
        </motion.div>

        {/* Garanties clés */}
        <div className="mt-14 flex flex-wrap justify-center gap-8">
          {garanties.map((g, idx) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] max-w-[400px] overflow-hidden rounded-2xl bg-blacksection/80 p-6 shadow-lg ring-1 ring-white/10 backdrop-blur-sm transition-all hover:shadow-2xl"
            >
              <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${g.gradient} shadow-lg`}>
                <g.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">{g.title}</h3>
              <p className="text-sm text-manatee">{g.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Formulaire rapide */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-14 space-y-8 rounded-3xl bg-blacksection/90 p-8 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <ClipboardCheck className="h-6 w-6 text-primary" />
            <div>
              <p className="text-sm font-semibold text-primary">Demande de devis TNS</p>
              <p className="text-sm text-manatee">Réponse sous 24h par un expert</p>
            </div>
          </div>

          {/* Identité */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="md:col-span-1">
              <label className="mb-2 block text-sm font-semibold text-white">Civilité *</label>
              <select
                name="civilite"
                value={formData.civilite}
                onChange={handleChange}
                required
                className="w-full rounded-xl border-2 border-white/10 bg-blacksection px-4 py-3 text-white transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              >
                <option value="" className="bg-blacksection text-white">Sélectionner</option>
                <option value="M." className="bg-blacksection text-white">M.</option>
                <option value="Mme" className="bg-blacksection text-white">Mme</option>
                <option value="Mlle" className="bg-blacksection text-white">Mlle</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Nom *</label>
              <input
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
                className="w-full rounded-xl border-2 border-white/10 bg-blacksection px-4 py-3 text-white transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Prénom *</label>
              <input
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                required
                className="w-full rounded-xl border-2 border-white/10 bg-blacksection px-4 py-3 text-white transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Date de naissance *</label>
              <input
                type="date"
                name="dateNaissance"
                value={formData.dateNaissance}
                onChange={handleChange}
                required
                className="w-full rounded-xl border-2 border-white/10 bg-blacksection px-4 py-3 text-white transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>
          </div>

          {/* Contact */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">
                <Mail className="mr-1 inline h-4 w-4" /> Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border-2 border-white/10 bg-blacksection px-4 py-3 text-white transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">
                <Phone className="mr-1 inline h-4 w-4" /> Tél Portable *
              </label>
              <input
                type="tel"
                name="telPortable"
                value={formData.telPortable}
                onChange={handleChange}
                required
                className="w-full rounded-xl border-2 border-white/10 bg-blacksection px-4 py-3 text-white transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>
          </div>

          {/* Situation pro */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Situation *</label>
              <select
                name="situationProfessionnelle"
                value={formData.situationProfessionnelle}
                onChange={handleChange}
                required
                className="w-full rounded-xl border-2 border-white/10 bg-blacksection px-4 py-3 text-white transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              >
                <option value="">Sélectionner</option>
                <option value="tns">Travailleur non salarié</option>
                <option value="profession-liberale">Profession libérale</option>
                <option value="dirigeant">Dirigeant</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Code APE</label>
              <input
                name="codeAPE"
                value={formData.codeAPE}
                onChange={handleChange}
                className="w-full rounded-xl border-2 border-white/10 bg-blacksection px-4 py-3 text-white transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Profession *</label>
              <input
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                required
                className="w-full rounded-xl border-2 border-white/10 bg-blacksection px-4 py-3 text-white transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Revenu annuel net (€) *</label>
              <input
                type="number"
                name="revenuAnnuel"
                value={formData.revenuAnnuel}
                onChange={handleChange}
                required
                min="0"
                className="w-full rounded-xl border-2 border-white/10 bg-blacksection px-4 py-3 text-white transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>
          </div>

          {/* Garanties demandées */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Revenu ITT (€)</label>
              <input
                type="number"
                name="ittRevenuAnnuelNet"
                value={formData.ittRevenuAnnuelNet}
                onChange={handleChange}
                min="0"
                className="w-full rounded-xl border-2 border-white/10 bg-blacksection px-4 py-3 text-white transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Franchise ITT (jours)</label>
              <input
                type="number"
                name="ittFranchise"
                value={formData.ittFranchise}
                onChange={handleChange}
                min="0"
                className="w-full rounded-xl border-2 border-white/10 bg-blacksection px-4 py-3 text-white transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Durée indemnisation invalidité (mois)</label>
              <input
                type="number"
                name="invaliditeDuree"
                value={formData.invaliditeDuree}
                onChange={handleChange}
                min="0"
                className="w-full rounded-xl border-2 border-white/10 bg-blacksection px-4 py-3 text-white transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Frais généraux (€)</label>
              <input
                type="number"
                name="iptFraisGeneraux"
                value={formData.iptFraisGeneraux}
                onChange={handleChange}
                min="0"
                className="w-full rounded-xl border-2 border-white/10 bg-blacksection px-4 py-3 text-white transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Capital décès (€)</label>
              <input
                type="number"
                name="decesCapital"
                value={formData.decesCapital}
                onChange={handleChange}
                min="0"
                className="w-full rounded-xl border-2 border-white/10 bg-blacksection px-4 py-3 text-white transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Rente conjoint (€)</label>
              <input
                type="number"
                name="decesRenteConjoint"
                value={formData.decesRenteConjoint}
                onChange={handleChange}
                min="0"
                className="w-full rounded-xl border-2 border-white/10 bg-blacksection px-4 py-3 text-white transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>
          </div>

          {/* Commentaire */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-white">Commentaires / besoins spécifiques</label>
            <textarea
              name="commentaire"
              value={formData.commentaire}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-xl border-2 border-white/10 bg-blacksection px-4 py-3 text-white transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              placeholder="Précisez vos attentes (franchises, montants, garanties à couvrir...)"
            />
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-3 text-center">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-amber-500 to-primary px-8 py-4 text-lg font-semibold text-white shadow-xl transition hover:shadow-2xl"
            >
              <Umbrella className="h-5 w-5" />
              Obtenir mon devis TNS
            </motion.button>
            <p className="text-xs text-manatee">
              En application des Articles L 520-1 et R 520-2 du Code des Assurances
            </p>
          </div>
        </motion.form>
      </div>
    </main>
  );
}

