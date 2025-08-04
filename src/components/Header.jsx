




export const Header = () =>  {

    const handleHomeClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleTimelineClick = () => {
        // Scroll to timeline section
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
        // Scroll to projects section
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
                <nav className="flex space-x-4">
                    <button onClick={handleHomeClick} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors whitespace-nowrap">
                        Inicio
                    </button>
                    <button onClick={handleTimelineClick} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors whitespace-nowrap">
                        Timeline
                    </button>
                    <button onClick={handleProjectsClick} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors whitespace-nowrap">
                        Proyectos
                    </button>
                    <select className="text-gray-600 dark:text-slate-200 rounded-lg border border-slate-500 bg-slate-700 hover:bg-slate-800 dark:hover:text-white transition-colors whitespace-nowrap">
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">Basque</option>
                    </select>
                </nav>
            </div>
        </div>      

    </>);
}

export default Header;