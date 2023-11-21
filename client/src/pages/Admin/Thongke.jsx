import React from "react";
import "./css/sb-admin-2.min.css";
import "./assets/vendor/fontawesome-free/css/all.min.css";
import Example from "./Example";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
const Thongke = () => {
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
        <h1 className="h3 mb-0 text-gray-800">Thống kê</h1>
        {/* <a
                  href="#"
                  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                >
                  <i className="fas fa-download fa-sm text-white-50" /> Generate
                  Report
                </a> */}
      </div>
      {/* Content Row */}
      <div className="row">
        {/* Earnings (Monthly) Card Example */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                    Doanh Thu
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    23
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-money-bill fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Earnings (Monthly) Card Example */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Dịch vụ
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    12
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-credit-card fa-2x text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Earnings (Monthly) Card Example */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-danger shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                    Lịch Hẹn
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    12
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fa fa-calendar fa-2x text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Người Dùng
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    12
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-user fa-2x text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Pending Requests Card Example */}
      </div>
      <div className="row">
        {/* Earnings (Monthly) Card Example */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                    Đơn hàng
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    23
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-user fa-2x text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Earnings (Monthly) Card Example */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Danh mục
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    12
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas  fa-comments fa-2x text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Earnings (Monthly) Card Example */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-danger shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                    Sản phẩm
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    12
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fa fa-newspaper fa-2x text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Bài Viết
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    12
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fa fa-newspaper fa-2x text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Pending Requests Card Example */}
      </div>
      {/* Content Row */}
      <div className="container-fluid">
        <h3 className="text-center">
          Biểu đồ thể hiện doanh thu 12 tháng trong năm
        </h3>
        <Example />
      </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Thongke;
