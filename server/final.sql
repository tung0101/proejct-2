-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 19, 2023 lúc 03:54 PM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `final`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `baiviet`
--

CREATE TABLE `baiviet` (
  `idBaiViet` int(255) NOT NULL,
  `tieuDe` varchar(255) NOT NULL,
  `hinhAnh` varchar(255) NOT NULL,
  `noiDung` varchar(2000) NOT NULL,
  `nguoiDang` varchar(255) NOT NULL,
  `ngayDang` datetime NOT NULL,
  `soComment` int(255) NOT NULL DEFAULT 0,
  `hinhAnh2` varchar(255) NOT NULL,
  `noiDung2` varchar(2000) NOT NULL,
  `noiDung3` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `baiviet`
--

INSERT INTO `baiviet` (`idBaiViet`, `tieuDe`, `hinhAnh`, `noiDung`, `nguoiDang`, `ngayDang`, `soComment`, `hinhAnh2`, `noiDung2`, `noiDung3`) VALUES
(1, 'Tác Dụng Của Massage Bấm Huyệt Dưỡng Sinh\r\nTÁC DỤNG CỦA MASSAGE BẤM HUYỆT DƯỠNG SINH', 'https://spathaomocq7.com/thumbs/400x230x1/upload/news/massage-bam-huyet-3804.jpg', 'Massage bấm huyệt dưỡng sinh là một phần quan trọng của nhiều phương pháp trị liệu truyền thống của Đông Á. Nó kết hợp việc áp dụng áp lực và kỹ thuật massage đặc biệt tại các điểm huyệt trên cơ thể để cân bằng năng lượng và cải thiện sức khỏe tổng thể. Dưới đây là một số tác dụng chính của massage bấm huyệt dưỡng sinh:\r\n\r\nGiảm căng thẳng và căng cơ: Massage bấm huyệt giúp giảm căng thẳng và căng cơ bằng cách thúc đẩy tuần hoàn máu và giúp cơ bắp thư giãn. Nó có thể giúp giảm đau đầu, mệt mỏi và căng thẳng trong cơ thể.\r\n\r\nCải thiện tuần hoàn máu: Bấm huyệt tăng cường tuần hoàn máu và dòng chảy năng lượng trong cơ thể. Điều này có thể giúp cải thiện sự cung cấp dưỡng chất và oxi đến các tế bào, giúp tăng cường sức kháng, và làm sáng da.\r\n\r\nThúc đẩy cân bằng năng lượng: Bấm huyệt giúp cân bằng năng lượng trong cơ thể bằng cách thúc đẩy chảy năng lượng tại các điểm huyệt. Nó có thể giúp loại bỏ tắc nghẽn và khôi phục cân bằng tự nhiên của cơ thể.\r\n\r\nGiảm đau và viêm: Bấm huyệt có thể giúp giảm đau và viêm tại các điểm huyệt cụ thể. Nó thường được sử dụng như một phương pháp thiết yếu trong trị liệu đau lưng, đau cổ, và đau cơ xương khớp.\r\n\r\nCải thiện giấc ngủ: Massage bấm huyệt có khả năng giúp giảm căng thẳng, làm dịu tinh thần, và cải thiện chất lượng giấc ngủ. Nó có thể giúp người trải qua giấc ngủ ngon hơn và tỉnh táo vào buổi sáng.\r\n\r\n', 'Văn Hải', '2023-02-15 00:00:00', 10, 'https://images.pexels.com/photos/3230236/pexels-photo-3230236.jpeg?auto=compress&cs=tinysrgb&w=600', 'Cải thiện tinh thần: Massage bấm huyệt có khả năng làm dịu tâm trạng và giúp thư giãn, đồng thời tạo cảm giác thoải mái và cân bằng tinh thần.', 'Tăng cường sức kháng: Bấm huyệt có thể cải thiện hệ thống miễn dịch và tăng cường sức kháng của cơ thể đối với bệnh tật.'),
(2, 'GỘI ĐẦU THẢO DƯỢC NUÔI TÓC KHỎE ĐẸP', 'https://spathaomocq7.com/thumbs/400x230x1/upload/news/mg8412-scaled-8163.jpg', 'Gội đầu thảo dược là một phương pháp chăm sóc tóc sử dụng các thành phần thảo dược tự nhiên trong quá trình gội đầu. Các loại thảo dược thường được sử dụng trong gội đầu thảo dược có thể bao gồm cây cỏ, hoa, lá, rễ, và thậm chí cả thảo dược hương thơm. Dưới đây là một số công dụng tiềm năng của gội đầu thảo dược:\r\n\r\nLàm sạch tóc và da đầu: Gội đầu thảo dược giúp loại bỏ bã nhờn, bụi bẩn, và tế bào chết trên da đầu và tóc. Điều này giúp tóc và da đầu sạch sẽ hơn.\r\n\r\nTăng cường sức kháng của da đầu: Một số thảo dược có khả năng chống vi khuẩn và viêm nhiễm, giúp da đầu kháng lại các vấn đề như nấm da đầu và mụn đầu đen.\r\n\r\nGiảm ngứa và kích ứng da đầu: Một số thảo dược có tác dụng làm dịu và giảm ngứa da đầu. Điều này đặc biệt hữu ích cho những người có da đầu nhạy cảm hoặc bị kích ứng.\r\n\r\nTăng cường tăng trưởng tóc: Các thành phần thảo dược như bhringraj, amla, và henna có thể được sử dụng để tăng cường sự mọc của tóc, làm cho tóc mạnh mẽ và bóng bẩy hơn.\r\n\r\nLàm mượt tóc: Gội đầu thảo dược có thể làm cho tóc mềm mượt và dễ chải, giúp kiểm soát tóc xơ và chẻ ngọn.', 'Văn Hải', '2023-02-17 00:00:00', 7, 'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=600', 'nTạo cảm giác thư giãn: Quá trình gội đầu thảo dược có thể làm cho người sử dụng cảm thấy thư giãn và thoải mái, giúp giảm căng thẳng và áp lực.', 'nTạo hương thơm dịu nhẹ cho tóc: Một số loại thảo dược có hương thơm tự nhiên, giúp tạo cảm giác thư giãn và thơm mát cho tóc sau khi gội đầu.'),
(3, '4 CÔNG DỤNG “KHÔNG TƯỞNG” KHI TẨY TẾ BÀO CHẾT DA ĐẦU', 'https://spathaomocq7.com/thumbs/400x230x1/upload/news/3362317667578528490315776315851952461062532n-2722.jpg', 'Tẩy tế bào chết da đầu là một phần quan trọng của chăm sóc da và tóc. Dưới đây là bốn công dụng quan trọng khi thực hiện tẩy tế bào chết da đầu:\r\n\r\nLoại bỏ Tế Bào Chết: Quá trình tẩy tế bào chết giúp loại bỏ tế bào da chết, bã nhờn, và tạp chất tích tụ trên da đầu. Điều này giúp da đầu sạch sẽ hơn, ngăn ngừa việc tắc nghẽn lỗ chân lông, và làm giảm khả năng hình thành mụn đầu đen hay mụn cám.\r\n\r\nKích Thích Tuần Hoàn Máu: Quá trình massage và tẩy tế bào chết có thể kích thích tuần hoàn máu tại da đầu. Điều này giúp cung cấp dưỡng chất và oxi cho da đầu, tăng cường sức khỏe của tóc và da', 'Ngọc Thanh', '2023-02-20 00:00:00', 4, 'https://images.pexels.com/photos/5042609/pexels-photo-5042609.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', 'Duy Trì Hương Thơm Tự Nhiên Cho Tóc: Việc tẩy tế bào chết cũng giúp loại bỏ mùi không mong muốn và duy trì hương thơm tự nhiên cho tóc. Điều này tạo cảm giác tươi mới và sạch sẽ sau khi sử dụng.', 'nCải Thiện Sức Khỏe Của Tóc: Việc loại bỏ tế bào chết và tạp chất giúp tóc thoải mái hơn, giảm nguy cơ bị gãy rụng, và cải thiện tình trạng tóc. Da đầu sạch sẽ tạo điều kiện tốt cho việc phát triển tóc mạnh và khỏe mạnh hơn.'),
(4, 'CÔNG DỤNG THẦN KÌ CỦA MASSAGE BẤM HUYỆT', 'https://spathaomocq7.com/thumbs/400x230x1/upload/news/spa-thao-moc-1-4093.jpg', 'Massage bấm huyệt là một phương pháp trị liệu truyền thống xuất phát từ Đông Á, trong đó áp dụng áp lực tại các điểm huyệt trên cơ thể để cân bằng năng lượng và cải thiện sức khỏe tổng thể. Dưới đây là một số tác dụng chính của massage bấm huyệt:\r\n\r\nGiảm căng thẳng và căng cơ: Massage bấm huyệt giúp giảm căng thẳng trong cơ thể bằng cách thúc đẩy tuần hoàn máu và giúp cơ bắp thư giãn. Nó có thể giúp giảm đau và sưng tại các vùng căng cơ.\r\n\r\nCải thiện tuần hoàn máu: Bấm huyệt tăng cường tuần hoàn máu và chảy năng lượng trong cơ thể. Điều này có thể giúp cải thiện sự cung cấp dưỡng chất và oxi đến các tế bào, giúp tăng cường sức kháng và làm sáng da.\r\n\r\nThúc đẩy cân bằng năng lượng: Bấm huyệt giúp cân bằng năng lượng trong cơ thể bằng cách thúc đẩy chảy năng lượng tại các điểm huyệt. Nó có thể giúp loại bỏ tắc nghẽn và khôi phục cân bằng tự nhiên của cơ thể.\r\n\r\nGiảm đau và viêm: Bấm huyệt có thể giúp giảm đau và viêm tại các điểm huyệt cụ thể. Nó thường được sử dụng như một phương pháp thiết yếu trong trị liệu đau lưng, đau cổ, và đau cơ xương khớp.\r\n\r\nCải thiện giấc ngủ: Massage bấm huyệt có khả năng giúp giảm căng thẳng, làm dịu tinh thần, và cải thiện chất lượng giấc ngủ. Nó có thể giúp người trải qua giấc ngủ ngon hơn và tỉnh táo vào buổi sáng.', 'Đức Lập', '2023-02-20 00:00:00', 5, 'https://images.pexels.com/photos/7365434/pexels-photo-7365434.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', 'Cải thiện tinh thần: Massage bấm huyệt có khả năng làm dịu tâm trạng và giúp thư giãn, đồng thời tạo cảm giác thoải mái và cân bằng tinh thần.', 'nTăng cường sức kháng: Bấm huyệt có thể cải thiện hệ thống miễn dịch và tăng cường sức kháng của cơ thể đối với bệnh tật.'),
(5, 'NGÂM CHÂN THẢO DƯỢC', 'https://spathaomocq7.com/thumbs/400x230x1/upload/news/vung-phan-xa-chan-5-549x366-1627.jpg', 'Ngâm chân thảo dược là một phương pháp truyền thống được sử dụng để cải thiện sức khỏe và tạo cảm giác thư giãn cho chân và cơ thể. Dưới đây là một số công dụng tiềm năng của ngâm chân thảo dược:\r\n\r\nGiảm căng thẳng và căng cơ: Ngâm chân trong nước ấm hoặc có thảo dược có thể giúp giảm căng thẳng và căng cơ sau một ngày dài hoặc sau khi hoạt động vận động nặng.\r\n\r\nCải thiện tuần hoàn máu: Nước ấm và thảo dược có khả năng kích thích tuần hoàn máu trong chân, giúp tăng cường dòng máu và dưỡng chất đến các khu vực da và cơ bắp.\r\n\r\nGiảm viêm và đau: Ngâm chân với thảo dược có thể giúp giảm viêm và đau do các vấn đề như đau cơ xương khớp hoặc sưng vùi.\r\n\r\nLàm dịu đau chân và bàn chân nhiễm độc: Ngâm chân thảo dược có thể giúp làm dịu đau và sưng tấy do nhiễm độc hoặc vết thương nhỏ.\r\n\r\nGiảm căng thẳng tinh thần: Quá trình ngâm chân có thể tạo cảm giác thư giãn và giúp bạn thư giãn tinh thần. Nó có thể được xem như một hình thức thú vị của thư giãn sau một ngày làm việc căng thẳng.', 'Văn Mạnh', '2023-02-20 00:00:00', 9, 'https://images.pexels.com/photos/5240642/pexels-photo-5240642.jpeg?auto=compress&cs=tinysrgb&w=600', 'Tạo cảm giác thoải mái và xua đuổi cảm lạnh: Ngâm chân trong nước ấm hoặc thảo dược có thể giúp bạn cảm thấy ấm áp và thoải mái, đặc biệt là vào mùa đông hoặc khi bạn cảm thấy lạnh lẽo.', 'nLàm sạch và làm mềm da chân: Ngâm chân có thể giúp loại bỏ tế bào da chết và làm sạch da chân, làm cho da mềm mịn và sáng hơn.'),
(6, 'VÌ SAO NÊN CHĂM SÓC DA THƯỜNG XUYÊN?', 'https://spathaomocq7.com/thumbs/400x230x1/upload/news/goi-dau-thao-duoc-spa-2-8527.jpg', 'Chăm sóc da thường xuyên là quan trọng vì da là cơ quan lớn nhất của cơ thể và có nhiều vai trò quan trọng trong việc bảo vệ sức khỏe tổng thể. Dưới đây là một số lý do tại sao bạn nên chăm sóc da thường xuyên:\r\n\r\nBảo vệ da khỏi tác động bên ngoài: Da là lớp vật lý đầu tiên bảo vệ cơ thể khỏi tác động của môi trường, như tia UV, bụi bẩn, vi khuẩn, và các yếu tố gây hại khác. Chăm sóc da giúp bảo vệ da khỏi các tác động này.\r\n\r\nNgăn ngừa lão hóa da: Chăm sóc da định kỳ có thể giúp giảm tình trạng nếp nhăn và lão hóa da, giúp da trông trẻ hơn và tươi sáng hơn.\r\n\r\nDuy trì sức kháng cho da: Chăm sóc da giúp tăng cường sức kháng cho da, giúp da đối phó tốt hơn với các tác nhân gây viêm nhiễm hoặc tác động xấu từ môi trường.\r\n\r\nCải thiện tình trạng da: Chăm sóc da thường xuyên có thể giúp cải thiện tình trạng da, như làm dịu da mẩn đỏ, kiểm soát dầu thừa, và giảm mụn trứng cá.\r\n\r\nTạo cảm giác thoải mái và tự tin: Da khỏe mạnh và đẹp sẽ giúp bạn cảm thấy tự tin hơn về bản thân. Cảm giác thoải mái với da cũng là một phần quan trọng của chăm sóc sức khỏe tinh thần.', 'Minh Hải', '2023-02-20 00:00:00', 12, 'https://images.pexels.com/photos/1159334/pexels-photo-1159334.jpeg?auto=compress&cs=tinysrgb&w=600', 'Tăng cường quá trình hấp thụ dưỡng chất: Da khỏe mạnh hấp thụ dưỡng chất tốt hơn từ sản phẩm chăm sóc da, giúp nâng cao hiệu quả của các sản phẩm chăm sóc da.', 'nBảo vệ sức khỏe tổng thể: Da có mối liên quan mật thiết đến sức khỏe tổng thể, và việc chăm sóc da có thể ảnh hưởng đến các vấn đề sức khỏe khác, như sức kháng của cơ thể, việc chảy máu, và khả năng tự phục hồi.'),
(14, 'abc1234jajkdjldlaklkslkakdkla', 'https://i.pinimg.com/564x/6e/48/91/6e489140de4ff27fe68284203006a710.jpg', 'ạkdkajkkdsdjkajldalda', 'nhung', '2023-11-16 17:27:00', 10, 'https://i.pinimg.com/564x/92/8a/45/928a454fbbdf4d315e34304bcc1cf16f.jpg', 'kakdjajjdklkdlakkldad', 'kjajdjadsklkaklks');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `binhluan`
--

CREATE TABLE `binhluan` (
  `idBinhLuan` int(255) NOT NULL,
  `idBaiViet` int(255) NOT NULL,
  `idUser` int(255) NOT NULL,
  `anhNguoiBinhLuan` varchar(500) NOT NULL,
  `noiDung` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `binhluan`
--

INSERT INTO `binhluan` (`idBinhLuan`, `idBaiViet`, `idUser`, `anhNguoiBinhLuan`, `noiDung`) VALUES
(1, 1, 6, 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDw0NDQ0NEA8NDQ0PDQ8NDg0NFREXFhURExMYHSg', 'bài viết này rất ok'),
(2, 1, 3, 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDw0NDQ0NEA8NDQ0PDQ8NDg0NFREXFhURExMYHSggGBolGxUVITMhJSkrLi4uFx8zODMsNygtNSsBCgoKDg0OFxAQFy0dHx4rKy0rLS0tKy0rLS0tKystKy0tLSsrLSsrLSsrKy03LS0tLS0rLSs3KzctKysrKysrN//AABEIALIBGwMBIgACEQEDEQH/', 'bài viết này rất ok'),
(11, 1, 4, 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDw0NDQ0NEA8NDQ0PDQ8NDg0NFREXFhURExMYHSg', 'bài viết này rất ok');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `book`
--

CREATE TABLE `book` (
  `idDatLich` int(11) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `SDT` varchar(10) NOT NULL,
  `idDichVu` int(11) NOT NULL,
  `ngayDatLich` date NOT NULL,
  `gioDatLich` time(6) NOT NULL,
  `ghiChu` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `book`
--

INSERT INTO `book` (`idDatLich`, `userName`, `SDT`, `idDichVu`, `ngayDatLich`, `gioDatLich`, `ghiChu`) VALUES
(3, 'Trang', '0944870558', 3, '2023-11-08', '16:47:26.000000', 'Nhờ bạn Trang làm cho tôi'),
(5, 'Khánh', '0944870558', 4, '2023-11-06', '16:47:26.000000', 'Nhờ bạn Khánh làm cho tôi'),
(6, 'Tùng', '0944870558', 4, '2023-11-06', '16:47:26.000000', 'Nhờ bạn Tùng làm cho tôi'),
(7, 'Nhung', '0944870558', 4, '2023-11-06', '16:47:26.000000', 'Nhờ bạn Tùng làm cho tôi');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chitietdichvu`
--

CREATE TABLE `chitietdichvu` (
  `idChiTietDichVu` int(255) NOT NULL,
  `idDichVu` varchar(255) NOT NULL,
  `moTa` varchar(2000) NOT NULL,
  `gia` float NOT NULL,
  `nhanVienThucHien` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `chitietdichvu`
--

INSERT INTO `chitietdichvu` (`idChiTietDichVu`, `idDichVu`, `moTa`, `gia`, `nhanVienThucHien`) VALUES
(1, '3', 'Quy trình thực hiện\r\nBước 1: Massage vùng đầu và vai cổ gáy giải tỏa stress, làm dịu căng cơ, chống mỏi cổ, kích thích tuần hoàn máu lên não, tạo cảm giác thư giãn tối đa\r\nBước 2: Gội đầu dầu hà thủ ô linh chi bổ sung chất dinh dưỡng cho tóc, giúp tóc sạch khoẻ, cải thiện tóc bạc\r\nBước 3: Massage thả lỏng, làm khô tóc, xoa tinh chất phục hồi tơ tằm để tóc mềm mại và thanh thoát.\r\nBước 4: Xịt tinh chất bưởi kích mọc tóc\r\n', 100, 'Hồng Nhung'),
(2, '2', 'Quy trình thực hiện:\r\nBước 1: Tư vấn và Đánh giá khách hàng:\r\n\r\nTrước khi bắt đầu mát-xa, một nhân viên spa sẽ tư vấn và đánh giá tình trạng sức khỏe và mong muốn của khách hàng. Điều này giúp xác định loại mát-xa và áp lực thích hợp cho từng người.\r\n\r\nBước 2: Chuẩn bị phòng và thay đồ:\r\n\r\nKhách hàng sẽ được hướng dẫn đến phòng mát-xa riêng tư. Tại đó, họ sẽ được cung cấp áo choàng hoặc quần áo riêng để đảm bảo sự thoải mái và riêng tư.\r\n\r\nBước 3: Lựa chọn loại mát-xa:\r\n\r\nKhách hàng có thể lựa chọn loại mát-xa mà họ muốn như mát-xa Swedish, mát-xa Thai, mát-xa đá nóng, và nhiều loại khác tùy thuộc vào mục tiêu và sở thích cá nhân.\r\n\r\nBước 4: Thực hiện mát-xa:\r\n\r\nNhân viên spa sẽ thực hiện mát-xa với áp lực và kỹ thuật phù hợp, tập trung vào các khu vực cơ bắp căng thẳng hoặc cần chăm sóc. Khách hàng sẽ nằm trên bàn mát-xa và thư giãn trong không gian yên tĩnh với âm nhạc nhẹ và ánh sáng dịu.\r\n\r\nBước 5: Kết thúc và thư giãn:\r\n\r\nSau khi hoàn thành mát-xa, khách hàng sẽ được thư giãn trong phòng mát-xa, cung cấp thời gian để thoải mái và đánh thức tinh thần một cách dịu dàng.\r\n\r\nBước 6: Tư vấn và chăm sóc sau mát-xa:\r\n\r\nNhân viên spa có thể tư vấn khách hàng về cách duy trì lợi ích của mát-xa sau khi ra khỏi spa. Họ cũng có thể gợi ý sản phẩm hoặc liệu pháp khác để chăm sóc cơ bắp và da.', 200, 'Khánh Linh'),
(3, '3', 'Quy trình thực hiện\r\nBước 1: Làm sạch da mặt:\r\n\r\nBước đầu tiên của quá trình trẻ hóa da là làm sạch da mặt một cách kỹ lưỡng. Sử dụng sản phẩm làm sạch da phù hợp với loại da của bạn để loại bỏ bụi bẩn, dầu thừa và tạp chất.\r\n\r\nBước 2: Toner và Chất chuẩn bị (Prep):\r\n\r\nSau khi làm sạch da, sử dụng toner và chất chuẩn bị (prep) để cân bằng độ pH và chuẩn bị da cho các bước tiếp theo. Những sản phẩm này giúp da sẵn sàng cho các liệu pháp sau đó.\r\n\r\nBước 3: Điều trị Trẻ hóa Da:\r\n\r\nDịch vụ trẻ hóa da có thể bao gồm việc sử dụng các sản phẩm chứa các thành phần chống lão hóa như retinol, axit hyaluronic, hoặc vitamin C. Một số người chọn sử dụng các liệu pháp thẩm mỹ như laser, mát-xa kỹ thuật số, hoặc peeling hóa học để giảm nếp nhăn, làm sáng da, và cải thiện cấu trúc da.\r\n\r\nBước 4: Chăm sóc Da Hằng Ngày:\r\n\r\nTrẻ hóa da không chỉ xảy ra trong các liệu pháp đặc biệt mà còn trong chăm sóc hàng ngày. Sử dụng kem chống nắng hàng ngày để bảo vệ da khỏi tác động của tia UV và thực hiện chế độ chăm sóc da phù hợp với loại da của bạn.\r\n\r\nBước 5: Dinh dưỡng và Thể dục:\r\n\r\nChế độ dinh dưỡng cân đối và việc tập thể dục đều có tác động tích cực đến làn da. Hãy cung cấp cho cơ thể các dưỡng chất cần thiết và duy trì sức khỏe để giúp da luôn tươi trẻ.\r\n\r\nBước 6: Thường xuyên kiểm tra và tư vấn:\r\n\r\nLàn da có thể thay đổi theo thời gian, vì vậy quá trình trẻ hóa da cần được xem xét và điều chỉnh thường xuyên. Tư vấn với chuyên gia da liễu hoặc chuyên gia spa để duy trì và tối ưu hóa quá trình trẻ hóa da của bạn.', 250, 'Yến Nhi'),
(4, '4', 'Quy trình thực hiện\r\nBước 1: Đánh giá tình trạng da:\r\n\r\nMột cuộc hội thoại ban đầu với chuyên gia spa là bước quan trọng để đánh giá tình trạng da của khách hàng. Họ sẽ xem xét loại da, tình trạng mụn, thâm, và nám để tạo ra một kế hoạch trị liệu cá nhân.\r\n\r\nBước 2: Lựa chọn sản phẩm và liệu pháp phù hợp:\r\n\r\nDựa trên đánh giá ban đầu, chuyên gia spa sẽ lựa chọn các sản phẩm chăm sóc da chứa các thành phần hiệu quả để kiểm soát mụn, làm sáng thâm, và cải thiện nám. Họ cũng có thể chọn các liệu pháp như peeling hóa học, mát-xa, hoặc máy móc hiện đại để thực hiện trên da.\r\n\r\nBước 3: Thực hiện liệu pháp trị liệu:\r\n\r\nChuyên gia spa sẽ thực hiện các liệu pháp trị liệu dựa trên lựa chọn của khách hàng. Các liệu pháp này có thể bao gồm peeling hóa học để loại bỏ lớp da sừng và tăng cường tái tạo, mát-xa để kích thích tuần hoàn máu và thư giãn cơ bắp, hoặc các liệu pháp làm sáng da chuyên sâu.\r\n\r\nBước 4: Hướng dẫn chăm sóc da hàng ngày:\r\n\r\nSau quá trình trị liệu tại spa, chuyên gia sẽ cung cấp hướng dẫn về việc chăm sóc da hàng ngày. Điều này bao gồm việc sử dụng các sản phẩm cụ thể và thực hiện các bước chăm sóc da thường xuyên để duy trì tình trạng da được cải thiện.\r\n\r\nBước 5: Tư vấn và theo dõi:\r\n\r\nChuyên gia spa sẽ tư vấn khách hàng về việc duy trì quá trình trị liệu và kiểm tra tình trạng da theo thời gian. Họ có thể điều chỉnh kế hoạch trị liệu nếu cần thiết để đảm bảo làn da luôn đẹp và khỏe mạnh.', 300, 'Khánh Linh'),
(5, '5', 'Quy trình thực hiện\r\nBước 1: Đánh giá tình trạng da và mục tiêu của khách hàng:\r\n\r\nTrước khi bắt đầu quá trình tắm trắng, chuyên gia spa sẽ tư vấn với khách hàng để hiểu rõ về loại da của họ và mục tiêu cụ thể về màu da. Điều này giúp xác định liệu trị liệu tắm trắng là phù hợp và có thể đạt được hay không.\r\n\r\nBước 2: Chuẩn bị da:\r\n\r\nSau đánh giá ban đầu, chuyên gia spa sẽ làm sạch da và tạo điều kiện tốt nhất cho quá trình tắm trắng. Điều này có thể bao gồm làm sạch da, loại bỏ tế bào chết, và làm dịu da nếu cần.\r\n\r\nBước 3: Thực hiện quá trình tắm trắng:\r\n\r\nQuá trình tắm trắng có thể sử dụng các sản phẩm chứa các thành phần làm sáng da như axit alpha hydroxy (AHA), axit traxenic, glutathione, hoặc các loại enzyme. Chuyên gia spa sẽ áp dụng sản phẩm này lên da khách hàng một cách cẩn thận để đảm bảo độ thích ứng và độ an toàn.\r\n\r\nBước 4: Đánh giá và điều chỉnh kết quả:\r\n\r\nSau khi quá trình tắm trắng hoàn thành, chuyên gia spa sẽ đánh giá kết quả và tư vấn với khách hàng về cách duy trì và bảo vệ làn da sau quá trình tắm trắng. Họ cũng có thể điều chỉnh kế hoạch tắm trắng dựa trên phản hồi của khách hàng và tiến trình trị liệu.\r\n\r\nBước 5: Chăm sóc da sau tắm trắng:\r\n\r\nChăm sóc da sau quá trình tắm trắng là quan trọng để duy trì màu da trắng sáng. Chuyên gia spa sẽ hướng dẫn về cách sử dụng kem chống nắng hàng ngày, các sản phẩm dưỡng da phù hợp, và các liệu pháp bảo vệ da trước tác động của tia UV và các yếu tố môi trường khác.', 300, 'Thu Huyền'),
(6, '6', 'Quy trình thực hiện:\r\nBước 1: Đánh giá tình trạng khách hàng:\r\n\r\nTrước khi bắt đầu xông hơi, chuyên gia spa sẽ hỏi khách hàng về tình trạng sức khỏe và mục tiêu riêng của họ khi tham gia xông hơi. Điều này giúp họ xác định liệu xông hơi có phù hợp với khách hàng hay không, và nếu có, sẽ đưa ra khuyến nghị và hướng dẫn phù hợp.\r\n\r\nBước 2: Chuẩn bị cho xông hơi:\r\n\r\nChuyên gia spa sẽ hướng dẫn khách hàng về cách chuẩn bị trước khi bước vào phòng xông hơi. Điều này có thể bao gồm việc tắt điện thoại di động, thay đồ thành trang phục tắm, và cung cấp khăn tắm và dép trong phòng xông.\r\n\r\nBước 3: Xông hơi:\r\n\r\nKhách hàng sẽ bước vào phòng xông hơi, nơi họ sẽ trải nghiệm không gian nhiệt đới với hơi nước và nhiệt độ cao. Chuyên gia spa sẽ điều chỉnh nhiệt độ và độ ẩm phù hợp với nhu cầu của khách hàng.\r\n\r\nBước 4: Thời gian xông hơi:\r\n\r\nThời gian xông hơi thường kéo dài từ 10 đến 20 phút, nhưng có thể được điều chỉnh tùy theo sở thích cá nhân và tình trạng sức khỏe của khách hàng.\r\n\r\nBước 5: Thư giãn và chăm sóc sau xông hơi:\r\n\r\nSau khi hoàn thành quá trình xông hơi, chuyên gia spa sẽ hướng dẫn khách hàng về cách thoát ra khỏi phòng xông và cung cấp khăn tắm và nước uống để giúp họ thư giãn và làm mát cơ thể.\r\n\r\nBước 6: Tư vấn và đề xuất chăm sóc sau xông hơi:\r\n\r\nChuyên gia spa sẽ tư vấn khách hàng về cách duy trì lợi ích của quá trình xông hơi và đề xuất sản phẩm hoặc liệu pháp khác để chăm sóc da và cơ thể sau xông hơi.', 300, 'Bảo Ngọc'),
(7, '', 'Quy trình thực hiện\r\nBước 1: Massage vùng đầu và vai cổ gáy giải tỏa stress, làm dịu căng cơ, chống mỏi cổ, kích thích tuần hoàn máu lên não, tạo cảm giác thư giãn tối đa\r\nBước 2: Gội đầu dầu hà thủ ô linh chi bổ sung chất dinh dưỡng cho tóc, giúp tóc sạch khoẻ, cải thiện tóc bạc\r\nBước 3: Massage thả lỏng, làm khô tóc, xoa tinh chất phục hồi tơ tằm để tóc mềm mại và thanh thoát.\r\nBước 4: Xịt tinh chất bưởi kích mọc tóc\r\n', 100, 'Hương Nhung'),
(9, '3', 'Quy trình thực hiện\r\nBước 1: Massage vùng đầu và vai cổ gáy giải tỏa stress, làm dịu căng cơ, chống mỏi cổ, kích thích tuần hoàn máu lên não, tạo cảm giác thư giãn tối đa\r\nBước 2: Gội đầu dầu hà thủ ô linh chi bổ sung chất dinh dưỡng cho tóc, giúp tóc sạch khoẻ, cải thiện tóc bạc\r\nBước 3: Massage thả lỏng, làm khô tóc, xoa tinh chất phục hồi tơ tằm để tóc mềm mại và thanh thoát.\r\nBước 4: Xịt tinh chất bưởi kích mọc tóc\r\n', 100, 'Hồng Nhung'),
(10, '3', 'Quy trình thực hiện\r\nBước 1: Massage vùng đầu và vai cổ gáy giải tỏa stress, làm dịu căng cơ, chống mỏi cổ, kích thích tuần hoàn máu lên não, tạo cảm giác thư giãn tối đa\r\nBước 2: Gội đầu dầu hà thủ ô linh chi bổ sung chất dinh dưỡng cho tóc, giúp tóc sạch khoẻ, cải thiện tóc bạc\r\nBước 3: Massage thả lỏng, làm khô tóc, xoa tinh chất phục hồi tơ tằm để tóc mềm mại và thanh thoát.\r\nBước 4: Xịt tinh chất bưởi kích mọc tóc\r\n', 100, 'Hồng Nhung');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chitietsanpham`
--

CREATE TABLE `chitietsanpham` (
  `idChiTietSanPham` int(11) NOT NULL,
  `idSanPham` int(11) NOT NULL,
  `gia` float NOT NULL,
  `mota` varchar(4000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `chitietsanpham`
--

INSERT INTO `chitietsanpham` (`idChiTietSanPham`, `idSanPham`, `gia`, `mota`) VALUES
(1, 1, 100, 'BỘT_ĐẬU_XANH: (em dùng rửa mặt mỗi buổi sáng đây ạ, sạch bã nhờn, trắng sáng sau khi rửa) Đậu Xanh là loại mask thần dược dùng làm đẹp an toàn cực kỳ hiệu quả và tiết kiệm. - Rửa mặt hàng ngày làm sạch da, ngăn ngừa mụn, #điều_trị_mụn, làm da trắng lên từng ngày. - Làm_trắng_da: đậu xanh + sữa tươi ( da khô thì thêm mật ong) - Trị_mụn: đậu xanh + bột nghệ + sữa chua - Bổ_sung_độ_ẩm cho da khô - Dưỡng_da_mềm_mại - Làm_mờ_vết_nám'),
(2, 2, 100, 'CÔNG THỨC ĐẬU ĐỎ CHO CÁC BẠN -Bột đậu đỏ + Sữa tươi không đường = Đánh bay đi các tế bào chết, làm mới làn da, cung cấp protein, chất béo từ sữa làm làn da căng tràn sức sống. Công thức vô cùng đơn giản: 3 thìa bột đậu đỏ cùng với 3 thìa sữa tươi. Mình nên đắp hỗn hợp trong khoảng 15 phút, mỗi tuần đắp từ 2 – 3 lần nhé! -Bột đậu đỏ + Nước cốt chanh = Dưỡng trắng tự nhiên, chống lão hóa với nguồn vitamin C từ chanh; se khít lỗ chân lông, giảm nhờn và ngăn ngừa mụn. 3 thìa bột đậu đỏ kèm 2 thìa nước cốt chanh, có thể thêm 1 thìa mật ong chính là công thức hoàn hảo cho hỗn hợp này. -Bột đậu đỏ + Dầu oliu = Cung cấp độ ẩm cần thiết, tăng độ đàn hồi và cải thiện sắc tố da cho những làn da khô sần, thiếu sức sống. Công thức để bạn tham khảo là 2 thìa bột đậu đỏ kèm với 2 thìa dầu oliu. Bạn nên kiên trì sử dụng những loại mặt nạ trên 2 – 3 lần trong tuần, đều đặn trong suốt khoảng 2 tháng.'),
(3, 3, 100, 'Mặt nạ gạo lứt sữa chua trị mụn Sử dụng bột gạo lức với sữa chua. Mẹo làm đẹp này cực kỳ thích hợp với những cô nàng da dầu, da mụn. Chỉ cần thêm một chút sữa chua, làn da không chỉ trở nên mịn màng và còn mềm mại, trắng sáng tự nhiên. - Nguyên liệu: 02 thìa bột gạo lứt 02 thìa sữa chua không đường - Cách làm: Cách làm mặt nạ bột gạo lứt và sữa chua đơn giản đó là trộn đều 2 nguyên liệu lại với nhau để tạo ra hỗn hợp đồng nhất. Sau đó tiến hành đắp mặt nạ bằng bột gạo lứt, thoa đều lên toàn gương mặt để các dưỡng chất thấm sâu xuống da. Giữ nguyên mặt nạ bột gạo lứt, sữa chua trong 15 phút thì rửa lại với nước.'),
(4, 4, 100, 'YẾN MẠCH Pha tí Bột xong để tủ lạnh rùi mình đi tắm xong ra mình đắp lên mặt “ôiiiiii nó tê táiiii” vừa mát vừa thơm kinh khủng - Mix Yến Mạch với Mật ong, công thức này tẩy tế bào chết, làm mềm da, dịu da, mờ thâm, nám, tàn nhang, nhã nắng cho da ạ, đặt biệt là se khít lỗ chân lông và trắng da lắm á nha - 100g đắp hơn 25 lần và tắm hơn 6 lần ạ'),
(5, 5, 100, 'Công dụng làm đẹp của TINH CÁM GẠO nguyên chất: - Tẩy da chết (Tẩy tế bào chết) - Làm da trắng hồng và căng mịn - Làm mờ nám da, sạm da - Dưỡng ẩm và đẩy nhanh quá trình tái tạo da - Làm chậm quá trình lão hóa da - Thu nhỏ lỗ chân lông - Trị mụn, ngăn ngừa mụn'),
(6, 6, 100, 'RAU MÁ - CÓ TÍNH HÀN NÊN GIẢI NHIỆT RẤT TỐT, DÙNG ĐỂ HẠ SỐT RẤT HIỆU QUẢ - TRỊ MỤN - CÓ CHỨA CHẤT triterpenoids - GIÚP TĂNG TỐC ĐỘ CHỮA LÀNH VẾT THƯƠNG MỤN, VẾT THÂM, SẸO DO MỤN ĐỂ LẠI - ĐẸP DA GIÚP NGĂN NGỪA LÃO HOÁ - LÀM GIẢM SỰ LO LẮNG, HỒI HỘP, TĂNG CƯỜNG CHỨC NĂNG TINH THẦN - CÁCH DÙNG: Trộn 1-2 thìa bột rau má với một chút sữa tươi hoặc sữa chua (không đường), thêm một ít mật ong, rửa mặt sạch sau đó thoa hỗn hợp lên da chờ 25 phút rửa lại bằng nước sạch￼.');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `datlich`
--

CREATE TABLE `datlich` (
  `idDatLich` int(255) NOT NULL,
  `idUser` int(255) NOT NULL,
  `idChiTietDichVu` int(255) NOT NULL,
  `ngayDatLich` datetime NOT NULL,
  `SDT` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `datlich`
--

INSERT INTO `datlich` (`idDatLich`, `idUser`, `idChiTietDichVu`, `ngayDatLich`, `SDT`) VALUES
(1, 1, 1, '2023-10-11 00:00:00', '0944870449'),
(2, 2, 1, '2023-10-10 00:00:00', '0944870228'),
(3, 1, 6, '2023-10-18 00:00:00', '0944870449'),
(5, 1, 2, '2023-10-17 00:00:00', '0944870449');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `dichvu`
--

CREATE TABLE `dichvu` (
  `idDichVu` int(255) NOT NULL,
  `tieuDe` varchar(255) NOT NULL,
  `hinhAnh` varchar(255) NOT NULL,
  `noiDung` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `dichvu`
--

INSERT INTO `dichvu` (`idDichVu`, `tieuDe`, `hinhAnh`, `noiDung`) VALUES
(1, 'Gội đầu dưỡng sinh', 'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=400', 'Gọi đầu dưỡng sinh là một phương pháp giúp cải thiện sức khỏe và tăng cường tinh thần thông qua việc sử dụng thực phẩm và phương pháp tự nhiên để làm sạch và tăng cường chức năng của cơ thể.'),
(2, 'Dịch vụ massage', 'https://images.pexels.com/photos/5659014/pexels-photo-5659014.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', 'Dịch vụ massage là một cách thúc đẩy thư giãn, giảm căng thẳng cơ bắp và tạo cảm giác thư thái cho cơ thể và tinh thần.'),
(3, 'Trẻ hóa da', 'https://images.pexels.com/photos/3985321/pexels-photo-3985321.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', 'Trẻ hóa da là quá trình sử dụng sản phẩm và kỹ thuật để giảm nếp nhăn, làm mờ các dấu hiệu lão hóa và làm da trở nên tươi trẻ và săn chắc hơn.'),
(4, 'Trị mụn thâm nám', 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=400', 'Trị mụn thâm nám là việc sử dụng các phương pháp và sản phẩm dành riêng để giảm bớt vết thâm và nám trên da.'),
(5, 'Tắm trắng', 'https://images.pexels.com/photos/6621092/pexels-photo-6621092.jpeg?auto=compress&cs=tinysrgb&w=400', 'Tắm trắng là một quá trình sử dụng sản phẩm hoặc phương pháp để làm da trở nên sáng hơn hoặc giảm bớt tình trạng da tối màu.'),
(6, 'Xông hơi', 'https://images.pexels.com/photos/15119171/pexels-photo-15119171/free-photo-of-a-woman-wearing-a-robe-in-a-sauna.jpeg?auto=compress&cs=tinysrgb&w=400', 'Xông hơi là quá trình sử dụng hơi nước nóng hoặc hơi thảo dược để thư giãn cơ thể, giảm căng thẳng và làm sạch lỗ chân lông da.'),
(8, 'abc1234jajkdjldlaklkslkakdkla', 'https://i.pinimg.com/564x/27/66/d1/2766d1ce71b173d6949775804a38563f.jpg', 'akjdjkajdkajfkjsdjkjla');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loaisanpham`
--

CREATE TABLE `loaisanpham` (
  `idLoaiSanPham` int(11) NOT NULL,
  `tenLoai` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `loaisanpham`
--

INSERT INTO `loaisanpham` (`idLoaiSanPham`, `tenLoai`) VALUES
(1, 'Bột thiên nhiên');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sanpham`
--

CREATE TABLE `sanpham` (
  `idSanPham` int(10) NOT NULL,
  `idLoaiSanPham` int(10) NOT NULL,
  `tenSanPham` varchar(255) NOT NULL,
  `hinhSanPham` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `sanpham`
--

INSERT INTO `sanpham` (`idSanPham`, `idLoaiSanPham`, `tenSanPham`, `hinhSanPham`) VALUES
(1, 1, 'Đậu Xanh - 100g', 'http://changbeautyspa.com/thumbs/540x540x1/upload/product/dau-xanh-2322.jpg'),
(2, 1, 'Đậu Đỏ - 100g', 'http://changbeautyspa.com/thumbs/540x540x1/upload/product/dau-do-4595.jpg'),
(3, 1, 'Gạo Lứt - 100g', 'http://changbeautyspa.com/thumbs/540x540x1/upload/product/gao-luc-6045.jpg'),
(4, 1, 'Bột Yến Mạch - 100g', 'http://changbeautyspa.com/thumbs/540x540x1/upload/product/yen-mach-5388.jpg'),
(5, 1, 'Cám Gạo-100g', 'http://changbeautyspa.com/thumbs/540x540x1/upload/product/cam-gao-1824.jpg'),
(6, 1, 'Rau Má - 100g', 'http://changbeautyspa.com/thumbs/540x540x1/upload/product/rau-ma-8202.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tuvan`
--

CREATE TABLE `tuvan` (
  `idTuVan` int(255) NOT NULL,
  `cauHoi` varchar(255) NOT NULL,
  `cauTraLoi` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `tuvan`
--

INSERT INTO `tuvan` (`idTuVan`, `cauHoi`, `cauTraLoi`) VALUES
(1, 'Xin chào, tôi quan tâm đến dịch vụ massage tại spa của bạn. Có những loại massage nào được cung cấp ở đây?', 'Chào mừng bạn đến spa của chúng tôi! Chúng tôi cung cấp nhiều loại massage để phục vụ nhu cầu của bạn. Có massage thư giãn, massage điểm áp lực, massage đá nóng, và massage thải độc, cùng với nhiều phong cách và kỹ thuật khác. Bạn có thể lựa chọn loại mas'),
(2, 'Tôi muốn biết thêm về dịch vụ trẻ hóa da tại spa của bạn. Có những liệu pháp trẻ hóa nào có sẵn và cách chúng hoạt động là gì?', 'Dịch vụ trẻ hóa da là một phần quan trọng của spa của chúng tôi. Chúng tôi cung cấp các liệu pháp như facial, peeling hóa học, và microdermabrasion để làm sáng da, giảm nếp nhăn, và tăng cường độ đàn hồi của da. Các liệu pháp này thường sử dụng sản phẩm c'),
(3, 'Tôi có vấn đề về mụn thâm nám, liệu spa của bạn có dịch vụ nào giúp giảm thâm nám không?', 'Chúng tôi hiểu về vấn đề mụn thâm nám và chúng tôi cung cấp liệu pháp trị mụn thâm nám như facial chuyên nghiệp, điều trị laser, và peeling hóa học. Chúng tôi có thể tư vấn và đề xuất phương pháp phù hợp nhất với tình trạng của bạn để giúp làm sáng và giả'),
(4, 'Tôi muốn biết thêm về giá cả và gói dịch vụ tại spa của bạn. Bạn có thể cho tôi biết về các tùy chọn và giá cả không?', 'Dịch vụ và giá cả tùy thuộc vào loại dịch vụ và gói bạn lựa chọn. Chúng tôi có nhiều gói dịch vụ khác nhau, từ gói cơ bản đến gói cao cấp, phù hợp với mọi ngân sách. Để biết thêm chi tiết và đặt lịch, bạn có thể xem trang web của chúng tôi hoặc liên hệ vớ'),
(6, 'abcde', 'jakdajldjlakskkladlkklakd');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `idUser` int(255) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` tinyint(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`idUser`, `userName`, `password`, `email`, `role`) VALUES
(1, 'admin', 'admin123', 'sang@gmail.com', 1),
(2, 'Nhung', 'tung123', 'khanh@gmail.com', 0),
(3, 'chau', '$2b$10$6St9Hj3xs3VVevedUqBXQOIWDcyRssGDEL5OTLWsUKGuSQv4zTPM6', 'chau@gmail.com', 0),
(5, 'linh', '$2b$10$rVLmWmSBlJB4V4oGYzBkqeUPtJHxbBsnO4A7fCpw13nHExOW8EEPy', 'linh@gmail.com', 0);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `baiviet`
--
ALTER TABLE `baiviet`
  ADD PRIMARY KEY (`idBaiViet`);

--
-- Chỉ mục cho bảng `binhluan`
--
ALTER TABLE `binhluan`
  ADD PRIMARY KEY (`idBinhLuan`);

--
-- Chỉ mục cho bảng `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`idDatLich`);

--
-- Chỉ mục cho bảng `chitietdichvu`
--
ALTER TABLE `chitietdichvu`
  ADD PRIMARY KEY (`idChiTietDichVu`);

--
-- Chỉ mục cho bảng `chitietsanpham`
--
ALTER TABLE `chitietsanpham`
  ADD PRIMARY KEY (`idChiTietSanPham`);

--
-- Chỉ mục cho bảng `datlich`
--
ALTER TABLE `datlich`
  ADD PRIMARY KEY (`idDatLich`);

--
-- Chỉ mục cho bảng `dichvu`
--
ALTER TABLE `dichvu`
  ADD PRIMARY KEY (`idDichVu`);

--
-- Chỉ mục cho bảng `loaisanpham`
--
ALTER TABLE `loaisanpham`
  ADD PRIMARY KEY (`idLoaiSanPham`);

--
-- Chỉ mục cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`idSanPham`);

--
-- Chỉ mục cho bảng `tuvan`
--
ALTER TABLE `tuvan`
  ADD PRIMARY KEY (`idTuVan`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUser`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `baiviet`
--
ALTER TABLE `baiviet`
  MODIFY `idBaiViet` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `binhluan`
--
ALTER TABLE `binhluan`
  MODIFY `idBinhLuan` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `book`
--
ALTER TABLE `book`
  MODIFY `idDatLich` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `chitietdichvu`
--
ALTER TABLE `chitietdichvu`
  MODIFY `idChiTietDichVu` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `datlich`
--
ALTER TABLE `datlich`
  MODIFY `idDatLich` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `dichvu`
--
ALTER TABLE `dichvu`
  MODIFY `idDichVu` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `loaisanpham`
--
ALTER TABLE `loaisanpham`
  MODIFY `idLoaiSanPham` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  MODIFY `idSanPham` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `tuvan`
--
ALTER TABLE `tuvan`
  MODIFY `idTuVan` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `idUser` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
