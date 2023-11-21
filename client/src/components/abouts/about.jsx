import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div>
      <section className="tf__about mt_50 xs_mt_70">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-6 col-md-10 col-lg-6 wow fadeInUp"
              data-wow-duration="1s"
            >
              <div className="row">
                <div className="col-12">
                  <div className="tf__section_heading tf__heading_left mb_25">
                    <h5>Về chúng tôi</h5>
                    <h3>Chào mừng đến với Thẩm mỹ viện EleganceBeauty </h3>
                  </div>
                </div>
                <div className="col-12">
                  <div className="tf__about_text">
                    <div className="tf_about_text_center">
                      <p>
                        EleganceBeauty là nơi cung cấp các dịch vụ chăm sóc da
                        mặt làm đẹp. Chúng tôi có kinh nghiệm nhiều năm trong
                        nghành làm đẹp spa
                      </p>
                    </div>
                    <p className="description">
                      Chúng tôi có cơ sở vật chất hiện đại và đội ngũ bác sĩ
                      nhiều năm trong nghề phục vụ nhiệt tình chu đáo cho khách
                      hàng khi đến với thẩm mỹ viện EleganceBeauty
                    </p>
                    <p className="description">
                      Sứ mệnh của kiến trúc sư là điêu khắc lên những kỳ quan,
                      còn sứ mệnh của EleganceBeauty là điêu khắc lên những
                      gương mặt hoàn hảo.
                    </p>

                    <Link to="/about" className="common_btn mt_25">Đọc thêm</Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow fadeInUp"
              data-wow-duration="1s"
            >
              <div className="tf__about_img">
                {/* <a
                  class="venobox"
                  data-autoplay="true"
                  data-vbtype="video"
                  href="https://youtu.be/xsnCYCEbdr4"
                >
                  <i class="fas fa-play"></i>
                </a> */}
                <img
                  src="https://3cshop.vn/wp-content/uploads/2019/07/cac-mo-hinh-spa-hien-nay.jpg"
                  alt="about us"
                  className= "img img-fluid-100 large_img_1"
                />
                <img
                  src="https://media.istockphoto.com/id/921797424/vi/anh/ng%C6%B0%E1%BB%9Di-ph%E1%BB%A5-n%E1%BB%AF-%C4%91eo-m%E1%BA%B7t-n%E1%BA%A1-tr%C3%AAn-m%E1%BA%B7t-trong-th%E1%BA%A9m-m%E1%BB%B9-vi%E1%BB%87n-spa.jpg?s=612x612&w=0&k=20&c=lYTqMuzXyLoDrz_h1oZa9R4_XJk9M-yWFdNjjqJm5LQ="
                  alt="about us"
                  className="img-fluid-100 large_img_2"
                />
                <img
                  src="data:image/jpeg;base64,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"
                  alt="about us"
                  className="img-fluid-100 large_img_3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
