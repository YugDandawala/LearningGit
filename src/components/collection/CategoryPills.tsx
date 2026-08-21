import React from 'react';
import type { SubcategoryOption } from '../../data/collections';
import './CategoryPills.css';

interface CategoryPillsProps {
  subcategories: SubcategoryOption[];
  activeSubcategory: string;
  onSelectSubcategory: (id: string) => void;
}

const CategoryPills: React.FC<CategoryPillsProps> = ({
  subcategories,
  activeSubcategory,
  onSelectSubcategory,
}) => {
  return (
    <div className="category-pills-wrapper container">
      <div className="pills-container">
        {subcategories.map((sub) => {
          const isActive = activeSubcategory === sub.id;
          return (
            <button
              key={sub.id}
              className={`pill-btn ${isActive ? 'pill-active' : ''}`}
              onClick={() => onSelectSubcategory(sub.id)}
            >
              <span>{sub.name}</span>
              {sub.gujaratiName && sub.id !== 'all' && (
                <span className="pill-gujarati gujarati-text"> ({sub.gujaratiName})</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryPills;
