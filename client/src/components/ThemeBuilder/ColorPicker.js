import React, { useRef, useState } from "react";
import { HuePicker } from "react-color";
import { Card } from "@jon-cundiff/jcss-components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserTheme } from "../../store/actions/actionCreators";
import { useSelector } from "react-redux";
import { buildPalette } from "../../common/buildPalette";

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
        const colorObj = buildPalette(color);
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
