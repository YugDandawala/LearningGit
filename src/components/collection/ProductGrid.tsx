import React from 'react';
import CollectionProductCard from './CollectionProductCard';
import type { CollectionProduct } from '../../data/collectionProducts';
import './ProductGrid.css';

interface ProductGridProps {
  products: CollectionProduct[];
  onClearFilters?: () => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onClearFilters }) => {
  if (products.length === 0) {
    return (
      <div className="product-grid-empty container">
        <p className="empty-text">No designs found matching your selected filters.</p>
        {onClearFilters && (
          <button className="btn-primary" onClick={onClearFilters}>
            Clear All Filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="product-grid-container container">
      <div className="collection-product-grid">
        {products.map((product) => (
          <CollectionProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
