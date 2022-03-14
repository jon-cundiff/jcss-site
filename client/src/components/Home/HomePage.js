import React from "react";
import { Button, Row, Column } from "@jon-cundiff/jcss-components";

const HomePage = () => {
    return (
        <Column className="px-5 mx-5">
            <Row fill justify="between">
                <Column>
                    <Button
                        styleType="secondary"
                        onClick={() => new Window("/")}
                    >
                        Hi
                    </Button>
                    <Button styleType="info">Hi</Button>
                    <Button styleType="danger">Hi</Button>
                </Column>
                <Column>
                    <Button styleType="secondary">Hi</Button>
                    <Button styleType="info">Hi</Button>
                    <Button styleType="danger">Hi</Button>
                </Column>
                <Column>
                    <Button styleType="secondary">Hi</Button>
                    <Button styleType="info">Hi</Button>
                    <Button styleType="danger">Hi</Button>
                </Column>
            </Row>
            <Button>Hi</Button>
        </Column>
    );
};

export default HomePage;
