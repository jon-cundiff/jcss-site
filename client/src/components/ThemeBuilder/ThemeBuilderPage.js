import React from "react";
import {
    Column,
    MobileRow,
    Button,
    Alert,
    Card,
} from "@jon-cundiff/jcss-components";
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
import { prepareDownload } from "../../common/prepareDownload";
import CustomInstructions from "../Common/CustomInstructions";

const ThemeBuilderPage = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
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

    const handleDownloadClick = () => {
        prepareDownload(theme);
    };

    const saveButton = user ? (
        <Button styleType="info" onClick={handleThemeSave}>
            {themeId ? "Update" : "Save"} Theme
        </Button>
    ) : (
        <Button styleType="info" disabled>
            Log in to save a theme!
        </Button>
    );

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
            <Card title="Theme Builder">
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
                            <ColorPicker
                                label="Info"
                                colorMain={theme.info.main}
                            />
                            <ColorPicker
                                label="Success"
                                colorMain={theme.success.main}
                            />
                            <ColorPicker
                                label="Danger"
                                colorMain={theme.danger.main}
                            />
                        </MobileRow>
                    </div>
                    <Button styleType="primary" onClick={handleThemeUpdate}>
                        Preview on Site
                    </Button>
                    {!themeId && (
                        <Button
                            styleType="danger"
                            onClick={handleResetUserTheme}
                        >
                            Reset Theme
                        </Button>
                    )}
                    {saveButton}
                    <Button styleType="success" onClick={handleDownloadClick}>
                        Download Theme
                    </Button>
                </Column>
            </Card>
            <Card title="Using Custom Themes" styleType="secondary">
                <CustomInstructions />
            </Card>
        </Column>
    );
};

export default ThemeBuilderPage;
