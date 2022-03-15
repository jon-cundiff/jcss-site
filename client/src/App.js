import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { makeThemeStyles } from "./common/makeThemeStyles";
import ButtonPage from "./components/Button/ButtonPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./components/Home/HomePage";
import Login from "./components/Login/Login";
import ThemeBuilderPage from "./components/ThemeBuilder/ThemeBuilderPage";

function App() {
    const theme = useSelector((state) => state.theme.site);
    const cssVarStyles = makeThemeStyles(theme);
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
        </div>
    );
}

export default App;
