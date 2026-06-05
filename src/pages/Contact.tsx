import { motion } from 'motion/react';
import { Phone, Mail, Instagram, MapPin, Send } from 'lucide-react';
import { Button } from '../components/Button';

export default function ContactPage() {
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
              <span className="text-brand-gold uppercase tracking-widest text-sm font-medium">Get In Touch</span>
              <span className="w-8 h-px bg-brand-gold"></span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">
              Let's Create<br />Something Exceptional
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light">
              Contact Maharlika Resin today for a free consultation and project estimate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <div className="bg-brand-graphite p-10 rounded-sm border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-bl-full transition-transform duration-500 group-hover:scale-110"></div>
              
              <h3 className="text-2xl font-serif text-white mb-8 tracking-wide">Contact Information</h3>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-brand-charcoal border border-brand-gold/30 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 uppercase tracking-widest mb-1">Phone & WhatsApp</span>
                    <a href="tel:+15876437948" className="text-lg text-white hover:text-brand-gold transition-colors font-medium">
                      +1 (587) 643-7948
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-brand-charcoal border border-brand-gold/30 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 uppercase tracking-widest mb-1">Location</span>
                    <span className="text-lg text-white font-medium">
                      Alberta, Canada
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-brand-charcoal border border-brand-gold/30 rounded-full flex items-center justify-center shrink-0">
                    <Instagram className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 uppercase tracking-widest mb-1">Instagram</span>
                    <a href="https://www.instagram.com/maharlikaresin" target="_blank" rel="noreferrer" className="text-lg text-white hover:text-brand-gold transition-colors font-medium">
                      @maharlikaresin
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-[#111] p-10 rounded-sm border border-brand-gold/10">
              <h3 className="text-2xl font-serif text-white mb-8 tracking-wide">Request a Callback</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400 font-medium ml-1">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-brand-charcoal border border-white/10 rounded-sm h-12 px-4 text-white focus:outline-none focus:border-brand-gold transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400 font-medium ml-1">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full bg-brand-charcoal border border-white/10 rounded-sm h-12 px-4 text-white focus:outline-none focus:border-brand-gold transition-colors"
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-medium ml-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-brand-charcoal border border-white/10 rounded-sm h-12 px-4 text-white focus:outline-none focus:border-brand-gold transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-medium ml-1">Service Interested In</label>
                  <div className="relative">
                    <select className="w-full bg-brand-charcoal border border-white/10 rounded-sm h-12 px-4 text-white focus:outline-none focus:border-brand-gold transition-colors appearance-none">
                      <option value="">Select a service</option>
                      <option value="epoxy">Epoxy Flooring</option>
                      <option value="polishing">Concrete Polishing</option>
                      <option value="metallic">Metallic Epoxy Systems</option>
                      <option value="garage">Garage Floor Coatings</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-medium ml-1">Message</label>
                  <textarea 
                    className="w-full bg-brand-charcoal border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-brand-gold transition-colors resize-none"
                    rows={4}
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <Button className="w-full h-14 text-lg mt-4 flex items-center justify-center gap-2">
                  Send Message <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
