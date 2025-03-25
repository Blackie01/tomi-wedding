"use client";

import RsvpForm from "@/components/forms/RsvpForm";
import AuroraBackground from "@/components/common/AuroraBackground";
import { motion } from "framer-motion";

export default function RsvpPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="relative min-h-screen pt-24 pb-16 flex flex-col items-center justify-center">
      {/* Background */}
      <AuroraBackground opacity={0.6} />

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="text-center mb-12 text-white">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">RSVP</h1>
            <p className="text-lg text-white/80 max-w-xl mx-auto">
              Please let us know if you'll be joining us on our special day.
              We kindly request your response by July 1st, 2025.
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-md p-6 md:p-8 rounded-lg border border-white/10">
            <RsvpForm />
          </div>

          <div className="text-center mt-12 text-white/70 text-sm">
            <p>If you have any questions, please contact us at</p>
            <a
              href="mailto:couple@wedding.com"
              className="text-emerald-400 hover:underline"
            >
              couple@wedding.com
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
