import { motion, type Variants } from 'framer-motion';
import { ShieldCheck, CheckCircle2, ChevronRight, Award } from 'lucide-react';
import ScrollSequenceHero from './components/ScrollSequenceHero';

function App() {
  return (
    <div className="bg-luxury-black min-h-screen text-platinum-100 selection:bg-platinum-400 selection:text-luxury-black">
      
      <Header />

      {/* 1. HERO SECTION (SCROLL SEQUENCE) */}
      <ScrollSequenceHero />

      {/* 2. CRAFTSMANSHIP & MATERIALS (DETAILS) */}
      <section className="py-32 md:py-48 bg-luxury-dark relative z-20">
        <div className="container mx-auto px-6 max-w-7xl space-y-48">
          
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif text-platinum-100 mb-8 leading-tight">Combining modern style with intricate craftsmanship.</h2>
            <p className="text-platinum-400 text-lg leading-relaxed font-light">
              This timepiece features a fashionable mesh strap, exhibition skeletal design, and a clean openworked dial. The versatile design elevates any outfit, making it a perfect accessory for both casual and formal occasions.
            </p>
          </div>

          {/* Feature 1 */}
          <FeatureBlock 
            subtitle="01. The Movement"
            title="High Precision Automatic."
            description="At its heart lies a High Precision Automatic Movement, delivering reliable accuracy with a 36-hour power reserve — eliminating the need for batteries. Energy is stored naturally through wrist motion, while jewel bearings reduce friction, enhancing long-term durability."
            features={['36-hour power reserve', 'Self-winding kinetic motion', 'Reduced friction jewel bearings']}
            align="left"
            imageUrl="/images/watch images/616X315HKkL._AC_UF1000,1000_QL80_.jpg_2K_202607301331.jpeg"
          />

          {/* Feature 2 */}
          <FeatureBlock 
            subtitle="02. The Design"
            title="Exhibition Skeletal Dial."
            description="A clean openworked dial enhances visibility and showcases the watch's inner mechanics. Encased in stainless steel for resilience, it is topped with a Mineral Glass cover that ensures clarity and protection."
            features={['Clean openworked dial', 'Mineral Glass cover', '50m water resistance']}
            align="right"
            imageUrl="/images/watch images/616X315HKkL._AC_UF1000,1000_QL80_.jpg_202607301148.jpeg"
          />

          {/* Feature 3 */}
          <FeatureBlock 
            subtitle="03. The Strap"
            title="Fashionable Mesh Strap."
            description="The blue mesh strap is not only stylish but also lightweight and breathable, making the watch easy to wear throughout the day. It features a secure push button clasp, adding a layer of comfort and sophistication."
            features={['Breathable mesh design', 'Stainless steel construction', 'Push Button Clasp']}
            align="left"
            imageUrl="/images/watch images/616X315HKkL._AC_UF1000,1000_QL80_.jpg_2K_202607301331.jpeg"
          />

        </div>
      </section>

      {/* 3. TECHNICAL SPECIFICATIONS */}
      <SpecsSection />

      {/* 4. FOOTER & CTA */}
      <footer className="relative bg-luxury-black pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-platinum-900/20 via-luxury-black to-luxury-black opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10 text-center space-y-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-normal text-platinum-100 mb-6">
              Experience the Craft.
            </h2>
            <p className="text-platinum-500 max-w-xl mx-auto text-lg mb-12">
              Discover the Titan Skeletal Automatic in person at our exclusive boutiques worldwide.
            </p>
            <button className="px-10 py-5 bg-platinum-100 text-luxury-black font-sans font-medium tracking-widest uppercase text-sm hover:bg-white transition-colors duration-300 flex items-center justify-center gap-3 mx-auto group">
              Find a Boutique
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Heritage Highlights */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-8 md:gap-16 pt-16 border-t border-platinum-900/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 text-platinum-500">
              <Award className="w-5 h-5" />
              <span className="text-sm font-mono uppercase tracking-wider">Swiss Heritage</span>
            </div>
            <div className="flex items-center gap-3 text-platinum-500">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-sm font-mono uppercase tracking-wider">Master Horologists</span>
            </div>
          </motion.div>

          <p className="text-xs font-mono text-platinum-500/50 pt-16">
            © 2026 Titan. All rights reserved. Model NT90110QM01.
          </p>
        </div>
      </footer>

    </div>
  );
}

// Sub-components

function FeatureBlock({ subtitle, title, description, features, align, imageUrl }: { subtitle: string, title: string, description: string, features: string[], align: 'left' | 'right', imageUrl?: string }) {
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: "easeOut" } }
  };

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
      <motion.div 
        className={`order-2 ${align === 'right' ? 'lg:order-2' : 'lg:order-1 lg:pr-12'} space-y-8`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={textVariants}
      >
        <div>
          <div className="inline-block text-xs font-mono tracking-widest text-platinum-500 uppercase border-b border-platinum-500 pb-2 mb-6">{subtitle}</div>
          <h3 className="text-4xl md:text-5xl font-serif text-platinum-100 leading-tight">{title}</h3>
        </div>
        <p className="text-lg text-platinum-400 font-light leading-relaxed">
          {description}
        </p>
        <ul className="space-y-4 pt-4 border-t border-platinum-900/50">
          {features.map((item, i) => (
            <motion.li 
              key={i} 
              className="flex items-center space-x-4 text-platinum-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
            >
              <CheckCircle2 className="w-5 h-5 text-platinum-500" />
              <span className="font-light">{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div 
        className={`order-1 ${align === 'right' ? 'lg:order-1' : 'lg:order-2'} aspect-[4/5] glass-panel-luxury rounded-sm flex items-center justify-center relative overflow-hidden`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={imageVariants}
      >
        <div className="absolute inset-0 bg-platinum-900/20 z-10" />
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover z-0" />
        ) : (
          <span className="font-mono text-platinum-500 text-sm uppercase tracking-widest z-10">[ High-Res Detail Visual ]</span>
        )}
      </motion.div>
    </div>
  );
}

function SpecsSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const specs = [
    { label: "Name", value: "Titan Skeletal Automatic Blue Dial" },
    { label: "Glass Material", value: "Mineral Glass" },
    { label: "Movement", value: "Automatic (Mechanical)" },
    { label: "Dial & Strap Color", value: "Blue" },
    { label: "Strap Material", value: "Stainless Steel Mesh" },
    { label: "Lock Mechanism", value: "Push Button Clasp" },
    { label: "Case Dimensions", value: "51mm × 44mm × 13.10mm" },
    { label: "Warranty", value: "24 Months" }
  ];

  return (
    <section className="py-32 bg-luxury-black border-y border-platinum-900/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-platinum-100 mb-6">Technical Specifications.</h2>
          <p className="text-platinum-500 font-light">The architecture behind the art.</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-platinum-900/30 border border-platinum-900/30 rounded-sm overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {specs.map((spec, idx) => (
            <motion.div 
              key={idx} 
              className="bg-luxury-dark p-8 md:p-12 flex flex-col justify-center"
              variants={itemVariants}
            >
              <span className="text-xs font-mono tracking-widest text-platinum-500 uppercase mb-3">{spec.label}</span>
              <span className="text-xl font-serif text-platinum-100">{spec.value}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center pointer-events-none">
      <div className="text-2xl font-serif tracking-[0.2em] text-platinum-100 uppercase">
        Titan
      </div>
      <div className="text-xs font-mono tracking-[0.3em] text-platinum-400 uppercase border border-platinum-500/30 px-4 py-2 rounded-sm bg-luxury-black/30 backdrop-blur-sm">
        Premium Collection
      </div>
    </header>
  );
}

export default App;
