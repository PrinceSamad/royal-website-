# Villaco Real Estate Limited - Backend Architecture

## System Overview

This document outlines the backend architecture for the Villaco luxury real estate platform. The system is designed to be scalable, secure, and ready for global deployment.

## Technology Stack

- **API Framework**: Node.js with Express or Next.js API Routes
- **Database**: PostgreSQL with PostGIS for geospatial queries
- **Authentication**: JWT-based authentication with OAuth2.0 support
- **File Storage**: AWS S3 or similar for property images and documents
- **CDN**: CloudFront or Cloudflare for global content delivery
- **Search**: Elasticsearch for advanced property search
- **Email**: SendGrid or AWS SES for transactional emails
- **Caching**: Redis for session management and caching

## Database Schema

### Properties Table
```sql
CREATE TABLE properties (
  id UUID PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  location VARCHAR(255),
  city VARCHAR(100),
  country VARCHAR(100),
  coordinates GEOGRAPHY(POINT, 4326),
  price DECIMAL(15, 2),
  currency VARCHAR(3),
  bedrooms INTEGER,
  bathrooms INTEGER,
  area DECIMAL(10, 2),
  area_unit VARCHAR(10),
  property_type VARCHAR(50),
  agent_id UUID REFERENCES agents(id),
  featured BOOLEAN DEFAULT false,
  status VARCHAR(20) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Agents Table
```sql
CREATE TABLE agents (
  id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  title VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(50),
  bio TEXT,
  experience VARCHAR(50),
  profile_image_url TEXT,
  languages TEXT[],
  certifications TEXT[],
  properties_sold INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Property Media Table
```sql
CREATE TABLE property_media (
  id UUID PRIMARY KEY,
  property_id UUID REFERENCES properties(id) ON DELETE CASCADE,
  media_type VARCHAR(20), -- 'image', 'video', 'virtual_tour'
  url TEXT NOT NULL,
  order_index INTEGER,
  caption TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Inquiries Table
```sql
CREATE TABLE inquiries (
  id UUID PRIMARY KEY,
  property_id UUID REFERENCES properties(id),
  agent_id UUID REFERENCES agents(id),
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  country VARCHAR(100),
  message TEXT,
  status VARCHAR(20) DEFAULT 'new', -- 'new', 'in_progress', 'responded', 'closed'
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Users & Authentication Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255),
  role VARCHAR(20), -- 'admin', 'agent', 'super_admin'
  agent_id UUID REFERENCES agents(id),
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Locations Table
```sql
CREATE TABLE locations (
  id UUID PRIMARY KEY,
  country VARCHAR(100) NOT NULL,
  city VARCHAR(100),
  region VARCHAR(100),
  property_count INTEGER DEFAULT 0,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## API Endpoints

### Property Management API

#### Get All Properties
```
GET /api/properties
Query Parameters:
  - location (string): Filter by location
  - country (string): Filter by country
  - priceMin (number): Minimum price
  - priceMax (number): Maximum price
  - bedrooms (number): Minimum bedrooms
  - bathrooms (number): Minimum bathrooms
  - propertyType (string): Filter by type
  - lifestyle (string[]): Lifestyle tags
  - featured (boolean): Featured properties only
  - page (number): Page number
  - limit (number): Results per page

Response: {
  properties: Property[],
  total: number,
  page: number,
  totalPages: number
}
```

#### Get Property by ID
```
GET /api/properties/:id
Response: Property object with full details
```

#### Create Property (Admin/Agent)
```
POST /api/properties
Headers: Authorization: Bearer {token}
Body: Property object
Response: Created property
```

#### Update Property (Admin/Agent)
```
PUT /api/properties/:id
Headers: Authorization: Bearer {token}
Body: Partial property object
Response: Updated property
```

#### Delete Property (Admin)
```
DELETE /api/properties/:id
Headers: Authorization: Bearer {token}
Response: Success message
```

### Agent Management API

#### Get All Agents
```
GET /api/agents
Response: Agent[]
```

#### Get Agent by ID
```
GET /api/agents/:id
Response: Agent object with listings
```

#### Create Agent (Admin)
```
POST /api/agents
Headers: Authorization: Bearer {token}
Body: Agent object
Response: Created agent
```

#### Update Agent (Admin/Self)
```
PUT /api/agents/:id
Headers: Authorization: Bearer {token}
Body: Partial agent object
Response: Updated agent
```

### Search & Filtering API

#### Advanced Search
```
POST /api/search
Body: {
  query: string,
  filters: {
    location?: string,
    priceRange?: [number, number],
    bedrooms?: number,
    propertyType?: string,
    lifestyle?: string[]
  },
  sort?: string,
  page?: number,
  limit?: number
}
Response: {
  results: Property[],
  facets: object,
  total: number
}
```

#### Get Search Suggestions
```
GET /api/search/suggestions?q={query}
Response: string[]
```

### Inquiry Management API

#### Submit Inquiry
```
POST /api/inquiries
Body: {
  propertyId?: string,
  firstName: string,
  lastName: string,
  email: string,
  phone?: string,
  country?: string,
  message: string,
  propertyInterest?: string,
  priceRange?: string
}
Response: Inquiry object
```

#### Get All Inquiries (Admin/Agent)
```
GET /api/inquiries
Headers: Authorization: Bearer {token}
Query Parameters:
  - status (string): Filter by status
  - agentId (string): Filter by agent
  - page (number)
Response: Inquiry[]
```

#### Update Inquiry Status (Admin/Agent)
```
PUT /api/inquiries/:id/status
Headers: Authorization: Bearer {token}
Body: { status: string }
Response: Updated inquiry
```

### Authentication API

#### Login
```
POST /api/auth/login
Body: {
  email: string,
  password: string
}
Response: {
  token: string,
  user: User object
}
```

#### Refresh Token
```
POST /api/auth/refresh
Headers: Authorization: Bearer {refreshToken}
Response: { token: string }
```

#### Get Current User
```
GET /api/auth/me
Headers: Authorization: Bearer {token}
Response: User object
```

### Location API

#### Get All Countries
```
GET /api/locations/countries
Response: Location[]
```

#### Get Cities by Country
```
GET /api/locations/countries/:country/cities
Response: string[]
```

### Media Upload API

#### Upload Property Images
```
POST /api/media/upload
Headers: Authorization: Bearer {token}
Content-Type: multipart/form-data
Body: FormData with image files
Response: {
  urls: string[]
}
```

### Analytics API (Admin)

#### Get Dashboard Stats
```
GET /api/analytics/dashboard
Headers: Authorization: Bearer {token}
Response: {
  totalProperties: number,
  totalValue: number,
  totalAgents: number,
  newInquiries: number,
  propertyByType: object,
  propertyByCountry: object
}
```

## Security Measures

1. **JWT Authentication**: All protected endpoints require valid JWT tokens
2. **Rate Limiting**: Implement rate limiting to prevent abuse
3. **Input Validation**: Validate all input data using schemas (e.g., Joi, Zod)
4. **SQL Injection Prevention**: Use parameterized queries
5. **XSS Protection**: Sanitize user inputs
6. **CORS**: Configure CORS properly for allowed origins
7. **HTTPS Only**: All production traffic must use HTTPS
8. **Secrets Management**: Use environment variables for sensitive data
9. **Image Optimization**: Automatically optimize uploaded images
10. **Audit Logging**: Log all admin actions

## API Response Format

### Success Response
```json
{
  "success": true,
  "data": { /* response data */ }
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message",
    "details": { /* optional error details */ }
  }
}
```

## Deployment Architecture

```
                          [CloudFront CDN]
                                |
                          [Load Balancer]
                                |
                    +-----------+-----------+
                    |                       |
              [API Server 1]          [API Server 2]
                    |                       |
                    +-----------+-----------+
                                |
                          [PostgreSQL]
                          [Redis Cache]
                          [Elasticsearch]
```

## Environment Variables

```env
# Database
DATABASE_URL=postgresql://user:pass@host:5432/villaco

# Authentication
JWT_SECRET=your-secret-key
JWT_EXPIRY=24h
REFRESH_TOKEN_EXPIRY=7d

# AWS S3
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your-key
AWS_SECRET_ACCESS_KEY=your-secret
S3_BUCKET_NAME=villaco-media

# Email
SENDGRID_API_KEY=your-api-key
FROM_EMAIL=noreply@villacorealestate.com

# Redis
REDIS_URL=redis://localhost:6379

# Environment
NODE_ENV=production
API_URL=https://api.villacorealestate.com
FRONTEND_URL=https://villacorealestate.com
```

## Rate Limits

- Public API: 100 requests per 15 minutes per IP
- Authenticated Users: 1000 requests per 15 minutes
- Admin Users: 5000 requests per 15 minutes

## Caching Strategy

- Property listings: Cache for 5 minutes
- Individual properties: Cache for 15 minutes
- Agent profiles: Cache for 1 hour
- Location data: Cache for 24 hours
- Search results: Cache for 2 minutes

## Monitoring & Logging

- Use DataDog or New Relic for application monitoring
- CloudWatch for AWS infrastructure monitoring
- Sentry for error tracking
- ELK Stack for log aggregation

## Future Enhancements

1. GraphQL API for flexible querying
2. Webhook system for third-party integrations
3. Mobile app API endpoints
4. Real-time notifications via WebSockets
5. Machine learning for property recommendations
6. Blockchain integration for property transactions
7. Virtual tour API integration
8. Multi-language support
9. Currency conversion API
10. Property comparison feature
