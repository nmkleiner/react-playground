import React from "react";
import classes from "./style.module.scss";
import InputField from "../../../Components/Inputs/InputField/InputField";
import * as PropTypes from "prop-types";

const InputGroup = (props) => {
    const {label, type, value, change, blur, enter, children} = props;

    return (
        <div className={classes.InputGroup}>
            <p className={classes.message}>{children}</p>
            <InputField
                label={label}
                type={type}
                value={value}
                change={change}
                blur={blur}
                enter={enter}
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
