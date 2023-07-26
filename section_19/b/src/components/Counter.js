import { useSelector, useDispatch } from "react-redux";
// import { connect } from "react-redux";
// import { Component } from "react";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const dispatchEvent = useDispatch();
  const incrementHandler = () => {
    dispatchEvent({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatchEvent({ type: "decrement" });
  };

  const increaseHandler = (num) => {
    dispatchEvent({ type: "increase", value: num });
  };  

  const toggleCounterHandler = () => {
    dispatchEvent({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div> }
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler.bind(null, 5)}>Increase by five</button>

        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;


  // class Counter extends Component {

  //   incrementHandler = () => {
  //     this.props.increment();
  //   };
  //   decrementHandler = () => {
  //     this.props.decrement();

  //   };

  //   toggleCounterHandler = () => {};

  //   render() {
  //     return (
  //       <main className={classes.counter}>
  //         <h1>Redux Counter</h1>
  //         <div className={classes.value}>{this.props.counter}</div>
  //         <div>
  //           <button onClick={this.incrementHandler}>Increment</button>
  //           <button onClick={this.decrementHandler}>Decrement</button>
  //         </div>
  //         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
  //       </main>
  //     );
  //   }
  // }

  // const mapStateToProps = (state) => {
  //   return {
  //     counter: state.counter,
  //   };
  // }

  // const mapDispatchToProps = (dispatch) => {
  //   return {
  //     increment: () => dispatch({ type: "increment" }),
  //     decrement: () => dispatch({ type: "decrement" }),
  //   };
  // }

  // export default connect(mapStateToProps, mapDispatchToProps)(Counter);


