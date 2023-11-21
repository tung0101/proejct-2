const tuVanModel = require('../models/tuVanModel');

const getAlltuVan = async (req, res) => {
  try {
    const data = await tuVanModel.getAlltuVan();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getTuVanById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await tuVanModel.getTuVanById(id);
    if (data) {
      return res.status(200).json(data);
    } else {
      return res.status(404).json({ message: 'Không tìm thấy câu hỏi' });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

const createTuVan = async (req, res) => {
  const { cauHoi, cauTraLoi } = req.body;
  try {
    if (!cauHoi || !cauTraLoi) {
      return res.status(400).json({ message: 'Thiếu thông tin' });
    }
    await tuVanModel.createTuVan(cauHoi, cauTraLoi);
    return res.status(201).json({ message: 'Tạo câu tư vấn thành công' });
  } catch (error) {
    return res.status(500).json({ message: 'Có lỗi xảy ra' });
  }
};

const updateTuVan = async (req, res) => {
  try {
    const { idTuVan, cauHoi, cauTraLoi } = req.body;
    if (!idTuVan || !cauHoi || !cauTraLoi) {
      return res.status(400).json({ message: 'Thiếu thông tin' });
    }
    const data = { idTuVan, cauHoi, cauTraLoi };
    await tuVanModel.updateTuVan(data);
    return res.status(200).json({ message: 'Update thành công' });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteTuVan = async (req, res) => {
  try {
    const id = req.params.id;
    await tuVanModel.deleteTuVan(id);
    return res.status(200).json({ message: 'Đã xóa thành công' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAlltuVan,
  getTuVanById,
  createTuVan,
  updateTuVan,
  deleteTuVan,
};