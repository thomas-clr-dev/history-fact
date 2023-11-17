import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Fact from "./components/Fact";
import Home from "./components/Home";
import Customization from "./components/Customization";
import "./Styles/App-style.scss";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/fact" element={<Fact />} />
                    <Route path="/customization" element={<Customization />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
