import * as actionTypes from "./actionTypes";
import axios from "axios";

export const setUser = (user) => {
    localStorage.setItem("jwt", JSON.stringify(user));
    return {
        type: actionTypes.SET_USER,
        payload: user,
    };
};

export const logoutUser = () => {
    localStorage.removeItem("jwt");
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
