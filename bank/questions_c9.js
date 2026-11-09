// ============================================================================
// CHƯƠNG 9: JavaScript (Phần 2)
// Bao gồm: Xử lý chuỗi, Math, Date, Array, Class & Object
// Quy ước: Đáp án đúng luôn đặt ở ĐẦU mảng options (correct = [0]).
// ============================================================================
const S = (id, chapter, difficulty, question, options, explanation) =>
  ({ id: "c9-" + id, chapter, difficulty, type: "single", question, options, correct: [0], explanation });
const M = (id, chapter, difficulty, question, options, nCorrect, explanation) =>
  ({ id: "c9-" + id, chapter, difficulty, type: "multiple", question: question + " (chọn nhiều đáp án)", options,
     correct: Array.from({ length: nCorrect }, (_, i) => i), explanation });

const QUESTIONS_C9 = [
// --- Xử lý chuỗi: Tìm kiếm & Trích lọc ---
S("q1", 9, 1, "Hàm nào trong JavaScript trả về vị trí xuất hiện ĐẦU TIÊN của một chuỗi con trong chuỗi gốc?",
  ["indexOf()", "lastIndexOf()", "search()", "find()"],
  "Slide 52: indexOf() trả về vị trí xuất hiện đầu tiên của chuỗi con. lastIndexOf() trả về vị trí cuối cùng."),

S("q2", 9, 2, "Cho chuỗi `var str = \"time and tide wait for no man\";`. Hàm `str.lastIndexOf(\"an\")` trả về giá trị bao nhiêu?",
  ["27", "5", "2", "-1"],
  "Slide 52: lastIndexOf tìm vị trí cuối cùng của chuỗi \"an\". Trong chuỗi trên, \"an\" xuất hiện ở vị trí 27 (trong từ \"man\")."),

S("q3", 9, 2, "Hàm `search()` trong JavaScript khác gì so với `indexOf()`?",
  ["Hàm search() cho phép tìm kiếm bằng Regular Expression (biểu thức chính quy)", "Hàm search() trả về vị trí cuối cùng, indexOf() trả về vị trí đầu tiên", "Hàm search() phân biệt chữ hoa chữ thường, indexOf() thì không", "Hàm search() không thể tìm chuỗi con"],
  "Slide 52: search() tương tự indexOf nhưng cho phép tìm kiếm bằng Regular Expression. Ví dụ: str.search(/w3schools/i) để tìm không phân biệt hoa thường."),

S("q4", 9, 2, "Hàm `substring(start, end)` và `slice(start, end)` khác nhau cơ bản ở điểm nào?",
  ["Hàm slice() cho phép truyền tham số âm (đếm ngược từ cuối chuỗi), hàm substring() thì không", "Hàm substring() cho phép truyền tham số âm, hàm slice() thì không", "Cả hai hàm hoàn toàn giống nhau", "Hàm substring() trả về mảng, hàm slice() trả về chuỗi"],
  "Slide 52: slice() hỗ trợ chỉ số âm (ví dụ: str.slice(-12) sẽ lấy từ vị trí 12 tính từ cuối chuỗi lên). substring() không hỗ trợ chỉ số âm."),

S("q5", 9, 3, "Cho `var str = \"Apple, Banana, Kiwi\";`. Kết quả của `str.substr(7, 6)` là gì?",
  ["\"Banana\"", "\"Banana,\"", "\"Kiwi\"", "\"Apple,\""],
  "Slide 52: substr(start, length) lấy từ vị trí 7 (ký tự 'B') với độ dài 6 ký tự => \"Banana\"."),

// --- Xử lý chuỗi: Tách, Nối, Thay thế ---
S("q6", 9, 1, "Để tách một chuỗi thành một mảng các chuỗi con dựa trên một ký tự phân cách, ta sử dụng hàm nào?",
  ["split()", "join()", "concat()", "slice()"],
  "Slide 53: Hàm split() tách chuỗi thành mảng. Ví dụ: \"a,b,c\".split(\",\") => [\"a\",\"b\",\"c\"]."),

S("q7", 9, 2, "Hàm nào dùng để nối hai hoặc nhiều chuỗi lại với nhau?",
  ["concat()", "join()", "merge()", "append()"],
  "Slide 53: Hàm concat() dùng để nối chuỗi. Ngoài ra có thể dùng toán tử +."),

S("q8", 9, 2, "Cho chuỗi `str = \"Please visit Microsoft and Microsoft!\";`. Để thay thế TẤT CẢ các từ \"Microsoft\" thành \"W3Schools\", ta viết lệnh như thế nào?",
  ["str.replace(/Microsoft/g, \"W3Schools\")", "str.replace(\"Microsoft\", \"W3Schools\")", "str.replaceAll(\"Microsoft\", \"W3Schools\")", "str.replace(/Microsoft/, \"W3Schools\")"],
  "Slide 53: Để thay thế tất cả, cần dùng Regular Expression với cờ g (global): /Microsoft/g. Nếu chỉ dùng replace(\"Microsoft\", ...) thì chỉ thay thế lần xuất hiện đầu tiên."),

S("q9", 9, 2, "Cho `var str = \"Visit W3Schools\";`. Để tìm vị trí của \"w3schools\" mà KHÔNG phân biệt chữ hoa chữ thường, ta dùng lệnh nào?",
  ["str.search(/w3schools/i)", "str.search(\"w3schools\")", "str.indexOf(\"w3schools\")", "str.search(/w3schools/g)"],
  "Slide 52: Cờ i (case-insensitive) trong Regular Expression giúp tìm kiếm không phân biệt hoa thường."),

S("q10", 9, 1, "Hàm nào chuyển đổi một chuỗi thành chữ IN HOA?",
  ["toUpperCase()", "toLowerCase()", "upperCase()", "toUpper()"],
  "Slide 53: toUpperCase() chuyển sang chữ hoa. toLowerCase() chuyển sang chữ thường."),

S("q11", 9, 1, "Hàm `charAt(index)` trong JavaScript có tác dụng gì?",
  ["Trả về ký tự tại vị trí index trong chuỗi", "Trả về mã ASCII của ký tự", "Trả về vị trí của ký tự trong chuỗi", "Xóa ký tự tại vị trí index"],
  "Slide 53: charAt(0) trả về ký tự đầu tiên của chuỗi. Ví dụ: \"HELLO\".charAt(0) => \"H\"."),

// --- Đối tượng Math, Date, Array ---
S("q12", 9, 1, "Để thực hiện các phép tính toán học nâng cao (sin, cos, căn bậc 2, lũy thừa...), ta sử dụng đối tượng nào trong JavaScript?",
  ["Math", "Date", "Array", "Number"],
  "Slide 54: Đối tượng Math chứa các thuộc tính và phương thức cho phép tính toán học."),

S("q13", 9, 2, "Kết quả của `Math.round(4.7)` là bao nhiêu?",
  ["5", "4", "4.5", "5.0"],
  "Slide 54: Math.round() làm tròn đến số nguyên gần nhất. 4.7 làm tròn thành 5. Math.round(4.4) làm tròn thành 4."),

S("q14", 9, 2, "Sự khác biệt giữa `Math.ceil()` và `Math.floor()` là gì?",
  ["Math.ceil() làm tròn LÊN, Math.floor() làm tròn XUỐNG", "Math.ceil() làm tròn XUỐNG, Math.floor() làm tròn LÊN", "Cả hai đều làm tròn đến số gần nhất", "Cả hai đều trả về phần nguyên"],
  "Slide 54: Math.ceil(4.4) => 5 (làm tròn lên). Math.floor(4.7) => 4 (làm tròn xuống)."),

S("q15", 9, 2, "Kết quả của `Math.max(0, 150, 30, 20, -8, -200)` là gì?",
  ["150", "0", "-200", "30"],
  "Slide 54: Math.max() trả về giá trị lớn nhất trong các đối số. Giá trị lớn nhất ở đây là 150. Math.min() trả về -200."),

S("q16", 9, 2, "Đối tượng `Date` trong JavaScript lưu trữ thời gian dưới dạng số mili giây tính từ mốc thời gian nào?",
  ["1/1/1970 00:00:00", "1/1/2000 00:00:00", "1/1/1900 00:00:00", "1/1/1980 00:00:00"],
  "Slide 54: Date lưu trữ thời gian theo số mili giây tính từ 1/1/1970 00:00:00."),

S("q17", 9, 2, "Để lấy năm (4 chữ số) của một đối tượng Date, ta sử dụng phương thức nào?",
  ["getFullYear()", "getYear()", "getDate()", "getMonth()"],
  "Slide 54: getFullYear() trả về năm (bốn chữ số). getMonth() trả về tháng (0-11). getDate() trả về ngày trong tháng (1-31)."),

S("q18", 9, 3, "Phương thức `getMonth()` của đối tượng Date trả về giá trị trong khoảng nào?",
  ["Từ 0 đến 11", "Từ 1 đến 12", "Từ 0 đến 31", "Từ 1 đến 31"],
  "Slide 54: getMonth() trả về tháng từ 0 (tháng 1) đến 11 (tháng 12). Đây là lưu ý quan trọng khi lập trình với Date."),

S("q19", 9, 1, "Cách khai báo một mảng trong JavaScript là gì?",
  ["var arr = [1, 2, 3]; hoặc var arr = new Array();", "var arr = (1, 2, 3);", "var arr = {1, 2, 3};", "var arr = <1, 2, 3>;"],
  "Slide 54: Có 2 cách khai báo mảng: dùng dấu ngoặc vuông [] hoặc dùng từ khóa new Array()."),

S("q20", 9, 2, "Hàm nào thêm một phần tử vào CUỐI mảng và trả về độ dài mới của mảng?",
  ["push()", "pop()", "unshift()", "shift()"],
  "Slide 54: push() thêm vào cuối mảng. pop() xóa phần tử cuối. unshift() thêm vào đầu. shift() xóa phần tử đầu."),

S("q21", 9, 2, "Hàm nào xóa phần tử ĐẦU TIÊN của mảng và trả về phần tử đó?",
  ["shift()", "pop()", "push()", "unshift()"],
  "Slide 54: shift() xóa phần tử đầu tiên và trả về phần tử đó."),

// --- Class và Object ---
S("q22", 9, 1, "Để truy cập vào thuộc tính `name` của một đối tượng `car`, ta có thể viết như thế nào?",
  ["car.name hoặc car[\"name\"]", "car->name", "car::name", "car(name)"],
  "Slide 55: Truy cập thuộc tính: objectName.propertyName hoặc objectName[\"propertyName\"]."),

S("q23", 9, 2, "Trong một phương thức của đối tượng, từ khóa nào đại diện cho chính đối tượng đó?",
  ["this", "self", "object", "me"],
  "Slide 55: Từ khóa this được dùng để tham chiếu đến đối tượng hiện tại. Ví dụ: this.firstName + \" \" + this.lastName."),

S("q24", 9, 2, "Đoạn mã sau khai báo một đối tượng có phương thức. Làm thế nào để gọi phương thức `fullName`?\n`var person = { firstName: \"John\", lastName: \"Doe\", fullName: function() { return this.firstName + \" \" + this.lastName; } };`",
  ["person.fullName()", "person.fullName", "person->fullName()", "fullName(person)"],
  "Slide 55: Để gọi phương thức, ta dùng cú pháp objectName.methodName()."),

S("q25", 9, 2, "Trong đoạn mã trên, `firstName` và `lastName` được gọi là gì của đối tượng `person`?",
  ["Thuộc tính (Properties)", "Phương thức (Methods)", "Hàm (Functions)", "Biến toàn cục (Global variables)"],
  "Slide 55: firstName, lastName, id là các thuộc tính (properties). fullName là phương thức (method)."),

// --- Tổng hợp & Đọc hiểu code ---
S("q26", 9, 3, "Cho đoạn mã: `var str = \"SV1;Tèo Mộng Mơ;teo@uel.edu.vn\"; var arr = str.split(\";\");`. Giá trị của `arr[2]` là gì?",
  ["\"teo@uel.edu.vn\"", "\"SV1\"", "\"Tèo Mộng Mơ\"", "\";\""],
  "Slide 53: Hàm split(\";\") tách chuỗi thành mảng 3 phần tử: arr[0] = \"SV1\", arr[1] = \"Tèo Mộng Mơ\", arr[2] = \"teo@uel.edu.vn\"."),

S("q27", 9, 3, "Kết quả của đoạn mã sau là gì? `var str = \"Hello World\"; document.write(str.charAt(6));`",
  ["\"W\"", "\"H\"", "\"o\"", "\" \" (khoảng trắng)"],
  "Slide 53: charAt(6) lấy ký tự tại vị trí số 6 (tính từ 0). Chuỗi \"Hello World\" có H(0), e(1), l(2), l(3), o(4), khoảng trắng(5), W(6). Vậy kết quả là \"W\"."),

S("q28", 9, 3, "Đoạn mã sau in ra kết quả gì? `var x = [1, 2, 3]; x.push(4); document.write(x.length);`",
  ["4", "3", "5", "1"],
  "Slide 54: push(4) thêm phần tử 4 vào cuối mảng. Mảng trở thành [1, 2, 3, 4] có độ dài là 4."),

S("q29", 9, 3, "Cho đối tượng `var car = { type: \"Fiat\", model: \"500\", color: \"white\" };`. Lệnh nào sau đây trả về giá trị \"500\"?",
  ["car.model", "car[model]", "car(\"model\")", "car->model"],
  "Slide 55: Truy cập thuộc tính bằng dấu chấm: car.model. Hoặc car[\"model\"] (có ngoặc kép)."),

S("q30", 9, 3, "Đoạn mã sau in ra kết quả gì? `var d = new Date(); document.write(d.getMonth());` (Giả sử tháng hiện tại là tháng 10)",
  ["9", "10", "11", "0"],
  "Slide 54: getMonth() trả về tháng từ 0-11. Tháng 10 tương ứng với giá trị 9. Đây là lỗi phổ biến của người mới lập trình."),

S("q31", 9, 2, "Which method is used to remove the last element from an array in JavaScript?",
  ["pop()", "push()", "shift()", "unshift()"],
  "Slide 54: pop() xóa phần tử cuối cùng của mảng."),

S("q32", 9, 3, "Đoạn mã sau cho kết quả là gì? `var str = \"Apple, Banana, Kiwi\"; document.write(str.substring(7, 13));`",
  ["\"Banana\"", "\"Banana,\"", "\"Kiwi\"", "\"Apple,\""],
  "Slide 52: substring(7, 13) lấy từ ký tự thứ 7 đến ký tự thứ 12 (13-1). Chuỗi \"Apple, Banana, Kiwi\": A(0)p(1)p(2)l(3)e(4),(5) (6)B(7)a(8)n(9)a(10)n(11)a(12). Kết quả: \"Banana\"."),

S("q33", 9, 2, "Hàm `Math.abs(-4.7)` trả về giá trị bao nhiêu?",
  ["4.7", "-4.7", "5", "-5"],
  "Slide 54: Math.abs() trả về giá trị tuyệt đối. abs(-4.7) = 4.7."),

S("q34", 9, 2, "Làm thế nào để khai báo một mảng rỗng trong JavaScript?",
  ["var arr = [];", "var arr = {};", "var arr = new Array[];", "var arr = ();"],
  "Slide 54: Mảng rỗng được khai báo bằng []. Dấu {} dùng cho object."),

S("q35", 9, 3, "Đoạn mã sau in ra kết quả gì? `var s = \"Hello\"; s = s.concat(\" \", \"World\"); document.write(s);`",
  ["\"Hello World\"", "\"HelloWorld\"", "\"Hello World!\"", "Lỗi cú pháp"],
  "Slide 53: concat() nối các chuỗi. \"Hello\".concat(\" \", \"World\") => \"Hello World\"."),

S("q36", 9, 3, "Cho đối tượng: `var person = { firstName: \"John\", lastName: \"Doe\", fullName: function() { return this.firstName + \" \" + this.lastName; } };`. Kết quả của `person.fullName()` là gì?",
  ["\"John Doe\"", "\"firstName lastName\"", "\"undefined undefined\"", "Lỗi vì thiếu this"],
  "Slide 55: Phương thức fullName trả về this.firstName + \" \" + this.lastName = \"John Doe\"."),

S("q37", 9, 3, "Trong JavaScript, để lấy ngày hiện tại của hệ thống (ví dụ: 15), ta dùng phương thức nào?",
  ["getDate()", "getDay()", "getToday()", "getCurrentDate()"],
  "Slide 54: getDate() trả về ngày trong tháng (1-31). getDay() trả về thứ trong tuần (0-6)."),

S("q38", 9, 2, "Để tách một chuỗi thành mảng dựa trên ký tự khoảng trắng, ta viết lệnh như thế nào?",
  ["str.split(\" \")", "str.split(\"\")", "str.slice(\" \")", "str.concat(\" \")"],
  "Slide 53: split(\" \") sẽ tách chuỗi tại mỗi khoảng trắng. split(\"\") sẽ tách thành từng ký tự."),
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_C9; }
