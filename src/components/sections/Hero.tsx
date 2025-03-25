"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Staggered animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden pt-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-[-2]">
        <Image
          src="/images/aurora1.jpg"
          alt="Northern Lights Wedding Background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <motion.div
        className="container mx-auto text-center px-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="mb-4 text-sm md:text-base tracking-widest uppercase">
          We're getting married
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-light mb-4 tracking-wider"
        >
          John & Sarah
        </motion.h1>

        <motion.div
          variants={item}
          className="text-xl md:text-3xl font-serif italic mb-8"
        >
          August 12, 2025 • Fairbanks, Alaska
        </motion.div>

        <motion.div variants={item}>
          <Button
            asChild
            size="lg"
            className="bg-transparent hover:bg-white/10 border-2 border-white rounded-none px-8 text-lg font-light tracking-wider"
          >
            <Link href="/rsvp">
              RSVP
            </Link>
          </Button>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
          variants={item}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
