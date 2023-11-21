const db = require('../config/db');

const getAllSanPham = () => {
  return new Promise((resolve, reject) => {
    let sql = `SELECT * FROM sanpham`;
    db.query(sql, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const getSanPhamById = (id) => {
  return new Promise((resolve, reject) => {
    let sql = 'SELECT * FROM sanpham WHERE idSanPham = ?';
    db.query(sql, id, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data[0]);
      }
    });
  });
};

const createSanPham = (idLoaiSanPham, tenSanPham, hinhSanPham) => {
  return new Promise((resolve, reject) => {
    let sql = "INSERT INTO sanpham (idLoaiSanPham, tenSanPham, hinhSanPham) VALUES (?, ?, ?)";
    db.query(sql, [idLoaiSanPham, tenSanPham, hinhSanPham], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const updateSanPham = (data) => {
  return new Promise((resolve, reject) => {
    let sql = 'UPDATE sanpham SET idLoaiSanPham=?, tenSanPham=?, hinhSanPham=? WHERE idSanPham=?';
    db.query(sql, [data.idLoaiSanPham, data.tenSanPham, data.hinhSanPham, data.idSanPham], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const deleteSanPham = (id) => {
  return new Promise((resolve, reject) => {
    let sql = 'DELETE FROM sanpham WHERE idSanPham = ?';
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
  getAllSanPham,
  getSanPhamById,
  createSanPham,
  updateSanPham,
  deleteSanPham,
  
};