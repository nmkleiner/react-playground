import React, {useState} from "react";
import "./App.scss";
import Header from "./Layouts/Header/Header";
import PlaygroundPage from "./Pages/PlaygroundPage/PlaygroundPage";
import {debounce} from "lodash";


const App = () => {

    const [nameState, setNameState] = useState("");

    const setName = debounce((name) => {
        setNameState(name);
    }, 800);

    const resetName = () => {
        setNameState("");
    };

    return (
        <div className="app">
            <Header
                name={nameState}
                click={resetName}
            />
            <PlaygroundPage
                name={nameState}
                setName={setName}
            />
        </div>
    );
};

export default App;
