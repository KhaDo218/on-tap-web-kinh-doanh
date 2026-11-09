// Ngan hang on bao ve RoomCraft - da phan loai topic + bien tap bo khung 'Thay' (2026-11-09)
const QUESTIONS_BV10 = [
 {
  "id": "bv10-a01",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Em hãy mô tả luồng đi của dữ liệu từ lúc khách bấm nút Tiến hành thanh toán ở trang giỏ hàng cho tới khi đơn hàng được tạo và chuyển sang trang order-success. Dữ liệu đi qua những file JS nào, lưu ở đâu, và trang order-success nhận thông tin đơn bằng cách nào?",
  "options": [
   "Giỏ hàng đọc từ localStorage qua services/cart.js, nút goCheckout() kiểm tra hết hàng và đăng nhập rồi chuyển sang checkout.html; checkout.js gọi createOrder() trong services/orders.js để tạo đơn (lưu vào bảng orders qua saveTable, tức localStorage), sau đó chuyển hướng sang order-success.html?id=maDon và trang này đọc lại đơn theo id trên URL để hiển thị.",
   "Giỏ hàng được gửi thẳng lên server.js qua POST /api/chat để server tạo đơn trong orders.json, rồi server trả về mã đơn và redirect sang order-success.",
   "checkout.js ghi đơn trực tiếp vào file data/json/orders.json bằng fetch PUT, còn order-success đọc lại file đó bằng fetch GET để hiển thị.",
   "Giỏ hàng chỉ là biến toàn cục trong bộ nhớ, khi bấm thanh toán thì mở order-success.html và truyền toàn bộ đơn qua query string, không lưu ở đâu cả."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là luồng client-side thuần: cart.js đọc giỏ từ localStorage (qua services/cart.js), goCheckout() chặn nếu giỏ có sản phẩm hết hàng hoặc chưa đăng nhập (chuyển sang login.html?redirect=...), rồi điều hướng sang checkout.html. Ở checkout.js, sau khi kiểm tra form và tồn kho bằng checkStockForCart(), hàm placeOrder() gom thông tin người nhận, địa chỉ, phương thức giao, hình thức thanh toán, mã giảm giá, 4 số cuối thẻ vào object thongTin rồi gọi createOrder(thongTin) trong services/orders.js. Hàm này sinh mã đơn (getNextId), lưu vào bảng orders qua saveTable - tức là ghi vào localStorage - và trả về mã đơn. checkout.js sau đó đặt window.location.href = order-success.html?id=maDon. Trang order-success đọc tham số id trên URL, tìm đơn tương ứng trong bảng orders đã lưu và hiển thị tóm tắt. Các phương án còn lại sai vì dự án không có backend thật cho đơn hàng: server.js chỉ phục vụ tĩnh và API chatbot, không có endpoint tạo đơn, và frontend không ghi trực tiếp vào file JSON trên đĩa.",
  "topic": "code"
 },
 {
  "id": "bv10-a02",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Vì sao nhóm em quyết định lưu giỏ hàng và đơn hàng ở localStorage thay vì làm backend thật với cơ sở dữ liệu? Em trình bày lý do và cái giá phải trả của quyết định đó.",
  "options": [
   "Vì phạm vi môn học và yêu cầu deploy tĩnh miễn phí trên GitHub Pages: không có server chạy thường trực, không có DB, nên nhóm chọn localStorage để vẫn giữ được giỏ hàng khi chuyển trang và khi chưa đăng nhập; cái giá là dữ liệu chỉ nằm trên từng máy, không đồng bộ giữa nhiều người và có thể bị sửa tay.",
   "Vì localStorage bảo mật hơn cơ sở dữ liệu server, mã hóa sẵn dữ liệu nên nhóm chọn để tránh bị tấn công.",
   "Vì GitHub Pages không cho phép dùng JavaScript, nên nhóm buộc phải lưu mọi thứ ở localStorage thay cho code.",
   "Vì nhóm chưa biết viết SQL nên tạm dùng localStorage, sau này sẽ chuyển sang MySQL mà không phải sửa gì trong code hiện tại."
  ],
  "correct": [
   0
  ],
  "explanation": "Lý do thật của nhóm là ràng buộc kỹ thuật của đồ án: website là frontend tĩnh thuần HTML/CSS/JS, deploy trên GitHub Pages từ branch main, không có tiến trình server chạy thường trực và không có cơ sở dữ liệu. Backend duy nhất là server.js chạy cục bộ chỉ để phục vụ tĩnh và gọi LLM cho chatbot, không phục vụ nghiệp vụ đơn hàng. Vì vậy giỏ hàng, đơn hàng, wishlist, đánh giá đều dùng localStorage thông qua các hàm getTable/saveTable trong lớp services. Cách này cho phép giữ giỏ khi khách chưa đăng nhập, chuyển trang không mất dữ liệu, và deploy miễn phí. Cái giá phải trả đúng như nhóm đã thừa nhận: dữ liệu chỉ tồn tại trên trình duyệt của từng người, hai khách mua cùng lúc không thấy đơn của nhau, tồn kho không bị trừ thật, và người rành kỹ thuật có thể mở DevTools sửa localStorage. Các phương án còn lại sai vì localStorage không hề bảo mật hơn DB, GitHub Pages vẫn chạy JS bình thường, và nhóm không có kế hoạch chuyển MySQL trong phạm vi đồ án.",
  "topic": "data"
 },
 {
  "id": "bv10-a03",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Mã giảm giá trong RoomCraft được kiểm tra những điều kiện gì trước khi áp dụng, và chuyện gì xảy ra nếu sau khi áp mã khách lại giảm số lượng hàng trong giỏ xuống dưới ngưỡng tối thiểu của mã?",
  "options": [
   "checkCoupon kiểm tra mã có tồn tại trong coupons.json, còn hạn, còn lượt dùng và tạm tính đạt giá trị tối thiểu; nếu không đạt thì trả về chuỗi lỗi và applyCoupon hiển thị lỗi, bỏ mã. Khi khách giảm số lượng làm tạm tính tụt dưới ngưỡng, updateSummary gọi lại checkCoupon và tự bỏ appliedCoupon, nên giảm giá về 0 và tổng tiền tính lại.",
   "Mã giảm giá chỉ được kiểm tra đúng một lần lúc bấm Áp dụng, sau đó không bao giờ kiểm tra lại, nên khách có thể giảm số lượng tùy ý mà vẫn được giảm giá.",
   "Mã giảm giá được kiểm tra ở phía server.js qua API /api/coupon, nếu sai thì server trả lỗi 400 và trang checkout hiển thị thông báo.",
   "Mã giảm giá chỉ kiểm tra định dạng chuỗi, không kiểm tra giá trị đơn, nên mã nào nhập đúng chữ là được giảm ngay."
  ],
  "correct": [
   0
  ],
  "explanation": "Trong checkout.js, hàm applyCoupon() lấy mã người dùng nhập, gọi checkCoupon(ma, getCartTotal()). Hàm này tra trong bảng coupons (dữ liệu từ coupons.json) và trả về chuỗi rỗng nếu hợp lệ, hoặc câu thông báo lỗi nếu mã không tồn tại, hết hạn, hết lượt hoặc tạm tính chưa đạt giá trị đơn tối thiểu. Nếu lỗi thì appliedCoupon = null và hiện lỗi màu đỏ; nếu hợp lệ thì appliedCoupon = findCouponByCode(ma) và hiện thông báo thành công. Điểm quan trọng giảng viên hay xoáy là việc kiểm tra lại: trong updateSummary(), mỗi lần tính lại tiền, code kiểm tra nếu appliedCoupon khác null mà checkCoupon trả về lỗi thì tự đặt appliedCoupon = null. Vì vậy khi khách giảm số lượng trong giỏ làm tạm tính tụt dưới ngưỡng, mã tự động bị bỏ, dòng giảm giá về 0 và tổng tiền được tính lại đúng. Các phương án còn lại sai vì mã được kiểm tra lại mỗi lần updateSummary, không có API coupon phía server, và mã không chỉ kiểm tra định dạng.",
  "topic": "feat"
 },
 {
  "id": "bv10-a04",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Phí giao hàng ở RoomCraft được tính dựa trên những yếu tố nào? Em giải thích cơ chế getShippingOptions, calcShippingFee và vì sao phí phụ thuộc vào tỉnh/thành chứ không chỉ vào cân nặng.",
  "options": [
   "Phí giao phụ thuộc loại hàng (cồng kềnh hay kiện nhỏ), khu vực của tỉnh/thành (getProvinceZone), giá trị tạm tính để xét miễn phí, và phương thức giao khách chọn; getShippingOptions lọc các phương thức khả dụng theo tỉnh và loại hàng, calcShippingFee tính phí theo vùng và ngưỡng free_from của từng phương thức trong shipping_methods.json.",
   "Phí giao chỉ phụ thuộc cân nặng sản phẩm, nhóm em nhập cân nặng tay vào shipping_methods.json và nhân với đơn giá cố định.",
   "Phí giao là một con số cố định toàn quốc, không đổi theo tỉnh hay loại hàng, chỉ đổi khi khách nhập mã giảm giá.",
   "Phí giao do server.js tính qua API /api/shipping, frontend chỉ hiển thị lại kết quả server trả về."
  ],
  "correct": [
   0
  ],
  "explanation": "Trong checkout.js, khi đổi tỉnh/thành, onAddressChange() gọi showShippingMethods(), hàm này gọi getShippingOptions(getCart(), getCartTotal(), tinh). Hàm đó duyệt bảng shipping_methods (dữ liệu từ shipping_methods.json) và với mỗi phương thức xét xem có áp dụng cho loại hàng trong giỏ không (hasBulkyItem để biết có nội thất cỡ lớn hay không, tương ứng kind BULKY hay PARCEL) và có phục vụ vùng của tỉnh đó không; phương thức không khả dụng bị disable kèm lý do. Khi khách chọn một phương thức, getShippingFee() gọi calcShippingFee(ship, getProvinceZone(tinh), getCartTotal()) để ra phí, có xét ngưỡng free_from của phương thức: đơn đủ lớn thì miễn phí. Vì vậy phí phụ thuộc vùng địa lý chứ không chỉ cân nặng - hàng cồng kềnh còn phải giao bằng xe tải và lắp đặt, nên nhóm tách loại hàng. Ngoài ra nếu chưa chọn tỉnh thì phí hiển thị Chọn Tỉnh/Thành và getShippingFee trả 0. Các phương án còn lại sai vì dự án không có trường cân nặng dùng để tính phí, phí không cố định toàn quốc, và không có API shipping phía server.",
  "topic": "feat"
 },
 {
  "id": "bv10-a05",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Địa chỉ giao hàng trong RoomCraft được chia cấp như thế nào, file wards.json đóng vai trò gì, và vì sao nhóm em không cho khách gõ tay tên phường/xã mà lại dùng danh sách chọn?",
  "options": [
   "Địa chỉ chia 3 cấp Tỉnh/Thành phố, Phường/Xã, Số nhà và tên đường; wards.json chứa danh sách phường/xã theo từng tỉnh để renderWardOptions đổ vào ô chọn khi khách đổi tỉnh, giúp địa chỉ chuẩn hóa, tránh gõ sai và phục vụ tính phí giao theo vùng chính xác.",
   "Địa chỉ chỉ có một ô nhập tự do, wards.json dùng để lưu lịch sử các địa chỉ khách đã từng nhập.",
   "Địa chỉ chia 4 cấp gồm Quốc gia, Tỉnh, Quận, Phường; wards.json chứa danh sách quận/huyện của 63 tỉnh thành.",
   "Địa chỉ do server.js trả về qua API /api/wards, frontend chỉ hiển thị dropdown lấy từ server, không đọc file JSON."
  ],
  "correct": [
   0
  ],
  "explanation": "Theo checkout.js, địa chỉ gồm Tỉnh/Thành phố (cboProvince), Phường/Xã (txtWard) và Số nhà, tên đường (txtStreet). Khi trang tải, initPage() gọi loadWardsData() để nạp wards.json (khoảng 246KB, danh sách phường/xã của 63 tỉnh thành). Khi khách đổi tỉnh, onAddressChange() gọi renderWardOptions(wardSelect, tinh, selectedWard) để đổ danh sách phường/xã tương ứng vào ô chọn. Cách làm này giúp địa chỉ chuẩn hóa, tránh khách gõ sai tên phường, và quan trọng là phục vụ tính phí giao theo vùng: getProvinceZone(tinh) dựa vào tỉnh đã chọn để xác định vùng. Nếu loadWardsData lỗi, trang hiện thông báo không tải được danh sách Phường/Xã và dừng lại. Ngoài ra địa chỉ được lưu lại làm mặc định qua saveDefaultAddress() với các trường default_province, default_ward, default_street, default_house_type. Các phương án còn lại sai vì địa chỉ không phải một ô tự do, không có cấp Quận trong form hiện tại, và wards.json được đọc trực tiếp ở frontend chứ không qua API server.",
  "topic": "feat"
 },
 {
  "id": "bv10-a06",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Tồn kho theo kích thước và màu được xử lý thế nào ở trang chi tiết sản phẩm và khi thêm vào giỏ? Nếu khách chọn một tổ hợp kích thước và màu đã hết hàng thì hệ thống phản ứng ra sao?",
  "options": [
   "Mỗi sản phẩm có tồn kho theo từng tổ hợp kích thước và màu; khi khách chọn biến thể, trang chi tiết tra tồn kho của đúng tổ hợp đó để hiện còn hay hết và chặn thêm vào giỏ nếu hết; giỏ hàng lưu kèm kích thước và màu đã chọn, và cart.js cùng checkout.js kiểm tra lại tồn kho theo biến thể trước khi cho thanh toán.",
   "Tồn kho chỉ có một con số chung cho cả sản phẩm, kích thước và màu chỉ là nhãn hiển thị, không ảnh hưởng đến số lượng mua được.",
   "Tồn kho theo biến thể do server.js quản lý, mỗi lần khách chọn biến thể frontend gọi API /api/stock để hỏi server số lượng còn lại.",
   "Khi hết một biến thể, hệ thống tự động đổi sang biến thể còn hàng gần nhất và thêm vào giỏ luôn mà không báo khách."
  ],
  "correct": [
   0
  ],
  "explanation": "Trong products.json, mỗi sản phẩm có thông tin tồn kho theo kích thước và màu (biến thể). Trang product-detail khi khách chọn kích thước và màu sẽ tra đúng tổ hợp đó để hiển thị trạng thái còn hàng hay hết hàng, và nút thêm vào giỏ bị chặn nếu tổ hợp đã hết. Khi thêm vào giỏ, giỏ lưu product_id kèm kích thước và màu đã chọn để phân biệt các biến thể. Ở cart.js, showCart() hiển thị badge Còn N sản phẩm hoặc Hết hàng theo tồn kho của biến thể, và updateQuantity() chặn khi số lượng vượt tồn kho, trả về chuỗi lỗi để alert. Ở checkout.js, initPage() gọi hasOutOfStockItem() để chặn thanh toán nếu có món hết hàng, và placeOrder() gọi checkStockForCart() kiểm tra lại toàn giỏ trước khi tạo đơn, nếu lỗi thì đưa khách về cart.html. Các phương án còn lại sai vì tồn kho không phải một con số chung, không có API stock phía server, và hệ thống không tự đổi biến thể mà chặn và báo khách.",
  "topic": "feat"
 },
 {
  "id": "bv10-a07",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Trang order-success nhận và hiển thị thông tin gì, và vì sao nhóm em truyền mã đơn qua query string id thay vì truyền cả object đơn hàng?",
  "options": [
   "order-success đọc tham số id trên URL, tìm đơn trong bảng orders đã lưu ở localStorage, rồi hiển thị mã đơn, thông tin người nhận, danh sách sản phẩm, tổng tiền, hình thức thanh toán và số tiền đã trả; truyền id thay vì cả object để URL ngắn, tránh lộ dữ liệu và tránh giới hạn độ dài URL.",
   "order-success nhận toàn bộ object đơn hàng được mã hóa base64 trong query string, vì localStorage không lưu được object phức tạp.",
   "order-success không đọc dữ liệu gì, chỉ hiển thị câu cảm ơn cố định, còn chi tiết đơn khách xem ở trang orders.",
   "order-success gọi server.js qua API /api/order?id=... để lấy đơn, vì đơn hàng chỉ tồn tại trên server."
  ],
  "correct": [
   0
  ],
  "explanation": "Sau khi placeOrder() tạo đơn bằng createOrder(thongTin), checkout.js chuyển hướng sang order-success.html?id=maDon. Trang order-success lấy tham số id từ URL, tra bảng orders trong localStorage để lấy đơn tương ứng, rồi hiển thị mã đơn, thông tin người nhận (tên, điện thoại, địa chỉ ghép từ số nhà, phường, tỉnh), danh sách sản phẩm kèm số lượng và thành tiền, tạm tính, phí giao, giảm giá, tổng cộng, hình thức thanh toán và số tiền đã trả ngay cùng số còn lại trả khi nhận. Việc chỉ truyền id có ba lợi ích: URL ngắn và dễ chia sẻ, không đưa thông tin cá nhân lên thanh địa chỉ, và tránh giới hạn độ dài URL khi đơn nhiều sản phẩm. Các phương án còn lại sai vì không có mã hóa base64, trang có hiển thị chi tiết đơn, và không có API order phía server.",
  "topic": "code"
 },
 {
  "id": "bv10-a08",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Wishlist trong RoomCraft hoạt động thế nào khi khách chưa đăng nhập và khi đã đăng nhập? Dữ liệu wishlist lưu ở đâu và có đồng bộ với tài khoản không?",
  "options": [
   "Wishlist lưu ở localStorage theo từng tài khoản (hoặc theo khách vãng lai), trang wishlist đọc danh sách id sản phẩm đã lưu, đối chiếu với products.json để hiển thị thẻ sản phẩm; vì lưu cục bộ nên không đồng bộ giữa các thiết bị, đăng nhập trên máy khác sẽ không thấy wishlist cũ.",
   "Wishlist lưu trên server.js trong một file JSON riêng, nên đăng nhập ở đâu cũng thấy, miễn là server đang chạy.",
   "Wishlist lưu trong users.json trên GitHub, mỗi lần thêm sản phẩm thì frontend commit thay đổi lên repo.",
   "Wishlist chỉ tồn tại trong bộ nhớ của tab đang mở, đóng tab là mất, không lưu ở đâu cả."
  ],
  "correct": [
   0
  ],
  "explanation": "Wishlist của RoomCraft là tính năng phía client: danh sách id sản phẩm yêu thích được lưu trong localStorage thông qua lớp services (getTable/saveTable), gắn với tài khoản đang đăng nhập hoặc với khách vãng lai. Trang wishlist đọc danh sách id, tra products.json để lấy thông tin sản phẩm và render thẻ sản phẩm, cho phép bỏ yêu thích hoặc thêm vào giỏ. Vì lưu cục bộ nên wishlist không đồng bộ giữa các thiết bị hay trình duyệt: đăng nhập trên máy khác sẽ thấy wishlist trống. Đây là cùng một điểm yếu chung với giỏ hàng và đơn hàng mà nhóm đã thừa nhận, và là hệ quả trực tiếp của việc deploy tĩnh không có backend nghiệp vụ. Các phương án còn lại sai vì không có file wishlist trên server, frontend không commit lên repo, và wishlist được lưu bền trong localStorage chứ không chỉ trong bộ nhớ tab.",
  "topic": "feat"
 },
 {
  "id": "bv10-a09",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Marketplace đồ cũ trong RoomCraft khác gì với gian hàng nội thất mới? Dữ liệu đồ cũ lấy từ đâu, và khi khách mua một món đồ cũ thì luồng giỏ hàng và thanh toán có đi chung với hàng mới không?",
  "options": [
   "Marketplace là khu riêng cho đồ cũ tuyển chọn, dữ liệu lấy từ used_products.json và ảnh trong assets/marketplace; mỗi món đồ cũ thường chỉ có một cái nên tồn kho là duy nhất, nhưng luồng thêm vào giỏ và thanh toán vẫn dùng chung cart.js và checkout.js với hàng mới.",
   "Marketplace là một website riêng biệt, có giỏ hàng và thanh toán riêng, không liên quan gì đến gian hàng nội thất mới.",
   "Marketplace chỉ để trưng bày, khách xem rồi liên hệ qua chatbot để mua, không có nút thêm vào giỏ.",
   "Marketplace dùng chung products.json với hàng mới, chỉ khác là có gắn nhãn đồ cũ, tồn kho vẫn tính theo biến thể như hàng mới."
  ],
  "correct": [
   0
  ],
  "explanation": "Marketplace là trang riêng (marketplace.html) trưng bày đồ cũ tuyển chọn, dữ liệu lấy từ used_products.json và ảnh trong assets/marketplace. Đặc điểm của đồ cũ là mỗi món thường chỉ có một cái, nên tồn kho là duy nhất chứ không có nhiều biến thể kích thước và màu như hàng mới. Tuy nhiên về mặt kỹ thuật, luồng mua vẫn dùng chung hạ tầng: thêm vào giỏ qua services/cart.js, thanh toán qua checkout.js, tạo đơn qua services/orders.js, nên đơn có thể trộn cả đồ mới và đồ cũ. Trang product-detail cũng có khu đồ cũ tuyển chọn gợi ý kèm. Các phương án còn lại sai vì marketplace không phải website riêng, có nút thêm vào giỏ, và dùng used_products.json chứ không dùng chung products.json với hàng mới.",
  "topic": "feat"
 },
 {
  "id": "bv10-a10",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống hai khách A và B cùng mở web, cùng thấy một chiếc ghế còn 1 cái trong kho, cả hai cùng thêm vào giỏ và cùng bấm đặt hàng thành công. Hệ thống hiện tại của em xử lý tình huống này thế nào, hậu quả là gì, và nếu được làm lại em sẽ sửa ở đâu?",
  "options": [
   "Cả hai đơn đều được tạo thành công vì tồn kho chỉ được kiểm tra ở phía client trên dữ liệu products.json tĩnh, không có bước trừ kho hay khóa tồn kho phía server; hậu quả là bán quá số lượng thực có, và cách sửa là đưa kiểm tra và trừ tồn kho về một backend có giao dịch nguyên tử, frontend chỉ hiển thị.",
   "Hệ thống tự phát hiện xung đột vì localStorage có cơ chế khóa, nên khách B sẽ nhận thông báo hết hàng và bị chặn thanh toán.",
   "Hệ thống dùng server.js để khóa sản phẩm trong lúc khách đang thanh toán, nên chỉ một người mua được, người kia phải chờ.",
   "Cả hai đơn đều thành công nhưng hệ thống tự động hủy đơn của người đặt sau dựa vào thời gian tạo đơn trong orders.json."
  ],
  "correct": [
   0
  ],
  "explanation": "Đây là điểm yếu cốt lõi của kiến trúc tĩnh mà nhóm đã thừa nhận. Tồn kho nằm trong products.json, được tải về trình duyệt; checkStockForCart() và hasOutOfStockItem() chỉ kiểm tra trên dữ liệu đó ở phía client. Không có bước trừ kho, không có khóa, không có giao dịch nguyên tử, và localStorage của A không liên quan gì đến localStorage của B. Vì vậy cả hai đơn đều được tạo và lưu vào localStorage riêng của từng máy, dẫn tới bán quá số lượng thực có. Cách sửa đúng là đưa nghiệp vụ đơn hàng và tồn kho về backend có cơ sở dữ liệu, dùng giao dịch hoặc khóa lạc quan để trừ kho nguyên tử, và frontend chỉ hiển thị kết quả. Các phương án còn lại sai vì localStorage không có cơ chế khóa liên máy, server.js không xử lý đơn hàng, và không có logic tự hủy đơn theo thời gian."
 },
 {
  "id": "bv10-a11",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Nếu khách dùng DevTools sửa localStorage để đổi giá sản phẩm hoặc sửa mã đơn hàng thành đơn đã thanh toán, hệ thống của em có phát hiện không? Em giải thích và nêu cách giảm thiểu trong phạm vi đồ án.",
  "options": [
   "Hệ thống hiện tại không phát hiện được vì giá và trạng thái đơn đều đọc từ localStorage phía client; cách giảm thiểu trong phạm vi đồ án là tính lại giá từ products.json khi hiển thị, không tin số tiền lưu trong giỏ, và ghi rõ đây là mô phỏng; về lâu dài phải xác thực và tính tiền ở backend.",
   "Hệ thống phát hiện được vì mỗi bản ghi localStorage có chữ ký số do server.js tạo ra khi đăng nhập.",
   "Hệ thống phát hiện được vì giá sản phẩm được băm bằng SHA-256 và lưu kèm, nếu sửa sẽ sai hash và bị chặn.",
   "Không cần quan tâm vì localStorage chỉ lưu trên máy khách, sửa cũng không ảnh hưởng đến dữ liệu của người khác hay của admin."
  ],
  "correct": [
   0
  ],
  "explanation": "Với kiến trúc hiện tại, mọi thứ liên quan đến giỏ hàng và đơn hàng đều nằm trong localStorage và được đọc thẳng ở client, nên người dùng rành kỹ thuật hoàn toàn có thể sửa giá, sửa trạng thái đơn, sửa mã giảm giá. Hệ thống không có chữ ký số, không có hash, không có xác thực phía server cho từng bản ghi, nên không phát hiện được. Trong phạm vi đồ án, nhóm giảm thiểu bằng cách tính lại giá từ products.json khi hiển thị thay vì tin số tiền lưu trong giỏ, kiểm tra lại mã giảm giá mỗi lần tính tiền, và ghi rõ trong báo cáo đây là thanh toán mô phỏng. Về lâu dài, cách đúng là mọi phép tính tiền và chuyển trạng thái đơn phải làm ở backend có xác thực. Phương án nói không cần quan tâm là sai vì sửa localStorage ảnh hưởng trực tiếp đến đơn hàng của chính khách đó và đến tính đúng đắn của báo cáo doanh thu admin."
 },
 {
  "id": "bv10-a12",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Khi khách bấm nút Tiến hành thanh toán ở trang giỏ hàng mà chưa đăng nhập, hệ thống xử lý thế nào? Em mô tả hàm goCheckout và cơ chế redirect sau khi đăng nhập xong.",
  "options": [
   "goCheckout kiểm tra giỏ có sản phẩm hết hàng không, rồi kiểm tra isLoggedIn; nếu chưa đăng nhập thì alert và chuyển sang login.html?redirect=... với URL checkout.html được mã hóa, sau khi đăng nhập thành công trang login đọc tham số redirect và đưa khách về đúng trang checkout.",
   "goCheckout cho phép thanh toán luôn mà không cần đăng nhập, thông tin người nhận sẽ được hỏi ở bước sau.",
   "goCheckout chuyển thẳng sang checkout.html, còn checkout.js sẽ tự động tạo tài khoản tạm cho khách vãng lai.",
   "goCheckout hiện thông báo lỗi và yêu cầu khách quay lại trang chủ, không có cơ chế quay lại trang thanh toán sau khi đăng nhập."
  ],
  "correct": [
   0
  ],
  "explanation": "Trong cart.js, hàm goCheckout() làm hai việc theo thứ tự: nếu hasOutOfStockItem() thì alert và dừng lại, không cho đi tiếp; sau đó nếu isLoggedIn() trả về false thì alert Vui lòng đăng nhập để thanh toán và đặt window.location.href = login.html?redirect= + encodeURIComponent(window.location.href.replace(cart.html, checkout.html)). Như vậy tham số redirect mang theo URL của trang checkout đã mã hóa. Sau khi đăng nhập thành công, trang login đọc tham số redirect và điều hướng khách về đúng trang đó, nên khách không phải bấm lại từ đầu. Ở phía checkout.js, initPage() cũng gọi requireLogin() và dừng nếu chưa đăng nhập, tạo lớp bảo vệ thứ hai. Các phương án còn lại sai vì hệ thống bắt buộc đăng nhập mới thanh toán, không tạo tài khoản tạm, và có cơ chế redirect quay lại.",
  "topic": "code"
 },
 {
  "id": "bv10-a13",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Nếu khách đang ở bước thanh toán, đã áp mã giảm giá và chọn phương thức giao, rồi bấm back về giỏ hàng xóa bớt một món khiến đơn không còn đủ điều kiện miễn phí giao, thì khi quay lại checkout những trạng thái nào được giữ, trạng thái nào bị tính lại, và có chỗ nào dễ sai không?",
  "options": [
   "Khi quay lại checkout, trang được tải lại từ đầu nên appliedCoupon về null và phải nhập lại mã, phương thức giao được chọn lại theo tỉnh và loại hàng mới, còn phí giao và tổng tiền được tính lại theo giỏ mới; chỗ dễ sai là khách tưởng mã vẫn còn hiệu lực và bất ngờ vì tổng tiền tăng.",
   "Mọi trạng thái đều được giữ nguyên vì checkout.js lưu tạm vào sessionStorage và khôi phục khi quay lại, kể cả mã giảm giá và phương thức giao.",
   "Chỉ có mã giảm giá được giữ, còn phương thức giao và phí giao luôn được tính lại từ đầu mỗi lần tải trang.",
   "Trang checkout giữ nguyên toàn bộ vì trình duyệt tự khôi phục form, và phí giao không bao giờ thay đổi khi quay lại."
  ],
  "correct": [
   0
  ],
  "explanation": "Trong checkout.js, appliedCoupon là biến toàn cục khởi tạo bằng null mỗi lần tải trang, nên khi khách back về giỏ rồi quay lại checkout, mã giảm giá không còn, khách phải nhập lại. Phương thức giao được dựng lại trong showShippingMethods() dựa trên tỉnh đã chọn và loại hàng trong giỏ hiện tại; nếu giỏ mới không còn hàng cồng kềnh thì danh sách phương thức và ngưỡng miễn phí đổi theo. Phí giao tính lại qua getShippingFee(), và updateSummary() tính lại tạm tính, giảm giá, tổng. Chỗ dễ sai là khách tưởng mã vẫn còn hiệu lực và bất ngờ vì tổng tiền tăng; ngoài ra nếu giỏ mới có món hết hàng thì initPage() chặn ngay và đưa về cart.html. Các phương án còn lại sai vì không có sessionStorage lưu trạng thái checkout, và phí giao thay đổi theo giỏ và tỉnh.",
  "topic": "code"
 },
 {
  "id": "bv10-a14",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Hình thức thanh toán trong RoomCraft gồm những loại nào, quy tắc COD tối đa 10 triệu và đặt cọc 30% được cài đặt ở đâu, và vì sao đơn lớn lại không cho COD?",
  "options": [
   "Có COD, trả trước toàn bộ và đặt cọc 30 phần trăm; quy tắc nằm trong services/shipping.js với hằng COD_LIMIT và các hàm canUseCOD, calcDeposit, calcPaymentSplit; đơn trên 10 triệu không cho COD vì rủi ro thu tiền mặt lớn khi giao, nên buộc trả trước hoặc đặt cọc để giảm rủi ro cho shop.",
   "Chỉ có COD và chuyển khoản ngân hàng; quy tắc COD nằm trong server.js, đơn lớn bị chặn vì ngân hàng không cho giao dịch lớn.",
   "Có COD, trả trước toàn bộ, đặt cọc 30 phần trăm và trả góp; quy tắc nằm trong coupons.json, đơn lớn bị chặn vì mã giảm giá không áp dụng cho đơn lớn.",
   "Có COD và ví điện tử; quy tắc nằm trong checkout.js, đơn lớn bị chặn vì ví điện tử giới hạn hạn mức giao dịch."
  ],
  "correct": [
   0
  ],
  "explanation": "Theo checkout.js, renderPlans() dựng danh sách hình thức thanh toán gồm COD, trả trước toàn bộ (FULL) và đặt cọc 30 phần trăm (DEPOSIT, chỉ hiện khi không dùng được COD). Các quy tắc nằm trong services/shipping.js: hằng COD_LIMIT (10 triệu), hàm canUseCOD(tong) kiểm tra đơn có được COD không, calcDeposit(tong) tính tiền cọc 30 phần trăm, calcPaymentSplit(plan, tong) chia số tiền trả ngay và trả khi nhận. Khi đơn vượt COD_LIMIT, canUseCOD trả false, radio COD bị disable kèm mô tả Chỉ áp dụng cho đơn từ 10 triệu trở xuống, và checkOrderForm() chặn nếu khách cố chọn COD. Lý do nghiệp vụ là rủi ro thu tiền mặt lớn khi giao và rủi ro khách bom hàng, nên đơn lớn buộc trả trước hoặc đặt cọc. Các phương án còn lại sai vì có ba hình thức chứ không chỉ hai, quy tắc không nằm ở server.js hay coupons.json, và không có trả góp.",
  "topic": "feat"
 },
 {
  "id": "bv10-a15",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống khách đã đặt hàng thành công, đơn nằm trong orders, nhưng sau đó admin vào trang quản trị sửa trạng thái đơn. Với kiến trúc hiện tại, khách có thấy trạng thái mới không? Em giải thích cơ chế và nêu hệ quả khi nhiều người dùng.",
  "options": [
   "Không, vì đơn của khách nằm trong localStorage của máy khách còn admin sửa trên máy admin hoặc trên dữ liệu tĩnh, hai bên không đồng bộ; khách chỉ thấy trạng thái mới nếu dữ liệu được đẩy về cùng nguồn, điều mà kiến trúc tĩnh hiện tại không làm được, nên trạng thái đơn chỉ mang tính mô phỏng.",
   "Có, vì orders.json là file dùng chung, admin sửa file là mọi máy khách tự động thấy thay đổi ngay khi tải lại trang.",
   "Có, vì admin sửa đơn sẽ gọi API /api/order/update trên server.js và server đẩy thông báo realtime xuống trình duyệt khách.",
   "Có, vì localStorage được đồng bộ giữa các máy qua tài khoản đăng nhập, giống như lưu trên cloud."
  ],
  "correct": [
   0
  ],
  "explanation": "Đây là hệ quả trực tiếp của việc lưu đơn ở localStorage. Khi khách đặt hàng, đơn được ghi vào bảng orders trong localStorage của máy khách. Khi admin vào trang quản trị, admin thao tác trên dữ liệu của máy admin (hoặc trên orders.json tĩnh khi deploy), không có kênh đồng bộ nào nối hai bên. Vì vậy khách không thấy trạng thái mới, và trạng thái đơn trong đồ án chỉ mang tính mô phỏng để minh họa luồng nghiệp vụ. Khi nhiều người dùng, mỗi người có một bản orders riêng, admin không có cái nhìn tổng hợp thật về đơn của tất cả khách. Cách sửa là đưa đơn hàng về backend có cơ sở dữ liệu dùng chung, admin và khách đọc cùng một nguồn. Các phương án còn lại sai vì orders.json tĩnh không tự đồng bộ về máy khách, không có API cập nhật đơn hay realtime, và localStorage không đồng bộ qua tài khoản."
 },
 {
  "id": "bv10-a16",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Nếu phải chỉ ra ba điểm yếu lớn nhất của luồng mua hàng hiện tại khi có nhiều người cùng mua, em sẽ nêu những điểm nào và với từng điểm em đề xuất hướng khắc phục gì?",
  "options": [
   "Ba điểm yếu là tồn kho không được trừ và không khóa nên bán quá số lượng, đơn hàng lưu riêng trên từng máy nên admin và khách không thấy cùng dữ liệu, và dữ liệu client có thể bị sửa tay; hướng khắc phục là đưa đơn hàng và tồn kho về backend có cơ sở dữ liệu, dùng giao dịch nguyên tử khi trừ kho, và xác thực phân quyền phía server.",
   "Ba điểm yếu là giao diện chưa đẹp, chưa có dark mode và chưa hỗ trợ đa ngôn ngữ; hướng khắc phục là thuê thiết kế và thêm i18n.",
   "Ba điểm yếu là chatbot chưa thông minh, ảnh tải chậm và chưa có app mobile; hướng khắc phục là đổi model AI, nén ảnh và làm app.",
   "Ba điểm yếu là chưa có thanh toán thật, chưa có vận chuyển thật và chưa có tổng đài; hướng khắc phục là ký hợp đồng với ngân hàng và đơn vị vận chuyển."
  ],
  "correct": [
   0
  ],
  "explanation": "Ba điểm yếu đúng theo những gì nhóm đã thừa nhận và thể hiện trong code: thứ nhất, tồn kho chỉ kiểm tra phía client trên products.json tĩnh, không có bước trừ kho hay khóa, nên nhiều người cùng mua một món còn một cái thì tất cả đều đặt được; thứ hai, đơn hàng lưu trong localStorage của từng máy, nên admin không thấy đơn của khách và khách không thấy cập nhật trạng thái từ admin; thứ ba, dữ liệu client có thể bị sửa tay qua DevTools, ảnh hưởng đến giá và trạng thái đơn. Hướng khắc phục tương ứng là đưa nghiệp vụ đơn hàng và tồn kho về backend có cơ sở dữ liệu, dùng giao dịch hoặc khóa lạc quan để trừ kho nguyên tử, và xác thực phân quyền phía server thay vì chỉ ẩn UI. Các phương án còn lại nêu vấn đề giao diện, chatbot hay thanh toán thật, không phải điểm yếu cốt lõi của luồng mua hàng khi nhiều người cùng mua."
 }
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_BV10; }
