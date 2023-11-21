import React, { useState } from "react";
import "./Book.css";
export default function Book() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="nav-link reservation btn"
        onClick={openModal}
      >
        Đặt lịch
      </button>
      <div className="wsus__reservation">
        {" "}
        <div
          className={`modal fade ${isModalOpen ? "show" : ""}`}
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden={!isModalOpen}
          style={{ display: isModalOpen ? "block" : "none" }}
        >
          <div className="modal-dialog wsus__reservation " role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Đặt lịch
                </h5>
                <button
                  type="button"
                  className="btn-closes"
                  onClick={closeModal}
                  aria-label="Close"
                  style={{ backgroundColor: "#faa392" }}
                >
                  <i className="fas fa-times" ></i>
                </button>
              </div>
              <div className="modal-body">
                <form className="wsus__reservation_form">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Họ và tên"
                  />
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Số điện thoại"
                  />
                  {/* <input class="reservation_input" type="text" placeholder="address"> */}
                  <select
                    className="form-control"
                    id="select_js"
                  >
                    <option value="">Dịch vụ</option>
                    <option value="">Gội Đầu Dưỡng Sinh</option>
                    <option value="">Dịch Vụ Massage</option>
                    <option value="">Trẻ Hóa Da</option>
                    <option value="">Trị Mụn Thâm Nám</option>
                    <option value="">Tắm Trắng</option>
                    <option value="">Xông Hơi</option>
                  </select>
                  <input className="form-control" type="date" />
                  <select
                    className="form-control"
                    id="select_js2"
                  >
                    <option value="">Chọn giờ</option>
                    <option value="">08.00 Am đến 09.00 Am</option>
                    <option value="">10.00 Am đến 11.00 Am</option>
                    <option value="">12.00 Pm đến 01.00 Pm</option>
                    <option value="">02.00 Pm đến 03.00 Pm</option>
                    <option value="">04.00 Pm đến 05.00 Pm</option>
                  </select>{" "}
                  <textarea rows="4" placeholder="Message"></textarea>
                  <button
                    type="submit"
                    className="btn common_btn"
                    style={{
                      marginLeft: "-1px",
                      width: "100%",
                      backgroundColor: "#faa392",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    Đặt lịch
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}