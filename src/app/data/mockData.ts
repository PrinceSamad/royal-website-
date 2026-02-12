// Mock data for Royal Sherium International Ltd

export interface Property {
  id: string;
  title: string;
  location: string;
  state: string;
  city: string;
  price: number;
  currency: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  areaUnit: string;
  type: 'Villa' | 'Penthouse' | 'Estate' | 'Apartment' | 'Mansion' | 'Duplex' | 'Bungalow' | 'Commercial';
  category: string[];
  description: string;
  features: string[];
  images: string[];
  agentId: string;
  featured: boolean;
  coordinates: { lat: number; lng: number };
}

export interface OilGasProduct {
  id: string;
  name: string;
  category: 'Crude Oil' | 'Natural Gas' | 'Refined Products' | 'Lubricants' | 'Equipment';
  description: string;
  specifications: string[];
  price: number;
  currency: string;
  unit: string;
  minOrder: number;
  availability: 'In Stock' | 'Pre-Order' | 'On Request';
  images: string[];
  featured: boolean;
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  image: string;
  email: string;
  phone: string;
  languages: string[];
  certifications: string[];
  bio: string;
  experience: string;
  properties: number;
  department: 'Real Estate' | 'Oil & Gas' | 'Both';
}

export interface Location {
  state: string;
  cities: string[];
  propertyCount: number;
}

export const agents: Agent[] = [
  {
    id: 'agent-1',
    name: 'Prince Isah Umar',
    title: 'CEO & Principal Consultant - All Sectors',
    image: '/ceo-photo.png',
    email: 'royalsheriumintlltd@gmail.com',
    phone: '+234 806 140 8455',
    languages: ['English', 'Hausa', 'Yoruba'],
    certifications: ['MBA Business Administration', 'Oil & Gas Management Specialist', 'Real Estate Investment Professional', 'DPR Certified'],
    bio: 'Prince Isah Umar is the visionary founder and CEO of Royal Sherium International Ltd. With over 20 years of experience in both real estate development and oil & gas sectors, he has built the company into a leading force in Nigeria\'s commercial landscape. As the principal consultant for all sectors, Prince Isah Umar personally oversees both the real estate division and the oil & gas division, ensuring the highest standards of quality, integrity, and customer satisfaction. His strategic leadership, deep industry knowledge, and hands-on approach have driven exceptional growth and client satisfaction across all our business operations.',
    experience: '20+ years',
    properties: 250,
    department: 'Both'
  }
];

export const properties: Property[] = [
  {
    id: 'prop-1',
    title: 'Luxury 5-Bedroom Duplex with Pool',
    location: 'Lekki Phase 1, Lagos',
    state: 'Lagos',
    city: 'Lagos',
    price: 185000000,
    currency: '₦',
    bedrooms: 5,
    bathrooms: 6,
    area: 450,
    areaUnit: 'm²',
    type: 'Duplex',
    category: ['Waterfront', 'Luxury', 'Gated Estate'],
    description: 'An exquisite 5-bedroom duplex in the heart of Lekki Phase 1, featuring modern architecture, a private swimming pool, and 24-hour security. This property offers luxury living with proximity to shopping centers, international schools, and the beach.',
    features: [
      'Private swimming pool',
      'BQ for staff',
      'Fully fitted kitchen',
      'Spacious balconies',
      'Backup generator',
      'Solar panels',
      'Smart home features',
      'Ample parking space',
      '24/7 security',
      'Gym room'
    ],
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1080',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1080',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1080'
    ],
    agentId: 'agent-1',
    featured: true,
    coordinates: { lat: 6.4474, lng: 3.5406 }
  },
  {
    id: 'prop-2',
    title: 'Modern 4-Bedroom Terrace in Gated Estate',
    location: 'Maitama, Abuja',
    state: 'Abuja FCT',
    city: 'Abuja',
    price: 95000000,
    currency: '₦',
    bedrooms: 4,
    bathrooms: 5,
    area: 320,
    areaUnit: 'm²',
    type: 'Villa',
    category: ['Gated Estate', 'Modern', 'Family Home'],
    description: 'Beautiful 4-bedroom terrace house in a secure gated estate in Maitama, Abuja. Perfect for families, with excellent finishing, modern amenities, and access to estate facilities including playground, gym, and swimming pool.',
    features: [
      'Gated estate',
      'Estate swimming pool access',
      'Children\'s playground',
      'Gym facility',
      'BQ quarters',
      'Fitted kitchen',
      'Air conditioning',
      'Backup power',
      'Secure parking',
      'CCTV surveillance'
    ],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1080',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1080',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1080'
    ],
    agentId: 'agent-1',
    featured: true,
    coordinates: { lat: 9.0820, lng: 7.4951 }
  },
  {
    id: 'prop-3',
    title: 'Spacious 3-Bedroom Apartment with Sea View',
    location: 'Victoria Island, Lagos',
    state: 'Lagos',
    city: 'Lagos',
    price: 125000000,
    currency: '₦',
    bedrooms: 3,
    bathrooms: 4,
    area: 280,
    areaUnit: 'm²',
    type: 'Apartment',
    category: ['Luxury', 'Sea View', 'High-Rise'],
    description: 'Stunning 3-bedroom apartment on the 15th floor of a luxury high-rise building in Victoria Island. Enjoy panoramic views of the Atlantic Ocean, world-class amenities, and a prime location in Lagos\' most prestigious district.',
    features: [
      'Sea view from all rooms',
      'Concierge service',
      'Swimming pool',
      'Fitness center',
      'Underground parking',
      'Backup generator',
      'High-speed elevators',
      'Premium finishes',
      'Walk-in closets',
      'Smart home system'
    ],
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1080',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1080',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1080'
    ],
    agentId: 'agent-1',
    featured: true,
    coordinates: { lat: 6.4281, lng: 3.4219 }
  },
  {
    id: 'prop-4',
    title: 'Executive 6-Bedroom Mansion',
    location: 'Asokoro, Abuja',
    state: 'Abuja FCT',
    city: 'Abuja',
    price: 450000000,
    currency: '₦',
    bedrooms: 6,
    bathrooms: 8,
    area: 750,
    areaUnit: 'm²',
    type: 'Mansion',
    category: ['Luxury', 'Executive', 'Prime Location'],
    description: 'Magnificent 6-bedroom mansion in Asokoro, Abuja\'s most exclusive neighborhood. This architectural masterpiece features expansive living spaces, premium finishes, and sits on 2,000m² of landscaped grounds with security and privacy.',
    features: [
      'Grand entrance hall',
      'Home cinema',
      'Wine cellar',
      'Study/library',
      'Swimming pool',
      'Tennis court',
      '3 BQ apartments',
      'Landscaped gardens',
      'Security house',
      'Parking for 10 cars',
      'Central air conditioning',
      'Backup power plant'
    ],
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1080',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1080',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1080'
    ],
    agentId: 'agent-1',
    featured: true,
    coordinates: { lat: 9.0356, lng: 7.5252 }
  },
  {
    id: 'prop-5',
    title: 'Commercial Plaza - 10 Shops',
    location: 'Wuse Zone 5, Abuja',
    state: 'Abuja FCT',
    city: 'Abuja',
    price: 280000000,
    currency: '₦',
    bedrooms: 0,
    bathrooms: 12,
    area: 1200,
    areaUnit: 'm²',
    type: 'Commercial',
    category: ['Commercial', 'Investment', 'High Traffic'],
    description: 'Prime commercial property in bustling Wuse Zone 5. This plaza features 10 fully equipped shops across 2 floors, perfect for retail businesses, offices, or mixed use. High foot traffic area with excellent ROI potential.',
    features: [
      '10 commercial units',
      'Ample parking',
      'Generator house',
      '24/7 security',
      'Prime location',
      'High visibility',
      'Water storage',
      'Fire safety systems',
      'Elevator access',
      'Modern facade'
    ],
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1080',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1080',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1080'
    ],
    agentId: 'agent-1',
    featured: false,
    coordinates: { lat: 9.0643, lng: 7.4892 }
  },
  {
    id: 'prop-6',
    title: 'Waterfront 4-Bedroom Bungalow',
    location: 'Ikoyi, Lagos',
    state: 'Lagos',
    city: 'Lagos',
    price: 210000000,
    currency: '₦',
    bedrooms: 4,
    bathrooms: 5,
    area: 400,
    areaUnit: 'm²',
    type: 'Bungalow',
    category: ['Waterfront', 'Luxury', 'Exclusive'],
    description: 'Rare waterfront bungalow in Old Ikoyi with direct lagoon access. This elegant single-story home combines privacy, luxury, and breathtaking water views. Perfect for those seeking tranquility in the heart of Lagos.',
    features: [
      'Direct lagoon access',
      'Private jetty',
      'Large compound',
      'Swimming pool',
      'Garden and lawn',
      '2 BQ apartments',
      'Premium finishes',
      'Backup generator',
      'Solar power',
      'Security systems'
    ],
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1080',
      'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=1080',
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1080'
    ],
    agentId: 'agent-1',
    featured: false,
    coordinates: { lat: 6.4550, lng: 3.4296 }
  },
  {
    id: 'prop-7',
    title: '3-Bedroom Penthouse',
    location: 'GRA Ikeja, Lagos',
    state: 'Lagos',
    city: 'Lagos',
    price: 78000000,
    currency: '₦',
    bedrooms: 3,
    bathrooms: 4,
    area: 220,
    areaUnit: 'm²',
    type: 'Penthouse',
    category: ['Modern', 'City View', 'Premium'],
    description: 'Contemporary 3-bedroom penthouse in GRA Ikeja with stunning city views. Features modern design, high-quality finishes, and access to building amenities. Ideal for young professionals and small families.',
    features: [
      'Rooftop terrace',
      'City skyline views',
      'Modern kitchen',
      'Gym access',
      'Swimming pool',
      'Covered parking',
      'Elevator access',
      '24/7 power',
      'Security',
      'Storage room'
    ],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1080',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1080',
      'https://images.unsplash.com/photo-1574643156929-51fa098b0394?w=1080'
    ],
    agentId: 'agent-1',
    featured: false,
    coordinates: { lat: 6.5953, lng: 3.3439 }
  },
  {
    id: 'prop-8',
    title: '5-Bedroom Estate House',
    location: 'Port Harcourt, Rivers State',
    state: 'Rivers',
    city: 'Port Harcourt',
    price: 65000000,
    currency: '₦',
    bedrooms: 5,
    bathrooms: 6,
    area: 380,
    areaUnit: 'm²',
    type: 'Estate',
    category: ['Gated Estate', 'Family Home', 'Garden City'],
    description: 'Spacious 5-bedroom detached house in a secure gated estate in Port Harcourt. Well-designed with modern amenities, perfect for families relocating to the Garden City for business or lifestyle.',
    features: [
      'Gated estate security',
      'BQ apartment',
      'Spacious compound',
      'All rooms ensuite',
      'Modern kitchen',
      'Family lounge',
      'Guest toilet',
      'Generator',
      'Water supply',
      'Paved driveway'
    ],
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1080',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1080',
      'https://images.unsplash.com/photo-1600566752734-b2e58c1f10c9?w=1080'
    ],
    agentId: 'agent-1',
    featured: false,
    coordinates: { lat: 4.8156, lng: 7.0498 }
  }
];

export const oilGasProducts: OilGasProduct[] = [
  {
    id: 'og-1',
    name: 'Premium Bonny Light Crude Oil',
    category: 'Crude Oil',
    description: 'High-quality Bonny Light crude oil from Nigerian fields. API gravity 32-37°, low sulfur content, ideal for refining into premium petroleum products. Suitable for international export and domestic refining.',
    specifications: [
      'API Gravity: 32-37°',
      'Sulfur Content: < 0.2%',
      'Pour Point: -12°C',
      'Viscosity: 2.5-3.5 cSt',
      'Origin: Niger Delta',
      'Quality: Export Grade'
    ],
    price: 45000000,
    currency: '₦',
    unit: 'per 1000 barrels',
    minOrder: 10000,
    availability: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=1080',
      'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1080'
    ],
    featured: true
  },
  {
    id: 'og-2',
    name: 'Automotive Gas Oil (AGO/Diesel)',
    category: 'Refined Products',
    description: 'High-grade automotive gas oil suitable for diesel engines, generators, and industrial machinery. Meets all Nigerian DPR standards. Available in bulk quantities for commercial and industrial clients.',
    specifications: [
      'Cetane Number: 51 min',
      'Flash Point: 55°C min',
      'Sulfur: 50 ppm max',
      'Density: 820-870 kg/m³',
      'Color: Clear to light yellow',
      'Standard: DPR Approved'
    ],
    price: 850,
    currency: '₦',
    unit: 'per liter',
    minOrder: 10000,
    availability: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1545262810-77515befe149?w=1080',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1080'
    ],
    featured: true
  },
  {
    id: 'og-3',
    name: 'Premium Motor Spirit (PMS/Petrol)',
    category: 'Refined Products',
    description: 'Premium quality motor spirit for automotive engines. Clean-burning, high-octane fuel meeting international standards. Available for bulk purchase by filling stations and corporate clients.',
    specifications: [
      'Octane Rating: RON 91 min',
      'Lead Content: < 0.013 g/L',
      'Sulfur: 150 ppm max',
      'Benzene: 1% max',
      'RVP: 60 kPa max',
      'Standard: DPR/SON Certified'
    ],
    price: 720,
    currency: '₦',
    unit: 'per liter',
    minOrder: 33000,
    availability: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=1080',
      'https://images.unsplash.com/photo-1628744448839-686b6e50db23?w=1080'
    ],
    featured: true
  },
  {
    id: 'og-4',
    name: 'Liquefied Petroleum Gas (LPG)',
    category: 'Natural Gas',
    description: 'Clean-burning LPG for cooking, heating, and industrial applications. Safe, efficient, and environmentally friendly alternative to kerosene and firewood. Available in various cylinder sizes.',
    specifications: [
      'Composition: Propane/Butane mix',
      'Purity: 95% min',
      'Vapor Pressure: 7-8 bar',
      'Calorific Value: 46 MJ/kg',
      'Packaging: 3kg, 6kg, 12.5kg, 50kg',
      'Certification: SON Approved'
    ],
    price: 650,
    currency: '₦',
    unit: 'per kg',
    minOrder: 100,
    availability: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1080',
      'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1080'
    ],
    featured: false
  },
  {
    id: 'og-5',
    name: 'Industrial Lubricating Oil',
    category: 'Lubricants',
    description: 'High-performance industrial lubricants for machinery, engines, and equipment. Reduces friction, prevents wear, and extends equipment lifespan. Various grades available.',
    specifications: [
      'Viscosity Grade: SAE 40, 50',
      'Flash Point: 210°C min',
      'Pour Point: -9°C max',
      'TBN: 10 mg KOH/g',
      'Application: Industrial/Automotive',
      'Packaging: 5L, 25L, 208L drums'
    ],
    price: 4500,
    currency: '₦',
    unit: 'per liter',
    minOrder: 100,
    availability: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1080',
      'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1080'
    ],
    featured: false
  },
  {
    id: 'og-6',
    name: 'Natural Gas (PNG)',
    category: 'Natural Gas',
    description: 'Piped natural gas for power generation, industrial processes, and commercial use. Clean energy solution with lower emissions. Long-term supply contracts available.',
    specifications: [
      'Methane Content: 95% min',
      'Heating Value: 38-40 MJ/m³',
      'Pressure: 25-50 bar',
      'Sulfur: < 10 ppm',
      'Supply: Continuous pipeline',
      'Certification: DPR Licensed'
    ],
    price: 350,
    currency: '₦',
    unit: 'per SCM',
    minOrder: 1000,
    availability: 'On Request',
    images: [
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1080',
      'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1080'
    ],
    featured: false
  }
];

export const locations: Location[] = [
  { state: 'Lagos', cities: ['Victoria Island', 'Lekki', 'Ikoyi', 'Ikeja GRA', 'Banana Island'], propertyCount: 156 },
  { state: 'Abuja FCT', cities: ['Maitama', 'Asokoro', 'Wuse', 'Jabi', 'Gwarinpa'], propertyCount: 124 },
  { state: 'Rivers', cities: ['Port Harcourt', 'GRA Phase 2', 'Old GRA'], propertyCount: 45 },
  { state: 'Oyo', cities: ['Ibadan', 'Bodija', 'Jericho'], propertyCount: 32 },
  { state: 'Kano', cities: ['Kano', 'Nassarawa', 'Bompai'], propertyCount: 28 },
  { state: 'Enugu', cities: ['Enugu', 'Independence Layout', 'GRA'], propertyCount: 23 }
];

export const awards = [
  'Best Real Estate Company Nigeria 2024',
  'Excellence in Oil & Gas Distribution 2024',
  'Nigerian Property Awards Winner',
  'DPR Certified Partner',
  'Customer Service Excellence Award'
];

export const press = [
  { publication: 'BusinessDay Nigeria', title: 'Leading Nigeria\'s Real Estate Revolution' },
  { publication: 'The Guardian Nigeria', title: 'Excellence in Property Development' },
  { publication: 'Vanguard News', title: 'Top Oil & Gas Distributor' },
  { publication: 'ThisDay Live', title: 'Commitment to Quality and Service' }
];