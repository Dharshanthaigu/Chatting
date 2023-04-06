import React from "react";
import axios from "axios";

function AuthenticationPage(props) {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios
      .post("http://localhost:3001/authenticate", { username: value })
      .then((r) => props.onAuth({ ...r.data, secret: value }))
      .catch((e) => console.log("error", e));
  };
  return (
    <div className="background">
      <form className="form_card" onSubmit={onSubmit}>
        <div className="form_title">Hi Everyone!👋</div>
        <div className="form_subtitle">Set username to get started</div>

        <div className="auth">
          <div className="auth_label">username</div>
          <input name="username" className="auth_input" />
          <button className="auth_button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
}

export default AuthenticationPage;
