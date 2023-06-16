import React, { useContext, useEffect } from "react";
import { ArticlesContext } from "../../../context/articles.context";
import { useNavigate } from "react-router-dom";
import { Header } from "../../common/header";
import { Footer } from "../../common/footer";
import "./test.css"


const ListNewsOfUser = () => {
  return (
    <div class="navigation">
    <button class="nav-button">Home</button>
    <button class="nav-button">About</button>
    <button class="nav-button">Services</button>
    <button class="nav-button">Contact</button>
  </div>
  );
};
export default ListNewsOfUser;
