import React from "react";
import "./style.scss";
import {Logo} from "../../Components/Logo/Logo";
import {Heading} from "../../Components/Heading/Heading";


export const Header = ({name}) => {
    const heading = "React Playground";
    const nameMessage = `Hello ${name}!`;

    const welcomeName = name && <p className="welcome primary-color">{nameMessage}</p>;

    return (
        <header className="header">
            <div className="row">
                <Logo/>
                <Heading text={heading}/>
            </div>
            {welcomeName}
        </header>
    );
};


