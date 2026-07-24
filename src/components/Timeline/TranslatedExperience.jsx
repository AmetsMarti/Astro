import { useState, useEffect } from 'react';
import Timeline from './Timeline.jsx';

const TranslatedExperience = (props) => {
  const [timelineSteps, setTimelineSteps] = useState([]);

  const updateTimelineSteps = () => {
    const t = (key, defaultValue) => {
      if (typeof window !== 'undefined' && window.t) {
        return window.t(key, defaultValue);
      }
      return defaultValue;
    };

    const steps = [
      {
        content: {
          title: t('timeline.experience.internship.title', 'Praktikak Developair Technologies-en'),
          subtitle: t('timeline.experience.internship.subtitle', 'Web Garatzailea - Frontend'),
          date: t('timeline.experience.internship.date', '2025-06-02 - 2025-07-24')
        }
      },
      {
        content: {
          title: t('timeline.experience.tfg.title', 'TFG Lorteken'),
          subtitle: t('timeline.experience.tfg.subtitle', 'MLOps eta Machine Learning arkuko soldadura prozesuetan akatsak detektatzeko'),
          date: t('timeline.experience.tfg.date', 'Martxoa 2026 - Uztaila 2026')
        }
      }
    ];

    setTimelineSteps(steps);
  };

  useEffect(() => {
    updateTimelineSteps();

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

export default TranslatedExperience;
