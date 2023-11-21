import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import TopBar from "./TopBar";
import SideBar from "./SideBar";

const UpdateCategory = () => {
  const history = useHistory();
  const { idLoaiSanPham } = useParams();

  const [blogData, setBlogData] = useState({
    tenLoai: "",
  });

  useEffect(() => {
    fetchData();
  }, [idLoaiSanPham]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/loaisanpham/${idLoaiSanPham}`
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
      .put(`http://localhost:8000/loaisanpham/${idLoaiSanPham}`, blogData)
      .then(() => {
        history.push("/category");
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
              <h1 className="h3 mb-0 text-gray-800">SỬA DANH MỤC</h1>
            </div>
            <div className="col-xl-12 col-lg-4">
              <form className="m-4" onSubmit={handleSubmit}>
                <div className="row mb-2">
                  <div className="col-4">
                    <div className="col">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label text-dark"
                      >
                        Danh mục
                      </label>
                      <input
                        className="form-control"
                        id="floatingTextarea"
                        name="tenLoai"
                        value={blogData.tenLoai}
                        onChange={handleInputChange}
                        required
                      ></input>
                    </div>
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

export default UpdateCategory;
