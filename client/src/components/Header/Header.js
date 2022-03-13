import React from "react";
import { Header as JCSSHeader } from "@jon-cundiff/jcss-components";

const Header = () => {
    const leftChildren = [
        {
            text: "Buttons",
            link: "/button",
        },
    ];

    return (
        <JCSSHeader
            styleType="secondary"
            logoText="JCSS"
            leftChildren={leftChildren}
        />
    );
};

export default Header;
