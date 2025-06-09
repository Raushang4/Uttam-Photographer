export interface PortfolioItem {
  id: string;
  type: 'photo' | 'video';
  title: string;
  category: string;
  thumbnailSrc: string;
  fullSrc: string; // URL for full image or video embed URL
  caption: string;
  aiHint: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    type: 'photo',
    title: 'Mountain Majesty',
    category: 'Landscape',
    thumbnailSrc: 'https://placehold.co/400x300.png',
    fullSrc: 'https://placehold.co/1200x800.png',
    caption: 'A stunning view of the snow-capped peaks at sunrise.',
    aiHint: 'mountain landscape'
  },
  {
    id: '2',
    type: 'video',
    title: 'Urban Flow',
    category: 'Cinematic',
    thumbnailSrc: 'https://placehold.co/400x300.png',
    fullSrc: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Example video
    caption: 'A dynamic cinematic short showcasing the city life.',
    aiHint: 'city timelapse'
  },
  {
    id: '3',
    type: 'photo',
    title: 'Serene Portrait',
    category: 'Portrait',
    thumbnailSrc: 'https://placehold.co/400x300.png',
    fullSrc: 'https://placehold.co/800x1200.png',
    caption: 'A candid portrait capturing a moment of reflection.',
    aiHint: 'portrait woman'
  },
  {
    id: '4',
    type: 'photo',
    title: 'Wedding Bliss',
    category: 'Wedding',
    thumbnailSrc: 'https://placehold.co/400x300.png',
    fullSrc: 'https://placehold.co/1200x800.png',
    caption: 'Capturing the magic of a special day.',
    aiHint: 'wedding couple'
  },
  {
    id: '5',
    type: 'video',
    title: 'Product Showcase',
    category: 'Commercial',
    thumbnailSrc: 'https://placehold.co/400x300.png',
    fullSrc: 'https://www.youtube.com/embed/許HXkXgP6E', // Example video
    caption: 'Highlighting the features of a new innovative product.',
    aiHint: 'product commercial'
  },
  {
    id: '6',
    type: 'photo',
    title: 'Abstract Light',
    category: 'Artistic',
    thumbnailSrc: 'https://placehold.co/400x300.png',
    fullSrc: 'https://placehold.co/1000x1000.png',
    caption: 'An artistic exploration of light and shadow.',
    aiHint: 'abstract light'
  },
];

export const portfolioCategories = ['All', ...new Set(portfolioItems.map(item => item.category))];
