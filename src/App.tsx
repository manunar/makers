import React from 'react';
import { ShoppingCart, Lock, Zap, Sparkles, ChevronDown } from 'lucide-react';
import logo from './images/logomakers-removebg-preview.png';

function App() {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Section Hero */}
      <section className="h-screen relative flex items-center justify-center">
        {/* Logo */}
        <img 
          src={logo}
          alt="Logo Makers" 
          className="absolute top-4 left-4 w-24 h-auto z-20"
        />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?w=1920&auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-uniloop-dark/80" />
        </div>

        {/* Contenu Hero */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6 bg-gradient-uniloop text-transparent bg-clip-text text-4xl sm:text-5xl md:text-6xl font-bold tracking-[0.2em] animate-fade-in">
            UNILOOP
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 sm:mb-12 tracking-tight leading-tight">
            Le Casque Nouvelle Génération
          </h1>
          
          <div className="relative">
            <button 
              className="group bg-gradient-uniloop text-uniloop-dark px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold 
                         transition-all duration-300 hover:bg-white hover:text-uniloop-dark
                         hover:ring-2 hover:ring-uniloop-turquoise hover:scale-105 
                         flex items-center gap-3 mx-auto text-lg sm:text-xl mb-24"
            >
              <span>Précommander</span>
              <ShoppingCart className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:translate-x-1" />
            </button>

            <button 
              onClick={scrollToFeatures}
              className="absolute left-1/2 -translate-x-1/2 text-uniloop-turquoise opacity-75 hover:opacity-100 
                         transition-all duration-300 animate-bounce cursor-pointer"
              aria-label="Défiler vers le bas"
            >
              <ChevronDown className="w-10 h-10" />
            </button>
          </div>
        </div>
      </section>

      {/* Section Caractéristiques */}
      <section id="features" className="min-h-screen bg-uniloop-dark text-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 sm:mb-20 bg-gradient-uniloop text-transparent bg-clip-text">
            Système Innovant
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14">
            <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-uniloop-mint/20 hover:border-uniloop-mint/40 transition-colors">
              <div className="bg-gradient-uniloop w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                <Sparkles className="w-10 h-10 text-uniloop-dark" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-uniloop-yellow">Design Intuitif</h3>
              <p className="text-white/80 text-lg sm:text-xl">
                Un système de fermeture simple et efficace qui s'utilise naturellement.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-uniloop-turquoise/20 hover:border-uniloop-turquoise/40 transition-colors">
              <div className="bg-gradient-uniloop w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                <Lock className="w-10 h-10 text-uniloop-dark" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-uniloop-orange">Sécurité Optimale</h3>
              <p className="text-white/80 text-lg sm:text-xl">
                Un mécanisme de verrouillage fiable qui assure une protection sans compromis.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-uniloop-yellow/20 hover:border-uniloop-yellow/40 transition-colors sm:col-span-2 lg:col-span-1">
              <div className="bg-gradient-uniloop w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                <Zap className="w-10 h-10 text-uniloop-dark" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-uniloop-turquoise">Rapidité d'Utilisation</h3>
              <p className="text-white/80 text-lg sm:text-xl">
                Une manipulation simple et rapide pour un confort d'utilisation optimal.
              </p>
            </div>
          </div>

          <div className="mt-16 sm:mt-20 max-w-3xl mx-auto text-center px-4">
            <p className="text-white/90 text-xl sm:text-2xl leading-relaxed">
              Notre système de fermeture innovant allie simplicité et sécurité. Son design intuitif permet une manipulation aisée tout en garantissant une protection maximale. L'ouverture et la fermeture se font naturellement, sans compromis sur la sécurité.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;