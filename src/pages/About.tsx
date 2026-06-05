import { motion } from 'motion/react';
import { Target, Award, Gem, Shield, HeartHandshake } from 'lucide-react';

export default function AboutPage() {
  const values = [
    { title: "Quality Craftsmanship", icon: Award },
    { title: "Honest Service", icon: HeartHandshake },
    { title: "Premium Materials", icon: Gem },
    { title: "Attention To Detail", icon: Target },
    { title: "Customer Satisfaction", icon: Shield },
  ];

  return (
    <div className="bg-brand-charcoal min-h-screen pt-24">
      {/* Header */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-4 mb-6 justify-center">
              <span className="w-8 h-px bg-brand-gold"></span>
              <span className="text-brand-gold uppercase tracking-widest text-sm font-medium">Our Story</span>
              <span className="w-8 h-px bg-brand-gold"></span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-8">
              Crafting Floors That Make An Impression
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-gray-300 font-light text-lg leading-relaxed"
            >
              <p>
                At <strong className="text-white font-medium">Maharlika Resin</strong>, we specialize in creating beautiful, durable, and high-performance flooring systems designed to elevate both residential and commercial spaces.
              </p>
              <p>
                Serving clients across Alberta, Canada, our mission is to combine craftsmanship, premium materials, and attention to detail to deliver flooring solutions that are both visually stunning and built to last.
              </p>
              <p>
                From luxury metallic epoxy floors to polished concrete finishes, every project is completed with precision, professionalism, and pride. We understand that your floor is the foundation of your space's aesthetic, which is why we approach every installation as a piece of functional art.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative h-[600px] rounded-sm overflow-hidden border border-white/10"
            >
              <img 
                src="https://i.ibb.co/GfMQCDNZ/7c46c796689514d42d33ab25783b9261.jpg" 
                alt="Professional working on floor" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-brand-graphite py-32 border-t border-brand-gold/10 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Our Core Values</h2>
            <div className="w-24 h-px bg-brand-gold mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {values.map((v, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-brand-charcoal/50 p-8 pt-10 rounded-sm border border-white/5 hover:border-brand-gold/30 transition-colors text-center group"
              >
                <div className="w-16 h-16 mx-auto bg-brand-graphite rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-gold/10 transition-all duration-300">
                  <v.icon className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-white font-medium tracking-wide">{v.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
