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
