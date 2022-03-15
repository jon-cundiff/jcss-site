import React, { useRef, useState } from "react";
import { HuePicker } from "react-color";
import { Card } from "@jon-cundiff/jcss-components";
import chroma from "chroma-js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserTheme } from "../../store/actions/actionCreators";
import { useSelector } from "react-redux";

const ColorPicker = ({ label }) => {
    const dispatch = useDispatch();
    const colorMain = useSelector(
        (state) => state.theme.user[label.toLowerCase()].main
    );
    const cardRef = useRef(null);
    const [width, setWidth] = useState(100);

    useEffect(() => {
        const resizeHueBar = () => {
            const styles = getComputedStyle(cardRef.current);
            const padRight = styles.paddingRight;
            const padLeft = styles.paddingLeft;
            const offset = parseFloat(padLeft) + parseFloat(padRight);
            setWidth(cardRef.current.offsetWidth - offset);
        };

        resizeHueBar();

        window.addEventListener("resize", resizeHueBar);

        return () => window.removeEventListener("resize", resizeHueBar);
    }, []);

    const handleChange = (color) => {
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
        dispatch(setUserTheme(label.toLowerCase(), colorObj));
    };

    return (
        <Card title={label} styleType={label.toLowerCase()}>
            <div ref={cardRef} className="parent column justify-center">
                <HuePicker
                    color={colorMain}
                    onChange={handleChange}
                    width={`${width}px`}
                />
            </div>
        </Card>
    );
};

export default ColorPicker;
