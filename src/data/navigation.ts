export interface NavItem {
  label: string;
  href: string;
}

export const navigationItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Collections', href: '/collections/earrings' },
  { label: 'About Us', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];
