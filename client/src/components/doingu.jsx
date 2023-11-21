import React, { useEffect, useRef } from "react";
import Slider from "react-slick";

const Doingu = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const setting = {
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
      <div className="tf__team mt_115 xs_mt_65">
        <div className="container">
          <div className="row">
            <div className="col-12 wow fadeInUp" data-wow-duration="1s">
              <div className="tf__section_heading mb_35">
                <h5>Đội ngũ của chúng tôi</h5>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center gap-20">
            <Slider {...setting} ref={sliderRef}>
              <div
                className="col-lg-4 col-sm-6 wow fadeInUp"
                data-wow-duration="1s"
              >
                <div className="tf__single_team">
                  <div className="tf__single_team_img ">
                    <img
                      src="https://w.ladicdn.com/s550x550/59572275a2cf79d7255dc1bc/about_basic-03-1554919073.jpg"
                      alt="team"
                      className="img-fluid w-100 h-100 "
                    />
                    <ul>
                      <li>
                        <a href="#" className="text-decoration-none">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-decoration-none">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-decoration-none">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-decoration-none">
                          <i className="fab fa-pinterest-p"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tf__single_team_text">
                    <a className="title" href="team_details.html">
                      Bác sĩ Hoàng Ngọc Mai
                    </a>
                    <p>
                      Bác sĩ Hoàng Ngọc Mai tốt nghiệp ĐH Y Hà Nội. Hơn 5 năm
                      kinh nghiệm trong lĩnh vực thẩm mỹ da liễu công nghệ cao.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-sm-6 wow fadeInUp"
                data-wow-duration="1s"
              >
                <div className="tf__single_team">
                  <div className="tf__single_team_img d-flex justify-content-center">
                    <img
                      src="https://w.ladicdn.com/s550x550/59572275a2cf79d7255dc1bc/about_basic-02-1554919118.jpg"
                      alt="team"
                      className="img-fluid w-100 h-100 "
                    />
                    <ul>
                      <li>
                        <a href="#" className="text-decoration-none">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-decoration-none">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-decoration-none">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-decoration-none">
                          <i className="fab fa-pinterest-p"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tf__single_team_text">
                    <a className="title" href="team_details.html">
                      Bác sĩ Hoàng Ngọc Mai
                    </a>
                    <p>
                      Bác sĩ Hoàng Ngọc Mai tốt nghiệp ĐH Y Hà Nội. Hơn 5 năm
                      kinh nghiệm trong lĩnh vực thẩm mỹ da liễu công nghệ cao.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-sm-6 wow fadeInUp"
                data-wow-duration="1s"
              >
                <div className="tf__single_team">
                  <div className="tf__single_team_img d-flex justify-content-center">
                    <img
                      src="https://w.ladicdn.com/s550x550/59572275a2cf79d7255dc1bc/about_basic-01-1--1554919016.jpg"
                      alt="team"
                      className="img-fluid w-100 h-100 "
                    />
                    <ul>
                      <li>
                        <a href="#" className="text-decoration-none">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-decoration-none">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-decoration-none">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-decoration-none">
                          <i className="fab fa-pinterest-p"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tf__single_team_text">
                    <a className="title" href="team_details.html">
                      Bác sĩ Hoàng Ngọc Mai
                    </a>
                    <p>
                      Bác sĩ Hoàng Ngọc Mai tốt nghiệp ĐH Y Hà Nội. Hơn 5 năm
                      kinh nghiệm trong lĩnh vực thẩm mỹ da liễu công nghệ cao.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-sm-6 wow fadeInUp"
                data-wow-duration="1s"
              >
                <div className="tf__single_team">
                  <div className="tf__single_team_img d-flex justify-content-center">
                    <img
                      src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/376618248_694958362648459_2377636599318098779_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGFDbQuCWl7Ss1tKfMJTwBqQ-hI-95gFPBD6Ej73mAU8FKEiTNKUwNi5W5WQlYS2MYjpnemOIdH9e5uglLNJjLK&_nc_ohc=ba9yxdPc7TEAX8eISXw&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfABfTsgobmpQ68LkzM0LoK79ERJ5GXG23pepNQ6gZuJ1Q&oe=6543AB6D"
                      alt="team"
                      className="img-fluid w-100 h-100 "
                    />
                    <ul>
                      <li>
                        <a href="#" className="text-decoration-none">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-decoration-none">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-decoration-none">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-decoration-none">
                          <i className="fab fa-pinterest-p"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tf__single_team_text">
                    <a className="title" href="team_details.html">
                      Bác sĩ Hoàng Ngọc Mai
                    </a>
                    <p>
                      Bác sĩ Hoàng Ngọc Mai tốt nghiệp ĐH Y Hà Nội. Hơn 5 năm
                      kinh nghiệm trong lĩnh vực thẩm mỹ da liễu công nghệ cao.
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doingu;
