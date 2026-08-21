"use client";

import { motion } from "framer-motion";
import { Building2, LineChart, Network } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <main className="min-h-screen bg-[#101010] text-[#F4F4F4] font-sans selection:bg-[#C58B68] selection:text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 p-6 md:px-12 flex justify-between items-center bg-[#101010]/80 backdrop-blur-md border-b border-[#C58B68]/10">
        <div className="text-2xl font-bold tracking-tighter text-[#C58B68]">CAI</div>
        <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          <a href="#hero" className="hover:text-[#C58B68] transition-colors">INÍCIO</a>
          <a href="#services" className="hover:text-[#C58B68] transition-colors">SERVIÇOS</a>
          <a href="#contact" className="hover:text-[#C58B68] transition-colors">CONTATO</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full opacity-40 mix-blend-luminosity"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#101010]/50 via-transparent to-[#101010]"></div>
        </div>

        <motion.div
          className="relative z-10 text-center max-w-5xl px-6 mt-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6 uppercase leading-tight"
          >
            Encontre o Imóvel <br className="hidden md:block" />
            <span className="text-[#C58B68]">Perfeito com IA</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto font-light"
          >
            Match de propriedades, portfólio de ativos e acesso a rede de parceiros – tudo em uma única plataforma.
          </motion.p>
          <motion.div variants={itemVariants}>
            <a
              href="#services"
              className="inline-block bg-[#C58B68] text-[#101010] px-10 py-4 font-bold text-lg hover:bg-[#A37051] transition-all duration-300 rounded-sm"
            >
              EXPLORE NOSSOS SERVIÇOS
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Services - Bento Grid */}
      <section id="services" className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10 bg-[#101010]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter uppercase text-[#C58B68]">
            Nossos Serviços
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-[#1E1E1E]"></motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Service 1 */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 bg-[#1E1E1E] p-8 md:p-10 border border-[#C58B68]/10 hover:border-[#C58B68]/40 transition-all duration-500 flex flex-col justify-between group rounded-sm"
          >
            <div className="p-4 bg-[#101010] w-fit rounded-none border border-[#C58B68]/20 mb-6">
              <Building2 className="w-8 h-8 text-[#C58B68] group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight group-hover:text-[#C58B68] transition-colors">Property Matching</h3>
              <p className="text-gray-400 text-lg">
                Algoritmos avançados combinam compradores e imóveis com base em necessidades e preferências. Precisão brutal no mercado imobiliário.
              </p>
            </div>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 bg-[#1E1E1E] p-8 md:p-10 border border-[#C58B68]/10 hover:border-[#C58B68]/40 transition-all duration-500 flex flex-col justify-between group rounded-sm"
          >
            <div className="p-4 bg-[#101010] w-fit rounded-none border border-[#C58B68]/20 mb-6">
              <LineChart className="w-8 h-8 text-[#C58B68] group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight group-hover:text-[#C58B68] transition-colors">Asset Portfolio</h3>
              <p className="text-gray-400">
                Gestão completa de portfólio de ativos imobiliários com visualizações dinâmicas e diretas.
              </p>
            </div>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-3 bg-[#1E1E1E] p-8 md:p-12 border border-[#C58B68]/10 hover:border-[#C58B68]/40 transition-all duration-500 flex flex-col md:flex-row gap-8 items-start md:items-center group rounded-sm"
          >
            <div className="p-5 bg-[#101010] shrink-0 border border-[#C58B68]/20">
              <Network className="w-12 h-12 text-[#C58B68] group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight group-hover:text-[#C58B68] transition-colors">Network Access</h3>
              <p className="text-gray-400 text-xl max-w-4xl leading-relaxed">
                Acesso a uma rede exclusiva de corretores, investidores e parceiros estratégicos. Conecte-se às melhores oportunidades sem barreiras.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#1E1E1E] text-center text-gray-500 text-sm mt-20">
        <div className="text-2xl font-bold tracking-tighter text-[#C58B68] mb-4">CAI</div>
        <p>&copy; 2026 Central de Angariação Imobiliária. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
