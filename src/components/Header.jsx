
import LanguageSelector from './LanguageSelector.jsx';
import { useState, useEffect } from 'react';
import { MdModeNight } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const Header = () => {
    const [, forceUpdate] = useState({});
    const [activeSection, setActiveSection] = useState('home');
    const [theme, setTheme] = useState(
        typeof localStorage !== 'undefined' ? localStorage.getItem('theme') || 'dark' : 'dark'
    );

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'light') {
            root.classList.remove('dark');
            root.classList.add('light');
        } else {
            root.classList.add('dark');
            root.classList.remove('light');
        }
        localStorage.setItem('theme', theme);
        document.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
    }, [theme]);

    useEffect(() => {
        const handleLanguageChange = () => {
            forceUpdate({});
        };

        document.addEventListener('languageChanged', handleLanguageChange);

        return () => {
            document.removeEventListener('languageChanged', handleLanguageChange);
        };
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

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
        const timelineSection = document.querySelector('.timeline-section');
        if (timelineSection) {
            timelineSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
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
        }
    };

    const handleExperienceClick = () => {
        const experienceSection = document.querySelector('.experience');
        if (experienceSection) {
            experienceSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <>
            {/* Container for centering the bubble */}
            <div className="flex justify-center p-4 fixed top-0 w-full z-40">
                <div className="bg-white/90 
                            dark:bg-slate-800/80 
                            backdrop-blur-lg 
                            rounded-2xl 
                            border 
                            border-slate-200 
                            dark:border-slate-700 
                            shadow-lg 
                            inline-flex 
                            items-center 
                            px-4 
                            md:px-6 
                            py-3 
                            max-w-fit">
                    <nav className="flex space-x-2 md:space-x-4 items-center">
                        <button onClick={handleHomeClick} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors whitespace-nowrap text-sm md:text-base">
                            {t('nav.home', 'Inicio')}
                        </button>
                        <button onClick={handleTimelineClick} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors whitespace-nowrap text-sm md:text-base">
                            {t('nav.studies', 'Estudios')}
                        </button>
                        <button onClick={handleExperienceClick} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors whitespace-nowrap text-sm md:text-base">
                            {t('nav.experience', 'Experiencia')}
                        </button>


                        <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-1 md:mx-2"></div>

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? (
                                <MdModeNight className="h-5 w-5" />
                            ) : (
                                <MdLightMode className="h-5 w-5" />
                            )}
                        </button>

                        <LanguageSelector />
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;