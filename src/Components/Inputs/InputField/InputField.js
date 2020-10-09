import React, {useEffect, useState} from "react";
import classes from "./style.module.scss";
import InputLabel from "./InputLabel/InputLabel";

const InputField = (props) => {
    const {id, question, type, value, setAnswer, enter, register, rules, error} = props;
    const [labelFloatingState, setLabelFloating] = useState(false);
    const inputClasses = [classes.input, "primary-color"].join(" ");

    const handleFocus = () => {
        setLabelFloating(true);
    };

    const handleBlur = (event) => {
        const {value} = event.target;

        if (!value) {
            setLabelFloating(false);
        }
    };

    const onChange = (event) => {
        setAnswer(event.target.value);
    };

    const onKeyDown = (event) => {
        if (event.key === "Enter" && value) {
            enter();
        }
    };

    useEffect(() => {
        if (value !== "" && value !== undefined) {
            setLabelFloating(true);
        }
    }, []);

    return (
        <div className={classes.InputField}>
            <InputLabel
                label={question}
                isFloating={labelFloatingState}
            />
            <input
                className={inputClasses}
                name={id}
                ref={register(rules)}
                type={type}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={value}
                onKeyDown={onKeyDown}
            />

            {error && <p className={classes.feedback} >error</p>}
        </div>
    );
};

export default InputField;
