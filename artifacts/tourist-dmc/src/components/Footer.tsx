import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, MailOpen } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A2A42] text-white pt-20 pb-10 border-t-4 border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-xl inline-block">
              <img 
                src={`${import.meta.env.BASE_URL}logo.jpg`} 
                alt="Tourist DMC" 
                className="h-10 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="hidden font-display font-bold text-2xl text-primary">Tourist DMC</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Your trusted Destination Management Company specializing in high-value B2B travel solutions for Kerala, India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-display font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Destinations', 'Why Partner With Us', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="text-white/70 hover:text-secondary transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-display font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {['Wholesale Packages', 'Tailor-Made FIT', 'Group Itineraries', 'MICE & Corporate', 'White-Label Support'].map((item) => (
                <li key={item} className="text-white/70 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2 opacity-50"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-display font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-white/70">
                <MapPin className="w-5 h-5 mr-3 text-secondary shrink-0 mt-1" />
                <span>
                  <strong>Quadrant Group LLP</strong><br />
                  Door No: 66/1909, T A B Road,<br />
                  Kochi – 682018, Kerala, India
                </span>
              </li>
              <li className="flex items-center text-white/70">
                <Phone className="w-5 h-5 mr-3 text-secondary shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:09809700000" className="hover:text-white transition-colors">098097 00000</a>
                  <a href="tel:09605566677" className="hover:text-white transition-colors">096055 66677</a>
                </div>
              </li>
              <li className="flex items-center text-white/70">
                <MailOpen className="w-5 h-5 mr-3 text-secondary shrink-0" />
                <a href="mailto:mail@touristdmc.com" className="hover:text-white transition-colors">mail@touristdmc.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Tourist DMC – Quadrant Group LLP. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-white/50">
            <span className="flex items-center">
              GSTIN: <strong className="text-white/70 ml-1">32AABFQ4168J1Z8</strong>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
