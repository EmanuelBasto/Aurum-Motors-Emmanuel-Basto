
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sliders } from "lucide-react";
import { CustomButton } from "../ui/CustomButton";
import { cn } from "@/lib/utils";

const ConfiguratorSection = () => {
  const [selectedCar, setSelectedCar] = useState("Starlight");
  const [selectedColor, setSelectedColor] = useState("Lunar Silver");
  const [selectedWheels, setSelectedWheels] = useState("19-inch Sport");
  const [selectedInterior, setSelectedInterior] = useState("Classic Black");
  const [selectedPackage, setSelectedPackage] = useState("Premium");
  
  const basePrice = 125000;
  const colorPrices = {
    "Lunar Silver": 0,
    "Phantom Black": 1200,
    "Crimson Red": 1800,
    "Ocean Blue": 1500,
    "Diamond White": 2000
  };
  
  const wheelPrices = {
    "19-inch Sport": 0,
    "20-inch Aero": 2400,
    "21-inch Carbon": 3800
  };
  
  const interiorPrices = {
    "Classic Black": 0,
    "Cream Leather": 3000,
    "Red Sport": 3500,
    "Walnut Luxury": 4200
  };
  
  const packagePrices = {
    "Standard": 0,
    "Premium": 8000,
    "Performance": 15000,
    "Ultimate": 25000
  };
  
  const calculateTotal = () => {
    const colorPrice = colorPrices[selectedColor as keyof typeof colorPrices];
    const wheelPrice = wheelPrices[selectedWheels as keyof typeof wheelPrices];
    const interiorPrice = interiorPrices[selectedInterior as keyof typeof interiorPrices];
    const packagePrice = packagePrices[selectedPackage as keyof typeof packagePrices];
    
    return basePrice + colorPrice + wheelPrice + interiorPrice + packagePrice;
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };
  
  const totalPrice = calculateTotal();
  
  const carImages = {
    "Starlight": "https://images.unsplash.com/photo-1617470702892-e01504a9a758?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    "Quantum": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    "Eternity": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    "Phantom": "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  };
  
  return (
    <section id="configurator" className="py-24 bg-luxury-900 text-white">
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Craft Your Perfection</h2>
          <p className="text-lg text-luxury-300 mb-0">
            Personalize every aspect of your Lovable to create a car that reflects your individual style and preferences.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Car Visualization */}
          <motion.div 
            className="relative rounded-xl overflow-hidden aspect-[4/3] bg-luxury-800"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src={carImages[selectedCar as keyof typeof carImages]}
                alt={`Lovable ${selectedCar} in ${selectedColor}`}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Price Tag */}
            <div className="absolute bottom-0 right-0 bg-luxury-900/90 backdrop-blur-sm px-6 py-4 border-t border-l border-luxury-700">
              <div className="text-lg font-medium">Your Configuration</div>
              <div className="text-3xl font-bold text-gold-400">
                {formatPrice(totalPrice)}
              </div>
            </div>
          </motion.div>
          
          {/* Configuration Options */}
          <motion.div 
            className="bg-luxury-800/60 backdrop-blur rounded-xl p-6 border border-luxury-700"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <Sliders size={24} className="text-gold-400 mr-3" />
              <h3 className="text-2xl font-bold">Configurator</h3>
            </div>
            
            {/* Model Selection */}
            <div className="mb-8">
              <h4 className="text-sm uppercase tracking-wider text-luxury-400 mb-3">Model</h4>
              <div className="flex flex-wrap gap-3">
                {["Starlight", "Quantum", "Eternity", "Phantom"].map((model) => (
                  <button
                    key={model}
                    onClick={() => setSelectedCar(model)}
                    className={cn(
                      "px-4 py-2 rounded-full transition-all",
                      selectedCar === model 
                        ? "bg-gold-400 text-luxury-900 font-medium"
                        : "bg-luxury-700 text-luxury-300 hover:bg-luxury-600"
                    )}
                  >
                    {model}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Exterior Color */}
            <div className="mb-8">
              <h4 className="text-sm uppercase tracking-wider text-luxury-400 mb-3">Exterior Color</h4>
              <div className="flex flex-wrap gap-4">
                {[
                  { name: "Lunar Silver", color: "bg-gray-300" },
                  { name: "Phantom Black", color: "bg-black" },
                  { name: "Crimson Red", color: "bg-crimson-500" },
                  { name: "Ocean Blue", color: "bg-blue-600" },
                  { name: "Diamond White", color: "bg-white" }
                ].map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center transition-all border-2",
                      color.color,
                      selectedColor === color.name 
                        ? "border-gold-400 scale-110" 
                        : "border-transparent hover:border-white/30"
                    )}
                    title={`${color.name} (+${formatPrice(colorPrices[color.name as keyof typeof colorPrices])})`}
                  >
                    {selectedColor === color.name && (
                      <Check size={16} className={color.name === "Diamond White" ? "text-black" : "text-white"} />
                    )}
                  </button>
                ))}
              </div>
              <div className="mt-2 text-sm text-luxury-400">
                {selectedColor} (+{formatPrice(colorPrices[selectedColor as keyof typeof colorPrices])})
              </div>
            </div>
            
            {/* Wheels */}
            <div className="mb-8">
              <h4 className="text-sm uppercase tracking-wider text-luxury-400 mb-3">Wheels</h4>
              <div className="flex flex-wrap gap-3">
                {Object.keys(wheelPrices).map((wheel) => (
                  <button
                    key={wheel}
                    onClick={() => setSelectedWheels(wheel)}
                    className={cn(
                      "px-4 py-2 rounded-full transition-all",
                      selectedWheels === wheel 
                        ? "bg-gold-400 text-luxury-900 font-medium"
                        : "bg-luxury-700 text-luxury-300 hover:bg-luxury-600"
                    )}
                  >
                    {wheel}
                  </button>
                ))}
              </div>
              <div className="mt-2 text-sm text-luxury-400">
                {selectedWheels} (+{formatPrice(wheelPrices[selectedWheels as keyof typeof wheelPrices])})
              </div>
            </div>
            
            {/* Interior */}
            <div className="mb-8">
              <h4 className="text-sm uppercase tracking-wider text-luxury-400 mb-3">Interior</h4>
              <div className="flex flex-wrap gap-3">
                {Object.keys(interiorPrices).map((interior) => (
                  <button
                    key={interior}
                    onClick={() => setSelectedInterior(interior)}
                    className={cn(
                      "px-4 py-2 rounded-full transition-all",
                      selectedInterior === interior 
                        ? "bg-gold-400 text-luxury-900 font-medium"
                        : "bg-luxury-700 text-luxury-300 hover:bg-luxury-600"
                    )}
                  >
                    {interior}
                  </button>
                ))}
              </div>
              <div className="mt-2 text-sm text-luxury-400">
                {selectedInterior} (+{formatPrice(interiorPrices[selectedInterior as keyof typeof interiorPrices])})
              </div>
            </div>
            
            {/* Package */}
            <div className="mb-8">
              <h4 className="text-sm uppercase tracking-wider text-luxury-400 mb-3">Package</h4>
              <div className="flex flex-wrap gap-3">
                {Object.keys(packagePrices).map((pkg) => (
                  <button
                    key={pkg}
                    onClick={() => setSelectedPackage(pkg)}
                    className={cn(
                      "px-4 py-2 rounded-full transition-all",
                      selectedPackage === pkg 
                        ? "bg-gold-400 text-luxury-900 font-medium"
                        : "bg-luxury-700 text-luxury-300 hover:bg-luxury-600"
                    )}
                  >
                    {pkg}
                  </button>
                ))}
              </div>
              <div className="mt-2 text-sm text-luxury-400">
                {selectedPackage} (+{formatPrice(packagePrices[selectedPackage as keyof typeof packagePrices])})
              </div>
            </div>
            
            {/* Summary & CTA */}
            <div className="mt-10 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg">Base Price:</span>
                <span className="text-lg font-medium">{formatPrice(basePrice)}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg">Options:</span>
                <span className="text-lg font-medium">{formatPrice(totalPrice - basePrice)}</span>
              </div>
              <div className="flex justify-between items-center mb-6 pt-4 border-t border-luxury-700">
                <span className="text-xl font-bold">Total Price:</span>
                <span className="text-xl font-bold text-gold-400">{formatPrice(totalPrice)}</span>
              </div>
              
              <CustomButton variant="gold" size="lg" className="w-full">
                Save Configuration
              </CustomButton>
              <div className="mt-3">
                <CustomButton variant="luxury" size="lg" className="w-full">
                  Schedule Test Drive
                </CustomButton>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConfiguratorSection;
