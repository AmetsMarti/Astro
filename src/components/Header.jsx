
import LanguageSelector from './LanguageSelector.jsx';
import { useState, useEffect } from 'react';

export const Header = () =>  {
    const [, forceUpdate] = useState({});

    // Forzar re-render cuando cambie el idioma
    useEffect(() => {
        const handleLanguageChange = () => {
            forceUpdate({});
        };

        document.addEventListener('languageChanged', handleLanguageChange);

        return () => {
            document.removeEventListener('languageChanged', handleLanguageChange);
        };
    }, []);

    // Función simple para obtener traducciones
    const t = (key, defaultValue) => {
        if (typeof window !== 'undefined' && window.t) {
            return window.t(key, defaultValue);
        }
        return defaultValue;
    };

    const handleHomeClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleTimelineClick = () => {
        const timelineSection = document.querySelector('.timeline');
        if (timelineSection) {
            timelineSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        }
    };

    const handleProjectsClick = () => {
        const projectsSection = document.querySelector('.projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            window.scrollTo({
                top: window.innerHeight * 2,
                behavior: 'smooth'
            });
        }
    };

    const handleExperienceClick = () => {
        const experienceSection = document.querySelector('.experience');
        if (experienceSection) {
            experienceSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            window.scrollTo({
                top: window.innerHeight * 3,
                behavior: 'smooth'
            });
        }

    };
    
    return (
    <>
        {/* Container for centering the bubble */}
        <div className="flex justify-center p-4 fixed top-0 z-40  ">
            <div className="bg-white/90 
                            dark:bg-slate-600/25 
                            backdrop-blur-lg 
                            rounded-2xl 
                            border 
                            border-slate-200 
                            dark:border-slate-700 
                            shadow-lg 
                            inline-flex 
                            items-center 
                            px-6 
                            py-3 
                            max-w-fit">
                <nav className="flex space-x-4 items-center">
                    <button onClick={handleHomeClick} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors whitespace-nowrap">
                        {t('nav.home', 'Inicio')}
                    </button>
                    <button onClick={handleTimelineClick} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors whitespace-nowrap">
                        {t('nav.studies', 'Estudios')}
                    </button>
                    <button onClick={handleExperienceClick} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors whitespace-nowrap">
                        {t('nav.experience', 'Experiencia')}
                    </button>
                    <button onClick={handleProjectsClick} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors whitespace-nowrap">
                        {t('nav.projects', 'Proyectos')}
                    </button>
                    <LanguageSelector />
                </nav>
            </div>
        </div>      

    </>);
}

export default Header;