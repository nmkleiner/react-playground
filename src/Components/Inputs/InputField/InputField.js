import React, {useEffect, useRef, useState} from "react";
import classes from "./style.module.scss";
import InputLabel from "./InputLabel/InputLabel";

const InputField = (props) => {
    const {label, type, value, change, blur, enter} = props;
    const [labelFloatingState, setLabelFloating] = useState(false);
    const inputClasses = [classes.input, "primary-color"].join(" ");

    const inputRef = useRef("input");

    const handleFocus = () => {
        setLabelFloating(true);
    };

    const handleBlur = (event) => {
        const {value} = event.target;
        if (!value) {
            setLabelFloating(false);
        } else {
            if (blur) {
                blur();
            }
        }
    };

    const onChange = (event) => {
        change(event.target.value);
    };

    const onKeyDown = (event) => {
        if (event.key === "Enter" && value) {
            enter();
        }
    };

    useEffect(() => {
        // inputRef.current.focus();

        if (value !== "") {
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
                ref={inputRef}
                type={type}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={value}
                onKeyDown={onKeyDown}
            />
        </div>
    );
};

export default InputField;
