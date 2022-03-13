import { JCSSApp } from "@jon-cundiff/jcss-components";
import { Route, Routes } from "react-router-dom";
import ButtonPage from "./components/Button/ButtonPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./components/Home/HomePage";

function App() {
    return (
        <JCSSApp>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/button" element={<ButtonPage />} />
            </Routes>
            <Footer />
        </JCSSApp>
    );
}

export default App;
