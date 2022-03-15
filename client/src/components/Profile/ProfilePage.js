import React, { useState, useEffect } from "react";
import { Card, MobileRow, Alert } from "@jon-cundiff/jcss-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Profile.css";
import ThemeRow from "../Common/ThemeRow";
import { getUserThemes } from "../../store/actions/actionCreators";

const ProfilePage = () => {
    const [themes, setThemes] = useState(null);
    const [error, setError] = useState(null);

    const populateThemes = async () => {
        try {
            const themes = await getUserThemes();
            setThemes(themes);
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
    if (themes !== null) {
        favoriteItems =
            themes.length === 0 ? (
                <p>
                    No themes found. Create on <Link to="/builder">here</Link>!
                </p>
            ) : (
                themes.map((theme) => <ThemeRow key={theme.id} theme={theme} />)
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
                    innerClassName="parent column card-column fgy-5"
                >
                    {favoriteItems}
                </Card>
            </MobileRow>
        </>
    );
};

export default ProfilePage;
