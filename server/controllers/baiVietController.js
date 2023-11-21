const baiVietModel = require('../models/baiVietModel');

const getAllBaiViet = async (req, res) => {
  try {
    const data = await baiVietModel.getAllBaiViet();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getBaiVietById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await baiVietModel.getBaiVietById(id);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(404).json(error);
  }
};

const createBaiViet = async (req, res) => {
  const { tieuDe, hinhAnh, noiDung, nguoiDang, ngayDang, soComment, hinhAnh2, noiDung2, noiDung3} = req.body;

  // Validation
  if (!tieuDe || !hinhAnh || !noiDung || !nguoiDang || !ngayDang || !soComment || !hinhAnh2 || !noiDung2 || !noiDung3) {
    return res.status(400).json({ "message": "Thiếu thông tin" });
   }

  try {
    const result = await baiVietModel.createBaiViet(tieuDe, hinhAnh, noiDung, nguoiDang, ngayDang, soComment, hinhAnh2, noiDung2, noiDung3);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateBaiViet = async (req, res) => {
  try {
    const data = {
      idBaiViet: req.body.idBaiViet,
      tieuDe: req.body.tieuDe,
      hinhAnh: req.body.hinhAnh,
      noiDung: req.body.noiDung,
      nguoiDang: req.body.nguoiDang,
      ngayDang: req.body.ngayDang,
      soComment: req.body.soComment,
      hinhAnh2: req.body.hinhAnh2,
      noiDung2: req.body.noiDung2,
      noiDung3: req.body.noiDung3
    };

    const result = await baiVietModel.updateBaiViet(data);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteBaiViet = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await baiVietModel.deleteBaiViet(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const searchBaiViet = async (req, res) => {
  try {
    const searchTerm = req.query.searchTerm; // Từ khóa tìm kiếm
    const data = await baiVietModel.searchBaiViet(searchTerm);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllBaiViet,
  getBaiVietById,
  createBaiViet,
  updateBaiViet,
  deleteBaiViet,
  searchBaiViet
};