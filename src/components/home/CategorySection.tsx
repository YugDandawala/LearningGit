import React from 'react';
import SectionHeading from '../common/SectionHeading';
import CategoryCard from './CategoryCard';
import { categories } from '../../data/categories';
import './CategorySection.css';

const CategorySection: React.FC = () => {
  return (
    <section className="category-section" aria-labelledby="category-heading">
      <div className="container">
        <SectionHeading>
          <span id="category-heading">Discover By OM</span>
        </SectionHeading>
        <div className="category-grid">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
