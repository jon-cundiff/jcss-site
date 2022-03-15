import * as actionTypes from "../actions/actionTypes";
import { defaultTheme } from "../../common/defaultTheme";

const initialState = {
    hasSiteChanged: false,
    themeAlert: null,
    site: {
        primary: { ...defaultTheme.primary },
        secondary: { ...defaultTheme.secondary },
        info: { ...defaultTheme.info },
        success: { ...defaultTheme.success },
        danger: { ...defaultTheme.danger },
    },
    user: {
        primary: { ...defaultTheme.primary },
        secondary: { ...defaultTheme.secondary },
        info: { ...defaultTheme.info },
        success: { ...defaultTheme.success },
        danger: { ...defaultTheme.danger },
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SITE_THEME:
            return {
                ...state,
                site: action.payload,
                hasSiteChanged: true,
            };
        case actionTypes.RESET_SITE_THEME:
            return {
                ...state,
                site: initialState.site,
                hasSiteChanged: false,
            };
        case actionTypes.SET_USER_THEME:
            return {
                ...state,
                user: {
                    ...state.user,
                    [action.payload.key]: action.payload.colors,
                },
            };
        case actionTypes.RESET_USER_THEME:
            return {
                ...state,
                user: initialState.user,
            };
        case actionTypes.SET_THEME_ALERT:
            return {
                ...state,
                themeAlert: action.payload,
            };
        case actionTypes.RESET_THEME_ALERT:
            return {
                ...state,
                themeAlert: null,
            };
        default:
            return state;
    }
};

export default reducer;
