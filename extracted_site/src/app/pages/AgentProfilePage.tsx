import { useParams, Link } from 'react-router-dom';
import { Mail, Phone, Globe2, Award, ChevronLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { agents, properties } from '../data/mockData';
import { PropertyCard } from '../components/PropertyCard';

export function AgentProfilePage() {
  const { id } = useParams();
  const agent = agents.find(a => a.id === id);
  const agentProperties = agent ? properties.filter(p => p.agentId === agent.id) : [];

  if (!agent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl mb-4">Agent Not Found</h1>
          <Link to="/" className="text-[#C9A860] hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Back Button */}
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 py-6">
        <Link
          to="/agents"
          className="inline-flex items-center text-[#6B6B6B] hover:text-[#C9A860] transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          <span>Back to Agents</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-[1920px] mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-[3/4] overflow-hidden bg-[#F5F3EF]"
          >
            <img
              src={agent.image}
              alt={agent.name}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <div className="text-sm tracking-wide text-[#C9A860] mb-3">
                {agent.title.toUpperCase()}
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mb-6">
                {agent.name}
              </h1>
              <div className="flex items-center space-x-6 text-[#6B6B6B] mb-8">
                <div>
                  <div className="text-2xl font-serif text-[#1A1A1A]">{agent.properties}</div>
                  <div className="text-sm">Properties Sold</div>
                </div>
                <div className="w-px h-12 bg-[#E8E4DC]" />
                <div>
                  <div className="text-2xl font-serif text-[#1A1A1A]">{agent.experience}</div>
                  <div className="text-sm">Experience</div>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-[#6B6B6B] leading-relaxed">
                {agent.bio}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 border-t border-[#E8E4DC] pt-8">
              <a
                href={`mailto:${agent.email}`}
                className="flex items-center space-x-3 text-[#6B6B6B] hover:text-[#C9A860] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{agent.email}</span>
              </a>
              <a
                href={`tel:${agent.phone}`}
                className="flex items-center space-x-3 text-[#6B6B6B] hover:text-[#C9A860] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{agent.phone}</span>
              </a>
            </div>

            {/* Languages */}
            <div className="border-t border-[#E8E4DC] pt-8">
              <div className="flex items-center space-x-3 mb-3">
                <Globe2 className="w-5 h-5 text-[#C9A860]" />
                <h3 className="font-medium">Languages</h3>
              </div>
              <p className="text-[#6B6B6B]">{agent.languages.join(', ')}</p>
            </div>

            {/* Certifications */}
            <div className="border-t border-[#E8E4DC] pt-8">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="w-5 h-5 text-[#C9A860]" />
                <h3 className="font-medium">Certifications</h3>
              </div>
              <ul className="space-y-2">
                {agent.certifications.map((cert, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#C9A860] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[#6B6B6B]">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <a
                href={`mailto:${agent.email}`}
                className="flex-1 text-center px-6 py-4 bg-[#1A1A1A] text-white hover:bg-[#C9A860] transition-colors"
              >
                Contact {agent.name.split(' ')[0]}
              </a>
              <Link
                to="/contact"
                className="flex-1 text-center px-6 py-4 border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors"
              >
                Schedule Meeting
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agent's Listings */}
      {agentProperties.length > 0 && (
        <section className="py-20 bg-[#F5F3EF]">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-12">
              Properties by {agent.name.split(' ')[0]}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {agentProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
