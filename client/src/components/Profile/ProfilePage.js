import React, { useState, useEffect } from "react";
import { Card, MobileRow, Alert } from "@jon-cundiff/jcss-components";
import { Link } from "react-router-dom";
import "./Profile.css";
import ThemeRow from "../Common/ThemeRow";
import {
    getFavorites,
    getUserThemes,
} from "../../store/actions/actionCreators";

const ProfilePage = () => {
    const [themes, setThemes] = useState(null);
    const [favorites, setFavorites] = useState(null);
    const [error, setError] = useState(null);

    const populateThemes = async () => {
        try {
            const themes = await getUserThemes();
            setThemes(themes);
            const favorites = await getFavorites();
            setFavorites(favorites);
        } catch {
            setError("There was an error loading themes");
        }
    };

    useEffect(() => {
        populateThemes();
    }, []);
    let themeItems = (
        <p>
            <i>Loading themes...</i>
        </p>
    );
    if (themes !== null) {
        themeItems =
            themes.length === 0 ? (
                <p>
                    No themes found. Create on <Link to="/builder">here</Link>!
                </p>
            ) : (
                themes.map((theme) => (
                    <ThemeRow
                        key={theme.id}
                        theme={theme}
                        owner
                        onDelete={populateThemes}
                        onError={setError}
                    />
                ))
            );
    }

    let favoriteItems = (
        <p>
            <i>Loading themes...</i>
        </p>
    );
    if (favorites !== null) {
        favoriteItems =
            favorites.length === 0 ? (
                <p>No favorites found.</p>
            ) : (
                favorites.map((theme) => (
                    <ThemeRow key={theme.id} theme={theme} />
                ))
            );
    }
    return (
        <>
            {error && (
                <Alert
                    text={error}
                    styleType="danger"
                    showClose
                    onClick={() => setError(null)}
                />
            )}
            <MobileRow className="card-2 fgy-5 row-fill justify-center">
                <Card
                    styleType="primary"
                    title="My Themes"
                    innerClassName="parent column card-column"
                >
                    {themeItems}
                </Card>
                <Card
                    styleType="secondary"
                    title="Favorite Themes"
                    innerClassName="parent column card-column"
                >
                    {favoriteItems}
                </Card>
            </MobileRow>
        </>
    );
};

export default ProfilePage;
