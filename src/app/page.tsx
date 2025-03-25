import Hero from "@/components/sections/Hero";
import WeddingDetails from "@/components/sections/WeddingDetails";
import CoupleProfile from "@/components/sections/CoupleProfile";
import GalleryPreview from "@/components/sections/GalleryPreview";
import RsvpCta from "@/components/sections/RsvpCta";

export default function Home() {
  return (
    <>
      <Hero />
      <WeddingDetails />
      <CoupleProfile />
      <GalleryPreview />
      <RsvpCta />
    </>
  );
}
