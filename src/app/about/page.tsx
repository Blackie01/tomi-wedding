"use client";

import Image from "next/image";
import AuroraBackground from "@/components/common/AuroraBackground";
import { motion } from "framer-motion";

const timelineEvents = [
  {
    year: "2020",
    month: "June",
    title: "First Meeting",
    description: "We met during a stargazing event in Colorado. John was volunteering as an astronomy guide, and Sarah was there to photograph the night sky. We ended up talking all night about constellations and cosmic wonders.",
    image: "/images/aurora1.jpg",
  },
  {
    year: "2020",
    month: "October",
    title: "First Date",
    description: "After months of texting and calls, we finally had our first official date at a planetarium, followed by dinner at a rooftop restaurant under the stars. It was magical and we knew there was something special between us.",
    image: "/images/aurora2.jpg",
  },
  {
    year: "2021",
    month: "July",
    title: "Moved In Together",
    description: "After a year of dating, we decided to take the next step and move in together. We found a cozy apartment with a balcony perfect for stargazing on clear nights.",
    image: "/images/aurora3.jpg",
  },
  {
    year: "2023",
    month: "February",
    title: "Trip to Iceland",
    description: "We took a winter trip to Iceland, which had been on our bucket list since we met. We were hoping to see the northern lights, but had no idea how significant this trip would become.",
    image: "/images/aurora2.jpg",
  },
  {
    year: "2023",
    month: "February",
    title: "The Proposal",
    description: "On our third night in Iceland, we were blessed with a spectacular aurora display. As the green and purple lights danced across the sky, John got down on one knee and proposed. Sarah said yes immediately, with tears of joy freezing in the cold air.",
    image: "/images/couple/portrait1.jpg",
  },
  {
    year: "2025",
    month: "August",
    title: "Our Wedding",
    description: "We chose to get married under the northern lights in Alaska, bringing our journey full circle. We can't wait to celebrate with our loved ones in a place that symbolizes the cosmic magic that brought us together.",
    image: "/images/couple/portrait2.jpg",
  }
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen pt-24 pb-16">
      {/* Background */}
      <AuroraBackground opacity={0.6} heightClass="h-full" />

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Story</h1>
            <p className="text-lg text-white/80 max-w-xl mx-auto">
              From stargazing strangers to soulmates under the aurora,
              here's how our love story unfolded.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white/20" />

            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                className={`relative mb-16 last:mb-0 grid grid-cols-1 md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? "md:text-left" : "md:text-right"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Circle on timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-500 z-10" />

                {/* Date chip */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-10">
                  <span className="bg-emerald-500 text-white text-xs px-3 py-1 rounded-full">
                    {event.month} {event.year}
                  </span>
                </div>

                {/* Content and image with order based on index */}
                <>
                  {index % 2 === 0 ? (
                    <>
                      <div className="md:pr-12">
                        <h3 className="text-2xl font-serif mb-2">{event.title}</h3>
                        <p className="text-white/80">{event.description}</p>
                      </div>
                      <div className="relative h-60 md:h-72 rounded-lg overflow-hidden">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative h-60 md:h-72 rounded-lg overflow-hidden md:order-first">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:pl-12">
                        <h3 className="text-2xl font-serif mb-2">{event.title}</h3>
                        <p className="text-white/80">{event.description}</p>
                      </div>
                    </>
                  )}
                </>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
