// ============================================================================
// CHƯƠNG 6: Cascading Style Sheets (CSS) phần 2
// Bao gồm: Class/ID, Pseudo, Selectors, Properties, Box Model, Snippet
// Quy ước: Đáp án đúng luôn đặt ở ĐẦU mảng options (correct = [0]).
// ============================================================================
const S = (id, chapter, difficulty, question, options, explanation) =>
  ({ id: "c6-" + id, chapter, difficulty, type: "single", question, options, correct: [0], explanation });
const M = (id, chapter, difficulty, question, options, nCorrect, explanation) =>
  ({ id: "c6-" + id, chapter, difficulty, type: "multiple", question: question + " (chọn nhiều đáp án)", options,
     correct: Array.from({ length: nCorrect }, (_, i) => i), explanation });

const QUESTIONS_C6 = [
// --- Class & ID ---
S("q1", 6, 1, "How do you select an element with id 'demo' in CSS?",
  ["#demo", ".demo", "demo", "*demo"],
  "Slide 29: ID selector được ký hiệu bằng dấu thăng (#). Class selector dùng dấu chấm (.)."),

S("q2", 6, 1, "Để khai báo CSS cho một class có tên là 'highlight', ta sử dụng cú pháp nào?",
  [".highlight { ... }", "#highlight { ... }", "highlight { ... }", "*highlight { ... }"],
  "Slide 29: Class selector được khai báo bắt đầu bằng dấu chấm (.)."),

S("q3", 6, 2, "Làm thế nào để áp dụng nhiều class cho cùng một thẻ HTML?",
  ["<p class=\"class1 class2\">", "<p class=\"class1, class2\">", "<p class=\"class1+class2\">", "<p class=\"class1; class2\">"],
  "Slide 29: Các class được ngăn cách bởi khoảng trắng. VD: <dl class=\"center bold\">."),

S("q4", 6, 2, "Sự khác biệt cốt lõi giữa ID và Class trong CSS là gì?",
  ["ID là duy nhất (chỉ dùng 1 lần cho 1 thẻ), Class có thể tái sử dụng cho nhiều thẻ", "ID dùng dấu chấm, Class dùng dấu thăng", "ID không thể định dạng bằng CSS", "Class là duy nhất, ID có thể tái sử dụng"],
  "Slide 29: ID (định danh) mang tính duy nhất, Class dùng để nhóm nhiều thẻ có chung định dạng."),

// --- Pseudo Class ---
S("q5", 6, 2, "Trong CSS, `a:hover` có tác dụng gì?",
  ["Áp dụng định dạng khi di chuyển chuột vào liên kết", "Áp dụng định dạng cho liên kết đã nhấn chuột", "Áp dụng định dạng khi nhấn giữ chuột vào liên kết", "Áp dụng định dạng cho liên kết chưa từng được nhấn"],
  "Slide 30: a:hover là trạng thái di chuyển chuột vào link. a:visited là link đã nhấn, a:active là link đang nhấn giữ."),

S("q6", 6, 2, "Trong CSS, để tự động tô màu nền cho các dòng CHẴN của bảng (tbody), ta dùng selector nào?",
  ["tbody tr:nth-child(2n)", "tbody tr:nth-child(2n+1)", "tbody tr:even", "tbody tr:odd"],
  "Slide 30: nth-child(2n) dùng cho dòng chẵn (even), nth-child(2n+1) dùng cho dòng lẻ (odd)."),

S("q7", 6, 2, "Which CSS property is used to change the mouse cursor to a pointing hand (ngón trỏ) when hovering over an element?",
  ["cursor: pointer;", "cursor: hand;", "pointer: cursor;", "mouse: pointer;"],
  "Slide 30: Thuộc tính cursor với giá trị pointer sẽ hiển thị biểu tượng bàn tay chỉ ngón trỏ."),

// --- Selectors (Child & Descendant) ---
S("q8", 6, 2, "Sự khác biệt giữa `div p` và `div > p` là gì?",
  ["`div p` chọn tất cả thẻ p nằm trong div (mọi cấp), `div > p` chỉ chọn thẻ p là con trực tiếp của div", "`div > p` chọn tất cả thẻ p nằm trong div, `div p` chỉ chọn con trực tiếp", "Cả hai đều chọn giống hệt nhau", "`div p` chỉ chọn con trực tiếp, `div > p` chọn mọi cấp"],
  "Slide 31: Dấu cách ( ) là Descendent Selector (chọn mọi cấp con). Dấu lớn hơn (>) là Child Selector (chỉ chọn cấp 1, con trực tiếp)."),

S("q9", 6, 1, "Ký hiệu nào đại diện cho Child Selector?",
  [">", "Dấu cách (khoảng trắng)", "+", "~"],
  "Slide 31: parent > child { ... } là Child Selector."),

// --- CSS Properties ---
S("q10", 6, 1, "Which CSS property controls the text size?",
  ["font-size", "text-size", "font-style", "text-style"],
  "Slide 32: Thuộc tính font-size dùng để thiết lập kích thước chữ."),

S("q11", 6, 2, "Thuộc tính nào dùng để in đậm văn bản?",
  ["font-weight: bold;", "font-style: bold;", "text-weight: bold;", "font-variant: bold;"],
  "Slide 32: font-weight dùng để thiết lập độ đậm nhạt (normal, bold, bolder...)."),

S("q12", 6, 2, "Trong CSS, `background-repeat: no-repeat;` có tác dụng gì?",
  ["Hình nền chỉ hiển thị 1 lần, không lặp lại", "Hình nền lặp lại theo chiều dọc", "Hình nền lặp lại theo chiều ngang", "Hình nền lặp lại vô tận"],
  "Slide 32: background-repeat có các giá trị: repeat (mặc định), repeat-x, repeat-y, no-repeat (không lặp)."),

S("q13", 6, 2, "Which CSS property is used to hide an element but still leaves a space where it would have been?",
  ["visibility: hidden;", "display: none;", "display: hidden;", "visibility: none;"],
  "Slide 32: visibility: hidden làm ẩn phần tử nhưng vẫn chiếm không gian. display: none làm ẩn hoàn toàn và không chiếm không gian."),

M("q14", 6, 2, "Những giá trị nào sau đây là hợp lệ cho thuộc tính `border-style`?",
  ["solid", "dashed", "dotted", "double"], 4,
  "Slide 32: border-style có các giá trị phổ biến: solid, dashed, dotted, double, groove, ridge, inset, outset."),

// --- Box Model ---
S("q15", 6, 2, "Mô hình Box trong CSS bao gồm những thành phần nào (từ trong ra ngoài)?",
  ["Content -> Padding -> Border -> Margin", "Content -> Border -> Padding -> Margin", "Margin -> Border -> Padding -> Content", "Padding -> Content -> Margin -> Border"],
  "Slide 33: Thứ tự từ trong ra ngoài là Content, Padding (đệm), Border (viền), Margin (lề)."),

S("q16", 6, 3, "Cho đoạn CSS sau: `width: 250px; margin: 10px; padding: 20px; border: 5px solid #000;`. Tổng chiều rộng (Total width) của element này là bao nhiêu?",
  ["320px", "250px", "310px", "300px"],
  "Slide 33: Total width = width + (padding-left + padding-right) + (border-left + border-right) + (margin-left + margin-right) = 250 + (20*2) + (5*2) + (10*2) = 250 + 40 + 10 + 20 = 320px."),

S("q17", 6, 2, "Khi viết `margin: 10px 20px;` thì giá trị margin-top và margin-right lần lượt là bao nhiêu?",
  ["10px và 20px", "20px và 10px", "10px và 10px", "20px và 20px"],
  "Slide 33: Với 2 giá trị: giá trị 1 áp dụng cho top & bottom, giá trị 2 áp dụng cho left & right. Vậy top=10px, right=20px."),

S("q18", 6, 3, "Khi viết `padding: 5px 10px 15px 20px;` thì padding-bottom là bao nhiêu?",
  ["15px", "5px", "10px", "20px"],
  "Slide 33: Với 4 giá trị, thứ tự là: top - right - bottom - left. Vậy bottom = 15px."),

S("q19", 6, 2, "Thuộc tính Margin trong CSS dùng để làm gì?",
  ["Tạo khoảng trống bên ngoài đường viền (border) của element", "Tạo khoảng trống giữa nội dung và đường viền của element", "Quy định kích thước đường viền", "Quy định kích thước nội dung"],
  "Slide 33: Margin là lề bên ngoài border. Padding là khoảng đệm bên trong, giữa content và border."),

S("q20", 6, 3, "Phân biệt `padding` và `margin` trong Box Model?",
  ["Padding là khoảng đệm bên trong (content đến border), Margin là lề bên ngoài (từ border trở ra)", "Padding là lề bên ngoài, Margin là khoảng đệm bên trong", "Cả hai đều là khoảng cách bên ngoài", "Cả hai đều là khoảng cách bên trong"],
  "Slide 33: Padding nằm giữa Content và Border. Margin nằm ngoài Border."),

S("q21", 6, 2, "Thuộc tính `display: inline;` sẽ làm cho element hiển thị như thế nào?",
  ["Nằm cùng hàng với các element khác, chỉ chiếm bằng đúng nội dung của nó", "Chiếm trọn một hàng riêng biệt", "Ẩn hoàn toàn khỏi trang", "Hiển thị dạng danh sách"],
  "Slide 33: Inline element (như span, a) chỉ chiếm 1 vùng trong hàng. Block element (như div, h1) chiếm trọn 1 hàng."),

S("q22", 6, 2, "Thuộc tính `position: fixed;` có đặc điểm gì?",
  ["Định vị cố định element trên màn hình, không bị di chuyển khi cuộn trang", "Định vị tương đối so với vị trí ban đầu", "Định vị theo parent gần nhất", "Định vị mặc định theo luồng văn bản"],
  "Slide 33: fixed định vị cố định (như thanh menu luôn nằm trên cùng khi scroll)."),

// --- Snippet Template ---
S("q23", 6, 1, "Để mở công cụ cấu hình Snippet Template trong Visual Studio Code, ta dùng tổ hợp phím nào?",
  ["Ctrl + Shift + P", "Ctrl + Space", "Ctrl + Shift + N", "Alt + Shift + P"],
  "Slide 34: Ctrl + Shift + P để mở Command Palette, sau đó tìm 'snippet' -> 'Configure User Snippets'."),

S("q24", 6, 2, "Khi tạo Snippet Template trong VS Code, định dạng file được sử dụng là gì?",
  ["JSON", "XML", "HTML", "YAML"],
  "Slide 34: VS Code sử dụng định dạng JSON để định nghĩa các Snippet Template."),

// --- Tổng hợp thực hành (Code Reading) ---
S("q25", 6, 3, "Cho đoạn CSS sau: `p { text-align: center; color: red; }`. Thuộc tính nào sẽ được áp dụng cho thẻ p?",
  ["Văn bản căn giữa và có màu đỏ", "Văn bản căn trái và có màu đỏ", "Văn bản căn giữa và có màu xanh", "Văn bản in đậm và màu đỏ"],
  "Slide 32: text-align: center (căn giữa), color: red (màu đỏ)."),

S("q26", 6, 2, "Which CSS property sets the background color of an element?",
  ["background-color", "color", "bgcolor", "background-style"],
  "Slide 32: Thuộc tính background-color dùng để đổi màu nền."),

S("q27", 6, 2, "Muốn thay đổi kiểu chữ (font chữ) cho một element, ta sử dụng thuộc tính nào?",
  ["font-family", "font-style", "font-weight", "text-family"],
  "Slide 32: font-family dùng để khai báo danh sách font chữ. font-style là in nghiêng, font-weight là in đậm."),

S("q28", 6, 3, "Trong CSS, `a:visited` đại diện cho trạng thái nào của liên kết?",
  ["Liên kết đã từng được nhấn chuột vào", "Liên kết đang được nhấn giữ chuột", "Liên kết đang có chuột di chuyển vào", "Liên kết chưa từng được nhấn"],
  "Slide 30: link (chưa nhấn), visited (đã nhấn), hover (rê chuột), active (đang nhấn giữ)."),

S("q29", 6, 3, "Đoạn mã nào sau đây sẽ chọn thẻ `<p class=\"intro\">` nằm BÊN TRONG thẻ `<div>`?",
  ["div p.intro", "div > p.intro", "div + p.intro", "div ~ p.intro"],
  "Slide 31: Để chọn p có class intro nằm trong div (mọi cấp), dùng Descendant Selector: `div p.intro` hoặc `div .intro`."),

S("q30", 6, 3, "Cho đoạn mã CSS sau: `.box { width: 100px; padding: 10px; border: 1px solid black; margin: 5px; }`. Tổng chiều cao (Total height) của box là bao nhiêu? (Giả sử chiều cao content tự động co giãn bằng 0)",
  ["Không thể tính được vì thiếu thuộc tính height", "100px", "120px", "132px"],
  "Slide 33: Box Model yêu cầu phải biết chiều cao content (height) mới tính được tổng chiều cao. Nếu không khai báo height, chiều cao sẽ phụ thuộc vào nội dung bên trong."),

S("q31", 6, 2, "Để ẩn hoàn toàn một element và không chiếm không gian trên trang, ta dùng thuộc tính nào?",
  ["display: none;", "visibility: hidden;", "opacity: 0;", "display: hidden;"],
  "Slide 32: display: none ẩn hoàn toàn và xóa bỏ không gian. visibility: hidden ẩn nhưng vẫn giữ không gian."),

S("q32", 6, 1, "Thuộc tính `float: right;` có tác dụng gì?",
  ["Đẩy element sang bên phải, các element khác sẽ bao quanh bên trái", "Đẩy element sang bên trái", "Căn giữa element", "Ẩn element"],
  "Slide 33: float dùng để đẩy element sang trái hoặc phải, các element text hoặc inline khác sẽ nằm bên cạnh."),

S("q33", 6, 2, "Which CSS property is used to specify the indentation of the first line of a text?",
  ["text-indent", "padding-left", "margin-left", "text-align"],
  "Kiến thức bổ sung: text-indent dùng để thụt đầu dòng cho đoạn văn bản."),

S("q34", 6, 3, "Cho HTML sau: `<div><p>Hello</p><span>World</span></div>`. Selector `div > *` sẽ chọn những element nào?",
  ["Cả thẻ <p> và <span>", "Chỉ thẻ <p>", "Chỉ thẻ <span>", "Không chọn thẻ nào"],
  "Slide 31: Dấu `*` đại diện cho tất cả các element. `div > *` chọn tất cả các element con trực tiếp của div (ở đây là p và span)."),

S("q35", 6, 2, "Thuộc tính `border: 2px dashed red;` tương đương với việc khai báo những thuộc tính nào?",
  ["border-width: 2px; border-style: dashed; border-color: red;", "border-size: 2px; border-type: dashed; border-color: red;", "border-width: 2px; border-line: dashed; border-color: red;", "border: 2px; style: dashed; color: red;"],
  "Slide 32: Border là thuộc tính viết tắt (shorthand) cho border-width, border-style và border-color."),
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_C6; }
