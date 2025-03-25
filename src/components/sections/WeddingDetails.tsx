"use client";

import Image from "next/image";
import CountdownTimer from "@/components/common/CountdownTimer";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function WeddingDetails() {
  // Wedding date - August 12, 2025
  const weddingDate = new Date("2025-08-12T18:00:00");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-gradient-to-b from-black via-black/95 to-black/90 text-white py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Join Us On Our Special Day</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            We are excited to celebrate our love with our friends and family under the
            breathtaking northern lights in Fairbanks, Alaska.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <CountdownTimer
            targetDate={weddingDate}
            className="mb-16"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Date */}
          <motion.div
            className="bg-black/50 backdrop-blur-sm p-6 border border-white/10 flex flex-col items-center text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="w-16 h-16 bg-emerald-900/30 rounded-full flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-xl font-medium mb-2">The Date</h3>
            <p className="text-white/70">August 12th, 2025</p>
            <p className="text-white/70 mt-1">Tuesday</p>
          </motion.div>

          {/* Time */}
          <motion.div
            className="bg-black/50 backdrop-blur-sm p-6 border border-white/10 flex flex-col items-center text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-medium mb-2">The Time</h3>
            <p className="text-white/70">6:00 PM</p>
            <p className="text-white/70 mt-1">Ceremony</p>
            <p className="text-white/70 mt-3">7:30 PM</p>
            <p className="text-white/70 mt-1">Reception</p>
          </motion.div>

          {/* Location */}
          <motion.div
            className="bg-black/50 backdrop-blur-sm p-6 border border-white/10 flex flex-col items-center text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-medium mb-2">The Venue</h3>
            <p className="text-white/70">Aurora View Lodge</p>
            <p className="text-white/70 mt-1">123 Northern Lights Blvd</p>
            <p className="text-white/70">Fairbanks, Alaska</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
