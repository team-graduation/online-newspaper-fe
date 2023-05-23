import "../../assets/fonts/icomoon/style.css";
import "../../assets/css/owl.carousel.css";
import "../../assets/style-login.css";
import "../../assets/css/bootstrap.min.login.css";
import svgImage from "../../assets/img/core-img/undraw_file_sync_ot38.svg";

const Register = () => {
          return (
            <div>
              {/* <link href="https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap" rel="stylesheet" /> */}
              <div className="content">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 order-md-2">
                      <img src={svgImage} alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-md-6 contents">
                      <div className="row justify-content-center">
                        <div className="col-md-8">
                          <div className="mb-4">
                            <h3>Sign Up to <strong>Newspaper</strong></h3>
                            <p className="mb-4">Welcome to my website.</p>
                          </div>
                          <form action="#" method="post">
                            <div className="form-group first">
                              <label htmlFor="username">Username</label>
                              <input type="text" className="form-control" id="username" />
                            </div>
                            <div className="form-group first">
                              <label htmlFor="username">Email</label>
                              <input type="text" className="form-control" id="username" />
                            </div>
                            <div className="form-group last mb-4">
                              <label htmlFor="password">Password</label>
                              <input type="password" className="form-control" id="password" />
                            </div>
                            <div className="form-group last mb-4">
                              <label htmlFor="password">Confirm Password</label>
                              <input type="password" className="form-control" id="password" />
                            </div>
                            <div className="d-flex mb-5 align-items-center">
                              <label className="control control--checkbox mb-0"><span className="caption">I agree to the website</span>
                                <input type="checkbox" defaultChecked="checked" />
                                <div className="control__indicator" />
                              </label>
                            </div>
                            <input type="submit" defaultValue="Log In" className="btn text-white btn-block btn-primary" />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
};
export default Register;