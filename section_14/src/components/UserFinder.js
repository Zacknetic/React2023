import { Component } from "react";
import styles from "./UserFinder.module.css";

import Users from "./Users";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

export default class UserFind extends Component {
  constructor() {
    super();
    this.state = {
      filteredUsers: DUMMY_USERS,
      searchTerm: "",
    };
  }

  searchChangeHandler = (event) => {
    this.setState({ searchTerm: event.target.value });
  };
  
  componentDidMount() {
    this.setState({ filteredUsers: DUMMY_USERS });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      const filteredUsers = DUMMY_USERS.filter((user) =>
        user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      );
      this.setState({ filteredUsers: filteredUsers });
    }
  }

 

  render() {
    return (
      <>
        <div className={styles.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} />
      </>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");
//   useEffect(() => {
//     const filteredUsers = DUMMY_USERS.filter((user) =>
//       user.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredUsers(filteredUsers);
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={styles.finder}>
//         <input type="search" onChange={searchChangeHandler} />
//       </div>

//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

// export default UserFinder;
