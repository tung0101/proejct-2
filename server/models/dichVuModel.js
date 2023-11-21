const db = require('../config/db');

const getAllDichVu = () => {
  return new Promise((resolve, reject) => {
    let sql = `SELECT * FROM dichvu`;
    db.query(sql, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const getDichVuById = (id) => {
  return new Promise((resolve, reject) => {
    let sql = 'SELECT * FROM dichvu WHERE idDichVu = ?';
    db.query(sql, id, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data[0]);
      }
    });
  });
};

const createDichVu = (tieuDe, hinhAnh, noiDung) => {
  return new Promise((resolve, reject) => {
    let sql = "INSERT INTO dichvu (tieuDe, hinhAnh, noiDung) VALUES (?, ?, ?)";
    db.query(sql, [tieuDe, hinhAnh, noiDung], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const updateDichVu = (data) => {
  return new Promise((resolve, reject) => {
    let sql = 'UPDATE dichvu SET tieuDe=?, hinhAnh=?, noiDung=? WHERE idDichVu=?';
    db.query(sql, [data.tieuDe, data.hinhAnh, data.noiDung, data.idDichVu], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const deleteDichVu = (id) => {
  return new Promise((resolve, reject) => {
    let sql = 'DELETE FROM dichvu WHERE idDichVu = ?';
    db.query(sql, id, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const searchDichVu = (searchTerm) => {
  return new Promise((resolve, reject) => {
    let sql = `SELECT tieuDe FROM dichvu`; // Chỉ lấy cột tieuDe

    // Kiểm tra nếu có từ khóa tìm kiếm
    if (searchTerm) {
      sql += ` WHERE tieuDe LIKE '%${searchTerm}%'`;
    }
    db.query(sql, (err, data) => {
      if (err) {
        reject(err);
      } else {
        // Tạo một mảng các tiêu đề từ kết quả truy vấn
        const titles = data.map((item) => item.tieuDe);
        resolve(titles);
      }
    });
  });
};

module.exports = {
  getAllDichVu,
  getDichVuById,
  createDichVu,
  updateDichVu,
  deleteDichVu,
  searchDichVu,
};