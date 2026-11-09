// ============================================================================
// CHƯƠNG 2: Tổng quan về thiết kế Web
// Soạn dựa trên Slide bài giảng + Phong cách ra đề của thầy (Moodle Quiz)
// Quy ước: Đáp án đúng luôn đặt ở ĐẦU mảng options (correct = [0]).
// ============================================================================
const S = (id, chapter, difficulty, question, options, explanation) =>
  ({ id: "c2-" + id, chapter, difficulty, type: "single", question, options, correct: [0], explanation });
const M = (id, chapter, difficulty, question, options, nCorrect, explanation) =>
  ({ id: "c2-" + id, chapter, difficulty, type: "multiple", question: question + " (chọn nhiều đáp án)", options,
     correct: Array.from({ length: nCorrect }, (_, i) => i), explanation });

const QUESTIONS_C2 = [
// --- Các bước thiết lập Website ---
S("q1", 2, 1, "Trong quy trình các bước thiết lập một website, bước ĐẦU TIÊN cần thực hiện là gì?",
  ["Xác định yêu cầu của website", "Mua tên miền", "Thuê chỗ hosting", "Thiết kế website"],
  "Slide 3: Các bước thiết lập Website gồm: 1. Xác định yêu cầu, 2. Mua tên miền, 3. Thuê chỗ hosting, 4. Thiết kế website, 5. Đưa vào hoạt động, 6. Duy trì bảo trì."),

S("q2", 2, 2, "Thứ tự đúng của các bước thiết lập Website là:",
  ["Xác định yêu cầu -> Mua tên miền -> Thuê hosting -> Thiết kế -> Đưa vào hoạt động -> Duy trì bảo trì", 
   "Mua tên miền -> Thuê hosting -> Xác định yêu cầu -> Thiết kế -> Đưa vào hoạt động -> Duy trì bảo trì",
   "Thuê hosting -> Mua tên miền -> Thiết kế -> Xác định yêu cầu -> Đưa vào hoạt động -> Duy trì bảo trì",
   "Thiết kế -> Xác định yêu cầu -> Mua tên miền -> Thuê hosting -> Đưa vào hoạt động -> Duy trì bảo trì"],
  "Slide 3: Quy trình chuẩn gồm 6 bước: Xác định yêu cầu, Mua tên miền, Thuê chỗ hosting, Thiết kế website, Đưa vào hoạt động, Duy trì thông tin & bảo trì."),

// --- Xác định yêu cầu ---
S("q3", 2, 2, "Khi xác định mục tiêu của website, phát biểu nào sau đây là đúng?",
  ["Mục tiêu phải dài hạn, bao trùm toàn bộ kế hoạch phát triển và là công cụ đánh giá sự thành bại của website", "Mục tiêu chỉ cần ngắn gọn, không cần liên quan đến kế hoạch dài hạn", "Mục tiêu phải thay đổi liên tục theo từng tháng", "Mục tiêu chỉ dành cho đội ngũ kỹ thuật, không liên quan đến ban giám đốc"],
  "Slide 5: Mục tiêu phải khái quát, ngắn gọn, rõ ràng, dài hạn, bao trùm toàn bộ kế hoạch phát triển và là công cụ để đánh giá sự thành bại của website."),

S("q4", 2, 2, "Một thiết kế web tốt được đánh giá là gì?",
  ["Thích hợp cho tất cả các loại độc giả có trình độ và nhu cầu khác nhau", "Chỉ phục vụ cho những người rành về công nghệ", "Sử dụng càng nhiều hiệu ứng hình ảnh càng tốt", "Chỉ cần hiển thị tốt trên một trình duyệt duy nhất"],
  "Slide 7: Thiết kế web tốt = thích hợp cho tất cả các loại độc giả có trình độ và nhu cầu khác nhau."),

// --- Mua tên miền ---
M("q5", 2, 2, "Một tên miền (Domain) tốt cần đáp ứng những tiêu chí nào sau đây?",
  ["Tên ngắn, gợi nhớ, dễ đọc", "Không gây nhầm lẫn", "Thể hiện được tên công ty hoặc nhãn hiệu", "Càng dài và nhiều ký tự đặc biệt càng tốt"], 3,
  "Slide 14: Tên miền tốt cần: Tên ngắn, gợi nhớ, dễ đọc, không gây nhầm lẫn, thể hiện được tên công ty hoặc nhãn hiệu."),

// --- Thuê chỗ hosting ---
M("q6", 2, 2, "Khi thuê chỗ hosting (Hosting Provider), ta cần quan tâm tới những vấn đề nào?",
  ["Hệ điều hành", "Dung lượng và băng thông", "Ngôn ngữ hỗ trợ và Hệ quản trị CSDL hỗ trợ", "Số lượng nhân viên thiết kế đồ họa của công ty"], 3,
  "Slide 18: Các yếu tố cần quan tâm khi thuê hosting: Hệ điều hành, Dung lượng, Băng thông, Ngôn ngữ hỗ trợ, Hệ quản trị CSDL hỗ trợ, Email POP3..."),

S("q7", 2, 2, "Nếu website của bạn sử dụng cơ sở dữ liệu là SQL Server thì nên mua Hosting loại nào?",
  ["Windows hosting", "Linux hosting", "MAC hosting", "Loại nào cũng được"],
  "Slide 20 (và Quiz 1): SQL Server là sản phẩm của Microsoft, do đó cần thuê Windows hosting để tương thích tốt nhất. (Linux hosting thường dùng cho MySQL, PHP)."),

// --- Quy trình thiết kế Website ---
S("q8", 2, 2, "Các bước cơ bản để phát triển một website (tương tự phân tích thiết kế hệ thống thông tin) bao gồm:",
  ["Đặc tả -> Phân tích -> Thiết kế -> Lập trình -> Kiểm thử", "Lập trình -> Thiết kế -> Đặc tả -> Phân tích -> Kiểm thử", "Phân tích -> Đặc tả -> Kiểm thử -> Thiết kế -> Lập trình", "Thiết kế -> Đặc tả -> Phân tích -> Lập trình -> Kiểm thử"],
  "Slide 23: Các bước phát triển website: Đặc tả, Phân tích, Thiết kế, Lập trình (xây dựng), Kiểm thử."),

M("q9", 2, 2, "Trong bước 'Đặc tả' của quá trình thiết kế website, ta cần trả lời những câu hỏi nào?",
  ["Web để làm gì?", "Web cho ai dùng? Trình độ người dùng ra sao?", "Nội dung, hình ảnh như thế nào?", "Thiết kế cơ sở dữ liệu ra sao?"], 3,
  "Slide 24: Bước Đặc tả cần trả lời: Web để làm gì? Web cho ai dùng? Trình độ người dùng ra sao? Nội dung, hình ảnh như thế nào? (Thiết kế CSDL nằm ở bước Thiết kế)."),

S("q10", 2, 2, "Công việc nào sau đây thuộc bước 'Phân tích' trong quy trình thiết kế website?",
  ["Tìm hiểu mối liên quan giữa các nội dung trang web và thứ tự của chúng", "Viết mã HTML, CSS, JavaScript", "Kiểm tra website trên nhiều trình duyệt khác nhau", "Mua tên miền và thuê hosting"],
  "Slide 24: Phân tích bao gồm: Mối liên quan giữa các nội dung trang web, Thứ tự của các nội dung trang web."),

S("q11", 2, 2, "Trong bước 'Kiểm thử' website, ta cần kiểm tra những yếu tố nào?",
  ["Kiểm tra trên nhiều trình duyệt, nhiều cấu hình mạng, tốc độ, liên kết và bảo mật", "Chỉ cần kiểm tra xem website có load được hay không", "Chỉ cần kiểm tra trên trình duyệt Google Chrome", "Chỉ cần kiểm tra xem mã HTML có bị lỗi cú pháp không"],
  "Slide 26: Kiểm thử gồm: Kiểm tra trên nhiều trình duyệt, nhiều cấu hình mạng, tốc độ, các liên kết (link), bảo mật..."),

// --- Nguyên tắc thiết kế ---
S("q12", 2, 2, "Khi thiết kế website, khái niệm trang 'dead-end' (trang cụt) có nghĩa là gì?",
  ["Là trang không có khả năng đi đến các trang khác", "Là trang thông báo lỗi 404", "Là trang quảng cáo", "Là trang chủ của website"],
  "Slide 36 (và Quiz 1): Không nên có trang 'dead-end', nghĩa là trang không có khả năng đi đến các trang khác. Mỗi trang phải có ít nhất một liên kết."),

S("q13", 2, 2, "Theo nguyên tắc thiết kế hướng đến người sử dụng, độc giả truy cập website luôn phải trả lời được 3 câu hỏi nào?",
  ["Đang ở đâu? Có thể làm được những gì? Có thể tiếp tục đi đâu?", "Ai tạo ra trang web này? Trang web có kiếm tiền không? Trang web dùng công nghệ gì?", "Mật khẩu là gì? Tên đăng nhập là gì? Email là gì?", "Trang web có bao nhiêu bài viết? Có bao nhiêu người truy cập? Có bao nhiêu quảng cáo?"],
  "Slide 35: Độc giả có thể trả lời được các câu hỏi: Đang ở đâu? Có thể làm được những gì? Có thể tiếp tục đi đâu?"),

S("q14", 2, 2, "Cấu trúc Website (Sitemap) có đặc điểm gì?",
  ["Dùng để tổ chức các khối thông tin phức hợp, gần với mô hình tổ chức thực tế và cho cái nhìn tổng quan từ trang chủ", "Là một file hình ảnh quảng cáo đặt ở chân trang", "Là một trang thông báo lỗi khi người dùng nhập sai đường dẫn", "Là danh sách các từ khóa để website dễ tìm kiếm trên Google"],
  "Slide 32: Sitemap dùng để tổ chức các khối thông tin phức hợp, là hệ thống thông dụng nhất, gần với mô hình thực tế, dễ hình dung tổ chức website, cho cái nhìn tổng quan từ trang chủ."),

S("q15", 2, 2, "Khi thiết kế giao diện, việc chọn Font chữ (phông chữ) phụ thuộc vào những yếu tố nào?",
  ["Đặc điểm thông tin, độc giả, trình duyệt, độ phân giải và ngôn ngữ sử dụng", "Sở thích của người lập trình", "Dung lượng của ổ cứng máy chủ", "Số lượng bài viết trên trang web"],
  "Slide 30: Font chữ phụ thuộc vào: Đặc điểm thông tin, Độc giả, Trình duyệt/độ phân giải, Ngôn ngữ sử dụng..."),

S("q16", 2, 2, "Để đảm bảo tính thẩm mỹ trong thiết kế website, yêu cầu về gam màu là gì?",
  ["Gam màu nên thống nhất toàn bộ website", "Gam màu càng sặc sỡ càng thu hút", "Mỗi trang phải sử dụng một gam màu hoàn toàn khác nhau", "Chỉ nên dùng 2 màu đen và trắng"],
  "Slide 30: Gam màu nên thống nhất toàn bộ website."),

// --- Bảo trì ---
S("q17", 2, 1, "Sau khi website được đưa vào hoạt động, công việc duy trì và bảo trì bao gồm những gì?",
  ["Thông tin phải được cập nhật thường xuyên và có đội ngũ bảo trì để sửa lỗi, nâng cấp", "Xóa toàn bộ dữ liệu cũ và làm lại từ đầu", "Chỉ cần để đó và không cần làm gì thêm", "Chuyển toàn bộ website về dạng văn bản thuần túy"],
  "Slide 40: Khi Website đưa vào hoạt động thì thông tin phải cập nhật thường xuyên, có dữ liệu mới. Phải có đội ngũ bảo trì website để sửa chữa lỗi, nâng cấp phiên bản."),
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_C2; }
