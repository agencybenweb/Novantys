"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, Quote, User, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Service exceptionnel ! L'équipe a su comprendre mes besoins et m'a proposé une solution parfaitement adaptée. Un accompagnement premium du début à la fin.",
      name: "Marie Dubois",
      profession: "Propriétaire d'entreprise",
      rating: 5,
      image: "/assets/images/testimonial-1.jpg",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      id: 2,
      text: "Un accompagnement personnalisé et des conseils précieux. Grâce à eux, j'ai pu protéger efficacement ma famille et mes biens. Une expertise remarquable.",
      name: "Jean Martin",
      profession: "Ingénieur",
      rating: 5,
      image: "/assets/images/testimonial-2.jpg",
      gradient: "from-primary to-amber-400"
    },
    {
      id: 3,
      text: "Règlement de sinistre rapide et professionnel. L'équipe a été à mes côtés tout au long du processus. Une compagnie de confiance que je recommande vivement.",
      name: "Sophie Laurent",
      profession: "Médecin",
      rating: 5,
      image: "/assets/images/testimonial-3.jpg",
      gradient: "from-pink-400 to-rose-400"
    },
    {
      id: 4,
      text: "Transparence, réactivité et professionnalisme. J'ai trouvé la meilleure assurance pour mon activité grâce à leur expertise. Un service qui fait vraiment la différence.",
      name: "Thomas Petit",
      profession: "Entrepreneur",
      rating: 5,
      image: "/assets/images/testimonial-1.jpg",
      gradient: "from-emerald-400 to-teal-400"
    }
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    })
  };

  return (
    <section className="relative overflow-hidden bg-beigeluxe transition-colors duration-300 pt-20 pb-32 dark:bg-black lg:pt-25 lg:pb-40 xl:pt-30 xl:pb-48">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-1">
        <motion.div
          className="absolute left-1/3 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/10 via-amber-200/5 to-transparent blur-3xl opacity-50"
          animate={{
            y: [0, 50, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* Section Title */}
        <div className="animate_top mx-auto mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/20 via-amber-500/10 to-primary/20 px-4 py-2 backdrop-blur-sm ring-1 ring-beigeborder dark:ring-white/10"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Témoignages Clients</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mx-auto mb-4 text-3xl font-bold text-beigetext dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3"
          >
            Ils Nous Font{" "}
            <span className="bg-gradient-to-r from-primary via-amber-500 to-primary bg-clip-text text-transparent">
              Confiance
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto text-lg text-beigetextlight dark:text-manatee md:w-3/5"
          >
            Découvrez les expériences de nos clients satisfaits
          </motion.p>
        </div>

        {/* Premium Testimonials Carousel */}
        <div className="relative mx-auto max-w-4xl">
          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 z-10 -translate-x-4 -translate-y-1/2 md:-translate-x-16">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 shadow-lg ring-1 ring-beigeborder backdrop-blur-sm transition-all hover:bg-white dark:bg-blacksection/80 dark:ring-white/10 dark:hover:bg-blacksection"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </motion.button>
          </div>

          <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 md:translate-x-16">
            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 shadow-lg ring-1 ring-beigeborder backdrop-blur-sm transition-all hover:bg-white dark:bg-blacksection/80 dark:ring-white/10 dark:hover:bg-blacksection"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </motion.button>
          </div>

          {/* Testimonial Card */}
          <div className="relative min-h-[450px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentTestimonial}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 }
                }}
                className="absolute inset-0"
              >
                <div className="relative overflow-hidden rounded-3xl bg-white/80 p-10 shadow-2xl ring-1 ring-beigeborder backdrop-blur-xl dark:bg-blacksection/80 dark:ring-white/10 md:p-16">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[currentTestimonial].gradient} opacity-[0.03]`} />

                  {/* Quote Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative mb-8"
                  >
                    <Quote className="h-16 w-16 text-primary/20" fill="currentColor" />
                  </motion.div>

                  {/* Stars Rating */}
                  <div className="relative mb-6 flex justify-center gap-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                      >
                        <Star className="h-6 w-6 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="relative mb-10 text-center text-lg leading-relaxed text-beigetext dark:text-white md:text-xl"
                  >
                    "{testimonials[currentTestimonial].text}"
                  </motion.p>

                  {/* Author Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="relative flex flex-col items-center"
                  >
                    {/* Avatar with Image */}
                    <div className={`relative mb-4 h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br ${testimonials[currentTestimonial].gradient} p-1 shadow-xl ring-4 ring-black/50`}>
                      <div className="relative h-full w-full overflow-hidden rounded-full bg-beigeluxe dark:bg-blacksection">
                        <Image
                          src={testimonials[currentTestimonial].image}
                          alt={testimonials[currentTestimonial].name}
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                      </div>
                    </div>

                    {/* Name & Profession */}
                    <h5 className="mb-2 text-xl font-bold text-beigetext dark:text-white">
                      {testimonials[currentTestimonial].name}
                    </h5>
                    <p className="text-sm font-medium text-beigetextlight dark:text-manatee">
                      {testimonials[currentTestimonial].profession}
                    </p>
                  </motion.div>

                  {/* Decorative Elements */}
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl opacity-50" />
                  <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-gradient-to-tl from-amber-100/20 to-transparent blur-3xl opacity-50" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="mt-10 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentTestimonial ? 1 : -1);
                  setCurrentTestimonial(index);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-3 rounded-full transition-all ${index === currentTestimonial
                  ? "w-12 bg-gradient-to-r from-primary to-amber-500"
                  : "w-3 bg-beigeborder dark:bg-white/10 hover:bg-primary/50"
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
