import { JCSSApp } from "@jon-cundiff/jcss-components";
import { Route, Routes } from "react-router-dom";
import ButtonPage from "./components/Button/ButtonPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./components/Home/HomePage";
import Login from "./components/Login/Login";
import ThemeBuilderPage from "./components/ThemeBuilder/ThemeBuilderPage";

function App() {
    return (
        <JCSSApp>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/button" element={<ButtonPage />} />
                <Route path="/builder" element={<ThemeBuilderPage />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </JCSSApp>
    );
}

export default App;
