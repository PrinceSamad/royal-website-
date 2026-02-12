// WhatsApp Integration Utilities
// Main business WhatsApp number (Nigeria +234)
export const WHATSAPP_BUSINESS_NUMBER = '+2348061408455'; // +234 806 140 8455

/**
 * Generate WhatsApp message link
 * @param message - The message to send
 * @param phoneNumber - Optional custom phone number (default: business number)
 * @returns URL string for WhatsApp
 */
export const generateWhatsAppLink = (message: string, phoneNumber: string = WHATSAPP_BUSINESS_NUMBER): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

/**
 * Generate WhatsApp link for property inquiry
 */
export const generatePropertyInquiryLink = (propertyTitle: string, propertyPrice: string, propertyLocation: string): string => {
  const message = `Hello! I'm interested in the following property:\n\nProperty: ${propertyTitle}\nPrice: ${propertyPrice}\nLocation: ${propertyLocation}\n\nPlease provide more details.`;
  return generateWhatsAppLink(message);
};

/**
 * Generate WhatsApp link for oil/gas order
 */
export const generateOilGasOrderLink = (productName: string, quantity: string = ''): string => {
  let message = `Hello! I would like to place an order for:\n\nProduct: ${productName}`;
  if (quantity) {
    message += `\nQuantity: ${quantity}`;
  }
  message += `\n\nPlease provide pricing and delivery information.`;
  return generateWhatsAppLink(message);
};

/**
 * Generate WhatsApp link for contact form submission
 */
export const generateContactFormLink = (formData: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
  propertyInterest?: string;
  oilGasProduct?: string;
}): string => {
  let message = `New ${formData.inquiryType} Inquiry\n\n`;
  message += `Name: ${formData.firstName} ${formData.lastName}\n`;
  message += `Email: ${formData.email}\n`;
  message += `Phone: ${formData.phone}\n`;
  
  if (formData.inquiryType === 'real-estate' && formData.propertyInterest) {
    message += `Property Interest: ${formData.propertyInterest}\n`;
  } else if (formData.inquiryType === 'oil-gas' && formData.oilGasProduct) {
    message += `Product: ${formData.oilGasProduct}\n`;
  }
  
  message += `\nMessage:\n${formData.message}`;
  
  return generateWhatsAppLink(message);
};

/**
 * Open WhatsApp with a pre-filled message
 */
export const openWhatsApp = (link: string): void => {
  window.open(link, '_blank');
};
