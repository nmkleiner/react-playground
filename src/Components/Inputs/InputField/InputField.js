import React, {useEffect, useState} from "react";
import classes from "./style.module.scss";
import InputLabel from "./InputLabel/InputLabel";

const InputField = (props) => {
    const {label, type, value, change} = props;
    const [labelFloatingState, setLabelFloating] = useState(false);
    const inputClasses = [classes.input, "primary-color"].join(" ");

    const handleFocus = () => {
        setLabelFloating(true);
    };

    const handleBlur = () => {
        setLabelFloating(false);
    };

    const onChange = (event) => change(event.target.value);

    useEffect(() => {
        if (value !== "") {
            console.log(value);
            setLabelFloating(true);
        }
    }, []);

    return (
        <div className={classes.InputField}>
            <InputLabel
                label={label}
                isFloating={labelFloatingState}
            />
            <input
                className={inputClasses}
                type={type}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={value}
            />
        </div>
    );
};

export default InputField;
