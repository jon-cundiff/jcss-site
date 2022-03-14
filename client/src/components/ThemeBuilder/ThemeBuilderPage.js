import React from "react";
import { useState } from "react";
import { Column, MobileRow } from "@jon-cundiff/jcss-components";
import { defaultTheme } from "../../common/defaultTheme";
import ColorPicker from "./ColorPicker";
import { makeThemeStyles } from "../../common/makeThemeStyles";

const ThemeBuilderPage = () => {
    const [theme, setTheme] = useState(defaultTheme);

    const cssVarStyles = makeThemeStyles(theme);

    const onColorChange = (key, colorObj) => {
        setTheme({
            ...theme,
            [key]: colorObj,
        });
    };

    return (
        <div style={cssVarStyles} className="mx-5">
            <Column>
                <MobileRow wrap>
                    <ColorPicker
                        label="Primary"
                        colorMain={theme.primary.main}
                        onChange={onColorChange}
                    />
                    <ColorPicker
                        label="Secondary"
                        colorMain={theme.secondary.main}
                        onChange={onColorChange}
                    />
                    <ColorPicker
                        label="Info"
                        colorMain={theme.info.main}
                        onChange={onColorChange}
                    />
                    <ColorPicker
                        label="Success"
                        colorMain={theme.success.main}
                        onChange={onColorChange}
                    />
                    <ColorPicker
                        label="Danger"
                        colorMain={theme.danger.main}
                        onChange={onColorChange}
                    />
                </MobileRow>
            </Column>
        </div>
    );
};

export default ThemeBuilderPage;
