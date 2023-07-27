
import Button from "../../components/Button";
import TextField from "../../components/TextField";

const EditUser = () => {
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        inputProps={{ type: "text", placeholder: "Jhon Doe" }}
      />
      <br />
      <TextField
        label="Email"
        inputProps={{ type: "email", placeholder: "jhondoe@mail.com" }}
      />
      <Button>Edit</Button>
    </div>
  );
};

export default EditUser;
