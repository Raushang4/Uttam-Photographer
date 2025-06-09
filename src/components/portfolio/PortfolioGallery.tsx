"use client";

import { useState } from 'react';
import { portfolioItems, portfolioCategories, type PortfolioItem } from '@/data/portfolioItems';
import { PortfolioItemCard } from './PortfolioItemCard';
import { Lightbox } from './Lightbox';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/shared/Section';
import { cn } from '@/lib/utils';

interface PortfolioGalleryProps {
  initialCount?: number; // For homepage summary
  showFilters?: boolean;
  title?: string;
  showViewAllButton?: boolean;
}

export function PortfolioGallery({ initialCount, showFilters = true, title = "My Work", showViewAllButton = false }: PortfolioGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  const itemsToDisplay = initialCount ? filteredItems.slice(0, initialCount) : filteredItems;

  const openLightbox = (item: PortfolioItem) => {
    setSelectedItem(item);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedItem(null);
  };

  return (
    <Section id="portfolio-gallery">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{title}</h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Explore a curated collection of my photography and cinematography projects. Each piece tells a unique story, captured with passion and precision.
      </p>

      {showFilters && (
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {portfolioCategories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "transition-all duration-200",
                selectedCategory === category ? "bg-primary text-primary-foreground hover:bg-primary/90" : "hover:bg-accent hover:text-accent-foreground"
              )}
            >
              {category}
            </Button>
          ))}
        </div>
      )}

      {itemsToDisplay.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {itemsToDisplay.map(item => (
            <PortfolioItemCard key={item.id} item={item} onOpenLightbox={openLightbox} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground text-lg">No items to display in this category.</p>
      )}
      
      {showViewAllButton && initialCount && portfolioItems.length > initialCount && (
        <div className="text-center mt-12">
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href="/portfolio">View All Projects</a>
          </Button>
        </div>
      )}

      <Lightbox isOpen={lightboxOpen} onClose={closeLightbox} item={selectedItem} />
    </Section>
  );
}
