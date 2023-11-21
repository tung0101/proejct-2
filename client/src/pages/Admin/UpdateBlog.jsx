import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import TopBar from "./TopBar";
import SideBar from "./SideBar";

const UpdateBlog = () => {
  const history = useHistory();
  const { idBaiViet } = useParams();

  const [blogData, setBlogData] = useState({
    tieuDe: "",
    nguoiDang: "",
    ngayDang: "",
    hinhAnh: "",
    hinhAnh2: "",
    soComment: "",
    noiDung: "",
    noiDung2: "",
    noiDung3: "",
  });

  useEffect(() => {
    fetchData();
  }, [idBaiViet]);
  console.log("idBaiViet:", idBaiViet);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/baiviet/${idBaiViet}`
      );
      const formattedDate = formatDate(response.data.ngayDang);
      setBlogData({ ...response.data, ngayDang: formattedDate });
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
      .put(`http://localhost:8000/baiviet/${idBaiViet}`, blogData)
      .then(() => {
        history.push("/listblog");
      })
      .catch((err) => console.log(err));
  };
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}`;
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
                      value={blogData.tieuDe}
                      onChange={handleInputChange}
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
                      value={blogData.nguoiDang}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-4">
                    <label htmlFor="datepost" className="form-label text-dark">
                      Ngày Đăng
                    </label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      name="ngayDang"
                      value={blogData.ngayDang || ""}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-4">
                    <label htmlFor="formFile" className="form-label text-dark">
                      Hình Ảnh 1
                    </label>
                    <input
                      className="form-control mb-2"
                      type="text"
                      id="formFile"
                      name="hinhAnh"
                      value={blogData.hinhAnh}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-4">
                    <label htmlFor="formFile" className="form-label text-dark">
                      Hình Ảnh 2
                    </label>
                    <input
                      className="form-control mb-2"
                      type="text"
                      id="formFile"
                      name="hinhAnh2"
                      value={blogData.hinhAnh2}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-4">
                    <label htmlFor="formFile" className="form-label text-dark">
                      Số cmt
                    </label>
                    <input
                      className="form-control mb-2"
                      type="text"
                      id="formFile"
                      name="soComment"
                      value={blogData.soComment}
                      onChange={handleInputChange}
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
                      value={blogData.noiDung}
                      onChange={handleInputChange}
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
                      value={blogData.noiDung2}
                      onChange={handleInputChange}
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
                      value={blogData.noiDung3}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary mt-2">
                  Sửa bài viết
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlog;
