"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";
import { UserCheck, MapPin, Mail, Clock, Phone, Send, Sparkles } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler un envoi si pas d'API configurée (fallback)
    // Mais on a configuré l'API, alors let's go.

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          type: formData.serviceType,
          subject: `Nouvelle demande pour ${formData.serviceType || 'Renseignements'}`,
          message: formData.message
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Message envoyé avec succès ! Nous vous recontacterons rapidement.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceType: "",
          message: "",
        });
      } else {
        console.error(data.error);
        toast.error(data.error || "Une erreur est survenue lors de l'envoi.");
      }
    } catch (error) {
      console.error("Erreur client:", error);
      toast.error("Impossible d'envoyer le message. Vérifiez votre connexion.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceTypes = [
    "Plan Épargne Retraite",
    "Assurance de Prêt",
    "Complémentaire Santé",
    "Assurance & Prévoyance TNS",
    "RC Professionnelle",
    "Crédit Immobilier",
  ];

  return (
    <main className="pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col items-center gap-7.5 lg:flex-row xl:gap-25">
          {/* Left Side - Contact Info */}
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
            className="animate_left w-full lg:w-[calc(50%-50px)]"
          >
            <h1 className="mb-5 text-3xl font-bold text-beigetext dark:text-white xl:text-hero">
              Contactez-Nous
            </h1>

            <p className="mb-4 text-xl text-beigetextlight dark:text-manatee">
              Envie de faire le point sur votre situation ?
            </p>

            <p className="mb-7.5 text-base text-beigetextlight dark:text-manatee">
              Prenez rendez-vous dès aujourd'hui pour un accompagnement personnalisé et gratuit.
            </p>

            {/* Quick Contact Card */}
            <div className="mb-7.5 rounded-2xl border border-beigeborder bg-white p-7.5 shadow-solid-7 ring-1 ring-beigeborder dark:bg-blacksection dark:border-white/10 dark:ring-white/10">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-amber-500 shadow-lg">
                  <UserCheck className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h5 className="mb-1 text-lg font-semibold text-beigetext dark:text-white">
                    Votre Courtière
                  </h5>
                  <p className="text-base font-bold text-primary">
                    +33 6 37 76 41 90
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <h5 className="mb-5 text-xl font-semibold text-primary">
                Nos Coordonnées :
              </h5>

              <div className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    text: "31 rue Bistanclaque, 38110 Cessieu",
                  },
                  {
                    icon: Mail,
                    text: "contact@novantys-solutions.fr",
                  },
                  {
                    icon: Clock,
                    text: "Lun - Ven : 9h00 - 18h00", // Fixed time format for clarity
                  },
                  {
                    icon: Phone,
                    text: "Urgences : 24h/24",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-beigeborder dark:ring-white/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-base text-beigetextlight dark:text-manatee">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
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
            <div className="rounded-lg border border-primary/20 bg-beigesection p-7.5 shadow-solid-3 dark:bg-blacksection xl:p-12.5">
              <h3 className="mb-7.5 text-2xl font-semibold text-beigetext dark:text-white xl:text-itemtitle">
                Prenez Rendez-Vous
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-7.5 flex flex-col gap-7.5">
                  <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-beigetext dark:text-white"
                      >
                        Votre Nom
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Entrez votre nom"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-primary/20 bg-transparent px-5 py-3 text-beigetext dark:text-white outline-none transition focus:border-primary active:border-primary disabled:cursor-default"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-beigetext dark:text-white"
                      >
                        Votre Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Entrez votre email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-primary/20 bg-transparent px-5 py-3 text-beigetext dark:text-white outline-none transition focus:border-primary active:border-primary disabled:cursor-default"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-sm font-medium text-beigetext dark:text-white"
                      >
                        Votre Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Entrez votre téléphone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-primary/20 bg-transparent px-5 py-3 text-beigetext dark:text-white outline-none transition focus:border-primary active:border-primary disabled:cursor-default"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="serviceType"
                        className="mb-3 block text-sm font-medium text-beigetext dark:text-white"
                      >
                        Type de Service
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-primary/20 bg-transparent px-5 py-3 text-beigetext dark:text-white outline-none transition focus:border-primary active:border-primary disabled:cursor-default"
                      >
                        <option value="" className="bg-white text-beigetext dark:bg-blacksection dark:text-white">Choisissez un service</option>
                        {serviceTypes.map((service, index) => (
                          <option key={index} value={service} className="bg-white text-beigetext dark:bg-blacksection dark:text-white">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-3 block text-sm font-medium text-beigetext dark:text-white"
                    >
                      Votre Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Décrivez vos besoins..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-primary/20 bg-transparent px-5 py-3 text-beigetext dark:text-white outline-none transition focus:border-primary active:border-primary disabled:cursor-default"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center gap-2 rounded-full gradient-primary px-7.5 py-4 text-regular font-bold text-black shadow-lg transition-all hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Prendre Rendez-Vous
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
