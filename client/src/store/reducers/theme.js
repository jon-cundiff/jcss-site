import * as actionTypes from "../actions/actionTypes";
import { defaultTheme } from "../../common/defaultTheme";

const initialState = {
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
            };
        case actionTypes.SET_USER_THEME:
            return {
                ...state,
                user: {
                    ...state.user,
                    [action.payload.key]: action.payload.colors,
                },
            };
        default:
            return state;
    }
};

export default reducer;
