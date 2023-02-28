import React from "react";
import { useVibeContext } from "@snowytime/vibe/client";

import "../src/presets/visby.scss";
import "../src/colours/colours.scss";
import "../src/colours/dark.scss";

export const Entry = ({ children }) => {
    const { storyUrls } = useVibeContext();
    const { theme, setTheme } = useTheme();
    return (
        <>
            <select value={theme} onChange={(e) => setTheme(e.target.value)}>
                <option value={"dark"}>dark</option>
                <option value={"light"}>light</option>
                <option value={"system"}>system</option>
            </select>
            {children}
        </>
    );
};

// custom hook that adds data-theme to dark or light or system and returns the current theme and setters
export const useTheme = () => {
    const [theme, setTheme] = React.useState("system");
    React.useLayoutEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);
    return { theme, setTheme };
};
