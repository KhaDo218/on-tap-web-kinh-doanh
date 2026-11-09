// Ngan hang on bao ve RoomCraft - bv2.js (18 cau) - da ap audit
const QUESTIONS_BV2 = [
 {
  "id": "bv2-a01",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Thầy hỏi: các trang đăng nhập, đăng ký và thanh toán của RoomCraft đều nằm trong thư mục scripts/ và mở đầu bằng cấu trúc HTML nào? Em hãy mô tả cấu trúc tổng thể của một trang như login.html từ đầu đến cuối và giải thích vì sao nhóm lại tổ chức theo kiểu đó.",
  "options": [
   "Trang bắt đầu bằng khai báo DOCTYPE html, thẻ html có lang='vi', phần head chứa title, meta charset UTF-8, meta viewport, các thẻ style @import css dùng chung và css riêng trang, các script core (utils, store, auth), script component (header, footer, chatbot) rồi script riêng của trang; phần body gồm div id header rỗng, thẻ main chứa nội dung, div id footer rỗng và một script gọi loadData(initPage) để nạp dữ liệu JSON rồi khởi tạo trang.",
   "Trang bắt đầu bằng thẻ div bọc toàn bộ nội dung, không có head vì nhóm gộp mọi thứ vào một file duy nhất để dễ deploy.",
   "Trang bắt đầu bằng thẻ main, sau đó mới tới head và body lồng bên trong main để tối ưu SEO.",
   "Trang bắt đầu bằng một khối script lớn chứa toàn bộ HTML dưới dạng chuỗi rồi dùng document.write để render."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là mô tả cấu trúc chuẩn của login.html: DOCTYPE, html lang='vi', head gồm title, meta charset, meta viewport, style @import base.css và css trang, các script core utils/store/auth, script component header/footer/chatbot, script trang login.js; body gồm div id header, main.container.subpage.auth-page, div id footer, cuối cùng là script gọi loadData(initPage). Cách tổ chức này giúp mọi trang có cùng khung: header/footer được inject bằng JS để không phải copy HTML ở từng trang, css dùng chung qua base.css, logic tách theo lớp core (dữ liệu, xác thực) và lớp trang. Các phương án sai vì bịa ra cấu trúc không có trong dự án: không có div bọc thay head, không đảo main lên trước head, không render bằng document.write."
 },
 {
  "id": "bv2-a02",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Trong login.html, form đăng nhập được khai báo với thuộc tính name và onsubmit như thế nào, và vì sao nhóm chọn cách gắn sự kiện trực tiếp trên thẻ form thay vì addEventListener trong file login.js?",
  "options": [
   "Form có name='frmLogin' và onsubmit='return doLogin()'; hàm doLogin trả về false khi dữ liệu sai để chặn submit mặc định của trình duyệt, trả về true khi hợp lệ; nhóm gắn trực tiếp để code HTML và JS khớp nhau rõ ràng, dễ đọc khi bảo vệ, đồng thời vẫn tách logic xử lý trong login.js.",
   "Form không có name, chỉ có id, và sự kiện được gắn bằng addEventListener trong login.js vì gắn inline bị coi là anti-pattern tuyệt đối.",
   "Form dùng action trỏ tới server.js cổng 3000 để gửi dữ liệu đăng nhập lên backend xử lý.",
   "Form dùng phương thức GET mặc định và không có onsubmit, việc kiểm tra dữ liệu do trình duyệt tự làm qua thuộc tính required."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: form name='frmLogin' onsubmit='return doLogin()'. Cơ chế là khi người dùng bấm nút submit, trình duyệt gọi doLogin; nếu hàm trả về false thì sự kiện submit bị hủy, trang không reload; nếu trả về true thì form submit theo mặc định. Nhóm chọn gắn inline vì đơn giản, nhìn HTML là biết trang gọi hàm nào, phù hợp đồ án sinh viên và dễ đối chiếu khi thầy hỏi. Các phương án sai: form thực tế có name và không dùng addEventListener cho submit; form không có action trỏ server.js vì đăng nhập xử lý hoàn toàn phía client với users.json; form không dùng GET mặc định và không dựa vào required."
 },
 {
  "id": "bv2-a03",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Thầy chỉ vào form đăng ký trong register.html và hỏi: vì sao mỗi ô nhập đều có thẻ label với thuộc tính for trỏ đúng id của input, và điều này mang lại gì cho người dùng cũng như cho trình đọc màn hình?",
  "options": [
   "Mỗi label có for khớp id input tạo liên kết lập trình giữa nhãn và ô nhập, giúp click vào chữ là focus vào ô, tăng vùng bấm trên điện thoại, và trình đọc màn hình đọc đúng tên trường khi người khiếm thị tab vào ô, đây là yêu cầu cơ bản của khả năng truy cập.",
   "Label chỉ để trang trí, không có tác dụng gì vì trình duyệt tự đoán nhãn từ placeholder nên nhóm thêm cho đẹp.",
   "Label dùng for để liên kết tới file CSS tương ứng của từng ô nhập, giúp style đúng màu.",
   "Label bắt buộc phải có for trùng với thuộc tính name của input chứ không phải id, nếu trùng id thì trình duyệt báo lỗi."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: label for khớp id input. Cơ chế: khi label và input được liên kết, click vào text label sẽ focus vào input, vùng chạm rộng hơn trên mobile; trình đọc màn hình (screen reader) sẽ đọc nội dung label khi người dùng tab tới ô nhập, thay vì chỉ đọc 'edit text'. Trong register.html các ô txtFullName, txtEmail, txtPhone, txtPassword, txtConfirm đều có label for tương ứng. Phương án sai: label không phải trang trí, placeholder không thay thế được label vì biến mất khi gõ; label không liên kết CSS; for phải trùng id chứ không phải name, và trùng id hợp lệ không gây lỗi."
 },
 {
  "id": "bv2-a04",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Trong checkout.html, phần chọn hình thức thanh toán dùng ba thẻ input type='radio' cùng thuộc tính name='rdoPayment'. Em giải thích vì sao phải cùng name và vì sao nhóm bọc mỗi radio trong một label thay vì để radio trần cạnh chữ.",
  "options": [
   "Cùng name khiến ba radio tạo thành một nhóm loại trừ lẫn nhau, chọn cái này thì cái kia tự bỏ chọn, và khi submit chỉ một giá trị được gửi; bọc trong label giúp click vào cả dòng chữ cũng chọn được radio, tăng vùng bấm và gắn nhãn ngữ nghĩa cho từng lựa chọn.",
   "Cùng name là để trình duyệt gửi cả ba giá trị lên server cùng lúc, phục vụ so sánh.",
   "Bọc trong label là bắt buộc về mặt cú pháp HTML, nếu không bọc trình duyệt sẽ không hiển thị radio.",
   "Radio không cần name, chỉ cần id khác nhau là đủ để nhóm chúng lại với nhau."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: name giống nhau tạo nhóm radio loại trừ, chỉ một lựa chọn tại một thời điểm; label bao ngoài giúp click chữ chọn radio và cung cấp nhãn cho trình đọc màn hình. Trong checkout.html ba radio Bank Transfer, E-wallet, Card cùng name='rdoPayment', mỗi cái có onclick='showPaymentDetail()' để cập nhật khối chi tiết thanh toán bên dưới. Phương án sai: radio cùng name không gửi cả ba giá trị mà chỉ gửi giá trị đang chọn; label không bắt buộc cú pháp nhưng là thực hành tốt; id khác nhau không nhóm được radio, phải cùng name."
 },
 {
  "id": "bv2-a05",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Thầy hỏi về các ô chọn tỉnh thành và phường xã trong checkout.html: vì sao tỉnh thành dùng thẻ select còn phường xã cũng là select nhưng ban đầu bị disabled, và dữ liệu cho hai ô này lấy từ đâu?",
  "options": [
   "Tỉnh thành là select được đổ dữ liệu từ wards.json khi trang khởi tạo; phường xã là select bị disabled vì phụ thuộc vào tỉnh đã chọn, khi người dùng chọn tỉnh thì onAddressChange mới nạp danh sách phường xã tương ứng và bỏ disabled, tránh người dùng chọn phường trước khi biết tỉnh.",
   "Cả hai ô đều là input text tự do, người dùng gõ tay tên tỉnh và phường, không có ràng buộc dữ liệu.",
   "Phường xã bị disabled vĩnh viễn vì nhóm chưa làm xong tính năng địa chỉ, người dùng phải ghi địa chỉ vào ô ghi chú.",
   "Dữ liệu tỉnh thành và phường xã được lấy trực tiếp từ Google Maps API mỗi lần người dùng gõ."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: select tỉnh được nạp từ wards.json (63 tỉnh thành), select phường bị disabled chờ phụ thuộc, onAddressChange xử lý khi tỉnh đổi thì nạp phường và bỏ disabled. Đây là mẫu select phụ thuộc (dependent select) kinh điển, tránh trạng thái không hợp lệ như chọn phường của tỉnh khác. Phương án sai: hai ô không phải input text tự do; phường không bị disabled vĩnh viễn mà mở sau khi chọn tỉnh; dữ liệu không gọi Google Maps API mà đọc từ file JSON tĩnh trong data/json."
 },
 {
  "id": "bv2-a06",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy yêu cầu giải thích cơ chế kiểm tra dữ liệu (validation) của form đăng ký: khi người dùng gõ mật khẩu, những gì xảy ra, hàm nào chạy, và vì sao nhóm kiểm tra ngay khi gõ thay vì đợi bấm nút Tiếp tục?",
  "options": [
   "Ô mật khẩu và ô nhập lại có oninput='checkPasswordLive()', hàm này chạy mỗi lần gõ để so khớp hai ô và cập nhật vùng divPasswordRules hiển thị các quy tắc mật khẩu đạt hay chưa; khi bấm Tiếp tục thì doRegister kiểm tra toàn bộ lần cuối rồi mới chuyển sang bước OTP, cách này cho phản hồi sớm, giảm việc bấm nút rồi mới biết sai.",
   "Chỉ khi bấm nút Tiếp tục thì doRegister mới chạy và kiểm tra mọi thứ một lần, không có kiểm tra khi gõ.",
   "Việc kiểm tra do trình duyệt tự làm hoàn toàn nhờ thuộc tính required và pattern, JS không tham gia.",
   "Kiểm tra mật khẩu được gửi lên server.js để server so khớp với users.json rồi trả kết quả về."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: oninput gọi checkPasswordLive mỗi lần gõ, cập nhật msgConfirm và divPasswordRules; doRegister kiểm tra tổng khi submit. Lợi ích là phản hồi tức thì, người dùng biết ngay mật khẩu chưa đủ mạnh hay nhập lại chưa khớp, giảm ma sát. Phương án sai: dự án có kiểm tra live chứ không chỉ lúc submit; không dựa hoàn toàn vào required/pattern của trình duyệt; không gửi lên server.js vì đăng ký xử lý phía client với users.json."
 },
 {
  "id": "bv2-a07",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi: form đăng ký của RoomCraft chia làm hai bước (nhập thông tin rồi xác minh OTP). Em giải thích cách hai bước này được thể hiện trong HTML và vì sao nhóm chọn mô phỏng OTP thay vì gửi email thật.",
  "options": [
   "Hai bước là hai khối div id step1 và step2 trong cùng trang, step2 có class hidden ban đầu; khi doRegister hợp lệ thì ẩn step1, hiện step2 và điền email vào lblEmail, mã OTP mô phỏng hiện trong khối otp-demo; nhóm chọn mô phỏng vì web tĩnh trên GitHub Pages không có backend gửi email, muốn minh họa luồng xác minh mà không cần dịch vụ ngoài.",
   "Hai bước là hai trang HTML riêng biệt, bước một là register.html, bước hai là otp.html, chuyển trang bằng location.href.",
   "Hai bước được render bằng cách reload trang và đọc tham số ?step=2 trên URL.",
   "Nhóm không mô phỏng mà gọi API gửi email thật qua server.js cổng 3000 mỗi khi đăng ký."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: step1 và step2 là hai div trong cùng register.html, step2 ẩn bằng class hidden, doRegister chuyển trạng thái và hiện mã OTP mô phỏng trong otp-demo. Lý do mô phỏng: GitHub Pages là hosting tĩnh, không chạy được code gửi mail, và đồ án không cần dịch vụ email thật; mô phỏng vẫn thể hiện đúng luồng nghiệp vụ hai bước. Phương án sai: không có trang otp.html riêng; không dùng query ?step=2; không gọi server.js gửi mail thật."
 },
 {
  "id": "bv2-a08",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Trong checkout.html có một checkbox id='chkAgree' nằm trong label class='check-line terms-line' cùng các liên kết chính sách thanh toán, giao hàng, đổi trả. Thầy hỏi: vì sao phải có checkbox đồng ý điều khoản trước khi đặt hàng, và nhóm kiểm tra nó ở đâu trong luồng xử lý?",
  "options": [
   "Checkbox đồng ý điều khoản là bước xác nhận pháp lý và nghiệp vụ, buộc người dùng chủ động đọc chính sách trước khi chốt đơn; hàm placeOrder trong checkout.js kiểm tra chkAgree.checked, nếu chưa tick thì hiện thông báo lỗi và dừng, không tạo đơn.",
   "Checkbox chỉ để trang trí, placeOrder không kiểm tra, người dùng tick hay không đều đặt hàng được.",
   "Checkbox được kiểm tra bằng thuộc tính required của HTML nên JS không cần làm gì.",
   "Checkbox đồng ý điều khoản được gửi lên server.js để server xác nhận rồi mới trả về trang order-success."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: chkAgree là xác nhận điều khoản, placeOrder kiểm tra trạng thái tick trước khi tạo đơn, chưa tick thì báo lỗi và dừng. Đây là thực hành phổ biến trong thương mại điện tử, vừa bảo vệ người bán vừa đảm bảo người mua biết chính sách. Phương án sai: checkbox có được kiểm tra trong JS chứ không chỉ trang trí; checkbox không có thuộc tính required trong HTML nên phải kiểm tra bằng JS; đơn hàng xử lý phía client, không gửi server.js xác nhận."
 },
 {
  "id": "bv2-a09",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy chỉ vào bảng danh sách người dùng trong admin/users.html và hỏi: bảng này được xây dựng bằng thẻ nào, dữ liệu đổ vào đâu, và vì sao nhóm bọc bảng trong div class='table-responsive card'?",
  "options": [
   "Bảng dùng thẻ table với thead chứa các th cột ID, Họ và tên, Email, Số điện thoại, Vai trò, Ngày đăng ký, Trạng thái, Thao tác; tbody id='tbUsers' để JS đổ dữ liệu vào; bọc trong div table-responsive để trên màn hình nhỏ bảng cuộn ngang thay vì tràn layout, card để có khung nền đẹp.",
   "Bảng được dựng bằng các div xếp hàng, không dùng thẻ table vì table bị coi là lỗi thời.",
   "Bảng dùng table nhưng dữ liệu được render sẵn trong HTML, JS chỉ ẩn hiện các dòng.",
   "Bảng dùng table và mỗi dòng là một form riêng gửi lên server.js khi bấm thao tác."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: table với thead các cột và tbody id='tbUsers' cho JS render; div table-responsive cho cuộn ngang trên mobile, card cho khung. Đây là cách làm chuẩn cho bảng dữ liệu admin, giữ ngữ nghĩa bảng cho trình đọc màn hình và cho phép hiển thị nhiều cột. Phương án sai: dự án dùng table thật chứ không dựng bằng div; dữ liệu render động bằng JS chứ không viết sẵn; thao tác không phải form gửi server.js."
 },
 {
  "id": "bv2-a10",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi về khả năng truy cập của bảng admin: ngoài việc dùng thẻ table, nhóm còn làm gì để bảng dễ dùng với người khiếm thị và khi màn hình nhỏ, ví dụ ở phần thông báo trống và nút đóng modal?",
  "options": [
   "Nhóm dùng thead và th để trình đọc màn hình đọc đúng tiêu đề cột, div table-responsive để cuộn ngang trên mobile, khối divEmpty có thông báo rõ khi không có kết quả, và nút đóng modal có aria-label='Đóng' cùng modal-box có role='dialog', aria-modal='true', aria-labelledby trỏ tới tiêu đề.",
   "Nhóm chỉ dùng table, không thêm gì khác vì bảng tự động thân thiện với mọi người dùng.",
   "Nhóm thay toàn bộ bảng bằng ảnh chụp để đảm bảo hiển thị giống nhau trên mọi máy.",
   "Nhóm dùng aria-hidden='true' cho toàn bộ bảng để trình đọc màn hình bỏ qua, tránh đọc nhiều."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: thead/th cho ngữ nghĩa, table-responsive cho mobile, divEmpty thông báo trống, modal có role dialog, aria-modal, aria-labelledby và nút đóng có aria-label. Đây là các thuộc tính ARIA cơ bản giúp trình đọc màn hình hiểu cấu trúc. Phương án sai: bảng không tự thân thiện nếu thiếu các bổ trợ; không dùng ảnh chụp thay bảng; aria-hidden toàn bảng sẽ làm người khiếm thị không đọc được dữ liệu, phản tác dụng."
 },
 {
  "id": "bv2-a11",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Trang chủ RoomCraft có video giới thiệu và các iframe nhúng. Thầy hỏi: nhóm dùng thẻ video hay iframe cho đoạn video, vì sao, và cần lưu ý gì về hiệu năng cũng như khả năng truy cập khi nhúng video và iframe?",
  "options": [
   "Video giới thiệu dùng thẻ video với nguồn cục bộ trong assets, có controls để người dùng tự phát; iframe chỉ dùng cho nội dung nhúng từ bên ngoài như bản đồ hoặc video nền tảng khác, luôn có title mô tả, loading='lazy' để trì hoãn tải, và không tự phát tiếng để tránh làm phiền.",
   "Mọi video đều phải nhúng bằng iframe YouTube vì thẻ video không phát được trên trình duyệt hiện đại.",
   "Nhóm dùng thẻ video nhưng bỏ controls để video tự chạy nền, không cần nút phát vì đẹp hơn.",
   "Nhóm dùng iframe cho tất cả và không cần title vì iframe không phải vùng nội dung cần mô tả."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: video cục bộ dùng thẻ video có controls, iframe chỉ cho nội dung ngoài và phải có title, loading lazy, hạn chế tự phát tiếng. Lý do: thẻ video cho phép kiểm soát nguồn, phụ đề, và không phụ thuộc bên thứ ba; iframe nặng nên cần lazy để không chặn tải trang; title giúp trình đọc màn hình mô tả khung nhúng. Phương án sai: thẻ video vẫn phát tốt; bỏ controls làm người dùng không điều khiển được, vi phạm khả năng truy cập; iframe cần title theo chuẩn."
 },
 {
  "id": "bv2-a12",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi về các thẻ semantic: trong các trang của RoomCraft, nhóm dùng header, main, aside, footer, nav ở đâu và vì sao không dùng toàn div? Em lấy ví dụ cụ thể từ login.html và checkout.html.",
  "options": [
   "login.html dùng div id header và div id footer làm chỗ inject, bên trong main có aside login-showcase cho khối minh họa và div auth-box cho form; checkout.html dùng main chứa form checkout-form và aside checkout-summary cho tóm tắt đơn; dùng thẻ semantic giúp cấu trúc rõ ràng cho SEO và trình đọc màn hình, phân biệt vùng nội dung chính và vùng phụ.",
   "Nhóm dùng toàn div vì thẻ semantic không được trình duyệt cũ hỗ trợ nên không an toàn.",
   "Nhóm dùng header, main, aside nhưng đặt sai chỗ, ví dụ main lồng trong footer để tiện style.",
   "Thẻ semantic chỉ có tác dụng khi kết hợp với framework như React, dự án thuần HTML thì không cần."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: header/footer inject qua div id, main chứa nội dung chính, aside cho khối phụ như login-showcase và checkout-summary. Lợi ích: cấu trúc tài liệu rõ, hỗ trợ SEO và screen reader nhảy nhanh giữa các vùng, dễ đọc code. Phương án sai: thẻ semantic được hỗ trợ rộng rãi; dự án đặt đúng chỗ chứ không lồng main trong footer; semantic độc lập với framework."
 },
 {
  "id": "bv2-a13",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Tình huống: thầy mở login.html, thấy input email khai báo type='text' chứ không phải type='email', và form không có thuộc tính required. Thầy hỏi: như vậy có phải nhóm làm sai chuẩn HTML không, và nếu người dùng nhập chuỗi rác vào ô email thì hệ thống chặn ở đâu?",
  "options": [
   "Đây là điểm chưa tối ưu: đúng chuẩn nên dùng type='email' và required để trình duyệt hỗ trợ kiểm tra và bàn phím mobile hiện đúng; tuy nhiên nhóm vẫn chặn được vì doLogin trong login.js kiểm tra định dạng email bằng biểu thức chính quy và độ dài mật khẩu trước khi so khớp users.json, nếu sai thì ghi msgError và trả về false; nhóm ghi nhận đây là chỗ cần sửa để tận dụng validation gốc của trình duyệt.",
   "Nhóm làm đúng tuyệt đối vì type='text' an toàn hơn type='email', và JS không cần kiểm tra gì thêm.",
   "Nhóm không kiểm tra gì cả, người dùng nhập gì cũng đăng nhập được miễn khớp users.json.",
   "Trình duyệt tự chặn chuỗi rác trong ô type='text' nhờ cơ chế nội bộ, JS không cần làm gì."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: thừa nhận type='text' là chưa tối ưu, nên dùng type='email' và required; nhưng doLogin vẫn kiểm tra định dạng email và mật khẩu bằng JS nên chuỗi rác bị chặn, hiện msgError và không submit. Đây là câu thể hiện tinh thần thẳng thắn: chỉ ra điểm yếu và cách khắc phục. Phương án sai: type='text' không an toàn hơn; nhóm có kiểm tra trong JS; trình duyệt không tự kiểm tra định dạng trong ô text."
 },
 {
  "id": "bv2-a14",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Tình huống: thầy thử nhập số điện thoại 11 chữ số vào ô txtPhone của register.html và checkout.html. Em cho biết điều gì xảy ra, cơ chế nào giới hạn, và nếu người dùng dán số có khoảng trắng hoặc dấu gạch ngang thì nhóm xử lý thế nào?",
  "options": [
   "Ô txtPhone có maxlength='10' nên trình duyệt chặn không cho gõ quá 10 ký tự; ngoài ra JS kiểm tra định dạng số điện thoại Việt Nam bằng biểu thức chính quy, nếu có khoảng trắng hay dấu gạch ngang thì hàm chuẩn hóa bỏ các ký tự đó trước khi kiểm tra, sai định dạng thì báo lỗi và không cho qua bước tiếp theo.",
   "maxlength='10' chỉ là gợi ý, trình duyệt vẫn cho gõ 11 số và JS không kiểm tra gì thêm.",
   "Số điện thoại được gửi lên server.js để kiểm tra định dạng, client không làm gì.",
   "Nhóm không giới hạn gì, số nào cũng chấp nhận vì đầu số Việt Nam đa dạng."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: maxlength chặn gõ quá 10, JS kiểm tra regex và chuẩn hóa bỏ khoảng trắng, gạch ngang trước khi kiểm tra, sai thì báo lỗi. Đây là kết hợp giữa ràng buộc HTML và kiểm tra JS, vừa chặn sớm vừa xử lý dữ liệu dán vào. Phương án sai: maxlength có hiệu lực thật; không gửi server.js kiểm tra; nhóm có giới hạn chứ không chấp nhận mọi số."
 },
 {
  "id": "bv2-a15",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Tình huống mở rộng: thầy hỏi nếu sau này nhóm muốn thêm trường chọn ngày giao hàng mong muốn vào checkout, và muốn trường này bắt buộc nhập, thì nên dùng thẻ HTML nào, đặt ở đâu trong form, và cần thêm gì để vẫn đảm bảo khả năng truy cập và kiểm tra dữ liệu?",
  "options": [
   "Nên dùng input type='date' đặt trong một form-group ở bước giao hàng, có label for trỏ đúng id, thêm thuộc tính required và min là ngày mai để chặn ngày quá khứ; trong placeOrder kiểm tra lại giá trị ngày hợp lệ và hiển thị lỗi cạnh ô, giữ nhất quán với các trường khác.",
   "Nên dùng input type='text' để người dùng tự gõ ngày theo định dạng tùy ý, không cần label vì đã có placeholder.",
   "Nên dùng select liệt kê sẵn 365 ngày của năm hiện tại, không cần kiểm tra gì thêm.",
   "Nên dùng div contenteditable để người dùng nhập ngày tự do, linh hoạt hơn mọi thẻ input."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: input type='date' trong form-group, label for, required, min là ngày mai, kiểm tra lại trong placeOrder và hiện lỗi cạnh ô. type='date' cho trình chọn ngày gốc, bàn phím phù hợp trên mobile, required và min tận dụng validation trình duyệt, JS kiểm tra bổ sung. Phương án sai: type='text' mất trình chọn ngày và dễ nhập sai; select 365 ngày cồng kềnh và vẫn cần kiểm tra; contenteditable không có ngữ nghĩa form và không submit được."
 },
 {
  "id": "bv2-a16",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Tình huống: thầy hỏi về meta SEO. Các trang trong scripts/ chỉ có title, meta charset và meta viewport, chưa có meta description hay thẻ Open Graph. Thầy hỏi: điều này ảnh hưởng gì khi chia sẻ link RoomCraft lên mạng xã hội, và nếu được làm lại nhóm sẽ thêm những thẻ nào, đặt ở đâu?",
  "options": [
   "Thiếu meta description và Open Graph khiến khi chia sẻ link lên Facebook hay Zalo, phần xem trước chỉ hiện URL hoặc nội dung đoán mò, giảm tỉ lệ click; nếu làm lại nhóm sẽ thêm meta name='description' tóm tắt trang, og:title, og:description, og:image trỏ ảnh phòng đẹp, og:url, và twitter:card, đặt trong head của từng trang, riêng trang chủ ưu tiên ảnh lớn.",
   "Thiếu meta description không ảnh hưởng gì vì mạng xã hội tự lấy ảnh và mô tả từ nội dung trang một cách hoàn hảo.",
   "Chỉ cần thêm meta keywords là đủ cho SEO hiện đại, không cần description hay Open Graph.",
   "Nên thêm toàn bộ thẻ meta vào file base.css để mọi trang tự động có, không cần sửa từng HTML."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: thiếu description và Open Graph làm preview khi chia sẻ kém hấp dẫn; nên thêm meta description, og:title, og:description, og:image, og:url, twitter:card trong head từng trang. Đây là kiến thức SEO cơ bản, ảnh hưởng trực tiếp tới cách link hiển thị trên mạng xã hội. Phương án sai: mạng xã hội không tự lấy mô tả hoàn hảo, thường cần Open Graph; meta keywords gần như bị bỏ qua; thẻ meta phải nằm trong HTML head, không đặt trong CSS."
 },
 {
  "id": "bv2-a17",
  "chapter": 12,
  "difficulty": 2,
  "type": "multiple",
  "question": "Thầy yêu cầu liệt kê các yếu tố trong form đăng nhập, đăng ký, thanh toán của RoomCraft thể hiện khả năng truy cập (accessibility) và ngữ nghĩa HTML đúng chuẩn. Em hãy chọn các ý đúng trong các phương án sau. (chọn nhiều đáp án)",
  "options": [
   "Mỗi input đều có label for trỏ đúng id, tạo liên kết nhãn và ô nhập.",
   "Các nhóm lựa chọn như hình thức thanh toán dùng fieldset/legend hoặc label bao ngoài để gắn nhãn cho cả nhóm.",
   "Modal xuất JSON trong admin/users.html có role='dialog', aria-modal='true', aria-labelledby trỏ tới tiêu đề và nút đóng có aria-label.",
   "Toàn bộ form dùng div thay cho label và input để dễ style, không cần thuộc tính aria."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ba ý đúng là label for khớp id, nhóm lựa chọn có nhãn nhóm, và modal có role dialog cùng aria. Trong dự án, login.html và register.html gắn label for cho từng ô; checkout.html bọc mỗi radio trong label class='option' để cả dòng chữ chọn được; admin/users.html có modal-box role='dialog' aria-modal='true' aria-labelledby='exportTitle' và nút đóng aria-label='Đóng'. Ý sai là dùng div thay label/input và bỏ aria, vì như vậy mất ngữ nghĩa form, trình đọc màn hình không biết đâu là ô nhập, người dùng bàn phím không tab được đúng chỗ."
 },
 {
  "id": "bv2-a18",
  "chapter": 12,
  "difficulty": 3,
  "type": "multiple",
  "question": "Thầy đặt tình huống: một người dùng dùng trình đọc màn hình muốn đặt hàng trên checkout.html. Em hãy chọn các mô tả đúng về những gì người đó sẽ gặp và cách nhóm đã hỗ trợ, đồng thời chỉ ra điểm còn thiếu. (chọn nhiều đáp án)",
  "options": [
   "Người dùng nghe được tên trường nhờ label for, nghe được nhóm hình thức thanh toán nhờ label bao ngoài radio, và nghe được thông báo lỗi nếu vùng msgError được cập nhật nội dung.",
   "Các bước 1 đến 4 được đánh dấu bằng overline và headline-section nên thứ tự đọc tương đối rõ, nhưng nhóm chưa gắn aria-live cho vùng thông báo lỗi nên lỗi có thể không được đọc tự động.",
   "Vì form dùng nhiều div và input không có label nên người dùng trình đọc màn hình không thể điền được đơn hàng.",
   "Nhóm đã gắn đầy đủ aria-live, aria-describedby cho mọi trường và không còn điểm nào cần cải thiện về khả năng truy cập."
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Hai ý đúng: label for và label bao radio giúp nghe đúng tên trường và nhóm lựa chọn; các bước có tiêu đề rõ nhưng vùng lỗi chưa có aria-live nên thông báo có thể không được đọc tự động, đây là điểm cần bổ sung. Ý sai thứ nhất nói không điền được là sai vì form vẫn có label và input đúng; ý sai thứ hai nói đã hoàn hảo là không đúng với thực tế dự án, nhóm chưa gắn aria-live và aria-describedby đầy đủ."
 }
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_BV2; }
