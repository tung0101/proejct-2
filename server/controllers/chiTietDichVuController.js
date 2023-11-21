const chiTietDichVuModel = require('../models/chiTietDichVuModel');

const getAllChiTietDichVu = async (req, res) => {
  try {
    const data = await chiTietDichVuModel.getAllChiTietDichVu();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Không tìm thấy dịch vụ' });
  }
};

const getChiTietDichVuById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await chiTietDichVuModel.getChiTietDichVuById(id);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(404).json({ message: 'Không tìm thấy dịch vụ' });
  }
};

const createChiTietDichVu = async (req, res) => {
  const { idDichVu, moTa, gia, nhanVienThucHien } = req.body;

  // Validation
  if (!idDichVu || !moTa || !gia || !nhanVienThucHien) {
    return res.status(400).json({ message: 'Thiếu thông tin' });
  }

  try {
    const result = await chiTietDichVuModel.createChiTietDichVu(idDichVu, moTa, gia, nhanVienThucHien);
    return res.status(201).json({ message: 'Tạo chi tiết dịch vụ thành công' });
  } catch (error) {
    return res.status(500).json({ message: 'Không tìm thấy dịch vụ' });
  }
};

const updateChiTietDichVu = async (req, res) => {
  const { idChiTietDichVu, idDichVu, moTa, gia, nhanVienThucHien } = req.body;

  try {
    const data = {
      idChiTietDichVu: idChiTietDichVu,
      idDichVu: idDichVu,
      moTa: moTa,
      gia: gia,
      nhanVienThucHien: nhanVienThucHien,
    };

    await chiTietDichVuModel.updateChiTietDichVu(data);
    return res.status(200).json({ message: 'Update thành công' });
  } catch (error) {
    return res.status(500).json({ message: 'Không tìm thấy dịch vụ' });
  }
};

const deleteChiTietDichVu = async (req, res) => {
  try {
    const id = req.params.id;
    await chiTietDichVuModel.deleteChiTietDichVu(id);
    return res.status(200).json({ message: 'Đã xóa thành công' });
  } catch (error) {
    return res.status(500).json({ message: 'Không tìm thấy dịch vụ'});
  }
};

module.exports = {
  getAllChiTietDichVu,
  getChiTietDichVuById,
  createChiTietDichVu,
  updateChiTietDichVu,
  deleteChiTietDichVu,
};