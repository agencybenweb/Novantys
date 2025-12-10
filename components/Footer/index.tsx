"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Twitter, Heart } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="relative overflow-hidden border-t border-stroke bg-gradient-to-b from-white to-alabaster dark:border-strokedark dark:from-blacksection dark:to-black">
        {/* Decorative Background */}
        <div className="absolute inset-0 -z-1">
          <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-primary/5 to-transparent" />
          <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-purple-100/10 to-transparent dark:from-purple-900/10" />
        </div>

        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* Footer Top */}
          <div className="py-20 lg:py-25">
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top w-full lg:w-1/3"
              >
                <Link href="/" className="relative">
                  <motion.div 
                    className="mb-6 flex items-center gap-3"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex h-14 w-auto items-center">
                      <Image
                        src="/assets/images/logo-dor-removebg-preview.png"
                        alt="Novantys Solutions"
                        width={180}
                        height={56}
                        className="h-12 w-auto dark:hidden"
                        priority
                      />
                      <Image
                        src="/assets/images/logo-noir-removebg-preview.png"
                        alt="Novantys Solutions"
                        width={180}
                        height={56}
                        className="hidden h-12 w-auto dark:block"
                        priority
                      />
                    </div>
                  </motion.div>
                </Link>

                <p className="mb-8 text-base leading-relaxed text-waterloo dark:text-manatee">
                  Votre partenaire de confiance en assurance et financement. 
                  Un accompagnement premium, humain et expert pour tous vos projets de vie.
                </p>

                {/* Contact Info */}
                <div className="space-y-4">
                  <motion.a
                    href="mailto:contact@novantys-solutions.fr"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-black transition-colors hover:text-primary dark:text-white"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium">contact@novantys-solutions.fr</span>
                  </motion.a>

                  <motion.a
                    href="tel:+33637764190"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-black transition-colors hover:text-primary dark:text-white"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium">06 37 76 41 90</span>
                  </motion.a>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-black dark:text-white"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium">31 rue Bistanclaque, 38110 Cessieu</span>
                  </motion.div>
                </div>
              </motion.div>

              <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between md:gap-0 lg:w-2/3 xl:w-7/12">
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Particuliers
                  </h4>

                  <ul>
                    <li>
                      <Link
                        href="/simulateur-per"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Plan Épargne Retraite
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/assurance-pret"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Assurance de Prêt
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/complementaire-sante"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Complémentaire Santé
                      </Link>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Professionnels
                  </h4>

                  <ul>
                    <li>
                      <Link
                        href="/travailleurs-non-salaries"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Assurance & Prévoyance TNS
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/rc-pro"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        RC Professionnelle
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/partenaire-empruntis"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Partenaire EMPRUNTIS
                      </Link>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Informations
                  </h4>

                  <ul>
                    <li>
                      <Link
                        href="/about"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Qui Sommes Nous
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/mentions-legales"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Mentions Légales
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/politique-confidentialite"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Politique de Confidentialité
                      </Link>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
          {/* Footer Top */}

          {/* Footer Bottom */}
          <div className="border-t border-stroke py-8 dark:border-strokedark">
            <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top flex items-center gap-2 text-waterloo dark:text-manatee"
              >
                <p>
                  &copy; {new Date().getFullYear()} Novantys Solutions. Fait avec
                </p>
                <Heart className="h-4 w-4 fill-primary text-primary" />
                <p>à Cessieu</p>
              </motion.div>

              {/* Social Media */}
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="animate_top"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-waterloo dark:text-manatee">
                    Suivez-nous :
                  </span>
                  <div className="flex gap-3">
                    {[
                      { icon: Facebook, href: "#", label: "Facebook" },
                      { icon: Linkedin, href: "#", label: "LinkedIn" },
                      { icon: Instagram, href: "#", label: "Instagram" },
                      { icon: Twitter, href: "#", label: "Twitter" },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-amber-100/20 transition-all hover:from-primary hover:to-amber-500 hover:text-white dark:from-primary/20 dark:to-amber-900/20"
                      >
                        <social.icon className="h-5 w-5 text-primary transition-colors group-hover:text-white" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Legal Links */}
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="animate_top flex gap-6 text-sm"
              >
                <Link
                  href="/mentions-legales"
                  className="text-waterloo transition-colors hover:text-primary dark:text-manatee"
                >
                  Mentions Légales
                </Link>
                <Link
                  href="/politique-confidentialite"
                  className="text-waterloo transition-colors hover:text-primary dark:text-manatee"
                >
                  Confidentialité
                </Link>
                <Link
                  href="/cgv"
                  className="text-waterloo transition-colors hover:text-primary dark:text-manatee"
                >
                  CGV
                </Link>
              </motion.div>
            </div>
          </div>
          {/* Footer Bottom */}
        </div>
      </footer>
    </>
  );
};

export default Footer;

