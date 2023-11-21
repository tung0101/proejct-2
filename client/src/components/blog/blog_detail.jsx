import React, { useState, useEffect } from "react";
import { fetchBaiVietById } from "../../api/baiviet";
import { useParams } from "react-router-dom";
import Related_Blogs from "./Related_Blogs";
import moment from "moment";

const Blog_detail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const getBlogData = async () => {
      const blogData = await fetchBaiVietById(id);
      setBlog(blogData);
    };

    getBlogData();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

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
                  <h1>Tin tức chi tiết</h1>
                  <ul>
                    <li>
                      <a href="#" className="text-decoration-none">
                        <i className="fas fa-home"></i> Trang chủ
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-decoration-none">
                        Tin tức chi tiết
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf__blog_details mt_120 xs_mt_70 pb_5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tf__blog_details_text">
                <div className="tf__blog_details_img">
                  <img
                    src={blog.hinhAnh}
                    alt="blog"
                    className="img-fluid w-100"
                  />
                </div>

                <ul className="header_info d-flex flex-wrap justify-content-between">
                  <li>
                    <i className="fas fa-user"></i> Người đăng: {blog.nguoiDang}
                  </li>
                  <li>
                    <i className="far fa-calendar-alt"></i>{" "}
                    {moment(blog.ngayDang).format("DD/MM/YYYY")}
                  </li>
                  <li>
                    <i className="far fa-comment-dots"></i> {blog.soComment}
                  </li>
                </ul>

                <h2>{blog.tieuDe}</h2>
                <p>{blog.noiDung}</p>
                <div className="tf__blog_details_img">
                  <img
                    src={blog.hinhAnh2}
                    alt="blog"
                    className="img-fluid w-100"
                  />
                </div>
                <p>{blog.noiDung2}</p>
                <p>{blog.noiDung3}</p>
              </div>

              <div className="tf__service_review_list mt_50">
                <h3>02 Comments</h3>
                <div className="tf__single_review">
                  <div className="review_img">
                    <img
                      src="/user/images/review_img_1.jpg"
                      alt="Client"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="review_text">
                    <h4>
                      Linh <span>1/7/2023</span>
                    </h4>
                    <p className="review_star">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <span>(12)</span>
                    </p>
                    <p className="description">Bài viết này rất là hữu ích</p>
                    <a href="#" className="reply text-decoration-none">
                      Phản hồi
                    </a>
                  </div>
                </div>
                <div className="tf__single_review">
                  <div className="review_img">
                    <img
                      src="/user/images/review_img_2.jpg"
                      alt="Client"
                      className="img img-fluid w-100"
                    />
                  </div>
                  <div className="review_text">
                    <h4>
                      Linda Nguyen <span>17/12/2023</span>
                    </h4>
                    <p className="review_star">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <span>(20)</span>
                    </p>
                    <p className="description">Thông tin này rất là bổ ích</p>
                    <a href="#" className="reply text-decoration-none">
                      Phản hồi
                    </a>
                  </div>
                </div>
              </div>

              <div className="tf__service_review_input mt_50 xs_mb_25">
                <h3>Bình luận</h3>
                <form>
                  <div className="row">
                    <div className="col-xl-6">
                      <input type="text" placeholder="Họ và tên" />
                    </div>
                    <div className="col-xl-6">
                      <input type="text" placeholder="Email" />
                    </div>
                    <div className="col-12">
                      <textarea
                        rows="7"
                        placeholder="Nội dung bình luận"
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Lưu tên và email lại cho lần sau bình luận
                        </label>
                      </div>
                      <button type="submit" className="common_btn">
                        Bình luận
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Related_Blogs />
        </div>
      </section>
    </div>
  );
};

export default Blog_detail;
