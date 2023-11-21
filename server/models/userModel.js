const db = require('../config/db');

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    let sql = `SELECT * FROM users`;
    db.query(sql, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const getUserById = (id) => {
  return new Promise((resolve, reject) => {
    let sql = 'SELECT * FROM users WHERE idUser = ?';
    db.query(sql, id, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data[0]);
      }
    });
  });
};

const createUser = (userName, password, email, role) => {
  return new Promise((resolve, reject) => {
    let sql = "INSERT INTO users (userName, password, email) VALUES (?, ?, ?)";
    db.query(sql, [userName, password, email], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const updateUser = (data) => {
  return new Promise((resolve, reject) => {
    let sql = 'UPDATE users SET userName=?, password=?, email=?, role=? WHERE idUser=?';
    db.query(sql, [data.userName, data.password, data.email, data.role, data.idUser], (err, results) => {
      if (err) {
        console.error('Lỗi khi cập nhật người dùng:', err);
        reject(err);
      } else {
        resolve({ message: 'Cập nhật thành công' });
      }
    });
  });
};

const deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    let sql = 'DELETE FROM users WHERE idUser = ?';
    db.query(sql, id, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const getUserByUserName = (userName) => {
  return new Promise((resolve, reject) => {
    let sql = 'SELECT * FROM users WHERE userName = ?';
    db.query(sql, [userName], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results[0]);
      }
    });
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserByUserName,
};