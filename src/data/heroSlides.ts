import heroBridal from '../assets/images/hero-bridal.png';
import heroEarrings from '../assets/images/hero-earrings.png';

export interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  alt: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: heroBridal,
    title: 'Timeless Creations:',
    subtitle: 'Explore Our Exquisite\nBridal Collection.',
    alt: 'Heavy traditional Indian bridal gold necklace set with matching earrings on dark velvet',
  },
  {
    id: 2,
    image: heroEarrings,
    title: 'Contemporary',
    subtitle: 'Elegance Meets\nTraditional Craft.',
    alt: 'Modern contemporary gold and diamond drop earrings',
  },
  {
    id: 3,
    image: heroBridal,
    title: 'Heritage Gold:',
    subtitle: 'Celebrate Every\nPrecious Moment.',
    alt: 'Exquisite bridal gold jewelry collection',
  },
  {
    id: 4,
    image: heroEarrings,
    title: 'Festive Collection:',
    subtitle: 'Adorn Yourself With\nTimeless Beauty.',
    alt: 'Premium festive gold earrings collection',
  },
  {
    id: 5,
    image: heroBridal,
    title: 'Royal Traditions:',
    subtitle: 'Handcrafted With\nLove & Precision.',
    alt: 'Royal traditional gold jewelry set',
  },
  {
    id: 6,
    image: heroEarrings,
    title: 'Modern Classics:',
    subtitle: 'Where Art Meets\nPure Gold.',
    alt: 'Modern classic gold jewelry pieces',
  },
];
