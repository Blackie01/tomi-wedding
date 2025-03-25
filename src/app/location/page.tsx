"use client";

import { useState } from "react";
import Image from "next/image";
import AuroraBackground from "@/components/common/AuroraBackground";
import { motion } from "framer-motion";
import { MapPin, Hotel, Car, Bus, Plane } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function LocationPage() {
  // Fairbanks, Alaska coordinates
  const venue = {
    latitude: 64.8378,
    longitude: -147.7164,
    address: "123 Northern Lights Blvd, Fairbanks, Alaska, 99775"
  };

  return (
    <div className="relative min-h-screen pt-24 pb-16">
      {/* Background */}
      <AuroraBackground opacity={0.6} heightClass="h-full" />

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          className="max-w-5xl mx-auto text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Venue & Location</h1>
            <p className="text-lg text-white/80 max-w-xl mx-auto">
              Join us at the beautiful Aurora View Lodge in Fairbanks, Alaska,
              where you might be lucky enough to witness the northern lights on our special day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            {/* Venue Image */}
            <motion.div
              className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/images/aurora3.jpg"
                alt="Aurora View Lodge"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Venue Details */}
            <motion.div
              className="text-white"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-serif mb-4">Aurora View Lodge</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-400 mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-white/80">{venue.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Hotel className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <p className="font-medium">Accommodations</p>
                    <p className="text-white/80">
                      We've reserved a block of rooms at the lodge for our guests.
                      Use code "JS-WEDDING" when booking for a special rate.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-purple-400 mt-1" />
                  <div>
                    <p className="font-medium">Parking</p>
                    <p className="text-white/80">
                      Complimentary parking is available at the venue.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            className="bg-black/40 backdrop-blur-md p-6 rounded-lg border border-white/10 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-serif mb-4 text-white">Map & Directions</h2>

            <div className="h-[400px] rounded-lg overflow-hidden">
              {/* Static Map Image for Fairbanks, Alaska */}
              <div className="relative w-full h-full bg-slate-800">
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white space-y-2">
                  <MapPin className="w-10 h-10 text-emerald-400" />
                  <h3 className="text-lg font-medium">Aurora View Lodge</h3>
                  <p>
                    Coordinates: {venue.latitude}, {venue.longitude}
                  </p>
                  <p className="text-sm text-white/70 max-w-md text-center">
                    Located in beautiful Fairbanks, Alaska. For detailed directions,
                    please use Google Maps or your preferred navigation app.
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${venue.latitude},${venue.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 transition-colors rounded text-white"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Travel Information */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-serif mb-6 text-center text-white">Travel Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-black/40 backdrop-blur-md border-white/10">
                <CardContent className="p-6">
                  <div className="flex gap-4 text-white">
                    <Plane className="w-8 h-8 text-sky-400" />
                    <div>
                      <h3 className="text-xl font-medium mb-2">By Air</h3>
                      <p className="text-white/80">
                        The nearest airport is Fairbanks International Airport (FAI),
                        which is approximately 15 minutes from the venue.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 backdrop-blur-md border-white/10">
                <CardContent className="p-6">
                  <div className="flex gap-4 text-white">
                    <Car className="w-8 h-8 text-emerald-400" />
                    <div>
                      <h3 className="text-xl font-medium mb-2">By Car</h3>
                      <p className="text-white/80">
                        From downtown Fairbanks, take Airport Way east, then turn north
                        onto University Avenue. Follow for 3 miles to reach the venue.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 backdrop-blur-md border-white/10">
                <CardContent className="p-6">
                  <div className="flex gap-4 text-white">
                    <Bus className="w-8 h-8 text-yellow-400" />
                    <div>
                      <h3 className="text-xl font-medium mb-2">Shuttle Service</h3>
                      <p className="text-white/80">
                        We are arranging complimentary shuttle service from downtown hotels
                        to the venue and back. Schedule details will be provided closer to the wedding date.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 backdrop-blur-md border-white/10">
                <CardContent className="p-6">
                  <div className="flex gap-4 text-white">
                    <Hotel className="w-8 h-8 text-purple-400" />
                    <div>
                      <h3 className="text-xl font-medium mb-2">Nearby Accommodations</h3>
                      <p className="text-white/80">
                        Besides the venue's own accommodations, there are several hotels in
                        downtown Fairbanks, approximately 10-15 minutes away by car.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
