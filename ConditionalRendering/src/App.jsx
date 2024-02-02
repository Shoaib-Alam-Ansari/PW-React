import { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [signup, setSignup] = useState(false);

  return (
    <>
      <div class="card" style={{ width: "22rem" }}>
        <div class="card-body">
          <h5 class="card-title">Instagram</h5>

          <input
            type="text"
            className="form-control mb-2"
            placeholder="Mobile Number"
          />
           {signup ? (
            <div>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Name"
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Email"
              />
            </div>
          ) : (
            ""
          )}

          <input
            type="text"
            className="form-control mb-2"
            placeholder="Password"
          />

          <button class="mb-2 col-12 btn btn-primary">
            {signup ? "SignUp" : "Login"}
          </button>
          <div className=" d-flex align-items-center">
            <span>{signup ? "Have an account" : "Don't have a account ?"} </span>
            <button className="btn text-danger" onClick={() => setSignup(!signup)}>
            {signup ? "SignIn" : "SignUp"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
