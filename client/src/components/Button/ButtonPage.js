import React from "react";
import { Button, Column, Card, Row } from "@jon-cundiff/jcss-components";
import Syntax from "../Common/Syntax";

import ex1jsx from "./button.ex1.react.js";
import ex1html from "./button.ex1.html.js";

const ButtonPage = () => {
    return (
        <Column className="mx-5">
            <Card title="Button">
                <Row>
                    <Button>Primary</Button>
                    <Button disabled>Primary Disabled</Button>
                    <Button styleType="primary" lighter>
                        Primary
                    </Button>
                    <Button styleType="primary" lighter disabled>
                        Primary Disabled
                    </Button>
                </Row>
                <Row>
                    <Button styleType="secondary">Secondary</Button>
                    <Button styleType="secondary" disabled>
                        Secondary Disabled
                    </Button>
                    <Button lighter styleType="secondary">
                        Secondary
                    </Button>
                    <Button lighter styleType="secondary" disabled>
                        Secondary Disabled
                    </Button>
                </Row>
                <Row>
                    <Button styleType="info">Info</Button>
                    <Button styleType="info" disabled>
                        Info Disabled
                    </Button>
                    <Button lighter styleType="info">
                        Info
                    </Button>
                    <Button lighter styleType="info" disabled>
                        Info Disabled
                    </Button>
                </Row>
                <Row>
                    <Button styleType="success">Success</Button>
                    <Button styleType="success" disabled>
                        Success Disabled
                    </Button>
                    <Button lighter styleType="success">
                        Success
                    </Button>
                    <Button lighter styleType="success" disabled>
                        Success Disabled
                    </Button>
                </Row>
                <Row>
                    <Button styleType="danger">Danger</Button>
                    <Button styleType="danger" disabled>
                        Danger Disabled
                    </Button>
                    <Button lighter styleType="danger">
                        Danger
                    </Button>
                    <Button lighter styleType="danger" disabled>
                        Danger Disabled
                    </Button>
                </Row>
                <Row>
                    <Syntax codeString={ex1html} label="HTML" />
                    <Syntax codeString={ex1jsx} label="jcss-components" />
                </Row>
            </Card>
        </Column>
    );
};

export default ButtonPage;
