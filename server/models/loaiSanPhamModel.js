const db = require('../config/db');

const getAllloaiSanPham = () => {
  return new Promise((resolve, reject) => {
    let sql = `SELECT * FROM loaisanpham`;
    db.query(sql, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const getLoaiSanPhamById = (id) => {
  return new Promise((resolve, reject) => {
    let sql = 'SELECT * FROM loaisanpham WHERE idLoaiSanPham = ?';
    db.query(sql, id, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data[0]);
      }
    });
  });
};

const createLoaiSanPham = (tenLoai) => {
  return new Promise((resolve, reject) => {
    let sql = "INSERT INTO loaisanpham (tenLoai) VALUES (?)";
    db.query(sql, [tenLoai], (err, result) => {
      if (err) {
        reject({ error: err });
      } else {
        resolve({ message: 'Tạo bài viết thành công' });
      }
    });
  });
};

const updateLoaiSanPham = (data) => {
  return new Promise((resolve, reject) => {
    let sql = 'UPDATE loaisanpham SET tenLoai=? WHERE idLoaiSanPham=?';
    db.query(sql, [data.tenLoai, data.idLoaiSanPham], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const deleteLoaiSanPham = (id) => {
  return new Promise((resolve, reject) => {
    let sql = 'DELETE FROM loaisanpham WHERE idLoaiSanPham = ?';
    db.query(sql, id, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

module.exports = {
  getAllloaiSanPham,
  getLoaiSanPhamById,
  createLoaiSanPham,
  updateLoaiSanPham,
  deleteLoaiSanPham,
};