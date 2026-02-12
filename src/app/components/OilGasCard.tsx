import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Package, TrendingUp, MessageCircle } from 'lucide-react';
import { OilGasProduct } from '../data/mockData';
import { generateOilGasOrderLink, openWhatsApp } from '../utils/whatsappUtils';

interface OilGasCardProps {
  product: OilGasProduct;
}

export function OilGasCard({ product }: OilGasCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group bg-white border border-black/5 overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {product.featured && (
          <div className="absolute top-4 left-4 bg-[#C9A860] text-white px-3 py-1 text-xs tracking-wide">
            FEATURED
          </div>
        )}
        <div className={`absolute top-4 right-4 px-3 py-1 text-xs tracking-wide ${
          product.availability === 'In Stock' 
            ? 'bg-green-600 text-white' 
            : product.availability === 'Pre-Order'
            ? 'bg-orange-500 text-white'
            : 'bg-gray-600 text-white'
        }`}>
          {product.availability}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <div className="flex items-center space-x-2 mb-2">
          <Package className="w-4 h-4 text-[#C9A860]" />
          <span className="text-xs text-[#6B6B6B] tracking-wide">{product.category}</span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl mb-2 text-[#1A1A1A] group-hover:text-[#C9A860] transition-colors">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#6B6B6B] mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Specifications - Top 3 */}
        <div className="mb-4 space-y-1">
          {product.specifications.slice(0, 3).map((spec, index) => (
            <div key={index} className="text-xs text-[#6B6B6B] flex items-center">
              <span className="w-1 h-1 bg-[#C9A860] rounded-full mr-2"></span>
              {spec}
            </div>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="border-t border-black/5 pt-4 flex items-center justify-between">
          <div>
            <div className="text-sm text-[#6B6B6B] mb-1">Price</div>
            <div className="font-serif text-2xl text-[#1A1A1A]">
              {product.currency}{formatPrice(product.price)}
              <span className="text-sm text-[#6B6B6B] font-sans">/{product.unit}</span>
            </div>
            <div className="text-xs text-[#6B6B6B] mt-1">
              Min. Order: {formatPrice(product.minOrder)} {product.unit}
            </div>
          </div>

          <div className="flex gap-2">
            <Link
              to={`/contact?product=${encodeURIComponent(product.name)}`}
              className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-[#1A1A1A] text-white hover:bg-[#C9A860] transition-colors"
            >
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm">Quote</span>
            </Link>
            <button
              onClick={(e) => {
                e.preventDefault();
                const whatsappLink = generateOilGasOrderLink(product.name);
                openWhatsApp(whatsappLink);
              }}
              className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-green-600 text-white hover:bg-green-700 transition-colors"
              title="Order this product via WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">WhatsApp</span>
            </button>
          </div>        </div>
      </div>
    </motion.div>
  );
}