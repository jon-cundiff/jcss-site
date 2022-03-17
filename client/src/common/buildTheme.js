import { buildPalette } from "./buildPalette";

const themeKeys = ["primary", "secondary", "info", "success", "danger"];

export const buildTheme = (theme) => {
    let builtTheme = {};
    for (let key of themeKeys) {
        builtTheme[key] = buildPalette(theme[key]);
    }
    return builtTheme;
};
