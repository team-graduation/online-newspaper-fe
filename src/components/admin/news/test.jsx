import React, { useContext, useEffect } from "react";
import { ArticlesContext } from "../../../context/articles.context";
import { useNavigate } from "react-router-dom";
import { Header } from "../../common/header";
import { Footer } from "../../common/footer";
import "./test.css"


const ListNewsOfUser = () => {
  return (
    <div>
    <style dangerouslySetInnerHTML={{__html: "\n  body {\n  padding: 2%;\n  text-align: center;\n}\n\n#slideshow {\n  overflow: hidden;\n  height: 510px;\n  width: 728px;\n  margin: 0 auto;\n}\n\n.slide-wrapper {\n  width: 2912px;\n  -webkit-animation: slide 8s ease infinite;\n}\n\n.slide {\n  float: left;\n  height: 510px;\n  width: 728px;\n}\n\n\n@-webkit-keyframes slide {\n  20% {margin-left: 0px;}\n  30% {margin-left: -728px;}\n  50% {margin-left: -728px;}\n  60% {margin-left: -1456px;}\n  80% {margin-left: -1456px;}\n}\n\n" }} />
    <h3>Tạo slideshow bằng HTML Và CSS</h3>
    <div id="slideshow">
      <div className="slide-wrapper">
        <div className="slide"><img src="https://images.pexels.com/photos/2382325/pexels-photo-2382325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" /></div>
        <div className="slide"><img src="https://images.pexels.com/photos/3578393/pexels-photo-3578393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" /></div>
        <div className="slide"><img src="https://images.pexels.com/photos/4484184/pexels-photo-4484184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" /></div>
      </div>
    </div>
  </div>
  );
};
export default ListNewsOfUser;
