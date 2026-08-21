import React from 'react';
import type { Category } from '../../data/categories';
import './CategoryCard.css';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const isStacked = category.images.length > 1;

  return (
    <a href={`/category/${category.id}`} className="category-card" aria-label={`Browse ${category.title}`}>
      <div className={`category-image-area ${isStacked ? 'category-image-stacked' : ''}`}>
        {isStacked ? (
          <>
            <div className="stacked-image-wrapper stacked-top">
              <img
                src={category.images[0]}
                alt={`${category.title} - anklets`}
                className="category-img"
                loading="lazy"
              />
            </div>
            <div className="stacked-image-wrapper stacked-bottom">
              <img
                src={category.images[1]}
                alt={`${category.title} - bracelets`}
                className="category-img"
                loading="lazy"
              />
            </div>
          </>
        ) : (
          <div className="single-image-wrapper">
            <img
              src={category.images[0]}
              alt={category.alt}
              className="category-img"
              loading="lazy"
            />
          </div>
        )}
      </div>
      <div className="category-info">
        <h3 className="category-title">{category.title}</h3>
        <p className="category-gujarati gujarati-text">{category.gujaratiTitle}</p>
      </div>
    </a>
  );
};

export default CategoryCard;
