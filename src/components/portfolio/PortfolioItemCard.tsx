"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Video } from 'lucide-react';
import type { PortfolioItem } from '@/data/portfolioItems';

interface PortfolioItemCardProps {
  item: PortfolioItem;
  onOpenLightbox: (item: PortfolioItem) => void;
}

export function PortfolioItemCard({ item, onOpenLightbox }: PortfolioItemCardProps) {
  return (
    <Card 
      className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group animate-fade-in"
      onClick={() => onOpenLightbox(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpenLightbox(item); }}
      aria-label={`View details for ${item.title}`}
    >
      <CardContent className="p-0">
        <div className="relative aspect-video w-full">
          <Image
            src={item.thumbnailSrc}
            alt={item.title}
            data-ai-hint={item.aiHint}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            {item.type === 'photo' ? (
              <Eye className="h-12 w-12 text-white" />
            ) : (
              <Video className="h-12 w-12 text-white" />
            )}
          </div>
        </div>
        <div className="p-4 bg-card">
          <h3 className="text-lg font-semibold truncate group-hover:text-primary transition-colors">{item.title}</h3>
          <p className="text-sm text-muted-foreground">{item.category}</p>
        </div>
      </CardContent>
    </Card>
  );
}
