import React, { useEffect, useState } from "react";
import "./css/sb-admin-2.min.css";
import "./assets/vendor/fontawesome-free/css/all.min.css";
import axios from "axios";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";
import SideBar from "./SideBar";

const Product = () => {
  const [categories, setCategories] = useState([]);
  const [deletedItemId, setDeletedItemId] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    fetchData();
  }, [deletedItemId]);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/sanpham/");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (idSanPham) => {
    try {
      await axios.delete(`http://localhost:8000/sanpham/${idSanPham}`);
      setDeletedItemId(idSanPham);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredCategories = categories.filter((service) => {
    return service.tenSanPham.toLowerCase().includes(searchValue.toLowerCase());
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
              <h1 className="h3 mb-0 text-gray-800">Sản Phẩm</h1>
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
                to="/addproduct"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              >
                <i className="fas fa-add fa-sm text-white-50" />
                Thêm
              </Link>
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-4">
                <div className="card shadow mb-4">
                  <table className="table">
                    <thead>
                      <tr className="text-left h-2">
                        <th scope="col">Mã Sản Phẩm</th>
                        <th scope="col">Danh Mục</th>
                        <th scope="col">Tên Sản Phẩm</th>
                        <th scope="col">Hình Ảnh Sản Phẩm</th>
                        <th scope="col">Thao Tác</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredCategories.map((service, index) => {
                        return (
                          <tr key={index}>
                            <td className="text-left">{index + 1}</td>
                            <td className="">{service.idLoaiSanPham}</td>
                            <td className="">{service.tenSanPham}</td>
                            <td className="">
                              {" "}
                              <img
                                alt={service.tieuDe}
                                width={40}
                                height={40}
                                src={service.hinhSanPham}
                              />
                            </td>

                            <td className="d-flex align-items-center justify-content-between">
                              <Link
                                to={`/updateproduct/${service.idSanPham}`}
                                className="btn btn-primary"
                              >
                                Sửa
                              </Link>
                              <button
                                className="btn btn-danger"
                                onClick={() => handleDelete(service.idSanPham)}
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

export default Product;
