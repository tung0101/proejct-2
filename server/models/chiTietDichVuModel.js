const db = require('../config/db');

const getAllChiTietDichVu = () => {
  return new Promise((resolve, reject) => {
    let sql = `
    SELECT chitietdichvu.idChiTietDichVu, dichvu.tieuDe, chitietdichvu.moTa, chitietdichvu.gia, chitietdichvu.nhanVienThucHien
    FROM chitietdichvu
    INNER JOIN dichvu ON chitietdichvu.idDichVu = dichvu.idDichVu;
    `;
    db.query(sql, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const getChiTietDichVuById = (id) => {
  return new Promise((resolve, reject) => {
    let sql = `
    SELECT chitietdichvu.idChiTietDichVu, dichvu.tieuDe, chitietdichvu.moTa, chitietdichvu.gia, chitietdichvu.nhanVienThucHien
    FROM chitietdichvu
    INNER JOIN dichvu ON chitietdichvu.idDichVu = dichvu.idDichVu 
    WHERE idChiTietDichVu = ?
    `;
    db.query(sql, id, (err, data) => {
      if (err) {
        reject(err);
      } else {
        if (data && data.length > 0) {
          resolve(data[0]);
        } else {
          reject({ message: 'Không tìm thấy dịch vụ' });
        }
      }
    });
  });
};

const createChiTietDichVu = (idDichVu, moTa, gia, nhanVienThucHien) => {
  return new Promise((resolve, reject) => {
    let sql = "INSERT INTO chitietdichvu (idDichVu, moTa, gia, nhanVienThucHien) VALUES (?, ?, ?, ?)";
    db.query(sql, [idDichVu, moTa, gia, nhanVienThucHien], (err, result) => {
      if (err) {
        reject({ message: 'Có lỗi xảy ra' });
      } else {
        resolve({ message: 'Tạo chi tiết dịch vụ thành công' });
      }
    });
  });
};

const updateChiTietDichVu = (data) => {
  return new Promise((resolve, reject) => {
    let sql = 'UPDATE chitietdichvu SET idDichVu=?, moTa=?, gia=?, nhanVienThucHien=? WHERE idChiTietDichVu=?';
    db.query(sql, [data.idDichVu, data.moTa, data.gia, data.nhanVienThucHien, data.idChiTietDichVu], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve({ message: 'Update thành công' });
      }
    });
  });
};

const deleteChiTietDichVu = (id) => {
  return new Promise((resolve, reject) => {
    let sql = 'DELETE FROM chitietdichvu WHERE idChiTietDichVu = ?';
    db.query(sql, id, (err, d) => {
      if (err) {
        reject({ "Thông báo": "Internal server error" });
      } else {
        resolve({ "Thông báo": "Đã xóa thành công" });
      }
    });
  });
};

module.exports = {
  getAllChiTietDichVu,
  getChiTietDichVuById,
  createChiTietDichVu,
  updateChiTietDichVu,
  deleteChiTietDichVu,
};