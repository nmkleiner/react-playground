import React from "react";
import classes from "./style.module.scss";
import ActionButton from "../../Components/ActionButton/ActionButton";

const ConfirmationPage = () => {


    return (
        <div className={classes.ConfirmationPage}>
            <div className={classes.stagesContainer}>
                <div>Please confirm the details below</div>
                bla
            </div>
            <ActionButton click={() => null} >Confirm</ActionButton>
        </div>
    );
};

export default ConfirmationPage;
