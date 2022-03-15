/*
    Mobile browsers set 100vh to go beyond the bottom of the screen and behind
    the browser toolbar. This function sets a custom variable so that 100 *
    the variable is the full visible portion.
*/
const setCssVH = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
};

export const setVH = () => {
    setCssVH();

    window.addEventListener("resize", setCssVH);
};
