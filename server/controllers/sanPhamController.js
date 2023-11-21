const db = require('../config/db');
const sanPhamModel = require('../models/sanPhamModel');

const getAllsanPham = async (req, res) => {
  try {
    const data = await sanPhamModel.getAllSanPham();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getSanPhamById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await sanPhamModel.getSanPhamById(id);
    if (data) {
      return res.status(200).json(data);
    } else {
      return res.status(404).json({ message: 'Không tìm thấy dịch vụ' });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

const createSanPham = async (req, res) => {
  const { idLoaiSanPham, tenSanPham, hinhSanPham } = req.body;
  // Validation
  if (!idLoaiSanPham || !tenSanPham || !hinhSanPham) {
    return res.status(400).json({ message: 'Thiếu thông tin' });
  }

  try {
    await sanPhamModel.createSanPham(idLoaiSanPham, tenSanPham, hinhSanPham);
    return res.status(201).json({ message: 'Tạo dịch vụ thành công' });
  } catch (error) {
    return res.status(500).json({ message: 'Có lỗi xảy ra' });
  }
};

const updateSanPham = async (req, res) => {
  try {
    const data = {
      idSanPham: req.body.idSanPham,
      idLoaiSanPham: req.body.idLoaiSanPham,
      tenSanPham: req.body.tenSanPham,
      hinhSanPham: req.body.hinhSanPham
    };

    await sanPhamModel.updateSanPham(data);
    return res.status(200).json({ message: 'Update thành công' });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteSanPham = async (req, res) => {
  try {
    const id = req.params.id;
    await sanPhamModel.deleteSanPham(id);
    return res.status(200).json({ Thông_báo: 'Đã xóa thành công' });
  } catch (error) {
    return res.status(500).json({ Thông_báo: 'Internal server error' });
  }
};



module.exports = {
  getAllsanPham,
  getSanPhamById,
  createSanPham,
  updateSanPham,
  deleteSanPham,
};
