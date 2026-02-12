# Villaco Real Estate Limited - Luxury Real Estate Platform

A world-class luxury real estate platform inspired by ultra-premium brands like Sotheby's International Realty, designed for high-net-worth individuals, investors, and luxury property buyers.

## Overview

Villaco Real Estate Limited is a sophisticated, full-featured luxury real estate platform featuring:

- **Homepage** with cinematic hero, intelligent search, featured listings, lifestyle categories, and global reach
- **Property Listing Pages** with full-screen galleries, detailed information, interactive maps, and agent profiles
- **Advanced Search & Filters** with multiple criteria including price, bedrooms, property type, and lifestyle
- **Agent Profiles** showcasing expertise, certifications, and listings
- **About Page** with brand story, values, timeline, and recognition
- **Contact Page** with multi-office support and luxury inquiry forms
- **Admin Dashboard** for property and agent management with analytics

## Design System

### Typography
- **Headings**: Playfair Display (editorial serif) - luxury, elegance, editorial quality
- **Body Text**: Inter (modern sans-serif) - clean, readable, professional

### Color Palette
- **Primary**: `#1A1A1A` (Luxury Charcoal) - sophistication, trust
- **Background**: `#FAFAF8` (Soft White) - calm, premium
- **Secondary**: `#E8E4DC` (Warm Neutral) - warmth, elegance
- **Accent**: `#C9A860` (Muted Gold) - luxury, exclusivity
- **Text**: `#6B6B6B` (Luxury Stone) - refinement, subtlety

### Design Principles
- Large, cinematic photography
- Minimal UI chrome
- Generous white space
- Smooth micro-interactions
- Editorial-style layouts
- High-end, sophisticated aesthetic

## Technical Stack

### Frontend
- **React 18.3.1** with TypeScript
- **React Router DOM** for navigation
- **Tailwind CSS v4** for styling
- **Motion/React** for animations
- **Recharts** for data visualization
- **React Slick** for image carousels
- **Lucide React** for icons

### Backend Architecture (Design)
See `BACKEND_ARCHITECTURE.md` for complete backend specifications including:
- RESTful API structure
- Database schemas (PostgreSQL)
- Authentication (JWT)
- Property, Agent, and Inquiry management
- Advanced search with Elasticsearch
- Media upload and CDN integration
- Analytics and reporting

## Pages & Features

### 1. Homepage (`/`)
- Full-screen hero with cinematic property imagery
- Intelligent property search bar
- Featured property collection
- Lifestyle category exploration
- Global presence showcase
- Trust signals and awards
- Press mentions
- Call-to-action sections

### 2. Search Page (`/search`)
- Advanced filtering sidebar
  - Location search
  - Country selection
  - Price range
  - Bedrooms/bathrooms
  - Property type
  - Lifestyle tags
- Grid/list view toggle
- Sorting options
- Real-time filter results
- Responsive design

### 3. Property Listing Page (`/property/:id`)
- Full-screen image gallery with slider
- Comprehensive property details
- Price and specifications
- Features list
- Interactive map (mock)
- Agent profile card
- Private viewing scheduler
- Contact forms
- Similar properties

### 4. Agents Page (`/agents`)
- Agent directory
- Professional portraits
- Experience and credentials
- Contact information
- View profile links

### 5. Agent Profile Page (`/agent/:id`)
- Detailed agent biography
- Professional certifications
- Languages spoken
- Properties sold
- Experience timeline
- Contact options
- Agent's current listings

### 6. About Page (`/about`)
- Brand story and heritage
- Company values
- Timeline of milestones
- Statistics and achievements
- Awards and recognition
- Press features

### 7. Contact Page (`/contact`)
- Comprehensive inquiry form
- Multiple office locations
- Business hours
- 24/7 concierge service
- Direct contact information
- Privacy assurance

### 8. Admin Dashboard (`/admin`)
- Overview with key metrics
- Property management table
- Agent directory
- Inquiry management
- Analytics charts
  - Properties by type (pie chart)
  - Properties by country (bar chart)
- Recent activity feed
- Quick actions

## Mock Data

The application includes comprehensive mock data:
- **6 Properties** across various types (Villa, Penthouse, Estate, etc.)
- **3 Expert Agents** with detailed profiles
- **8 Global Locations** with property counts
- **Awards & Press** mentions
- Realistic pricing, images, and property details

## Key Features

### User Experience
- Smooth page transitions
- Hover effects and micro-interactions
- Responsive design (mobile, tablet, desktop)
- Grayscale-to-color image transitions
- Lazy loading and performance optimization
- Accessible navigation

### Property Features
- Multiple high-quality images
- Comprehensive property details
- Location mapping
- Lifestyle categorization
- Agent assignment
- Featured property designation

### Search & Discovery
- Multi-criteria filtering
- Live search results
- Property type filtering
- Price range selection
- Location-based search
- Lifestyle tag filtering

### Trust Building
- Professional agent profiles
- Company awards and recognition
- Press mentions
- Global presence indicators
- Years of experience
- Property transaction volumes

## Component Architecture

### Core Components
- `Navigation` - Fixed header with logo, menu, search, language
- `Footer` - Multi-column with offices, links, social media
- `PropertyCard` - Property preview with image, details, pricing
- `AgentCard` - Agent profile preview with contact info

### Page Components
- `HomePage` - Landing page with multiple sections
- `SearchPage` - Filter sidebar + results grid
- `PropertyListingPage` - Detailed property view
- `AgentProfilePage` - Agent details and listings
- `AgentsPage` - Agent directory
- `AboutPage` - Company information
- `ContactPage` - Contact forms and office info
- `AdminDashboard` - Admin panel with analytics

## Responsive Design

The platform is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1920px
- **Large Desktop**: > 1920px

Mobile-specific features:
- Collapsible navigation menu
- Stacked layouts
- Touch-friendly interactions
- Simplified filters
- Optimized image sizes

## Future Enhancements

1. **Backend Integration**: Connect to real API endpoints
2. **Authentication**: User login, agent portals, admin access
3. **Virtual Tours**: 360° property views
4. **Live Chat**: Real-time support
5. **Email Notifications**: Inquiry confirmations, updates
6. **Saved Searches**: User preferences and alerts
7. **Favorites**: Property wishlist
8. **Comparison Tool**: Side-by-side property comparison
9. **Mortgage Calculator**: Financial tools
10. **Multi-language**: International support
11. **Currency Converter**: Global pricing
12. **Video Integration**: Property video tours
13. **Blog/Magazine**: Luxury lifestyle content
14. **Events**: Property viewings and open houses
15. **Newsletter**: Subscription management

## Development

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation
```bash
npm install
# or
pnpm install
```

### Running the Application
```bash
npm run dev
# or
pnpm dev
```

### Building for Production
```bash
npm run build
# or
pnpm build
```

## API Integration

To connect to a real backend:

1. Create an `.env` file with API endpoints
2. Replace mock data imports with API calls
3. Implement authentication flow
4. Add error handling and loading states
5. Set up state management (Redux, Zustand, etc.)

See `BACKEND_ARCHITECTURE.md` for complete API specifications.

## Brand Identity

**Villaco Real Estate Limited** represents:
- **Excellence**: Curating only the finest properties
- **Discretion**: Privacy and confidentiality
- **Global Reach**: 45+ countries, 8 offices worldwide
- **Trust**: 25+ years of luxury real estate expertise
- **Sophistication**: Editorial quality and refined aesthetics

## License

Proprietary - Villaco Real Estate Limited © 2025

## Contact

For inquiries about this platform:
- Email: info@villacorealestate.com
- Phone: +44 20 7123 4567
- Address: 1 Mayfair Place, London W1J 8AJ, United Kingdom
