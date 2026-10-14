import React from "react";

function Login() {
  return (
    <div>
      <div
        className="menu show position-static"
        style={{ "--bs-menu-min-width": "300px" }}
      >
        <form className="d-flex flex-column gap-3 p-3">
          <div>
            <label htmlFor="exampleMenuFormEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleMenuFormEmail1"
              placeholder="email@example.com"
            />
          </div>
          <div>
            <label htmlFor="exampleMenuFormPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleMenuFormPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-field">
            <input type="checkbox" id="checkLabel" className="check" />
            <label htmlFor="checkLabel">Example new checkbox</label>
          </div>
          <div className="vstack gap-2">
            <button type="submit" className="btn-solid theme-primary">
              Sign in
            </button>
            <a className="theme-secondary" href="#">
              New around here? Sign up
            </a>
            <a className="theme-secondary" href="#">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;