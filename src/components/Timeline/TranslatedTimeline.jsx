import { useState, useEffect } from "react";
import Timeline from "./Timeline.jsx";

const TranslatedTimeline = (props) => {
  const [timelineSteps, setTimelineSteps] = useState([]);

  const updateTimelineSteps = () => {
    const t = (key, defaultValue) => {
      if (typeof window !== "undefined" && window.t) {
        return window.t(key, defaultValue);
      }
      return defaultValue;
    };

    const steps = [
      {
        content: {
          title: t("timeline.education.primary.title", "Lehen Hezkuntza"),
          subtitle: t(
            "timeline.education.primary.subtitle",
            "Uzturpe Ikastola, Ibarra",
          ),
          date: t("timeline.education.primary.date", "2010-2016"),
        },
      },
      {
        content: {
          title: t(
            "timeline.education.bachillerato.title",
            "Batxilergoa Zientifikoa",
          ),
          subtitle: t(
            "timeline.education.bachillerato.subtitle",
            "Orixe BHI, Tolosa",
          ),
          date: t("timeline.education.bachillerato.date", "2020-2022"),
        },
      },
      {
        content: {
          title: t("timeline.education.exchange.title", "Erasmus Trukea"),
          subtitle: t(
            "timeline.education.exchange.subtitle",
            "La Sapienza, Erroma",
          ),
          date: t("timeline.education.exchange.date", "2024-2025"),
        },
      },
      {
        content: {
          title: t(
            "timeline.education.university.title",
            "Informatika Ingeniaritza",
          ),
          subtitle: t(
            "timeline.education.university.subtitle",
            "Euskal Herriko Unibertsitatea - Konputazioan Graduatua",
          ),
          date: t("timeline.education.university.date", "2022-2026"),
          highlighted: true,
        },
      },
    ];

    setTimelineSteps(steps);
  };

  useEffect(() => {
    updateTimelineSteps();

    const handleLanguageChange = () => {
      updateTimelineSteps();
    };

    document.addEventListener("languageChanged", handleLanguageChange);

    return () => {
      document.removeEventListener("languageChanged", handleLanguageChange);
    };
  }, []);

  return <Timeline {...props} steps={timelineSteps} />;
};

export default TranslatedTimeline;
