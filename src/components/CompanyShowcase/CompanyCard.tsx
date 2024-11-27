import React from 'react';
import { motion } from 'framer-motion';
import { Beer, Radio, Cookie, Wrench, Gauge, Brain, Car, Ship } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface CompanyCardProps {
  name: string;
  url: string;
  description: string;
  icon: 'beer' | 'radio' | 'cookie' | 'wrench' | 'gauge' | 'brain' | 'car' | 'ship';
}

const icons: Record<string, LucideIcon> = {
  beer: Beer,
  radio: Radio,
  cookie: Cookie,
  wrench: Wrench,
  gauge: Gauge,
  brain: Brain,
  car: Car,
  ship: Ship,
};

// Define color schemes for each company
const colorSchemes: Record<string, { background: string; hover: string; icon: string }> = {
  OCD: {
    background: 'from-[#15118C] to-[#1F5AA6]', // Azul oscuro a azul vibrante
    hover: 'hover:bg-[#3FA8BF]', // Azul claro en hover
    icon: 'text-[#3FA8BF] group-hover:text-[#020659]', // Azul claro a azul oscuro
  },
  'INS Servicios': {
    background: 'from-[#0477BF] to-[#419FD9]', // Azul oscuro a azul claro
    hover: 'hover:bg-[#A3C4D9]', // Hover con azul pálido
    icon: 'text-[#F2F2F2] group-hover:text-[#0367A6]', // Blanco a azul oscuro
  },
  Founderz: {
    background: 'from-[#514BF2] to-[#8B89D9]', // Violeta oscuro a claro
    hover: 'hover:bg-[#C3C2F2]', // Hover con violeta suave
    icon: 'text-[#C3C2F2] group-hover:text-[#4945BF]', // Violeta suave a oscuro
  },
  Blueink: {
    background: 'from-[#0A8CBF] to-[#4AB0D9]', // Azul vibrante
    hover: 'hover:bg-[#84C1D9]', // Azul claro en hover
    icon: 'text-[#F2F2F2] group-hover:text-[#0D0D0D]', // Blanco a negro
  },
  Grosselli: {
    background: 'from-[#034C8C] to-[#348ABF]', // Azul oscuro a medio
    hover: 'hover:bg-[#80A2BF]', // Hover con azul claro
    icon: 'text-[#F2F2F2] group-hover:text-[#023E73]', // Blanco a azul oscuro
  },
  Vaxel: {
    background: 'from-[#F21D2F] to-[#2A0F8C]', // Rojo a azul
    hover: 'hover:bg-[#F21616]', // Rojo vibrante en hover
    icon: 'text-[#F21616] group-hover:text-[#F2F2F2]', // Rojo a blanco
  },
  Bimbo: {
    background: 'from-[#F22233] to-[#074E8C]', // Rojo a azul profundo
    hover: 'hover:bg-[#A61420]', // Rojo oscuro en hover
    icon: 'text-[#F2F2F2] group-hover:text-[#0D0D0D]', // Blanco a negro
  },
};

export const CompanyCard: React.FC<CompanyCardProps> = ({
  name,
  url,
  description,
  icon,
}) => {
  const Icon = icons[icon];
  const colors = colorSchemes[name] || {
    background: 'from-gray-800 to-gray-900', // Default fallback
    hover: 'hover:bg-blue-500/10',
    icon: 'text-gray-300 group-hover:text-white',
  };

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block bg-gradient-to-br ${colors.background} rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 h-28 w-80 border border-gray-800 ${colors.hover}`}
    >
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-lg transition-colors relative ${colors.hover}`}>
          <Icon className={`w-8 h-8 ${colors.icon} transition-colors relative z-10`} />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-base font-semibold text-white truncate">{name}</h3>
          <p className="text-sm text-gray-300 group-hover:text-white truncate">
            {description}
          </p>
        </div>
      </div>
    </motion.a>
  );
};
