import React, { useEffect, useState } from "react";
import { fetchBaiViet } from "../../api/baiviet";
import { Link } from "react-router-dom";
// import { fetchBaiVietById } from "../../api/baiviet";
import Related_Blogs from "./Related_Blogs";
import moment from "moment";

const Tintuc = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const articles = await fetchBaiViet();
      setNews(articles);
    };

    fetchData();
  }, []);
  const displayedNews = news.slice(0, 3);
  const displayedNew = news.slice(0, 6);

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
              <div className="col-12">
                <div className="tf__breadcrumb_text">
                  <h1>Tin tức</h1>
                  <ul>
                    <li>
                      <a href="#" className="text-decoration-none">
                        <i className="fas fa-home"></i> Trang chủ
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-decoration-none">
                        Tin tức
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf__blog_page mt_95 xs_mt_45">
        <div className="container ">
          <div className="row">
            <div className="col-lg-6 wow fadeInUp" data-wow-duration="1s">
              {displayedNews.map((article) => (
                <div className="tf__featured_blog" key={article.idBaiViet}>
                  <div className="tf__featured_blog_img">
                    <img
                      src={article.hinhAnh}
                      alt="blog"
                      className="img img-fluid w-100"
                    />
                  </div>
                  <div className="tf__featured_blog_text">
                    <ul className="d-flex flex-wrap justify-content-between">
                      <li>
                        <i className="fas fa-user"></i>Người đăng:{" "}
                        {article.nguoiDang}
                      </li>
                      <li>
                        <i className="fas fa-calendar-alt"></i>
                        {moment(article.ngayDang).format("DD/MM/YYYY")}
                      </li>
                      <li>
                        <i className="fas fa-comment-dots"></i>
                        {article.soComment}
                      </li>
                    </ul>
                    <Link
                      to={`/blog_detail/${article.idBaiViet}`}
                      className="title text-decoration-none"
                    >
                      {article.tieuDe}
                    </Link>

                    <p>{article.noiDung}</p>
                    <Link
                      to={`/blog_detail/${article.idBaiViet}`}
                      className="blog_read_btn text-decoration-none"
                    >
                      Đọc thêm <i className="far fa-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-6">
              <div className="row">
                {displayedNew.map((article) => (
                  <div
                    className="col-xl-12 wow fadeInUp"
                    data-wow-duration="1s"
                    key={article.idBaiViet}
                    style={{ marginTop: "25px" }}
                  >
                    <div className="tf__single_blog row">
                      <div className="tf__single_blog_img col-6">
                        <img
                          src={article.hinhAnh}
                          alt="blog"
                          className="img img-fluid w-100"
                        />
                      </div>
                      <div className="tf__single_blog_text col-6">
                        <Link
                          to={`/blog_detail/${article.idBaiViet}`}
                          className="title text-decoration-none"
                        >
                          {article.tieuDe}
                        </Link>
                        <p>{article.noiDung}</p>
                        <ul className="d-flex flex-wrap justify-content-between">
                          <li>
                            <i className="fas fa-user"></i>Người đăng:{" "}
                            {article.nguoiDang}
                          </li>
                          <li>
                            <i className="fas fa-calendar-alt"></i>
                            {moment(article.ngayDang).format("DD/MM/YYYY")}
                          </li>
                          <li>
                            <i className="fas fa-comment-dots"></i>
                            {article.soComment}
                          </li>
                        </ul>
                        <Link
                          to={`/blog_detail/${article.idBaiViet}`}
                          className="blog_read_btn text-decoration-none"
                        >
                          Đọc thêm <i className="far fa-long-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="tf__pagination mt_50">
            <div className="row">
              <div className="col-12">
                <nav aria-label="...">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="fas fa-chevron-double-left"></i>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        01
                      </a>
                    </li>
                    <li className="page-item active" aria-current="page">
                      <a className="page-link" href="#">
                        02
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        03
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="fas fa-chevron-double-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <Related_Blogs />
      </section>
    </div>
  );
};

export default Tintuc;
