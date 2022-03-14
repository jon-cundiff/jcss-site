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
    switch (action.types) {
        default:
            return state;
    }
};

export default reducer;
