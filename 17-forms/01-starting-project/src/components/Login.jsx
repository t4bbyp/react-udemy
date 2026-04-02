import { useRef, useState } from "react";

export default function Login() {
  
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPass = password.current.value;

    //console.log(enteredEmail, enteredPass);

    const emailIsValid = enteredEmail.includes('@');
    if(!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }
  
  }

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
            ref={email}
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
            ref={password}
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
