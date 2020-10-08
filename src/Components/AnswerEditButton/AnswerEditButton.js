import React from "react";
import classes from "./style.module.scss";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const AnswerEditButton = ({index}) => {
    const urlIndex = index + 1;

    return <Link to={`/interviewer/${urlIndex}?fixing=1`}>
        <FontAwesomeIcon className={classes.icon} icon={faEdit}/>
    </Link>
};

export default AnswerEditButton;
