import React, { useState, useEffect } from "react";
import { Card, Row, MobileRow } from "@jon-cundiff/jcss-components";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Profile.css";
import ThemeRow from "../Common/ThemeRow";

const ProfilePage = () => {
    const user = useSelector((state) => state.auth.user);
    const [themes, setThemes] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (themes === null && !error) {
            axios
                .get("/themes/profile")
                .then((resp) => {
                    console.log(resp.data);
                    setThemes(resp.data.themes);
                })
                .catch(() => {
                    setError(true);
                });
        }
    });
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
                themes.map((theme) => <ThemeRow key={theme.id} theme={theme} />)
            );
    }
    return (
        <MobileRow className="card-2">
            <Card
                styleType="primary"
                title="My Themes"
                innerClassName="parent column card-column fgy-5"
            >
                {themeItems}
            </Card>
            <Card
                styleType="primary"
                title="Favorite Themes"
                innerClassName="parent column card-column fgy-5"
            >
                {themeItems[0]}
            </Card>
        </MobileRow>
    );
};

export default ProfilePage;
