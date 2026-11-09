// ============================================================================
// CHƯƠNG 7: Form và các Control trên Form
// Bao gồm: Form, Label, Textbox, Button, Fieldset, Checkbox/Radio, Select/Option
// Quy ước: Đáp án đúng luôn đặt ở ĐẦU mảng options (correct = [0]).
// ============================================================================
const S = (id, chapter, difficulty, question, options, explanation) =>
  ({ id: "c7-" + id, chapter, difficulty, type: "single", question, options, correct: [0], explanation });
const M = (id, chapter, difficulty, question, options, nCorrect, explanation) =>
  ({ id: "c7-" + id, chapter, difficulty, type: "multiple", question: question + " (chọn nhiều đáp án)", options,
     correct: Array.from({ length: nCorrect }, (_, i) => i), explanation });

const QUESTIONS_C7 = [
// --- Thẻ Form & Phương thức ---
S("q1", 7, 1, "Thẻ nào được sử dụng để tạo một Form (biểu mẫu) trong HTML?",
  ["<form>", "<input>", "<fieldset>", "<textarea>"],
  "Slide 35: Thẻ <form> là nơi chứa các thành phần nhập liệu. Các thẻ như <input> hay <textarea> là các control nằm bên trong Form."),

S("q2", 7, 2, "Thuộc tính `action` trong thẻ `<form>` có tác dụng gì?",
  ["Chỉ định trang web (hoặc server) sẽ nhận và xử lý dữ liệu từ Form", "Xác định phương thức gửi dữ liệu (GET, POST...)", "Đặt tên cho Form để dễ quản lý", "Xác định cửa sổ hiển thị kết quả"],
  "Slide 35: action chỉ định trang web sẽ nhận xử lý dữ liệu từ FORM này khi có sự kiện click của button SUBMIT."),

S("q3", 7, 2, "Phương thức (method) nào sau đây truyền dữ liệu công khai lên thanh địa chỉ URL và bị giới hạn bởi độ dài của URL?",
  ["GET", "POST", "PUT", "DELETE"],
  "Slide 35: GET truyền dữ liệu kèm theo URL, giới hạn khoảng 2048 bytes. POST truyền ngầm bên dưới và không giới hạn."),

S("q4", 7, 2, "Which HTTP method is typically used to update an existing record on the server?",
  ["PUT", "GET", "POST", "DELETE"],
  "Slide 35: PUT thường được sử dụng để chỉnh sửa (cập nhật) dữ liệu từ Client gửi lên Server. DELETE dùng để xóa."),

S("q5", 7, 2, "Thuộc tính `name` trong thẻ `<form>` dùng để làm gì?",
  ["Đặt tên cho Form", "Chỉ định phương thức gửi dữ liệu", "Chỉ định trang nhận dữ liệu", "Không có tác dụng gì trong thẻ form"],
  "Slide 35: Thuộc tính name dùng để đặt tên cho FORM."),

// --- Label & Input cơ bản ---
S("q6", 7, 1, "Thẻ `<label>` dùng để làm gì?",
  ["Tạo tiêu đề (nhãn) cho các control trong form", "Tạo một nút bấm", "Tạo một ô nhập văn bản", "Tạo một danh sách chọn"],
  "Slide 36: <label> tạo tiêu đề cho các control trong form. Khi click vào label sẽ focus đến control tương ứng (thông qua thuộc tính for)."),

S("q7", 7, 2, "Trong thẻ `<label>`, thuộc tính `for` nhận giá trị là gì?",
  ["id của control được gắn với label", "name của form", "value của control", "class của control"],
  "Slide 36: Thuộc tính for nhận id của control gắn với label để khi click vào label sẽ focus đến control đó."),

S("q8", 7, 1, "Which input type defines a password field?",
  ["password", "text", "secret", "hidden"],
  "Slide 36: type=\"password\" định nghĩa một Password Field (khi gõ sẽ được mã hóa thành các dấu chấm)."),

S("q9", 7, 2, "Để tạo một ô nhập văn bản nhiều dòng (TextArea), ta sử dụng thẻ nào?",
  ["<textarea>", "<input type=\"textarea\">", "<input type=\"text\">", "<textbox>"],
  "Slide 36: Thẻ <textarea> định nghĩa một vùng nhập văn bản nhiều dòng (với các thuộc tính rows, cols)."),

S("q10", 7, 2, "Thuộc tính `placeholder` trong thẻ `<input>` có tác dụng gì?",
  ["Hiển thị dòng chữ gợi ý mờ trong ô nhập liệu", "Đặt giá trị mặc định cho ô nhập liệu", "Bắt buộc người dùng phải nhập dữ liệu", "Thay đổi màu sắc của ô nhập liệu"],
  "Slide 36: placeholder hiển thị dòng chữ gợi ý. value là giá trị mặc định. required là bắt buộc nhập."),

S("q11", 7, 2, "Để bắt buộc người dùng phải nhập dữ liệu vào một ô `<input>` trước khi submit form, ta dùng thuộc tính nào?",
  ["required", "placeholder", "must", "validate"],
  "Slide 36: Thuộc tính required bắt buộc người dùng phải nhập dữ liệu (giống như câu hỏi trong Quiz 3 của thầy)."),

// --- Buttons ---
S("q12", 7, 1, "Có mấy loại nút (button) cơ bản trên Form?",
  ["3 loại: submit, reset, button", "2 loại: submit, button", "4 loại: submit, reset, button, cancel", "1 loại: submit"],
  "Slide 36: Có 3 loại nút: submit (gửi dữ liệu), reset (đưa về mặc định), button (tự viết script xử lý)."),

S("q13", 7, 2, "Nút `<input type=\"reset\">` có chức năng gì?",
  ["Đưa mọi dữ liệu trong form về trạng thái mặc định", "Gửi dữ liệu lên server", "Xóa toàn bộ form khỏi trang", "Thực thi một đoạn javascript do người dùng viết"],
  "Slide 36: reset đưa mọi dữ liệu về trạng thái mặc định. submit tự động ra lệnh gửi dữ liệu."),

// --- Fieldset & Legend ---
S("q14", 7, 1, "Thẻ `<fieldset>` dùng để làm gì?",
  ["Nhóm các control lại với nhau trong một khung", "Tạo một nút bấm", "Tạo tiêu đề cho form", "Tạo một ô nhập văn bản"],
  "Slide 37: <fieldset> nhóm các control lại với nhau thành một khung viền."),

S("q15", 7, 1, "Thẻ nào dùng để tạo tiêu đề (tên nhóm) cho thẻ `<fieldset>`?",
  ["<legend>", "<title>", "<header>", "<caption>"],
  "Slide 37: <legend> tạo tiêu đề nhóm nằm ngay trên viền của khung <fieldset>."),

// --- Checkbox & Radio ---
S("q16", 7, 2, "Sự khác biệt cơ bản giữa Checkbox và Radio Button là gì?",
  ["Checkbox cho phép chọn nhiều lựa chọn cùng lúc, Radio Button chỉ cho chọn 1 lựa chọn", "Checkbox chỉ cho chọn 1, Radio Button cho chọn nhiều", "Checkbox dùng để nhập văn bản, Radio Button dùng để bấm", "Cả hai đều chỉ cho chọn 1 lựa chọn"],
  "Slide 38: Checkbox cho phép chọn nhiều lựa chọn, Radio Button chỉ cho chọn một lựa chọn trong một nhóm."),

S("q17", 7, 3, "Điều kiện quan trọng nhất để các nút Radio Button được xem là CÙNG MỘT NHÓM (chỉ được chọn 1)?",
  ["Thuộc tính name của các thẻ input phải giống nhau", "Thuộc tính id của các thẻ input phải giống nhau", "Các thẻ input phải nằm trong cùng một thẻ div", "Thuộc tính value của các thẻ input phải giống nhau"],
  "Slide 38: Các đối tượng cùng tên (name) thì thuộc cùng một nhóm. Nếu đặt cùng name, chỉ một Radio được chọn. Nếu khác name, chúng thuộc nhóm khác nhau."),

S("q18", 7, 2, "Which input type defines a checkbox?",
  ["checkbox", "check", "box", "radio"],
  "Slide 38: Thuộc tính type=\"checkbox\" định nghĩa một ô checkbox."),

S("q19", 7, 2, "Thuộc tính `checked` trong Checkbox và Radio Button có tác dụng gì?",
  ["Mặc định chọn sẵn lựa chọn đó khi trang web tải xong", "Bắt buộc người dùng phải chọn lựa chọn này", "Không cho phép người dùng thay đổi lựa chọn", "Làm mờ lựa chọn đó đi"],
  "Slide 38: Thuộc tính checked giúp mặc định được chọn sẵn."),

// --- Select, Option, Optgroup ---
S("q20", 7, 1, "Thẻ nào được sử dụng để tạo một Combo Box (danh sách thả xuống) trong HTML?",
  ["<select>", "<option>", "<input type=\"dropdown\">", "<combobox>"],
  "Slide 39: Thẻ <select> định nghĩa Combo Box. Thẻ <option> định nghĩa từng phần tử trong danh sách."),

S("q21", 7, 2, "Để tạo một Listbox (danh sách hiển thị nhiều dòng và cho phép chọn nhiều), ta thêm thuộc tính nào vào thẻ `<select>`?",
  ["multiple và size", "size và selected", "multiple và disabled", "checkbox và size"],
  "Slide 39: Listbox có thêm 2 thuộc tính: size (số dòng hiển thị) và multiple (cho phép chọn nhiều)."),

S("q22", 7, 2, "Thẻ `<optgroup>` có tác dụng gì trong thẻ `<select>`?",
  ["Nhóm các option lại với nhau thành từng nhóm", "Chọn một option mặc định", "Tạo một option ẩn", "Vô hiệu hóa toàn bộ danh sách"],
  "Slide 40: <optgroup> nhóm các option lại với nhau. Thuộc tính label để đặt tên nhóm, disabled để không cho chọn cả nhóm."),

S("q23", 7, 2, "Trong thẻ `<option>`, thuộc tính nào dùng để mặc định chọn sẵn một phần tử?",
  ["selected", "checked", "default", "active"],
  "Slide 39: Thuộc tính selected giúp option đó được mặc định chọn."),

// --- Hidden & File ---
S("q24", 7, 2, "Thẻ `<input type=\"hidden\">` dùng để làm gì?",
  ["Lưu trữ giá trị ẩn mà không hiển thị ra trang web", "Ẩn toàn bộ Form", "Mã hóa mật khẩu", "Ẩn các nút bấm"],
  "Slide 40: hidden dùng lưu trữ giá trị ẩn, người dùng không nhìn thấy trên trang web nhưng dữ liệu vẫn được gửi đi."),

S("q25", 7, 2, "Để người dùng chọn và tải file (upload) lên server, ta sử dụng thẻ `<input>` với type nào?",
  ["file", "upload", "image", "document"],
  "Slide 40: type=\"file\" dùng để upload file lên web. Hiển thị nút Choose File."),

// --- Thực hành (Code Reading) ---
S("q26", 7, 3, "Cho đoạn mã: `<input type=\"number\" min=\"0\" max=\"10\" step=\"2\" value=\"6\">`. Người dùng có thể nhập giá trị nào sau đây?",
  ["8", "5", "7", "9"],
  "Slide 36: Input number với min=0, max=10, step=2, value=6. Các giá trị hợp lệ là 0, 2, 4, 6, 8, 10. Chỉ có 8 là hợp lệ trong các đáp án."),

S("q27", 7, 3, "Trong đoạn mã: `<select name=\"traicay\" multiple size=\"5\">`, thuộc tính `size=\"5\"` có tác dụng gì?",
  ["Hiển thị 5 dòng trong danh sách cùng lúc", "Cho phép chọn tối đa 5 lựa chọn", "Giới hạn có 5 option trong danh sách", "Đặt kích thước chữ là 5px"],
  "Slide 39: size=\"số dòng\" quy định số dòng hiển thị cùng lúc của Listbox."),

S("q28", 7, 3, "Which of the following HTML tags is used to create a multi-line text input control?",
  ["<textarea>", "<input type=\"text\">", "<input type=\"multiline\">", "<textbox>"],
  "Slide 36: Thẻ <textarea> định nghĩa vùng nhập văn bản nhiều dòng."),

S("q29", 7, 2, "Để nhóm các nút Radio 'Giới tính' (Nam/Nữ) lại thành một nhóm, ta cần đặt thuộc tính name như thế nào?",
  ["<input type=\"radio\" name=\"gender\" value=\"Nam\"> và <input type=\"radio\" name=\"gender\" value=\"Nu\">", "<input type=\"radio\" name=\"Nam\"> và <input type=\"radio\" name=\"Nu\">", "<input type=\"radio\" value=\"gender\"> và <input type=\"radio\" value=\"gender\">", "<input type=\"radio\" id=\"gender\"> và <input type=\"radio\" id=\"gender\">"],
  "Slide 38: Để cùng nhóm, thuộc tính name phải giống nhau (ví dụ: name=\"gender\"). id có thể khác nhau."),

S("q29b", 7, 2, "Trong thẻ `<input>`, thuộc tính nào dùng để thay đổi kiểu hiển thị của control (ví dụ: từ textbox sang checkbox)?",
  ["type", "control", "kind", "format"],
  "Slide 36: Thuộc tính type quyết định loại control (text, password, email, checkbox, radio, file, hidden...)."),

S("q30", 7, 3, "Cho đoạn mã sau: `<input type=\"email\" id=\"email\" name=\"email\" required>`. Phát biểu nào sau đây là ĐÚNG?",
  ["Người dùng bắt buộc phải nhập đúng định dạng email thì mới được submit", "Người dùng có thể nhập bất kỳ văn bản nào", "Ô nhập liệu này sẽ tự động điền email của người dùng", "Thuộc tính required không có tác dụng với type=\"email\""],
  "Slide 36: type=\"email\" sẽ kiểm tra định dạng email trước khi submit. Thuộc tính required bắt buộc phải nhập."),

// --- Tổng hợp ---
M("q31", 7, 2, "Những thuộc tính nào sau đây là của thẻ `<form>`?",
  ["action", "method", "name", "checked"], 3,
  "Slide 35: Các thuộc tính của thẻ form gồm: action, method, name, target. Thuộc tính checked dùng cho input/option."),

S("q32", 7, 2, "Thẻ `<input>` là thẻ tự đóng (không cần thẻ đóng) hay cần thẻ đóng?",
  ["Thẻ tự đóng, không có thẻ </input>", "Bắt buộc phải có thẻ </input>", "Tùy từng trường hợp", "Chỉ cần thẻ đóng khi dùng type=\"text\""],
  "Kiến thức tổng hợp: Thẻ <input> là thẻ đơn (empty tag), không có thẻ đóng trong HTML."),

S("q33", 7, 2, "Để tạo một nút có chức năng tự viết mã JavaScript xử lý (không tự động submit form), ta dùng type nào?",
  ["type=\"button\"", "type=\"submit\"", "type=\"reset\"", "type=\"action\""],
  "Slide 36: type=\"button\" không có hành động mặc định, người lập trình tự gắn sự kiện (onclick) để xử lý."),

S("q34", 7, 3, "Thuộc tính `disabled` trong thẻ `<optgroup>` có tác dụng gì?",
  ["Không cho phép người dùng chọn bất kỳ option nào thuộc nhóm đó", "Ẩn toàn bộ nhóm option khỏi danh sách", "Tự động chọn option đầu tiên của nhóm", "Xóa toàn bộ nhóm option khỏi form"],
  "Slide 40: disabled: không cho chọn (các option trong nhóm sẽ bị mờ và không click được)."),

S("q35", 7, 3, "Để gửi file từ Client lên Server, form phải có thuộc tính `enctype` là gì? (Kiến thức mở rộng thường đi kèm với type=\"file\")",
  ["multipart/form-data", "application/x-www-form-urlencoded", "text/plain", "application/json"],
  "Kiến thức bổ sung: Khi dùng <input type=\"file\">, thuộc tính enctype của <form> phải là multipart/form-data để truyền file qua HTTP POST."),
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_C7; }
