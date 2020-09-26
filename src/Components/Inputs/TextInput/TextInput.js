import React, {useState} from "react";
import "./style.scss";
import InputLabel from "../InputLabel/InputLabel";

export default (props) => {

    const [labelFloatingState, setLabelFloating] = useState(false);

    const handleFocus = () => {
        setLabelFloating(true)
    };

    const handleBlur = () => {
        setLabelFloating(false)
    };

    return (
        <div className="input-group">
            <InputLabel
                name={props.name}
                isFloating={labelFloatingState}
            />
            <input
                className="text-input primary-color"
                type="text"
                onChange={(ev) => props.change(ev.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </div>
    );
}
