import React from "react";
import "./App.scss";
import "./Assets/Scss/index.scss";
import {BrowserRouter} from "react-router-dom";
import Pages from "./Pages/Pages";
import FormConfig from "./Containers/FormConfig";

const App = () => {
    return (
        <BrowserRouter>
            <FormConfig>
                <Pages/>
            </FormConfig>
        </BrowserRouter>
    );
};

export default App;
