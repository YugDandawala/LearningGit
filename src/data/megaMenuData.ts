export interface MegaMenuItem {
  id: string;
  title: string;
  gujarati: string;
  url: string;
}

export interface MegaMenuSection {
  id: string;
  title: string;
  gujarati: string;
  slug: string;
  items: MegaMenuItem[];
}

export const collectionMegaMenu: MegaMenuSection[] = [
  {
    id: 'earrings',
    title: 'Earrings',
    gujarati: 'એરિંગ્સ',
    slug: 'earrings',
    items: [
      {
        id: 'all',
        title: 'All Earrings',
        gujarati: 'તમામ એરિંગ્સ',
        url: '/collections/earrings',
      },
      {
        id: 'jhumkas',
        title: 'Jhumkas / Jhumkis',
        gujarati: 'ઝૂમખા',
        url: '/collections/earrings/jhumkas',
      },
      {
        id: 'studs',
        title: 'Studs & Tops',
        gujarati: 'ટોપ્સ / એરિંગ્સ',
        url: '/collections/earrings/studs',
      },
      {
        id: 'chandbalis',
        title: 'Chandbalis',
        gujarati: 'ચાંદબાલી',
        url: '/collections/earrings/chandbalis',
      },
      {
        id: 'hoops',
        title: 'Hoops / Balis',
        gujarati: 'બુટ્ટી / બાલી',
        url: '/collections/earrings/hoops',
      },
      {
        id: 'dangle',
        title: 'Drop & Dangle',
        gujarati: 'હેંગિંગ એરિંગ્સ',
        url: '/collections/earrings/dangle',
      },
    ],
  },
  {
    id: 'bangles-kadas',
    title: 'Bangles & Kadas',
    gujarati: 'બંગડી અને કડા',
    slug: 'bangles-kadas',
    items: [
      {
        id: 'all',
        title: 'All Wristwear',
        gujarati: 'તમામ હાથના દાગીના',
        url: '/collections/bangles-kadas',
      },
      {
        id: 'bangles',
        title: 'Solid Bangles',
        gujarati: 'સોનાની બંગડી',
        url: '/collections/bangles-kadas/bangles',
      },
      {
        id: 'kadas',
        title: 'Kadas / Patla',
        gujarati: 'કડા / પાટલા',
        url: '/collections/bangles-kadas/kadas',
      },
      {
        id: 'bracelets',
        title: 'Chain Bracelets',
        gujarati: 'બ્રેસલેટ',
        url: '/collections/bangles-kadas/bracelets',
      },
      {
        id: 'hathphool',
        title: 'Hathphool',
        gujarati: 'હથફૂલ',
        url: '/collections/bangles-kadas/hathphool',
      },
    ],
  },
  {
    id: 'rings',
    title: 'Rings',
    gujarati: 'વીંટી',
    slug: 'rings',
    items: [
      {
        id: 'all',
        title: 'All Rings',
        gujarati: 'તમામ વીંટી',
        url: '/collections/rings',
      },
      {
        id: 'engagement',
        title: 'Engagement Bands',
        gujarati: 'સગાઈની વીંટી',
        url: '/collections/rings/engagement',
      },
      {
        id: 'solitaire',
        title: 'Solitaire & Diamond',
        gujarati: 'ડાયમંડ વીંટી',
        url: '/collections/rings/solitaire',
      },
      {
        id: 'dailywear',
        title: 'Daily Wear Rings',
        gujarati: 'ડેઇલી વેર વીંટી',
        url: '/collections/rings/dailywear',
      },
      {
        id: 'cocktail',
        title: 'Cocktail / Floral',
        gujarati: 'ક્રોકટેલ ફ્લોરલ વીંટી',
        url: '/collections/rings/cocktail',
      },
    ],
  },
  {
    id: 'anklets-payal',
    title: 'Anklets & Payal',
    gujarati: 'ઝાંઝર અને પાયલ',
    slug: 'anklets-payal',
    items: [
      {
        id: 'all',
        title: 'All Anklets',
        gujarati: 'તમામ ઝાંઝર',
        url: '/collections/anklets-payal',
      },
      {
        id: 'gold-payal',
        title: 'Gold Payal',
        gujarati: 'સોનાના ઝાંઝર',
        url: '/collections/anklets-payal/gold-payal',
      },
      {
        id: 'silver-payal',
        title: 'Silver Payal',
        gujarati: 'ચાંદીના પાયલ',
        url: '/collections/anklets-payal/silver-payal',
      },
      {
        id: 'bridal-payal',
        title: 'Bridal Heavy Payal',
        gujarati: 'બ્રાઇડલ પાયલ',
        url: '/collections/anklets-payal/bridal-payal',
      },
      {
        id: 'toe-rings',
        title: 'Toe Rings / Bichhiya',
        gujarati: 'વીંછિયા',
        url: '/collections/anklets-payal/toe-rings',
      },
    ],
  },
  {
    id: 'bridal',
    title: 'Bridal Heritage',
    gujarati: 'બ્રાઇડલ કલેક્શન',
    slug: 'bridal',
    items: [
      {
        id: 'all',
        title: 'Full Bridal Combos',
        gujarati: 'સંપૂર્ણ બ્રાઇડલ સેટ',
        url: '/collections/bridal',
      },
      {
        id: 'antique',
        title: 'Antique & Heritage',
        gujarati: 'એન્ટીક બ્રાઇડલ સેટ',
        url: '/collections/bridal/antique',
      },
      {
        id: 'kundan',
        title: 'Kundan & Polki',
        gujarati: 'કુંદન પોલ્કી સેટ',
        url: '/collections/bridal/kundan',
      },
      {
        id: 'temple',
        title: 'Temple Jewelry Sets',
        gujarati: 'ટેમ્પલ બ્રાઇડલ',
        url: '/collections/bridal/temple',
      },
    ],
  },
  {
    id: 'mens',
    title: "Men's Jewellery",
    gujarati: 'પુરુષોના દાગીના',
    slug: 'mens',
    items: [
      {
        id: 'all',
        title: "All Men's Items",
        gujarati: 'તમામ પુરુષોના દાગીના',
        url: '/collections/mens',
      },
      {
        id: 'chains',
        title: "Men's Chains",
        gujarati: 'પુરુષોની ગોલ્ડ ચેઇન',
        url: '/collections/mens/chains',
      },
      {
        id: 'kadas',
        title: "Men's Kadas",
        gujarati: 'પુરુષોના સોનાના કડા',
        url: '/collections/mens/kadas',
      },
      {
        id: 'rings',
        title: "Men's Rings",
        gujarati: 'પુરુષોની વીંટી',
        url: '/collections/mens/rings',
      },
      {
        id: 'pendants',
        title: 'Kurta Buttons & Pendants',
        gujarati: 'કુરતા બટન અને લોકેટ',
        url: '/collections/mens/pendants',
      },
    ],
  },
];
