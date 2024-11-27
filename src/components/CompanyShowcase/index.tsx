import React from 'react';
import { CompanyCard } from './CompanyCard';
import { Handshake } from 'lucide-react';
import { motion } from 'framer-motion';

export const CompanyShowcase: React.FC = () => {
  const companies = [
    {
      name: 'OCD/InBev',
      url: 'https://www.oestecentro.com.ar/',
      description: 'Distribuidora de cervezas',
      icon: 'beer',
    },
    {
      name: 'INS Servicios',
      url: 'https://ins-servicios.com.ar/',
      description: 'Empresa instaladora telecomunicaciones',
      icon: 'radio',
    },
    {
      name: 'Bimbo',
      url: 'https://www.bimbo.com.ar/',
      description: 'Panificadora, bimbo',
      icon: 'cookie',
    },
    {
      name: 'Grosselli',
      url: 'http://www.grosselli.com.ar/es/',
      description: 'Empresa instaladora telecomunicaciones',
      icon: 'wrench',
    },
    {
      name: 'Vaxel',
      url: 'https://vaxel.maspedidos.com.ar/#/login',
      description: 'Venta mayorista motopartes',
      icon: 'gauge',
    },
    {
      name: 'Founderz',
      url: 'https://founderz.com/es/',
      description: 'Masters en inteligencia artificial',
      icon: 'brain',
    },
    {
      name: 'Blueink',
      url: 'https://blueink.com.ar/',
      description: 'Concesionaria oficial de polaris (UTVs y repuestos)',
      icon: 'car',
    },
    {
      name: 'CLSA',
      url: 'https://www.loginter.com.ar/',
      description: 'Operador portuario ecommerce',
      icon: 'ship',
    },
  ];

  // Duplicar las tarjetas para un efecto infinito fluido
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="mt-12">
      <div className="flex flex-col items-center gap-4 mb-8">
        <div className="relative">
          <div className="absolute -inset-1 bg-blue-500/30 rounded-full blur-md" />
          <div className="relative bg-gray-800 p-3 rounded-full">
            <Handshake className="w-8 h-8 text-blue-400" />
          </div>
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Juntos construimos el futuro
        </h2>
      </div>

      <div className="relative overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-gray-900/5 to-gray-900/10 pointer-events-none" />

        {/* Motion container para scroll infinito */}
        <motion.div
          animate={{
            x: ['0%', '-100%'], // Desplaza el contenedor de 0% a -100%
          }}
          transition={{
            duration: duplicatedCompanies.length * 1.5, // Duración ajustada para mayor velocidad
            repeat: Infinity, // Repetición infinita
            ease: 'linear', // Movimiento constante
          }}
          className="flex gap-4" // Espaciado ajustado
        >
          {duplicatedCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300"
              style={{ width: '230px' }} // Ancho fijo de las tarjetas
            >
              <CompanyCard {...company} />
            </div>
          ))}
        </motion.div>

        {/* Efecto degradado en los bordes */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};
