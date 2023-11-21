import React, { useState } from "react";
import axios from "axios";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import { useHistory } from "react-router-dom";
const AddService = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    hinhAnh: "",
    tieuDe: "",
    noiDung: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(formData);
      await axios.post("http://localhost:8000/dichvu", formData);
      history.push("/listService");
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
              <h1 className="h3 mb-0 text-gray-800">Thêm Dịch Vụ</h1>
            </div>

            <div className="col-xl-12 col-lg-4">
              <form className="m-4" onSubmit={handleSubmit}>
                <div className="row mb-2">
                  <div className="col-6">
                    <label
                      htmlFor="serviceTitle"
                      className="form-label text-dark"
                    >
                      Tên Dịch Vụ
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="serviceTitle"
                      name="tieuDe"
                      value={formData.tieuDe}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                {/* <div className="row mb-2">
                  <div className="col-6">
                    <label
                      htmlFor="serviceTitle"
                      className="form-label text-dark"
                    >
                      Giá
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="serviceTitle"
                      name="gia"
                      value={serviceData.gia}
                      onChange={handleChange}
                      placeholder="Giá..."
                      required
                    />
                  </div>
                </div> */}
                <div className="row mb-2">
                  <div className="col">
                    <label
                      htmlFor="description"
                      className="form-label text-dark"
                    >
                      Mô tả
                    </label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="noiDung"
                      value={formData.noiDung}
                      onChange={handleChange}
                      rows={5}
                      required
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col">
                    <label
                      htmlFor="description"
                      className="form-label text-dark"
                    >
                      Hình Ảnh
                    </label>
                    <input
                      className="form-control mb-2"
                      type="text"
                      id="formFile"
                      name="hinhAnh"
                      value={formData.hinhAnh}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-2">
                  Thêm mới
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
