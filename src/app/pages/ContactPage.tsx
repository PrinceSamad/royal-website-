import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, CheckCircle, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { generateContactFormLink, openWhatsApp, WHATSAPP_BUSINESS_NUMBER } from '../utils/whatsappUtils';

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: 'real-estate',
    propertyInterest: '',
    oilGasProduct: '',
    message: '',
    contactPreference: 'email'
  });

  useEffect(() => {
    const product = searchParams.get('product');
    if (product) {
      setFormData(prev => ({
        ...prev,
        inquiryType: 'oil-gas',
        oilGasProduct: product
      }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Handle WhatsApp submission
    if (formData.contactPreference === 'whatsapp') {
      const whatsappLink = generateContactFormLink(formData);
      openWhatsApp(whatsappLink);
    }
    
    setFormSubmitted(true);
    
    // Reset after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        inquiryType: 'real-estate',
        propertyInterest: '',
        oilGasProduct: '',
        message: '',
        contactPreference: 'email'
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const offices = [
    {
      name: 'Headquarters - Abuja',
      address: 'Plot 123, Cadastral Zone\nMaitama District\nAbuja FCT, Nigeria',
      phone: '+234 806 140 8455',
      email: 'royalsheriumintlltd@gmail.com'
    },
    {
      name: 'Lagos Office',
      address: 'Victoria Island\nLagos State\nNigeria',
      phone: '+234 805 123 4567',
      email: 'lagos@royalsherium.com'
    },
    {
      name: 'Port Harcourt Office',
      address: 'GRA Phase 2\nPort Harcourt\nRivers State, Nigeria',
      phone: '+234 807 890 1234',
      email: 'portharcourt@royalsherium.com'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 max-w-[1920px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mb-6">
            Get In Touch
          </h1>
          <p className="text-lg text-[#6B6B6B] leading-relaxed">
            Whether you're looking to buy property, invest in real estate, or order petroleum products, 
            our team is ready to assist you. Contact us today or place your order directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl mb-6">Send Us a Message</h2>
            
            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 p-8 text-center">
                <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-600" />
                <h3 className="font-serif text-2xl text-green-800 mb-2">Thank You!</h3>
                <p className="text-green-700">
                  Your inquiry has been received. Our team will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type */}
                <div>
                  <label className="block text-sm font-medium mb-2">Inquiry Type *</label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#E8E4DC] focus:border-[#C9A860] focus:outline-none"
                  >
                    <option value="real-estate">Real Estate Inquiry</option>
                    <option value="oil-gas">Oil & Gas Order/Quote</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#E8E4DC] focus:border-[#C9A860] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#E8E4DC] focus:border-[#C9A860] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#E8E4DC] focus:border-[#C9A860] focus:outline-none"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+234 xxx xxx xxxx"
                    className="w-full px-4 py-3 border border-[#E8E4DC] focus:border-[#C9A860] focus:outline-none"
                  />
                </div>

                {/* Conditional Fields */}
                {formData.inquiryType === 'real-estate' && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Property Interest</label>
                    <select
                      name="propertyInterest"
                      value={formData.propertyInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E8E4DC] focus:border-[#C9A860] focus:outline-none"
                    >
                      <option value="">Select property type</option>
                      <option value="duplex">Duplex</option>
                      <option value="apartment">Apartment</option>
                      <option value="villa">Villa</option>
                      <option value="penthouse">Penthouse</option>
                      <option value="mansion">Mansion</option>
                      <option value="commercial">Commercial Property</option>
                    </select>
                  </div>
                )}

                {formData.inquiryType === 'oil-gas' && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Product/Service</label>
                    <input
                      type="text"
                      name="oilGasProduct"
                      value={formData.oilGasProduct}
                      onChange={handleChange}
                      placeholder="AGO, PMS, LPG, Crude Oil, etc."
                      className="w-full px-4 py-3 border border-[#E8E4DC] focus:border-[#C9A860] focus:outline-none"
                    />
                  </div>
                )}

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder={
                      formData.inquiryType === 'oil-gas'
                        ? 'Please specify quantity, delivery location, and any special requirements...'
                        : 'Tell us about your requirements...'
                    }
                    className="w-full px-4 py-3 border border-[#E8E4DC] focus:border-[#C9A860] focus:outline-none resize-none"
                  />
                </div>

                {/* Contact Preference */}
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Contact Method</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="contactPreference"
                        value="email"
                        checked={formData.contactPreference === 'email'}
                        onChange={handleChange}
                        className="text-[#C9A860] focus:ring-[#C9A860]"
                      />
                      <span className="text-sm">Email</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="contactPreference"
                        value="phone"
                        checked={formData.contactPreference === 'phone'}
                        onChange={handleChange}
                        className="text-[#C9A860] focus:ring-[#C9A860]"
                      />
                      <span className="text-sm">Phone</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="contactPreference"
                        value="whatsapp"
                        checked={formData.contactPreference === 'whatsapp'}
                        onChange={handleChange}
                        className="text-[#C9A860] focus:ring-[#C9A860]"
                      />
                      <span className="text-sm">WhatsApp</span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-[#1A1A1A] text-white py-4 hover:bg-[#C9A860] transition-colors"
                  >
                    {formData.contactPreference === 'whatsapp' 
                      ? (formData.inquiryType === 'oil-gas' ? 'Send via WhatsApp' : 'Send to WhatsApp') 
                      : (formData.inquiryType === 'oil-gas' ? 'Request Quote' : 'Send Inquiry')}
                  </button>
                  <a
                    href={`https://wa.me/${WHATSAPP_BUSINESS_NUMBER.replace(/\+/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-4 bg-green-600 text-white hover:bg-green-700 transition-colors flex items-center gap-2 justify-center"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Chat Now</span>
                  </a>
                </div>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-serif text-2xl md:text-3xl mb-6">Our Offices</h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="p-6 border border-[#E8E4DC] bg-white">
                    <h3 className="font-serif text-xl mb-4 text-[#C9A860]">{office.name}</h3>
                    <div className="space-y-3 text-[#6B6B6B]">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span className="whitespace-pre-line">{office.address}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 flex-shrink-0" />
                        <div className="flex items-center gap-2">
                          <a href={`tel:${office.phone}`} className="hover:text-[#C9A860]">
                            {office.phone}
                          </a>
                          <a
                            href={`https://wa.me/${office.phone.replace(/\D/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Chat via WhatsApp"
                            className="inline-flex items-center justify-center w-5 h-5 text-green-600 hover:text-green-700"
                          >
                            <MessageCircle className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 flex-shrink-0" />
                        <a href={`mailto:${office.email}`} className="hover:text-[#C9A860]">
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-6 bg-[#F9F7F4] border border-[#E8E4DC]">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-[#C9A860]" />
                <h3 className="font-serif text-xl">Business Hours</h3>
              </div>
              <div className="space-y-2 text-[#6B6B6B]">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="p-6 bg-[#1A1A1A] text-white">
              <h3 className="font-serif text-xl mb-4">24/7 Emergency Support</h3>
              <p className="text-white/70 mb-4 text-sm">
                For urgent oil & gas deliveries or critical property matters, our team is available round the clock.
              </p>
              <div className="flex gap-3">
                <a
                  href="tel:+2348061408455"
                  className="flex-1 text-center py-3 px-6 bg-[#C9A860] hover:bg-[#B8975A] transition-colors"
                >
                  Call Emergency Line
                </a>
                <a
                  href="https://wa.me/2348061408455?text=Emergency%20Support%20Needed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-3 px-6 bg-green-600 hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
