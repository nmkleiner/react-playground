import React, {Component, useEffect, useState} from "react";

const lifecycleHooks = (props) => {
    const [state1, setState1] = useState("");
    const [state2, setState2] = useState("");

    useEffect(() => {
        console.log("do something when state1 changes");
    }, [state1]);

    useEffect(() => {
        console.log("do something when state2 changes");
    }, [state2]);

    useEffect(() => {
        console.log("do something when state1 or state2 changes");
    }, [state1, state2]);

    useEffect(() => {
        console.log("do something on mounting");
    }, []);

    useEffect(() => {
        console.log("do something on every change");
    });

    useEffect(() => {
        return () => {
            console.log("do something on un mounting");
        };
    }, []);

    return (<span>bullshit</span>);
};

// prevent re-rendering when parent component is re-rendering but nothing changed in component
export default React.memo(lifecycleHooks);
