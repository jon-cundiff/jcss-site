import fileSaver from "file-saver";
import { buildTheme } from "./buildTheme";
import { makeThemeStyles } from "./makeThemeStyles";

export const prepareDownload = (theme) => {
    console.log(theme);
    const cssVarStyles = makeThemeStyles(theme);
    let cssString = ":root{";
    for (let [key, val] of Object.entries(cssVarStyles)) {
        cssString += `${key}:${val};`;
    }
    cssString += "}";
    const blob = new Blob([cssString], { type: "text/plain;charset=utf-8" });
    fileSaver.saveAs(blob, "jcss.custom.min.css");
};
