import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../../services/whatsappService';
import './WhatsAppButton.css';

interface WhatsAppButtonProps {
  productName?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ productName }) => {
  return (
    <a
      href={getWhatsAppUrl(productName)}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-floating-btn"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <span className="whatsapp-pulse" />
      <MessageCircle size={26} strokeWidth={2} />
    </a>
  );
};

export default WhatsAppButton;
