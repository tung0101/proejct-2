import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import TopBar from "./TopBar";
import SideBar from "./SideBar";

const UpdateProduct = () => {
  const history = useHistory();
  const { idSanPham } = useParams();

  const [blogData, setBlogData] = useState({
    idLoaiSanPham: "",
    tenSanPham: "",
    hinhSanPham: "",
  });

  useEffect(() => {
    fetchData();
  }, [idSanPham]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/sanpham/${idSanPham}`
      );
      setBlogData({ ...response.data });
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu bài viết:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/sanpham/${idSanPham}`, blogData)
      .then(() => {
        history.push("/product");
      })
      .catch((err) => console.log(err));
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
              <h1 className="h3 mb-0 text-gray-800">SỬA SẢN PHẨM</h1>
            </div>
            <div className="col-xl-12 col-lg-4">
              <form className="m-4" onSubmit={handleSubmit}>
                <div className="row mb-2">
                  <div className="col-6">
                    <label
                      htmlFor="serviceTitle"
                      className="form-label text-dark"
                    >
                      Tên danh mục
                    </label>
                    <input
                      className="form-control"
                      id="description"
                      name="idLoaiSanPham"
                      value={blogData.idLoaiSanPham}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <label
                      htmlFor="serviceTitle"
                      className="form-label text-dark"
                    >
                      Tên sản phẩm
                    </label>
                    <input
                      className="form-control"
                      id="description"
                      name="tenSanPham"
                      value={blogData.tenSanPham}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <label
                      htmlFor="serviceTitle"
                      className="form-label text-dark"
                    >
                      Hình Ảnh Sản Phẩm
                    </label>
                    <input
                      className="form-control"
                      id="description"
                      name="hinhSanPham"
                      value={blogData.hinhSanPham}
                      onChange={handleInputChange}
                      required
                    />
                    <img
                      src={blogData.hinhSanPham}
                      alt=""
                      width={200}
                      height={200}
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

export default UpdateProduct;
