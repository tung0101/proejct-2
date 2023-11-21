import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import "./search.css";

export default function Search() {
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
        className="menu_search text d-flex justify-content-center align-items-center"
        onClick={isModalOpen ? closeModal : openModal}
      >
        <BiSearch />
      </button>
      <div className="wsus__reservation">
        {" "}
        <div
          className={`modal fade ${isModalOpen ? "show" : ""}`}
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          style={{ display: isModalOpen ? "block" : "none" }}
        >
          <div className="modal-dialog" role="document">
            <div
              className="modal-content"
              style={{
                borderRadius: "100px",
                margin: "250px 0",
              }}
            >
              <div className="modal-body">
                <button
                  className="btn"
                  type="button"
                  onClick={closeModal}
                  style={{
                    position: "fixed",
                    width: "50px",
                    height: "50px",
                    top: "20px",
                    right: "20px",
                    backgroundColor: "#faa392",
                    borderRadius: "100px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "24px",
                    color: "white",
                  }}
                >
                  <FaTimes />
                </button>
                <form
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Tìm kiếm . . ."
                    style={{
                      width: "70%",
                      border: "None",
                      borderRadius: "100px",
                      height: "20px",
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      width: "30%",
                      height: "50px",
                      backgroundColor: "#faa392",
                      borderRadius: "100px",
                      color: "white",
                    }}
                  >
                    Tìm kiếm
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
