// ============================================================================
// CHƯƠNG 10: XML và Mô hình DOM
// Bao gồm: DOM Model, Thao tác DOM, Cấu trúc XML, DOMParser, AJAX
// Quy ước: Đáp án đúng luôn đặt ở ĐẦU mảng options (correct = [0]).
// ============================================================================
const S = (id, chapter, difficulty, question, options, explanation) =>
  ({ id: "c10-" + id, chapter, difficulty, type: "single", question, options, correct: [0], explanation });
const M = (id, chapter, difficulty, question, options, nCorrect, explanation) =>
  ({ id: "c10-" + id, chapter, difficulty, type: "multiple", question: question + " (chọn nhiều đáp án)", options,
     correct: Array.from({ length: nCorrect }, (_, i) => i), explanation });

const QUESTIONS_C10 = [
// --- Mô hình DOM ---
S("q1", 10, 1, "HTML DOM là viết tắt của cụm từ nào?",
  ["HTML Document Object Model", "HTML Data Object Model", "HTML Document Oriented Model", "HTML Dynamic Object Model"],
  "Slide 56: HTML DOM = HTML Document Object Model."),

S("q2", 10, 1, "Trong mô hình DOM, nút gốc (Root element) của một tài liệu HTML thường là thẻ nào?",
  ["<html>", "<body>", "<head>", "<document>"],
  "Slide 56: Nút gốc là <html>. Tất cả các nút còn lại trong DOM đều chứa trong <html>."),

S("q3", 10, 2, "Trong cây DOM, nút <head> và nút <body> có mối quan hệ như thế nào?",
  ["Là hai nút con (children) của nút <html> và là anh em (siblings) của nhau", "Là cha-con của nhau", "Cả hai đều là nút gốc", "Là anh em với nút <html>"],
  "Slide 56: Nút <html> có hai nút con là <head> và <body>. Ngang cấp với nhau gọi là nút sibling (anh em)."),

// --- Thao tác với DOM (Document Object) ---
S("q4", 10, 1, "Phương thức nào của đối tượng `document` dùng để tìm một phần tử HTML dựa vào thuộc tính id?",
  ["document.getElementById(id)", "document.getElementsByClassName(name)", "document.getElementsByTagName(name)", "document.querySelector(id)"],
  "Slide 57: document.getElementById(id) tìm element theo id."),

S("q5", 10, 2, "Thuộc tính nào của HTML Element dùng để lấy hoặc gán nội dung văn bản có chứa các thẻ HTML bên trong?",
  ["innerHTML", "innerText", "textContent", "outerHTML"],
  "Slide 57: innerHTML trả về/thiết lập giá trị text có định dạng HTML. innerText chỉ trả về text thuần."),

S("q6", 10, 2, "Làm thế nào để thay đổi giá trị thuộc tính `src` của một thẻ `<img>` thông qua DOM?",
  ["img.setAttribute(\"src\", \"new_image.png\")", "img.src.set(\"new_image.png\")", "img.attribute(\"src\", \"new_image.png\")", "img.style.src = \"new_image.png\""],
  "Slide 58: Sử dụng phương thức setAttribute(\"tên_thuộc_tính\", \"giá_trị\") để thay đổi giá trị thuộc tính."),

S("q7", 10, 2, "Để tạo mới một phần tử HTML bằng JavaScript, ta sử dụng phương thức nào?",
  ["document.createElement(tagName)", "document.newElement(tagName)", "document.createNode(tagName)", "document.addElement(tagName)"],
  "Slide 59: Sử dụng document.createElement(\"tag\") để tạo mới một HTML element."),

S("q8", 10, 2, "Sau khi tạo mới một element, để thêm nó vào một element cha (holder) trên cây DOM, ta dùng phương thức nào?",
  ["parentElement.appendChild(newElement)", "parentElement.addChild(newElement)", "parentElement.insertNode(newElement)", "parentElement.push(newElement)"],
  "Slide 59: Sử dụng appendChild(node) để thêm nút con vào nút cha."),

S("q9", 10, 2, "Để xóa một nút con khỏi cây DOM, ta sử dụng phương thức nào?",
  ["parentElement.removeChild(childNode)", "parentElement.deleteChild(childNode)", "childNode.remove()", "parentElement.pop(childNode)"],
  "Slide 61: Sử dụng removeChild(node) của nút cha để xóa nút con."),

// --- XML ---
S("q10", 10, 1, "XML là viết tắt của cụm từ nào?",
  ["EXtensible Markup Language", "EXtensible Markup Logic", "EXternal Markup Language", "EXtra Markup Language"],
  "Slide 62: XML = EXtensible Markup Language (Ngôn ngữ đánh dấu mở rộng)."),

S("q11", 10, 2, "Mục đích chính của XML là gì?",
  ["Lưu trữ và trao đổi dữ liệu", "Hiển thị dữ liệu lên trình duyệt", "Tạo giao diện người dùng", "Định dạng CSS cho trang web"],
  "Slide 62: HTML dùng để hiển thị dữ liệu, XML dùng để lưu trữ và trao đổi dữ liệu."),

S("q12", 10, 2, "Phát biểu nào sau đây là ĐÚNG về cú pháp XML?",
  ["Thẻ XML có phân biệt chữ hoa chữ thường", "XML không cần thẻ đóng", "XML có thể có nhiều thẻ root", "Giá trị thuộc tính không cần đặt trong dấu nháy"],
  "Slide 62: Tên thẻ XML phân biệt chữ hoa/thường. Mọi thẻ phải có thẻ đóng. Phải có duy nhất 1 thẻ root. Giá trị thuộc tính phải đặt trong nháy."),

S("q13", 10, 2, "Trong XML, ký tự `<` (nhỏ hơn) được biểu diễn bằng mã nào?",
  ["&lt;", "&gt;", "&amp;", "&apos;"],
  "Slide 62: `<` là `&lt;` (less than). `>` là `&gt;` (greater than). `&` là `&amp;`."),

S("q14", 10, 1, "Cách viết ghi chú (comment) trong tài liệu XML là gì?",
  ["<!-- Nội dung ghi chú -->", "// Nội dung ghi chú", "/* Nội dung ghi chú */", "# Nội dung ghi chú"],
  "Slide 62: Comment trong XML giống hệt HTML: <!-- comment -->."),

// --- DOMParser & Xử lý XML ---
S("q15", 10, 2, "Để chuyển một chuỗi văn bản XML thành một đối tượng XML Document trong JavaScript, ta sử dụng đối tượng nào?",
  ["DOMParser", "XMLSerializer", "XMLHttpRequest", "JSONParser"],
  "Slide 63: Sử dụng `new DOMParser()` và phương thức `parseFromString(text, \"text/xml\")`."),

S("q16", 10, 3, "Cho `xmlDoc` là một đối tượng XML Document. Làm thế nào để lấy giá trị text của thẻ `<title>` đầu tiên?",
  ["xmlDoc.getElementsByTagName(\"title\")[0].childNodes[0].nodeValue", "xmlDoc.getElement(\"title\").value", "xmlDoc.getElementsByTagName(\"title\").innerHTML", "xmlDoc.querySelector(\"title\").text"],
  "Slide 63: Truy cập XML giống như DOM: `getElementsByTagName(\"tag\")[index].childNodes[0].nodeValue`."),

// --- AJAX ---
S("q17", 10, 1, "AJAX là viết tắt của cụm từ nào?",
  ["Asynchronous JavaScript and XML", "Asynchronous Java and XML", "Advanced JavaScript and XML", "Automatic JavaScript and XML"],
  "Slide 65: AJAX = Asynchronous JavaScript and XML."),

S("q18", 10, 2, "Đối tượng cốt lõi nào của JavaScript được sử dụng để thực hiện các yêu cầu AJAX?",
  ["XMLHttpRequest", "FetchRequest", "AjaxRequest", "HttpRequest"],
  "Slide 65: Đối tượng cốt lõi là XMLHttpRequest (hoặc ActiveXObject với IE6)."),

S("q19", 10, 2, "Để khởi tạo một đối tượng AJAX trên các trình duyệt hiện đại, ta viết mã như thế nào?",
  ["var xhr = new XMLHttpRequest();", "var xhr = new ActiveXObject(\"Microsoft.XMLHTTP\");", "var xhr = new XMLHttpRequest;", "var xhr = XMLHttpRequest();"],
  "Slide 65: Khởi tạo bằng từ khóa new: var xhr = new XMLHttpRequest();"),

S("q20", 10, 2, "Phương thức `open()` của đối tượng XMLHttpRequest nhận những tham số nào?",
  ["method, url, async", "url, method, async", "method, data, async", "url, data, true"],
  "Slide 65: Cú pháp: xhr.open(method, url, async). (VD: xhr.open(\"GET\", \"data.xml\", true))."),

S("q21", 10, 2, "Trong AJAX, trạng thái `readyState == 4` có ý nghĩa gì?",
  ["Yêu cầu đã hoàn tất và dữ liệu đã sẵn sàng để xử lý", "Đang kết nối tới server", "Đã nhận được yêu cầu", "Đang xử lý yêu cầu"],
  "Slide 65: readyState = 4 nghĩa là request finished and response is ready."),

S("q22", 10, 2, "Để kiểm tra một yêu cầu AJAX đã thành công và dữ liệu đã sẵn sàng, ta kiểm tra điều kiện nào?",
  ["xhr.readyState == 4 && xhr.status == 200", "xhr.readyState == 200 && xhr.status == 4", "xhr.readyState == 3 && xhr.status == 200", "xhr.readyState == 4 && xhr.status == 404"],
  "Slide 65: Trạng thái 200 là \"OK\". Điều kiện chuẩn: readyState == 4 && status == 200."),

S("q23", 10, 3, "Thuộc tính nào của đối tượng XMLHttpRequest dùng để lấy dữ liệu phản hồi từ server dưới định dạng XML?",
  ["responseXML", "responseText", "responseJSON", "responseData"],
  "Slide 65: responseXML trả về dữ liệu dạng XML. responseText trả về dữ liệu dạng chuỗi (string)."),

// --- Đọc hiểu code & Tổng hợp ---
S("q24", 10, 3, "Cho đoạn mã: `var p = document.getElementById(\"demo\"); p.innerHTML = \"<b>Hello</b>\";`. Kết quả hiển thị trên trình duyệt là gì?",
  ["Chữ Hello in đậm", "Chuỗi ký tự \"<b>Hello</b>\"", "Lỗi cú pháp", "Chữ Hello bình thường"],
  "Slide 57: innerHTML sẽ biên dịch các thẻ HTML bên trong chuỗi. Do đó <b>Hello</b> sẽ hiển thị chữ Hello in đậm."),

S("q25", 10, 3, "Khi muốn thêm một dòng (tr) mới vào bảng (table) bằng DOM, ta cần thực hiện thao tác nào trước tiên?",
  ["Tạo thẻ tr bằng document.createElement(\"tr\")", "Gọi hàm document.appendChild(\"tr\")", "Gán giá trị innerHTML cho bảng", "Không cần làm gì, trình duyệt tự thêm"],
  "Slide 60: Bước 1 là tạo element bằng createElement(\"tr\"), sau đó tạo các td con, nối td vào tr, cuối cùng nối tr vào tbody."),

S("q26", 10, 3, "Trong đoạn mã xóa dòng của bảng: `tbody.removeChild(this.parentElement.parentElement);`. Đối tượng `this` ở đây đại diện cho gì?",
  ["Thẻ <img> (icon xóa) đang được click", "Thẻ <tr>", "Thẻ <td>", "Thẻ <tbody>"],
  "Slide 61: `this` là thẻ img đang được click. `this.parentElement` là thẻ td, `.parentElement` của td là thẻ tr. Vậy ta đang xóa thẻ tr khỏi tbody."),

S("q27", 10, 2, "Để lấy danh sách tất cả các thẻ `<p>` trong một trang HTML, ta sử dụng lệnh nào?",
  ["document.getElementsByTagName(\"p\")", "document.getElementById(\"p\")", "document.getElementsByClassName(\"p\")", "document.querySelectorAll(\"#p\")"],
  "Slide 57: getElementsByTagName(\"tag_name\") tìm tất cả các element theo tên thẻ."),

S("q28", 10, 3, "Trong kỹ thuật AJAX, nếu `xhr.status == 404`, điều này có nghĩa là gì?",
  ["Không tìm thấy trang hoặc file yêu cầu (Page not found)", "Yêu cầu đã thành công", "Server gặp lỗi nội bộ", "Kết nối bị từ chối"],
  "Slide 65: status 200: \"OK\", 404: \"Page not found\"."),

S("q29", 10, 3, "Which method is used to send an AJAX request to the server?",
  ["xhr.send()", "xhr.open()", "xhr.request()", "xhr.get()"],
  "Slide 65: Sau khi gọi open(), phải gọi send() để gửi request. Nếu là POST, có thể truyền dữ liệu vào send(string)."),

S("q30", 10, 2, "Trong mô hình DOM, nút lá (leaf node) là gì?",
  ["Là nút không có nút con nào", "Là nút gốc của cây", "Là nút có nhiều con nhất", "Là nút chứa thuộc tính"],
  "Slide 56: Nút lá không có nút con."),

S("q31", 10, 2, "Phương thức `document.write(text)` trong DOM có tác dụng gì?",
  ["Xuất dữ liệu text ra trình duyệt", "Tạo một file text mới", "Ghi dữ liệu vào cơ sở dữ liệu", "Xóa toàn bộ nội dung trang web"],
  "Slide 57: document.write(text) dùng để xuất dữ liệu ra trình duyệt."),

S("q32", 10, 3, "Cho đoạn mã: `var xhr = new XMLHttpRequest(); xhr.open(\"GET\", \"data.xml\", false);`. Tham số `false` có ý nghĩa gì?",
  ["Yêu cầu được xử lý đồng bộ (Synchronous)", "Yêu cầu được xử lý bất đồng bộ (Asynchronous)", "Không gửi yêu cầu đi", "Đóng kết nối ngay lập tức"],
  "Slide 65: Tham số async: true (asynchronous - bất đồng bộ) hoặc false (synchronous - đồng bộ)."),

S("q33", 10, 2, "Để lấy toàn bộ nội dung văn bản bên trong một thẻ HTML (bỏ qua các thẻ HTML con), ta dùng thuộc tính nào?",
  ["innerText", "innerHTML", "textContent", "outerText"],
  "Slide 57: innerText chỉ lấy phần text hiển thị, không lấy các thẻ HTML bên trong. (innerHTML lấy cả thẻ HTML)."),

S("q34", 10, 2, "Trong XML, thẻ gốc (root element) có đặc điểm gì?",
  ["Là thẻ duy nhất bao bọc toàn bộ các thẻ khác trong tài liệu XML", "Là thẻ nằm ở cuối tài liệu", "Có thể có nhiều thẻ gốc trong một file XML", "Không được phép chứa thuộc tính"],
  "Slide 62: XML document phải có duy nhất một thẻ root."),

S("q35", 10, 3, "Để thêm một thẻ `<td>` vào thẻ `<tr>` trong mô hình DOM, ta thực hiện như thế nào?",
  ["Tạo thẻ td bằng createElement(\"td\"), sau đó gọi tr.appendChild(td)", "Tạo thẻ td bằng createElement(\"td\"), sau đó gọi td.appendChild(tr)", "Tạo thẻ tr bằng createElement(\"tr\"), sau đó gọi tr.appendChild(td)", "Gán td.innerHTML = tr"],
  "Slide 60: Mối quan hệ cha-con trong DOM: tr là cha, td là con. Do đó phải gọi tr.appendChild(td)."),

S("q36", 10, 2, "Which of the following is true about XML tags?",
  ["XML tags are case-sensitive", "XML tags are not case-sensitive", "XML tags must be written in uppercase", "XML tags must be written in lowercase"],
  "Slide 62: Tên thẻ trong XML phân biệt chữ hoa và chữ thường (case-sensitive)."),

S("q37", 10, 3, "Khi dùng AJAX, nếu ta dùng `xhr.responseText` thay vì `xhr.responseXML`, kết quả nhận được sẽ là gì?",
  ["Một chuỗi văn bản chứa toàn bộ nội dung file XML", "Một đối tượng XML Document", "Một đối tượng JSON", "Một mảng các phần tử"],
  "Slide 65: responseText trả về dữ liệu dạng chuỗi (string). Muốn xử lý như XML thì phải dùng responseXML hoặc dùng DOMParser để parse chuỗi đó."),

S("q38", 10, 3, "Trong biểu thức `xhr.onreadystatechange = function() { ... }`, hàm được gán sẽ được gọi khi nào?",
  ["Mỗi khi thuộc tính readyState thay đổi giá trị", "Chỉ khi readyState == 4", "Chỉ khi status == 200", "Ngay khi hàm open() được gọi"],
  "Slide 65: onreadystatechange lưu một hàm sẽ được gọi tự động mỗi khi thuộc tính readyState thay đổi (từ 0 đến 4)."),
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_C10; }
