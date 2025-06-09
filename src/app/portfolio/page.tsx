import { PortfolioGallery } from '@/components/portfolio/PortfolioGallery';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - Uttam Kumar',
  description: 'Explore the photography and cinematography portfolio of Uttam Kumar.',
};

export default function PortfolioPage() {
  return (
    <div className="py-8">
      <PortfolioGallery showFilters={true} title="Portfolio Showcase" />
    </div>
  );
}
