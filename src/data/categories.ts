import categoryEarrings from '../assets/images/category-earrings.png';
import categoryNecklaces from '../assets/images/category-necklaces.png';
import categoryRings from '../assets/images/category-rings.png';
import categoryAnklets from '../assets/images/category-anklets.png';
import categoryBracelet from '../assets/images/category-bracelet.png';

export interface Category {
  id: string;
  title: string;
  gujaratiTitle: string;
  images: string[];
  alt: string;
}

export const categories: Category[] = [
  {
    id: 'earrings',
    title: 'Earrings',
    gujaratiTitle: 'એરિંગ્સ',
    images: [categoryEarrings],
    alt: 'Traditional gold jhumka earrings with pearl drops',
  },
  {
    id: 'necklaces',
    title: 'Necklaces',
    gujaratiTitle: 'નેકલેસ',
    images: [categoryNecklaces],
    alt: 'Intricate gold choker necklace with kundan work',
  },
  {
    id: 'rings',
    title: 'Rings',
    gujaratiTitle: 'વીંટી',
    images: [categoryRings],
    alt: 'Gold and diamond rings collection',
  },
  {
    id: 'anklets-more',
    title: 'Ankle Chains & More',
    gujaratiTitle: 'ઝાંઝર / બ્રેસલેટ',
    images: [categoryAnklets, categoryBracelet],
    alt: 'Gold ankle chains and bracelets',
  },
];
