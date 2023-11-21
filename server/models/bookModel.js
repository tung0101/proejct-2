const db = require('../config/db');

const getAllBook = () => {
  return new Promise((resolve, reject) => {
    let sql = `
    SELECT 
    book.idDatLich, 
    book.userName, 
    book.SDT, 
    dichvu.tieuDe, 
    book.ngayDatLich, 
    book.gioDatLich, 
    book.ghiChu,
    chitietdichvu.gia,
    chitietdichvu.nhanvienthuchien
    FROM book
    JOIN dichvu ON dichvu.idDichVu = book.idDichVu
    JOIN chitietdichvu ON book.idDichVu = chitietdichvu.idDichVu
    GROUP BY 
    book.idDatLich;
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

const getBookById = (id) => {
  return new Promise((resolve, reject) => {
    let sql = `
    SELECT 
    book.idDatLich, 
    book.userName, 
    book.SDT, 
    dichvu.tieuDe, 
    book.ngayDatLich, 
    book.gioDatLich, 
    book.ghiChu,
    chitietdichvu.gia,
    chitietdichvu.nhanvienthuchien
FROM 
    book
JOIN 
    dichvu ON dichvu.idDichVu = book.idDichVu
JOIN 
    chitietdichvu ON book.idDichVu = chitietdichvu.idDichVu
WHERE 
    book.idDatLich = ?
GROUP BY 
    book.idDatLich;
`;
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

const createBook = (userName, SDT, idDichVu, ngayDatLich, gioDatLich, ghiChu) => {
  return new Promise((resolve, reject) => {
    let sql = "INSERT INTO book (userName, SDT, idDichVu, ngayDatLich, gioDatLich, ghiChu) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(sql, [userName, SDT, idDichVu, ngayDatLich, gioDatLich, ghiChu], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

const updateBook = (data) => {
  return new Promise((resolve, reject) => {
    let sql = 'UPDATE book SET userName=?, SDT=?, idDichVu=?, ngayDatLich=?, gioDatLich=?, ghiChu=? WHERE idDatLich=?';
    db.query(sql, [data.userName, data.SDT, data.idDichVu, data.ngayDatLich, data.gioDatLich, data.ghiChu, data.idDatLich], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};


const deleteBook = (id) => {
  return new Promise((resolve, reject) => {
    let sql = 'DELETE FROM book WHERE idDatLich = ?';
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
  getAllBook,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};