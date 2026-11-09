// ============================================================================
// CHƯƠNG 3: Hypertext Markup Language (HTML) phần 1
// Soạn dựa trên Slide bài giảng (từ slide 02 đến slide 15)
// Quy ước: Đáp án đúng luôn đặt ở ĐẦU mảng options (correct = [0]).
// ============================================================================
const S = (id, chapter, difficulty, question, options, explanation) =>
  ({ id: "c3-" + id, chapter, difficulty, type: "single", question, options, correct: [0], explanation });
const M = (id, chapter, difficulty, question, options, nCorrect, explanation) =>
  ({ id: "c3-" + id, chapter, difficulty, type: "multiple", question: question + " (chọn nhiều đáp án)", options,
     correct: Array.from({ length: nCorrect }, (_, i) => i), explanation });

const QUESTIONS_C3 = [
// --- Giới thiệu HTML & Cấu trúc ---
S("q1", 3, 1, "HTML là viết tắt của cụm từ nào?",
  ["HyperText Markup Language", "HyperText Machine Language", "HyperText Makeup Language", "Hyper Transfer Markup Language"],
  "Slide 03: HTML là viết tắt của HyperText Markup Language (Ngôn ngữ đánh dấu siêu văn bản)."),

S("q2", 3, 1, "HTML được phát minh bởi ai và được W3C đưa thành chuẩn vào năm nào?",
  ["Tim Berner Lee - năm 1994", "Bill Gates - năm 1990", "Tim Berner Lee - năm 1990", "Vint Cerf - năm 1994"],
  "Slide 03: HTML do Tim Berner Lee phát minh và được W3C đưa thành chuẩn năm 1994."),

S("q3", 3, 2, "Khi viết sai cú pháp HTML, trình duyệt sẽ phản ứng như thế nào?",
  ["Không báo lỗi cú pháp, chỉ hiển thị kết quả không đúng với dự định", "Báo lỗi đỏ trên màn hình và dừng tải trang", "Tự động sửa lỗi cú pháp cho người dùng", "Hiển thị hộp thoại yêu cầu tải lại trang"],
  "Slide 04: Các trình duyệt thường không báo lỗi cú pháp cho ngôn ngữ HTML. Nếu viết sai cú pháp chỉ dẫn đến kết quả hiển thị không đúng với dự định."),

S("q4", 3, 1, "Trong HTML, các thẻ (tags) có phân biệt chữ hoa và chữ thường không?",
  ["Không phân biệt (ví dụ: <HTML> = <html>)", "Có phân biệt hoàn toàn", "Chỉ phân biệt đối với thẻ đóng", "Chỉ phân biệt đối với thẻ tự đóng"],
  "Slide 08: Các thẻ không phân biệt chữ hoa và chữ thường: <HTML> = <Html> = <html>."),

S("q5", 3, 2, "Đối với văn bản trong mã nguồn HTML, trình duyệt sẽ xử lý các khoảng trắng thừa và dấu xuống dòng như thế nào?",
  ["Gộp tất cả thành một khoảng trống duy nhất khi hiển thị", "Giữ nguyên toàn bộ khoảng trắng và xuống dòng", "Báo lỗi cú pháp vì có quá nhiều khoảng trắng", "Tự động xóa bỏ hoàn toàn các khoảng trắng"],
  "Slide 08: Trình duyệt bỏ qua các khoảng trắng thừa và các dấu ngắt dòng, xuống dòng. Mọi khoảng trống được hiển thị thành 1 khoảng trống duy nhất."),

M("q6", 3, 2, "Một thẻ (tag) trong HTML thường có cấu trúc gồm những thành phần nào sau đây?",
  ["Tên của thẻ", "Thuộc tính của thẻ", "Giá trị của thuộc tính", "Các thành phần con nằm giữa thẻ mở và thẻ đóng"], 4,
  "Slide 06: Một thẻ thường có 3 hoặc 4 phần: Tên thẻ, Thuộc tính thẻ, Giá trị thuộc tính, và thành phần con bên trong."),

S("q7", 3, 1, "Thẻ nào sau đây KHÔNG cần có thẻ đóng (thẻ tự đóng)?",
  ["<br/> và <img/>", "<p> và </p>", "<div> và </div>", "<h1> và </h1>"],
  "Slide 07: Một số thẻ không cần thẻ đóng như <img />, <br />."),

S("q8", 3, 2, "Trong HTML, để ghi chú (comment) một đoạn mã lệnh ta sử dụng cú pháp nào?",
  ["<!-- Ghi chú ở đây -->", "/* Ghi chú ở đây */", "// Ghi chú ở đây", "<comment> Ghi chú ở đây </comment>"],
  "Slide 09: Ghi chú trong HTML: <!-- Ghi chú -->. (Dấu /* */ và // dùng cho CSS và JS)."),

// --- Các ký tự đặc biệt ---
S("q9", 3, 2, "Để hiển thị dấu nhỏ hơn (<) và lớn hơn (>) trên trang web, ta sử dụng mã ký tự nào?",
  ["&lt; và &gt;", "&nbsp; và &quot;", "&copy; và &reg;", "&lt; và &quot;"],
  "Slide 09: Dấu nhỏ hơn (<) là &lt; và lớn hơn (>) là &gt;."),

S("q10", 3, 2, "Để tạo nhiều khoảng trắng liên tiếp trong văn bản HTML, ta dùng mã nào?",
  ["&nbsp;", "&space;", "&blank;", "&tab;"],
  "Slide 09: Khoảng trống (trong trường hợp muốn có nhiều hơn 1 ký tự trống) dùng &nbsp;."),

// --- Heading, p, br, hr ---
S("q11", 3, 1, "Thẻ heading nào có kích thước chữ lớn nhất?",
  ["<h1>", "<h6>", "<h3>", "<h4>"],
  "Slide 05: Kích thước của ký tự nhỏ dần từ 1 đến 6. <h1> là lớn nhất, <h6> là nhỏ nhất."),

S("q12", 3, 1, "Thẻ <br/> có chức năng gì?",
  ["Tạo dòng mới (ngắt dòng đoạn văn bản)", "Tạo một đường kẻ ngang", "Tạo một đoạn văn bản mới kèm dòng trống", "In đậm văn bản"],
  "Slide 06: Thẻ <br/> dùng để tạo dòng mới, ngắt dòng đoạn văn bản."),

S("q13", 3, 1, "Phát biểu nào sau đây đúng về sự khác biệt giữa thẻ <p> và thẻ <br/>?",
  ["<p> tạo đoạn văn bản kèm một dòng trống, <br/> chỉ tạo dòng mới", "<p> chỉ tạo dòng mới, <br/> tạo đoạn văn bản có dòng trống", "Cả hai thẻ đều có chức năng giống hệt nhau", "<p> không cần thẻ đóng, <br/> cần thẻ đóng"],
  "Slide 06: <p> khai báo một đoạn văn bản, tự động xuống dòng và chèn một dòng trống. <br/> chỉ tạo dòng mới (ngắt dòng)."),

S("q14", 3, 1, "Thẻ <hr/> dùng để làm gì?",
  ["Hiển thị một đường kẻ ngang", "Tạo một tiêu đề phụ", "Ngắt dòng văn bản", "Tạo một vùng văn bản"],
  "Slide 06: Thẻ <hr/> hiển thị đường kẻ ngang."),

// --- div, span, font, sub, sup ---
S("q15", 3, 2, "Sự khác biệt cơ bản giữa thẻ <div> và thẻ <span> là gì?",
  ["<div> mặc định chiếm trọn một dòng, <span> chiếm bằng đúng nội dung và nằm trên cùng dòng", "<div> chiếm bằng đúng nội dung, <span> chiếm trọn một dòng", "Cả hai đều chiếm trọn một dòng", "Cả hai đều nằm trên cùng dòng"],
  "Slide 07: <div> khai báo vùng văn bản chiếm trọn một dòng riêng biệt. <span> chiếm bằng đúng nội dung mà nó chứa và nằm trên cùng một dòng."),

S("q16", 3, 2, "Để định dạng một đoạn văn bản vừa In đậm, vừa In nghiêng, vừa Gạch chân, ta viết mã HTML như thế nào?",
  ["<b><i><u>Văn bản</u></i></b>", "<b><i><u>Văn bản</b></i></u>", "<u><i><b>Văn bản</u></i></b>", "<b><u><i>Văn bản</b></u></i>"],
  "Slide 08: Các thẻ cần được lồng (nest) đúng cách. Thẻ mở nào mở trước thì thẻ đóng đó phải đóng sau cùng: <b><i><u>...</u></i></b>."),

S("q17", 3, 1, "Thẻ <sub> và <sup> lần lượt dùng để định dạng loại chữ nào?",
  ["Chữ dưới dòng (Subscript) và chữ trên dòng (Superscript)", "Chữ trên dòng và chữ dưới dòng", "Chữ in đậm và chữ in nghiêng", "Chữ gạch chân và chữ gạch ngang"],
  "Slide 09: <sub> là Subscript (chữ dưới dòng, ví dụ H2O), <sup> là Superscript (chữ trên dòng, ví dụ X2)."),

S("q18", 3, 2, "Để viết công thức hóa học N₂O₄ trong HTML, ta sử dụng mã lệnh nào?",
  ["N<sub>2</sub>O<sub>4</sub>", "N<sup>2</sup>O<sup>4</sup>", "N<sub>2</sub>O<sup>4</sup>", "N<sup>2</sup>O<sub>4</sub>"],
  "Slide 09: Ký tự dưới dòng (số 2 và 4) phải dùng thẻ <sub>."),

S("q19", 3, 2, "Trong thẻ <font>, thuộc tính nào dùng để thiết lập kiểu chữ (font chữ)?",
  ["face", "name", "style", "type"],
  "Slide 08: Thẻ <font> có 3 thuộc tính chính: face (kiểu chữ), size (kích thước), color (màu sắc)."),

// --- Thẻ img ---
S("q20", 3, 1, "Trong trường hợp hình ảnh không thể hiển thị, thuộc tính nào của thẻ <img> thường được dùng để hiển thị văn bản thay thế?",
  ["alt", "title", "src", "placeholder"],
  "Slide 10: Thuộc tính alt (alternative text) quy định chuỗi ký tự thay thế cho ảnh khi ảnh không hiển thị. Thuộc tính title dùng để hiện tooltip khi rê chuột."),

S("q21", 3, 2, "Làm thế nào để thiết lập hình nền cho toàn bộ trang web?",
  ["Sử dụng thuộc tính background trong thẻ <body>", "Sử dụng thuộc tính background trong thẻ <html>", "Sử dụng thuộc tính src trong thẻ <div>", "Sử dụng thuộc tính bg trong thẻ <head>"],
  "Slide 10: Thiết lập hình nền cho thẻ body: <body background=\"hinh1.png\">."),

// --- Màu sắc ---
S("q22", 3, 1, "Trong hệ màu Hexa, tổ hợp RRGGBB đại diện cho những màu nào?",
  ["RR: Red, GG: Green, BB: Blue", "RR: Red, GG: Gray, BB: Brown", "RR: Red, GG: Green, BB: Brown", "RR: Red, GG: Grey, BB: Black"],
  "Slide 11: RR (red), GG (Green), BB (Blue)."),

S("q23", 3, 2, "Mã Hexa color nào đại diện cho màu trắng và màu đen?",
  ["#FFFFFF (trắng), #000000 (đen)", "#000000 (trắng), #FFFFFF (đen)", "#FFFFFF (trắng), #111111 (đen)", "#CCCCCC (trắng), #000000 (đen)"],
  "Slide 11: Giá trị thấp nhất 000000 là màu đen, giá trị cao nhất FFFFFF là màu trắng."),

S("q24", 3, 2, "Mã thập lục phân #FF00FF tương đương với mã RGB nào sau đây?",
  ["rgb(255,0,255)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)"],
  "Slide 11: FF (255) - 00 (0) - FF (255). Vậy là rgb(255,0,255)."),

// --- Lists (ol, ul, dl) ---
S("q25", 3, 1, "Thẻ <ol> dùng để tạo loại danh sách nào?",
  ["Danh sách có đánh số thứ tự", "Danh sách không có số thứ tự (dạng nút)", "Danh sách phân cấp có diễn giải", "Danh sách dạng bảng"],
  "Slide 12: <ol> (Ordered list) dùng để trình bày danh sách đánh số thứ tự. <ul> dùng cho danh sách dạng nút."),

S("q26", 3, 2, "Để tạo danh sách không có số thứ tự với các nút hình vuông, ta dùng mã nào?",
  ["<ul type=\"square\">", "<ul type=\"circle\">", "<ul type=\"disc\">", "<ol type=\"square\">"],
  "Slide 12: <ul> có các type: square (hình vuông đầy), circle (hình tròn rỗng), disc (hình tròn đầy - mặc định)."),

S("q27", 3, 2, "Trong thẻ <ol>, thuộc tính type=\"I\" sẽ hiển thị dạng đánh số như thế nào?",
  ["Chữ số La Mã: I, II, III...", "Chữ cái in hoa: A, B, C...", "Chữ cái thường: a, b, c...", "Chữ số thường: 1, 2, 3..."],
  "Slide 12: type=\"I\" dùng chữ số La Mã (I, II, III). type=\"A\" dùng chữ in hoa, type=\"a\" dùng chữ thường, type=\"1\" dùng số."),

S("q28", 3, 2, "Thẻ <dl> dùng để tạo loại danh sách nào?",
  ["Danh sách phân cấp có diễn giải", "Danh sách có số thứ tự", "Danh sách không có số thứ tự", "Danh sách dạng bảng"],
  "Slide 13: Thẻ <dl> (Definition List) tạo danh sách đề mục có diễn giải. Trong đó <dt> là từ khóa, <dd> là diễn giải."),

S("q29", 3, 1, "Trong danh sách <dl>, thẻ nào dùng để chứa phần diễn giải cho từ khóa?",
  ["<dd>", "<dt>", "<li>", "<dl>"],
  "Slide 13: <dt> là từ khoá (Definition Term), <dd> là diễn giải (Definition Description)."),

// --- Thẻ liên kết <a> ---
S("q30", 3, 1, "Thuộc tính href trong thẻ <a> có ý nghĩa gì?",
  ["Quy định đích liên kết (địa chỉ trang sẽ mở)", "Quy định cửa sổ mở trang", "Hiển thị tiêu đề khi rê chuột", "Quy định tên của liên kết"],
  "Slide 14: href=\"đích liên kết\" quy định địa chỉ nội dung sẽ hiện ra. title hiển thị tooltip khi rê chuột. target quy định cửa sổ đích."),

S("q31", 3, 2, "Khi muốn mở một liên kết trong một cửa sổ mới (tab mới), ta sử dụng thuộc tính target với giá trị nào?",
  ["_blank", "_self", "_new", "_top"],
  "Slide 14: target=\"_blank\" mở cửa sổ mới, target=\"_self\" mở ở cửa sổ hiện tại (mặc định)."),

S("q32", 3, 2, "Để tạo một liên kết gửi email, mã lệnh nào sau đây là đúng?",
  ["<a href=\"mailto:thanhtd@uel.edu.vn\">Gửi email</a>", "<a href=\"email:thanhtd@uel.edu.vn\">Gửi email</a>", "<a href=\"https://thanhtd@uel.edu.vn\">Gửi email</a>", "<a src=\"mailto:thanhtd@uel.edu.vn\">Gửi email</a>"],
  "Slide 15: Liên kết đến địa chỉ Email sử dụng cú pháp mailto: <a href=\"mailto:email@domain.com\">."),

S("q33", 3, 2, "Kỹ thuật bookmark - hyper link trong cùng một trang hiện hành được thực hiện bằng cách nào trong HTML5?",
  ["Đặt id cho thẻ cần liên kết đến và dùng href=\"#id\" để trỏ tới", "Đặt name cho thẻ cần liên kết đến và dùng href=\"name\" để trỏ tới", "Đặt class cho thẻ cần liên kết đến và dùng href=\".class\" để trỏ tới", "Đặt title cho thẻ cần liên kết đến và dùng href=\"title\" để trỏ tới"],
  "Slide 15: HTML5 không còn thuộc tính name trong thẻ a, sử dụng id. Ví dụ: <h1 id=\"tieude\"> và <a href=\"#tieude\">."),

S("q34", 3, 2, "Để liên kết đến một phần nội dung nằm trong một trang KHÁC (ví dụ trang `gioithieu.html`), ta viết mã như thế nào?",
  ["<a href=\"gioithieu.html#id_phan_do\">Xem phần giới thiệu</a>", "<a href=\"#id_phan_do\">Xem phần giới thiệu</a>", "<a src=\"gioithieu.html#id_phan_do\">Xem phần giới thiệu</a>", "<a href=\"gioithieu.html\">Xem phần giới thiệu</a>"],
  "Slide 15: Liên kết chéo trang cần ghi rõ tên file html và id của phần đó: `gioithieu.html#id_phan_do`."),

S("q35", 3, 2, "Cho đoạn mã sau: `<a href=\"https://uel.edu.vn\" target=\"_blank\">UEL</a>`. Khi nhấn vào chữ UEL, điều gì sẽ xảy ra?",
  ["Trình duyệt mở trang web uel.edu.vn trong một tab/cửa sổ mới", "Trình duyệt mở trang web uel.edu.vn ngay tại tab hiện tại", "Trình duyệt tải lại trang hiện tại", "Trình duyệt tải file uel.edu.vn xuống máy tính"],
  "Slide 14: target=\"_blank\" có tác dụng mở liên kết trong cửa sổ mới."),

// --- VS Code & thực hành ---
S("q36", 3, 1, "Để xem trước tài liệu HTML và tự động cập nhật khi thay đổi code trong Visual Studio Code, ta sử dụng extension nào?",
  ["Live Server", "Prettier", "Auto Rename Tag", "HTML CSS Support"],
  "Slide 03: Cài đặt plug-in Live Server để chạy và tự động cập nhật tài liệu HTML."),

S("q37", 3, 2, "Trong cấu trúc cơ bản của một tài liệu HTML, thẻ nào chứa tiêu đề của trang (hiển thị trên thanh tab trình duyệt)?",
  ["<title>", "<h1>", "<head>", "<header>"],
  "Slide 04: Thẻ <title> nằm trong <head>, dùng để đặt tiêu đề cho tài liệu (hiển thị trên tab trình duyệt). Thẻ <h1> là tiêu đề hiển thị trên nội dung trang (nằm trong <body>)."),

M("q38", 3, 2, "Cho đoạn mã HTML sau: `<img src=\"h1.png\" width=\"300\" height=\"500\" alt=\"Không có hình\" title=\"Đây là hình\"/>`. Những thuộc tính nào sau đây được sử dụng trong thẻ img này?",
  ["src", "width", "height", "align"], 3,
  "Slide 10: Đoạn mã trên chứa các thuộc tính src, width, height, alt, title. Không có thuộc tính align."),

S("q39", 3, 2, "Đoạn mã HTML sau hiển thị kết quả như thế nào? `<b>UEL</b> <i>UEL</i> <u>UEL</u>`",
  ["UEL (đậm), UEL (nghiêng), UEL (gạch chân)", "UEL (đậm), UEL (gạch chân), UEL (nghiêng)", "Cả 3 chữ UEL đều in đậm và gạch chân", "Lỗi cú pháp vì thiếu thẻ đóng"],
  "Slide 08: <b> là in đậm, <i> là in nghiêng, <u> là gạch chân."),

S("q40", 3, 2, "Tại sao ta nên sử dụng mã màu Hexa (ví dụ #FF0000) thay vì tên màu (ví dụ red)?",
  ["Vì mã Hexa cung cấp hàng triệu màu sắc khác nhau, trong khi tên màu chỉ có số lượng giới hạn", "Vì mã Hexa chạy nhanh hơn tên màu", "Vì trình duyệt không hỗ trợ tên màu", "Vì mã Hexa giúp trang web bảo mật hơn"],
  "Slide 11: Tên màu có định nghĩa sẵn nhưng số lượng rất hạn chế. Mã Hexa cho phép lựa chọn chính xác bất kỳ màu nào (hàng triệu màu)."),
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_C3; }
