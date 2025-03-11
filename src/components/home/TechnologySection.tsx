
import { motion } from "framer-motion";
import { Battery, Cpu, Gauge, Lock, Shield } from "lucide-react";
import { CustomButton } from "../ui/CustomButton";

const TechnologySection = () => {
  const technologies = [
    {
      icon: <Cpu size={32} className="text-gold-400" />,
      title: "Autonomous Driving",
      description: "Experience Level 3 autonomous driving capability with advanced AI and sensor fusion technology."
    },
    {
      icon: <Battery size={32} className="text-gold-400" />,
      title: "Electric Performance",
      description: "Cutting-edge electric powertrain delivering instant torque and exceptional range."
    },
    {
      icon: <Shield size={32} className="text-gold-400" />,
      title: "Advanced Safety",
      description: "Comprehensive active and passive safety systems for unparalleled protection."
    },
    {
      icon: <Gauge size={32} className="text-gold-400" />,
      title: "Hyperconnectivity",
      description: "Seamless integration with your digital ecosystem for an intuitive, personalized experience."
    },
    {
      icon: <Lock size={32} className="text-gold-400" />,
      title: "Biometric Security",
      description: "Multi-factor authentication including facial recognition and fingerprint sensors."
    }
  ];
  
  return (
    <section id="technology" className="py-24 bg-white">
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Revolutionary Technology</h2>
          <p className="section-subtitle">
            At the forefront of automotive innovation, our vehicles incorporate cutting-edge technologies 
            that elevate your driving experience to new heights.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Technology Cards */}
          <motion.div 
            className="grid gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {technologies.map((tech, index) => (
              <motion.div 
                key={tech.title}
                className="bg-luxury-50 p-6 rounded-xl shadow-sm border border-luxury-200 hover:border-gold-300 transition-all premium-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1
                }}
              >
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    {tech.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-luxury-900 mb-2">{tech.title}</h3>
                    <p className="text-luxury-600">{tech.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            <CustomButton variant="luxury" className="mt-6">
              Explore All Features
            </CustomButton>
          </motion.div>
          
          {/* Technology Image */}
          <motion.div 
            className="relative aspect-square"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-luxury-900 rounded-xl overflow-hidden transform rotate-3 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1592840062661-a5f6ef3f3fb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" 
                alt="Lovable Technology Dashboard"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="absolute inset-0 bg-luxury-900 rounded-xl overflow-hidden transform -rotate-3 shadow-xl transition-transform group-hover:rotate-0">
              <img 
                src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" 
                alt="Lovable Technology Interface"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
