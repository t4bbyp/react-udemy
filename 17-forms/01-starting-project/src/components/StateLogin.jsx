import { useState } from "react";

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

  const emailIsInvalid = didEdit.email && !enteredVals.email.includes("@");

  function handleSubmit(event) {
    event.preventDefault();

    console.log(enteredVals);
  }

  function handleInputChange(identifier, value) {
    setEnteredVals((prevVals) => ({ ...prevVals, [identifier]: value }));
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: false
    }))
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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredVals.email}
            onBlur={(event) => handleBlur("email")}
          />
          <div className="control-error">
            {emailIsInvalid && <p>pls enter valid email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            value={enteredVals.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

//Default behavior: the button function run automatically on page load
//so the from submits on its own & reloads
//can prevent by: adding type button, OR
// by removing the onClick and adding onSubmit to the form
