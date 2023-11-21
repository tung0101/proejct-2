const db = require('../config/db');

const getAllBinhLuan = () => {
  return new Promise((resolve, reject) => {
    let sql = `
    SELECT 
    binhluan.idBinhLuan,
    baiviet.tieuDe,
    users.userName,
    binhluan.anhNguoiBinhLuan,
    binhluan.noiDung
FROM 
    binhluan
JOIN 
    baiviet ON baiviet.idBaiViet = binhluan.idBaiViet
JOIN 
    users ON binhluan.idUser = users.idUser
GROUP BY 
    binhluan.idBinhLuan;
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

const getBinhLuanById = (id) => {
  return new Promise((resolve, reject) => {
    let sql = ` 
    SELECT 
    binhluan.idBinhLuan,
    baiviet.tieuDe,
    users.userName,
    binhluan.anhNguoiBinhLuan,
    binhluan.noiDung
FROM 
    binhluan
JOIN 
    baiviet ON baiviet.idBaiViet = binhluan.idBaiViet
JOIN 
    users ON binhluan.idUser = users.idUser
WHERE 
    binhluan.idBinhLuan = ?
GROUP BY 
    binhluan.idBinhLuan;

   `;
    db.query(sql, id, (err, data) => {
      if (err) {
        reject(err);
      } else {
        if (data && data.length > 0) {
          resolve(data[0]);
        } else {
          reject({ message: 'Không tìm thấy bình luận' });
        }
      }
    });
  });
};

const createBinhLuan = (idBaiViet, idUser, anhNguoiBinhLuan, noiDung) => {
  return new Promise((resolve, reject) => {
    let sql = "INSERT INTO binhluan (idBaiViet, idUser, anhNguoiBinhLuan, noiDung) VALUES (?, ?, ?, ?)";
    db.query(sql, [idBaiViet, idUser, anhNguoiBinhLuan, noiDung], (err, result) => {
      if (err) {
        reject({ message: 'Có lỗi xảy ra' });
      } else {
        resolve({ message: 'Tạo bình luận thành công' });
      }
    });
  });
};

const updateBinhLuan = (data) => {
  return new Promise((resolve, reject) => {
    let sql = 'UPDATE binhluan SET idBaiViet=?, idUser=?, anhNguoiBinhLuan=?, noiDung=? WHERE idBinhLuan=?';
    db.query(sql, [data.idBaiViet, data.idUser, data.anhNguoiBinhLuan, data.noiDung, data.idBinhLuan], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve({ message: 'Update thành công' });
      }
    });
  });
};

const deleteBinhLuan = (id) => {
  return new Promise((resolve, reject) => {
    let sql = 'DELETE FROM binhluan WHERE idBinhLuan = ?';
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
  getAllBinhLuan,
  getBinhLuanById,
  createBinhLuan,
  updateBinhLuan,
  deleteBinhLuan,
};