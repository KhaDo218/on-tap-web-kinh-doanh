// ============================================================================
// CHƯƠNG 8: JavaScript (Phần 1)
// Bao gồm: Nhúng JS, Kiểu dữ liệu, Toán tử, Hàm, Built-in, If/Else, Switch, Vòng lặp
// Quy ước: Đáp án đúng luôn đặt ở ĐẦU mảng options (correct = [0]).
// ============================================================================
const S = (id, chapter, difficulty, question, options, explanation) =>
  ({ id: "c8-" + id, chapter, difficulty, type: "single", question, options, correct: [0], explanation });
const M = (id, chapter, difficulty, question, options, nCorrect, explanation) =>
  ({ id: "c8-" + id, chapter, difficulty, type: "multiple", question: question + " (chọn nhiều đáp án)", options,
     correct: Array.from({ length: nCorrect }, (_, i) => i), explanation });

const QUESTIONS_C8 = [
// --- Giới thiệu & Nhúng JS ---
S("q1", 8, 1, "JavaScript ban đầu được phát triển bởi hãng nào và với tên gọi là gì?",
  ["Netscape với tên LiveScript", "Microsoft với tên Jscript", "Sun Microsystems với tên Java", "Netscape với tên ECMAScript"],
  "Slide 41: Hãng Netscape đưa ra ngôn ngữ script có tên là LiveScript (1995), sau đó đổi tên thành JavaScript. Tên tiêu chuẩn là ECMAScript."),

S("q2", 8, 1, "Đâu là cách nhúng trực tiếp mã JavaScript vào tài liệu HTML?",
  ["Sử dụng thẻ <script> ... </script>", "Sử dụng thẻ <style> ... </style>", "Sử dụng thẻ <js> ... </js>", "Sử dụng thẻ <javascript> ... </javascript>"],
  "Slide 41: Nhúng trực tiếp bằng thẻ <script type=\"text/javascript\"> ... </script>."),

S("q3", 8, 1, "Để nhúng một file JavaScript bên ngoài vào tài liệu HTML, ta sử dụng cú pháp nào?",
  ["<script src=\"file_javascript.js\"></script>", "<script href=\"file_javascript.js\"></script>", "<link rel=\"javascript\" href=\"file_javascript.js\">", "<script file=\"file_javascript.js\"></script>"],
  "Slide 41: Nhúng từ file khác: <script src=\"file_javascript.js\"></script>."),

S("q4", 8, 2, "Khi đặt đoạn script JavaScript trong thẻ <head>, đoạn script đó sẽ được thực thi khi nào?",
  ["Thực thi ngay khi trang web được mở (trước khi hiển thị nội dung body)", "Thực thi sau khi toàn bộ trang web đã tải xong", "Thực thi khi người dùng click chuột vào trang", "Không bao giờ thực thi"],
  "Slide 41: Đặt trong <head>, script thực thi ngay khi trang web được mở. Đặt trong <body>, script thực thi khi trang đang mở (sau khi các script ở head đã chạy)."),

// --- Kiểu dữ liệu & Biến ---
S("q5", 8, 1, "JavaScript có phân biệt chữ hoa và chữ thường không?",
  ["Có, JavaScript phân biệt chữ hoa chữ thường (case-sensitive)", "Không, JavaScript không phân biệt", "Chỉ phân biệt đối với tên biến", "Chỉ phân biệt đối với từ khóa"],
  "Slide 43: JavaScript phân biệt chữ hoa, chữ thường. Ví dụ: hai biến Java và java là khác nhau."),

S("q6", 8, 2, "Trong JavaScript, từ khóa nào được sử dụng để khai báo một biến?",
  ["var", "int", "let (trong ES6)", "dim"],
  "Slide 43: Dùng từ khóa var trước tên biến. (Slide cũng đề cập biến có thể không cần khai báo, nhưng var là cách chuẩn)."),

S("q7", 8, 2, "Trong JavaScript, kiểu dữ liệu `null` có ý nghĩa gì?",
  ["Biến không có dữ liệu (giữ chỗ, không có giá trị hữu dụng)", "Biến có giá trị bằng 0", "Biến chưa được khai báo", "Biến có giá trị chuỗi rỗng"],
  "Slide 43: Kiểu null chỉ có duy nhất một giá trị: null. Nó mang ý nghĩa là không có dữ liệu, khác với số 0 hay chuỗi rỗng."),

S("q8", 8, 1, "Which of the following is NOT a primitive data type in JavaScript?",
  ["Object", "String", "Number", "Boolean"],
  "Slide 43: Các kiểu dữ liệu nguyên thủy gồm String, Number, Boolean, Undefined, Null. Object là kiểu dữ liệu tham chiếu (reference type)."),

S("q9", 8, 2, "Ký tự `\n` trong một chuỗi JavaScript có tác dụng gì?",
  ["Sang dòng mới (new line)", "Tạo một khoảng tab", "Xóa ký tự phía trước", "In ra dấu gạch chéo ngược"],
  "Slide 43: `\n` là ký tự đặc biệt (escape sequence) dùng để xuống dòng. `\t` là tab, `\b` là backspace."),

// --- Toán tử ---
S("q10", 8, 1, "Toán tử `%` trong JavaScript được gọi là gì và có tác dụng gì?",
  ["Modulus (chia lấy dư), trả về số dư của phép chia", "Phần trăm (percent), tính tỷ lệ phần trăm", "Modulo (chia lấy nguyên), trả về phần nguyên", "Nhân (multiply), nhân hai số"],
  "Slide 44: Toán tử % là Modulus (division remainder), ví dụ 5%2 = 1 (5 chia 2 dư 1)."),

S("q11", 8, 2, "Cho `x = 5`. Sau khi thực hiện `x++`, giá trị của x là bao nhiêu?",
  ["6", "5", "4", "Không thay đổi"],
  "Slide 44: Toán tử ++ (Increment) tăng giá trị biến lên 1 đơn vị. x = 5, x++ => x = 6."),

S("q12", 8, 1, "Trong JavaScript, toán tử `==` và `===` khác nhau như thế nào?",
  ["`==` so sánh giá trị (có ép kiểu), `===` so sánh cả giá trị và kiểu dữ liệu", "`==` so sánh cả giá trị và kiểu, `===` chỉ so sánh giá trị", "Cả hai đều so sánh giá trị", "`==` dùng để gán giá trị, `===` dùng để so sánh"],
  "Kiến thức mở rộng (Slide 44 có bảng so sánh): `==` là equal to (so sánh giá trị, có thể ép kiểu), `===` là strictly equal (so sánh cả giá trị và kiểu dữ liệu)."),

S("q13", 8, 2, "Toán tử logic `&&` trả về kết quả `true` khi nào?",
  ["Khi cả hai biểu thức đều đúng (true)", "Khi ít nhất một trong hai biểu thức đúng", "Khi cả hai biểu thức đều sai", "Khi một biểu thức đúng và một biểu thức sai"],
  "Slide 44: Toán tử && (AND) trả về true khi cả hai vế đều true. Toán tử || (OR) trả về true khi ít nhất một vế true."),

S("q14", 8, 2, "Toán tử ba ngôi (ternary operator) trong JavaScript có cú pháp như thế nào?",
  ["condition ? value_if_true : value_if_false", "condition ? value_if_false : value_if_true", "condition : value_if_true ? value_if_false", "value_if_true ? condition : value_if_false"],
  "Slide 44: Cú pháp: x > y ? return x : return y. Nếu điều kiện đúng trả về giá trị thứ nhất, sai trả về giá trị thứ hai."),

// --- Hàm (Function) ---
S("q15", 8, 1, "Từ khóa nào được sử dụng để khai báo một hàm (function) trong JavaScript?",
  ["function", "func", "def", "void"],
  "Slide 45: Mỗi hàm do người dùng định nghĩa bắt đầu bằng từ khóa function."),

S("q16", 8, 2, "Cú pháp khai báo hàm có đối số trong JavaScript là gì?",
  ["function TenHam(thamso1, thamso2) { // body }", "function TenHam(thamso1, thamso2): { // body }", "def TenHam(thamso1, thamso2) { // body }", "function TenHam(thamso1, thamso2) => { // body }"],
  "Slide 45: Cú pháp: function FunctionX(parameter 1, parameter 2,...) { // body of function }."),

S("q17", 8, 2, "Một hàm trong JavaScript có thể trả về giá trị bằng cách sử dụng từ khóa nào?",
  ["return", "output", "result", "give"],
  "Slide 45: Sử dụng từ khóa return để trả về giá trị: return (value);"),

// --- Built-in Functions ---
S("q18", 8, 2, "Hàm `eval()` trong JavaScript có chức năng gì?",
  ["Đánh giá một chuỗi (thực thi chuỗi như mã JavaScript)", "Kiểm tra một giá trị có phải là số không", "Chuyển đổi chuỗi sang số nguyên", "Chuyển đổi số sang chuỗi"],
  "Slide 46: eval(string) dùng để đánh giá/thực thi một chuỗi biểu thức JavaScript."),

S("q19", 8, 2, "Hàm `isNaN()` trong JavaScript dùng để làm gì?",
  ["Kiểm tra xem một giá trị có phải là 'NaN' (Not a Number) hay không", "Chuyển đổi một giá trị sang số", "Kiểm tra một chuỗi có rỗng không", "Làm tròn một số"],
  "Slide 46: isNaN(testValue) trả về true nếu giá trị không phải là số, ngược lại trả về false."),

S("q20", 8, 2, "Hàm nào chuyển đổi một chuỗi thành số nguyên trong JavaScript?",
  ["parseInt()", "parseFloat()", "Number()", "String()"],
  "Slide 46: parseInt() chuyển chuỗi sang số nguyên. parseFloat() chuyển sang số thực. Number() chuyển đối tượng sang số."),

// --- Cấu trúc điều kiện (If, Switch) ---
S("q21", 8, 1, "Cấu trúc điều kiện if trong JavaScript có cú pháp như thế nào?",
  ["if (expression) { statement }", "if expression { statement }", "if (expression) then { statement }", "if (expression) do { statement }"],
  "Slide 47: Cú pháp: if (<expression>) { <statement> }."),

S("q22", 8, 2, "Trong cấu trúc switch, lệnh `break` có tác dụng gì?",
  ["Thoát khỏi cấu trúc switch ngay lập tức", "Tiếp tục thực hiện case tiếp theo", "Bỏ qua case hiện tại và nhảy đến default", "Khởi động lại switch"],
  "Slide 48: break dùng để thoát khỏi switch. Nếu thiếu break, chương trình sẽ tiếp tục thực hiện các case bên dưới (fall-through)."),

S("q23", 8, 2, "Trong cấu trúc switch, lệnh `default` có tác dụng gì?",
  ["Thực hiện khi không có case nào khớp", "Thực hiện khi tất cả các case đều khớp", "Thực hiện đầu tiên trước khi kiểm tra case", "Thực hiện khi có lỗi xảy ra"],
  "Slide 48: default là trường hợp mặc định, được thực thi nếu không có case nào khớp với biểu thức switch."),

// --- Vòng lặp ---
S("q24", 8, 2, "Sự khác biệt cơ bản giữa vòng lặp `while` và `do...while` là gì?",
  ["`while` kiểm tra điều kiện trước, `do...while` thực hiện ít nhất 1 lần rồi mới kiểm tra điều kiện", "`while` thực hiện ít nhất 1 lần, `do...while` kiểm tra trước", "Cả hai đều kiểm tra điều kiện trước", "Cả hai đều thực hiện ít nhất 1 lần"],
  "Slide 49, 50: while kiểm tra điều kiện trước (có thể không chạy lần nào). do...while thực hiện statement trước, sau đó mới kiểm tra điều kiện (chạy ít nhất 1 lần)."),

S("q25", 8, 2, "Trong vòng lặp for, biểu thức `Exp3` đóng vai trò gì?",
  ["Biểu thức điều khiển vòng lặp (thường là tăng/giảm biến đếm)", "Biểu thức khởi tạo biến đếm", "Biểu thức điều kiện để tiếp tục vòng lặp", "Biểu thức thoát khỏi vòng lặp"],
  "Slide 51: for (Exp1; Exp2; Exp3). Exp1 là khởi tạo, Exp2 là điều kiện, Exp3 là biểu thức điều khiển (bước nhảy)."),

S("q26", 8, 1, "Cú pháp của vòng lặp for trong JavaScript là gì?",
  ["for (khởi_tạo; điều_kiện; bước_nhảy) { statement }", "for (khởi_tạo; bước_nhảy; điều_kiện) { statement }", "for (điều_kiện; khởi_tạo; bước_nhảy) { statement }", "for (khởi_tạo, điều_kiện, bước_nhảy) { statement }"],
  "Slide 51: Cú pháp: for (Exp1; Exp2; Exp3) { statement }. Các phần được ngăn cách bởi dấu chấm phẩy."),

S("q27", 8, 2, "Lệnh `continue` trong vòng lặp có tác dụng gì?",
  ["Bỏ qua phần còn lại của vòng lặp hiện tại và tiếp tục vòng lặp tiếp theo", "Thoát khỏi vòng lặp ngay lập tức", "Khởi động lại vòng lặp từ đầu", "Dừng chương trình"],
  "Slide 49, 50, 51: continue bỏ qua các câu lệnh còn lại trong lần lặp hiện tại và chuyển sang lần lặp tiếp theo. break thoát khỏi vòng lặp."),

// --- Đọc hiểu code (Code Reading) ---
S("q28", 8, 3, "Cho đoạn mã: `var x = 10; var y = '10'; if (x == y) { alert('Bằng nhau'); }`. Kết quả hiển thị là gì?",
  ["Hiển thị 'Bằng nhau' vì == so sánh giá trị (có ép kiểu)", "Không hiển thị gì vì x và y khác kiểu dữ liệu", "Lỗi cú pháp", "Hiển thị 'Bằng nhau' vì == so sánh cả kiểu"],
  "Slide 44: Toán tử == so sánh giá trị sau khi ép kiểu. 10 == '10' trả về true. Nếu dùng === sẽ trả về false."),

S("q29", 8, 3, "Đoạn mã sau in ra kết quả gì? `var a = 5; var b = 2; document.write(a % b);`",
  ["1", "2.5", "2", "0"],
  "Slide 44: Toán tử % là chia lấy dư. 5 chia 2 được 2 dư 1. Kết quả là 1."),

S("q30", 8, 3, "Cho đoạn mã: `var i = 0; while (i < 3) { document.write(i); i++; }`. Kết quả in ra là gì?",
  ["012", "123", "0123", "1234"],
  "Slide 49: Vòng lặp while chạy khi i < 3. i bắt đầu từ 0, in ra 0, 1, 2. Khi i = 3 thì dừng."),

S("q31", 8, 3, "Cho đoạn mã: `var i = 0; do { document.write(i); i++; } while (i < 0);`. Kết quả in ra là gì?",
  ["0", "Không in gì cả", "012", "Lỗi vô hạn"],
  "Slide 50: do...while thực hiện ít nhất 1 lần. i = 0, in ra 0, sau đó i = 1. Kiểm tra 1 < 0 sai nên dừng."),

S("q32", 8, 3, "Cho đoạn mã: `var x = 5; switch(x) { case 5: document.write('Năm'); case 6: document.write('Sáu'); break; default: document.write('Khác'); }`. Kết quả là gì?",
  ["NămSáu", "Năm", "Sáu", "NămSáuKhác"],
  "Slide 48: Vì case 5 không có break nên sẽ thực hiện tiếp case 6 (fall-through). Kết quả in ra 'NămSáu' rồi gặp break dừng lại."),

S("q33", 8, 3, "Đoạn mã sau cho kết quả gì? `var x = 10; var y = x++ + 5;` Giá trị của x và y lần lượt là:",
  ["x = 11, y = 15", "x = 10, y = 15", "x = 11, y = 16", "x = 10, y = 16"],
  "Slide 44: Toán tử ++ hậu tố (x++) trả về giá trị cũ của x (10) cho biểu thức, sau đó mới tăng x lên 1. Vậy y = 10 + 5 = 15, x = 11."),

S("q34", 8, 3, "Cho đoạn mã: `var s = ''; for (var i = 1; i <= 3; i++) { s += i; }`. Kết quả của s là gì?",
  ["'123'", "'1234'", "'012'", "'6'"],
  "Slide 51: Vòng lặp for chạy i từ 1 đến 3. s += i tương đương s = s + i (nối chuỗi). Kết quả là '123'."),

// --- Câu hỏi tiếng Anh ---
S("q35", 8, 1, "How do you write an IF statement in JavaScript?",
  ["if (i == 5) { }", "if i = 5 then { }", "if i == 5 then { }", "if (i == 5) then { }"],
  "Slide 47: Cú pháp if trong JavaScript là: if (điều_kiện) { câu_lệnh }."),

S("q36", 8, 2, "How does a WHILE loop start?",
  ["while (i <= 10)", "while i = 1 to 10", "while (i <= 10; i++)", "while i <= 10"],
  "Slide 49: Cú pháp while: while (expression) { statement }. Không có phần khởi tạo và bước nhảy như for."),

S("q37", 8, 2, "How does a FOR loop start?",
  ["for (i = 0; i <= 5; i++)", "for (i <= 5; i++)", "for (i = 0; i <= 5)", "for i = 1 to 5"],
  "Slide 51: Cú pháp for: for (khởi_tạo; điều_kiện; bước_nhảy) { statement }."),

S("q38", 8, 2, "What is the correct way to write a JavaScript array? (Kiến thức mở rộng)",
  ["var colors = ['red', 'green', 'blue'];", "var colors = (1:'red', 2:'green', 3:'blue');", "var colors = 'red', 'green', 'blue';", "var colors = 1 = ('red'), 2 = ('green');"],
  "Kiến thức mở rộng: Mảng trong JavaScript được khai báo bằng dấu ngoặc vuông [] và các phần tử ngăn cách bởi dấu phẩy."),

// --- Tổng hợp ---
M("q39", 8, 2, "Trong JavaScript, những kiểu dữ liệu nào sau đây được coi là kiểu nguyên thủy (primitive)?",
  ["String", "Number", "Boolean", "Object"], 3,
  "Slide 43: Các kiểu nguyên thủy gồm String, Number, Boolean, Undefined, Null. Object là kiểu tham chiếu."),

M("q40", 8, 2, "Những toán tử nào sau đây là toán tử so sánh (comparison operator) trong JavaScript?",
  ["==", "!=", ">=", "="], 3,
  "Slide 44: Toán tử so sánh gồm ==, !=, >, <, >=, <=. Dấu = là toán tử gán (assignment operator)."),

S("q41", 8, 3, "Đoạn mã sau có lỗi không? `var 1stName = 'John';`",
  ["Có lỗi vì tên biến không được bắt đầu bằng số", "Không lỗi, biến hợp lệ", "Có lỗi vì thiếu từ khóa var", "Có lỗi vì chuỗi phải dùng nháy kép"],
  "Kiến thức mở rộng (Slide 43): Tên biến trong JavaScript không được bắt đầu bằng chữ số. Phải bắt đầu bằng chữ cái, dấu gạch dưới _, hoặc dấu $."),

S("q42", 8, 3, "Hàm `parseInt('123abc')` trả về kết quả gì?",
  ["123", "NaN", "'123abc'", "0"],
  "Slide 46: parseInt() sẽ phân tích chuỗi từ trái sang phải cho đến khi gặp ký tự không phải số. '123abc' trả về 123. Nếu chuỗi bắt đầu bằng chữ (vd 'abc123') sẽ trả về NaN."),
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_C8; }
