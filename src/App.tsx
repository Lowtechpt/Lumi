import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Scissors, 
  Palette, 
  Sparkles, 
  Clock, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  Star, 
  ChevronRight, 
  Menu, 
  X,
  Quote,
  ArrowUpRight,
  Calendar
} from 'lucide-react';

// --- Constants ---
const BOOKING_URL = "https://noona.app/pl/lumibelezabemestar?source=SuggestedCompanyTypeScreen&rank=119";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Salão', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Equipa', href: '#equipa' },
    { name: 'Galeria', href: '#galeria' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ${isScrolled ? 'bg-lumi-cream/80 backdrop-blur-2xl py-4 shadow-sm' : 'bg-transparent py-12'}`}>
      <div className="max-w-[1800px] mx-auto px-8 md:px-16 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <a href="#" className="text-4xl font-serif tracking-[0.4em] uppercase text-lumi-black">
            Lumi
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-16">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] uppercase tracking-[0.5em] font-bold hover:text-lumi-gold transition-all duration-500 relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-lumi-gold transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
          <a 
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-lumi-black text-white px-12 py-5 text-[10px] uppercase tracking-[0.4em] hover:bg-lumi-gold transition-all duration-700 rounded-full shadow-xl shadow-lumi-black/10"
          >
            Marcar Horário
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-lumi-black p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 w-full h-screen bg-lumi-cream z-[60] p-12 flex flex-col justify-center items-center gap-12 lg:hidden"
          >
            <button 
              className="absolute top-12 right-8 text-lumi-black p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={40} strokeWidth={1} />
            </button>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl uppercase tracking-[0.2em] font-serif hover:text-lumi-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-lumi-black text-white w-full max-w-xs py-8 text-xs uppercase tracking-[0.4em] text-center rounded-full mt-12 shadow-2xl"
            >
              Marcar Horário
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeader = ({ title, subtitle, centered = true }: { title: string, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-24 ${centered ? 'text-center' : ''}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-6 mb-8 justify-center md:justify-start"
      style={{ justifyContent: centered ? 'center' : 'flex-start' }}
    >
      <div className="h-px w-12 bg-lumi-gold/30" />
      <span className="text-[11px] uppercase tracking-[0.6em] text-lumi-gold font-black">
        {subtitle}
      </span>
      <div className="h-px w-12 bg-lumi-gold/30" />
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.8 }}
      className="text-6xl md:text-8xl lg:text-9xl font-serif text-lumi-ink leading-[0.9] tracking-tighter"
    >
      {title}
    </motion.h2>
  </div>
);

const ServiceCard = ({ icon: Icon, title, description, price, index }: { icon: any, title: string, description: string, price: string, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15, duration: 0.8 }}
    className="group relative bg-white p-16 border border-lumi-beige transition-all duration-1000 hover:border-lumi-gold/40 hover:shadow-3xl hover:shadow-lumi-gold/5"
  >
    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-100 group-hover:text-lumi-gold transition-all duration-700">
      <Icon size={60} strokeWidth={0.5} />
    </div>
    <span className="text-[11px] font-black text-lumi-gold/30 mb-12 block tracking-[0.4em]">0{index + 1}</span>
    <h3 className="text-3xl font-serif mb-8 text-lumi-ink group-hover:text-lumi-gold transition-colors duration-700">{title}</h3>
    <p className="text-base text-gray-500 leading-relaxed mb-12 min-h-[80px] font-light">{description}</p>
    <div className="flex justify-between items-center pt-10 border-t border-lumi-beige">
      <span className="text-[11px] uppercase tracking-[0.3em] text-gray-400 font-black">Investimento</span>
      <span className="font-serif text-2xl text-lumi-ink">{price}</span>
    </div>
  </motion.div>
);

const TeamMember = ({ name, role, image, index }: { name: string, role: string, image: string, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 1 }}
    className="group"
  >
    <div className="relative aspect-[3/4] overflow-hidden mb-10 oval-mask shadow-2xl">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1500ms] ease-out"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-lumi-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-sm">
          <Instagram size={24} strokeWidth={1.5} />
        </div>
      </div>
    </div>
    <div className="text-center">
      <h3 className="text-3xl font-serif text-lumi-ink mb-3">{name}</h3>
      <p className="text-[11px] uppercase tracking-[0.5em] text-lumi-gold font-black">{role}</p>
    </div>
  </motion.div>
);

// --- Main App ---

export default function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="min-h-screen bg-lumi-cream selection:bg-lumi-gold selection:text-white">
      <Navbar />

      {/* Floating Booking Button */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-10 right-10 z-[100] hidden md:block"
      >
        <a 
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-20 h-20 bg-lumi-black text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-lumi-gold transition-all duration-500 group"
        >
          <Calendar className="group-hover:scale-110 transition-transform" />
          <div className="absolute -top-2 -right-2 bg-lumi-gold text-white text-[8px] font-black px-2 py-1 rounded-full animate-bounce">
            BOOK
          </div>
        </a>
      </motion.div>

      {/* Hero Section - Ultra Premium Split */}
      <section className="relative h-screen min-h-[900px] flex items-center overflow-hidden pt-24">
        <div className="max-w-[1900px] mx-auto px-8 md:px-20 w-full grid lg:grid-cols-12 gap-20 items-center">
          
          <div className="lg:col-span-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-6 mb-12">
                <div className="h-px w-20 bg-lumi-gold" />
                <span className="text-[11px] uppercase tracking-[0.8em] text-lumi-gold font-black">
                  Exclusividade em Leça
                </span>
              </div>
              
              <h1 className="text-[14vw] lg:text-[11vw] font-serif leading-[0.8] mb-16 text-lumi-ink tracking-tighter">
                A Arte da <br />
                <span className="serif-italic text-lumi-gold">Perfeição</span> <br />
                Capilar.
              </h1>
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-16">
                <a 
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-lumi-black text-white px-20 py-10 text-[12px] uppercase tracking-[0.5em] hover:bg-lumi-gold transition-all duration-1000 flex items-center gap-6 group rounded-full shadow-3xl shadow-lumi-black/20"
                >
                  Marcar Horário
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-700" />
                </a>
                
                <div className="flex items-center gap-8">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full border border-lumi-gold/20 flex items-center justify-center" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-lumi-gold animate-ping" />
                    </div>
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500 font-black leading-loose">
                    Atendimento <br /> Personalizado
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4 relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/5] w-full max-w-md ml-auto"
            >
              <div className="absolute -inset-8 border border-lumi-gold/10 rounded-[150px] -z-10 animate-pulse" />
              <img 
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop" 
                alt="Lumi Salon Interior" 
                className="w-full h-full object-cover rounded-[150px] shadow-3xl"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Prestige Badge */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-12 -left-16 glass-card p-12 rounded-[40px] shadow-2xl max-w-[260px] border-lumi-gold/20"
              >
                <div className="flex gap-2 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-lumi-gold text-lumi-gold" />)}
                </div>
                <p className="text-[11px] text-lumi-ink font-black uppercase tracking-[0.2em] leading-relaxed italic">
                  "Uma experiência de luxo que Leça precisava."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Vertical Prestige Rail */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:block">
          <span className="vertical-text text-lumi-gold/20 text-[12px]">
            LUMI • BELEZA • BEM-ESTAR • SOFISTICAÇÃO • EXCLUSIVIDADE • LUMI
          </span>
        </div>
      </section>

      {/* About Section - Editorial Split */}
      <section id="sobre" className="py-60 bg-white">
        <div className="max-w-[1500px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-40 items-center">
            <div className="order-2 lg:order-1">
              <SectionHeader 
                title="Onde o Luxo encontra a Técnica" 
                subtitle="Nossa História" 
                centered={false} 
              />
              <p className="text-4xl font-serif text-lumi-ink mb-12 leading-tight italic font-light">
                "Acreditamos que a beleza é uma forma de arte que deve ser cultivada com paciência e precisão."
              </p>
              <p className="text-gray-500 mb-16 leading-relaxed text-xl font-light">
                Dedicados à excelência e ao cuidado minucioso, o Lumi Salon nasce em Leça da Palmeira para oferecer uma experiência de beleza verdadeiramente personalizada. O nosso compromisso é elevar a sua autoestima através de técnicas modernas e um atendimento focado na sua individualidade, onde cada detalhe é pensado para o seu bem-estar.
              </p>
              
              <div className="grid grid-cols-2 gap-16 pt-16 border-t border-lumi-beige">
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.5em] text-lumi-gold font-black mb-6">Expertise</h4>
                  <p className="text-lg text-lumi-ink font-serif italic">Blond & Color Design</p>
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.5em] text-lumi-gold font-black mb-6">Certificação</h4>
                  <p className="text-lg text-lumi-ink font-serif italic">Toni&Guy London</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <motion.div 
                style={{ y }}
                className="aspect-[4/5] overflow-hidden rounded-[250px] border-[25px] border-lumi-beige shadow-3xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop" 
                  alt="Premium Styling" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-lumi-gold rounded-full flex items-center justify-center text-white p-12 text-center shadow-2xl">
                <span className="text-[11px] uppercase tracking-[0.4em] font-black leading-tight">Voted Best Salon 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Grid */}
      <section id="servicos" className="py-60 bg-lumi-beige/20">
        <div className="max-w-[1500px] mx-auto px-8">
          <SectionHeader 
            title="Rituais de Excelência" 
            subtitle="Serviços" 
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              index={0}
              icon={Palette}
              title="Balayage"
              description="Técnica de iluminação personalizada para um efeito natural e luminoso."
              price="100€ — 220€"
            />
            <ServiceCard 
              index={1}
              icon={Scissors}
              title="Corte Feminino"
              description="Design de corte especializado para realçar a sua fisionomia e estilo pessoal."
              price="40€"
            />
            <ServiceCard 
              index={2}
              icon={Sparkles}
              title="Morena Iluminada"
              description="Pontos de luz estratégicos para dar dimensão e brilho aos cabelos escuros."
              price="100€ — 180€"
            />
            <ServiceCard 
              index={3}
              icon={Clock}
              title="Botox Capilar"
              description="Easy lisse discipline Alfaparf para controlo de volume e brilho intenso."
              price="90€ — 120€"
            />
          </div>

          <div className="mt-32 text-center">
            <a 
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-6 text-[12px] uppercase tracking-[0.6em] text-lumi-ink font-black group"
            >
              Ver Lista de Serviços
              <div className="w-16 h-px bg-lumi-gold group-hover:w-24 transition-all duration-700" />
            </a>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipa" className="py-60 bg-white">
        <div className="max-w-[1500px] mx-auto px-8">
          <SectionHeader 
            title="Mestres da Estética" 
            subtitle="A Equipa" 
          />
          
          <div className="grid md:grid-cols-3 gap-24">
            <TeamMember 
              index={0}
              name="Jamile"
              role="Founder & Master Colorist"
              image="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1974&auto=format&fit=crop"
            />
            <TeamMember 
              index={1}
              name="Ágata"
              role="Senior Hair Stylist"
              image="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop"
            />
            <TeamMember 
              index={2}
              name="Ricardo"
              role="Technical Director"
              image="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* Gallery - Cinematic */}
      <section id="galeria" className="py-60 bg-lumi-black overflow-hidden">
        <div className="max-w-[1900px] mx-auto px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-16">
            <div className="max-w-3xl">
              <span className="text-[11px] uppercase tracking-[0.8em] text-lumi-gold font-black mb-8 block">Curadoria Visual</span>
              <h2 className="text-7xl md:text-9xl font-serif text-white leading-[0.85] tracking-tighter">
                Onde a Beleza <br />
                <span className="serif-italic text-lumi-gold">Ganhas Vida</span>
              </h2>
            </div>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              className="text-[12px] uppercase tracking-[0.5em] text-white border-b border-white/10 pb-6 hover:text-lumi-gold hover:border-lumi-gold transition-all duration-700"
            >
              Ver no Instagram
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1974&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=1974&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1974&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1974&auto=format&fit=crop"
            ].map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 0.97 }}
                className="aspect-[3/4] overflow-hidden shadow-2xl"
              >
                <img 
                  src={img} 
                  alt={`Portfolio ${i + 1}`} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2000ms]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Ultra Immersive */}
      <section className="py-80 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <span className="text-[40vw] font-serif text-lumi-gold leading-none select-none">LUMI</span>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-8xl md:text-[10rem] lg:text-[12rem] font-serif mb-20 text-lumi-ink leading-[0.8] tracking-tighter">
              Sua jornada <br />
              <span className="serif-italic text-lumi-gold">começa agora.</span>
            </h2>
            <a 
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-lumi-black text-white px-24 py-12 text-xs uppercase tracking-[0.6em] hover:bg-lumi-gold transition-all duration-1000 rounded-full shadow-3xl transform hover:scale-105"
            >
              Marcar Horário
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer - Prestige */}
      <footer className="bg-lumi-cream border-t border-lumi-beige pt-40 pb-20">
        <div className="max-w-[1700px] mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-24 mb-40">
            <div className="lg:col-span-5">
              <span className="text-5xl font-serif tracking-[0.5em] uppercase mb-12 block">Lumi</span>
              <p className="text-gray-500 text-xl leading-relaxed mb-16 max-w-md font-light">
                Onde a sofisticação encontra o cuidado profissional para realçar sua melhor versão em Leça da Palmeira.
              </p>
              <div className="flex gap-12">
                <a href="#" className="text-lumi-ink hover:text-lumi-gold transition-all duration-500 transform hover:-translate-y-1"><Instagram size={28} strokeWidth={1.5} /></a>
                <a href="#" className="text-lumi-ink hover:text-lumi-gold transition-all duration-500 transform hover:-translate-y-1"><Facebook size={28} strokeWidth={1.5} /></a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-[11px] uppercase tracking-[0.5em] text-lumi-gold font-black mb-12">Explorar</h4>
              <ul className="flex flex-col gap-8 text-sm font-bold tracking-[0.2em]">
                <li><a href="#sobre" className="hover:text-lumi-gold transition-colors">O Salão</a></li>
                <li><a href="#servicos" className="hover:text-lumi-gold transition-colors">Serviços</a></li>
                <li><a href="#equipa" className="hover:text-lumi-gold transition-colors">Equipa</a></li>
                <li><a href="#galeria" className="hover:text-lumi-gold transition-colors">Galeria</a></li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-[11px] uppercase tracking-[0.5em] text-lumi-gold font-black mb-12">Contacto</h4>
              <div className="flex flex-col gap-10 text-sm text-lumi-ink font-bold tracking-widest leading-relaxed">
                <p>Tv. Henrique Schreck 150,<br />4450-578 Leça da Palmeira</p>
                <p>911 579 651 / 222 409 883</p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-[11px] uppercase tracking-[0.5em] text-lumi-gold font-black mb-12">Horário</h4>
              <ul className="flex flex-col gap-8 text-sm font-bold tracking-widest">
                <li className="flex justify-between border-b border-lumi-beige pb-6">
                  <span className="text-gray-400">Seg, Qua - Sáb</span>
                  <span>10:00 — 19:00</span>
                </li>
                <li className="flex justify-between border-b border-lumi-beige pb-6">
                  <span className="text-gray-400">Almoço</span>
                  <span>13:00 — 14:30</span>
                </li>
                <li className="flex justify-between text-lumi-gold">
                  <span>Ter & Dom</span>
                  <span>Encerrado</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-20 border-t border-lumi-beige flex flex-col md:flex-row justify-between items-center gap-10 text-[11px] uppercase tracking-[0.4em] text-gray-400 font-black">
            <p>© 2024 Lumi - Beleza & Bem Estar</p>
            <div className="flex gap-16">
              <a href="#" className="hover:text-lumi-ink transition-colors">Privacidade</a>
              <a href="#" className="hover:text-lumi-ink transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
