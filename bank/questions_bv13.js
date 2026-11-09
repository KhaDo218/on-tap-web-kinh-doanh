// Ngan hang on bao ve RoomCraft - bv13.js (26 cau) - da ap audit
const QUESTIONS_BV13 = [
 {
  "id": "bv13-a01",
  "chapter": 13,
  "difficulty": 1,
  "type": "single",
  "question": "Thầy sẽ hỏi: nhóm em chia việc theo trang như thế nào, và CAY-THU-MUC-ROOMCRAFT.md đóng vai trò gì trong cách chia đó? Em hãy trình bày cách nhóm dùng cây thư mục làm bản đồ phân công.",
  "options": [
   "Nhóm em lấy chính cấu trúc thư mục của repo làm bản đồ phân công: mỗi trang là một bộ ba file scripts/trang.html, scripts/css/pages/trang.css, scripts/js/pages/trang.js, và file CAY-THU-MUC-ROOMCRAFT.md ghi rõ ai phụ trách trang nào, thư mục nào, để hai người không sửa trùng một file. Nhờ vậy khi có PR, người duyệt nhìn đường dẫn là biết ngay việc đó thuộc phần của ai, ai cần review, và ai chịu trách nhiệm nếu trang đó lỗi khi demo.",
   "Nhóm em chia việc theo số lượng dòng code, ai viết nhiều dòng hơn thì làm nhiều trang hơn, còn cây thư mục chỉ để lưu trữ chứ không dùng để phân công.",
   "Nhóm em chia việc theo thứ tự thời gian làm bài, ai rảnh lúc nào thì nhận trang lúc đó, cây thư mục chỉ là tài liệu tham khảo không liên quan đến phân công.",
   "Nhóm em chia việc theo cảm hứng từng tuần, cây thư mục do giảng viên quy định nên nhóm không dùng để phân công."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là cách nhóm lấy cấu trúc thư mục làm bản đồ phân công. Trong RoomCraft, mỗi trang khách đều theo đúng quy ước ba file: HTML trong scripts/, CSS trong scripts/css/pages/, JS trong scripts/js/pages/. Trang admin nằm trong scripts/admin/, component dùng chung nằm trong scripts/components/ như header.js, footer.js, catalog-filter.js, chatbot.js. Vì cấu trúc rõ ràng như vậy nên file CAY-THU-MUC-ROOMCRAFT.md có thể ghi theo từng nhánh thư mục: Bảo Duy phụ trách trang chủ, rooms, room-detail và hotspot; Nguyên Khôi phụ trách products, product-detail, 3D, wishlist; Phương Anh phụ trách cart, checkout, orders và dashboard; Như Huyền phụ trách marketplace, chatbot, about và quản lý người dùng, đánh giá; Quỳnh Kha phụ trách khung chung, dữ liệu, đăng nhập, phân quyền và tích hợp. Cách chia này có ba lợi ích: thứ nhất, mỗi người sở hữu trọn một bộ ba file nên ít đụng file của nhau; thứ hai, khi review PR, người duyệt chỉ cần nhìn đường dẫn là biết phạm vi ảnh hưởng; thứ ba, khi demo mà một trang lỗi thì biết ngay ai vào sửa. Các phương án còn lại sai vì chia theo số dòng code hay theo cảm hứng thì không gắn với kiến trúc thật của repo, dễ sinh ra hai người cùng sửa một file và xung đột merge."
 },
 {
  "id": "bv13-a02",
  "chapter": 13,
  "difficulty": 1,
  "type": "single",
  "question": "Thầy sẽ hỏi: vì sao nhóm em chọn cách chia việc theo trang thay vì chia theo tầng (người làm HTML, người làm CSS, người làm JS) hoặc chia theo tính năng xuyên trang? Em phân tích ưu nhược điểm của cách nhóm đã chọn.",
  "options": [
   "Vì mỗi trang là một đơn vị bàn giao trọn vẹn: một người làm cả HTML, CSS, JS của trang đó nên tự kiểm tra được trang chạy đúng, ít phụ thuộc chờ đợi, và khi merge thì phạm vi thay đổi gọn trong một thư mục. Nhược điểm là dễ lệch giao diện giữa các trang và dễ trùng lặp code, nên nhóm bù bằng cách để Quỳnh Kha giữ base.css, header.js, footer.js và các component dùng chung.",
   "Vì chia theo tầng thì mỗi người chỉ cần biết một ngôn ngữ, không phải học HTML, CSS, JS cùng lúc, nên nhóm chọn chia theo trang để mỗi người cũng chỉ cần biết một ngôn ngữ.",
   "Vì chia theo trang giúp mỗi người có thể tự do sửa file của người khác mà không cần hỏi, nên nhóm chọn cách này để tăng tốc độ.",
   "Vì chia theo trang là cách duy nhất mà Git hỗ trợ, các cách chia khác Git không cho phép nên nhóm buộc phải chọn."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là cách chia theo trang tạo ra đơn vị bàn giao trọn vẹn. Trong RoomCraft, mỗi trang là một bộ ba file độc lập, ví dụ products.html, products.css, products.js. Nếu một người làm trọn bộ ba file đó, họ tự chạy Live Server kiểm tra được ngay trang hiển thị đúng chưa, bộ lọc có hoạt động không, phân trang có nhảy đúng không, mà không phải chờ người khác viết xong CSS hay JS. Điều này rất hợp với tiến độ hai đợt của nhóm: đợt một làm nền và các trang cốt lõi, đợt hai làm trang phụ và tính năng mở rộng. Nhược điểm thật của cách chia này là dễ lệch giao diện và trùng lặp code, ví dụ mỗi người tự viết một kiểu card sản phẩm. Nhóm khắc phục bằng cách tách các phần dùng chung ra component: header.js và footer.js inject header/footer cho mọi trang, product-card.js và room-card.js chuẩn hóa thẻ hiển thị, catalog-filter.js gom toàn bộ logic lọc và phân trang dùng chung cho products và marketplace, base.css giữ biến màu và design token. Nhờ vậy người phụ trách trang chỉ viết phần riêng của trang, còn phần chung do một người giữ. Các phương án còn lại sai vì chia theo tầng thì ba người phải chờ nhau mới ra một trang chạy được, còn các lý do khác không đúng với cách nhóm thực làm."
 },
 {
  "id": "bv13-a03",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: quy trình Git của nhóm em cụ thể ra sao, từ lúc nhận việc đến lúc code lên main? Em mô tả đúng các bước nhóm đã làm với feature branch và Pull Request.",
  "options": [
   "Nhóm em checkout main, pull mới nhất, tạo nhánh tên/viec theo quy ước, code và commit trên nhánh đó, push lên origin, rồi mở Pull Request vào main để người khác review trước khi merge. Không ai push thẳng vào main, và mỗi PR chỉ nên gọn trong phạm vi một trang hoặc một việc.",
   "Nhóm em code thẳng trên main cho nhanh, xong hết cả dự án mới tạo một nhánh duy nhất để lưu bản sao, không dùng Pull Request vì nhóm nhỏ.",
   "Nhóm em mỗi người clone repo về máy, làm xong thì nén thư mục gửi qua Zalo, người nhận giải nén đè lên bản cũ, không dùng Git nhánh.",
   "Nhóm em tạo nhánh cho có nhưng mọi người cùng push vào nhánh main, Pull Request chỉ để lưu lịch sử chứ không ai review."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là quy trình feature branch cộng Pull Request. README của nhóm ghi rõ: mỗi việc một nhánh theo dạng tên/viec, tạo Pull Request vào main, không push thẳng vào main. Các bước thực tế là: git checkout main và git pull để lấy bản mới nhất; git checkout -b ten/viec để tạo nhánh, ví dụ duy/3d hoặc phuonganh/cart-orders như các nhánh origin có trong repo; code và commit trên nhánh đó với thông điệp ngắn mô tả thay đổi; git push -u origin ten/viec để đẩy nhánh lên; rồi mở Pull Request trên GitHub vào main. Người review xem diff, chạy thử, góp ý, tác giả sửa tiếp trên cùng nhánh, PR tự cập nhật; khi ổn mới merge. Lợi ích là main luôn ở trạng thái chạy được, vì GitHub Pages deploy từ main nên mỗi lần merge là một lần web được đăng lại. Nếu ai đó làm hỏng, lịch sử commit trên nhánh vẫn còn để truy vết và revert. Các phương án còn lại sai vì code thẳng trên main thì main dễ vỡ, gửi file qua Zalo thì mất lịch sử và dễ ghi đè lẫn nhau, còn push hết vào main mà không review thì Pull Request chỉ còn là hình thức."
 },
 {
  "id": "bv13-a04",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: vì sao nhóm em đặt quy ước tên nhánh là tên/viec mà không đặt tên theo ngày hay theo số thứ tự? Em giải thích lợi ích thực tế của quy ước này khi nhóm có nhiều nhánh song song.",
  "options": [
   "Vì tên nhánh tên/viec cho biết ngay ai làm và làm việc gì, nên khi nhìn danh sách nhánh trên GitHub hay khi mở Pull Request, cả nhóm biết cần ai review và việc đó thuộc phần nào của cây thư mục. Tên theo ngày hay số thứ tự thì không mang thông tin đó.",
   "Vì Git bắt buộc tên nhánh phải có dấu gạch chéo, nếu không có thì không push được, nên nhóm đặt tên/viec cho hợp lệ.",
   "Vì tên theo ngày sẽ làm GitHub Pages không deploy được, còn tên/viec thì deploy được nên nhóm chọn.",
   "Vì tên/viec giúp nhánh tự động merge vào main mà không cần Pull Request, tiết kiệm thời gian cho nhóm."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là quy ước tên/viec mang thông tin về người làm và nội dung việc. Trong repo RoomCraft có các nhánh như origin/duy/3d hay origin/phuonganh/cart-orders, nhìn vào là biết Duy làm phần 3D, Phương Anh làm giỏ hàng và đơn hàng. Khi có nhiều nhánh song song, ví dụ đợt hai vừa có người làm marketplace, người làm chatbot, người sửa hotspot, thì tên nhánh giúp phân loại nhanh: nhánh nào thuộc phần nào của CAY-THU-MUC-ROOMCRAFT.md, ai là người chịu trách nhiệm review, ai cần được tag khi có thay đổi ảnh hưởng đến component dùng chung. Ngoài ra tên nhánh rõ ràng còn giúp khi phải dọn nhánh cũ: nhánh đã merge thì xóa được an toàn vì biết nó thuộc việc gì. Các phương án còn lại sai vì Git không bắt buộc dấu gạch chéo trong tên nhánh, GitHub Pages deploy theo nhánh main chứ không phụ thuộc tên nhánh, và không có cơ chế tự merge khi không có Pull Request."
 },
 {
  "id": "bv13-a05",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: khi hai bạn cùng sửa một file và xảy ra conflict, nhóm em xử lý theo trình tự nào để không làm hỏng code của nhau? Em kể một tình huống thực tế trong dự án.",
  "options": [
   "Nhóm em pull main mới nhất về nhánh của mình trước, chạy thử để thấy conflict, mở file bị đánh dấu, đọc cả hai phía để hiểu ý đồ, rồi ghép lại thành phiên bản đúng nhất, xóa dấu conflict, chạy lại trang để kiểm tra, commit phần đã giải quyết và push tiếp lên nhánh để PR cập nhật. Nếu không chắc thì hỏi trực tiếp người viết phía còn lại.",
   "Nhóm em chọn Keep Current Change cho nhanh, bỏ hết phần của người kia, vì ai push sau thì phiên bản của người đó đúng hơn.",
   "Nhóm em xóa cả file bị conflict rồi viết lại từ đầu, vì như vậy chắc chắn không còn dấu conflict trong file.",
   "Nhóm em đóng Pull Request, tạo repo mới, chép code của mình sang rồi mời cả nhóm chuyển sang repo mới để tránh conflict."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là quy trình đọc hiểu hai phía rồi ghép lại. Conflict xảy ra khi hai nhánh sửa cùng một vùng của cùng một file, ví dụ hai bạn cùng sửa header.js để thêm mục menu, hoặc cùng sửa catalog-filter.js để thêm tiêu chí lọc. Cách nhóm làm là: trên nhánh của mình chạy git pull origin main để kéo bản mới, Git báo conflict và đánh dấu các vùng trong file; mở file, đọc kỹ phần HEAD là của mình và phần incoming là của main; hiểu ý đồ hai bên rồi viết lại một phiên bản dung hòa, ví dụ giữ cả hai mục menu nếu cả hai đều cần; xóa các dòng đánh dấu; chạy Live Server kiểm tra trang vẫn hiển thị đúng và không lỗi console; sau đó git add file đã giải quyết, commit và push lên nhánh, PR tự cập nhật. Nếu hai bên sửa cùng một logic mà không rõ bên nào đúng, nhóm gọi nhau xem trực tiếp. Các phương án còn lại sai vì Keep Current Change sẽ âm thầm xóa việc của người khác, xóa cả file thì mất code của cả hai, còn tạo repo mới là cách né conflict chứ không giải quyết."
 },
 {
  "id": "bv13-a06",
  "chapter": 13,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy sẽ hỏi tình huống: bạn A sửa catalog-filter.js để thêm bộ lọc chất liệu, bạn B cũng sửa catalog-filter.js để thêm bộ lọc màu, cả hai mở PR cùng lúc. Nhóm em phát hiện và xử lý thế nào để cả hai tính năng đều vào được main mà không mất code?",
  "options": [
   "Nhóm em cho merge PR nào ít rủi ro hơn trước, rồi bạn còn lại pull main mới về nhánh mình, giải quyết conflict ngay trên nhánh đó bằng cách giữ cả hai bộ lọc, chạy thử trang products và marketplace để chắc bộ lọc chung vẫn hoạt động, rồi push để PR cập nhật và merge sau. Bài học là file dùng chung như catalog-filter.js phải báo trước khi sửa.",
   "Nhóm em merge cả hai PR cùng lúc, GitHub sẽ tự động gộp hai bộ lọc lại vì hai bạn sửa hai chỗ khác nhau trong file.",
   "Nhóm em hủy PR của bạn B, đợi đợt sau bạn B làm lại từ đầu, vì nguyên tắc là ai mở PR sau thì phải nhường.",
   "Nhóm em merge PR của A, rồi mở lại file trên main sửa tay thêm bộ lọc màu của B mà không qua nhánh, vì sửa trên main nhanh hơn."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là merge tuần tự và để người sau giải quyết conflict trên nhánh của mình. catalog-filter.js là component dùng chung cho cả products và marketplace, nên hai người cùng sửa là tình huống rất dễ xảy ra. Cách xử lý an toàn: chọn merge một PR trước, thường là PR nhỏ hơn hoặc ít ảnh hưởng hơn; bạn còn lại chạy git pull origin main trên nhánh của mình, Git báo conflict trong catalog-filter.js; mở file, giữ cả khối thêm bộ lọc chất liệu và khối thêm bộ lọc màu, sắp xếp lại cho đúng cấu trúc hàm lọc; chạy Live Server mở trang products và marketplace, thử chọn cả hai bộ lọc cùng lúc để chắc chúng không triệt tiêu nhau; kiểm tra URL đồng bộ tham số vẫn đúng; sau đó commit và push, PR cập nhật và merge sau. Bài học rút ra là với file dùng chung, nhóm phải báo trước trong nhóm chat hoặc ghi vào CAY-THU-MUC-ROOMCRAFT.md để người khác biết mà tránh, và nếu buộc phải sửa thì chia nhỏ PR để dễ review. Các phương án còn lại sai vì GitHub không tự gộp hai thay đổi cùng vùng, hủy PR của B là lãng phí công, còn sửa tay trên main vi phạm quy ước không push thẳng vào main."
 },
 {
  "id": "bv13-a07",
  "chapter": 13,
  "difficulty": 1,
  "type": "single",
  "question": "Thầy sẽ hỏi: nhóm em có những quy ước code nào được ghi thành văn bản, và vì sao lại chọn những quy ước đó cho một dự án JavaScript thuần không framework?",
  "options": [
   "Nhóm em ghi trong README các quy ước chính: JavaScript dùng ES5 với var và function, lấy phần tử bằng document.getElementById; CSS nạp bằng @import trong thẻ style; file và thư mục viết thường nối bằng gạch ngang; hàm và biến dùng camelCase; trường dữ liệu dùng snake_case trùng tên cột thiết kế CSDL; đường dẫn ảnh trong JSON tính từ gốc repo và khi hiển thị luôn gọi asset(duongDan). Những quy ước này giữ cho code đồng nhất và chạy được trên GitHub Pages mà không cần build.",
   "Nhóm em quy ước mỗi người viết một kiểu cho sáng tạo, miễn là trang chạy được, vì dự án nhỏ nên không cần thống nhất.",
   "Nhóm em quy ước dùng ES6 với let, const và arrow function ở mọi nơi, vì đó là chuẩn hiện đại và trình duyệt nào cũng hỗ trợ.",
   "Nhóm em quy ước đặt tên file bằng tiếng Việt có dấu cho dễ đọc, và trường dữ liệu dùng camelCase cho giống JavaScript."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là các quy ước được ghi rõ trong README mục Quy ước phát triển. Cụ thể: JavaScript dùng ES5 với var và function, lấy phần tử bằng document.getElementById; CSS nạp bằng @import trong thẻ style; không dùng framework. Đặt tên file và thư mục viết thường nối bằng gạch ngang như room-detail.html; hàm và biến dùng camelCase; trường dữ liệu dùng snake_case để trùng tên cột trong thiết kế CSDL MySQL ở database/RoomCraft_database.sql. Đường dẫn ảnh và model trong JSON tính từ gốc repo, khi hiển thị luôn gọi asset(duongDan) để một chỗ xử lý tiền tố đường dẫn. Vì sao chọn như vậy: dự án deploy tĩnh trên GitHub Pages, không có bước build, nên code phải chạy thẳng trên trình duyệt; ES5 và getElementById là cách viết đơn giản, ít lỗi, dễ đọc cho cả nhóm; snake_case ở dữ liệu giúp sau này chuyển sang MySQL dễ hơn vì tên trường khớp tên cột. Các phương án còn lại sai vì không thống nhất thì review rất mệt, ES6 không sai về kỹ thuật nhưng không phải quy ước nhóm đã chọn, còn tên file tiếng Việt có dấu dễ gây lỗi đường dẫn khi deploy."
 },
 {
  "id": "bv13-a08",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: vì sao nhóm em chọn viết JavaScript theo kiểu ES5 với var và function thay vì dùng let, const, arrow function, module import? Cách chọn này có đánh đổi gì?",
  "options": [
   "Vì mục tiêu là code chạy thẳng trên GitHub Pages và mở bằng Live Server mà không qua build tool, nên nhóm chọn cách viết đơn giản, ít cú pháp mới, dễ đọc cho cả nhóm và ít lỗi tương thích. Đánh đổi là code dài hơn, không có scope khối, và khó tách module gọn, nên nhóm bù bằng cách tách file theo trang và component, dùng chung qua biến toàn cục có kiểm soát.",
   "Vì trình duyệt hiện nay không hỗ trợ let, const và arrow function, nên nếu dùng thì trang sẽ báo lỗi ngay khi mở.",
   "Vì giảng viên bắt buộc phải dùng ES5, nếu dùng cú pháp mới sẽ bị trừ điểm nên nhóm không có lựa chọn nào khác.",
   "Vì ES5 chạy nhanh hơn ES6 rõ rệt trên mọi trình duyệt, nên nhóm chọn ES5 để tối ưu hiệu năng tải trang."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là chọn ES5 để code chạy thẳng không cần build, đổi lại là code dài và ít tiện nghi hơn. RoomCraft deploy bằng GitHub Pages từ nhánh main, không có bước bundling hay transpile, nên mọi file JS phải chạy được ngay khi trình duyệt tải. Cách viết ES5 với var và function, lấy phần tử bằng document.getElementById, là kiểu cũ nhưng ổn định và dễ đọc cho cả năm thành viên, kể cả bạn chưa quen cú pháp mới. Đánh đổi thật là: var không có scope khối nên dễ vô tình ghi đè biến; không có arrow function nên code callback dài hơn; không dùng import/export nên việc chia sẻ hàm giữa các file phải dựa vào thứ tự nạp script hoặc biến toàn cục có kiểm soát. Nhóm bù bằng cách tách file theo trang và component, mỗi file chỉ lo một việc, và các hàm dùng chung đặt ở js/core/utils.js hoặc js/core/store.js. Các phương án còn lại sai vì trình duyệt hiện đại đều hỗ trợ let, const, arrow function; giảng viên không bắt buộc ES5; và ES5 không nhanh hơn ES6 một cách rõ rệt để trở thành lý do chính."
 },
 {
  "id": "bv13-a09",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: quy ước trường dữ liệu dùng snake_case trong khi hàm và biến dùng camelCase gây ra chuyện gì khi code, và nhóm em xử lý ra sao để không lẫn lộn?",
  "options": [
   "Vì dữ liệu JSON và thiết kế CSDL dùng snake_case như model_3d_url, condition_grade, usage_time, còn code JavaScript dùng camelCase, nên khi đọc dữ liệu nhóm phải truy cập đúng tên trường gốc và không tự đổi tên. Nhóm giữ nguyên tên trường khi đọc, chỉ đặt biến cục bộ theo camelCase, và ghi quy ước này trong README để mọi người theo.",
   "Vì snake_case và camelCase giống nhau nên không có vấn đề gì, nhóm dùng lẫn lộn cũng được, trình duyệt tự hiểu.",
   "Vì nhóm đổi hết trường dữ liệu sang camelCase ngay khi nạp JSON, nên file JSON gốc và code luôn khớp nhau hoàn toàn.",
   "Vì nhóm đổi hết hàm và biến sang snake_case cho giống dữ liệu, nên không còn chuyện lẫn lộn nữa."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là giữ nguyên tên trường snake_case khi đọc dữ liệu và chỉ đặt biến cục bộ theo camelCase. Trong RoomCraft, file JSON dùng snake_case để trùng tên cột trong thiết kế CSDL MySQL, ví dụ products.json có model_3d_url, used_products.json có condition_grade, usage_time, condition_note. Nếu ai đó tự đổi tên trường khi nạp dữ liệu, ví dụ đổi model_3d_url thành model3dUrl, thì mọi chỗ khác đọc theo tên gốc sẽ bị undefined và model 3D không hiện. Vì vậy quy ước là: dữ liệu giữ nguyên snake_case, khi cần dùng thì gán vào biến cục bộ camelCase, ví dụ var modelUrl = product.model_3d_url, rồi dùng biến đó trong code. Cách này vừa tôn trọng cấu trúc dữ liệu gốc, vừa giữ code JavaScript đúng phong cách camelCase. Quy ước được ghi trong README mục Quy ước phát triển để cả nhóm theo. Các phương án còn lại sai vì snake_case và camelCase là hai kiểu khác nhau, JavaScript phân biệt chữ hoa chữ thường nên không thể dùng lẫn; đổi hết sang camelCase sẽ phá vỡ khớp với thiết kế CSDL và các file JSON khác; đổi hàm biến sang snake_case thì trái với quy ước camelCase của nhóm."
 },
 {
  "id": "bv13-a10",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: quy ước đường dẫn ảnh và model trong JSON tính từ gốc repo, khi hiển thị luôn gọi asset(duongDan), giải quyết vấn đề gì và nếu bỏ quy ước này thì hỏng ở đâu?",
  "options": [
   "Vì trang nằm trong scripts/ còn ảnh nằm trong assets/, nếu viết đường dẫn tương đối trực tiếp trong HTML hay JS thì rất dễ sai khi trang ở độ sâu khác nhau. Hàm asset(duongDan) thêm tiền tố gốc repo một chỗ duy nhất, nên JSON chỉ cần lưu đường dẫn tính từ gốc và mọi trang gọi asset là hiển thị đúng, kể cả khi deploy lên GitHub Pages.",
   "Vì hàm asset tự động nén ảnh cho nhẹ nên trang tải nhanh hơn, nếu bỏ thì ảnh nặng làm trang chậm.",
   "Vì hàm asset tự động chuyển ảnh sang định dạng 3D nên sản phẩm nào cũng xem được 3D, nếu bỏ thì mất tính năng 3D.",
   "Vì hàm asset tự động tải ảnh từ internet về máy người dùng nên tiết kiệm dung lượng repo, nếu bỏ thì repo phình to."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là asset(duongDan) gom việc thêm tiền tố đường dẫn về một chỗ. Trong RoomCraft, toàn bộ trang khách nằm trong scripts/, trang admin nằm trong scripts/admin/, còn ảnh sản phẩm, ảnh phòng, model 3D nằm trong assets/. Nếu mỗi trang tự viết đường dẫn tương đối thì trang ở scripts/ sẽ dùng ../assets/..., trang ở scripts/admin/ sẽ dùng ../../assets/..., rất dễ sai và khi deploy lên GitHub Pages với đường dẫn con của repo càng dễ lỗi. Vì vậy JSON chỉ lưu đường dẫn tính từ gốc repo, ví dụ assets/products/abc.jpg, và khi hiển thị luôn gọi asset(duongDan) để hàm này thêm tiền tố đúng. Nhờ vậy cùng một file JSON dùng được cho mọi trang ở mọi độ sâu, và khi đổi cách deploy chỉ cần sửa một chỗ trong hàm asset. Nếu bỏ quy ước này, ảnh sẽ vỡ hàng loạt khi chuyển trang hoặc khi deploy, model 3D không tải được, và việc sửa sẽ phải rà từng file HTML và JS. Các phương án còn lại sai vì asset không nén ảnh, không chuyển sang 3D, và không tải ảnh từ internet."
 },
 {
  "id": "bv13-a11",
  "chapter": 13,
  "difficulty": 1,
  "type": "single",
  "question": "Thầy sẽ hỏi: nhóm em dùng công cụ AI nào trong quá trình làm, cụ thể là chatbot và sinh model 3D, và vai trò của chúng khác nhau ra sao?",
  "options": [
   "Chatbot là tính năng trong sản phẩm: scripts/components/chatbot.js lo giao diện chat và FAQ nhanh, còn server.js gọi mô hình ngôn ngữ qua gateway tương thích OpenAI khi có server chạy, không có server thì fallback FAQ và tìm sản phẩm. Sinh 3D là công cụ hỗ trợ sản xuất tài nguyên: nhóm dùng Hunyuan3D-2 trên Kaggle tạo model glb từ ảnh sản phẩm, rồi đưa vào assets/models/ để model-viewer hiển thị. Một cái phục vụ người dùng cuối, một cái phục vụ khâu chuẩn bị dữ liệu.",
   "Cả hai đều là tính năng người dùng cuối: chatbot để tư vấn, còn sinh 3D là nút bấm trên web để người dùng tự tạo model từ ảnh họ tải lên.",
   "Cả hai đều là công cụ nội bộ của nhóm: chatbot chỉ để nhóm hỏi đáp khi code, còn sinh 3D chỉ để làm ảnh minh họa trong báo cáo chứ không đưa lên web.",
   "Cả hai đều chạy trên GitHub Pages: chatbot gọi thẳng API từ trình duyệt, còn sinh 3D chạy trong trình duyệt bằng WebGPU nên không cần Kaggle."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là chatbot là tính năng sản phẩm còn sinh 3D là công cụ hỗ trợ sản xuất tài nguyên. Chatbot có hai tầng: tầng client trong scripts/components/chatbot.js render giao diện, hiển thị câu hỏi thường gặp từ chatbot_faqs.json, và khi không có server thì fallback trả lời theo FAQ cộng tìm kiếm sản phẩm trong catalog; tầng server trong server.js chỉ dùng Standard Library của Node, nhận POST /api/chat rồi gọi mô hình ngôn ngữ qua gateway OpenAI-compatible, có retry và giới hạn max_tokens. Sinh 3D thì khác hẳn: nhóm dùng notebook Kaggle với Hunyuan3D-2 để tạo model glb từ ảnh sản phẩm, model được lưu trong assets/models/ và gắn vào sản phẩm qua trường model_3d_url, rồi model-viewer hiển thị trên web. Đây là công cụ hỗ trợ khâu chuẩn bị dữ liệu, không phải tính năng người dùng bấm để sinh model. Các phương án còn lại sai vì người dùng không tự sinh 3D trên web, chatbot không phải công cụ nội bộ, và chatbot không gọi thẳng API từ trình duyệt vì key phải giữ ở server trong .env."
 },
 {
  "id": "bv13-a12",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: vì sao nhóm em đặt khóa API của chatbot trong file .env phía server thay vì nhúng thẳng vào chatbot.js cho tiện? Nếu nhúng thẳng thì hậu quả là gì?",
  "options": [
   "Vì chatbot.js được tải xuống trình duyệt của mọi người, ai mở DevTools cũng đọc được mã nguồn, nên nếu nhúng khóa vào đó thì khóa bị lộ ngay và có thể bị lạm dụng. Nhóm để khóa trong .env, file này bị git-ignore, server.js tự đọc bằng loadEnv rồi mới gọi mô hình, nên khóa không bao giờ ra tới trình duyệt.",
   "Vì nhúng khóa vào chatbot.js sẽ làm file nặng thêm vài kilobyte, khiến trang tải chậm nên nhóm chọn .env cho nhẹ.",
   "Vì GitHub Pages không cho phép file JS chứa chuỗi dài, nên nhóm buộc phải để khóa ở .env để deploy được.",
   "Vì .env giúp khóa tự động đổi mỗi ngày cho an toàn, còn nhúng thẳng thì khóa cố định nên kém bảo mật."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là giữ khóa ở server để không lộ ra trình duyệt. Trong RoomCraft, chatbot.js là file chạy trên trình duyệt, ai cũng tải về và đọc được. Nếu nhúng DEEPSEEK_API_KEY vào đó, khóa sẽ nằm trong mã nguồn công khai trên GitHub Pages, người lạ có thể lấy và gọi API bằng tài khoản của nhóm, gây tốn phí hoặc bị khóa tài khoản. Vì vậy nhóm để khóa trong file .env ở thư mục gốc, file này bị git-ignore nên không lên repo; server.js tự viết loadEnv đọc .env, rồi postDeepSeek gọi gateway qua module https với khóa gắn ở header phía server. Trình duyệt chỉ gọi POST /api/chat tới server cục bộ, không bao giờ thấy khóa. Đây cũng là lý do trên GitHub Pages chatbot chỉ chạy chế độ fallback FAQ, vì không có server giữ khóa. Các phương án còn lại sai vì mục đích chính là bảo mật chứ không phải dung lượng, GitHub Pages không cấm chuỗi dài trong JS, và .env không tự đổi khóa."
 },
 {
  "id": "bv13-a13",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: quy trình sinh model 3D của nhóm em gồm những bước nào, và vì sao nhóm chỉ làm 3D cho một phần sản phẩm chứ không làm hết catalog?",
  "options": [
   "Nhóm chọn sản phẩm tiêu biểu, lấy ảnh chính diện, chạy Hunyuan3D-2 trên Kaggle để tạo model glb, kiểm tra model rồi đưa vào assets/models/ và gắn đường dẫn vào trường model_3d_url trong products.json. Nhóm chỉ làm một phần vì mỗi model tốn thời gian GPU và dung lượng, trong khi mục tiêu môn học là chứng minh ý tưởng 3D chạy được, không cần phủ toàn bộ catalog.",
   "Nhóm chạy một script tự động quét toàn bộ 953 sản phẩm và sinh model cho tất cả trong một lần, nhưng vì Kaggle giới hạn thời gian nên chỉ một phần chạy xong.",
   "Nhóm thuê dịch vụ bên ngoài sinh model cho toàn bộ catalog, nhưng vì hết ngân sách nên dừng lại ở một phần.",
   "Nhóm chỉ làm 3D cho sản phẩm đắt nhất vì sản phẩm rẻ không cần xem 3D, đây là quyết định kinh doanh chứ không phải giới hạn kỹ thuật."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là quy trình chọn sản phẩm tiêu biểu, sinh model bằng Hunyuan3D-2 trên Kaggle, kiểm tra rồi gắn vào dữ liệu. Cụ thể: nhóm chọn các sản phẩm tiêu biểu, thường là đồ nội thất chính như sofa, bàn, đèn, ghế; lấy ảnh chính diện làm đầu vào; chạy notebook trong tools/3d/ trên GPU miễn phí của Kaggle với Hunyuan3D-2 để tạo model glb; kiểm tra model xoay được, không lỗi hình; đưa file vào assets/models/; gắn đường dẫn vào trường model_3d_url trong products.json. Trang chi tiết sản phẩm và popup Shop the Room chỉ hiện nút View in 3D khi sản phẩm có model. Nhóm chỉ làm một phần vì mỗi model tốn thời gian GPU và dung lượng repo, trong khi mục tiêu môn học là chứng minh trải nghiệm 3D chạy được trong luồng mua, không cần phủ toàn bộ catalog. Giới hạn đã biết là mỗi món chỉ có một ảnh chính diện nên mặt sau và phần bị che thường sai hình hoặc sai màu. Các phương án còn lại sai vì nhóm không có script tự động quét toàn bộ, không thuê dịch vụ ngoài, và không chọn theo giá sản phẩm."
 },
 {
  "id": "bv13-a14",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: nhóm em chia dự án thành hai đợt, mỗi đợt nhắm mục tiêu gì, và vì sao lại chọn thứ tự đó thay vì làm các tính năng nổi bật trước?",
  "options": [
   "Đợt một làm nền và luồng mua cốt lõi: xử lý dữ liệu, khung chung, tài khoản, catalog, chi tiết sản phẩm, giỏ hàng, thanh toán, đơn hàng và Admin cơ bản. Đợt hai làm trải nghiệm không gian và mở rộng: Shop the Room với hotspot, 3D Viewer, Complete Your Room, đồ cũ, chatbot, dashboard và hoàn thiện giao diện. Thứ tự này vì các tính năng nổi bật đều cần dữ liệu và giỏ hàng thật để nối vào, làm ngược lại sẽ có tính năng đẹp nhưng không mua được.",
   "Đợt một làm hết các tính năng nổi bật như 3D và chatbot để kịp demo, đợt hai mới làm giỏ hàng và thanh toán vì phần đó dễ làm sau.",
   "Đợt một làm giao diện cho đẹp để chụp ảnh báo cáo, đợt hai mới làm toàn bộ logic phía sau, vì giao diện là thứ thầy nhìn thấy trước.",
   "Đợt một và đợt hai giống hệt nhau, mỗi đợt làm lại toàn bộ dự án từ đầu để so sánh cách làm nào tốt hơn."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là đợt một làm nền và luồng mua cốt lõi, đợt hai làm trải nghiệm không gian và mở rộng. Báo cáo chương 1 của nhóm ghi rõ chuỗi phụ thuộc: Shop the Room cần catalog, giỏ hàng và Admin gắn sản phẩm; 3D Viewer cần trang chi tiết và popup; Complete Your Room cần dữ liệu sản phẩm và dữ liệu phòng; đồ cũ dùng chung luồng mua; chatbot lấy câu trả lời từ catalog; Admin cung cấp dữ liệu đầu vào cho mọi thành phần. Vì vậy thứ tự hợp lý là dữ liệu và Core E-commerce trước, rồi Admin, rồi Shop the Room, 3D Viewer, Complete Your Room, đồ cũ, chatbot. Đợt một cũng là lúc chốt quy ước code, cấu trúc thư mục và quy trình Git, để đợt hai nhiều người làm song song mà ít conflict. Nếu làm ngược, ví dụ làm 3D trước khi có trang chi tiết, thì nút View in 3D không có chỗ gắn, hoặc làm Shop the Room trước khi có giỏ hàng thì nút Add to Cart trong popup không cập nhật được gì. Các phương án còn lại sai vì làm nổi bật trước sẽ tạo tính năng treo, làm giao diện trước sẽ phải sửa lại khi logic thay đổi, và hai đợt không thể giống hệt nhau."
 },
 {
  "id": "bv13-a15",
  "chapter": 13,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy sẽ hỏi tình huống: đến cuối đợt hai, một bạn bận nên phần marketplace chưa xong, trong khi cả nhóm cần demo trọn luồng. Nhóm em quyết định thế nào và vì sao không cố làm hết mọi thứ?",
  "options": [
   "Nhóm em ưu tiên giữ luồng chính chạy trọn vẹn từ Explore Room đến Buy, nên dồn người vào các trang còn thiếu của luồng đó, còn marketplace nếu chưa xong thì thu hẹp phạm vi hoặc tạm ẩn mục chưa hoàn thiện và ghi rõ trong phần giới hạn đã biết. Cách này giữ được câu chuyện demo mạch lạc thay vì nhiều tính năng dở dang.",
   "Nhóm em để nguyên marketplace dở dang và vẫn demo, vì thầy sẽ hiểu là do thiếu thời gian nên không cần xử lý gì thêm.",
   "Nhóm em bỏ luôn giỏ hàng và thanh toán để dồn toàn lực làm marketplace cho đủ số trang, vì số lượng trang quan trọng hơn luồng mua.",
   "Nhóm em giữ nguyên phân công, không ai giúp bạn kia, và trong buổi demo sẽ giải thích là phần đó do một bạn phụ trách nên nhóm không chịu trách nhiệm."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là ưu tiên luồng chính và thu hẹp phạm vi phần chưa xong. Báo cáo của nhóm phân loại theo MoSCoW: Must have gồm toàn bộ Core E-commerce, Admin cơ bản và Shop the Room; Should have gồm 3D Viewer, Complete Your Room, wishlist và khu vực đồ cũ; Could have gồm chatbot, dashboard, mã giảm giá. Marketplace đồ cũ nằm ở mức Should have, nên khi tiến độ bị áp lực thì đây là phần được phép thu hẹp trước, miễn là luồng Explore Room đến Buy vẫn chạy trọn. Cách xử lý thực tế là dồn người vào các trang còn thiếu của luồng chính, kiểm thử lại toàn luồng, và nếu marketplace chưa xong thì ẩn hoặc ghi rõ trong mục Giới hạn đã biết của README và báo cáo. Điều này trung thực và dễ bảo vệ hơn là demo một tính năng dở dang. Các phương án còn lại sai vì để dở dang mà không nói là thiếu trách nhiệm, bỏ giỏ hàng để làm marketplace là đánh đổi sai vì giỏ hàng là Must have, còn đổ lỗi cho một bạn là cách làm nhóm không nên có."
 },
 {
  "id": "bv13-a16",
  "chapter": 13,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy sẽ hỏi: nếu một thành viên push thẳng vào main và làm hỏng trang đang chạy trên GitHub Pages, nhóm em phát hiện và khắc phục thế nào, và làm gì để không tái diễn?",
  "options": [
   "Vì GitHub Pages deploy từ main, hỏng main là hỏng bản chạy thử, nên nhóm kiểm tra tab Actions xem lần deploy nào hỏng, xem commit gần nhất trên main, dùng git revert để tạo commit đảo ngược thay vì xóa lịch sử, đẩy bản sửa lên main để deploy lại, rồi nhắc lại quy ước không push thẳng và bật branch protection cho main nếu có thể.",
   "Nhóm em xóa toàn bộ lịch sử Git, tạo repo mới và chép code đang chạy trên máy một bạn lên, vì cách đó chắc chắn sạch sẽ.",
   "Nhóm em chờ GitHub tự sửa sau vài giờ, vì GitHub Pages có cơ chế tự phục hồi về bản chạy tốt gần nhất.",
   "Nhóm em đổi nhánh deploy sang một nhánh khác và bỏ mặc main, vì main hỏng thì không cần quan tâm nữa."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là dùng revert để đảo ngược commit hỏng và siết lại quy trình. Vì GitHub Pages deploy từ nhánh main, mỗi lần merge là một lần web được đăng lại, nên một commit hỏng trên main sẽ làm bản chạy thử lỗi ngay. Quy trình xử lý: vào tab Actions xem lần deploy gần nhất có lỗi không, hoặc mở web thấy lỗi thì xem commit gần nhất trên main; xác định commit gây lỗi; chạy git revert mã_commit để tạo commit mới đảo ngược thay đổi đó, cách này giữ nguyên lịch sử và an toàn hơn git reset; push bản revert lên main để GitHub Pages deploy lại; kiểm tra web đã chạy đúng chưa. Sau đó nhóm nhắc lại quy ước trong README: mỗi việc một nhánh, tạo Pull Request vào main, không push thẳng vào main. Nếu repo cho phép, bật branch protection cho main để chặn push trực tiếp và bắt buộc review. Các phương án còn lại sai vì xóa lịch sử làm mất khả năng truy vết và ảnh hưởng cả nhóm, GitHub Pages không tự phục hồi về bản tốt gần nhất, còn bỏ mặc main thì bản demo công khai vẫn hỏng."
 },
 {
  "id": "bv13-a17",
  "chapter": 13,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy sẽ hỏi: nhóm em dùng AI hỗ trợ trong lúc code ở mức nào, và làm sao để không biến việc dùng AI thành copy code mà không hiểu? Em nêu cách nhóm kiểm soát chất lượng.",
  "options": [
   "Nhóm em dùng AI như công cụ gợi ý và tra cứu, ví dụ hỏi cách viết hàm bỏ dấu tiếng Việt hay cách xử lý retry khi gọi API, nhưng mọi đoạn đưa vào dự án đều phải đọc hiểu, chạy thử trên Live Server, đối chiếu với quy ước ES5 và cấu trúc thư mục của nhóm, rồi qua review Pull Request. Ai không giải thích được đoạn code của mình thì không được merge.",
   "Nhóm em dán nguyên câu trả lời của AI vào file, miễn là chạy được, vì mục tiêu là hoàn thành đồ án đúng hạn chứ không cần hiểu hết.",
   "Nhóm em cấm hoàn toàn việc dùng AI, kể cả để tra cú pháp, vì dùng AI là gian lận trong đồ án môn học.",
   "Nhóm em để AI tự commit và tự merge vào main, vì AI viết code nhanh và ít lỗi hơn sinh viên."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là dùng AI như công cụ gợi ý nhưng phải hiểu, chạy thử và qua review. Trong RoomCraft, có những chỗ AI hỗ trợ rất hữu ích, ví dụ gợi ý cách bỏ dấu tiếng Việt bằng normalize NFD rồi xóa ký tự tổ hợp, cách viết retry khi gọi gateway mô hình ngôn ngữ, cách xử lý BOM UTF-8 khi xuất CSV cho Excel đọc tiếng Việt. Nhưng nhóm đặt nguyên tắc: mọi đoạn đưa vào dự án phải được người nhận đọc hiểu, chạy thử trên Live Server, đối chiếu với quy ước của nhóm như ES5, getElementById, snake_case cho dữ liệu, và phải qua review Pull Request. Người review có thể hỏi tác giả giải thích tại sao viết như vậy; nếu không giải thích được thì không merge. Cách này giữ được lợi ích tốc độ của AI mà vẫn đảm bảo cả nhóm hiểu sản phẩm của mình, quan trọng khi bảo vệ đồ án. Các phương án còn lại sai vì dán nguyên mà không hiểu thì khi thầy hỏi sẽ không trả lời được, cấm hoàn toàn là cực đoan vì AI là công cụ hợp lệ, còn để AI tự commit và merge là vi phạm quy trình Git của nhóm."
 },
 {
  "id": "bv13-a18",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: nhóm em dùng Pull Request để review, vậy một PR tốt theo tiêu chí của nhóm gồm những gì, và người review thường kiểm tra những điểm nào?",
  "options": [
   "Một PR tốt của nhóm gọn trong một việc hoặc một trang, có mô tả ngắn thay đổi gì và ảnh hưởng trang nào, không kèm file rác hay file dữ liệu lớn, chạy được trên Live Server. Người review kiểm tra đúng quy ước code, không phá vỡ component dùng chung như header, footer, catalog-filter, kiểm tra đường dẫn ảnh dùng asset, và thử luồng chính bị ảnh hưởng trước khi bấm merge.",
   "Một PR tốt là PR càng lớn càng tốt, gộp nhiều trang và nhiều tính năng trong một lần để tiết kiệm số lần review, miễn là chạy được.",
   "Một PR tốt là PR không cần mô tả, vì người review cứ đọc diff là hiểu, mô tả chỉ làm dài thêm lịch sử.",
   "Một PR tốt là PR do chính tác giả tự merge ngay sau khi mở, vì như vậy mới giữ được tốc độ cho nhóm."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là PR gọn, có mô tả, chạy được và được review theo checklist. Với RoomCraft, một PR tốt thường gắn với một trang hoặc một component, ví dụ nhánh duy/3d chỉ sửa product-detail và thêm model vào assets/models/, hoặc nhánh phuonganh/cart-orders chỉ sửa cart, checkout, orders. Mô tả PR nên nêu thay đổi gì, ảnh hưởng trang nào, đã thử những gì. PR không nên kèm file rác, không kèm assets/products.zip vì file này rất lớn và không lên git, không kèm .env. Người review kiểm tra: code đúng quy ước ES5, getElementById, đặt tên file và biến; có phá vỡ component dùng chung không, ví dụ sửa header.js có làm hỏng menu ở mọi trang không; đường dẫn ảnh có gọi asset không; dữ liệu có giữ snake_case không; và quan trọng nhất là chạy thử luồng chính bị ảnh hưởng, ví dụ sửa catalog-filter thì phải thử cả products và marketplace. Chỉ khi đạt mới merge. Các phương án còn lại sai vì PR quá lớn khó review và dễ che lỗi, không mô tả thì người review mất thời gian đoán, còn tự merge ngay là bỏ luôn bước review."
 },
 {
  "id": "bv13-a19",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: nhóm em làm sao để đảm bảo các component dùng chung như header.js, footer.js, catalog-filter.js không bị một bạn sửa làm hỏng cả website? Em nêu cơ chế phối hợp thực tế.",
  "options": [
   "Vì các file này ảnh hưởng mọi trang, nhóm quy ước chúng thuộc phần khung chung do Quỳnh Kha giữ; ai muốn sửa phải báo trước trong nhóm, tạo nhánh riêng, mở PR nhỏ và người review phải thử nhiều trang liên quan như products, marketplace, rooms, cart trước khi merge. Nhờ vậy một thay đổi nhỏ không âm thầm phá trang khác.",
   "Vì component dùng chung chỉ ảnh hưởng trang của người viết nên không cần phối hợp, ai muốn sửa thì sửa trực tiếp trên nhánh của mình rồi merge.",
   "Vì nhóm em không dùng component dùng chung, mỗi trang tự viết header và footer riêng nên không có rủi ro này.",
   "Vì component dùng chung được GitHub tự kiểm tra trước khi merge, nếu có lỗi GitHub sẽ chặn nên nhóm không cần làm gì thêm."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là quy ước người giữ component và review nhiều trang trước khi merge. Trong RoomCraft, header.js và footer.js inject header/footer cho mọi trang, catalog-filter.js là bộ lọc dùng chung cho products và marketplace, product-card.js và room-card.js chuẩn hóa thẻ hiển thị. Chỉ một lỗi nhỏ trong các file này, ví dụ đổi cấu trúc tham số của catalog-filter, có thể làm hỏng cả hai trang cùng lúc. Vì vậy nhóm quy ước các file này thuộc phần khung chung do Quỳnh Kha phụ trách; ai cần sửa thì báo trước trong nhóm chat, tạo nhánh riêng, mở PR nhỏ và ghi rõ ảnh hưởng trang nào. Người review phải mở Live Server thử ít nhất các trang liên quan, ví dụ sửa catalog-filter thì thử products và marketplace, sửa header thì thử vài trang khách và trang admin, sửa product-card thì thử products và wishlist. Chỉ khi các trang đó vẫn chạy đúng mới merge. Cách này giữ được tính ổn định của bản chạy thử trên GitHub Pages. Các phương án còn lại sai vì component dùng chung ảnh hưởng nhiều trang chứ không chỉ trang của người viết, nhóm có dùng component dùng chung thật, và GitHub không tự kiểm tra lỗi logic khi merge."
 },
 {
  "id": "bv13-a20",
  "chapter": 13,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy sẽ hỏi: nếu phải làm lại từ đầu, nhóm em sẽ giữ nguyên và thay đổi điều gì trong cách quản lý dự án và làm nhóm? Em nêu cả điểm làm tốt và điểm sẽ sửa.",
  "options": [
   "Nhóm em giữ cách chia việc theo trang gắn với cây thư mục, quy trình feature branch cộng Pull Request, và việc tách component dùng chung. Nhóm sẽ sửa ba điểm: chốt quy ước code và cấu trúc thư mục sớm hơn ngay từ đầu đợt một; chia nhỏ PR và review sớm hơn thay vì dồn cuối đợt; và ghi rõ phạm vi từng đợt theo MoSCoW để khi áp lực tiến độ biết phần nào được thu hẹp trước.",
   "Nhóm em sẽ bỏ cách chia việc theo trang và chuyển sang mỗi người làm một mình một bản rồi chọn bản tốt nhất, vì cách đó tránh được mọi conflict.",
   "Nhóm em sẽ bỏ Pull Request và cho mọi người push thẳng vào main, vì review làm chậm tiến độ và nhóm nhỏ thì không cần.",
   "Nhóm em sẽ giữ nguyên mọi thứ vì kết quả cuối cùng đã đạt tỉ lệ kiểm thử cao, nên không có gì cần cải thiện trong cách làm nhóm."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là giữ cách chia việc theo trang, quy trình Git và tách component, đồng thời sửa ba điểm về thời điểm chốt quy ước, nhịp review và phạm vi từng đợt. Điểm làm tốt: chia việc theo trang gắn với cây thư mục giúp mỗi người sở hữu trọn bộ ba file HTML, CSS, JS của trang mình, ít đụng nhau; quy trình feature branch cộng Pull Request giữ main luôn chạy được để GitHub Pages deploy ổn định; tách component dùng chung như header, footer, catalog-filter, product-card giúp tránh trùng lặp. Điểm sẽ sửa: thứ nhất, chốt quy ước code và cấu trúc thư mục ngay từ đầu đợt một, vì nếu chốt muộn thì phải sửa lại nhiều file; thứ hai, chia nhỏ PR và review sớm hơn, vì dồn cuối đợt thì PR lớn khó review và dễ conflict; thứ ba, ghi rõ phạm vi từng đợt theo MoSCoW để khi áp lực tiến độ biết phần nào được thu hẹp trước, tránh tranh cãi. Các phương án còn lại sai vì làm mỗi người một bản là lãng phí và không học được cách phối hợp, bỏ Pull Request thì main dễ vỡ, còn giữ nguyên mọi thứ là bỏ qua bài học thực tế của nhóm."
 },
 {
  "id": "bv13-a21",
  "chapter": 13,
  "difficulty": 1,
  "type": "single",
  "question": "Thầy sẽ hỏi: nhóm em dùng những công cụ gì để phối hợp ngoài Git, và mỗi công cụ đảm nhận việc gì trong quy trình làm việc hằng ngày?",
  "options": [
   "Nhóm em dùng GitHub để lưu mã nguồn, quản lý nhánh, Pull Request và deploy GitHub Pages; file CAY-THU-MUC-ROOMCRAFT.md trong repo để ghi phân công; nhóm chat để báo trước khi sửa file dùng chung và nhờ review; Stitch để thiết kế wireframe và mockup trước khi code; VS Code với Live Server để chạy thử; và Playwright cùng axe-core trong thư mục tests để kiểm thử tự động trước khi chốt đợt.",
   "Nhóm em chỉ dùng Zalo để gửi file qua lại, không dùng GitHub hay công cụ nào khác vì nhóm nhỏ nên không cần.",
   "Nhóm em chỉ dùng Google Docs để viết báo cáo, còn code thì mỗi người giữ trên máy mình đến cuối kỳ mới gộp lại một lần.",
   "Nhóm em chỉ dùng Trello để quản lý công việc, còn mã nguồn thì không cần lưu trữ vì đã có bản trên máy từng bạn."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là mỗi công cụ đảm nhận một việc rõ ràng trong quy trình. GitHub là trung tâm: lưu mã nguồn, quản lý nhánh theo quy ước tên/viec, mở Pull Request để review, và deploy GitHub Pages từ nhánh main. File CAY-THU-MUC-ROOMCRAFT.md trong repo ghi phân công theo cây thư mục để mọi người tra cứu. Nhóm chat dùng để báo trước khi sửa file dùng chung như header.js hay catalog-filter.js, và để nhờ review khi PR đã sẵn sàng. Stitch dùng ở giai đoạn thiết kế, theo phương pháp thiết kế lấy người dùng làm trung tâm, để rà luồng Explore Room đến Buy trên mockup trước khi code. VS Code với Live Server để chạy thử vì phải mở qua máy chủ web mới đọc được JSON và model 3D. Thư mục tests với Playwright và axe-core để chạy kiểm thử tự động trên nhiều cấu hình trước khi chốt đợt. Các phương án còn lại sai vì gửi file qua Zalo làm mất lịch sử, giữ code trên máy đến cuối kỳ thì không phối hợp được, còn không lưu trữ mã nguồn là rủi ro rất lớn."
 },
 {
  "id": "bv13-a22",
  "chapter": 13,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy sẽ hỏi: khi một bạn trong nhóm liên tục trễ deadline phần mình phụ trách, nhóm em xử lý thế nào để vừa giữ tiến độ vừa giữ quan hệ nhóm? Em nêu cách làm cụ thể thay vì chỉ nói chung chung.",
  "options": [
   "Nhóm em xử lý theo ba bước: trao đổi riêng để hiểu nguyên nhân và thống nhất lại phạm vi phần đó theo MoSCoW, nếu cần thì chia nhỏ việc hoặc ghép thêm người; cập nhật lại CAY-THU-MUC-ROOMCRAFT.md và nhịp review để cả nhóm thấy tiến độ; và nếu vẫn trễ thì báo thẳng trong buổi họp nhóm, điều chỉnh phạm vi demo và ghi rõ trong phần giới hạn đã biết, thay vì âm thầm làm hộ rồi cuối kỳ mới nổ.",
   "Nhóm em mặc kệ bạn đó, ai trễ thì tự chịu, nhóm không can thiệp vì sợ mất lòng và sợ bị coi là can thiệp vào việc riêng.",
   "Nhóm em giao hết phần của bạn đó cho một bạn khác làm hộ ngay từ đầu, không nói gì với bạn đó, để bạn đó tự thấy xấu hổ mà sửa.",
   "Nhóm em báo ngay với giảng viên ở buổi học đầu tiên để thầy xử lý, vì đó là cách duy nhất đúng quy định của môn học."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là xử lý theo ba bước: trao đổi riêng, điều chỉnh phạm vi và cập nhật kế hoạch, rồi mới báo nhóm và điều chỉnh demo. Bước một là trao đổi riêng để hiểu nguyên nhân, có thể bạn gặp khó ở phần kỹ thuật như model 3D nặng hay bộ lọc phức tạp, hoặc bận việc cá nhân; từ đó thống nhất lại phạm vi phần đó theo MoSCoW, ví dụ thu hẹp marketplace hoặc tạm gác chatbot, và nếu cần thì chia nhỏ việc hoặc ghép thêm người có kinh nghiệm tương ứng. Bước hai là cập nhật lại CAY-THU-MUC-ROOMCRAFT.md và nhịp review để cả nhóm thấy tiến độ mới, tránh việc người khác vẫn chờ đợi phần đã đổi. Bước ba là nếu vẫn trễ thì báo thẳng trong buổi họp nhóm, điều chỉnh phạm vi demo và ghi rõ trong mục Giới hạn đã biết của README và báo cáo. Cách này giữ tiến độ vì nhóm chủ động điều chỉnh, và giữ quan hệ vì không ai bị bêu riêng hay bị làm hộ một cách âm thầm. Các phương án còn lại sai vì mặc kệ thì cuối kỳ mới nổ, làm hộ âm thầm dễ gây mất lòng và không giúp bạn tiến bộ, còn báo giảng viên ngay từ đầu là bước cuối chứ không phải bước đầu."
 },
 {
  "id": "bv13-a23",
  "chapter": 13,
  "difficulty": 2,
  "type": "multiple",
  "question": "Thầy sẽ hỏi: trong quy trình Git của nhóm em, những việc nào sau đây là bắt buộc phải làm để main luôn chạy được và bản GitHub Pages không bị hỏng? Em chọn các việc đúng theo quy ước nhóm đã ghi. (chọn nhiều đáp án)",
  "options": [
   "Tạo nhánh riêng cho mỗi việc theo dạng tên/viec trước khi code",
   "Mở Pull Request vào main và chờ review trước khi merge",
   "Chạy thử trang bị ảnh hưởng trên Live Server trước khi bấm merge",
   "Push thẳng vào main khi việc nhỏ để tiết kiệm thời gian"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ba việc bắt buộc theo quy ước của nhóm là tạo nhánh riêng, mở Pull Request và chờ review, và chạy thử trang bị ảnh hưởng trước khi merge. README ghi rõ: mỗi việc một nhánh tên/viec, tạo Pull Request vào main, không push thẳng vào main. Vì GitHub Pages deploy từ main, mỗi lần merge là một lần web được đăng lại, nên main phải luôn ở trạng thái chạy được. Tạo nhánh riêng giúp cô lập thay đổi, dễ revert nếu hỏng. Pull Request và review giúp người khác nhìn diff, phát hiện lỗi trước khi vào main. Chạy thử trên Live Server trước khi merge đảm bảo trang bị ảnh hưởng vẫn hoạt động, đặc biệt khi sửa component dùng chung như header, footer, catalog-filter. Việc push thẳng vào main là điều quy ước cấm, vì nó bỏ qua review và dễ làm hỏng bản chạy thử công khai; nếu lỡ xảy ra thì phải dùng git revert để đảo ngược và nhắc lại quy ước."
 },
 {
  "id": "bv13-a24",
  "chapter": 13,
  "difficulty": 3,
  "type": "multiple",
  "question": "Thầy sẽ hỏi: khi xảy ra conflict trong một file dùng chung như catalog-filter.js, những bước nào sau đây là đúng theo cách nhóm em đã xử lý? Em chọn các bước đúng. (chọn nhiều đáp án)",
  "options": [
   "Pull main mới nhất về nhánh của mình để thấy conflict",
   "Đọc cả hai phía trong file để hiểu ý đồ rồi ghép lại thành phiên bản đúng nhất",
   "Chạy thử các trang bị ảnh hưởng sau khi giải quyết conflict",
   "Chọn Keep Current Change để bỏ hết phần của người kia cho nhanh"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ba bước đúng là pull main mới nhất về nhánh, đọc cả hai phía rồi ghép lại, và chạy thử các trang bị ảnh hưởng. Khi conflict xảy ra trong catalog-filter.js, Git đánh dấu các vùng trong file với phần HEAD là của mình và phần incoming là của main. Bước đầu là pull main mới nhất về nhánh của mình để thấy đầy đủ conflict. Bước hai là đọc kỹ cả hai phía để hiểu ý đồ, ví dụ một bạn thêm bộ lọc chất liệu, một bạn thêm bộ lọc màu, rồi viết lại một phiên bản dung hòa giữ cả hai nếu cả hai đều cần. Bước ba là chạy Live Server thử các trang bị ảnh hưởng, với catalog-filter thì phải thử cả products và marketplace, kiểm tra bộ lọc chung vẫn hoạt động và URL đồng bộ tham số đúng. Sau đó xóa dấu conflict, commit và push để PR cập nhật. Việc chọn Keep Current Change là sai vì nó âm thầm xóa việc của người khác, dễ làm mất tính năng đã được review."
 },
 {
  "id": "bv13-a25",
  "chapter": 13,
  "difficulty": 2,
  "type": "multiple",
  "question": "Thầy sẽ hỏi: những quy ước code nào sau đây là đúng với README của nhóm em? Em chọn các quy ước đúng. (chọn nhiều đáp án)",
  "options": [
   "JavaScript dùng ES5 với var và function, lấy phần tử bằng document.getElementById",
   "File và thư mục viết thường, nối bằng gạch ngang như room-detail.html",
   "Trường dữ liệu dùng snake_case để trùng tên cột thiết kế CSDL",
   "Đường dẫn ảnh trong JSON viết tương đối theo từng trang để linh hoạt hơn"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ba quy ước đúng là JavaScript dùng ES5 với var và function cùng document.getElementById, file và thư mục viết thường nối bằng gạch ngang, và trường dữ liệu dùng snake_case. README mục Quy ước phát triển ghi rõ những điều này. ES5 và getElementById được chọn vì dự án deploy tĩnh trên GitHub Pages, không có bước build, nên code phải chạy thẳng trên trình duyệt và dễ đọc cho cả nhóm. Đặt tên file và thư mục viết thường nối bằng gạch ngang như room-detail.html giúp đường dẫn ổn định, tránh lỗi chữ hoa chữ thường khi deploy trên máy chủ Linux của GitHub Pages. Trường dữ liệu dùng snake_case để trùng tên cột trong thiết kế CSDL MySQL ở database/RoomCraft_database.sql, thuận lợi khi sau này chuyển sang backend thật. Quy ước đường dẫn ảnh là tính từ gốc repo và khi hiển thị luôn gọi asset(duongDan), chứ không viết tương đối theo từng trang, vì viết tương đối theo trang rất dễ sai khi trang ở độ sâu khác nhau và khi deploy lên đường dẫn con của GitHub Pages."
 },
 {
  "id": "bv13-a26",
  "chapter": 13,
  "difficulty": 3,
  "type": "multiple",
  "question": "Thầy sẽ hỏi: khi dùng AI hỗ trợ trong lúc code, những nguyên tắc nào sau đây là đúng theo cách nhóm em kiểm soát chất lượng? Em chọn các nguyên tắc đúng. (chọn nhiều đáp án)",
  "options": [
   "Đọc hiểu đoạn code trước khi đưa vào dự án, không dán nguyên xi",
   "Chạy thử trên Live Server và đối chiếu với quy ước ES5, cấu trúc thư mục của nhóm",
   "Đưa qua review Pull Request như mọi thay đổi khác trước khi merge",
   "Dán nguyên câu trả lời của AI vào file miễn là chạy được, vì mục tiêu là đúng hạn"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ba nguyên tắc đúng là đọc hiểu trước khi đưa vào, chạy thử và đối chiếu quy ước, và đưa qua review Pull Request. Nhóm dùng AI như công cụ gợi ý và tra cứu, ví dụ hỏi cách bỏ dấu tiếng Việt bằng normalize NFD, cách viết retry khi gọi gateway mô hình ngôn ngữ, cách xử lý BOM UTF-8 khi xuất CSV. Nhưng mọi đoạn đưa vào dự án phải được người nhận đọc hiểu, vì khi bảo vệ đồ án thầy có thể hỏi bất kỳ chỗ nào và người viết phải giải thích được. Chạy thử trên Live Server và đối chiếu với quy ước của nhóm như ES5, getElementById, snake_case cho dữ liệu, đường dẫn ảnh gọi asset, để đảm bảo đoạn AI gợi ý không phá vỡ cấu trúc chung. Đưa qua review Pull Request như mọi thay đổi khác, người review có thể hỏi tác giả giải thích, nếu không giải thích được thì không merge. Việc dán nguyên xi vì mục tiêu đúng hạn là sai, vì nó biến việc dùng AI thành copy code mà không hiểu, dễ sinh lỗi khó sửa và không bảo vệ được trước hội đồng."
 }
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_BV13; }
