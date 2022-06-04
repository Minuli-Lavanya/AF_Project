import React, { useState } from "react";
import axios from "axios";

function SignIn(props) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    id: "6281bcc35b190bd42020cb5f",
    name: "admin",
    email: "admin@gmail.com",
  };
  const handleSubmit = () => {
    setError(null);
    setError(true);
    if (email === "admin@gmail.com" || password === "admin") {
      setLoading(false);
    } else {
      axios
        .post("http://localhost:8070/api/research_admin/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          setLoading(false);

          window.location = "/Admin";
        })
        .catch((err) => {
          setLoading(false);
          console.log(err.response.data.error_Message);
          setError(err.response.data.error_Message);
        });
    }
  };

  return (
    <section>
      <div style={{ marginLeft: "90%", marginTop: "2%" }}>
        <a href="/SignIn">
          <button style={{ borderRadius: "10px" }}>User Signin</button>
        </a>
      </div>
      <div
        style={{
          padding: "2em 0",
          width: "100%",
          paddingright: "15px",
          paddingleft: "15px",
          marginright: "auto",
          marginleft: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexwrap: "wrap",
            marginright: "-15px",
            marginleft: "15px",
            justifyContent: "center",
          }}
        >
          <center>
            <div className="col-md-12 col-lg-11">
              <div className="wrap d-md-flex">
                <div>
                  <img
                    src="https://conweb.network/wp-content/uploads/2017/06/research-1.jpg"
                    alt="Research project"
                    className="img"
                    width={500}
                    height={700}
                  />
                </div>
                <div
                  className="login-wrap p-4 p-md-5"
                  style={{ width: "600px", marginTop: "80px" }}
                >
                  <div className="d-flex">
                    <div>
                      <h3 className="mb-4">Sign In</h3>
                    </div>
                  </div>
                  <form action="#" className="signin-form">
                    <div className="form-group mb-3">
                      <label className="label d-flex" htmlFor="name">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="label d-flex" htmlFor="password">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div style={{ marginBottom: "1rem", marginTop: "2rem" }}>
                      <button
                        type="submit"
                        className="form-control btn btn-primary rounded submit px-3"
                        style={{ backgroundColor: "#8b0000" }}
                        onClick={handleSubmit}
                      >
                        {loading ? "Loading..." : "Sign In"}
                      </button>
                    </div>
                    {error && <p style={{ color: "#8b0000" }}>{error}</p>}
                    <div
                      className="form-group d-md-flex"
                      style={{ marginBottom: 15 }}
                    >
                      <div className="w-50 text-left"></div>
                      <div className="w-50 text-md-right">
                        <a
                          href="#"
                          style={{
                            textDecoration: "none",
                            color: "#808080",
                            marginLeft: "5em",
                          }}
                        >
                          Forgot Password
                        </a>
                      </div>
                    </div>
                  </form>
                  <p className="text-center">
                    Don't have an account?{" "}
                    <a
                      data-toggle="tab"
                      href="/adminsignup"
                      style={{ textDecoration: "none", color: "#8b0000" }}
                    >
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </center>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
