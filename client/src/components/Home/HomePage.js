import React from "react";
import { Button, MobileRow, Column } from "@jon-cundiff/jcss-components";

import "./HomePage.css";
import jcssLogo from "./jcss-blue.svg";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const onStartedClick = () => {
        navigate("/docs/getting-started");
    };
    return (
        <Column className="px-5 mx-5 mt-5 pt-5">
            <MobileRow fill justify="around" fgx={5} className="mb-5 pb-5">
                <Column align="center">
                    <img src={jcssLogo} alt="JCSS Logo" />
                </Column>
                <Column className="hp-col" justify="center">
                    <h1>JCSS</h1>
                    <h3>Customizable CSS Framework</h3>
                    <p>
                        Rapidly design mobile-first layouts with JCSS. This
                        framework utilizes vanilla CSS (No Sass or other CSS
                        Preprocessors) and is built around Flexbox and vanilla
                        CSS Variables. The end result is easy to customize color
                        themes without requiring a build process.
                    </p>
                </Column>
            </MobileRow>
            <Button styleType="secondary" onClick={onStartedClick}>
                Get Started
            </Button>
            <p>
                Framework: <b>v0.2.3</b> | Component Library: <b>v0.2.5</b>
            </p>
        </Column>
    );
};

export default HomePage;
