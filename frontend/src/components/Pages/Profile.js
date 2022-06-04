import React from "react";

function Profile() {
  return (
    <div>
      <div>
        <div className="container">
          <div class="row mt-5 mb-5">
            <div class="col-sm-6 pt-5">
              <img
                src="https://i.imgur.com/hU7mgwt.jpeg"
                style={{ width: "70%" }}
                class="img-fluid pt-5"
                alt="..."
              />
            </div>

            <div class="col-sm-6 p-3 bg-light">
              <h2
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "60px",
                }}
              >
                My Profile
              </h2>
              <div
                  className="login-wrap p-4 p-md-5"
                  style={{ width: "600px", marginTop: "80px" }}
                >
                  <form action="#" className="signin-form">
                    <div className="form-group mb-3">
                      <label className="label d-flex" htmlFor="name">
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="label d-flex" htmlFor="name">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                      />
                    </div>

                    <div className="form-group mb-3">
                      <label className="label d-flex">Type of the user </label>
                      <input
                        type="typeofuser"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="label d-flex" htmlFor="password">
                        Faculty
                      </label>
                      <input
                        type="password"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="label d-flex" htmlFor="confirmpassword">
                        Year and Semester
                      </label>
                      <input
                        type="password"
                        className="form-control"
                      />
                    </div>
                    <div style={{ marginBottom: "1rem", marginTop: "2rem" }}>
                      <button
                        type="submit"
                        className="form-control btn btn-primary rounded submit px-3"
                        style={{ backgroundColor: "#8b0000" }}
                      >
                        Update User
                      </button>
                    </div>
                  </form>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
