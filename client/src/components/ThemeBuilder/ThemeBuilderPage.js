import React from "react";
import { Column, MobileRow, Button, Alert } from "@jon-cundiff/jcss-components";
import ColorPicker from "./ColorPicker";
import { makeThemeStyles } from "../../common/makeThemeStyles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
    postTheme,
    setSiteTheme,
    resetUserTheme,
    resetThemeAlert,
    updateTheme,
} from "../../store/actions/actionCreators";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const ThemeBuilderPage = () => {
    const dispatch = useDispatch();
    const themeBranch = useSelector((state) => state.theme);
    const [params] = useSearchParams();
    const themeId = params.get("id");
    const { user: theme, themeAlert } = themeBranch;
    const cssVarStyles = makeThemeStyles(theme);

    const handleThemeUpdate = () => {
        dispatch(setSiteTheme(theme));
    };

    const handleThemeSave = () => {
        if (themeId) {
            dispatch(updateTheme(theme, themeId));
        } else {
            dispatch(postTheme(theme));
        }
    };

    const handleResetUserTheme = () => {
        dispatch(resetUserTheme());
    };

    const handleClearAlert = () => {
        dispatch(resetThemeAlert());
    };

    useEffect(() => () => dispatch(resetThemeAlert()), []);
    return (
        <Column>
            {themeAlert && (
                <Alert
                    styleType={themeAlert.success ? "success" : "danger"}
                    text={themeAlert.message}
                    onClick={handleClearAlert}
                    showClose
                />
            )}
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
            {!themeId && (
                <Button styleType="danger" onClick={handleResetUserTheme}>
                    Reset Theme
                </Button>
            )}
            <Button styleType="info" onClick={handleThemeSave}>
                {themeId ? "Update" : "Save"} Theme
            </Button>
        </Column>
    );
};

export default ThemeBuilderPage;
