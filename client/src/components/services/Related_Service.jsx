import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { fetchDichVu } from "../../api/dichvu";
import { Link } from "react-router-dom";
const Related_Service = () => {
  const [dichvus, setDVs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const articles = await fetchDichVu();
      setDVs(articles);
    };

    fetchData();
  }, []);
  const displayedNews = dichvus.slice(0, 4);
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
    slidesToShow: 2,
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
    <div className="container">
      <div className="tf__related_service mt_115 xs_mt_70">
        <div className="tf__section_heading mb_45">
          <h5>Các dịch vụ khác</h5>
        </div>
        <div className="row related_service_slider mt_50">
          <Slider {...setting} ref={sliderRef}>
            {displayedNews.map((article) => (
              <div className="col-xl-6" key={article.idDichVu}>
                <div className=" row tf__services_item">
                  <div className="col-6 tf__services_img">
                    <img
                      src={article.hinhAnh}
                      alt="services"
                      className="img img-fluid w-100"
                    />
                    <a href="#" className=" text-decoration-none">
                      <i className="fas fa-heart"></i>
                    </a>
                  </div>
                  <div className="col-6 tf__services_text">
                    <a
                      
                      href="service_details.html"
                    >
                 
                    </a>
                    <Link to={`/services/${article.idDichVu}`} className="title text-decoration-none">
                    {article.tieuDe}
                    </Link>
                    <p>{article.noiDung}</p>
                    {/* <ul>
                                <li><i class="fas fa-play"></i> 5 Sessions</li>
                                <li><i class="fas fa-user"></i> 49 Clients</li>
                            </ul> */}
                    <div className="tf__services_btn_area">
                    <Link
                      to={`/services/${article.idDichVu}`}
                      className="read_btn text-decoration-none"
                     
                    >
                        Xem thêm<i className="far fa-long-arrow-right"></i>
                    </Link>
                      <p>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span>38</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Related_Service;
