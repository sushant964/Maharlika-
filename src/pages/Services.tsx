import { motion } from 'motion/react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Sparkles, CheckSquare, CarFront } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      id: "epoxy-flooring",
      title: "Epoxy Flooring",
      icon: Layers,
      description: "Durable, seamless, and visually striking epoxy flooring solutions for residential and commercial spaces.",
      image: "https://i.ibb.co/Jj1MJLJL/37ec6024b80731f5c869490d2013490f.jpg",
      features: ["Seamless Finish", "Easy to Clean", "Chemical Resistant", "Extremely Durable"]
    },
    {
      id: "concrete-polishing",
      title: "Concrete Polishing",
      icon: Sparkles,
      description: "Transform dull concrete into a smooth, elegant, and low-maintenance polished surface.",
      image: "https://i.ibb.co/QvRLvCcs/4e4c401936bdaf66827444be062e0025.jpg",
      features: ["High Gloss Options", "Dust Proofing", "Eco-Friendly", "Long Lifespan"]
    },
    {
      id: "metallic-epoxy",
      title: "Metallic Epoxy Systems",
      icon: CheckSquare,
      description: "Luxury metallic epoxy finishes that create unique, high-end decorative flooring designs.",
      image: "https://i.ibb.co/Qvyj7Sx3/932c03e2ecc73b721e3f43e9f6789a75.jpg",
      features: ["One-of-a-Kind Patterns", "3D Visual Depth", "Premium Aesthetic", "Scratch Resistant"]
    },
    {
      id: "garage-coatings",
      title: "Garage Floor Coatings",
      icon: CarFront,
      description: "Protect and enhance garage floors with durable coating systems built for daily wear.",
      image: "https://i.ibb.co/S7rT4Xcv/52190904ec35b33fadf8fa4ea3cfea9b.jpg",
      features: ["Hot Tire Resistant", "Slip Resistant Options", "Hide Blemishes", "Quick Turnaround"]
    }
  ];

  return (
    <div className="bg-brand-charcoal min-h-screen pt-24 pb-32">
      {/* Header */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-4 mb-6 justify-center">
              <span className="w-8 h-px bg-brand-gold"></span>
              <span className="text-brand-gold uppercase tracking-widest text-sm font-medium">What We Do</span>
              <span className="w-8 h-px bg-brand-gold"></span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">
              Our Services
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light">
              Elevate your space with our premium selection of surface finishing solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="container mx-auto px-6 max-w-7xl space-y-32">
        {services.map((service, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={service.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-stretch`}>
              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2"
              >
                <div className="relative h-full min-h-[400px] lg:min-h-[500px] overflow-hidden rounded-sm group">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                  <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute bottom-6 left-6 z-20 flex gap-3 text-white">
                    <div className="w-12 h-12 bg-brand-gold/90 backdrop-blur flex items-center justify-center rounded-sm">
                      <service.icon className="w-6 h-6 text-brand-charcoal" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content Side */}
              <motion.div 
                initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2 flex flex-col justify-center"
              >
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 uppercase tracking-wide">
                  {service.title}
                </h2>
                <div className="w-16 h-px bg-brand-gold mb-8"></div>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-12">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0"></div>
                      <span className="text-gray-400 font-medium tracking-wide">{feature}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <Button variant="outline" asChild>
                    <Link to="/contact">Request Estimate <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          )
        })}
      </section>
    </div>
  );
}
