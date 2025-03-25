"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CoupleProfile() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black/90 to-black relative overflow-hidden">
      {/* Aurora effect in background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="aurora">
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
        </div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl text-white font-serif mb-4">Our Love Story</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            From our first meeting beneath the starry sky to our engagement under the northern lights,
            our journey has been nothing short of magical.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Couple Images */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="relative h-64 md:h-80">
              <Image
                src="/images/couple/portrait1.jpg"
                alt="John"
                fill
                className="object-cover rounded-tl-3xl rounded-br-3xl border-4 border-white/10 transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 md:h-80 mt-8">
              <Image
                src="/images/couple/portrait2.jpg"
                alt="Sarah"
                fill
                className="object-cover rounded-tr-3xl rounded-bl-3xl border-4 border-white/10 transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Love Story */}
          <motion.div
            className="text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-serif mb-6 text-emerald-300">
              John &amp; Sarah
            </h3>
            <p className="mb-6 text-white/80">
              Our story began five years ago during a stargazing event in Colorado.
              Fate brought us together under the night sky, and we've been inseparable ever since.
              We've shared countless adventures together, from hiking through national parks to
              traveling across continents.
            </p>
            <p className="mb-8 text-white/80">
              Last winter, during a trip to Iceland to see the northern lights, John proposed at the perfect
              moment when the sky illuminated with dancing greens and purples. It was the most magical moment
              of our lives, which is why we've chosen an aurora-themed wedding to celebrate our love.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-emerald-400 text-emerald-400 hover:bg-emerald-400/10"
            >
              <Link href="/about">
                Read Our Full Story
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
