import React, {useContext} from "react";
import classes from "./style.module.scss";
import NavigationButtons from "../../Layouts/NavigationButtons/NavigationButtons";
import UserAnswersContext from "../../Context/UserAnswersContext";
import {Redirect, useLocation, useParams} from "react-router-dom";
import DynamicInput from "../../Components/Inputs/DynamicInput";
import {useForm} from "react-hook-form";

const InterviewerPage = () => {
    let {index} = useParams();
    const {handleSubmit, register, errors} = useForm();

    const location = useLocation();
    const query = location.search;
    let fixing = false;
    if (query) {
        const [param, value] = query.substring(1).split("=");

        if (param === "fixing" && value === "1") {
            fixing = true;
        }
    }

    const userAnswersContext = useContext(UserAnswersContext);
    const stageIndex = +index - 1;
    const {stages} = userAnswersContext;
    const currentStage = stages[stageIndex];

    if (!index) {
        return <Redirect to={"/interviewer/1"}/>;
    }

    if (!currentStage) {
        return <Redirect to={"/confirmation"}/>;
    }

    return (
        <div className={classes.InterviewerPage}>
            <div className={classes.stagesContainer}>
                <form className={classes.stageContainer + " column"}>
                    {
                        stages.map((stage, idx) => {
                            const error = errors[stage.id];

                            return idx === stageIndex ?
                                <DynamicInput error={error} register={register} key={stage.id} {...stage}/>
                                :
                                null;
                        })
                    }
                </form>
                <NavigationButtons handleSubmit={handleSubmit} fixing={fixing}/>
            </div>
        </div>
    );
};

export default InterviewerPage;
