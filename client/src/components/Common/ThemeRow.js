import React from "react";

import { Row } from "@jon-cundiff/jcss-components";

const ThemeRow = ({ theme }) => {
    return (
        <Row fill justify="around" fgx={4}>
            <div
                className="p-5"
                style={{
                    backgroundColor: theme.primary,
                    width: "var(--theme-swatch)",
                    height: "var(--theme-swatch)",
                }}
            ></div>
            <div
                className="p-5"
                style={{
                    backgroundColor: theme.secondary,
                    width: "var(--theme-swatch)",
                    height: "var(--theme-swatch)",
                }}
            ></div>
            <div
                className="p-5"
                style={{
                    backgroundColor: theme.info,
                    width: "var(--theme-swatch)",
                    height: "var(--theme-swatch)",
                }}
            ></div>
            <div
                className="p-5"
                style={{
                    backgroundColor: theme.success,
                    width: "var(--theme-swatch)",
                    height: "var(--theme-swatch)",
                }}
            ></div>
            <div
                className="p-5"
                style={{
                    backgroundColor: theme.danger,
                    width: "var(--theme-swatch)",
                    height: "var(--theme-swatch)",
                }}
            ></div>
        </Row>
    );
};

export default ThemeRow;
