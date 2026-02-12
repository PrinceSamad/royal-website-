import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Bed, Bath, Maximize, MapPin, Share2, Heart, Calendar, Mail, Phone } from 'lucide-react';
import Slider from 'react-slick';
import { motion } from 'motion/react';
import { properties, agents } from '../data/mockData';

export function PropertyListingPage() {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);
  const agent = property ? agents.find(a => a.id === property.agentId) : null;
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!property || !agent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl mb-4">Property Not Found</h1>
          <Link to="/" className="text-[#C9A860] hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (_current: number, next: number) => setCurrentSlide(next),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  function NextArrow(props: any) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white flex items-center justify-center transition-colors"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    );
  }

  function PrevArrow(props: any) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white flex items-center justify-center transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="pt-20">
      {/* Gallery */}
      <section className="relative h-[60vh] lg:h-[80vh] bg-[#1A1A1A]">
        <Slider {...sliderSettings} className="h-full">
          {property.images.map((image, index) => (
            <div key={index} className="h-[60vh] lg:h-[80vh]">
              <img
                src={image}
                alt={`${property.title} - Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
        
        {/* Actions Overlay */}
        <div className="absolute top-6 right-6 z-20 flex space-x-3">
          <button className="w-12 h-12 bg-white/90 hover:bg-white flex items-center justify-center transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 bg-white/90 hover:bg-white flex items-center justify-center transition-colors">
            <Heart className="w-5 h-5" />
          </button>
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-6 left-6 z-20 px-4 py-2 bg-black/60 backdrop-blur-sm text-white text-sm">
          {currentSlide + 1} / {property.images.length}
        </div>
      </section>

      {/* Property Details */}
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Header */}
            <div>
              <div className="flex items-center text-sm text-[#6B6B6B] mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{property.location}</span>
              </div>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-6">
                {property.title}
              </h1>
              <div className="text-3xl font-medium text-[#1A1A1A] mb-6">
                {formatPrice(property.price, property.currency)}
              </div>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 text-lg">
                <div className="flex items-center space-x-2">
                  <Bed className="w-5 h-5 text-[#C9A860]" />
                  <span>{property.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Bath className="w-5 h-5 text-[#C9A860]" />
                  <span>{property.bathrooms} Bathrooms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Maximize className="w-5 h-5 text-[#C9A860]" />
                  <span>{property.area} {property.areaUnit}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="border-t border-[#E8E4DC] pt-12">
              <h2 className="font-serif text-2xl mb-6">Description</h2>
              <p className="text-lg text-[#6B6B6B] leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Features */}
            <div className="border-t border-[#E8E4DC] pt-12">
              <h2 className="font-serif text-2xl mb-6">Property Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#C9A860] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[#6B6B6B]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Property Details Table */}
            <div className="border-t border-[#E8E4DC] pt-12">
              <h2 className="font-serif text-2xl mb-6">Property Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-[#6B6B6B] mb-1">Type</div>
                  <div className="text-[#1A1A1A]">{property.type}</div>
                </div>
                <div>
                  <div className="text-sm text-[#6B6B6B] mb-1">Location</div>
                  <div className="text-[#1A1A1A]">{property.city}, {property.state || property.country}</div>
                </div>
                <div>
                  <div className="text-sm text-[#6B6B6B] mb-1">Bedrooms</div>
                  <div className="text-[#1A1A1A]">{property.bedrooms}</div>
                </div>
                <div>
                  <div className="text-sm text-[#6B6B6B] mb-1">Bathrooms</div>
                  <div className="text-[#1A1A1A]">{property.bathrooms}</div>
                </div>
                <div>
                  <div className="text-sm text-[#6B6B6B] mb-1">Living Area</div>
                  <div className="text-[#1A1A1A]">{property.area} {property.areaUnit}</div>
                </div>
                <div>
                  <div className="text-sm text-[#6B6B6B] mb-1">Property ID</div>
                  <div className="text-[#1A1A1A]">{property.id.toUpperCase()}</div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="border-t border-[#E8E4DC] pt-12">
              <h2 className="font-serif text-2xl mb-6">Location</h2>
              <div className="aspect-video bg-[#F5F3EF] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-[#C9A860]" />
                  <p className="text-[#6B6B6B]">
                    {property.location}<br />
                    {property.city}, {property.country}
                  </p>
                  <p className="text-sm text-[#6B6B6B] mt-2">
                    Interactive map would be displayed here
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Agent Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-[#E8E4DC] p-6"
              >
                <h3 className="font-serif text-xl mb-6">Your Property Advisor</h3>
                
                <Link to={`/agent/${agent.id}`} className="block mb-6">
                  <div className="aspect-[3/4] overflow-hidden mb-4">
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <h4 className="font-serif text-lg mb-1 hover:text-[#C9A860] transition-colors">
                    {agent.name}
                  </h4>
                  <p className="text-sm text-[#6B6B6B]">{agent.title}</p>
                </Link>

                <div className="space-y-3 mb-6">
                  <a
                    href={`mailto:${agent.email}`}
                    className="flex items-center space-x-3 text-sm text-[#6B6B6B] hover:text-[#C9A860] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{agent.email}</span>
                  </a>
                  <a
                    href={`tel:${agent.phone}`}
                    className="flex items-center space-x-3 text-sm text-[#6B6B6B] hover:text-[#C9A860] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{agent.phone}</span>
                  </a>
                </div>

                <div className="space-y-3">
                  <button className="w-full py-3 bg-[#1A1A1A] text-white hover:bg-[#C9A860] transition-colors flex items-center justify-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Schedule Private Viewing</span>
                  </button>
                  <button className="w-full py-3 border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors">
                    Request Information
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-[#E8E4DC] text-xs text-[#6B6B6B]">
                  <p className="mb-2">Languages: {agent.languages.join(', ')}</p>
                  <p>{agent.experience} Experience</p>
                </div>
              </motion.div>

              {/* Lifestyle Tags */}
              {property.category.length > 0 && (
                <div className="bg-[#F5F3EF] p-6">
                  <h3 className="font-serif text-lg mb-4">Property Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {property.category.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-white text-sm text-[#6B6B6B]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Similar Properties */}
      <section className="py-20 bg-[#F5F3EF]">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-12">Similar Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {properties
              .filter(p => p.id !== property.id && p.country === property.country)
              .slice(0, 3)
              .map((prop) => (
                <Link key={prop.id} to={`/property/${prop.id}`} className="group">
                  <div className="aspect-[4/3] overflow-hidden bg-white mb-4">
                    <img
                      src={prop.images[0]}
                      alt={prop.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-xl mb-2 group-hover:text-[#C9A860] transition-colors">
                    {prop.title}
                  </h3>
                  <p className="text-[#6B6B6B] mb-2">{prop.location}</p>
                  <p className="text-lg font-medium">{formatPrice(prop.price, prop.currency)}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}