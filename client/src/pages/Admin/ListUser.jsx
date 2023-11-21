import React, { useEffect, useState } from "react";
import "./assets/vendor/fontawesome-free/css/all.min.css";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import axios from "axios";

const ListUser = () => {
  const [categories, setCategories] = useState([]);
  const [deletedItemId, setDeletedItemId] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    fetchData();
  }, [deletedItemId]);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/user/");
      const filteredUsers = response.data.filter((user) => user.role === 0);
      setCategories(filteredUsers);
      // setCategories(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (idUser) => {
    console.log("Deleting item with ID:", idUser);

    try {
      await axios.delete(`http://localhost:8000/user/${idUser}`);
      setDeletedItemId(idUser);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredCategories = categories.filter((service) => {
    return (
      service.userName.toLowerCase().includes(searchValue.toLowerCase()) ||
      service.email.toLowerCase().includes(searchValue.toLowerCase())
      // Thêm các trường khác nếu cần
    );
  });

  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    }
    return str;
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
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Người Dùng</h1>
              <form className="d-none d-sm-inline-block form-inline my-auto navbar-search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-white border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    style={{
                      height: "40px",
                      width: "500px",
                      margin: " 10px 0",
                    }}
                    value={searchValue}
                    onChange={handleSearchChange}
                  />
                </div>
              </form>
              {/* <Link
                  to="/adduser"
                  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                >
                  <i className="fas fa-add fa-sm text-white-50" />
                  Thêm
                </Link> */}
            </div>

            <div className="row">
              <div className="col-xl-12 col-lg-4">
                <div className="card shadow mb-4">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="text-center">Mã Người Dùng</th>
                        <th className="text-center">UserName</th>
                        {/* <th className="text-center">Password</th> */}
                        <th className="text-center">Email</th>
                        <th className="text-center">Điểm</th>
                        <th className="text-center">Quyền</th>
                        <th className="text-center">Chức năng</th>
                        <th className="text-center">Thao tác</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredCategories.map((service, index) => {
                        return (
                          <tr key={index}>
                            <td className="text-center">{index + 1}</td>
                            <td> {truncateString(service.userName, 50)}</td>
                            {/* <td className="text-center">
                                <span className="d-none d-md-inline">
                                  {truncateString(service.password, 50)}
                                </span>
                              </td> */}
                            <td className="text-center">
                              {truncateString(service.email, 50)}
                            </td>
                            <td className="text-center">10</td>
                            <td className="text-center">
                              {service.role === 0
                                ? "Người dùng"
                                : "Quản trị viên"}
                            </td>
                            <td className="text-center">
                              <select className="custom-select">
                                <option value="" disabled selected hidden>
                                  Chọn một
                                </option>
                                <option value="option1">Khóa tài khoản</option>
                                <option value="option2">
                                  Vô hiệu hóa tài khoản{" "}
                                </option>
                              </select>
                            </td>

                            <td className="d-flex align-items-center justify-content-between">
                              <Link
                                to={`/updateuser/${service.idUser}`}
                                className="btn btn-primary"
                              >
                                Sửa
                              </Link>
                              <button
                                className="btn btn-danger"
                                onClick={() => handleDelete(service.idUser)}
                              >
                                Xóa
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className="d-flex justify-content-end navigation">
                    <button
                      className="btn m-2 border border-0 bg-primary text-white"
                      type="button"
                    >
                      1
                    </button>
                    <button className="btn m-2 border border-0" type="button">
                      2
                    </button>
                    <button className="btn m-2 border border-0" type="button">
                      3
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListUser;
