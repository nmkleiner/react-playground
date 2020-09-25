import React from "react";
import "./style.scss";

export default (props) => <button className="round-button primary-color" onClick={props.click()}>{props.children}</button>


