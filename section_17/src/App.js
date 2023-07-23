import React, { useState } from 'react';
import BasicForm from "./components/BasicForm";
import Users from "./components/Users";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (userData) => {
    setUsers((prevUsers) => [...prevUsers, {...userData, id: Math.random().toString()}]);
  }

  return (
    <div className="app">
      <BasicForm onSubmit={addUser}/>
      <Users users={users} />
    </div>
  );
}

export default App;
