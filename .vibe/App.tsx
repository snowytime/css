import React from "react";
import { useVibeContext } from "@snowytime/vibe/client";
import { Ui } from "./ui";

import "../src/presets/visby.scss";
import "../src/typography/visby/all.scss";

export const Entry = ({ children }) => {
    const { storyUrls, storyTree } = useVibeContext();
    return <Ui title='css-stuff'>{children}</Ui>;
};
