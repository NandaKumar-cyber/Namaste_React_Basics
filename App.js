import React from "react";
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement(
    "h1",{
        id:"title",
    },
    "Heading 1 from parcel"
);

const container = React.createElement(
    "div",
    {
        id:"container"
    },
    [heading1]
)

console.log(heading1)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);