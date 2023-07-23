import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const users = [
  { id: "1", name: "Juadeb", email: "juadebgabriel@gmail.com" },
  { id: "2", name: "Justin", email: "justin@gmail.com" },
  { id: "3", name: "George", email: "goerge@gmail.com" },
];

const renderCard = () => {
  users.map((user) => (
    <div key={user.id}>
      <div>
        <h3>{user.name}</h3>
        <span>{user.email}</span>
      </div>
      <div>
        <Link to={`edit-user/${user.id}`}>
          <Button>Edit</Button>
        </Link>
        <Button>Delete</Button>
      </div>
    </div>
  ));
};

function UserList() {
  return (
    <div>
      <div>
        <Button>Add Users</Button>
      </div>
      <div>{users.length ? renderCard() : <p>No User Found</p>}</div>
    </div>
  );
}

export default UserList;
