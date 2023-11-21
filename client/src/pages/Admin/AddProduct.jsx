import React, { useState } from "react";
import axios from "axios";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import { useHistory } from "react-router-dom";
const AddProduct = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    idLoaiSanPham: "",
    tenSanPham: "",
    hinhSanPham: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(formData);
      await axios.post("http://localhost:8000/sanpham", formData);
      history.push("/product");
    } catch (error) {
      console.error("Error adding blog:", error);
    }
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
              <h1 className="h3 mb-0 text-gray-800">Thêm Sản Phẩm</h1>
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
                      value={formData.idLoaiSanPham}
                      onChange={handleChange}
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
                      value={formData.tenSanPham}
                      onChange={handleChange}
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
                      value={formData.hinhSanPham}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-2">
                  Thêm
                </button>
              </form>
            </div>
        </div>
      </div>
    </div>
  </div>
     

      
  );
};

export default AddProduct;
