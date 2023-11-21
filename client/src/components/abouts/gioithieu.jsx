import React from "react";
import Why from "../why_choose";
import Danhgia from "../danhgia";
import "bootstrap/dist/css/bootstrap.min.css";
import Doingu from "../doingu";
import Related_Blogs from "../blog/Related_Blogs"

const MainAbout = () => {
  return (
    <div>
      <section
        className="tf__breadcrumb"
        style={{
          background:
            "url(https://img.freepik.com/premium-photo/beautiful-spa-composition-wooden-background_763111-7458.jpg)",
        }}
      >
        <div className="tf__breadcrumb_overlay">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tf__breadcrumb_text">
                  <h1>Giới thiệu</h1>
                  <ul>
                    <li>
                      <a href="#" className="text-decoration-none">
                        <i className="fas fa-home"></i> Trang chủ
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-decoration-none">
                        Giới thiệu
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about_page">
        <div className="tf__about_page_welcome mt_120 xs_mt_70">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-duration="1s"
              >
                <div className="tf__about_page_welcome_img">
                  <img
                    src="https://i.etsystatic.com/13747526/r/il/50fbe0/1082250434/il_570xN.1082250434_2nci.jpg"
                    alt="welcome"
                    className="img img-fluid "
                  />
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-duration="1s"
              >
                <div className="tf__about_page_welcome_text">
                  <h2>Chào mừng đến với Thẩm mỹ viện EleganceBeauty</h2>
                  <p>
                    {" "}
                    EleganceBeauty là nơi cung cấp các dịch vụ chăm sóc da mặt
                    làm đẹp. Chúng tôi có kinh nghiệm nhiều năm trong nghành làm
                    đẹp spa.
                  </p>
                  <p>
                    Sứ mệnh của kiến trúc sư là điêu khắc lên những kỳ quan, còn
                    sứ mệnh của EleganceBeauty là điêu khắc lên những gương mặt
                    hoàn hảo.
                  </p>
                  <p>
                    Chúng tôi có cơ sở vật chất hiện đại và đội ngũ bác sĩ nhiều
                    năm trong nghề phục vụ nhiệt tình chu đáo cho khách hàng khi
                    đến với thẩm mỹ viện EleganceBeauty
                  </p>
                  <p>
                    Tại sao bạn chọn Thẩm mỹ viện EleganceBeauty của chúng tôi :
                  </p>
                  <ul>
                    <li>Chuyên gia nước ngoài</li>
                    <li>Cơ sở vật chất hiện đại</li>
                    <li>Đội ngũ nhân viên nhiệt tình chăm sóc chu đáo</li>
                    <li>Sử dụng 100% nguyên liệu từ thiên nhiê</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tf__vission mt_120 xs_mt_70">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-duration="1s"
              >
                <div className="tf__section_heading tf__heading_left mb_25">
                  <h5>Tầm nhìn và sứ mệnh</h5>
                  <h3>Tầm nhìn và sứ mệnh của EleganceBeauty Spa</h3>
                </div>
                <div className="tf__vission_text">
                  <h5>Tầm nhìn</h5>
                  <p>
                    EleganceBeauty Spa khẳng định vị thế Medical Spa 5 sao chuẩn
                    Mỹ, áp dụng các công nghệ làm đẹp hiện đại nhất trên thế
                    giới với quy trình chuẩn, giúp khách hàng có được hiệu quả
                    trị liệu tối ưu, an toàn với chi phí hợp lý nhất. Mỹ là quốc
                    gia dẫn đầu thế giới về ứng dụng các thành tựu khoa học công
                    nghệ vào trị liệu chăm sóc sắc đẹp, nhờ đó, tại
                    EleganceBeauty Spa, các khách hàng thường xuyên được trải
                    nghiệm các dịch vụ đẳng cấp thế giới với mức giá Việt Nam.
                  </p>
                  <h5>Sứ mệnh</h5>
                  <p>
                    - Sứ mệnh của EleganceBeauty Spa là chăm sóc sắc đẹp cho phụ
                    nữ Việt bằng các công nghệ đẳng cấp, tân tiến trên thế giới,
                    đặc biệt trong giảm béo, trẻ hóa, xóa nhăn và chăm sóc da
                    với đội ngũ có trình độ cao, tận tâm và chuyên nghiệp. <br /> <br /> - Góp
                    phần thay đổi và nâng cao nhận thức của xã hội và của chính
                    bản thân người phụ nữ về giá trị sống, biết yêu bản thân,
                    biết chăm sóc bản thân để có hạnh phúc.
                  </p>
                  
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="tf__vission_img">
                  <div className="row">
                    <div className="col-xl-12 wow fadeInUp" data-wow-duration="1s">
                      <div className="tf__vission_img_large">
                        <img
                          src="https://scibeauty.edu.vn/wp-content/uploads/2020/07/dau-tu-vao-my-pham-duoc-lieu-spa.jpg"
                          alt="vision"
                          className="img img-fluid w-100"
                        />
                      </div>
                    </div>
                    <div
                      className="col-xl-4 col-sm-6 col-md-4 wow fadeInUp"
                      data-wow-duration="1s"
                    >
                      <div className="tf__vission_img_small">
                        <img
                          src="https://easysalon.vn/wp-content/uploads/2019/11/thiet-ke-spa-mini-tai-nha-1.jpg"
                          alt="vision"
                          className="img img-fluid w-100"
                        />
                      </div>
                    </div>
                    <div
                      className="col-xl-4 col-sm-6 col-md-4 wow fadeInUp"
                      data-wow-duration="1s"
                    >
                      <div className="tf__vission_img_small">
                        <img
                          src="https://image.kkday.com/v2/image/get/w_960%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_133591/20220925074544_8LLEP/jpg"
                          alt="vision"
                          className="img img-fluid w-100"
                        />
                      </div>
                    </div>
                    <div
                      className="col-xl-4 col-sm-6 col-md-4 wow fadeInUp"
                      data-wow-duration="1s"
                    >
                      <div className="tf__vission_img_small">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBg38jEiuxkswDDwvLr3EaaNfgGabP7U1Ej9OJHBG_362QS03Ys3V4PtJyepN9F9gBbw&usqp=CAU"
                          alt="vision"
                          className="img img-fluid w-100"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Why />
        <Doingu />
        <Danhgia />
        <Related_Blogs/>
      </section>
    </div>
  );
};

export default MainAbout;
