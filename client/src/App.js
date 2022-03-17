import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { JCSSApp, Button } from "@jon-cundiff/jcss-components";
import ButtonPage from "./components/Button/ButtonPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./components/Home/HomePage";
import Login from "./components/Login/Login";
import ThemeBuilderPage from "./components/ThemeBuilder/ThemeBuilderPage";

import "./App.css";
import { useDispatch } from "react-redux";
import { resetSiteTheme } from "./store/actions/actionCreators";
import ProtectedRoute from "./components/Common/ProtectedRoute";
import ProfilePage from "./components/Profile/ProfilePage";
import ThemesPage from "./components/Themes/ThemesPage";

function App() {
    const dispatch = useDispatch();
    const themeBranch = useSelector((state) => state.theme);
    const { site: theme, hasSiteChanged } = themeBranch;

    const handleSiteReset = () => {
        dispatch(resetSiteTheme());
    };

    return (
        <JCSSApp theme={theme}>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/button" element={<ButtonPage />} />
                <Route path="/themes" element={<ThemesPage />} />
                <Route path="/builder" element={<ThemeBuilderPage />} />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute auth>
                            <ProfilePage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <ProtectedRoute>
                            <Login />
                        </ProtectedRoute>
                    }
                />
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
        </JCSSApp>
    );
}

export default App;
