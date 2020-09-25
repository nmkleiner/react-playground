import React from "react";
import "./style.scss";

export default (props) => {

    return (
        !props.name &&
        <div className="get-name">
            <p className="welcome-text">Welcome! <br/>What is your name?</p>
            <input
                placeholder="name"
                className="welcome-input primary-color"
                type="text"
                onChange={(ev) => props.change(ev.target.value)}
            />
        </div>
    );
}

