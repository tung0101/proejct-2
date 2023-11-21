const db = require('../config/db');

const getAllBaiViet = () => {
  return new Promise((resolve, reject) => {
    let sql = `SELECT * FROM baiviet`;
    db.query(sql, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const getBaiVietById = (id) => {
  return new Promise((resolve, reject) => {
    let sql = 'SELECT * FROM baiviet WHERE idBaiviet = ?';
    db.query(sql, id, (err, data) => {
      if (err) {
        reject(err);
      } else {
        if (data && data.length > 0) {
          resolve(data[0]);
        } else {
          reject({ message: 'Không tìm thấy baiviet' });
        }
      }
    });
  });
};

const createBaiViet = (tieuDe, hinhAnh, noiDung, nguoiDang, ngayDang, soComment, hinhAnh2, noiDung2, noiDung3) => {
  return new Promise((resolve, reject) => {
    let sql = "INSERT INTO baiviet (tieuDe, hinhAnh, noiDung, nguoiDang, ngayDang, soComment, hinhAnh2, noiDung2, noiDung3) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(sql, [tieuDe, hinhAnh, noiDung, nguoiDang, ngayDang, soComment, hinhAnh2, noiDung2, noiDung3], (err, result) => {
      if (err) {
        reject({ message: 'Có lỗi xảy ra' });
      } else {
        resolve({ message: 'Tạo bài viết thành công' });
      }
    });
  });
};

const updateBaiViet = (data) => {
  return new Promise((resolve, reject) => {
    let sql = 'UPDATE baiviet SET tieuDe=?, hinhAnh=?, noiDung=?, nguoiDang=?, ngayDang=?, soComment=?, hinhAnh2=?, noiDung2=?, noiDung3=? WHERE idBaiViet=?';
    db.query(sql, [data.tieuDe, data.hinhAnh, data.noiDung, data.nguoiDang, data.ngayDang, data.soComment, data.hinhAnh2, data.noiDung2, data.noiDung3, data.idBaiViet], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve({ message: 'Update thành công' });
      }
    });
  });
};

const deleteBaiViet = (id) => {
  return new Promise((resolve, reject) => {
    let sql = 'DELETE FROM baiviet WHERE idBaiviet = ?';
    db.query(sql, id, (err, d) => {
      if (err) {
        reject({ "Thông báo": "Internal server error" });
      } else {
        resolve({ "Thông báo": "Đã xóa thành công" });
      }
    });
  });
};

const searchBaiViet = (searchTerm) => {
  return new Promise((resolve, reject) => {
    let sql = `SELECT tieuDe FROM baiviet`; // Chỉ lấy cột tieuDe

    // Kiểm tra nếu có từ khóa tìm kiếm
    if (searchTerm) {
      sql += ` WHERE tieuDe LIKE '%${searchTerm}%'`;
    }

    db.query(sql, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const titles = data.map((item) => item.tieuDe);
        resolve(titles);
      }
    });
  });
};

module.exports = {
  getAllBaiViet,
  getBaiVietById,
  createBaiViet,
  updateBaiViet,
  deleteBaiViet,
  searchBaiViet
};