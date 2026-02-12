import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { Filter, X } from 'lucide-react';
import { oilGasProducts, OilGasProduct } from '../data/mockData';
import { OilGasCard } from '../components/OilGasCard';

export function OilGasPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<OilGasProduct[]>(oilGasProducts);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedAvailability, setSelectedAvailability] = useState<string>('all');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const categories = ['all', 'Crude Oil', 'Natural Gas', 'Refined Products', 'Lubricants', 'Equipment'];
  const availabilityOptions = ['all', 'In Stock', 'Pre-Order', 'On Request'];

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      const categoryMap: { [key: string]: string } = {
        crude: 'Crude Oil',
        gas: 'Natural Gas',
        refined: 'Refined Products',
        lubricants: 'Lubricants',
        equipment: 'Equipment'
      };
      setSelectedCategory(categoryMap[category] || 'all');
    }
  }, [searchParams]);

  useEffect(() => {
    let filtered = oilGasProducts;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (selectedAvailability !== 'all') {
      filtered = filtered.filter(product => product.availability === selectedAvailability);
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedAvailability]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category !== 'all') {
      const categoryKey = category.toLowerCase().replace(/\s+/g, '');
      setSearchParams({ category: categoryKey });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-[#F9F7F4]">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=1920"
            alt="Oil and Gas"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-5xl md:text-7xl text-white mb-6"
            >
              Oil & Gas Division
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed"
            >
              Premium petroleum products and natural gas solutions for commercial and industrial clients across Nigeria
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filters Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="lg:hidden w-full flex items-center justify-between px-4 py-3 bg-white border border-black/10 mb-4"
            >
              <span className="flex items-center space-x-2">
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </span>
              {mobileFiltersOpen ? <X className="w-5 h-5" /> : <Filter className="w-5 h-5" />}
            </button>

            {/* Filters */}
            <div className={`space-y-8 ${mobileFiltersOpen ? 'block' : 'hidden lg:block'}`}>
              {/* Category Filter */}
              <div className="bg-white p-6 border border-black/5">
                <h3 className="font-serif text-lg mb-4 text-[#1A1A1A]">Product Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        selectedCategory === category
                          ? 'bg-[#1A1A1A] text-white'
                          : 'bg-gray-50 text-[#6B6B6B] hover:bg-gray-100'
                      }`}
                    >
                      {category === 'all' ? 'All Products' : category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Availability Filter */}
              <div className="bg-white p-6 border border-black/5">
                <h3 className="font-serif text-lg mb-4 text-[#1A1A1A]">Availability</h3>
                <div className="space-y-2">
                  {availabilityOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => setSelectedAvailability(option)}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        selectedAvailability === option
                          ? 'bg-[#1A1A1A] text-white'
                          : 'bg-gray-50 text-[#6B6B6B] hover:bg-gray-100'
                      }`}
                    >
                      {option === 'all' ? 'All' : option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-[#1A1A1A] text-white p-6">
                <h3 className="font-serif text-lg mb-4">Need Assistance?</h3>
                <p className="text-sm text-white/70 mb-4">
                  Contact our oil & gas specialists for bulk orders, custom requirements, or technical support.
                </p>
                <a
                  href="tel:+2348034567890"
                  className="block w-full text-center px-4 py-3 bg-[#C9A860] text-white hover:bg-[#B8975A] transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-serif text-3xl text-[#1A1A1A]">
                  {selectedCategory === 'all' ? 'All Products' : selectedCategory}
                </h2>
                <p className="text-sm text-[#6B6B6B] mt-2">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} available
                </p>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <OilGasCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-lg text-[#6B6B6B]">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#1A1A1A] text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="font-serif text-4xl mb-6">Ready to Place Your Order?</h2>
          <p className="text-lg text-white/70 mb-8">
            Contact us today for competitive pricing, bulk discounts, and reliable delivery across Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-[#C9A860] text-white hover:bg-[#B8975A] transition-colors text-center"
            >
              Request a Quote
            </a>
            <a
              href="tel:+2348034567890"
              className="px-8 py-4 border border-white text-white hover:bg-white hover:text-[#1A1A1A] transition-colors text-center"
            >
              Call: +234 803 456 7890
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
