import React from "react";
import "./style.scss";

export const RoundButton = (props) => <button className="round-button primary-color" onClick={props.click()}>{props.children}</button>


