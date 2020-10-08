import React from "react";
import classes from "./style.module.scss";
import InputField from "../../../Components/Inputs/InputField/InputField";
import * as PropTypes from "prop-types";

const InputGroup = (props) => {
    const {question, text, type, answer, setAnswer} = props;

    return (
        <div className={classes.InputGroup}>
            <p className={classes.message}>{text}</p>
            <InputField
                label={question}
                type={type}
                value={answer}
                change={setAnswer}
            />
        </div>
    );
};

InputGroup.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    change: PropTypes.func,
};

export default InputGroup;
