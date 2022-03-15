import * as actionTypes from "./actionTypes";
import axios from "axios";
import { setToken, unsetToken } from "../../common/setAuthDefaults";

export const setUser = (user) => {
    setToken(user);

    return {
        type: actionTypes.SET_USER,
        payload: user,
    };
};

export const logoutUser = () => {
    unsetToken();
    return {
        type: actionTypes.LOGOUT_USER,
    };
};

export const setSiteTheme = (theme) => {
    return {
        type: actionTypes.SET_SITE_THEME,
        payload: theme,
    };
};

export const resetSiteTheme = () => {
    return {
        type: actionTypes.RESET_SITE_THEME,
    };
};

export const setUserTheme = (key, colors) => {
    return {
        type: actionTypes.SET_USER_THEME,
        payload: { key, colors },
    };
};

export const resetUserTheme = () => {
    return {
        type: actionTypes.RESET_USER_THEME,
    };
};

export const getThemes = () => async (dispatch) => {
    const themes = await axios.get("/themes");
    dispatch(setThemes(themes));
};

export const setThemes = (themes) => {
    return {
        type: actionTypes.SET_THEMES,
        payload: themes,
    };
};

export const postTheme = (theme) => async (dispatch) => {
    const colorsMain = {};

    for (let [key, val] of Object.entries(theme)) {
        colorsMain[key] = val.main;
    }

    try {
        const resp = await axios.post("/themes/new", colorsMain);
        if (resp.status !== 201) throw new Error();
        dispatch(setThemeAlert(true));
    } catch {
        dispatch(setThemeAlert(false));
    }
};

export const setThemeAlert = (success) => {
    return {
        type: actionTypes.setThemeAlert,
        payload: {
            success: success,
            message: success
                ? "Your theme was saved successfully."
                : "There was an error saving your theme.",
        },
    };
};
