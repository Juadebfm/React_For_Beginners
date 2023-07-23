import React, { useState } from "react";
import Button from "../../components/Button";
import TextField from "../../components/TextField";

const AddUser = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleAddUser = () => {
    setValues({ name: "", email: "" });
  };

  return (
    <div className="space-y-5">
      <TextField
        label="name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{
          type: "text",
          placeholder: "Enter User Name",
        }}
      />
      <TextField
        label="email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{
          type: "text",
          placeholder: "Enter User Email",
        }}
      />
      <Button onClick={handleAddUser}>Edit User</Button>
    </div>
  );
};

export default AddUser;
