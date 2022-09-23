import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
  };

  return (
    <div>
      <h1>Sign Up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label htmlFor="">Display Name</label>
        <input
          onChange={handleChange}
          name="displayName"
          value={displayName}
          type="text"
          required
        />

        <label htmlFor="">Email</label>
        <input
          onChange={handleChange}
          name="email"
          value={email}
          type="email"
          required
        />

        <label htmlFor="">Password</label>
        <input
          onChange={handleChange}
          name="password"
          value={password}
          type="password"
          required
        />

        <label htmlFor="">Confirm Password</label>
        <input
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          type="password"
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
