// ============================================================================
// CHƯƠNG 5: Cascading Style Sheets (CSS) phần 1
// Soạn dựa trên Slide bài giảng (Giới thiệu CSS, Inline, Internal, External)
// Quy ước: Đáp án đúng luôn đặt ở ĐẦU mảng options (correct = [0]).
// ============================================================================
const S = (id, chapter, difficulty, question, options, explanation) =>
  ({ id: "c5-" + id, chapter, difficulty, type: "single", question, options, correct: [0], explanation });
const M = (id, chapter, difficulty, question, options, nCorrect, explanation) =>
  ({ id: "c5-" + id, chapter, difficulty, type: "multiple", question: question + " (chọn nhiều đáp án)", options,
     correct: Array.from({ length: nCorrect }, (_, i) => i), explanation });

const QUESTIONS_C5 = [
// --- Lý thuyết chung về CSS & DHTML ---
S("q1", 5, 1, "CSS là viết tắt của cụm từ nào? (What does CSS stand for?)",
  ["Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
  "Slide 24: CSS là viết tắt của Cascading Style Sheets."),

S("q2", 5, 2, "DHTML (Dynamic HyperText Markup Language) là sự kết hợp của những thành phần nào?",
  ["HTML, CSS và Scripts", "HTML và XML", "CSS và JavaScript", "HTML, CSS và Database"],
  "Slide 24: DHTML là sự kết hợp của HTML (nội dung), CSS (giao diện) và Scripts (xử lý tương tác)."),

M("q3", 5, 2, "Những ưu điểm nào sau đây là của CSS?",
  ["Kiểm soát bố cục trang, kỹ thuật thiết kế phông và dạng chữ tốt hơn", "Dễ duy trì hoạt động của site hơn", "Thông tin kiểu được tách ra khỏi cấu trúc site", "Hỗ trợ đồng đều trên tất cả các trình duyệt cũ"], 3,
  "Slide 24: Ưu điểm của CSS: Kiểm soát bố cục tốt hơn, dễ duy trì, tách biệt style và cấu trúc. Nhược điểm là phụ thuộc trình duyệt, không hỗ trợ rộng rãi."),

// --- Cú pháp & Đơn vị ---
S("q4", 5, 2, "Cú pháp chuẩn của một đoạn mã CSS là gì?",
  ["selector {property: value}", "selector {property = value}", "selector (property: value)", "selector [property: value]"],
  "Slide 24: Cú pháp CSS gồm 3 phần: selector {property: value}."),

S("q5", 5, 2, "Which of the following is the correct CSS syntax?",
  ["body {color: black;}", "{body:color=black;}", "body:color=black;", "{body;color:black;}"],
  "Slide 24: Cú pháp đúng là selector {property: value}. Các dấu chấm phẩy dùng để ngăn cách các thuộc tính."),

S("q6", 5, 2, "Trong CSS, đơn vị nào sau đây là đơn vị nhỏ nhất (Pixel)?",
  ["px", "pt", "pc", "in"],
  "Slide 24: Các giá trị độ lớn gồm px (pixel - đơn vị nhỏ nhất), pc (pica), in (inch), mm, cm, %."),

S("q7", 5, 2, "Which CSS property is used to change the text color of an element?",
  ["color", "text-color", "font-color", "foreground-color"],
  "Slide 24: Thuộc tính color dùng để đổi màu chữ. Thuộc tính font-family đổi font chữ."),

// --- Thứ tự ưu tiên ---
S("q8", 5, 3, "Thứ tự ưu tiên của các loại Style (từ cao xuống thấp) là gì?",
  ["Inline Styles > Internal Style Sheet > External Style Sheet > Browser Default Styles", 
   "Internal Style Sheet > Inline Styles > External Style Sheet > Browser Default Styles",
   "External Style Sheet > Internal Style Sheet > Inline Styles > Browser Default Styles",
   "Browser Default Styles > Inline Styles > Internal Style Sheet > External Style Sheet"],
  "Slide 24: Thứ tự ưu tiên giảm dần: Inline > Internal > External > Browser Default."),

// --- Inline CSS ---
S("q9", 5, 1, "Which HTML attribute is used to define inline styles?",
  ["style", "class", "font", "styles"],
  "Slide 25: Inline Style được định nghĩa trong thuộc tính style của từng tag HTML."),

S("q10", 5, 1, "Đoạn mã HTML sau sử dụng loại CSS nào? `<p style=\"color: red; margin-left: 20px;\">Hello</p>`",
  ["Inline Style Sheet", "Internal Style Sheet", "External Style Sheet", "Browser Default Style"],
  "Slide 25: Định dạng nằm trực tiếp trong thuộc tính style của thẻ <p> nên đây là Inline CSS."),

// --- Internal CSS ---
S("q11", 5, 1, "Internal Style Sheet được khai báo ở đâu trong tài liệu HTML?",
  ["Bên trong thẻ <style> nằm trong phần <head>", "Bên trong thẻ <body>", "Trong một file .css riêng biệt", "Trong thuộc tính style của thẻ HTML"],
  "Slide 26: Internal Style Sheet được nhúng trong tag <style> (đặt trong <head>)."),

S("q12", 5, 2, "How do you insert a comment in a CSS file?",
  ["/* this is a comment */", "// this is a comment", "<!-- this is a comment -->", "// this is a comment //"],
  "Slide 26: Comment trong CSS giống C++, Java: /* Nội dung comment */."),

S("q13", 5, 2, "Trong Internal Style Sheet, để định dạng cho một class có tên là 'left', ta viết selector như thế nào?",
  [".left", "#left", "left", "class.left"],
  "Slide 26: Class trong CSS được bắt đầu bằng dấu chấm (VD: p.left {text-align:left})."),

S("q14", 5, 2, "Đoạn mã sau sử dụng loại CSS nào?\n<head>\n  <style type=\"text/css\"> p { color:blue; } </style>\n</head>",
  ["Internal Style Sheet", "Inline Style Sheet", "External Style Sheet", "Browser Default Style"],
  "Slide 26: Định dạng nằm trong thẻ <style> ở phần <head> nên là Internal CSS."),

// --- External CSS ---
S("q15", 5, 2, "External Style Sheet được lưu trữ dưới dạng tập tin có phần mở rộng là gì?",
  [".css", ".html", ".js", ".style"],
  "Slide 27: Mọi style đều lưu trong file có phần mở rộng là *.css."),

S("q16", 5, 2, "Which is the correct way to link an external stylesheet named 'style.css' to an HTML file?",
  ["<link rel=\"stylesheet\" href=\"style.css\">", "<style src=\"style.css\">", "<script src=\"style.css\">", "<link src=\"style.css\">"],
  "Slide 27: Liên kết External Style bằng tag link: <link rel=\"stylesheet\" href=\"URL\" type=\"text/css\">."),

S("q17", 5, 2, "Ngoài thẻ <link>, ta có thể triệu gọi External Style Sheet bằng cách nào khác trong thẻ <style>?",
  ["Sử dụng @import url(URL);", "Sử dụng @include URL;", "Sử dụng @link URL;", "Sử dụng @external URL;"],
  "Slide 27: Liên kết bằng tag style dùng @import url(URL); (VD: @import url(ex1.css);)."),

S("q18", 5, 3, "Nhược điểm lớn nhất của External Style Sheet là gì?",
  ["Tốn thời gian download file *.css và làm chậm quá trình biên dịch web ở trình duyệt trong lần đầu sử dụng", "Không thể tái sử dụng cho nhiều trang web khác nhau", "Phải khai báo lại thông tin style cho các tài liệu khác trong mỗi lần sử dụng", "Không được trình duyệt cache lại"],
  "Slide 27: Nhược điểm của External Style là tốn thời gian download file .css ở lần đầu (tuy nhiên các lần sau được trình duyệt cache lại)."),

// --- Multiple Style Sheets (Kết hợp) ---
S("q19", 5, 2, "Để nhóm các selector có chung một định dạng (ví dụ h1, h2, hr cùng màu xanh), ta viết mã như thế nào?",
  ["h1, h2, hr { color: green; }", "h1 + h2 + hr { color: green; }", "h1 & h2 & hr { color: green; }", "h1.h2.hr { color: green; }"],
  "Slide 28: Gom nhóm nhiều thẻ: Selector1, selector2, selector3 { property: value; }."),

S("q20", 5, 3, "Khi kết hợp Internal Style và External Style, nếu chúng cùng định dạng 1 thuộc tính nhưng khác giá trị, trình duyệt sẽ ưu tiên sử dụng style nào?",
  ["Internal Style Sheet", "External Style Sheet", "Cả hai đều bị bỏ qua", "Trình duyệt tự động chọn ngẫu nhiên"],
  "Slide 24 & 28: Theo thứ tự ưu tiên, Internal Style Sheet (nằm trong head) có độ ưu tiên cao hơn External Style Sheet. Nếu cùng áp dụng cho 1 thẻ, Internal sẽ thắng."),

S("q21", 5, 2, "Cho đoạn mã CSS sau: `h1 { color: red; }`. Đâu là tên của thuộc tính (property)?",
  ["color", "h1", "red", "text-color"],
  "Slide 24: Cú pháp `selector {property: value}`. Ở đây `h1` là selector, `color` là property, `red` là value."),

// --- Tổng hợp so sánh ---
M("q22", 5, 3, "Những phát biểu nào sau đây về Inline CSS là ĐÚNG?",
  ["Được định nghĩa trong thuộc tính style của từng tag", "Có độ ưu tiên cao nhất trong các loại CSS", "Dễ dàng quản lý style cho toàn bộ trang web", "Khó cập nhật style"], 3,
  "Slide 25 & 27: Inline CSS định nghĩa trong thẻ, có độ ưu tiên cao nhất. Nhược điểm là khó cập nhật và phải khai báo lại cho từng tài liệu."),

S("q23", 5, 2, "Which CSS property controls the text size?",
  ["font-size", "text-size", "font-style", "text-style"],
  "Slide 24: Thuộc tính font-size quy định kích thước chữ. font-style dùng để in nghiêng (italic)."),

S("q24", 5, 2, "Đoạn mã `<h1 style=\"color:blue;\">Xin chào</h1>` là ví dụ của loại CSS nào?",
  ["Inline CSS", "Internal CSS", "External CSS", "CSS Selector"],
  "Slide 25: Thuộc tính style nằm trực tiếp trong thẻ HTML nên là Inline CSS."),

S("q25", 5, 2, "Cho đoạn mã: `<link rel=\"stylesheet\" href=\"ex2.css\">`. Đoạn mã này dùng để làm gì?",
  ["Liên kết một file External CSS tên là ex2.css", "Tạo một liên kết đến trang web ex2.css", "Nhúng file Javascript ex2.css", "Import file ảnh ex2.css"],
  "Slide 27: Đây là cú pháp chuẩn để gọi file External CSS."),

S("q26", 5, 3, "Sự khác biệt lớn nhất giữa Internal CSS và External CSS là gì?",
  ["Internal CSS viết trong thẻ <style> ở <head>, External CSS viết trong một file .css riêng biệt", "Internal CSS dùng trong <body>, External CSS dùng trong <head>", "Internal CSS dùng dấu #, External CSS dùng dấu .", "Internal CSS không cần thẻ <style>, External CSS cần thẻ <style>"],
  "Slide 26 & 27: Internal CSS nhúng trực tiếp vào file HTML qua thẻ <style>, External CSS tách riêng ra file .css."),

S("q27", 5, 2, "Đơn vị 'pt' trong CSS là viết tắt của gì?",
  ["Point (1/72 inch)", "Pixel", "Percent", "Pica"],
  "Slide 24: pt là Point, một đơn vị đo lường trong CSS (in là inch, pc là pica, px là pixel, % là phần trăm)."),

S("q28", 5, 2, "Nếu ta có 3 thẻ `<h1>`, `<h2>`, `<h3>` cùng muốn định dạng màu chữ là đỏ, ta nên làm gì để tối ưu mã CSS?",
  ["h1, h2, h3 {color: red;}", "h1 {color: red;} h2 {color: red;} h3 {color: red;}", "h1+h2+h3 {color: red;}", ".h1.h2.h3 {color: red;}"],
  "Slide 28: Nhóm nhiều selector có cùng thuộc tính giúp mã CSS ngắn gọn: Selector1, selector2, selector3 { property: value; }."),

S("q29", 5, 3, "Kỹ thuật `@import url(ex1.css);` phải được đặt ở đâu để hoạt động đúng?",
  ["Bên trong thẻ <style> (thường ở <head>)", "Trực tiếp trong thẻ <body>", "Trong thuộc tính style của một thẻ", "Cuối file HTML sau thẻ </html>"],
  "Slide 27: Cú pháp @import được đặt bên trong cặp thẻ <style type=\"text/css\"> ... </style>."),

S("q30", 5, 3, "Which of the following is NOT a valid reason to use External CSS?",
  ["Nó giúp việc cập nhật style cho từng thẻ trở nên dễ dàng hơn", "Nó có thể thiết lập Style cho nhiều tài liệu Web cùng lúc", "Thông tin các Style được trình duyệt cache lại", "Nó giúp tách biệt nội dung và giao diện"],
  "Slide 27: Việc cập nhật style cho TỪNG THẺ (tag cụ thể) dễ dàng hơn là đặc điểm của Inline CSS. External CSS giúp cập nhật toàn bộ trang web hoặc nhiều trang cùng lúc."),
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_C5; }
