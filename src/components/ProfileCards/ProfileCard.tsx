import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProfileCardProps {
  title: string;
  summary: {
    strengths: number;
    skills: number;
    weaknesses: number;
  };
  onClick: () => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ title, summary, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="premium-card-bg glow-effect rounded-xl p-6 cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 group border border-[#FFD700]/10"
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-bold text-[#FFD700] group-hover:text-[#FFD700] transition-colors">{title}</h3>
        <ArrowRight className="w-5 h-5 text-[#FFD700] group-hover:translate-x-1 transition-transform" />
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-3 rounded-lg bg-[#0A1A3F]/50 group-hover:bg-[#FFD700]/5 transition-colors">
          <div className="text-2xl font-bold text-green-400">{summary.strengths}</div>
          <div className="text-xs text-gray-400 group-hover:text-gray-300">Fortalezas</div>
        </div>
        <div className="text-center p-3 rounded-lg bg-[#0A1A3F]/50 group-hover:bg-[#FFD700]/5 transition-colors">
          <div className="text-2xl font-bold text-[#FFD700]">{summary.skills}</div>
          <div className="text-xs text-gray-400 group-hover:text-gray-300">Habilidades</div>
        </div>
        <div className="text-center p-3 rounded-lg bg-[#0A1A3F]/50 group-hover:bg-[#FFD700]/5 transition-colors">
          <div className="text-2xl font-bold text-red-400">{summary.weaknesses}</div>
          <div className="text-xs text-gray-400 group-hover:text-gray-300">Debilidades</div>
        </div>
      </div>
    </motion.div>
  );
};