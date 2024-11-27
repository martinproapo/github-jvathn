import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  sections: {
    title: string;
    type: 'strengths' | 'skills' | 'weaknesses';
    items: {
      icon: LucideIcon;
      title: string;
      description: string;
    }[];
  }[];
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  title,
  sections,
}) => {
  const getSectionStyle = (type: string) => {
    switch (type) {
      case 'strengths':
        return 'border-l-4 border-green-500 bg-green-500/5';
      case 'skills':
        return 'border-l-4 border-[#FFD700] bg-[#FFD700]/5';
      case 'weaknesses':
        return 'border-l-4 border-red-500 bg-red-500/5';
      default:
        return '';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-[#1A2337] to-[#0B1120] rounded-xl shadow-2xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto border border-[#FFD700]/10"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6 sticky top-0 bg-[#1A2337] p-4 -mx-6 -mt-6 border-b border-[#FFD700]/10">
              <h2 className="text-2xl font-bold text-[#FFD700]">{title}</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-[#FFD700]/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <div className="space-y-8">
              {sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#FFD700]">{section.title}</h3>
                  <div className="space-y-4">
                    {section.items.map((item, itemIndex) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: itemIndex * 0.1 }}
                          className={`rounded-lg p-4 ${getSectionStyle(section.type)} hover:bg-opacity-10 transition-colors`}
                        >
                          <div className="flex items-start gap-4">
                            <div className="mt-1 text-[#FFD700]">
                              <Icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-[#FFD700]">{item.title}</h4>
                              <p className="text-gray-400 mt-1 group-hover:text-gray-300">{item.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};