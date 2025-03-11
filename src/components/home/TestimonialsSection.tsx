import { motion } from "framer-motion";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [{
    name: "James Wilson",
    role: "CEO of Wilson Enterprises",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 5,
    text: "The Lovable Quantum exceeded all my expectations. The craftsmanship, performance, and technology are unparalleled in today's luxury market. Truly a masterpiece of engineering and design."
  }, {
    name: "Sophia Chen",
    role: "Tech Entrepreneur",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 5,
    text: "What sets Lovable apart is their attention to detail. Every aspect of my Starlight feels meticulously crafted. The autonomous driving features have transformed my daily commute into productive time."
  }, {
    name: "Robert Johnson",
    role: "Finance Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 5,
    text: "After driving my Lovable Eternity for six months, I'm still discovering new features. The customer service experience has been as exceptional as the vehicle itself. Worth every penny."
  }];
  const nextTestimonial = () => {
    setActiveIndex(prev => prev === testimonials.length - 1 ? 0 : prev + 1);
  };
  const prevTestimonial = () => {
    setActiveIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1);
  };
  const renderStars = (rating: number) => {
    return Array.from({
      length: 5
    }).map((_, i) => <Star key={i} size={18} className={i < rating ? "text-gold-400 fill-gold-400" : "text-gray-300"} />);
  };
  return <section id="testimonials" className="py-24 bg-luxury-50">
      <div className="container mx-auto">
        <motion.div className="text-center max-w-3xl mx-auto mb-16" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          <h2 className="section-title">Customer Experiences</h2>
          <p className="section-subtitle">
            Discover what our distinguished clientele says about their journey with Lovable luxury automobiles.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Slider */}
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{
            transform: `translateX(-${activeIndex * 100}%)`
          }}>
              {testimonials.map((testimonial, index) => <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div className="bg-white rounded-2xl shadow-lg p-8 relative border border-luxury-200" initial={{
                opacity: 0,
                scale: 0.95
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6
              }}>
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                      {/* Customer Image */}
                      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gold-100 flex-shrink-0">
                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                      </div>
                      
                      {/* Testimonial Content */}
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          {renderStars(testimonial.rating)}
                        </div>
                        <p className="text-luxury-800 text-lg mb-4 italic text-justify">
                          "{testimonial.text}"
                        </p>
                        <div>
                          <h4 className="text-luxury-900 font-bold text-lg">{testimonial.name}</h4>
                          <p className="text-luxury-600">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Quote Marks */}
                    <div className="absolute top-4 right-8 text-6xl text-gold-200 font-serif leading-none">"</div>
                  </motion.div>
                </div>)}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-2">
            <button onClick={prevTestimonial} className="w-12 h-12 rounded-full bg-luxury-100 hover:bg-luxury-200 flex items-center justify-center transition-colors" aria-label="Previous testimonial">
              <ChevronLeft size={24} className="text-luxury-800" />
            </button>
            <button onClick={nextTestimonial} className="w-12 h-12 rounded-full bg-luxury-100 hover:bg-luxury-200 flex items-center justify-center transition-colors" aria-label="Next testimonial">
              <ChevronRight size={24} className="text-luxury-800" />
            </button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => <button key={index} onClick={() => setActiveIndex(index)} className={`w-3 h-3 rounded-full transition-all ${activeIndex === index ? "bg-gold-400 w-6" : "bg-luxury-300"}`} aria-label={`Go to testimonial ${index + 1}`} />)}
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;