
import { motion } from "framer-motion";
import { CustomButton } from "./CustomButton";
import { useRef, useState } from "react";

interface CarCardProps {
  model: {
    name: string;
    image: string;
    price: string;
    specs: {
      horsepower: string;
      acceleration: string;
      topSpeed: string;
      range?: string;
    }
  }
}

const CarCard = ({ model }: CarCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  return (
    <motion.div 
      className="relative rounded-xl overflow-hidden group"
      ref={cardRef}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Car Image */}
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={model.image} 
          alt={model.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform group-hover:scale-105"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300">
        <div className="absolute bottom-0 w-full p-6 flex flex-col">
          {/* Car Info */}
          <div className="flex justify-between items-end mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white">{model.name}</h3>
              <p className="text-gold-400 font-medium">Starting at {model.price}</p>
            </div>
            <CustomButton variant="gold" size="sm">
              Learn More
            </CustomButton>
          </div>
          
          {/* Specs (revealed on hover) */}
          <motion.div 
            className="grid grid-cols-4 gap-2 text-white text-sm"
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              height: isHovered ? 'auto' : 0 
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-2 rounded">
              <span className="text-gray-300 text-xs">Horsepower</span>
              <span className="font-semibold">{model.specs.horsepower}</span>
            </div>
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-2 rounded">
              <span className="text-gray-300 text-xs">0-60 mph</span>
              <span className="font-semibold">{model.specs.acceleration}</span>
            </div>
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-2 rounded">
              <span className="text-gray-300 text-xs">Top Speed</span>
              <span className="font-semibold">{model.specs.topSpeed}</span>
            </div>
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-2 rounded">
              <span className="text-gray-300 text-xs">Range</span>
              <span className="font-semibold">{model.specs.range || "N/A"}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;
