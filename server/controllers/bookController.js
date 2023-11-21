const bookModel = require('../models/bookModel');

const getAllBook = async (req, res) => {
  try {
    const data = await bookModel.getAllBook();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getBookById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await bookModel.getBookById(id);
    if (data) {
      return res.status(200).json(data);
    } else {
      return res.status(404).json({ message: 'Không tìm thấy lịch này' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const createBook = async (req, res) => {
  const { userName, SDT, idDichVu, ngayDatLich, gioDatLich, ghiChu} = req.body;

  // Validation
  if (!userName || !SDT || !idDichVu || !ngayDatLich || !gioDatLich || !ghiChu) {
    return res.status(400).json({ message: 'Thiếu thông tin' });
  }

  try {
    await bookModel.createBook(userName, SDT, idDichVu, ngayDatLich, gioDatLich, ghiChu);
    return res.status(201).json({ message: 'Tạo đặt lịch thành công' });
  } catch (error) {
    return res.status(500).json({ message: 'Có lỗi xảy ra' });
  }
};

const updateBook = async (req, res) => {
  const { idDatLich, userName, SDT, idDichVu, ngayDatLich, gioDatLich, ghiChu } = req.body;

  try {
    const data = {
      idDatLich: idDatLich,
      userName: userName,
      SDT: SDT,
      idDichVu: idDichVu,
      ngayDatLich: ngayDatLich,
      gioDatLich: gioDatLich,
      ghiChu:ghiChu
    };

    await bookModel.updateBook(data);
    return res.status(200).json({ message: 'Update thành công' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    await bookModel.deleteBook(id);
    return res.status(200).json({ message: 'Đã xóa thành công' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllBook,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};