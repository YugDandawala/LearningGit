import productJhumka from '../assets/images/product-celestial-jhumka.png';
import productChoker from '../assets/images/product-golden-choker.png';
import productNecklace from '../assets/images/product-celestial-necklace.png';
import productRing from '../assets/images/product-goldish-ring.png';

export interface Product {
  id: string;
  name: string;
  gujaratiMeta: string;
  price: string;
  weight?: string;
  image: string;
  alt: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 'celestial-jhumka',
    name: 'Celestial Jhumka',
    gujaratiMeta: 'ઝુમકા',
    price: '₹18,500',
    weight: '8.2g',
    image: productJhumka,
    alt: 'Celestial gold jhumka earrings with ornate traditional design',
    category: 'earrings',
  },
  {
    id: 'golden-choker',
    name: 'Golden Choker',
    gujaratiMeta: 'ચોકર',
    price: '₹2,50,000',
    weight: '42g',
    image: productChoker,
    alt: 'Elaborate golden choker necklace with intricate filigree work',
    category: 'necklaces',
  },
  {
    id: 'celestial-necklace',
    name: 'Celestial Necklace',
    gujaratiMeta: 'હારલો',
    price: '₹1,85,000',
    weight: '28g',
    image: productNecklace,
    alt: 'Celestial gold pendant necklace with delicate chain',
    category: 'necklaces',
  },
  {
    id: 'goldish-ring',
    name: 'Goldish Ring',
    gujaratiMeta: 'વીંટી',
    price: '₹15,000',
    weight: '4.5g',
    image: productRing,
    alt: 'Elegant gold ring with small diamond accent',
    category: 'rings',
  },
];
