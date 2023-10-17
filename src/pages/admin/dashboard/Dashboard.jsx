import React, { useContext } from "react";
import Layout from "../../../components/layout/Layout";
import myContext from "../../../context/data/myContext";
import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const context = useContext(myContext);
  const { mode, getAllBlog, deleteBlogs, user, edithandle } = context;
  const navigate = useNavigate();

  //* Logout Function
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  const userId = JSON.parse(localStorage.getItem("admin"));
  return (
    <Layout>
      <div className="py-10">
        <div className="flex flex-wrap justify-start items-center lg:justify-center gap-2 lg:gap-10 px-4 lg:px-0 mb-8">
          {userId ? (
            <>
              {user
                .filter((obj) => obj.uid == userId.user.uid)
                .map((item, index) => {
                  return (
                    <div className="left" key={index}>
                      <img
                        className=" w-40 h-40  object-cover rounded-full border-2 border-pink-600 p-1"
                        src={item.photo}
                        alt="profile"
                      />
                    </div>
                  );
                })}
            </>
          ) : (
            ""
          )}

          <div className="right">
            <h1
              className="text-center font-bold text-2xl mb-2"
              style={{ color: mode === "dark" ? "white" : "black" }}
            >
              Vinoth kumar
            </h1>

            <h2
              style={{ color: mode === "dark" ? "white" : "black" }}
              className="font-semibold"
            >
              Daily Bloger
            </h2>
            <h2
              style={{ color: mode === "dark" ? "white" : "black" }}
              className="font-semibold"
            >
              vinoth@gmail.com
            </h2>
            <h2
              style={{ color: mode === "dark" ? "white" : "black" }}
              className="font-semibold"
            >
              <span>Total Blog : </span> {getAllBlog.length}
            </h2>
            <div className=" flex gap-2 mt-2">
              <Link to={"/createblog"}>
                <div className=" mb-2">
                  <Button
                    style={{
                      background:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : "rgb(30, 41, 59)",
                      color: mode === "dark" ? "black" : "white",
                    }}
                    className="px-8 py-2"
                  >
                    Create Blog
                  </Button>
                </div>
              </Link>
              <div className="mb-2">
                <Button
                  style={{
                    background:
                      mode === "dark"
                        ? "rgb(226, 232, 240)"
                        : "rgb(30, 41, 59)",
                    color: mode === "dark" ? "black" : "white",
                  }}
                  className="px-8 py-2"
                  onClick={logout}
                >
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Line  */}
        <hr
          className={`border-2
                 ${mode === "dark" ? "border-gray-300" : "border-gray-400"}`}
        />

        {/* Table  */}
        <div className="">
          <div className=" container mx-auto px-4 max-w-7xl my-5">
            <div className="relative overflow-x-auto shadow-md sm:rounded-xl">
              {/* table  */}
              <table className="w-full border-2 border-white shadow-md text-sm text-left text-gray-500 dark:text-gray-400">
                {/* thead  */}
                <thead
                  style={{
                    background: mode === "dark" ? "white" : "rgb(30, 41, 59)",
                  }}
                  className="text-xs "
                >
                  <tr>
                    <th
                      style={{
                        color: mode === "dark" ? "rgb(30, 41, 59)" : "white",
                      }}
                      scope="col"
                      className="px-6 py-3"
                    >
                      S.No
                    </th>
                    <th
                      style={{
                        color: mode === "dark" ? "rgb(30, 41, 59)" : "white",
                      }}
                      scope="col"
                      className="px-6 py-3"
                    >
                      Thumbnail
                    </th>
                    <th
                      style={{
                        color: mode === "dark" ? "rgb(30, 41, 59)" : "white",
                      }}
                      scope="col"
                      className="px-6 py-3"
                    >
                      Title
                    </th>
                    <th
                      style={{
                        color: mode === "dark" ? "rgb(30, 41, 59)" : "white",
                      }}
                      scope="col"
                      className="px-6 py-3"
                    >
                      Category
                    </th>
                    <th
                      style={{
                        color: mode === "dark" ? "rgb(30, 41, 59)" : "white",
                      }}
                      scope="col"
                      className="px-6 py-3"
                    >
                      Date
                    </th>
                    <th
                      style={{
                        color: mode === "dark" ? "rgb(30, 41, 59)" : "white",
                      }}
                      scope="col"
                      className="px-6 py-3"
                    >
                      Action
                    </th>
                  </tr>
                </thead>

                {/* tbody  */}
                {getAllBlog.length > 0 ? (
                  <>
                    {getAllBlog.map((item, index) => {
                      const { thumbnail, date, id } = item;
                      return (
                        <tbody key={index}>
                          <tr
                            className=" border-b-2"
                            style={{
                              background:
                                mode === "dark" ? "rgb(30, 41, 59)" : "white",
                            }}
                          >
                            {/* S.No   */}
                            <td
                              style={{
                                color: mode === "dark" ? "white" : "black",
                              }}
                              className="px-6 py-4"
                            >
                              {index + 1}.
                            </td>

                            {/* Blog Thumbnail  */}
                            <th
                              style={{
                                color: mode === "dark" ? "white" : "black",
                              }}
                              scope="row"
                              className="px-6 py-4 font-medium "
                            >
                              {/* thumbnail  */}
                              <img
                                className="w-16 rounded-lg"
                                src={thumbnail}
                                alt="thumbnail"
                              />
                            </th>

                            {/* Blog Title  */}
                            <td
                              style={{
                                color: mode === "dark" ? "white" : "black",
                              }}
                              className="px-6 py-4"
                            >
                              {item.blogs.title}
                            </td>

                            {/* Blog Category  */}
                            <td
                              style={{
                                color: mode === "dark" ? "white" : "black",
                              }}
                              className="px-6 py-4"
                            >
                              {item.blogs.category}
                            </td>

                            {/* Blog Date  */}
                            <td
                              style={{
                                color: mode === "dark" ? "white" : "black",
                              }}
                              className="px-6 py-4"
                            >
                              {date}
                            </td>

                            {/* Delete Blog  */}
                            <td
                              style={{
                                color: mode === "dark" ? "white" : "black",
                              }}
                              className="px-6 py-4"
                            >
                              {/* <Link to={"/updateblog"}>
                                <button
                                  onClick={() => edithandle(item)}
                                  className=" px-4 py-1 rounded-lg text-white font-bold bg-green-500"
                                >
                                  Edit
                                </button>
                              </Link> */}
                              <button
                                onClick={() => deleteBlogs(id)}
                                className=" px-4 py-1 rounded-lg text-white font-bold bg-red-500"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </>
                ) : (
                  <h1>Not Found</h1>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
