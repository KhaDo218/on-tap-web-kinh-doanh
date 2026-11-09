// Ngan hang on bao ve RoomCraft - da phan loai topic + bien tap bo khung 'Thay' (2026-11-09)
const QUESTIONS_BV3 = [
 {
  "id": "bv3-a01",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Khi mở file base.css và thấy ngay một bảng màu ghi chú ở đầu file, em hãy trình bày: base.css đóng vai trò gì trong toàn bộ dự án RoomCraft, và vì sao nhóm lại gom các biến font, màu, khung trang vào một file dùng chung thay vì rải ra từng trang?",
  "options": [
   "base.css là file CSS nền tảng được nạp trước ở mọi trang, chứa phần đặt lại mặc định, biến font, khung trang, nút, form, thẻ, header, footer, modal và các media query chung; nhóm gom vào một file để mọi trang dùng chung một ngôn ngữ thiết kế, sửa một chỗ là toàn site đổi theo, tránh lặp code và tránh mỗi trang một kiểu",
   "base.css chỉ là file chứa mã màu thô, mỗi trang vẫn tự khai báo lại toàn bộ style của mình nên không có tác dụng dùng chung",
   "base.css là file CSS riêng của trang chủ index, các trang khác không nạp file này mà mỗi trang có một file base riêng",
   "base.css chỉ chứa phần reset margin padding, còn toàn bộ biến màu và font được khai báo rải trong từng file CSS của trang"
  ],
  "correct": [
   0
  ],
  "explanation": "Câu trả lời đúng phải nêu được vai trò nền tảng của base.css. Trong dự án, base.css là file CSS dùng chung cho mọi trang, nạp trước các file CSS riêng của trang. Nó chứa: phần đặt lại mặc định cho toàn bộ phần tử, khai báo biến font trong :root, khung trang container và section, hệ thống chữ display/headline/title, nút, form, thẻ, nhãn, chip, breadcrumb, khung main.subpage, header, footer, modal và các media query chung. Việc gom vào một file giúp cả site thống nhất ngôn ngữ thiết kế Atelier Gallery, khi cần đổi lề trang hay đổi font chỉ sửa một chỗ. Các phương án sai đều hiểu sai bản chất: có phương án cho rằng base.css chỉ chứa mã màu thô, có phương án cho rằng nó là file riêng của trang chủ, có phương án cho rằng nó chỉ reset margin padding. Cả ba đều không đúng với nội dung thực tế của file.",
  "topic": "uiux"
 },
 {
  "id": "bv3-a02",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Trong base.css có khối :root khai báo hai biến --font-display và --font-body. Em giải thích biến CSS (custom property) là gì, hai biến này dùng ở đâu, và vì sao nhóm chọn cách khai báo biến thay vì gõ thẳng tên font ở từng chỗ?",
  "options": [
   "Biến CSS là giá trị được đặt tên, khai báo trong :root nên phạm vi toàn trang; --font-display gán Cormorant Garamond cho logo, tiêu đề, tên sản phẩm, --font-body gán Noto Sans cho chữ giao diện; dùng biến để đổi font một chỗ là toàn site đổi theo, tránh gõ sai tên font và dễ đọc code",
   "Biến CSS chỉ là chú thích cho người đọc, trình duyệt không hiểu nên phải gõ lại tên font thật ở mọi nơi",
   "Biến CSS chỉ dùng được trong file khai báo nó, các file CSS khác muốn dùng phải khai báo lại từ đầu",
   "Biến CSS bắt buộc phải khai báo trong body chứ không được khai báo trong :root, nếu khai báo trong :root trình duyệt sẽ bỏ qua"
  ],
  "correct": [
   0
  ],
  "explanation": "Biến CSS (custom property) là một giá trị được đặt tên, viết dạng hai gạch nối, khai báo trong :root thì phạm vi áp dụng là toàn bộ tài liệu, mọi phần tử đều đọc được. Trong RoomCraft, :root khai báo --font-display là Cormorant Garamond kèm Times New Roman dự phòng, --font-body là Noto Sans kèm Segoe UI và Arial dự phòng. Các lớp như .display, .headline-page, .title-product, #header .logo dùng var(--font-display); body và các ô nhập dùng var(--font-body). Lợi ích: một nguồn sự thật duy nhất cho font, đổi font chỉ sửa một dòng, tránh gõ sai tên font ở hàng chục chỗ, và code đọc lên hiểu ngay vai trò. Phương án sai thứ nhất cho rằng biến chỉ là chú thích, sai vì trình duyệt hiểu và áp dụng. Phương án sai thứ hai cho rằng biến chỉ dùng trong file khai báo, sai vì biến trong :root có phạm vi toàn tài liệu. Phương án sai thứ ba bắt buộc khai báo trong body, sai vì :root chính là cách chuẩn để khai báo biến toàn cục.",
  "topic": "code"
 },
 {
  "id": "bv3-a03",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Trong base.css có quy tắc * { margin: 0; padding: 0; box-sizing: border-box; }. Em giải thích box-sizing: border-box thay đổi cách tính kích thước hộp như thế nào, và vì sao nhóm áp dụng cho mọi phần tử thay vì để mặc định content-box?",
  "options": [
   "Với border-box, width và height khai báo bao gồm cả padding và border, nên một ô nhập width 100% padding 16px border 1px vẫn vừa khung cha không tràn; nhóm áp dụng cho mọi phần tử để tính kích thước nhất quán, tránh phải trừ padding thủ công ở từng chỗ",
   "border-box khiến width chỉ tính phần nội dung, còn padding và border cộng thêm ra ngoài, nên hộp luôn rộng hơn khai báo",
   "border-box chỉ có tác dụng với phần tử có display flex, các phần tử khối thường vẫn tính theo content-box",
   "border-box làm cho padding và border bị bỏ qua hoàn toàn, phần tử chỉ còn phần nội dung hiển thị"
  ],
  "correct": [
   0
  ],
  "explanation": "Box model mặc định là content-box: width và height chỉ tính phần nội dung, padding và border cộng thêm ra ngoài, nên một ô width 100% mà có padding sẽ tràn khung cha. box-sizing: border-box đổi lại: width và height bao gồm luôn padding và border, phần nội dung co lại cho vừa. Trong RoomCraft, các ô nhập .input có width 100%, padding 0 16px, border 1px, nhờ border-box mà vẫn nằm gọn trong form-group. Nhóm áp dụng cho mọi phần tử bằng dấu sao để mọi hộp tính kích thước cùng một kiểu, tránh phải trừ padding thủ công và tránh lỗi tràn ngang. Phương án sai thứ nhất đảo ngược định nghĩa border-box. Phương án sai thứ hai giới hạn border-box cho flex, sai vì thuộc tính này áp dụng cho mọi phần tử. Phương án sai thứ ba nói padding và border bị bỏ qua, sai vì chúng vẫn hiển thị, chỉ là được tính vào kích thước khai báo.",
  "topic": "code"
 },
 {
  "id": "bv3-a04",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Trong base.css có hai kiểu chọn: .container dùng dấu chấm (class) và #header dùng dấu thăng (id). Em phân biệt class và id trong CSS, và giải thích vì sao header, footer lại dùng id còn các khối bên trong dùng class?",
  "options": [
   "Class dùng dấu chấm, gắn cho nhiều phần tử, tái sử dụng được; id dùng dấu thăng, duy nhất trên trang, độ ưu tiên cao hơn class; header và footer là khối duy nhất mỗi trang nên dùng id, còn các khối lặp lại như card, btn, chip dùng class để dùng lại nhiều nơi",
   "Class và id hoàn toàn giống nhau về độ ưu tiên, chỉ khác cú pháp dấu chấm và dấu thăng, nhóm dùng id cho header chỉ vì thói quen",
   "Id dùng dấu chấm, class dùng dấu thăng, id gắn được cho nhiều phần tử còn class chỉ gắn được một phần tử",
   "Class có độ ưu tiên cao hơn id nên nhóm dùng class cho các khối quan trọng như header và footer"
  ],
  "correct": [
   0
  ],
  "explanation": "Class chọn bằng dấu chấm, một phần tử có thể mang nhiều class, nhiều phần tử có thể dùng chung một class, độ ưu tiên thấp hơn id. Id chọn bằng dấu thăng, mỗi id chỉ nên xuất hiện một lần trên trang, độ ưu tiên cao hơn class. Trong RoomCraft, #header và #footer là khối duy nhất mỗi trang, được header.js và footer.js chèn vào một lần, nên dùng id để vừa định danh vừa tăng độ ưu tiên cho các quy tắc bên trong như #header .menu a. Các thành phần lặp lại như .card, .btn, .chip, .badge dùng class để một quy tắc áp cho nhiều phần tử. Phương án sai thứ nhất nói class và id giống nhau về độ ưu tiên, sai vì id cao hơn. Phương án sai thứ hai đảo cú pháp dấu chấm và dấu thăng. Phương án sai thứ ba nói class cao hơn id, ngược hoàn toàn với quy tắc specificity.",
  "topic": "code"
 },
 {
  "id": "bv3-a05",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Khi chỉ vào quy tắc #header .menu a:hover::after trong base.css, em hãy cho biết: dấu hai chấm đôi ::after khác gì dấu hai chấm đơn :hover, và vì sao nhóm dùng ::after để làm gạch chân trượt ra khi rê chuột vào menu?",
  "options": [
   "::after là pseudo-element tạo phần tử ảo phía sau nội dung, còn :hover là pseudo-class chỉ trạng thái rê chuột; nhóm dùng ::after vẽ một đường 1px rồi transform scaleX từ 0 lên 1 khi hover để có hiệu ứng gạch chân trượt mà không cần thêm thẻ HTML",
   "::after là pseudo-class trạng thái, còn :hover là pseudo-element tạo phần tử ảo, hai cái chỉ khác tên gọi",
   "::after và :hover đều là pseudo-class, chỉ khác nhau ở chỗ ::after dùng cho liên kết còn :hover dùng cho nút",
   "::after bắt buộc phải có thuộc tính content chứa chữ hiển thị, không thể dùng để vẽ đường kẻ trang trí"
  ],
  "correct": [
   0
  ],
  "explanation": "Pseudo-element như ::after, ::before tạo ra một phần tử ảo không có trong HTML, thường dùng để trang trí. Pseudo-class như :hover, :focus, :active mô tả trạng thái của phần tử. Trong menu header, thẻ a có position relative, ::after được đặt absolute phủ ngang đáy, cao 1px, nền currentColor, ban đầu transform scaleX(0) nên ẩn, khi :hover hoặc .active thì scaleX(1) nên hiện ra, kèm transition .45s tạo cảm giác gạch chân trượt. Cách này không cần thêm thẻ span hay border-bottom giả, giữ HTML sạch. Phương án sai thứ nhất đảo ngược hai khái niệm. Phương án sai thứ hai gộp cả hai thành pseudo-class. Phương án sai thứ ba nói ::after bắt buộc chứa chữ, sai vì content rỗng vẫn hợp lệ khi chỉ để vẽ hình.",
  "topic": "code"
 },
 {
  "id": "bv3-a06",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Trong base.css có quy tắc .form-group label và quy tắc .breadcrumb a. Em giải thích sự khác nhau giữa bộ chọn con (child, dấu lớn hơn) và bộ chọn hậu duệ (descendant, dấu cách), và cho ví dụ trong dự án nơi nhóm cố ý dùng bộ chọn con để tránh ảnh hưởng quá sâu.",
  "options": [
   "Bộ chọn hậu duệ dấu cách chọn mọi phần tử con cháu ở bất kỳ cấp nào, bộ chọn con dấu lớn hơn chỉ chọn phần tử con trực tiếp một cấp; nhóm dùng main.subpage > .headline-page và main.subpage > .breadcrumb để chỉ định dạng tiêu đề và breadcrumb cấp một, không đụng tới headline nằm sâu bên trong thẻ card",
   "Bộ chọn con dấu lớn hơn chọn mọi cấp con cháu, bộ chọn hậu duệ dấu cách chỉ chọn con trực tiếp, hai cái ngược lại với mô tả thông thường",
   "Hai bộ chọn này hoàn toàn giống nhau, dấu lớn hơn chỉ là cách viết khác của dấu cách cho dễ đọc",
   "Bộ chọn con chỉ dùng được với thẻ div, bộ chọn hậu duệ chỉ dùng được với thẻ a và span"
  ],
  "correct": [
   0
  ],
  "explanation": "Bộ chọn hậu duệ viết bằng dấu cách, ví dụ .breadcrumb a, chọn mọi thẻ a nằm trong .breadcrumb ở bất kỳ cấp nào. Bộ chọn con viết bằng dấu lớn hơn, ví dụ main.subpage > .headline-page, chỉ chọn phần tử con trực tiếp một cấp. Trong base.css, nhóm dùng main.subpage > .breadcrumb và main.subpage > .headline-page để chỉ trang trí breadcrumb và tiêu đề cấp một của khung trang, không ảnh hưởng tới các .headline-section nằm sâu trong card sản phẩm hay trong khối empty. Nếu dùng dấu cách, mọi headline bên trong đều bị đổi cỡ chữ và thêm gạch trang trí, gây lỗi thị giác. Phương án sai thứ nhất đảo ngược định nghĩa hai bộ chọn. Phương án sai thứ hai nói hai bộ chọn giống nhau. Phương án sai thứ ba giới hạn bộ chọn theo loại thẻ, không đúng với đặc tả CSS.",
  "topic": "code"
 },
 {
  "id": "bv3-a07",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Về pseudo-class trạng thái trong base.css: em kể các pseudo-class nhóm dùng cho nút và ô nhập, và giải thích vì sao phải khai báo :hover, :focus, .active chứ không chỉ dựa vào màu mặc định?",
  "options": [
   "Nhóm dùng :hover cho nút và liên kết, :focus cho ô nhập, .active cho chip và nút phân trang đang chọn; khai báo các trạng thái này để người dùng thấy phản hồi rõ ràng khi rê chuột, khi gõ vào ô nhập hay khi đang ở trang hiện tại, đồng thời đảm bảo khả năng truy cập",
   "Nhóm chỉ dùng :hover, không dùng :focus hay .active vì trình duyệt tự xử lý các trạng thái còn lại",
   "Pseudo-class chỉ dùng để trang trí, không ảnh hưởng tới khả năng truy cập nên nhóm khai báo cho đẹp mắt là chính",
   "Nhóm dùng :hover cho ô nhập và :focus cho nút, còn .active chỉ dùng cho menu điều hướng chứ không dùng cho chip"
  ],
  "correct": [
   0
  ],
  "explanation": "Trong base.css, .btn:hover đổi nền từ #202020 sang #383838, .btn-outline:hover đảo màu nền và chữ, .input:focus đổi viền sang #202020, .chip:hover và .chip.active đổi nền sang đen chữ trắng, .catalog-page-link:hover và .active cũng đổi nền. Các trạng thái này cho người dùng phản hồi tức thì: rê chuột biết nút bấm được, focus biết ô nhập đang nhận ký tự, active biết đang ở trang hay bộ lọc hiện tại. Đây cũng là yêu cầu cơ bản của khả năng truy cập, đặc biệt với người dùng bàn phím. Phương án sai thứ nhất nói chỉ dùng :hover, sai vì base.css có cả :focus và .active. Phương án sai thứ hai coi pseudo-class chỉ để trang trí, bỏ qua vai trò phản hồi và truy cập. Phương án sai thứ ba gán ngược :hover cho ô nhập và :focus cho nút, không đúng với file.",
  "topic": "uiux"
 },
 {
  "id": "bv3-a08",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Khi mở trang sản phẩm trên điện thoại và thấy lề trang co lại, lưới 4 cột thành 2 cột, em hãy giải thích cơ chế media query trong base.css đã làm việc này, và vì sao nhóm chọn các mốc 1024, 768, 480 thay vì chỉ một mốc duy nhất?",
  "options": [
   "Media query là khối @media (max-width: ...) chỉ áp dụng khi bề rộng màn hình nhỏ hơn hoặc bằng mốc; ở 1024px container giảm lề còn 40px và grid-4 xuống 3 cột, ở 768px lề còn 20px và grid-3, grid-4 xuống 2 cột, ở 480px grid-3 xuống 1 cột; ba mốc tương ứng ba nhóm thiết bị máy tính bảng nhỏ, tablet, điện thoại để bố cục luôn vừa mắt",
   "Media query chỉ chạy một lần khi tải trang, không cập nhật khi người dùng xoay ngang điện thoại nên nhóm phải dùng nhiều mốc cho chắc",
   "Media query trong base.css chỉ áp dụng cho header và footer, còn lưới sản phẩm do file CSS của trang tự xử lý riêng",
   "Nhóm chọn ba mốc 1024, 768, 480 vì đây là ba kích thước màn hình phổ biến nhất trên thị trường, không liên quan tới nội dung hiển thị"
  ],
  "correct": [
   0
  ],
  "explanation": "Media query là khối @media kèm điều kiện, ở đây dùng max-width để áp dụng khi màn hình hẹp hơn hoặc bằng mốc. Trong base.css: ở 1024px, .container giảm padding từ 64px xuống 40px, .grid-4 xuống 3 cột, .display nhỏ lại, menu header thu gap; ở 768px, .container còn 20px, .section giảm padding, .grid-3 và .grid-4 xuống 2 cột, ẩn ô tìm kiếm và tên người dùng trên header, footer chuyển sang xếp dọc, modal chiếm toàn màn hình; ở 480px, .grid-3 xuống 1 cột và bảng quy tắc mật khẩu về một cột. Ba mốc này tương ứng ba nhóm thiết bị và được chọn theo nội dung: khi lưới 4 cột bắt đầu chật thì xuống 3, khi 3 cột chật thì xuống 2, khi 2 cột vẫn chật trên điện thoại nhỏ thì xuống 1. Phương án sai thứ nhất nói media query chỉ chạy một lần, sai vì nó phản ứng theo bề rộng hiện tại. Phương án sai thứ hai giới hạn media query cho header footer, sai vì lưới cũng nằm trong base.css. Phương án sai thứ ba giải thích theo thị trường thiết bị thay vì theo nội dung, không phải lý do nhóm chọn.",
  "topic": "uiux"
 },
 {
  "id": "bv3-a09",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Vì sao nhóm tự host font trong assets/fonts thay vì chỉ nhúng link Google Fonts? Em trình bày lợi ích của fonts.css tự host, cách @font-face với unicode-range và font-display: swap hoạt động, và trường hợp ngoại lệ trong base.css vẫn gọi Google Fonts.",
  "options": [
   "Nhóm tự host font trong assets/fonts và khai báo @font-face trong fonts.css để demo không cần mạng, tải nhanh và không phụ thuộc dịch vụ ngoài; unicode-range chia file theo bảng chữ cái để trình duyệt chỉ tải phần cần, font-display: swap cho chữ hiện ngay bằng font dự phòng rồi thay khi font tải xong; riêng kiểu nghiêng của Cormorant vẫn gọi Google Fonts, mất mạng thì trình duyệt tự nghiêng chữ thường",
   "Nhóm tự host font chỉ để giảm dung lượng repo, còn unicode-range và font-display không có tác dụng gì trên trình duyệt hiện đại",
   "Nhóm tự host font vì Google Fonts không hỗ trợ tiếng Việt, nên buộc phải tải file woff2 thủ công từ nguồn khác",
   "Nhóm tự host font nhưng vẫn phải gọi Google Fonts cho mọi kiểu chữ, vì @font-face không hoạt động với file woff2"
  ],
  "correct": [
   0
  ],
  "explanation": "fonts.css khai báo @font-face trỏ tới file woff2 trong assets/fonts cho Cormorant Garamond, Noto Sans và Material Symbols. Tự host giúp demo chạy offline, không phụ thuộc Google Fonts, kiểm soát được phiên bản font và tốc độ tải. Mỗi họ font chia nhiều file theo unicode-range: một file vietnamese chứa dấu tiếng Việt, một file latin-ext, một file latin cơ bản; trình duyệt chỉ tải file chứa ký tự thực sự dùng trên trang, tiết kiệm băng thông. font-display: swap cho chữ hiện ngay bằng font dự phòng rồi thay khi font tải xong, tránh chữ tàng hình. Ngoại lệ: base.css vẫn @import Google Fonts cho kiểu nghiêng của Cormorant vì nhóm chỉ đóng gói kiểu thường; mất mạng thì trình duyệt tự nghiêng chữ thường. Phương án sai thứ nhất phủ nhận tác dụng unicode-range và font-display. Phương án sai thứ hai nói Google Fonts không hỗ trợ tiếng Việt, sai. Phương án sai thứ ba nói @font-face không chạy với woff2, sai hoàn toàn.",
  "topic": "uiux"
 },
 {
  "id": "bv3-a10",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Mỗi trang trong RoomCraft có file CSS riêng trong scripts/css/pages. Em giải thích cách nhóm tổ chức CSS theo trang, thứ tự nạp base.css và CSS trang, và vì sao không gộp tất cả vào một file khổng lồ?",
  "options": [
   "Mỗi trang có file CSS riêng đặt trong scripts/css/pages, nạp sau base.css để có thể ghi đè khi cần; base.css lo phần dùng chung còn CSS trang lo phần riêng của trang đó, nhờ vậy trang chỉ tải CSS mình cần, dễ tìm chỗ sửa, nhiều người làm song song không giẫm chân nhau",
   "Nhóm gộp tất cả CSS vào base.css cho gọn, các file trong pages chỉ là bản sao lưu không được nạp",
   "CSS theo trang nghĩa là mỗi trang có một bản base.css riêng, không dùng chung file nào",
   "Thứ tự nạp không quan trọng vì CSS luôn lấy quy tắc khai báo sau cùng bất kể file nào nạp trước"
  ],
  "correct": [
   0
  ],
  "explanation": "RoomCraft tổ chức CSS hai tầng: base.css chứa phần dùng chung cho mọi trang, còn mỗi trang có file riêng trong scripts/css/pages như products.css, cart.css, room-detail.css. Trong HTML, base.css được nạp trước, CSS trang nạp sau, nên quy tắc của trang có thể ghi đè quy tắc chung khi cần mà không phải tăng specificity. Cách này giúp trang chỉ tải CSS liên quan, giảm dung lượng, dễ tìm chỗ sửa theo tên trang, và cho phép nhiều thành viên làm song song vì mỗi người phụ trách file của trang mình. Phương án sai thứ nhất nói gộp hết vào base.css, trái với cấu trúc thực tế. Phương án sai thứ hai nói mỗi trang có base riêng, sai vì base.css dùng chung. Phương án sai thứ ba nói thứ tự nạp không quan trọng, sai vì khi specificity bằng nhau thì quy tắc khai báo sau thắng, nên thứ tự file quyết định.",
  "topic": "code"
 },
 {
  "id": "bv3-a11",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống một bạn trong nhóm thêm vào products.css quy tắc .btn { background: red; } và thấy nút trong trang sản phẩm đổi màu đỏ, nhưng nút trong header vẫn đen, em giải thích hiện tượng này bằng specificity và thứ tự nạp file, và nêu cách sửa nếu muốn đổi màu nút toàn site.",
  "options": [
   "Quy tắc .btn trong products.css có cùng specificity với .btn trong base.css nhưng nạp sau nên thắng ở các nút trong trang sản phẩm; nút trong header do header.js chèn và có quy tắc riêng hoặc nằm ngoài phạm vi trang nên không đổi; muốn đổi toàn site thì sửa .btn trong base.css chứ không thêm quy tắc đè ở từng trang",
   "Hiện tượng xảy ra vì .btn trong products.css có specificity cao hơn hẳn nhờ tên file dài hơn, nên thắng mọi nơi trừ header do header dùng id",
   "Hiện tượng xảy ra vì trình duyệt chỉ áp dụng quy tắc cuối cùng trong toàn bộ site, nên nút header bị bỏ qua do nạp trước",
   "Hiện tượng xảy ra vì nút trong header dùng thẻ button còn nút trong trang dùng thẻ a, hai loại thẻ không liên quan tới nhau"
  ],
  "correct": [
   0
  ],
  "explanation": "Specificity của một bộ chọn tính theo số id, số class, số thẻ. .btn là một class, dù nằm trong base.css hay products.css đều cùng specificity. Khi specificity bằng nhau, quy tắc khai báo sau trong thứ tự nạp thắng. Vì products.css nạp sau base.css, .btn trong products.css đè .btn trong base.css ở các nút thuộc trang sản phẩm. Nút trong header do header.js chèn, có thể mang class khác hoặc nằm trong #header với quy tắc riêng có id nên specificity cao hơn, hoặc trang sản phẩm không nạp products.css cho header. Muốn đổi màu nút toàn site, cách đúng là sửa .btn trong base.css, hoặc thêm biến màu trong :root rồi dùng var, chứ không rải quy tắc đè ở từng trang vì sẽ gây lệch màu. Phương án sai thứ nhất bịa ra specificity theo tên file. Phương án sai thứ hai hiểu sai cơ chế nạp file. Phương án sai thứ ba quy hiện tượng cho loại thẻ, không liên quan.",
  "topic": "code"
 },
 {
  "id": "bv3-a12",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Về quy tắc body:has(.catalog-heading), body:has(.rooms-heading), body:has(.market-header) { overflow-x: clip; } trong base.css, em giải thích :has() làm gì, vì sao nhóm cần nó, và nếu trình duyệt cũ không hỗ trợ thì hậu quả ra sao?",
  "options": [
   "body:has(.catalog-heading) chọn thẻ body khi bên trong có phần tử mang class catalog-heading, tức là chỉ áp overflow-x: clip cho các trang có tiêu đề dạng đó; mục đích là chặn cuộn ngang do phần trang trí tràn ra ngoài; trình duyệt cũ không hỗ trợ :has() sẽ bỏ qua quy tắc, trang có thể bị cuộn ngang nhẹ",
   "body:has(.catalog-heading) chọn mọi phần tử có class catalog-heading bên trong body, tương đương body .catalog-heading, không có gì đặc biệt",
   ":has() là pseudo-class chọn phần tử cha dựa trên phần tử con, nhưng nhóm dùng sai cú pháp nên quy tắc này không bao giờ chạy trên trình duyệt nào",
   "overflow-x: clip dùng để cắt bớt nội dung theo chiều dọc, không liên quan tới cuộn ngang nên quy tắc này không giải quyết được lỗi tràn"
  ],
  "correct": [
   0
  ],
  "explanation": ":has() là pseudo-class quan hệ, cho phép chọn phần tử dựa trên việc nó có chứa phần tử khác khớp bộ chọn hay không. body:has(.catalog-heading) nghĩa là chọn body khi trong body có phần tử class catalog-heading. Nhóm dùng để chỉ áp overflow-x: clip cho các trang danh mục, phòng, marketplace, nơi phần trang trí như chữ ROOMCRAFT chìm hay gradient có thể tràn ra ngoài gây cuộn ngang, mà không ảnh hưởng các trang khác. overflow-x: clip cắt phần tràn theo chiều ngang mà không tạo thanh cuộn. Trình duyệt cũ không hỗ trợ :has() sẽ bỏ qua cả quy tắc, khi đó trang có thể xuất hiện thanh cuộn ngang nhẹ, không vỡ bố cục nhưng kém mượt. Phương án sai thứ nhất hiểu :has() thành bộ chọn hậu duệ thường. Phương án sai thứ hai nói cú pháp sai, không đúng. Phương án sai thứ ba nói overflow-x cắt theo chiều dọc, sai vì x là trục ngang.",
  "topic": "code"
 },
 {
  "id": "bv3-a13",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống thu nhỏ cửa sổ trình duyệt và thấy menu header bị cắt chữ trên điện thoại, em giải thích nhóm đã xử lý bằng media query 768px như thế nào trong base.css, và nêu điểm yếu còn lại của cách làm đó.",
  "options": [
   "Ở 768px, base.css ẩn ô tìm kiếm và tên người dùng, giảm cỡ logo, đổi menu sang justify-content space-between, gap nhỏ, overflow-x auto và ẩn thanh cuộn, chữ nhỏ lại và nowrap; điểm yếu là menu vẫn có thể phải cuộn ngang nếu thêm mục, và ẩn ô tìm kiếm làm mất chức năng tìm kiếm trên điện thoại",
   "Ở 768px, base.css chuyển menu thành dạng xổ dọc có nút hamburger bấm mở, nên không bao giờ bị cắt chữ",
   "Ở 768px, base.css ẩn toàn bộ menu đi và thay bằng nút ba gạch do header.js tự dựng, không liên quan tới CSS",
   "Ở 768px, base.css tăng cỡ chữ menu lên cho dễ đọc và cho menu xuống dòng tự động, nên không cần cuộn ngang"
  ],
  "correct": [
   0
  ],
  "explanation": "Trong khối @media (max-width: 768px), base.css ẩn #header .search và #header .user-name, giảm logo còn 24px, giảm gap header-top, đổi #header .menu sang justify-content: space-between, gap 12px, overflow-x: auto, ẩn thanh cuộn bằng scrollbar-width: none, giảm cỡ chữ menu còn 10.5px, giảm letter-spacing và đặt white-space: nowrap. Nhờ vậy bốn mục menu chia đều và không bị cắt chữ. Điểm yếu: nếu sau này thêm mục menu thứ năm, sáu, menu sẽ phải cuộn ngang, người dùng khó thấy hết; việc ẩn ô tìm kiếm cũng làm mất chức năng tìm kiếm trên điện thoại, nhóm chưa làm nút mở tìm kiếm riêng. Phương án sai thứ nhất nói có hamburger, thực tế base.css không có. Phương án sai thứ hai nói ẩn toàn bộ menu, sai. Phương án sai thứ ba nói tăng cỡ chữ và xuống dòng, ngược với file.",
  "topic": "uiux"
 },
 {
  "id": "bv3-a14",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Khi chỉ vào .container { max-width: 1440px; margin: 0 auto; padding: 0 64px; }, em hãy giải thích từng thuộc tính, và vì sao lề trang lại đổi từ 64px xuống 40px rồi 20px qua các media query?",
  "options": [
   "max-width 1440px giới hạn bề rộng khung trên màn hình lớn, margin 0 auto căn giữa, padding 0 64px tạo lề trong hai bên; lề giảm dần 64 xuống 40 rồi 20 vì màn hình hẹp không đủ chỗ cho lề lớn, giảm lề để nội dung có thêm không gian đọc mà vẫn thoáng",
   "max-width 1440px là bề rộng tối thiểu, margin 0 auto căn trái, padding 0 64px tạo khoảng cách trên dưới; lề giảm dần vì nhóm muốn trang trông khác nhau trên từng thiết bị",
   "padding 0 64px nghĩa là lề trên dưới 64px, trái phải 0; lề giảm dần vì trình duyệt tự động co padding khi màn hình nhỏ",
   "margin 0 auto chỉ có tác dụng khi phần tử có position absolute, còn với khung container bình thường nó không căn giữa được"
  ],
  "correct": [
   0
  ],
  "explanation": "max-width: 1440px giới hạn khung không rộng quá trên màn hình lớn, giữ dòng chữ dễ đọc. margin: 0 auto căn giữa khung theo chiều ngang khi bề rộng nhỏ hơn max-width. padding: 0 64px là padding trên dưới 0, trái phải 64px, tạo lề trong. Ở media query 1024px, padding giảm còn 40px; ở 768px còn 20px. Lý do: trên màn hình hẹp, lề 64px hai bên chiếm quá nhiều không gian, nội dung bị bóp lại; giảm lề giúp nội dung có thêm chỗ mà vẫn giữ khoảng thở. Đây là cách responsive theo nội dung, không phải theo thiết bị cụ thể. Phương án sai thứ nhất hiểu max-width thành tối thiểu và margin căn trái. Phương án sai thứ hai hiểu padding thành trên dưới. Phương án sai thứ ba nói margin auto cần position absolute, sai vì margin auto căn giữa khối bình thường có bề rộng xác định.",
  "topic": "uiux"
 },
 {
  "id": "bv3-a15",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Trong base.css có nhóm lớp chữ .display, .headline-page, .headline-section, .title-product, .lead, .overline. Em giải thích hệ thống phân cấp chữ này, và vì sao nhóm tạo lớp riêng thay vì dùng thẻ h1, h2, h3 trực tiếp?",
  "options": [
   "Nhóm tạo hệ lớp chữ theo vai trò: display cho tiêu đề lớn nhất, headline-page cho tiêu đề trang, headline-section cho tiêu đề khối, title-product cho tên sản phẩm, lead cho đoạn dẫn, overline cho nhãn nhỏ in hoa; dùng lớp thay vì thẻ để cùng một thẻ h2 có thể mang cỡ chữ khác nhau tùy ngữ cảnh, giữ HTML ngữ nghĩa mà vẫn linh hoạt thị giác",
   "Nhóm tạo lớp chữ vì thẻ h1, h2, h3 không dùng được trong HTML5, buộc phải thay bằng div kèm lớp",
   "Nhóm tạo lớp chữ để tránh phải khai báo font-family, vì thẻ h1 mặc định đã có font Cormorant Garamond",
   "Nhóm tạo lớp chữ chỉ để tiện đổi màu, còn kích thước chữ vẫn do trình duyệt tự quyết định theo thẻ"
  ],
  "correct": [
   0
  ],
  "explanation": "base.css định nghĩa các lớp chữ theo vai trò thị giác: .display cỡ 72px cho tiêu đề hero, .headline-page 48px cho tiêu đề trang, .headline-section 31px cho tiêu đề khối, .title-product 19px cho tên sản phẩm, .lead 17px cho đoạn dẫn màu xám, .overline 11px in hoa giãn chữ cho nhãn nhỏ. Các lớp này đều gán font-family var(--font-display) hoặc var(--font-body) tùy vai trò. Dùng lớp thay vì gán thẳng vào thẻ h1, h2, h3 cho phép cùng một thẻ h2 mang cỡ chữ khác nhau ở ngữ cảnh khác nhau, ví dụ tiêu đề khối trong trang chủ và tiêu đề khối trong card, mà HTML vẫn giữ cấu trúc ngữ nghĩa cho SEO và trình đọc màn hình. Phương án sai thứ nhất nói h1 h2 không dùng được trong HTML5, sai. Phương án sai thứ hai nói thẻ h1 mặc định có Cormorant, sai vì trình duyệt mặc định dùng font hệ thống. Phương án sai thứ ba nói lớp chỉ để đổi màu, bỏ qua vai trò cỡ chữ và font.",
  "topic": "uiux"
 },
 {
  "id": "bv3-a16",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống mở trang giỏ hàng và thấy nút Xóa dùng class .btn-link nhưng bị lệch so với nút Xóa ở trang yêu thích, em giải thích vì sao cùng một class mà hiển thị khác nhau, liên hệ tới specificity và thứ tự nạp CSS, và nêu cách nhóm nên kiểm tra.",
  "options": [
   "Cùng class .btn-link nhưng nếu CSS trang giỏ hàng hoặc yêu thích có quy tắc đè như .cart-item .btn-link hay .wishlist .btn-link thì specificity cao hơn .btn-link gốc nên hiển thị khác; cần kiểm tra thứ tự nạp base.css trước CSS trang, và dùng công cụ devtools xem quy tắc nào thắng để sửa đúng chỗ",
   "Cùng class thì luôn hiển thị giống nhau, hiện tượng lệch là do trình duyệt cache CSS cũ, chỉ cần xóa cache là hết",
   "Hiện tượng lệch là do HTML hai trang viết khác nhau về thẻ, CSS không liên quan tới việc hiển thị nút",
   "Hiện tượng lệch là do class .btn-link trong base.css bị lỗi cú pháp nên chỉ áp dụng cho một số trang ngẫu nhiên"
  ],
  "correct": [
   0
  ],
  "explanation": "Khi hai trang cùng dùng class .btn-link mà hiển thị khác nhau, nguyên nhân thường là có quy tắc khác specificity cao hơn đè lên. Ví dụ .cart-item .btn-link gồm hai class nên specificity cao hơn .btn-link một class, hoặc .wishlist button.btn-link gồm class và thẻ. Ngoài ra thứ tự nạp file cũng quan trọng: base.css nạp trước, CSS trang nạp sau, nên quy tắc trang thắng khi specificity bằng nhau. Cách kiểm tra đúng là mở devtools, chọn nút, xem bảng styles quy tắc nào đang thắng và quy tắc nào bị gạch, từ đó sửa ở file đúng chỗ hoặc thống nhất lại tên lớp. Phương án sai thứ nhất đổ cho cache, chỉ đúng khi vừa sửa CSS mà chưa tải lại. Phương án sai thứ hai nói HTML khác thẻ, có thể là một phần nguyên nhân nhưng không phải trọng tâm câu hỏi về specificity. Phương án sai thứ ba nói base.css lỗi cú pháp áp dụng ngẫu nhiên, sai vì CSS lỗi cú pháp thì cả quy tắc bị bỏ, không áp dụng ngẫu nhiên.",
  "topic": "code"
 },
 {
  "id": "bv3-a17",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Về quy tắc .material-symbols-outlined trong base.css và fonts.css, em giải thích icon Material Symbols hoạt động thế nào, vì sao base.css đặt width 1em, overflow hidden, white-space nowrap, và font-variation-settings có tác dụng gì?",
  "options": [
   "Material Symbols là font icon, chữ như favorite hay search được font biến thành hình; base.css đặt width 1em, overflow hidden, white-space nowrap để icon không chiếm quá chỗ và không xuống dòng, font-variation-settings FILL 0 wght 300 chỉnh độ đậm và kiểu tô; fonts.css khai báo @font-face trỏ tới file woff2 tự host",
   "Material Symbols là ảnh SVG nhúng trong HTML, base.css chỉ chỉnh kích thước ảnh, không liên quan tới font",
   "Material Symbols là font chữ thường, chữ favorite hiển thị nguyên văn chứ không thành hình, nên base.css phải ẩn chữ đi",
   "font-variation-settings chỉ dùng cho font chữ thường như Noto Sans, không áp dụng được cho font icon"
  ],
  "correct": [
   0
  ],
  "explanation": "Material Symbols là font icon: mỗi tên icon như favorite, search, shopping_bag là một chuỗi ký tự, font biến chuỗi đó thành hình. fonts.css khai báo @font-face trỏ tới material-symbols-outlined.woff2 tự host. base.css đặt .material-symbols-outlined với display inline-block, width 1em để icon rộng đúng một cỡ chữ, overflow hidden và white-space nowrap để chuỗi tên không bị xuống dòng hay tràn, line-height 1 để căn dòng, vertical-align middle để thẳng hàng chữ, font-variation-settings FILL 0 wght 300 chọn kiểu viền rỗng và độ đậm 300. Nhờ vậy icon hiển thị đồng đều trong nút, menu, badge. Phương án sai thứ nhất nói là ảnh SVG, sai. Phương án sai thứ hai nói chữ hiển thị nguyên văn, sai vì font biến thành hình. Phương án sai thứ ba nói font-variation-settings không áp dụng cho font icon, sai vì Material Symbols là font biến thiên có trục FILL và wght.",
  "topic": "uiux"
 },
 {
  "id": "bv3-a18",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Về khối main.subpage trong base.css: em giải thích ::before với width 100vw, left 50%, transform translateX(-50%) dùng để làm gì, và vì sao nhóm cần isolation: isolate trên main.subpage?",
  "options": [
   "::before tạo dải nền gradient phía sau tiêu đề trang, width 100vw rộng bằng khung nhìn, left 50% rồi translateX(-50%) để dải nền tràn đều hai bên dù main nằm trong container có lề; isolation: isolate tạo ngăn xếp riêng để z-index âm của ::before không chui ra sau body hay đè lên phần tử khác",
   "::before dùng để chèn chữ ROOMCRAFT chìm phía sau tiêu đề, width 100vw để chữ tràn hết màn hình, isolation để chữ không bị mờ",
   "::before dùng để vẽ đường kẻ dưới tiêu đề, width 100vw để đường kẻ dài hết trang, isolation để đường kẻ không bị đè",
   "isolation: isolate dùng để cắt phần nội dung tràn ra ngoài main, thay thế cho overflow hidden"
  ],
  "correct": [
   0
  ],
  "explanation": "main.subpage::before tạo một lớp nền giả gồm gradient và radial-gradient phía sau phần tiêu đề trang. Vì main nằm trong .container có padding hai bên, muốn dải nền tràn sát hai mép màn hình thì đặt width 100vw, left 50%, transform translateX(-50%) để kéo dải nền về giữa khung nhìn. z-index -1 đưa nó ra sau nội dung. isolation: isolate trên main.subpage tạo một ngăn xếp mới, nhờ vậy z-index âm của ::before chỉ nằm sau nội dung main mà không chui ra sau body hay đè lên header, footer. Đây là kỹ thuật phổ biến để làm dải nền tràn viền trong layout có container giới hạn. Phương án sai thứ nhất gán ::before cho chữ ROOMCRAFT, thực tế chữ đó là .auth-page::after. Phương án sai thứ hai gán cho đường kẻ dưới tiêu đề, thực tế đường kẻ là .headline-page::after. Phương án sai thứ ba hiểu isolation thành overflow hidden, sai vì isolation liên quan tới ngăn xếp, không cắt nội dung.",
  "topic": "code"
 },
 {
  "id": "bv3-a19",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống mở trang đăng ký trên điện thoại nhỏ và thấy bảng kiểm tra mật khẩu mạnh (.pw-rules) hiển thị hai cột chật chội, em giải thích nhóm xử lý bằng media query 480px trong base.css, và nêu cách khác có thể làm thay vì media query cố định.",
  "options": [
   "Trong base.css có @media (max-width: 480px) đổi .pw-rules từ grid hai cột sang một cột để chữ không bị chật; cách khác là dùng grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)) để tự xuống cột theo bề rộng, hoặc dùng container query nếu muốn theo bề rộng khung chứa thay vì màn hình",
   "Nhóm xử lý bằng cách ẩn bảng kiểm tra mật khẩu trên điện thoại, người dùng không cần thấy quy tắc mật khẩu",
   "Nhóm xử lý bằng cách tăng cỡ chữ trong .pw-rules để chữ tự xuống dòng, không cần media query",
   "Nhóm xử lý bằng cách đổi .pw-rules sang flex-direction column ở mọi kích thước màn hình, kể cả máy tính"
  ],
  "correct": [
   0
  ],
  "explanation": "Trong base.css, .pw-rules mặc định là grid hai cột với gap 6px 16px. Ở @media (max-width: 480px), nhóm đổi grid-template-columns thành 1fr để các dòng quy tắc xếp dọc, chữ không bị bóp. Cách khác không cần media query cố định là dùng grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)), trình duyệt tự tính số cột theo bề rộng khả dụng, hoặc dùng container query để phản ứng theo bề rộng khung chứa thay vì màn hình, linh hoạt hơn khi component tái sử dụng ở nhiều ngữ cảnh. Phương án sai thứ nhất nói ẩn bảng kiểm tra, trái với mục đích hướng dẫn người dùng. Phương án sai thứ hai nói tăng cỡ chữ để tự xuống dòng, không giải quyết gốc. Phương án sai thứ ba nói đổi sang một cột ở mọi kích thước, làm mất lợi ích hai cột trên máy tính.",
  "topic": "uiux"
 },
 {
  "id": "bv3-a20",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Trong base.css có @media (prefers-reduced-motion: reduce) tắt animation subpage-rise và hiệu ứng đèn đung đưa ở footer. Em giải thích media query này dùng để làm gì, vì sao nhóm phải thêm nó, và nếu bỏ đi thì ảnh hưởng ai?",
  "options": [
   "prefers-reduced-motion là media query phản ứng theo thiết lập giảm chuyển động của hệ điều hành; nhóm thêm để người dùng nhạy cảm với chuyển động, chóng mặt hoặc rối loạn tiền đình không bị khó chịu khi animation chạy; nếu bỏ đi, nhóm người dùng này vẫn phải chịu hiệu ứng dù đã tắt trong hệ điều hành",
   "prefers-reduced-motion dùng để tắt animation trên điện thoại yếu, giúp tiết kiệm pin, không liên quan tới người dùng",
   "prefers-reduced-motion chỉ áp dụng cho video, không áp dụng cho animation CSS nên nhóm thêm vào cho đủ bộ",
   "prefers-reduced-motion là media query do nhóm tự đặt tên, trình duyệt không hiểu nên khối này không bao giờ chạy"
  ],
  "correct": [
   0
  ],
  "explanation": "prefers-reduced-motion là media query chuẩn của CSS, phản ứng theo thiết lập giảm chuyển động trong hệ điều hành của người dùng. Trong base.css, khối này tắt animation subpage-rise cho breadcrumb, headline và nội dung trang, tắt transition của nút, và tắt hiệu ứng đèn đung đưa mono-swing ở footer. Mục đích là tôn trọng người dùng nhạy cảm với chuyển động, có thể bị chóng mặt hoặc khó chịu khi thấy phần tử trượt, lắc. Đây là yêu cầu của khả năng truy cập. Nếu bỏ đi, người dùng đã tắt hiệu ứng trong hệ điều hành vẫn phải chịu animation, trải nghiệm kém và có thể gây khó chịu thật sự. Phương án sai thứ nhất gán mục đích tiết kiệm pin, không đúng. Phương án sai thứ hai nói chỉ áp dụng cho video, sai vì nó áp dụng cho animation và transition CSS. Phương án sai thứ ba nói trình duyệt không hiểu, sai vì đây là media query chuẩn.",
  "topic": "uiux"
 },
 {
  "id": "bv3-a21",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống được yêu cầu đổi toàn bộ màu nhấn của site từ đen #202020 sang một màu nâu đậm, và đổi font tiêu đề, em trình bày kế hoạch sửa trong base.css, chỉ rõ chỗ nào phải sửa, và cảnh báo những chỗ dễ sót khiến site bị lệch màu.",
  "options": [
   "Vì base.css ghi chú bảng màu nhưng phần lớn mã màu đang viết cứng trong từng quy tắc chứ chưa chuyển hết thành biến, muốn đổi phải sửa đồng loạt các chỗ dùng #202020 như nền nút, chữ chính, viền focus, chip active, header menu active, và cả các file CSS trang; font tiêu đề chỉ cần sửa biến --font-display trong :root là xong; dễ sót ở các file CSS trang và ở các mã màu tương tự như #383838 hover",
   "Chỉ cần sửa dòng khai báo biến màu trong :root là toàn site đổi màu, vì base.css đã chuyển mọi mã màu thành biến",
   "Chỉ cần sửa file fonts.css là đổi được cả màu và font, vì fonts.css chứa toàn bộ cấu hình giao diện",
   "Không cần sửa gì trong base.css, chỉ cần đổi ảnh logo và ảnh sản phẩm là site tự đổi màu theo"
  ],
  "correct": [
   0
  ],
  "explanation": "base.css có ghi chú bảng màu ở đầu file nhưng phần lớn mã màu vẫn viết cứng trong từng quy tắc: #202020 xuất hiện ở body color, a color, .btn background và border, .btn-outline color, .input:focus border, .chip.active background, #header .menu a.active color, .catalog-page-link.active background, v.v. Muốn đổi màu nhấn phải rà toàn bộ base.css và cả các file CSS trang, đặc biệt các mã gần giống như #383838 dùng cho hover, #2E241D ở footer monogram, #B18A52 ở đường kẻ trang trí. Cách bền vững là chuyển các mã này thành biến trong :root trước, rồi mới đổi giá trị biến. Font tiêu đề thì dễ hơn: chỉ sửa --font-display trong :root là mọi lớp dùng var(--font-display) đổi theo. Phương án sai thứ nhất nói chỉ sửa biến là xong, sai vì màu chưa được biến hóa hết. Phương án sai thứ hai nói fonts.css chứa màu, sai. Phương án sai thứ ba nói đổi ảnh là đổi màu, sai hoàn toàn.",
  "topic": "uiux"
 },
 {
  "id": "bv3-a22",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống tổng hợp mở devtools trên trang sản phẩm, chỉ vào một nút và thấy ba quy tắc cùng áp dụng: .btn trong base.css, .btn trong products.css, và #product-actions .btn trong products.css, em giải thích quy tắc nào thắng, vì sao, và nêu quy trình nhóm em dùng để tránh xung đột specificity khi nhiều file CSS cùng áp dụng.",
  "options": [
   "Quy tắc #product-actions .btn thắng vì có một id cộng một class, specificity cao hơn hẳn hai quy tắc chỉ có class; nếu hai quy tắc class bằng điểm thì quy tắc nạp sau thắng; nhóm tránh xung đột bằng cách đặt tên lớp theo khối, hạn chế id trong CSS, ưu tiên sửa base.css khi muốn đổi chung, và kiểm tra devtools trước khi thêm quy tắc đè",
   "Quy tắc .btn trong products.css thắng vì nằm ở file nạp sau cùng, bất kể quy tắc kia có id hay không",
   "Quy tắc .btn trong base.css thắng vì base.css là file gốc của dự án, được ưu tiên hơn các file khác",
   "Cả ba quy tắc hòa nhau, trình duyệt chọn ngẫu nhiên một quy tắc mỗi lần tải trang nên hiển thị không ổn định"
  ],
  "correct": [
   0
  ],
  "explanation": "Specificity tính theo bộ ba số id, class, thẻ. .btn là một class, điểm (0,1,0). .btn trong products.css cũng (0,1,0), bằng điểm nên quy tắc nạp sau thắng. #product-actions .btn gồm một id và một class, điểm (1,1,0), cao hơn hẳn nên thắng cả hai quy tắc kia bất kể thứ tự nạp. Đây là lý do nhóm hạn chế dùng id trong CSS, chỉ dùng cho khối duy nhất như #header, #footer. Quy trình tránh xung đột: đặt tên lớp theo khối và thành phần, không lồng quá sâu, khi muốn đổi diện mạo chung thì sửa base.css chứ không thêm quy tắc đè ở trang, trước khi thêm quy tắc mới thì mở devtools xem quy tắc nào đang thắng để sửa đúng chỗ. Phương án sai thứ nhất nói file nạp sau luôn thắng, sai khi specificity khác nhau. Phương án sai thứ hai nói base.css được ưu tiên vì là file gốc, sai vì CSS không có khái niệm file gốc được ưu tiên. Phương án sai thứ ba nói trình duyệt chọn ngẫu nhiên, sai vì CSS có quy tắc xác định rõ ràng.",
  "topic": "code"
 }
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_BV3; }
