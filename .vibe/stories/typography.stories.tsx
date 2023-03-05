import React from "react";

export default {
    path: "meep/typography/item",
};

export const Story = () => {
    return <div>Story</div>;
};
Story.story = {
    name: "custom name",
    decorator: ({ Component, id }) => {
        return (
            <>
                <mark>{id}</mark>
                <Component />
            </>
        );
    },
};
