import React, { useState, useEffect } from "react";
import "./assets/vendor/fontawesome-free/css/all.min.css";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const ListBlog = () => {
  const [categories, setCategories] = useState([]);
  const [deletedItemId, setDeletedItemId] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    fetchData();
  }, [deletedItemId]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/baiviet/");
      console.log("Fetched data:", response.data);
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (idBaiViet) => {
    console.log("Deleting item with ID:", idBaiViet);

    try {
      await axios.delete(`http://localhost:8000/baiviet/${idBaiViet}`);
      setDeletedItemId(idBaiViet);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    }
    return str;
  };
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredCategories = categories.filter((service) => {
    return (
      service.tieuDe.toLowerCase().includes(searchValue.toLowerCase()) ||
      service.noiDung.toLowerCase().includes(searchValue.toLowerCase())
      // Thêm các trường khác nếu cần
    );
  });

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
              <h1 className="h3 mb-0 text-gray-800">Bài Viết</h1>
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
              <Link
                to="/addblog"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              >
                <i className="fas fa-add fa-sm text-white-50" /> Thêm bài viết
              </Link>
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-4">
                <div className="card shadow mb-2 text-justify">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Hình ảnh 1</th>
                        <th scope="col">Hình ảnh 2</th>
                        <th scope="col">Tiêu Đề</th>
                        <th scope="col">Nội dung 1</th>
                        <th scope="col">Nội dung 2</th>
                        <th scope="col">Nội dung 3</th>
                        <th scope="col">Ngày Đăng</th>
                        <th scope="col">Tác Giả</th>
                        <th scope="col">Số lượt CMT</th>
                        <th scope="col">Thao tác</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredCategories.map((item) => (
                        <tr key={item.idBaiviet}>
                          <td>
                            <img alt="avt user" width={50} src={item.hinhAnh} />
                          </td>
                          <td>
                            <img
                              alt="avt user"
                              width={50}
                              src={item.hinhAnh2}
                            />
                          </td>
                          <td>{truncateString(item.tieuDe, 50)}</td>
                          <td>{truncateString(item.noiDung, 50)}</td>
                          <td>{truncateString(item.noiDung2, 50)}</td>
                          <td>{truncateString(item.noiDung3, 50)}</td>
                          <td>
                            {" "}
                            {moment(item.ngayDang).format(
                              "DD/MM/YYYY HH:mm:ss"
                            )}
                          </td>
                          <td>{item.nguoiDang}</td>
                          <td>{item.soComment}</td>
                          <td
                            className="button d-flex align-items-center justify-content-between gap-2 "
                            style={{ height: "100px" }}
                          >
                            <Link
                              to={`/updateblog/${item.idBaiViet}`}
                              className="btn btn-primary"
                            >
                              Sửa
                            </Link>
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDelete(item.idBaiViet)}
                            >
                              Xóa
                            </button>
                          </td>
                        </tr>
                      ))}
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

export default ListBlog;
