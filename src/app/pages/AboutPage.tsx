import { motion } from 'motion/react';
import { Award, TrendingUp, Users, Building2, Shield, Droplet } from 'lucide-react';
import { awards, press, agents } from '../data/mockData';
import ceoImage from '/src/assets/0c18fc1e706c9d509b2b4e0a9c3ecca88e090e80.png';

export function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Integrity & Trust',
      description: 'We conduct business with honesty, transparency, and the highest ethical standards, earning the trust of our clients across Nigeria.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Our commitment to excellence drives us to deliver premium properties and quality petroleum products that exceed expectations.'
    },
    {
      icon: Building2,
      title: 'Quality Assurance',
      description: 'Every property and product we offer meets strict quality standards, ensuring value and satisfaction for our clients.'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'We prioritize understanding and meeting our clients\' unique needs with personalized service and dedicated support.'
    }
  ];

  const timeline = [
    { year: '2004', event: 'Company Founded', description: 'Royal Sherium International Ltd established by Prince Isah Umar in Abuja' },
    { year: '2008', event: 'Oil & Gas Division', description: 'Expanded into petroleum products distribution and natural gas supply' },
    { year: '2015', event: 'DPR Certification', description: 'Obtained full DPR licensing for oil and gas operations across Nigeria' },
    { year: '2019', event: 'National Expansion', description: 'Opened offices in Lagos and Port Harcourt, serving clients nationwide' },
    { year: '2024', event: 'Market Leadership', description: 'Recognized as one of Nigeria\'s most trusted real estate and energy companies' }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920"
            alt="About Royal Sherium"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
        </div>
        <div className="relative h-full max-w-[1920px] mx-auto px-6 lg:px-12 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              Building Nigeria's Future
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-white/90">
              Since 2004, Royal Sherium International Ltd has been a trusted partner for premium real estate 
              and quality petroleum products across Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-32 max-w-[1920px] mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 text-[#1A1A1A]">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-[#6B6B6B] leading-relaxed">
              <p>
                Founded by <strong className="text-[#1A1A1A]">Prince Isah Umar</strong> in 2004, Royal Sherium International Ltd 
                began with a simple vision: to provide Nigerians with access to premium real estate opportunities and 
                reliable energy solutions. What started as a small real estate consultancy in Abuja has grown into 
                one of Nigeria's most respected companies in both property development and petroleum distribution.
              </p>
              <p>
                Our journey reflects Nigeria's own growth story. As the nation expanded, so did we—opening offices 
                in Lagos and Port Harcourt, earning our DPR certification for oil and gas operations, and building 
                a portfolio of premium properties across major Nigerian cities. Today, we serve hundreds of satisfied 
                clients, from individual homebuyers to large commercial enterprises.
              </p>
              <p>
                Under Prince Isah Umar's leadership, our company has maintained an unwavering commitment to quality, integrity, 
                and customer satisfaction. Whether helping a family find their dream home in Lekki or ensuring timely 
                delivery of petroleum products to industrial clients, we approach every transaction with the same dedication 
                to excellence.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif text-[#C9A860] mb-2">20+</div>
              <div className="text-sm text-[#6B6B6B]">Years of Service</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif text-[#C9A860] mb-2">500+</div>
              <div className="text-sm text-[#6B6B6B]">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif text-[#C9A860] mb-2">₦45B+</div>
              <div className="text-sm text-[#6B6B6B]">Property Value</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif text-[#C9A860] mb-2">3</div>
              <div className="text-sm text-[#6B6B6B]">Office Locations</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Divisions */}
      <section className="py-20 lg:py-32 bg-[#F9F7F4]">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4 text-[#1A1A1A]">
              Our Business Divisions
            </h2>
            <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
              Comprehensive solutions for real estate and energy needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 border border-[#E8E4DC]"
            >
              <Building2 className="w-12 h-12 text-[#C9A860] mb-4" />
              <h3 className="font-serif text-2xl mb-4">Real Estate Division</h3>
              <p className="text-[#6B6B6B] mb-4">
                Premium properties across Nigeria including luxury duplexes, apartments, villas, and commercial spaces. 
                We specialize in Lagos, Abuja, and Port Harcourt properties.
              </p>
              <ul className="space-y-2 text-sm text-[#6B6B6B]">
                <li>• Residential Property Sales</li>
                <li>• Commercial Real Estate</li>
                <li>• Property Management</li>
                <li>• Investment Consulting</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 border border-[#E8E4DC]"
            >
              <Droplet className="w-12 h-12 text-[#C9A860] mb-4" />
              <h3 className="font-serif text-2xl mb-4">Oil & Gas Division</h3>
              <p className="text-[#6B6B6B] mb-4">
                Quality petroleum products and natural gas distribution for commercial and industrial clients. 
                Fully licensed by DPR with reliable nationwide delivery.
              </p>
              <ul className="space-y-2 text-sm text-[#6B6B6B]">
                <li>• Premium Motor Spirit (PMS)</li>
                <li>• Automotive Gas Oil (AGO)</li>
                <li>• Liquefied Petroleum Gas (LPG)</li>
                <li>• Industrial Lubricants</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 max-w-[1920px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4 text-[#1A1A1A]">
            Our Core Values
          </h2>
          <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-8 border border-[#E8E4DC] hover:border-[#C9A860] transition-colors"
            >
              <value.icon className="w-12 h-12 mx-auto mb-4 text-[#C9A860]" />
              <h3 className="font-serif text-xl mb-3">{value.title}</h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-32 bg-[#1A1A1A] text-white">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Two decades of growth, innovation, and service to Nigeria
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-6 border-l-2 border-[#C9A860] pl-6 pb-8 last:pb-0"
              >
                <div className="flex-shrink-0 w-20 text-right">
                  <div className="text-2xl font-serif text-[#C9A860]">{item.year}</div>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-serif text-xl mb-2">{item.event}</h3>
                  <p className="text-white/70">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 lg:py-32 max-w-[1920px] mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4 text-[#1A1A1A]">
              Our Team
            </h2>
            <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
              Meet the leadership behind Royal Sherium International Ltd
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-[#E8E4DC] p-12"
          >
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* CEO Image */}
                <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-[#C9A860]">
                  <img 
                    src={ceoImage} 
                    alt="Prince Isah Umar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* CEO Details */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-serif text-3xl mb-2 text-[#1A1A1A]">Prince Isah Umar</h3>
                  <p className="text-[#C9A860] text-lg mb-1">CEO & Principal Consultant</p>
                  <p className="text-[#6B6B6B] text-sm mb-4">Real Estate & Oil & Gas Sectors</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      <span className="px-3 py-1 bg-[#F9F7F4] text-xs text-[#1A1A1A] border border-[#E8E4DC]">
                        MBA Business Administration
                      </span>
                      <span className="px-3 py-1 bg-[#F9F7F4] text-xs text-[#1A1A1A] border border-[#E8E4DC]">
                        Oil & Gas Specialist
                      </span>
                      <span className="px-3 py-1 bg-[#F9F7F4] text-xs text-[#1A1A1A] border border-[#E8E4DC]">
                        Real Estate Professional
                      </span>
                      <span className="px-3 py-1 bg-[#F9F7F4] text-xs text-[#1A1A1A] border border-[#E8E4DC]">
                        DPR Certified
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-[#6B6B6B] leading-relaxed">
                    {agents[0].bio}
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-[#E8E4DC] flex flex-wrap gap-4 justify-center md:justify-start">
                    <div className="text-center">
                      <div className="text-2xl font-serif text-[#C9A860]">20+</div>
                      <div className="text-xs text-[#6B6B6B]">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-serif text-[#C9A860]">250+</div>
                      <div className="text-xs text-[#6B6B6B]">Properties Managed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-serif text-[#C9A860]">Both</div>
                      <div className="text-xs text-[#6B6B6B]">Sectors</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex gap-4 justify-center md:justify-start">
                    <a 
                      href={`mailto:${agents[0].email}`}
                      className="px-6 py-2 border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors text-sm"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 lg:py-32 bg-[#F9F7F4]">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4 text-[#1A1A1A]">
              Awards & Recognition
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-6 py-4 border border-[#E8E4DC] bg-white"
              >
                {award}
              </motion.div>
            ))}
          </div>

          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl mb-8">Featured In</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {press.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-lg font-medium text-[#1A1A1A] mb-1">
                  {item.publication}
                </div>
                <div className="text-sm text-[#6B6B6B]">
                  "{item.title}"
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}