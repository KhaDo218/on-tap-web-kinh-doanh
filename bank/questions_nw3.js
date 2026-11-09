// Cau hoi bo sung bam sat bao cao final - nw3 (20 cau)
const QUESTIONS_NW3 = [
 {
  "id": "nw3-a01",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "topic": "code",
  "question": "Trong product-card.js, hàm createProductCard dựng thẻ sản phẩm bằng cách tạo từng phần tử DOM (div, img, h3, a...) rồi appendChild thay vì nối chuỗi HTML. Vì sao nhóm chọn cách dựng DOM trực tiếp cho thẻ sản phẩm thay vì sinh chuỗi HTML như khung lọc?",
  "options": [
   "Vì thẻ sản phẩm có nút tim gắn sự kiện onclick trực tiếp và gán thuộc tính như alt, loading, aria-label cho từng phần tử, dựng DOM giúp gắn handler và thuộc tính an toàn, tránh phải nối chuỗi onclick trong HTML",
   "Vì dựng DOM luôn chạy nhanh hơn nối chuỗi HTML trong mọi trường hợp nên nhóm ưu tiên hiệu năng",
   "Vì trình duyệt không cho phép dùng innerHTML để hiển thị ảnh sản phẩm",
   "Vì nhóm chưa biết cách nối chuỗi HTML nên buộc phải dùng createElement"
  ],
  "correct": [
   0
  ],
  "explanation": "Thẻ sản phẩm cần gắn sự kiện cho nút tim (toggleWishlistProduct), gán alt cho ảnh, loading lazy, decoding async, aria-label cho nút. Dựng DOM trực tiếp cho phép gán các thuộc tính và handler bằng code thay vì nhét chuỗi onclick vào HTML, vừa an toàn vừa dễ bảo trì. Còn khung lọc sinh chuỗi HTML vì nội dung tĩnh, ít tương tác phức tạp. Giảng viên có thể hỏi ngược lại khi nào nên dùng cách nào."
 },
 {
  "id": "nw3-a02",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "code",
  "question": "Trong catalog-filter.js, hàm boDau biến 'Ghế bành' thành 'ghe banh' bằng cách gọi normalize('NFD'), thay dải ký tự dấu bằng rỗng rồi thay 'đ' thành 'd'. Vì sao phải làm hai bước tách dấu và thay đ riêng thay vì chỉ dùng một biểu thức?",
  "options": [
   "Vì normalize NFD tách nguyên âm thành ký tự gốc cộng dấu kết hợp nên xóa được dải dấu, nhưng chữ đ không phải nguyên âm có dấu kết hợp nên phải thay riêng bằng d",
   "Vì normalize NFD không xử lý được chữ thường nên phải thay đ sau khi đã chuyển chữ hoa",
   "Vì dải dấu trong JavaScript chỉ áp dụng cho chữ số nên phải thay đ thủ công",
   "Vì bước thay đ phải chạy trước normalize mới đúng thứ tự"
  ],
  "correct": [
   0
  ],
  "explanation": "Unicode NFD tách các nguyên âm có dấu tiếng Việt thành ký tự gốc cộng dấu tổ hợp, nên xóa dải dấu là xong phần lớn. Nhưng chữ đ là ký tự riêng, không phân rã thành d cộng dấu, nên phải thay thủ công. Thiếu bước này thì 'đèn' không khớp 'den'. Đây là điểm hay bị hỏi khi giải thích tìm kiếm không dấu."
 },
 {
  "id": "nw3-a03",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "code",
  "question": "Hàm khopTu trong catalog-filter.js chỉ cho khớp phần đầu khi từ khóa dài từ 4 ký tự trở lên, còn từ khóa ngắn hơn phải trùng hẳn. Vì sao nhóm đặt ngưỡng 4 ký tự thay vì cho khớp phần đầu với mọi độ dài?",
  "options": [
   "Vì từ khóa ngắn như 'ban' nếu cho khớp phần đầu sẽ kéo theo 'bảng', 'bánh', 'bàn' lẫn lộn, còn từ dài như 'sofa' khớp phần đầu chỉ mở rộng hợp lý sang 'sofas'",
   "Vì JavaScript không cho phép so sánh chuỗi dưới 4 ký tự bằng indexOf",
   "Vì từ khóa dưới 4 ký tự luôn là tiếng Anh nên không cần khớp phần đầu",
   "Vì ngưỡng 4 ký tự giúp giảm số lần gọi hàm xuống một nửa"
  ],
  "correct": [
   0
  ],
  "explanation": "Khớp phần đầu với từ ngắn gây nhiễu nặng vì tiếng Việt nhiều từ cùng gốc. Ngưỡng 4 ký tự là cân bằng giữa mở rộng hợp lý (sofa, sofas) và tránh bắt nhầm (ban không kéo bảng). Đây là quyết định thiết kế thực tế của nhóm, giảng viên có thể hỏi vì sao không dùng thuật toán khoảng cách sửa lỗi thay thế."
 },
 {
  "id": "nw3-a04",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "code",
  "question": "Hàm diemTimKiem chỉ tìm trong tên, thương hiệu, chất liệu, màu và nhóm chất liệu, nhóm màu, cố tình không tìm trong mô tả sản phẩm. Vì sao nhóm loại mô tả ra khỏi phạm vi tìm kiếm?",
  "options": [
   "Vì mô tả dài và nhắc nhiều thứ không phải sản phẩm, tìm trong đó sẽ khiến 'bàn trà' ra khăn trải bàn hay 'ghế' ra bàn ăn có nhắc tới ghế",
   "Vì mô tả sản phẩm không được lưu trong JSON nên không thể tìm",
   "Vì tìm trong mô tả khiến trang tải chậm hơn hẳn do mô tả quá dài",
   "Vì mô tả chứa ký tự đặc biệt làm hỏng hàm boDau"
  ],
  "correct": [
   0
  ],
  "explanation": "Mô tả thường nhắc tới nhiều món khác trong cùng bộ, nên tìm trong mô tả gây kết quả nhiễu. Giới hạn ở tên, thương hiệu, chất liệu, màu giúp kết quả sát ý người dùng. Đây là đánh đổi giữa độ phủ và độ chính xác, giảng viên có thể hỏi cách cân bằng nếu muốn tìm rộng hơn."
 },
 {
  "id": "nw3-a05",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "topic": "code",
  "question": "Trong catalog-filter.js, hàm scheduleFilterChange dùng clearTimeout rồi setTimeout 150ms trước khi gọi onFilterChange, còn ô tìm kiếm dùng onFilterSearchInput với 300ms. Vì sao hai chỗ dùng hai mốc thời gian khác nhau?",
  "options": [
   "Vì bấm checkbox hay radio là thao tác dứt khoát nên chỉ cần gộp các lần bấm liên tiếp trong 150ms, còn gõ phím liên tục nên cần 300ms để khách ngừng gõ hẳn mới lọc",
   "Vì ô tìm kiếm chạy trên thiết bị yếu hơn nên phải chờ lâu hơn",
   "Vì checkbox không phát sự kiện change nên phải chờ lâu hơn để bắt kịp",
   "Vì 150ms là giới hạn tối đa của setTimeout trong trình duyệt"
  ],
  "correct": [
   0
  ],
  "explanation": "Đây là debounce: gộp nhiều sự kiện liên tiếp thành một lần xử lý. Bấm checkbox dứt khoát nên 150ms đủ gộp, gõ phím thì cần 300ms để không lọc giữa chừng từng ký tự. Hai mốc khác nhau phản ánh nhịp thao tác khác nhau. Giảng viên có thể hỏi nếu bỏ debounce thì chuyện gì xảy ra với hiệu năng."
 },
 {
  "id": "nw3-a06",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "code",
  "question": "Hàm ganLocNgay trong catalog-filter.js gắn một listener change lên cả khung lọc thay vì gắn cho từng ô input, và dùng cờ data-loc-ngay để không gắn lại. Cách này dựa trên cơ chế gì và vì sao có lợi?",
  "options": [
   "Dựa trên event delegation: sự kiện change từ ô con nổi bọt lên khung, một listener xử lý mọi ô kể cả ô sinh sau, cờ data-loc-ngay tránh gắn trùng khi khung được vẽ lại",
   "Dựa trên event capturing: sự kiện đi từ khung xuống ô con nên chỉ cần một listener ở khung",
   "Dựa trên MutationObserver bắt mọi thay đổi thuộc tính của ô input",
   "Dựa trên việc gán thuộc tính onchange trực tiếp vào từng ô khi vẽ"
  ],
  "correct": [
   0
  ],
  "explanation": "Change event nổi bọt nên listener ở khung bắt được mọi ô con, kể cả ô thêm sau này, đỡ phải gắn từng ô. Cờ data-loc-ngay đảm bảo chỉ gắn một lần dù renderFilterPanel gọi lại. Đây là event delegation kinh điển. Giảng viên có thể hỏi khác biệt giữa bubbling và capturing."
 },
 {
  "id": "nw3-a07",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "code",
  "question": "Trong ganLocNgay, nhóm dùng MutationObserver theo dõi phần tử productCount hoặc lblResultCount để chép nội dung sang nút filter-live-count ở đáy khung lọc. Vì sao phải dùng MutationObserver thay vì gán text trực tiếp sau khi lọc?",
  "options": [
   "Vì số kết quả do trang tự cập nhật ở chỗ khác, observer giúp khung lọc luôn đồng bộ mà không phải sửa mọi chỗ cập nhật số đếm trong trang",
   "Vì MutationObserver là cách duy nhất đọc được textContent của một phần tử",
   "Vì gán text trực tiếp sẽ làm hỏng bộ lọc đang chọn",
   "Vì observer giúp giảm số lần lọc xuống còn một lần mỗi trang"
  ],
  "correct": [
   0
  ],
  "explanation": "Số kết quả được trang cập nhật ở nhiều luồng khác nhau, nếu gán tay phải nhớ sửa mọi chỗ. Observer tự động chép khi nguồn đổi, giữ khung lọc đồng bộ mà không xâm lấn code trang. Đây là cách tách trách nhiệm gọn. Giảng viên có thể hỏi nhược điểm của observer nếu nguồn đổi quá thường xuyên."
 },
 {
  "id": "nw3-a08",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "topic": "code",
  "question": "Hàm filterStateToQuery trong catalog-filter.js dùng encodeURIComponent cho từ khóa, chất liệu, màu, thương hiệu khi dựng chuỗi truy vấn. Vì sao bắt buộc phải mã hóa các giá trị này?",
  "options": [
   "Vì giá trị có thể chứa dấu cách, dấu phẩy, ký tự tiếng Việt hoặc ký tự đặc biệt, không mã hóa sẽ làm hỏng cấu trúc tham số trên URL",
   "Vì encodeURIComponent giúp URL ngắn hơn đáng kể",
   "Vì trình duyệt chặn mọi URL chứa chữ có dấu",
   "Vì hàm getParam chỉ đọc được giá trị đã mã hóa"
  ],
  "correct": [
   0
  ],
  "explanation": "Tên sản phẩm, chất liệu, thương hiệu có dấu cách và tiếng Việt, dấu phẩy dùng phân tách nhiều giá trị. Không mã hóa thì tham số bị cắt sai. encodeURIComponent đảm bảo URL hợp lệ và getParam đọc lại đúng. Giảng viên có thể hỏi vì sao không mã hóa cả dấu phẩy phân tách."
 },
 {
  "id": "nw3-a09",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "code",
  "question": "Trong sortProductList, trước khi so sánh nhóm đặt thuộc tính _viTri cho từng phần tử rồi dùng làm tiêu chí phụ cuối cùng khi các tiêu chí khác bằng nhau. Vì sao cần _viTri thay vì để sort tự do khi hòa?",
  "options": [
   "Vì khi các tiêu chí bằng nhau, thứ tự sort không ổn định giữa các trình duyệt, _viTri giữ nguyên thứ tự gốc để kết quả hiển thị nhất quán mỗi lần lọc",
   "Vì _viTri giúp sắp xếp theo giá chính xác hơn",
   "Vì JavaScript bắt buộc comparator phải trả về số khác 0",
   "Vì _viTri là trường bắt buộc của mọi sản phẩm trong JSON"
  ],
  "correct": [
   0
  ],
  "explanation": "Khi comparator trả 0, thứ tự phụ thuộc cài đặt, có thể đổi giữa các lần và trình duyệt. Ghi lại vị trí gốc rồi dùng làm chốt cuối giúp kết quả ổn định, tránh sản phẩm nhảy chỗ khi lọc lại. Đây là mẹo thực tế hay bị hỏi khi bàn về sort ổn định."
 },
 {
  "id": "nw3-a10",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "code",
  "question": "Trong sortProductList, nhóm luôn đẩy sản phẩm hết hàng xuống cuối bất kể tiêu chí sắp xếp nào, kể cả khi sắp theo giá tăng dần. Vì sao nhóm chọn quy tắc này thay vì để hết hàng nằm đúng vị trí theo giá?",
  "options": [
   "Vì khách đang mua sắm cần thấy món mua được trước, món hết hàng chỉ gây nhiễu nếu chen lên đầu danh sách theo giá",
   "Vì sản phẩm hết hàng không có trường price nên không thể so sánh giá",
   "Vì trình duyệt tự đẩy phần tử có stock_quantity bằng 0 xuống cuối",
   "Vì nhóm muốn giấu sản phẩm hết hàng khỏi người dùng hoàn toàn"
  ],
  "correct": [
   0
  ],
  "explanation": "Đây là quyết định UX trong code: ưu tiên món mua được lên trước, hết hàng dồn cuối để không cản trải nghiệm mua. Sản phẩm vẫn hiển thị chứ không bị giấu. Giảng viên có thể hỏi nếu khách muốn xem riêng món hết hàng thì xử lý thế nào, gợi ý dùng bộ lọc còn hàng."
 },
 {
  "id": "nw3-a11",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "topic": "code",
  "question": "Hàm renderFilterPagination chỉ hiện các nút trang 1, trang cuối và các trang quanh trang hiện tại, chèn dấu ba chấm cho khoảng bị lược. Vì sao nhóm không hiện đủ mọi số trang?",
  "options": [
   "Vì danh sách có thể nhiều trang, hiện đủ sẽ làm thanh phân trang tràn và rối, lược bớt giúp khách thấy trang đầu, trang cuối và vùng lân cận mà vẫn gọn",
   "Vì trình duyệt giới hạn số nút button trên một trang",
   "Vì các trang ở giữa không thể bấm tới được nếu không hiện",
   "Vì hàm goToFilterPage chỉ nhận trang 1 và trang cuối"
  ],
  "correct": [
   0
  ],
  "explanation": "Đây là kiểu phân trang rút gọn quen thuộc: luôn thấy trang đầu, cuối và lân cận, phần xa thay bằng dấu ba chấm. Vừa gọn vừa đủ điều hướng. Giảng viên có thể hỏi điều kiện Math.abs(i - page) <= 1 nghĩa là gì và vì sao chọn 1."
 },
 {
  "id": "nw3-a12",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "code",
  "question": "Trong product-card.js, hàm toggleWishlistProduct lưu danh sách yêu thích vào object wishlists theo khóa là user.id hoặc chuỗi guest nếu chưa đăng nhập. Vì sao nhóm tách danh sách theo khóa người dùng thay vì một mảng chung?",
  "options": [
   "Vì mỗi người có danh sách riêng, tách theo khóa để khách vãng lai và từng tài khoản không thấy lẫn danh sách của nhau trên cùng trình duyệt",
   "Vì localStorage không cho lưu mảng phẳng",
   "Vì chuỗi guest giúp mã hóa danh sách an toàn hơn",
   "Vì mỗi sản phẩm chỉ được lưu một lần cho toàn hệ thống"
  ],
  "correct": [
   0
  ],
  "explanation": "wishlists là object ánh xạ khóa người dùng sang mảng id sản phẩm. Tách theo khóa tránh lẫn danh sách giữa các tài khoản và khách vãng lai trên cùng máy. Đây là cấu trúc lưu trữ thực tế của nhóm. Giảng viên có thể hỏi nếu đăng nhập sau khi đã lưu với tư cách guest thì xử lý ra sao."
 },
 {
  "id": "nw3-a13",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "code",
  "question": "Hàm createRatingRow trong product-card.js dùng biến cardRatingMap lưu kết quả getRatingMap và chỉ gọi lại khi resetCardRating được kích hoạt. Vì sao nhóm cache bảng đánh giá thay vì gọi getRatingMap cho từng thẻ?",
  "options": [
   "Vì mỗi thẻ gọi lại sẽ đọc và tính toán cả bảng reviews nhiều lần, cache một lần cho cả trang giúp giảm việc lặp và chỉ làm mới khi khách vừa gửi đánh giá",
   "Vì getRatingMap chỉ được phép gọi một lần trong toàn bộ vòng đời trang",
   "Vì cache giúp điểm đánh giá luôn đúng dù dữ liệu đổi",
   "Vì bảng reviews quá lớn nên không thể đọc lại lần hai"
  ],
  "correct": [
   0
  ],
  "explanation": "Một trang hiện hàng chục thẻ, mỗi thẻ gọi getRatingMap sẽ tính lại toàn bảng reviews, lãng phí. Cache một lần rồi dùng lại, reset khi có đánh giá mới để cập nhật điểm. Đây là tối ưu thực tế. Giảng viên có thể hỏi rủi ro của cache là gì, chính là dữ liệu cũ nếu quên reset."
 },
 {
  "id": "nw3-a14",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "code",
  "question": "Trong createProductCard, nhãn tồn kho chỉ hiện 'Còn N' khi stock_quantity từ 5 trở xuống, còn nhiều hơn thì không hiện nhãn nào, và đồ cũ còn hàng đã ghi 'Duy nhất 1 món' ở dòng trên. Vì sao nhóm chọn ngưỡng 5 và tránh hiện trùng?",
  "options": [
   "Vì chỉ báo khi sắp hết giống shop thật để tạo cảm giác khan hiếm có cơ sở, và tránh hiện hai nhãn cùng ý giúp giá với giá gốc nằm gọn trên một hàng",
   "Vì số tồn kho lớn hơn 5 không đọc được từ JSON",
   "Vì nhãn tồn kho chỉ dành cho sản phẩm đồ cũ",
   "Vì trình duyệt giới hạn số badge trên một thẻ sản phẩm"
  ],
  "correct": [
   0
  ],
  "explanation": "Ngưỡng 5 là quy ước thương mại: chỉ nhấn mạnh khi sắp hết. Đồ cũ đã có dòng duy nhất 1 món nên không lặp lại. Cách này giữ bố cục giá gọn trên một hàng. Giảng viên có thể hỏi vì sao không hiện số tồn chính xác mọi lúc, gợi ý vì không cần thiết và rối mắt."
 },
 {
  "id": "nw3-a15",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "topic": "code",
  "question": "Trong product-card.js, nút tim gọi e.preventDefault và e.stopPropagation trước khi toggleWishlistProduct. Vì sao cần cả hai lời gọi này?",
  "options": [
   "Vì nút tim nằm trong vùng ảnh có liên kết tới trang chi tiết, preventDefault chặn điều hướng còn stopPropagation chặn sự kiện nổi lên phần tử cha cũng xử lý click",
   "Vì preventDefault chặn sự kiện nổi bọt còn stopPropagation chặn điều hướng mặc định",
   "Vì chỉ cần một trong hai là đủ, nhóm gọi cả hai cho chắc",
   "Vì hai lời gọi này giúp lưu yêu thích vào localStorage nhanh hơn"
  ],
  "correct": [
   0
  ],
  "explanation": "Nút tim đặt đè lên ảnh có thẻ a, bấm tim không được nhảy trang nên cần preventDefault. Đồng thời chặn nổi bọt để click không bị phần tử cha xử lý tiếp. Hai lời gọi giải quyết hai việc khác nhau. Giảng viên có thể hỏi nếu thiếu stopPropagation thì lỗi gì xảy ra."
 },
 {
  "id": "nw3-a16",
  "chapter": 12,
  "difficulty": 2,
  "type": "multiple",
  "topic": "code",
  "question": "Khi rà soát catalog-filter.js, nhóm thấy hàm getFilterState đọc trực tiếp giá trị từ các phần tử theo id cố định như txtFilterSearch, cboFilterCategory, chkFilterInStock. Những điểm yếu nào có thể phát sinh từ cách viết này?",
  "options": [
   "Nếu khung lọc chưa được vẽ hoặc thiếu một phần tử id tương ứng thì getFilterState ném lỗi null khi truy cập value",
   "Nếu trang dùng hai khung lọc cùng lúc thì các id trùng nhau khiến đọc nhầm khung",
   "Hàm không thể đọc được giá trị của ô checkbox vì checkbox không có thuộc tính value",
   "Hàm tự động mã hóa mọi giá trị đọc được nên không cần encodeURIComponent khi dựng URL"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Đọc theo id cố định khiến hàm phụ thuộc chặt vào cấu trúc DOM: thiếu phần tử là lỗi null, hai khung trùng id là đọc nhầm. Cách sửa là truyền container hoặc dùng querySelector trong phạm vi khung. Hai phương án còn lại sai vì checkbox vẫn có value và hàm không tự mã hóa. Giảng viên có thể hỏi cách refactor để giảm phụ thuộc id."
 },
 {
  "id": "nw3-a17",
  "chapter": 12,
  "difficulty": 2,
  "type": "multiple",
  "topic": "code",
  "question": "Trong filterProductList, hàm gán thuộc tính _diem lên chính object sản phẩm để lưu điểm khớp tìm kiếm, và sortProductList cũng gán _viTri lên sản phẩm. Những hệ quả nào có thể xảy ra với cách ghi đè lên object dữ liệu gốc này?",
  "options": [
   "Thuộc tính tạm bị lẫn vào dữ liệu sản phẩm, nếu sau này lưu lại vào localStorage hoặc xuất CSV sẽ dính các trường không mong muốn",
   "Nếu cùng một object sản phẩm được dùng ở hai nơi tính điểm khác nhau thì giá trị _diem có thể bị ghi đè lẫn nhau",
   "Việc gán thuộc tính mới làm thay đổi id sản phẩm khiến liên kết chi tiết hỏng",
   "Việc gán thuộc tính mới khiến trình duyệt không thể sắp xếp mảng nữa"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Ghi trực tiếp lên object gốc làm bẩn dữ liệu và có thể bị ghi đè khi tính lại. Cách sửa là tính điểm trong biến cục bộ hoặc tạo bản sao trước khi gán. Hai phương án còn lại sai vì id không đổi và sort vẫn chạy. Giảng viên có thể hỏi cách tránh ô nhiễm dữ liệu, gợi ý dùng Map phụ."
 },
 {
  "id": "nw3-a18",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "topic": "code",
  "question": "Trong product-card.js, hàm showWishlistToast gọi roomEscape cho tên sản phẩm trước khi chèn vào chuỗi HTML của thông báo. Nếu bỏ roomEscape thì rủi ro gì xảy ra và vì sao vẫn cần escape dù tên sản phẩm do nhóm nhập?",
  "options": [
   "Tên sản phẩm chứa ký tự như dấu nháy hay thẻ HTML sẽ phá vỡ chuỗi hoặc chèn mã độc vào thông báo, escape phòng cả dữ liệu nhập sai lẫn dữ liệu sau này đến từ nguồn ngoài như marketplace",
   "Bỏ roomEscape chỉ làm thông báo hiển thị sai font chữ, không ảnh hưởng bảo mật",
   "roomEscape dùng để mã hóa tên sản phẩm thành id duy nhất trong localStorage",
   "roomEscape giúp thông báo tự động dịch sang tiếng Anh khi cần"
  ],
  "correct": [
   0
  ],
  "explanation": "Chèn chuỗi vào innerHTML mà không escape là lỗ hổng XSS kinh điển. Dù dữ liệu hiện do nhóm nhập, marketplace đồ cũ cho phép người dùng đăng bán nên tên có thể đến từ nguồn ngoài. Escape là phòng thủ theo chiều sâu. Giảng viên có thể hỏi roomEscape khác gì textContent và khi nào dùng cách nào."
 },
 {
  "id": "nw3-a19",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "topic": "code",
  "question": "Trong catalog-filter.js, hàm setFilterState sau khi gán giá trị cho cboFilterCategory và cboFilterBrand lại kiểm tra nếu giá trị đọc lại khác giá trị mong muốn thì gán về chuỗi rỗng. Vì sao cần bước kiểm tra này?",
  "options": [
   "Vì nếu giá trị trong URL không còn tồn tại trong danh sách option, select sẽ giữ giá trị cũ hoặc rỗng không như mong đợi, kiểm tra giúp đưa về trạng thái an toàn thay vì lọc theo giá trị không tồn tại",
   "Vì trình duyệt luôn tự đặt select về option đầu tiên nên phải kiểm tra để khôi phục",
   "Vì select không nhận giá trị chuỗi rỗng nên phải kiểm tra trước khi gán",
   "Vì bước kiểm tra giúp mã hóa lại giá trị trước khi đưa lên URL"
  ],
  "correct": [
   0
  ],
  "explanation": "Khi URL chứa danh mục hoặc thương hiệu đã bị xóa khỏi dữ liệu, select không có option tương ứng nên giá trị gán vào không ăn. Kiểm tra đọc lại rồi đặt rỗng giúp bộ lọc rơi về trạng thái hợp lệ thay vì lọc theo giá trị ma. Đây là phòng lỗi dữ liệu cũ trong link chia sẻ."
 },
 {
  "id": "nw3-a20",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "topic": "code",
  "question": "Hàm renderActiveFilterTags dựng nhãn lọc đang chọn bằng cách gắn chuỗi lệnh vào thuộc tính onclick của chip, ví dụ boChonOLoc hay gán value rỗng rồi gọi onFilterChange. Cách viết này có điểm yếu gì và hướng sửa phù hợp?",
  "options": [
   "Chuỗi lệnh trong onclick dễ vỡ khi giá trị chứa dấu nháy và khó bảo trì, nên sửa bằng cách tạo phần tử, gắn addEventListener với closure giữ đúng giá trị cần bỏ thay vì nối chuỗi",
   "Cách viết này không chạy được trên trình duyệt hiện đại vì onclick đã bị loại bỏ",
   "Cách viết này khiến nhãn lọc không thể hiển thị tiếng Việt có dấu",
   "Cách viết này làm mất trạng thái lọc của các tiêu chí khác mỗi lần bấm"
  ],
  "correct": [
   0
  ],
  "explanation": "Nối chuỗi lệnh vào onclick vừa dễ lỗi khi giá trị có dấu nháy vừa khó đọc, khó gỡ. Sửa bằng createElement, gắn addEventListener và closure giữ giá trị cần bỏ là cách sạch hơn. Đây là điểm yếu thực tế nhóm có thể nhận và nêu hướng cải thiện. Giảng viên có thể hỏi vì sao closure an toàn hơn chuỗi."
 }
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_NW3; }
