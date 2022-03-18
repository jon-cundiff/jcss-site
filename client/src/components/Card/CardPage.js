import React from "react";
import { Column, Card, MobileRow } from "@jon-cundiff/jcss-components";
import Syntax from "../Common/Syntax";

import exJsx from "./Card.ex.react.js";
import exHtml from "./Card.ex.html.js";

const CardPage = () => {
    return (
        <Column className="mx-5">
            <Card title="Card">
                <MobileRow wrap className="mb-5">
                    <Card styleType="primary" title="Primary" sub>
                        Hello World
                    </Card>
                    <Card
                        styleType="primary"
                        title="Primary Lighter"
                        lighter
                        sub
                    >
                        Hello World
                    </Card>
                    <Card styleType="secondary" title="Secondary" sub>
                        Hello World
                    </Card>
                    <Card
                        styleType="secondary"
                        title="Secondary Lighter"
                        lighter
                        sub
                    >
                        Hello World
                    </Card>
                    <Card styleType="info" title="Info" sub>
                        Hello World
                    </Card>
                    <Card styleType="info" title="Info Lighter" lighter sub>
                        Hello World
                    </Card>
                    <Card styleType="success" title="Success" sub>
                        Hello World
                    </Card>
                    <Card
                        styleType="success"
                        title="Success Lighter"
                        lighter
                        sub
                    >
                        Hello World
                    </Card>
                    <Card styleType="danger" title="Danger" sub>
                        Hello World
                    </Card>
                    <Card styleType="danger" title="Danger Lighter" lighter sub>
                        Hello World
                    </Card>
                </MobileRow>
                <Card styleType="info" title="Sample Code">
                    <Column>
                        <Syntax codeString={exHtml} label="HTML" />
                        <Syntax codeString={exJsx} label="jcss-components" />
                    </Column>
                </Card>
            </Card>
        </Column>
    );
};

export default CardPage;
