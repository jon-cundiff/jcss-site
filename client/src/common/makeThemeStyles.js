export const makeThemeStyles = (theme) => {
    const colorKeys = ["primary", "secondary", "info", "success", "danger"];

    const cssVarStyles = {};
    for (let colorKey of colorKeys) {
        for (let [modKey, val] of Object.entries(theme[colorKey])) {
            let keyName = `--color-${colorKey}`;
            if (modKey !== "main") {
                keyName += `-${modKey}`;
            }
            cssVarStyles[keyName] = val;
        }
    }

    return cssVarStyles;
};
