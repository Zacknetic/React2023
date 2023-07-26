import { useSelector, useDispatch } from "react-redux";
// import { connect } from "react-redux";
// import { Component } from "react";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counterSlice";

const Counter = () => {
const counter = useSelector((state) => state.counter.counter);
const show = useSelector((state) => state.counter.showCounter);

  const dispatchEvent = useDispatch();
  const incrementHandler = () => {
    dispatchEvent(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatchEvent(counterActions.decrement());
  };

  const increaseHandler = (num) => {
    dispatchEvent(counterActions.increase(num)); // {type: SOME_UNIQUE_IDENTIFIER, payload: 10}
  };

  const toggleCounterHandler = () => {
    dispatchEvent(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler.bind(null, 5)}>
          Increase by five
        </button>

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
