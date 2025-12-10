"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Merci pour votre demande ! Nous vous contacterons dans les plus brefs délais.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      message: "",
    });
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
        <div className="flex flex-col gap-7.5 lg:flex-row xl:gap-12.5">
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
            className="animate_left w-full lg:w-1/2"
          >
            <h1 className="mb-5 text-3xl font-bold text-black dark:text-white xl:text-hero">
              Contactez-Nous
            </h1>

            <p className="mb-4 text-xl text-waterloo dark:text-manatee">
              Envie de faire le point sur votre situation ?
            </p>

            <p className="mb-7.5 text-base text-waterloo dark:text-manatee">
              Prenez rendez-vous dès aujourd'hui pour un accompagnement personnalisé et gratuit.
            </p>

            {/* Quick Contact Card */}
            <div className="mb-7.5 rounded-lg border border-stroke bg-primary/5 p-7.5 dark:border-strokedark dark:bg-primary/10">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <i className="fas fa-user-tie text-2xl text-white"></i>
                </div>
                <div>
                  <h5 className="mb-1 text-lg font-semibold text-black dark:text-white">
                    Notre Conseiller
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
                    icon: "fas fa-map-marker-alt",
                    text: "31 rue Bistanclaque, 38110 Cessieu",
                  },
                  {
                    icon: "fas fa-envelope",
                    text: "contact@novantys-solutions.fr",
                  },
                  {
                    icon: "fas fa-clock",
                    text: "Lun - Ven : 9h00 - 18h00",
                  },
                  {
                    icon: "fas fa-phone",
                    text: "Urgences : 24h/24",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                      <i className={`${item.icon} text-white`}></i>
                    </div>
                    <span className="text-base text-waterloo dark:text-manatee">
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
            className="animate_right w-full lg:w-1/2"
          >
            <div className="rounded-lg border border-stroke bg-white p-7.5 shadow-solid-3 dark:border-strokedark dark:bg-blacksection xl:p-12.5">
              <h3 className="mb-7.5 text-2xl font-semibold text-black dark:text-white xl:text-itemtitle">
                Prenez Rendez-Vous
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-7.5 flex flex-col gap-7.5">
                  <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
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
                        className="w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
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
                        className="w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
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
                        className="w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="serviceType"
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                      >
                        Type de Service
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      >
                        <option value="">Choisissez un service</option>
                        {serviceTypes.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
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
                      required
                      className="w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho"
                  >
                    <i className="fas fa-paper-plane mr-2"></i>
                    Prendre Rendez-Vous
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

