"use client";

import Link from "next/link";
import Image from "next/image";
import AuroraBackground from "@/components/common/AuroraBackground";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Gift, Home, Plane, Camera, Coffee } from "lucide-react";
import { motion } from "framer-motion";

// Sample registry items (would connect to actual registry in production)
const registryCategories = [
  {
    icon: <Heart className="w-8 h-8 text-pink-400" />,
    title: "Honeymoon Fund",
    description: "Help us create unforgettable memories on our dream honeymoon to Bora Bora.",
    link: "#honeymoon",
    buttonText: "Contribute",
  },
  {
    icon: <Home className="w-8 h-8 text-blue-400" />,
    title: "Home Essentials",
    description: "Help us make our house a home with essentials for our new life together.",
    link: "#home",
    buttonText: "View Items",
  },
  {
    icon: <Camera className="w-8 h-8 text-purple-400" />,
    title: "Experiences",
    description: "Gift us amazing experiences that we'll cherish forever instead of traditional items.",
    link: "#experiences",
    buttonText: "Explore Options",
  },
  {
    icon: <Coffee className="w-8 h-8 text-amber-400" />,
    title: "Date Night Fund",
    description: "Contribute to our date night fund to help us continue to prioritize our relationship.",
    link: "#date-night",
    buttonText: "Contribute",
  },
  {
    icon: <Gift className="w-8 h-8 text-emerald-400" />,
    title: "Charitable Donations",
    description: "Make a donation in our name to one of our favorite charities.",
    link: "#charity",
    buttonText: "Donate",
  },
  {
    icon: <Plane className="w-8 h-8 text-sky-400" />,
    title: "Northern Lights Adventure",
    description: "Help fund our dream to see the northern lights again on our first anniversary.",
    link: "#adventure",
    buttonText: "Contribute",
  },
];

// Sample traditional registry links
const traditionalRegistries = [
  {
    name: "Amazon",
    logo: "/images/amazon-logo.png", // This would be a real logo in production
    url: "https://www.amazon.com",
  },
  {
    name: "Crate & Barrel",
    logo: "/images/crate-logo.png", // This would be a real logo in production
    url: "https://www.crateandbarrel.com",
  },
  {
    name: "Bed Bath & Beyond",
    logo: "/images/bb-logo.png", // This would be a real logo in production
    url: "https://www.bedbathandbeyond.com",
  },
];

export default function RegistryPage() {
  return (
    <div className="relative min-h-screen pt-24 pb-16">
      {/* Background */}
      <AuroraBackground opacity={0.6} heightClass="h-full" />

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          className="max-w-6xl mx-auto text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Gift Registry</h1>
            <p className="text-lg text-white/80 max-w-xl mx-auto">
              Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift,
              we've created this registry to help guide you.
            </p>
          </div>

          {/* Registry Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {registryCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-black/40 backdrop-blur-md border-white/10 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex justify-center mb-4">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-medium text-center mb-3">{category.title}</h3>
                    <p className="text-white/80 text-center mb-6 flex-grow">{category.description}</p>
                    <Button
                      asChild
                      className="w-full bg-emerald-500 hover:bg-emerald-600"
                    >
                      <Link href={category.link}>
                        {category.buttonText}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Traditional Registries */}
          <motion.div
            className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-serif text-center mb-8">Traditional Registries</h2>

            <div className="flex flex-wrap justify-center gap-8">
              {traditionalRegistries.map((registry, index) => (
                <Link
                  key={index}
                  href={registry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-4 flex flex-col items-center w-36"
                >
                  <div className="relative w-16 h-16 mb-3 rounded bg-white flex items-center justify-center">
                    {/* In a real site, you'd use actual logos */}
                    {/* <Image
                      src={registry.logo}
                      alt={registry.name}
                      fill
                      className="object-contain p-2"
                    /> */}
                    <span className="text-black font-bold">{registry.name}</span>
                  </div>
                  <span className="text-sm">{registry.name} Registry</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Thank You Note */}
          <motion.div
            className="text-center max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-serif mb-4">Thank You</h2>
            <p className="text-white/80">
              We are so grateful for your love, support, and generosity.
              Thank you for being part of our special day and for helping us
              build our life together.
            </p>
            <div className="mt-6">
              <span className="text-2xl font-serif text-emerald-400">John & Sarah</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
