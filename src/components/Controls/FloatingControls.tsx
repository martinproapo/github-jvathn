import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X } from 'lucide-react';
import { Company, Metric } from '../../types';
import { Checkbox } from '../ui/Checkbox';
import { Button } from '../ui/Button';

interface FloatingControlsProps {
  companies: Company[];
  metrics: Metric[];
  onCompanyChange: (index: number) => void;
  onMetricChange: (index: number) => void;
  onSelectAll: () => void;
  onClearAll: () => void;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({
  companies,
  metrics,
  onCompanyChange,
  onMetricChange,
  onSelectAll,
  onClearAll,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 bg-[#FFD700]/20 hover:bg-[#FFD700]/30 text-white p-2.5 rounded-lg shadow-lg backdrop-blur-sm transition-all duration-300 flex items-center gap-2 group"
      >
        <Filter className="w-4 h-4" />
        <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 -ml-1 group-hover:ml-0">
          Filtros
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-20 left-4 z-[70] w-full max-w-4xl"
            >
              <div className="bg-gradient-to-br from-[#1A2337] to-[#0B1120] rounded-xl shadow-2xl border border-[#FFD700]/10">
                <div className="flex justify-between items-center p-4 border-b border-[#FFD700]/10">
                  <div className="flex items-center gap-3">
                    <Filter className="w-5 h-5 text-[#FFD700]" />
                    <h2 className="text-lg font-bold text-[#FFD700]">Filtros de Visualización</h2>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-[#FFD700]/10 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-400 mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                        Empresas
                      </h3>
                      <div className="space-y-1 bg-[#0B1120]/50 rounded-lg p-3">
                        {companies.map((company, index) => (
                          <Checkbox
                            key={company.name}
                            label={company.name}
                            checked={company.selected}
                            onChange={() => onCompanyChange(index)}
                          />
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-400 mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                        Métricas
                      </h3>
                      <div className="space-y-1 bg-[#0B1120]/50 rounded-lg p-3">
                        {metrics.map((metric, index) => (
                          <Checkbox
                            key={metric.name}
                            label={metric.name}
                            checked={metric.selected}
                            onChange={() => onMetricChange(index)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center gap-3 mt-6 pt-4 border-t border-[#FFD700]/10">
                    <Button onClick={onSelectAll} size="sm" className="w-40 bg-[#FFD700] text-[#0B1120] hover:bg-[#FFD700]/90">
                      Seleccionar Todo
                    </Button>
                    <Button onClick={onClearAll} variant="outline" size="sm" className="w-40 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10">
                      Limpiar Todo
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};