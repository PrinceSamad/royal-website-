import { Link } from 'react-router-dom';
import { Mail, Phone, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Agent } from '../data/mockData';

interface AgentCardProps {
  agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <Link to={`/agent/${agent.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="group"
      >
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-[#F5F3EF] mb-4">
          <img
            src={agent.image}
            alt={agent.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="font-serif text-xl text-[#1A1A1A] group-hover:text-[#C9A860] transition-colors">
            {agent.name}
          </h3>
          <p className="text-sm text-[#6B6B6B]">{agent.title}</p>
          
          <div className="pt-2 space-y-1.5 text-sm text-[#6B6B6B]">
            <div className="flex items-center space-x-2">
              <Mail className="w-3.5 h-3.5" />
              <span className="truncate">{agent.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-3.5 h-3.5" />
              <span>{agent.phone}</span>
            </div>
          </div>

          <div className="pt-2 flex items-center text-sm text-[#C9A860] group-hover:translate-x-1 transition-transform">
            <span>View Profile</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
