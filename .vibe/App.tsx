import React from "react";
import { useVibeContext } from "@snowytime/vibe/client";

import "../src/presets/visby.scss";

export const Entry = ({ children }) => {
    const { storyUrls } = useVibeContext();
    React.useEffect(() => {
        console.log(storyUrls);
    }, []);
    return <>{children}</>;
};
