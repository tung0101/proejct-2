const db = require('../config/db');

const getAllDatLich = () => {
  return new Promise((resolve, reject) => {
    let sql = `
    SELECT datlich.idDatLich, users.userName, dichvu.tieuDe AS tieuDeDichVu, chitietdichvu.gia, datlich.ngayDatLich, datlich.SDT
    FROM datlich
    INNER JOIN users ON datlich.idUser = users.idUser
    INNER JOIN chitietdichvu ON datlich.idChiTietDichVu = chitietdichvu.idChiTietDichVu
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

const getDatLichById = (id) => {
  return new Promise((resolve, reject) => {
    let sql = `
    SELECT datlich.idDatLich, users.userName, dichvu.tieuDe AS tieuDeDichVu, chitietdichvu.gia, datlich.ngayDatLich, datlich.SDT
    FROM datlich
    INNER JOIN users ON datlich.idUser = users.idUser
    INNER JOIN chitietdichvu ON datlich.idChiTietDichVu = chitietdichvu.idChiTietDichVu
    INNER JOIN dichvu ON chitietdichvu.idDichVu = dichvu.idDichVu
    WHERE idDatLich = ?`;
    db.query(sql, id, (err, data) => {
      if (err) {
        reject(err);
      } else {
        if (data && data.length > 0) {
          resolve(data[0]);
        } else {
          resolve(null);
        }
      }
    });
  });
};

const createDatLich = (idUser, idChiTietDichVu, ngayDatLich, SDT) => {
  return new Promise((resolve, reject) => {
    let sql = "INSERT INTO datlich (idUser, idChiTietDichVu, ngayDatLich, SDT) VALUES (?, ?, ?, ?)";
    db.query(sql, [idUser, idChiTietDichVu, ngayDatLich, SDT], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

const updateDatLich = (data) => {
  return new Promise((resolve, reject) => {
    let sql = 'UPDATE datlich SET idUser=?, idChiTietDichVu=?, ngayDatLich=?, SDT=? WHERE idDatLich=?';
    db.query(sql, [data.idUser, data.idChiTietDichVu, data.ngayDatLich, data.SDT, data.idDatLich], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

const deleteDatLich = (id) => {
  return new Promise((resolve, reject) => {
    let sql = 'DELETE FROM datlich WHERE idDatLich = ?';
    db.query(sql, id, (err, d) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

module.exports = {
  getAllDatLich,
  getDatLichById,
  createDatLich,
  updateDatLich,
  deleteDatLich,
};