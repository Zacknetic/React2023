import { Component } from "react";

import Card from "./Card";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: null,
      counter: props.start || 0,
      step: props.step || 1,
      duration: props.duration || 1000,
    };
  }

  componentDidMount() {
    const { start, step, duration } = this.props;
    this.setState({
      counter: start,
      step,
      duration,
    });

    this.startCounter();
  }

  componentWillUnmount() {
    this.stopCounter();
  }

  startCounter() {
    this.setState({
      interval: setInterval(() => {
        this.setState((prevState) => {
          return { counter: prevState.counter + this.state.step };
        });
      }, this.state.duration),
    });
  }

  stopCounter() {
    clearInterval(this.state.interval);
  }

  render() {
    return <Card>{this.state.counter}</Card>;
  }
}
