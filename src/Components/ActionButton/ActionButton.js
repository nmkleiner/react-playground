import React from "react";
import "./style.scss";

export default (props) =>
    <button
        className="action-button primary-background-color"
        disabled={props.disabled}
        onClick={props.click}>
        {props.children}
    </button>


