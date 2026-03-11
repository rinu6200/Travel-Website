import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useSubmitContact, contactFormSchema, type ContactFormData } from "@/hooks/use-contact";
import { useToast } from "@/hooks/use-toast";
import { 
  Building2, Users, Briefcase, Globe, ShieldCheck, Clock, 
  Leaf, TreePalm, Coffee, CheckCircle2, ChevronRight, Send,
  Camera, Utensils, Anchor, Ship, Map, MapPin, Phone, MailOpen
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SpecializationsSection />
        <WhyPartnerSection />
        <ServicesSection />
        <DestinationsSection />
        <MissionSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

// --- SUB-COMPONENTS ---

function HeroSection() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* landing page hero scenic kerala backwaters houseboat */}
        <img 
          src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1920&q=80" 
          alt="Kerala Backwaters" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2A42]/90 via-[#1B6CA8]/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
            <span className="text-sm font-medium tracking-wide uppercase">Division of Quadrant Group LLP</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-tight mb-6">
            Your Trusted B2B <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-200">
              Destination Partner
            </span> <br/>
            in Kerala
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed text-balance">
            Providing seamless, high-margin, and reliable travel experiences for global travel partners in God's Own Country.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#services" className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-lg shadow-primary/30 hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300 text-center flex items-center justify-center">
              Explore Services
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
            <a href="#contact" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-xl font-bold text-lg hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 text-center">
              Partner With Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none z-10 rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-background"></path>
        </svg>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-secondary font-bold tracking-wider uppercase mb-2">About Tourist DMC</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Your Local Operational Partner in <span className="text-primary">Kerala</span>
            </h3>
            
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                Tourist DMC is a premier Destination Management Company and a proud division of <strong className="text-foreground">Quadrant Group LLP</strong>. We specialize exclusively in creating high-value B2B travel solutions for Kerala.
              </p>
              <p>
                Operating behind the scenes, we act as the local operational powerhouse for travel agents, tour operators, and corporate planners globally. Our white-label approach ensures your brand stays front and center while we handle the intricate logistics on the ground.
              </p>
              
              <div className="pt-6 grid grid-cols-2 gap-6 border-t border-border">
                <div>
                  <h4 className="text-4xl font-display font-bold text-primary mb-2">10+</h4>
                  <p className="text-sm font-medium text-foreground">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-4xl font-display font-bold text-primary mb-2">100%</h4>
                  <p className="text-sm font-medium text-foreground">B2B Focused</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
              {/* kerala backwaters tranquil reflection */}
              <img 
                src="https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=800&q=80" 
                alt="Kerala Landscape" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-8 border-white/20 rounded-3xl z-10"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-border animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Verified Partner</p>
                  <p className="text-lg font-bold text-foreground">100% Reliable</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SpecializationsSection() {
  const specs = [
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Wholesale Kerala Packages",
      desc: "Exclusive net rates for travel agents covering prime locations like Munnar, Alleppey, Thekkady, Kovalam, and Wayanad.",
      color: "from-blue-500 to-primary"
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Tailor-Made FIT & Groups",
      desc: "Customized itineraries ranging from intimate honeymoon retreats to large-scale pilgrim and leisure groups.",
      color: "from-cyan-400 to-secondary"
    },
    {
      icon: <Building2 className="w-8 h-8 text-white" />,
      title: "White-Label Support",
      desc: "Seamless brand integration with airport welcome boards and operator-neutral vehicles ensuring your brand shines.",
      color: "from-indigo-400 to-blue-600"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-white" />,
      title: "MICE & Corporate",
      desc: "End-to-end management for corporate retreats, industry conferences, and impactful team-building offsites.",
      color: "from-sky-400 to-cyan-600"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-secondary font-bold tracking-wider uppercase mb-2">Core Focus</h2>
          <h3 className="text-4xl font-display font-bold text-foreground mb-4">B2B Specializations</h3>
          <p className="text-muted-foreground text-lg">
            We offer comprehensive ground handling services tailored specifically for the travel trade industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg shadow-black/5 border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${spec.color} flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300`}>
                {spec.icon}
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">{spec.title}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {spec.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyPartnerSection() {
  const reasons = [
    { title: "Direct Supplier Rates", desc: "Unlock higher margins with our middleman-free, competitive pricing structures.", icon: <CheckCircle2 className="w-6 h-6 text-secondary" /> },
    { title: "Verified Fleet", desc: "Well-maintained, modern fleet with professional English/Hindi-speaking drivers.", icon: <CheckCircle2 className="w-6 h-6 text-secondary" /> },
    { title: "24/7 Ground Support", desc: "Real-time assistance ensuring a flawless experience for your guests.", icon: <CheckCircle2 className="w-6 h-6 text-secondary" /> },
    { title: "Ethical Tourism", desc: "Commitment to responsible, sustainable tourism practices across all operations.", icon: <CheckCircle2 className="w-6 h-6 text-secondary" /> },
  ];

  return (
    <section id="why-partner" className="py-24 bg-[#0A2A42] text-white relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-secondary font-bold tracking-wider uppercase mb-2">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">
              The Tourist DMC Advantage
            </h3>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              We understand that your reputation is on the line with every booking. That's why we operate with total transparency and absolute reliability.
            </p>
            <a href="#contact" className="inline-flex items-center px-6 py-3 bg-secondary text-[#0A2A42] rounded-xl font-bold hover:bg-white transition-colors duration-300">
              Start Partnering Today
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>
          
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-panel p-6 rounded-2xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 mt-1">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{reason.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    { name: "Luxury & Boutique Accommodations", icon: <Building2 className="w-6 h-6" /> },
    { name: "Premium Houseboat Cruises", icon: <Ship className="w-6 h-6" /> },
    { name: "Experiential Tours", icon: <Map className="w-6 h-6" /> },
    { name: "Ayurveda & Wellness Retreats", icon: <Leaf className="w-6 h-6" /> },
    { name: "Spice Plantation Tours", icon: <TreePalm className="w-6 h-6" /> },
    { name: "Kathakali Cultural Shows", icon: <Users className="w-6 h-6" /> },
    { name: "Specialized Meal Planning", icon: <Utensils className="w-6 h-6" /> },
    { name: "Group Photography Services", icon: <Camera className="w-6 h-6" /> },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-secondary font-bold tracking-wider uppercase mb-2">What We Do</h2>
          <h3 className="text-4xl font-display font-bold text-foreground mb-4">Our Services</h3>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group p-6 rounded-2xl border border-border/60 hover:border-primary bg-slate-50 hover:bg-primary hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary group-hover:text-primary mb-4 shadow-sm">
                {service.icon}
              </div>
              <h4 className="text-lg font-bold text-foreground group-hover:text-white transition-colors">
                {service.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DestinationsSection() {
  const destinations = [
    { name: "Munnar", desc: "Misty Tea Gardens", img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80" },
    { name: "Alleppey", desc: "Tranquil Backwaters", img: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=800&q=80" },
    { name: "Thekkady", desc: "Wildlife & Spices", img: "https://images.unsplash.com/photo-1582293041079-7814c2f12063?w=800&q=80" },
    { name: "Kovalam", desc: "Pristine Beaches", img: "https://images.unsplash.com/photo-1621274220335-46b5a371ba71?w=800&q=80" },
    { name: "Wayanad", desc: "Forests & Heritage", img: "https://images.unsplash.com/photo-1629858546187-578d38865f8c?w=800&q=80" },
    { name: "Kumarakom", desc: "Bird Sanctuary", img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80" },
  ];

  return (
    <section id="destinations" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-secondary font-bold tracking-wider uppercase mb-2">Explore Kerala</h2>
            <h3 className="text-4xl font-display font-bold text-foreground">Popular Destinations</h3>
          </div>
          <p className="text-muted-foreground mt-4 md:mt-0 max-w-sm text-right hidden md:block">
            Curated experiences across God's Own Country, operated flawlessly for your clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative h-80 rounded-3xl overflow-hidden shadow-lg cursor-pointer"
            >
              {/* destination image placeholder */}
              <img 
                src={dest.img} 
                alt={dest.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-300">
                <h4 className="text-3xl font-display font-bold text-white mb-1">{dest.name}</h4>
                <p className="text-white/80 text-lg font-medium">{dest.desc}</p>
                
                <div className="h-0 overflow-hidden group-hover:h-12 transition-all duration-300 ease-out mt-0 group-hover:mt-4 opacity-0 group-hover:opacity-100">
                  <span className="inline-flex items-center text-secondary font-bold">
                    View itineraries <ChevronRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1920&q=20')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <QuoteIcon className="w-16 h-16 mx-auto text-secondary/50 mb-8" />
          <h3 className="text-3xl md:text-5xl font-display font-medium text-white leading-tight md:leading-tight">
            "Our mission is to <strong className="text-secondary font-bold">empower travel businesses worldwide</strong> by delivering reliable, transparent, and innovative destination management services across Kerala."
          </h3>
        </motion.div>
      </div>
    </section>
  );
}

function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

function ContactSection() {
  const { toast } = useToast();
  const { mutate: submitForm, isPending } = useSubmitContact();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      companyName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    submitForm(data, {
      onSuccess: () => {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you within 24 hours.",
          variant: "default",
        });
        form.reset();
      },
      onError: () => {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again or call us.",
          variant: "destructive",
        });
      }
    });
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl border border-border/50 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Contact Details Panel */}
          <div className="bg-[#0A2A42] text-white p-12 lg:w-2/5 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-display font-bold mb-2">Partner With Us</h3>
              <p className="text-white/70 mb-12">Reach out to request our B2B tariffs or discuss custom requirements.</p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 mr-4">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-1">Corporate Office</h5>
                    <p className="text-white/70 leading-relaxed">
                      Quadrant Group LLP<br/>
                      Door No: 66/1909, T A B Road,<br/>
                      Kochi – 682018, Kerala
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 mr-4">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-1">Direct Lines</h5>
                    <div className="text-white/70 flex flex-col space-y-1">
                      <a href="tel:09809700000" className="hover:text-white transition-colors">098097 00000</a>
                      <a href="tel:09605566677" className="hover:text-white transition-colors">096055 66677</a>
                      <a href="tel:09562719729" className="hover:text-white transition-colors">095627 19729</a>
                      <a href="tel:09946290807" className="hover:text-white transition-colors">099462 90807</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 mr-4">
                    <MailOpen className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-1">Email Us</h5>
                    <a href="mailto:mail@touristdmc.com" className="text-white/70 hover:text-white transition-colors">
                      mail@touristdmc.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
              <p className="text-white/50 text-sm">GSTIN: 32AABFQ4168J1Z8</p>
            </div>
          </div>

          {/* Form Panel */}
          <div className="p-12 lg:w-3/5 bg-slate-50">
            <h3 className="text-2xl font-display font-bold text-foreground mb-8">Send an Inquiry</h3>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Your Name</label>
                  <input 
                    {...form.register("name")}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    placeholder="John Doe"
                  />
                  {form.formState.errors.name && (
                    <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Agency / Company Name</label>
                  <input 
                    {...form.register("companyName")}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    placeholder="Global Travels"
                  />
                  {form.formState.errors.companyName && (
                    <p className="text-sm text-destructive">{form.formState.errors.companyName.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <input 
                    {...form.register("email")}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    placeholder="john@example.com"
                  />
                  {form.formState.errors.email && (
                    <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone Number</label>
                  <input 
                    {...form.register("phone")}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    placeholder="+1 234 567 8900"
                  />
                  {form.formState.errors.phone && (
                    <p className="text-sm text-destructive">{form.formState.errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message / Requirements</label>
                <textarea 
                  {...form.register("message")}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none"
                  placeholder="Tell us about your client's needs, dates, and preferences..."
                />
                {form.formState.errors.message && (
                  <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>
                )}
              </div>

              <button 
                type="submit" 
                disabled={isPending}
                className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex justify-center items-center"
              >
                {isPending ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Inquiry...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Submit Inquiry <Send className="w-5 h-5 ml-2" />
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
