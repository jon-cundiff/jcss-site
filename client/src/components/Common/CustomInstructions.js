import React from "react";

import { Column } from "@jon-cundiff/jcss-components";
import Syntax from "./Syntax";
import exJsx from "./CustomInstructions.ex.react";
import exHtml from "./CustomInstructions.ex.html";

const CustomInstructions = () => {
    return (
        <Column>
            <h2>HTML</h2>
            <p>
                The link tag to import the custom colors has to be <b>AFTER</b>{" "}
                the JCSS import.
            </p>
            <Syntax codeString={exHtml} />

            <h2>React</h2>
            <p>
                Import the custom colors within the function body inside your
                App component
            </p>
            <Syntax codeString={exJsx} />
        </Column>
    );
};

export default CustomInstructions;
