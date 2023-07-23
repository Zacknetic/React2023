export default function Users(props) {

  return (
    <div>
      <h2>Users</h2>
      {props.users.map((user) => (
        <div key={user.id}>
          <h3>
            {user.firstName} {user.lastName}
          </h3>
          <p>{user.email}</p>
          <p>{user.streetAddress}</p>
          <p>
            {user.city}, {user.state} {user.zipCode}
          </p>
          <p>{user.phoneNumber}</p>
          <p>{user.website}</p>
          <p>{user.age}</p>
          <p>{user.salary}</p>
          <p>{user.yearsOfService}</p>
        </div>
      ))}
    </div>
  );
}
