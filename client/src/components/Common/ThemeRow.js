import React from "react";

import { Row, Column, Button } from "@jon-cundiff/jcss-components";

import "./ThemeRow.css";

const ThemeRow = ({ theme, owner }) => {
    const themeColors = [
        theme.primary,
        theme.secondary,
        theme.info,
        theme.success,
        theme.danger,
    ];
    const themeItems = themeColors.map((color, i) => (
        <div
            className="p-5"
            key={i}
            style={{
                backgroundColor: color,
                width: "var(--theme-swatch)",
                height: "var(--theme-swatch)",
            }}
        ></div>
    ));

    return (
        <Column className="theme-box mx-3 fgy-0">
            <Row justify="around" fgx={4}>
                {themeItems}
            </Row>
            <div
                className="parent justify-center row-wrap theme-controls"
                data-owner={owner ? "owner" : "other"}
            >
                {owner && <Button faIcon="fas fa-edit">Edit</Button>}
                <Button faIcon="fas fa-copy" styleType="info">
                    Clone
                </Button>
                <Button faIcon="fas fa-angle-double-up" styleType="secondary">
                    Apply
                </Button>
                {owner && (
                    <Button faIcon="fas fa-trash" styleType="danger">
                        Delete
                    </Button>
                )}
            </div>
        </Column>
    );
};

export default ThemeRow;
