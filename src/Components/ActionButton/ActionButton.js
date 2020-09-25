import React from "react";
import "./style.scss";

export default (props) => <button className="action-button primary-background-color" onClick={props.click()}>{props.children}</button>


