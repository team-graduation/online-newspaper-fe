import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/style.css";
import "./App.css";
import Home from "./components/user/home";
import Login from "./components/user/login"
import Register from "./components/user/register"
import Blog from "./components/user/blog";
import Category from "./components/user/category";
import { ArticlesContextProvider } from "./context/articles.context";
import { UserContextProvider } from "./context/users.context";
import UserAdmin from "./components/admin/users/User";
import NewsAdmin from "./components/admin/news/News"
import AddNews from "./components/admin/news/News.edit"
import { CategoryContext, CategoryContextProvider } from "context/categories.context";
import { CommentContextProvider } from "context/comment.context";

function App() {
  return (
    <UserContextProvider>
      <ArticlesContextProvider>
        <CategoryContextProvider>
          <CommentContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" exact element={<Login />} />
              <Route path="/register" exact element={<Register />} />
              <Route path="/" exact element={<Home />} />
              <Route path="/news/:id" element={<Blog />} />

              {/* Admin */}
              <Route path="/category/:category" exact element={<Category />} />
              <Route path="/admin/user" exact element={<UserAdmin></UserAdmin>} />
              <Route path="/admin/news" exact element={<NewsAdmin></NewsAdmin>} />
              <Route path="/admin/news/add" exact element={<AddNews></AddNews>} />
              <Route path="admin/news/edit/:id" exact element={<AddNews></AddNews>} />


              {/* Admin */}
              {/* <Route path="/admin/home" exact element={<AdHomemin />} /> */}
            </Routes>
          </BrowserRouter>
          </CommentContextProvider>
        </CategoryContextProvider>
      </ArticlesContextProvider>
    </UserContextProvider>
  );
}

export default App;
