import React, { Component } from "react";

class Login extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div class="row d-flex justify-content-center">
        <div class="col-md-6">
          <h2>Log in to FlightMX</h2>
          <form class="login" action="/login" method="post" >
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input
                type="email"
                class="form-control"
                id="username"
                name="username"
                placeholder="Email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <button type="submit" class="btn btn-dark mr-2">Login</button>
          
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
