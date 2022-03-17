import chroma from "chroma-js";

export const buildPalette = (color, darken) => {
    let main = chroma(color);
    if (darken) main = main.darken(1.3);
    while (chroma.contrast(main, "white") < 2) {
        main = main.darken(0.2);
    }
    const colorSwatch = chroma.scale(["white", main, "black"]).colors(21);
    const colorObj = {
        main: main.hex(),
        "medium-light": colorSwatch[6],
        lighter: colorSwatch[5],
        lightest: colorSwatch[3],
        dark: colorSwatch[13],
    };

    return colorObj;
};
