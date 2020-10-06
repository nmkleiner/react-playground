import React, {useContext} from "react";
import classes from "./style.module.scss";
import {faAngular, faReact, faVuejs} from "@fortawesome/free-brands-svg-icons";
import RadioGroup from "../../../Components/Inputs/RadioGroup/RadioGroup";
import UserAnswersContext from "../../../Context/UserAnswersContext";

const GetPreferredFramework = (props) => {
    const {setFrameworkSelected} = props;

    const userAnswersContext = useContext(UserAnswersContext);
    const {framework, setFramework} = userAnswersContext;

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

export default GetPreferredFramework;
