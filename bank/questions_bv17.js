// Ngan hang on bao ve RoomCraft - da phan loai topic + bien tap bo khung 'Thay' (2026-11-09)
const QUESTIONS_BV17 = [
 {
  "id": "bv17-a01",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Shop the Room là gì và vì sao nhóm em lại lấy nó làm tính năng trung tâm của RoomCraft thay vì làm một trang danh mục sản phẩm thông thường? Em hãy trình bày cơ chế và lý do.",
  "options": [
   "Shop the Room là cơ chế gắn các chấm hotspot lên ảnh phòng mẫu, mỗi chấm ứng với một sản phẩm thật trong phòng; nhóm chọn vì nó biến ảnh phòng thành điểm mua sắm, khách thấy món đồ trong bối cảnh sử dụng rồi bấm mua ngay, đúng định hướng lấy không gian phòng làm trung tâm",
   "Shop the Room là một trang riêng liệt kê toàn bộ sản phẩm theo danh mục giống trang products, chỉ khác tên gọi cho đẹp",
   "Shop the Room là tính năng cho phép khách tự upload ảnh phòng của mình lên rồi hệ thống tự nhận diện đồ vật bằng AI",
   "Shop the Room là một banner quảng cáo ở trang chủ, bấm vào thì chuyển sang trang sản phẩm bình thường"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu: Shop the Room trong RoomCraft là cơ chế hotspot gắn trên ảnh phòng. Dữ liệu toạ độ nằm trong file room_hotspots.json, mỗi bản ghi gồm room_id, image_url, product_id, position_x, position_y tính theo phần trăm để chấm co giãn đúng khi ảnh đổi kích thước. Trang room-detail.js đọc dữ liệu này qua getRoomHotspots(room.id), tạo các nút button.hotspot đặt left/top theo phần trăm, bấm vào thì mở popup sản phẩm có ảnh, giá, tồn kho, nút thêm vào giỏ và nút xem 3D. Lý do nhóm chọn: định vị đồ án là thương mại điện tử lấy không gian phòng làm trung tâm, khách nhìn thấy món đồ trong bối cảnh thật sẽ dễ quyết định mua hơn là xem ảnh sản phẩm trắng nền. Các phương án còn lại sai bản chất: không phải trang danh mục đổi tên, không phải upload ảnh nhận diện AI, cũng không phải banner quảng cáo.",
  "topic": "feat"
 },
 {
  "id": "bv17-a02",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Toạ độ hotspot trong room_hotspots.json được lưu như thế nào và vì sao nhóm em dùng phần trăm thay vì lưu pixel tuyệt đối? Em giải thích cơ chế hiển thị chấm trên ảnh.",
  "options": [
   "Toạ độ lưu dạng position_x và position_y theo phần trăm, khi hiển thị gán style left/top bằng giá trị phần trăm đó nên chấm luôn nằm đúng vị trí dù ảnh co giãn theo màn hình",
   "Toạ độ lưu bằng pixel tuyệt đối đo trên ảnh gốc, khi màn hình đổi kích thước thì dùng JavaScript nhân lại tỷ lệ để chấm khớp",
   "Toạ độ lưu bằng chỉ số dòng cột của lưới chia ảnh thành 100 ô vuông, mỗi chấm chiếm đúng một ô",
   "Toạ độ lưu bằng toạ độ 3D x, y, z của mô hình glTF rồi chiếu xuống ảnh 2D bằng thư viện Three.js"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong room_hotspots.json, mỗi bản ghi có position_x và position_y là số thực từ 0 đến 100, ví dụ 44.0 và 58.0. Khi showStage() chạy, code tạo nút với nut.style.left = position_x + '%' và nut.style.top = position_y + '%'. Vì ảnh phòng đặt trong khung stage có position relative và ảnh tự co giãn theo chiều rộng khung, phần trăm sẽ tự động quy đổi theo kích thước thực tế của khung, không cần JavaScript tính lại khi resize. Nếu lưu pixel tuyệt đối thì mỗi lần màn hình đổi kích thước hoặc ảnh hiển thị ở tỷ lệ khác phải nhân tỷ lệ thủ công, dễ lệch và phải viết thêm code xử lý resize. Phương án lưới 100 ô và toạ độ 3D đều không đúng với cách nhóm làm, dữ liệu thực tế chỉ có hai trường position_x, position_y dạng phần trăm.",
  "topic": "feat"
 },
 {
  "id": "bv17-a03",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Một phòng mẫu có nhiều góc chụp, mỗi góc có hotspot riêng. Vậy khi khách chuyển ảnh nhỏ thì hệ thống xử lý các chấm hotspot thế nào để không hiện sai chấm của góc khác? Em mô tả luồng dữ liệu.",
  "options": [
   "Mọi chấm của mọi góc đều được tạo sẵn trong DOM, hàm updateStageForImage so sánh ảnh của từng hotspot với currentImage rồi ẩn chấm không thuộc ảnh đang xem, đồng thời cập nhật dòng đếm số điểm",
   "Chỉ tạo chấm của ảnh đang xem, khi đổi ảnh thì xoá toàn bộ chấm cũ rồi tạo lại từ đầu dựa trên ảnh mới",
   "Khi đổi ảnh thì tải lại cả trang room-detail với tham số ảnh mới, server render lại chấm tương ứng",
   "Ẩn toàn bộ chấm khi đổi ảnh và chỉ hiện lại khi khách bấm vào một nút riêng để bật chế độ mua sắm"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong showStage(), vòng lặp duyệt toàn bộ mảng hotspots và tạo một nút cho mỗi bản ghi, gắn id dạng hotspot-i. Sau đó updateStageForImage() duyệt lại mảng, gọi getHotspotImage(hotspots[i], room) để lấy ảnh mà hotspot đó thuộc về, nếu bằng currentImage thì display rỗng còn khác thì display none. Hàm cũng đếm số điểm trên ảnh hiện tại bằng countHotspotsOnImage và cập nhật stageCounter cùng dòng gợi ý stageHintText. Cách này giữ nguyên các nút trong DOM, chỉ đổi thuộc tính hiển thị nên chuyển ảnh rất nhanh, không phải tạo lại phần tử. Phương án xoá tạo lại tốn công và dễ mất trạng thái popup, phương án tải lại trang thì chậm và mất vị trí cuộn, phương án ẩn hết rồi bật lại bằng nút riêng thì không đúng trải nghiệm nhóm đã làm.",
  "topic": "feat"
 },
 {
  "id": "bv17-a04",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Khi khách bấm vào một chấm hotspot, popup sản phẩm hiện ra. Em trình bày popup đó chứa những thông tin gì, lấy từ đâu, và những nút hành động nào được bật hoặc tắt tuỳ điều kiện.",
  "options": [
   "Popup lấy sản phẩm bằng findProduct theo product_id, hiện ảnh, tên, thương hiệu, danh mục, giá và giá gốc nếu có, kích thước, chất liệu, màu, nhãn còn hàng hoặc hết hàng; nút thêm vào giỏ chỉ bật khi còn hàng, nút 3D chỉ hiện khi sản phẩm có model_3d_url",
   "Popup chỉ hiện tên và giá sản phẩm, các thông tin khác phải bấm sang trang chi tiết mới xem được",
   "Popup hiện toàn bộ mô tả dài và đánh giá của sản phẩm, nút thêm vào giỏ luôn bật bất kể tồn kho",
   "Popup hiện một form đặt hàng nhanh gồm số lượng, địa chỉ, phương thức thanh toán để khách mua luôn không cần vào giỏ"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Hàm openHotspot(viTri) lấy product_id từ hotspots[viTri], gọi findProduct để lấy bản ghi sản phẩm, gọi findById cho categories để lấy tên danh mục. Popup dựng HTML gồm ảnh sản phẩm bấm được sang product-detail, tên, thương hiệu và danh mục, giá định dạng qua formatVND, giá gốc gạch ngang nếu original_price lớn hơn price, nhãn còn hàng hoặc hết hàng dựa trên stock_quantity, dòng thông số kích thước chất liệu màu nếu có. Phần hành động có nút Chi tiết luôn hiện, nút Thêm vào giỏ chỉ render khi còn hàng còn hết hàng thì render nút disabled, nút 3D chỉ render khi model_3d_url khác null đúng theo luồng ngoại lệ UC3.3 A1. Cuối popup có thanh điều hướng trước sau giữa các điểm của cùng ảnh. Các phương án còn lại mô tả sai nội dung popup hoặc sai điều kiện bật tắt nút.",
  "topic": "feat"
 },
 {
  "id": "bv17-a05",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Popup hotspot được đặt cạnh chấm. Vậy nhóm em tính vị trí popup thế nào để nó không tràn ra ngoài khung ảnh, và trên màn hình điện thoại thì xử lý ra sao?",
  "options": [
   "placePopup tính toạ độ chấm theo phần trăm nhân kích thước khung, đặt popup lệch sang phải hoặc trái tuỳ chấm ở nửa nào của ảnh, kẹp lại trong khung với lề 12 pixel; màn hình nhỏ hơn hoặc bằng 768 pixel thì bỏ left top để CSS đưa popup xuống đáy",
   "Popup luôn đặt cố định ở góc trên bên phải khung ảnh, không phụ thuộc vị trí chấm, trên điện thoại vẫn giữ nguyên góc đó",
   "Popup đặt đúng tại toạ độ chấm và đè lên chấm, không cần kiểm tra tràn khung vì ảnh luôn đủ rộng",
   "Popup dùng position fixed theo màn hình, luôn nằm giữa màn hình bất kể chấm ở đâu, trên điện thoại thu nhỏ lại"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. placePopup lấy stage.offsetWidth và offsetHeight, tính x và y của chấm bằng position_x nhân rộng chia 100 và position_y nhân cao chia 100. Mặc định đặt popup bên phải chấm với khoảng cách 32 pixel, nhưng nếu chấm nằm nửa phải ảnh hoặc đặt bên phải sẽ tràn khung thì chuyển sang bên trái. Sau đó kẹp trai không nhỏ hơn 12, kẹp tren sao cho popup nằm trong khung với lề 12 pixel trên dưới. Khi window.innerWidth nhỏ hơn hoặc bằng 768 thì hàm xoá left top để CSS chuyển popup thành dạng trượt từ đáy lên, phù hợp màn hình điện thoại. Hàm còn được gọi lại khi resize nếu popup đang mở. Các phương án còn lại đặt popup cố định hoặc đè lên chấm, không đúng cách nhóm làm và dễ che mất nội dung.",
  "topic": "uiux"
 },
 {
  "id": "bv17-a06",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Trong popup có thanh điều hướng trước sau giữa các sản phẩm. Em giải thích hàm stepHotspot hoạt động thế nào và vì sao nó chỉ chuyển giữa các điểm của cùng một góc chụp chứ không phải toàn bộ phòng.",
  "options": [
   "stepHotspot lấy danh sách chỉ số hotspot thuộc ảnh đang xem qua getImageHotspotIndexes, cộng bước rồi lấy modulo độ dài để quay vòng, nhờ vậy chỉ duyệt các điểm cùng ảnh và không nhảy sang góc khác",
   "stepHotspot duyệt toàn bộ mảng hotspots từ đầu đến cuối, khi hết thì quay lại điểm đầu tiên của phòng",
   "stepHotspot chuyển sang ảnh kế tiếp của phòng rồi mở điểm đầu tiên trên ảnh đó",
   "stepHotspot mở popup của sản phẩm tiếp theo trong danh sách sản phẩm của phòng, không liên quan tới ảnh đang xem"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. getImageHotspotIndexes duyệt mảng hotspots, chỉ giữ các chỉ số mà getHotspotImage trả về đúng bằng currentImage. stepHotspot nhận bước là 1 hoặc -1, tìm vị trí của activeIndex trong danh sách đó, cộng bước rồi cộng thêm độ dài và lấy modulo để quay vòng an toàn kể cả khi đang ở điểm đầu hoặc điểm cuối. Sau đó gọi openHotspot với chỉ số mới. Lý do chỉ duyệt trong cùng ảnh: khi khách đang xem một góc chụp, việc nhảy sang góc khác sẽ làm ảnh lớn đổi đột ngột và mất ngữ cảnh họ đang xem, trong khi thanh điều hướng hiển thị dạng vị trí hiện tại trên tổng số điểm của ảnh đó nên phải khớp. Phím mũi tên trái phải trong pageKeyDown cũng gọi stepHotspot nên hành vi bàn phím đồng nhất với nút bấm. Các phương án còn lại duyệt sai phạm vi hoặc nhảy ảnh, không đúng thiết kế.",
  "topic": "feat"
 },
 {
  "id": "bv17-a07",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Một sản phẩm có thể xuất hiện ở nhiều góc chụp của cùng một phòng, ví dụ cái bàn xuất hiện ở cả bốn ảnh. Vậy danh sách sản phẩm hotspot bên dưới và nhãn Điểm n trên thẻ được xử lý thế nào để không bị trùng?",
  "options": [
   "hotspotProductIds là danh sách đã loại trùng qua getHotspotProductIds, mỗi sản phẩm chỉ có một thẻ; nhãn Điểm n trỏ tới lần gắn đầu tiên của sản phẩm đó trong mảng hotspots",
   "Mỗi lần sản phẩm xuất hiện ở một góc là một thẻ riêng, nên một cái bàn có bốn ảnh sẽ có bốn thẻ giống nhau",
   "Chỉ hiện thẻ cho sản phẩm xuất hiện ở ảnh đầu tiên, các ảnh còn lại bị bỏ qua hoàn toàn",
   "Gộp tất cả sản phẩm của mọi góc thành một thẻ duy nhất đại diện cho cả phòng"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong initPage, sau khi lấy hotspots thì gọi getHotspotProductIds(hotspots) để tạo mảng các product_id không trùng. showHotspotProducts duyệt mảng này, với mỗi sản phẩm tìm vị trí xuất hiện đầu tiên bằng vòng lặp while tăng viTriDau cho tới khi hotspots[viTriDau].product_id khớp, rồi tạo thẻ qua createRoomProductCard với tham số soDiem là viTriDau đó. Nhãn Điểm n trên ảnh thẻ khi bấm sẽ gọi showOnImage(viTriDau), cuộn lên khung ảnh và mở đúng popup của lần gắn đầu tiên, openHotspot tự chuyển sang đúng góc chụp chứa điểm đó. Cách này tránh lặp thẻ, giữ danh sách gọn, đồng thời vẫn cho khách xem vị trí đại diện của món trên ảnh. Các phương án còn lại gây trùng thẻ hoặc bỏ sót dữ liệu, không đúng code nhóm viết.",
  "topic": "feat"
 },
 {
  "id": "bv17-a08",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Phần Thêm trọn bộ phòng hoạt động thế nào? Em nói rõ nút Thêm cả n món vào giỏ xử lý ra sao khi có món hết hàng, và thông báo cho khách thế nào.",
  "options": [
   "addAllToCart duyệt hotspotProductIds, bỏ qua món hết hàng, gọi putProductInCart cho từng món còn hàng, đếm số thêm được và số lỗi; nếu thêm được ít nhất một món thì hiện toast kèm số món đã thêm và ghi chú số món đã đủ số lượng, nếu không thêm được món nào thì alert danh sách lỗi",
   "addAllToCart thêm tất cả mọi món kể cả hết hàng, món nào lỗi thì bỏ qua im lặng không báo gì",
   "addAllToCart chỉ thêm được khi tất cả các món đều còn hàng, chỉ cần một món hết hàng là chặn toàn bộ và báo lỗi",
   "addAllToCart thêm từng món một và dừng ngay ở món lỗi đầu tiên, các món sau không được thêm"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. showTotals đếm số món còn hàng trong hotspotProductIds, cập nhật tổng tiền qua getRoomTotal và formatVND, đổi nhãn nút thành Thêm cả n món vào giỏ, khoá nút nếu không còn món nào. Khi bấm, addAllToCart kiểm tra đăng nhập qua requireLogin, duyệt từng sản phẩm, bỏ qua món có stock_quantity nhỏ hơn hoặc bằng 0, gọi putProductInCart là addToCart với số lượng 1, đếm soThem khi trả về chuỗi rỗng và gom cacLoi khi trả về câu lỗi. Nếu soThem bằng 0 thì alert toàn bộ lỗi, ngược lại hiện toast xanh báo đã thêm bao nhiêu món của phòng kèm link xem giỏ hàng, và nếu có lỗi thì ghi chú thêm số món đã đủ số lượng. Cách này cho khách mua trọn bộ kể cả khi vài món hết hàng, không chặn oan. Các phương án còn lại hoặc thêm cả món hết hàng, hoặc chặn toàn bộ, hoặc dừng giữa chừng, đều sai thiết kế.",
  "topic": "feat"
 },
 {
  "id": "bv17-a09",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Khi khách chưa đăng nhập mà bấm Thêm vào giỏ hoặc Thêm trọn bộ trên trang chi tiết phòng, hệ thống xử lý thế nào? Em giải thích luồng và lý do nhóm chọn cách đó.",
  "options": [
   "Cả addOneToCart và addAllToCart đều gọi requireLogin trước, nếu chưa đăng nhập thì hàm trả về false và dừng ngay, requireLogin điều hướng khách sang trang đăng nhập kèm đường dẫn quay lại, nhóm chọn cách này để giỏ hàng gắn với tài khoản",
   "Vẫn thêm vào giỏ bình thường vì giỏ hàng lưu localStorage, chỉ khi bấm thanh toán mới bắt đăng nhập",
   "Hiện thông báo lỗi ngay trong popup và yêu cầu khách tự bấm vào nút đăng nhập ở header",
   "Tự động tạo một tài khoản khách tạm thời rồi thêm vào giỏ của tài khoản đó"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong room-detail.js, cả addOneToCart và addAllToCart đều mở đầu bằng if(requireLogin() == false) return;. Hàm requireLogin nằm trong lớp dịch vụ dùng chung, kiểm tra trạng thái đăng nhập hiện tại, nếu chưa đăng nhập thì chuyển hướng sang login.html kèm tham số quay lại trang đang xem để sau khi đăng nhập khách về đúng chỗ. Nhóm chọn cách này vì giỏ hàng và đơn hàng gắn với tài khoản trong users.json, đơn hàng hiển thị ở trang orders theo từng người dùng, nếu cho thêm giỏ khi chưa đăng nhập thì khi đăng nhập sẽ phải gộp giỏ phức tạp và dễ lẫn dữ liệu giữa các tài khoản trên cùng máy. Đây cũng là luồng ngoại lệ UC3.3 A3 nhóm đã đặc tả. Các phương án còn lại hoặc bỏ qua kiểm tra đăng nhập, hoặc chỉ báo lỗi thụ động, hoặc tạo tài khoản ngầm, đều không đúng cách nhóm triển khai.",
  "topic": "feat"
 },
 {
  "id": "bv17-a10",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Phần Complete Your Room gợi ý thêm đồ để hoàn thiện phòng. Em trình bày thuật toán gợi ý trong showSuggestions: lọc ứng viên thế nào, ưu tiên ra sao, tối đa bao nhiêu món?",
  "options": [
   "Lọc sản phẩm đang bán, không phải đồ cũ, còn hàng, chưa có trong phòng, cùng phong cách với phòng; ưu tiên danh mục phòng chưa có, sau đó danh mục mới, cuối cùng bổ sung cùng danh mục, tối đa 4 món",
   "Lấy ngẫu nhiên 4 sản phẩm bất kỳ trong toàn bộ products.json, không lọc gì cả để đa dạng gợi ý",
   "Lấy 4 sản phẩm có giá cao nhất cùng phong cách để tăng giá trị đơn hàng",
   "Lấy các sản phẩm cùng danh mục với món đắt nhất trong phòng, không quan tâm phong cách"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. showSuggestions lấy style của phòng, lấy danh sách product_ids trong phòng và danh mục đã có. Vòng lặp duyệt toàn bộ products, bỏ qua sản phẩm is_active bằng false, product_type là USED, stock_quantity nhỏ hơn hoặc bằng 0, sản phẩm đã có trong phòng, và sản phẩm không cùng phong cách với phòng (so style_id hoặc mảng style_ids). Sau đó chạy hai lượt: lượt một chọn các sản phẩm thuộc danh mục mà phòng chưa có, lượt hai chọn danh mục mới chưa được chọn, mỗi danh mục chỉ lấy một món, dừng khi đủ 4. Nếu vẫn thiếu thì vòng lặp cuối bổ sung các ứng viên còn lại. Giao diện hiện ghi chú giải thích lý do gợi ý theo phong cách. Cách này đảm bảo gợi ý hợp phong cách, đa dạng danh mục và bù đúng chỗ phòng còn thiếu. Các phương án còn lại hoặc ngẫu nhiên, hoặc chỉ theo giá, hoặc bỏ qua phong cách, đều không đúng code.",
  "topic": "feat"
 },
 {
  "id": "bv17-a11",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Trang chi tiết phòng còn có mục Phối thêm cùng bộ sưu tập và mục Phòng tương tự. Em phân biệt hai mục này: dữ liệu lấy từ đâu, điều kiện lọc khác nhau thế nào?",
  "options": [
   "Phối thêm là các sản phẩm thuộc phòng nhưng chưa được gắn hotspot, lấy từ getRoomProducts trừ đi danh sách đã gắn; Phòng tương tự là các phòng khác cùng style_id, lấy từ bảng rooms và hiển thị tối đa 3 phòng",
   "Cả hai mục đều là sản phẩm gợi ý cùng phong cách, khác nhau chỉ ở số lượng hiển thị",
   "Phối thêm là sản phẩm bán chạy toàn hệ thống, Phòng tương tự là phòng có giá trị đơn hàng gần nhất",
   "Phối thêm là đồ cũ tuyển chọn, Phòng tương tự là phòng do admin mới tạo gần đây"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. showOtherProducts lấy toàn bộ sản phẩm của phòng qua getRoomProducts, sau đó loại các product_id đã có trong mảng hotspots để ra otherProducts, tức những món thuộc phòng nhưng chưa được gắn chấm. Nếu phòng chưa có hotspot nào thì mục này trở thành danh sách chính với tiêu đề Sản phẩm trong không gian, ngược lại tiêu đề là Phối thêm cùng bộ sưu tập. Danh sách hiển thị 8 món trước, nút Xem thêm hiện số món còn lại và bấm vào thì showMoreOther mở hết. showRelatedRooms lấy bảng rooms, sắp xếp qua sortRoomsForDisplay, duyệt tìm phòng có style_id bằng phòng hiện tại và id khác phòng hiện tại, dừng khi đủ 3, dùng createRoomCard để hiện. Nếu không có phòng nào thì ẩn cả mục. Các phương án còn lại lẫn lộn hai khái niệm hoặc lấy nguồn dữ liệu sai.",
  "topic": "feat"
 },
 {
  "id": "bv17-a12",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Tính năng xem 3D trong popup hotspot hoạt động thế nào? Em nói rõ điều kiện hiện nút 3D, thư viện dùng, và cách xử lý khi mô hình không tải được.",
  "options": [
   "Nút 3D chỉ hiện khi sản phẩm có model_3d_url; openViewer tạo thẻ model-viewer với src là file glTF, bật camera-controls, auto-rotate, ar; nếu lỗi tải hoặc sau 8 giây thư viện chưa sẵn sàng thì showViewerError hiện ảnh thật và nút sang trang chi tiết",
   "Nút 3D luôn hiện cho mọi sản phẩm, nếu chưa có mô hình thì tự sinh mô hình từ ảnh 2D bằng AI",
   "Nút 3D mở một iframe nhúng sang trang web khác của đối tác để xem mô hình",
   "Nút 3D tải toàn bộ file glTF về máy khách rồi mở bằng ứng dụng xem 3D cài sẵn trên máy"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong openHotspot, dòng render nút 3D được bọc trong điều kiện if(sp.model_3d_url != null), đúng luồng ngoại lệ UC3.3 A1 là không có mô hình thì không hiện nút. openViewer kiểm tra lại sản phẩm và model_3d_url, đặt tiêu đề, xoá vùng xem, tạo phần tử model-viewer với các thuộc tính src, alt, camera-controls, auto-rotate, shadow-intensity, environment-image neutral, ar. Gắn sự kiện load để ẩn dòng đang tải, sự kiện error gọi showViewerError. Đặt thêm setTimeout 8 giây, nếu vẫn chưa có custom element model-viewer thì coi như mất mạng và gọi showViewerError. Hàm này thay vùng xem bằng ảnh thật của sản phẩm kèm thông báo không tải được mô hình 3D và nút sang product-detail. closeViewer dọn sạch vùng xem và thoát fullscreen nếu có. Các phương án còn lại sai về điều kiện, thư viện hoặc cách xử lý lỗi.",
  "topic": "feat"
 },
 {
  "id": "bv17-a13",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Trang Đồ cũ tuyển chọn (marketplace) lọc sản phẩm thế nào để chỉ lấy đồ cũ, và phần lọc Tình trạng đồ cũ khác gì với khung lọc dùng chung catalog-filter.js?",
  "options": [
   "getUsedProducts duyệt bảng products, chỉ giữ sản phẩm có product_type bằng USED và is_active khác false; phần Tình trạng là bộ lọc riêng của trang, thêm chips Like New, Good, Fair và lọc thêm theo condition_grade sau khi đã qua khung lọc chung",
   "getUsedProducts lấy tất cả sản phẩm có original_price lớn hơn price, không phân biệt product_type; phần Tình trạng chỉ là nhãn trang trí không lọc thật",
   "getUsedProducts lấy sản phẩm có id bắt đầu bằng used-, còn phần Tình trạng lọc theo giá",
   "getUsedProducts lấy sản phẩm do admin đánh dấu thủ công trong file riêng; phần Tình trạng lọc theo số lượng tồn kho"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. getUsedProducts duyệt getTable của products, điều kiện là product_type bằng chuỗi USED và is_active khác false, đẩy vào mảng usedProducts. Trang marketplace dùng chung khung lọc catalog-filter.js qua renderFilterPanel với các tiêu chí giá, danh mục, chất liệu, màu, thương hiệu, còn hàng, tìm kiếm, sắp xếp. Phần riêng của trang là hàm taoHtmlTinhTrang sinh ra nhóm chips Tình trạng đồ cũ với ba mức Like New trên 95 phần trăm, Good 85 đến 95 phần trăm, Fair trên 70 phần trăm. Khi khách chọn, setConditionFilter cập nhật draftCondition, onFilterChange gán vào currentCondition rồi renderMarketplace lọc tiếp danh sách đã qua khung lọc chung theo condition_grade. Nhãn tình trạng cũng được đưa vào renderActiveFilterTags và ghi lên URL qua history.replaceState để tải lại vẫn giữ. Các phương án còn lại nhận diện đồ cũ sai hoặc mô tả sai chức năng bộ lọc tình trạng.",
  "topic": "search"
 },
 {
  "id": "bv17-a14",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Vì sao trang marketplace và trang products dùng chung catalog-filter.js mà vẫn có phần lọc riêng? Em giải thích cơ chế các hàm hook resetPageFilters và onFilterChange để hai bên phối hợp.",
  "options": [
   "Khung lọc chung lo phần tiêu chí phổ biến và giao diện, trang gọi renderFilterPanel truyền thêm HTML riêng; khi khách đổi lựa chọn khung gọi onFilterChange để trang tự cập nhật currentCondition và render lại, khi bấm Đặt lại khung gọi resetPageFilters để trang xoá bộ lọc riêng",
   "Hai trang dùng chung file nhưng mỗi trang phải tự viết lại toàn bộ logic lọc, file chung chỉ chứa CSS",
   "Khung lọc chung tự động phát hiện trang nào đang chạy rồi chèn phần lọc riêng vào, trang không cần khai báo gì",
   "Trang marketplace không dùng catalog-filter.js mà viết lại toàn bộ bộ lọc riêng, chỉ mượn vài hàm tiện ích"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. catalog-filter.js là component dùng chung, cung cấp renderFilterPanel(nơi gắn, danh sách sản phẩm, html bổ sung), readFilterParams, setFilterState, getAppliedFilterState, filterProductList, sortProductList, renderFilterPagination, renderActiveFilterTags, filterStateToQuery. Trang marketplace gọi renderFilterPanel với tham số thứ ba là taoHtmlTinhTrang để chèn nhóm chips tình trạng lên đầu khung. Khi khách đổi bất kỳ lựa chọn nào, khung lọc gọi hàm onFilterChange do trang cung cấp, trang gán currentCondition bằng draftCondition, gọi commitFilterState, đặt lại trang 1 và renderMarketplace. Khi khách bấm Đặt lại, khung gọi resetPageFilters, trang xoá currentCondition và draftCondition, đưa sắp xếp về newest, cập nhật chips. Cách này tránh lặp code cho các tiêu chí giống nhau mà vẫn cho phép mỗi trang có tiêu chí đặc thù. Các phương án còn lại hiểu sai vai trò component hoặc phủ nhận việc dùng chung.",
  "topic": "code"
 },
 {
  "id": "bv17-a15",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Trang chi tiết phòng ghi bộ lọc và trạng thái lên URL. Em giải thích vì sao nhóm em dùng history.replaceState thay vì pushState, và lợi ích của việc đồng bộ URL trong các trang danh sách như marketplace.",
  "options": [
   "Dùng replaceState để mỗi lần đổi bộ lọc không tạo thêm một mục lịch sử, khách bấm nút Back của trình duyệt sẽ về trang trước chứ không phải lùi từng bước lọc; đồng bộ URL giúp tải lại trang, gửi link hay bookmark vẫn giữ đúng bộ lọc và trang hiện tại",
   "Dùng replaceState vì pushState không hỗ trợ tham số query string, chỉ replaceState mới ghi được tham số lên địa chỉ",
   "Dùng replaceState để tránh trình duyệt hỏi xác nhận khi rời trang, còn lợi ích URL chỉ để đẹp mắt",
   "Dùng replaceState vì pushState làm trang tải lại toàn bộ, còn replaceState thì không tải lại"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong renderMarketplace, sau khi lọc và phân trang, code gom các tham số phụ như condition và page, gọi filterStateToQuery để dựng chuỗi query, rồi history.replaceState(null, chuỗi rỗng, địa chỉ marketplace.html kèm query). Nếu dùng pushState thì mỗi thao tác lọc, mỗi lần đổi trang sẽ đẩy thêm một mục vào lịch sử, khách bấm Back nhiều lần mới thoát khỏi trang, trải nghiệm rối. replaceState chỉ thay địa chỉ hiện tại, không thêm mục mới, nên Back đưa khách về trang trước đúng nghĩa. Đồng bộ URL đem lại ba lợi ích: tải lại trang vẫn giữ bộ lọc, sao chép địa chỉ gửi cho người khác thì họ thấy đúng kết quả, bookmark cũng lưu được trạng thái. Đây cũng là cách catalog-filter.js và room-detail.js đồng bộ tham số id, style, sp. Các phương án còn lại giải thích sai bản chất hai hàm lịch sử.",
  "topic": "search"
 },
 {
  "id": "bv17-a16",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Trang chi tiết phòng hỗ trợ tham số sp trên URL để mở sẵn popup sản phẩm. Em mô tả luồng khi khách bấm một món ở trang chủ và được đưa sang room-detail với tham số sp, và vì sao cần cuộn tới khung ảnh.",
  "options": [
   "initPage đọc getParam sp, duyệt mảng hotspots tìm bản ghi có product_id khớp, gọi openHotspot với chỉ số đó rồi scrollIntoView khung stage vào giữa màn hình; openHotspot tự chuyển sang đúng góc chụp chứa điểm nên khách thấy ngay popup",
   "initPage bỏ qua tham số sp, khách phải tự bấm vào chấm hotspot tương ứng trên ảnh",
   "initPage mở thẳng trang product-detail của sản phẩm đó thay vì ở lại room-detail",
   "initPage chỉ tô đậm chấm hotspot tương ứng nhưng không mở popup, chờ khách bấm thêm một lần nữa"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Cuối initPage, code lấy var sp = getParam('sp'), duyệt vòng lặp qua hotspots, nếu hotspots[i].product_id bằng sp thì gọi openHotspot(i) và scrollIntoView khung stage với block center. openHotspot gọi goToHotspotImage để chuyển ảnh lớn sang đúng góc chụp chứa hotspot nếu khách đang xem góc khác, sau đó đặt activeIndex, tô sáng chấm, dựng HTML popup và gọi placePopup. Nhờ vậy khách đến từ trang chủ bằng link có sp sẽ thấy ngay sản phẩm mình quan tâm trong bối cảnh phòng, không phải tự tìm chấm. Cuộn tới khung ảnh cần thiết vì trang chi tiết phòng dài, phần thông tin phòng và breadcrumb ở trên, nếu không cuộn thì popup mở ở vị trí ngoài màn hình, khách tưởng không có gì xảy ra. Các phương án còn lại bỏ qua tham số hoặc chuyển trang sai, không đúng luồng nhóm làm.",
  "topic": "feat"
 },
 {
  "id": "bv17-a17",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống một phòng mẫu có hotspot nhưng toàn bộ sản phẩm gắn hotspot đều hết hàng, giao diện trang chi tiết phòng hiển thị thế nào, nút thêm trọn bộ ra sao, và khách vẫn mua được gì?",
  "options": [
   "showTotals đếm số món còn hàng bằng 0, tổng tiền vẫn hiện nhưng ghi chú 0 trên n món còn hàng, nhãn nút đổi thành Thêm cả 0 món vào giỏ và nút bị disabled ở cả hai vị trí; khách vẫn xem được popup từng món, thấy nhãn hết hàng và nút thêm vào giỏ bị khoá, vẫn xem được mục Phối thêm và Complete Your Room để mua món khác",
   "Hệ thống ẩn toàn bộ phần hotspot và cả nút thêm trọn bộ, chỉ còn danh sách sản phẩm khác",
   "Hệ thống vẫn cho bấm thêm trọn bộ, các món hết hàng sẽ tự động đặt trước và giao khi có hàng",
   "Hệ thống chuyển hướng khách sang trang marketplace vì phòng này coi như không bán được nữa"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. showTotals duyệt hotspotProductIds, đếm soConHang bằng cách kiểm tra stock_quantity lớn hơn 0. Nếu hotspotProductIds không rỗng thì vẫn hiện roomSummary và bundleBar, tổng tiền qua getRoomTotal vẫn tính theo giá sản phẩm, ghi chú hiển thị soConHang trên tổng số món, nhãn nút đổi thành Thêm cả 0 món vào giỏ, biến khoa bằng soConHang bằng 0 nên btnAddAll và btnAddAllTop đều bị disabled. Trong popup, từng sản phẩm vẫn mở được, nhãn hiện Hết hàng và nút thêm vào giỏ render dạng disabled. Các mục khác vẫn hoạt động: Phối thêm cùng bộ sưu tập lấy sản phẩm thuộc phòng chưa gắn hotspot, Complete Your Room gợi ý món cùng phong cách còn hàng, Phòng tương tự dẫn sang phòng khác. Như vậy khách không bị chặn hoàn toàn, vẫn có đường mua. Các phương án còn lại ẩn hết thông tin, cho đặt trước trái với dữ liệu tĩnh, hoặc đá khách đi, đều sai.",
  "topic": "feat"
 },
 {
  "id": "bv17-a18",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống khách mở popup hotspot, bấm nút 3D nhưng mạng yếu khiến thư viện model-viewer không tải được, em mô tả chính xác hệ thống phát hiện và xử lý ra sao, và vì sao cần cả sự kiện error lẫn setTimeout.",
  "options": [
   "openViewer gắn sự kiện error cho model-viewer gọi showViewerError, đồng thời đặt setTimeout 8 giây kiểm tra customElements.get model-viewer có tồn tại không; nếu chưa có thì cũng gọi showViewerError; cần cả hai vì error chỉ bắt lỗi tải file mô hình còn setTimeout bắt trường hợp thư viện không tải được nên không có phần tử để phát sự kiện",
   "Hệ thống chỉ dựa vào sự kiện error của model-viewer, nếu thư viện không tải được thì trang treo ở dòng đang tải mô hình 3D",
   "Hệ thống chỉ dùng setTimeout 8 giây, không cần sự kiện error vì lỗi file mô hình cũng làm hết 8 giây",
   "Hệ thống tự động chuyển sang trang product-detail ngay khi mạng yếu, không cần thông báo gì"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. openViewer tạo phần tử model-viewer, gắn load để ẩn dòng đang tải, gắn error gọi showViewerError. Sau đó đặt setTimeout 8000 mili giây, bên trong kiểm tra viewerProduct vẫn là sản phẩm đó và window.customElements.get model-viewer trả về null, tức thư viện chưa được nạp, thì gọi showViewerError. Cần cả hai vì hai loại lỗi khác nhau: nếu thư viện đã nạp nhưng file glTF hỏng hoặc 404 thì phần tử phát sự kiện error, còn nếu mạng yếu tới mức không tải được script định nghĩa thẻ model-viewer thì không có phần tử nào để phát error, chỉ có thể phát hiện bằng cách kiểm tra custom element sau một khoảng chờ. showViewerError thay vùng xem bằng ảnh thật của sản phẩm, thông báo không tải được mô hình 3D và nút Xem ảnh sản phẩm dẫn sang product-detail, đúng luồng ngoại lệ UC3.4 A1. Các phương án còn lại bỏ sót một trong hai cơ chế hoặc xử lý quá tay.",
  "topic": "feat"
 },
 {
  "id": "bv17-a19",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống mở trang chi tiết phòng trên điện thoại, bấm một chấm hotspot ở gần mép phải ảnh, em giải thích popup sẽ hiện ở đâu, vì sao, và nếu xoay ngang màn hình thì chuyện gì xảy ra với popup đang mở.",
  "options": [
   "Trên màn hình nhỏ hơn hoặc bằng 768 pixel, placePopup xoá left top để CSS đưa popup xuống đáy khung ảnh, tránh tràn; khi xoay ngang, sự kiện resize gọi lại placePopup nếu popup đang mở, lúc này nếu bề rộng vượt 768 thì popup chuyển sang đặt cạnh chấm theo thuật toán kẹp trong khung",
   "Popup luôn hiện ngay tại vị trí chấm, trên điện thoại cũng vậy, nên nếu chấm gần mép phải thì popup bị cắt mất một nửa",
   "Popup luôn hiện ở góc trên bên trái khung ảnh trên mọi thiết bị, xoay màn hình không ảnh hưởng gì",
   "Trên điện thoại popup mở thành trang mới thay thế trang chi tiết phòng, xoay màn hình thì trang mới tự đóng"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. placePopup mở đầu bằng kiểm tra window.innerWidth nhỏ hơn hoặc bằng 768, nếu đúng thì gán popup.style.left và popup.style.top bằng chuỗi rỗng rồi return, để CSS của lớp rd-popup trên màn hình nhỏ đưa popup thành dạng trượt từ đáy khung ảnh lên, không phụ thuộc vị trí chấm nên không bao giờ tràn mép. Trên màn hình lớn hơn, hàm tính x, y của chấm, đặt popup lệch 32 pixel sang phải, nếu chấm ở nửa phải hoặc đặt phải sẽ tràn thì chuyển sang trái, sau đó kẹp trai và tren trong khung với lề 12 pixel. Trong initPage có window.addEventListener resize, nếu activeIndex lớn hơn hoặc bằng 0 tức popup đang mở thì gọi placePopup, nên khi xoay ngang và bề rộng vượt 768, popup tự chuyển từ kiểu đáy sang kiểu cạnh chấm và ngược lại khi xoay dọc. Các phương án còn lại mô tả sai hành vi responsive hoặc bịa ra luồng chuyển trang không có trong code.",
  "topic": "uiux"
 },
 {
  "id": "bv17-a20",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Nếu muốn thêm một tính năng mới là cho phép khách tự gắn hotspot lên ảnh phòng yêu thích của mình rồi lưu vào wishlist, thì với kiến trúc hiện tại của RoomCraft nhóm em sẽ phải sửa những phần nào, và điểm yếu nào của kiến trúc sẽ lộ ra?",
  "options": [
   "Phải thêm giao diện cho khách đặt chấm trên ảnh, lưu toạ độ phần trăm vào một kho dữ liệu mới tương tự room_hotspots.json nhưng gắn với tài khoản, mở rộng wishlist để lưu cả ảnh và danh sách hotspot; điểm yếu lộ ra là không có backend thật, dữ liệu lưu client hoặc file JSON tĩnh nên không đồng bộ giữa các máy và không bảo vệ được dữ liệu người dùng",
   "Chỉ cần thêm một nút trên giao diện trang room-detail, không phải sửa dữ liệu hay wishlist vì mọi thứ đã có sẵn",
   "Phải viết lại toàn bộ frontend bằng React vì HTML CSS JS thuần không xử lý được thao tác kéo thả trên ảnh",
   "Chỉ cần thêm một trường vào products.json là xong, không ảnh hưởng tới wishlist hay tài khoản"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Với kiến trúc hiện tại, để khách tự gắn hotspot cần bốn phần: giao diện cho khách bấm hoặc kéo trên ảnh để đặt chấm, tính toạ độ tương đối theo phần trăm giống cách room_hotspots.json đang lưu position_x và position_y, một kho dữ liệu mới cho hotspot do người dùng tạo gắn với user_id, và mở rộng wishlist để lưu cả ảnh phòng lẫn danh sách hotspot kèm product_id. Điểm yếu lộ ra chính là điểm nhóm đã thừa nhận: không có backend thật, dữ liệu người dùng nếu lưu localStorage thì mất khi đổi máy hoặc xoá trình duyệt, nếu lưu file JSON tĩnh thì mọi người dùng chung một file và ai cũng sửa được, không có xác thực phía server. Muốn làm nghiêm túc phải có backend lưu trữ và xác thực. Các phương án còn lại đánh giá thấp công việc, đòi viết lại công nghệ không cần thiết, hoặc chỉ sửa products.json là không đủ.",
  "topic": "kt"
 },
 {
  "id": "bv17-a21",
  "chapter": 12,
  "difficulty": 2,
  "type": "multiple",
  "question": "Trong cụm tính năng Shop the Room và Complete Your Room, những cơ chế nào sau đây nhóm em thực sự đã cài đặt trong room-detail.js? Em chọn các ý đúng. (chọn nhiều đáp án)",
  "options": [
   "Hotspot gắn theo phần trăm toạ độ trên từng góc chụp, ẩn chấm không thuộc ảnh đang xem",
   "Popup sản phẩm có nút thêm vào giỏ, nút 3D chỉ hiện khi có model_3d_url, thanh chuyển điểm trước sau trong cùng ảnh",
   "Gợi ý Complete Your Room lọc cùng phong cách, còn hàng, chưa có trong phòng, ưu tiên danh mục phòng chưa có, tối đa 4 món",
   "Tự động nhận diện đồ vật trong ảnh phòng bằng mô hình AI huấn luyện riêng của nhóm"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ba ý đầu đúng, ý cuối sai. Hotspot theo phần trăm và ẩn theo ảnh đang xem là cách showStage và updateStageForImage làm việc, dữ liệu lấy từ room_hotspots.json với position_x, position_y. Popup sản phẩm trong openHotspot hiện nút thêm vào giỏ khi còn hàng, nút 3D chỉ render khi model_3d_url khác null, thanh điều hướng gọi stepHotspot giới hạn trong cùng ảnh qua getImageHotspotIndexes. Gợi ý Complete Your Room trong showSuggestions lọc is_active, loại USED, loại hết hàng, loại món đã có trong phòng, chỉ giữ cùng phong cách, chạy hai lượt ưu tiên danh mục phòng chưa có rồi bổ sung, tối đa 4 món. Ý cuối sai vì nhóm không huấn luyện mô hình nhận diện ảnh nào, hotspot được gắn thủ công và lưu toạ độ trong file JSON, không có AI nhận diện đồ vật trong ảnh phòng.",
  "topic": "feat"
 },
 {
  "id": "bv17-a22",
  "chapter": 12,
  "difficulty": 3,
  "type": "multiple",
  "question": "Với tình huống một khách báo rằng bấm Thêm cả n món vào giỏ nhưng chỉ có vài món vào giỏ, số còn lại không thấy đâu, em hãy chọn các nguyên nhân hợp lý theo đúng code addAllToCart và cách nhóm xử lý. (chọn nhiều đáp án)",
  "options": [
   "Một số món đã hết hàng nên bị bỏ qua ngay từ đầu vòng lặp, không gọi putProductInCart",
   "Một số món đã đạt số lượng tối đa trong giỏ nên addToCart trả về câu lỗi và được gom vào cacLoi, toast chỉ ghi chú số món đã đủ số lượng",
   "Khách chưa đăng nhập thì requireLogin chặn toàn bộ, không món nào được thêm và khách bị đưa sang trang đăng nhập",
   "Hệ thống tự động gộp các món cùng danh mục thành một món để giảm số dòng trong giỏ"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ba ý đầu đúng, ý cuối sai. addAllToCart duyệt hotspotProductIds, với mỗi sản phẩm kiểm tra stock_quantity, nếu nhỏ hơn hoặc bằng 0 thì continue, đây là nguyên nhân phổ biến khiến vài món không vào giỏ dù khách thấy chúng trên ảnh. Với món còn hàng, hàm gọi putProductInCart, nếu trả về chuỗi lỗi thì đẩy vào cacLoi, lỗi hay gặp là đã đạt số lượng tối đa trong giỏ do addToCart kiểm tra tồn kho và giới hạn. Sau vòng lặp, nếu soThem bằng 0 thì alert toàn bộ lỗi, ngược lại toast báo đã thêm bao nhiêu món kèm ghi chú số món đã đủ số lượng, nên khách có thể không để ý phần ghi chú. Trường hợp chưa đăng nhập thì requireLogin chặn ngay từ đầu, không món nào được thêm. Ý cuối sai vì giỏ hàng không tự gộp món theo danh mục, mỗi sản phẩm là một dòng riêng trong cart.",
  "topic": "feat"
 },
 {
  "id": "bv17-a23",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Trang Về RoomCraft (about) đóng vai trò gì trong đồ án, và nó liên quan thế nào tới câu chuyện thương hiệu mà nhóm em muốn kể qua các tính năng Shop the Room, Complete Your Room, Đồ cũ tuyển chọn?",
  "options": [
   "Trang about kể câu chuyện nhóm, sứ mệnh lấy không gian phòng làm trung tâm và giải thích triết lý thiết kế, tạo sự đồng bộ với các tính năng trải nghiệm phòng, hoàn thiện phòng và đồ cũ tuyển chọn để khách hiểu vì sao website được làm theo hướng đó",
   "Trang about chỉ là trang liên hệ gồm địa chỉ, số điện thoại, form gửi tin nhắn, không liên quan tới tính năng",
   "Trang about là nơi đăng điều khoản sử dụng và chính sách bảo mật, không có nội dung thương hiệu",
   "Trang about chỉ để đủ số trang theo yêu cầu môn học, nội dung sao chép từ mẫu có sẵn"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong đồ án RoomCraft, trang about nằm trong nhóm trang khách, được render header và footer chung, nội dung kể câu chuyện nhóm 7, lý do chọn đề tài nội thất theo không gian phòng, và giải thích cách website giúp khách đi từ khám phá phòng đến mua sắm. Nó gắn với các tính năng khác để tạo một câu chuyện thống nhất: Shop the Room cho khách thấy món đồ trong bối cảnh, Complete Your Room gợi ý hoàn thiện, Đồ cũ tuyển chọn thể hiện cam kết bền vững và tiết kiệm. Nhờ vậy khách hiểu triết lý thiết kế chứ không thấy các tính năng rời rạc. Các phương án còn lại hoặc thu hẹp about thành trang liên hệ, hoặc thành trang pháp lý, hoặc coi là trang đối phó, đều không đúng vai trò thực tế trong đồ án."
 },
 {
  "id": "bv17-a24",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Trong cụm tính năng tài khoản và wishlist, dữ liệu người dùng và danh sách yêu thích được lưu ở đâu, và việc phân quyền admin với khách dựa trên cơ sở nào?",
  "options": [
   "Người dùng lưu trong users.json với các trường tài khoản, vai trò lấy từ roles.json để phân biệt admin và khách; wishlist lưu phía client gắn với tài khoản đang đăng nhập, phục vụ trang wishlist và các nút yêu thích",
   "Người dùng lưu trong một database MySQL chạy trên server riêng, wishlist lưu trong bảng riêng của database đó",
   "Người dùng lưu trong file .env để bảo mật, wishlist lưu trong file room_hotspots.json",
   "Người dùng lưu trong localStorage của từng máy, không có file users.json, phân quyền admin dựa vào tên đăng nhập chứa chữ admin"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. RoomCraft không có database server cho frontend, dữ liệu tĩnh nằm trong data/json, trong đó users.json chứa tài khoản người dùng và roles.json định nghĩa vai trò admin và khách. Khi đăng nhập, hệ thống đối chiếu thông tin, lưu trạng thái phiên phía client, các trang admin kiểm tra vai trò để hiện giao diện quản trị. Wishlist gắn với tài khoản đang đăng nhập, hiển thị ở trang wishlist và các nút yêu thích trên thẻ sản phẩm. Nhóm cũng thẳng thắn thừa nhận điểm yếu: kiểm tra quyền admin hiện làm phía client, chỉ ẩn giao diện chứ không chặn thật ở server, nên nếu ai đó sửa mã nguồn hoặc gọi thẳng dữ liệu thì vượt được. Muốn chắc phải có backend xác thực. Các phương án còn lại bịa ra database, lưu sai chỗ, hoặc phân quyền theo tên đăng nhập, đều không đúng thực tế đồ án."
 },
 {
  "id": "bv17-a25",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Trên thẻ sản phẩm trong mục hotspot, khi rê chuột vào thẻ thì chấm tương ứng trên ảnh phòng sáng lên. Em giải thích cơ chế highlightHotspot và vì sao nó bỏ qua chấm đang mở popup.",
  "options": [
   "createRoomProductCard gắn sự kiện mouseenter và mouseleave gọi highlightHotspot với chỉ số điểm; hàm đổi className của nút thành hotspot glow khi bật và trở lại hotspot khi tắt, nhưng nếu chỉ số đó đang là activeIndex thì bỏ qua để không đè trạng thái active của popup đang mở",
   "Rê chuột vào thẻ sẽ tự động mở popup của sản phẩm đó, không cần bấm",
   "Rê chuột vào thẻ sẽ cuộn trang lên khung ảnh và mở popup, giống hệt hành vi bấm nhãn Điểm n",
   "Rê chuột vào thẻ sẽ tô sáng toàn bộ các chấm trên ảnh cùng lúc để khách thấy món đó xuất hiện ở nhiều góc"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong createRoomProductCard, khi soDiem khác null, code tạo nút nhãn Điểm n và gắn cho thẻ hai thuộc tính onmouseenter gọi highlightHotspot với true và onmouseleave gọi với false. highlightHotspot nhận viTri và bat, lấy phần tử hotspot-viTri, nếu null hoặc viTri bằng activeIndex thì return ngay, ngược lại gán className là hotspot glow khi bật và hotspot khi tắt. Việc bỏ qua activeIndex để tránh ghi đè trạng thái active của chấm đang mở popup, vì lớp active điều khiển hiển thị popup và trạng thái aria-expanded, nếu đổi sang glow thì mất dấu chấm đang chọn. Cơ chế này giúp khách liên kết thẻ sản phẩm với vị trí trên ảnh mà không cần bấm. Các phương án còn lại mô tả hành vi mở popup hoặc tô sáng hàng loạt, không đúng code.",
  "topic": "feat"
 },
 {
  "id": "bv17-a26",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống muốn kiểm tra xem một phòng mẫu có hotspot có toạ độ bị đặt sai, ví dụ chấm nằm ngoài vùng ảnh hoặc chấm của sản phẩm đã bị ẩn, với cách làm hiện tại của nhóm, lỗi nào hệ thống tự chặn được và lỗi nào vẫn lọt ra giao diện?",
  "options": [
   "Sản phẩm bị ẩn được lọc bỏ khi lấy hotspot nên không tạo chấm; toạ độ sai như âm hoặc lớn hơn 100 vẫn được đặt nguyên vào style left top nên chấm có thể nằm ngoài ảnh hoặc bị cắt, hệ thống không kiểm tra giá trị toạ độ",
   "Cả hai loại lỗi đều được hệ thống tự phát hiện và sửa, không cần kiểm tra thủ công",
   "Sản phẩm bị ẩn vẫn tạo chấm bình thường, còn toạ độ sai thì bị hệ thống kẹp về trong khoảng 0 đến 100",
   "Hệ thống không lọc sản phẩm ẩn cũng không kiểm tra toạ độ, mọi lỗi đều lọt ra giao diện"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong initPage, hotspots được lấy qua getRoomHotspots(room.id), hàm này đã loại các hotspot trỏ tới sản phẩm bị ẩn, nên sản phẩm ẩn không sinh ra chấm. Tuy nhiên showStage đặt thẳng nut.style.left bằng position_x cộng phần trăm và nut.style.top bằng position_y cộng phần trăm, không có bước kiểm tra giá trị nằm trong 0 đến 100 hay không. Nếu dữ liệu JSON có toạ độ âm hoặc lớn hơn 100, chấm sẽ nằm ngoài khung ảnh, có thể bị overflow hidden cắt mất hoặc đè lên vùng khác. Đây là điểm yếu về kiểm tra dữ liệu đầu vào, nhóm có thể khắc phục bằng cách viết script kiểm tra room_hotspots.json khi build, hoặc kẹp giá trị trong showStage. Các phương án còn lại phóng đại khả năng tự sửa lỗi hoặc phủ nhận việc lọc sản phẩm ẩn, không đúng code.",
  "topic": "data"
 },
 {
  "id": "bv17-a27",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Trong popup hotspot có nút Chi tiết dẫn sang product-detail. Em cho biết link đó được tạo thế nào và vì sao nhóm em dùng encodeURIComponent cho id sản phẩm.",
  "options": [
   "Link được ghép thành product-detail.html?id= cộng encodeURIComponent của sp.id, dùng encode để id có ký tự đặc biệt vẫn an toàn trên URL và không phá cấu trúc tham số",
   "Link được ghép thẳng chuỗi id không encode vì id sản phẩm luôn chỉ gồm chữ và số nên không cần",
   "Link dùng encodeURIComponent cho cả tên sản phẩm để hiển thị trên thanh địa chỉ cho đẹp",
   "Link không dùng tham số id mà lưu id vào localStorage rồi trang product-detail đọc ra"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong openHotspot, biến link được gán bằng chuỗi product-detail.html?id= cộng encodeURIComponent(sp.id). Id sản phẩm trong dữ liệu có dạng như product-bohemian-daukas-47-dining-table-01, tuy hiện tại chỉ gồm chữ, số và dấu gạch ngang nhưng dùng encodeURIComponent là thói quen an toàn, phòng khi sau này id có ký tự đặc biệt hoặc khoảng trắng, tránh làm hỏng query string và tránh lỗi khi trình duyệt tự mã hoá khác nhau. Link này dùng cho ảnh, tên sản phẩm và nút Chi tiết trong popup, đảm bảo mọi chỗ bấm đều sang đúng trang chi tiết. Các phương án còn lại bỏ encode, encode sai đối tượng, hoặc dùng localStorage thay query string, đều không đúng cách nhóm làm.",
  "topic": "code"
 },
 {
  "id": "bv17-a28",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Trang chi tiết phòng có hàm pageKeyDown xử lý bàn phím. Em mô tả các phím được hỗ trợ và thứ tự ưu tiên khi cả popup hotspot lẫn modal 3D đang mở.",
  "options": [
   "Phím Escape đóng modal 3D trước nếu đang mở, ngược lại đóng popup; phím mũi tên trái phải chỉ chuyển hotspot khi popup đang mở và modal 3D đang ẩn, tránh xung đột giữa hai lớp",
   "Phím Escape luôn đóng popup trước, sau đó mới tới modal 3D; mũi tên trái phải chuyển hotspot bất kể modal 3D có mở hay không",
   "Chỉ hỗ trợ phím Escape để đóng mọi thứ, không hỗ trợ phím mũi tên",
   "Phím mũi tên trái phải chuyển sang phòng khác, phím Escape tải lại trang"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. pageKeyDown kiểm tra e.key bằng Escape, nếu modal3d không có lớp hidden thì gọi closeViewer, ngược lại gọi closePopup, tức ưu tiên đóng lớp trên cùng là modal 3D. Với phím mũi tên, điều kiện là activeIndex lớn hơn hoặc bằng 0 và modal3d đang có lớp hidden, khi đó ArrowRight gọi stepHotspot với 1, ArrowLeft gọi với -1. Điều kiện modal ẩn để tránh việc khách đang xoay mô hình 3D mà bấm mũi tên lại nhảy hotspot phía sau, gây khó chịu. Hàm được gắn qua document.addEventListener keydown trong initPage. Cách này cho khách điều hướng bằng bàn phím tiện lợi và nhất quán với nút bấm trong popup. Các phương án còn lại đảo thứ tự ưu tiên hoặc bỏ hỗ trợ phím, không đúng code.",
  "topic": "code"
 },
 {
  "id": "bv17-a29",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Trong trang chi tiết phòng, mục Phòng tương tự hiển thị tối đa 3 phòng cùng phong cách. Em giải thích vì sao nhóm em chọn con số 3 và cách hàm showRelatedRooms đảm bảo không lặp phòng hiện tại, cũng như xử lý khi không có phòng nào.",
  "options": [
   "Chọn 3 để vừa một hàng thẻ trên lưới hiện tại, không chiếm quá nhiều chỗ so với nội dung chính; hàm duyệt danh sách phòng đã sắp xếp, bỏ qua phòng có id bằng phòng hiện tại và phòng khác style_id, dừng khi đủ 3, nếu không có thì ẩn cả mục",
   "Chọn 3 vì dữ liệu mỗi phong cách chỉ có đúng 3 phòng nên không cần lọc thêm",
   "Chọn 3 vì giới hạn cứng của trình duyệt khi hiển thị ảnh phòng, nhiều hơn sẽ lỗi",
   "Chọn 3 vì đó là số phòng tối đa admin được tạo trong mỗi phong cách"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. showRelatedRooms lấy style của phòng hiện tại, lấy bảng rooms qua getTable và sắp xếp qua sortRoomsForDisplay, sau đó duyệt với biến đếm dem, bỏ qua phòng có style_id khác hoặc id bằng room.id, mỗi phòng hợp lệ tạo thẻ qua createRoomCard và tăng dem, dừng khi dem đạt 3. Nếu dem bằng 0 thì gán lớp hidden cho relatedSection để ẩn cả mục, tránh khoảng trắng trống. Nếu có phòng thì cập nhật link relatedLink sang rooms.html với tham số style để khách xem toàn bộ phòng cùng phong cách. Con số 3 là lựa chọn thiết kế để vừa một hàng thẻ trên lưới hiện tại, cân đối với nội dung chính của trang, không phải giới hạn kỹ thuật. Các phương án còn lại bịa ra lý do về số lượng dữ liệu hoặc giới hạn trình duyệt, không đúng.",
  "topic": "feat"
 },
 {
  "id": "bv17-a30",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống muốn thêm một bộ lọc mới vào trang Đồ cũ tuyển chọn là lọc theo thương hiệu có sẵn trong khung lọc chung, nhưng vẫn giữ phần lọc Tình trạng đồ cũ hoạt động đúng khi kết hợp với bộ lọc mới, với kiến trúc hiện tại, nhóm em sẽ làm ở đâu và cần chú ý gì?",
  "options": [
   "Chỉ cần bật tiêu chí thương hiệu trong catalog-filter.js vì khung lọc chung đã hỗ trợ sẵn thương hiệu; phần Tình trạng vẫn lọc sau khi danh sách đã qua khung lọc chung trong renderMarketplace, nên chỉ cần đảm bảo currentCondition được giữ khi onFilterChange chạy và ghi vào URL qua extra",
   "Phải viết lại toàn bộ trang marketplace vì khung lọc chung không hỗ trợ thương hiệu, không thể thêm mà không phá phần Tình trạng",
   "Phải chuyển phần Tình trạng vào trong catalog-filter.js thì mới kết hợp được với thương hiệu, nếu không hai bộ lọc sẽ xung đột",
   "Chỉ cần thêm tham số brand vào URL, không phải sửa code vì khung lọc tự đọc mọi tham số có trên URL"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. catalog-filter.js đã hỗ trợ tiêu chí thương hiệu trong khung lọc chung, trang marketplace chỉ cần khai báo để hiện nhóm lọc này, không phải viết lại. Phần Tình trạng đồ cũ nằm ngoài khung lọc chung, được áp dụng trong renderMarketplace sau khi filterProductList đã lọc theo các tiêu chí chung, nên hai bộ lọc kết hợp tự nhiên theo kiểu giao. Điều cần chú ý là giữ nguyên currentCondition qua các lần onFilterChange, đảm bảo resetPageFilters xoá đúng cả hai, và khi dựng URL thì đưa condition vào mảng extra cùng page để history.replaceState ghi đủ tham số. Nhãn tình trạng cũng phải được đưa vào renderActiveFilterTags qua tham số nhanRieng. Các phương án còn lại phóng đại công việc, đòi chuyển phần lọc vào component chung không cần thiết, hoặc cho rằng chỉ cần thêm tham số URL là đủ, đều không đúng.",
  "topic": "search"
 },
 {
  "id": "bv17-a31",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Trong trang chi tiết phòng, biến otherShown dùng để làm gì và vì sao nhóm em giới hạn số món hiển thị ban đầu thay vì hiện hết danh sách Phối thêm cùng bộ sưu tập?",
  "options": [
   "otherShown là số món đang hiện, khởi tạo bằng 8, renderOtherProducts chỉ vẽ tối đa otherShown thẻ và nút Xem thêm hiện số món còn lại; giới hạn để trang gọn, tải nhanh và khách không bị ngợp khi phòng có nhiều món",
   "otherShown là số món tối đa được phép mua trong một lần, vượt quá sẽ bị chặn",
   "otherShown là số món đã hết hàng, dùng để ẩn khỏi danh sách",
   "otherShown là số điểm hotspot tối đa trên một ảnh, vượt quá sẽ không cho gắn thêm"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Biến toàn cục otherShown được khai báo bằng 8 ở đầu file. renderOtherProducts duyệt otherProducts với điều kiện i nhỏ hơn otherShown, tạo thẻ cho từng món. Sau đó tính conLai bằng độ dài otherProducts trừ otherShown, nếu lớn hơn 0 thì nút btnMore hiện chữ Xem thêm kèm số món còn lại và khung chứa nút hiện ra, ngược lại ẩn khung. Khi khách bấm, showMoreOther gán otherShown bằng độ dài otherProducts rồi render lại, hiện toàn bộ. Giới hạn 8 món giúp trang chi tiết phòng không quá dài, giảm số ảnh phải tải cùng lúc, và khách tập trung vào phần hotspot chính. Các phương án còn lại hiểu sai ý nghĩa biến, không đúng code.",
  "topic": "feat"
 },
 {
  "id": "bv17-a32",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Trong popup hotspot, khi sản phẩm đang giảm giá thì giá gốc hiển thị thế nào và điều kiện để hiện giá gốc là gì? Em giải thích cách nhóm em tránh hiện giá gốc vô nghĩa.",
  "options": [
   "Giá gốc chỉ hiện khi original_price khác null và lớn hơn price, hiển thị bằng thẻ price-old gạch ngang cạnh giá hiện tại; điều kiện so sánh lớn hơn để tránh trường hợp dữ liệu có original_price bằng hoặc nhỏ hơn price gây hiểu nhầm",
   "Giá gốc luôn hiện bất kể giá trị, kể cả khi bằng giá hiện tại",
   "Giá gốc chỉ hiện khi sản phẩm thuộc loại đồ cũ, sản phẩm mới không bao giờ có giá gốc",
   "Giá gốc được tính tự động bằng giá hiện tại nhân một hệ số giảm giá cố định của hệ thống"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong openHotspot, sau khi in giá hiện tại bằng formatVND(sp.price), code kiểm tra if(sp.original_price != null và Number(sp.original_price) lớn hơn Number(sp.price)) thì mới in thêm span price-old với formatVND(sp.original_price). Điều kiện kép này xử lý hai trường hợp dữ liệu bẩn: original_price bị null hoặc thiếu, và original_price nhỏ hơn hoặc bằng price do nhập liệu sai, nếu không kiểm tra thì popup sẽ hiện giá gốc thấp hơn giá bán, phản tác dụng. Cách này cũng đồng bộ với cách trang marketplace tính phần trăm giảm giá trong showMarketHero, chỉ tính khi original_price tồn tại. Các phương án còn lại hoặc luôn hiện, hoặc gắn với loại đồ cũ, hoặc tự bịa hệ số giảm giá, đều không đúng code.",
  "topic": "feat"
 },
 {
  "id": "bv17-a33",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống mở trang chi tiết phòng bằng link có cả id phòng và sp sản phẩm, nhưng id phòng bị sai, em mô tả hệ thống xử lý thế nào và vì sao nhóm em chọn cách xử lý đó thay vì chuyển hướng về trang danh sách phòng.",
  "options": [
   "initPage gọi findById cho rooms với id, nếu null thì hiện khối roomNotFound, đặt tiêu đề Không tìm thấy không gian và return sớm, không chạy các bước sau; nhóm chọn cách này để giữ URL khách đã mở, hiện thông báo rõ ràng và vẫn có header footer để khách đi tiếp",
   "Hệ thống tự động chuyển hướng về rooms.html ngay lập tức, không hiện thông báo gì",
   "Hệ thống hiện trang trắng vì không có phòng để render, khách phải tự bấm Back",
   "Hệ thống tự tạo một phòng mới với id đó để tránh lỗi, dùng dữ liệu mặc định"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong initPage, sau khi render header, footer, chatbot, code lấy room bằng findById với getParam id. Nếu room bằng null thì gán className empty cho phần tử roomNotFound, đặt document.title thành Không tìm thấy không gian - RoomCraft và return ngay, các bước lấy hotspot, hiện thông tin, hiện ảnh, hiện danh sách đều không chạy. Cách này giữ nguyên URL khách đã mở, hiện thông báo thân thiện thay vì trang trắng, và vì header footer đã render nên khách vẫn điều hướng được sang trang khác. Nếu tự động chuyển hướng về rooms.html thì khách có thể bối rối không hiểu vì sao bị đẩy đi, và mất luôn tham số sp nếu có. Các phương án còn lại hoặc chuyển hướng im lặng, hoặc để trang trắng, hoặc bịa dữ liệu, đều không đúng cách nhóm làm.",
  "topic": "feat"
 },
 {
  "id": "bv17-a34",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Trong trang chi tiết phòng, mỗi ảnh nhỏ (thumbnail) hiển thị thêm nhãn số điểm. Em giải thích nhãn đó lấy từ đâu và vì sao nó hữu ích cho khách khi phòng có nhiều góc chụp.",
  "options": [
   "showThumbs duyệt mảng room.images, với mỗi ảnh gọi countHotspotsOnImage để đếm số hotspot thuộc ảnh đó, nếu lớn hơn 0 thì thêm span rd-thumb-count hiện số điểm; nhãn giúp khách biết nên chọn góc nào để mua sắm khi ảnh đang xem chưa có điểm nào",
   "Nhãn số điểm là số thứ tự của ảnh trong phòng, đánh số từ 1 đến n",
   "Nhãn số điểm là số sản phẩm đã thêm vào giỏ từ ảnh đó, tăng dần khi khách mua",
   "Nhãn số điểm là số lượt xem ảnh đó, lấy từ một bộ đếm phía server"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. showThumbs lấy mảng room.images, nếu độ dài nhỏ hơn hoặc bằng 1 thì ẩn cả khung thumbnail. Ngược lại, với mỗi ảnh tạo nút rd-thumb, gọi countHotspotsOnImage(anh[i]) để đếm số hotspot có getHotspotImage trả về đúng ảnh đó, nếu soDiem lớn hơn 0 thì thêm span rd-thumb-count với nội dung số điểm. Nhãn này rất hữu ích vì phòng có nhiều góc chụp, không phải góc nào cũng có hotspot, khách đang xem một góc không có điểm sẽ thấy dòng gợi ý chọn ảnh nhỏ có số điểm, nhãn giúp họ chọn nhanh góc có đồ để mua thay vì mò từng ảnh. Các phương án còn lại hiểu sai ý nghĩa nhãn, không đúng code.",
  "topic": "uiux"
 },
 {
  "id": "bv17-a35",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Trong trang chi tiết phòng, khi khách bấm nút Xem thêm ở mục Phối thêm cùng bộ sưu tập thì chuyện gì xảy ra với giao diện và với biến otherShown? Em giải thích ngắn gọn luồng.",
  "options": [
   "showMoreOther gán otherShown bằng độ dài otherProducts rồi gọi renderOtherProducts, hàm này vẽ lại toàn bộ danh sách, lúc này điều kiện i nhỏ hơn otherShown luôn đúng nên hiện hết, đồng thời conLai bằng 0 nên khung nút Xem thêm bị ẩn",
   "showMoreOther chỉ tăng otherShown thêm 8 mỗi lần bấm, khách phải bấm nhiều lần mới thấy hết",
   "showMoreOther chuyển sang trang products.html để xem toàn bộ sản phẩm cùng phong cách",
   "showMoreOther tải lại trang room-detail với tham số mới để server render lại danh sách đầy đủ"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. showMoreOther là hàm rất ngắn, chỉ gán otherShown bằng otherProducts.length rồi gọi renderOtherProducts. Trong renderOtherProducts, vòng lặp duyệt otherProducts với điều kiện i nhỏ hơn otherShown, vì otherShown giờ bằng độ dài mảng nên mọi phần tử đều được vẽ. Sau vòng lặp, conLai bằng otherProducts.length trừ otherShown bằng 0, nên nhánh else gán className của khung nút thành rd-more hidden, ẩn nút Xem thêm. Cách này đơn giản, không cần phân trang phức tạp cho danh sách phụ, phù hợp với số lượng món trong một phòng thường không quá lớn. Các phương án còn lại mô tả hành vi tăng dần, chuyển trang, hoặc tải lại, đều không đúng code.",
  "topic": "feat"
 },
 {
  "id": "bv17-a36",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống một khách phàn nàn rằng khi mở popup hotspot rồi bấm ra ngoài ảnh để đóng thì popup không tắt, em hãy chỉ ra nguyên nhân có thể theo code hiện tại và cách kiểm tra, đồng thời nói cách đóng popup đúng mà nhóm em đã cài.",
  "options": [
   "Sự kiện click đóng popup chỉ được gắn trên stage và chỉ kích hoạt khi e.target.id bằng roomImage, nếu khách bấm vào vùng đệm, vào chấm khác hoặc vào phần tử con của ảnh thì không khớp điều kiện; cách đóng đúng là bấm nút X, bấm lại chính chấm đang mở qua toggleHotspot, hoặc nhấn phím Escape",
   "Popup không có cách nào đóng ngoài việc tải lại trang, đây là lỗi thiết kế cố ý",
   "Popup tự đóng sau 5 giây, nếu khách thấy không tắt là do trình duyệt chặn JavaScript",
   "Popup chỉ đóng khi khách thêm sản phẩm vào giỏ thành công, các thao tác khác không đóng được"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong showStage, sau khi tạo các chấm, code gắn stage.addEventListener click với hàm kiểm tra if(e.target.id bằng roomImage) thì closePopup. Nghĩa là chỉ khi khách bấm đúng vào phần tử ảnh có id roomImage mới đóng, còn bấm vào vùng đệm, vào nút chấm khác, hay vào phần tử con bên trong ảnh thì không khớp. Đây là điểm có thể gây khó chịu, nhóm có thể cải thiện bằng cách kiểm tra thêm e.target không phải nút hotspot. Các cách đóng popup đúng hiện có: nút X trong popup gọi closePopup, bấm lại chính chấm đang mở thì toggleHotspot gọi closePopup, nhấn Escape trong pageKeyDown cũng gọi closePopup khi modal 3D đang ẩn. Các phương án còn lại bịa ra cơ chế tự đóng hoặc phủ nhận khả năng đóng, không đúng code.",
  "topic": "feat"
 },
 {
  "id": "bv17-a37",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Trong trang chi tiết phòng, khi khách đổi ảnh lớn bằng thumbnail thì popup đang mở xử lý thế nào, và vì sao nhóm em chọn hành vi đó thay vì giữ popup mở?",
  "options": [
   "changeImage gán currentImage mới, cập nhật ảnh lớn, đổi lớp active cho thumbnail, gọi closePopup rồi updateStageForImage; đóng popup vì các chấm của ảnh cũ không còn hiển thị, giữ popup sẽ trỏ tới vị trí không còn tồn tại trên ảnh mới",
   "changeImage giữ nguyên popup đang mở và chỉ đổi ảnh lớn, popup tự di chuyển theo toạ độ mới",
   "changeImage mở lại popup của sản phẩm đầu tiên trên ảnh mới để khách không mất ngữ cảnh",
   "changeImage khoá không cho đổi ảnh khi popup đang mở, khách phải đóng popup trước"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. changeImage nhận vị trí ảnh, gán currentImage bằng room.images[viTri], cập nhật src của roomImage, duyệt các nút thumbnail đổi lớp active cho đúng nút, sau đó gọi closePopup và updateStageForImage. Việc đóng popup là cần thiết vì popup đang gắn với một hotspot cụ thể thuộc ảnh cũ, khi chuyển ảnh thì chấm đó bị ẩn, nếu giữ popup mở thì nó lơ lửng ở vị trí không còn ý nghĩa, gây rối. updateStageForImage sau đó hiện chấm của ảnh mới và cập nhật dòng đếm. Khách muốn xem tiếp thì bấm chấm mới. Cách này đơn giản và nhất quán với hành vi goToHotspotImage khi mở hotspot thuộc ảnh khác. Các phương án còn lại giữ popup sai ngữ cảnh, mở popup tự động gây bất ngờ, hoặc khoá thao tác, đều không đúng code.",
  "topic": "feat"
 },
 {
  "id": "bv17-a38",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Trong trang chi tiết phòng, biến activeIndex có vai trò gì và được cập nhật ở những chỗ nào? Em giải thích ngắn gọn.",
  "options": [
   "activeIndex lưu chỉ số hotspot đang mở popup, khởi tạo bằng -1 nghĩa là chưa mở; được gán trong openHotspot khi mở, đặt lại -1 trong closePopup, và được kiểm tra trong nhiều hàm như toggleHotspot, highlightHotspot, pageKeyDown, placePopup để biết có popup đang mở hay không",
   "activeIndex lưu chỉ số ảnh đang hiển thị, thay đổi mỗi khi khách bấm thumbnail",
   "activeIndex lưu chỉ số trang hiện tại trong danh sách sản phẩm của phòng, dùng cho phân trang",
   "activeIndex lưu chỉ số sản phẩm đang được thêm vào giỏ gần nhất, dùng để hiện toast"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. activeIndex được khai báo bằng -1 ở đầu file, quy ước -1 là chưa mở popup. openHotspot gán activeIndex bằng viTri sau khi đã tô sáng chấm, closePopup đặt lại -1 và ẩn popup. toggleHotspot so sánh activeIndex với viTri để quyết định mở hay đóng. highlightHotspot bỏ qua nếu viTri bằng activeIndex để không đè trạng thái active. pageKeyDown kiểm tra activeIndex lớn hơn hoặc bằng 0 để cho phím mũi tên hoạt động. initPage và resize kiểm tra activeIndex lớn hơn hoặc bằng 0 để gọi placePopup. Như vậy activeIndex là trạng thái trung tâm của popup hotspot. Các phương án còn lại gán sai ý nghĩa cho biến, không đúng code.",
  "topic": "code"
 },
 {
  "id": "bv17-a39",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Trong trang chi tiết phòng, hàm showTotals tính tổng tiền phòng bằng getRoomTotal. Em giải thích tổng tiền đó dựa trên những sản phẩm nào và vì sao nhóm em không tính theo toàn bộ sản phẩm của phòng.",
  "options": [
   "getRoomTotal tính theo các sản phẩm được gắn hotspot, tức hotspotProductIds, vì đó là những món khách nhìn thấy và bấm mua được trên ảnh; tính theo toàn bộ sản phẩm của phòng sẽ bao gồm cả món chưa gắn chấm, khách không thấy trên ảnh nên dễ hiểu nhầm",
   "getRoomTotal tính theo toàn bộ sản phẩm trong products.json, không liên quan tới phòng đang xem",
   "getRoomTotal tính theo các sản phẩm đã có trong giỏ hàng của khách, không phải sản phẩm của phòng",
   "getRoomTotal tính theo giá trung bình của các phòng cùng phong cách để so sánh"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. showTotals gọi getRoomTotal(room) để lấy tổng tiền, hàm này tính trên các sản phẩm gắn hotspot của phòng, tức hotspotProductIds, đúng với những món khách nhìn thấy và có thể bấm mua trên ảnh. Ghi chú cạnh tổng tiền hiển thị soConHang trên tổng số món, nhấn mạnh đây là các món được đánh dấu trên ảnh phòng. Nếu tính theo toàn bộ sản phẩm của phòng thì tổng tiền sẽ bao gồm cả món chưa gắn chấm, khách không thấy trên ảnh, dễ thắc mắc vì sao tổng tiền lớn hơn số món họ đếm được, và nút thêm trọn bộ cũng chỉ thêm các món hotspot nên tổng tiền phải khớp với số món sẽ được thêm. Các phương án còn lại lấy nguồn dữ liệu sai, không đúng code.",
  "topic": "feat"
 },
 {
  "id": "bv17-a40",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống muốn kiểm thử tự động cho trang chi tiết phòng, cụ thể là kiểm tra rằng mỗi hotspot trong room_hotspots.json đều trỏ tới một sản phẩm tồn tại trong products.json và sản phẩm đó không bị ẩn, với kiến trúc hiện tại, nhóm em sẽ viết bài kiểm thử ở đâu và dựa vào hàm nào?",
  "options": [
   "Viết script kiểm thử trong thư mục tests, đọc hai file JSON, với mỗi bản ghi hotspot gọi findProduct hoặc tra trực tiếp products.json để kiểm tra sản phẩm tồn tại và is_active khác false; có thể dùng chính logic getRoomHotspots đang lọc sản phẩm ẩn để đối chiếu số lượng trước và sau lọc",
   "Không thể kiểm thử tự động vì dữ liệu nằm trong file JSON tĩnh, phải kiểm tra thủ công từng hotspot bằng mắt",
   "Viết bài kiểm thử trong server.js vì đó là nơi duy nhất chạy được code JavaScript phía server",
   "Chỉ cần mở trang room-detail và bấm thử từng chấm, nếu không có lỗi hiện ra là dữ liệu đúng"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Nhóm đã có thư mục tests chứa kế hoạch kiểm thử và bằng chứng chạy, có thể thêm script Node đọc data/json/room_hotspots.json và data/json/products.json, duyệt từng bản ghi hotspot, tra sản phẩm theo product_id, báo lỗi nếu không tìm thấy hoặc is_active bằng false. Có thể tận dụng logic getRoomHotspots đang lọc sản phẩm ẩn, so sánh số hotspot trước và sau lọc để phát hiện bản ghi trỏ tới sản phẩm ẩn. Cách này chạy nhanh, không cần mở trình duyệt, phù hợp đưa vào quy trình trước khi deploy. Kiểm tra thủ công bằng mắt không đáng tin vì phòng có nhiều hotspot, dễ bỏ sót. server.js chỉ phục vụ tĩnh và chatbot, không phải nơi đặt kiểm thử dữ liệu. Các phương án còn lại phủ nhận khả năng kiểm thử tự động hoặc đặt sai chỗ, không đúng thực tế nhóm."
 }
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_BV17; }
