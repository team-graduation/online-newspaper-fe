import { useContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/users.context";
import { Header } from 'components/common/header';
import { Footer } from 'components/common/footer';

const Profile = () => {
  const navigate = useNavigate();
  const { user = {}, getProfile } = useContext(UserContext);
  useEffect(() => {
    getProfile();
  }, []);


  return (
    <div>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lobster&effect=shadow-multiple" />
      <Header />
      <div>
        <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n    \tbody{margin-top:20px;}\n.card-style1 {\n    box-shadow: 0px 0px 10px 0px rgb(89 75 128 / 9%);\n}\n.border-0 {\n    border: 0!important;\n}\n.card {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    min-width: 0;\n    word-wrap: break-word;\n    background-color: #fff;\n    background-clip: border-box;\n    border: 1px solid rgba(0,0,0,.125);\n    border-radius: 0.25rem;\n}\n\nsection {\n    padding: 120px 0;\n    overflow: hidden;\n    background: #fff;\n}\n.mb-2-3, .my-2-3 {\n    margin-bottom: 2.3rem;\n}\n\n.section-title {\n    font-weight: 600;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n    margin-bottom: 10px;\n    position: relative;\n    display: inline-block;\n}\n.text-primary {\n    color: #ceaa4d !important;\n}\n.text-secondary {\n    color: #15395A !important;\n}\n.font-weight-600 {\n    font-weight: 600;\n}\n.display-26 {\n    font-size: 1.3rem;\n}\n\n@media screen and (min-width: 992px){\n    .p-lg-7 {\n        padding: 4rem;\n    }\n}\n@media screen and (min-width: 768px){\n    .p-md-6 {\n        padding: 3.5rem;\n    }\n}\n@media screen and (min-width: 576px){\n    .p-sm-2-3 {\n        padding: 2.3rem;\n    }\n}\n.p-1-9 {\n    padding: 1.9rem;\n}\n\n.bg-secondary {\n    background: #15395A !important;\n}\n@media screen and (min-width: 576px){\n    .pe-sm-6, .px-sm-6 {\n        padding-right: 3.5rem;\n    }\n}\n@media screen and (min-width: 576px){\n    .ps-sm-6, .px-sm-6 {\n        padding-left: 3.5rem;\n    }\n}\n.pe-1-9, .px-1-9 {\n    padding-right: 1.9rem;\n}\n.ps-1-9, .px-1-9 {\n    padding-left: 1.9rem;\n}\n.pb-1-9, .py-1-9 {\n    padding-bottom: 1.9rem;\n}\n.pt-1-9, .py-1-9 {\n    padding-top: 1.9rem;\n}\n.mb-1-9, .my-1-9 {\n    margin-bottom: 1.9rem;\n}\n@media (min-width: 992px){\n    .d-lg-inline-block {\n        display: inline-block!important;\n    }\n}\n.rounded {\n    border-radius: 0.25rem!important;\n}\n    " }} />
        <section >
          <div className="container">
            <div class="w3-container w3-lobster">
              <p class="w3-xxxlarge font-effect-shadow-multiple" style={{ textAlign:'center' }}>Profile</p>
            </div>
            <div className="row">
              <div className="col-lg-12 mb-sm-5">
                <div className=" card-style1 border-0">
                  <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                    <div className="row align-items-center">
                      <div className="col-lg-6 mb-4 mb-lg-0">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="..." />
                      </div>
                      <div className="col-lg-6 px-xl-10">
                        <div className="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                          <h3 className="h2 text-white mb-0 capitalize">{user.username}</h3>
                        </div>
                        <ul className="list-unstyled mb-1-9">
                          <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-500">Experience:</span>{user.experience}</li>
                          <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-500">Email:</span> <a>{user.email}</a></li>
                          <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-500">Website:</span>{user.website}</li>
                          <li className="display-28"><span className="display-26 text-secondary me-2 font-weight-500">Phone:</span>{user.phone}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mb-4 mb-sm-5">
                <div>
                  <h4 className="section-title text-primary mb-3 mb-sm-4">About Me</h4>
                  <p>{user.about}</p>
                </div>
              </div></div></div></section>
      </div>
      <Footer />
    </div>
  );
};
export default Profile;