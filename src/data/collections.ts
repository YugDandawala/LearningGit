import heroEarrings from '../assets/images/hero-earrings.png';
import heroBridal from '../assets/images/hero-bridal.png';
import categoryBangles from '../assets/images/category-bracelet.png';
import categoryRings from '../assets/images/category-rings.png';
import categoryAnklets from '../assets/images/category-anklets.png';
import categoryNecklaces from '../assets/images/category-necklaces.png';
import productChoker from '../assets/images/product-golden-choker.png';

export interface SubcategoryOption {
  id: string;
  name: string;
  gujaratiName: string;
}

export interface FilterOption {
  key: string;
  label: string;
  options: { label: string; value: string }[];
}

export interface CollectionConfig {
  slug: string;
  title: string;
  gujaratiTitle: string;
  heroText: string;
  heroImage: string;
  subcategories: SubcategoryOption[];
  filters: FilterOption[];
}

export const collectionsData: Record<string, CollectionConfig> = {
  earrings: {
    slug: 'earrings',
    title: 'Gold Earrings Collection',
    gujaratiTitle: 'સોનાની એરિંગ્સ અને ઝૂમખા કલેક્શન',
    heroText: 'From Daily Wear Studs to Royal Bridal Jhumkas',
    heroImage: heroEarrings,
    subcategories: [
      { id: 'all', name: 'All Earrings', gujaratiName: 'તમામ એરિંગ્સ' },
      { id: 'jhumkas', name: 'Jhumkas / Jhumkis', gujaratiName: 'ઝૂમખા' },
      { id: 'studs', name: 'Studs & Tops', gujaratiName: 'ટોપ્સ / એરિંગ્સ' },
      { id: 'chandbalis', name: 'Chandbalis', gujaratiName: 'ચાંદબાલી' },
      { id: 'hoops', name: 'Hoops / Balis', gujaratiName: 'બુટ્ટી / બાલી' },
      { id: 'dangle', name: 'Drop & Dangle', gujaratiName: 'હેંગિંગ એરિંગ્સ' },
    ],
    filters: [
      {
        key: 'purity',
        label: 'Purity',
        options: [
          { label: 'All Purities', value: 'all' },
          { label: '22K (916)', value: '22K' },
          { label: '18K (750)', value: '18K' },
        ],
      },
      {
        key: 'weight',
        label: 'Weight',
        options: [
          { label: 'All Weights', value: 'all' },
          { label: '< 5g', value: '0-5' },
          { label: '5g – 15g', value: '5-15' },
          { label: '15g – 30g', value: '15-30' },
          { label: '30g+ Heavy', value: '30+' },
        ],
      },
      {
        key: 'style',
        label: 'Style',
        options: [
          { label: 'All Styles', value: 'all' },
          { label: 'Antique', value: 'antique' },
          { label: 'Traditional', value: 'traditional' },
          { label: 'Daily Wear', value: 'dailywear' },
          { label: 'Royal', value: 'royal' },
        ],
      },
    ],
  },
  'bangles-kadas': {
    slug: 'bangles-kadas',
    title: 'Gold Bangles & Kadas Collection',
    gujaratiTitle: 'સોનાની બંગડી, કડા અને બ્રેસલેટ કલેક્શન',
    heroText: 'Timeless Wristwear Crafted in Pure 22K Gold',
    heroImage: categoryBangles,
    subcategories: [
      { id: 'all', name: 'All Wristwear', gujaratiName: 'તમામ હાથના દાગીના' },
      { id: 'bangles', name: 'Solid Bangles', gujaratiName: 'સોનાની બંગડી' },
      { id: 'kadas', name: 'Kadas / Patla', gujaratiName: 'કડા / પાટલા' },
      { id: 'bracelets', name: 'Chain Bracelets', gujaratiName: 'બ્રેસલેટ' },
      { id: 'hathphool', name: 'Hathphool', gujaratiName: 'હથફૂલ' },
    ],
    filters: [
      {
        key: 'purity',
        label: 'Purity',
        options: [
          { label: 'All Purities', value: 'all' },
          { label: '22K (916)', value: '22K' },
          { label: '18K (750)', value: '18K' },
        ],
      },
      {
        key: 'weight',
        label: 'Weight',
        options: [
          { label: 'All Weights', value: 'all' },
          { label: '< 20g', value: '0-20' },
          { label: '20g – 50g', value: '20-50' },
          { label: '50g – 100g', value: '50-100' },
          { label: '100g+ Bridal', value: '100+' },
        ],
      },
    ],
  },
  rings: {
    slug: 'rings',
    title: 'Gold & Diamond Rings Collection',
    gujaratiTitle: 'સોના અને ડાયમંડની વીંટી કલેક્શન',
    heroText: 'Elegance for Every Finger & Special Occasion',
    heroImage: categoryRings,
    subcategories: [
      { id: 'all', name: 'All Rings', gujaratiName: 'તમામ વીંટી' },
      { id: 'engagement', name: 'Engagement Bands', gujaratiName: 'સગાઈની વીંટી' },
      { id: 'solitaire', name: 'Solitaire & Diamond', gujaratiName: 'ડાયમંડ વીંટી' },
      { id: 'dailywear', name: 'Daily Wear Rings', gujaratiName: 'ડેઇલી વેર વીંટી' },
      { id: 'cocktail', name: 'Cocktail / Floral', gujaratiName: 'ક્રોકટેલ ફ્લોરલ વીંટી' },
    ],
    filters: [
      {
        key: 'gender',
        label: 'Gender',
        options: [
          { label: 'All Genders', value: 'all' },
          { label: 'Women', value: 'women' },
          { label: 'Men', value: 'men' },
          { label: 'Unisex Pair', value: 'unisex' },
        ],
      },
      {
        key: 'weight',
        label: 'Weight',
        options: [
          { label: 'All Weights', value: 'all' },
          { label: '< 4g', value: '0-4' },
          { label: '4g – 8g', value: '4-8' },
          { label: '8g – 15g', value: '8-15' },
          { label: '15g+ Heavy', value: '15+' },
        ],
      },
    ],
  },
  'anklets-payal': {
    slug: 'anklets-payal',
    title: 'Gold & Silver Anklets Collection',
    gujaratiTitle: 'ઝાંઝર, પાયલ અને વીંછિયા કલેક્શન',
    heroText: 'Traditional Grace for Your Feet',
    heroImage: categoryAnklets,
    subcategories: [
      { id: 'all', name: 'All Anklets', gujaratiName: 'તમામ ઝાંઝર' },
      { id: 'gold-payal', name: 'Gold Payal', gujaratiName: 'સોનાના ઝાંઝર' },
      { id: 'silver-payal', name: 'Silver Payal', gujaratiName: 'ચાંદીના પાયલ' },
      { id: 'bridal-payal', name: 'Bridal Heavy Payal', gujaratiName: 'બ્રાઇડલ પાયલ' },
      { id: 'toe-rings', name: 'Toe Rings / Bichhiya', gujaratiName: 'વીંછિયા' },
    ],
    filters: [
      {
        key: 'purity',
        label: 'Metal',
        options: [
          { label: 'All Metals', value: 'all' },
          { label: 'Gold (22K)', value: '22K' },
          { label: 'Silver (92.5)', value: '92.5' },
        ],
      },
    ],
  },
  bridal: {
    slug: 'bridal',
    title: 'Royal Bridal Gold Collection',
    gujaratiTitle: 'રોયલ બ્રાઇડલ કલેક્શન',
    heroText: 'Complete Wedding Sets for the Royal Indian Bride',
    heroImage: heroBridal,
    subcategories: [
      { id: 'all', name: 'Full Bridal Combos', gujaratiName: 'સંપૂર્ણ બ્રાઇડલ સેટ' },
      { id: 'antique', name: 'Antique & Heritage', gujaratiName: 'એન્ટીક બ્રાઇડલ સેટ' },
      { id: 'kundan', name: 'Kundan & Polki', gujaratiName: 'કુંદન પોલ્કી સેટ' },
      { id: 'temple', name: 'Temple Jewelry Sets', gujaratiName: 'ટેમ્પલ બ્રાઇડલ' },
    ],
    filters: [
      {
        key: 'weight',
        label: 'Weight Range',
        options: [
          { label: 'All Weights', value: 'all' },
          { label: '50g – 150g', value: '50-150' },
          { label: '150g – 300g', value: '150-300' },
          { label: '300g+ Grand Royal', value: '300+' },
        ],
      },
    ],
  },
  mens: {
    slug: 'mens',
    title: "Men's Gold Jewelry Collection",
    gujaratiTitle: 'પુરુષો માટે સોનાના દાગીના',
    heroText: 'Bold, Elegant & Masculine Gold Designs',
    heroImage: categoryBangles,
    subcategories: [
      { id: 'all', name: "All Men's Items", gujaratiName: 'તમામ પુરુષોના દાગીના' },
      { id: 'chains', name: "Men's Chains", gujaratiName: 'પુરુષોની ગોલ્ડ ચેઇન' },
      { id: 'kadas', name: "Men's Kadas", gujaratiName: 'પુરુષોના સોનાના કડા' },
      { id: 'rings', name: "Men's Rings", gujaratiName: 'પુરુષોની વીંટી' },
      { id: 'pendants', name: 'Kurta Buttons & Pendants', gujaratiName: 'કુરતા બટન અને લોકેટ' },
    ],
    filters: [
      {
        key: 'purity',
        label: 'Purity',
        options: [
          { label: 'All Purities', value: 'all' },
          { label: '22K (916)', value: '22K' },
          { label: '18K (750)', value: '18K' },
        ],
      },
    ],
  },
  necklaces: {
    slug: 'necklaces',
    title: 'Royal Gold Necklaces Collection',
    gujaratiTitle: 'શાહી સોનાના હાર કલેક્શન',
    heroText: 'Exquisite Heritage Neckpieces & Modern Chokers',
    heroImage: categoryNecklaces,
    subcategories: [
      { id: 'all', name: 'All Necklaces', gujaratiName: 'તમામ હાર' },
      { id: 'chokers', name: 'Gold Chokers', gujaratiName: 'સોનાના ચોકર' },
      { id: 'long-har', name: 'Long Rani Haar', gujaratiName: 'રાણી હાર' },
      { id: 'pendant-sets', name: 'Pendant Sets', gujaratiName: 'પેન્ડન્ટ સેટ' },
    ],
    filters: [
      {
        key: 'purity',
        label: 'Purity',
        options: [
          { label: 'All Purities', value: 'all' },
          { label: '22K (916)', value: '22K' },
          { label: '18K (750)', value: '18K' },
        ],
      },
      {
        key: 'weight',
        label: 'Weight',
        options: [
          { label: 'All Weights', value: 'all' },
          { label: '< 20g', value: '0-20' },
          { label: '20g – 50g', value: '20-50' },
          { label: '50g+ Heavy', value: '50+' },
        ],
      },
    ],
  },
};
