import React from "react";
import ReactDOM from "react-dom/client";
import reactToWebComponent from "react-to-webcomponent";

import "./counter.css";

interface State {
    count: number;
}

interface Props {}

export default class Counter extends React.Component<Props, State> {
    constructor(props : Props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div className="counter">
                <button onClick={() => this.setState({ count: this.state.count - 1 })}>
                    -
                </button>
                <span>{this.state.count}</span>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    +
                </button>
            </div>
        );
    }
}

customElements.define("my-counter", reactToWebComponent(Counter, React, ReactDOM));
