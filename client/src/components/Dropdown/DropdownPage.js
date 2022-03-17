import React from "react";
import { Button, Column, Card, MobileRow } from "@jon-cundiff/jcss-components";
import Syntax from "../Common/Syntax";

// import ex1jsx from "./button.ex1.react.js";
// import ex1html from "./button.ex1.html.js";

const DropdownPage = () => {
    return (
        <Column className="mx-5">
            <Card title="Dropdown">
                <MobileRow>
                    <Button>Primary</Button>
                    <Button disabled>Primary Disabled</Button>
                </MobileRow>
                <MobileRow>
                    {/* <Syntax codeString={ex1html} label="HTML" />
                    <Syntax codeString={ex1jsx} label="jcss-components" /> */}
                </MobileRow>
            </Card>
        </Column>
    );
};

export default DropdownPage;
