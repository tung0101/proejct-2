import React, { useEffect, useState } from "react";
import "./assets/vendor/fontawesome-free/css/all.min.css";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import axios from "axios";
// import { Link } from "react-router-dom";
const ListComment = () => {
  const [categories, setCategories] = useState([]);
  const [deletedItemId, setDeletedItemId] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    fetchData();
  }, [deletedItemId]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/binhluan/");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (idBinhLuan) => {
    console.log("Deleting item with ID:", idBinhLuan);

    try {
      await axios.delete(`http://localhost:8000/binhluan/${idBinhLuan}`);
      setDeletedItemId(idBinhLuan);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredCategories = categories.filter((service) => {
    return (
      service.tieuDe.toLowerCase().includes(searchValue.toLowerCase()) ||
      service.noiDung.toLowerCase().includes(searchValue.toLowerCase())
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
              <h1 className="h3 mb-0 text-gray-800">Bình Luận</h1>
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
                to="/addservice"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              >
                <i className="fas fa-add fa-sm text-white-50" />Thêm Bình Luận
              </Link> */}
            </div>

            <div className="row">
              <div className="col-xl-12 col-lg-4">
                <div className="card shadow mb-4">
                  <table className="table">
                    <thead>
                      <tr className="text-center">
                        <th scope="col">Tên Bài Viết</th>
                        <th scope="col">Người Bình Luận</th>
                        <th scope="col">Ảnh Người Bình Luận</th>
                        <th scope="col">NoiDung</th>
                        <th scope="col">Chức năng</th>
                        <th scope="col">Thao tác</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredCategories.map((service, index) => {
                        return (
                          <tr key={index}>
                            {/* <td className="text-left">{index + 1}</td> */}
                            <td> {truncateString(service.tieuDe, 50)}</td>
                            <td className="text-center">{service.userName}</td>
                            <td className="text-center">
                              <img
                                alt={service.anhNguoiBinhLuan}
                                width={40}
                                height={40}
                                src={service.anhNguoiBinhLuan}
                              />
                            </td>
                            {/* <td>{formatCurrency(service.gia)}</td> */}
                            <td>{truncateString(service.noiDung, 50)}</td>
                            <td className="text-center">
                              <select className="custom-select">
                                <option value="" disabled selected hidden>
                                  Chọn một
                                </option>
                                <option value="option1">Ẩn</option>
                                <option value="option2">Hiện</option>
                              </select>
                            </td>
                            <td
                              className="button d-flex align-items-center justify-content-center gap-2 "
                              style={{ height: "100px" }}
                            >
                              {/* <Link
                                to={`/editservice/${service.idBinhLuan}`}
                                className="btn btn-primary"
                              >
                                Sửa
                              </Link> */}
                              <button
                                className="btn btn-danger"
                                onClick={() => handleDelete(service.idBinhLuan)}
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

export default ListComment;
