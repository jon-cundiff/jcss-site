import React from "react";
import { Footer, Column, Card, MobileRow } from "@jon-cundiff/jcss-components";
import Syntax from "../Common/Syntax";

import exJsx from "./Footer.ex.react.js";
import exHtml from "./Footer.ex.html.js";

const FooterPage = () => {
    return (
        <Column className="mx-5">
            <Card title="Footer">
                <Column>
                    <p>
                        <b>IMPORTANT:</b> For the footer to be placed properly{" "}
                        <i>
                            (meaning below all content and at least at the
                            bottom of the window)
                        </i>
                        , it must be the final direct child of an element with
                        the <b>.app</b> class or the <b>{"<JCSSApp>"}</b>{" "}
                        component.
                    </p>
                    <Footer styleType="primary">
                        <Column>
                            <p>Left 1</p>
                            <p>Left 2</p>
                            <p>Left 3</p>
                        </Column>
                        <Column>
                            <p>Center 1</p>
                            <p>Center 2</p>
                            <p>Center 3</p>
                        </Column>
                        <Column>
                            <p>Right 1</p>
                            <p>Right 2</p>
                            <p>Right 3</p>
                        </Column>
                    </Footer>
                    <Footer styleType="primary" lighter>
                        <Column>
                            <p>Left 1</p>
                            <p>Left 2</p>
                            <p>Left 3</p>
                        </Column>
                        <Column>
                            <p>Center 1</p>
                            <p>Center 2</p>
                            <p>Center 3</p>
                        </Column>
                        <Column>
                            <p>Right 1</p>
                            <p>Right 2</p>
                            <p>Right 3</p>
                        </Column>
                    </Footer>
                    <Footer styleType="secondary">
                        <Column>
                            <p>Left 1</p>
                            <p>Left 2</p>
                            <p>Left 3</p>
                        </Column>
                        <Column>
                            <p>Center 1</p>
                            <p>Center 2</p>
                            <p>Center 3</p>
                        </Column>
                        <Column>
                            <p>Right 1</p>
                            <p>Right 2</p>
                            <p>Right 3</p>
                        </Column>
                    </Footer>
                    <Footer styleType="secondary" lighter>
                        <Column>
                            <p>Left 1</p>
                            <p>Left 2</p>
                            <p>Left 3</p>
                        </Column>
                        <Column>
                            <p>Center 1</p>
                            <p>Center 2</p>
                            <p>Center 3</p>
                        </Column>
                        <Column>
                            <p>Right 1</p>
                            <p>Right 2</p>
                            <p>Right 3</p>
                        </Column>
                    </Footer>
                    <Footer styleType="info">
                        <Column>
                            <p>Left 1</p>
                            <p>Left 2</p>
                            <p>Left 3</p>
                        </Column>
                        <Column>
                            <p>Center 1</p>
                            <p>Center 2</p>
                            <p>Center 3</p>
                        </Column>
                        <Column>
                            <p>Right 1</p>
                            <p>Right 2</p>
                            <p>Right 3</p>
                        </Column>
                    </Footer>
                    <Footer styleType="info" lighter>
                        <Column>
                            <p>Left 1</p>
                            <p>Left 2</p>
                            <p>Left 3</p>
                        </Column>
                        <Column>
                            <p>Center 1</p>
                            <p>Center 2</p>
                            <p>Center 3</p>
                        </Column>
                        <Column>
                            <p>Right 1</p>
                            <p>Right 2</p>
                            <p>Right 3</p>
                        </Column>
                    </Footer>
                    <Footer styleType="success">
                        <Column>
                            <p>Left 1</p>
                            <p>Left 2</p>
                            <p>Left 3</p>
                        </Column>
                        <Column>
                            <p>Center 1</p>
                            <p>Center 2</p>
                            <p>Center 3</p>
                        </Column>
                        <Column>
                            <p>Right 1</p>
                            <p>Right 2</p>
                            <p>Right 3</p>
                        </Column>
                    </Footer>
                    <Footer styleType="success" lighter>
                        <Column>
                            <p>Left 1</p>
                            <p>Left 2</p>
                            <p>Left 3</p>
                        </Column>
                        <Column>
                            <p>Center 1</p>
                            <p>Center 2</p>
                            <p>Center 3</p>
                        </Column>
                        <Column>
                            <p>Right 1</p>
                            <p>Right 2</p>
                            <p>Right 3</p>
                        </Column>
                    </Footer>
                    <Footer styleType="danger">
                        <Column>
                            <p>Left 1</p>
                            <p>Left 2</p>
                            <p>Left 3</p>
                        </Column>
                        <Column>
                            <p>Center 1</p>
                            <p>Center 2</p>
                            <p>Center 3</p>
                        </Column>
                        <Column>
                            <p>Right 1</p>
                            <p>Right 2</p>
                            <p>Right 3</p>
                        </Column>
                    </Footer>
                    <Footer styleType="danger" lighter>
                        <Column>
                            <p>Left 1</p>
                            <p>Left 2</p>
                            <p>Left 3</p>
                        </Column>
                        <Column>
                            <p>Center 1</p>
                            <p>Center 2</p>
                            <p>Center 3</p>
                        </Column>
                        <Column>
                            <p>Right 1</p>
                            <p>Right 2</p>
                            <p>Right 3</p>
                        </Column>
                    </Footer>
                </Column>
                <Card
                    styleType="secondary"
                    title="ExampleCode"
                    className="mt-5"
                >
                    <MobileRow>
                        <Syntax codeString={exHtml} label="HTML" />
                        <Syntax codeString={exJsx} label="jcss-components" />
                    </MobileRow>
                </Card>
            </Card>
        </Column>
    );
};

export default FooterPage;
