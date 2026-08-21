import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../../services/whatsappService';
import type { Product } from '../../data/products';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image-area">
        <img
          src={product.image}
          alt={product.alt}
          className="product-img"
          loading="lazy"
        />
        {/* WhatsApp inquiry overlay */}
        <div className={`product-inquiry ${isHovered ? 'product-inquiry-visible' : ''}`}>
          <a
            href={getWhatsAppUrl(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inquiry-btn"
            aria-label={`Inquire about ${product.name} on WhatsApp`}
          >
            <MessageCircle size={16} strokeWidth={1.5} />
            <span>Inquire on WhatsApp</span>
          </a>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-meta">
          <span className="product-price">{product.price}</span>
          {product.weight && (
            <span className="product-weight gujarati-text">{product.gujaratiMeta}</span>
          )}
        </div>
      </div>
      {/* Mobile WhatsApp link */}
      <a
        href={getWhatsAppUrl(product.name)}
        target="_blank"
        rel="noopener noreferrer"
        className="product-inquiry-mobile"
        aria-label={`Inquire about ${product.name} on WhatsApp`}
      >
        <MessageCircle size={14} strokeWidth={1.5} />
        Inquire
      </a>
    </div>
  );
};

export default ProductCard;
