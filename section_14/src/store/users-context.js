import React from 'react';

const UsersContext = React.createContext({
    users: [],
    setUsers: () => {}
});

export default UsersContext;