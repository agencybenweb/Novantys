"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  Eye,
  Leaf,
  Bed,
  FileText,
  Sparkles,
  Phone,
  Mail,
  Calendar,
  Plus,
  Minus,
  Send,
  Heart,
  CheckCircle2,
  Briefcase,
  ArrowRight
} from "lucide-react";

export default function ComplementaireSante() {
  const [formData, setFormData] = useState({
    // Assuré Principal
    civilite: '',
    nom: '',
    prenom: '',
    adresse: '',
    codePostal: '',
    ville: '',
    dateNaissance: '',
    villeNaissance: '',
    telDomicile: '',
    telPortable: '',
    email: '',
    situationFamiliale: '',
    nombreEnfants: '',
    enfantsACharge: '',

    // Situation Professionnelle
    situationProfessionnelle: '',
    codeAPE: '',
    categorieSocioProf: '',
    profession: '',
    employeur: '',
    salaireAnnuel: '',
    nombrePartsFiscales: '',

    // Complément d'informations
    personnePolitiquementExposee: '',
    contratMadelin: '',

    // Santé
    complementaireSante: '',
    beneficiaireCMU: '',
    demandeCMU: '',

    // Personnes à garantir
    personnesGaranties: [{ nom: '', dateNaissance: '', regimeObligatoire: '' }],

    // Besoins Santé (niveaux de garanties)
    soinsCourants: '',
    hospitalisation: '',
    dentaire: '',
    optique: '',
    prothesesHorsDentaire: '',
    confort: ''
  });

  const avantagesSante = [
    {
      id: 1,
      icon: Eye,
      title: "100% Santé",
      description: "Optique, dentaire, audiologie avec remboursements complets",
      gradient: "from-emerald-400 to-teal-400"
    },
    {
      id: 2,
      icon: Leaf,
      title: "Forfaits Bien-être",
      description: "Ostéopathie, médecines douces et thérapies alternatives",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      id: 3,
      icon: Bed,
      title: "Confort Hospitalier",
      description: "Chambre particulière et confort hospitalier",
      gradient: "from-amber-400 to-orange-400"
    },
    {
      id: 4,
      icon: FileText,
      title: "Remboursements Rapides",
      description: "Carte tiers payant et remboursements accélérés",
      gradient: "from-rose-400 to-pink-400"
    }
  ];

  const niveauxGaranties = [
    { value: '1', label: '+' },
    { value: '2', label: '++' },
    { value: '3', label: '+++' },
    { value: '4', label: '++++' },
    { value: '5', label: '+++++' }
  ];

  const garantiesLabels = [
    { key: 'soinsCourants', label: 'Soins courants (consultations, analyses…)' },
    { key: 'hospitalisation', label: 'Hospitalisation (séjours, honoraires…)' },
    { key: 'dentaire', label: 'Dentaire, orthodontie, prothèses' },
    { key: 'optique', label: 'Optique (lunettes, lentilles…)' },
    { key: 'prothesesHorsDentaire', label: 'Prothèses hors dentaire' },
    { key: 'confort', label: 'Confort (médecine douce, cures…)' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePersonneGarantieChange = (index: number, field: string, value: string) => {
    const nouvellesPersonnes = [...formData.personnesGaranties];
    nouvellesPersonnes[index] = { ...nouvellesPersonnes[index], [field]: value };
    setFormData(prev => ({
      ...prev,
      personnesGaranties: nouvellesPersonnes
    }));
  };

  const addPersonneGarantie = () => {
    setFormData(prev => ({
      ...prev,
      personnesGaranties: [...prev.personnesGaranties, { nom: '', dateNaissance: '', regimeObligatoire: '' }]
    }));
  };

  const removePersonneGarantie = (index: number) => {
    setFormData(prev => ({
      ...prev,
      personnesGaranties: prev.personnesGaranties.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Votre demande de devis complémentaire santé a été envoyée ! Un conseiller vous contactera dans les plus brefs délais.');
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-blacksection to-black">
      {/* Decorative Background */}
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

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-25 xl:py-30">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-purple-400/20 to-transparent blur-3xl" />
        </div>

        <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto max-w-4xl text-center"
          >
            {/* Badge Premium */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-amber-500/10 px-6 py-3 ring-2 ring-primary/20 backdrop-blur-sm"
            >
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-sm font-bold text-primary">Complémentaire Santé TNS Premium</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6 text-5xl font-extrabold text-white xl:text-6xl"
            >
              Simulateur{" "}
              <span className="bg-gradient-to-r from-primary via-amber-500 to-primary bg-clip-text text-transparent">
                Complémentaire Santé
              </span>
              <br />
              <span className="text-4xl xl:text-5xl">pour TNS</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-manatee"
            >
              Formalisation du devoir de conseil et recueil de vos besoins.
              <br />
              <span className="font-semibold text-white">Obtenez votre devis personnalisé en quelques minutes ✨</span>
            </motion.p>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mx-auto mb-8 flex flex-wrap justify-center gap-4"
            >
              {[
                { icon: Shield, text: "100% Sécurisé", color: "from-blue-400 to-cyan-400" },
                { icon: Heart, text: "Sur-Mesure", color: "from-pink-400 to-rose-400" },
                { icon: Sparkles, text: "Gratuit", color: "from-amber-400 to-yellow-400" }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex min-w-[160px] flex-1 items-center gap-3 rounded-2xl bg-blacksection/90 p-4 shadow-xl backdrop-blur-sm ring-1 ring-white/10 max-w-[240px]"
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${benefit.color} shadow-lg`}>
                    <benefit.icon className="h-6 w-6 text-white" strokeWidth={2.5} />
                  </div>
                  <span className="font-bold text-white">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Avantages Premium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="relative mb-12 flex flex-wrap justify-center gap-6"
          >
            {avantagesSante.map((avantage, index) => (
              <motion.div
                key={avantage.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-[300px]"
              >
                <div className="relative h-full overflow-hidden rounded-3xl bg-blacksection/90 p-7 text-center shadow-xl ring-1 ring-white/10 backdrop-blur-sm transition-all hover:shadow-2xl">
                  {/* Hover Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`mx-auto mb-5 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${avantage.gradient} shadow-xl`}
                    >
                      <avantage.icon className="h-10 w-10 text-white" strokeWidth={2.5} />
                    </motion.div>

                    <h3 className="mb-3 text-lg font-bold text-white">
                      {avantage.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-manatee">
                      {avantage.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Assuré Principal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blacksection via-black to-black p-10 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl"
            >
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-pink-50/30 to-purple-50/20 dark:from-primary/10 dark:via-pink-900/10 dark:to-purple-900/10" />

              <div className="relative">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-amber-500 shadow-lg">
                    <Shield className="h-8 w-8 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      Assuré(e) Principal(e)
                    </h2>
                    <p className="text-sm text-manatee">
                      Vos informations personnelles
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Civilité */}
                  <div>
                    <label className="mb-3 block text-sm font-semibold text-white">
                      Civilité <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-3">
                      {['M.', 'Mme', 'Mlle'].map(civ => (
                        <label
                          key={civ}
                          className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border-2 px-6 py-3 transition-all ${formData.civilite === civ
                            ? 'border-primary bg-gradient-to-r from-primary/10 to-amber-500/10 shadow-md'
                            : 'border-white/10 bg-black hover:border-primary/50'
                            }`}
                        >
                          <input
                            type="radio"
                            name="civilite"
                            value={civ}
                            checked={formData.civilite === civ}
                            onChange={handleInputChange}
                            required
                            className="sr-only"
                          />
                          <span className={`font-semibold ${formData.civilite === civ ? 'text-primary' : 'text-white'
                            }`}>
                            {civ}
                          </span>
                          {formData.civilite === civ && (
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                          )}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Nom et Prénom */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="nom" className="mb-3 block text-sm font-semibold text-white">
                        Nom <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleInputChange}
                        required
                        placeholder="Votre nom"
                        className="w-full rounded-xl border-2 border-white/10 bg-black px-5 py-4 text-white transition-all placeholder:text-manatee/50 hover:border-primary/30 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                      />
                    </div>
                    <div>
                      <label htmlFor="prenom" className="mb-3 block text-sm font-semibold text-white">
                        Prénom <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleInputChange}
                        required
                        placeholder="Votre prénom"
                        className="w-full rounded-xl border-2 border-white/10 bg-black px-5 py-4 text-white transition-all placeholder:text-manatee/50 hover:border-primary/30 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                      />
                    </div>
                  </div>

                  {/* Adresse */}
                  <div>
                    <label htmlFor="adresse" className="mb-3 block text-sm font-semibold text-white">
                      Adresse <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="adresse"
                      name="adresse"
                      value={formData.adresse}
                      onChange={handleInputChange}
                      required
                      placeholder="Numéro et nom de rue"
                      className="w-full rounded-xl border-2 border-white/10 bg-black px-5 py-4 text-white transition-all placeholder:text-manatee/50 hover:border-primary/30 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                    />
                  </div>

                  {/* Code Postal et Ville */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div>
                      <label htmlFor="codePostal" className="mb-3 block text-sm font-semibold text-white">
                        Code Postal <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="codePostal"
                        name="codePostal"
                        value={formData.codePostal}
                        onChange={handleInputChange}
                        required
                        placeholder="75001"
                        className="w-full rounded-xl border-2 border-white/10 bg-black px-5 py-4 text-white transition-all placeholder:text-manatee/50 hover:border-primary/30 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="ville" className="mb-3 block text-sm font-semibold text-white">
                        Ville <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="ville"
                        name="ville"
                        value={formData.ville}
                        onChange={handleInputChange}
                        required
                        placeholder="Votre ville"
                        className="w-full rounded-xl border-2 border-white/10 bg-black px-5 py-4 text-white transition-all placeholder:text-manatee/50 hover:border-primary/30 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                      />
                    </div>
                  </div>

                  {/* Date et Ville de Naissance */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="dateNaissance" className="mb-3 block text-sm font-semibold text-white">
                        Date de Naissance <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        id="dateNaissance"
                        name="dateNaissance"
                        value={formData.dateNaissance}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-xl border-2 border-white/10 bg-black px-5 py-4 text-white transition-all hover:border-primary/30 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                      />
                    </div>
                    <div>
                      <label htmlFor="villeNaissance" className="mb-3 block text-sm font-semibold text-white">
                        Ville de Naissance <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="villeNaissance"
                        name="villeNaissance"
                        value={formData.villeNaissance}
                        onChange={handleInputChange}
                        required
                        placeholder="Ville de naissance"
                        className="w-full rounded-xl border-2 border-white/10 bg-black px-5 py-4 text-white transition-all placeholder:text-manatee/50 hover:border-primary/30 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                      />
                    </div>
                  </div>

                  {/* Téléphones */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="telDomicile" className="mb-3 block text-sm font-semibold text-white">
                        <Phone className="mb-1 inline h-4 w-4" /> Tél Domicile
                      </label>
                      <input
                        type="tel"
                        id="telDomicile"
                        name="telDomicile"
                        value={formData.telDomicile}
                        onChange={handleInputChange}
                        placeholder="06 37 76 41 90"
                        className="w-full rounded-xl border-2 border-white/10 bg-black px-5 py-4 text-white transition-all placeholder:text-manatee/50 hover:border-primary/30 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                      />
                    </div>
                    <div>
                      <label htmlFor="telPortable" className="mb-3 block text-sm font-semibold text-white">
                        <Phone className="mb-1 inline h-4 w-4" /> Tél Portable <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="telPortable"
                        name="telPortable"
                        value={formData.telPortable}
                        onChange={handleInputChange}
                        required
                        placeholder="06 12 34 56 78"
                        className="w-full rounded-xl border-2 border-white/10 bg-black px-5 py-4 text-white transition-all placeholder:text-manatee/50 hover:border-primary/30 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="mb-3 block text-sm font-semibold text-white">
                      <Mail className="mb-1 inline h-4 w-4" /> Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="votre.email@example.com"
                      className="w-full rounded-xl border-2 border-white/10 bg-black px-5 py-4 text-white transition-all placeholder:text-manatee/50 hover:border-primary/30 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                    />
                  </div>

                  {/* Situation Familiale */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div>
                      <label htmlFor="situationFamiliale" className="mb-3 block text-sm font-semibold text-white">
                        Situation familiale <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="situationFamiliale"
                        name="situationFamiliale"
                        value={formData.situationFamiliale}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-xl border-2 border-white/10 bg-black px-5 py-4 text-white transition-all hover:border-primary/30 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                      >
                        <option value="" className="bg-black text-white">Sélectionner</option>
                        <option value="celibataire" className="bg-black text-white">Célibataire</option>
                        <option value="concubin" className="bg-black text-white">Concubin(e)</option>
                        <option value="marie" className="bg-black text-white">Marié(e)</option>
                        <option value="pacs" className="bg-black text-white">Pacs</option>
                        <option value="divorce" className="bg-black text-white">Divorcé(e)</option>
                        <option value="veuf" className="bg-black text-white">Veuf(ve)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="nombreEnfants" className="mb-3 block text-sm font-semibold text-white">
                        Nombre d'enfant(s)
                      </label>
                      <input
                        type="number"
                        id="nombreEnfants"
                        name="nombreEnfants"
                        value={formData.nombreEnfants}
                        onChange={handleInputChange}
                        min="0"
                        placeholder="0"
                        className="w-full rounded-xl border-2 border-white/10 bg-black px-5 py-4 text-white transition-all placeholder:text-manatee/50 hover:border-primary/30 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                      />
                    </div>
                    <div>
                      <label htmlFor="enfantsACharge" className="mb-3 block text-sm font-semibold text-white">
                        Dont à charge
                      </label>
                      <input
                        type="number"
                        id="enfantsACharge"
                        name="enfantsACharge"
                        value={formData.enfantsACharge}
                        onChange={handleInputChange}
                        min="0"
                        placeholder="0"
                        className="w-full rounded-xl border-2 border-white/10 bg-black px-5 py-4 text-white transition-all placeholder:text-manatee/50 hover:border-primary/30 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Situation Professionnelle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blacksection via-black to-black p-10 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl"
            >
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 dark:via-cyan-900/5 to-transparent" />

              <div className="relative">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 shadow-lg">
                    <Briefcase className="h-8 w-8 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      Situation Professionnelle
                    </h2>
                    <p className="text-sm text-manatee">
                      Votre activité professionnelle
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="situationProfessionnelle" className="mb-3 block text-sm font-semibold text-white">
                        Votre Situation <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="situationProfessionnelle"
                        name="situationProfessionnelle"
                        value={formData.situationProfessionnelle}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-xl border-2 border-white/10 bg-black px-5 py-4 text-white transition-all hover:border-primary/30 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                      >
                        <option value="" className="bg-black text-white">Sélectionner</option>
                        <option value="salarie" className="bg-black text-white">Salarié(e)</option>
                        <option value="tns" className="bg-black text-white">Travailleur non salarié(e)</option>
                        <option value="retraite" className="bg-black text-white">Retraité(e)</option>
                        <option value="sans-activite" className="bg-black text-white">Sans activité</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="profession" className="mb-3 block text-sm font-semibold text-white">
                        Profession <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="profession"
                        name="profession"
                        value={formData.profession}
                        onChange={handleInputChange}
                        required
                        placeholder="Votre profession"
                        className="w-full rounded-xl border-2 border-white/10 bg-black px-5 py-4 text-white transition-all placeholder:text-manatee/50 hover:border-primary/30 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Besoins Santé */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl bg-blacksection p-10 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl"
            >
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-teal-50/20 to-transparent dark:from-emerald-900/10 dark:via-teal-900/5" />

              <div className="relative">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-400 shadow-lg">
                    <Heart className="h-8 w-8 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      Votre Besoin Santé
                    </h2>
                    <p className="text-sm text-manatee">
                      Choisissez vos niveaux de garanties
                    </p>
                  </div>
                </div>

                {/* Info Card */}
                <div className="mb-8 rounded-2xl bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-6">
                  <div className="flex items-start gap-3">
                    <Sparkles className="mt-1 h-6 w-6 flex-shrink-0 text-blue-500" />
                    <div>
                      <p className="font-semibold text-white">
                        Comment choisir vos garanties ?
                      </p>
                      <p className="mt-1 text-sm text-manatee">
                        Sélectionnez le niveau de remboursement souhaité pour chaque type de soin.
                        Plus le niveau est élevé, meilleure est la couverture.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  {garantiesLabels.map((garantie, index) => (
                    <motion.div
                      key={garantie.key}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="rounded-2xl bg-black px-6 py-6 ring-1 ring-white/10 backdrop-blur-sm shadow-sm"
                    >
                      <label className="mb-4 block text-base font-bold text-white">
                        {garantie.label}
                      </label>
                      <div className="grid grid-cols-5 gap-3">
                        {niveauxGaranties.map((niveau) => (
                          <motion.button
                            key={niveau.value}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, [garantie.key]: niveau.value }))}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className={`relative overflow-hidden rounded-xl border-2 px-4 py-5 font-bold transition-all ${formData[garantie.key as keyof typeof formData] === niveau.value
                              ? 'border-primary bg-gradient-to-br from-primary via-amber-500 to-primary text-white shadow-lg'
                              : 'border-white/10 bg-black text-white hover:border-primary/50 hover:shadow-md'
                              }`}
                          >
                            {formData[garantie.key as keyof typeof formData] === niveau.value && (
                              <motion.div
                                layoutId={`selected-${garantie.key}`}
                                className="absolute -right-1 -top-1"
                              >
                                <div className="rounded-full bg-white p-1 shadow-lg">
                                  <CheckCircle2 className="h-4 w-4 text-primary" />
                                </div>
                              </motion.div>
                            )}
                            <span className="block text-center text-lg">{niveau.label}</span>
                            <span className="mt-1 block text-center text-xs opacity-70">
                              Niveau {niveau.value}
                            </span>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                className="mx-auto max-w-2xl overflow-hidden rounded-3xl bg-gradient-to-br from-blacksection via-black to-black p-10 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-pink-50/30 to-purple-50/20 dark:from-primary/10 dark:via-pink-900/10 dark:to-purple-900/10" />

                <div className="relative">
                  <Sparkles className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    Recevez votre devis personnalisé
                  </h3>
                  <p className="mb-6 text-manatee">
                    Un conseiller vous contactera dans les 24h pour finaliser votre devis
                  </p>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary via-amber-500 to-primary bg-size-200 px-12 py-5 text-lg font-bold text-white shadow-xl transition-all hover:shadow-2xl"
                  >
                    <Send className="h-6 w-6" />
                    <span>Envoyer Ma Demande</span>
                  </motion.button>

                  <p className="mt-6 text-xs text-manatee">
                    🔒 Vos données sont sécurisées et confidentielles
                    <br />
                    En application des Articles L 520-1 et R 520-2 du Code des Assurances
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </form>
        </div>
      </section>
    </main>
  );
}
