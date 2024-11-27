import { Brain, Target, Workflow, Users, Bot, Zap, AlertCircle, HelpCircle, Lightbulb, BarChart, Rocket, Network } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ProfileSection {
  title: string;
  type: 'strengths' | 'skills' | 'weaknesses';
  items: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
}

interface Profile {
  title: string;
  summary: {
    strengths: number;
    skills: number;
    weaknesses: number;
  };
  sections: ProfileSection[];
}

export const playerProfile: Profile = {
  title: "Jugador Activo",
  summary: {
    strengths: 4,
    skills: 2,
    weaknesses: 2
  },
  sections: [
    {
      title: "Fortalezas",
      type: "strengths",
      items: [
        {
          icon: Brain,
          title: "Planificación Estratégica",
          description: "Asegura una hoja de ruta clara para el equipo, maximizando el rendimiento y minimizando errores."
        },
        {
          icon: Target,
          title: "Adaptación Técnica",
          description: "Ajuste ágil de estrategias ante nuevas tecnologías y cambios del mercado."
        },
        {
          icon: Users,
          title: "Liderazgo y Motivación",
          description: "Fomenta la colaboración eficiente y el compromiso del equipo."
        },
        {
          icon: Workflow,
          title: "Mentoría y Formación",
          description: "Impulsa el desarrollo de habilidades y el crecimiento del equipo."
        }
      ]
    },
    {
      title: "Habilidades Especiales",
      type: "skills",
      items: [
        {
          icon: Bot,
          title: "Integración de IA",
          description: "Automatización de tareas y mejora en la toma de decisiones basada en datos."
        },
        {
          icon: Zap,
          title: "Automatización de Procesos",
          description: "Optimización de la eficiencia operativa y reducción de errores manuales."
        }
      ]
    },
    {
      title: "Áreas de Mejora",
      type: "weaknesses",
      items: [
        {
          icon: AlertCircle,
          title: "Perfil Técnico No Especializado",
          description: "En ciertos proyectos puede ser necesario un conocimiento técnico más profundo."
        },
        {
          icon: HelpCircle,
          title: "Necesidad de Contexto Estratégico",
          description: "La efectividad puede verse limitada en situaciones ambiguas sin un contexto claro."
        }
      ]
    }
  ]
};

export const businessValue: Profile = {
  title: "Valor para la Empresa",
  summary: {
    strengths: 3,
    skills: 2,
    weaknesses: 1
  },
  sections: [
    {
      title: "Fortalezas",
      type: "strengths",
      items: [
        {
          icon: Lightbulb,
          title: "Visibilidad Tecnológica",
          description: "Aumenta la exposición ante stakeholders, demostrando liderazgo en innovación."
        },
        {
          icon: BarChart,
          title: "Optimización Estratégica",
          description: "Mejora la asignación de recursos y optimiza el rendimiento general."
        },
        {
          icon: Rocket,
          title: "Transformación Digital",
          description: "Facilita la transición hacia un entorno más digital y eficiente."
        }
      ]
    },
    {
      title: "Habilidades Especiales",
      type: "skills",
      items: [
        {
          icon: Network,
          title: "Asociación Innovadora",
          description: "Potencia alianzas estratégicas y colaboración con expertos y empresas líderes."
        },
        {
          icon: Target,
          title: "Impacto Comercial",
          description: "Incrementa las oportunidades de negocio y la rentabilidad empresarial."
        }
      ]
    },
    {
      title: "Consideraciones",
      type: "weaknesses",
      items: [
        {
          icon: AlertCircle,
          title: "Perfil de Enlace",
          description: "Algunas situaciones pueden requerir conocimiento técnico más profundo para implementaciones directas."
        }
      ]
    }
  ]
};