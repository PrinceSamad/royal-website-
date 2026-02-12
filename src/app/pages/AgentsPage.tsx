import { motion } from 'motion/react';
import { AgentCard } from '../components/AgentCard';
import { agents } from '../data/mockData';

export function AgentsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 max-w-[1920px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mb-6">
            Our Team
          </h1>
          <p className="text-lg text-[#6B6B6B] leading-relaxed">
            Meet our principal consultant who oversees all aspects of our real estate and oil & gas operations, 
            bringing decades of expertise and commitment to excellence in serving our clients across Nigeria.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-12 max-w-2xl mx-auto">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Connect With Us
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Our team is ready to assist you with premium real estate opportunities and quality petroleum products
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-[#1A1A1A] hover:bg-[#C9A860] hover:text-white transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}