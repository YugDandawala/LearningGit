import React from 'react';
import SectionHeading from '../common/SectionHeading';
import ProductCard from './ProductCard';
import { products } from '../../data/products';
import './NewArrivals.css';

const NewArrivals: React.FC = () => {
  return (
    <section className="new-arrivals-section" aria-labelledby="arrivals-heading">
      <div className="container">
        <SectionHeading>
          <span id="arrivals-heading">New Arrivals</span>
        </SectionHeading>
        <div className="arrivals-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
