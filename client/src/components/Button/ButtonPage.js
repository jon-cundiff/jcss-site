import React from "react";
import { Button, Column, Card, MobileRow } from "@jon-cundiff/jcss-components";
import Syntax from "../Common/Syntax";

import ex1jsx from "./Button.ex1.react.js";
import ex1html from "./Button.ex1.html.js";

const ButtonPage = () => {
    return (
        <Column className="mx-5">
            <Card title="Button">
                <MobileRow>
                    <Button>Primary</Button>
                    <Button disabled>Primary Disabled</Button>
                    <Button styleType="primary" lighter>
                        Primary Lighter
                    </Button>
                    <Button styleType="primary" lighter disabled>
                        Primary Lighter Disabled
                    </Button>
                </MobileRow>
                <MobileRow>
                    <Button styleType="secondary">Secondary</Button>
                    <Button styleType="secondary" disabled>
                        Secondary Disabled
                    </Button>
                    <Button lighter styleType="secondary">
                        Secondary Lighter
                    </Button>
                    <Button lighter styleType="secondary" disabled>
                        Secondary Lighter Disabled
                    </Button>
                </MobileRow>
                <MobileRow>
                    <Button styleType="info">Info</Button>
                    <Button styleType="info" disabled>
                        Info Disabled
                    </Button>
                    <Button lighter styleType="info">
                        Info Lighter
                    </Button>
                    <Button lighter styleType="info" disabled>
                        Info Lighter Disabled
                    </Button>
                </MobileRow>
                <MobileRow>
                    <Button styleType="success">Success</Button>
                    <Button styleType="success" disabled>
                        Success Disabled
                    </Button>
                    <Button lighter styleType="success">
                        Success lighter
                    </Button>
                    <Button lighter styleType="success" disabled>
                        Success lighter Disabled
                    </Button>
                </MobileRow>
                <MobileRow className="mb-5">
                    <Button styleType="danger">Danger</Button>
                    <Button styleType="danger" disabled>
                        Danger Disabled
                    </Button>
                    <Button lighter styleType="danger">
                        Danger Lighter
                    </Button>
                    <Button lighter styleType="danger" disabled>
                        Danger Lighter Disabled
                    </Button>
                </MobileRow>
                <Card styleType="info" title="Sample Code">
                    <Column>
                        <Syntax codeString={ex1html} label="HTML" />
                        <Syntax codeString={ex1jsx} label="jcss-components" />
                    </Column>
                </Card>
            </Card>
        </Column>
    );
};

export default ButtonPage;
