import chroma from "chroma-js";

export const buildPalette = (color) => {
    let main = chroma(color.hex).darken(1.3);
    while (chroma.contrast(main, "white") < 2) {
        main = main.darken(0.2);
    }
    const colorSwatch = chroma.scale(["white", main, "black"]).colors(21);
    const colorObj = {
        main: main.hex(),
        lightest: colorSwatch[4],
        lighter: colorSwatch[8],
        dark: colorSwatch[13],
    };

    return colorObj;
};
