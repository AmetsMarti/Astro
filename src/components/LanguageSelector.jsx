import { useState, useEffect } from 'react';

const LanguageSelector = () => {
  const [currentLang, setCurrentLang] = useState('es');

  useEffect(() => {
    // Obtener idioma inicial
    const savedLang = localStorage.getItem('language') || 'es';
    setCurrentLang(savedLang);

    // Escuchar cambios de idioma
    const handleLanguageChange = (event) => {
      setCurrentLang(event.detail.language);
    };

    document.addEventListener('languageChanged', handleLanguageChange);

    return () => {
      document.removeEventListener('languageChanged', handleLanguageChange);
    };
  }, []);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    
    // Usar la función global si está disponible
    if (typeof window !== 'undefined' && window.changeLanguage) {
      window.changeLanguage(newLang);
    } else {
      localStorage.setItem('language', newLang);
      window.location.reload();
    }
  };

  return (
    <div className="relative inline-block text-left">
      <div className="flex items-center gap-2">
        <select
          value={currentLang}
          onChange={handleLanguageChange}
          className="appearance-none bg-white/10 dark:bg-slate-800/30 backdrop-blur-sm border border-slate-200/20 dark:border-slate-600/30 rounded-lg px-3 py-2 text-slate-700 dark:text-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-500/50 cursor-pointer hover:bg-white/20 dark:hover:bg-slate-700/50 transition-colors"
        >
          <option value="es" className="bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200">ES</option>
          <option value="eu" className="bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200">EU</option>
          <option value="en" className="bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200">EN</option>
        </select>
        <svg 
          className="w-4 h-4 text-slate-600 dark:text-slate-400 pointer-events-none -ml-8"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default LanguageSelector;
