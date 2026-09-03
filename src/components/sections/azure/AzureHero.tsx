import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cloud, Shield, Zap } from 'lucide-react';

const AzureHero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-void">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-electric-glow/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-plasma/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      </div>

      <div className="container relative z-10 px-4 mx-auto pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 inline-flex flex-col items-center gap-2"
          >
            <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <img src="/microsoft-logo.png" alt="Microsoft" className="h-6 w-auto" />
              <div className="h-4 w-px bg-white/20" />
              <span className="text-sm font-semibold text-white tracking-wide">Solutions Partner</span>
            </div>
            <span className="text-[10px] text-electric font-mono tracking-[0.2em] uppercase">Cloud & Infrastructure</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight"
          >
            Escala tu negocio con <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-neon-ice">Microsoft Azure</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            Infraestructura cloud segura, escalable y optimizada para empresas en Colombia.
            Migra, innova y crece con el respaldo de expertos certificados.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="https://form.typeform.com/to/gxR8JkE0"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-electric text-white rounded-lg font-medium overflow-hidden transition-all hover:bg-electric-glow hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Solicitar Diagnóstico Gratuito
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-ice to-electric opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <a
              href="#services"
              className="px-8 py-4 bg-glass border border-white/10 text-white rounded-lg font-medium hover:bg-white/5 transition-colors backdrop-blur-md"
            >
              Explorar Servicios
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex justify-center gap-12 grayscale opacity-50"
          >
            {/* Simple text representation for logos if assets aren't available immediately, or replace with SVGs */}
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6" />
              <span className="font-semibold">Security First</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6" />
              <span className="font-semibold">High Performance</span>
            </div>
            <div className="flex items-center gap-2">
              <Cloud className="w-6 h-6" />
              <span className="font-semibold">Hybrid Ready</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AzureHero;
