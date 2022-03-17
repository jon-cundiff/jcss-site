import React from "react";
import { Card, Column } from "@jon-cundiff/jcss-components";
import Syntax from "../Common/Syntax";

import exHtml from "./Started.ex.html";
import exBash from "./Started.ex.bash.js";
import exJsx from "./Started.ex.react";
import { Link } from "react-router-dom";

import "./GettingStarted.css";

const GettingStartedPage = () => {
    return (
        <Column className="mx-5">
            <Card title="Getting Started">
                <Column>
                    <h1>Installation</h1>
                    <h2 className="mt-5">HTML</h2>
                    <p>
                        Copy and paste the below <b>{"<link>"}</b> into your{" "}
                        <b>{"<head>"}</b> before any other stylesheets.
                    </p>
                    <Syntax codeString={exHtml} />

                    <h2 className="mt-5">React</h2>
                    <p>
                        Install the <b>@jon-cundiff/jcss-components</b> library
                        via npm.
                    </p>
                    <Syntax codeString={exBash} language="bash" />
                    <p>
                        Import the needed components via destructuring
                        assignments.
                    </p>
                    <Syntax codeString={exJsx} />
                </Column>
            </Card>
            <Card title="Available Components" styleType="info">
                <Column align="center" className="component-list">
                    <div>
                        <Link to="/docs/layout">Layout</Link>
                    </div>
                    <div>
                        <Link to="/docs/header">Header</Link>
                    </div>
                    <div>
                        <Link to="/docs/footer">Footer</Link>
                    </div>
                    <div>
                        <Link to="/docs/button">Button</Link>
                    </div>
                    <div>
                        <Link to="/docs/dropdown">Dropdown</Link>
                    </div>
                    <div>
                        <Link to="/docs/card">Card</Link>
                    </div>
                    <div>
                        <Link to="/docs/alert">Alert</Link>
                    </div>
                </Column>
            </Card>
        </Column>
    );
};

export default GettingStartedPage;
