import React from 'react';
import './CollectionHero.css';

interface CollectionHeroProps {
  title: string;
  gujaratiTitle: string;
  heroText: string;
  heroImage: string;
}

const CollectionHero: React.FC<CollectionHeroProps> = ({
  title,
  gujaratiTitle,
  heroText,
  heroImage,
}) => {
  return (
    <section className="collection-hero container">
      <div className="hero-card">
        <div className="hero-content-left">
          <span className="hero-gujarati gujarati-text">{gujaratiTitle}</span>
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{heroText}</p>
        </div>
        <div className="hero-image-right">
          <img src={heroImage} alt={title} className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default CollectionHero;
