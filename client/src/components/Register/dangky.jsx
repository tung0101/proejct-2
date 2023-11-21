import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Dangky = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra xem password và confirmPassword có giống nhau không
    if (formData.password !== formData.confirmPassword) {
      console.error("Mật khẩu và xác nhận mật khẩu không khớp");
      // Thực hiện các hành động cần thiết khi mật khẩu không khớp
      return;
    }

    // Nếu mật khẩu và xác nhận mật khẩu khớp, loại bỏ confirmPassword trước khi gửi yêu cầu POST
    const { confirmPassword, ...postData } = formData;

    try {
      // Gửi yêu cầu POST với các trường, loại bỏ confirmPassword
      const response = await axios.post("http://localhost:8000/user/register", postData);

      console.log("Đăng ký thành công:", response.data);
      history.push("/login");
      // Redirect hoặc thực hiện các hành động cần thiết sau khi đăng ký thành công
    } catch (error) {
      console.error("Đăng ký thất bại:", error.response.data.message);
      // Xử lý lỗi và thông báo cho người dùng
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const [showPasswords, setShowPasswords] = useState(false);
  const togglePasswordVisibilitys = () => {
    setShowPasswords((prevShowPassword) => !prevShowPassword);
  };


  return (
    <div>
      <section className="tf__registration mt_120 xs_mt_70">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-6 col-lg-8 m-auto wow fadeInUp"
              data-wow-duration="1s"
            >
              <div className="tf__login_area tf_register_area">
                <h3>Đăng ký </h3>
                <h5>Chào mừng trở lại !! Đăng ký tài khoản mới của bạn</h5>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tf__login_input">
                        <span>
                          <i className="fas fa-user"></i>
                        </span>
                        <input
                          type="text"
                          placeholder="UserName"
                          name="userName"
                          value={formData.userName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="tf__login_input">
                        <span>
                          <i className="fas fa-envelope"></i>
                        </span>
                        <input
                          type="email"
                          placeholder="Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="tf__login_input">
                        <span>
                          <i className="fas fa-key"></i>
                        </span>
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Mật khẩu"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
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
                        <span>
                          <i className="fas fa-key"></i>
                        </span>
                        <input
                          type={showPasswords ? "text" : "password"}
                          placeholder="Xác Nhận Mật Khẩu"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                        />
                        <i
                          className={`fas ${
                            showPasswords ? "fa-eye-slash" : "fa-eye"
                          } password-icon`}
                          onClick={togglePasswordVisibilitys}
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
                            Tôi đồng ý với
                            <Link to="#" className="text-decoration-none">
                              Điều khoản và điều kiện
                            </Link>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="tf__login_input">
                        <button type="submit" className="common_btn">
                          Đăng ký{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <span className="or">hoặc</span>
                <p>Đăng nhập bằng tài khoản xã hội</p>
                <ul className="d-flex flex-wrap justify-content-center">
                  <li>
                    <Link to="#">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-pinterest-p"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-google-plus-g"></i>
                    </Link>
                  </li>
                </ul>
                <p>
                  Nếu bạn đã có tài khoản?
                  <Link to="/login" className="text-decoration-none">
                    {" "}
                    Đăng nhập ngay
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

export default Dangky;
