const datLichModel = require('../models/datLichModel');

const getAllDatLich = async (req, res) => {
  try {
    const data = await datLichModel.getAllDatLich();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getDatLichById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await datLichModel.getDatLichById(id);
    if (data) {
      return res.status(200).json(data);
    } else {
      return res.status(404).json({ message: 'Không tìm thấy lịch này' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const createDatLich = async (req, res) => {
  const { idUser, idChiTietDichVu, ngayDatLich, SDT } = req.body;

  // Validation
  if (!idUser || !idChiTietDichVu || !ngayDatLich || !SDT) {
    return res.status(400).json({ message: 'Thiếu thông tin' });
  }

  try {
    await datLichModel.createDatLich(idUser, idChiTietDichVu, ngayDatLich, SDT);
    return res.status(201).json({ message: 'Tạo đặt lịch thành công' });
  } catch (error) {
    return res.status(500).json({ message: 'Có lỗi xảy ra' });
  }
};

const updateDatLich = async (req, res) => {
  const { id, idUser, idChiTietDichVuidChiTietDichVu, ngayDatLich, SDT } = req.body;

  try {
    const data = {
      id: id,
      idUser: idUser,
      idChiTietDichVu: idChiTietDichVu,
      ngayDatLich: ngayDatLich,
      SDT: SDT,
    };

    await datLichModel.updateDatLich(data);
    return res.status(200).json({ message: 'Update thành công' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteDatLich = async (req, res) => {
  try {
    const id = req.params.id;
    await datLichModel.deleteDatLich(id);
    return res.status(200).json({ message: 'Đã xóa thành công' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllDatLich,
  getDatLichById,
  createDatLich,
  updateDatLich,
  deleteDatLich,
};