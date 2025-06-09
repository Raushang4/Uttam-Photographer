"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const slideshowImages = [
  { src: 'https://placehold.co/1920x1080.png', alt: 'Dramatic landscape photography', hint: 'landscape mountains' },
  { src: 'https://placehold.co/1920x1080.png', alt: 'Candid portrait cinematography still', hint: 'portrait cinematic' },
  { src: 'https://placehold.co/1920x1080.png', alt: 'Artistic product shot', hint: 'product artistic' },
  { src: 'https://placehold.co/1920x1080.png', alt: 'Wedding videography highlight', hint: 'wedding video' },
];

export function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slideshowImages.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          data-ai-hint={image.hint}
          fill
          priority={index === 0}
          className={cn(
            "object-cover transition-opacity duration-1000 ease-in-out",
            index === currentIndex ? "opacity-100" : "opacity-0"
          )}
        />
      ))}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-white drop-shadow-lg mb-6 animate-fade-in">
          Uttam Kumar
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 drop-shadow-md mb-8 animate-fade-in animation-delay-300">
          Framing Your Story in Every Frame
        </p>
        <div className="animate-fade-in animation-delay-600">
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/portfolio">View Portfolio</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');
