import { useState, useEffect } from 'react';
import Timeline from './Timeline.jsx';

const TranslatedTimeline = (props) => {
  const [timelineSteps, setTimelineSteps] = useState([]);

  const updateTimelineSteps = () => {
    // Función simple para obtener traducciones
    const t = (key, defaultValue) => {
      if (typeof window !== 'undefined' && window.t) {
        return window.t(key, defaultValue);
      }
      return defaultValue;
    };

    const steps = [
      {
        content: {
          title: t('timeline.education.primary.title', 'Educación Primaria'),
          subtitle: t('timeline.education.primary.subtitle', 'Uzturpe Ikastola, Ibarra'),
          date: t('timeline.education.primary.date', '2010-2016')
        }
      },
      {
        content: {
          title: t('timeline.education.bachillerato.title', 'Bachillerato Científico'),
          subtitle: t('timeline.education.bachillerato.subtitle', 'Orixe BHI, Tolosa'),
          date: t('timeline.education.bachillerato.date', '2020-2022')
        }
      },
      {
        content: {
          title: t('timeline.education.university.title', 'Ingeniería Informática (En curso)'),
          subtitle: t('timeline.education.university.subtitle', 'Universidad - 3er año, Computación'),
          date: t('timeline.education.university.date', '2022-...')
        }
      },

      {
        content: {
          title: t('timeline.education.internship.title', 'Prácticas en Developair Technologies'),
          subtitle: t('timeline.education.internship.subtitle', 'Desarrollador Web - Frontend'),
          date: t('timeline.education.internship.date', '2025-06-02 - 2025-07-24')
        }
      },
      {
        content: {
          title: t('timeline.education.sapienza.title', 'Erasmus en La Sapienza Università di Roma'),
          subtitle: t('timeline.education.sapienza.subtitle', 'Ingeniería Informática'),
          date: t('timeline.education.sapienza.date', '2024-2025')
        }
      },
    ];

    setTimelineSteps(steps);
  };

  useEffect(() => {
    // Inicializar timeline
    updateTimelineSteps();

    // Escuchar cambios de idioma
    const handleLanguageChange = () => {
      updateTimelineSteps();
    };

    document.addEventListener('languageChanged', handleLanguageChange);

    return () => {
      document.removeEventListener('languageChanged', handleLanguageChange);
    };
  }, []);

  return <Timeline {...props} steps={timelineSteps} />;
};

export default TranslatedTimeline;
