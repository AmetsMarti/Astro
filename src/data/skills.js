// Tag icons configuration - paths are relative to base URL
export const tagIconPaths = {
    JavaScript: ["tagIcons/js.svg"],
    CSS: ["tagIcons/css.svg"],
    Python: ["tagIcons/python.svg", "tagIcons/pyplot.svg"],
    PyPlot: ["tagIcons/pyplot.svg"],
    Qiskit: ["tagIcons/qiskit.svg"],
    HTML: ["tagIcons/html.svg"],
    SQL: ["tagIcons/sql.svg"],
    GitHub: ["tagIcons/github.svg"],
    C: ["tagIcons/c.svg"],
    React: ["tagIcons/react.svg", "tagIcons/redux.svg"],
    Web: ["tagIcons/js.svg", "tagIcons/html.svg", "tagIcons/css.svg"],
    Java: ["tagIcons/java.svg"],
};

export const tags = ["Web", "Python", "SQL", "GitHub", "React", "C", "Java"];

// Helper to prepend base URL to icon paths
export function getTagIcons(base) {
    const result = {};
    for (const [key, paths] of Object.entries(tagIconPaths)) {
        result[key] = paths.map((path) => `${base}${path}`);
    }
    return result;
}
