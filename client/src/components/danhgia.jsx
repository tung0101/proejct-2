
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";

const Danhgia = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const reviews = [
    {
      id: 1,
      rating : 5,
      image: "https://spa.haiphongweb.com/wp-content/uploads/2017/07/HOA-HAU-THU-THAO.png",
      comment: "  Tôi thật bất ngờ với công nghệ trẻ hóa da bằng công nghệ sinh học. Giúp phục hồi da hư tổn và tái tạo lại làn da",
      name: " Đặng Thị Thu Thảo, Người đẹp Việt Nam 2017",
    },
    {
      id: 2,
      rating : 5,
      image: "https://spathammyvien.langsonweb.com/wp-content/uploads/2018/06/dien-vien-thanh-bi.png",
      comment: " Cả mơn đội ngũ y bác sĩ nhân viên tại TMV EleganceBeauty đã phục vụ rất nhiệt tình và chu đáo",
      name: "Diễn viên Thanh Bi 31 tuổi, Huế",
    },
    {
      id: 3,
      rating : 5,
      image: "https://spahanoi.namdinhweb.com/wp-content/uploads/2017/11/nguoi-mau-Thuy-Hang-6-180x180.jpg",
      comment: " Tôi rất yêu thích dịch vụ chăm sóc da tại TMV EleganceBeauty. EleganceBeauty có cơ sở khang trang, thiết bị hiện đại, nhân viên lại chuyên…",
      name: "Người mẫu Thúy Hằng 37 tuổi, Hà Nội",
    },
    {
      id: 4,
      rating : 5,
      image: "https://spahanoi.namdinhweb.com/wp-content/uploads/2017/11/ca-si-Hong-Lien-10-180x180.jpg",
      comment: "Tôi thật bất ngờ với công nghệ trẻ hóa da bằng công nghệ HIFU. Công nghệ giúp giúp trẻ hóa làn da và tránh tình trạng…",
      name: "NSƯT Hồng Liên 40 tuổi, ở Nam Định",
    },
    // Thêm các đánh giá khác vào đây
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    customPaging: function () {
      return <div className="custom-dot"></div>;
    },
  };

  return (
    <div>
      <div className="tf__testimonial mt_115 xs_mt_70">
        <div className="container">
          <div className="row">
            <div className="col-12 wow fadeInUp" data-wow-duration="1s">
              <div className="tf__section_heading mb_35">
                <h5>Đánh giá</h5>
                <h3>Khách hàng nói gì về chúng tôi</h3>
              </div>
            </div>
          </div>
          <div className="row testi_slider wow fadeInUp d-flex" data-wow-duration="1s">
            <Slider {...settings} ref={sliderRef}>
              {reviews.map((review) => (
                <div className="col-xl-4 flex-fill" key={review.id}>
                  <div className="tf__single_testimonial">
                    <div className="tf__single_testimonial_img">
                      <img
                        src={review.image}
                        alt="client"
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="tf__single_testimonial_text">
                      <p className="rating">
                        {[...Array(review.rating).keys()].map((star) => (
                          <i key={star} className="fas fa-star"></i>
                        ))}
                      </p>
                      <p className="cliect_comment">{review.comment}</p>
                      <h3 className="title">
                        {`${review.name}`}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Danhgia;
