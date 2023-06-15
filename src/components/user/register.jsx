import "../../assets/fonts/icomoon/style.css";
import "../../assets/css/owl.carousel.css";
import "../../assets/style-login.css";
import "../../assets/css/bootstrap.min.login.css";
import svgImage from "../../assets/img/core-img/undraw_file_sync_ot38.svg";
import Service from "../../services/AuthService";
import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/users.context";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const onAuthClickHandler = async (credential) => {
    try {
      const response = await Service.register(credential);
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

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
                      
                            <div className="form-group first">                
                              <input onChange={function(event) {
                                setUsername(event.target.value)
                              }} type="text" className="form-control" id="username" placeholder="Username" value={username} />
                            </div>
           
                            <div className="form-group last mb-4">
                              <input onChange={function(event) {
                                setPassword(event.target.value)
                              }} type="password" className="form-control" id="password" placeholder="Password" value={password} />
                            </div>
                            <div className="form-group last mb-4">
                            
                              <input onChange={function(event) {
                                setConfirmPassword(event.target.value)
                              }} htmlFor="password" type="password" className="form-control" id="password" placeholder="Confirm password" value={confirmPassword} />
                            </div>
                            <div className="d-flex mb-5 align-items-center">
                              <label className="control control--checkbox mb-0"><span className="caption">I agree to the website</span>
                                <input type="checkbox" defaultChecked="checked" />
                                <div className="control__indicator" />
                              </label>
                            </div>
                        
                            <input onClick={function(event) {
                                onAuthClickHandler({
                                  username,
                                  password
                                })
                            }} type="submit" defaultValue="Log In" className="btn text-white btn-block btn-primary" />
                  
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