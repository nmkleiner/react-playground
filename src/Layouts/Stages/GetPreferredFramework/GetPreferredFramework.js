import React from "react";
import "./style.scss";
import {RadioGroup} from "../../../Components/Inputs/RadioGroup/RadioGroup";
import {faAngular, faReact, faVuejs} from "@fortawesome/free-brands-svg-icons";

export const GetPreferredFramework = (props) => {
    const {framework, setFramework, setFrameworkSelected} = props;

    const radioButtons = [
        {id: "angular", label: "angular", icon: faAngular},
        {id: "react", label: "react", icon: faReact},
        {id: "vue", label: "vue", icon: faVuejs},
    ];

    const select = (framework) => {
        setFramework(framework);
        setFrameworkSelected(true);
    };

    return (
        <div className="preferred-framework">
            <span className="message">Which is your preferred frontend framework/library?</span>
            <RadioGroup
                selectedValue={framework}
                select={select}
                radioButtons={radioButtons}
            />
        </div>
    );
};
