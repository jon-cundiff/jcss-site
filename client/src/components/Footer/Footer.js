import React from "react";
import { Footer as JCSSFooter, Row } from "@jon-cundiff/jcss-components";

const Footer = () => {
    return (
        <JCSSFooter className="px-5">
            <Row justify="center" fill>
                <p>2022 Jon Cundiff</p>
            </Row>
        </JCSSFooter>
    );
};

export default Footer;
