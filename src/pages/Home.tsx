import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, Home, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const features = [
    { text: "Premium Finishes", icon: Sparkles },
    { text: "Durable Protection", icon: ShieldCheck },
    { text: "Residential & Commercial", icon: Home },
    { text: "Alberta Wide Service", icon: MapPin },
  ];

  const whyChooseUs = [
    "Elegant Designs",
    "Long-Lasting Performance",
    "Premium Materials",
    "Professional Installation",
    "Modern Finishes",
    "Customer Satisfaction Focus"
  ];

  const services = [
    { title: "Epoxy Flooring", img: "https://i.ibb.co/Jj1MJLJL/37ec6024b80731f5c869490d2013490f.jpg" },
    { title: "Concrete Polishing", img: "https://i.ibb.co/QvRLvCcs/4e4c401936bdaf66827444be062e0025.jpg" },
    { title: "Metallic Epoxy Systems", img: "https://i.ibb.co/Qvyj7Sx3/932c03e2ecc73b721e3f43e9f6789a75.jpg" },
    { title: "Garage Floor Coatings", img: "https://i.ibb.co/S7rT4Xcv/52190904ec35b33fadf8fa4ea3cfea9b.jpg" },
  ];

  const process = [
    { step: "01", title: "Consultation" },
    { step: "02", title: "Surface Preparation" },
    { step: "03", title: "Professional Installation" },
    { step: "04", title: "Flawless Finish" },
  ];

  return (
    <div className="bg-brand-charcoal min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/90 to-transparent lg:to-brand-charcoal/30 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Premium Epoxy Floor" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/30 bg-brand-gold/10 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold text-xs uppercase tracking-widest font-medium">Maharlika Resin</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">
              Luxury Floors. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-light via-brand-gold-dark to-brand-gold">
                Built To Last.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mb-10 leading-relaxed">
              Transform your home, garage, showroom, or commercial space with premium epoxy flooring and concrete finishing solutions throughout Alberta.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button size="lg" asChild>
                <Link to="/contact">Get A Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (idx * 0.1), duration: 0.6 }}
                  className="flex items-center gap-3"
                >
                  <feature.icon className="w-5 h-5 text-brand-gold shrink-0" />
                  <span className="text-sm font-medium tracking-wide text-gray-200">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-graphite relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-px bg-brand-gold"></span>
                <span className="text-brand-gold uppercase tracking-widest text-sm font-medium">The Standard</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">
                Why Homeowners & Businesses Choose Maharlika Resin
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10 font-light">
                We believe that a floor should be more than just a surface to walk on. It should be a statement piece that enhances the value, aesthetics, and functionality of your space.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                {whyChooseUs.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0" />
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, flex: 0.8 }}
              whileInView={{ opacity: 1, flex: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative h-[600px] rounded-sm overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
                alt="Luxury Home Interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-8 border-brand-charcoal/20 z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-32 bg-brand-charcoal relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-px bg-brand-gold"></span>
                <span className="text-brand-gold uppercase tracking-widest text-sm font-medium">Expertise</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-white">Our Premium Services</h2>
            </motion.div>
            <Button variant="ghost" asChild className="hidden md:flex">
              <Link to="/services">
                View All Services <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Link
                to="/services"
                key={idx}
                className="group block cursor-pointer"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                >
                  <div className="relative h-80 mb-6 overflow-hidden rounded-sm">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4 z-20 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowRight className="text-white w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-serif text-white mb-2 group-hover:text-brand-gold transition-colors">{service.title}</h3>
                  <div className="w-8 h-px bg-brand-gold/50 group-hover:w-full transition-all duration-500"></div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-brand-graphite border-y border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">The Maharlika Process</h2>
            <p className="text-gray-400 font-light">Craftsmanship executed with precision from start to finish.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] border-t border-dashed border-white/20 z-0"></div>
            
            {process.map((p, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="relative z-10 text-center"
              >
                <div className="w-24 h-24 mx-auto bg-brand-charcoal border border-brand-gold/30 text-brand-gold flex items-center justify-center rounded-full text-2xl font-serif mb-6 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                  {p.step}
                </div>
                <h3 className="text-xl font-medium text-white tracking-wide">{p.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden text-center bg-[#111]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-brand-gold font-serif italic text-2xl mb-6 block">Take the next step</span>
          <h2 className="text-5xl md:text-6xl font-serif text-white mb-10">Ready To Upgrade Your Floors?</h2>
          <Button size="lg" className="px-12 h-16 text-lg" asChild>
            <Link to="/contact">Request A Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
