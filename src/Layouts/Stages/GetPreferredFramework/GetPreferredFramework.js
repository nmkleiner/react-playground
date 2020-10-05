import React from "react";
import classes from "./style.module.scss";
import {RadioGroup} from "../../../Components/Inputs/RadioGroup/RadioGroup";
import {faAngular, faReact, faVuejs} from "@fortawesome/free-brands-svg-icons";

export const GetPreferredFramework = (props) => {
    const {framework, setFramework, setFrameworkSelected} = props;

    const message = "Which is your preferred frontend framework/library?";
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
        <div className={classes.PreferredFramework}>
            <span className={classes.message}>{message}</span>
            <RadioGroup
                selectedValue={framework}
                select={select}
                radioButtons={radioButtons}
            />
        </div>
    );
};
