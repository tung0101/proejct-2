const loaiSanPhamModel = require('../models/loaiSanPhamModel');

const getAllloaiSanPham = async (req, res) => {
  try {
    const data = await loaiSanPhamModel.getAllloaiSanPham();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getLoaiSanPhamById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await loaiSanPhamModel.getLoaiSanPhamById(id);
    if (data) {
      return res.status(200).json(data);
    } else {
      return res.status(404).json({ message: 'Không tìm thấy câu hỏi' });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

const createLoaiSanPham = async (req, res) => {
  const { tenLoai } = req.body;

  // Kiểm tra tenLoai
  if (!tenLoai) {
    return res.status(400).json({ message: 'Thiếu thông tin' });
  }

  try {
    await loaiSanPhamModel.createLoaiSanPham(tenLoai);
    return res.status(201).json({ message: 'Tạo dịch vụ thành công' });
  } catch (error) {
    return res.status(500).json({ message: 'Có lỗi xảy ra' });
  }
};


const updateLoaiSanPham = async (req, res) => {
  try {
    const data = {
      idLoaiSanPham: req.body.idLoaiSanPham,
      tenLoai: req.body.tenLoai
    };
    await loaiSanPhamModel.updateLoaiSanPham(data);
    return res.status(200).json({ message: 'Update thành công' });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteLoaiSanPham = async (req, res) => {
  try {
    const id = req.params.id;
    await loaiSanPhamModel.deleteLoaiSanPham(id);
    return res.status(200).json({ message: 'Đã xóa thành công' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllloaiSanPham,
  getLoaiSanPhamById,
  createLoaiSanPham,
  updateLoaiSanPham,
  deleteLoaiSanPham,
};