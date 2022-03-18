import React from "react";
import { Button, Column, Card, MobileRow } from "@jon-cundiff/jcss-components";
import Syntax from "../Common/Syntax";

// import ex1jsx from "./button.ex1.react.js";
// import ex1html from "./button.ex1.html.js";

const LayoutPage = () => {
    return (
        <Column className="mx-5">
            <Card title="Layout Utilities">
                <Column>
                    <h2>Introduction</h2>
                    <p>
                        The core of the JCSS layout system is the flexbox,
                        signified by the class <b>.parent</b>.
                    </p>
                    <h3>Row</h3>
                    <Syntax
                        codeString={'<div class="parent">Hi</div>'}
                    ></Syntax>
                    <p>This will create a left-to-right flex row.</p>
                    <h3>Column</h3>
                    <Syntax
                        codeString={'<div class="parent column">Hi</div>'}
                    ></Syntax>
                    <p>
                        Adding <b>column</b> to the class list will convert the
                        parent into a Column flexbox.
                    </p>
                    <h3>Reverse</h3>
                    <Syntax
                        codeString={'<div class="parent row-reverse">Hi</div>'}
                    ></Syntax>
                    <Syntax
                        codeString={
                            '<div class="parent column-reverse">Hi</div>'
                        }
                    ></Syntax>
                    <p>
                        Rows and Columns can be displayed in reverse order by
                        adding <b>{"<row  -or- column>-reverse"}</b>.
                    </p>
                    <h3>Gaps</h3>
                    <Syntax
                        codeString={'<div class="parent fg-5">Hi</div>'}
                    ></Syntax>
                    <Syntax
                        codeString={'<div class="parent fgx-5">Hi</div>'}
                    ></Syntax>
                    <Syntax
                        codeString={'<div class="parent fgy-5">Hi</div>'}
                    ></Syntax>
                    <p>
                        Appending <b>{"fg-<any # from 0 - 5>"}</b> will adjust
                        the gap between items.
                    </p>
                    <p>
                        Appending <b>{"fgx-<any # from 0 - 5>"}</b> will adjust
                        the gap between columns.
                    </p>
                    <p>
                        Appending <b>{"fgy-<any # from 0 - 5>"}</b> will adjust
                        the gap between rows.
                    </p>
                </Column>
            </Card>
        </Column>
    );
};

export default LayoutPage;
