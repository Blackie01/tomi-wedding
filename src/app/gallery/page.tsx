"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AuroraBackground from "@/components/common/AuroraBackground";
import { motion } from "framer-motion";
import Image from "next/image";
import PhotoUploader from "@/components/forms/PhotoUploader";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Sample gallery images (in a real app, these would come from an API/database)
const couplePhotos = [
  {
    id: 1,
    src: "/images/couple/portrait1.jpg",
    alt: "Couple under northern lights",
    width: 800,
    height: 600,
  },
  {
    id: 2,
    src: "/images/couple/portrait2.jpg",
    alt: "Engagement photo",
    width: 600,
    height: 800,
  },
  {
    id: 3,
    src: "/images/aurora1.jpg",
    alt: "Northern lights 1",
    width: 1200,
    height: 800,
  },
  {
    id: 4,
    src: "/images/aurora2.jpg",
    alt: "Northern lights 2",
    width: 1200,
    height: 800,
  },
  {
    id: 5,
    src: "/images/aurora3.jpg",
    alt: "Northern lights 3",
    width: 1200,
    height: 800,
  },
];

// Sample guest-uploaded photos (would come from an API in real app)
const guestPhotos = [
  {
    id: 101,
    src: "/images/aurora1.jpg",
    alt: "Guest photo 1",
    submittedBy: "Jane D.",
    width: 1200,
    height: 800,
  },
  {
    id: 102,
    src: "/images/aurora2.jpg",
    alt: "Guest photo 2",
    submittedBy: "John S.",
    width: 1200,
    height: 800,
  },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("couple");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedGallery, setSelectedGallery] = useState<"couple" | "guest">("couple");

  const closeModal = () => {
    setSelectedImage(null);
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
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Photo Gallery</h1>
            <p className="text-lg text-white/80 max-w-xl mx-auto">
              Browse through our special moments and share your own photos of our wedding celebration.
            </p>
          </div>

          <Tabs
            defaultValue="couple"
            value={activeTab}
            onValueChange={(val) => setActiveTab(val)}
            className="w-full"
          >
            <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8 bg-white/10">
              <TabsTrigger
                value="couple"
                className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
              >
                Our Photos
              </TabsTrigger>
              <TabsTrigger
                value="guest"
                className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
              >
                Guest Photos
              </TabsTrigger>
            </TabsList>

            <TabsContent value="couple" className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {couplePhotos.map((photo, index) => (
                  <Dialog key={photo.id}>
                    <DialogTrigger asChild>
                      <motion.div
                        className="aspect-square cursor-pointer rounded-lg overflow-hidden group relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        onClick={() => {
                          setSelectedImage(index);
                          setSelectedGallery("couple");
                        }}
                      >
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
                      </motion.div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-3xl bg-black/95 border-white/10">
                      <div className="relative w-full h-[70vh]">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="guest" className="mt-0 space-y-8">
              {/* Guest photo grid */}
              {guestPhotos.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {guestPhotos.map((photo, index) => (
                    <Dialog key={photo.id}>
                      <DialogTrigger asChild>
                        <motion.div
                          className="aspect-square cursor-pointer rounded-lg overflow-hidden group relative"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          onClick={() => {
                            setSelectedImage(index);
                            setSelectedGallery("guest");
                          }}
                        >
                          <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                            <p className="text-sm">Shared by: {photo.submittedBy}</p>
                          </div>
                        </motion.div>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-3xl bg-black/95 border-white/10">
                        <div className="relative w-full h-[70vh]">
                          <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            className="object-contain"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                            <p className="text-sm">Shared by: {photo.submittedBy}</p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              )}

              {/* Photo uploader */}
              <Card className="bg-black/40 backdrop-blur-md border-white/10">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-serif mb-6">Share Your Photos</h2>
                  <p className="mb-6 text-white/80">
                    We'd love to see your photos from our special day! Upload them here
                    to share with everyone. Your photos will appear in the guest gallery
                    after they're approved.
                  </p>
                  <PhotoUploader />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
