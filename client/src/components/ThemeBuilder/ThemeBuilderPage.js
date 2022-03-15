import React from "react";
import { Column, MobileRow, Button } from "@jon-cundiff/jcss-components";
import ColorPicker from "./ColorPicker";
import { makeThemeStyles } from "../../common/makeThemeStyles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSiteTheme } from "../../store/actions/actionCreators";

const ThemeBuilderPage = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.user);
    const cssVarStyles = makeThemeStyles(theme);

    const handleThemeUpdate = () => {
        dispatch(setSiteTheme(theme));
    };

    return (
        <Column>
            <div style={cssVarStyles} className="mx-5">
                <MobileRow wrap>
                    <ColorPicker
                        label="Primary"
                        colorMain={theme.primary.main}
                    />
                    <ColorPicker
                        label="Secondary"
                        colorMain={theme.secondary.main}
                    />
                    <ColorPicker label="Info" colorMain={theme.info.main} />
                    <ColorPicker
                        label="Success"
                        colorMain={theme.success.main}
                    />
                    <ColorPicker label="Danger" colorMain={theme.danger.main} />
                </MobileRow>
            </div>
            <Button styleType="primary" onClick={handleThemeUpdate}>
                Preview on Site
            </Button>
        </Column>
    );
};

export default ThemeBuilderPage;
