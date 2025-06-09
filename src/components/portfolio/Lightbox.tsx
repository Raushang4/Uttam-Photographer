"use client";

import Image from 'next/image';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import type { PortfolioItem } from '@/data/portfolioItems';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  item: PortfolioItem | null;
}

export function Lightbox({ isOpen, onClose, item }: LightboxProps) {
  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden !rounded-lg">
        <DialogHeader className="p-4 pb-0 sr-only">
          <DialogTitle>{item.title}</DialogTitle>
          <DialogDescription>{item.caption}</DialogDescription>
        </DialogHeader>
        {item.type === 'photo' ? (
          <div className="relative w-full aspect-[16/10]">
            <Image src={item.fullSrc} alt={item.title} fill className="object-contain" data-ai-hint={item.aiHint} />
          </div>
        ) : (
          <div className="aspect-video w-full">
            <iframe
              src={item.fullSrc}
              title={item.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        )}
        <div className="p-4 bg-card-foreground/5 text-card-foreground">
          <h3 className="font-semibold text-lg">{item.title}</h3>
          <p className="text-sm text-muted-foreground">{item.caption}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
