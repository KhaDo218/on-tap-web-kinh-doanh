// ============================================================================
// CÂU BỔ SUNG: logic code + bài tập thực tế (theo phong cách quiz của thầy)
// Soạn dựa trên slide bài giảng (TS. Trần Duy Thanh) và file Bài tập Module 1-6.
// Ưu tiên dạng: chọn đoạn code đúng, đoán kết quả chạy code, tìm lỗi, tính toán.
// Quy ước: đáp án đúng đặt ở ĐẦU mảng options; script build tự xáo vị trí.
// Các kết quả JavaScript đã được chạy thử bằng Node.js (tools/verify_bosung.js).
// ============================================================================
const C = (code) => "\n```\n" + code.trim() + "\n```";
const S = (id, chapter, difficulty, question, options, explanation) =>
  ({ id: "bs-" + id, chapter, difficulty, type: "single", question, options, correct: [0], explanation });
const M = (id, chapter, difficulty, question, options, nCorrect, explanation) =>
  ({ id: "bs-" + id, chapter, difficulty, type: "multiple", question: question + " (chọn nhiều đáp án)", options,
     correct: Array.from({ length: nCorrect }, (_, i) => i), explanation });

const QUESTIONS_BOSUNG = [
// ======================= CHƯƠNG 1: MẠNG VÀ INTERNET =======================
S("c1-01", 1, 2, "(Bài tập 7) Cho URL: https://tranduythanh.com/html-css-javascript/?id=113. Protocol, domain và parameter lần lượt là:",
  ["https | tranduythanh.com | id=113", "https:// | html-css-javascript | 113", "tranduythanh.com | html-css-javascript | id", "https | tranduythanh.com/html-css-javascript | ?id"],
  "Protocol là https; domain là tranduythanh.com; phần sau dấu ? là tham số (parameter) id=113. html-css-javascript là đường dẫn (path)."),
S("c1-02", 1, 2, "Chạy file bằng Live Server trong VS Code, trình duyệt mở địa chỉ http://127.0.0.1:5500/Exercise9/Home.html. Con số 127.0.0.1 và 5500 lần lượt là gì?",
  ["Địa chỉ IP localhost (máy của mình) và cổng (port) mà Live Server đang chạy", "Địa chỉ IP của server UEL và mã số bài tập",
   "Địa chỉ IP của nhà cung cấp hosting và dung lượng hosting", "Địa chỉ IPv6 và số lượng người truy cập tối đa"],
  "127.0.0.1 là localhost. Số sau dấu hai chấm trong URL là port; Live Server mặc định dùng cổng 5500."),
S("c1-03", 1, 2, "(Bài tập 10) Một website triển khai trên IIS có các file: Home.html, Login.html, index.html, About.html. Chưa cấu hình Default Document. Khi gõ địa chỉ website mà không ghi tên trang, IIS hiển thị trang nào?",
  ["index.html", "Home.html", "Login.html", "Báo lỗi vì không có trang chủ"],
  "IIS mặc định tìm các trang: Default.htm, Default.asp, Default.aspx, index.htm, index.html, iisstart.htm. Muốn Home.html hay Login.html làm trang chủ phải thêm vào Default Document."),
S("c1-04", 1, 2, "(Bài tập 10) Máy của bạn có IP 192.168.100.3, đã cấu hình IIS với Application alias là hello. Một máy khác trong CÙNG mạng LAN muốn xem website thì gõ địa chỉ nào?",
  ["http://192.168.100.3/hello", "http://localhost/hello", "http://127.0.0.1/hello", "http://hello/192.168.100.3"],
  "localhost/127.0.0.1 luôn trỏ về chính máy đang gõ, nên máy khác phải dùng IP thật của máy bạn (xem bằng lệnh ipconfig)."),
S("c1-05", 1, 1, "(Bài tập 10) Để xem địa chỉ IP của máy tính mình trên Windows, ta mở cửa sổ cmd và gõ lệnh nào?",
  ["ipconfig", "ping localhost", "ifconfig /all", "getip"],
  "Windows + R, gõ cmd, rồi gõ ipconfig để xem IPv4 Address."),
S("c1-06", 1, 2, "(Bài tập 10) Trong IIS, mục đích chính của việc tạo Application Pool riêng cho từng ứng dụng web là gì?",
  ["Cô lập các ứng dụng: lỗi ở Application Pool này không ảnh hưởng ứng dụng ở Application Pool khác", "Tăng dung lượng ổ cứng cho website",
   "Tự động mua tên miền cho website", "Chuyển website từ web tĩnh sang web động"],
  "Mỗi Application Pool chạy trong tiến trình riêng nên giúp cách ly và bảo mật ứng dụng."),
S("c1-07", 1, 2, "(Bài tập 5) Một cửa hàng nội thất ở Việt Nam muốn làm website bán hàng online. Nhóm tên miền nào phù hợp nhất để mua (và mua \"bao vây\")?",
  [".com, .vn, .com.vn", ".edu, .edu.vn", ".org, .int", ".net, .gov.vn"],
  ".com dành cho thương mại; .vn và .com.vn cho doanh nghiệp tại Việt Nam. .edu dành cho giáo dục, .int cho tổ chức quốc tế, .gov cho chính phủ."),

// ======================= CHƯƠNG 2: TỔNG QUAN THIẾT KẾ WEB =======================
S("c2-01", 2, 2, "Website bán hàng viết bằng PHP và dùng cơ sở dữ liệu MySQL thì thường thuê loại hosting nào?",
  ["Linux hosting", "Windows hosting bắt buộc", "MAC hosting", "Không cần hosting, chỉ cần tên miền"],
  "PHP và MySQL chạy tốt và rẻ trên Linux hosting. Nếu dùng ASP.NET và SQL Server thì chọn Windows hosting."),
S("c2-02", 2, 1, "Trong quy trình thiết lập website, bước nằm ngay SAU bước \"Thuê chỗ hosting\" là gì?",
  ["Thiết kế website", "Mua tên miền", "Xác định yêu cầu", "Duy trì, bảo trì"],
  "1. Xác định yêu cầu, 2. Mua tên miền, 3. Thuê hosting, 4. Thiết kế website, 5. Đưa vào hoạt động, 6. Duy trì bảo trì."),

// ======================= CHƯƠNG 3: HTML PHẦN 1 =======================
S("c3-01", 3, 2, "Đoạn mã sau hiển thị như thế nào?" + C(`<ol type="a" start="3">
  <li>Ghế sofa</li>
  <li>Bàn trà</li>
</ol>`),
  ["c. Ghế sofa và d. Bàn trà", "a. Ghế sofa và b. Bàn trà", "3. Ghế sofa và 4. Bàn trà", "C. Ghế sofa và D. Bàn trà"],
  "type=\"a\" đánh số bằng chữ thường; start=\"3\" bắt đầu từ ký tự thứ 3 là c."),
S("c3-02", 3, 2, "Đoạn mã <ol type=\"I\" start=\"4\"> chứa 3 thẻ <li>. Ký hiệu đánh số của 3 mục lần lượt là:",
  ["IV, V, VI", "I, II, III", "4, 5, 6", "D, E, F"],
  "type=\"I\" là số La Mã in hoa; start=\"4\" nên bắt đầu từ IV."),
S("c3-03", 3, 2, "Trình duyệt hiển thị đoạn mã sau như thế nào?" + C(`<p>Xin      chào
các      bạn</p>`),
  ["Xin chào các bạn (trên một dòng, mỗi chữ cách một khoảng trắng)", "Giữ nguyên nhiều khoảng trắng và xuống dòng như trong mã",
   "Xin chào trên dòng 1, các bạn trên dòng 2", "Báo lỗi vì có nhiều khoảng trắng liên tiếp"],
  "HTML gộp nhiều khoảng trắng và dấu xuống dòng thành 1 khoảng trắng. Muốn giữ nguyên phải dùng &nbsp;, <br/> hoặc thẻ <pre>."),
S("c3-04", 3, 2, "Muốn trang web hiển thị NGUYÊN VĂN dòng chữ <br/> (để dạy học) chứ không ngắt dòng, ta viết:",
  ["&lt;br/&gt;", "<br/>", "&gt;br/&lt;", "\"<br/>\""],
  "&lt; hiển thị dấu <, &gt; hiển thị dấu >. Viết thẳng <br/> thì trình duyệt hiểu là thẻ ngắt dòng."),
S("c3-05", 3, 3, "Cấu trúc thư mục: web/pages/sanpham.html và web/images/ghe.png. Trong sanpham.html, thẻ img nào hiển thị đúng hình?",
  ["<img src=\"../images/ghe.png\">", "<img src=\"images/ghe.png\">", "<img src=\"/pages/images/ghe.png\">", "<img src=\"..images/ghe.png\">"],
  "sanpham.html nằm trong thư mục pages nên phải lùi ra web/ bằng ../ rồi mới vào images/."),
S("c3-06", 3, 2, "File web/index.html muốn liên kết tới web/pages/lienhe.html. Thẻ a nào đúng?",
  ["<a href=\"pages/lienhe.html\">Liên hệ</a>", "<a href=\"../pages/lienhe.html\">Liên hệ</a>", "<a href=\"lienhe.html\">Liên hệ</a>", "<a src=\"pages/lienhe.html\">Liên hệ</a>"],
  "index.html và thư mục pages cùng nằm trong web/, nên chỉ cần đi vào pages/."),
S("c3-07", 3, 1, "(Bài tập 15 Beethoven) Dùng HÌNH mũi tên next.png làm liên kết sang trang SecondMovement.html. Mã nào đúng?",
  ["<a href=\"SecondMovement.html\"><img src=\"next.png\" alt=\"Trang sau\"></a>", "<img src=\"next.png\" href=\"SecondMovement.html\">",
   "<a src=\"SecondMovement.html\"><img href=\"next.png\"></a>", "<img src=\"next.png\"><a href=\"SecondMovement.html\"></a>"],
  "Đặt thẻ img nằm BÊN TRONG thẻ a thì hình trở thành liên kết. Thẻ img không có thuộc tính href."),
S("c3-08", 3, 3, "(Bài tập 19 Expo) Tạo Image Map: vùng chữ nhật trên hình campus.jpg liên kết tới Bryd.html. Mã nào đúng?",
  [C(`<img src="campus.jpg" usemap="#campus">
<map name="campus">
  <area shape="rect" coords="10,10,120,80" href="Bryd.html">
</map>`),
   C(`<img src="campus.jpg" usemap="campus">
<map id="khuvuc">
  <area shape="rect" coords="10,10,120,80" href="Bryd.html">
</map>`),
   C(`<img src="campus.jpg" usemap="#campus">
<map name="campus">
  <area shape="rect" coords="10,10,120,80" src="Bryd.html">
</map>`),
   C(`<img src="campus.jpg" map="#campus">
<map name="campus">
  <a shape="rect" coords="10,10,120,80" href="Bryd.html"></a>
</map>`)],
  "img dùng usemap=\"#tên\" trỏ tới <map name=\"tên\">; mỗi vùng là thẻ <area> có shape, coords và href."),
S("c3-09", 3, 1, "(Bài tập 23) Muốn tạo bảng chữ (text table) bằng phím Spacebar và Enter mà trình duyệt giữ nguyên khoảng trắng, xuống dòng, ta đặt nội dung trong thẻ nào?",
  ["<pre>", "<p>", "<div>", "<span>"],
  "Thẻ <pre> (preformatted) giữ nguyên khoảng trắng và dấu xuống dòng như khi gõ."),
S("c3-10", 3, 2, "Cuối trang có liên kết \"Về đầu trang\" để nhảy lên tiêu đề <h1> ở đầu cùng trang (HTML5). Mã nào đúng?",
  ["<h1 id=\"top\">RoomCraft</h1> ... <a href=\"#top\">Về đầu trang</a>", "<h1 id=\"top\">RoomCraft</h1> ... <a href=\"top\">Về đầu trang</a>",
   "<h1 class=\"top\">RoomCraft</h1> ... <a href=\".top\">Về đầu trang</a>", "<h1 id=\"#top\">RoomCraft</h1> ... <a href=\"##top\">Về đầu trang</a>"],
  "HTML5 đặt id cho đích, và href=\"#id\" (có dấu #) để nhảy tới. Giá trị id không chứa dấu #."),
S("c3-11", 3, 2, "Đoạn mã <b>Web <i>Kinh</i> Doanh</b> hiển thị như thế nào?",
  ["Cả 3 chữ in đậm, riêng chữ Kinh vừa đậm vừa nghiêng", "Chỉ chữ Kinh in nghiêng, các chữ khác bình thường",
   "Chữ Web in đậm, chữ Kinh in nghiêng, chữ Doanh bình thường", "Báo lỗi vì thẻ i nằm trong thẻ b"],
  "Mọi nội dung nằm giữa <b> và </b> đều đậm; chữ Kinh còn nằm trong <i> nên thêm nghiêng."),
S("c3-12", 3, 2, "Màu rgb(0, 128, 255) viết theo mã Hexa là:",
  ["#0080FF", "#8000FF", "#FF8000", "#00FF80"],
  "0 = 00, 128 = 80 (8×16), 255 = FF. Giữ đúng thứ tự R, G, B."),
S("c3-13", 3, 1, "(Bài tập 14) Dùng hình nen.jpg trong thư mục hinh làm HÌNH NỀN cho cả trang. Mã nào đúng?",
  ["<body background=\"hinh/nen.jpg\">", "<body bgcolor=\"hinh/nen.jpg\">", "<body src=\"hinh/nen.jpg\">", "<img background=\"hinh/nen.jpg\">"],
  "Thuộc tính background của body là hình nền; bgcolor là màu nền."),
S("c3-14", 3, 2, "Đoạn mã <img src=\"sofa.jpg\" align=\"right\" width=\"200\"> đặt trước một đoạn văn dài. Kết quả là:",
  ["Hình nằm bên phải, đoạn văn chạy bao quanh phía bên trái hình", "Hình nằm giữa trang, chữ nằm phía dưới hình",
   "Hình bị lật ngược sang phải", "Hình nằm bên trái, chữ bao quanh bên phải"],
  "align=\"right\" đẩy hình sang phải và văn bản bao quanh hình."),
S("c3-15", 3, 2, "Đoạn mã sau có lỗi gì?" + C(`<p>Giá: 100 <b>USD</p></b>`),
  ["Thẻ b mở sau nhưng lại đóng sau thẻ p (lồng sai thứ tự); trình duyệt không báo lỗi nhưng có thể hiển thị không như ý",
   "Trình duyệt báo lỗi cú pháp và không hiển thị trang", "Không có lỗi gì", "Thẻ b không được đặt trong thẻ p"],
  "Thẻ mở sau phải đóng trước: <p>... <b>USD</b></p>. HTML không báo lỗi cú pháp, chỉ hiển thị sai."),
S("c3-16", 3, 1, "Muốn khi rê chuột vào hình thì hiện chữ \"Ghế gỗ sồi\", ta thêm thuộc tính nào cho img?",
  ["title=\"Ghế gỗ sồi\"", "alt=\"Ghế gỗ sồi\"", "name=\"Ghế gỗ sồi\"", "tooltip=\"Ghế gỗ sồi\""],
  "title hiển thị tooltip khi rê chuột; alt hiển thị khi hình không tải được."),

// ======================= CHƯƠNG 4: HTML PHẦN 2 =======================
S("c4-01", 4, 2, "Bảng có 3 cột. Dòng 2 viết: <td rowspan=\"2\">X</td><td>Y</td><td>Z</td>. Dòng 3 cần bao nhiêu thẻ <td> để bảng đủ 3 cột, không bị lệch?",
  ["2", "3", "1", "4"],
  "Ô X đã kéo xuống chiếm cột 1 của dòng 3, nên dòng 3 chỉ còn 2 ô."),
S("c4-02", 4, 3, "Thời khóa biểu có 6 cột (cột Buổi + T2...T6). Buổi Sáng gồm 2 dòng: ô \"Sáng\" có rowspan=\"2\", ô \"Trống\" ở cột T4 cũng có rowspan=\"2\". Dòng THỨ HAI của buổi sáng phải viết bao nhiêu thẻ <td>?",
  ["4", "5", "6", "3"],
  "Dòng 1 buổi sáng có 6 ô. Dòng 2 bị ô Sáng (cột 1) và ô Trống (cột T4) chiếm sẵn, nên chỉ còn 4 ô cho T2, T3, T5, T6."),
S("c4-03", 4, 3, "Thời khóa biểu 6 cột (Buổi, T2, T3, T4, T5, T6). Dòng đầu buổi Chiều viết:" + C(`<tr>
  <td rowspan="2">Chiều</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  <td rowspan="2" style="background-color:#009900">Trống</td>
  <td>&nbsp;</td>
</tr>`) + "\nÔ \"Trống\" màu xanh nằm ở cột nào?",
  ["T5", "T4", "T6", "T3"],
  "Đếm từ trái: Chiều (cột 1), 3 ô trống là T2, T3, T4, ô thứ 5 là T5."),
S("c4-04", 4, 2, "Trong bảng điểm (slide 18), dòng tiêu đề thứ hai chỉ có 2 thẻ <th> là Python và Java OOP. Vì sao?",
  ["Vì #, Student ID, Student Name đã có rowspan=\"2\" chiếm chỗ, còn Score có colspan=\"2\" chừa 2 ô cho Python và Java OOP",
   "Vì thẻ th chỉ được dùng tối đa 2 lần trong một dòng", "Vì dòng thứ hai bị lỗi, cần thêm 3 thẻ th trống",
   "Vì Score có rowspan=\"2\""],
  "rowspan kéo ô xuống dòng dưới; colspan mở rộng ô sang phải. Python và Java OOP nằm dưới ô Score."),
S("c4-05", 4, 3, "Cho đoạn colgroup (slide 19) cho bảng 5 cột #, Product Id, Product Name, Unit Price, VAT:" + C(`<colgroup>
  <col span="1" style="background-color: pink;"/>
  <col span="1"/>
  <col span="1" style="background-color: orange;">
  <col span="2" style="background-color: cyan;">
</colgroup>`) + "\nTrong phần tbody, cột nào KHÔNG được tô màu?",
  ["Product Id", "#", "Product Name", "VAT"],
  "Thứ tự: # hồng, Product Id không style (bỏ qua cột), Product Name cam, Unit Price và VAT xanh cyan (span=\"2\")."),
S("c4-06", 4, 2, "Bảng 3 cột. Muốn cột 1 để nguyên, cột 2 và cột 3 nền xanh lá bằng colgroup. Mã nào đúng?",
  [C(`<colgroup>
  <col/>
  <col span="2" style="background-color:green">
</colgroup>`),
   C(`<colgroup>
  <col span="2" style="background-color:green">
</colgroup>`),
   C(`<colgroup>
  <col/>
  <col colspan="2" style="background-color:green">
</colgroup>`),
   C(`<colgroup span="2" style="background-color:green">
  <col/>
</colgroup>`)],
  "Cột không muốn định dạng vẫn phải khai báo <col/> trống để giữ chỗ; thẻ col dùng span (không phải colspan)."),
S("c4-07", 4, 2, "Trang có iframe hiển thị nội dung. Muốn bấm liên kết \"Sản phẩm\" thì sanpham.html mở BÊN TRONG iframe. Mã nào đúng?",
  ["<iframe name=\"khung\" src=\"home.html\"></iframe> ... <a href=\"sanpham.html\" target=\"khung\">Sản phẩm</a>",
   "<iframe id=\"khung\" src=\"home.html\"></iframe> ... <a href=\"sanpham.html\" target=\"_blank\">Sản phẩm</a>",
   "<iframe name=\"khung\" src=\"home.html\"></iframe> ... <a href=\"sanpham.html\" name=\"khung\">Sản phẩm</a>",
   "<iframe target=\"khung\" src=\"home.html\"></iframe> ... <a href=\"sanpham.html\" target=\"khung\">Sản phẩm</a>"],
  "Đặt name cho iframe (khung đích) và dùng target=\"tên khung\" trong thẻ a, giống cách dùng với frameset."),
S("c4-08", 4, 3, "(Bài tập 27) Chia trang: khung trên cao 100px chứa Logo.html; phần dưới chia 2 cột: trái 20% chứa Link.html, phải chứa Homepage.html (tên main). Mã nào đúng?",
  [C(`<frameset rows="100,*">
  <frame src="Logo.html">
  <frameset cols="20%,*">
    <frame src="Link.html">
    <frame src="Homepage.html" name="main">
  </frameset>
</frameset>`),
   C(`<frameset cols="100,*">
  <frame src="Logo.html">
  <frameset rows="20%,*">
    <frame src="Link.html">
    <frame src="Homepage.html" name="main">
  </frameset>
</frameset>`),
   C(`<frameset rows="100,*">
  <frame src="Logo.html">
  <frame cols="20%,*">
    <frame src="Link.html">
    <frame src="Homepage.html" name="main">
  </frame>
</frameset>`),
   C(`<body>
<frameset rows="100,*">
  <frame src="Logo.html">
  <frame src="Link.html">
  <frame src="Homepage.html" name="main">
</frameset>
</body>`)],
  "rows chia theo chiều ngang (trên/dưới), cols chia theo cột (trái/phải). Muốn chia tiếp phải lồng thêm <frameset>. Trang dùng frameset không dùng <body>."),
S("c4-09", 4, 1, "(Bài tập 32) Cho dòng chữ \"Khoa Hệ Thống Thông Tin\" chạy qua trái rồi chạy lại qua phải liên tục. Mã nào đúng?",
  ["<marquee behavior=\"alternate\">Khoa Hệ Thống Thông Tin</marquee>", "<marquee behavior=\"slide\">Khoa Hệ Thống Thông Tin</marquee>",
   "<marquee direction=\"alternate\">Khoa Hệ Thống Thông Tin</marquee>", "<marquee loop=\"1\">Khoa Hệ Thống Thông Tin</marquee>"],
  "behavior: scroll (chạy bình thường), slide (chạy 1 lần rồi dừng), alternate (chạy qua rồi chạy lại). direction chỉ nhận left, right, up, down."),
S("c4-10", 4, 2, "(Slide 22, câu 5) Thiết lập đối tượng: chạy từ trên xuống, kiểu chạy scroll, lặp liên tục, tốc độ 15. Mã nào đúng?",
  ["<marquee direction=\"down\" behavior=\"scroll\" loop=\"-1\" scrollamount=\"15\">", "<marquee direction=\"up\" behavior=\"scroll\" loop=\"1\" scrollamount=\"15\">",
   "<marquee direction=\"down\" behavior=\"slide\" loop=\"-1\" speed=\"15\">", "<marquee direction=\"bottom\" behavior=\"scroll\" loop=\"0\" scrollamount=\"15\">"],
  "Chạy xuống: direction=\"down\"; lặp liên tục: loop=\"-1\"; tốc độ: scrollamount."),
S("c4-11", 4, 2, "(Bài tập 32) Chèn bài hát nhac.mp3 làm nhạc nền, tự phát khi mở trang và phát lặp lại. Mã nào phù hợp nhất?",
  ["<audio autoplay loop><source src=\"nhac.mp3\" type=\"audio/mpeg\"></audio>", "<audio controls><source src=\"nhac.mp3\" type=\"video/mp4\"></audio>",
   "<music src=\"nhac.mp3\" autoplay></music>", "<video src=\"nhac.mp3\" loop></video>"],
  "autoplay tự phát, loop lặp lại, type của mp3 là audio/mpeg. Lưu ý: Chrome thường chặn tự phát có tiếng cho đến khi người dùng tương tác với trang."),
S("c4-12", 4, 1, "Chèn video movie.mp4 trong thư mục media, rộng 320, cao 240, có thanh điều khiển. Mã nào đúng?",
  ["<video width=\"320\" height=\"240\" controls><source src=\"media/movie.mp4\" type=\"video/mp4\"></video>",
   "<video width=\"320\" height=\"240\"><source href=\"media/movie.mp4\" type=\"mp4\"></video>",
   "<movie width=\"320\" height=\"240\" controls src=\"media/movie.mp4\"></movie>",
   "<video size=\"320x240\" controls><src=\"media/movie.mp4\"></video>"],
  "Cú pháp theo slide 23: thẻ video, thuộc tính controls, thẻ con source có src và type."),
S("c4-13", 4, 1, "(Bài tập 25, 26) Có thể đặt một thẻ <table> bên trong một ô <td> của bảng khác không?",
  ["Có, gọi là bảng lồng nhau, thường dùng để dàn trang", "Không, trình duyệt sẽ báo lỗi", "Chỉ được đặt trong <th>", "Chỉ được nếu bảng con không có viền"],
  "Bảng lồng nhau (nested table) là kỹ thuật dàn trang trong các bài Gargoyle, Dunston."),
S("c4-14", 4, 1, "Bảng có 4 cột. Dòng cuối trong tfoot chỉ có 1 ô ghi \"Designed by [John]\" kéo dài hết chiều ngang bảng. Mã nào đúng?",
  ["<tfoot><tr><td colspan=\"4\">Designed by [John]</td></tr></tfoot>", "<tfoot><tr><td rowspan=\"4\">Designed by [John]</td></tr></tfoot>",
   "<tfoot colspan=\"4\"><tr><td>Designed by [John]</td></tr></tfoot>", "<tfoot><td span=\"4\">Designed by [John]</td></tfoot>"],
  "Gộp ngang 4 cột dùng colspan=\"4\" trên ô td."),

// ======================= CHƯƠNG 5: CSS PHẦN 1 =======================
S("c5-01", 5, 2, "(Slide 28) External CSS: h3 { color: red; text-align: left; font-size: 8pt }. Internal CSS (khai báo sau link): h3 { text-align: right; font-size: 20pt }. Thẻ h3 hiển thị thế nào?",
  ["Màu đỏ, căn phải, cỡ 20pt", "Màu đỏ, căn trái, cỡ 8pt", "Màu mặc định (đen), căn phải, cỡ 20pt", "Màu đỏ, căn trái, cỡ 20pt"],
  "Các thuộc tính được gộp lại: color chỉ có ở External nên vẫn đỏ; text-align và font-size bị Internal ghi đè."),
S("c5-02", 5, 1, "Cho <style> p { color: blue } </style> và <p style=\"color: red\">Sale 50%</p>. Chữ Sale 50% màu gì?",
  ["Đỏ", "Xanh dương", "Tím (trộn 2 màu)", "Đen mặc định"],
  "Inline CSS có độ ưu tiên cao nhất."),
S("c5-03", 5, 3, "Trong head, thẻ <style> p { color: green } </style> được viết TRƯỚC thẻ <link rel=\"stylesheet\" href=\"a.css\">, file a.css có p { color: orange }. Chữ trong thẻ p màu gì?",
  ["Cam (orange), vì quy tắc khai báo sau ghi đè quy tắc trước khi cùng selector", "Xanh lá, vì Internal luôn thắng External", "Đen mặc định vì bị xung đột", "Cam xen kẽ xanh lá"],
  "Thứ tự \"Internal ưu tiên hơn External\" đúng khi link được đặt trước style (cách viết thông thường). Bản chất là cùng selector thì quy tắc đọc sau thắng."),
S("c5-04", 5, 2, "(Bài tập 33) Đoạn CSS sau tạo hiệu ứng gì?" + C(`body {
  background-image: url('hinh/camel.gif');
  background-position: right bottom;
  background-repeat: no-repeat;
  background-attachment: fixed;
}`),
  ["Một hình con lạc đà duy nhất ở góc dưới bên phải, đứng yên khi cuộn trang", "Hình lạc đà lặp lại kín cả trang",
   "Hình lạc đà ở góc trên bên trái, cuộn theo nội dung", "Hình lạc đà lặp theo hàng ngang ở cuối trang"],
  "no-repeat: không lặp; right bottom: góc dưới phải; fixed: cố định khi cuộn."),
S("c5-05", 5, 3, "(Bài tập 34) Có lỗi trong dòng: <p style=\"font-family: verdana; font-size=14pt;\">. Kết quả hiển thị là:",
  ["Chữ vẫn dùng font Verdana nhưng cỡ chữ 14pt KHÔNG được áp dụng vì viết font-size=14pt sai cú pháp", "Trình duyệt báo lỗi và không hiển thị đoạn văn",
   "Cả font Verdana và cỡ 14pt đều được áp dụng", "Cả hai thuộc tính đều bị bỏ qua"],
  "Trong CSS phải dùng dấu hai chấm property: value. Khai báo sai bị bỏ qua riêng, các khai báo đúng khác vẫn có hiệu lực."),
S("c5-06", 5, 1, "Selector h1, h2, .note { color: green } áp dụng cho những phần tử nào?",
  ["Tất cả thẻ h1, tất cả thẻ h2 và mọi phần tử có class=\"note\"", "Chỉ thẻ h2 có class note nằm trong h1", "Chỉ các phần tử có đủ cả 3 điều kiện", "Chỉ thẻ h1 và h2, bỏ qua .note"],
  "Dấu phẩy là nhóm selector (multiple selectors): mỗi selector được áp dụng riêng."),
S("c5-07", 5, 2, "CSS có p.left { text-align: left }. Thẻ <h1 class=\"left\">Tiêu đề</h1> có bị căn trái theo quy tắc này không?",
  ["Không, vì p.left chỉ áp dụng cho thẻ p có class left", "Có, vì class left áp dụng cho mọi thẻ", "Có, nhưng chỉ khi h1 nằm trong p", "Trình duyệt báo lỗi"],
  "tên_tag.tên_class gắn class với 1 thẻ cụ thể. Muốn dùng chung cho mọi thẻ thì viết .left."),
S("c5-08", 5, 1, "Cho CSS: p { color: red; /* color: blue; */ }. Chữ trong thẻ p màu gì?",
  ["Đỏ", "Xanh dương", "Đen mặc định", "Báo lỗi"],
  "Phần nằm trong /* */ là ghi chú, bị bỏ qua."),
S("c5-09", 5, 2, "(Slide 24, câu 5) Tạo style cho thẻ p: chữ đỏ, font Tahoma, căn giữa, cỡ 30pt, in nghiêng. Mã nào đúng?",
  ["p { color: red; font-family: Tahoma; text-align: center; font-size: 30pt; font-style: italic; }",
   "p { color: red; font-family: Tahoma; text-align: center; font-size: 30pt; font-weight: italic; }",
   "p { text-color: red; font: Tahoma; align: center; size: 30pt; font-style: italic; }",
   "p { color: red, font-family: Tahoma, text-align: center, font-size: 30pt, font-style: italic }"],
  "In nghiêng dùng font-style: italic (font-weight dùng cho đậm). Các khai báo ngăn cách bằng dấu chấm phẩy."),

// ======================= CHƯƠNG 6: CSS PHẦN 2 =======================
S("c6-01", 6, 3, "(Slide 29) CSS khai báo p.right { text-align: right } rồi đến p.left { text-align: left }. Thẻ <p class=\"right left\">Xin chào</p> được căn lề thế nào?",
  ["Căn trái, vì p.left khai báo SAU trong CSS", "Căn phải, vì right đứng trước trong thuộc tính class", "Căn giữa (kết hợp 2 class)", "Không căn lề vì 2 class xung đột"],
  "Hai selector có cùng độ ưu tiên thì quy tắc viết sau trong CSS thắng. Thứ tự tên class trong thuộc tính class không quan trọng."),
S("c6-02", 6, 2, "CSS: #tieude { color: red } và .xanh { color: blue }. Thẻ <h1 id=\"tieude\" class=\"xanh\">Sale</h1> màu gì?",
  ["Đỏ, vì selector id ưu tiên hơn selector class", "Xanh, vì class viết sau id trong thẻ", "Tím do trộn màu", "Đen mặc định"],
  "Độ ưu tiên: inline > id > class > tên thẻ."),
S("c6-03", 6, 2, "(Bài tập 47) Selector tbody tr:nth-child(2n+1) chọn những dòng nào của tbody?",
  ["Dòng 1, 3, 5, ... (dòng lẻ)", "Dòng 2, 4, 6, ... (dòng chẵn)", "Chỉ dòng thứ 3", "Mọi dòng trừ dòng đầu tiên"],
  "Với n = 0, 1, 2... thì 2n+1 = 1, 3, 5... Dòng chẵn là 2n."),
S("c6-04", 6, 2, "(Bài tập 47) Bảng đang có 5 dòng trong tbody, tô màu bằng tbody tr:nth-child(2n) {background-color: pink}. Dùng JavaScript thêm dòng thứ 6 vào tbody thì dòng mới có màu gì?",
  ["Hồng (pink), vì CSS tự nhận dạng dòng chẵn kể cả dòng thêm mới", "Không có màu, vì CSS chỉ áp dụng lúc tải trang", "Whitesmoke", "Vàng"],
  "nth-child tính lại theo vị trí thực tế, nên dòng mới tự động được tô theo chẵn/lẻ."),
S("c6-05", 6, 2, "Cho HTML và CSS:" + C(`<div class="menu">
  <p>A</p>
  <section><p>B</p></section>
  <p>C</p>
</div>
.menu > p { color: red; }`) + "\nNhững chữ nào màu đỏ?",
  ["A và C", "A, B và C", "Chỉ B", "Chỉ A"],
  "> là child selector, chỉ chọn con trực tiếp (cấp 1). B là cháu (nằm trong section) nên không được chọn. Nếu viết .menu p (descendant) thì cả B cũng đỏ."),
S("c6-06", 6, 2, "(Bài tập 35) CSS: ol { list-style-type: upper-roman } ol ol { list-style-type: decimal } ol ol ul { list-style-type: circle }. Các mục của danh sách <ol> nằm BÊN TRONG một <ol> khác được đánh dấu bằng gì?",
  ["1, 2, 3 (decimal)", "I, II, III (upper-roman)", "Hình tròn rỗng (circle)", "a, b, c"],
  "Selector ol ol chọn ol nằm trong ol, cụ thể hơn ol nên ghi đè thành decimal. ol ol ul áp dụng cho ul nằm trong cấp đó."),
S("c6-07", 6, 3, "(Bài tập 36) CSS theo thứ tự: a:link { color: red } a:visited { color: green } a:hover { color: hotpink } a:active { color: blue }. Rê chuột vào một liên kết ĐÃ TỪNG được truy cập thì chữ màu gì?",
  ["Hồng (hotpink), vì a:hover khai báo sau a:visited", "Xanh lá, vì liên kết đã truy cập", "Đỏ", "Xanh dương"],
  "Liên kết vừa thỏa :visited vừa thỏa :hover; cùng độ ưu tiên nên quy tắc viết sau thắng. Đây là lý do nên viết đúng thứ tự link, visited, hover, active."),
S("c6-08", 6, 2, "(Slide 33) Phần tử có height: 200px; margin: 10px; padding: 20px; border: 5px solid #000. Tổng chiều cao (total element height) là bao nhiêu?",
  ["270px", "235px", "250px", "200px"],
  "200 + padding (20+20) + border (5+5) + margin (10+10) = 270px."),
S("c6-09", 6, 2, "Khai báo padding: 5px 10px 20px; tương đương với:",
  ["top 5px, right 10px, bottom 20px, left 10px", "top 5px, right 10px, bottom 20px, left 0px", "top 5px, right 20px, bottom 10px, left 20px", "top 5px, bottom 5px, left 10px, right 20px"],
  "3 giá trị: top | left-right | bottom. Giá trị giữa dùng chung cho trái và phải."),
S("c6-10", 6, 2, "(Slide 33, câu 5) margin-top: 7px; margin-bottom: 15px; margin-left: 2px; margin-right: 8px viết gọn thành:",
  ["margin: 7px 8px 15px 2px;", "margin: 7px 15px 2px 8px;", "margin: 7px 2px 15px 8px;", "margin: 2px 8px 7px 15px;"],
  "Thứ tự 4 giá trị theo chiều kim đồng hồ: top right bottom left."),
S("c6-11", 6, 2, "(Bài tập 37) Menu xổ xuống dùng CSS:" + C(`#container li ul { position: absolute; display: none; }
#container li:hover ul { display: block; }`) + "\nHiệu ứng là gì?",
  ["Menu con ẩn sẵn, chỉ hiện ra khi rê chuột vào mục menu cha", "Menu con luôn hiện, rê chuột vào thì ẩn đi",
   "Menu con chỉ hiện khi nhấn chuột phải", "Menu cha bị ẩn khi rê chuột"],
  "display: none ẩn ul con; li:hover ul đổi thành block khi rê chuột vào li cha."),
S("c6-12", 6, 3, "(Bài tập 37) Vì sao mục menu cha được khai báo #container ul li { position: relative; } khi menu con dùng position: absolute?",
  ["Để menu con định vị tuyệt đối theo mục cha gần nhất có position khác static (ngay dưới mục cha)", "Để mục cha không bị ẩn",
   "Vì position: relative làm chữ in đậm", "Không có tác dụng gì, có thể bỏ"],
  "absolute định vị dựa theo phần tử cha gần nhất có position không phải static (slide 33)."),
S("c6-13", 6, 2, "(Bài tập 38 Bốn mùa) Bốn thẻ p cùng có CSS: width: 45%; float: left; margin-left: 2%. Kết quả bố cục là:",
  ["Các đoạn văn xếp thành 2 cột, mỗi hàng 2 đoạn nằm cạnh nhau", "Bốn đoạn xếp chồng thành 1 cột", "Bốn đoạn nằm trên cùng 1 hàng", "Các đoạn bị ẩn"],
  "float: left đẩy phần tử kế tiếp lên nằm cạnh; 2 đoạn 45% (+ margin) vừa 1 hàng, đoạn thứ 3 xuống hàng."),
S("c6-14", 6, 1, "(Bài tập 37) Quy tắc * { margin: 0; padding: 0; } có tác dụng gì?",
  ["Xóa khoảng cách margin và padding mặc định của MỌI phần tử", "Chỉ xóa margin của thẻ body", "Ẩn toàn bộ phần tử", "Không hợp lệ vì * không phải selector"],
  "* là selector chọn tất cả phần tử, thường dùng để reset CSS mặc định của trình duyệt."),
S("c6-15", 6, 2, "(Bài tập 39) Thuộc tính border-collapse: collapse đặt cho table có tác dụng gì?",
  ["Gộp viền của các ô liền kề thành một nét viền duy nhất", "Ẩn toàn bộ viền bảng", "Thu nhỏ bảng về kích thước nhỏ nhất", "Trộn tất cả các ô thành một ô"],
  "Mặc định mỗi ô có viền riêng (viền đôi); collapse gộp lại thành 1 nét."),
S("c6-16", 6, 2, "(Bài tập 42) Selector UL B { color: rgb(155,0,0) } chọn phần tử nào?",
  ["Các thẻ b nằm bên trong thẻ ul (ở bất kỳ cấp nào)", "Cả thẻ ul và thẻ b", "Thẻ ul có class B", "Thẻ b nằm ngay sau thẻ ul"],
  "Khoảng trắng là descendant selector. Tên thẻ trong CSS không phân biệt hoa thường."),
S("c6-17", 6, 3, "(Slide 33, ví dụ Box) Bấm vào nút đóng sau thì điều gì xảy ra?" + C(`<div class="borderdiv">
  <div class="alert">
    <span class="closebtn"
      onclick="this.parentElement.parentElement.style.display='none';">
      <img src="close.png"/>
    </span>
    Khoa Hệ Thống Thông Tin - UEL
  </div>
  Khoa Hệ Thống Thông Tin thuộc Trường ĐH Kinh Tế - Luật...
</div>`),
  ["Ẩn toàn bộ div.borderdiv (cả thanh tiêu đề lẫn đoạn nội dung)", "Chỉ ẩn hình close.png", "Chỉ ẩn thanh div.alert", "Chỉ ẩn thẻ span"],
  "this là span; parentElement là div.alert; parentElement.parentElement là div.borderdiv."),
S("c6-18", 6, 1, "Selector p:first-letter { font-size: 24px; color: orange } định dạng phần nào?",
  ["Chữ cái đầu tiên của mỗi đoạn p", "Dòng đầu tiên của mỗi đoạn p", "Đoạn p đầu tiên trong trang", "Từ đầu tiên của mỗi đoạn p"],
  "first-letter: chữ cái đầu; first-line: dòng đầu (slide 30)."),
S("c6-19", 6, 2, "Muốn mọi ô của bảng khi rê chuột vào thì đổi nền vàng VÀ con trỏ chuột thành hình bàn tay, CSS nào đúng?",
  ["tbody tr:hover { background-color: yellow; cursor: pointer; }", "tbody tr:active { background-color: yellow; cursor: hand-pointer; }",
   "tbody tr:visited { background: yellow; mouse: pointer; }", "tbody tr.hover { background-color: yellow; cursor: pointer; }"],
  ":hover là trạng thái rê chuột (dấu hai chấm, không phải dấu chấm); cursor: pointer hiển thị bàn tay."),

// ======================= CHƯƠNG 7: FORM =======================
S("c7-01", 7, 2, "(Slide 35) Form gửi bằng method=\"get\" tới ServerGet.html, có 2 ô name=\"txtten\" (nhập Obama) và name=\"txtemail\" (nhập Obama@gmail.com). Sau khi bấm Submit, địa chỉ trên thanh URL là:",
  ["ServerGet.html?txtten=Obama&txtemail=Obama%40gmail.com", "ServerGet.html&txtten=Obama?txtemail=Obama@gmail.com",
   "ServerGet.html/txtten/Obama/txtemail/Obama@gmail.com", "ServerGet.html (dữ liệu được gửi ngầm, không hiện trên URL)"],
  "GET ghép dữ liệu vào URL sau dấu ?, các cặp name=value nối bằng &. Ký tự @ được mã hóa thành %40."),
S("c7-02", 7, 3, "Trong form method=\"get\" có ô <input type=\"text\" id=\"ho\" value=\"Tran\"> (KHÔNG có thuộc tính name). Khi submit, giá trị Tran có được gửi đi không?",
  ["Không, vì chỉ những control có thuộc tính name mới được gửi", "Có, gửi dưới dạng ho=Tran", "Có, gửi dưới dạng id=Tran", "Trình duyệt báo lỗi và không cho submit"],
  "Slide 36 ghi name là thuộc tính quan trọng: dữ liệu gửi đi theo cặp name=value."),
S("c7-03", 7, 2, "Cho <label for=\"email\">Email</label> <input type=\"email\" id=\"txtEmail\">. Bấm vào chữ Email thì sao?",
  ["Không có gì xảy ra vì for không khớp với id của ô nhập", "Con trỏ nhảy vào ô txtEmail", "Trình duyệt báo lỗi", "Ô nhập bị ẩn đi"],
  "Thuộc tính for của label phải trùng với id của control thì bấm label mới focus vào control."),
S("c7-04", 7, 3, "Cho 2 nút radio:" + C(`<input type="radio" name="gioitinh" value="nam"> Nam
<input type="radio" name="gioiTinh" value="nu"> Nữ`) + "\nNgười dùng thao tác thế nào được?",
  ["Chọn được CẢ HAI cùng lúc, vì name khác nhau (phân biệt hoa thường) nên không cùng nhóm", "Chỉ chọn được 1 trong 2",
   "Không chọn được nút nào", "Chọn Nam thì Nữ tự động được chọn"],
  "Radio cùng nhóm khi có CÙNG name; gioitinh và gioiTinh là hai tên khác nhau."),
S("c7-05", 7, 2, "Combobox <select name=\"traicay\"> có <option value=\"saurieng\">Sầu riêng</option>. Người dùng chọn Sầu riêng rồi submit bằng GET. Dữ liệu gửi đi là:",
  ["traicay=saurieng", "traicay=Sầu riêng", "saurieng=Sầu riêng", "option=saurieng"],
  "Gửi đi theo name của select và value của option được chọn; chữ hiển thị chỉ dành cho người xem."),
S("c7-06", 7, 1, "(Bài tập 48) Nút \"Click to cancel\" xóa trắng dữ liệu trên Form mà không cần viết JavaScript. Mã nào đúng?",
  ["<input type=\"reset\" value=\"Click to cancel\">", "<input type=\"submit\" value=\"Click to cancel\">", "<input type=\"clear\" value=\"Click to cancel\">", "<input type=\"button\" value=\"Click to cancel\">"],
  "Nút reset đưa mọi control về trạng thái mặc định."),
S("c7-07", 7, 2, "(Bài tập 48) Nút \"Click to register\" khi bấm hiện hộp thông báo \"Đăng ký\" và KHÔNG gửi form. Mã nào đúng?",
  ["<input type=\"button\" value=\"Click to register\" onclick=\"alert('Đăng ký')\">", "<input type=\"button\" value=\"Click to register\" onclick=\"alert(\"Đăng ký\")\">",
   "<input type=\"reset\" value=\"Click to register\" onclick=\"alert('Đăng ký')\">", "<input type=\"button\" value=\"Click to register\" onclick=\"message('Đăng ký')\">"],
  "type=\"button\" không tự submit. Giá trị onclick đã nằm trong nháy kép nên chuỗi bên trong phải dùng nháy đơn. Hàm hiện thông báo là alert."),
S("c7-08", 7, 3, "Ô nhập <input type=\"text\" name=\"fname\" value=\"Mickey\">. Người dùng xóa đi và gõ \"Donald\", sau đó bấm nút reset. Ô nhập hiển thị gì?",
  ["Mickey", "Donald", "Rỗng", "MickeyDonald"],
  "Reset đưa control về giá trị MẶC ĐỊNH ban đầu (value trong mã), không phải xóa trắng."),
S("c7-09", 7, 1, "(Slide 37, câu 3) Thiết kế khung đăng nhập có tiêu đề nhóm \"Đăng nhập\". Mã nào đúng?",
  [C(`<fieldset>
  <legend>Đăng nhập</legend>
  Username: <input type="text" name="user"><br>
  Mật khẩu: <input type="password" name="pwd"><br>
  <input type="submit" value="Đăng nhập">
</fieldset>`),
   C(`<legend>
  <fieldset>Đăng nhập</fieldset>
  Username: <input type="text" name="user"><br>
  Mật khẩu: <input type="text" name="pwd"><br>
  <input type="submit" value="Đăng nhập">
</legend>`),
   C(`<fieldset title="Đăng nhập">
  Username: <input type="text" name="user"><br>
  Mật khẩu: <input type="password" name="pwd"><br>
  <input type="reset" value="Đăng nhập">
</fieldset>`),
   C(`<group>
  <caption>Đăng nhập</caption>
  Username: <input type="text" name="user"><br>
  Mật khẩu: <input type="password" name="pwd"><br>
  <input type="submit" value="Đăng nhập">
</group>`)],
  "fieldset nhóm các control, legend là tiêu đề nhóm nằm ngay bên trong fieldset. Ô mật khẩu dùng type=\"password\"."),
S("c7-10", 7, 2, "Trong form giỏ hàng có <input type=\"hidden\" name=\"masp\" value=\"SP01\">. Phát biểu nào đúng?",
  ["Ô này không hiển thị trên trang nhưng giá trị masp=SP01 vẫn được gửi đi khi submit", "Ô này hiển thị nhưng không cho sửa",
   "Ô này không hiển thị và cũng không được gửi đi", "Ô này chỉ hiển thị khi rê chuột"],
  "Hidden field lưu giá trị ẩn trên trang và vẫn được gửi kèm dữ liệu form."),
S("c7-11", 7, 3, "(Bài tập 52, 53) Vì sao bài Contact và Sản phẩm yêu cầu dùng method GET để chuyển dữ liệu sang một trang HTML mới?",
  ["Vì trang nhận là HTML tĩnh, chỉ đọc được dữ liệu nằm trên URL; POST cần trang xử lý phía server", "Vì GET bảo mật hơn POST",
   "Vì GET gửi được dữ liệu không giới hạn", "Vì HTML không hỗ trợ thuộc tính method=\"post\""],
  "Slide 35: chỉ sử dụng được POST khi action chỉ định đến trang xử lý trên Server. Trang HTML tĩnh đọc tham số GET bằng JavaScript (location.search)."),
S("c7-12", 7, 2, "Ô nhập nhiều dòng có sẵn nội dung mặc định \"Nhập góp ý...\". Mã nào đúng?",
  ["<textarea rows=\"4\" cols=\"30\">Nhập góp ý...</textarea>", "<textarea rows=\"4\" cols=\"30\" value=\"Nhập góp ý...\"/>",
   "<input type=\"textarea\" rows=\"4\" value=\"Nhập góp ý...\">", "<textbox lines=\"4\">Nhập góp ý...</textbox>"],
  "Nội dung mặc định của textarea nằm giữa thẻ mở và thẻ đóng; rows/cols quy định kích thước."),
S("c7-13", 7, 2, "Muốn tạo danh sách cho phép người dùng giữ Ctrl để chọn NHIỀU loại nội thất, hiển thị sẵn 4 dòng. Mã nào đúng?",
  ["<select name=\"loai\" multiple size=\"4\">...</select>", "<select name=\"loai\" size=\"4\">...</select>",
   "<select name=\"loai\" multiple=\"4\">...</select>", "<input type=\"checkbox\" size=\"4\" multiple>"],
  "Listbox = select + size (số dòng hiển thị) + multiple (chọn nhiều)."),

// ======================= CHƯƠNG 8: JAVASCRIPT PHẦN 1 =======================
S("c8-01", 8, 2, "Đoạn mã sau in ra gì?" + C(`var a = "5";
var b = 2;
document.write(a + b);`),
  ["52", "7", "NaN", "Lỗi"],
  "Toán tử + gặp chuỗi thì nối chuỗi: \"5\" + 2 = \"52\"."),
S("c8-02", 8, 3, "Giá trị của x sau đoạn mã là gì?" + C(`var x = "10" - 3 + "2";`),
  ["\"72\"", "9", "\"1032\"", "NaN"],
  "Phép trừ chuyển chuỗi thành số: \"10\" - 3 = 7; sau đó 7 + \"2\" là nối chuỗi thành \"72\"."),
S("c8-03", 8, 2, "(Slide 41 ví dụ 1) Nếu hàm cong viết innerHTML = a + b (BỎ eval) và người dùng nhập a = 3, b = 4 vào 2 ô input, kết quả hiển thị là:",
  ["34", "7", "NaN", "undefined"],
  "Giá trị lấy từ ô input (.value) luôn là chuỗi, nên + sẽ nối chuỗi. eval(a) + eval(b) chuyển về số nên ra 7."),
S("c8-04", 8, 2, "(Slide 46) Kết quả của Number(\"999\") + Number(false) là:",
  ["999", "\"999false\"", "NaN", "1000"],
  "Number(\"999\") = 999; Number(false) = 0; Number(true) = 1; Number(\"999 888\") = NaN."),
S("c8-05", 8, 2, "Biểu thức isNaN(parseInt(\"abc123\")) trả về:",
  ["true", "false", "123", "NaN"],
  "parseInt đọc từ trái sang; gặp chữ ngay đầu nên trả về NaN, isNaN(NaN) = true. Ngược lại parseInt(\"123abc\") = 123."),
S("c8-06", 8, 3, "Đoạn mã sau in ra gì?" + C(`var x = 3, s = "";
switch (x) {
  case 1: s += "A";
  default: s += "D";
  case 2: s += "B"; break;
  case 4: s += "C";
}
document.write(s);`),
  ["DB", "D", "B", "DBC"],
  "Không có case 3 nên nhảy vào default, thêm D; vì không có break nên chạy tiếp xuống case 2 thêm B rồi gặp break."),
S("c8-07", 8, 2, "(Slide 48, câu 5) Tháng 1, 2, 3 đều in \"Quý 1\". Cách viết switch nào tối ưu và đúng?",
  [C(`switch (thang) {
  case 1: case 2: case 3:
    document.write("Quý 1"); break;
}`),
   C(`switch (thang) {
  case 1, 2, 3:
    document.write("Quý 1"); break;
}`),
   C(`switch (thang) {
  case 1 || 2 || 3:
    document.write("Quý 1"); break;
}`),
   C(`switch (thang) {
  case (1..3):
    document.write("Quý 1"); break;
}`)],
  "Nhiều case cùng thực hiện một lệnh thì viết các case liền nhau không có break ở giữa."),
S("c8-08", 8, 3, "Đoạn mã sau, gt bằng bao nhiêu?" + C(`var gt = 1, i = 1;
while (i <= 4) {
  gt = gt * i;
  i += 2;
}`),
  ["3", "24", "8", "1"],
  "i = 1: gt = 1; i = 3: gt = 3; i = 5 thì dừng. Chỉ nhân 1 và 3."),
S("c8-09", 8, 2, "Đoạn mã sau, s bằng bao nhiêu?" + C(`var s = 0;
for (var i = 1; i <= 10; i++) {
  if (i % 2 != 0) continue;
  s += i;
}`),
  ["30", "25", "55", "0"],
  "continue bỏ qua số lẻ, chỉ cộng các số chẵn 2 + 4 + 6 + 8 + 10 = 30."),
S("c8-10", 8, 2, "Đoạn mã sau, s bằng bao nhiêu?" + C(`var s = 0;
for (var i = 1; i <= 10; i++) {
  if (i == 4) break;
  s += i;
}`),
  ["6", "10", "55", "4"],
  "break thoát vòng lặp khi i = 4, nên chỉ cộng 1 + 2 + 3 = 6."),
S("c8-11", 8, 2, "Đoạn mã sau in ra gì?" + C(`var i = 10;
do {
  i++;
} while (i < 5);
document.write(i);`),
  ["11", "10", "5", "Không in gì vì điều kiện sai ngay từ đầu"],
  "do...while luôn chạy thân vòng lặp ít nhất 1 lần trước khi kiểm tra điều kiện."),
S("c8-12", 8, 3, "Biến dem bằng bao nhiêu sau 2 vòng lặp lồng nhau?" + C(`var dem = 0;
for (var i = 1; i <= 3; i++) {
  for (var j = 1; j <= i; j++) {
    dem++;
  }
}`),
  ["6", "9", "3", "4"],
  "i = 1 chạy 1 lần, i = 2 chạy 2 lần, i = 3 chạy 3 lần: 1 + 2 + 3 = 6."),
S("c8-13", 8, 2, "Với d = 7, biến xl nhận giá trị gì?" + C(`var xl = d >= 8 ? "Giỏi" : d >= 6.5 ? "Khá" : "Trung bình";`),
  ["Khá", "Giỏi", "Trung bình", "Lỗi cú pháp"],
  "Toán tử 3 ngôi lồng nhau 2 cấp (slide 44 câu 5): 7 >= 8 sai, xét tiếp 7 >= 6.5 đúng nên là Khá."),
S("c8-14", 8, 2, "Cho x = 6, y = 3. Biểu thức (x > 5 && y > 5) || !(x == y) có giá trị:",
  ["true", "false", "undefined", "NaN"],
  "(true && false) = false; !(6 == 3) = true; false || true = true."),
S("c8-15", 8, 2, "Giá trị cuối cùng của x là bao nhiêu?" + C(`var x = 10;
x += 5;
x *= 2;
x %= 7;`),
  ["2", "30", "4", "0"],
  "x = 15, rồi 30, rồi 30 % 7 = 2."),
S("c8-16", 8, 3, "Sau đoạn mã, a và b bằng bao nhiêu?" + C(`var a = 5;
var b = ++a + a++;`),
  ["a = 7, b = 12", "a = 7, b = 11", "a = 6, b = 12", "a = 7, b = 13"],
  "++a tăng trước rồi dùng (a = 6, lấy 6); a++ dùng trước rồi tăng (lấy 6, a thành 7). b = 6 + 6 = 12."),
S("c8-17", 8, 2, "(Slide 47, câu 6) Điều kiện nào kiểm tra đúng năm y là năm nhuận?",
  ["(y % 4 == 0 && y % 100 != 0) || y % 400 == 0", "y % 4 == 0", "y % 4 == 0 && y % 400 == 0", "(y % 4 == 0 || y % 100 != 0) && y % 400 == 0"],
  "Năm nhuận chia hết cho 4 nhưng không chia hết cho 100, hoặc chia hết cho 400 (2000 nhuận, 1900 không nhuận)."),
S("c8-18", 8, 3, "(Bài tập 55) Giải phương trình bậc 2 với delta >= 0. Cách viết nghiệm x1 nào ĐÚNG?",
  ["x1 = (-b + Math.sqrt(delta)) / (2 * a)", "x1 = -b + Math.sqrt(delta) / 2 * a", "x1 = (-b + Math.sqrt(delta)) / 2 * a", "x1 = -b + Math.sqrt(delta) / (2 * a)"],
  "Phải đặt ngoặc cho cả tử số và mẫu số. Viết / 2 * a thì JavaScript tính (.../2)*a theo thứ tự trái sang phải."),
S("c8-19", 8, 2, "Đoạn mã sau in ra gì?" + C(`function nhanDoi(x) {
  x * 2;
}
document.write(nhanDoi(3));`),
  ["undefined", "6", "3", "Lỗi cú pháp"],
  "Hàm không có lệnh return nên trả về undefined."),
S("c8-20", 8, 2, "(Slide 45, câu 5) Hàm có thể gọi lại chính nó. Kết quả gt(4) là bao nhiêu?" + C(`function gt(n) {
  if (n <= 1) return 1;
  return n * gt(n - 1);
}`),
  ["24", "10", "4", "Lỗi vì hàm không được gọi chính nó"],
  "Đệ quy: 4 × 3 × 2 × 1 = 24."),
S("c8-21", 8, 3, "(Bài tập 54) Hàm tìm MAX lấy 2 giá trị trực tiếp từ ô input nên a = \"9\", b = \"10\" (kiểu chuỗi). Đoạn mã document.write(a > b ? a : b) in ra:",
  ["9", "10", "true", "NaN"],
  "So sánh 2 chuỗi là so sánh từng ký tự: \"9\" > \"1\" nên \"9\" > \"10\" là true. Cần đổi sang số bằng parseFloat/Number trước khi so sánh."),
S("c8-22", 8, 3, "(Slide 42, câu 2) Đoạn mã sau chạy thế nào?" + C(`<head>
  <script>
    document.getElementById("intro").innerText = "Welcome";
  </script>
</head>
<body>
  <p id="intro"></p>
</body>`),
  ["Lỗi: script trong head chạy khi thẻ p chưa được nạp nên getElementById trả về null", "Thẻ p hiển thị Welcome", "Hiển thị Welcome ở đầu trang, ngoài thẻ p", "Không lỗi nhưng chỉ chạy sau khi tải lại trang"],
  "Script đặt trong head chạy ngay khi trang mở, lúc đó body chưa được nạp. Cách sửa: đặt script cuối body (như slide 58) hoặc gọi trong hàm khi bấm nút."),
S("c8-23", 8, 1, "Đoạn mã sau in ra gì?" + C(`var Java = 1;
var java = 2;
document.write(Java + java);`),
  ["3", "2", "Lỗi vì trùng tên biến", "11"],
  "JavaScript phân biệt chữ hoa thường nên Java và java là 2 biến khác nhau."),
S("c8-24", 8, 1, "Lệnh document.write(\"Tôi nói \\\"Xin chào\\\"\"); hiển thị gì trên trang?",
  ["Tôi nói \"Xin chào\"", "Tôi nói \\\"Xin chào\\\"", "Tôi nói Xin chào", "Báo lỗi chuỗi"],
  "Dấu \\ là ký tự thoát (escaping character): \\\" hiển thị dấu nháy kép."),
S("c8-25", 8, 3, "(Bài tập 57) Hai ô thành tiền chứa \"30000\" và \"45000\". Code tính tổng viết: tong = 0; tong = tong + tt1.value; tong = tong + tt2.value; Kết quả tong là:",
  ["\"03000045000\"", "75000", "NaN", "\"75000\""],
  "0 + \"30000\" là nối chuỗi thành \"030000\", rồi nối tiếp \"45000\". Phải đổi số: tong += parseFloat(tt1.value)."),
S("c8-26", 8, 2, "(Bài tập 58) Giá trị v nhập vào các ô Activity, Pulse... chỉ được từ 0 đến 2. Điều kiện nào dùng để báo \"nhập lại\"?",
  ["if (isNaN(v) || v < 0 || v > 2)", "if (isNaN(v) && v < 0 && v > 2)", "if (v >= 0 || v <= 2)", "if (!isNaN(v) || v > 2)"],
  "Báo lỗi khi không phải số HOẶC nhỏ hơn 0 HOẶC lớn hơn 2; dùng && thì điều kiện không bao giờ đúng."),
S("c8-27", 8, 1, "Lệnh nào gán sự kiện bấm nút để gọi hàm XuLyCong() (slide 41 ví dụ 2)?",
  ["<input type=\"button\" value=\"Tính +\" onclick=\"XuLyCong()\"/>", "<input type=\"button\" value=\"Tính +\" onclick=\"XuLyCong\"/>",
   "<input type=\"button\" value=\"Tính +\" click=\"XuLyCong()\"/>", "<input type=\"button\" value=\"Tính +\" onclick=XuLyCong{}/>"],
  "Thuộc tính sự kiện là onclick, giá trị là lời gọi hàm có cặp ngoặc tròn."),

// ======================= CHƯƠNG 9: JAVASCRIPT PHẦN 2 =======================
S("c9-01", 9, 2, "Cho str = \"time and tide wait for no man\". str.indexOf(\"tide\") trả về:",
  ["9", "10", "5", "-1"],
  "Đếm từ 0: \"time \" (0-4), \"and \" (5-8), \"tide\" bắt đầu tại 9."),
S("c9-02", 9, 2, "Cho str = \"Apple, Banana, Kiwi\". str.slice(-4) trả về:",
  ["\"Kiwi\"", "\"Appl\"", "\"Banana, Kiwi\"", "\"\""],
  "Số âm đếm ngược từ cuối chuỗi; -4 lấy 4 ký tự cuối."),
S("c9-03", 9, 3, "Cho str = \"Apple, Banana, Kiwi\". str.slice(-4, -1) trả về:",
  ["\"Kiw\"", "\"Kiwi\"", "\"iwi\"", "\"wi\""],
  "Lấy từ vị trí -4 (K) đến TRƯỚC vị trí -1 (i cuối), nên được Kiw."),
S("c9-04", 9, 2, "Cho str = \"Apple, Banana, Kiwi\". str.substr(15, 4) trả về:",
  ["\"Kiwi\"", "\"a, K\"", "\"Kiw\"", "\"Banana\""],
  "substr(vị trí bắt đầu, SỐ ký tự). K nằm ở vị trí 15."),
S("c9-05", 9, 3, "(Slide 52, câu 4) Cho s = \"SV1;Tèo Mộng Mơ;teo@uel.edu.vn\". Lệnh nào lấy đúng email?",
  ["s.substring(s.lastIndexOf(\";\") + 1)", "s.substring(s.lastIndexOf(\";\"))", "s.substring(s.indexOf(\";\") + 1)", "s.substr(s.lastIndexOf(\";\"), 1)"],
  "lastIndexOf(\";\") cho vị trí dấu ; cuối cùng, +1 để bỏ dấu ; đi. Cách khác: s.split(\";\")[2]."),
S("c9-06", 9, 2, "Kết quả của \"Please visit Microsoft!\".replace(\"MICROSOFT\", \"W3Schools\") là:",
  ["\"Please visit Microsoft!\" (không thay đổi)", "\"Please visit W3Schools!\"", "\"Please visit MICROSOFT!\"", "Báo lỗi"],
  "replace phân biệt hoa thường; muốn không phân biệt dùng biểu thức /MICROSOFT/i (thêm g để thay tất cả)."),
S("c9-07", 9, 3, "(Slide 53, câu 4) Hàm chuẩn hóa chuỗi sau trả về gì khi gọi chuanHoa(\"  nGUYỄN   văn  tèo \")?" + C(`function chuanHoa(s) {
  var arr = s.trim().split(" ");
  var kq = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "") continue;
    kq.push(arr[i].charAt(0).toUpperCase() + arr[i].substring(1).toLowerCase());
  }
  return kq.join(" ");
}`),
  ["\"Nguyễn Văn Tèo\"", "\"NGUYỄN VĂN TÈO\"", "\"nGUYỄN   văn  tèo\"", "\" Nguyễn   Văn  Tèo \""],
  "trim bỏ khoảng trắng 2 đầu, split tách theo dấu cách (sinh ra phần tử rỗng ở chỗ có nhiều dấu cách, được continue bỏ qua), mỗi từ viết hoa chữ đầu rồi join lại bằng 1 khoảng trắng."),
S("c9-08", 9, 3, "\"a,b,,c\".split(\",\").length bằng bao nhiêu?",
  ["4", "3", "5", "6"],
  "Giữa 2 dấu phẩy liền nhau có 1 chuỗi rỗng: [\"a\", \"b\", \"\", \"c\"]."),
S("c9-09", 9, 1, "Lệnh nào lấy ký tự CUỐI CÙNG của chuỗi s?",
  ["s.charAt(s.length - 1)", "s.charAt(s.length)", "s.charAt(-1)", "s.lastIndexOf(s)"],
  "Vị trí bắt đầu từ 0 nên ký tự cuối ở vị trí length - 1. charAt(s.length) trả về chuỗi rỗng."),
S("c9-10", 9, 3, "Math.floor(-4.7) trả về:",
  ["-5", "-4", "4", "-4.7"],
  "floor làm tròn XUỐNG (về phía âm vô cùng), nên -4.7 thành -5. Math.ceil(-4.7) = -4."),
S("c9-11", 9, 2, "(Bài tập: tung xúc xắc) Lệnh nào sinh số nguyên ngẫu nhiên từ 1 đến 6?",
  ["Math.floor(Math.random() * 6) + 1", "Math.random(1, 6)", "Math.round(Math.random() * 6)", "Math.floor(Math.random() * 6)"],
  "Math.random() cho số trong [0, 1); nhân 6 được [0, 6); floor được 0..5; cộng 1 được 1..6. Math.round(...*6) có thể ra 0."),
S("c9-12", 9, 2, "(Slide 54) Vì sao tính sin 90 độ phải viết Math.sin(90 * Math.PI / 180)?",
  ["Vì Math.sin nhận góc theo đơn vị radian, phải đổi độ sang radian", "Vì Math.sin chỉ nhận số nhỏ hơn 1", "Để làm tròn kết quả", "Vì Math.PI bằng 180"],
  "180 độ = PI radian, nên x độ = x * PI / 180 radian."),
S("c9-13", 9, 2, "(Bài tập 58) Hiển thị ngày hiện hành theo định dạng d/m/yyyy. Lệnh nào đúng?",
  ["d.getDate() + \"/\" + (d.getMonth() + 1) + \"/\" + d.getFullYear()", "d.getDay() + \"/\" + d.getMonth() + \"/\" + d.getFullYear()",
   "d.getDate() + \"/\" + d.getMonth() + 1 + \"/\" + d.getYear()", "d.getDate() + \"/\" + d.getMonth() + \"/\" + d.getFullYear()"],
  "getDate là ngày trong tháng (getDay là thứ trong tuần); getMonth trả về 0-11 nên phải +1 và đặt trong ngoặc, nếu không sẽ thành nối chuỗi \"9\" + 1 = \"91\"."),
S("c9-14", 9, 3, "Ngày 21/10/2026 là thứ Tư. Lệnh new Date(2026, 9, 21).getDay() trả về:",
  ["3", "4", "21", "9"],
  "Tham số tháng tính từ 0 nên 9 là tháng 10. getDay trả về 0 (Chủ nhật) đến 6 (thứ Bảy); thứ Tư là 3."),
S("c9-15", 9, 2, "(Bài tập 59) Tính số ngày còn lại đến Noel: diff = noel - today (kết quả là mili giây). Lệnh nào đổi sang số ngày?",
  ["Math.ceil(diff / (1000 * 60 * 60 * 24))", "Math.ceil(diff / (60 * 60 * 24))", "Math.ceil(diff / 365)", "diff.getDate()"],
  "Date lưu thời gian theo mili giây: 1 ngày = 1000 ms × 60 giây × 60 phút × 24 giờ."),
S("c9-16", 9, 3, "Mảng a sau đoạn mã là gì?" + C(`var a = [1, 2, 3];
a.unshift(0);
a.pop();
a.push(9);
a.shift();`),
  ["[1, 2, 9]", "[0, 1, 2, 9]", "[1, 2, 3, 9]", "[2, 3, 9]"],
  "unshift(0): [0,1,2,3]; pop(): [0,1,2]; push(9): [0,1,2,9]; shift(): [1,2,9]."),
S("c9-17", 9, 3, "Sau đoạn mã, weekday.length bằng bao nhiêu?" + C(`var weekday = new Array(2);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[3] = "Wednesday";`),
  ["4", "3", "2", "Lỗi vì vượt kích thước mảng"],
  "Mảng JavaScript tự mở rộng; gán vị trí 3 thì length = 4 (vị trí 2 là empty)."),
S("c9-18", 9, 1, "[\"ghe\", \"ban\", \"tu\"].indexOf(\"giuong\") trả về:",
  ["-1", "0", "3", "undefined"],
  "indexOf trả về -1 khi không tìm thấy; thường dùng để kiểm tra phần tử đã có trong mảng chưa."),
S("c9-19", 9, 3, "Đoạn mã sau chạy thế nào?" + C(`var person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return firstName + " " + lastName;
  }
};
document.write(person.fullName());`),
  ["Lỗi vì firstName, lastName chưa được khai báo; trong phương thức phải dùng this.firstName", "In ra John Doe", "In ra undefined undefined", "In ra nội dung của hàm"],
  "Bên trong phương thức, thuộc tính của chính đối tượng phải truy cập qua this."),
S("c9-20", 9, 2, "(Slide 55, câu 5) Đối tượng sinh viên có thuộc tính namSinh. Cách khai báo phương thức tuoi trả về tuổi nào đúng?",
  ["tuoi: function() { return new Date().getFullYear() - this.namSinh; }", "tuoi = function() { return Date.getFullYear() - namSinh; }",
   "function tuoi: { return new Date().getFullYear() - this.namSinh; }", "tuoi: new Date().getFullYear() - this.namSinh()"],
  "Trong đối tượng, phương thức khai báo dạng tên: function() {...}; năm hiện tại là new Date().getFullYear()."),
S("c9-21", 9, 2, "Với var car = { type: \"Fiat\", model: \"500\" }, biểu thức nào trả về undefined?",
  ["car.Model", "car.model", "car[\"model\"]", "car.type"],
  "Tên thuộc tính phân biệt hoa thường: car.Model không tồn tại."),
S("c9-22", 9, 3, "(Bài tập 63) Kiểm tra email đơn giản: hợp lệ khi có @ không đứng đầu và có dấu chấm sau @. Với email = \"teo@uel\", biểu thức sau trả về gì?" + C(`email.indexOf("@") > 0 && email.lastIndexOf(".") > email.indexOf("@")`),
  ["false", "true", "-1", "NaN"],
  "indexOf(\"@\") = 3 > 0 đúng; nhưng không có dấu chấm nên lastIndexOf(\".\") = -1, không lớn hơn 3."),
S("c9-23", 9, 2, "Lệnh nào nối họ, tên lót, tên (ho, lot, ten) thành họ tên đầy đủ có dấu cách (slide 53, câu 3)?",
  ["ho.concat(\" \", lot, \" \", ten)", "ho.concat(lot, ten)", "ho + lot + ten", "concat(ho, lot, ten)"],
  "concat nhận nhiều đối số; phải thêm chuỗi \" \" để có khoảng trắng. Cách khác: ho + \" \" + lot + \" \" + ten."),

// ======================= CHƯƠNG 10: XML VÀ DOM =======================
S("c10-01", 10, 1, "(Slide 56) Với HTML <body><h1>DOM Lesson one</h1><p>Hello world!</p></body>, nút cha của nút văn bản \"Hello world!\" là:",
  ["<p>", "<body>", "<h1>", "<html>"],
  "Nút văn bản là con của thẻ chứa nó; h1 và p là 2 nút anh em (sibling)."),
S("c10-02", 10, 2, "(Slide 58) Kết quả của p.innerText = \"<font color='red'>Welcome</font>\"; là:",
  ["Hiển thị nguyên văn chuỗi <font color='red'>Welcome</font>", "Hiển thị chữ Welcome màu đỏ", "Hiển thị chữ Welcome màu đen", "Báo lỗi"],
  "innerText gán văn bản thuần, không phân tích thẻ HTML. Muốn ra chữ đỏ phải dùng innerHTML."),
S("c10-03", 10, 3, "Sau 2 lệnh sau, thẻ p có định dạng gì?" + C(`p.setAttribute("style", "color:red");
p.setAttribute("style", "font-size:20px");`),
  ["Chỉ cỡ chữ 20px, KHÔNG còn màu đỏ", "Chữ đỏ, cỡ 20px", "Chỉ màu đỏ", "Báo lỗi vì gán style 2 lần"],
  "setAttribute ghi đè TOÀN BỘ giá trị thuộc tính style. Muốn giữ cả hai: setAttribute(\"style\", \"color:red;font-size:20px\") hoặc p.style.fontSize = \"20px\"."),
S("c10-04", 10, 1, "(Slide 59) Thứ tự các bước thêm mới một HTML element là:",
  ["getElementById lấy holder -> createElement tạo thẻ -> thiết lập thuộc tính -> appendChild vào holder", "createElement -> appendChild -> getElementById -> thiết lập thuộc tính",
   "appendChild -> createElement -> thiết lập thuộc tính -> getElementById", "thiết lập thuộc tính -> getElementById -> createElement -> appendChild"],
  "Bước 1 lấy holder, bước 2 tạo thẻ, bước 3 gán thuộc tính, bước 4 đưa vào holder."),
S("c10-05", 10, 3, "(Slide 59) Hàm loadProducts tạo 6 thẻ li từ mảng 6 sản phẩm và appendChild vào ol. Người dùng bấm nút Load Products 2 lần thì ol có bao nhiêu li?",
  ["12", "6", "0", "36"],
  "Mỗi lần bấm lại thêm nối đuôi 6 li mới, không xóa cái cũ. Muốn tránh trùng có thể gán olHolder.innerHTML = \"\" trước vòng lặp."),
S("c10-06", 10, 2, "(Slide 60) Trong hàm addProduct, nếu QUÊN dòng tbody.appendChild(tr) thì điều gì xảy ra khi bấm Add Product?",
  ["Không có dòng nào hiện lên bảng vì tr chỉ được tạo trong bộ nhớ, chưa gắn vào cây DOM", "Dòng vẫn hiện bình thường", "Trình duyệt báo lỗi ngay khi tải trang", "Dòng hiện ra ở cuối trang, ngoài bảng"],
  "createElement chỉ tạo phần tử; phải appendChild vào một nút trên cây DOM thì mới hiển thị."),
S("c10-07", 10, 2, "(Slide 60) Trong code frmProduct.productId.value, frmProduct và productId là gì?",
  ["frmProduct là name của thẻ form, productId là id của ô input bên trong form", "frmProduct là id của bảng, productId là name của bảng",
   "Cả hai đều là tên hàm JavaScript", "frmProduct là tên file, productId là tên cột"],
  "Có thể truy cập control qua tên form rồi đến id/name của control. Cách tổng quát hơn: document.getElementById(\"productId\").value."),
S("c10-08", 10, 3, "(Slide 61) Nếu sửa dòng xóa thành tbody.removeChild(this.parentElement) (this là hình thùng rác) thì sao?",
  ["Lỗi, vì this.parentElement là td, không phải con trực tiếp của tbody", "Vẫn xóa được cả dòng", "Chỉ xóa hình thùng rác", "Xóa toàn bộ tbody"],
  "Cấu trúc tbody > tr > td > img. removeChild chỉ xóa được nút con trực tiếp, nên phải truyền tr = this.parentElement.parentElement."),
S("c10-09", 10, 2, "(Bài tập 62) Rê chuột vào dòng tr thì tô nền vàng. Code nào đúng?",
  ["tr.onmouseover = function() { this.style.backgroundColor = \"yellow\"; }", "tr.onmouseover = function() { this.style.background-color = \"yellow\"; }",
   "tr.onmouseover = function() { this.backgroundColor = \"yellow\"; }", "tr.mouseover = function() { this.style = yellow; }"],
  "Trong JavaScript, thuộc tính CSS có gạch nối được viết dạng camelCase: backgroundColor. Sự kiện là onmouseover (rời chuột: onmouseout/onmouseleave)."),
S("c10-10", 10, 3, "(Bài tập 64) Muốn xóa TẤT CẢ các dòng đang tô nền đỏ trong tbody, vì sao nên duyệt từ dòng CUỐI về dòng ĐẦU?" + C(`for (var i = tbody.rows.length - 1; i >= 0; i--) {
  if (tbody.rows[i].style.backgroundColor == "red")
    tbody.removeChild(tbody.rows[i]);
}`),
  ["Vì khi xóa một dòng, các dòng phía sau dồn lên đổi chỉ số; duyệt xuôi sẽ bỏ sót dòng liền sau dòng vừa xóa", "Vì removeChild chỉ xóa được dòng cuối",
   "Vì duyệt ngược chạy nhanh gấp đôi", "Không có lý do, duyệt xuôi cũng cho kết quả giống hệt"],
  "rows là danh sách động; duyệt ngược thì việc xóa không ảnh hưởng tới các chỉ số chưa duyệt."),
S("c10-11", 10, 2, "(Bài tập 65) Lệnh ul.insertBefore(newLi, ul.children[1]) chèn newLi vào đâu?",
  ["Vào vị trí thứ 2, ngay trước phần tử con thứ hai hiện tại", "Vào cuối danh sách", "Vào đầu danh sách", "Thay thế phần tử con thứ hai"],
  "insertBefore(nút mới, nút tham chiếu): chèn trước nút tham chiếu. children[1] là phần tử thứ hai (chỉ số từ 0)."),
S("c10-12", 10, 2, "(Bài tập 65) Lệnh nào thay nội dung li cũ (oldLi) bằng li mới (newLi) trong ul?",
  ["ul.replaceChild(newLi, oldLi)", "ul.replaceChild(oldLi, newLi)", "ul.removeChild(newLi, oldLi)", "oldLi.replaceChild(newLi)"],
  "Slide 57: replaceChild(new, old) — tham số đầu là nút MỚI, tham số sau là nút CŨ."),
S("c10-13", 10, 3, "Lệnh document.getElementsByTagName(\"p\").innerHTML = \"Hết hàng\"; có tác dụng gì?",
  ["Không đổi được thẻ p nào, vì kết quả là một danh sách các phần tử; phải dùng chỉ số [i] hoặc vòng lặp", "Đổi nội dung tất cả thẻ p thành Hết hàng",
   "Đổi nội dung thẻ p đầu tiên", "Xóa toàn bộ thẻ p"],
  "getElementsByTagName/getElementsByClassName trả về danh sách (có s trong Elements). getElementById mới trả về 1 phần tử."),
S("c10-14", 10, 2, "Cho <ul id=\"menu\"><li>Home</li><li>Sofa</li></ul>. document.querySelector(\"#menu li\").innerText trả về:",
  ["\"Home\"", "\"Sofa\"", "\"HomeSofa\"", "Danh sách 2 phần tử li"],
  "querySelector trả về phần tử ĐẦU TIÊN khớp CSS selector; querySelectorAll mới trả về tất cả."),
S("c10-15", 10, 2, "(Slide 64) XML bookstore có 3 book theo thứ tự: Everyday Italian, HTML and Javascript, AngulaJS. Lệnh sau trả về gì?" + C(`xmlDoc.getElementsByTagName("title")[1].childNodes[0].nodeValue`),
  ["\"HTML and Javascript\"", "\"Everyday Italian\"", "\"AngulaJS\"", "Đối tượng thẻ title"],
  "Chỉ số bắt đầu từ 0 nên [1] là title thứ hai; childNodes[0] là nút văn bản, nodeValue là nội dung chữ."),
S("c10-16", 10, 2, "(Slide 63) Để chuyển chuỗi txt chứa XML thành đối tượng XML Document, đoạn code nào đúng?",
  ["var parser = new DOMParser(); var xmlDoc = parser.parseFromString(txt, \"text/xml\");", "var xmlDoc = new DOMParser(txt, \"text/xml\");",
   "var xmlDoc = JSON.parse(txt);", "var parser = new DOMParser(); var xmlDoc = parser.parse(txt, \"xml\");"],
  "Tạo đối tượng DOMParser rồi gọi parseFromString(chuỗi, \"text/xml\"). JSON.parse dùng cho JSON."),
S("c10-17", 10, 2, "Với XML <book category=\"COOKING\">...</book>, lệnh nào lấy giá trị COOKING (book là phần tử đã truy xuất)?",
  ["book.getAttribute(\"category\")", "book.getElementsByTagName(\"category\")[0].nodeValue", "book.category.childNodes[0]", "book.setAttribute(\"category\")"],
  "category là XML Attribute (thuộc tính), không phải Element con. getAttribute đọc, setAttribute ghi."),
S("c10-18", 10, 2, "Đoạn XML nào HỢP LỆ (well-formed)?",
  ["<sanpham><ten>Ghế</ten><gia>500</gia></sanpham>", "<sanpham><Ten>Ghế</ten></sanpham>", "<ten>Ghế</ten><ten>Bàn</ten>", "<sanpham ma=SP01><ten>Ghế</ten></sanpham>"],
  "XML phân biệt hoa thường (Ten khác ten), phải có đúng 1 thẻ root, giá trị thuộc tính phải đặt trong dấu nháy."),
S("c10-19", 10, 2, "Trong XML muốn lưu tên cửa hàng \"Ben & Jerry\" trong thẻ <ten>, ta viết:",
  ["<ten>Ben &amp; Jerry</ten>", "<ten>Ben & Jerry</ten>", "<ten>Ben &and; Jerry</ten>", "<ten>\"Ben & Jerry\"</ten>"],
  "Ký tự & phải viết thành &amp; (tương tự &lt; &gt; &apos; &quot;)."),
S("c10-20", 10, 3, "(Slide 66) Trong hàm callAjax, xhr.send() được gọi TRƯỚC khi gán xhr.onreadystatechange. Vì sao code vẫn chạy đúng?",
  ["Vì open dùng tham số async = true: phản hồi đến bất đồng bộ, sau khi hàm đã gán xong onreadystatechange", "Vì send() tự động chờ onreadystatechange được gán",
   "Vì readyState luôn bằng 4 ngay sau send()", "Code chạy sai, không bao giờ hiển thị dữ liệu"],
  "AJAX = Asynchronous: send() không chặn chương trình, kết quả về sau. Tuy vậy nên gán onreadystatechange trước send() cho rõ ràng."),
S("c10-21", 10, 3, "Mở file DanhSachSV.html bằng cách nhấp đúp (địa chỉ bắt đầu bằng file:///) thì đoạn AJAX đọc SV.xml không hiển thị dữ liệu. Cách khắc phục phù hợp nhất là:",
  ["Chạy trang qua web server như Live Server (địa chỉ http://127.0.0.1:5500/...)", "Đổi xhr.open(\"GET\", ...) thành xhr.open(\"POST\", ...)",
   "Đổi đuôi SV.xml thành SV.html", "Xóa dòng xhr.send()"],
  "Trình duyệt chặn XMLHttpRequest đọc file cục bộ qua giao thức file:// vì lý do bảo mật. Chạy qua http (Live Server, IIS, GitHub Pages) thì AJAX hoạt động."),
S("c10-22", 10, 2, "Trong AJAX, readyState = 3 có nghĩa là gì?",
  ["Đang xử lý request (processing request)", "Request chưa được khởi tạo", "Đã thiết lập kết nối server", "Request đã xong và phản hồi sẵn sàng"],
  "0: chưa khởi tạo; 1: đã kết nối server; 2: server đã nhận request; 3: đang xử lý; 4: xong, phản hồi sẵn sàng."),
S("c10-23", 10, 2, "(Bài tập 69) Gom các title của Employee thành danh sách KHÔNG trùng để nạp vào droplist. Đoạn code nào đúng?",
  ["if (titles.indexOf(t) == -1) titles.push(t);", "if (titles.indexOf(t) != -1) titles.push(t);", "titles.push(t); titles.pop();", "if (titles[t] == -1) titles.push(t);"],
  "Chỉ thêm khi chưa có trong mảng (indexOf trả về -1)."),
S("c10-24", 10, 2, "(Bài tập 63) Nạp các ngày 1 đến 31 vào combobox cboNgay bằng vòng lặp. Code nào đúng?",
  [C(`for (var i = 1; i <= 31; i++) {
  var opt = document.createElement("option");
  opt.value = i;
  opt.innerText = i;
  cboNgay.appendChild(opt);
}`),
   C(`for (var i = 1; i < 31; i++) {
  var opt = document.createElement("option");
  opt.value = i;
  opt.innerText = i;
  cboNgay.appendChild(opt);
}`),
   C(`for (var i = 1; i <= 31; i++) {
  var opt = document.createElement("select");
  opt.value = i;
  cboNgay.appendChild(opt);
}`),
   C(`var opt = document.createElement("option");
for (var i = 1; i <= 31; i++) {
  opt.innerText = i;
}
cboNgay.appendChild(opt);`)],
  "Mỗi vòng tạo MỘT option mới rồi append. Điều kiện i < 31 thiếu ngày 31. Tạo 1 option ngoài vòng lặp thì chỉ có 1 mục (ngày 31)."),
S("c10-25", 10, 3, "(Bài tập 64) Click chuột vào dòng thì tô đỏ, click lần nữa thì bỏ tô. Code nào đúng?",
  ["tr.onclick = function() { this.style.backgroundColor = (this.style.backgroundColor == \"red\") ? \"\" : \"red\"; }",
   "tr.onclick = function() { this.style.backgroundColor = \"red\"; }",
   "tr.onclick = function() { if (this.style.backgroundColor = \"red\") this.style.backgroundColor = \"\"; }",
   "tr.ondblclick = function() { this.style.backgroundColor = \"red\"; }"],
  "Cần kiểm tra trạng thái hiện tại để đảo (toggle). Phương án dùng dấu = là phép gán (luôn đúng), không phải so sánh ==."),

// ======================= CHƯƠNG 11: JSON =======================
S("c11-01", 11, 2, "Chuỗi nào là JSON HỢP LỆ để truyền vào JSON.parse()?",
  ["{\"ma\": \"sp1\", \"gia\": 15000}", "{'ma': 'sp1', 'gia': 15000}", "{ma: \"sp1\", gia: 15000}", "{\"ma\": \"sp1\", \"gia\": 15000,}"],
  "JSON chuẩn: tên thuộc tính đặt trong nháy KÉP, chuỗi dùng nháy kép, không có dấu phẩy thừa ở cuối."),
S("c11-02", 11, 3, "(Bài tập 73) Khai báo var sanphams = [{ ma: \"sp1\", ten: \"Cocacola\", gia: 15000 }, ...] trong thẻ script (tên thuộc tính không có nháy). Phát biểu nào đúng?",
  ["Chạy được, vì đây là object literal của JavaScript; nhưng nếu là chuỗi JSON đưa vào JSON.parse thì tên thuộc tính bắt buộc có nháy kép", "Báo lỗi cú pháp vì JSON bắt buộc có nháy",
   "Chạy được nhưng không truy cập được sanphams[0].ten", "Chỉ chạy được nếu đổi thành JSON.parse(sanphams)"],
  "Viết trực tiếp trong JavaScript thì key có thể không cần nháy. Quy tắc nháy kép áp dụng cho văn bản JSON (file .json, dữ liệu từ server)."),
S("c11-03", 11, 1, "(Slide 67) Với dmMayTinh (Sanphams gồm DELL Inspiron 14NR và HP Inspiron 113), lệnh dmMayTinh.Sanphams[1].TenSP trả về:",
  ["\"HP Inspiron 113\"", "\"DELL Inspiron 14NR\"", "\"sp_2yyyy\"", "undefined"],
  "Sanphams là mảng, [1] là phần tử thứ hai."),
S("c11-04", 11, 2, "(Slide 67) Đoạn code sau tính được bao nhiêu với 2 sản phẩm SoLuong 100 và 130?" + C(`var tong = 0;
for (var i = 0; i < dmMayTinh.Sanphams.length; i++) {
  tong += dmMayTinh.Sanphams[i].SoLuong;
}`),
  ["230", "100130", "130", "2"],
  "SoLuong là số (không có nháy) nên += là phép cộng số."),
S("c11-05", 11, 3, "(Slide 67) Tổng giá trị kho = tổng (SoLuong × DonGia). Với DELL (100, 150000) và HP (130, 140000), kết quả là:",
  ["33.200.000", "290.000", "29.000.000", "33.000.000"],
  "100 × 150.000 = 15.000.000; 130 × 140.000 = 18.200.000; cộng lại 33.200.000."),
S("c11-06", 11, 3, "(Bài tập 75) Mảng Sachs có số trang: 100, 200, 90, 70, 1000, 500, 600, 400, 300, 700. Đoạn code sau cho dem bằng bao nhiêu?" + C(`var dem = 0;
for (var i = 0; i < sinhvien.Sachs.length; i++) {
  if (sinhvien.Sachs[i].Trang >= 500) dem++;
}`),
  ["4", "3", "5", "6"],
  "Các sách >= 500 trang: 1000, 500, 600, 700."),
S("c11-07", 11, 2, "(Bài tập 75) sinhvien.Sachs có 10 cuốn, cuốn cuối là Bảo Đao. Lệnh nào lấy tên cuốn sách CUỐI CÙNG?",
  ["sinhvien.Sachs[sinhvien.Sachs.length - 1].Ten", "sinhvien.Sachs[sinhvien.Sachs.length].Ten", "sinhvien.Sachs[10].Ten", "sinhvien.Sachs.last.Ten"],
  "Chỉ số mảng từ 0 đến length - 1. Sachs[10] là undefined nên .Ten sẽ báo lỗi."),
S("c11-08", 11, 2, "(Slide 67) Hàm xuLyHienThi ghép chuỗi table chứa các thẻ <table><tr><td>... rồi gán div.innerHTML = table. Nếu đổi thành div.innerText = table thì sao?",
  ["Trang hiển thị nguyên văn các thẻ <table>, <tr>, <td> dưới dạng chữ, không thành bảng", "Bảng vẫn hiển thị bình thường", "Bảng hiển thị nhưng mất viền", "Báo lỗi JavaScript"],
  "innerText không phân tích HTML."),
S("c11-09", 11, 2, "JSON.stringify({ ma: \"sp1\", gia: 15000 }) trả về:",
  ["'{\"ma\":\"sp1\",\"gia\":15000}' (một chuỗi)", "Một đối tượng có 2 thuộc tính", "'{ma:sp1,gia:15000}'", "'[\"sp1\",15000]'"],
  "stringify chuyển đối tượng thành chuỗi JSON (tên thuộc tính có nháy kép); parse làm ngược lại."),
S("c11-10", 11, 2, "(Bài tập 74) Dùng AJAX đọc file databaseSinhVien.json. Sau khi readyState == 4 và status == 200, lệnh nào lấy được dữ liệu dạng đối tượng?",
  ["var data = JSON.parse(xhr.responseText);", "var data = xhr.responseXML;", "var data = xhr.responseText.json;", "var data = JSON.stringify(xhr.responseText);"],
  "Server trả JSON dưới dạng văn bản, dùng responseText rồi JSON.parse. responseXML chỉ dùng cho XML."),
S("c11-11", 11, 3, "Đối tượng var u = { \"first-name\": \"Thanh\" }. Lệnh nào lấy đúng giá trị Thanh?",
  ["u[\"first-name\"]", "u.first-name", "u.firstname", "u.[first-name]"],
  "Tên có dấu gạch ngang không dùng được cú pháp dấu chấm (sẽ bị hiểu là u.first trừ name); phải dùng ngoặc vuông."),
S("c11-12", 11, 2, "(Bài tập 71) Hiển thị TẤT CẢ thuộc tính của đối tượng user (id, first_name, gender...) lên table mà không cần ghi tên từng thuộc tính. Vòng lặp nào phù hợp?",
  ["for (var key in user) { html += \"<tr><td>\" + key + \"</td><td>\" + user[key] + \"</td></tr>\"; }",
   "for (var i = 0; i < user.length; i++) { html += user[i]; }", "for (var key in user) { html += user.key; }", "while (user.next()) { html += user.value; }"],
  "for...in duyệt qua tên các thuộc tính của đối tượng; dùng user[key] để lấy giá trị. Đối tượng không có length; user.key tìm thuộc tính tên là \"key\"."),
S("c11-13", 11, 2, "Với var m = [[1, 2], [3, 4]], m[1][0] bằng bao nhiêu?",
  ["3", "2", "1", "4"],
  "Phần tử của JSON Array có thể là một mảng khác: m[1] = [3, 4], lấy phần tử đầu là 3."),
S("c11-14", 11, 2, "(Bài tập 70) Phát biểu nào ĐÚNG khi so sánh JSON với XML?",
  ["JSON gọn hơn (không cần thẻ đóng), hỗ trợ trực tiếp kiểu mảng và đọc nhanh bằng JSON.parse", "XML gọn hơn JSON vì có thẻ đóng mở",
   "JSON chỉ dùng được với JavaScript", "XML không dùng để trao đổi dữ liệu"],
  "Cả hai đều lưu trữ và trao đổi dữ liệu, độc lập ngôn ngữ; JSON ngắn gọn hơn và dùng phổ biến cho API."),
];

if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_BOSUNG; }
