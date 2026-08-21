import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import GoldRateTicker from '../components/layout/GoldRateTicker';
import Header from '../components/layout/Header';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import HeroCarousel from '../components/home/HeroCarousel';
import CategorySection from '../components/home/CategorySection';
import NewArrivals from '../components/home/NewArrivals';
import BrandStory from '../components/home/BrandStory';
import WhatsAppButton from '../components/common/WhatsAppButton';

const HomePage: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      }
    }
  }, [location]);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <GoldRateTicker />
      <Header onMenuToggle={handleMenuToggle} />
      <Navigation
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuClose={handleMenuClose}
      />
      <main>
        <HeroCarousel />
        <CategorySection />
        <NewArrivals />
        <BrandStory />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default HomePage;
