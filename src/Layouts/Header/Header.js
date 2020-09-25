import React from "react";
import "./style.scss";
import Logo from "../../Components/Logo/Logo";
import Heading from "../../Components/Heading/Heading";
import WelcomeName from "../../Components/WelcomeName/WelcomeName";


export default (props) => {
    const heading = "React Playground";
    const welcomeName = props.name && <WelcomeName
        name={props.name}
        click={props.click}
    />;
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


