import React from "react";
import "./App.scss";
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
