import React, {useContext} from "react";
import classes from "./style.module.scss";
import ActionButton from "../../Components/ActionButton/ActionButton";
import AnswerConfirmation from "../../Components/AnswerConfirmation/AnswerConfirmation";
import UserAnswersContext from "../../Context/UserAnswersContext";
import {Link} from "react-router-dom";

const ConfirmationPage = () => {
    const userAnswersContext = useContext(UserAnswersContext);
    const {stages} = userAnswersContext;

    return (
        <div className={classes.ConfirmationPage}>
            <div className={classes.answersContainer}>
                <div className={classes.confirmationHeader}>Is everything correct?</div>
                {
                    stages.map((stage,index) => <AnswerConfirmation
                        key={stage.question}
                        question={stage.question}
                        answer={stage.answer}
                        index={index}
                    />)
                }
            </div>
            <Link to="/confirmed">
                <ActionButton click={() => null}>Submit</ActionButton>
            </Link>
        </div>
    );
};

export default ConfirmationPage;
