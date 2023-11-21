const db = require('../config/db');
const dichVuModel = require('../models/dichVuModel');

const getAlldichVu = async (req, res) => {
  try {
    const data = await dichVuModel.getAllDichVu();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getDichVuById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await dichVuModel.getDichVuById(id);
    if (data) {
      return res.status(200).json(data);
    } else {
      return res.status(404).json({ message: 'Không tìm thấy dịch vụ' });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

const createDichVu = async (req, res) => {
  const { tieuDe, hinhAnh, noiDung } = req.body;
  // Validation
  if (!tieuDe || !hinhAnh || !noiDung) {
    return res.status(400).json({ message: 'Thiếu thông tin' });
  }

  try {
    const result = await dichVuModel.createDichVu(tieuDe, hinhAnh, noiDung);
    return res.status(201).json({ message: 'Tạo dịch vụ thành công' });
  } catch (error) {
    return res.status(500).json({ message: 'Có lỗi xảy ra' });
  }
};

const updateDichVu = async (req, res) => {
  try {
    const data = {
      idDichVu: req.body.idDichVu,
      tieuDe: req.body.tieuDe,
      hinhAnh: req.body.hinhAnh,
      noiDung: req.body.noiDung
    };

    await dichVuModel.updateDichVu(data);
    return res.status(200).json({ message: 'Update thành công' });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteDichVu = async (req, res) => {
  try {
    const id = req.params.id;
    await dichVuModel.deleteDichVu(id);
    return res.status(200).json({ Thông_báo: 'Đã xóa thành công' });
  } catch (error) {
    return res.status(500).json({ Thông_báo: 'Internal server error' });
  }
};

const searchDichVu = async (req, res) => {
  try {
    const searchTerm = req.query.searchTerm; // Từ khóa tìm kiếm

    const data = await dichVuModel.searchDichVu(searchTerm);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAlldichVu,
  getDichVuById,
  createDichVu,
  updateDichVu,
  deleteDichVu,
  searchDichVu,
};
