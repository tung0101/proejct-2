import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { fetchBaiViet } from "../../api/baiviet";
import { Link } from "react-router-dom";
import moment from "moment";
const Related_Blogs = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const articles = await fetchBaiViet();
      setNews(articles);
    };

    fetchData();
  }, []);

  const displayedNews = news.slice(0, 4);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const settings = {
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
    customPaging: function (index) {
      return <div className="custom-dot"></div>;
    },
  };

  return (
    <div className="container">
      <div className="tf__related_service mt_115 xs_mt_70">
        <div className="tf__section_heading mb_45">
          <h5>Tin tức liên quan</h5>
        </div>
        <div className="row related_service_slider mt_50">
          <Slider {...settings} ref={sliderRef}>
            {displayedNews.map((_article) => (
              <div className="col-xl-6 w-500 " key={_article.idBaiViet}>
                <div className="tf__single_blog row">
                  <div className="tf__single_blog_img col-6">
                    <img src={_article.hinhAnh} alt="blog" className="img w-100" />
                  </div>
                  <div className="tf__single_blog_text col-6">
                    <Link
                      to={`/blog_detail/${_article.idBaiViet}`}
                      className="title text-decoration-none"
                    >
                      {_article.tieuDe}
                    </Link>
                    <p>{_article.noiDung}</p>
                    <ul className="d-flex flex-wrap justify-content-between">
                      <li>
                        <i className="fas fa-user"></i>
                        {_article.nguoiDang}
                      </li>
                      <li>
                        <i className="fas fa-calendar-alt"></i>
                        {moment(_article.ngayDang).format("DD/MM/YYYY")}
                      </li>
                      <li>
                        <i className="fas fa-comment-dots"></i>
                        {_article.soComment}
                      </li>
                    </ul>
                    <Link
                      to={`/blog_detail/${_article.idBaiViet}`}
                      className="blog_read_btn text-decoration-none"
                    >
                      Đọc thêm <i className="far fa-long-arrow-right"></i>
                    </Link>
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

export default Related_Blogs;