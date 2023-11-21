// import React, { useState, useEffect } from "react";
// import { BiSolidChevronDown } from "react-icons/bi";
// import Search from "../search/search";
// import { Link } from "react-router-dom";
// import { fetchDichVu } from "../../api/dichvu";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Book from "../Book/Book";
// import "./Header.css";
// import { useAuth } from "../Login/AuthContext";
// const Header = () => {
//   const { isLoggedIn, userData, logout } = useAuth();
//   const [dichVuData, setDichVuData] = useState([]);
//   const [isTopbarVisible, setIsTopbarVisible] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data = await fetchDichVu();
//         setDichVuData(data);
//       } catch (error) {}
//     }

//     fetchData();
//   }, []);
//   return (
//     <div>
//       <nav
//         className={`navbar navbar-expand-lg main_menu
//          fixed-top
//         `}
//         // style={{ marginBottom: "200px",}}
//       >
//         <div className="container">
//           <Link to="/" className="" aria-current="page">
//             <a className="navbar-brand" href="index.html">
//               <img
//                 className="img"
//                 src="../user/images/logonew.png"
//                 alt="BonFax"
//               />
//             </a>
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNavAltMarkup"
//             aria-controls="navbarNavAltMarkup"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <i className="fa fa-bars menu_icom"></i>
//             <i className="fa fa-times menu_close"></i>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//             <ul className="navbar-nav m-auto ">
//               <li className="nav-item">
//                 <Link to="/" className="nav-link" aria-current="page">
//                   Trang chủ
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/about" className="nav-link">
//                   Giới thiệu
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   Dịch vụ <BiSolidChevronDown />
//                 </a>
//                 <ul className="tf__droap_menu">
//                   {dichVuData.map((item) => (
//                     <li key={item.idDichVu}>
//                       {/* <a href="#" className="text-decoration-none">

//                       </a> */}
//                       <Link
//                         to={`/services/${item.idDichVu}`}
//                         class=" text-decoration-none"
//                       >
//                         {item.tieuDe}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <Link to="/blog" className="nav-link">
//                   Tin tức
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/contact" className="nav-link">
//                   Liên hệ
//                 </Link>
//               </li>
//             </ul>
//             <ul
//               className="menu_rights navbar-navs d-flex flex-wrap "
//               style={{
//                 margin: "10px 0",
//               }}
//             >
//               <li className=" nav-item li">
//                 <Search />
//               </li>
//               <li className=" nav-item li">
//                 {/* <a
//                   type="button"

//                   className="reservation text-decoration-none"
//                 >
//                   Đặt lịch
//                 </a> */}
//                 <Book />
//               </li>
//               <li className="nav-item ">
//                 <Link
//                   to="/login"
//                   className="nav-link d-flex justify-content-center align-items-center"
//                 >
//                   {isLoggedIn ? (
//                  <span>{isLoggedIn && userData ? userData.userName : ""}</span>

//                   ) : (
//                     <i className="fas fa-user"></i>
//                   )}
//                 </Link>
//                 <ul class="tf__droap_menu no-hover" style={{}}>
//                   <li class="no-hover">
//                     <Link
//                       to="/login"
//                       class="text-decoration-none "
//                       style={{
//                         width: "80%",
//                         border: "none",
//                         marginLeft: "-20px",
//                         textAlign: "left",
//                       }}
//                     >
//                       {isLoggedIn ? "Đăng xuất" : "Đăng nhập"}
//                     </Link>
//                   </li>

//                 </ul>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };
// export default Header;
import React, { useState, useEffect } from "react";
import { BiSolidChevronDown } from "react-icons/bi";
import Search from "../search/search";
import { Link } from "react-router-dom";
import { fetchDichVu } from "../../api/dichvu";
import "bootstrap/dist/css/bootstrap.min.css";
import Book from "../Book/Book";
import "./Header.css";
import { useAuth } from "../Login/AuthContext";

const Header = () => {
  const { isLoggedIn, userData, logout } = useAuth();
  const [dichVuData, setDichVuData] = useState([]);
  const [isTopbarVisible, setIsTopbarVisible] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchDichVu();
        setDichVuData(data);
      } catch (error) {}
    }

    fetchData();
  }, []);

  const handleLogout = () => {
    // Thực hiện đăng xuất ở đây
    logout();
  };

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg main_menu
         fixed-top 
        `}
      >
        <div className="container">
          <Link to="/" className="" aria-current="page">
            <a className="navbar-brand" href="index.html">
              <img
                className="img"
                src="../user/images/logonew.png"
                alt="BonFax"
              />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars menu_icom"></i>
            <i className="fa fa-times menu_close"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav m-auto ">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  Giới thiệu
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Dịch vụ <BiSolidChevronDown />
                </a>
                <ul className="tf__droap_menu">
                  {dichVuData.map((item) => (
                    <li key={item.idDichVu}>
                      {/* <a href="#" className="text-decoration-none">
                      
                      </a> */}
                      <Link
                        to={`/services/${item.idDichVu}`}
                        class=" text-decoration-none"
                      >
                        {item.tieuDe}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">
                  Tin tức
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Liên hệ
                </Link>
              </li>
            </ul>
            <ul className="menu_rights navbar-navs d-flex flex-wrap">
              <li className="nav-item li">
                <Search />
              </li>
              <li className="nav-item li">
                <Book />
              </li>
              <li className="nav-item dropdown">
                <div
                  className="nav-link d-flex justify-content-center align-items-center"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {isLoggedIn ? (
                    <>
                      <i className="fas fa-user"></i>
                      {userData ? (
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                          style={{ minWidth: "160px" }}
                        >
                          <li className="no-hover">
                            <span>{userData.userName}</span>
                          </li>
                          <li className="no-hover">
                            <div
                              className="text-decoration-none"
                              style={{
                                width: "80%",
                                border: "none",
                                marginLeft: "-20px",
                                textAlign: "left",
                                cursor: "pointer",
                              }}
                              onClick={logout}
                            >
                              Đăng xuất
                            </div>
                          </li>
                        </ul>
                      ) : null}
                    </>
                  ) : (
                    <i className="fas fa-user"></i>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
