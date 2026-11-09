// ============================================================================
// QUIZ TRÊN LỚP CỦA THẦY (Quizz 1, 2, 3 trên UEL E-Learning)
// Chép lại từ file "Xem lại lần làm thử". Những câu dựa vào hình ảnh được viết lại
// bằng mô tả chữ. Đáp án đúng đặt ở ĐẦU mảng options; script build tự xáo vị trí.
// Câu có phương án phụ thuộc vị trí ("Tất cả đều đúng") đặt fixed: true.
// ============================================================================
const C = (code) => "\n```\n" + code.trim() + "\n```";
const S = (id, chapter, difficulty, question, options, explanation) =>
  ({ id: "qz-" + id, chapter, difficulty, type: "single", question, options, correct: [0], explanation });
const M = (id, chapter, difficulty, question, options, nCorrect, explanation) =>
  ({ id: "qz-" + id, chapter, difficulty, type: "multiple", question: question + " (chọn nhiều đáp án)", options,
     correct: Array.from({ length: nCorrect }, (_, i) => i), explanation });

const QUESTIONS_QUIZ = [
// ============================== QUIZZ 1 ==============================
S("1-01", 2, 2, "[Quiz 1] Khi mua tên miền ta cần quan tâm tới những vấn đề nào?",
  ["Tên ngắn; Gợi nhớ; Dễ đọc; Không gây nhầm lẫn; Thể hiện được tên công ty hoặc nhãn hiệu; Nên mua dạng \"bao vây\" tên miền để tránh bị nhái thương hiệu",
   "Tên ngắn; Gợi nhớ; Dễ đọc; Không gây nhầm lẫn; Băng thông mạnh",
   "Tên ngắn; Băng thông mạnh; Gợi nhớ; Dễ đọc; Không gây nhầm lẫn; Thể hiện được tên công ty",
   "Tên ngắn; Gợi nhớ; Dễ đọc; Thể hiện được tên công ty hoặc nhãn hiệu của công ty"],
  "Băng thông là tiêu chí khi thuê hosting, không phải khi mua tên miền. Phương án đúng là phương án đầy đủ nhất, có cả ý mua \"bao vây\" tên miền."),
S("1-02", 1, 1, "[Quiz 1] Nói tới localhost thường ta nói tới địa chỉ IP nào?",
  ["127.0.0.1", "1.0.0.127", "127.0.0.10", "127.1.1.0"],
  "localhost là địa chỉ loopback 127.0.0.1, trỏ về chính máy đang dùng."),
S("1-03", 1, 1, "[Quiz 1] Ghép tên miền cấp 1 với ý nghĩa: .com: A, .edu: B, .net: C, .int: D, .org: E",
  ["A: công ty thương mại; B: trường học, tổ chức giáo dục; C: các mạng (network); D: tổ chức quốc tế; E: các tổ chức khác",
   "A: trường học; B: các mạng; C: công ty thương mại; D: các tổ chức khác; E: tổ chức quốc tế",
   "A: tổ chức quốc tế; B: trường học; C: các mạng; D: công ty thương mại; E: các tổ chức khác",
   "A: các mạng; B: trường học; C: công ty thương mại; D: tổ chức quốc tế; E: các tổ chức khác"],
  ".com = commercial, .edu = education, .net = network, .int = international organizations, .org = other organizations."),
S("1-04", 1, 1, "[Quiz 1] WWW là gì?",
  ["WWW là viết tắt của World Wide Web: là tập hợp các web site trên mạng internet",
   "WWW là viết tắt của World Why Web: là tập hợp các web site trên mạng internet",
   "WWW là viết tắt của Word Wid Wed: là tập hợp các web site trên mạng internet",
   "WWW là viết tắt của Wall Wide Web: là tập hợp các web site trên mạng internet"],
  "Đề thầy hay đánh lừa bằng cách viết sai chính tả cụm từ viết tắt. Đáp án đúng: World Wide Web."),
S("1-05", 1, 2, "[Quiz 1] Web server là gì?",
  ["Web Server là máy phục vụ web. Thường các Website viết bằng ASP C# được cấu hình trên Internet Information Services (IIS)",
   "Web Server là máy phục vụ truyền tải file. Thường các Website viết bằng ASP C# được cấu hình trên Apache Tomcat",
   "Web Server là máy phục vụ web. Thường các Website viết bằng ASP C# được cấu hình trên Apache Tomcat",
   "Web Server là máy phục vụ truyền tải file. Thường các Website viết bằng ASP C# được cấu hình trên IIS"],
  "Cần đúng cả 2 ý: Web Server là máy phục vụ web (máy truyền file là FTP Server), và ASP/C# chạy trên IIS của Microsoft (Apache Tomcat dành cho Java)."),
S("1-06", 1, 1, "[Quiz 1] Web Browser là gì?",
  ["Phần mềm chạy trên máy khách (client) dùng để hiển thị trang web và giúp khai thác dịch vụ web",
   "Là máy phục vụ web chạy trên máy chủ (server) dùng để hiển thị trang web",
   "Là máy phục vụ web chạy trên máy khách (client) dùng để hiển thị trang web",
   "Phần mềm chạy trên máy chủ (server) dùng để hiển thị trang web và giúp khai thác dịch vụ web"],
  "Browser là PHẦN MỀM, chạy ở phía CLIENT."),
S("1-07", 1, 2, "[Quiz 1] Web tĩnh là gì?",
  ["Dễ phát triển; Tương tác với người duyệt web yếu; Sử dụng ngôn ngữ HTML để thiết kế; Thường dùng công cụ trực quan như FrontPage, Notepad; Không nhận thông tin phản hồi từ người dùng",
   "Tương tác với người duyệt web mạnh; Sử dụng nhiều ngôn ngữ để lập trình; Thường phải viết nhiều mã lệnh; Không nhận thông tin phản hồi từ người dùng",
   "Khó phát triển; Tương tác mạnh; Sử dụng nhiều ngôn ngữ lập trình; Viết nhiều mã lệnh; Nhận thông tin phản hồi từ người dùng",
   "Tương tác với người duyệt web yếu; Sử dụng HTML để thiết kế; Dùng FrontPage, Notepad; Nhận thông tin phản hồi từ người dùng"],
  "Web tĩnh: dễ làm, chỉ HTML, tương tác yếu, KHÔNG nhận phản hồi. Phương án D sai ở ý cuối."),
S("1-08", 1, 2, "[Quiz 1] Máy chủ (Server) là:",
  ["Máy tính chuyên cung cấp tài nguyên, dịch vụ cho máy tính khác; Thường cài phần mềm chuyên dụng; Cấu hình cao, hoạt động ổn định; Có thể dùng cho một hay nhiều mục đích",
   "Máy tính rất đắt tiền, cung cấp các dịch vụ cho các máy khác; Thường cài phần mềm chuyên dụng; Cấu hình cao; Dùng cho một hay nhiều mục đích",
   "Máy tính chuyên cung cấp tài nguyên, dịch vụ cho máy khác và BẮT BUỘC phải kết nối internet; ...",
   "Máy tính chuyên cung cấp tài nguyên cho máy khác TRONG CÙNG MỘT CÔNG TY và các máy này phải có kết nối internet; ..."],
  "Định nghĩa máy chủ không dựa vào giá tiền, không bắt buộc kết nối internet (có thể chạy trong mạng LAN), và không giới hạn trong một công ty."),
S("1-09", 1, 2, "[Quiz 1] Web động là gì?",
  ["Khó phát triển; Tương tác với người duyệt web mạnh; Sử dụng nhiều ngôn ngữ khác nhau để lập trình; Thường phải viết nhiều mã lệnh; Nhận thông tin phản hồi từ người dùng",
   "Khó phát triển; Tương tác với người duyệt web yếu; Sử dụng nhiều ngôn ngữ để lập trình; Viết nhiều mã lệnh; Nhận thông tin phản hồi",
   "Dễ phát triển; Tương tác yếu; Sử dụng HTML; Dùng FrontPage, Notepad; Không nhận thông tin phản hồi",
   "Khó phát triển; Tương tác mạnh; Sử dụng nhiều ngôn ngữ để lập trình; Viết nhiều mã lệnh; Không nhận thông tin phản hồi từ người dùng"],
  "Web động: khó làm, tương tác MẠNH, nhiều ngôn ngữ, NHẬN phản hồi từ người dùng. Cần đúng cả 5 ý."),
S("1-10", 1, 2, "[Quiz 1] Chọn định nghĩa đúng về HTTP",
  ["HTTP (HyperText Transfer Protocol – Giao thức truyền tải siêu văn bản): chuyển nội dung một trang web vào trình duyệt cho người truy cập xem",
   "HTTP (HighText Transfer Protocol – Giao thức truyền văn bản trên mạng): chuyển nội dung một trang web vào trình duyệt",
   "HTTP (HyperText Transfer Procedure – Giao thức truyền tải siêu văn bản): chuyển nội dung một trang web vào trình duyệt",
   "HTTP (HyperText Transfer Protocol – Giao thức truyền tải siêu văn bản): chuyển nội dung một text file vào trình duyệt"],
  "Chú ý từng chữ: HyperText (không phải HighText), Protocol (không phải Procedure), và chuyển nội dung TRANG WEB (không phải text file)."),
S("1-11", 1, 2, "[Quiz 1] Chọn định nghĩa đúng về HTTPS",
  ["HTTPS (Hypertext Transfer Protocol Secure): kết hợp giữa HTTP và giao thức bảo mật SSL hay TLS, dùng trong các giao dịch nhạy cảm",
   "HTTPS (Hypertext Transfer Procedure Secure): kết hợp giữa HTTP và giao thức bảo mật SSL hay TLS",
   "HTTPS (Hypertext Transmission Protocol Secure): kết hợp giữa HTTP và giao thức bảo mật SSL hay TLS",
   "HTTPS (Hypertext Transfer Procedure Security): kết hợp giữa HTTP và giao thức bảo mật SSL hay TLS"],
  "Tên đầy đủ: Hypertext Transfer Protocol Secure."),
S("1-12", 2, 1, "[Quiz 1] Khi thiết kế website không nên có trang \"dead-end\". Ý nghĩa của trang \"dead-end\" là gì?",
  ["Trang không có khả năng đi đến các trang khác", "Trang thông báo lỗi", "Trang quảng cáo", "Trang chủ của website"],
  "Dead-end (trang cụt) là trang không có liên kết đi tiếp, người dùng phải bấm Back của trình duyệt."),
S("1-13", 2, 2, "[Quiz 1] Khi thuê hosting ta cần quan tâm tới vấn đề gì?",
  ["Hệ điều hành; Dung lượng; Băng thông; Ngôn ngữ hỗ trợ; Hệ quản trị CSDL hỗ trợ; Email POP3",
   "Dễ nhớ tên miền; Dung lượng không giới hạn; Băng thông; Ngôn ngữ hỗ trợ; Hệ quản trị CSDL hỗ trợ; Email POP3",
   "Hệ điều hành; Dung lượng; Băng thông; Ngôn ngữ hỗ trợ; Hệ quản trị CSDL hỗ trợ; Internet cáp quang",
   "Hệ điều hành; Dung lượng; Băng thông; Ngôn ngữ lập trình hỗ trợ; Email POP3"],
  "Dễ nhớ là tiêu chí của tên miền; Internet cáp quang là đường truyền của mình chứ không phải tiêu chí hosting; phương án D thiếu Hệ quản trị CSDL."),
S("1-14", 2, 1, "[Quiz 1] Nếu cơ sở dữ liệu là SQL Server thì nên mua Hosting loại nào?",
  ["Windows hosting", "Linux hosting", "MAC hosting", "Loại nào cũng được"],
  "SQL Server (và ASP.NET) là sản phẩm của Microsoft nên chạy trên Windows hosting."),
S("1-15", 2, 2, "[Quiz 1] Sitemap là gì?",
  ["Dùng để tổ chức các khối thông tin phức hợp; Là hệ thống được dùng thông dụng nhất; Gần với mô hình tổ chức thế giới thực; Dễ hình dung tổ chức website",
   "Dùng để tổ chức các khối thông tin phức hợp; Là hệ thống được dùng thông dụng nhất; Dễ hình dung tổ chức website; Dễ di chuyển qua website khác",
   "Dùng để tổ chức các khối thông tin bất kỳ; Là hệ thống thông dụng nhất; Gần với mô hình thế giới thực; Dễ di chuyển qua trang web khác",
   "Dùng để tổ chức các khối thông tin phức hợp; Là hệ thống dễ dàng di chuyển qua Website khác; Gần với mô hình thế giới thực; Dễ hình dung tổ chức website"],
  "Sitemap (cấu trúc phân cấp) tổ chức thông tin phức hợp, thông dụng nhất, gần thế giới thực, dễ hình dung. Ý \"di chuyển qua website khác\" là bẫy."),

// ============================== QUIZZ 2 ==============================
S("2-01", 3, 1, "[Quiz 2] HTML là:",
  ["HTML viết tắt từ HyperText Markup Language, còn gọi là ngôn ngữ đánh dấu siêu văn bản, ngôn ngữ cơ bản nhất để xây dựng các trang web",
   "HTML viết tắt từ HyperText Machine Language, còn gọi là ngôn ngữ đánh dấu siêu văn bản",
   "HTML viết tắt từ HyperText Make up Language, còn gọi là ngôn ngữ đánh dấu siêu văn bản",
   "HTML viết tắt từ Hyper Transfer Markup Language, còn gọi là ngôn ngữ đánh dấu siêu văn bản"],
  "HyperText Markup Language."),
S("2-02", 3, 3, "[Quiz 2] Để tạo mục lục: A. HTML (1. Thẻ là gì, 2. Cách dùng ul và ol, 3. Cách cấu hình UTF-8), B. CSS (4. Inline css, 5. Internal css, 6. External css), C. Javascript (7. Tham chiếu javascript, 8. Tạo hàm, 9. Xử lý sự kiện). Số thứ tự 1 đến 9 chạy LIÊN TỤC qua các nhóm. Ta làm như thế nào?",
  [C(`<ol type=A>
<li>HTML</li>
  <ol type=1> ...3 mục... </ol>
<li>CSS</li>
  <ol type=1 start="4"> ...3 mục... </ol>
<li>Javascript</li>
  <ol type=1 start="7"> ...3 mục... </ol>
</ol>`),
   C(`<ol type=A>
<li>HTML</li>
  <ol type=1> ...3 mục... </ol>
<li>CSS</li>
  <ol type=1> ...3 mục... </ol>
<li>Javascript</li>
  <ol type=1> ...3 mục... </ol>
</ol>`),
   C(`<ul type=A>
<li>HTML</li>
  <ul type=1> ...3 mục... </ul>
<li>CSS</li>
  <ul type=1 start="4"> ...3 mục... </ul>
<li>Javascript</li>
  <ul type=1 start="7"> ...3 mục... </ul>
</ul>`),
   C(`<ol type=A>
<li>HTML</li>
  <ol type=1 position="1"> ...3 mục... </ol>
<li>CSS</li>
  <ol type=1 position="4"> ...3 mục... </ol>
<li>Javascript</li>
  <ol type=1 position="7"> ...3 mục... </ol>
</ol>`)],
  "Muốn đánh số tiếp tục từ 4, 7 phải dùng thuộc tính start của <ol>. Không có thuộc tính position; <ul> không đánh số."),
S("2-03", 3, 1, "[Quiz 2] Để tạo mục lục có dấu chấm tròn đặc (disc) trước Chương 1, Chương 2, Chương 3, cấu trúc HTML nào đúng?",
  [C(`<ul type=disc>
<li>Chương 1</li>
<li>Chương 2</li>
<li>Chương 3</li>
</ul>`),
   C(`<ul type=circle>
<li>Chương 1</li>
<li>Chương 2</li>
<li>Chương 3</li>
</ul>`),
   C(`<ol type=disc>
<li>Chương 1</li>
<li>Chương 2</li>
<li>Chương 3</li>
</ol>`),
   C(`<ul type=square>
<li>Chương 1</li>
<li>Chương 2</li>
<li>Chương 3</li>
</ul>`)],
  "Ký hiệu dạng nút là danh sách không thứ tự <ul>. disc = chấm tròn đặc, circle = tròn rỗng, square = vuông. <ol> không có type=disc."),
S("2-04", 3, 1, "[Quiz 2] Phần mở rộng của một file web tĩnh thường là:",
  [".html và .htm", ".html và .xml", ".htm và .xml", "Chỉ .html"],
  "Trang web tĩnh lưu với đuôi .html hoặc .htm. File .xml dùng để lưu trữ dữ liệu."),
S("2-05", 3, 2, "[Quiz 2] Tạo danh sách đề mục có diễn giải: \"Cà phê:\" (gồm Cà phê đen đá, Cà phê sữa đá...) và \"Trà sữa:\" (gồm Trà sữa thường...). Cấu trúc nào đúng?",
  [C(`<dl>
  <dt><b>Cà phê:</b></dt>
    <dd>-Cà phê đen đá</dd>
    <dd>-Cà phê sữa đá</dd>
  <dt><b>Trà sữa:</b></dt>
    <dd>-Trà sữa thường</dd>
</dl>`),
   C(`<dt>
  <dt><b>Cà phê:</b></dt>
    <dl>-Cà phê đen đá</dl>
    <dl>-Cà phê sữa đá</dl>
  <dt><b>Trà sữa:</b></dt>
    <dl>-Trà sữa thường</dl>
</dt>`),
   C(`<dt>
  <dl><b>Cà phê:</b></dl>
    <dd>-Cà phê đen đá</dd>
    <dd>-Cà phê sữa đá</dd>
  <dl><b>Trà sữa:</b></dl>
    <dd>-Trà sữa thường</dd>
</dt>`),
   C(`<dl>
  <dt><b>Cà phê:</b></dt>
    <li>-Cà phê đen đá</li>
    <li>-Cà phê sữa đá</li>
  <dt><b>Trà sữa:</b></dt>
    <li>-Trà sữa thường</li>
</dl>`)],
  "<dl> bao ngoài, <dt> là thuật ngữ/đề mục, <dd> là phần diễn giải. <li> chỉ dùng trong <ol>/<ul>."),
S("2-06", 3, 1, "[Quiz 2] Để tạo một liên kết, khi click vào thì mở website của Khoa HTTT http://is.uel.edu.vn, ta làm như thế nào?",
  ["<a href=\"http://is.uel.edu.vn\">Khoa Hệ Thống Thông Tin</a>", "<link href=\"http://is.uel.edu.vn\">Khoa Hệ Thống Thông Tin</link>",
   "<a link=\"http://is.uel.edu.vn\">Khoa Hệ Thống Thông Tin</a>", "<a src=\"http://is.uel.edu.vn\">Khoa Hệ Thống Thông Tin</a>"],
  "Thẻ <a> dùng thuộc tính href. src là của <img>/<script>; <link> dùng để nhúng CSS."),
S("2-07", 3, 1, "[Quiz 2] Từ trang home.html tạo liên kết mở trang gioithieu.html ở MỘT CỬA SỔ MỚI:",
  ["<a href=\"gioithieu.html\" target=\"_blank\">Giới thiệu</a>", "<a href=\"gioithieu.html\" target=\"_self\">Giới thiệu</a>",
   "<a link=\"gioithieu.html\" target=\"_blank\">Giới thiệu</a>", "<a link=\"gioithieu.html\" target=\"_self\">Giới thiệu</a>"],
  "_blank mở cửa sổ/tab mới; _self mở thay thế trang hiện tại."),
S("2-08", 3, 1, "[Quiz 2] Từ trang home.html tạo liên kết mở trang gioithieu.html THAY THẾ trang home.html:",
  ["<a href=\"gioithieu.html\" target=\"_self\">Giới thiệu</a>", "<a href=\"gioithieu.html\" target=\"_blank\">Giới thiệu</a>",
   "<a src=\"gioithieu.html\" target=\"_blank\">Giới thiệu</a>", "<a src=\"gioithieu.html\" target=\"_self\">Giới thiệu</a>"],
  "target=\"_self\" (mặc định) mở trang mới ngay trong cửa sổ hiện hành."),
S("2-09", 3, 2, "[Quiz 2] Thẻ a có thể:",
  ["Liên kết tới một phần khác trong cùng trang; Liên kết tới một phần nằm trong trang khác; Liên kết đến địa chỉ website hay trang cụ thể; Liên kết đến địa chỉ Email",
   "Liên kết tới một phần khác trong cùng trang; Liên kết với một hoặc nhiều tập tin CSS; Liên kết đến website; Liên kết đến một hoặc nhiều mã lệnh javascript",
   "Liên kết tới cơ sở dữ liệu; Liên kết với một phần trong trang khác; Liên kết đến website; Liên kết đến API Restful",
   "Liên kết tới trang hiện hành; Liên kết với nhiều file Json; Liên kết đến website; Liên kết nhiều file XML"],
  "4 cấp độ của thẻ a: bookmark trong cùng trang, bookmark trang khác, website/trang web, và mailto: email. Nhúng CSS dùng <link>, nhúng JS dùng <script>."),
S("2-10", 3, 1, "[Quiz 2] Chỉ dẫn DOCTYPE trong một tài liệu HTML là gì?",
  ["Cho biết phiên bản HTML. Với HTML5, phần này được khai báo đơn giản là <!DOCTYPE html>",
   "Cho biết phiên bản của Web Server. Với Server thế hệ thứ 5 khai báo là <!DOCTYPE html>",
   "Cho biết phiên bản HTML. Với phiên bản Chrome 5 khai báo là <!DOCTYPE html>",
   "Cho biết phiên bản của trình duyệt. Với trình duyệt thế hệ thứ 5 khai báo là <!DOCTYPE html>"],
  "DOCTYPE khai báo phiên bản HTML; HTML5 dùng <!DOCTYPE html>."),
S("2-11", 3, 1, "[Quiz 2] Các thẻ .......... được đặt trong phần head, dùng để chứa thông tin về trang web như mô tả, từ khóa, tác giả... Giá trị trong các thẻ này không hiển thị trên trình duyệt.",
  ["meta", "link", "script", "info"],
  "<meta name=\"description\">, <meta name=\"keywords\">, <meta name=\"author\"> chứa thông tin mô tả trang."),
S("2-12", 3, 1, "[Quiz 2] Để khai báo Web dùng Tiếng Việt có dấu ta dùng:",
  ["<meta charset=\"UTF-8\">", "<link charset=\"UTF-8\">", "<unicode charset=\"UTF-8\">", "<script charset=\"UTF-8\">"],
  "Bảng mã UTF-8 được khai báo bằng thẻ meta trong head."),
S("2-13", 3, 2, "[Quiz 2] Khi nhấn liên kết trên điện thoại, trình duyệt mở chương trình gọi điện để người dùng thực hiện cuộc gọi. Mã nào đúng?",
  ["<a href=\"tel:1234567890\">Gọi điện</a>", "<a href=\"call:1234567890\">Gọi điện</a>",
   "<a href=\"phone:1234567890\">Gọi điện</a>", "<a href=\"dial:1234567890\">Gọi điện</a>"],
  "Giao thức tel: mở ứng dụng gọi điện, tương tự mailto: mở ứng dụng email."),
S("2-14", 4, 3, "[Quiz 2] Cho mã HTML (thẻ tfoot được viết TRƯỚC tbody):" + C(`<table border="1">
  <thead><tr><th>Cột 1</th><th>Cột 2</th></tr></thead>
  <tfoot><tr><td>Footer 1</td><td>Footer 2</td></tr></tfoot>
  <tbody><tr><td>Nội dung 1</td><td>Nội dung 2</td></tr></tbody>
</table>`) + "\nKết quả hiển thị là gì?",
  ["Bảng hiển thị theo thứ tự: dòng tiêu đề, dòng Nội dung, dòng Footer ở cuối cùng",
   "Bảng hiển thị theo thứ tự trong mã: tiêu đề, Footer, rồi Nội dung",
   "Sai HTML vì thẻ tfoot phải để bên dưới thẻ tbody, trình duyệt báo lỗi",
   "Sai vì các trình duyệt hiện nay không còn hỗ trợ tfoot, tbody"],
  "Trình duyệt luôn vẽ thead ở trên, tfoot ở dưới cùng bất kể vị trí viết trong mã. HTML cũng không báo lỗi cú pháp."),
S("2-15", 3, 1, "[Quiz 2] Cho cấu trúc: <p style=\"font-size: 30px\">Xin chào</p>. Phát biểu nào đúng?",
  ["p là thẻ định nghĩa đoạn văn; style là tên thuộc tính; font-size: 30px là giá trị của thuộc tính style; Xin chào là nội dung nằm trong thẻ p",
   "p là thuộc tính; style là thẻ; font-size: 30px là giá trị của thuộc tính style; Xin chào là nội dung trong thẻ p",
   "p là thẻ đóng; style là tên thuộc tính; font-size: 30px là giá trị của thuộc tính style; Xin chào là nội dung trong thẻ p",
   "p là giá trị thiết lập khung dữ liệu; style là giá trị định trị; font-size: 30px là các biến truyền; Xin chào là nội dung bổ sung cho style"],
  "Cấu trúc thẻ: <tên_thẻ tên_thuộc_tính=\"giá trị\">nội dung</tên_thẻ>."),
S("2-16", 3, 2, "[Quiz 2] Trang product.html muốn mở trang productdetail.html và nhảy NGAY tới hạng mục 3 (HTML5). Làm thế nào?",
  ["Ở trang 1: <a href=\"productdetail.html#detail3\">Hạng mục 3</a>. Ở trang 2: định nghĩa id cho hạng mục 3 là detail3",
   "Ở trang 1: <a href=\"product.html#detail3\">Hạng mục 3</a>. Ở trang 2: định nghĩa name cho hạng mục 3 là detail3",
   "Ở trang 1: <a href=\"#detail3\">Hạng mục 3</a>. Ở trang 2: định nghĩa id cho hạng mục 3 là detail3",
   "Ở trang 1: <a href=\"detail3\">Hạng mục 3</a>. Ở trang 2: định nghĩa name cho hạng mục 3 là detail3"],
  "Bookmark sang trang khác: href=\"tên_trang.html#id\". HTML5 dùng id (không dùng name) để đánh dấu vị trí. href=\"#detail3\" chỉ nhảy trong cùng trang."),
S("2-17", 4, 2, "[Quiz 2] Thẻ table có các thuộc tính:",
  ["caption: tiêu đề bảng; border: đường viền (0 là không viền); width, height; cellspacing: khoảng cách giữa 2 ô; cellpadding: khoảng cách từ viền ô đến nội dung; bgcolor: màu nền; background: ảnh nền",
   "title: tiêu đề bảng; border; width, height; spacing: khoảng cách giữa 2 ô; padding: khoảng cách đến nội dung; bgcolor; background",
   "width, height; align: top, middle, bottom; valign: left, right, center, justify; colspan: trộn dòng; rowspan: trộn cột; nowrap",
   "width, height; align: left, right, center, justify; valign: top, middle, bottom; colspan: trộn cột; rowspan: trộn dòng; nowrap"],
  "Đây là thuộc tính của <table>. Phương án D là thuộc tính của <td>/<th> (câu tiếp theo). Tên đúng là cellspacing/cellpadding chứ không phải spacing/padding."),
S("2-18", 4, 2, "[Quiz 2] Thẻ td, th có các thuộc tính:",
  ["width, height; align: left, right, center, justify; valign: top, middle, bottom; colspan=\"n\": trộn cột; rowspan=\"n\": trộn dòng; nowrap: không tự xuống dòng",
   "width, height; align: top, middle, bottom; valign: left, right, center, justify; colspan: trộn dòng; rowspan: trộn cột; nowrap",
   "caption: tiêu đề; border; width, height; cellspacing; cellpadding; bgcolor; background",
   "title: tiêu đề; border; width, height; spacing; padding; textcolor; background"],
  "align là căn ngang (left/right/center/justify), valign là căn dọc (top/middle/bottom). colspan trộn CỘT, rowspan trộn DÒNG."),
S("2-19", 4, 3, "[Quiz 2] Tạo bảng: dòng tiêu đề nền vàng gồm STT, Mã, Tên (mỗi ô cao 2 dòng) và Điểm (rộng 3 cột); dòng tiêu đề thứ 2 nền xanh lá gồm Toán, Lý, Hóa; dòng dữ liệu: 1, SV1, Tèo, 8, 9, 7. Mã nào đúng?",
  [C(`<table border="1">
<tr style="background-color:yellow">
  <th rowspan="2">STT</th><th rowspan="2">Mã</th>
  <th rowspan="2">Tên</th><th colspan="3">Điểm</th>
</tr>
<tr bgColor="green"><th>Toán</th><th>Lý</th><th>Hóa</th></tr>
<tr><td>1</td><td>SV1</td><td>Tèo</td><td>8</td><td>9</td><td>7</td></tr>
</table>`),
   C(`<table border="1">
<tr style="background-color:yellow">
  <th colspan="2">STT</th><th colspan="2">Mã</th>
  <th colspan="2">Tên</th><th colspan="3">Điểm</th>
</tr>
<tr bgColor="green"><th>Toán</th><th>Lý</th><th>Hóa</th></tr>
<tr><td>1</td><td>SV1</td><td>Tèo</td><td>8</td><td>9</td><td>7</td></tr>
</table>`),
   C(`<table border="1">
<tr style="background-color:yellow">
  <th rowspan="2">STT</th><th rowspan="2">Mã</th>
  <th rowspan="2">Tên</th><th colspan="3">Điểm</th>
</tr>
<tr background-color="green"><th>Toán</th><th>Lý</th><th>Hóa</th></tr>
<tr><td>1</td><td>SV1</td><td>Tèo</td><td>8</td><td>9</td><td>7</td></tr>
</table>`),
   C(`<table border="1">
<tr style="background-color:yellow">
  <th rowspan="2">STT</th><th rowspan="2">Mã</th>
  <th rowspan="2">Tên</th><th colspan="3">Điểm</th>
</tr>
<tr bgColor="green"><th>Toán</th><th>Lý</th><th>Hóa</th></tr>
<tr><th>1</th><th>SV1</th><th>Tèo</th><th>8</th><th>9</th><th>7</th></tr>
</table>`)],
  "STT, Mã, Tên cao 2 dòng nên dùng rowspan=\"2\"; Điểm rộng 3 cột nên colspan=\"3\". background-color không phải thuộc tính HTML (phải viết trong style hoặc dùng bgColor). Dữ liệu dùng <td>, không phải <th> (th làm chữ đậm, căn giữa)."),
S("2-22", 3, 1, "[Quiz 2] Thẻ p và thẻ br khác nhau như thế nào?",
  ["Thẻ p: khai báo một đoạn văn bản, chèn một ký tự xuống dòng và một dòng trống. Thẻ br: tạo dòng mới và một ký tự xuống dòng",
   "Thẻ br: khai báo một đoạn văn bản, chèn ký tự xuống dòng và một dòng trống. Thẻ p: tạo dòng mới và một ký tự xuống dòng",
   "Thẻ p: khai báo một đoạn văn bản, chèn một ký tự xuống dòng. Thẻ br: tạo dòng mới và một ký tự xuống dòng",
   "Thẻ p: khai báo một đoạn văn bản, chèn một ký tự xuống dòng và một dòng trống. Thẻ br: tạo đoạn văn mới"],
  "<p> tạo đoạn văn (xuống dòng + có khoảng trống trên dưới). <br> chỉ ngắt dòng, không tạo khoảng trống."),
S("2-23", 3, 1, "[Quiz 2] Lệnh nào sau đây dùng để ghi chú trong HTML?",
  ["<!-- Ghi chú ở đây -->", "/* ghi chú ở đây */", "<comment ghi chú ở đây />", "//Ghi chú ở đây"],
  "HTML: <!-- -->. CSS: /* */. JavaScript: // hoặc /* */."),
S("2-24", 3, 2, "[Quiz 2] Kết quả mong muốn: chữ \"Thông báo\" có nền đỏ CHỈ VỪA ĐÚNG chữ, xuống dòng là câu \"Hôm nay bạn cần chọn đáp án đúng\" có nền vàng KÉO DÀI HẾT chiều ngang. Mã nào đúng?",
  [C(`<div>
  <span style="background:red">Thông báo</span>
  <div style="background-color:yellow">Hôm nay bạn cần chọn đáp án đúng</div>
</div>`),
   C(`<div>
  <div style="background:red">Thông báo</div>
  <span style="background-color:yellow">Hôm nay bạn cần chọn đáp án đúng</span>
</div>`),
   C(`<div>
  <span style="bgColor:red">Thông báo</span>
  <div style="bg-color:yellow">Hôm nay bạn cần chọn đáp án đúng</div>
</div>`),
   C(`<div>
  <div style="background:red">Thông báo</div>
  <div style="background-color:yellow">Hôm nay bạn cần chọn đáp án đúng</div>
</div>`)],
  "<span> là inline (nền chỉ bao quanh nội dung), <div> là block (chiếm trọn hàng). bgColor/bg-color không phải thuộc tính CSS."),
S("2-25", 3, 2, "[Quiz 2] Kết quả mong muốn: \"Thông báo\" nền đỏ và câu \"Hôm nay bạn cần chọn đáp án đúng\" nền vàng, CẢ HAI đều là thanh kéo dài hết chiều ngang, mỗi thanh một dòng. Mã nào đúng?",
  [C(`<div>
  <div style="background:red">Thông báo</div>
  <div style="background-color:yellow">Hôm nay bạn cần chọn đáp án đúng</div>
</div>`),
   C(`<div>
  <span style="background:red">Thông báo</span>
  <span style="background-color:yellow">Hôm nay bạn cần chọn đáp án đúng</span>
</div>`),
   C(`<div>
  <span style="background:red">Thông báo</span>
  <div style="background-color:yellow">Hôm nay bạn cần chọn đáp án đúng</div>
</div>`),
   C(`<div>
  <div style="background:red">Thông báo</div>
  <span style="background-color:yellow">Hôm nay bạn cần chọn đáp án đúng</span>
</div>`)],
  "Cả hai thanh kéo dài hết chiều ngang nên cả hai phải là block element <div>."),
S("2-26", 3, 2, "[Quiz 2] Dùng thẻ nav tạo menu: Khoa HTTT | Google | Visual Studio, nhấn vào thì mở website tương ứng; bên dưới có dòng nền vàng với chữ \"Chú ý:\" in đậm. Mã nào đúng?",
  [C(`<nav>
  <a href="https://is.uel.edu.vn">Khoa HTTT</a> |
  <a href="http://google.com">Google</a> |
  <a href="https://visualstudio.microsoft.com">Visual Studio</a>
</nav>
<p style="background:yellow"><strong>Chú ý:</strong> nav không hỗ trợ IE 8 trở xuống</p>`),
   C(`<nav>
  <a href="https://is.uel.edu.vn">Khoa HTTT</a> |
  <a href="http://google.com">Google</a> |
  <a href="https://visualstudio.microsoft.com">Visual Studio</a>
</nav>
<p style="bg-Color:yellow">Chú ý: nav không hỗ trợ IE 8 trở xuống</p>`),
   C(`<nav>
  <a src="https://is.uel.edu.vn">Khoa HTTT</a> |
  <a src="http://google.com">Google</a> |
  <a src="https://visualstudio.microsoft.com">Visual Studio</a>
</nav>
<p style="background:yellow"><strong>Chú ý:</strong> nav không hỗ trợ IE 8 trở xuống</p>`),
   C(`<nav>
  <a src="https://is.uel.edu.vn">Khoa HTTT</a> |
  <a src="http://google.com">Google</a> |
  <a src="https://visualstudio.microsoft.com">Visual Studio</a>
</nav>
<p style="background:yellow"><b>Chú ý:</b> nav không hỗ trợ IE 8 trở xuống</p>`)],
  "Liên kết phải dùng href (src không có tác dụng với <a>). bg-Color không phải thuộc tính CSS, đồng thời phương án đó thiếu chữ in đậm."),
S("2-27", 3, 2, "[Quiz 2] Cho 5 chữ UEL: thứ 1 không định dạng; thứ 2 in nghiêng; thứ 3 in đậm + in nghiêng + gạch chân; thứ 4 in đậm; thứ 5 in đậm + gạch chân. Mã nào đúng?",
  [C(`UEL
<i>UEL</i>
<b><u><i>UEL</i></u></b>
<b>UEL</b>
<b><u>UEL</u></b>`),
   C(`UEL
<i>UEL</i>
<b><u><i>UEL</u></i></b>
<b>UEL</b>
<b><u>UEL</u></b>`),
   C(`UEL
<i>UEL</i>
<b><i><u>UEL</i></u></b>
<b>UEL</b>
<b><i>UEL</i></b>`),
   C(`UEL
<i>UEL<i/>
<b><u><i>UEL<i/><u/><b/>
<b>UEL<b/>
<b><u>UEL<u/><b/>`)],
  "Thẻ mở sau phải đóng trước (lồng đúng thứ tự). Thẻ đóng là </i>, không phải <i/>. Phương án C sai ở chữ thứ 5 (in nghiêng thay vì gạch chân)."),
M("2-28", 3, 2, "[Quiz 2] Lệnh nào tương đương với lệnh: <b><u><i>Học HTML không khó</i></u></b>",
  ["<u><b><i>Học HTML không khó</i></b></u>", "<i><u><b>Học HTML không khó</b></u></i>",
   "<b><i><u>Học HTML không khó</u></i></b>", "<b><u><i>Học HTML không khó<i/><u/><b/>"], 3,
  "Thứ tự lồng các thẻ định dạng không quan trọng, miễn là lồng đúng (mở sau đóng trước). Phương án dùng <i/> là thẻ đóng sai cú pháp."),
S("2-29", 3, 2, "[Quiz 2] Hiển thị: \"Phương trình bậc 2: ax² + bx + c = 0\" (số 2 nằm trên) và \"O₂ + H₂ = H²O\" (O₂, H₂ có số 2 nằm dưới, H²O có số 2 nằm trên). Mã nào đúng?",
  ["ax<sup>2</sup>+bx+c=0 ... O<sub>2</sub>+H<sub>2</sub>=H<sup>2</sup>O",
   "ax<sub>2</sub>+bx+c=0 ... O<sup>2</sup>+H<sup>2</sup>=H<sub>2</sub>O",
   "ax<supscript>2</supscript>+bx+c=0 ... O<subscript>2</subscript>+H<subscript>2</subscript>=H<supscript>2</supscript>O",
   "ax<subscript>2</subscript>+bx+c=0 ... O<supscript>2</supscript>+H<supscript>2</supscript>=H<subscript>2</subscript>O"],
  "<sup> = superscript (chỉ số trên, số mũ), <sub> = subscript (chỉ số dưới). Không có thẻ <supscript>/<subscript>."),
S("2-30", 3, 1, "[Quiz 2] Định dạng chuỗi \"Hello World\" có font chữ tahoma, kích thước 15, màu đỏ:",
  ["<font face=\"tahoma\" size=\"15\" color=\"red\">Hello World</font>", "<font face=\"tahoma\" height=\"15\" text-color=\"red\">Hello World</font>",
   "<font name=\"tahoma\" size=\"15\" color=\"red\">Hello World</font>", "<font name=\"tahoma\" size=\"15\" text-color=\"red\">Hello World</font>"],
  "Thẻ font có 3 thuộc tính: face (kiểu chữ), size (cỡ chữ), color (màu)."),
S("2-31", 3, 1, "[Quiz 2] Hiển thị hình \"h1.png\" có chiều cao 100, chiều rộng 200:",
  ["<img src=\"h1.png\" height=\"100\" width=\"200\"></img>", "<photo link=\"h1.png\" height=\"100\" width=\"200\"></photo>",
   "<img link=\"h1.png\" height=\"100\" width=\"200\"></img>", "<photo src=\"h1.png\" height=\"100\" width=\"200\"></photo>"],
  "Thẻ hình là <img>, đường dẫn hình là thuộc tính src."),
S("2-32", 3, 2, "[Quiz 2] Chọn câu trả lời đúng:",
  ["HTML dùng các thẻ (tags) để định dạng cách hiển thị dữ liệu. Trình duyệt thường không báo lỗi cú pháp HTML; viết sai chỉ dẫn đến hiển thị không đúng dự định",
   "HTML dùng các thẻ (tags) để định dạng hiển thị. Nếu viết sai cú pháp HTML trình duyệt sẽ báo lỗi và tắt chương trình",
   "HTML dùng các Element để định dạng hiển thị. Trình duyệt sẽ thông báo lỗi nếu viết sai cú pháp và không chạy được",
   "HTML dùng các thuộc tính (attributes) để định dạng hiển thị. Trình duyệt thường không báo lỗi cú pháp HTML"],
  "HTML dùng thẻ (tag). Trình duyệt bỏ qua lỗi cú pháp, chỉ hiển thị sai."),
S("2-33", 3, 1, "[Quiz 2] Khi chọn mã màu, RGB đại diện cho những thông số nào?",
  ["R là red, G là green, B là blue", "R là red, G là gray, B là blond", "R là red, G là grey, B là brown", "R là read, G là green, B là brown"],
  "RGB = Red, Green, Blue."),
S("2-34", 3, 1, "[Quiz 2] Mã màu thập lục phân từ 00 đến FF, các giá trị được quy định:",
  ["Thấp nhất 000000 là màu đen, cao nhất FFFFFF là màu trắng", "Thấp nhất 000000 là màu trắng, cao nhất FFFFFF là màu đen",
   "Thấp nhất 000000 là màu red, cao nhất FFFFFF là màu blue", "Thấp nhất 000000 là màu green, cao nhất FFFFFF là màu blue"],
  "Không có ánh sáng (0,0,0) là đen; đủ cả 3 màu tối đa (255,255,255) là trắng."),
S("2-35", 3, 2, "[Quiz 2] Từ mã thập lục phân #FF00FF, chuyển qua cách viết rgb như thế nào?",
  ["rgb(255,0,255)", "rgb(0,0,255)", "rgb(0,255,0)", "rgb(0,255,255)"],
  "FF = 255 (Red), 00 = 0 (Green), FF = 255 (Blue)."),
S("2-36", 3, 2, "[Quiz 2] Từ mã thập lục phân #88FF00, chuyển qua cách viết rgb như thế nào?",
  ["rgb(136,255,0)", "rgb(0,255,136)", "rgb(136,0,255)", "rgb(255,0,255)"],
  "88 hệ 16 = 8×16 + 8 = 136; FF = 255; 00 = 0. Thứ tự giữ nguyên R, G, B."),
S("2-37", 3, 1, "[Quiz 2] HTML hỗ trợ trình bày các đề mục dạng nút hay đánh số thứ tự:",
  ["OL trình bày đề mục dạng thứ tự (số hoặc ký tự); UL trình bày đề mục dạng các nút",
   "OL trình bày đề mục dạng các nút; UL trình bày đề mục dạng thứ tự",
   "LI trình bày đề mục dạng thứ tự; DL trình bày đề mục dạng các nút",
   "LI trình bày đề mục dạng các nút; DL trình bày đề mục dạng thứ tự"],
  "OL = Ordered List (có thứ tự), UL = Unordered List (dạng nút)."),
S("2-38", 3, 1, "[Quiz 2] Để tạo mục lục đánh số 1. Chương 1, 2. Chương 2, 3. Chương 3, cấu trúc HTML nào đúng?",
  ["<ol><li>Chương 1</li><li>Chương 2</li><li>Chương 3</li></ol>", "<ul><li>Chương 1</li><li>Chương 2</li><li>Chương 3</li></ul>",
   "<dl type=1><li>Chương 1</li><li>Chương 2</li><li>Chương 3</li></dl>", "<ul type=1><li>Chương 1</li><li>Chương 2</li><li>Chương 3</li></ul>"],
  "Danh sách đánh số dùng <ol>, mặc định type=\"1\"."),
S("2-40", 3, 2, "[Quiz 2] Để tạo mục lục A. HTML (1, 2, 3), B. CSS (1, 2, 3), C. Javascript (1, 2, 3), mỗi nhóm con đánh số lại từ 1, ta làm như thế nào?",
  [C(`<ol type=A>
<li>HTML</li>
  <ol type=1> ...3 mục... </ol>
<li>CSS</li>
  <ol type=1> ...3 mục... </ol>
<li>Javascript</li>
  <ol type=1> ...3 mục... </ol>
</ol>`),
   C(`<ol type=A>
<li>HTML</li>
  <dl type=1> ...3 mục... </dl>
<li>CSS</li>
  <dl type=1> ...3 mục... </dl>
<li>Javascript</li>
  <dl type=1> ...3 mục... </dl>
</ol>`),
   C(`<ul type=A>
<li>HTML</li>
  <ul type=1> ...3 mục... </ul>
<li>CSS</li>
  <ul type=1> ...3 mục... </ul>
<li>Javascript</li>
  <ul type=1> ...3 mục... </ul>
</ul>`),
   C(`<dl type=A>
<li>HTML</li>
  <dl type=1> ...3 mục... </dl>
<li>CSS</li>
  <dl type=1> ...3 mục... </dl>
<li>Javascript</li>
  <dl type=1> ...3 mục... </dl>
</dl>`)],
  "Đánh số A, B, C và 1, 2, 3 đều là danh sách có thứ tự <ol> với thuộc tính type. So sánh với câu dùng start=\"4\" khi muốn số chạy liên tục."),

// ============================== QUIZZ 3 ==============================
S("3-01", 8, 1, "[Quiz 3] TypeScript được phát triển bởi ai?",
  ["Microsoft", "Mozilla", "Facebook", "Google"],
  "Slide 41 liệt kê TypeScript (Microsoft) trong các ngôn ngữ script thông dụng."),
S("3-02", 7, 2, "[Quiz 3] Which input type defines a slider control?",
  ["range", "slider", "controls", "search"],
  "<input type=\"range\" min=\"1\" max=\"11\" value=\"9\"> tạo thanh trượt (slide 36)."),
S("3-03", 8, 1, "[Quiz 3] Kết quả của đoạn mã TypeScript sau là gì?" + C(`let message: string = "Hello, TypeScript!";
console.log(message);`),
  ["\"Hello, TypeScript!\"", "Lỗi biên dịch", "undefined", "null"],
  "Biến kiểu string được gán chuỗi hợp lệ nên in ra chuỗi đó."),
S("3-04", 6, 1, "[Quiz 3] What is the correct CSS syntax for making all the <p> elements bold?",
  ["p {font-weight:bold;}", "p {text-size:bold;}", "<p style=\"text-size:bold;\">", "<p style=\"font-size:bold;\">"],
  "In đậm dùng font-weight. Đề nói \"all the <p> elements\" nên dùng selector p trong CSS."),
S("3-05", 3, 1, "[Quiz 3] Để trình bày các đề mục với dạng nút ta sử dụng thẻ:",
  ["<UL>", "<LI>", "<OL>", "<DL>"],
  "UL = danh sách dạng nút (bullet)."),
S("3-06", 6, 1, "[Quiz 3] How do you select an element with id 'demo'?",
  ["#demo", ".demo", "demo", "*demo"],
  "# cho id, . cho class."),
S("3-08", 3, 2, "[Quiz 3] Which HTML element is used to display a scalar measurement within a range?",
  ["<meter>", "<gauge>", "<measure>", "<range>"],
  "<meter value=\"0.6\">60%</meter> hiển thị giá trị đo trong một khoảng. HTML không có thẻ <gauge>, <measure>, <range>."),
S("3-09", 3, 1, "[Quiz 3] The HTML <canvas> element is used to:",
  ["draw graphics", "display database records", "create draggable elements", "manipulate data in MySQL"],
  "<canvas> là vùng vẽ đồ họa bằng JavaScript."),
S("3-10", 6, 1, "[Quiz 3] How do you select elements with class name 'test'?",
  [".test", "#test", "test", "*test"],
  "Selector class bắt đầu bằng dấu chấm."),
S("3-11", 5, 1, "[Quiz 3] Which CSS property controls the text size?",
  ["font-size", "text-size", "font-style", "text-style"],
  "font-size điều khiển cỡ chữ; font-style là in nghiêng."),
S("3-12", 6, 2, "[Quiz 3] Tạo danh sách không thứ tự Cà phê, Ca cao, Khoai tây chiên với ký hiệu đầu dòng là hình \"h1.png\" (cùng cấp file html):",
  [C(`<ul style="list-style-image:url('h1.png')">
  <li>Cà phê</li>
  <li>Ca cao</li>
  <li>Khoai tây chiên</li>
</ul>`),
   C(`<ul style="image:url('h1.png')">
  <li>Cà phê</li>
  <li>Ca cao</li>
  <li>Khoai tây chiên</li>
</ul>`),
   C(`<dt style="list-style-image:url('h1.png')">
  <li>Cà phê</li>
  <li>Ca cao</li>
  <li>Khoai tây chiên</li>
</dt>`),
   C(`<ul style="list-style-image:url('h1.png')">
  <dt>Cà phê</dt>
  <dt>Ca cao</dt>
  <dt>Khoai tây chiên</dt>
</ul>`)],
  "Thuộc tính CSS list-style-image:url(...) đặt trên <ul>, các mục vẫn là <li>."),
S("3-13", 6, 1, "[Quiz 3] What is the default value of the position property?",
  ["static", "absolute", "relative", "fixed"],
  "Slide 33: static là định vị mặc định."),
S("3-15", 3, 1, "[Quiz 3] Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
  ["alt", "title", "src", "longdesc"],
  "alt hiển thị khi không tải được hình; title hiện tooltip khi rê chuột."),
S("3-16", 3, 1, "[Quiz 3] Thẻ h dùng để làm gì và có bao nhiêu cấp độ?",
  ["Định dạng dòng văn bản theo phân cấp đề mục. Kích thước ký tự NHỎ DẦN từ 1 đến 6. Sau mỗi thẻ, văn bản tự động xuống dòng",
   "Định dạng dòng văn bản theo phân cấp đề mục. Kích thước ký tự TĂNG DẦN từ 1 đến 6. Sau mỗi thẻ, văn bản tự động xuống dòng",
   "Định dạng đoạn văn bản. Kích thước tăng dần từ 1 đến 5. Sau mỗi thẻ không tự xuống dòng, phải dùng br",
   "Định dạng đoạn văn bản. Kích thước nhỏ dần từ 1 đến 6. Sau mỗi thẻ không tự xuống dòng, phải dùng br"],
  "h1 lớn nhất, h6 nhỏ nhất; heading là block element nên tự xuống dòng."),
S("3-17", 3, 2, "[Quiz 3] Chọn đáp án đúng:",
  ["&nbsp; tạo khoảng trắng; &lt; tạo dấu nhỏ hơn; &gt; tạo dấu lớn hơn; &quot; tạo dấu ngoặc kép",
   "&nbsp tạo khoảng trắng; &lt tạo dấu nhỏ hơn; &gt tạo dấu lớn hơn; &quot tạo dấu ngoặc kép",
   "&nbsp tạo khoảng trắng; &lt tạo dấu lớn hơn; &gt tạo dấu nhỏ hơn; &quot tạo dấu ngoặc đơn",
   "&nbsp; tạo khoảng trắng; &lt; tạo dấu lớn hơn; &gt; tạo dấu lớn hơn; &quot; tạo dấu ngoặc kép"],
  "Mã ký tự đặc biệt phải có dấu chấm phẩy cuối. lt = less than (<), gt = greater than (>), quot = quotation (\")."),
S("3-18", 5, 1, "[Quiz 3] Which HTML attribute is used to define inline styles?",
  ["style", "class", "font", "styles"],
  "Inline CSS viết trong thuộc tính style của thẻ."),
S("3-20", 4, 2, "[Quiz 3] Tạo bảng 3x3 (rộng 150, cao 100) có hình chữ thập: ô giữa nền vàng, 4 ô trên-dưới-trái-phải của ô giữa nền xanh lá, 4 ô góc để trống. Mã nào đúng?",
  [C(`<table border="1" width="150" height="100">
<tr><td></td><td bgColor="green"></td><td></td></tr>
<tr><td bgColor="green"></td><td bgColor="yellow"></td><td bgColor="green"></td></tr>
<tr><td></td><td bgColor="green"></td><td></td></tr>
</table>`),
   C(`<table border="1" width="150" height="100">
<tr><td></td><td background-color="green"></td><td></td></tr>
<tr><td background-color="green"></td><td background-color="yellow"></td><td background-color="green"></td></tr>
<tr><td></td><td background-color="green"></td><td></td></tr>
</table>`),
   C(`<table border="1" width="150" height="100">
<tr><td></td><td style="bgColor:green"></td><td></td></tr>
<tr><td style="bgColor:green"></td><td style="bgColor:yellow"></td><td style="bgColor:green"></td></tr>
<tr><td></td><td style="bgColor:green"></td><td></td></tr>
</table>`),
   C(`<table border="1" width="150" height="100">
<tr><td></td><td backgroundColor="green"></td><td></td></tr>
<tr><td backgroundColor="green"></td><td backgroundColor="yellow"></td><td backgroundColor="green"></td></tr>
<tr><td></td><td backgroundColor="green"></td><td></td></tr>
</table>`)],
  "Thuộc tính HTML của ô là bgColor. background-color chỉ hợp lệ bên trong style=\"...\"; bgColor không phải thuộc tính CSS."),
S("3-21", 7, 1, "[Quiz 3] In HTML, which attribute is used to specify that an input field must be filled out?",
  ["required", "placeholder", "validate", "formvalidate"],
  "required bắt buộc nhập trước khi submit."),
S("3-23", 3, 2, "[Quiz 3] Which HTML element is used to specify a header for a document or section?",
  ["<header>", "<head>", "<top>", "<section>"],
  "<header> là phần đầu hiển thị của trang/khu vực. <head> chứa thông tin meta, không hiển thị."),
S("3-24", 6, 2, "[Quiz 3] How do you make each word in a text start with a capital letter?",
  ["text-transform:capitalize", "text-style:capitalize", "transform:capitalize", "You can't do that with CSS"],
  "text-transform nhận capitalize, uppercase, lowercase."),
S("3-25", 5, 1, "[Quiz 3] Phát biểu nào dưới đây đúng với cú pháp của CSS?",
  ["p {text-align:center; color:red}", "p { center:text-align; color:red}", "p {text-align:center; red:color }", "p { color:red, text-align:center}"],
  "selector {property: value; property: value}. Các cặp ngăn cách bằng dấu chấm phẩy, không dùng dấu phẩy."),
S("3-26", 5, 1, "[Quiz 3] What does CSS stand for?",
  ["Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
  "CSS = Cascading Style Sheets."),
S("3-27", 4, 3, "[Quiz 3] Index.html chia 2 khung trên/dưới: khung trên cao 30 chứa Menu.html, khung dưới chứa trang nội dung (mặc định gioithieu.html). Bấm menu Trang chủ, Giới thiệu, Liên hệ thì trang tương ứng mở ở khung dưới. Cấu trúc nào đúng?",
  [C(`Menu.html:
<a href="TrangChu.html" target="main">Trang chủ</a>|
<a href="GioiThieu.html" target="main">Giới thiệu</a>|
<a href="LienHe.html" target="main">Liên Hệ</a>
Index.html:
<frameset rows="30,100%" frameborder="no">
  <frame src="menu.html" target="main"></frame>
  <frame src="gioithieu.html" name="main"></frame>
</frameset>`),
   C(`Menu.html:
<a href="TrangChu.html" target="main">Trang chủ</a>|
<a href="GioiThieu.html" target="main">Giới thiệu</a>|
<a href="LienHe.html" target="main">Liên Hệ</a>
Index.html:
<frameset rows="30,100%" frameborder="no">
  <frame src="menu.html" name="main"></frame>
  <frame src="gioithieu.html" target="main"></frame>
</frameset>`),
   C(`Menu.html:
<a href="TrangChu.html" name="main">Trang chủ</a>|
<a href="GioiThieu.html" name="main">Giới thiệu</a>|
<a href="LienHe.html" name="main">Liên Hệ</a>
Index.html:
<frameset rows="30;100%" frameborder="no">
  <frame src="menu.html" target="main"></frame>
  <frame src="gioithieu.html" name="main"></frame>
</frameset>`),
   C(`Menu.html:
<a href="TrangChu.html" target="main">Trang chủ</a>|
<a href="GioiThieu.html" target="main">Giới thiệu</a>|
<a href="LienHe.html" target="main">Liên Hệ</a>
Index.html:
<frameset rows="30;100%" frameborder="no">
  <Iframe src="menu.html" target="main"></Iframe>
  <Iframe src="gioithieu.html" name="main"></Iframe>
</frameset>`)],
  "Khung đích phải được đặt name=\"main\", và liên kết trong menu dùng target=\"main\". Giá trị rows ngăn cách bằng dấu phẩy. Trong frameset dùng <frame>, không dùng <iframe>."),
S("3-28", 8, 2, "[Quiz 3] Đoạn mã TypeScript sau sẽ báo lỗi gì?" + C(`let isDone: boolean = "true";`),
  ["Lỗi kiểu dữ liệu", "Lỗi logic", "Lỗi cú pháp", "Không có lỗi"],
  "Biến khai báo kiểu boolean nhưng được gán chuỗi \"true\" (có dấu nháy) nên TypeScript báo lỗi kiểu dữ liệu."),
S("3-29", 6, 2, "[Quiz 3] Cho đoạn code sau, chọn câu trả lời phù hợp:" + C(`<style type="text/css">
  p { color:blue; }
  #mau { color:red; }
</style>
...
<p class="mau">chào mừng k10406</p>`),
  ["Nội dung của thẻ p sẽ là màu xanh", "Nội dung của thẻ p sẽ là màu đỏ", "Nội dung của thẻ p là màu đen mặc định của trình duyệt", "Đoạn lệnh này sai"],
  "#mau là selector ID nhưng thẻ p dùng class=\"mau\" nên không khớp. Chỉ còn quy tắc p {color:blue} được áp dụng."),
S("3-30", 3, 2, "[Quiz 3] Một thẻ (tag) thường có 3 hoặc 4 phần: <ten_the tên_TT1=\"giá_trị1\">Noi dung</ten_the>. Phát biểu nào đúng?",
  ["Tên thẻ: nhận dạng chức năng của thẻ; Thuộc tính: nhận biết dữ liệu được hiển thị như thế nào; Giá trị của thuộc tính; Hoặc có thêm thành phần con giữa tag mở và tag đóng",
   "Tên thẻ: nhận dạng chức năng; Thuộc tính: để điều hướng người dùng; Giá trị thuộc tính; Thành phần con giữa tag mở và đóng",
   "Thuộc tính: nhận dạng chức năng của thẻ; Tên thẻ: nhận biết dữ liệu hiển thị như thế nào; Giá trị thuộc tính; Hoặc chứa các thành phần khác",
   "Tên thẻ: thiết lập sự kiện cho từng chức năng; Thuộc tính: nhận biết dữ liệu hiển thị như thế nào; Giá trị thuộc tính; Thành phần con"],
  "Tên thẻ cho biết chức năng (p là đoạn văn, img là hình...), thuộc tính quy định cách hiển thị dữ liệu."),
S("3-31", 8, 1, "[Quiz 3] TypeScript là gì?",
  ["Một siêu bộ (superset) mở rộng của JavaScript", "Một framework JavaScript", "Một ngôn ngữ lập trình hoàn toàn mới", "Một phần mềm IDE"],
  "TypeScript bổ sung kiểu dữ liệu tĩnh cho JavaScript và biên dịch ra JavaScript."),
S("3-32", 6, 2, "[Quiz 3] How do you display a border like this: top = 10px, bottom = 5px, left = 20px, right = 1px?",
  ["border-width:10px 1px 5px 20px;", "border-width:10px 5px 20px 1px;", "border-width:5px 20px 10px 1px;", "border-width:10px 20px 5px 1px;"],
  "Thứ tự 4 giá trị theo chiều kim đồng hồ: top, right, bottom, left = 10px 1px 5px 20px."),
S("3-33", 3, 1, "[Quiz 3] What is the correct HTML for inserting an image?",
  ["<img src=\"image.gif\" alt=\"MyImage\">", "<img alt=\"MyImage\">image.gif</img>", "<image src=\"image.gif\" alt=\"MyImage\">", "<img href=\"image.gif\" alt=\"MyImage\">"],
  "Thẻ img với thuộc tính src."),
S("3-34", 5, 1, "[Quiz 3] Which is the correct CSS syntax?",
  ["body {color: black;}", "{body:color=black;}", "{body;color:black;}", "body:color=black;"],
  "selector { property: value; }"),
S("3-35", 5, 2, "[Quiz 3] Độ ưu tiên của 3 loại CSS sau theo thứ tự TĂNG DẦN:",
  ["External Style Sheet, Embedding (Internal) Style Sheet, Inline Style Sheet", "Inline Style Sheet, External Style Sheet, Embedding Style Sheet",
   "Inline Style Sheet, Embedding Style Sheet, External Style Sheet", "External Style Sheet, Inline Style Sheet, Embedding Style Sheet"],
  "Inline cao nhất, External thấp nhất (khi External được link trước Internal). Đề hỏi TĂNG DẦN nên đọc từ thấp lên cao."),
S("3-36", 3, 1, "[Quiz 3] Cấu trúc chung của một trang Web tĩnh:",
  [C(`<html>
<head>
  <meta charset="UTF-8">
  <title>Đây là tiêu đề của trang web</title>
</head>
<body>
  Đây là nội dung chính của trang Web
</body>
</html>`),
   C(`<html>
<head>
  <meta charset="UTF-8">
  <title>Đây là tiêu đề của trang web</title>
</head>
<content>
  Đây là nội dung chính của trang Web
</content>
</html>`),
   C(`<html>
<hed>
  <meta charset="UTF-8">
  <title>Đây là tiêu đề của trang web</title>
</hed>
<body>
  Đây là nội dung chính của trang Web
</body>
</html>`),
   C(`<html>
<title>
  <meta charset="UTF-8">
  <head>Đây là tiêu đề của trang web</head>
</title>
<body>
  Đây là nội dung chính của trang Web
</body>
</html>`)],
  "html bao ngoài; head chứa meta và title; body chứa nội dung hiển thị."),
S("3-37", 6, 1, "[Quiz 3] How do you display hyperlinks without an underline?",
  ["a {text-decoration:none;}", "a {underline:none;}", "a {text-decoration:no-underline;}", "a {decoration:no-underline;}"],
  "text-decoration: none bỏ gạch chân (Bài tập 35, 59)."),
S("3-38", 5, 1, "[Quiz 3] How do you insert a comment in a CSS file?",
  ["/* this is a comment */", "// this is a comment //", "// this is a comment", "' this is a comment"],
  "CSS chỉ có một kiểu ghi chú /* */."),
S("3-39", 3, 2, "[Quiz 3] The HTML global attribute \"contenteditable\" is used to:",
  ["Specify whether the content of an element should be editable or not", "Update content from the server",
   "Specify a context menu for an element", "Return the position of the first found occurrence of content inside a string"],
  "<p contenteditable=\"true\"> cho phép người dùng sửa trực tiếp nội dung trên trang."),
S("3-40", 5, 1, "[Quiz 3] Lựa chọn kiểu khai báo CSS đúng nhất cho cú pháp sau:" + C(`<style type="text/css">
  .tieude { color:blue; }
</style>`),
  ["Internal Style Sheet", "Browser default", "External Style Sheet", "Inline Style Sheet"],
  "CSS viết trong thẻ <style> của trang là Internal (Embedding) Style Sheet."),
];

if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_QUIZ; }
