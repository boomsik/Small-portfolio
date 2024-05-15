import "./App.css";
import React from "react";
import Button from "react-bootstrap/Button";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
function App() {
    return (
        <div className="App">
            <About />
            <Portfolio />
        </div>
    );
}

export default App;
