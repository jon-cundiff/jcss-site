import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Button } from "@jon-cundiff/jcss-components";
import { makeThemeStyles } from "./common/makeThemeStyles";
import ButtonPage from "./components/Button/ButtonPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./components/Home/HomePage";
import Login from "./components/Login/Login";
import ThemeBuilderPage from "./components/ThemeBuilder/ThemeBuilderPage";

import "./App.css";
import { useDispatch } from "react-redux";
import { resetSiteTheme } from "./store/actions/actionCreators";

function App() {
    const dispatch = useDispatch();
    const themeBranch = useSelector((state) => state.theme);
    const { site: theme, hasSiteChanged } = themeBranch;
    const cssVarStyles = makeThemeStyles(theme);

    const handleSiteReset = () => {
        dispatch(resetSiteTheme());
    };

    return (
        <div className="app" style={cssVarStyles}>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/button" element={<ButtonPage />} />
                <Route path="/builder" element={<ThemeBuilderPage />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
            {hasSiteChanged && (
                <Button
                    onClick={handleSiteReset}
                    styleType="info"
                    className="reset-button"
                >
                    Reset Site Theme
                </Button>
            )}
        </div>
    );
}

export default App;
