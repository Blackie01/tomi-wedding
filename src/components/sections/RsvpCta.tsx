"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function RsvpCta() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/images/aurora3.jpg"
          alt="Northern Lights"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/50" />
      </div>

      {/* Content */}
      <div className="container px-4 mx-auto">
        <motion.div
          className="max-w-2xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Join Our Celebration Under the Aurora
          </h2>

          <p className="text-lg text-white/80 mb-8">
            We can't wait to celebrate our special day with you. Please RSVP by July 1st, 2025.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-none px-8 py-6 text-lg"
            >
              <Link href="/rsvp">
                RSVP Now
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 rounded-none px-8 py-6 text-lg"
            >
              <Link href="/location">
                View Location
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
