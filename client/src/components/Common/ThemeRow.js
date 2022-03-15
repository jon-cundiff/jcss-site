import React from "react";
import { Row, Column, Button } from "@jon-cundiff/jcss-components";
import { useDispatch } from "react-redux";

import "./ThemeRow.css";
import { useNavigate } from "react-router-dom";
import { setUserTheme } from "../../store/actions/actionCreators";
import { buildPalette } from "../../common/buildPalette";

const ThemeRow = ({ theme, owner }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const themeKeys = ["primary", "secondary", "info", "success", "danger"];

    const handleEditClick = () => {
        for (let key of themeKeys) {
            const colorObj = buildPalette(theme[key]);
            dispatch(setUserTheme(key, colorObj));
        }

        navigate(`/builder?id=${theme.id}`);
    };

    const themeItems = themeKeys.map((key, i) => (
        <div
            className="p-5"
            key={i}
            style={{
                backgroundColor: theme[key],
                width: "var(--theme-swatch)",
                height: "var(--theme-swatch)",
            }}
        ></div>
    ));

    return (
        <Column className="theme-box mx-3 fgy-0">
            <Row justify="around" fgx={4}>
                {themeItems}
            </Row>
            <div
                className="parent justify-center row-wrap theme-controls"
                data-owner={owner ? "owner" : "other"}
            >
                {owner && (
                    <Button faIcon="fas fa-edit" onClick={handleEditClick}>
                        Edit
                    </Button>
                )}
                <Button faIcon="fas fa-copy" styleType="info">
                    Clone
                </Button>
                <Button faIcon="fas fa-angle-double-up" styleType="secondary">
                    Apply
                </Button>
                {owner && (
                    <Button faIcon="fas fa-trash" styleType="danger">
                        Delete
                    </Button>
                )}
            </div>
        </Column>
    );
};

export default ThemeRow;
