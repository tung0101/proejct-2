import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import TopBar from "./TopBar";
import SideBar from "./SideBar";

const UpdateUser = () => {
  const history = useHistory();
  const { idUser } = useParams();

  const [userData, setuserData] = useState({
    userName: "",
    password: "",
    email: "",
    role: "",
    confirmPassword: "",
  });

  useEffect(() => {
    fetchData();
  }, [idUser]);
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/user/${idUser}`);
      setuserData({ ...response.data });
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu bài viết:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setuserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.password === userData.confirmPassword) {
      axios
        .put(`http://localhost:8000/user/${idUser}`, userData)
        .then(() => {
          history.push("/listuser");
        })
        .catch((error) => {
          if (error.response) {
            // In ra chi tiết lỗi từ máy chủ
            console.log("Server error:", error.response.data);
          } else {
            console.log("Error:", error.message);
          }
        });
    } else {
      console.log("Mật khẩu và xác nhận mật khẩu không giống nhau");
    }
  };

  const handleChange = (e) => {
    setuserData({ ...userData, [e.target.name]: e.target.value });
  };
  return (
    <div id="wrapper">
      {/* Sidebar */}
      <SideBar></SideBar>

      {/* Content Wrapper */}
      <div id="content-wrapper">
        {/* Main Content */}
        <div id="content">
          {/* TopBar */}
          <TopBar></TopBar>

          {/* Container */}
          <div className="container-fluid" style={{paddingTop:"100px"}}>
            <div className="d-sm-flex align-items-center justify-content-center mb-4">
              <h1 className="h3 mb-0 text-gray-800">SỬA BÀI VIẾT</h1>
            </div>

            <div className="col-xl-12 col-lg-4">
              <form className="m-4" onSubmit={handleSubmit}>
                <div className="row mb-2">
                  <div className="col-4">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label text-dark"
                    >
                      UserName
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="userName"
                      value={userData.userName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-4">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label text-dark"
                    >
                      Email
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      value={userData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-4">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label text-dark"
                    >
                      Quyền
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="role"
                      value={userData.role}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label text-dark"
                    >
                      password
                    </label>
                    <input
                      type="text"
                      placeholder="Mật khẩu"
                      name="password"
                      value={userData.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-6">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label text-dark"
                    >
                      Xác nhận mật khẩu
                    </label>
                    <input
                      type="text"
                      placeholder="Xác Nhận Mật Khẩu"
                      name="confirmPassword"
                      value={userData.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-2">
                  Sửa
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
