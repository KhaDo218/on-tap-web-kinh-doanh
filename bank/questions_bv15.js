// Ngan hang on bao ve RoomCraft - da phan loai topic + bien tap bo khung 'Thay' (2026-11-09)
const QUESTIONS_BV15 = [
 {
  "id": "bv15-a01",
  "chapter": 13,
  "difficulty": 1,
  "type": "single",
  "question": "Nhóm em đặt API key của DeepSeek ở đâu và vì sao nó không bị lộ ra trình duyệt? Em hãy trình bày cơ chế bảo vệ key trong kiến trúc RoomCraft.",
  "options": [
   "Key nằm trong file .env ở phía máy chủ, được server.js tự đọc bằng hàm loadEnv() vào biến môi trường DEEPSEEK_API_KEY, và file .env đã được khai báo trong .gitignore nên không bị đẩy lên GitHub; trình duyệt chỉ gọi tới /api/chat của server chứ không bao giờ thấy key.",
   "Key được nhúng thẳng vào chatbot.js để trình duyệt gọi API cho nhanh, chỉ cần che bằng cách mã hóa chuỗi trong file JS.",
   "Key được lưu trong localStorage của người dùng sau lần đăng nhập đầu tiên, mỗi lần mở web thì chatbot.js đọc lại từ đó để gọi API.",
   "Key được đặt trong file products.json dưới một trường ẩn, server đọc ra rồi dùng, còn trình duyệt thì không hiển thị trường đó nên coi như an toàn."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong RoomCraft, server.js gọi loadEnv() đọc file .env ở thư mục gốc, gán các biến như DEEPSEEK_API_KEY, DEEPSEEK_MODEL, DEEPSEEK_BASE_URL vào process.env. Khi gọi AI, server dùng https.request với header Authorization Bearer cộng với key lấy từ process.env, tức là key chỉ tồn tại trong tiến trình Node trên máy chủ. Phía trình duyệt, chatbot.js chỉ gửi POST /api/chat với nội dung tin nhắn, không hề biết key. File .env nằm trong .gitignore cùng với node_modules, client_secret, nên khi push lên GitHub sẽ không có key. Các phương án còn lại đều sai bản chất: nhúng key vào JS tĩnh là lộ ngay khi mở DevTools, lưu vào localStorage là ai cũng đọc được, còn giấu trong products.json thì file JSON tĩnh tải về máy khách nên cũng lộ.",
  "topic": "sec"
 },
 {
  "id": "bv15-a02",
  "chapter": 13,
  "difficulty": 1,
  "type": "single",
  "question": "File .gitignore của nhóm em chặn những gì và vì sao việc chặn .env lại quan trọng với một đồ án đẩy lên GitHub Pages công khai?",
  "options": [
   "Chặn .env, node_modules, các file zip, client_secret, thư mục tài liệu cá nhân và log Kaggle; quan trọng vì repo GitHub Pages là công khai, ai cũng clone được, nên nếu .env lọt lên thì key API bị lộ và có thể bị lạm dụng gây tốn tiền hoặc bị thu hồi.",
   "Chỉ chặn node_modules cho nhẹ repo, còn .env thì nhóm để lên vì GitHub Pages cần đọc file này để chatbot chạy được trên web.",
   "Chặn các file ảnh nặng và file zip, còn .env thì nhóm mã hóa bằng base64 rồi mới đẩy lên cho an toàn.",
   "Chặn .env nhưng chỉ để tránh xung đột khi merge nhánh, không liên quan gì đến bảo mật vì GitHub tự động ẩn file .env với người ngoài."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. File .gitignore của nhóm chặn .venv, __pycache__, .env, node_modules, các file zip tải từ Kaggle, thư mục _tai-lieu-ca-nhan, data/export, file docx, client_secret*.json và thư mục log Kaggle. Lý do cốt lõi là repo GitHub Pages là public: bất kỳ ai cũng xem được lịch sử commit và nội dung file. Nếu .env lọt lên, key DeepSeek/GLM bị lộ, kẻ xấu có thể gọi API bằng key của nhóm, làm cạn quota hoặc khiến nhà cung cấp khóa key. Các phương án còn lại sai: GitHub Pages không đọc .env phía server vì nó chỉ phục vụ file tĩnh, base64 không phải mã hóa và vẫn giải ngược được, còn GitHub không tự ẩn .env.",
  "topic": "sec"
 },
 {
  "id": "bv15-a03",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Quyền admin trong RoomCraft được kiểm tra ở đâu, và vì sao nhóm em nói đây là điểm yếu cần cải thiện? Em trình bày cơ chế hiện tại và rủi ro.",
  "options": [
   "Quyền admin được kiểm tra phía client trong js/core/auth.js dựa trên roles.json và phiên đăng nhập lưu localStorage; giao diện admin chỉ bị ẩn với người không phải admin, còn dữ liệu vẫn nằm trong file JSON tĩnh nên người hiểu kỹ thuật có thể sửa localStorage hoặc gọi thẳng file để vượt qua, đó là lý do nhóm thừa nhận cần backend xác thực thật.",
   "Quyền admin được kiểm tra ở server.js bằng cách so khớp mật khẩu trong users.json trước khi trả về trang admin, nên không thể vượt qua nếu không có mật khẩu.",
   "Quyền admin được GitHub Pages tự động kiểm tra dựa trên tài khoản GitHub của người truy cập, nên chỉ thành viên nhóm mới vào được trang admin.",
   "Quyền admin được bảo vệ bằng cách đổi tên thư mục scripts/admin thành một chuỗi bí mật, chỉ ai biết đường dẫn mới vào được nên coi như an toàn."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong RoomCraft, xác thực và phân quyền nằm ở js/core/auth.js: sau khi đăng nhập, thông tin người dùng và role được lưu vào localStorage, các trang admin kiểm tra role trước khi render, nếu không phải admin thì ẩn UI hoặc chuyển hướng. Vì toàn bộ là client-side và dữ liệu nằm trong file JSON tĩnh (orders.json, reviews.json, users.json), người dùng có thể mở DevTools sửa localStorage để tự gán role admin, hoặc tải trực tiếp file JSON từ đường dẫn công khai. Đây là điểm yếu nhóm đã thừa nhận trong báo cáo: cần backend xác thực thật, kiểm tra quyền ở server trước mỗi thao tác ghi. Các phương án còn lại sai vì server.js chỉ phục vụ tĩnh và API chat, không kiểm tra đăng nhập admin; GitHub Pages không biết ai là admin; đổi tên thư mục chỉ là che giấu, không phải bảo mật.",
  "topic": "sec"
 },
 {
  "id": "bv15-a04",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Nếu một người dùng rành kỹ thuật mở DevTools sửa localStorage để tự nhận role admin, chuyện gì xảy ra với dữ liệu đơn hàng và đánh giá? Em phân tích luồng và hậu quả.",
  "options": [
   "Họ vào được giao diện admin, thao tác duyệt đơn, sửa đánh giá, và các thay đổi này chỉ ghi vào localStorage của chính máy họ chứ không ảnh hưởng file JSON trên server; nhưng nếu nhóm có công cụ xuất JSON từ admin rồi commit đè lên data/json thì dữ liệu thật mới bị ảnh hưởng, đó là lỗ hổng quy trình cần siết.",
   "Họ sửa được trực tiếp file orders.json và reviews.json trên GitHub vì GitHub Pages cho phép ghi file từ trình duyệt khi đã đăng nhập admin.",
   "Họ không làm được gì vì server.js sẽ phát hiện role giả và trả về lỗi 403, chặn mọi thao tác ghi.",
   "Họ chỉ thấy giao diện admin trống vì dữ liệu được mã hóa bằng SHA-256 nên không đọc được nếu không có khóa giải mã."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Cơ chế hiện tại: admin thao tác trên dữ liệu đã nạp vào localStorage (store.js nạp các bảng rc_<tên> từ JSON), mọi thay đổi như duyệt đơn, sửa đánh giá chỉ nằm trong localStorage của trình duyệt đang dùng. Muốn cập nhật dữ liệu thật cho cả website, nhóm dùng chức năng xuất JSON ở trang admin rồi thay file trong data/json và commit. Vì vậy rủi ro thực tế là: (1) người lạ xem/sửa dữ liệu trên máy họ, không ảnh hưởng người khác; (2) nếu quy trình xuất-commit không kiểm soát, một file JSON bị sửa có thể lọt lên repo. Các phương án còn lại sai: GitHub Pages không cho ghi file từ trình duyệt, server.js không có middleware phân quyền, SHA-256 chỉ là băm một chiều chứ không mã hóa dữ liệu.",
  "topic": "sec"
 },
 {
  "id": "bv15-a05",
  "chapter": 13,
  "difficulty": 1,
  "type": "single",
  "question": "Vì sao dữ liệu orders.json và reviews.json trong RoomCraft có thể bị sửa trực tiếp, và điều đó khác gì so với một website có cơ sở dữ liệu thật? Em giải thích bằng kiến trúc của nhóm.",
  "options": [
   "Vì đây là website tĩnh deploy trên GitHub Pages, orders.json và reviews.json là file văn bản công khai trong repo, ai có quyền push đều sửa được và không có tầng kiểm tra phía server; khác với website có CSDL thật, mọi thao tác ghi đều qua API có xác thực, phân quyền và ràng buộc toàn vẹn.",
   "Vì orders.json và reviews.json được lưu trong localStorage nên bất kỳ ai cũng sửa được từ xa thông qua một API ẩn của GitHub Pages.",
   "Vì hai file này được mã hóa yếu bằng XOR nên có thể giải và sửa dễ dàng, còn website có CSDL thật thì dùng mã hóa mạnh hơn.",
   "Vì GitHub Pages tự động cho phép người dùng cuối chỉnh sửa file JSON trong repo khi họ bấm nút Edit trên giao diện web."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. RoomCraft là site tĩnh: dữ liệu nằm trong data/json dưới dạng file văn bản, được nạp vào localStorage khi mở trang. Bất kỳ ai có quyền ghi vào repo (thành viên nhóm, hoặc kẻ chiếm được tài khoản) đều có thể sửa orders.json, reviews.json rồi push, và website sẽ hiển thị dữ liệu mới ngay. Không có tầng server kiểm tra ai được ghi, ghi cái gì, có hợp lệ không. Với website có CSDL thật, mọi thao tác ghi đi qua API có xác thực, phân quyền, validate và transaction, nên khó sửa trái phép và có log truy vết. Các phương án còn lại sai: localStorage là cục bộ trên máy người dùng chứ không đồng bộ từ xa, file JSON không bị mã hóa, và GitHub Pages không có nút cho người lạ sửa file.",
  "topic": "sec"
 },
 {
  "id": "bv15-a06",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "XSS có thể xảy ra ở đâu trong RoomCraft qua phần đánh giá sản phẩm và qua chatbot, và nhóm em đã làm gì để giảm rủi ro? Em nêu cơ chế và điểm còn hở.",
  "options": [
   "Đánh giá do người dùng nhập được render vào trang chi tiết sản phẩm và trang admin reviews; nếu dùng innerHTML trực tiếp với nội dung chưa lọc thì script độc có thể chạy. Với chatbot, câu trả lời AI cũng được đưa vào khung chat; nhóm đã có sanitizeReply() và chatCheckAiReply() chặn số liệu bịa nhưng chưa lọc thẻ HTML triệt để, nên cần escape hoặc dùng textContent.",
   "XSS không thể xảy ra vì toàn bộ dữ liệu đánh giá và chatbot đều được lưu trong file JSON tĩnh, mà file JSON thì trình duyệt không thực thi được script.",
   "XSS chỉ xảy ra ở trang đăng nhập vì đó là nơi duy nhất có form nhập liệu, còn đánh giá và chatbot đều dùng dữ liệu có sẵn nên an toàn tuyệt đối.",
   "XSS đã được chặn hoàn toàn bằng cách băm SHA-256 mọi nội dung đánh giá trước khi lưu, nên kể cả có chèn script cũng không chạy được."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong RoomCraft, đánh giá được người dùng nhập ở trang chi tiết sản phẩm (js/services/orders.js addReview) rồi hiển thị lại ở trang sản phẩm và trang admin reviews. Nếu đoạn render dùng innerHTML với chuỗi thô, một đánh giá chứa thẻ script hoặc thuộc tính sự kiện có thể chạy khi admin mở trang duyệt. Với chatbot, câu trả lời từ AI được đưa vào khung chat; nhóm đã có sanitizeReply() phía server chặn giá bịa và link sản phẩm không tồn tại, chatCheckAiReply() phía client kiểm tra lại, nhưng lớp này tập trung vào số liệu chứ chưa phải bộ lọc HTML đầy đủ. Hướng khắc phục là escape ký tự đặc biệt hoặc dùng textContent thay innerHTML, thêm CSP. Các phương án còn lại sai: JSON tĩnh vẫn có thể chứa chuỗi độc và bị render, form đăng nhập không phải nơi duy nhất, SHA-256 không vô hiệu hóa script khi render.",
  "topic": "sec"
 },
 {
  "id": "bv15-a07",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "server.js đặt Access-Control-Allow-Origin là dấu sao, điều này có nghĩa gì và rủi ro là gì? Nếu triển khai thật, nhóm em sẽ siết CORS thế nào?",
  "options": [
   "Dấu sao cho phép mọi origin gọi API /api/chat và /api/health; rủi ro là website khác có thể lợi dụng server của nhóm làm proxy gọi AI, tốn quota và che giấu nguồn. Khi triển khai thật nên giới hạn origin về đúng tên miền của RoomCraft, chỉ cho phép phương thức cần thiết và cân nhắc thêm token hoặc kiểm tra Referer.",
   "Dấu sao nghĩa là chỉ máy localhost được gọi, còn tên miền khác bị chặn tự động, nên đây là cấu hình an toàn mặc định của Node.js.",
   "Dấu sao là bắt buộc để GitHub Pages hoạt động, nếu đổi thành tên miền cụ thể thì chatbot sẽ không trả lời được trên bản deploy tĩnh.",
   "Dấu sao chỉ ảnh hưởng tới việc trình duyệt có hiển thị lỗi CORS hay không, còn trên thực tế server vẫn chặn mọi request lạ nên không có rủi ro."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong server.js, mỗi response đều set Access-Control-Allow-Origin: *, Allow-Methods GET, POST, OPTIONS, Allow-Headers Content-Type, Authorization. Dấu sao cho phép bất kỳ trang web nào gọi API từ trình duyệt của người dùng, kể cả trang của kẻ khác, miễn là người dùng đang mở trang đó. Kẻ xấu có thể lợi dụng server của nhóm làm proxy gọi AI, tiêu hao quota key và che giấu nguồn gốc. Khi triển khai thật, nên đổi thành danh sách origin cụ thể của RoomCraft, chỉ cho POST /api/chat, thêm rate limit theo IP (server đã có 30 lượt/phút/IP) và có thể yêu cầu token ngắn hạn. Các phương án còn lại sai: dấu sao không giới hạn localhost, không bắt buộc cho GitHub Pages vì chatbot trên Pages chỉ chạy fallback, và CORS là cơ chế phía trình duyệt chứ server không tự chặn request lạ.",
  "topic": "sec"
 },
 {
  "id": "bv15-a08",
  "chapter": 13,
  "difficulty": 1,
  "type": "single",
  "question": "GitHub Pages phục vụ website qua HTTPS, điều này mang lại lợi ích gì cho RoomCraft và nó không giải quyết được vấn đề bảo mật nào? Em phân tích cả hai mặt.",
  "options": [
   "HTTPS mã hóa đường truyền giữa trình duyệt và GitHub, chống nghe lén và chèn nội dung giữa đường, giúp form đăng nhập, thanh toán và chat an toàn hơn; nhưng HTTPS không bảo vệ dữ liệu tĩnh trên repo, không ngăn người sửa file JSON, không thay thế xác thực phía server, và không bảo vệ key nếu key bị nhúng vào frontend.",
   "HTTPS trên GitHub Pages mã hóa luôn file JSON trong repo nên người ngoài không đọc được orders.json, reviews.json, users.json.",
   "HTTPS thay thế được backend xác thực vì mọi request đều được GitHub Pages kiểm tra chứng chỉ trước khi cho ghi dữ liệu.",
   "HTTPS chỉ cần thiết khi có thanh toán online, còn với RoomCraft dùng COD và chuyển khoản thì không cần, nên nhóm không quan tâm."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. GitHub Pages tự cấp chứng chỉ TLS cho tên miền github.io, nên mọi request từ trình duyệt tới site đều được mã hóa. Điều này chống nghe lén trên wifi công cộng, chống chèn mã độc giữa đường, và là điều kiện để các API trình duyệt hiện đại hoạt động. Tuy nhiên HTTPS chỉ bảo vệ đường truyền, không bảo vệ dữ liệu ở hai đầu: file JSON vẫn công khai trong repo, người có quyền push vẫn sửa được, quyền admin vẫn chỉ là client-side, và nếu key bị nhúng vào JS thì HTTPS cũng không cứu được vì trình duyệt tải file qua HTTPS rồi đọc được. Các phương án còn lại sai: HTTPS không mã hóa file trong repo, không thay thế xác thực, và vẫn cần thiết kể cả khi không thanh toán online vì form đăng nhập, địa chỉ, số điện thoại vẫn là dữ liệu cá nhân.",
  "topic": "sec"
 },
 {
  "id": "bv15-a09",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Nếu một đánh giá sản phẩm chứa đoạn mã độc được duyệt và hiển thị, kịch bản tấn công sẽ diễn ra thế nào và ai là nạn nhân chính? Em mô tả luồng và đề xuất chặn.",
  "options": [
   "Kẻ tấn công gửi đánh giá chứa script, admin duyệt và trang chi tiết sản phẩm render bằng innerHTML khiến script chạy trên trình duyệt của mọi khách xem sản phẩm, có thể đánh cắp phiên đăng nhập trong localStorage; nạn nhân chính là khách và admin, cách chặn là escape HTML khi render và lọc nội dung trước khi lưu.",
   "Script trong đánh giá chỉ chạy trên máy của người viết đánh giá vì mỗi người có localStorage riêng, nên không ảnh hưởng ai khác.",
   "Script trong đánh giá sẽ bị GitHub Pages tự động phát hiện và xóa khi deploy vì GitHub có bộ lọc mã độc cho file tĩnh.",
   "Script chỉ chạy được nếu người xem bấm vào nút Xem thêm của đánh giá, còn mặc định thì trình duyệt không thực thi nội dung đánh giá."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Kịch bản: kẻ tấn công gửi đánh giá chứa thẻ script hoặc thuộc tính sự kiện như onerror trong thẻ img; đánh giá nằm trong reviews.json chờ duyệt; admin mở trang admin reviews, nếu render bằng innerHTML thì script chạy ngay trên trình duyệt admin, có thể đọc localStorage chứa phiên đăng nhập và gửi ra ngoài. Sau khi được duyệt, đánh giá hiển thị ở trang chi tiết sản phẩm, script chạy trên trình duyệt của mọi khách xem sản phẩm đó, đánh cắp giỏ hàng, phiên đăng nhập, hoặc chuyển hướng sang trang lừa đảo. Cách chặn: escape ký tự đặc biệt hoặc dùng textContent thay innerHTML, lọc và chuẩn hóa nội dung trước khi lưu, thêm Content-Security-Policy. Các phương án còn lại sai: script chạy trên máy người xem chứ không chỉ người viết, GitHub Pages không lọc mã độc, và trình duyệt thực thi script ngay khi render chứ không cần bấm nút.",
  "topic": "sec"
 },
 {
  "id": "bv15-a10",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Chatbot RoomCraft có thể bị lợi dụng để làm gì ngoài việc hỏi tư vấn nội thất, và server.js đã có những chốt chặn nào? Em nêu cả điểm còn thiếu.",
  "options": [
   "Có thể bị dùng để spam gọi AI tốn quota, thử prompt injection để lấy system prompt hoặc buộc AI trả lời ngoài phạm vi; server.js đã có rate limit 30 lượt/phút/IP, giới hạn max_tokens, sanitizeReply() chặn giá bịa và link sai, nhưng chưa có xác thực người dùng, chưa lọc nội dung độc hại đầu vào và CORS còn mở.",
   "Chatbot chỉ trả lời được câu hỏi nội thất nên không thể bị lợi dụng, mọi câu hỏi ngoài phạm vi đều bị từ chối ngay ở tầng client trước khi gửi lên server.",
   "Chatbot được bảo vệ bằng mật khẩu admin nên chỉ người trong nhóm mới gọi được API, người ngoài không thể spam.",
   "Chatbot không tốn quota vì server.js dùng model miễn phí của DeepSeek, nên kể cả bị spam cũng không ảnh hưởng gì."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Ngoài tư vấn, chatbot có thể bị lợi dụng theo ba hướng: spam để đốt quota key, prompt injection để moi system prompt hoặc buộc AI trả lời ngoài phạm vi, và dùng làm proxy ẩn danh. server.js đã có các chốt: rate limit 30 request/60 giây/IP qua Map rateLimits, max_tokens 800, timeout 30 giây, retry có kiểm soát, sanitizeReply() chặn giá không có trong dữ liệu thật và link sản phẩm không tồn tại, system prompt quy định rõ phạm vi. Điểm còn thiếu: chưa xác thực người dùng trước khi gọi API, chưa lọc nội dung độc hại ở đầu vào, CORS còn mở dấu sao, chưa có giới hạn tổng theo ngày. Các phương án còn lại sai: client không phải hàng rào bảo mật vì có thể gọi thẳng API, chatbot không có mật khẩu admin, và model vẫn tính phí theo token nên spam vẫn tốn tiền.",
  "topic": "sec"
 },
 {
  "id": "bv15-a11",
  "chapter": 13,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống có người lạ tìm ra repo GitHub của nhóm và thấy file orders.json chứa thông tin khách, họ có thể làm gì và nhóm em nên xử lý ra sao? Em trả lời theo hướng xử lý sự cố.",
  "options": [
   "Họ đọc được toàn bộ đơn hàng vì file công khai, có thể lộ tên, số điện thoại, địa chỉ khách; nhóm nên gỡ dữ liệu thật khỏi repo, thay bằng dữ liệu mẫu đã ẩn danh, chuyển dữ liệu thật sang nơi riêng, và thêm bước kiểm tra trước khi push.",
   "Họ không đọc được vì GitHub Pages chỉ phục vụ file HTML, còn file JSON trong data/json bị chặn truy cập trực tiếp từ trình duyệt.",
   "Họ chỉ thấy tên file chứ không thấy nội dung vì orders.json được nạp qua XMLHttpRequest nên trình duyệt không cho tải trực tiếp.",
   "Họ đọc được nhưng không sao vì dữ liệu đơn hàng đã được băm SHA-256 trước khi lưu vào file JSON."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Với GitHub Pages, mọi file trong repo đều được phục vụ công khai qua đường dẫn tương ứng, nên data/json/orders.json có thể tải trực tiếp bằng trình duyệt hoặc curl. Nếu file chứa đơn hàng thật với tên, số điện thoại, địa chỉ, email khách thì đó là rò rỉ dữ liệu cá nhân, vi phạm nguyên tắc bảo vệ dữ liệu. Cách xử lý: gỡ dữ liệu thật khỏi repo, thay bằng dữ liệu mẫu đã ẩn danh cho bản demo, chuyển dữ liệu thật sang nơi riêng có kiểm soát truy cập, thêm bước review trước khi push, và nếu đã lộ thì thông báo cho người bị ảnh hưởng. Các phương án còn lại sai: GitHub Pages phục vụ mọi file tĩnh, XMLHttpRequest không chặn được tải trực tiếp, và SHA-256 không dùng để bảo vệ dữ liệu đơn hàng trong dự án này.",
  "topic": "sec"
 },
 {
  "id": "bv15-a12",
  "chapter": 13,
  "difficulty": 3,
  "type": "single",
  "question": "Nếu giảng viên là người kiểm thử xâm nhập, sẽ thử tấn công RoomCraft theo thứ tự nào và nhóm em phòng thủ ra sao ở từng bước? Em trình bày kịch bản tấn công và biện pháp.",
  "options": [
   "Em sẽ thử theo thứ tự: quét file công khai trong repo để tìm dữ liệu nhạy cảm, thử sửa localStorage để vượt qua kiểm tra admin, thử chèn script vào đánh giá và chatbot, thử spam API chat để đốt quota; phòng thủ tương ứng là ẩn danh dữ liệu, chuyển xác thực về server, escape HTML và thêm CSP, siết rate limit và CORS.",
   "Em sẽ thử tấn công bằng cách đoán mật khẩu admin, vì đó là lỗ hổng duy nhất của RoomCraft; các phần còn lại đều an toàn nhờ HTTPS của GitHub Pages.",
   "Em sẽ thử tấn công bằng SQL injection vào server.js, vì server dùng cơ sở dữ liệu MySQL để lưu đơn hàng và đánh giá.",
   "Em sẽ thử tấn công bằng cách chặn gói tin HTTPS để đọc key API, vì GitHub Pages không mã hóa đường truyền khi gọi API chat."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Kịch bản kiểm thử xâm nhập hợp lý cho RoomCraft: bước một, liệt kê file công khai trong repo và thử tải data/json/orders.json, users.json, reviews.json để tìm dữ liệu nhạy cảm; bước hai, đăng nhập tài khoản khách rồi sửa localStorage để tự gán role admin, kiểm tra xem UI admin có mở không; bước ba, gửi đánh giá chứa script và hỏi chatbot bằng prompt injection để xem có render hoặc lộ system prompt không; bước bốn, spam /api/chat để kiểm tra rate limit và CORS. Phòng thủ tương ứng: ẩn danh dữ liệu trước khi push, chuyển xác thực và phân quyền về server, escape HTML và thêm Content-Security-Policy, siết CORS về origin cụ thể và giữ rate limit. Các phương án còn lại sai: mật khẩu admin không phải lỗ hổng duy nhất, dự án không dùng MySQL, và HTTPS của GitHub Pages có mã hóa đường truyền.",
  "topic": "sec"
 },
 {
  "id": "bv15-a13",
  "chapter": 13,
  "difficulty": 1,
  "type": "single",
  "question": "Vì sao nhóm em chọn lưu mật khẩu người dùng dưới dạng băm SHA-256 thay vì lưu văn bản gốc, và cách làm này có đủ an toàn cho một website thương mại điện tử thật không?",
  "options": [
   "Nhóm băm mật khẩu bằng SHA-256 trong js/core/utils.js để không lưu văn bản gốc, giảm thiệt hại nếu file users.json bị lộ; tuy nhiên SHA-256 trần không có salt và chạy phía client nên chưa đủ an toàn cho website thật, cần bcrypt hoặc Argon2 phía server.",
   "SHA-256 là chuẩn mã hóa mạnh nhất hiện nay nên đủ an toàn tuyệt đối cho mọi website, kể cả ngân hàng, không cần nâng cấp gì thêm.",
   "Nhóm lưu mật khẩu văn bản gốc nhưng đặt file users.json trong thư mục ẩn nên coi như an toàn, còn SHA-256 chỉ dùng để tạo id người dùng.",
   "Nhóm dùng SHA-256 để mã hóa hai chiều mật khẩu, có thể giải ngược khi cần hỗ trợ khách quên mật khẩu, nên an toàn hơn lưu văn bản gốc."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong RoomCraft, hàm sha256() viết bằng JavaScript thuần trong js/core/utils.js được dùng để băm mật khẩu trước khi lưu vào users.json, nhờ đó nếu file bị lộ thì kẻ tấn công không đọc được mật khẩu gốc ngay. Tuy nhiên cách làm này có ba hạn chế: SHA-256 là hàm băm nhanh, dễ bị tấn công brute force và rainbow table nếu không có salt; việc băm chạy phía client nghĩa là mật khẩu gốc vẫn đi qua mạng và có thể bị chặn nếu không có HTTPS; và không có cơ chế chống replay. Với website thật, nên dùng bcrypt hoặc Argon2 phía server, có salt riêng cho từng người, có giới hạn số lần đăng nhập sai. Các phương án còn lại sai: SHA-256 không phải mã hóa hai chiều, không đủ an toàn tuyệt đối, và dự án không lưu văn bản gốc.",
  "topic": "sec"
 },
 {
  "id": "bv15-a14",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Trong server.js có hàm sanitizeReply() chặn AI bịa số liệu. Cơ chế hoạt động thế nào và nó có phải là biện pháp bảo mật không? Em phân biệt rõ.",
  "options": [
   "sanitizeReply() quét các cụm tiền trong câu trả lời AI, so với tập giá thật của toàn bộ sản phẩm và phí ship, nếu không khớp thì thay bằng câu trả lời chuẩn; đây là biện pháp đảm bảo chất lượng dữ liệu chứ không phải bảo mật, vì nó không chặn được XSS hay prompt injection.",
   "sanitizeReply() là lớp bảo mật chính của RoomCraft, chặn được mọi cuộc tấn công XSS và SQL injection nhờ so khớp số tiền với dữ liệu thật.",
   "sanitizeReply() mã hóa câu trả lời AI bằng SHA-256 trước khi gửi về client, nên kể cả AI có bịa thì client cũng không đọc được nội dung sai.",
   "sanitizeReply() chặn AI trả lời ngoài phạm vi nội thất bằng cách so khớp từ khóa với danh sách chủ đề cho phép, nên đây là hàng rào bảo mật chính."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Hàm sanitizeReply() trong server.js làm ba việc: (1) tách các cụm tiền trong câu trả lời AI bằng biểu thức chính quy, quy đổi về số nguyên, so với tập giá thật của toàn bộ sản phẩm và phí ship, nếu không khớp thì trả về câu trả lời chuẩn; (2) kiểm tra link product-detail.html?id=... có tồn tại trong kho không; (3) bỏ qua các số làm tròn lớn như 2.000.000 để AI được phép nói về ngân sách. Đây là biện pháp đảm bảo chất lượng dữ liệu, chống hallucination, không phải bảo mật: nó không lọc thẻ HTML, không chặn prompt injection, không kiểm soát quyền truy cập. Các phương án còn lại sai: sanitizeReply() không chặn XSS hay SQL injection, không mã hóa câu trả lời, và không phải hàng rào bảo mật chính.",
  "topic": "sec"
 },
 {
  "id": "bv15-a15",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Nhóm em có dùng Content-Security-Policy hoặc các header bảo mật khác chưa? Nếu chưa thì vì sao, và nếu có điều kiện triển khai thật thì sẽ thêm những header nào?",
  "options": [
   "Nhóm chưa cấu hình CSP và các header bảo mật vì GitHub Pages không cho tùy biến header phản hồi; nếu triển khai thật sẽ thêm Content-Security-Policy giới hạn nguồn script, X-Content-Type-Options nosniff, X-Frame-Options chống clickjacking, Referrer-Policy và Strict-Transport-Security.",
   "Nhóm đã bật CSP mặc định của GitHub Pages nên không cần thêm gì; GitHub tự thêm nosniff và HSTS cho mọi site nên RoomCraft đã đủ bộ header bảo mật.",
   "CSP chỉ cần thiết cho website có đăng nhập bằng mạng xã hội, còn RoomCraft dùng đăng nhập thường nên không cần CSP và các header khác.",
   "Nhóm đã thêm CSP bằng cách viết thẻ meta http-equiv trong từng file HTML, cách này bảo vệ đầy đủ tương đương header thật nên không cần cấu hình server."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. GitHub Pages chỉ phục vụ file tĩnh và không cho người dùng tùy biến header phản hồi, nên nhóm không thể đặt Content-Security-Policy, X-Frame-Options hay HSTS ở tầng server. Nếu triển khai thật trên một máy chủ có kiểm soát, nhóm nên thêm: Content-Security-Policy giới hạn script-src về đúng nguồn của mình, chặn inline script; X-Content-Type-Options nosniff chống đoán MIME; X-Frame-Options DENY hoặc SAMEORIGIN chống clickjacking; Referrer-Policy strict-origin-when-cross-origin; Strict-Transport-Security buộc HTTPS; Permissions-Policy tắt các API không dùng. Các phương án còn lại sai: GitHub Pages không tự thêm CSP hay HSTS, CSP cần cho mọi site có nội dung người dùng, và thẻ meta http-equiv chỉ hỗ trợ một phần CSP chứ không tương đương header thật.",
  "topic": "sec"
 },
 {
  "id": "bv15-a16",
  "chapter": 13,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống phát hiện key DeepSeek đã bị lộ (ví dụ lỡ commit .env lên repo), nhóm em sẽ xử lý theo các bước nào và rút ra bài học gì cho quy trình?",
  "options": [
   "Bước một thu hồi và tạo key mới ngay trên trang quản trị nhà cung cấp, bước hai gỡ file khỏi lịch sử git bằng công cụ như git filter-repo hoặc BFG, bước ba kiểm tra log sử dụng để phát hiện lạm dụng, bước bốn thêm pre-commit hook chặn .env; bài học là phải kiểm tra git status trước khi push và dùng biến môi trường ở CI.",
   "Chỉ cần xóa file .env ở commit mới nhất là đủ, vì GitHub sẽ tự động xóa lịch sử cũ sau vài ngày nên key không còn bị lộ.",
   "Chỉ cần đổi tên biến môi trường trong server.js từ DEEPSEEK_API_KEY sang tên khác là key cũ vô hiệu, không cần thu hồi.",
   "Chỉ cần thêm .env vào .gitignore là đủ, vì từ lúc đó GitHub sẽ tự động xóa các bản sao cũ của file trong lịch sử."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Khi key bị lộ, việc đầu tiên là vào trang quản trị nhà cung cấp thu hồi key cũ và tạo key mới, vì kẻ tấn công có thể đã sao chép. Bước hai là gỡ file khỏi toàn bộ lịch sử git bằng git filter-repo hoặc BFG Repo-Cleaner, sau đó force push, vì xóa ở commit mới không xóa được commit cũ. Bước ba là kiểm tra log sử dụng API để phát hiện lạm dụng và ước lượng thiệt hại. Bước bốn là thêm pre-commit hook hoặc dùng công cụ quét secret để chặn .env lọt lên lần sau. Bài học: luôn kiểm tra git status trước khi push, dùng biến môi trường ở CI, không hardcode key. Các phương án còn lại sai: GitHub không tự xóa lịch sử, đổi tên biến không vô hiệu key cũ, và thêm .gitignore không xóa bản sao trong lịch sử.",
  "topic": "sec"
 },
 {
  "id": "bv15-a17",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Vì sao nhóm em không dùng backend thật cho đơn hàng mà lại lưu JSON tĩnh, và đánh đổi bảo mật của lựa chọn này là gì? Em trả lời thẳng thắn.",
  "options": [
   "Nhóm chọn JSON tĩnh vì phạm vi môn học và deploy miễn phí trên GitHub Pages, đánh đổi là không có xác thực phía server, không có phân quyền thật, dữ liệu có thể bị sửa trực tiếp và không đồng bộ khi nhiều người cùng mua; nhóm thừa nhận đây là điểm yếu và đề xuất hướng nâng cấp.",
   "Nhóm chọn JSON tĩnh vì nó bảo mật hơn backend thật, do không có server thì không có lỗ hổng server để tấn công.",
   "Nhóm chọn JSON tĩnh vì GitHub Pages tự động cung cấp API xác thực và phân quyền cho mọi file JSON, nên không cần backend riêng.",
   "Nhóm chọn JSON tĩnh vì yêu cầu môn học cấm dùng backend, nếu dùng backend sẽ bị trừ điểm nên buộc phải làm vậy."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Nhóm chọn JSON tĩnh vì phạm vi môn Phát triển Web Kinh doanh tập trung vào frontend, và GitHub Pages miễn phí, không cần vận hành server. Đánh đổi bảo mật rất rõ: không có xác thực phía server nên quyền admin chỉ là ẩn UI; không có phân quyền thật nên ai sửa được repo là sửa được dữ liệu; không có transaction nên nhiều người cùng mua có thể ghi đè; không có log truy vết. Nhóm đã thừa nhận trong báo cáo và đề xuất hướng nâng cấp: thêm backend nhỏ (Node hoặc PHP) có xác thực, hoặc dùng dịch vụ BaaS như Firebase/Supabase. Các phương án còn lại sai: không có server không có nghĩa là bảo mật hơn, GitHub Pages không cung cấp API xác thực, và môn học không cấm backend.",
  "topic": "sec"
 },
 {
  "id": "bv15-a18",
  "chapter": 13,
  "difficulty": 3,
  "type": "single",
  "question": "Nếu được yêu cầu nâng cấp bảo mật trong hai tuần, em sẽ ưu tiên làm gì trước và vì sao? Em trình bày thứ tự ưu tiên có lý do.",
  "options": [
   "Ưu tiên một là chuyển xác thực và phân quyền admin về server nhỏ có kiểm tra token, vì đây là lỗ hổng nghiêm trọng nhất; ưu tiên hai là escape HTML khi render đánh giá và chat để chặn XSS; ưu tiên ba là siết CORS và thêm CSP; ưu tiên bốn là ẩn danh dữ liệu trong repo.",
   "Ưu tiên một là đổi màu giao diện admin cho đẹp hơn, vì giao diện đẹp giúp người dùng tin tưởng và ít bị tấn công tâm lý hơn.",
   "Ưu tiên một là nâng cấp model AI lên bản mới nhất, vì model mới có khả năng tự chống prompt injection tốt hơn nên giải quyết được mọi lỗ hổng.",
   "Ưu tiên một là mua tên miền riêng và chứng chỉ SSL cao cấp, vì bảo mật chủ yếu nằm ở chứng chỉ chứ không phải ở mã nguồn."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Thứ tự ưu tiên dựa trên mức độ nghiêm trọng và khả năng khai thác: (1) xác thực và phân quyền admin phía server là lỗ hổng nghiêm trọng nhất vì hiện tại ai sửa localStorage cũng vào được, ảnh hưởng toàn bộ dữ liệu; (2) escape HTML khi render đánh giá và chat chặn XSS, ảnh hưởng trực tiếp người dùng; (3) siết CORS về origin cụ thể và thêm CSP giảm thiệt hại nếu có lỗi XSS; (4) ẩn danh dữ liệu trong repo tránh rò rỉ dữ liệu cá nhân. Các phương án còn lại sai: giao diện đẹp không phải bảo mật, model AI mới không thay thế được kiểm soát phía server, và chứng chỉ SSL chỉ bảo vệ đường truyền chứ không sửa được lỗ hổng mã nguồn.",
  "topic": "sec"
 },
 {
  "id": "bv15-a19",
  "chapter": 13,
  "difficulty": 1,
  "type": "single",
  "question": "Trong RoomCraft, dữ liệu người dùng như giỏ hàng, phiên đăng nhập, đơn hàng được lưu ở đâu và điều đó có ý nghĩa gì về mặt bảo mật? Em giải thích cơ chế lưu trữ.",
  "options": [
   "Dữ liệu được lưu trong localStorage với các khóa rc_<tên bảng>, giữ được sau khi tắt trình duyệt; về bảo mật, localStorage chỉ bảo vệ trong phạm vi một origin, nhưng bất kỳ script chạy trên cùng origin đều đọc được, nên nếu có XSS thì phiên đăng nhập và giỏ hàng bị đánh cắp.",
   "Dữ liệu được lưu trong cookie HttpOnly nên JavaScript không đọc được, nhờ đó an toàn tuyệt đối trước XSS.",
   "Dữ liệu được lưu trong sessionStorage nên tự xóa khi đóng tab, và mỗi tab có vùng nhớ riêng nên không thể bị đánh cắp.",
   "Dữ liệu được lưu trong IndexedDB có mã hóa mặc định bằng khóa của trình duyệt nên kể cả XSS cũng không đọc được."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. RoomCraft dùng localStorage thông qua store.js: các bảng JSON được nạp vào khóa rc_<tên>, giỏ hàng, wishlist, phiên đăng nhập, đơn hàng, đánh giá đều ghi vào đây. localStorage giữ dữ liệu sau khi đóng trình duyệt, dung lượng khoảng 5 MB mỗi origin. Về bảo mật, localStorage chỉ tách theo origin, không có HttpOnly, nên bất kỳ script nào chạy trên cùng origin đều đọc được toàn bộ. Vì vậy nếu có lỗ hổng XSS, kẻ tấn công có thể đọc phiên đăng nhập và giỏ hàng của người dùng. Các phương án còn lại sai: dự án không dùng cookie HttpOnly, không dùng sessionStorage cho dữ liệu chính, và IndexedDB không tự mã hóa.",
  "topic": "sec"
 },
 {
  "id": "bv15-a20",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Nhóm em có kiểm tra đầu vào ở form đánh giá và form đăng ký không? Nếu có thì kiểm tra những gì, và kiểm tra phía client có đủ chống tấn công không? Em phân tích.",
  "options": [
   "Nhóm kiểm tra phía client bằng biểu thức chính quy cho email, số điện thoại, độ mạnh mật khẩu theo sáu quy tắc, và độ dài nội dung đánh giá; nhưng kiểm tra client chỉ để cải thiện trải nghiệm, kẻ tấn công có thể bỏ qua bằng cách gọi thẳng API hoặc sửa request, nên cần kiểm tra lại phía server.",
   "Kiểm tra phía client là đủ vì kẻ tấn công không thể bỏ qua JavaScript của trang nếu không có công cụ đặc biệt, mà công cụ đó chỉ chuyên gia mới có.",
   "Nhóm không kiểm tra đầu vào vì dữ liệu được lưu vào JSON tĩnh nên không có rủi ro, mọi chuỗi đều an toàn khi ghi vào file.",
   "Nhóm kiểm tra bằng cách băm SHA-256 mọi đầu vào, nhờ đó mọi ký tự độc hại đều bị vô hiệu hóa trước khi lưu."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong RoomCraft, form đăng ký kiểm tra email và số điện thoại bằng biểu thức chính quy, mật khẩu theo sáu quy tắc (độ dài, chữ hoa, chữ thường, chữ số, ký tự đặc biệt, không khoảng trắng), form đánh giá kiểm tra độ dài và nội dung rỗng. Tuy nhiên đây là kiểm tra client-side, chỉ để cải thiện trải nghiệm và giảm lỗi vô tình. Kẻ tấn công có thể mở DevTools tắt JavaScript, dùng Postman gọi thẳng API, hoặc sửa request, nên kiểm tra client không phải hàng rào bảo mật. Muốn chống tấn công thật phải kiểm tra lại phía server, chuẩn hóa dữ liệu, escape khi render. Các phương án còn lại sai: client không phải hàng rào, JSON tĩnh vẫn có thể chứa chuỗi độc, và SHA-256 không vô hiệu hóa ký tự độc.",
  "topic": "sec"
 },
 {
  "id": "bv15-a21",
  "chapter": 13,
  "difficulty": 3,
  "type": "single",
  "question": "Nếu khách hàng phàn nàn rằng đơn hàng của họ bị thay đổi trạng thái mà không phải họ làm, nhóm em sẽ điều tra thế nào trong kiến trúc hiện tại? Em trình bày quy trình điều tra và giới hạn.",
  "options": [
   "Nhóm kiểm tra lịch sử commit của orders.json trên GitHub để xem ai đã sửa và khi nào, đối chiếu với log chat hoặc trao đổi nội bộ, kiểm tra localStorage của khách nếu có thể; giới hạn là hệ thống không có log thao tác chi tiết nên khó truy vết chính xác, đây là lý do cần backend có audit log.",
   "Nhóm mở file orders.json xem trạng thái hiện tại là đủ, vì file JSON tự ghi lại lịch sử thay đổi của từng đơn hàng trong một trường riêng.",
   "Nhóm nhờ GitHub Pages cung cấp log truy cập chi tiết cho từng file JSON, GitHub lưu log này miễn phí trong 90 ngày nên chỉ cần tải về.",
   "Nhóm không cần điều tra vì trạng thái đơn hàng được băm SHA-256 nên không thể bị sửa nếu không có khóa bí mật."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong kiến trúc hiện tại, đơn hàng nằm trong data/json/orders.json và được commit lên GitHub, nên cách điều tra khả thi là xem lịch sử commit của file này: ai commit, thời điểm nào, nội dung diff ra sao, đối chiếu với trao đổi nội bộ hoặc lịch sử chat. Nếu khách dùng chung máy, có thể kiểm tra localStorage trên máy họ. Giới hạn: hệ thống không có audit log chi tiết từng thao tác duyệt đơn, không có log ai đăng nhập admin, không có timestamp chính xác cho từng thay đổi trạng thái, nên khó truy vết chính xác. Đây chính là lý do cần backend có audit log. Các phương án còn lại sai: JSON không tự ghi lịch sử thay đổi, GitHub Pages không cung cấp log truy cập chi tiết, và trạng thái đơn không được băm.",
  "topic": "sec"
 },
 {
  "id": "bv15-a22",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Nhóm em tự đánh giá mức độ bảo mật của RoomCraft hiện tại ở mức nào, ba hạn chế lớn nhất là gì, và hướng cải thiện cụ thể ra sao? Em trả lời thẳng thắn, không tô hồng.",
  "options": [
   "Nhóm tự đánh giá mức cơ bản, đủ cho đồ án học kỳ nhưng chưa đủ cho sản phẩm thật; ba hạn chế lớn nhất là xác thực và phân quyền chỉ ở client, dữ liệu JSON tĩnh có thể bị sửa, và thiếu lớp chống XSS triệt để; hướng cải thiện là thêm backend nhỏ có xác thực, escape HTML khi render, siết CORS và thêm CSP.",
   "Nhóm tự đánh giá mức cao, đủ cho sản phẩm thương mại thật vì đã có HTTPS, SHA-256 và rate limit, không cần cải thiện gì thêm.",
   "Nhóm tự đánh giá mức thấp, không có biện pháp bảo mật nào, cần làm lại từ đầu bằng framework có sẵn module bảo mật.",
   "Nhóm tự đánh giá mức trung bình, hạn chế duy nhất là tốc độ tải chậm, còn bảo mật đã đầy đủ nhờ GitHub Pages lo hết."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Nhóm tự đánh giá bảo mật ở mức cơ bản: có ý thức giấu key trong .env, có rate limit, có sanitizeReply() chống AI bịa số liệu, có băm mật khẩu, có HTTPS nhờ GitHub Pages. Nhưng ba hạn chế lớn nhất vẫn còn: (1) xác thực và phân quyền admin chỉ ở client, ai sửa localStorage cũng vượt qua; (2) dữ liệu orders.json, reviews.json, users.json là file tĩnh công khai, có thể bị sửa trực tiếp khi có quyền push; (3) chưa có lớp chống XSS triệt để khi render đánh giá và chat, CORS còn mở. Hướng cải thiện cụ thể: thêm backend nhỏ có xác thực và phân quyền, escape HTML hoặc dùng textContent khi render, siết CORS về origin cụ thể, thêm CSP và các header bảo mật, ẩn danh dữ liệu trước khi push. Các phương án còn lại sai: chưa đủ cho sản phẩm thật, không phải không có biện pháp nào, và GitHub Pages không lo bảo mật thay nhóm.",
  "topic": "sec"
 }
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_BV15; }
