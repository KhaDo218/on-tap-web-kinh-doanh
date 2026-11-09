// Ngan hang on bao ve RoomCraft - bv18.js (16 cau) - da ap audit
const QUESTIONS_BV18 = [
 {
  "id": "bv18-a01",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Thầy hỏi: em hãy giải thích ngắn gọn mô hình client-server trong đồ án RoomCraft, ai là client, ai là server, và chúng giao tiếp với nhau bằng gì?",
  "options": [
   "Client là trình duyệt của người dùng tải các trang HTML/CSS/JS tĩnh từ GitHub Pages hoặc từ server.js, còn server là server.js chạy Node.js cổng 3000 phục vụ file tĩnh và API /api/chat; hai bên giao tiếp qua HTTP, client gửi request bằng fetch còn server trả JSON.",
   "Client là server.js còn server là trình duyệt, vì server.js mới là nơi chứa dữ liệu sản phẩm nên nó đóng vai trò client đi lấy dữ liệu từ trình duyệt.",
   "RoomCraft không có mô hình client-server vì toàn bộ là web tĩnh, mọi thứ chạy trong trình duyệt và không có bất kỳ tiến trình server nào.",
   "Client và server giao tiếp bằng cách dùng chung file JSON trên đĩa, trình duyệt đọc trực tiếp file products.json qua giao thức file:// nên không cần HTTP."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là mô tả đúng mô hình client-server của RoomCraft. Trong đồ án, client là trình duyệt của khách: khi truy cập GitHub Pages, trình duyệt tải index.html, các file CSS/JS và JSON qua HTTP GET. Khi chạy cục bộ bằng node server.js, server.js (Node.js thuần, chỉ dùng http, https, fs, path, url) vừa đóng vai trò web server phục vụ file tĩnh vừa cung cấp endpoint POST /api/chat và GET /api/health. Client gọi API bằng fetch, gửi body JSON chứa message, history, candidates; server xử lý rồi trả về JSON chứa reply, hasError, matchedCount. Các phương án sai vì đảo vai trò client/server, phủ nhận sự tồn tại của server dù server.js rõ ràng là tiến trình server, hoặc nói trình duyệt đọc file JSON qua file:// trong khi thực tế mọi request đều đi qua HTTP."
 },
 {
  "id": "bv18-a02",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Thầy hỏi: HTTP và HTTPS khác nhau ở điểm cốt lõi nào, và vì sao khi triển khai RoomCraft lên GitHub Pages nhóm em lại luôn có HTTPS mà không phải tự cấu hình chứng chỉ?",
  "options": [
   "HTTPS là HTTP chạy trên kênh mã hoá TLS, dữ liệu được mã hoá và xác thực danh tính server bằng chứng chỉ số; GitHub Pages tự cấp chứng chỉ TLS cho tên miền github.io nên nhóm em không phải tự mua hay cấu hình chứng chỉ.",
   "HTTPS chỉ khác HTTP ở chỗ nhanh hơn vì nén dữ liệu tốt hơn, còn về bảo mật thì hai giao thức hoàn toàn giống nhau, không có mã hoá gì thêm.",
   "HTTPS là giao thức riêng dùng cổng 8080 còn HTTP dùng cổng 80, ngoài cổng ra thì hai giao thức giống hệt nhau về mọi mặt kỹ thuật.",
   "GitHub Pages không hỗ trợ HTTPS, nhóm em phải tự tạo chứng chỉ self-signed và nhúng vào repo thì trình duyệt mới chạy được."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: HTTPS là HTTP được bọc trong TLS. Về cơ chế, khi client kết nối HTTPS, hai bên bắt tay TLS để thoả thuận khoá phiên, sau đó toàn bộ request/response HTTP được mã hoá, kèm xác thực server bằng chứng chỉ do CA tin cậy phát hành. Điều này chống nghe lén và chống giả mạo trung gian. Với RoomCraft, khi deploy lên GitHub Pages, nền tảng tự động cấp chứng chỉ TLS cho tên miền github.io nên URL luôn là https, nhóm em không phải mua chứng chỉ. Khi chạy cục bộ bằng server.js trên http://localhost:3000 thì là HTTP thuần, chấp nhận được vì chỉ chạy trên máy mình. Các phương án sai vì cho rằng HTTPS chỉ nhanh hơn chứ không mã hoá, hoặc nhầm HTTPS là giao thức cổng riêng, hoặc nói GitHub Pages không hỗ trợ HTTPS."
 },
 {
  "id": "bv18-a03",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Thầy hỏi: DNS là gì và trong đồ án RoomCraft, khi người dùng gõ địa chỉ trang web thì DNS đóng vai trò gì trước khi trình duyệt tải được trang?",
  "options": [
   "DNS là hệ thống phân giải tên miền sang địa chỉ IP; khi người dùng gõ tên miền, trình duyệt hỏi DNS để lấy IP của máy chủ, sau đó mới mở kết nối TCP/TLS tới IP đó để tải HTML/CSS/JS.",
   "DNS là dịch vụ lưu trữ file tĩnh của website, khi người dùng gõ tên miền thì DNS trả về luôn nội dung index.html cho trình duyệt hiển thị.",
   "DNS là giao thức mã hoá đường truyền giữa trình duyệt và server, đảm bảo dữ liệu không bị nghe lén trên đường đi.",
   "DNS chỉ dùng cho email, còn website thì trình duyệt tự biết IP của server nên không cần tra cứu DNS."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: DNS (Domain Name System) là hệ thống phân giải tên miền thành địa chỉ IP. Khi người dùng gõ https://khado218.github.io/..., trình duyệt và hệ điều hành tra DNS để biết IP của máy chủ GitHub Pages, sau đó mới thiết lập kết nối TCP và bắt tay TLS tới IP đó, rồi gửi request HTTP GET lấy index.html. Kết quả DNS thường được cache ở trình duyệt, hệ điều hành và resolver để lần sau nhanh hơn. Trong đồ án, nhóm em không tự cấu hình bản ghi DNS vì dùng tên miền con github.io do GitHub quản lý. Các phương án sai vì nhầm DNS với dịch vụ lưu trữ file, nhầm với TLS, hoặc phủ nhận vai trò của DNS với website."
 },
 {
  "id": "bv18-a04",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi: hosting của RoomCraft là gì, vì sao nhóm em chọn GitHub Pages thay vì thuê hosting có PHP/MySQL, và lựa chọn đó kéo theo hạn chế gì?",
  "options": [
   "Hosting là GitHub Pages, dịch vụ lưu file tĩnh miễn phí gắn với repo; nhóm em chọn vì đồ án là HTML/CSS/JS thuần không cần backend, deploy bằng push lên branch main là xong, nhưng hạn chế là không chạy được server.js nên chatbot chỉ ở chế độ fallback FAQ và dữ liệu đơn hàng không đồng bộ giữa nhiều người.",
   "Hosting là một VPS Linux nhóm em tự cài Apache, PHP và MySQL, vì vậy mọi tính năng giỏ hàng và đơn hàng đều chạy server-side và đồng bộ hoàn toàn giữa các người dùng.",
   "Hosting là GitHub Pages nhưng vẫn chạy được Node.js vì GitHub Pages hỗ trợ sẵn môi trường Node, nên server.js hoạt động bình thường và chatbot gọi được LLM thật.",
   "Nhóm em không dùng hosting nào cả, mỗi thành viên mở file HTML trực tiếp bằng file:// trên máy mình để demo, không có địa chỉ web công khai."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: RoomCraft dùng GitHub Pages, một dịch vụ hosting tĩnh miễn phí gắn với repo GitHub, deploy bằng cách push lên branch main và bật Pages từ root. Vì toàn bộ frontend là HTML/CSS/JS thuần không build, không cần PHP/MySQL, nên hosting tĩnh là đủ và miễn phí. Hệ quả là GitHub Pages chỉ phục vụ file tĩnh, không chạy được server.js Node.js, nên trên bản online chatbot chỉ dùng fallback FAQ và tìm kiếm sản phẩm phía client; muốn chatbot gọi LLM thật thì phải chạy node server.js cục bộ. Ngoài ra giỏ hàng và đơn hàng lưu localStorage/JSON nên không đồng bộ giữa nhiều người. Các phương án sai vì bịa ra VPS PHP/MySQL, hoặc nói GitHub Pages chạy được Node, hoặc phủ nhận việc có địa chỉ web công khai."
 },
 {
  "id": "bv18-a05",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi: khi chatbot gọi API /api/chat, vì sao nhóm em dùng POST chứ không dùng GET, và nếu đổi sang GET thì có vấn đề gì xảy ra?",
  "options": [
   "Vì POST gửi được body JSON chứa message, history, candidates với nội dung dài và không bị lộ trên URL hay log; đổi sang GET thì dữ liệu phải nhét vào query string, dễ vượt giới hạn độ dài URL, bị ghi vào log và cache, không phù hợp với thao tác tạo phản hồi.",
   "Vì GET không gửi được tiếng Việt có dấu, còn POST thì gửi được mọi ký tự Unicode nên nhóm em buộc phải dùng POST cho mọi request.",
   "Vì POST nhanh hơn GET về mặt giao thức, mỗi request POST tốn ít băng thông hơn nên nhóm em chọn POST để tiết kiệm dữ liệu cho người dùng.",
   "Vì server.js chỉ định nghĩa route cho POST, nếu client gửi GET thì server tự động chuyển thành POST nên thực chất hai phương thức giống nhau."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: POST phù hợp vì /api/chat nhận body JSON gồm message, history (mảng tin nhắn trước), candidates (danh sách sản phẩm gợi ý) và relaxed. Những dữ liệu này dài, có thể chứa tiếng Việt và ký tự đặc biệt, nếu nhét vào query string của GET sẽ dễ vượt giới hạn độ dài URL của trình duyệt và server, bị ghi vào access log, bị cache theo URL và lộ nội dung hội thoại. POST còn đúng ngữ nghĩa vì thao tác này tạo ra một phản hồi mới chứ không chỉ đọc tài nguyên. Trong server.js, route /api/chat được khai báo chỉ nhận req.method === 'POST', còn OPTIONS trả 204 cho CORS preflight. Các phương án sai vì lý do nêu không đúng bản chất (GET vẫn gửi được Unicode nếu encode), hoặc nói POST nhanh hơn, hoặc nói server tự chuyển GET thành POST."
 },
 {
  "id": "bv18-a06",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi: trong server.js, endpoint /api/health trả về những trường gì, và vì sao nhóm em cần một endpoint health check riêng thay vì chỉ có /api/chat?",
  "options": [
   "Endpoint /api/health trả JSON gồm status, hasApiKey, provider, model; nhóm em cần nó để kiểm tra nhanh server đã chạy chưa, đã nạp được API key từ .env chưa và đang dùng model nào, mà không tốn một lượt gọi LLM như khi gọi /api/chat.",
   "Endpoint /api/health trả về toàn bộ danh sách sản phẩm trong kho để client tải về, nhờ đó client không cần đọc products.json nữa.",
   "Endpoint /api/health dùng để đăng nhập admin, nó kiểm tra mật khẩu và cấp token cho các trang quản trị trong thư mục scripts/admin.",
   "Endpoint /api/health không tồn tại trong server.js, nhóm em chỉ có /api/chat và phục vụ file tĩnh, mọi kiểm tra sức khoẻ đều làm thủ công bằng mắt."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: trong server.js, khi pathname === '/api/health' server trả JSON gồm status 'ok', hasApiKey (boolean cho biết đã có DEEPSEEK_API_KEY trong .env chưa), provider 'deepseek' và model đang dùng (mặc định deepseek-ai/deepseek-v4.1-flash-1017, có thể đổi qua biến môi trường DEEPSEEK_MODEL). Endpoint này hữu ích vì nó trả lời ngay ba câu hỏi vận hành: server sống chưa, key đã nạp chưa, model nào đang chạy, mà không tốn token gọi LLM và không bị rate limit 30 request/phút. Khi debug lỗi chatbot, nhóm em gọi /api/health trước để loại trừ nguyên nhân server chưa chạy hoặc thiếu key. Các phương án sai vì bịa rằng health trả danh sách sản phẩm, hoặc dùng để đăng nhập admin, hoặc phủ nhận sự tồn tại của endpoint này."
 },
 {
  "id": "bv18-a07",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi: mã trạng thái HTTP (status code) nào xuất hiện trong server.js của RoomCraft, và với mỗi mã nhóm em xử lý tình huống gì?",
  "options": [
   "Server dùng 200 khi thành công, 204 cho OPTIONS preflight CORS, 400 khi message rỗng, 404 khi không tìm thấy file tĩnh, 429 khi vượt rate limit 30 request/phút mỗi IP, và 500 khi có lỗi xử lý phía server.",
   "Server chỉ dùng duy nhất mã 200 cho mọi trường hợp, kể cả khi lỗi, vì nhóm em muốn client luôn nhận được phản hồi và tự đoán lỗi qua nội dung.",
   "Server dùng 301 để chuyển hướng mọi request về trang chủ, 302 khi người dùng chưa đăng nhập, và 403 khi người dùng không phải admin.",
   "Server dùng 418 khi chatbot không hiểu câu hỏi, 503 khi hết token AI, và 100 để báo tiếp tục gửi dữ liệu."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: server.js dùng các mã chuẩn. 200 cho phản hồi thành công của /api/health, /api/chat và file tĩnh. 204 cho OPTIONS preflight CORS để trình duyệt biết được phép gọi cross-origin. 400 khi body JSON thiếu message (EMPTY_MESSAGE). 404 khi fs.stat không thấy file tĩnh. 429 khi checkRateLimit trả false vì một IP gửi quá 30 request trong 60 giây. 500 khi JSON.parse hoặc xử lý ném lỗi. Ngoài ra phía gọi LLM, server phân biệt 401/405 là lỗi key hoặc hết tiền nên không retry, còn 400 do tham số reasoning thì đổi biến thể rồi thử lại. Các phương án sai vì nói chỉ dùng 200, hoặc bịa ra 301/302/403/418/503 không có trong code."
 },
 {
  "id": "bv18-a08",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi: cache trình duyệt hoạt động thế nào, và trong RoomCraft nhóm em có gặp tình huống sửa file mà người dùng vẫn thấy bản cũ không, cách xử lý ra sao?",
  "options": [
   "Trình duyệt lưu bản sao CSS/JS/ảnh theo header cache và dùng lại mà không hỏi server, nên sau khi deploy bản mới người dùng có thể vẫn thấy bản cũ; nhóm em xử lý bằng cách hard reload khi test và cân nhắc thêm query string phiên bản vào link tài nguyên khi cần.",
   "Cache trình duyệt chỉ áp dụng cho ảnh, không bao giờ áp dụng cho file JS và CSS, nên nhóm em không gặp vấn đề bản cũ bao giờ.",
   "Cache trình duyệt lưu dữ liệu trên server chứ không lưu trên máy người dùng, nên muốn xoá cache phải restart server.js thì người dùng mới thấy bản mới.",
   "RoomCraft tắt hoàn toàn cache bằng cách gửi header no-store cho mọi file, nên mỗi lần mở trang trình duyệt đều tải lại toàn bộ từ đầu."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: cache trình duyệt là cơ chế lưu bản sao tài nguyên (HTML, CSS, JS, ảnh, font) trên máy người dùng, dựa trên các header như Cache-Control, ETag, Last-Modified. Khi tài nguyên còn hạn cache, trình duyệt dùng bản lưu mà không gửi request, nên nếu nhóm em sửa file CSS/JS rồi deploy mà không đổi tên hay thêm query phiên bản, người dùng có thể vẫn thấy giao diện cũ. Cách xử lý thực tế là hard reload (Ctrl+F5) khi test, và khi cần thì thêm tham số như ?v=2 vào link tài nguyên để buộc tải mới. GitHub Pages có cache riêng của CDN nên đôi khi phải chờ vài phút. Các phương án sai vì nói cache chỉ áp dụng cho ảnh, hoặc nhầm cache nằm trên server, hoặc nói dự án tắt cache hoàn toàn."
 },
 {
  "id": "bv18-a09",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi: cookie và localStorage khác nhau ở điểm nào, và vì sao RoomCraft chọn localStorage để lưu giỏ hàng, lịch sử chat thay vì cookie?",
  "options": [
   "Cookie được trình duyệt tự gửi kèm mỗi request HTTP và có giới hạn dung lượng nhỏ khoảng 4KB mỗi cookie, còn localStorage lưu phía client với dung lượng lớn hơn nhiều và không tự gửi kèm request; RoomCraft chọn localStorage vì giỏ hàng và lịch sử chat chỉ cần đọc phía client, không cần server thấy, và dữ liệu có thể vượt 4KB.",
   "Cookie lưu được dung lượng lớn hơn localStorage rất nhiều, nhưng RoomCraft chọn localStorage vì cookie yêu cầu HTTPS còn localStorage thì không.",
   "Cookie và localStorage giống hệt nhau về dung lượng và cách hoạt động, RoomCraft chọn localStorage chỉ vì cú pháp dễ viết hơn cookie.",
   "localStorage tự động gửi dữ liệu lên server mỗi request còn cookie thì không, nên RoomCraft chọn localStorage để server luôn biết giỏ hàng của khách."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: cookie là dữ liệu nhỏ (khoảng 4KB mỗi cookie) được trình duyệt tự động đính kèm vào mọi request tới đúng domain, thường dùng cho session, xác thực. localStorage là kho lưu key-value phía client, dung lượng lớn hơn nhiều (thường vài MB), không tự gửi kèm request, chỉ đọc/ghi bằng JS. RoomCraft chọn localStorage cho giỏ hàng, wishlist, lịch sử chat vì những dữ liệu này chỉ cần phía client đọc để render, không cần server biết, và nội dung có thể vượt 4KB (ví dụ lịch sử chat lưu tối đa 40 tin kèm mã sản phẩm). Nếu dùng cookie sẽ vừa chật vừa làm mọi request nặng thêm. Các phương án sai vì đảo ngược dung lượng, hoặc nói hai cái giống hệt, hoặc nói localStorage tự gửi lên server."
 },
 {
  "id": "bv18-a10",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy hỏi tình huống: khách mở hai tab cùng lúc, tab A thêm sản phẩm vào giỏ, tab B vẫn hiển thị giỏ cũ. Với cách lưu localStorage của RoomCraft, chuyện gì xảy ra và nhóm em xử lý thế nào?",
  "options": [
   "Mỗi tab đọc localStorage tại thời điểm render nên tab B không tự cập nhật; nhóm em xử lý bằng cách đọc lại localStorage mỗi khi mở giỏ hoặc lắng nghe sự kiện storage để đồng bộ giữa các tab, chấp nhận đây là hạn chế của lưu phía client.",
   "localStorage tự động phát sự kiện và đồng bộ tức thời sang mọi tab, nên tab B sẽ cập nhật giỏ ngay khi tab A thêm sản phẩm mà không cần làm gì thêm.",
   "Tab B sẽ ghi đè giỏ của tab A vì localStorage chỉ cho một tab truy cập tại một thời điểm, các tab còn lại bị khoá cho tới khi tab A đóng.",
   "RoomCraft lưu giỏ hàng trong cookie nên mỗi request đều gửi kèm và server tự đồng bộ giỏ giữa các tab, không có chuyện lệch dữ liệu."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: localStorage là kho lưu theo origin, dùng chung cho mọi tab cùng domain, nhưng mỗi tab chỉ đọc giá trị tại thời điểm code gọi getItem. Khi tab A ghi giỏ mới, tab B đang mở không tự biết vì nó đã render từ trước. Trình duyệt có sự kiện storage phát cho các tab khác khi localStorage thay đổi, nên cách xử lý là lắng nghe window.addEventListener('storage', ...) để render lại giỏ, hoặc đơn giản là đọc lại localStorage mỗi khi người dùng mở trang giỏ hàng. Nhóm em chấp nhận đây là hạn chế của lưu phía client, cùng nhóm với hạn chế không đồng bộ giữa nhiều người dùng. Các phương án sai vì nói localStorage tự đồng bộ, hoặc nói có khoá độc quyền giữa các tab, hoặc nhầm sang cookie có server đồng bộ."
 },
 {
  "id": "bv18-a11",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy hỏi tình huống: khách bấm gửi tin nhắn chat nhưng server.js chưa chạy, chatbot.js xử lý thế nào để khách vẫn nhận được câu trả lời?",
  "options": [
   "chatbot.js chuyển sang chế độ fallback: trả lời bằng FAQ trong chatbot_faqs.json và tìm kiếm sản phẩm ngay trên dữ liệu JSON phía client, đồng thời đặt cờ tạm nghỉ để không gọi lại API liên tục trong thời gian ngắn.",
   "chatbot.js hiển thị lỗi mạng và yêu cầu khách bật server.js rồi tải lại trang, không có câu trả lời nào được đưa ra khi thiếu server.",
   "chatbot.js tự động khởi động một server Node.js ngay trong trình duyệt bằng WebAssembly để xử lý câu hỏi, nên không cần server.js vẫn có câu trả lời từ LLM.",
   "chatbot.js gửi câu hỏi thẳng tới API của DeepSeek từ trình duyệt kèm API key nhúng trong file JS, nên không cần server.js vẫn gọi được LLM."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: chatbot.js được thiết kế để không bật backend vẫn trả lời được. Khi gọi API thất bại, nó dùng dữ liệu thật trong data/json (products, categories, styles, coupons, shipping_methods, chatbot_faqs) để trả lời giá, tồn kho, phong cách, phí giao, mã giảm giá. Biến chatApiNghiDen ghi lại thời điểm tạm không gọi AI để tránh mỗi tin nhắn lại chờ timeout, sau đó mới thử lại. Trên GitHub Pages, vì không chạy được server.js, chatbot luôn ở chế độ fallback này. Các phương án sai vì nói chatbot báo lỗi và không trả lời, hoặc bịa ra server chạy trong trình duyệt, hoặc nói gọi thẳng DeepSeek từ client kèm key nhúng, điều mà nhóm em cố tránh vì lộ key."
 },
 {
  "id": "bv18-a12",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy hỏi tình huống: nếu nhóm em đưa API key DeepSeek vào file JS phía client để chatbot gọi thẳng LLM từ trình duyệt, chuyện gì xảy ra và vì sao nhóm em không làm vậy?",
  "options": [
   "Key sẽ lộ cho bất kỳ ai mở DevTools hoặc tải file JS, kẻ xấu dùng key đó gọi LLM tiêu tiền của nhóm; vì vậy nhóm em để key trong .env phía server.js, client chỉ gọi /api/chat và không bao giờ thấy key.",
   "Key nhúng trong JS là an toàn vì trình duyệt tự mã hoá file JS khi tải, người khác không đọc được nội dung nên không lấy được key.",
   "Key nhúng trong JS chỉ lộ khi người dùng bấm F12, mà người dùng bình thường không bao giờ bấm F12 nên rủi ro bằng không, nhóm em chấp nhận được.",
   "Key nhúng trong JS không sao vì DeepSeek giới hạn key theo tên miền gọi tới, chỉ domain của RoomCraft mới dùng được key nên không bị lạm dụng."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: mọi thứ gửi xuống trình duyệt đều công khai với người dùng, họ mở DevTools, xem Network hoặc đọc file JS là thấy key. Kẻ xấu lấy key có thể gọi LLM liên tục làm cạn số dư, hoặc dùng key cho mục đích khác. Vì vậy nhóm em đặt DEEPSEEK_API_KEY trong file .env (đã git-ignore), server.js đọc bằng loadEnv() rồi gắn vào header Authorization Bearer khi gọi gateway, client chỉ gửi message tới /api/chat và nhận reply, không bao giờ thấy key. Đây cũng là lý do endpoint /api/health chỉ trả hasApiKey dạng boolean chứ không trả giá trị key. Các phương án sai vì tin rằng JS được mã hoá, hoặc đánh giá thấp rủi ro F12, hoặc bịa ra cơ chế giới hạn key theo domain."
 },
 {
  "id": "bv18-a13",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy hỏi tình huống: một IP gửi 40 câu hỏi chat trong vòng 1 phút, server.js phản ứng thế nào và vì sao nhóm em đặt ngưỡng 30 request mỗi 60 giây?",
  "options": [
   "Từ request thứ 31 trở đi trong cửa sổ 60 giây, checkRateLimit trả false và server trả mã 429 kèm thông báo yêu cầu đợi 1 phút; ngưỡng này để chặn spam làm cạn token LLM và làm chậm server, đồng thời vẫn đủ rộng cho một người chat bình thường.",
   "Server sẽ tự động chặn IP đó vĩnh viễn, không bao giờ cho chat lại, vì đã vượt ngưỡng nên bị đưa vào danh sách đen lâu dài.",
   "Server không có giới hạn nào, IP đó gửi bao nhiêu cũng được, mỗi request đều được gọi LLM và trả lời bình thường.",
   "Server sẽ trả mã 500 cho mọi request vượt ngưỡng và tự khởi động lại tiến trình Node để giải phóng tài nguyên."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: server.js có Map rateLimits lưu mảng timestamp theo IP. Mỗi lần có request /api/chat, checkRateLimit lọc các timestamp trong 60 giây gần nhất; nếu đã có từ 30 trở lên thì trả false và server trả 429 kèm reply nhắc đợi 1 phút. Ngưỡng 30 request/phút đủ cho một người chat bình thường nhưng chặn được spam hoặc script tự động, bảo vệ token LLM và tài nguyên server. Đây là rate limit theo bộ nhớ tiến trình, restart server là reset, phù hợp đồ án nhỏ. Các phương án sai vì nói chặn vĩnh viễn, hoặc không có giới hạn, hoặc trả 500 và restart server."
 },
 {
  "id": "bv18-a14",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy hỏi tình huống: nhóm em muốn chuyển giỏ hàng và đơn hàng từ localStorage sang đồng bộ thật giữa nhiều người dùng thì cần thay đổi gì trong kiến trúc hiện tại, và vì sao nhóm em chưa làm trong phạm vi đồ án?",
  "options": [
   "Cần một backend thật có cơ sở dữ liệu và API xác thực để lưu giỏ, đơn theo tài khoản, thay vì đọc ghi JSON tĩnh; nhóm em chưa làm vì phạm vi môn học và yêu cầu deploy tĩnh miễn phí trên GitHub Pages, nên chọn localStorage và ghi nhận đây là hạn chế cần cải thiện.",
   "Chỉ cần đổi localStorage sang cookie là đủ đồng bộ giữa nhiều người dùng, vì cookie được gửi kèm mỗi request nên server tự thấy giỏ của từng người.",
   "Chỉ cần tăng dung lượng localStorage lên vài chục MB là có thể đồng bộ giữa nhiều máy khác nhau, vì localStorage lưu trên cloud của trình duyệt.",
   "Không cần thay đổi gì cả, vì orders.json trên GitHub Pages đã tự đồng bộ giữa mọi người dùng nhờ cơ chế ghi file từ xa của GitHub."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: muốn đồng bộ thật cần backend có cơ sở dữ liệu (ví dụ MySQL, PostgreSQL, MongoDB) và API xác thực người dùng, để giỏ hàng và đơn hàng gắn với tài khoản chứ không nằm trên máy khách. Khi đó client gọi API thêm/sửa/xoá giỏ, đặt hàng, server kiểm tra tồn kho và ghi đơn vào DB, nhiều người dùng cùng lúc vẫn nhất quán. Nhóm em chưa làm vì đồ án thuộc môn Phát triển Web Kinh doanh, yêu cầu deploy tĩnh miễn phí trên GitHub Pages, và thời gian giới hạn; nhóm em chọn localStorage cho giỏ và JSON tĩnh cho đơn, đồng thời thẳng thắn ghi nhận đây là điểm yếu cần cải thiện. Các phương án sai vì cookie không giải quyết đồng bộ nhiều người, localStorage không lưu cloud, và GitHub Pages không tự ghi file JSON từ xa."
 },
 {
  "id": "bv18-a15",
  "chapter": 12,
  "difficulty": 2,
  "type": "multiple",
  "question": "Thầy hỏi: trong luồng chatbot của RoomCraft, những bước nào thực sự đi qua mạng (network) và những bước nào chạy hoàn toàn phía client? Em hãy chọn các bước có đi qua mạng. (chọn nhiều đáp án)",
  "options": [
   "Client gửi POST /api/chat tới server.js kèm body JSON chứa message và history",
   "server.js gọi HTTPS tới gateway api-cdn.deploy.com để lấy câu trả lời từ LLM",
   "Trình duyệt tải file chatbot.js và chatbot_faqs.json từ server khi mở trang",
   "Hàm normalizeVi bỏ dấu tiếng Việt trong câu hỏi của khách"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ba bước đầu đều đi qua mạng: client gửi POST /api/chat tới server.js qua HTTP, server.js gọi HTTPS tới gateway OpenAI-compatible để lấy câu trả lời LLM, và khi mở trang trình duyệt tải chatbot.js cùng chatbot_faqs.json từ server. Bước thứ tư là hàm normalizeVi chạy hoàn toàn trong trình duyệt, chỉ xử lý chuỗi tại chỗ, không gửi gì lên mạng. Việc phân biệt rõ bước nào qua mạng giúp nhóm em debug đúng chỗ: nếu câu trả lời chậm có thể do mạng tới gateway, nếu tìm kiếm sản phẩm sai có thể do normalizeVi hoặc dữ liệu JSON. Đây cũng là lý do khi không có server.js, các bước qua mạng bị bỏ, chỉ còn xử lý client nên chatbot vẫn trả lời được bằng FAQ và tìm kiếm nội bộ."
 },
 {
  "id": "bv18-a16",
  "chapter": 12,
  "difficulty": 3,
  "type": "multiple",
  "question": "Thầy hỏi: khi triển khai RoomCraft lên GitHub Pages, những yếu tố nào thuộc về hạ tầng mạng và hosting mà nhóm em phải quan tâm, và những yếu tố nào nhóm em không kiểm soát được? Em chọn các phát biểu đúng. (chọn nhiều đáp án)",
  "options": [
   "GitHub Pages tự cấp HTTPS và CDN nên nhóm em không phải cấu hình chứng chỉ hay máy chủ biên",
   "File quá lớn như assets/products.zip không đưa lên git nên web phải dùng ảnh trực tiếp trong assets",
   "Nhóm em không chạy được server.js Node.js trên GitHub Pages nên chatbot chỉ ở chế độ fallback FAQ",
   "Nhóm em toàn quyền cấu hình DNS, bản ghi CNAME và máy chủ gốc của GitHub Pages theo ý muốn"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ba phát biểu đầu đúng với thực tế triển khai. GitHub Pages tự cấp HTTPS và phục vụ qua CDN nên nhóm em không phải cấu hình chứng chỉ hay server biên. File nặng như assets/products.zip khoảng 426MB không đưa lên git, web dùng ảnh trực tiếp trong assets. GitHub Pages chỉ phục vụ file tĩnh, không chạy Node.js, nên server.js chỉ chạy cục bộ và chatbot online ở chế độ fallback. Phát biểu cuối sai vì nhóm em không kiểm soát hạ tầng gốc của GitHub Pages, chỉ có thể cấu hình tên miền riêng nếu muốn, còn DNS và máy chủ gốc do GitHub quản lý. Hiểu rõ ranh giới này giúp nhóm em trả lời thầy về giới hạn của hosting tĩnh và vì sao phải chọn kiến trúc phù hợp."
 }
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_BV18; }
