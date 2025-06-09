import { HeroSlideshow } from '@/components/home/HeroSlideshow';
import { AboutSection } from '@/components/about/AboutSection';
import { PortfolioGallery } from '@/components/portfolio/PortfolioGallery';
import { BlogList } from '@/components/blog/BlogList';
import { ContactSection } from '@/components/contact/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSlideshow />
      <AboutSection />
      <PortfolioGallery 
        initialCount={3} 
        showFilters={false} 
        title="Featured Work"
        showViewAllButton={true} 
      />
      <BlogList 
        initialCount={3} 
        showFilters={false} 
        title="From the Blog"
        showViewAllButton={true}
      />
      <ContactSection />
    </>
  );
}
