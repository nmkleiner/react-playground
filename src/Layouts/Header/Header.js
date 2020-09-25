import React from "react";
import "./style.scss";
import Logo from "../../Components/Logo/Logo";
import Heading from "../../Components/Heading/Heading";


export default () => {
    const heading = "React Playground";
    return (
        <header className="header">
            <Logo/>
            <Heading text={heading}/>
        </header>
    );
};


