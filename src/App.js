import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from "./components/home";
import Blog from "./components/blog"
import Category from "./components/category";
import ViewCategory from "components/admin/categories/ViewCategory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/blog' exact element={<Blog />} />
        <Route path='/category' exact element={<Category />} />
        <Route path = "/view-employee/:id" component = {ViewCategory}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
