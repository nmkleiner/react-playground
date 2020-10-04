import React from "react";
import "./style.scss";
import RadioGroup from "../../../Components/Inputs/RadioGroup/RadioGroup";
import {faVuejs, faReact, faAngular} from "@fortawesome/free-brands-svg-icons";

export default () => {
    const radioButtons = [
        {id: 1, label: "angular", icon: faAngular},
        {id: 2, label: "react", icon: faReact},
        {id: 3, label: "vue", icon: faVuejs},
    ];

    return (
        <div className="preferred-framework">
            <span className="message">Which is your preferred frontend framework/library?</span>
            <RadioGroup radioButtons={radioButtons}/>
        </div>
    );
}
