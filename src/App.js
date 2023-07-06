import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/style.css";
import "./App.css";
import Home from "./components/user/home";
import Login from "./components/user/login"
import Register from "./components/user/register"
import Blog from "./components/user/blog";
import Category from "./components/user/category";
import ListNews from "./components/user/list.news"
import { ArticlesContextProvider } from "./context/articles.context";
import { UserContextProvider } from "./context/users.context";
import UserAdmin from "./components/admin/users/User";
import NewsAdmin from "./components/admin/news/News"
import AddNews from "./components/admin/news/News.edit"
import Profile from "./components/user/profile"
import { CategoryContext, CategoryContextProvider } from "context/categories.context";
import { CommentContextProvider } from "context/comment.context";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <UserContextProvider>
      <ArticlesContextProvider>
        <CategoryContextProvider>
          <CommentContextProvider>
            <ToastContainer />
          <BrowserRouter>
            <Routes>
              <Route path="/login" exact element={<Login />} />
              <Route path="/register" exact element={<Register />} />
              <Route path="/" exact element={<Home />} />
              <Route path="/news/:id" element={<Blog />} />
              <Route path="/category/:id" exact element={<Category />} />
              <Route path="/user/news" exact element={<ListNews/>} />
              <Route path="/profile" exact element={<Profile/>} />
              <Route path="news/post" exact element={<AddNews/>} />

              {/* Admin */}
              <Route path="/admin/user" exact element={<UserAdmin></UserAdmin>} />
              <Route path="/admin/news" exact element={<NewsAdmin></NewsAdmin>} />
              <Route path="/news/add" exact element={<AddNews></AddNews>} />
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
