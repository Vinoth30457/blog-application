import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import AllBlogs from "./pages/allBlogs/AllBlogs";
import NoPage from "./pages/nopage/NoPage";
import BlogInfo from "./pages/blogInfo/BlogInfo";
import AdminLogin from "./pages/admin/adminLogin/AdminLogin";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import MyState from "./context/data/myState";
import { Toaster } from "react-hot-toast";
import CreateBlog from "./pages/admin/createBlog/CreateBlog";
import SignUp from "./pages/reg/SignUp";
import Login from "./pages/reg/Login";
import UpdateBlog from "./pages/admin/createBlog/UpdateBlog";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/allblogs"
            element={
              <ProtectedRoutes>
                <AllBlogs />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/bloginfo/:id"
            element={
              <ProtectedRoutes>
                <BlogInfo />
              </ProtectedRoutes>
            }
          />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRouteForAdmin>
                <Dashboard />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path="/createblog"
            element={
              <ProtectedRouteForAdmin>
                <CreateBlog />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path="/updateblog"
            element={
              <ProtectedRouteForAdmin>
                <UpdateBlog />
              </ProtectedRouteForAdmin>
            }
          />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  );
}
export const ProtectedRoutes = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("admin"));
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("admin"));
  if (admin?.user?.email === "vinoth@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default App;
