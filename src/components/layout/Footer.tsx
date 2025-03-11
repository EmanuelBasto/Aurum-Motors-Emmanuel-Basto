
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Models",
      links: [
        { name: "Starlight", href: "#" },
        { name: "Quantum", href: "#" },
        { name: "Eternity", href: "#" },
        { name: "Phantom", href: "#" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Sustainability", href: "#" },
        { name: "Investor Relations", href: "#" },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "#" },
        { name: "Service Centers", href: "#" },
        { name: "Roadside Assistance", href: "#" },
        { name: "Owner's Manual", href: "#" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Accessibility", href: "#" },
      ]
    }
  ];
  
  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#" },
    { icon: <Instagram size={20} />, href: "#" },
    { icon: <Twitter size={20} />, href: "#" },
    { icon: <Youtube size={20} />, href: "#" },
  ];

  return (
    <footer className="bg-luxury-900 text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <a href="#" className="block mb-4">
              <h2 className="text-3xl font-bold tracking-tighter">LOVABLE</h2>
            </a>
            <p className="text-luxury-300 mb-6 max-w-md">
              Crafting automotive excellence that blends luxury, innovation and performance. Every detail is designed to inspire and elevate your driving experience.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-luxury-800 hover:bg-gold-400 hover:text-luxury-900 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-medium mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-luxury-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-luxury-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-luxury-400 mb-4 md:mb-0">
            © {currentYear} Lovable Luxury Automobiles. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-luxury-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Cookie Preferences</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
