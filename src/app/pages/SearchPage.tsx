import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, Grid3x3, List, X } from 'lucide-react';
import { motion } from 'motion/react';
import { PropertyCard } from '../components/PropertyCard';
import { properties } from '../data/mockData';

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(true);
  
  // Filter states
  const [searchLocation, setSearchLocation] = useState('');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [category, setCategory] = useState<string[]>([]);
  const [state, setState] = useState('');

  const categoryOptions = [
    'Waterfront',
    'Luxury',
    'Gated Estate',
    'Modern',
    'Family Home',
    'Executive',
    'Commercial',
    'Investment',
    'Sea View',
    'City View'
  ];

  const states = ['Lagos', 'Abuja FCT', 'Rivers', 'Oyo', 'Kano', 'Enugu'];

  useEffect(() => {
    // Read URL parameters
    const location = searchParams.get('location') || searchParams.get('q');
    const price = searchParams.get('price');
    const type = searchParams.get('type');
    
    if (location) setSearchLocation(location);
    if (type) setPropertyType(type);
    if (price) {
      const [min, max] = price.split('-');
      if (min) setPriceMin(min);
      if (max && max !== '+') setPriceMax(max);
    }
  }, [searchParams]);

  // Simple filtering logic
  const filteredProperties = properties.filter(property => {
    if (searchLocation && !property.location.toLowerCase().includes(searchLocation.toLowerCase()) &&
        !property.state.toLowerCase().includes(searchLocation.toLowerCase()) &&
        !property.city.toLowerCase().includes(searchLocation.toLowerCase())) {
      return false;
    }
    if (priceMin && property.price < parseInt(priceMin)) return false;
    if (priceMax && property.price > parseInt(priceMax)) return false;
    if (bedrooms && property.bedrooms < parseInt(bedrooms)) return false;
    if (bathrooms && property.bathrooms < parseInt(bathrooms)) return false;
    if (propertyType && property.type.toLowerCase() !== propertyType.toLowerCase()) return false;
    if (state && property.state !== state) return false;
    if (category.length > 0) {
      const hasCategory = category.some(c => 
        property.category.some(pc => pc.toLowerCase().includes(c.toLowerCase()))
      );
      if (!hasCategory) return false;
    }
    return true;
  });

  const toggleCategory = (option: string) => {
    setCategory(prev =>
      prev.includes(option)
        ? prev.filter(c => c !== option)
        : [...prev, option]
    );
  };

  const clearFilters = () => {
    setSearchLocation('');
    setPriceMin('');
    setPriceMax('');
    setBedrooms('');
    setBathrooms('');
    setPropertyType('');
    setCategory([]);
    setState('');
    setSearchParams({});
  };

  return (
    <div className="pt-20 min-h-screen bg-[#FAFAF8]">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
            Property Search
          </h1>
          <p className="text-lg text-[#6B6B6B]">
            {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} available
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className={`lg:w-80 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white border border-[#E8E4DC] p-6 space-y-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-xl">Filters</h2>
                <button
                  onClick={clearFilters}
                  className="text-sm text-[#C9A860] hover:underline"
                >
                  Clear All
                </button>
              </div>

              {/* Search Location */}
              <div>
                <label className="block text-sm font-medium mb-2">Location</label>
                <input
                  type="text"
                  placeholder="Search by location..."
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full px-4 py-2 border border-[#E8E4DC] focus:border-[#C9A860] focus:outline-none"
                />
              </div>

              {/* State Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">State</label>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full px-4 py-2 border border-[#E8E4DC] focus:border-[#C9A860] focus:outline-none"
                >
                  <option value="">All States</option>
                  {states.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium mb-2">Price Range (₦)</label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceMin}
                    onChange={(e) => setPriceMin(e.target.value)}
                    className="px-4 py-2 border border-[#E8E4DC] focus:border-[#C9A860] focus:outline-none"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceMax}
                    onChange={(e) => setPriceMax(e.target.value)}
                    className="px-4 py-2 border border-[#E8E4DC] focus:border-[#C9A860] focus:outline-none"
                  />
                </div>
                <div className="mt-2 space-y-1 text-xs text-[#6B6B6B]">
                  <button onClick={() => { setPriceMin(''); setPriceMax('50000000'); }} className="block hover:text-[#C9A860]">Under ₦50M</button>
                  <button onClick={() => { setPriceMin('50000000'); setPriceMax('100000000'); }} className="block hover:text-[#C9A860]">₦50M - ₦100M</button>
                  <button onClick={() => { setPriceMin('100000000'); setPriceMax('200000000'); }} className="block hover:text-[#C9A860]">₦100M - ₦200M</button>
                  <button onClick={() => { setPriceMin('200000000'); setPriceMax(''); }} className="block hover:text-[#C9A860]">₦200M+</button>
                </div>
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-sm font-medium mb-2">Property Type</label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-4 py-2 border border-[#E8E4DC] focus:border-[#C9A860] focus:outline-none"
                >
                  <option value="">All Types</option>
                  <option value="duplex">Duplex</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="penthouse">Penthouse</option>
                  <option value="mansion">Mansion</option>
                  <option value="bungalow">Bungalow</option>
                  <option value="estate">Estate</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>

              {/* Bedrooms */}
              <div>
                <label className="block text-sm font-medium mb-2">Min. Bedrooms</label>
                <select
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                  className="w-full px-4 py-2 border border-[#E8E4DC] focus:border-[#C9A860] focus:outline-none"
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                  <option value="6">6+</option>
                </select>
              </div>

              {/* Bathrooms */}
              <div>
                <label className="block text-sm font-medium mb-2">Min. Bathrooms</label>
                <select
                  value={bathrooms}
                  onChange={(e) => setBathrooms(e.target.value)}
                  className="w-full px-4 py-2 border border-[#E8E4DC] focus:border-[#C9A860] focus:outline-none"
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium mb-3">Property Features</label>
                <div className="space-y-2">
                  {categoryOptions.map((option) => (
                    <label key={option} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={category.includes(option)}
                        onChange={() => toggleCategory(option)}
                        className="w-4 h-4 border-[#E8E4DC] text-[#C9A860] focus:ring-[#C9A860]"
                      />
                      <span className="text-sm text-[#6B6B6B]">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1">
            {/* Controls */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center space-x-2 px-4 py-2 border border-[#E8E4DC] hover:border-[#C9A860] transition-colors"
              >
                {showFilters ? <X className="w-5 h-5" /> : <SlidersHorizontal className="w-5 h-5" />}
                <span>{showFilters ? 'Hide' : 'Show'} Filters</span>
              </button>

              <div className="flex items-center space-x-2 ml-auto">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 border ${viewMode === 'grid' ? 'border-[#C9A860] text-[#C9A860]' : 'border-[#E8E4DC]'}`}
                >
                  <Grid3x3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 border ${viewMode === 'list' ? 'border-[#C9A860] text-[#C9A860]' : 'border-[#E8E4DC]'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Properties Grid */}
            {filteredProperties.length > 0 ? (
              <motion.div
                layout
                className={viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'
                  : 'space-y-6'
                }
              >
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-20">
                <p className="text-lg text-[#6B6B6B] mb-4">No properties found matching your criteria.</p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-[#1A1A1A] text-white hover:bg-[#C9A860] transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
