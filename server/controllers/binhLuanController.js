const binhLuanModel = require('../models/binhLuanModel');

const getAllBinhLuan = async (req, res) => {
  try {
    const data = await binhLuanModel.getAllBinhLuan();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getBinhLuanById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await binhLuanModel.getBinhLuanById(id);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(404).json(error);
  }
};

const createBinhLuan = async (req, res) => {
  const { idBaiViet, idUser, anhNguoiBinhLuan, noiDung } = req.body;
  // Validation
  if (!idBaiViet || !idUser || !anhNguoiBinhLuan || !noiDung) {
    return res.status(400).json({ "message": "Thiếu thông tin" });
  }
  try {
    const result = await binhLuanModel.createBinhLuan(idBaiViet, idUser, anhNguoiBinhLuan, noiDung);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateBinhLuan = async (req, res) => {
  try {
    const data = {
      idBinhLuan: req.body.idBinhLuan,
      idBaiViet: req.body.idBaiViet,
      idUser: req.body.idUser,
      anhNguoiBinhLuan: req.body.anhNguoiBinhLuan,
      noiDung: req.body.noiDung,
    };

    const result = await binhLuanModel.updateBinhLuan(data);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteBinhLuan = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await binhLuanModel.deleteBinhLuan(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllBinhLuan,
  getBinhLuanById,
  createBinhLuan,
  updateBinhLuan,
  deleteBinhLuan,
};