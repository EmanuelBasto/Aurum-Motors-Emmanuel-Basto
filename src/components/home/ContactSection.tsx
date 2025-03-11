
import { motion } from "framer-motion";
import { useState } from "react";
import { CalendarDays, Mail, MapPin, Phone } from "lucide-react";
import { CustomButton } from "../ui/CustomButton";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
    preferredModel: "Starlight"
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
      // Reset form after showing success message
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          message: "",
          preferredModel: "Starlight"
        });
      }, 5000);
    }, 1000);
  };
  
  const locations = [
    {
      city: "New York",
      address: "120 Fifth Avenue, New York, NY 10011",
      phone: "+1 (212) 555-0123"
    },
    {
      city: "Los Angeles",
      address: "8767 Wilshire Blvd, Beverly Hills, CA 90211",
      phone: "+1 (310) 555-0189"
    },
    {
      city: "Miami",
      address: "3550 Biscayne Blvd, Miami, FL 33137",
      phone: "+1 (305) 555-0201"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience Lovable</h2>
          <p className="section-subtitle">
            Schedule a personalized test drive or consultation at one of our exclusive showrooms. 
            Our luxury specialists are ready to provide you with an exceptional experience.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div 
            className="bg-luxury-50 rounded-2xl p-8 border border-luxury-200"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-luxury-900 mb-6">Schedule Your Test Drive</h3>
            
            {formSubmitted ? (
              <motion.div 
                className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-green-600 text-5xl mb-4">✓</div>
                <h4 className="text-xl font-bold text-green-800 mb-2">Thank You!</h4>
                <p className="text-green-700">
                  Your request has been submitted. A Lovable specialist will contact you shortly to confirm your appointment.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-luxury-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-luxury-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-luxury-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-luxury-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-luxury-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-luxury-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-luxury-700 mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-luxury-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="preferredModel" className="block text-sm font-medium text-luxury-700 mb-1">
                    Model of Interest
                  </label>
                  <select
                    id="preferredModel"
                    name="preferredModel"
                    value={formData.preferredModel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-luxury-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                  >
                    <option value="Starlight">Lovable Starlight</option>
                    <option value="Quantum">Lovable Quantum</option>
                    <option value="Eternity">Lovable Eternity</option>
                    <option value="Phantom">Lovable Phantom</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-luxury-700 mb-1">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-luxury-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                    placeholder="Please share any questions or specific requirements..."
                  />
                </div>
                
                <CustomButton variant="luxury" size="lg" className="w-full" type="submit">
                  Request Test Drive
                </CustomButton>
                
                <p className="text-sm text-luxury-500 mt-4 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            )}
          </motion.div>
          
          {/* Locations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-luxury-900 mb-6">Our Exclusive Showrooms</h3>
            
            <div className="grid gap-6 mb-8">
              {locations.map((location, index) => (
                <motion.div 
                  key={location.city}
                  className="bg-white p-6 rounded-xl shadow-sm border border-luxury-200 flex items-start gap-4 premium-hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1
                  }}
                >
                  <div className="mt-1">
                    <MapPin size={24} className="text-gold-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-luxury-900 text-lg mb-1">{location.city}</h4>
                    <p className="text-luxury-600 mb-2">{location.address}</p>
                    <div className="flex items-center text-luxury-700">
                      <Phone size={16} className="mr-2" />
                      <span>{location.phone}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Map */}
            <div className="rounded-xl overflow-hidden h-80 border border-luxury-200 shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343034!2d-74.00425908428784!3d40.741895643297335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sChelsea%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1659354756575!5m2!1sen!2suk" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Lovable Showroom Locations"
              />
            </div>
            
            {/* Contact Info */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-luxury-100 flex items-center justify-center">
                  <Phone size={20} className="text-luxury-900" />
                </div>
                <div>
                  <div className="text-sm text-luxury-600">Main Line</div>
                  <a href="tel:+18889997777" className="text-luxury-900 font-medium hover:text-gold-500 transition-colors">
                    +1 (888) 999-7777
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-luxury-100 flex items-center justify-center">
                  <Mail size={20} className="text-luxury-900" />
                </div>
                <div>
                  <div className="text-sm text-luxury-600">Email Us</div>
                  <a href="mailto:experience@lovable.com" className="text-luxury-900 font-medium hover:text-gold-500 transition-colors">
                    experience@lovable.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
