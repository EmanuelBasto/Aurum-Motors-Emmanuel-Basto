
import { motion } from "framer-motion";
import CarCard from "../ui/CarCard";

const ModelsSection = () => {
  const carModels = [
    {
      name: "Lovable Starlight",
      image: "https://images.unsplash.com/photo-1617470702892-e01504a9a758?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      price: "$125,000",
      specs: {
        horsepower: "490 HP",
        acceleration: "3.9s",
        topSpeed: "168 mph",
        range: "310 miles"
      }
    },
    {
      name: "Lovable Quantum",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      price: "$175,000",
      specs: {
        horsepower: "670 HP",
        acceleration: "2.8s",
        topSpeed: "198 mph",
        range: "290 miles"
      }
    },
    {
      name: "Lovable Eternity",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      price: "$210,000",
      specs: {
        horsepower: "780 HP",
        acceleration: "2.4s",
        topSpeed: "215 mph",
        range: "280 miles"
      }
    },
    {
      name: "Lovable Phantom",
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      price: "$250,000",
      specs: {
        horsepower: "835 HP",
        acceleration: "2.2s",
        topSpeed: "225 mph",
        range: "260 miles"
      }
    }
  ];
  
  return (
    <section id="models" className="py-24 bg-luxury-50">
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Exquisite Models</h2>
          <p className="section-subtitle">
            Discover our lineup of extraordinary vehicles that define the pinnacle of automotive excellence, 
            where performance meets unparalleled luxury.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {carModels.map((model, index) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1
              }}
            >
              <CarCard model={model} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;
