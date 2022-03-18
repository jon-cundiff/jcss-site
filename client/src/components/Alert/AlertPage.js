import React from "react";
import { Column, Card, Alert } from "@jon-cundiff/jcss-components";
import Syntax from "../Common/Syntax";

import exJsx from "./Alert.ex.react.js";
import exHtml from "./Alert.ex.html.js";

const AlertPage = () => {
    return (
        <Column className="mx-5">
            <Card title="Alert">
                <Column>
                    <Alert styleType="primary" text="Primary" showClose />
                    <Alert styleType="secondary" text="Secondary" showClose />
                    <Alert styleType="info" text="Info" showClose />
                    <Alert styleType="success" text="Success" showClose />
                    <Alert styleType="danger" text="Danger" showClose />
                    <Card styleType="info" title="Example Code">
                        <Column>
                            <Syntax codeString={exHtml} label="HTML" />
                            <Syntax
                                codeString={exJsx}
                                label="jcss-components"
                            />
                        </Column>
                    </Card>
                </Column>
            </Card>
        </Column>
    );
};

export default AlertPage;
