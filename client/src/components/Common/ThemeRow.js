import React from "react";
import { Row, Column, Button } from "@jon-cundiff/jcss-components";
import { useDispatch } from "react-redux";

import "./ThemeRow.css";
import { useNavigate } from "react-router-dom";
import {
    deleteFavorite,
    deleteTheme,
    postFavorite,
    setSiteTheme,
    setUserTheme,
} from "../../store/actions/actionCreators";
import { buildPalette } from "../../common/buildPalette";
import { useState } from "react";

const ThemeRow = ({ theme, owner, onDelete, onError }) => {
    const [favoriteId, setFavoriteId] = useState(
        theme.favorites.length > 0 ? theme.favorites[0].id : null
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const themeKeys = ["primary", "secondary", "info", "success", "danger"];

    const buildTheme = () => {
        let builtTheme = {};
        for (let key of themeKeys) {
            builtTheme[key] = buildPalette(theme[key]);
        }
        return builtTheme;
    };

    const handleFavoriteClick = async () => {
        try {
            if (favoriteId) {
                await deleteFavorite(favoriteId);
                setFavoriteId(null);
            } else {
                const favorite = await postFavorite(theme.id);
                setFavoriteId(favorite.id);
            }
        } catch {}
    };

    const handleEditCloneClick = (themeId) => {
        const builtTheme = buildTheme();
        for (let key of themeKeys) {
            const colorObj = builtTheme[key];
            dispatch(setUserTheme(key, colorObj));
        }

        if (themeId) {
            navigate(`/builder?id=${themeId}`);
        } else {
            navigate("/builder");
        }
    };

    const handleApplyClick = () => {
        const builtTheme = buildTheme();
        dispatch(setSiteTheme(builtTheme));
    };

    const handleDeleteClick = async () => {
        try {
            await deleteTheme(theme.id);
            onDelete();
        } catch {
            console.log("hi");
            onError("Error deleting theme");
        }
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
        <Column className="theme-box mx-3 fgy-2">
            <div
                className="parent justify-center row-wrap theme-actions"
                data-owner={owner ? "owner" : "other"}
            >
                {!owner && (
                    <Button
                        faIcon={favoriteId ? "fas fa-star" : "far fa-star"}
                        styleType={favoriteId ? "success" : "info"}
                        onClick={handleFavoriteClick}
                    >
                        Favorite
                    </Button>
                )}
                <Button
                    faIcon="fas fa-angle-double-up"
                    styleType="secondary"
                    onClick={handleApplyClick}
                >
                    Apply
                </Button>
            </div>
            <Row justify="around" className="theme-box" fgx={4}>
                {themeItems}
            </Row>
            <div
                className="parent justify-center row-wrap theme-controls"
                data-owner={owner ? "owner" : "other"}
            >
                {owner && (
                    <Button
                        faIcon="fas fa-edit"
                        onClick={() => handleEditCloneClick(theme.id)}
                    >
                        Edit
                    </Button>
                )}
                <Button
                    faIcon="fas fa-copy"
                    styleType="info"
                    onClick={() => handleEditCloneClick()}
                >
                    Clone
                </Button>
                {owner && (
                    <Button
                        faIcon="fas fa-trash"
                        styleType="danger"
                        onClick={handleDeleteClick}
                    >
                        Delete
                    </Button>
                )}
            </div>
        </Column>
    );
};

export default ThemeRow;
