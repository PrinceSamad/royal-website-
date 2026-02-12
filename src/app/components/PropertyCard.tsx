import { Link } from 'react-router-dom';
import { Bed, Bath, Maximize, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { Property } from '../data/mockData';
import { generatePropertyInquiryLink, openWhatsApp } from '../utils/whatsappUtils';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = (price: number, currency: string) => {
    if (currency === '₦') {
      return `₦${new Intl.NumberFormat('en-NG', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(price)}`;
    }
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    return formatter.format(price);
  };

  return (
    <Link to={`/property/${property.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="group cursor-pointer"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F3EF] mb-4">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {property.featured && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-[#C9A860] text-white text-xs tracking-wider">
              FEATURED
            </div>
          )}
          <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-[#1A1A1A] text-xs tracking-wider">
            {property.type.toUpperCase()}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3">
          {/* Location */}
          <div className="flex items-center text-sm text-[#6B6B6B]">
            <MapPin className="w-3.5 h-3.5 mr-1.5" />
            <span>{property.location}</span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-xl text-[#1A1A1A] group-hover:text-[#C9A860] transition-colors">
            {property.title}
          </h3>

          {/* Price */}
          <div className="text-lg font-medium text-[#1A1A1A]">
            {formatPrice(property.price, property.currency)}
          </div>

          {/* Details */}
          <div className="flex items-center space-x-4 text-sm text-[#6B6B6B]">
            <div className="flex items-center space-x-1.5">
              <Bed className="w-4 h-4" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Bath className="w-4 h-4" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Maximize className="w-4 h-4" />
              <span>{property.area} {property.areaUnit}</span>
            </div>
          </div>

          {/* Lifestyle Tags */}
          {property.category.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {property.category.slice(0, 2).map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 border border-[#E8E4DC] text-[#6B6B6B]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* WhatsApp Inquiry Button */}
          <div className="pt-3 border-t border-[#E8E4DC] flex items-center gap-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                const whatsappLink = generatePropertyInquiryLink(
                  property.title,
                  formatPrice(property.price, property.currency),
                  property.location
                );
                openWhatsApp(whatsappLink);
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-green-600 text-white text-xs hover:bg-green-700 transition-colors"
              title="Inquire about this property via WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire Now</span>
            </button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}