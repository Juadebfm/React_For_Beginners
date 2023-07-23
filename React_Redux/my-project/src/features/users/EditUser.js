import React, { useState } from "react";
import TextField from "../../components/TextField";
import Button from "../../components/Button";

const EditUser = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleEditUser = () => {
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
        label="name"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{
          type: "text",
          placeholder: "Enter User Email",
        }}
      />
      <Button onClick={handleEditUser}>Edit User</Button>
    </div>
  );
};

export default EditUser;
