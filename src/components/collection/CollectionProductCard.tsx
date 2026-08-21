import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppProductUrl } from '../../services/whatsappService';
import type { CollectionProduct } from '../../data/collectionProducts';
import './CollectionProductCard.css';

interface CollectionProductCardProps {
  product: CollectionProduct;
}

const CollectionProductCard: React.FC<CollectionProductCardProps> = ({ product }) => {
  const whatsappUrl = getWhatsAppProductUrl(
    product.name,
    product.purity,
    product.weight
  );

  const purityLabel = product.purity === '92.5' 
    ? '92.5 Sterling Silver'
    : `${product.purity} BIS Hallmarked`;

  return (
    <div className="collection-product-card">
      <div className="card-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="card-image"
          loading="lazy"
        />
        <span className="purity-badge">{purityLabel}</span>
      </div>

      <div className="card-details">
        <h3 className="product-title-en">{product.name}</h3>
        {product.gujaratiName && (
          <p className="product-title-gu gujarati-text">{product.gujaratiName}</p>
        )}
        <p className="product-weight-text">Approx. {product.weight} grams</p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-inquire-btn"
          aria-label={`Inquire price for ${product.name} on WhatsApp`}
        >
          <MessageCircle size={15} strokeWidth={2} />
          <span>Inquire Today's Price</span>
        </a>
      </div>
    </div>
  );
};

export default CollectionProductCard;
