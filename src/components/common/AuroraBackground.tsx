"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AuroraBackgroundProps {
  opacity?: number;
  disableOverlay?: boolean;
  showStars?: boolean;
  heightClass?: string;
}

export default function AuroraBackground({
  opacity = 0.7,
  disableOverlay = false,
  showStars = true,
  heightClass = "h-screen",
}: AuroraBackgroundProps) {
  const [stars, setStars] = useState<{ x: number; y: number; size: number; opacity: number }[]>([]);

  useEffect(() => {
    if (showStars) {
      const generateStars = () => {
        const newStars = [];
        const starCount = Math.floor(window.innerWidth / 8); // Responsive star count

        for (let i = 0; i < starCount; i++) {
          newStars.push({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 0.2 + 0.1,
            opacity: Math.random() * 0.8 + 0.2,
          });
        }

        setStars(newStars);
      };

      generateStars();
      window.addEventListener("resize", generateStars);

      return () => {
        window.removeEventListener("resize", generateStars);
      };
    }
  }, [showStars]);

  return (
    <div className={`absolute top-0 left-0 w-full ${heightClass} overflow-hidden z-[-1]`}>
      {/* Aurora effect */}
      <div className="aurora" style={{ opacity }}>
        <div className="aurora__item"></div>
        <div className="aurora__item"></div>
        <div className="aurora__item"></div>
      </div>

      {/* Dark gradient overlay */}
      {!disableOverlay && (
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/50"></div>
      )}

      {/* Stars */}
      {showStars && stars.map((star, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.3, star.opacity],
          }}
          transition={{
            repeat: Infinity,
            duration: 2 + Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
