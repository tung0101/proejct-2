import React from "react";

const ContactForm = () => {
  return (
    <div>
      <section
        className="tf__breadcrumb"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/premium-photo/beautiful-spa-composition-wooden-background_763111-7458.jpg)",
        }}
      >
        <div className="tf__breadcrumb_overlay">
          <div className="container">
            <div className="row">
              <div className="col-12 ">
                <div className="tf__breadcrumb_text">
                  <h1>Liên hệ</h1>
                  <ul>
                    <li>
                      <a href="#" className="text-decoration-none">
                        <i className="fas fa-home"></i> Trang chủ
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-decoration-none">
                        Liên hệ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf__contact mt_20 xs_mt_45">
        <div className="container ">
          <div className="row">
            <div
              className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp  d-flex"
              data-wow-duration="1s"
            >
              <div className="tf__contact_info flex-fill">
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <h3>Địa chỉ</h3>
                <p>4953 Đường Trần Duy Hưng, Trung Hoà, Cầu Giấy, Hà Nội</p>
              </div>
            </div>
            <div
              className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp d-flex"
              data-wow-duration="1s"
            >
              <div className="tf__contact_info flex-fill">
                <span>
                  <i className="fas fa-envelope"></i>
                </span>
                <h3>Email </h3>
                <p>Elegancebeauty2023@Gmail.Com</p>
              </div>
            </div>
            <div
              className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp d-flex"
              data-wow-duration="1s"
            >
              <div className="tf__contact_info flex-fill">
                <span>
                  <i className="fas fa-phone-alt"></i>
                </span>
                <h3>Số điện thoại</h3>
                <p>028.6686.3434</p>
              </div>
            </div>
            <div
              className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp d-flex"
              data-wow-duration="1s"
            >
              <div className="tf__contact_info flex-fill">
                <span>
                  <i className="fas fa-clock"></i>
                </span>
                <h3>Giờ làm việc</h3>
                <p>Thứ hai đến thứ bảy:</p>
                <p>08:00am - 10:00pm</p>
              </div>
            </div>
          </div>
          <div className="row mt_120 xs_mt_70">
            <div className="col-xl-5 wow fadeInUp" data-wow-duration="1s">
              <div className="tf__contact_map">
              <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29199.787582070454!2d90.43684581929189!3d23.819543211524437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c62fce7d991f%3A0xacfaf1ac8e944c05!2sBasundhara%20Residential%20Area%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1671603674550!5m2!1sen!2sbd"
                  style={{ border: 0, width: "100%", height: "100%" }}
                  allowFullScreen=""
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-7 m-auto wow fadeInUp" data-wow-duration="1s">
              <form className="tf__contact_form">
                <h2>Bạn có câu hỏi nào không?</h2>
                <div className="row">
                  <div className="col-xl-6">
                    <input type="text" placeholder="Họ và tên" />
                  </div>
                  <div className="col-xl-6">
                    <input type="email" placeholder="Email" />
                  </div>
                  <div className="col-xl-6">
                    <input type="text" placeholder="Số điện thoại" />
                  </div>
                  <div className="col-xl-6">
                    <input type="text" placeholder="Địa chỉ" />
                  </div>
                  <div className="col-xl-12">
                    <textarea
                      rows="7"
                      placeholder="Nội dung"
                    ></textarea>
                    <button type="submit" className="common_btn">
                      Gửi
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
