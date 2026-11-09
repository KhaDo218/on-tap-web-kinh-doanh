// ============================================================================
// CHƯƠNG 11: Cấu trúc dữ liệu JSON
// Bao gồm: Khái niệm, JSON Object, JSON Array, Truy xuất dữ liệu
// Quy ước: Đáp án đúng luôn đặt ở ĐẦU mảng options (correct = [0]).
// ============================================================================
const S = (id, chapter, difficulty, question, options, explanation) =>
  ({ id: "c11-" + id, chapter, difficulty, type: "single", question, options, correct: [0], explanation });
const M = (id, chapter, difficulty, question, options, nCorrect, explanation) =>
  ({ id: "c11-" + id, chapter, difficulty, type: "multiple", question: question + " (chọn nhiều đáp án)", options,
     correct: Array.from({ length: nCorrect }, (_, i) => i), explanation });

const QUESTIONS_C11 = [
// --- Khái niệm chung ---
S("q1", 11, 1, "JSON là viết tắt của cụm từ nào?",
  ["JavaScript Object Notation", "Java Standard Object Notation", "JavaScript Oriented Notation", "Java Syntax Object Notation"],
  "Slide 67: JSON (JavaScript Object Notation)."),

S("q2", 11, 2, "JSON được xây dựng dựa trên hai cấu trúc chính nào?",
  ["Tập hợp cặp name/value (Object) và Tập hợp danh sách các giá trị (Array)", "Tập hợp các thẻ (Tags) và Thuộc tính (Attributes)", "Bảng (Table) và Cột (Column)", "Hàm (Function) và Biến (Variable)"],
  "Slide 67: JSON dựa trên 2 cấu trúc: Tập hợp cặp name/value (Object) và Tập hợp danh sách các giá trị (Array)."),

S("q3", 11, 2, "Tiêu chuẩn của JSON được định nghĩa dựa trên ngôn ngữ JavaScript vào năm nào?",
  ["1999", "1995", "2000", "2010"],
  "Slide 67: JSON được định nghĩa theo ngôn ngữ JavaScript, tiêu chuẩn ECMA-262 năm 1999."),

S("q4", 11, 2, "So sánh cơ bản giữa HTML và JSON?",
  ["HTML dùng để hiển thị dữ liệu, JSON dùng để lưu trữ và trao đổi dữ liệu", "HTML dùng để lưu trữ, JSON dùng để hiển thị", "Cả hai đều dùng để hiển thị giao diện", "Cả hai đều là ngôn ngữ đánh dấu (Markup Language)"],
  "Slide 67: HTML hiển thị dữ liệu. JSON dùng để lưu trữ và trao đổi dữ liệu. (Lưu ý: JSON không phải là Markup Language như XML)."),

// --- JSON Object ---
S("q5", 11, 1, "Cặp dấu ngoặc nào được sử dụng để bao bọc một đối tượng JSON Object?",
  ["{ }", "[ ]", "( )", "< >"],
  "Slide 67: JSON Object được bao trong cặp “{}”. JSON Array được bao trong cặp “[]”."),

S("q6", 11, 2, "Trong JSON Object, các cặp name/value được phân tách với nhau bằng dấu gì?",
  ["Dấu phẩy (,)", "Dấu chấm phẩy (;)", "Dấu hai chấm (:)", "Dấu chấm (.)"],
  "Slide 67: Các cặp name/value được chia cách nhau bởi dấu phẩy (,). (Lưu ý: Slide gốc của thầy có lỗi gõ nhầm thành dấu ';', nhưng mã ví dụ ở slide 8 thầy dùng dấu ',')."),

S("q7", 11, 2, "Trong JSON Object, name (tên thuộc tính) BẮT BUỘC phải được đặt trong dấu gì?",
  ["Dấu nháy kép (\" \")", "Dấu nháy đơn (' ')", "Không cần dấu nháy", "Dấu ngoặc vuông ([ ])"],
  "Slide 67: Cú pháp là \"string\": value. Do đó tên thuộc tính phải là chuỗi và đặt trong nháy kép."),

S("q8", 11, 2, "Which data type is NOT supported as a value in a JSON object?",
  ["Function", "String", "Boolean", "Null"],
  "Slide 67: Value trong JSON có thể là chuỗi, số, true-false, null, object hoặc array. JSON không hỗ trợ function (hàm)."),

// --- JSON Array ---
S("q9", 11, 1, "Cặp dấu ngoặc nào được sử dụng để bao bọc một mảng JSON Array?",
  ["[ ]", "{ }", "( )", "< >"],
  "Slide 67: JSON Array được bao trong cặp “[]”."),

S("q10", 11, 2, "Đặc điểm của các phần tử trong một JSON Array là gì?",
  ["Có thứ tự (Ordered)", "Không có thứ tự (Unordered)", "Bắt buộc phải là chuỗi", "Bắt buộc phải là số"],
  "Slide 67: JSON Array là tập hợp danh sách các giá trị có thứ tự (ordered list)."),

S("q11", 11, 2, "Trong một JSON Array, các phần tử con có thể là loại dữ liệu nào?",
  ["Tất cả các loại: số, chuỗi, true/false, null, object, thậm chí là một mảng khác", "Chỉ được là số", "Chỉ được là chuỗi", "Chỉ được là object"],
  "Slide 67: Mỗi phần tử con có thể là một giá trị đơn lẻ như: số, chuỗi, true-false, null hoặc một object khác, thậm chí có thể là một mảng."),

// --- Truy xuất dữ liệu ---
S("q12", 11, 2, "Cho đối tượng JSON sau: `var user = {\"first_name\": \"Duy Thanh\", \"last_name\": \"Trần\"};`. Lệnh nào dùng để lấy giá trị \"Duy Thanh\"?",
  ["user.first_name", "user[first_name]", "user(first_name)", "user->first_name"],
  "Slide 67: Để truy xuất thuộc tính của JSON Object, ta dùng dấu chấm: objectName.propertyName. Ví dụ: user.first_name."),

S("q13", 11, 3, "Cho mảng JSON sau: `var arr = [10, 20, 30, 40];`. Lệnh `arr[2]` trả về giá trị bao nhiêu?",
  ["30", "20", "10", "40"],
  "Slide 67: Mảng trong JSON (và JavaScript) đánh số thứ tự từ 0. arr[0]=10, arr[1]=20, arr[2]=30."),

S("q14", 11, 3, "Cho cấu trúc JSON lồng nhau:\n`var data = { \"Sanphams\": [ {\"MaSP\": \"sp_1\", \"TenSP\": \"DELL\"}, {\"MaSP\": \"sp_2\", \"TenSP\": \"HP\"} ] };`\nLệnh nào sau đây lấy được tên sản phẩm \"HP\"?",
  ["data.Sanphams[1].TenSP", "data.Sanphams[0].TenSP", "data.Sanphams.TenSP[1]", "data[1].Sanphams.TenSP"],
  "Slide 67: data.Sanphams là mảng. Phần tử thứ 2 là data.Sanphams[1]. Thuộc tính TenSP của nó là data.Sanphams[1].TenSP."),

S("q15", 11, 2, "Trong JavaScript, hàm nào dùng để chuyển đổi một chuỗi định dạng JSON thành đối tượng (Object)?",
  ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.convert()"],
  "Kiến thức mở rộng (thường đi kèm với JSON trong thực tế): JSON.parse() dùng để parse chuỗi thành object. JSON.stringify() dùng để chuyển object thành chuỗi JSON."),

S("q16", 11, 2, "Khi muốn gửi một đối tượng JavaScript lên server dưới dạng chuỗi JSON, ta dùng hàm nào?",
  ["JSON.stringify()", "JSON.parse()", "JSON.toString()", "JSON.encode()"],
  "Kiến thức mở rộng: JSON.stringify() chuyển đối tượng thành chuỗi JSON."),

// --- Tổng hợp & Đọc hiểu code ---
M("q17", 11, 2, "Đâu là những giá trị HỢP LỆ (valid) của một thuộc tính trong JSON?",
  ["Số (Number)", "Chuỗi (String)", "Mảng (Array)", "Hàm (Function)"], 3,
  "Slide 67: JSON hỗ trợ chuỗi, số, true/false, null, object, array. Không hỗ trợ hàm (function) hay undefined."),

S("q18", 11, 3, "Đoạn mã sau có lỗi không?\n`var sv = { 'name': 'Tèo', 'age': 20 };`",
  ["Có lỗi vì tên thuộc tính (name, age) phải được đặt trong nháy kép (\" \")", "Không lỗi, nháy đơn hay nháy kép đều được", "Có lỗi vì thiếu dấu chấm phẩy ở cuối", "Có lỗi vì tuổi phải là chuỗi"],
  "Slide 67: Trong JSON chuẩn, tên thuộc tính (key) BẮT BUỘC phải đặt trong nháy kép. Tuy nhiên, trong JavaScript object thuần, nháy đơn vẫn hợp lệ. Nhưng nếu xét theo chuẩn JSON, đây là lỗi."),

S("q19", 11, 1, "JSON có phụ thuộc vào ngôn ngữ lập trình không?",
  ["Không, JSON là định dạng văn bản độc lập ngôn ngữ (tương thích C, C++, C#, Java, JS, Python...)", "Có, JSON chỉ chạy được trong JavaScript", "Có, JSON chỉ chạy được trong Java", "JSON chỉ là một phần của HTML"],
  "Slide 67: JSON tương thích với hầu hết các ngôn ngữ C, C++, C#, Java, JavaScript, Perl, Python..."),

S("q20", 11, 3, "Cho đoạn mã:\n`var user = { \"id\": \"1001\", \"info\": { \"age\": 20, \"gender\": \"male\" } };`\nLàm thế nào để lấy được giá trị \"male\"?",
  ["user.info.gender", "user.gender", "user.info[1]", "user[1].gender"],
  "Slide 67: Truy xuất thuộc tính lồng nhau bằng cách nối tiếp các dấu chấm: user.info.gender."),

S("q21", 11, 3, "Khi duyệt qua một mảng JSON Array trong JavaScript, cấu trúc nào thường được sử dụng nhất?",
  ["Vòng lặp for", "Câu lệnh if", "Câu lệnh switch", "Hàm alert()"],
  "Slide 67: Để duyệt qua các phần tử của JSON Array (thường chứa các object), ta dùng vòng lặp for (hoặc forEach)."),

S("q22", 11, 2, "Which of the following is the correct syntax for a JSON array of strings?",
  ["[\"Apple\", \"Banana\", \"Orange\"]", "{\"Apple\", \"Banana\", \"Orange\"}", "(\"Apple\", \"Banana\", \"Orange\")", "<\"Apple\", \"Banana\", \"Orange\">"],
  "Slide 67: JSON Array được bao bởi [], các phần tử là chuỗi đặt trong nháy kép và phân tách bằng dấu phẩy."),

S("q23", 11, 2, "Khẳng định nào sau đây là ĐÚNG về JSON?",
  ["JSON là định dạng nhẹ hơn, dễ đọc và dễ phân tích cú pháp hơn XML", "JSON không thể lưu trữ dữ liệu phân cấp", "JSON chỉ hỗ trợ dữ liệu có cấu trúc dạng bảng", "JSON không thể trao đổi dữ liệu qua mạng"],
  "Slide 67: JSON là định dạng văn bản đơn giản, nhẹ hơn và dễ parse hơn so với XML."),

S("q24", 11, 3, "Cho mảng sau: `var dm = { \"Sanphams\": [ {\"MaSP\": \"sp_1\"}, {\"MaSP\": \"sp_2\"} ] };`. Thuộc tính `dm.Sanphams.length` trả về giá trị bao nhiêu?",
  ["2", "1", "0", "3"],
  "Slide 67: dm.Sanphams là một mảng có 2 phần tử object. Do đó length = 2."),

S("q25", 11, 2, "Sự khác biệt cơ bản nhất giữa JSON Object và JSON Array là gì?",
  ["Object dùng cặp {} và chứa các cặp key/value, Array dùng cặp [] và chứa danh sách các giá trị có thứ tự", "Object dùng cặp [] và chứa danh sách, Array dùng cặp {} và chứa key/value", "Cả hai đều dùng cặp {}", "Cả hai đều dùng cặp []"],
  "Slide 67: Object dùng `{}`, chứa cặp name/value. Array dùng `[]`, chứa danh sách giá trị có thứ tự."),
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_C11; }
