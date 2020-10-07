import React, {useContext} from "react";
import classes from "./style.module.scss";
import {faAngular, faReact, faVuejs} from "@fortawesome/free-brands-svg-icons";
import RadioGroup from "../../../Components/Inputs/RadioGroup/RadioGroup";
import UserAnswersContext from "../../../Context/UserAnswersContext";

const GetFullstack = () => {
    const message = "Do you consider yourself a fullstack developer?";
    const radioButtons = [
        {id: "yes", label: "yes"},
        {id: "no", label: "no"},
    ];

    const index = 3;
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

export default GetFullstack;
