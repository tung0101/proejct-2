import React from "react";
import "./css/sb-admin-2.min.css";
import "./assets/vendor/fontawesome-free/css/all.min.css";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
const DashBoard = () => {
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
              <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              <a
                href="#"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              >
                <i className="fas fa-download fa-sm text-white-50" /> Xuất file
              </a>
            </div>
            {/* Content Row */}
            <div className="row">
              {/* Area Chart */}
              <div className="col-xl-6 col-lg-4">
                <div className="card shadow mb-4">
                  {/* Card Header - Dropdown */}
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Lịch Hẹn
                    </h6>
                  </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên Khách Hàng</th>
                        <th scope="col">Số Điện Thoại</th>
                        <th scope="col">Dịch Vụ</th>
                        <th scope="col">Avatar</th>
                        <th scope="col">Thời gian</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Nguyễn Văn Minh</td>
                        <td>0987654321</td>
                        <td>Chăm sóc da và thư giản body</td>
                        <td>
                          <img
                            alt="avt user"
                            width={20}
                            src="data:image/jpeg;base64,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"
                          />
                        </td>
                        <td>
                          12:00
                          <p>12-02-2023</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-xl-6 col-lg-4">
                <div className="card shadow mb-4">
                  {/* Card Header - Dropdown */}
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Đơn hàng
                    </h6>
                  </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên Khách Hàng</th>
                        <th scope="col">Số Điện Thoại</th>
                        <th scope="col">Dịch Vụ</th>
                        <th scope="col">Avatar</th>
                        <th scope="col">Thời gian</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Nguyễn Văn Minh</td>
                        <td>0987654321</td>
                        <td>Chăm sóc da và thư giản body</td>
                        <td>
                          <img
                            alt="avt user"
                            width={20}
                            src="data:image/jpeg;base64,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"
                          />
                        </td>
                        <td>
                          12:00
                          <p>12-02-2023</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
