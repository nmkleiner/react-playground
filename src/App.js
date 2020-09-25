import React from "react";
import "./App.scss";
import Header from "./Layouts/Header/Header";
import PlaygroundPage from "./Pages/PlaygroundPage/PlaygroundPage";


function App() {
    return (
        <div className="app">
            <Header/>
            <PlaygroundPage/>
        </div>
    );
}

export default App;
