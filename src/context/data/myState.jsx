/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import MyContext from "./myContext";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { fireDb } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";

function MyState(props) {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const [searchkey, setSearchkey] = useState("");
  const [loading, setloading] = useState(false);

  const [getAllBlog, setGetAllBlog] = useState([]);

  function getAllBlogs() {
    setloading(true);
    try {
      const q = query(collection(fireDb, "blogPost"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let blogArray = [];
        QuerySnapshot.forEach((doc) => {
          blogArray.push({ ...doc.data(), id: doc.id });
        });

        setGetAllBlog(blogArray);
        // console.log(productsArray)
        setloading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  }
  const [user, setUser] = useState([]);

  const getUserData = async () => {
    setloading(true);
    try {
      const result = await getDocs(collection(fireDb, "users"));
      const usersArray = [];
      result.forEach((doc) => {
        usersArray.push(doc.data());
        setloading(false);
      });
      setUser(usersArray);
      console.log(usersArray);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };

  useEffect(() => {
    getAllBlogs();
    getUserData();
  }, []);

  // Blog Delete Function
  const deleteBlogs = async (id) => {
    try {
      await deleteDoc(doc(fireDb, "blogPost", id));
      getAllBlogs();
      toast.success("Blogs deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };
  const [editBlog, setEditBlog] = useState();
  const edithandle = (item) => {
    setEditBlog(item);
  };
  const updateBlog = async () => {
    setloading(true);
    try {
      await setDoc(doc(fireDb, "blogPost", editBlog.id), editBlog);
      toast.success("Product Updated successfully");
      getAllBlogs();
      setloading(false);
      setTimeout(() => {
        window.location.href = "/dashboard";

        // navigate("/dashboard");
      }, 800);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
    setEditBlog("");
  };

  return (
    <MyContext.Provider
      value={{
        mode,
        toggleMode,
        searchkey,
        setSearchkey,
        loading,
        setloading,

        deleteBlogs,
        user,
        updateBlog,
        getAllBlog,
        setGetAllBlog,
        edithandle,
        editBlog,
        setEditBlog,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
