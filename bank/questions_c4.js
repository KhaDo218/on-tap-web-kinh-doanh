// ============================================================================
// CHƯƠNG 4: Hypertext Markup Language (HTML) phần 2
// Soạn dựa trên Slide bài giảng (Table, Iframe, Frameset, Marquee, Multimedia)
// Quy ước: Đáp án đúng luôn đặt ở ĐẦU mảng options (correct = [0]).
// ============================================================================
const S = (id, chapter, difficulty, question, options, explanation) =>
  ({ id: "c4-" + id, chapter, difficulty, type: "single", question, options, correct: [0], explanation });
const M = (id, chapter, difficulty, question, options, nCorrect, explanation) =>
  ({ id: "c4-" + id, chapter, difficulty, type: "multiple", question: question + " (chọn nhiều đáp án)", options,
     correct: Array.from({ length: nCorrect }, (_, i) => i), explanation });

const QUESTIONS_C4 = [
// --- Cấu trúc Table cơ bản ---
S("q1", 4, 1, "Thẻ nào được sử dụng để tạo một bảng (Table) trong HTML?",
  ["<table>", "<tab>", "<tb>", "<tbl>"],
  "Slide 16: Để tạo một bảng ta dùng tag <table>...</table>."),

S("q2", 4, 1, "Trong bảng HTML, thẻ <tr> dùng để làm gì?",
  ["Tạo một dòng cho bảng", "Tạo một cột cho bảng", "Tạo ô tiêu đề", "Tạo ô dữ liệu"],
  "Slide 16: Thẻ <tr> (Table Row) dùng để tạo dòng cho bảng. Bảng có bao nhiêu dòng thì có bấy nhiêu cặp thẻ <tr>."),

S("q3", 4, 1, "Sự khác biệt giữa thẻ <td> và <th> trong bảng là gì?",
  ["<td> tạo ô dữ liệu, <th> tạo ô tiêu đề (thường in đậm và căn giữa)", "<td> tạo ô tiêu đề, <th> tạo ô dữ liệu", "<td> tạo dòng, <th> tạo cột", "Cả hai thẻ có chức năng hoàn toàn giống nhau"],
  "Slide 16: <th> là ô tiêu đề của bảng (Table Header), <td> là ô dữ liệu (Table Data)."),

S("q4", 4, 2, "Để tạo một ô trống (không có dữ liệu) trong bảng HTML, ta cần làm gì?",
  ["Đặt nội dung ô là &nbsp;", "Để trống thẻ <td></td>", "Sử dụng thẻ <empty>", "Thêm thuộc tính empty=\"true\" vào thẻ <td>"],
  "Slide 16: Để có được một ô trống trong bảng thì cần đặt nội dung ô là &nbsp;."),

// --- Thuộc tính Table ---
S("q5", 4, 2, "Thuộc tính nào của thẻ <table> dùng để kẻ đường viền cho bảng?",
  ["border", "line", "outline", "frame"],
  "Slide 16: Thuộc tính border=\"số\": kích thước đường viền. Đặt bằng 0 (mặc định): không có đường viền."),

S("q6", 4, 2, "Thuộc tính cellpadding trong thẻ <table> có tác dụng gì?",
  ["Quy định khoảng cách từ góc ô đến nội dung ô", "Quy định khoảng cách giữa 2 ô liên tiếp", "Quy định độ rộng của bảng", "Quy định màu nền của bảng"],
  "Slide 16: cellpadding là khoảng cách từ góc ô đến nội dung ô. cellspacing là khoảng cách giữa 2 ô liên tiếp."),

S("q7", 4, 2, "Thuộc tính cellspacing trong thẻ <table> có tác dụng gì?",
  ["Quy định khoảng cách giữa 2 ô liên tiếp", "Quy định khoảng cách từ góc ô đến nội dung ô", "Quy định số cột của bảng", "Quy định tiêu đề của bảng"],
  "Slide 16: cellspacing là khoảng cách giữa 2 ô liên tiếp."),

S("q8", 4, 2, "Để trộn 2 cột trong một dòng của bảng, ta sử dụng thuộc tính nào?",
  ["colspan", "rowspan", "cellspan", "colmerge"],
  "Slide 18: colspan=\"n\" dùng để trộn cột (mặc định = 1). rowspan=\"n\" dùng để trộn dòng."),

S("q9", 4, 2, "Để trộn 3 dòng trong cùng một cột của bảng, ta sử dụng thuộc tính nào và gán giá trị bao nhiêu?",
  ["rowspan=\"3\"", "colspan=\"3\"", "rowspan=\"2\"", "colspan=\"2\""],
  "Slide 18: rowspan=\"n\" dùng để trộn dòng, giá trị n là số dòng cần trộn. Vậy trộn 3 dòng là rowspan=\"3\"."),

S("q10", 4, 3, "Trong thẻ <td> hoặc <th>, thuộc tính valign dùng để làm gì?",
  ["Căn lề theo chiều dọc (top, middle, bottom)", "Căn lề theo chiều ngang (left, right, center)", "Trộn dòng", "Trộn cột"],
  "Slide 16: align dùng căn lề ngang (left, right, center, justify). valign dùng căn lề đứng (top, middle, bottom)."),

S("q11", 4, 2, "Thuộc tính nowrap trong thẻ <td> có tác dụng gì?",
  ["Làm cho dữ liệu trong ô không tự xuống dòng", "Tự động xuống dòng khi hết ô", "Trộn các dòng lại với nhau", "Ẩn nội dung của ô"],
  "Slide 16: nowrap: nếu có sẽ làm cho dữ liệu trong ô không tự xuống dòng."),

// --- Cấu trúc Table đầy đủ ---
S("q12", 4, 1, "Thẻ nào dùng để định nghĩa tiêu đề (caption) cho bảng?",
  ["<caption>", "<title>", "<header>", "<thead>"],
  "Slide 17: <caption> định nghĩa tiêu đề cho bảng, thường nằm ngay sau thẻ <table> mở."),

S("q13", 4, 2, "Cấu trúc đầy đủ của một thẻ <table> chuẩn bao gồm những thành phần nào?",
  ["<caption>, <thead>, <tbody>, <tfoot>", "<head>, <body>, <foot>", "<header>, <main>, <footer>", "<colgroup>, <col>, <tr>"],
  "Slide 17: Cấu trúc đầy đủ gồm <caption> (tiêu đề), <thead> (phần đầu), <tbody> (phần thân), <tfoot> (phần chân bảng)."),

S("q14", 4, 2, "Thẻ <colgroup> trong bảng HTML dùng để làm gì?",
  ["Định dạng cột hàng loạt một cách nhanh chóng (ví dụ: đổi màu nền cho cả cột)", "Nhóm các dòng lại với nhau", "Tạo tiêu đề cho bảng", "Trộn các cột lại với nhau"],
  "Slide 19: <colgroup> dùng để định dạng cột hàng loạt (như màu nền, độ rộng) giúp tiết kiệm thời gian."),

M("q15", 4, 3, "Trong đoạn mã HTML sau: `<table border=\"1\"><thead style=\"background-color:yellow;\"><tr><th rowspan=\"2\">STT</th><th colspan=\"2\">Điểm</th></tr></thead></table>`. Những phát biểu nào sau đây là ĐÚNG?",
  ["Ô STT sẽ chiếm 2 dòng", "Ô Điểm sẽ chiếm 2 cột", "Tiêu đề bảng có nền màu vàng", "Ô STT sẽ chiếm 2 cột"], 3,
  "Slide 18: rowspan=\"2\" ở ô STT giúp nó chiếm 2 dòng. colspan=\"2\" ở ô Điểm giúp nó chiếm 2 cột. Thead có style màu vàng."),

// --- Iframe ---
S("q16", 4, 1, "Thẻ <iframe> trong HTML dùng để làm gì?",
  ["Lắp ghép (nhúng) một tài liệu HTML này vào trong một tài liệu HTML khác", "Tạo một khung viền cho hình ảnh", "Tạo một bảng biểu", "Chèn video từ file mp4"],
  "Slide 20: Thẻ <iframe> dùng để lắp ghép nhiều tài liệu HTML vào trong một tài liệu HTML gốc."),

S("q17", 4, 2, "Thuộc tính nào của thẻ <iframe> dùng để trỏ tới đường dẫn của tài liệu HTML cần nhúng?",
  ["src", "href", "link", "url"],
  "Slide 20: Thuộc tính src (source) dùng để trỏ tới tài liệu HTML cần hiển thị trong iframe."),

// --- Frameset ---
S("q18", 4, 2, "Thẻ <frameset> có chức năng gì?",
  ["Phân chia cửa sổ trình duyệt thành nhiều khung (frame) chứa các trang HTML khác nhau", "Tạo một bảng dữ liệu", "Tạo một khung hình ảnh", "Nhúng video"],
  "Slide 21: Thẻ <frameset> dùng để phân chia và lắp ghép giao diện tài liệu HTML thành nhiều khung."),

S("q19", 4, 3, "Để phân chia màn hình thành 2 cột: cột trái chiếm 30% và cột phải chiếm 70%, ta sử dụng thuộc tính nào trong thẻ <frameset>?",
  ["<frameset cols=\"30%,70%\">", "<frameset rows=\"30%,70%\">", "<frameset width=\"30%,70%\">", "<frameset split=\"30%,70%\">"],
  "Slide 21: Thuộc tính cols dùng để chia cột (dọc), rows dùng để chia dòng (ngang)."),

S("q20", 4, 3, "Khi sử dụng <frameset>, làm thế nào để khi nhấp vào một liên kết, trang web sẽ hiển thị ở một khung cụ thể (ví dụ khung tên là \"mainframe\")?",
  ["Sử dụng thuộc tính target=\"mainframe\" trong thẻ <a>", "Sử dụng thuộc tính href=\"mainframe\" trong thẻ <a>", "Sử dụng thuộc tính src=\"mainframe\" trong thẻ <a>", "Sử dụng thuộc tính name=\"mainframe\" trong thẻ <a>"],
  "Slide 21: Khung cần hiển thị (frame) phải có name=\"mainframe\". Thẻ <a> liên kết phải có target=\"mainframe\"."),

S("q21", 4, 2, "Trong tài liệu HTML sử dụng <frameset>, thẻ <body> có được phép sử dụng không?",
  ["Không, thẻ <body> sẽ bị thay thế bởi <frameset>", "Có, luôn phải có thẻ <body>", "Chỉ dùng thẻ <body> ở frame con", "Bắt buộc phải có <body> bên trong <frameset>"],
  "Slide 21: Khi dùng <frameset>, cấu trúc HTML là <html><head>...</head><frameset>...</frameset></html>, không có thẻ <body>."),

// --- Marquee ---
S("q22", 4, 1, "Thẻ <marquee> có tác dụng gì?",
  ["Làm cho đối tượng (chữ, hình ảnh) di chuyển trên trang web", "Tạo một khung viền cho văn bản", "Tạo một bảng biểu", "Nhúng video"],
  "Slide 22: Thẻ <marquee> sẽ làm chạy hầu hết các đối tượng trong thẻ như chữ, hình ảnh, các định dạng khác."),

S("q23", 4, 2, "Theo mặc định (không có thuộc tính direction), đối tượng trong thẻ <marquee> sẽ di chuyển theo hướng nào?",
  ["Từ phải sang trái", "Từ trái sang phải", "Từ trên xuống dưới", "Từ dưới lên trên"],
  "Slide 22: Mặc định các đối tượng sẽ chạy từ phải sang trái (tương đương direction=\"left\")."),

S("q24", 4, 2, "Thuộc tính behavior=\"alternate\" trong thẻ <marquee> có nghĩa là gì?",
  ["Chạy qua rồi chạy lại (qua lại)", "Chạy 1 lần rồi dừng", "Chạy bình thường liên tục", "Dừng lại ngay lập tức"],
  "Slide 22: behavior (kiểu chạy) gồm: slide (chạy 1 lần rồi dừng), scroll (chạy bình thường), alternate (chạy qua rồi chạy lại)."),

S("q25", 4, 2, "Để đối tượng trong thẻ <marquee> di chuyển lặp vô tận, ta đặt thuộc tính loop bằng bao nhiêu?",
  ["loop=\"-1\"", "loop=\"0\"", "loop=\"1\"", "loop=\"infinite\""],
  "Slide 22: Lặp 1 lần: loop = 1. Lặp liên tục (vô tận): loop = -1."),

S("q26", 4, 2, "Thuộc tính nào của thẻ <marquee> dùng để điều chỉnh tốc độ di chuyển của đối tượng?",
  ["scrollamount", "speed", "velocity", "timer"],
  "Slide 22: Thuộc tính scrollamount giúp tăng hay giảm tốc độ chạy (nhận giá trị số nguyên)."),

// --- Multimedia ---
S("q27", 4, 1, "Thẻ nào được sử dụng để chèn âm thanh vào trang web trong HTML5?",
  ["<audio>", "<sound>", "<music>", "<mp3>"],
  "Slide 23: Thẻ <audio> (HTML5) dùng để chèn nhạc vào trang web."),

S("q28", 4, 2, "Để hiển thị thanh điều khiển (play, pause, volume...) cho thẻ <audio> và <video>, ta sử dụng thuộc tính nào?",
  ["controls", "play", "buttons", "toolbar"],
  "Slide 23: Thuộc tính controls (ví dụ: <audio controls>) hiển thị thanh điều khiển phát media."),

S("q29", 4, 2, "Trong thẻ <video> hoặc <audio>, thẻ nào được sử dụng để chỉ định đường dẫn của file media?",
  ["<source>", "<src>", "<link>", "<file>"],
  "Slide 23: Thuộc tính src thường được đặt trong thẻ <source> để chỉ định file media, cho phép khai báo nhiều định dạng khác nhau."),

S("q30", 4, 2, "Để nhúng một video từ Youtube vào trang web HTML, ta thường sử dụng cách nào sau đây?",
  ["Sử dụng mã iframe do Youtube cung cấp khi chọn \"Nhúng\" (Embed)", "Sử dụng thẻ <video> với đường dẫn tới video đó", "Sử dụng thẻ <youtube>", "Sử dụng thẻ <embed> với tên video"],
  "Slide 23: Để chèn video từ Youtube, ta bấm Share -> Embed và copy đoạn mã <iframe> đó dán vào HTML."),

S("q31", 4, 3, "Cho bảng gồm 3 cột và 2 dòng. Để ô ở dòng 1 trộn cả 3 cột lại với nhau, ta viết mã như thế nào?",
  ["<td colspan=\"3\">Nội dung</td>", "<td rowspan=\"3\">Nội dung</td>", "<td colspan=\"2\">Nội dung</td>", "<td rowspan=\"2\">Nội dung</td>"],
  "Slide 18: Trộn 3 cột sử dụng colspan=\"3\"."),

S("q32", 4, 3, "Trong Table, nếu ta muốn kẻ viền và tạo khoảng cách giữa các ô là 0, khoảng cách từ viền đến nội dung là 5px, ta viết thẻ <table> như thế nào?",
  ["<table border=\"1\" cellspacing=\"0\" cellpadding=\"5\">", "<table border=\"1\" cellpadding=\"0\" cellspacing=\"5\">", "<table border=\"0\" cellspacing=\"5\" cellpadding=\"5\">", "<table border=\"1\" spacing=\"0\" padding=\"5\">"],
  "Slide 16: cellspacing là khoảng cách giữa 2 ô, cellpadding là khoảng cách từ góc ô đến nội dung."),

S("q33", 4, 3, "Cho đoạn mã: `<frameset rows=\"20%,80%\"><frame src=\"menu.html\"><frame src=\"content.html\" name=\"main\"></frameset>`. Màn hình sẽ được chia như thế nào?",
  ["Chia làm 2 hàng: hàng trên chiếm 20% (menu), hàng dưới chiếm 80% (content)", "Chia làm 2 cột: cột trái 20% (menu), cột phải 80% (content)", "Chia làm 2 hàng: hàng trên 80%, hàng dưới 20%", "Chia làm 2 cột bằng nhau"],
  "Slide 21: Thuộc tính rows chia giao diện theo hàng ngang (từ trên xuống). Thứ tự 20%, 80% tương ứng trên, dưới."),

S("q34", 4, 3, "Trong đoạn mã `<marquee direction=\"up\" behavior=\"scroll\" loop=\"1\">Hello</marquee>`, chữ \"Hello\" sẽ chạy như thế nào?",
  ["Chạy từ dưới lên trên, kiểu cuộn, lặp lại 1 lần", "Chạy từ trên xuống dưới, kiểu trượt, lặp vô tận", "Chạy từ dưới lên trên, kiểu trượt, lặp 1 lần", "Chạy từ phải sang trái, kiểu cuộn, lặp vô tận"],
  "Slide 22: direction=\"up\" là chạy từ dưới lên, behavior=\"scroll\" là cuộn, loop=\"1\" là lặp 1 lần."),

S("q35", 4, 3, "Trong thẻ <video>, nếu trình duyệt không hỗ trợ định dạng video, ta nên hiển thị thông báo thay thế bằng cách nào?",
  ["Đặt nội dung văn bản thông báo ngay bên trong cặp thẻ <video>...</video>", "Sử dụng thuộc tính alt=\"Thông báo\"", "Sử dụng thẻ <caption>", "Không thể hiển thị thông báo thay thế"],
  "Slide 23: Ví dụ trên slide có ghi: `<video>... Your browser does not support the video tag. </video>`. Nội dung text nằm giữa thẻ mở và đóng sẽ được hiển thị nếu trình duyệt không hỗ trợ."),
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_C4; }
