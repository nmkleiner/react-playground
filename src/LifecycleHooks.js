import React, {Component} from "react";

class LifecycleHooks extends Component {

    constructor(props) {
        super(props);
        console.log("constructor");
    }

    componentDidCatch(error, errorInfo) {
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    componentWillReceiveProps(nextProps, nextContext) {
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }
}
