/**
 * Central WhatsApp Service Configuration
 */
export const WHATSAPP_CONFIG = {
  // Central WhatsApp number for Khushbu Gold Palace
  phoneNumber: '919999999999',
  defaultMessage: 'Hello Khushbu Gold Palace! I would like to inquire about today\'s gold rates and jewelry collections.',
};

/**
 * Generate WhatsApp inquiry URL for a product with full details
 */
export function getWhatsAppProductUrl(
  name: string,
  purity?: string,
  weight?: number | string
): string {
  const purityText = purity ? `${purity} BIS Hallmarked` : '22K BIS Hallmarked';
  const weightText = weight ? `Approx. ${weight} grams` : '';

  const message = `Hello Khushbu Gold Palace,\nI am interested in:\n${name}\n${purityText}\n${weightText}\n\nPlease share today's price and availability.`;

  return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Backward compatible getter
 */
export function getWhatsAppUrl(productName?: string): string {
  if (!productName) return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(WHATSAPP_CONFIG.defaultMessage)}`;
  return getWhatsAppProductUrl(productName);
}
