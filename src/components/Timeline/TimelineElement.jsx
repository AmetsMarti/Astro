
export const TimelineElement = ({ title, subtitle, date, highlighted = false, className = "" }) => {
    if (highlighted) {
        return (
            <div className={`timeline-element ${className}`}>
                <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Graduado</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-1">{title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">{subtitle}</p>
                <p className="text-xs text-slate-500 dark:text-slate-500 font-medium">{date}</p>
            </div>
        );
    }
    return (
       <div className={`timeline-element ${className}`}>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-1">{title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">{subtitle}</p>
            <p className="text-xs text-slate-500 dark:text-slate-500 font-medium">{date}</p>
       </div>
    );
}