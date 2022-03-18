import React from "react";
import {
    Dropdown,
    Column,
    Card,
    MobileRow,
} from "@jon-cundiff/jcss-components";
import Syntax from "../Common/Syntax";

import exJsx from "./Dropdown.ex.react.js";
import exHtml from "./Dropdown.ex.html.js";

const DropdownPage = () => {
    return (
        <Column className="mx-5">
            <Card title="Dropdown">
                <MobileRow
                    wrap
                    className="pr-5 mr-5 mb-5"
                    align="center"
                    justify="start"
                >
                    <Dropdown styleType="primary" title="Primary">
                        <p>Item 1</p>
                        <p>Item 2</p>
                        <p>Item 3</p>
                    </Dropdown>
                    <Dropdown
                        styleType="primary"
                        lighter
                        title="Primary Lighter"
                    >
                        <p>Item 1</p>
                        <p>Item 2</p>
                        <p>Item 3</p>
                    </Dropdown>
                    <Dropdown styleType="secondary" title="Secondary">
                        <p>Item 1</p>
                        <p>Item 2</p>
                        <p>Item 3</p>
                    </Dropdown>
                    <Dropdown
                        styleType="secondary"
                        lighter
                        title="Secondary Lighter"
                    >
                        <p>Item 1</p>
                        <p>Item 2</p>
                        <p>Item 3</p>
                    </Dropdown>
                    <Dropdown styleType="info" title="Info">
                        <p>Item 1</p>
                        <p>Item 2</p>
                        <p>Item 3</p>
                    </Dropdown>
                    <Dropdown styleType="info" lighter title="Info Lighter">
                        <p>Item 1</p>
                        <p>Item 2</p>
                        <p>Item 3</p>
                    </Dropdown>
                    <Dropdown styleType="success" title="Success">
                        <p>Item 1</p>
                        <p>Item 2</p>
                        <p>Item 3</p>
                    </Dropdown>
                    <Dropdown
                        styleType="success"
                        lighter
                        title="Success Lighter"
                    >
                        <p>Item 1</p>
                        <p>Item 2</p>
                        <p>Item 3</p>
                    </Dropdown>
                    <Dropdown styleType="danger" title="Danger">
                        <p>Item 1</p>
                        <p>Item 2</p>
                        <p>Item 3</p>
                    </Dropdown>
                    <Dropdown styleType="danger" lighter title="Danger Lighter">
                        <p>Item 1</p>
                        <p>Item 2</p>
                        <p>Item 3</p>
                    </Dropdown>
                </MobileRow>
                <Card styleType="secondary" title="Example Code">
                    <Column>
                        <Syntax codeString={exHtml} label="HTML" />
                        <Syntax codeString={exJsx} label="jcss-components" />
                    </Column>
                </Card>
            </Card>
        </Column>
    );
};

export default DropdownPage;
