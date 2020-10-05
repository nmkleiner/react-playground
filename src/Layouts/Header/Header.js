import React from "react";
import classes from "./style.module.scss";
import {Logo} from "../../Components/Logo/Logo";
import {Heading} from "../../Components/Heading/Heading";


export const Header = ({name}) => {
    const headingText = "React Playground";
    const nameMessage = `Hello ${name}!`;

    const welcomeName = name && <p className="welcome primary-color">{nameMessage}</p>;

    return (
        <header className={classes.header}>
            <div className={classes.row + " row"}>
                <Logo/>
                <Heading text={headingText}/>
            </div>
            {welcomeName}
        </header>
    );
};


