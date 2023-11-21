import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchDichVu } from "../../api/dichvu";
import { Link } from "react-router-dom";
const Service = () => {
  const [dichVuData, setDichVuData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    async function fetchData() {
      try {
        const data = await fetchDichVu();
        setDichVuData(data);
      } catch (error) {
        // Handle any errors
      }
    }

    fetchData();
  }, []);
  const firstSixItems = dichVuData.slice(0, 6);
  return (
    <div>
      <section className="tf__services mt_115 xs_mt_70">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-7 col-lg-8 col-md-10 wow fadeInUp"
              data-wow-duration="1s"
            >
              <div className="tf__section_heading tf__heading_left mb_35">
                <h5>Dịch vụ của chúng tôi</h5>
              </div>
            </div>
          </div>
          <div className="row">
            {firstSixItems.map((item) => (
              <div
                className="col-lg-6 wow fadeInUp"
                data-wow-duration="1s"
                key={item.idDichVu}
              >
                <div className="tf__services_item">
                  <div className="tf__services_img">
                    <img
                      src={item.hinhAnh}
                      alt="services"
                      className="img img-fluid w-100"
                    />
                    <a href="#">
                      <i className="fas fa-heart"></i>
                    </a>
                  </div>
                  <div className="tf__services_text">
                    <Link to={`/services/${item.idDichVu}`}  className="title text-decoration-none">
                    {item.tieuDe}
                    </Link>
                    <p>
                    {item.noiDung}
                    </p>
                    {/* <ul>
                     <li>
                       <i class="fas fa-play"></i> 5 Sessions
                     </li>
                     <li>
                       <i class="fas fa-user"></i> 291 Clients
                     </li>
                   </ul> */}
                    <div className="tf__services_btn_area">
                      <Link
                      to={`/services/${item.idDichVu}`}
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
                        <span>240</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
