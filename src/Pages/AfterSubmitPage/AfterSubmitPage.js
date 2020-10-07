import React from "react";
import classes from "./style.module.scss";

const AfterSubmitPage = () => {

    return (
        <div className={classes.AfterSubmitPage}>
            <div className={classes.container}>
                <span className={classes.text + " " + classes.text1}>Thank you!</span>
                <span className={classes.text + " " + classes.text2}>We'll be in touch...</span>
            </div>
        </div>
    );
};

export default AfterSubmitPage;
