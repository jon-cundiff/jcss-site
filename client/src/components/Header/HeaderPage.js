import React from "react";
import { Header, Column, Card } from "@jon-cundiff/jcss-components";
import Syntax from "../Common/Syntax";

import ex1jsx from "./Header.ex1.react.js";
import ex1ajsx from "./Header.ex1a.react.js";
import ex2jsx from "./Header.ex2.react.js";
import exHtml from "./Header.ex.html.js";

import jcssLogo from "./jcss.svg";
import jcssLogoBlue from "../Home/jcss-blue.svg";

const HeaderPage = () => {
    const leftChildren = [
        {
            inner: "Home",
            link: "#",
        },
        {
            inner: "About",
            itemChildren: [
                {
                    inner: "About Us",
                    link: "#",
                },
                {
                    inner: "Location",
                    link: "#",
                },
            ],
        },
    ];
    const rightChildren = [
        {
            inner: "User",
            itemChildren: [
                {
                    inner: "Profile",
                    link: "#",
                },
                {
                    inner: "Log Out",
                    link: "#",
                },
            ],
        },
    ];

    return (
        <Column className="mx-5">
            <Card title="Header">
                <Column fgy={5}>
                    <Header
                        styleType="primary"
                        logoImg={jcssLogo}
                        leftChildren={leftChildren}
                        rightChildren={rightChildren}
                    />
                    <Header
                        styleType="primary"
                        lighter
                        logoImg={jcssLogoBlue}
                        leftChildren={leftChildren}
                        rightChildren={rightChildren}
                    />
                    <Header
                        styleType="secondary"
                        logoImg={jcssLogo}
                        leftChildren={leftChildren}
                        rightChildren={rightChildren}
                    />
                    <Header
                        styleType="secondary"
                        lighter
                        logoImg={jcssLogoBlue}
                        leftChildren={leftChildren}
                        rightChildren={rightChildren}
                    />
                    <Header
                        styleType="info"
                        logoImg={jcssLogo}
                        leftChildren={leftChildren}
                        rightChildren={rightChildren}
                    />
                    <Header
                        styleType="info"
                        lighter
                        logoImg={jcssLogoBlue}
                        leftChildren={leftChildren}
                        rightChildren={rightChildren}
                    />
                    <Header
                        styleType="success"
                        logoImg={jcssLogo}
                        leftChildren={leftChildren}
                        rightChildren={rightChildren}
                    />
                    <Header
                        styleType="success"
                        lighter
                        logoImg={jcssLogoBlue}
                        leftChildren={leftChildren}
                        rightChildren={rightChildren}
                    />
                    <Header
                        styleType="danger"
                        logoImg={jcssLogo}
                        leftChildren={leftChildren}
                        rightChildren={rightChildren}
                    />
                    <Header
                        styleType="danger"
                        lighter
                        logoImg={jcssLogoBlue}
                        leftChildren={leftChildren}
                        rightChildren={rightChildren}
                    />
                </Column>

                <Card title="Example Code" className="mt-5">
                    <Column>
                        <Syntax codeString={exHtml} label="HTML" />
                        <Syntax codeString={ex1jsx} label="jcss-components" />
                        <Syntax
                            codeString={ex1ajsx}
                            label="jcss-components setup"
                        />
                        <h3>Alternative</h3>
                        <Syntax
                            codeString={ex2jsx}
                            label="jcss-components alternative"
                        />
                    </Column>
                </Card>
            </Card>
        </Column>
    );
};

export default HeaderPage;
