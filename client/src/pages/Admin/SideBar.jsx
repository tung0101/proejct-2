import React from "react";
import "./css/sb-admin-2.min.css";
import "./assets/vendor/fontawesome-free/css/all.min.css";
import { Link, useHistory} from "react-router-dom";

const SideBar = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Xóa trạng thái đăng nhập khi người dùng đăng xuất
    localStorage.removeItem("isAuthenticated");

    // Chuyển hướng đến trang đăng nhập
    history.push("/login");
  };

  return (
    <>
      {/* Sidebar */}
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* Sidebar - Brand */}
        <a href="#" className="sidebar-brand d-flex align-items-center justify-content-center">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>

          <Link
            to="/admin"
            className="sidebar-brand-text mx-3 text-decoration-none text-white"
          >
            ElegenceBeauty
          </Link>
        </a>
        <div className="nav-item active">
          <Link to="/admin" className="nav-link text-white">
            <i className="fa fa-home fs-6" />
            <span className="text-white  fs-6">Dashboard</span>
          </Link>
        </div>
        <div className="nav-item">
          <Link
            className="nav-link collapsed "
            to="/thongke"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fa fa-signal fs-6" aria-hidden="true"></i>
            <span className="text-white fs-6">Thống kê</span>
          </Link>
        </div>
        <div className="nav-item">
          <Link
            className="nav-link collapsed"
            to="/listappointment"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fa fa-calendar fs-6" aria-hidden="true"></i>
            <span className="text-white fs-6">Lịch hẹn</span>
          </Link>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          ></div>
        </div>
        <div className="nav-item">
          <Link
            className="nav-link collapsed"
            to="/listorder"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fa fa-clipboard  fs-6" aria-hidden="true"></i>
            <span className="text-white fs-6">Đơn hàng</span>
          </Link>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          ></div>
        </div>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="/category"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fa fa-list fs-6" aria-hidden="true"></i>
            <span className="text-white fs-6">Danh mục</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="/product"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fa fa-coins fs-6" aria-hidden="true"></i>
            <span className="text-white fs-6">Sản phẩm</span>
          </Link>
        </li>
        <div className="nav-item">
          <Link
            className="nav-link collapsed "
            to="/listservice"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fa fa-credit-card fs-6" aria-hidden="true"></i>
            <span className="text-white fs-6">Dịch vụ</span>
          </Link>
        </div>
   
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="/listuser"
            data-toggle="collapse"
            data-target="#collapseUser"
            aria-expanded="true"
            aria-controls="collapseUser"
          >
            <i className="fa fa-user fs-6" aria-hidden="true"></i>
            <span className="text-white fs-6">Người dùng</span>
          </Link>
          <div
            id="collapseUser"
            className="collapse"
            aria-labelledby="headingUser"
            data-parent="#accordionSidebar"
          ></div>
        </li>
        {/* Divider */}
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="/listcomment"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fa fa-comments fs-6" aria-hidden="true"></i>
            <span className="text-white fs-6">Đánh giá</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="/listblog"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fa fa-newspaper fs-6" aria-hidden="true"></i>
            <span className="text-white fs-6">Bài viết</span>
          </Link>
        </li>
       
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="/login"
            onClick={handleLogout}
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fa fa-power-off fs-6" aria-hidden="true"></i>
            <span className="text-white fs-6">Đăng xuất</span>
          </Link>
        </li>

      </ul>
      {/* End of Sidebar */}
    </>
  );
};

export default SideBar;
