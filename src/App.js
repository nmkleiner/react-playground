import React from "react";
import "./App.scss";
import "./Assets/Scss/index.scss";
import {BrowserRouter} from "react-router-dom";
import Pages from "./Pages/Pages";

const App = () => {
    return (
        <BrowserRouter>
            <Pages/>
        </BrowserRouter>
    );
};

export default App;
