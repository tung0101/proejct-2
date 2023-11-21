import React, { useState, useEffect } from "react";
// import './css/sb-admin-2.min.css';
import "./assets/vendor/fontawesome-free/css/all.min.css";
// import { PiTrashBold } from "react-icons/pi";
// import { PiPencilSimpleLineBold } from "react-icons/pi";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
// import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import axios from "axios";

const ListOrder = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/datlich");
        setData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

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
              <h1 className="h3 mb-0 text-gray-800">Đơn Hàng</h1>
            </div>

            {/* Content Row */}
            <div className="row">
              {/* Area Chart */}
              <div className="col-xl-12 col-lg-4">
                <div className="card shadow mb-3 text-center">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Mã Lịch Hẹn</th>
                        <th scope="col">Khách Hàng</th>
                        <th scope="col">Số Điện Thoại</th>
                        <th scope="col">Ngày Đặt Lịch</th>
                        <th scope="col">Trạng Thái</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item) => (
                        <tr key={item.id}>
                          <td scope="row">{item.id}</td>
                          <td>{item.id_nguoiDung}</td>
                          <td>{item.SDT}</td>
                          <td>
                            {item.ngayDatLich.slice(0, 10)}{" "}
                            {item.ngayDatLich.slice(11, 16)}
                          </td>
                          <td>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected="">Chờ xác nhận</option>
                              <option value={1}>Đã Hủy</option>
                              <option value={2}>Đã Thực Hiện</option>
                            </select>
                          </td>
                          <td>
                            <Link to={`/detailappointment/${item.id}`}>
                              Chi Tiết
                            </Link>
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

export default ListOrder;
