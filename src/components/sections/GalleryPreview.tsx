"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "/images/couple/portrait1.jpg",
    alt: "Couple under northern lights",
    width: 2,
    height: 3,
  },
  {
    src: "/images/couple/portrait2.jpg",
    alt: "Engagement photo",
    width: 1,
    height: 1,
  },
  {
    src: "/images/aurora1.jpg",
    alt: "Aurora borealis",
    width: 3,
    height: 2,
  },
  {
    src: "/images/aurora2.jpg",
    alt: "Northern lights landscape",
    width: 3,
    height: 2,
  },
  {
    src: "/images/aurora3.jpg",
    alt: "Winter landscape with aurora",
    width: 3,
    height: 2,
  },
];

export default function GalleryPreview() {
  const [hoverImage, setHoverImage] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-black to-black/95 text-white relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Photo Gallery</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            A glimpse of our journey together and the moments we've shared.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className={`relative ${
                image.width > image.height ? "col-span-2" : ""
              } ${image.width > 2 && image.height > 1 ? "md:col-span-2" : ""} aspect-square md:aspect-auto overflow-hidden group`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoverImage(index)}
              onMouseLeave={() => setHoverImage(null)}
            >
              <div className="relative h-full min-h-[200px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              </div>

              {hoverImage === index && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-white text-sm px-4 py-2 bg-black/60 rounded-full">
                    {image.alt}
                  </span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10 rounded-none px-8"
          >
            <Link href="/gallery">
              View Full Gallery
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
