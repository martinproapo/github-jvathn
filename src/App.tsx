import React, { useState, useEffect } from 'react';
import { ProfileCards } from './components/ProfileCards';
import { ComparisonChart } from './components/ComparisonChart';
import { BarChart3D } from './components/BarChart3D';
import { EmojiChart } from './components/EmojiChart';
import { ChartSection } from './components/ChartSection';
import { FloatingControls } from './components/Controls/FloatingControls';
import { CompanyShowcase } from './components/CompanyShowcase';
import { useSheetData } from './hooks/useSheetData';
import { COMPANIES, METRICS } from './config/constants';

function App() {
  const [companies, setCompanies] = useState(COMPANIES);
  const [metrics, setMetrics] = useState(METRICS);
  const { data, loading, error } = useSheetData();

  // Mouse move effect for cards
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.premium-card-bg');
      cards.forEach((card) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}%`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}%`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCompanyChange = (index: number) => {
    const newCompanies = [...companies];
    newCompanies[index].selected = !newCompanies[index].selected;
    setCompanies(newCompanies);
  };

  const handleMetricChange = (index: number) => {
    const newMetrics = [...metrics];
    newMetrics[index].selected = !newMetrics[index].selected;
    setMetrics(newMetrics);
  };

  const handleSelectAll = () => {
    setCompanies(companies.map(c => ({ ...c, selected: true })));
    setMetrics(metrics.map(m => ({ ...m, selected: true })));
  };

  const handleClearAll = () => {
    setCompanies(companies.map(c => ({ ...c, selected: false })));
    setMetrics(metrics.map(m => ({ ...m, selected: false })));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-rays flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FFD700]"></div>
          <p className="text-[#FFD700]">Cargando datos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-rays flex items-center justify-center">
        <div className="premium-card-bg p-6 rounded-lg shadow-lg max-w-md w-full border border-[#FFD700]/10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 mb-4">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-[#FFD700] mb-2">Error al cargar datos</h2>
            <p className="text-gray-400">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-rays p-6">
      <div className="flex justify-center mb-8">
        <div className="relative group">
          <div className="absolute -inset-1 bg-[#FFD700]/20 rounded-full blur-lg group-hover:bg-[#FFD700]/30 transition-colors"></div>
          <img 
            src="https://media.licdn.com/dms/image/v2/D4D0BAQG816L31vOCgQ/company-logo_200_200/company-logo_200_200/0/1721746030804?e=1740614400&v=beta&t=AYqknNPvii70yND2BF6uL_YdBZb7GnF4EB5dYWbph7M"
            alt="AI STARS Logo"
            className="relative w-32 h-32 object-contain rounded-full border-2 border-[#FFD700]/20 group-hover:border-[#FFD700]/40 transition-colors"
          />
        </div>
      </div>

      <FloatingControls
        companies={companies}
        metrics={metrics}
        onCompanyChange={handleCompanyChange}
        onMetricChange={handleMetricChange}
        onSelectAll={handleSelectAll}
        onClearAll={handleClearAll}
      />
      
      <div className="space-y-8">
        <ProfileCards />
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartSection title="Análisis Comparativo" icon="radar">
              <ComparisonChart
                companies={companies}
                metrics={metrics}
                data={data}
              />
            </ChartSection>
            
            <ChartSection title="Análisis 3D" icon="bar3d">
              <BarChart3D
                companies={companies}
                metrics={metrics}
                data={data}
              />
            </ChartSection>
          </div>

          <ChartSection title="Análisis Empresarial - Gráfico de Emoticones">
            <EmojiChart
              companies={companies}
              metrics={metrics}
              data={data}
            />
          </ChartSection>
        </div>

        <CompanyShowcase />
      </div>
    </div>
  );
}

export default App;