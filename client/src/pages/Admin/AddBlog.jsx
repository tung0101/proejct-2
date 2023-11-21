import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
// import './css/sb-admin-2.min.css'
import "./assets/vendor/fontawesome-free/css/all.min.css";
// import { PiTrashBold } from "react-icons/pi"
// import { PiPencilSimpleLineBold } from "react-icons/pi"
import TopBar from "./TopBar";
import SideBar from "./SideBar";
const AddBlog = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    hinhAnh: "",
    hinhAnh2: "",
    tieuDe: "",
    noiDung: "",
    noiDung2: "",
    noiDung3: "",
    ngayDang: new Date().toISOString().slice(0, 16),
    nguoiDang: "",
    soComment: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(formData); // In ra giá trị của formData để kiểm tra
      // Gửi yêu cầu POST đến địa chỉ http://localhost:8000/baiviet
      await axios.post("http://localhost:8000/baiviet", formData);

      // Chuyển hướng trang về http://localhost:3000/listblog
      history.push("/listblog");
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
                <h1 className="h3 mb-0 text-gray-800">THÊM BÀI VIẾT</h1>
              </div>

              <div className="col-xl-12 col-lg-4">
                <form className="m-4" onSubmit={handleSubmit}>
                  <div className="row mb-2">
                    <div className="col-4">
                      <label
                        htmlFor="serviceTitle"
                        className="form-label text-dark"
                      >
                        Tiêu Đề
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="tieuDe"
                        value={formData.tieuDe}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="author" className="form-label text-dark">
                        Tác Giả
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="nguoiDang"
                        value={formData.nguoiDang}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-4">
                      <label
                        htmlFor="datepost"
                        className="form-label text-dark"
                      >
                        Ngày Đăng
                      </label>
                      <input
                        type="datetime-local"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="ngayDang"
                        value={formData.ngayDang}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-4">
                      <label
                        htmlFor="formFile"
                        className="form-label text-dark"
                      >
                        Hình Ảnh 1
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
                    <div className="col-4">
                      <label
                        htmlFor="formFile"
                        className="form-label text-dark"
                      >
                        Hình Ảnh 2
                      </label>
                      <input
                        className="form-control mb-2"
                        type="text"
                        id="formFile"
                        name="hinhAnh2"
                        value={formData.hinhAnh2}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-4">
                      <label
                        htmlFor="formFile"
                        className="form-label text-dark"
                      >
                        Số cmt
                      </label>
                      <input
                        className="form-control mb-2"
                        type="text"
                        id="formFile"
                        name="soComment"
                        value={formData.soComment}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label text-dark"
                      >
                        Nội Dung 1
                      </label>
                      <textarea
                        className="form-control"
                        id="floatingTextarea"
                        rows={5}
                        name="noiDung"
                        value={formData.noiDung}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label text-dark"
                      >
                        Nội dung 2
                      </label>
                      <textarea
                        className="form-control"
                        id="floatingTextarea"
                        rows={5}
                        name="noiDung2"
                        value={formData.noiDung2}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label text-dark"
                      >
                        Nội dung 3
                      </label>
                      <textarea
                        className="form-control"
                        id="floatingTextarea"
                        rows={5}
                        name="noiDung3"
                        value={formData.noiDung3}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary mt-2">
                    Thêm bài viết
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AddBlog;
