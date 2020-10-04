import React from "react";
import "./style.scss";
import RadioGroup from "../../../Components/Inputs/RadioGroup/RadioGroup";

export default () => {
    const radioButtons = [
        {id: 1, label: "Angular"},
        {id: 2, label: "react"},
        {id: 3, label: "vue"},
    ];

    return (
        <div className="preferred-framework">
            <span className="message">Which is your preferred frontend framework/library?</span>
            <RadioGroup radioButtons={radioButtons}/>
        </div>
    );
}
