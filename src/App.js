import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./assets/style.css";
import "./App.css";
import Home from "./components/user/home";
import Login from "./components/user/login"
import Register from "./components/user/register"
import Blog from "./components/user/blog";
import Category from "./components/user/category";
import ViewCategory from "components/admin/categories/ViewCategory";
import { ArticlesContextProvider } from "./context/articles.context";

function App() {
  return (
    <ArticlesContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/category/:category" exact element={<Category />} />
          <Route path="/view-employee/:id" component={ViewCategory}></Route>
        </Routes>
      </BrowserRouter>
    </ArticlesContextProvider>
  );
}

export default App;
