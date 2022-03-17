import React from "react";
import { Button, Column, Card, MobileRow } from "@jon-cundiff/jcss-components";
import Syntax from "../Common/Syntax";

import ex1jsx from "./button.ex1.react.js";
import ex1html from "./button.ex1.html.js";

const ButtonPage = () => {
    return (
        <Column className="mx-5">
            <Card title="Button">
                <MobileRow wrap>
                    <Button>Primary</Button>
                    <Button disabled>Primary Disabled</Button>
                    <Button styleType="secondary">Secondary</Button>
                    <Button styleType="secondary" disabled>
                        Secondary Disabled
                    </Button>
                    <Button styleType="info">Info</Button>
                    <Button styleType="info" disabled>
                        Info Disabled
                    </Button>
                    <Button styleType="success">Success</Button>
                    <Button styleType="success" disabled>
                        Success Disabled
                    </Button>
                    <Button styleType="danger">Danger</Button>
                    <Button styleType="danger" disabled>
                        Danger Disabled
                    </Button>
                </MobileRow>
                <MobileRow>
                    <Syntax codeString={ex1html} label="HTML" />
                    <Syntax codeString={ex1jsx} label="jcss-components" />
                </MobileRow>
            </Card>
        </Column>
    );
};

export default ButtonPage;
