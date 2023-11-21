import React, { useState, useEffect } from "react";
import { fetchDichVu } from "../api/dichvu";
import { Link } from "react-router-dom";

const Footer = () => {
  const [dichVuData, setDichVuData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchDichVu();
        setDichVuData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <footer
        className="tf__footer mt_200 xs_mt_130 pt-2"
        style={{ background: "url(../user/images/footer_bg.jpg)" }}
      >
        <div className="container">
          <div className="row mt_20 xs_mt_10 pb_80 xs_pb_35 md_padding justify-content-between">
            <div className="col-xl-3 col-md-6 col-lg-4">
              <div className="tf__footer_logo_area">
                <a className="footer_logo" href="index.html">
                  <img
                    src="../user/images/logonew.png"
                    alt="Bonfax"
                    className="img-fluid w-100"
                  />
                </a>
                <p>
                  Thẩm mỹ viện EleganceBeauty tự hào sở hữu đội ngũ bác sĩ
                  chuyên môn cao, tiên phong công nghệ tiên tiến để đem đến giải
                  pháp làm đẹp tối ưu.
                </p>
                <p className="text-white">Theo dõi chúng tôi tại</p>
                <ul className="d-flex flex-wrap">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-sm-6 col-md-4 col-lg-2">
              <div className="tf__footer_link">
                <h4>Dịch vụ</h4>
                <ul className="">
                  {dichVuData.map((item) => (
                    <li key={item.idDichVu}>
                      <Link
                        to={`/services/${item.idDichVu}`}
                        className=" text-decoration-none"
                      >
                        {item.tieuDe}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-sm-6 col-md-4 col-lg-2 order-md-4">
              <div className="tf__footer_link">
                <h4>Chính sách</h4>
                <ul className="">
                  <li>
                    <a href="#">Chính sách bảo mật thông tin</a>
                  </li>
                  <li>
                    <a href="#">Chính sách hỗ trợ di chuyển</a>
                  </li>
                  <li>
                    <a href="#">Chính sách đổi trả hàng</a>
                  </li>
                  <li>
                    <a href="#">Hướng dẫn</a>
                  </li>
                  <li>
                    <a href="#">Tuyển dụng</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-4 order-lg-4">
              <div className="tf__footer_link">
                <h4>Liên hệ với chúng tôi</h4>
                <p>
                  <i className="fas fa-phone-alt"></i>028.6686.3434
                </p>
                <p>
                  <i className="fas fa-envelope"></i>{" "}
                  elegancebeauty2023@gmail.com
                </p>
                <p>
                  <i className="fas fa-map-marker-alt"></i> 4953 Đường Trần Duy
                  Hưng, Trung Hoà, Cầu Giấy, Hà Nội
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tf__footer_copyright">
                <p>
                  Copyright ©{" "}
                  <a href="index.html" className="text-decoration-none">
                    EleganceBeauty
                  </a>{" "}
                  2023. Designed by EleganceBeauty
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
