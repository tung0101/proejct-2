import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./login.css";
const Dangnhap = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const history = useHistory(); // Sử dụng hook useHistory để thay đổi đường dẫn URL
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Đăng nhập thành công
        login(data.user);
        console.log("Đăng nhập thành công:", data);

        // Chuyển hướng đến /admin nếu là trang admin, ngược lại đến /home
        history.push(data.message.includes("admin") ? "/admin" : "/");
      } else {
        // Đăng nhập thất bại, xử lý lỗi
        console.error("Đăng nhập thất bại:", data.message);
      }
    } catch (error) {
      console.error("Lỗi trong quá trình đăng nhập:", error.message);
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div>
      <section className="tf__login mt_120 xs_mt_70">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-6 col-lg-8 m-auto wow fadeInUp"
              data-wow-duration="1s"
            >
              <div className="tf__login_area">
                <h3>Đăng nhập</h3>
                <h5>Chào mừng trở lại !! Đăng nhập vào tài khoản của bạn</h5>
                <form onSubmit={handleLogin}>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tf__login_input">
                        <span>
                          <i className="fas fa-user"></i>
                        </span>
                        <input
                          type="text"
                          placeholder="Tên đăng nhập" // Thay đổi từ Email thành Tên đăng nhập
                          value={userName}
                          onChange={(e) => setUsername(e.target.value)} // Thay đổi từ setEmail thành setUsername
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="tf__login_input">
                        <span>
                          <i className="fas fa-lock"></i>
                        </span>
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Mật khẩu"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <i
                          className={`fas ${
                            showPassword ? "fa-eye-slash" : "fa-eye"
                          } password-icon`}
                          onClick={togglePasswordVisibility}
                        ></i>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="tf__login_input">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            nhớ tôi
                            <a href="#" className="text-decoration-none">
                              Quên mật khẩu
                            </a>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="tf__login_input">
                        <button type="submit" className="common_btn">
                          Đăng nhập{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <span className="or">hoặc</span>
                <p>Đăng nhập bằng tài khoản xã hội</p>
                <ul className="d-flex flex-wrap justify-content-center">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                </ul>
                <p>
                  Nếu bạn chưa có tài khoản?{" "}
                  <Link to="/signup" className="text-decoration-none">
                    {" "}
                    Đăng ký ngay
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dangnhap;
