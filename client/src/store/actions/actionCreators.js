import * as actionTypes from "./actionTypes";
import axios from "axios";
import { setToken, unsetToken } from "../../common/setAuthDefaults";

export const getGuestUser = () => async (dispatch) => {
    const resp = await axios.get("/auth/guest");
    dispatch(setUser(resp.data));
};

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

export const getThemes = async () => {
    const resp = await axios.get("/themes");
    return resp.data.themes;
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

export const updateTheme = (theme, themeId) => async (dispatch) => {
    const colorsMain = { id: themeId };

    for (let [key, val] of Object.entries(theme)) {
        colorsMain[key] = val.main;
    }

    try {
        const resp = await axios.put("/themes/update", colorsMain);
        if (resp.status !== 200) throw new Error();
        dispatch(setThemeAlert(true));
    } catch {
        dispatch(setThemeAlert(false));
    }
};

export const deleteTheme = async (themeId) => {
    await axios.delete("/themes/delete", { data: { id: themeId } });
    return { success: true };
};

export const getFavorites = async () => {
    const resp = await axios.get("/themes/favorites");
    return resp.data.favorites;
};

export const postFavorite = async (themeId) => {
    const resp = await axios.post("/themes/add-favorite", { themeId });
    return resp.data.favorite;
};

export const deleteFavorite = async (favoriteId) => {
    await axios.delete("/themes/delete-favorite", { data: { id: favoriteId } });
    return { success: true };
};

export const getUserThemes = async () => {
    try {
        const resp = await axios.get("/themes/profile");
        return resp.data.themes;
    } catch {
        return { success: false };
    }
};

export const setThemeAlert = (success) => {
    return {
        type: actionTypes.SET_THEME_ALERT,
        payload: {
            success: success,
            message: success
                ? "Your theme was saved successfully."
                : "There was an error saving your theme.",
        },
    };
};

export const resetThemeAlert = () => {
    return {
        type: actionTypes.RESET_THEME_ALERT,
    };
};
