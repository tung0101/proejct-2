import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { fetchDichVu,fetchDichVuId,fetchChiTietDichVuById, } from "../../api/dichvu";
import Related_Service from "./Related_Service";
const Dichvu = () => {
  const { id } = useParams();
  const [dichvu, setDichVu] = useState(null);
  const [ctdichvu, setCtDichVu] = useState(null);
  const [dichvuIdData, setDichvuIdData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Sử dụng Promise.all để gọi cùng lúc từ 3 hàm
        const [dichvuData, ctdichvuData, dichvuIdData] = await Promise.all([
          fetchDichVu(id),
          fetchChiTietDichVuById(id),
          fetchDichVuId(id),
        ]);

        setDichVu(dichvuData);
        setCtDichVu(ctdichvuData);
        setDichvuIdData(dichvuIdData);
      } catch (error) {
        // Xử lý lỗi tại đây nếu cần
        console.error("Lỗi khi tải dữ liệu:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!dichvu || !ctdichvu || !dichvuIdData) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {" "}
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

                  <h1>{dichvuIdData.tieuDe}</h1>
                  <ul>
                    <li>
                      <a href="#" className="text-decoration-none">
                        <i className="fas fa-home"></i> Trang chủ
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-decoration-none">
                      {dichvuIdData.tieuDe}
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
                  <div className="tf__services_details_img">
                    <img
                      src={dichvuIdData.hinhAnh}
                      alt="service"
                      className="img w-100"
                    />
                    <a
                      className="reservation text-decoration-none"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop2"
                    >
                      Đặt lịch
                    </a>
                  </div>
                </div>
                <h2>{dichvuIdData.tieuDe}</h2>
                <p>
                {dichvuIdData.noiDung}
                </p>
                <p>
                {ctdichvu.moTa}
                </p>
              </div>

              <div className="tf__service_review_list mt_50">
                <h3>02 Bình luận</h3>
                <div className="tf__single_review">
                  <div className="review_img">
                    <img
                      src="/user/images/review_img_1.jpg"
                      alt="Client"
                      className=" img-fluid w-100"
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
                    <p className="description">Bài viết này rất là hưu ích</p>
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
                      className="img-fluid w-100"
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
                      phản hồi
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
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Lưu tên bà email lại cho lần sau bình luận
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
      <Related_Service/>
        </div>
      </section>
    </div>
  );
};

export default Dichvu;
