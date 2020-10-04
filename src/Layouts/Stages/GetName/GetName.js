import React from "react";
import "./style.scss";
import TextInput from "../../../Components/Inputs/TextInput/TextInput";

export default (props) => {

    return (
        <div className="get-name">
            <p className="welcome-text">Welcome! <br/>What is your name?</p>
            <TextInput
                name="name"
                change={props.change}
            />
        </div>
    );
}

