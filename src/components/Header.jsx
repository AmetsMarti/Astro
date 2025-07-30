




export const Header = () =>  {

    
    return (
    <>
        {/* Container for centering the bubble */}
        <div className="flex justify-center p-4 sticky top-0 z-40">
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg inline-flex items-center px-6 py-3 max-w-fit">
                <nav className="flex space-x-4">
                    <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors whitespace-nowrap">
                        Home
                    </a>
                    <a href="/projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors whitespace-nowrap">
                        Projects
                    </a>
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