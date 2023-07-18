import User from "./User";
import { Component, props } from "react";

import classes from "./Users.module.css";

//you cannot import props like this
//import props from "react";

class Users extends Component {
  constructor() {
    super();
    this.props = props;
    this.state = {
      showUsers: true,
    };

    console.log(this.props);
    this.toggleUsersHandler = this.toggleUsersHandler.bind(this);
  }

  toggleUsersHandler() {
    //this.state.showUsers = false; // this will not work!
    // this.setState({ showUsers: false }); // this will work but it may not be the latest state
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    }); // this will work and it will be the latest state
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    //below is one way to bind this to the function
    //another way is to use arrow function
    // <button onClick={this.toggleUsersHandler.bind(this)}>
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? "Hide" : "Show"} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
