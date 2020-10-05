import React, {PureComponent} from "react";


// interface Props = {
//     prop1: string;
//     prop2: number;
//     props3: array;
// }

class pureComponent extends PureComponent {

    constructor(props) {
        super(props);
        console.log("constructor");
    }

    /*
    * This check happens automatically in PureComponent
    * when parent re-renders checks if any of the props changed before re-rendering/not
    * */
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if (nextProps.prop1 !== this.props.prop1 ||
    //         nextProps.prop2 !== this.props.prop2 ||
    //         nextProps.prop3 !== this.props.prop3
    //     ) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }
}
