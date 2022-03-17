import React from "react";
import { Button, Column, MobileRow } from "@jon-cundiff/jcss-components";
import Syntax from "../Common/Syntax";

import ex1jsx from "./button.ex1.react.js";
import ex1html from "./button.ex1.html.js";

const ButtonPage = () => {
    return (
        <Column>
            <h1>Buttons</h1>
            <MobileRow>
                <Button>Primary</Button>
                <Button disabled>Primary Disabled</Button>
            </MobileRow>
            <MobileRow>
                <Syntax codeString={ex1html} label="HTML" />
                <Syntax codeString={ex1jsx} label="jcss-components" />
            </MobileRow>
        </Column>
    );
};

export default ButtonPage;
