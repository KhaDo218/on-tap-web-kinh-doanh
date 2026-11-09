// Ngan hang on bao ve RoomCraft - bv11.js (25 cau) - da ap audit
const QUESTIONS_BV11 = [
 {
  "id": "bv11-a01",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Thầy sẽ hỏi: nhóm em có bao nhiêu trang quản trị và mỗi trang phụ trách việc gì? Em hãy kể tên và nêu chức năng chính của từng trang admin trong RoomCraft.",
  "options": [
   "Có 8 trang admin trong thư mục scripts/admin/: dashboard (thống kê tổng quan), rooms (quản lý phòng mẫu), products (quản lý sản phẩm mới), categories (danh mục), marketplace (đồ cũ), orders (đơn hàng), reviews (duyệt đánh giá), users (người dùng); mỗi trang có HTML, CSS riêng trong css/pages và JS trong js/pages, dùng chung admin-sidebar.js và admin-export.js",
   "Nhóm em chỉ có 3 trang admin là dashboard, products và orders, các phần còn lại quản lý trực tiếp trong file JSON",
   "Có 8 trang nhưng tất cả đều nằm trong một file admin.html duy nhất và chuyển tab bằng JavaScript",
   "Có 8 trang admin nhưng mỗi trang là một ứng dụng React riêng biệt được build sẵn"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu: dự án RoomCraft có đúng 8 màn hình quản trị nằm trong thư mục scripts/admin/, gồm dashboard, rooms, products, categories, marketplace, orders, reviews, users. Mỗi trang theo đúng cấu trúc 3 file của dự án: file HTML trong scripts/admin/, file CSS trong scripts/css/pages/, file JS trong scripts/js/pages/. Các trang dùng chung hai thành phần là admin-sidebar.js để render thanh điều hướng bên trái và admin-export.js để xuất dữ liệu. Các phương án còn lại sai vì nhóm không gộp tất cả vào một file admin.html, không dùng React hay build tool, và không bỏ bớt trang nào — đủ 8 trang như mô tả trong context và cấu trúc thư mục thật của repo."
 },
 {
  "id": "bv11-a02",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Trang dashboard quản trị của RoomCraft hiển thị những chỉ số và biểu đồ gì? Em hãy mô tả các nhóm thông tin chính mà thầy sẽ thấy khi mở trang này.",
  "options": [
   "Bốn thẻ chỉ số lớn gồm doanh thu đơn đã giao, số đơn hàng, số người dùng và số đơn chờ xử lý; bên dưới là các nhóm biểu đồ: doanh thu 6 tháng, đơn theo trạng thái, phương thức thanh toán, đơn 30 ngày gần nhất, phễu tiến trình đơn, đơn theo trạng thái qua các tháng, số đơn và doanh thu theo danh mục, tỷ trọng doanh thu theo danh mục, người dùng mới theo tháng, đánh giá theo số sao, kèm hai bảng sản phẩm bán chạy và sắp hết hàng",
   "Dashboard chỉ có một biểu đồ doanh thu theo tháng và một bảng danh sách đơn hàng gần đây, không có thẻ chỉ số",
   "Dashboard chỉ hiển thị số lượng sản phẩm và số lượng phòng mẫu, không liên quan đến đơn hàng hay doanh thu",
   "Dashboard hiển thị toàn bộ dữ liệu thô dạng bảng JSON để admin tự đọc, không có biểu đồ"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trang scripts/admin/index.html có bốn thẻ thống kê lớn: doanh thu tính trên các đơn đã giao thành công, tổng số đơn hàng, số người dùng và số đơn đang chờ xử lý. Phía dưới chia thành nhiều nhóm: nhóm biểu đồ chính gồm doanh thu 6 tháng gần nhất theo ngày giao thành công và đơn hàng theo trạng thái; nhóm biểu đồ phân tích gồm phương thức thanh toán và đơn hàng 30 ngày gần nhất; nhóm luồng đơn hàng gồm phễu tiến trình và đơn theo trạng thái qua các tháng; nhóm sản phẩm và danh mục gồm số đơn, doanh thu theo danh mục và tỷ trọng doanh thu; nhóm khách hàng và đánh giá gồm người dùng mới theo tháng và phân bố đánh giá theo số sao; cuối cùng là hai bảng sản phẩm bán chạy và sản phẩm sắp hết hàng. Các phương án còn lại sai vì dashboard thực tế rất nhiều biểu đồ chứ không chỉ một, và không hiển thị JSON thô."
 },
 {
  "id": "bv11-a03",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: vì sao chỉ số doanh thu trên dashboard lại tính theo ngày giao thành công mà không phải theo ngày tạo đơn? Em trình bày lý do nghiệp vụ và cách nhóm em hiện thực điều đó.",
  "options": [
   "Vì doanh thu chỉ thực sự phát sinh khi đơn được giao thành công, nên nhóm em lọc các đơn có trạng thái giao thành công rồi cộng tiền theo ngày giao; điều này tránh đếm những đơn còn chờ hoặc đã huỷ vào doanh thu, và biểu đồ 6 tháng cũng nhóm theo ngày giao để phản ánh đúng dòng tiền thực tế",
   "Vì dữ liệu đơn hàng không lưu ngày tạo đơn nên buộc phải dùng ngày giao, không có lựa chọn nào khác",
   "Vì ngày giao luôn trùng với ngày tạo đơn trong dữ liệu mẫu nên hai cách tính cho kết quả giống nhau",
   "Vì nhóm em muốn doanh thu trông cao hơn nên chọn cách tính có lợi cho báo cáo"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Về nghiệp vụ, doanh thu chỉ được ghi nhận khi đơn hàng thực sự hoàn tất, tức là đã giao thành công; nếu tính theo ngày tạo đơn thì những đơn còn chờ xử lý hoặc đã huỷ vẫn bị cộng vào, làm sai lệch con số. Trong code, trang admin-index.js lọc đơn theo trạng thái giao thành công rồi cộng tổng tiền, nhóm theo ngày giao để vẽ biểu đồ doanh thu 6 tháng gần nhất, và phần tiêu đề biểu đồ ghi rõ 'theo ngày giao thành công'. Các phương án còn lại sai: dữ liệu đơn hàng có lưu ngày tạo đơn (biểu đồ đơn 30 ngày gần nhất dùng chính ngày tạo), ngày giao không trùng ngày tạo, và nhóm không chọn cách tính để làm đẹp số liệu mà chọn theo đúng bản chất nghiệp vụ."
 },
 {
  "id": "bv11-a04",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: biểu đồ phễu tiến trình đơn hàng trên dashboard hoạt động thế nào và có hạn chế gì? Em giải thích cách tính và điểm cần lưu ý khi đọc biểu đồ này.",
  "options": [
   "Tầng đầu là tổng số đơn, các tầng sau đếm số đơn đã đạt tới trạng thái đó (ví dụ đã xác nhận, đang giao, đã giao); hạn chế là dữ liệu không lưu lịch sử chuyển trạng thái nên chỉ phản ánh trạng thái hiện tại, không biết đơn đã đi qua những bước nào và mất bao lâu",
   "Phễu đếm số đơn theo từng tháng tạo đơn rồi cộng dồn, không liên quan đến trạng thái đơn hàng",
   "Phễu hiển thị số lượt truy cập trang sản phẩm giảm dần đến lúc mua, lấy dữ liệu từ Google Analytics",
   "Phễu tính tỷ lệ phần trăm doanh thu của từng trạng thái trên tổng doanh thu, không đếm số đơn"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong admin/index.html, phần mô tả phễu ghi rõ: tầng đầu là tổng đơn, các tầng sau tính số đơn đã đạt trạng thái đó, và dữ liệu không có trạng thái chờ xác nhận riêng. Điều này có nghĩa phễu chỉ là phép đếm lũy kế trên trạng thái hiện tại của mỗi đơn, chứ không phải dòng thời gian thực sự. Hạn chế lớn nhất là file orders.json không lưu lịch sử chuyển trạng thái, nên không thể biết một đơn đã từng ở trạng thái nào, chuyển lúc nào, mất bao lâu giữa các bước. Các phương án còn lại sai vì phễu không đếm theo tháng, không lấy dữ liệu analytics (dự án không tích hợp), và không tính theo doanh thu mà đếm theo số đơn."
 },
 {
  "id": "bv11-a05",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: chức năng CRUD trên các trang admin của RoomCraft thực chất lưu dữ liệu ở đâu và vì sao nhóm em chọn cách đó? Em trình bày cơ chế lưu và hệ quả.",
  "options": [
   "Thao tác thêm, sửa, xoá trên trang admin được lưu vào localStorage của trình duyệt đang dùng thông qua lớp store.js, không ghi ngược vào file JSON trên server; nhóm chọn cách này vì site deploy tĩnh trên GitHub Pages không có backend ghi file, đổi lại dữ liệu chỉ thấy trên máy đó và phải xuất JSON chép đè thủ công để cả nhóm cùng thấy",
   "Thao tác CRUD gọi API REST tới server.js và server.js ghi trực tiếp vào các file trong data/json nên mọi người đều thấy ngay",
   "Thao tác CRUD lưu vào một cơ sở dữ liệu MySQL đặt trên máy chủ của trường, kết nối qua PHP",
   "Thao tác CRUD chỉ đổi giao diện tạm thời, khi tải lại trang thì mất hết và không lưu ở đâu cả"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Lớp store.js trong scripts/js/core đọc dữ liệu từ data/json rồi cache vào localStorage, mọi thao tác thêm sửa xoá đều ghi vào localStorage của trình duyệt. Vì GitHub Pages chỉ phục vụ file tĩnh, không có tiến trình server nào ghi được file JSON, nên nhóm chọn localStorage cho phù hợp phạm vi môn học và miễn phí deploy. Hệ quả là thay đổi chỉ có trên máy đang thao tác; muốn cả nhóm và bản deploy cùng thấy thì phải dùng chức năng xuất JSON của admin-export.js, tải file về, chép đè vào data/json, tăng DATA_VERSION trong store.js rồi commit. Các phương án còn lại sai vì server.js chỉ phục vụ tĩnh và API chatbot, không ghi file JSON; dự án không dùng MySQL hay PHP; và dữ liệu CRUD có lưu thật trong localStorage chứ không mất khi tải lại."
 },
 {
  "id": "bv11-a06",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: file admin-export.js trong dự án RoomCraft làm gì và vì sao tên file là export nhưng nội dung lại xuất JSON chứ không phải CSV hay PDF? Em giải thích mục đích thật của file này.",
  "options": [
   "admin-export.js tạo một cửa sổ modal cho phép chọn bảng (sản phẩm mới, đồ cũ, danh mục), xem nội dung JSON đã định dạng, sao chép hoặc tải về đúng tên file trong data/json để chép đè; mục đích là chuyển thay đổi từ localStorage của một máy sang file dữ liệu chung để commit, nên nó xuất JSON chứ không phải báo cáo CSV hay PDF",
   "admin-export.js dùng để in hoá đơn PDF cho khách hàng, tên file là export vì nó xuất hoá đơn ra ngoài",
   "admin-export.js dùng để xuất file CSV báo cáo doanh thu theo tháng cho kế toán, không liên quan đến JSON",
   "admin-export.js chỉ là file trang trí, không được gọi ở đâu trong dự án và không có chức năng thật"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Đọc phần đầu file admin-export.js thấy rõ ghi chú: thêm sửa trên trang admin chỉ lưu trong localStorage của máy đang dùng, muốn cả nhóm cùng thấy thì xuất JSON, chép đè vào data/json, tăng DATA_VERSION trong store.js rồi commit. File định nghĩa bảng EXPORT_TABLES gồm products, used_products, categories, mỗi bảng có hàm lấy dữ liệu; hàm openJsonExport mở modal, fillJsonExport đổ JSON đã format vào textarea, copyJsonExport sao chép clipboard, downloadJsonExport tải file đúng tên. Vì vậy đây là công cụ đồng bộ dữ liệu qua JSON, không phải công cụ báo cáo. Các phương án còn lại sai vì file không in hoá đơn, không xuất CSV, và có được dùng thật ở các trang admin products, categories, marketplace."
 },
 {
  "id": "bv11-a07",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Thầy sẽ hỏi: khi xuất CSV cho Excel đọc tiếng Việt, nhóm em đã xử lý vấn đề gì và tại sao cần làm vậy? Em giải thích cơ chế BOM UTF-8 trong bối cảnh dự án.",
  "options": [
   "Nhóm em thêm BOM UTF-8 (ký tự đánh dấu thứ tự byte) vào đầu nội dung file CSV để Excel nhận đúng bảng mã và hiển thị tiếng Việt có dấu thay vì bị lỗi font; nếu thiếu BOM, Excel trên Windows thường đoán sai bảng mã và biến dấu thành ký tự lạ",
   "Nhóm em nén file CSV thành định dạng zip để Excel mở nhanh hơn, BOM chỉ là tên gọi khác của bước nén",
   "Nhóm em chuyển toàn bộ tiếng Việt sang không dấu trước khi xuất CSV để tránh lỗi font, không cần BOM",
   "Nhóm em dùng BOM để đánh dấu file CSV thuộc quyền admin, không liên quan đến hiển thị tiếng Việt"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. BOM là ba byte đặc biệt đặt ở đầu file, báo cho phần mềm đọc biết file đang dùng bảng mã UTF-8. Excel trên Windows khi mở file CSV không có BOM thường đoán theo bảng mã hệ thống, khiến các ký tự tiếng Việt có dấu như ư, ơ, đ, ạ bị hiển thị sai. Trong dự án, khi admin bấm xuất CSV ở các trang quản trị, hàm xuất tạo chuỗi CSV rồi ghép thêm ký tự BOM vào trước khi tạo Blob tải về, nhờ vậy mở bằng Excel vẫn đọc đúng tên sản phẩm, tên danh mục tiếng Việt. Các phương án còn lại sai: BOM không phải nén zip, nhóm không chuyển sang không dấu vì sẽ mất thông tin, và BOM không liên quan phân quyền."
 },
 {
  "id": "bv11-a08",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: chức năng xuất PDF trong trang admin RoomCraft được làm bằng cách nào và có ưu nhược điểm gì so với việc dùng thư viện tạo PDF? Em trình bày cơ chế và đánh giá.",
  "options": [
   "Nhóm em dùng window.print kèm stylesheet in riêng để trình duyệt tự render trang báo cáo ra PDF, không cần thư viện ngoài; ưu điểm là nhẹ, không phụ thuộc thư viện, giữ đúng giao diện đang thấy, nhược điểm là kết quả phụ thuộc trình duyệt, khó canh trang chính xác và người dùng phải tự chọn lưu thành PDF trong hộp thoại in",
   "Nhóm em dùng thư viện jsPDF nhúng từ CDN để tạo file PDF trực tiếp trong JavaScript, không dùng window.print",
   "Nhóm em gọi server.js để server dựng PDF bằng Node rồi trả file về cho trình duyệt tải xuống",
   "Nhóm em chụp ảnh màn hình trang báo cáo rồi ghép các ảnh thành file PDF bằng tay"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Cách làm của nhóm là mở hộp thoại in của trình duyệt bằng window.print, kèm một stylesheet chỉ áp dụng khi in để ẩn sidebar, nút bấm, menu và định dạng lại bảng cho vừa khổ giấy. Ưu điểm là không cần thêm thư viện, không tăng dung lượng tải trang, giao diện in giống hệt những gì admin đang thấy. Nhược điểm là kết quả phụ thuộc trình duyệt và cài đặt máy in, khó kiểm soát ngắt trang, và người dùng phải chọn 'Save as PDF' trong hộp thoại in chứ không tải file trực tiếp. Các phương án còn lại sai vì dự án không dùng jsPDF, server.js không dựng PDF, và nhóm không chụp ảnh ghép tay."
 },
 {
  "id": "bv11-a09",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: phân quyền admin trong RoomCraft được thực hiện ở đâu và bản chất bảo vệ là gì? Em nói thẳng điểm mạnh và điểm yếu của cách làm này.",
  "options": [
   "Phân quyền được kiểm tra phía client trong auth.js dựa trên thông tin người dùng lưu ở localStorage và trường vai trò trong users.json, roles.json; bản chất chỉ là ẩn giao diện và chặn điều hướng, người rành kỹ thuật vẫn sửa được localStorage hoặc gọi thẳng file HTML admin nên đây là điểm yếu nhóm đã thừa nhận, muốn chắc phải có backend xác thực thật",
   "Phân quyền được server.js kiểm tra bằng token JWT ký số, không thể giả mạo vì server xác thực chữ ký trước khi trả trang admin",
   "Phân quyền dựa vào địa chỉ IP, chỉ máy trong mạng của nhóm mới mở được trang admin",
   "Phân quyền dựa vào mật khẩu đặt trong file .env phía client, ai biết mật khẩu thì vào được còn không thì thôi"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong dự án, auth.js đọc thông tin đăng nhập từ localStorage, so vai trò với dữ liệu users.json và roles.json để quyết định có cho vào trang admin hay không, đồng thời admin-sidebar.js ẩn các mục không đúng quyền. Nhưng vì toàn bộ chạy trên trình duyệt, người dùng chỉ cần mở DevTools sửa localStorage hoặc gõ thẳng đường dẫn tới scripts/admin/index.html là có thể vào, dữ liệu JSON cũng tải công khai. Nhóm em thẳng thắn thừa nhận đây là điểm cần cải thiện: muốn bảo vệ thật phải có backend xác thực, kiểm tra quyền ở server trước khi trả dữ liệu và trang admin. Các phương án còn lại sai vì server.js không có JWT, không kiểm tra IP, và không có mật khẩu trong .env phía client."
 },
 {
  "id": "bv11-a10",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy sẽ hỏi tình huống: một người không phải admin mở DevTools, sửa localStorage để tự nhận vai trò admin rồi vào trang quản trị xoá sản phẩm. Với kiến trúc hiện tại của RoomCraft, chuyện gì xảy ra và nhóm em sẽ trả lời thầy thế nào về rủi ro này?",
  "options": [
   "Người đó vào được giao diện admin và xoá được sản phẩm trong localStorage của chính máy họ, nhưng không ảnh hưởng dữ liệu thật trên GitHub Pages vì file JSON chỉ đọc và mọi thay đổi nằm cục bộ; nhóm em thừa nhận đây là rủi ro của phân quyền client-side và hướng khắc phục là thêm backend xác thực, kiểm tra quyền ở server trước khi cho ghi dữ liệu",
   "Người đó bị chặn hoàn toàn vì server.js kiểm tra token ở mỗi request nên không thể sửa localStorage để vượt qua",
   "Người đó xoá được sản phẩm và thay đổi lan ngay ra toàn bộ người dùng khác vì dữ liệu được đồng bộ realtime qua WebSocket",
   "Người đó không mở được trang admin vì GitHub Pages tự phát hiện sửa localStorage và khoá tài khoản vĩnh viễn"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Vì kiểm tra quyền nằm hoàn toàn phía client, ai sửa được localStorage là qua được lớp kiểm tra giao diện. Tuy nhiên hậu quả bị giới hạn: dữ liệu thật nằm trong file JSON tĩnh trên GitHub Pages, trình duyệt chỉ đọc về rồi cache, thao tác xoá chỉ ghi vào localStorage của máy người đó, không lan sang người khác và không sửa được file trên repo. Nhóm em nên trả lời thẳng: đây là điểm yếu đã nhận diện, cách khắc phục đúng là có backend xác thực, kiểm tra quyền ở server trước khi trả dữ liệu nhạy cảm và trước khi cho ghi, đồng thời không đưa toàn bộ users.json ra công khai. Các phương án còn lại sai vì server.js không kiểm tra token, không có WebSocket đồng bộ realtime, và GitHub Pages không có cơ chế phát hiện sửa localStorage."
 },
 {
  "id": "bv11-a11",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: vì sao nhóm em chọn xuất CSV và PDF cho báo cáo admin thay vì làm một trang báo cáo động có bộ lọc thời gian đầy đủ? Em trình bày lý do và đánh giá đánh đổi.",
  "options": [
   "Vì mục tiêu của báo cáo là để admin lưu trữ, gửi cho người khác hoặc in ra, CSV mở được bằng Excel và PDF in được ngay, phù hợp với site tĩnh không có backend; đổi lại bộ lọc thời gian trên dashboard hiện chỉ là nút giữ chỗ chưa hoạt động, muốn phân tích sâu phải làm thêm backend hoặc xử lý phức tạp phía client",
   "Vì nhóm em không biết làm biểu đồ động nên đành xuất file tĩnh cho xong, không có đánh đổi gì",
   "Vì CSV và PDF là yêu cầu bắt buộc của môn học, nhóm không có lựa chọn nào khác và cũng không cần bộ lọc thời gian",
   "Vì xuất file giúp giấu dữ liệu khỏi người dùng thường, chỉ admin tải về được nên bảo mật hơn hiển thị trên web"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Với một site tĩnh, xuất CSV và PDF là cách thực dụng để đưa dữ liệu ra khỏi trình duyệt: CSV mở bằng Excel để lọc, tính toán tiếp; PDF in hoặc gửi báo cáo. Nhóm em chọn hướng này vì chi phí thấp, không cần server. Đánh đổi là trải nghiệm phân tích ngay trên web còn hạn chế: nút 'Bộ lọc thời gian' trên dashboard hiện là nút giữ chỗ bị disable, các biểu đồ cố định khung 6 tháng hoặc 30 ngày, muốn lọc tuỳ ý phải làm thêm. Các phương án còn lại sai vì nhóm có làm biểu đồ động bằng Chart.js, không phải bắt buộc môn học, và xuất file không phải cơ chế bảo mật vì ai cũng tải được."
 },
 {
  "id": "bv11-a12",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Thầy sẽ hỏi: trang quản lý đơn hàng trong admin cho phép làm những gì và trạng thái đơn hàng thay đổi thế nào? Em mô tả luồng xử lý đơn từ lúc khách đặt đến lúc giao.",
  "options": [
   "Trang orders cho admin xem danh sách đơn, lọc theo trạng thái, mở chi tiết và cập nhật trạng thái đơn; đơn đi qua các bước như chờ xử lý, đã xác nhận, đang giao, đã giao, huỷ, và mỗi lần đổi trạng thái được ghi vào localStorage rồi phản ánh lên dashboard ở các biểu đồ đơn theo trạng thái và doanh thu",
   "Trang orders chỉ để xem, admin không đổi được trạng thái, mọi thay đổi do khách tự bấm trong trang orders của khách",
   "Trang orders tự động gửi email cho khách mỗi khi đổi trạng thái thông qua server.js kết nối dịch vụ email",
   "Trang orders xoá đơn ngay khi khách thanh toán xong để giữ danh sách gọn"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trang scripts/admin/orders.html cùng file JS tương ứng cho phép xem danh sách đơn lấy từ orders.json qua store.js, lọc theo trạng thái, mở chi tiết từng đơn và cập nhật trạng thái. Các trạng thái thường gặp gồm chờ xử lý, đã xác nhận, đang giao, đã giao, đã huỷ. Khi admin đổi trạng thái, store.js ghi vào localStorage, sau đó dashboard đọc lại và cập nhật các biểu đồ như đơn theo trạng thái, phễu tiến trình, doanh thu theo ngày giao thành công. Các phương án còn lại sai vì admin có quyền đổi trạng thái, server.js không gửi email, và đơn không bị xoá sau thanh toán."
 },
 {
  "id": "bv11-a13",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: trang quản lý đánh giá reviews trong admin có vai trò gì trong luồng đánh giá sản phẩm? Em giải thích từ lúc khách gửi đánh giá đến lúc nó hiện trên trang sản phẩm.",
  "options": [
   "Khách gửi đánh giá ở trang chi tiết sản phẩm, đánh giá được lưu vào reviews.json qua store.js với trạng thái chờ duyệt; admin vào trang reviews để xem, duyệt hoặc từ chối, chỉ đánh giá đã duyệt mới hiển thị công khai và được tính vào biểu đồ đánh giá theo số sao trên dashboard",
   "Khách gửi đánh giá là hiện ngay lên trang sản phẩm, admin chỉ vào xoá nếu thấy không phù hợp, không có bước duyệt",
   "Đánh giá do admin tự nhập thay khách để tăng uy tín sản phẩm, khách không gửi được đánh giá",
   "Đánh giá được lưu thẳng vào file reviews.json trên GitHub qua API của GitHub, không qua admin"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong dự án, form đánh giá ở trang chi tiết sản phẩm cho khách nhập số sao và nội dung; dữ liệu được thêm vào bảng reviews qua store.js với trạng thái chờ duyệt. Trang scripts/admin/reviews.html cho admin xem danh sách, duyệt hoặc từ chối từng đánh giá. Chỉ đánh giá đã duyệt mới được render ở trang sản phẩm và mới được tính vào điểm trung bình, biểu đồ phân bố số sao trên dashboard. Cách làm này giúp lọc nội dung rác hoặc phản cảm. Các phương án còn lại sai vì có bước duyệt, khách gửi được đánh giá, và không có API GitHub nào được dùng để ghi file."
 },
 {
  "id": "bv11-a14",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: trang quản lý người dùng users trong admin hiển thị gì và có những thao tác nào? Em nêu cả những gì nhóm em cố ý không cho làm và lý do.",
  "options": [
   "Trang users liệt kê người dùng từ users.json kèm vai trò lấy từ roles.json, cho admin xem thông tin, sửa vai trò hoặc khoá tài khoản; nhóm em không cho xem mật khẩu dạng thô và không cho xoá hàng loạt vì dữ liệu người dùng nhạy cảm và thao tác nhầm dễ gây hậu quả",
   "Trang users chỉ hiển thị số lượng người dùng, không có bảng chi tiết và không có thao tác nào",
   "Trang users cho admin xem mật khẩu của mọi người để hỗ trợ khách quên mật khẩu, đây là cách làm chuẩn của dự án",
   "Trang users cho phép admin đăng nhập thay bất kỳ khách nào để kiểm tra giỏ hàng của họ"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trang scripts/admin/users.html đọc bảng users và roles qua store.js, hiển thị danh sách kèm vai trò admin hoặc khách, cho phép sửa vai trò, khoá hoặc mở khoá tài khoản. Nhóm em cố ý không hiển thị mật khẩu thô vì đó là dữ liệu nhạy cảm, và hạn chế thao tác xoá hàng loạt để tránh nhầm lẫn. Các phương án còn lại sai: trang có bảng chi tiết chứ không chỉ đếm số, dự án không hiển thị mật khẩu, và không có chức năng đăng nhập thay người khác. Khi trả lời thầy, em nên nhấn mạnh đây là lựa chọn có ý thức về quyền riêng tư, dù bảo mật tổng thể vẫn là điểm yếu do phân quyền client-side."
 },
 {
  "id": "bv11-a15",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy sẽ hỏi tình huống: admin sửa giá một sản phẩm trên trang products, sau đó mở trang products của khách ở tab khác và thấy giá vẫn cũ. Em giải thích vì sao và cách nhóm em xử lý để thay đổi lan sang các trang.",
  "options": [
   "Vì trang khách đọc dữ liệu từ file JSON tĩnh và cache riêng, còn thay đổi của admin nằm trong localStorage của trình duyệt; để thay đổi lan sang, nhóm em dùng admin-export.js xuất JSON, chép đè vào data/json, tăng DATA_VERSION trong store.js rồi commit để mọi trang tải lại dữ liệu mới",
   "Vì trình duyệt chặn hai tab cùng đọc một file, phải tắt tab admin rồi mở lại tab khách mới thấy giá mới",
   "Vì trang khách dùng service worker cache vĩnh viễn, phải xoá cache trình duyệt bằng tay mới thấy thay đổi",
   "Vì giá sản phẩm bị khoá cứng trong file HTML của trang chi tiết, admin sửa JSON không có tác dụng gì"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Kiến trúc của RoomCraft tách hai nguồn dữ liệu: file JSON tĩnh mà mọi trang tải về, và localStorage nơi admin ghi thay đổi. Trang khách không đọc localStorage của phiên admin, nên không thấy giá mới. Quy trình nhóm em đặt ra là dùng admin-export.js xuất JSON của bảng products, tải file về, chép đè vào data/json/products.json, tăng DATA_VERSION trong store.js để buộc các trang nạp lại dữ liệu thay vì dùng bản cache cũ, rồi commit và deploy. Các phương án còn lại sai: trình duyệt không chặn hai tab đọc file, dự án không dùng service worker cache vĩnh viễn, và giá không bị khoá cứng trong HTML mà render từ JSON."
 },
 {
  "id": "bv11-a16",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: vì sao khi xuất JSON từ admin, nhóm em phải tách bảng products thành hai file products.json và used_products.json? Em giải thích cơ chế gộp và tách trong store.js và admin-export.js.",
  "options": [
   "Vì store.js gộp đồ cũ vào chung bảng products với product_type là USED để tiện xử lý, nhưng dữ liệu gốc trong data/json lại tách hai file; nên khi xuất, admin-export.js dùng hàm getProductsByType lọc theo product_type để trả về đúng hai file products.json và used_products.json, tránh chép đè sai cấu trúc",
   "Vì file products.json quá lớn nên nhóm em chủ động chia đôi cho nhẹ, không liên quan đến đồ cũ",
   "Vì đồ cũ và sản phẩm mới dùng hai bảng riêng biệt trong store.js, không có chuyện gộp rồi tách",
   "Vì GitHub Pages giới hạn mỗi file JSON chỉ chứa một loại sản phẩm, vượt là lỗi deploy"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Phần đầu file admin-export.js ghi chú rõ: store.js gộp đồ cũ vào chung bảng products với product_type là USED, nên khi xuất phải tách lại đúng hai file như trong data/json. Hàm getProductsByType nhận tham số laDoCu, duyệt toàn bộ bảng products, so sánh product_type với USED để gom đúng nhóm. Bảng EXPORT_TABLES khai báo products lấy getProductsByType(false), used_products lấy getProductsByType(true). Nhờ vậy file xuất ra chép đè thẳng vào data/json mà không làm lẫn đồ cũ với hàng mới. Các phương án còn lại sai vì việc tách không phải để giảm dung lượng, store.js có gộp thật, và GitHub Pages không giới hạn kiểu đó."
 },
 {
  "id": "bv11-a17",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy sẽ hỏi tình huống: thầy yêu cầu thêm bộ lọc thời gian thật cho dashboard (chọn khoảng ngày để xem doanh thu). Với kiến trúc hiện tại, nhóm em sẽ làm thế nào và gặp khó khăn gì?",
  "options": [
   "Nhóm em sẽ đọc ngày từ hai ô chọn, lọc mảng đơn hàng theo ngày giao hoặc ngày tạo trước khi tính tổng và vẽ lại biểu đồ bằng Chart.js; khó khăn là dữ liệu đơn nằm trong localStorage hoặc JSON tĩnh, không có truy vấn server, nên phải tải toàn bộ đơn về client và tự xử lý, đồng thời phải đồng bộ bộ lọc với các biểu đồ khác",
   "Nhóm em sẽ gọi API của Google Analytics để lấy doanh thu theo khoảng ngày, không cần đụng đến dữ liệu đơn hàng",
   "Nhóm em sẽ tạo một cơ sở dữ liệu MySQL mới, chuyển toàn bộ orders.json sang đó rồi viết truy vấn SQL theo ngày",
   "Nhóm em sẽ không làm được vì Chart.js không hỗ trợ vẽ lại biểu đồ sau khi lọc dữ liệu"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Về kỹ thuật, bộ lọc thời gian chỉ là thêm hai ô input ngày, đọc giá trị, lọc mảng đơn theo trường ngày tạo hoặc ngày giao, tính lại tổng doanh thu, số đơn, rồi gọi hàm cập nhật dữ liệu của Chart.js và vẽ lại. Khó khăn chính là kiến trúc tĩnh: không có server truy vấn, phải tải toàn bộ orders.json về client, với dữ liệu lớn sẽ chậm; đồng thời phải thống nhất bộ lọc áp cho tất cả biểu đồ liên quan để tránh mâu thuẫn số liệu. Các phương án còn lại sai vì dự án không dùng Google Analytics, không có MySQL, và Chart.js hoàn toàn vẽ lại được khi cập nhật dữ liệu."
 },
 {
  "id": "bv11-a18",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Thầy sẽ hỏi: các trang admin của RoomCraft dùng chung những thành phần nào và vì sao nhóm em tách chúng ra thành file riêng? Em nêu tên và chức năng từng thành phần.",
  "options": [
   "Các trang admin dùng chung admin-sidebar.js để render thanh điều hướng bên trái và admin-export.js để xuất dữ liệu; ngoài ra dùng chung store.js cho dữ liệu, auth.js cho phân quyền, utils.js cho hàm tiện ích, base.css và admin.css cho giao diện; tách ra để tránh lặp code và sửa một chỗ áp dụng mọi trang",
   "Mỗi trang admin tự viết lại toàn bộ sidebar và nút xuất, không dùng chung gì để dễ tuỳ biến riêng",
   "Các trang admin chỉ dùng chung file CSS, còn JavaScript mỗi trang viết độc lập hoàn toàn",
   "Các trang admin dùng chung một file bundle được webpack đóng gói sẵn khi build"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong scripts/admin/index.html thấy rõ các thẻ script nạp lần lượt utils.js, store.js, auth.js, admin-sidebar.js, các service orders.js, products.js rồi mới tới admin-index.js của trang. admin-sidebar.js render sidebar theo cấu hình chung, admin-export.js cung cấp modal xuất JSON dùng ở nhiều trang. Việc tách thành phần giúp sửa một chỗ là mọi trang admin hưởng theo, giảm lặp code và dễ bảo trì. Các phương án còn lại sai: nhóm có dùng chung nhiều file JS chứ không chỉ CSS, không viết lại sidebar từng trang, và dự án không dùng webpack hay bundle."
 },
 {
  "id": "bv11-a19",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: vì sao bảng sản phẩm bán chạy và bảng sắp hết hàng trên dashboard lại cần thiết cho admin? Em giải thích giá trị nghiệp vụ và cách dữ liệu được tính.",
  "options": [
   "Hai bảng giúp admin ra quyết định nhập hàng và khuyến mãi: bảng bán chạy xếp hạng sản phẩm theo số lượng đã bán và doanh thu trong 6 tháng, bảng sắp hết hàng liệt kê sản phẩm có tồn kho thấp kèm số đã bán để ưu tiên nhập thêm; dữ liệu lấy từ đơn đã giao và tồn kho trong products.json",
   "Hai bảng chỉ để trang trí cho dashboard đẹp, dữ liệu là số ngẫu nhiên sinh ra khi tải trang",
   "Bảng bán chạy tính theo số lượt xem sản phẩm, bảng sắp hết hàng tính theo số lượt thêm vào giỏ, không liên quan đơn hàng",
   "Hai bảng do admin tự nhập tay số liệu vào mỗi tuần, không tính tự động từ dữ liệu"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong admin/index.html có hai bảng: bảng sản phẩm bán chạy với các cột hạng, ảnh, tên, đã bán, doanh thu; bảng sắp hết hàng với các cột sản phẩm, tên, còn lại, đã bán trong 6 tháng. Dữ liệu được tính từ các đơn đã giao trong orders.json kết hợp tồn kho trong products.json. Giá trị nghiệp vụ là giúp admin biết mặt hàng nào đang bán tốt để nhập thêm hoặc đẩy khuyến mãi, và mặt hàng nào sắp cạn để bổ sung kịp thời. Các phương án còn lại sai vì số liệu tính thật từ đơn hàng chứ không ngẫu nhiên, không dựa trên lượt xem hay lượt thêm giỏ, và không nhập tay."
 },
 {
  "id": "bv11-a20",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy sẽ hỏi tình huống: sau khi demo, thầy mở file CSV nhóm em xuất ra và thấy cột tiền hiển thị dạng 1.250.000 nhưng Excel hiểu thành văn bản, không cộng được. Em giải thích nguyên nhân và cách nhóm em nên sửa.",
  "options": [
   "Nguyên nhân là dấu chấm phân cách hàng nghìn và ký hiệu tiền tệ bị đưa vào chuỗi nên Excel coi là văn bản; cách sửa là xuất số thô không định dạng, hoặc dùng dấu phẩy thập phân theo locale và bọc đúng quy tắc CSV, có thể thêm cột số riêng để tính toán",
   "Nguyên nhân là file CSV thiếu BOM nên Excel đọc sai toàn bộ, chỉ cần thêm BOM là cột tiền tự thành số",
   "Nguyên nhân là Excel không hỗ trợ tiền Việt Nam nên không cách nào sửa được, phải dùng phần mềm khác",
   "Nguyên nhân là do nhóm em xuất PDF thay vì CSV, đổi sang CSV là hết lỗi"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Khi hàm xuất CSV ghép chuỗi đã định dạng như 1.250.000 ₫, Excel nhận diện đây là text vì có dấu chấm và ký hiệu tiền tệ, nên không cộng được. Cách sửa đúng là xuất giá trị số thô, ví dụ 1250000, để Excel hiểu là number; nếu cần hiển thị đẹp thì để Excel tự định dạng theo locale. Cũng cần chú ý quy tắc CSV: trường chứa dấu phẩy hoặc xuống dòng phải bọc trong dấu nháy kép, và dấu phân cách phụ thuộc locale máy người dùng. Các phương án còn lại sai: BOM chỉ giải quyết hiển thị tiếng Việt chứ không biến text thành số, Excel vẫn xử lý được tiền Việt nếu là số thô, và vấn đề không phải do nhầm CSV với PDF."
 },
 {
  "id": "bv11-a21",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: trang quản lý phòng mẫu rooms trong admin khác gì trang quản lý sản phẩm products? Em nêu dữ liệu liên quan và những thao tác đặc thù của phòng mẫu.",
  "options": [
   "Trang rooms quản lý rooms.json và room_hotspots.json, cho admin thêm sửa xoá phòng, gán phong cách, ảnh phòng và đặc biệt là toạ độ hotspot của từng sản phẩm trên ảnh; trang products quản lý products.json với giá, tồn kho theo kích thước và màu, nhiều góc ảnh, model 3D, nên hai trang khác nhau về cấu trúc dữ liệu và thao tác",
   "Hai trang giống hệt nhau vì phòng mẫu chỉ là một loại sản phẩm đặc biệt, dùng chung một bảng",
   "Trang rooms chỉ để xem danh sách phòng, không cho sửa vì phòng mẫu do nhóm thiết kế cố định",
   "Trang rooms quản lý đơn đặt phòng khách sạn, không liên quan đến nội thất"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Phòng mẫu trong RoomCraft là một thực thể riêng: mỗi phòng có ảnh, phong cách, danh sách sản phẩm gắn hotspot với toạ độ phần trăm lưu trong room_hotspots.json. Trang admin rooms phải cho thao tác trên cả hai file này, đặc biệt là chỉnh toạ độ hotspot sao cho khớp ảnh. Trang products thì quản lý sản phẩm với giá, tồn kho theo kích thước và màu, nhiều góc ảnh, model 3D, đánh giá. Vì vậy hai trang khác nhau rõ rệt về dữ liệu và giao diện. Các phương án còn lại sai vì phòng mẫu không phải sản phẩm, admin sửa được phòng, và dự án không bán đặt phòng khách sạn."
 },
 {
  "id": "bv11-a22",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy sẽ hỏi: nếu thầy muốn thêm một trang admin mới, ví dụ quản lý mã giảm giá coupons, nhóm em sẽ làm theo các bước nào để giữ đúng kiến trúc hiện tại? Em mô tả quy trình và những file cần đụng.",
  "options": [
   "Tạo file HTML trong scripts/admin/coupons.html, CSS trong scripts/css/pages/admin-coupons.css, JS trong scripts/js/pages/admin-coupons.js; thêm mục vào admin-sidebar.js, khai báo bảng coupons trong store.js nếu chưa có, thêm vào EXPORT_TABLES của admin-export.js nếu muốn xuất JSON, rồi kiểm tra phân quyền qua auth.js và cập nhật tài liệu cấu trúc thư mục",
   "Chỉ cần thêm một file coupons.html là xong, không cần CSS, JS hay khai báo gì thêm vì admin tự nhận diện trang mới",
   "Phải viết lại toàn bộ store.js và admin-sidebar.js từ đầu vì kiến trúc hiện tại không cho thêm trang mới",
   "Phải build lại dự án bằng webpack rồi deploy thư mục dist lên GitHub Pages, không thể thêm trực tiếp"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Kiến trúc RoomCraft rất đều: mỗi trang admin gồm ba file HTML, CSS, JS đặt đúng thư mục. Để thêm trang coupons, nhóm em tạo scripts/admin/coupons.html nạp các script chung utils.js, store.js, auth.js, admin-sidebar.js rồi tới admin-coupons.js; tạo CSS tương ứng; thêm mục vào cấu hình của admin-sidebar.js để sidebar hiện link; đảm bảo store.js có bảng coupons đọc từ coupons.json; nếu muốn xuất dữ liệu thì thêm coupons vào EXPORT_TABLES của admin-export.js; kiểm tra auth.js chặn đúng người; cập nhật tài liệu cấu trúc thư mục. Các phương án còn lại sai vì không thể chỉ thêm HTML, không cần viết lại toàn bộ, và dự án không dùng webpack."
 },
 {
  "id": "bv11-a23",
  "chapter": 12,
  "difficulty": 2,
  "type": "multiple",
  "question": "Thầy sẽ hỏi: những rủi ro bảo mật nào tồn tại khi toàn bộ trang admin của RoomCraft chạy phía client và dữ liệu là file JSON công khai? Em hãy chọn các rủi ro đúng với kiến trúc hiện tại. (chọn nhiều đáp án)",
  "options": [
   "Người dùng có thể sửa localStorage để tự nhận vai trò admin và mở giao diện quản trị",
   "Dữ liệu users.json, orders.json, reviews.json tải công khai nên bất kỳ ai cũng đọc được nội dung",
   "Thay đổi CRUD trên admin chỉ nằm trong localStorage của máy đang dùng, dễ gây hiểu nhầm dữ liệu đã được cập nhật chung",
   "Key API DeepSeek bị lộ ra frontend vì chatbot.js nhúng thẳng key trong file JavaScript"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ba đáp án đúng đầu tiên. Thứ nhất, phân quyền client-side chỉ ẩn giao diện, sửa localStorage là vượt qua được. Thứ hai, mọi file trong data/json đều được GitHub Pages phục vụ công khai, ai cũng tải được users.json, orders.json, reviews.json. Thứ ba, CRUD ghi vào localStorage nên chỉ máy đang thao tác thấy, dễ tưởng nhầm đã cập nhật chung. Đáp án thứ tư sai: key API nằm trong .env phía server, server.js đọc biến môi trường và gọi LLM, frontend chỉ gọi /api/chat, không nhúng key. Khi trả lời thầy, nhóm em nên nói thẳng đây là điểm yếu đã nhận diện và hướng khắc phục là backend xác thực, không đưa dữ liệu nhạy cảm ra tĩnh công khai."
 },
 {
  "id": "bv11-a24",
  "chapter": 12,
  "difficulty": 2,
  "type": "multiple",
  "question": "Thầy sẽ hỏi: chức năng xuất dữ liệu của admin-export.js có những đặc điểm kỹ thuật nào sau đây? Em chọn các mô tả đúng với file thật trong dự án. (chọn nhiều đáp án)",
  "options": [
   "Modal xuất JSON được tạo một lần bằng createExportModal và tái sử dụng, đóng được bằng phím Escape hoặc bấm ra ngoài",
   "Có ba nút thao tác chính là sao chép nội dung vào clipboard, tải file .json đúng tên trong data/json, và chọn bảng cần xuất qua dropdown",
   "Hàm downloadJsonExport dùng Blob, URL.createObjectURL và thẻ a tạm để tải file, sau đó thu hồi URL sau khoảng một giây",
   "File admin-export.js tự gọi API của GitHub để commit thẳng file JSON lên repository sau khi tải"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ba đáp án đúng đầu tiên. Đọc file admin-export.js thấy createExportModal tạo modal một lần, gắn sự kiện keydown đóng bằng Escape và onclick đóng khi bấm ra ngoài. Modal có dropdown chọn bảng, nút Sao chép dùng navigator.clipboard có fallback execCommand, nút Tải file .json dùng Blob và URL.createObjectURL rồi revoke sau một giây. Đáp án thứ tư sai hoàn toàn: file không gọi API GitHub, việc chép đè vào data/json và commit là thao tác thủ công của người dùng sau khi tải file. Khi trả lời thầy, em nên nhấn mạnh đây là công cụ bán tự động, con người vẫn là người quyết định commit."
 },
 {
  "id": "bv11-a25",
  "chapter": 12,
  "difficulty": 3,
  "type": "multiple",
  "question": "Thầy sẽ hỏi: khi thầy yêu cầu nhóm em nâng cấp báo cáo admin để đáng tin cậy hơn, những việc nào sau đây là hướng đi đúng với điểm yếu hiện tại của RoomCraft? (chọn nhiều đáp án)",
  "options": [
   "Thêm backend xác thực và kiểm tra quyền ở server trước khi trả dữ liệu admin hoặc cho ghi dữ liệu",
   "Chuyển dữ liệu đơn hàng, người dùng, đánh giá sang một kho có kiểm soát ghi thay vì file JSON tĩnh công khai",
   "Ghi log thao tác admin và lưu lịch sử chuyển trạng thái đơn hàng để phễu và báo cáo phản ánh đúng dòng thời gian",
   "Giữ nguyên kiến trúc tĩnh và chỉ thêm nhiều biểu đồ hơn để trông chuyên nghiệp hơn"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ba đáp án đúng đầu tiên. Điểm yếu cốt lõi của RoomCraft là phân quyền client-side và dữ liệu JSON công khai, nên hướng nâng cấp đúng là có backend xác thực, kiểm tra quyền ở server, chuyển dữ liệu nhạy cảm sang kho có kiểm soát ghi, và ghi log để có lịch sử chuyển trạng thái — điều này cũng giải quyết hạn chế của phễu tiến trình đơn hàng hiện chỉ phản ánh trạng thái hiện tại. Đáp án thứ tư sai vì thêm biểu đồ không giải quyết rủi ro bảo mật hay tính đúng đắn của dữ liệu, chỉ làm giao diện bắt mắt hơn. Khi trả lời thầy, nhóm em nên trình bày theo thứ tự ưu tiên: bảo mật trước, dữ liệu sau, giao diện cuối."
 }
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_BV11; }
