
import { motion } from "framer-motion";
import { CustomButton } from "../ui/CustomButton";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat gradient-overlay"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')" 
        }}
      />
      
      {/* Content */}
      <div className="container relative z-10 px-6 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-white max-w-4xl mx-auto"
        >
          <h4 className="mb-3 text-gold-400 text-lg md:text-xl tracking-wider uppercase">
            Experience Pure Luxury
          </h4>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow">
            Crafted for Perfection, <br />Engineered for Excellence
          </h1>
          <p className="mb-10 text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            Lovable creates automotive experiences that blend innovative technology 
            with uncompromising luxury and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <CustomButton variant="gold" size="lg">
                Explore Models
              </CustomButton>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <CustomButton variant="luxury" size="lg">
                Book Test Drive
              </CustomButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={() => document.getElementById('models')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-sm mb-2">Discover</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
