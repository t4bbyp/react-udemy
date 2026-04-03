import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";

export default function Login() {
  //const [enteredEmail, setEnteredEmail] = useState("");
  //const [enteredPass, setEnteredPass] = useState("");

  const [enteredVals, setEnteredVals] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  //this for the non blur method
  /*
  const emailIsInvalid =
    enteredVals.email.includes !== "" && !enteredVals.email.includes("@");
  */

  const emailIsInvalid =
    didEdit.email &&
    !isEmail(enteredVals.email) &&
    !isNotEmpty(enteredVals.email);
  const passIsInvalid =
    didEdit.password && !hasMinLength(enteredVals.password, 6);

  function handleSubmit(event) {
    event.preventDefault();

    console.log(enteredVals);
  }

  function handleInputChange(identifier, value) {
    setEnteredVals((prevVals) => ({ ...prevVals, [identifier]: value }));
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  function handleBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  /*
  function handleEmailChange(event) {
    setEnteredEmail(event.target.value);
  }

  function handlePassChange(event) {
    setEnteredPass(event.target.value);
  }
  */

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          onBlur={() => handleBlur("email")}
          onChange={(event) => handleInputChange("email", event.target.value)}
          value={enteredVals.email}
          error={emailIsInvalid && "pls enter valid email"}
        />

        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          onBlur={() => handleBlur("password")}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
          value={enteredVals.password}
          error={passIsInvalid && "pls enter valid pass"}
        />
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

//Default behavior: the button function run automatically on page load
//so the from submits on its own & reloads
//can prevent by: adding type button, OR
// by removing the onClick and adding onSubmit to the form
