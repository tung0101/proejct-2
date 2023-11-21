import TopBar from "./TopBar";
import SideBar from "./SideBar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import "./css/sb-admin-2.min.css";
import "./assets/vendor/fontawesome-free/css/all.min.css";

const EditService = () => {
  const history = useHistory();
  const { idDichVu } = useParams();

  const [dichvuData, setBlogData] = useState({
    tieuDe: "",
    hinhAnh: "",
    noiDung: "",
  });

  useEffect(() => {
    fetchData();
  }, [idDichVu]);
  console.log("idDichVu:", idDichVu);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/dichvu/${idDichVu}`
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
      .put(`http://localhost:8000/dichvu/${idDichVu}`, dichvuData)
      .then(() => {
        history.push("/listService");
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
              <h1 className="h3 mb-0 text-gray-800">Sửa Dịch Vụ</h1>
            </div>
            <form className="edit-service-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Tên Dịch Vụ:</label>
                <input
                  type="text"
                  name="tieuDe"
                  value={dichvuData.tieuDe || ""}
                  onChange={handleInputChange}
                />
              </div>

              {/* <div className="form-group">
                  <label>Giá:</label>
                  <input
                    type="text"
                    name="gia"
                    value={dichvuData.gia || ""}
                    onChange={handleInputChange}
                  />
                </div> */}

              <div className="form-group">
                <label>Mô Tả:</label>
                <textarea
                  name="noiDung"
                  value={dichvuData.noiDung || ""}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Ảnh:</label>
                <input
                  type="text"
                  name="hinhAnh"
                  onChange={handleInputChange}
                />{" "}
                <br />
                <br />
                <img src={dichvuData.hinhAnh} alt="" width={200} height={200} />
              </div>

              {/* Add more form groups for other properties of the service */}

              <button type="submit" className="btn btn-primary">
                Lưu thay đổi
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditService;
