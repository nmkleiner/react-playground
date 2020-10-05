import React, {useEffect, useState} from "react";
import "./style.scss";
import {InputLabel} from "./InputLabel/InputLabel";

export const InputField = (props) => {
    const {name, type, value, change} = props;
    const [labelFloatingState, setLabelFloating] = useState(false);

    const handleFocus = () => {
        setLabelFloating(true);
    };

    const handleBlur = () => {
        setLabelFloating(false);
    };

    useEffect(() => {
        if (value !== "") {
            setLabelFloating(true);
        }
    },[]);

    return (
        <div className="input-group">
            <InputLabel
                name={name}
                isFloating={labelFloatingState}
            />
            <input
                className="text-input primary-color"
                type={type}
                onChange={(ev) => change(ev.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={value}
            />
        </div>
    );
};
