import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Why = () => {
  return (
    <div>
      <section className="tf__why_choose mt_115 xs_mt_70">
        <div className="container">
          <div className="row justify-content-between">
            <div
              className="col-xl-5 col-lg-6 col-md-10 wow fadeInUp"
              data-wow-duration="1s"
            >
              <div className="tf__section_heading tf__heading_left mb_25">
                <h5>Tại sao lại chọn chúng tôi</h5>
                <h3>
                  Tại sao bạn chọn Thẩm mỹ viện EleganceBeauty của chúng tôi
                </h3>
              </div>
              <div className="tf__why_choose_text">
                <ul>
                  <li>
                    <h4>CHUYÊN GIA NƯỚC NGOÀI</h4>
                    <span>
                      Thẩm mỹ viện của chúng tôi tự tin mang đến Khách hàng một
                      chất lượng phục vụ với tiêu chuẩn 5 sao cùng các chuyên
                      gia Massage đẳng cấp từ quốc tế.
                    </span>
                  </li>
                  <li>
                    <h4>CƠ SỞ HIỆN ĐẠI</h4>
                    <span>
                      Trung tâm chúng tôi được trang bị cơ sở vật chất hiện đại
                      và tiêu chuẩn. Các thiết bị hỗ trợ được nhập khẩu từ Châu
                      Âu, Hàn Quốc và Nhật Bản đạt chuẩn chất lượng 5 sao.
                    </span>
                  </li>
                  <li>
                    <h4>CÔNG NGHỆ SINH HỌC</h4>
                    <span>
                      Phương pháp điều trị chăm sóc làn da cực kì an toàn, hiệu
                      quả. Với phương pháp điều trị bằng công nghệ sinh học cùng
                      sự kết hợp với các thảo dược thiên nhiên, bài massage từ
                      các chuyên gia sẽ giúp bạn nhanh chóng khôi phục da mặt.
                    </span>
                  </li>
                  <li>
                    <h4>100% TỰ NHIÊN</h4>
                    <span>
                      Hướng đến vẻ đẹp từ tự nhiên do đó việc điều trị tại
                      trung tâm chúng tôi luôn sử dụng là các dược thảo được đặc
                      chế từ các loại cây cỏ có thành phần tự nhiên như muối,
                      tre, đá, cây thuốc, hương nhu, tinh dầu từ các loại cây
                      hoa thiên nhiên,...
                    </span>
                  </li>
                </ul>
                <Link to="/about" className="common_btn mt_25" >
                Đọc thêm
                </Link>
              </div>
            </div>
            <div
              className="col-xl-7 col-lg-6 col-sm-8 col-md-8 col-xxl-6 wow fadeInUp"
              data-wow-duration="1s"
            >
              <div className="tf__why_choose_img">
                <div className="large_img">
                  <img
                    src="images/why_choose_img_1.jpg"
                    alt="why choose"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="small_img">
                  <img
                    src="images/why_choose_img_2.jpg"
                    alt="why choose"
                    className="img-fluid w-100"
                  />
                </div>
                <a
                  className="venobox"
                  data-autoplay="true"
                  data-vbtype="video"
                  href="https://youtu.be/xsnCYCEbdr4"
                >
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Why;
