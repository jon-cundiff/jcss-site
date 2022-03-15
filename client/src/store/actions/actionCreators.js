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

export const setUserTheme = (key, colors) => {
    return {
        type: actionTypes.SET_USER_THEME,
        payload: { key, colors },
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
