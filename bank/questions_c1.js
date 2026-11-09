// ============================================================================
// CHƯƠNG 1: Các khái niệm cơ bản về Mạng và Internet
// Soạn dựa trên Slide bài giảng + Phong cách ra đề của thầy (Moodle Quiz)
// Quy ước: Đáp án đúng luôn đặt ở ĐẦU mảng options (correct = [0]).
// ============================================================================
const S = (id, chapter, difficulty, question, options, explanation) =>
  ({ id: "c1-" + id, chapter, difficulty, type: "single", question, options, correct: [0], explanation });
const M = (id, chapter, difficulty, question, options, nCorrect, explanation) =>
  ({ id: "c1-" + id, chapter, difficulty, type: "multiple", question: question + " (chọn nhiều đáp án)", options,
     correct: Array.from({ length: nCorrect }, (_, i) => i), explanation });

const QUESTIONS_C1 = [
// --- Lịch sử Mạng Internet ---
S("q1", 1, 1, "Mạng Internet xuất phát từ mạng nào của Mỹ vào năm 1969?",
  ["ARPANET", "INTERNET", "WWW", "NSFNET"],
  "Slide 4: Mạng Internet xuất phát từ mạng ARPANET của Mỹ (1969) – mạng kết nối giữa các trường Đại học."),

S("q2", 1, 1, "Ai là người phát minh ra giao thức World Wide Web (WWW) và ngôn ngữ HTML vào năm 1989?",
  ["Tim Berners-Lee", "Bill Gates", "Steve Jobs", "Vint Cerf"],
  "Slide 4: Năm 1989, Tim Berners-Lee phát minh ra giao thức World Wide Web, sau đó tạo ra ngôn ngữ Hypertext Markup Language (HTML)."),

S("q3", 1, 2, "Trình duyệt web (Web Browser) và Web server đầu tiên (info.cern.ch) được tạo ra vào năm nào?",
  ["1990", "1989", "1993", "1997"],
  "Slide 4: Năm 1990, tìm viết trình duyệt (Web Browser) và Web server đầu tiên (info.cern.ch)."),

S("q4", 1, 1, "Việt Nam chính thức có Internet vào thời gian nào?",
  ["Tháng 11/1997", "Tháng 11/1999", "Tháng 12/1997", "Tháng 10/1997"],
  "Slide 4: Việt Nam có Internet chính thức vào tháng 11/1997."),

// --- Máy chủ - Máy khách ---
S("q5", 1, 1, "Máy chủ (Server) là gì?",
  ["Là máy tính chuyên cung cấp tài nguyên, dịch vụ cho máy tính khác", "Là máy tính chuyên khai thác tài nguyên từ máy khác", "Là thiết bị định tuyến kết nối các mạng LAN", "Là phần mềm dùng để lướt web"],
  "Slide 8: Máy chủ là máy tính chuyên cung cấp tài nguyên, dịch vụ cho máy tính khác. Thường có cấu hình cao, hoạt động ổn định."),

S("q6", 1, 1, "Máy khách (Client) là gì?",
  ["Là máy khai thác dịch vụ của máy chủ", "Là máy cung cấp tài nguyên cho máy khác", "Là máy chủ chứa cơ sở dữ liệu", "Là hệ điều hành mạng"],
  "Slide 9: Máy khách là máy khai thác dịch vụ của máy chủ."),

S("q7", 1, 2, "Phát biểu nào sau đây là đúng về mối quan hệ giữa Máy chủ (Server) và Máy khách (Client)?",
  ["Một máy tính có thể vừa là client vừa là server", "Máy khách bắt buộc phải có cấu hình phần cứng cao hơn máy chủ", "Một máy chủ chỉ có thể phục vụ duy nhất một máy khách", "Máy chủ không thể khai thác dịch vụ của chính nó"],
  "Slide 9: Một máy tính có thể vừa là client vừa là server, có thể khai thác dịch vụ của chính nó."),

// --- Giao thức mạng (Protocol) ---
S("q8", 1, 1, "Bộ giao thức mạng (Protocol) là gì?",
  ["Là hệ thống các quy định chung giúp xác định quá trình truyền dữ liệu giữa các máy tính", "Là phần cứng kết nối các máy tính lại với nhau", "Là ngôn ngữ lập trình dùng để tạo ra trang web", "Là tên gọi khác của địa chỉ IP"],
  "Slide 10: Bộ giao thức mạng là một hệ thống các quy định chung giúp xác định quá trình truyền dữ liệu giữa các máy tính, nhờ đó dữ liệu truyền nhận chính xác."),

S("q9", 1, 1, "TCP/IP là viết tắt của cụm từ nào?",
  ["Transmission Control Protocol / Internet Protocol", "Transfer Control Protocol / Internal Protocol", "Transmission Connect Protocol / Internet Provider", "Total Control Protocol / Internet Protocol"],
  "Slide 11: TCP/IP là viết tắt của Transmission Control Protocol / Internet Protocol."),

S("q10", 1, 1, "Giao thức FTP (File Transfer Protocol) thường được sử dụng để làm gì?",
  ["Truyền tải tập tin từ máy tính này tới máy tính khác qua mạng", "Hiển thị nội dung trang web lên trình duyệt", "Trao đổi thư điện tử (Email)", "Bảo mật thông tin khi truy cập web"],
  "Slide 12: FTP dùng để truyền tải tài liệu từ một máy tính này tới một máy tính khác qua mạng Internet (Upload/Download)."),

S("q11", 1, 1, "Công việc chính của giao thức HTTP là gì?",
  ["Chuyển nội dung một trang web vào trình duyệt để người dùng xem", "Chuyển các file dữ liệu nén qua lại giữa các máy chủ", "Mã hóa dữ liệu để bảo mật", "Quản lý tài khoản người dùng"],
  "Slide 13: HTTP (HyperText Transfer Protocol) chuyển nội dung trang web vào trình duyệt cho người dùng xem."),

S("q12", 1, 1, "HTTPS là sự kết hợp giữa giao thức HTTP và giao thức bảo mật nào?",
  ["SSL hoặc TLS", "FTP", "TCP/IP", "SMTP"],
  "Slide 14: HTTPS là sự kết hợp giữa HTTP và giao thức bảo mật SSL hay TLS, thường dùng trong các giao dịch cần tính bảo mật cao."),

// --- Địa chỉ IP và Tên miền ---
S("q13", 1, 1, "Địa chỉ IPv4 là một con số có độ dài bao nhiêu bit?",
  ["32-bit", "64-bit", "128-bit", "16-bit"],
  "Slide 15: Địa chỉ IP (IPv4) là một con số 32-bit dùng để xác định đối tượng nhận và gửi thông tin."),

S("q14", 1, 1, "Nói tới localhost thường ta nói tới địa chỉ IP nào?",
  ["127.0.0.1", "1.0.0.127", "127.0.0.10", "192.168.1.1"],
  "Slide 16: Địa chỉ 127.0.0.1 (localhost) là địa chỉ của chính máy tính đang sử dụng, thường dùng để thử mạng và thử nghiệm trang web."),

S("q15", 1, 2, "Địa chỉ IPv6 có độ dài bao nhiêu bit và được biểu diễn dưới dạng nào?",
  ["128-bit, dạng 8 nhóm số hexa", "32-bit, dạng 4 nhóm số thập phân", "64-bit, dạng 4 nhóm số hexa", "128-bit, dạng 4 nhóm số thập phân"],
  "Slide 17: IPv6 dài 128 bits, biểu diễn dưới dạng 8 nhóm số hexa (có thể rút gọn các số 0)."),

S("q16", 1, 2, "Để biết được địa chỉ IP của một website (ví dụ www.uel.edu.vn), ta làm như thế nào?",
  ["Mở CMD và gõ lệnh ping www.uel.edu.vn", "Mở trình duyệt và gõ lệnh ipconfig", "Mở Word và nhập đường dẫn", "Vào phần Settings của Windows"],
  "Slide 16: Start -> Run -> gõ CMD -> gõ Ping www.uel.edu.vn và enter để xem địa chỉ IP."),

S("q17", 1, 1, "Tên miền cấp 1 (TLD) `.edu` đại diện cho loại tổ chức nào?",
  ["Các trường học, các tổ chức giáo dục", "Công ty thương mại", "Các mạng (network)", "Các tổ chức quốc tế"],
  "Slide 20: .edu là các trường học, các tổ chức giáo dục."),

S("q18", 1, 1, "Tên miền cấp 1 `.com` đại diện cho loại tổ chức nào?",
  ["Công ty thương mại (commercial)", "Các tổ chức khác (other organizations)", "Các mạng (network)", "Các trường học, giáo dục"],
  "Slide 20: .com là công ty thương mại (commercial)."),

S("q19", 1, 2, "Trong tên miền `uel.edu.vn`, phần `vn` được gọi là gì?",
  ["Tên miền cấp 1", "Tên miền cấp 2", "Tên miền cấp 3", "Tên tổ chức"],
  "Slide 19: Tên miền được đánh số cấp từ phải qua trái. vn: Nước Việt Nam (cấp 1), edu: Tổ chức giáo dục (cấp 2), uel: Tên cơ quan (cấp 3)."),

// --- URL và Cổng dịch vụ ---
S("q20", 1, 2, "Cú pháp chung của một URL là gì?",
  ["protocol://host_name[:port_num][/path][/file_name]", "host_name://protocol[:port_num][/path]", "protocol.host_name[:port_num][/file_name]", "http://www.host_name.com/path"],
  "Slide 21: URL có cú pháp: protocol://host_name[:port_num][/path][/file_name]."),

S("q21", 1, 2, "Cổng dịch vụ (Port) mặc định dành cho giao thức Web (HTTP) là bao nhiêu?",
  ["80", "21", "25", "443"],
  "Slide 22: Web sử dụng cổng 80. FTP sử dụng cổng 21. (HTTPS mặc định là 443)."),

S("q22", 1, 2, "Cổng dịch vụ (Port) mặc định dành cho giao thức FTP là bao nhiêu?",
  ["21", "80", "110", "443"],
  "Slide 22: FTP sử dụng cổng 21."),

// --- Web, Web Server, Web Browser ---
S("q23", 1, 1, "WWW là viết tắt của cụm từ nào?",
  ["World Wide Web", "World Why Web", "Word Wid Wed", "Wall Wide Web"],
  "Slide 24: WWW là viết tắt của World Wide Web (tập hợp các web site trên mạng internet)."),

S("q24", 1, 2, "Khi một trang web được viết bằng PHP, ASP, ASPX..., kết quả cuối cùng trả về cho trình duyệt của máy khách là ngôn ngữ gì?",
  ["HTML (Hypertext Markup Language)", "PHP", "Python", "C++"],
  "Slide 23: Dù viết bằng ngôn ngữ nào, kết quả khi trả về máy khách (client) luôn là ngôn ngữ HTML."),

S("q25", 1, 1, "Đâu là các phần mềm Web Server chuyên dụng được nhắc đến trong bài?",
  ["Apache và IIS (Internet Information Services)", "Google Chrome và Firefox", "FileZilla và WinSCP", "Notepad và FrontPage"],
  "Slide 25: Web server có Apache (mã nguồn mở) và IIS (sản phẩm của Microsoft)."),

S("q26", 1, 1, "Web Browser là gì?",
  ["Phần mềm chạy trên máy khách (client) dùng để hiển thị trang web và khai thác dịch vụ web", "Phần mềm chạy trên máy chủ (server) dùng để hiển thị trang web", "Là máy phục vụ web", "Là giao thức truyền tải siêu văn bản"],
  "Slide 26 (và Quiz 1): Web Browser là phần mềm chạy trên máy khách (client) dùng để hiển thị trang web và giúp khai thác dịch vụ web."),

// --- Web tĩnh & Web động ---
S("q27", 1, 2, "Đặc điểm nào sau đây là của Web tĩnh (Static Web)?",
  ["Tương tác với người duyệt web yếu, không nhận thông tin phản hồi từ người dùng", "Khó phát triển, phải viết nhiều mã lệnh", "Sử dụng nhiều ngôn ngữ lập trình khác nhau", "Tương tác với người duyệt web mạnh mẽ"],
  "Slide 27: Web tĩnh dễ phát triển, tương tác yếu, sử dụng HTML, không nhận thông tin phản hồi từ người dùng."),

S("q28", 1, 2, "Đặc điểm nào sau đây là của Web động (Dynamic Web)?",
  ["Tương tác với người duyệt web mạnh và nhận thông tin phản hồi từ người dùng", "Dễ phát triển, chỉ dùng HTML", "Không cần viết mã lệnh", "Không thể tương tác với người dùng"],
  "Slide 28: Web động khó phát triển hơn, tương tác mạnh, dùng nhiều ngôn ngữ lập trình, nhận thông tin phản hồi."),

S("q29", 1, 1, "Người làm web tĩnh thường sử dụng các công cụ trực quan nào để tạo ra trang web?",
  ["FrontPage, Notepad", "Visual Studio Code, Eclipse", "MySQL, SQL Server", "Apache, IIS"],
  "Slide 27: Người làm web tĩnh thường dùng các công cụ trực quan như FrontPage, Notepad..."),

// --- Nhà cung cấp dịch vụ ---
S("q30", 1, 2, "ISP là viết tắt của cụm từ nào?",
  ["Internet Service Provider (Nhà cung cấp dịch vụ Internet)", "Internet Access Provider (Nhà cung cấp đường truyền)", "Internal Service Protocol", "Internet Server Provider"],
  "Slide 29: ISP là Internet Service Provider (Nhà cung cấp dịch vụ Internet). IAP là Internet Access Provider (Nhà cung cấp đường truyền)."),
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_C1; }
