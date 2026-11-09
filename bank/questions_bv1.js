// Ngan hang on bao ve RoomCraft - da phan loai topic + bien tap bo khung 'Thay' (2026-11-09)
const QUESTIONS_BV1 = [
 {
  "id": "bv1-a01",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Nhóm em chọn HTML, CSS, JavaScript thuần thay vì React hay Vue cho RoomCraft. Em hãy trình bày lý do và cơ chế chạy của cách làm này trong dự án thực tế.",
  "options": [
   "Nhóm chọn thuần vì phạm vi môn học chỉ cần HTML/CSS/JS, không cần build tool, deploy thẳng lên GitHub Pages miễn phí, cả nhóm đọc hiểu toàn bộ mã nguồn mà không phải học thêm lifecycle, state, JSX của framework; trang chạy bằng cách trình duyệt tải HTML, CSS, JS tĩnh và JS tự đọc JSON rồi render DOM.",
   "Nhóm chọn thuần vì React quá nặng, tải chậm trên điện thoại nên nhóm loại bỏ, còn Vue thì không hỗ trợ tiếng Việt.",
   "Nhóm chọn thuần vì trường không cho phép dùng framework trong mọi môn, và GitHub Pages không thể deploy được React.",
   "Nhóm chọn thuần vì JavaScript thuần chạy nhanh hơn React gấp nhiều lần và tiết kiệm dung lượng ảnh."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Lý do cốt lõi: (1) phạm vi môn Phát triển Web Kinh doanh yêu cầu nắm vững nền tảng HTML/CSS/JS, không đòi hỏi framework; (2) deploy tĩnh lên GitHub Pages miễn phí, không cần server Node chạy thường trực, không cần bước build; (3) cả 5 thành viên đều đọc hiểu được mã nguồn, không mất thời gian học JSX, hooks, reactivity; (4) cơ chế chạy rất rõ: trình duyệt tải file .html, file .css, file .js dạng module, JS đọc JSON qua fetch, render ra DOM bằng các hàm tạo phần tử. Các phương án còn lại sai vì React không hề nặng đến mức không dùng được trên điện thoại, GitHub Pages deploy React được nếu build sẵn, và JavaScript thuần không nhanh hơn React một cách tổng quát — tốc độ phụ thuộc cách viết chứ không phụ thuộc framework.",
  "topic": "code"
 },
 {
  "id": "bv1-a02",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "ES modules là gì và tại sao nhóm em dùng script type module thay vì nhúng nhiều thẻ script thường trong mỗi trang HTML?",
  "options": [
   "ES modules là cơ chế import/export chuẩn của JavaScript, cho phép tách file theo chức năng, mỗi file chỉ export những gì cần dùng, trình duyệt tự nạp theo đồ thị phụ thuộc, tránh ô nhiễm biến toàn cục và tránh phải nhúng hàng chục thẻ script theo đúng thứ tự.",
   "ES modules là thư viện của bên thứ ba phải tải từ CDN, nếu không có mạng thì web không chạy.",
   "ES modules chỉ dùng được khi có Node.js cài trên máy người dùng, còn trình duyệt thì không hiểu.",
   "ES modules là cách viết tắt của ECMAScript 5, dùng var và function thay cho let và const."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. ES modules (ESM) là chuẩn import/export của JavaScript hiện đại, khai báo bằng script type module trong HTML. Lợi ích thực tế với RoomCraft: mỗi trang chỉ cần một thẻ script trỏ tới file js/pages/<trang>.js, file đó import tiếp utils.js, store.js, header.js, footer.js... Trình duyệt tự phân giải đồ thị phụ thuộc, tự nạp đúng thứ tự, không cần nhúng 10-20 thẻ script theo đúng trình tự như cách cũ. Mỗi module có scope riêng nên không lo biến trùng tên giữa các file. Phương án hai sai vì ESM là chuẩn của trình duyệt, không phải thư viện CDN. Phương án ba sai vì ngược lại — ESM chạy native trên trình duyệt hiện đại, không cần Node. Phương án bốn sai vì ESM là chuẩn ES2015 trở đi, không liên quan ES5.",
  "topic": "code"
 },
 {
  "id": "bv1-a03",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Kiến trúc 3 file mỗi trang của RoomCraft gồm những file nào, mỗi file chịu trách nhiệm gì, và khi muốn sửa một nút bấm thì mở file nào?",
  "options": [
   "Mỗi trang gồm scripts/<trang>.html (khung, chữ cố định, ô nhập), scripts/css/pages/<trang>.css (giao diện riêng của trang) và scripts/js/pages/<trang>.js (xử lý sự kiện, kiểm tra form, render dữ liệu); muốn sửa nút bấm thì mở file .js của trang đó.",
   "Mỗi trang gồm file .html, file .json dữ liệu riêng và file .php xử lý; muốn sửa nút bấm thì mở file .php.",
   "Mỗi trang gồm file .html, file .css và file .sql; muốn sửa nút bấm thì mở file .sql.",
   "Mỗi trang chỉ có một file .html duy nhất chứa cả CSS và JS bên trong; muốn sửa nút bấm thì tìm trong thẻ style."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. RoomCraft áp dụng quy ước 3 file cùng tên cho mỗi trang: scripts/<trang>.html là khung xương (chữ cố định, các ô nhập, các vùng chứa), scripts/css/pages/<trang>.css là giao diện riêng của trang đó (bố cục, màu, khoảng cách), scripts/js/pages/<trang>.js là phần xử lý (gắn sự kiện, kiểm tra form, gọi service, render dữ liệu ra DOM). Quy ước này giúp tra nhanh: sửa giao diện mở file .css, sửa hành vi nút bấm hoặc kiểm tra form mở file .js, sửa chữ cố định hoặc thêm ô nhập mở file .html. Phương án hai sai vì dự án không có file .php. Phương án ba sai vì .sql chỉ là thiết kế CSDL trong database/, web không kết nối. Phương án bốn sai vì dự án tách CSS và JS ra file riêng, không nhúng inline.",
  "topic": "kt"
 },
 {
  "id": "bv1-a04",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Component header.js và footer.js được inject vào trang bằng cách nào, và tại sao nhóm em không chép cứng đoạn HTML header vào từng trang?",
  "options": [
   "Header và footer được viết trong file JS dưới dạng chuỗi HTML, mỗi trang chỉ cần một thẻ chứa (ví dụ id header-root) rồi file JS dùng innerHTML để chèn vào khi DOMContentLoaded; nhóm không chép cứng vì sửa một lần ở header.js là toàn bộ trang đổi theo, tránh lệch menu, tránh phải sửa 20 file HTML khi đổi một mục menu.",
   "Header và footer được server Node.js render sẵn rồi trả về HTML hoàn chỉnh, nên mỗi trang không cần chứa gì.",
   "Header và footer được nhúng bằng iframe trỏ tới một file header.html riêng, nên mỗi trang chỉ cần một thẻ iframe.",
   "Header và footer được CSS import vào bằng @import url(header.css), nên không cần JS."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong RoomCraft, header.js và footer.js chứa chuỗi HTML của thanh đầu trang và chân trang, kèm các hàm cập nhật số giỏ hàng (updateCartCount), số yêu thích (updateWishCount), mở popup điều khoản (showTerms). Mỗi trang HTML chỉ có một phần tử chứa, khi DOM sẵn sàng thì JS chèn innerHTML vào. Lợi ích: một nguồn sự thật duy nhất cho menu, logo, ô tìm kiếm, số giỏ — sửa một chỗ, mọi trang đồng bộ. Nếu chép cứng thì đổi một mục menu phải sửa hàng chục file HTML, dễ sót và lệch giữa các trang. Phương án hai sai vì web chạy tĩnh trên GitHub Pages, không có server render. Phương án ba sai vì dự án không dùng iframe cho header/footer. Phương án bốn sai vì CSS không chèn được HTML.",
  "topic": "code"
 },
 {
  "id": "bv1-a05",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Luồng dữ liệu từ file JSON ra giao diện của RoomCraft đi qua những bước nào, kể từ lúc người dùng mở trang Sản phẩm?",
  "options": [
   "Trình duyệt tải products.html, nạp js/pages/products.js dạng module, file này import store.js; store.js fetch data/json/products.json (lần đầu) rồi lưu vào localStorage dưới khóa rc_*, sau đó trang gọi getTable để lấy mảng sản phẩm, lọc/sắp xếp/phân trang bằng catalog-filter.js, cuối cùng render ra DOM qua product-card.js.",
   "Trình duyệt tải products.html, file HTML tự đọc JSON bằng thẻ link rel=json, rồi CSS hiển thị sản phẩm ra màn hình.",
   "Trình duyệt gửi yêu cầu tới server Node.js, server đọc MySQL rồi trả về HTML đã render sẵn cho từng sản phẩm.",
   "Trình duyệt tải products.html, file JS gọi API bên thứ ba để lấy sản phẩm, không liên quan tới thư mục data/json."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Luồng thực tế của RoomCraft: (1) người dùng mở products.html, trình duyệt tải file HTML và file js/pages/products.js dạng module; (2) file trang import store.js, lần đầu store.js fetch data/json/products.json rồi ghi vào localStorage dưới các khóa bắt đầu bằng rc_, các lần sau đọc thẳng từ localStorage để nhanh; (3) trang gọi getTable hoặc findById để lấy mảng sản phẩm; (4) catalog-filter.js áp bộ lọc, tìm kiếm không dấu, sắp xếp, phân trang; (5) product-card.js tạo thẻ sản phẩm và chèn vào DOM. Phương án hai sai vì HTML không tự đọc JSON, CSS không render dữ liệu. Phương án ba sai vì web không có server render và không kết nối MySQL khi chạy. Phương án bốn sai vì dữ liệu nằm trong repo, không gọi API bên thứ ba.",
  "topic": "data"
 },
 {
  "id": "bv1-a06",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Quy ước đặt tên file, thư mục, hàm, biến và trường dữ liệu trong RoomCraft là gì, cho ví dụ cụ thể?",
  "options": [
   "File và thư mục viết thường nối bằng gạch ngang (room-detail.html, catalog-filter.js), hàm và biến dùng camelCase (updateCartCount, formatVND), trường dữ liệu trong JSON dùng snake_case (product_type, model_3d_url) để trùng tên cột thiết kế CSDL.",
   "File và thư mục dùng camelCase (roomDetail.html), hàm và biến dùng snake_case (update_cart_count), trường dữ liệu dùng PascalCase.",
   "Tất cả mọi thứ đều dùng chữ thường không dấu gạch, ví dụ roomdetailhtml, updatecartcount, producttype.",
   "File dùng PascalCase (RoomDetail.html), hàm và biến dùng UPPER_SNAKE_CASE, trường dữ liệu dùng camelCase."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. README của nhóm ghi rõ quy ước: file và thư mục viết thường, nối bằng gạch ngang — ví dụ room-detail.html, product-card.js, catalog-filter.css; hàm và biến dùng camelCase — ví dụ updateCartCount, updateWishCount, formatVND, getParam, renderAdminPager; trường dữ liệu trong JSON dùng snake_case — ví dụ product_type, model_3d_url, condition_grade, usage_time — để khớp với tên cột trong thiết kế CSDL MySQL ở database/RoomCraft_database.sql. Quy ước này giúp cả nhóm đọc code người khác dễ, giúp tên file trùng với tên trang và tên service, giúp chuyển đổi dữ liệu sang CSDL thật sau này không phải đổi tên cột. Ba phương án còn lại đều trái với quy ước thực tế của nhóm.",
  "topic": "code"
 },
 {
  "id": "bv1-a07",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Vì sao nhóm em chọn kiến trúc nhiều trang tĩnh (MPA) thay vì SPA một trang duy nhất? Em so sánh ưu nhược điểm và giải thích lựa chọn.",
  "options": [
   "Nhóm chọn MPA vì mỗi trang là một file HTML riêng, dễ chia việc theo trang cho 5 thành viên, dễ debug (mở đúng file là thấy đúng trang), SEO tự nhiên vì mỗi trang có URL và meta riêng, deploy tĩnh đơn giản; nhược điểm là chuyển trang phải tải lại, header/footer phải inject lại, nhưng nhóm chấp nhận vì phạm vi đồ án không cần trải nghiệm SPA mượt.",
   "Nhóm chọn MPA vì SPA không thể chạy trên GitHub Pages, còn MPA thì chạy được trên mọi hosting kể cả hosting miễn phí.",
   "Nhóm chọn MPA vì SPA bắt buộc phải có server Node.js chạy thường trực, trong khi nhóm không có server.",
   "Nhóm chọn MPA vì SPA không hỗ trợ tiếng Việt và không hiển thị được ảnh sản phẩm."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. RoomCraft là MPA: mỗi trang một file HTML riêng trong scripts/, mỗi trang có URL riêng (?id=... cho chi tiết), meta riêng. Ưu điểm thực tế với nhóm 5 người: chia việc theo trang rất rõ (mỗi người phụ trách vài trang, ghi trong CAY-THU-MUC-ROOMCRAFT.md), xung đột Git ít vì ít khi hai người sửa cùng file, debug đơn giản vì mở đúng file là thấy đúng trang, SEO tự nhiên vì mỗi URL là một tài liệu độc lập. Nhược điểm: chuyển trang phải tải lại toàn bộ, header/footer phải inject lại mỗi lần, không có trạng thái chia sẻ mượt như SPA. Nhóm chấp nhận vì phạm vi đồ án không đòi hỏi trải nghiệm SPA. Phương án hai sai vì SPA vẫn deploy được trên GitHub Pages nếu build sẵn. Phương án ba sai vì SPA không bắt buộc server Node. Phương án bốn sai hoàn toàn.",
  "topic": "kt"
 },
 {
  "id": "bv1-a08",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Nếu giảng viên yêu cầu chuyển RoomCraft sang SSR (server-side rendering) thì nhóm em phải thay đổi những gì, và vì sao nhóm em không chọn SSR ngay từ đầu?",
  "options": [
   "Phải dựng server Node chạy thường trực, thay các file HTML tĩnh bằng template engine, chuyển store.js từ localStorage sang truy vấn CSDL thật, viết lại auth.js để xác thực phía server, đổi deploy từ GitHub Pages sang VPS hoặc PaaS; nhóm không chọn SSR vì phạm vi môn học, chi phí hosting và thời gian 5 thành viên không đủ để vận hành server thật.",
   "Phải đổi toàn bộ CSS sang SCSS, đổi ảnh sang WebP, đổi font sang Google Fonts; nhóm không chọn SSR vì SSR không hỗ trợ CSS.",
   "Phải bỏ hết JavaScript, chỉ dùng HTML và CSS; nhóm không chọn SSR vì SSR không cho phép JavaScript chạy.",
   "Phải chuyển sang dùng React và Next.js, không cần server; nhóm không chọn SSR vì Next.js quá đắt."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. SSR nghĩa là server render HTML hoàn chỉnh rồi trả về trình duyệt. Muốn chuyển RoomCraft sang SSR phải: (1) dựng server Node chạy thường trực (không thể dùng GitHub Pages tĩnh); (2) thay các file HTML tĩnh bằng template engine (EJS, Pug...) hoặc framework có SSR; (3) chuyển store.js từ localStorage sang truy vấn CSDL thật (MySQL theo database/RoomCraft_database.sql); (4) viết lại auth.js để xác thực phía server, không tin client; (5) đổi deploy sang VPS hoặc PaaS có tính phí. Nhóm không chọn vì phạm vi môn học chỉ cần web tĩnh, hosting miễn phí, thời gian 5 thành viên không đủ vận hành server thật và xử lý bảo mật. Ba phương án còn lại đều hiểu sai bản chất SSR.",
  "topic": "kt"
 },
 {
  "id": "bv1-a09",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Nếu mở file scripts/products.html và scripts/js/pages/products.js, em giải thích mối quan hệ giữa hai file này và vì sao không gộp chúng lại thành một file duy nhất?",
  "options": [
   "File HTML chỉ chứa khung và các phần tử có id, file JS import các module cần thiết rồi query các id đó để gắn sự kiện và render dữ liệu; nhóm không gộp vì tách giúp nhiều người cùng sửa (người sửa HTML, người sửa JS) mà không xung đột, giúp trình duyệt cache file JS riêng, giúp đọc code dễ vì mỗi file một nhiệm vụ.",
   "File HTML và file JS thực chất là một, trình duyệt tự động gộp khi tải; nhóm không gộp vì lý do thẩm mỹ.",
   "File JS chứa toàn bộ HTML, file HTML chỉ là file rỗng để chuyển hướng; nhóm không gộp vì GitHub Pages yêu cầu phải có hai file.",
   "File HTML gọi file JS qua thẻ link, file JS sinh ra toàn bộ HTML khác; nhóm không gộp vì lý do bảo mật."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong RoomCraft, products.html chứa khung: vùng chứa danh sách sản phẩm, thanh lọc, ô tìm kiếm, phân trang — mỗi vùng có id. products.js import utils.js, store.js, catalog-filter.js, product-card.js rồi query các id đó để gắn sự kiện, đọc dữ liệu, render. Tách ra có ba lợi ích thực tế: (1) nhiều người cùng sửa — người chỉnh giao diện chữ mở HTML, người chỉnh logic mở JS, ít xung đột Git; (2) trình duyệt cache file JS và CSS riêng, lần sau vào trang không phải tải lại; (3) đọc code dễ vì mỗi file một nhiệm vụ rõ ràng. Phương án hai sai vì trình duyệt không tự gộp. Phương án ba sai vì HTML không rỗng. Phương án bốn sai vì HTML nạp JS bằng script type module, không phải link, và không phải lý do bảo mật.",
  "topic": "kt"
 },
 {
  "id": "bv1-a10",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thư mục js/core, js/services, js/pages và components khác nhau ở điểm nào, và nếu muốn sửa logic tính phí giao hàng thì mở file nào, vì sao?",
  "options": [
   "js/core là nền tảng dùng chung (utils, store, auth), js/services là nghiệp vụ (products, cart, orders, shipping), js/pages là xử lý riêng từng trang, components là khối UI tái sử dụng; muốn sửa phí giao hàng mở js/services/shipping.js vì đó là nơi chứa logic tính phí, danh sách tỉnh, giới hạn COD, đặt cọc.",
   "js/core là nơi chứa ảnh, js/services là nơi chứa CSS, js/pages là nơi chứa HTML, components là nơi chứa font; muốn sửa phí giao hàng mở js/core.",
   "js/core là nơi chứa dữ liệu JSON, js/services là nơi chứa file test, js/pages là nơi chứa ảnh sản phẩm, components là nơi chứa video; muốn sửa phí giao hàng mở js/pages.",
   "Cả bốn thư mục giống nhau, chỉ khác tên; muốn sửa phí giao hàng mở bất kỳ file nào cũng được."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. RoomCraft phân tầng rõ: js/core chứa nền tảng dùng chung — utils.js (formatVND, asset, getParam, checkEmail, checkPhone, sha256), store.js (nạp JSON vào localStorage, getTable, saveTable, findById, DATA_VERSION), auth.js (đăng nhập, phân quyền, OTP mô phỏng); js/services chứa nghiệp vụ — products.js, cart.js, orders.js, shipping.js; js/pages chứa xử lý riêng từng trang, cùng tên với file HTML; components chứa khối UI tái sử dụng — header, footer, chatbot, product-card, room-card, catalog-filter, admin-sidebar. Muốn sửa phí giao hàng mở js/services/shipping.js vì đó là nơi chứa logic tính phí theo loại hàng và khu vực, danh sách tỉnh/thành, giới hạn COD, đặt cọc, kiểm tra số thẻ/SĐT/họ tên. Ba phương án còn lại mô tả sai hoàn toàn vai trò các thư mục.",
  "topic": "kt"
 },
 {
  "id": "bv1-a11",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Vì sao nhóm em đặt toàn bộ trang trong thư mục scripts/ thay vì để ở thư mục gốc repo, và file index.html ở gốc có vai trò gì?",
  "options": [
   "Đặt trong scripts/ để tách mã nguồn web khỏi dữ liệu, ảnh, công cụ, tài liệu ở thư mục gốc; file index.html ở gốc chỉ làm nhiệm vụ chuyển hướng sang scripts/index.html để khi mở repo hoặc deploy GitHub Pages từ root vẫn vào đúng trang chủ.",
   "Đặt trong scripts/ vì GitHub Pages bắt buộc mọi file HTML phải nằm trong thư mục tên scripts, nếu không sẽ báo lỗi 404.",
   "Đặt trong scripts/ vì trình duyệt chỉ cho phép chạy JavaScript trong thư mục có tên scripts, các thư mục khác bị chặn.",
   "Đặt trong scripts/ để tránh bị virus, vì thư mục gốc dễ bị tấn công hơn thư mục con."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. RoomCraft tách rõ: thư mục gốc chứa README, .env.example, .gitignore, server.js, server.py, index.html chuyển hướng; thư mục scripts/ chứa toàn bộ mã nguồn web (HTML, CSS, JS, components, libs); data/ chứa JSON; assets/ chứa ảnh, model, video, font; tools/ chứa notebook 3D; tests/ chứa kiểm thử; database/ chứa thiết kế SQL. Cách tách này giúp repo gọn, dễ phân quyền, dễ deploy. File index.html ở gốc chỉ chứa một đoạn chuyển hướng sang scripts/index.html — mục đích là khi mở repo bằng Live Server hoặc deploy GitHub Pages từ root branch main, người dùng vẫn vào đúng trang chủ mà không phải gõ thêm đường dẫn. Ba phương án còn lại đều sai về mặt kỹ thuật.",
  "topic": "kt"
 },
 {
  "id": "bv1-a12",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Nếu muốn thêm một mục menu mới vào header xuất hiện trên toàn bộ trang, em phải sửa những file nào và vì sao chỉ cần sửa ít như vậy?",
  "options": [
   "Chỉ cần sửa scripts/components/header.js (thêm mục vào chuỗi HTML của header) và có thể thêm CSS trong scripts/css/base.css mục Header; vì header được inject từ một nguồn duy nhất nên mọi trang tự động có mục mới, không phải sửa từng file HTML.",
   "Phải sửa toàn bộ file HTML của tất cả các trang trong scripts/ vì mỗi trang chép cứng header riêng.",
   "Phải sửa file server.js vì header do server render, và phải build lại toàn bộ site.",
   "Phải sửa file data/json/products.json vì menu được lưu trong dữ liệu sản phẩm."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong RoomCraft, header.js chứa chuỗi HTML của thanh đầu trang (logo, ô tìm kiếm, menu, số giỏ, số yêu thích) và được inject vào mọi trang khi DOM sẵn sàng. Muốn thêm mục menu chỉ cần mở header.js, thêm một thẻ a vào đúng vị trí trong chuỗi HTML; nếu cần style riêng thì thêm vào base.css mục Header. Mọi trang tự động có mục mới vì tất cả đều gọi cùng một header.js. Đây chính là lợi ích của component inject so với chép cứng — một nguồn sự thật duy nhất. Phương án hai sai vì dự án không chép cứng header. Phương án ba sai vì header inject phía client, không qua server. Phương án bốn sai vì menu không nằm trong products.json.",
  "topic": "code"
 },
 {
  "id": "bv1-a13",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Khi mở trang room-detail.html với tham số ?id=... trên thanh địa chỉ, dữ liệu đi qua những file nào để hiển thị đúng phòng và đúng hotspot?",
  "options": [
   "Trình duyệt tải room-detail.html, nạp js/pages/room-detail.js; file này dùng getParam trong utils.js để đọc id, gọi store.js lấy rooms.json và room_hotspots.json, dùng room-card.js để tính toạ độ hotspot và tổng tiền phòng, rồi render ảnh phòng kèm các điểm hotspot lên DOM.",
   "Trình duyệt tải room-detail.html, file HTML tự đọc tham số id bằng thuộc tính data-id, không cần JS.",
   "Trình duyệt gửi id lên server Node.js, server đọc MySQL bảng rooms rồi trả về HTML đã render sẵn.",
   "Trình duyệt tải room-detail.html, file CSS dùng @import để đọc id và hiển thị hotspot."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Luồng thực tế: (1) người dùng mở room-detail.html?id=...; (2) trình duyệt nạp js/pages/room-detail.js dạng module; (3) file này import utils.js và gọi getParam để lấy id từ URL; (4) gọi store.js để lấy dữ liệu rooms.json và room_hotspots.json (đã cache trong localStorage); (5) dùng room-card.js để tính toạ độ hotspot theo phần trăm và tổng tiền phòng; (6) render ảnh phòng cùng các điểm hotspot lên DOM, mỗi hotspot gắn sự kiện mở popup sản phẩm. Phương án hai sai vì HTML không tự đọc query string. Phương án ba sai vì web chạy tĩnh, không có server render. Phương án bốn sai vì CSS không đọc được query string.",
  "topic": "kt"
 },
 {
  "id": "bv1-a14",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Nhóm em xử lý việc nạp dữ liệu JSON lần đầu và các lần sau như thế nào, và DATA_VERSION trong store.js dùng để làm gì?",
  "options": [
   "Lần đầu mở web, store.js fetch data/json/*.json rồi ghi vào localStorage dưới các khóa rc_*; các lần sau đọc thẳng từ localStorage cho nhanh; DATA_VERSION là số phiên bản dữ liệu, khi nhóm sửa JSON và tăng số này thì store.js biết dữ liệu cũ đã lỗi thời, nạp lại bản mới nhưng vẫn giữ dữ liệu người dùng tạo trên máy.",
   "Lần đầu mở web, store.js tải toàn bộ JSON lên server Node.js; các lần sau server trả về bản cache; DATA_VERSION là số thứ tự lần deploy.",
   "Lần đầu mở web, store.js nén toàn bộ JSON thành một file zip; các lần sau giải nén; DATA_VERSION là số bản build của GitHub Actions.",
   "Lần đầu mở web, store.js ghi JSON vào file trên ổ cứng máy người dùng; các lần sau đọc từ ổ cứng; DATA_VERSION là số hiệu phiên bản trình duyệt."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. RoomCraft dùng localStorage làm kho dữ liệu phía client. Lần đầu mở web, store.js fetch từng file trong data/json/ (products.json, rooms.json, room_hotspots.json, categories.json, styles.json, reviews.json, orders.json, users.json, used_products.json, coupons.json, shipping_methods.json, wards.json, chatbot_faqs.json, roles.json) rồi ghi vào localStorage dưới các khóa bắt đầu bằng rc_. Các lần sau đọc thẳng từ localStorage, không fetch lại, giúp trang mở nhanh. DATA_VERSION là số phiên bản dữ liệu: khi nhóm sửa JSON và tăng số này, store.js biết dữ liệu cũ đã lỗi thời, nạp lại bản mới nhưng vẫn giữ dữ liệu người dùng tạo trên máy (giỏ hàng, đơn hàng, chỉnh sửa của admin). Ba phương án còn lại mô tả sai cơ chế.",
  "topic": "data"
 },
 {
  "id": "bv1-a15",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Vì sao nhóm em tách catalog-filter.js thành component dùng chung cho cả trang Sản phẩm và trang Đồ cũ, thay vì viết riêng hai bộ lọc?",
  "options": [
   "Vì hai trang có nhu cầu lọc giống nhau (giá, danh mục, chất liệu, màu, thương hiệu, còn hàng, tìm kiếm, phân trang) nên tách thành một component dùng chung giúp sửa một lần cả hai trang cùng đổi, tránh lệch hành vi, tránh trùng lặp mã, dễ test; trang Đồ cũ chỉ cần thêm bộ lọc tình trạng bên ngoài.",
   "Vì hai trang dùng chung một file HTML, không thể tách rời; nếu tách thì trang Đồ cũ sẽ không chạy.",
   "Vì catalog-filter.js là thư viện bên thứ ba bắt buộc phải dùng chung, không được viết lại.",
   "Vì GitHub Pages giới hạn số file JS, phải gộp để giảm số file."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trang Sản phẩm và trang Đồ cũ đều cần: lọc theo mức giá, danh mục, chất liệu, màu, thương hiệu, tình trạng còn hàng, ô tìm kiếm không dấu, sắp xếp, phân trang, đồng bộ tham số URL. Viết hai bộ lọc riêng sẽ trùng lặp hàng trăm dòng, dễ lệch hành vi (ví dụ trang này lọc theo giá khác trang kia), sửa một chỗ phải nhớ sửa chỗ còn lại. Tách thành catalog-filter.js dùng chung: sửa một lần cả hai trang cùng đổi, hành vi đồng nhất, dễ test. Trang Đồ cũ chỉ cần thêm bộ lọc tình trạng (Like New, Good, Fair) bên ngoài component chung. Phương án hai sai vì hai trang là hai file HTML riêng. Phương án ba sai vì catalog-filter.js do nhóm tự viết. Phương án bốn sai vì GitHub Pages không giới hạn số file JS.",
  "topic": "code"
 },
 {
  "id": "bv1-a16",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống một thành viên sửa file data/json/products.json (thêm sản phẩm mới) nhưng quên tăng DATA_VERSION trong store.js, điều gì xảy ra trên máy các thành viên khác và trên máy giảng viên, và nhóm em khắc phục thế nào?",
  "options": [
   "Trên máy đã từng mở web, store.js thấy DATA_VERSION không đổi nên không nạp lại, người dùng vẫn thấy dữ liệu cũ trong localStorage, sản phẩm mới không xuất hiện; trên máy chưa từng mở thì vẫn thấy dữ liệu mới; nhóm khắc phục bằng cách luôn tăng DATA_VERSION mỗi khi sửa JSON, hoặc hướng dẫn chạy resetData() trong Console để xoá localStorage và nạp lại.",
   "Trên mọi máy, store.js tự động phát hiện file JSON thay đổi bằng cách so sánh hash MD5 và nạp lại ngay, nên không có vấn đề gì xảy ra.",
   "Trên mọi máy, web sẽ báo lỗi 500 và không mở được trang nào cho tới khi tăng DATA_VERSION.",
   "Trên mọi máy, sản phẩm mới tự động xuất hiện vì store.js luôn fetch lại JSON mỗi lần mở trang, không dùng cache."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Đây là lỗi rất thực tế của kiến trúc localStorage. store.js chỉ nạp lại JSON khi DATA_VERSION thay đổi. Nếu thành viên sửa products.json mà quên tăng DATA_VERSION: máy đã từng mở web vẫn đọc bản cũ trong localStorage, không thấy sản phẩm mới; máy chưa từng mở thì nạp bản mới nên thấy bình thường — dẫn tới hiện tượng số liệu khác nhau giữa các máy, rất khó debug. Cách khắc phục: (1) quy ước bắt buộc — sửa JSON thì tăng DATA_VERSION; (2) hướng dẫn chạy resetData() trong Console trình duyệt để xoá localStorage và nạp lại; (3) khi review Pull Request, kiểm tra xem có tăng DATA_VERSION chưa. Phương án hai sai vì store.js không so sánh hash. Phương án ba sai vì không có lỗi 500. Phương án bốn sai vì store.js có cache.",
  "topic": "data"
 },
 {
  "id": "bv1-a17",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống cần thêm một trang mới (ví dụ trang blog) vào RoomCraft, em sẽ tạo những file nào, đặt ở đâu, và phải sửa thêm file nào để trang mới có header/footer và xuất hiện trên menu?",
  "options": [
   "Tạo scripts/blog.html, scripts/css/pages/blog.css, scripts/js/pages/blog.js theo đúng quy ước 3 file; trong blog.html thêm vùng chứa header/footer và thẻ script type module trỏ tới blog.js; trong blog.js import header.js và footer.js để inject; cuối cùng sửa components/header.js để thêm mục Blog vào menu.",
   "Chỉ cần tạo scripts/blog.html chứa toàn bộ HTML, CSS, JS bên trong; không cần sửa file nào khác vì header/footer tự động xuất hiện.",
   "Tạo scripts/blog.html và thêm một dòng vào server.js để server render trang blog; không cần tạo file CSS hay JS riêng.",
   "Tạo data/json/blog.json và thêm vào products.json; trang blog sẽ tự sinh ra từ dữ liệu."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Quy ước 3 file của RoomCraft áp dụng cho mọi trang: scripts/blog.html (khung, chữ cố định), scripts/css/pages/blog.css (giao diện riêng), scripts/js/pages/blog.js (xử lý). Trong blog.html cần có vùng chứa cho header và footer (ví dụ id header-root, footer-root) và thẻ script type module trỏ tới js/pages/blog.js. Trong blog.js import header.js và footer.js để inject, import utils.js/store.js nếu cần dữ liệu. Cuối cùng mở components/header.js thêm một thẻ a trỏ tới blog.html vào đúng vị trí menu — vì header dùng chung nên mọi trang đều thấy mục Blog mới. Phương án hai sai vì header/footer không tự xuất hiện nếu không inject. Phương án ba sai vì web chạy tĩnh, không có server render. Phương án bốn sai vì blog không tự sinh từ products.json.",
  "topic": "kt"
 },
 {
  "id": "bv1-a18",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống mở thẳng file scripts/index.html bằng file:// (double-click) thay vì qua Live Server, trang sẽ gặp lỗi gì, vì sao, và nhóm em đã ghi chú điều này ở đâu?",
  "options": [
   "Trình duyệt chặn fetch JSON và chặn nạp model 3D vì chính sách CORS áp dụng cho giao thức file://, nên trang trắng hoặc thiếu dữ liệu; nhóm đã ghi rõ trong README mục Cài đặt và chạy rằng phải mở qua máy chủ web (Live Server) chứ không mở thẳng file.",
   "Trình duyệt tự chuyển sang chế độ offline và hiển thị dữ liệu mẫu, nên trang vẫn chạy bình thường; nhóm không cần ghi chú gì.",
   "Trình duyệt tự động tải toàn bộ JSON từ GitHub về máy, nên trang chạy nhanh hơn Live Server; nhóm khuyến khích mở bằng file://.",
   "Trình duyệt báo lỗi cú pháp JavaScript vì ES modules không hợp lệ khi mở bằng file://; nhóm đã sửa bằng cách bỏ ES modules."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Khi mở file://, trình duyệt áp chính sách bảo mật nghiêm ngặt: fetch tới file JSON bị chặn (CORS), nạp model 3D .glb bị chặn, một số API như localStorage có thể bị hạn chế tuỳ trình duyệt. Kết quả là trang trắng hoặc thiếu dữ liệu, khó hiểu cho người mới. Nhóm đã ghi rõ trong README mục Cài đặt và chạy: phải mở qua máy chủ web (Live Server tại http://127.0.0.1:5500) chứ không mở thẳng file. Đây cũng là lý do khi deploy phải dùng GitHub Pages (giao thức https) chứ không phải file://. Phương án hai sai vì không có chế độ offline tự động. Phương án ba sai vì file:// không tải được từ GitHub. Phương án bốn sai vì ES modules vẫn hợp lệ, chỉ bị chặn fetch."
 },
 {
  "id": "bv1-a19",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống cần chuyển RoomCraft sang dùng React mà vẫn giữ nguyên dữ liệu JSON và giao diện hiện tại, nhóm em sẽ phải làm những bước nào và khó khăn lớn nhất là gì?",
  "options": [
   "Phải tạo dự án React (Vite hoặc CRA), chuyển từng trang HTML thành component, chuyển các hàm render DOM thủ công sang JSX, chuyển store.js sang context hoặc thư viện state, chuyển header/footer thành component, thêm bước build và đổi deploy; khó khăn lớn nhất là viết lại toàn bộ logic render và xử lý sự kiện, đồng thời cả nhóm phải học React trong thời gian ngắn.",
   "Chỉ cần thêm thẻ script src=react.js vào mỗi file HTML là xong, không phải sửa gì thêm; khó khăn lớn nhất là tải React chậm.",
   "Chỉ cần đổi đuôi file .html thành .jsx là xong; khó khăn lớn nhất là đổi tên file.",
   "Chỉ cần thêm một dòng import React trong mỗi file JS hiện tại là xong; khó khăn lớn nhất là cài npm."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Chuyển sang React là viết lại gần như toàn bộ frontend: (1) tạo dự án React bằng Vite hoặc CRA; (2) chuyển từng trang HTML thành component (ProductsPage, RoomDetailPage...); (3) chuyển các hàm render DOM thủ công (document.createElement, innerHTML) sang JSX; (4) chuyển store.js từ localStorage trực tiếp sang context hoặc thư viện state (Redux, Zustand); (5) chuyển header/footer từ inject innerHTML sang component; (6) thêm bước build (npm run build) và đổi deploy từ GitHub Pages tĩnh sang deploy bản build. Khó khăn lớn nhất không phải kỹ thuật mà là thời gian: cả nhóm phải học React, viết lại hàng chục trang, chạy lại toàn bộ kiểm thử Playwright. Ba phương án còn lại đều đánh giá quá thấp công sức chuyển đổi.",
  "topic": "kt"
 },
 {
  "id": "bv1-a20",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống mở trang products.html và thấy danh sách sản phẩm trống, em sẽ kiểm tra theo thứ tự nào để tìm ra nguyên nhân, dựa trên kiến trúc 3 file và luồng dữ liệu của RoomCraft?",
  "options": [
   "Kiểm tra theo thứ tự: (1) Console trình duyệt xem có lỗi fetch JSON hay lỗi import module không; (2) tab Network xem products.json có tải được không, mã trạng thái bao nhiêu; (3) Application xem localStorage có khóa rc_products không, DATA_VERSION có khớp không; (4) mở products.js xem có gọi đúng getTable và render đúng id không; (5) mở products.html xem vùng chứa có đúng id không.",
   "Kiểm tra theo thứ tự: (1) đổi sang trình duyệt khác; (2) đổi sang máy khác; (3) đổi sang mạng khác; (4) đổi sang hệ điều hành khác; (5) cài lại Windows.",
   "Kiểm tra theo thứ tự: (1) mở file CSS xem có lỗi cú pháp; (2) đổi font; (3) đổi màu nền; (4) đổi kích thước ảnh; (5) đổi tốc độ mạng.",
   "Kiểm tra theo thứ tự: (1) mở server.js xem có chạy không; (2) mở MySQL xem có kết nối không; (3) mở phpMyAdmin; (4) restart Apache; (5) cài lại XAMPP."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Với kiến trúc 3 file và luồng dữ liệu JSON qua store.js, thứ tự debug hợp lý là: (1) Console trình duyệt — nếu có lỗi fetch JSON hoặc lỗi import module thì hiện ngay ở đây; (2) tab Network — xem products.json có tải được không, mã trạng thái 200 hay 404, có bị CORS chặn không; (3) tab Application — xem localStorage có khóa rc_products không, DATA_VERSION có khớp với file JSON không (nếu lệch thì store.js chưa nạp lại); (4) mở js/pages/products.js — xem có gọi đúng getTable, có render vào đúng id không; (5) mở products.html — xem vùng chứa có đúng id mà JS query không. Ba phương án còn lại đều là thao tác không liên quan tới nguyên nhân thực tế.",
  "topic": "kt"
 },
 {
  "id": "bv1-a21",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống cần giải thích trước hội đồng vì sao không dùng Next.js hay Nuxt.js cho RoomCraft, em sẽ trả lời thế nào, dựa trên đặc điểm thực tế của dự án?",
  "options": [
   "Vì Next.js và Nuxt.js đều cần bước build, cần Node chạy thường trực nếu dùng SSR hoặc API route, cần học framework và hệ sinh thái đi kèm; RoomCraft chỉ cần web tĩnh đọc JSON, deploy GitHub Pages miễn phí, cả nhóm đọc hiểu mã nguồn thuần, nên dùng Next/Nuxt là over-engineering so với phạm vi môn học.",
   "Vì Next.js và Nuxt.js không hỗ trợ tiếng Việt, không hiển thị được ảnh sản phẩm, không chạy được trên trình duyệt hiện đại.",
   "Vì Next.js và Nuxt.js bắt buộc phải có cơ sở dữ liệu MySQL, trong khi nhóm không có MySQL.",
   "Vì Next.js và Nuxt.js là phần mềm độc quyền phải mua bản quyền, nhóm không có kinh phí."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Next.js và Nuxt.js là framework mạnh nhưng đi kèm nhiều thứ: bước build (npm run build), Node chạy thường trực nếu dùng SSR hoặc API route, hệ sinh thái routing, data fetching, image optimization phải học. RoomCraft chỉ cần: HTML/CSS/JS tĩnh, đọc JSON, deploy GitHub Pages miễn phí, cả nhóm đọc hiểu mã nguồn. Dùng Next/Nuxt là over-engineering — thêm phức tạp mà không giải quyết vấn đề nào của đồ án, lại tăng rủi ro khi demo (phải build, phải chạy server, phải cấu hình). Trả lời trước hội đồng nên nhấn mạnh: chọn công cụ phù hợp phạm vi, không chọn công cụ oai nhất. Ba phương án còn lại đều sai về mặt kỹ thuật.",
  "topic": "kt"
 },
 {
  "id": "bv1-a22",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống cần chứng minh rằng kiến trúc 3 file + component inject thực sự giúp bảo trì tốt hơn cách viết gộp, em sẽ đưa ra ví dụ cụ thể nào trong RoomCraft để chứng minh?",
  "options": [
   "Nhóm đưa ví dụ: khi cần đổi bộ lọc ở cả trang Sản phẩm và Đồ cũ, chỉ sửa components/catalog-filter.js một lần là cả hai trang cùng đổi; khi cần đổi menu, chỉ sửa components/header.js; khi cần đổi định dạng tiền, chỉ sửa utils.js formatVND; nếu viết gộp thì phải sửa hàng chục chỗ và dễ sót, dẫn tới lệch hành vi giữa các trang.",
   "Nhóm đưa ví dụ: khi cần đổi màu nền, phải sửa từng file HTML vì mỗi trang có màu riêng, chứng tỏ kiến trúc 3 file không giúp ích gì.",
   "Nhóm đưa ví dụ: khi cần đổi font, phải sửa file server.js vì font do server render, chứng tỏ kiến trúc 3 file phụ thuộc server.",
   "Nhóm đưa ví dụ: khi cần đổi ảnh sản phẩm, phải sửa file products.json và tăng DATA_VERSION, chứng tỏ kiến trúc 3 file không liên quan tới bảo trì."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Để chứng minh bảo trì tốt, nhóm đưa ví dụ thực tế trong RoomCraft: (1) đổi bộ lọc ở cả trang Sản phẩm và Đồ cũ — chỉ sửa components/catalog-filter.js một lần, cả hai trang cùng đổi, không sợ lệch hành vi; (2) đổi menu — chỉ sửa components/header.js, mọi trang tự cập nhật; (3) đổi định dạng tiền — chỉ sửa utils.js hàm formatVND, mọi nơi hiển thị giá tự đổi; (4) đổi phí giao hàng — chỉ sửa js/services/shipping.js. Nếu viết gộp (mỗi trang tự chứa HTML, CSS, JS), mỗi thay đổi phải sửa hàng chục chỗ, dễ sót, dẫn tới lệch hành vi giữa các trang — đây chính là điều component inject và tách tầng giải quyết. Ba phương án còn lại đều là ví dụ sai hoặc hiểu ngược bản chất.",
  "topic": "kt"
 },
 {
  "id": "bv1-a23",
  "chapter": 12,
  "difficulty": 2,
  "type": "multiple",
  "question": "Những lợi ích thực tế nào của kiến trúc 3 file + component inject + ES modules mà nhóm em đã cảm nhận được trong quá trình làm RoomCraft với 5 thành viên? (chọn nhiều đáp án)",
  "options": [
   "Chia việc theo trang rõ ràng, ít xung đột Git vì mỗi người sửa file riêng",
   "Sửa một component dùng chung là nhiều trang cùng đổi, tránh lệch hành vi",
   "Đọc code dễ vì mỗi file một nhiệm vụ, tra nhanh theo bảng trong CAY-THU-MUC-ROOMCRAFT.md",
   "Phải build trước khi chạy nên kiểm soát được lỗi sớm"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ba đáp án đúng đầu là lợi ích thực tế của kiến trúc 3 file + component inject + ES modules trong RoomCraft. Thứ nhất, chia việc theo trang rõ ràng: mỗi thành viên phụ trách vài trang, mỗi trang là ba file riêng nên ít khi hai người sửa cùng file, xung đột Git giảm. Thứ hai, component dùng chung (header.js, footer.js, catalog-filter.js, product-card.js, room-card.js) giúp sửa một lần nhiều trang cùng đổi, tránh lệch hành vi. Thứ ba, đọc code dễ vì mỗi file một nhiệm vụ, và bảng tra nhanh trong CAY-THU-MUC-ROOMCRAFT.md giúp tìm đúng file cần sửa. Đáp án thứ tư sai vì RoomCraft không có bước build — đây chính là điểm mạnh của kiến trúc thuần, chạy trực tiếp bằng Live Server hoặc GitHub Pages.",
  "topic": "kt"
 },
 {
  "id": "bv1-a24",
  "chapter": 12,
  "difficulty": 3,
  "type": "multiple",
  "question": "Với tình huống cần mở rộng RoomCraft để nhiều người dùng cùng mua hàng đồng thời, những điểm nào của kiến trúc hiện tại sẽ phải thay đổi, và vì sao? (chọn nhiều đáp án)",
  "options": [
   "Thay store.js từ localStorage sang gọi API backend thật để dữ liệu đồng bộ giữa các máy",
   "Thay auth.js từ kiểm tra client sang xác thực phía server, không tin quyền admin do client khai báo",
   "Thay orders.js từ ghi JSON tĩnh sang gọi API tạo đơn có transaction trừ kho trên CSDL thật",
   "Chỉ cần tăng DATA_VERSION trong store.js là đủ để nhiều người cùng mua đồng thời"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ba đáp án đúng đầu là những điểm bắt buộc phải thay khi mở rộng để nhiều người cùng mua đồng thời. Thứ nhất, store.js hiện đọc/ghi localStorage trên từng máy — hai người mua cùng lúc sẽ thấy hai trạng thái khác nhau, phải thay bằng API backend thật để dữ liệu đồng bộ. Thứ hai, auth.js hiện kiểm tra quyền phía client (ẩn UI admin), người có kiến thức có thể sửa localStorage để thành admin — phải xác thực phía server. Thứ ba, orders.js hiện ghi vào JSON tĩnh, không có transaction, hai người mua cùng một món cuối cùng có thể cùng thành công — phải gọi API tạo đơn có transaction trừ kho trên CSDL thật. Đáp án thứ tư sai: tăng DATA_VERSION chỉ giải quyết việc nạp lại dữ liệu mẫu, không giải quyết đồng bộ giữa nhiều người dùng.",
  "topic": "kt"
 }
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_BV1; }
