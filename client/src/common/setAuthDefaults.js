import axios from "axios";

export const setBaseURL = () => {
    console.log(axios);
    axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
};

export const setToken = (user) => {
    localStorage.setItem("jwt", JSON.stringify(user));
    axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
};

export const unsetToken = () => {
    localStorage.removeItem("jwt");
    delete axios.defaults.headers.common["Authorization"];
};
