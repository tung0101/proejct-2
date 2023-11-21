const db = require('../config/db');

const getAlltuVan = () => {
  return new Promise((resolve, reject) => {
    let sql = `SELECT * FROM tuvan`;
    db.query(sql, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const getTuVanById = (id) => {
  return new Promise((resolve, reject) => {
    let sql = 'SELECT * FROM tuvan WHERE idTuVan = ?';
    db.query(sql, id, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data[0]);
      }
    });
  });
};

const createTuVan = (cauHoi, cauTraLoi) => {
  return new Promise((resolve, reject) => {
    if (!cauHoi || !cauTraLoi) {
      reject(new Error('Thiếu thông tin'));
    }

    let sql = "INSERT INTO tuvan (cauHoi, cauTraLoi) VALUES (?, ?)";
    db.query(sql, [cauHoi, cauTraLoi], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const updateTuVan = (data) => {
  return new Promise((resolve, reject) => {
    let sql = 'UPDATE tuvan SET cauHoi=?, cauTraLoi=? WHERE idTuVan=?';
    db.query(sql, [data.cauHoi, data.cauTraLoi, data.idTuVan], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const deleteTuVan = (id) => {
  return new Promise((resolve, reject) => {
    let sql = 'DELETE FROM tuvan WHERE idTuVan = ?';
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
  getAlltuVan,
  getTuVanById,
  createTuVan,
  updateTuVan,
  deleteTuVan,
};