"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({
  targetDate,
  className = ""
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference <= 0) {
        // Target date has passed
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`flex flex-wrap justify-center gap-4 ${className}`}>
      <TimeUnit label="Days" value={timeLeft.days} />
      <TimeUnit label="Hours" value={timeLeft.hours} />
      <TimeUnit label="Minutes" value={timeLeft.minutes} />
      <TimeUnit label="Seconds" value={timeLeft.seconds} />
    </div>
  );
}

interface TimeUnitProps {
  label: string;
  value: number;
}

function TimeUnit({ label, value }: TimeUnitProps) {
  return (
    <Card className="bg-black/40 backdrop-blur-md border-white/10 text-white">
      <CardContent className="flex flex-col items-center justify-center p-4">
        <span className="text-3xl md:text-4xl font-light">{value.toString().padStart(2, '0')}</span>
        <span className="text-xs uppercase tracking-wider mt-1 text-white/80">{label}</span>
      </CardContent>
    </Card>
  );
}
