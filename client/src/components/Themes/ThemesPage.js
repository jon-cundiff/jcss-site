import React, { useState } from "react";
import { useEffect } from "react";
import { Card, Alert } from "@jon-cundiff/jcss-components";
import { getThemes } from "../../store/actions/actionCreators";
import ThemeRow from "../Common/ThemeRow";
import { Link } from "react-router-dom";

import "./Themes.css";

const ThemesPage = () => {
    const [themes, setThemes] = useState(null);
    const [error, setError] = useState(false);

    const populateThemes = async () => {
        try {
            const themes = await getThemes();
            setThemes(themes);
        } catch {
            setError("Error retrieving themes.");
        }
    };

    useEffect(() => {
        if (themes === null) {
            populateThemes();
        }
    }, []);

    let themeItems = (
        <p>
            <i>Retrieving themes...</i>
        </p>
    );

    if (themes !== null) {
        themeItems =
            themes.length === 0 ? (
                <p>
                    No themes found. Create one <Link to="/builder">here</Link>!
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
            <Card
                title="User Themes"
                className="card-themes"
                innerClassName="parent column fgy-5"
            >
                {themeItems}
            </Card>
        </>
    );
};

export default ThemesPage;
