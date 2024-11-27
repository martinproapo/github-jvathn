import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, BarChart2, LineChart } from 'lucide-react';

interface ChartSectionProps {
  title: string;
  icon?: 'radar' | 'bar3d';
  children: React.ReactNode;
}

export const ChartSection: React.FC<ChartSectionProps> = ({
  title,
  icon = 'radar',
  children
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gradient-to-br from-[#1A2337] to-[#0B1120] rounded-xl overflow-hidden shadow-xl border border-[#FFD700]/10">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-center justify-between hover:bg-[#FFD700]/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          {icon === 'radar' ? (
            <LineChart className="w-5 h-5 text-[#FFD700]" />
          ) : (
            <BarChart2 className="w-5 h-5 text-[#FFD700]" />
          )}
          <h2 className="text-lg font-semibold text-[#FFD700]">{title}</h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">
            {isExpanded ? 'Ocultar' : 'Visualizar'}
          </span>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};