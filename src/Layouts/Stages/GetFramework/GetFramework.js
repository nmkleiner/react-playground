import React, {useContext} from "react";
import classes from "./style.module.scss";
import {faAngular, faReact, faVuejs} from "@fortawesome/free-brands-svg-icons";
import RadioGroup from "../../../Components/Inputs/RadioGroup/RadioGroup";
import UserAnswersContext from "../../../Context/UserAnswersContext";

const GetFramework = () => {
    const message = "Which is your preferred frontend framework/library?";
    const radioButtons = [
        {id: "angular", label: "angular", icon: faAngular},
        {id: "react", label: "react", icon: faReact},
        {id: "vue", label: "vue", icon: faVuejs},
    ];

    const index = 2;
    const userAnswersContext = useContext(UserAnswersContext);
    const {stages} = userAnswersContext;
    const stage = stages[index];
    const {answer, setAnswer }= stage;

    const select = (framework) => {
        setAnswer(framework);
    };

    return (
        <div className={classes.PreferredFramework}>
            <span className={classes.message}>{message}</span>
            <RadioGroup
                selectedValue={answer}
                select={select}
                radioButtons={radioButtons}
            />
        </div>
    );
};

export default GetFramework;
