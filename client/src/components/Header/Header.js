import React from "react";
import { Header as JCSSHeader, Button } from "@jon-cundiff/jcss-components";

const Header = () => {
    const leftChildren = [
        {
            inner: "Buttons",
            link: "/button",
        },
    ];

    const rightChildren = [
        {
            inner: (
                <Button styleType="info" faIcon="fab fa-github">
                    Login
                </Button>
            ),
            external: true,
            link: `${process.env.REACT_APP_BASE_URL}/auth/github`,
        },
    ];

    return (
        <JCSSHeader
            styleType="secondary"
            logoText="JCSS"
            leftChildren={leftChildren}
            rightChildren={rightChildren}
        />
    );
};

export default Header;
