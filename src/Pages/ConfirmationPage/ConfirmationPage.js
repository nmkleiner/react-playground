import React, {useContext} from "react";
import classes from "./style.module.scss";
import ActionButton from "../../Components/ActionButton/ActionButton";
import AnswerConfirmation from "../../Components/AnswerConfirmation/AnswerConfirmation";
import UserAnswersContext from "../../Context/UserAnswersContext";

const ConfirmationPage = () => {
    const userAnswersContext = useContext(UserAnswersContext);
    const {stages} = userAnswersContext;

    return (
        <div className={classes.ConfirmationPage}>
            <div className={classes.answersContainer}>
                <div className={classes.confirmationHeader}>Is everything correct?</div>
                {
                    stages.map((stage) => <AnswerConfirmation
                        key={stage.question}
                        question={stage.question}
                        answer={stage.answer}
                    />)
                }
            </div>
            <ActionButton click={() => null}>Submit</ActionButton>
        </div>
    );
};

export default ConfirmationPage;
