import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ChevronRight, Award, MapPin, TrendingUp, Building2, Droplet } from 'lucide-react';
import { motion } from 'motion/react';
import { PropertyCard } from '../components/PropertyCard';
import { OilGasCard } from '../components/OilGasCard';
import { properties, oilGasProducts, locations, awards, press } from '../data/mockData';

export function HomePage() {
  const [searchLocation, setSearchLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const navigate = useNavigate();

  const featuredProperties = properties.filter(p => p.featured).slice(0, 3);
  const featuredOilGas = oilGasProducts.filter(p => p.featured).slice(0, 3);

  const businessCategories = [
    {
      title: 'Luxury Real Estate',
      description: 'Premium properties across Nigeria',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1080',
      link: '/search',
      icon: Building2,
      count: properties.length
    },
    {
      title: 'Oil & Gas Products',
      description: 'Quality petroleum products & natural gas',
      image: 'https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=1080',
      link: '/oil-gas',
      icon: Droplet,
      count: oilGasProducts.length
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchLocation) params.append('location', searchLocation);
    if (priceRange) params.append('price', priceRange);
    if (propertyType) params.append('type', propertyType);
    navigate(`/search?${params.toString()}`);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-5rem)] min-h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920"
            alt="Royal Sherium International"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
        </div>

        <div className="relative h-full max-w-[1920px] mx-auto px-6 lg:px-12 flex flex-col justify-end pb-16 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white mb-6 leading-tight">
              Excellence in Real Estate<br />& Oil & Gas Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              Nigeria's trusted partner for premium properties and quality petroleum products
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/95 backdrop-blur-sm p-6 md:p-8 max-w-5xl"
          >
            <form onSubmit={handleSearch}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-1">
                  <label className="block text-xs tracking-wide text-[#6B6B6B] mb-2">LOCATION</label>
                  <input
                    type="text"
                    placeholder="Lagos, Abuja, Port Harcourt..."
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="w-full px-4 py-3 border border-[#E8E4DC] focus:border-[#C9A860] focus:outline-none transition-colors"
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-xs tracking-wide text-[#6B6B6B] mb-2">PRICE RANGE</label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-4 py-3 border border-[#E8E4DC] focus:border-[#C9A860] focus:outline-none transition-colors"
                  >
                    <option value="">Any Price</option>
                    <option value="0-50000000">Under ₦50M</option>
                    <option value="50000000-100000000">₦50M - ₦100M</option>
                    <option value="100000000-200000000">₦100M - ₦200M</option>
                    <option value="200000000-500000000">₦200M - ₦500M</option>
                    <option value="500000000+">₦500M+</option>
                  </select>
                </div>
                <div className="md:col-span-1">
                  <label className="block text-xs tracking-wide text-[#6B6B6B] mb-2">PROPERTY TYPE</label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full px-4 py-3 border border-[#E8E4DC] focus:border-[#C9A860] focus:outline-none transition-colors"
                  >
                    <option value="">All Types</option>
                    <option value="duplex">Duplex</option>
                    <option value="apartment">Apartment</option>
                    <option value="villa">Villa</option>
                    <option value="penthouse">Penthouse</option>
                    <option value="mansion">Mansion</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>
                <div className="md:col-span-1 flex items-end">
                  <button
                    type="submit"
                    className="w-full bg-[#1A1A1A] text-white px-6 py-3 flex items-center justify-center space-x-2 hover:bg-[#C9A860] transition-colors"
                  >
                    <Search className="w-5 h-5" />
                    <span>Search</span>
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Business Categories */}
      <section className="py-20 lg:py-32 max-w-[1920px] mx-auto px-6 lg:px-12 bg-[#F9F7F4]">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-4">
            Our Business Divisions
          </h2>
          <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
            Comprehensive solutions for real estate and energy needs across Nigeria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {businessCategories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="group relative aspect-[4/3] overflow-hidden bg-white border border-black/5"
            >
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/80" />
              </div>
              <div className="relative h-full flex flex-col justify-end p-8 text-white">
                <category.icon className="w-12 h-12 mb-4 text-[#C9A860]" />
                <h3 className="font-serif text-3xl md:text-4xl mb-2">{category.title}</h3>
                <p className="text-white/80 mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm">{category.count}+ Products/Properties</span>
                  <ChevronRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 lg:py-32 max-w-[1920px] mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-4">
              Featured Properties
            </h2>
            <p className="text-lg text-[#6B6B6B]">
              Premium real estate opportunities across Nigeria
            </p>
          </div>
          <Link
            to="/search"
            className="hidden md:flex items-center space-x-2 text-[#C9A860] hover:translate-x-1 transition-transform"
          >
            <span>View All</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            to="/search"
            className="inline-flex items-center space-x-2 text-[#C9A860] hover:translate-x-1 transition-transform"
          >
            <span>View All Properties</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Oil & Gas Products */}
      <section className="py-20 lg:py-32 bg-[#F9F7F4]">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-4">
                Oil & Gas Products
              </h2>
              <p className="text-lg text-[#6B6B6B]">
                Quality petroleum products for commercial and industrial needs
              </p>
            </div>
            <Link
              to="/oil-gas"
              className="hidden md:flex items-center space-x-2 text-[#C9A860] hover:translate-x-1 transition-transform"
            >
              <span>View All</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {featuredOilGas.map((product) => (
              <OilGasCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link
              to="/oil-gas"
              className="inline-flex items-center space-x-2 text-[#C9A860] hover:translate-x-1 transition-transform"
            >
              <span>View All Products</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Nigerian Locations */}
      <section className="py-20 lg:py-32 max-w-[1920px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-4">
            Our Coverage Across Nigeria
          </h2>
          <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
            Serving clients with premium properties in Nigeria's major cities and commercial centers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 border border-[#E8E4DC] hover:border-[#C9A860] transition-colors group cursor-pointer"
            >
              <MapPin className="w-8 h-8 mx-auto mb-4 text-[#C9A860]" />
              <h3 className="font-serif text-xl mb-2 group-hover:text-[#C9A860] transition-colors">
                {location.state}
              </h3>
              <p className="text-sm text-[#6B6B6B] mb-1">
                {location.propertyCount} Properties
              </p>
              <p className="text-xs text-[#6B6B6B]">
                {location.cities.slice(0, 2).join(', ')}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-20 lg:py-32 bg-[#1A1A1A] text-white">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
              Trusted Excellence Since 2004
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Building Nigeria's future through quality real estate and reliable energy solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-[#C9A860]" />
              <div className="text-4xl font-serif mb-2">20+</div>
              <div className="text-white/70">Years of Excellence</div>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-[#C9A860]" />
              <div className="text-4xl font-serif mb-2">₦45B+</div>
              <div className="text-white/70">Property Value Sold</div>
            </div>
            <div className="text-center">
              <Building2 className="w-12 h-12 mx-auto mb-4 text-[#C9A860]" />
              <div className="text-4xl font-serif mb-2">500+</div>
              <div className="text-white/70">Satisfied Clients</div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-12">
            <div className="text-center mb-8">
              <h3 className="font-serif text-2xl mb-6">Awards & Recognition</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="px-6 py-3 border border-white/20 text-sm text-white/80"
                >
                  {award}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="py-20 lg:py-32 max-w-[1920px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-4">
            In The Press
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {press.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-lg font-medium text-[#1A1A1A] mb-2">
                {item.publication}
              </div>
              <div className="text-sm text-[#6B6B6B]">
                "{item.title}"
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-[#F9F7F4]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-[#6B6B6B] mb-8 max-w-2xl mx-auto">
            Whether you're looking for your dream property or need quality petroleum products, we're here to serve you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#1A1A1A] text-white hover:bg-[#C9A860] transition-colors"
            >
              Contact Us Today
            </Link>
            <Link
              to="/search"
              className="px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors"
            >
              Browse Properties
            </Link>
            <Link
              to="/oil-gas"
              className="px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors"
            >
              View Oil & Gas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
