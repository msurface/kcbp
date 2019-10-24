import React from 'react';
import '../css/register.css';

const Register = props => {
  return (
    <section className="register py-5">
      <h2 className="text-center">Register</h2>
      <div className="row">
        <div className="container">
          <div className="col-lg">
            <form>
              <div class="form-group my-4">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control my-1"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group my-4">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control mt-1"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <button type="submit" class="btn btn-success my-2">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
