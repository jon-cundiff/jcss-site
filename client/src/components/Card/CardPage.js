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
                    <Card styleType="primary" sub>
                        Primary No Title
                    </Card>
                    <Card styleType="primary" lighter sub>
                        Primary Lighter No Title
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
                    <Card styleType="secondary" sub>
                        Secondary No Title
                    </Card>
                    <Card styleType="secondary" lighter sub>
                        Secondary Lighter No Title
                    </Card>
                    <Card styleType="info" title="Info" sub>
                        Hello World
                    </Card>
                    <Card styleType="info" title="Info Lighter" lighter sub>
                        Hello World
                    </Card>
                    <Card styleType="info" sub>
                        Info No Title
                    </Card>
                    <Card styleType="info" lighter sub>
                        Info Lighter No Title
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
                    <Card styleType="success" sub>
                        Success No Title
                    </Card>
                    <Card styleType="success" lighter sub>
                        Success Lighter No Title
                    </Card>
                    <Card styleType="danger" title="Danger" sub>
                        Hello World
                    </Card>
                    <Card styleType="danger" title="Danger Lighter" lighter sub>
                        Hello World
                    </Card>
                    <Card styleType="danger" sub>
                        Danger No Title
                    </Card>
                    <Card styleType="danger" lighter sub>
                        Danger Lighter No Title
                    </Card>
                </MobileRow>
                <Card styleType="info" title="Example Code">
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
