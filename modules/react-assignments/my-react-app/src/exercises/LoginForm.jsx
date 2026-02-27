import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.length === 0) {
      setMessage("Please enter your email.");
    } else if (!email.includes("@")) {
      setMessage("Invalid email. It must contain @");
    } else if (password.length === 0) {
      setMessage("Please enter your password.");
    } else if (password.length < 6) {
      setMessage("Password must be at least 6 characters long.");
    } else {
      setMessage("Login successful!");
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "20px auto" }}>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        <br />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <br />

        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default LoginForm;
