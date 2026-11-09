// Ngan hang on bao ve RoomCraft - da phan loai topic + bien tap bo khung 'Thay' (2026-11-09)
const QUESTIONS_BV12 = [
 {
  "id": "bv12-a01",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Vì sao nhóm em lại viết server.js bằng Node.js Standard Library thuần thay vì dùng Express cho phần chatbot, và điều đó ảnh hưởng gì tới cách chạy đồ án trên máy giảng viên? Em trình bày lý do và cơ chế.",
  "options": [
   "Vì nhóm em muốn người chấm chỉ cần cài Node.js là chạy được ngay, không phải chạy npm install hay tải hàng trăm gói phụ thuộc; server.js chỉ require http, https, fs, path, url nên mọi thứ nằm trong một file, dễ đọc và dễ kiểm tra khi bảo vệ.",
   "Vì Express không cài được trên Windows nên nhóm em buộc phải dùng Standard Library, chứ thực ra nhóm em thích Express hơn.",
   "Vì GitHub Pages chỉ chạy được Node.js thuần, không hỗ trợ Express nên nhóm em phải viết tay toàn bộ.",
   "Vì Express yêu cầu trả phí bản quyền khi deploy nên nhóm em chọn Standard Library để tiết kiệm chi phí."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu: nhóm em chọn Node.js Standard Library vì mục tiêu là server chạy được ngay khi chỉ cần cài Node, không có bước npm install, không có node_modules, không phụ thuộc phiên bản gói. Trong server.js nhóm em chỉ require http, https, fs, path, url — tất cả đều có sẵn trong Node. Nhờ vậy khi giảng viên mở source là thấy toàn bộ logic trong một file, không phải lần theo node_modules. Các phương án còn lại sai vì Express hoàn toàn cài được trên Windows, GitHub Pages không chạy Node.js nào cả (nó chỉ phục vụ file tĩnh), và Express là mã nguồn mở miễn phí. Điểm đánh đổi là nhóm em phải tự viết phần routing, đọc body, MIME type, CORS — những việc Express làm sẵn — nhưng bù lại server gọn và minh bạch.",
  "topic": "ai"
 },
 {
  "id": "bv12-a02",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Hàm loadEnv() trong server.js tự viết để làm gì, vì sao không dùng thư viện dotenv, và nó xử lý những trường hợp nào khi đọc file .env? Em giải thích cơ chế từng bước.",
  "options": [
   "loadEnv() đọc file .env ở cùng thư mục server.js, bỏ qua dòng trống và dòng bắt đầu bằng dấu thăng, tách key và value theo dấu bằng đầu tiên, cắt khoảng trắng hai đầu và bỏ dấu nháy bao ngoài value, rồi gán vào process.env nếu biến đó chưa tồn tại; nhóm em tự viết vì chỉ cần vài chục dòng, không muốn thêm phụ thuộc npm.",
   "loadEnv() dùng để nạp file JSON cấu hình sản phẩm vào bộ nhớ, và nhóm em không dùng dotenv vì dotenv chỉ đọc được file .json chứ không đọc được .env.",
   "loadEnv() chỉ đơn giản là đọc toàn bộ nội dung file .env rồi in ra console để kiểm tra, không gán gì vào process.env cả.",
   "loadEnv() dùng thư viện dotenv có sẵn trong Node core, chỉ gọi dotenv.config() một lần là xong nên không cần tự viết."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Cơ chế của loadEnv(): kiểm tra file .env có tồn tại bằng fs.existsSync, đọc bằng fs.readFileSync với utf8, tách theo ký tự xuống dòng, với mỗi dòng trim rồi bỏ qua nếu rỗng hoặc bắt đầu bằng dấu thăng (comment), tìm dấu bằng đầu tiên bằng indexOf để tách key và value, value được trim và bỏ dấu nháy đơn hoặc nháy kép bao ngoài bằng replace với biểu thức chính quy, cuối cùng chỉ gán process.env[key] nếu biến đó chưa có — nghĩa là biến môi trường thật của hệ điều hành được ưu tiên hơn file .env. Nhóm em tự viết vì logic chỉ vài chục dòng, không đáng thêm một gói npm. Các phương án còn lại sai: loadEnv không đọc JSON sản phẩm (việc đó do loadData làm), không chỉ in ra console, và Node core không có sẵn dotenv.",
  "topic": "ai"
 },
 {
  "id": "bv12-a03",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Hàm postDeepSeek() trong server.js được viết bằng module https thay vì dùng fetch, nó nhận tham số gì, trả về Promise chứa những trường nào, và vì sao nhóm em chọn cách này?",
  "options": [
   "postDeepSeek nhận payload object và apiKey, tự JSON.stringify payload, tạo URL từ DEEPSEEK_BASE_URL cộng /chat/completions, gọi https.request với method POST, header Authorization Bearer, Content-Length tính bằng Buffer.byteLength, gắn agent keepAlive và timeout 30 giây; Promise luôn resolve về object gồm status, body, ms và có thể có error hoặc detail, nhờ vậy phía gọi không bao giờ bị ném lỗi mà luôn xử lý được.",
   "postDeepSeek nhận câu hỏi của khách và lịch sử hội thoại, tự dựng payload bên trong, trả về thẳng chuỗi câu trả lời đã parse xong chứ không trả status.",
   "postDeepSeek dùng module http thay vì https vì gateway API không hỗ trợ TLS, và nó trả về Promise reject khi lỗi mạng để phía gọi dùng try catch.",
   "postDeepSeek chỉ là một wrapper mỏng gọi fetch có sẵn trong Node 18, không liên quan gì tới module https cả."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. postDeepSeek nhận payloadObj và apiKey, stringify payload, dựng URL từ DEEPSEEK_BASE_URL cộng /chat/completions, rồi gọi https.request với hostname, port, path, method POST, agent keepAlive để tái sử dụng kết nối TCP/TLS, header Content-Type application/json, Authorization Bearer cộng apiKey, Content-Length tính bằng Buffer.byteLength để đếm đúng số byte UTF-8, và timeout AI_TIMEOUT_MS là 30000 mili giây. Promise luôn resolve — kể cả khi lỗi mạng, timeout hay lỗi HTTP — về object gồm status, body, ms, và tùy trường hợp có error hoặc detail. Nhờ luôn resolve mà callGemini phía trên không cần try catch, chỉ cần đọc status và body. Các phương án còn lại sai: hàm không nhận câu hỏi trực tiếp, gateway dùng https chứ không phải http, và nhóm em không dùng fetch vì muốn kiểm soát agent, timeout và header ở mức thấp.",
  "topic": "ai"
 },
 {
  "id": "bv12-a04",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Cơ chế retry trong callGemini hoạt động thế nào, khi nào thì thử lại, khi nào thì bỏ luôn, và vì sao nhóm em lại có mảng REASONING_VARIANTS? Em trình bày luồng xử lý khi một lần gọi thất bại.",
  "options": [
   "Vòng lặp chạy tối đa 2 lần; nếu status 200 và content không rỗng thì trả về ngay kèm log thời gian; nếu status 400 thì tăng reasoningIndex sang biến thể kế tiếp và giảm biến đếm lần để không tính là một lần thử; nếu 401 hoặc 405 thì dừng luôn vì sai key hoặc hết tiền; các lỗi khác thì chờ 800 mili giây rồi thử lại, hết 2 lần thì trả về câu xin thử lại sau.",
   "Vòng lặp chạy vô hạn cho tới khi thành công, mỗi lần chờ 5 giây, và chỉ dừng khi người dùng tắt server.",
   "Chỉ thử lại đúng một lần khi status là 200 nhưng content rỗng, còn mọi lỗi khác thì trả về ngay lập tức không thử lại.",
   "Nhóm em không có retry trong server.js, retry chỉ nằm ở phía chatbot.js khi gọi XHR thất bại."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong callGemini, vòng lặp for chạy lan từ 1 đến 2. Mỗi lần dựng payload gồm model, messages, temperature 0.4, max_tokens 800, rồi trộn thêm biến thể reasoning hiện tại từ REASONING_VARIANTS — mảng gồm ba biến thể: reasoning_effort none, reasoning_effort low, và object rỗng. Nếu kết quả status 200 và content có chữ thì log [DeepSeek] OK kèm số mili giây và trả về luôn. Nếu status 400 — gateway không nhận tham số reasoning — thì tăng reasoningIndex, giảm lan đi một để lần này không tính là một lần thử, rồi continue. Nếu 401 hoặc 405 thì đặt loiCuoi là API_KEY_OR_BALANCE và break vì thử lại vô ích. Các lỗi khác thì ghi log, nếu finish_reason là length thì chuyển biến thể kế tiếp cho lần sau, chờ 800 mili giây rồi thử lại. Hết 2 lần thì trả về câu xin thử lại sau giây lát. Các phương án còn lại sai vì không có vòng lặp vô hạn, không chỉ retry khi 200, và retry có cả ở server.",
  "topic": "ai"
 },
 {
  "id": "bv12-a05",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Vì sao nhóm em đặt max_tokens là 800 chứ không phải 300 như trước, và việc tắt reasoning bằng reasoning_effort none giải quyết được lỗi gì? Em giải thích mối liên hệ giữa token suy nghĩ và token trả lời.",
  "options": [
   "Vì max_tokens dùng chung cho cả phần model suy nghĩ lẫn phần trả lời; trước đây để 300 thì model nghĩ dài là hết token, content rỗng nên báo lỗi lúc được lúc không; nay nhóm em tắt suy nghĩ bằng reasoning_effort none và tăng lên 800 để phần trả lời luôn có chỗ, đồng thời vẫn giới hạn để chatbot trả lời ngắn gọn.",
   "Vì gateway tính tiền theo max_tokens nên nhóm em tăng lên 800 để được giảm giá, không liên quan gì tới lỗi trước đây.",
   "Vì 300 là giới hạn cứng của API, không thể đặt thấp hơn nên nhóm em phải tăng lên 800 mới gọi được.",
   "Vì chatbot cần trả lời dài hàng nghìn chữ nên nhóm em đặt 800 cho thoải mái, không liên quan tới reasoning."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Với các model có cơ chế suy nghĩ, max_tokens là tổng ngân sách token cho cả phần reasoning nội bộ lẫn phần content trả về. Khi để 300, model nghĩ dài là hết token trước khi kịp viết câu trả lời, content rỗng, finish_reason là length, và server báo lỗi — đó là hiện tượng lúc được lúc không mà nhóm em gặp. Cách khắc phục gồm hai việc đi kèm: một là tắt suy nghĩ bằng reasoning_effort none để toàn bộ ngân sách dành cho câu trả lời, hai là tăng max_tokens lên 800 để câu trả lời tư vấn nội thất có đủ chỗ. Nhóm em vẫn giữ giới hạn vì chatbot cần trả lời ngắn, không muốn model viết lan man tốn token. Các phương án còn lại sai: max_tokens không phải yếu tố tính giá theo kiểu đó, 300 không phải giới hạn cứng, và chatbot không cần trả lời hàng nghìn chữ.",
  "topic": "ai"
 },
 {
  "id": "bv12-a06",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Endpoint /api/health trả về những trường gì, mục đích của nó là gì, và nếu gọi endpoint này trên bản deploy GitHub Pages thì chuyện gì xảy ra? Em giải thích cả hai phía.",
  "options": [
   "Endpoint trả JSON gồm status ok, hasApiKey là true hoặc false tùy có biến DEEPSEEK_API_KEY, provider deepseek và model đang dùng; mục đích là để kiểm tra server sống và đã nạp key chưa mà không lộ key; trên GitHub Pages không có server.js nên gọi /api/health sẽ nhận 404 vì đó chỉ là file tĩnh.",
   "Endpoint trả về nguyên giá trị API key để thầy kiểm tra nhanh, và trên GitHub Pages nó vẫn chạy bình thường vì Pages hỗ trợ Node.",
   "Endpoint chỉ trả chuỗi ok đơn giản, không có trường nào khác, và trên GitHub Pages nó trả về trang index.html.",
   "Endpoint trả về danh sách sản phẩm trong kho kèm số lượng tồn, dùng để kiểm tra dữ liệu đã nạp chưa."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong server.js, khi pathname là /api/health thì server trả JSON gồm bốn trường: status ok, hasApiKey là Boolean của process.env.DEEPSEEK_API_KEY, provider deepseek, và model là DEEPSEEK_MODEL đang cấu hình. Mục đích là để nhóm em và người chấm kiểm tra nhanh server đã chạy chưa và đã nạp được key từ .env chưa, mà không phải in key ra — chỉ trả true hoặc false. Trên GitHub Pages, toàn bộ site là file tĩnh, không có tiến trình Node nào chạy, nên gọi /api/health sẽ nhận 404 Not Found từ máy chủ GitHub. Đây cũng chính là lý do chatbot phải có chế độ fallback FAQ. Các phương án còn lại sai: endpoint không trả key thật, không chỉ trả chuỗi ok, và không trả danh sách sản phẩm.",
  "topic": "ai"
 },
 {
  "id": "bv12-a07",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "chatbot.js phía client quyết định khi nào gọi API /api/chat và khi nào tự trả lời bằng dữ liệu local, và nếu API chết giữa phiên thì nó xử lý ra sao? Em mô tả luồng từ lúc khách gõ câu hỏi.",
  "options": [
   "chatReply chuẩn hóa câu hỏi, dựng bộ lọc, phân loại ý định; nếu là chào hỏi hoặc FAQ khớp thì trả lời ngay bằng dữ liệu local, nếu là câu hỏi sản phẩm mà tìm được sản phẩm thì trả luôn kèm thẻ sản phẩm; chỉ khi không khớp gì mới gọi chatCallApi; nếu API lỗi hoặc timeout thì đặt chatApiState bằng false để cả phiên không gọi lại nữa và trả câu fallback hướng dẫn khách hỏi giá, tồn kho, mã giảm giá.",
   "chatbot.js luôn gọi API trước cho mọi câu hỏi, chỉ khi API trả lỗi mới thử tìm trong dữ liệu local.",
   "chatbot.js không bao giờ gọi API, toàn bộ câu trả lời đều lấy từ chatbot_faqs.json và products.json.",
   "chatbot.js gọi API song song với tìm local rồi chọn câu trả lời dài hơn để hiển thị."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Luồng trong chatReply: đầu tiên chatPrepare chuẩn hóa câu hỏi (bỏ dấu, thay từ đồng nghĩa), chatBuildFilter dựng bộ lọc gồm danh mục, phong cách, màu, chất liệu, ngân sách, phòng, đồ cũ, 3D, rồi chatDecideRoute phân loại ý định. Nếu là greeting thì trả lời chào; nếu là FAQ và chatAnswerFaq khớp thì trả lời chính sách; nếu là câu hỏi sản phẩm mà chatSearch ra kết quả thì trả lời kèm thẻ sản phẩm thật. Chỉ khi rơi vào nhánh còn lại mới gọi chatCallApi. Trong chatCallApi, nếu chatApiState đã là false thì trả fallback ngay không gọi lại; nếu XHR lỗi, timeout hoặc trả về không có reply thì đặt chatApiState bằng false — nghĩa là tắt API cho cả phiên — và trả câu fallback hướng dẫn khách hỏi giá, tồn kho, mã giảm giá, phí giao hàng. Các phương án còn lại sai: local được ưu tiên trước, không phải API, và không có chuyện chạy song song rồi chọn câu dài hơn.",
  "topic": "ai"
 },
 {
  "id": "bv12-a08",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Vì sao chatbot cần server riêng khi chạy trên GitHub Pages, và nếu không chạy server.js thì chatbot vẫn làm được những gì? Em giải thích cả giới hạn kỹ thuật lẫn những gì nhóm em đã chuẩn bị để vẫn dùng được.",
  "options": [
   "Vì GitHub Pages chỉ phục vụ file tĩnh, không chạy được Node.js, mà API key không thể để trong file JS tĩnh vì ai xem mã nguồn cũng thấy; server.js giữ key trong .env phía server và đứng ra gọi gateway; khi không có server, chatbot.js vẫn trả lời được giá, tồn kho, phong cách, phí giao, mã giảm giá, đồ cũ nhờ đọc trực tiếp data/json và chatbot_faqs.json.",
   "Vì GitHub Pages chặn mọi request HTTPS ra ngoài nên chatbot không thể gọi gateway, buộc phải có server trung gian dù key không phải vấn đề.",
   "Vì API của DeepSeek yêu cầu IP tĩnh của máy chủ, GitHub Pages không có IP tĩnh nên phải chạy server riêng.",
   "Vì chatbot.js quá lớn (107.8KB) nên GitHub Pages không phục vụ nổi, phải tách sang server riêng."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. GitHub Pages là dịch vụ host tĩnh: nó chỉ gửi file HTML, CSS, JS, JSON về trình duyệt, không có tiến trình Node nào chạy trên đó. Nếu chatbot.js gọi thẳng gateway AI từ trình duyệt thì API key sẽ nằm trong mã nguồn tĩnh, ai mở DevTools cũng đọc được và lạm dụng được. Vì vậy nhóm em đặt key trong file .env (đã git-ignore) và để server.js đứng ra gọi gateway, trình duyệt chỉ gọi /api/chat trên localhost. Khi không chạy server, chatbot.js vẫn hoạt động ở chế độ fallback: nó đọc products.json, categories.json, styles.json, coupons.json, shipping_methods.json, chatbot_faqs.json để trả lời giá, tồn kho, phong cách, phí giao, mã giảm giá, đồ cũ — chỉ những câu hỏi khó mới cần LLM. Các phương án còn lại sai: Pages không chặn HTTPS, không cần IP tĩnh, và kích thước 107.8KB không phải vấn đề với Pages.",
  "topic": "ai"
 },
 {
  "id": "bv12-a09",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống mở web trên GitHub Pages, bấm vào chatbot và hỏi một câu tư vấn sâu kiểu 'phòng ngủ 12 mét vuông nên chọn phong cách gì', thì hệ thống sẽ xử lý thế nào, khách nhận được câu trả lời gì, và nhóm em thấy điểm yếu gì ở đây?",
  "options": [
   "chatbot.js chạy local trước, nếu không khớp FAQ hay sản phẩm thì gọi XHR tới localhost:3000/api/chat; trên GitHub Pages không có server nên XHR lỗi, chatApiState chuyển false và khách nhận câu fallback hướng dẫn hỏi giá, tồn kho, mã giảm giá; điểm yếu là trải nghiệm tư vấn sâu bị giới hạn, nhóm em chấp nhận vì phạm vi môn học và deploy tĩnh miễn phí.",
   "Hệ thống sẽ tự gọi thẳng gateway DeepSeek từ trình duyệt bằng key nhúng trong chatbot.js nên vẫn trả lời đầy đủ như khi chạy local.",
   "Hệ thống sẽ báo lỗi 500 ra màn hình và khách phải tải lại trang mới dùng tiếp được.",
   "Hệ thống sẽ chuyển hướng khách sang trang about để đọc câu chuyện nhóm thay vì trả lời câu hỏi."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trên GitHub Pages, chatbot.js vẫn nạp bình thường và chạy nhánh local trước: chuẩn hóa câu hỏi, dựng bộ lọc, thử FAQ và tìm sản phẩm. Câu hỏi tư vấn sâu kiểu phòng ngủ 12 mét vuông thường không khớp FAQ cũng không khớp sản phẩm cụ thể, nên rơi vào nhánh gọi chatCallApi. XHR tới http://localhost:3000/api/chat sẽ lỗi vì không có server, chatApiState chuyển false, và khách nhận câu fallback: chưa kết nối được trợ lý AI ở máy chủ, mời hỏi về giá, tồn kho, đồ cũ, mã giảm giá, phí giao hàng. Điểm yếu nhóm em thừa nhận là trải nghiệm tư vấn sâu bị giới hạn trên bản deploy tĩnh; nhóm em chấp nhận vì phạm vi môn học và vì GitHub Pages miễn phí, còn muốn đầy đủ thì phải chạy server.js cục bộ hoặc deploy server lên dịch vụ có Node. Các phương án còn lại sai: không nhúng key vào client, không báo lỗi 500 ra màn hình, không chuyển hướng sang about.",
  "topic": "ai"
 },
 {
  "id": "bv12-a10",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Nhóm em nói có hai model deepseek và glm dùng chung một gateway OpenAI-compatible — điều đó nghĩa là gì về mặt kỹ thuật, và trong server.js hiện tại việc chọn model được điều khiển bằng gì? Em giải thích khái niệm gateway và cách cấu hình.",
  "options": [
   "Gateway OpenAI-compatible là một điểm cuối HTTP nhận đúng định dạng chat completions của OpenAI, nên cùng một payload gồm model, messages, temperature, max_tokens có thể gửi cho nhiều model khác nhau chỉ bằng cách đổi trường model; trong server.js model lấy từ biến môi trường DEEPSEEK_MODEL, mặc định là deepseek-v4.1-flash, và key lấy từ DEEPSEEK_API_KEY hoặc GLM_API_KEY tùy model.",
   "Nghĩa là hai model chạy chung một tiến trình Node trong server.js, mỗi model là một hàm riêng và phải viết lại toàn bộ phần gọi HTTP cho từng model.",
   "Nghĩa là hai model dùng chung một API key bắt buộc, không thể cấu hình key riêng cho từng model.",
   "Nghĩa là hai model phải chạy trên hai cổng khác nhau, mỗi cổng một server.js riêng."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. OpenAI-compatible nghĩa là gateway nhận request đúng schema của OpenAI chat completions: body JSON gồm model, messages, temperature, max_tokens, và trả về choices với message.content. Nhờ vậy cùng một hàm postDeepSeek có thể gọi nhiều model, chỉ cần đổi trường model trong payload. Trong server.js, model lấy từ process.env.DEEPSEEK_MODEL với giá trị mặc định deepseek-ai/deepseek-v4.1-flash-1017, base URL lấy từ DEEPSEEK_BASE_URL mặc định là api-cdn.deploy.com/api/v1. Với model glm-5.3-flash thì dùng biến GLM_API_KEY riêng, cùng gateway. Các phương án còn lại sai: không cần viết lại hàm HTTP cho từng model, không bắt buộc chung một key, và không cần hai cổng riêng.",
  "topic": "ai"
 },
 {
  "id": "bv12-a11",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Nếu sửa file .env đổi DEEPSEEK_MODEL sang model khác rồi chạy lại server.js mà không restart, chuyện gì xảy ra? Và nếu đổi key thì sao? Em giải thích thời điểm đọc biến môi trường trong code.",
  "options": [
   "loadEnv() chỉ chạy một lần ngay khi file server.js được nạp, và các hằng như DEEPSEEK_MODEL, DEEPSEEK_API_KEY được đọc từ process.env ở cấp module, nên sửa .env mà không restart thì server vẫn dùng giá trị cũ; muốn áp dụng phải tắt và chạy lại node server.js.",
   "Vì loadEnv() được gọi lại mỗi lần có request nên sửa .env là có hiệu lực ngay ở request kế tiếp, không cần restart.",
   "Vì Node.js tự theo dõi file .env và tự nạp lại khi file thay đổi, nên không cần làm gì cả.",
   "Vì server.js đọc .env mỗi khi gọi /api/health nên chỉ cần gọi health một lần là mọi thứ được cập nhật."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong server.js, loadEnv() được gọi đúng một lần ở cấp module, ngay sau khi khai báo hàm. Sau đó các hằng số như GEMINI_API_KEY (thực chất là DEEPSEEK_API_KEY), DEEPSEEK_BASE_URL, DEEPSEEK_MODEL được gán từ process.env cũng ở cấp module. Nghĩa là toàn bộ giá trị được chốt tại thời điểm tiến trình Node khởi động. Nếu sửa .env trong lúc server đang chạy, process.env không tự cập nhật, các hằng đã gán cũng không đổi, nên server vẫn dùng model và key cũ. Muốn áp dụng phải dừng tiến trình (Ctrl+C) và chạy lại node server.js. Đây là hành vi chuẩn của Node, không phải lỗi. Các phương án còn lại sai: loadEnv không chạy lại mỗi request, Node không tự theo dõi .env, và /api/health chỉ đọc process.env hiện tại chứ không nạp lại file.",
  "topic": "ai"
 },
 {
  "id": "bv12-a12",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống gateway AI trả về câu trả lời có giá tiền không khớp bất kỳ sản phẩm nào trong kho, thì server.js xử lý thế nào trước khi gửi về client, và vì sao nhóm em phải làm bước này ở cả server lẫn client?",
  "options": [
   "Server chạy sanitizeReply: gom toàn bộ giá thật của sản phẩm và phí giao vào một tập hợp, tách mọi cụm tiền trong câu trả lời, quy đổi về số, bỏ qua số nhỏ hơn 1000 và số tròn bội 100.000 vì đó có thể là ngân sách, nếu gặp số không có trong tập hợp thì thay bằng câu xin lỗi và hướng dẫn hỏi lại; client cũng có chatCheckAiReply làm việc tương tự vì client có thể có dữ liệu mới hơn từ localStorage.",
   "Server chỉ kiểm tra độ dài câu trả lời, còn việc chặn số bịa hoàn toàn do client đảm nhiệm để giảm tải server.",
   "Server chặn bằng cách từ chối mọi câu trả lời có chứa chữ số, buộc AI chỉ trả lời bằng chữ.",
   "Server không kiểm tra gì cả, nhóm em tin tưởng model vì đã dặn trong system prompt là không được bịa."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Hàm sanitizeReply trong server.js dựng tập dung gồm giá và giá gốc của toàn bộ sản phẩm trong kho cộng phí giao từ shipping_methods.json. Sau đó nó dùng biểu thức chính quy tách các cụm tiền có đơn vị như đồng, vnd, triệu, tr, k. Với mỗi cụm, nó bỏ dấu chấm phẩy, quy đổi triệu và tr thành nhân một triệu, k thành nhân một nghìn, bỏ qua số nhỏ hơn 1000 (số lượng, phần trăm) và số tròn bội 100.000 (có thể là ngân sách khách nêu), còn lại nếu không nằm trong tập dung thì trả về câu xin lỗi và hướng dẫn hỏi cụ thể. Nó cũng kiểm tra mọi link product-detail.html?id= phải trỏ tới sản phẩm có thật. Phía client, chatCheckAiReply làm việc tương tự vì client có thể có dữ liệu mới hơn từ localStorage mà server chưa thấy. Các phương án còn lại sai: server kiểm tra chứ không chỉ đo độ dài, không chặn mọi chữ số, và không tin tưởng mù quáng vào system prompt.",
  "topic": "ai"
 },
 {
  "id": "bv12-a13",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Vì sao server.js dùng https.Agent với keepAlive true và maxSockets 4, và điều đó có ý nghĩa gì khi nhiều khách hỏi cùng lúc? Em giải thích cơ chế kết nối TCP/TLS và đánh đổi.",
  "options": [
   "keepAlive giữ kết nối TCP/TLS mở để các request sau không phải bắt tay lại, giảm độ trễ mỗi lần gọi AI; maxSockets 4 giới hạn tối đa 4 kết nối đồng thời tới gateway, tránh mở quá nhiều kết nối khi nhiều khách hỏi cùng lúc; đánh đổi là request thứ năm phải chờ, nhưng với quy mô đồ án thì 4 là đủ và an toàn.",
   "keepAlive dùng để tự động thử lại khi mất mạng, còn maxSockets 4 nghĩa là tối đa 4 lần thử lại cho mỗi request.",
   "keepAlive dùng để mã hóa dữ liệu gửi đi, còn maxSockets 4 là số byte tối đa mỗi lần gửi.",
   "keepAlive dùng để lưu cache câu trả lời của AI, còn maxSockets 4 là số câu trả lời được cache."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Khi gọi HTTPS, mỗi request thường phải thực hiện bắt tay TCP rồi bắt tay TLS, tốn thời gian. Với keepAlive true, agent giữ kết nối mở sau khi request xong, nên request kế tiếp tái sử dụng được kết nối cũ, giảm đáng kể độ trễ — quan trọng vì mỗi lần gọi AI đã tốn vài giây. maxSockets 4 giới hạn tối đa 4 socket đồng thời tới cùng host, tránh việc nhiều request cùng lúc mở hàng chục kết nối làm nghẽn hoặc bị gateway chặn. Đánh đổi là nếu có hơn 4 request đồng thời thì request thứ năm phải xếp hàng chờ một socket trống, nhưng với quy mô đồ án và rate limit 30 request mỗi phút mỗi IP thì 4 là hợp lý. Các phương án còn lại sai: keepAlive không phải cơ chế retry, không phải mã hóa, và không phải cache.",
  "topic": "ai"
 },
 {
  "id": "bv12-a14",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Nếu gọi /api/chat liên tục vài chục lần trong một phút, server.js phản ứng thế nào, cơ chế rate limit hoạt động ra sao, và nhóm em đánh giá cách làm này có đủ an toàn cho production không?",
  "options": [
   "checkRateLimit lưu mảng thời điểm theo IP trong Map, lọc bỏ các mốc cũ hơn 60 giây, nếu còn từ 30 mốc trở lên thì trả 429 kèm câu nhắc đợi một phút, ngược lại thêm mốc mới và cho qua; cách này đủ cho đồ án nhưng chưa đủ production vì Map nằm trong RAM, restart là mất, và IP lấy từ socket nên sau proxy có thể sai.",
   "Server chặn vĩnh viễn IP đó sau 30 request, phải khởi động lại server mới mở lại được.",
   "Server dùng rate limit của gateway AI chứ không tự giới hạn, nên gọi bao nhiêu lần cũng được.",
   "Server giới hạn theo tài khoản đăng nhập, mỗi tài khoản 30 request mỗi phút, khách chưa đăng nhập thì không giới hạn."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. checkRateLimit nhận IP từ req.socket.remoteAddress, lấy mảng thời điểm đã lưu trong Map rateLimits, lọc chỉ giữ các mốc trong vòng 60 giây gần nhất, nếu độ dài từ 30 trở lên thì trả false và endpoint trả 429 kèm câu nhắc đợi một phút; ngược lại thêm mốc hiện tại và trả true. Cách này chặn được lạm dụng cơ bản cho đồ án. Điểm yếu nhóm em thừa nhận: Map nằm trong RAM nên restart server là mất toàn bộ lịch sử; nếu deploy sau proxy hoặc CDN thì remoteAddress có thể là IP của proxy chứ không phải IP khách; và không có cơ chế dọn mảng cũ định kỳ nên Map phình dần. Production thật cần lưu ở Redis hoặc bộ nhớ ngoài, đọc IP từ header X-Forwarded-For đúng cách, và có TTL. Các phương án còn lại sai: không chặn vĩnh viễn, không dựa vào gateway, và không giới hạn theo tài khoản.",
  "topic": "ai"
 },
 {
  "id": "bv12-a15",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Trong server.js có hàm searchProducts và matchFaq chạy trước khi gọi AI — mục đích của bước này là gì, và nó giúp ích gì cho chất lượng câu trả lời cũng như chi phí gọi API? Em giải thích vai trò của bước RAG đơn giản này.",
  "options": [
   "Đây là bước truy xuất dữ liệu trước khi gọi AI: matchFaq tìm FAQ khớp theo từ khóa đã chuẩn hóa, searchProducts chấm điểm sản phẩm theo danh mục, phong cách, màu, ngân sách, chất liệu; kết quả được nhồi vào system prompt dưới dạng ngữ cảnh sản phẩm và chính sách, nhờ vậy AI trả lời dựa trên dữ liệu thật thay vì bịa, và cũng giảm số lần phải gọi AI khi câu hỏi đã khớp FAQ.",
   "Bước này chỉ để log ra console cho đẹp, không ảnh hưởng gì tới câu trả lời của AI.",
   "Bước này thay thế hoàn toàn AI, nghĩa là nếu tìm được FAQ hoặc sản phẩm thì server không bao giờ gọi AI nữa.",
   "Bước này dùng để nén dữ liệu sản phẩm trước khi gửi, giúp giảm dung lượng file JSON trên đĩa."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong endpoint /api/chat, server gọi matchFaq để tìm FAQ khớp theo từ khóa đã chuẩn hóa và chấm điểm, gọi searchProducts để chấm điểm sản phẩm theo danh mục, phong cách, màu, ngân sách, chất liệu, đồ cũ, 3D. Kết quả được formatProductContext chuyển thành các dòng ngắn gọn (mã, tên, giá, danh mục, phong cách, chất liệu, màu, tồn kho, link) và nhồi vào system prompt cùng thông tin FAQ nếu có. Nhờ vậy AI có dữ liệu thật để trả lời, giảm nguy cơ bịa, và câu trả lời bám sát kho hàng. Ngoài ra nếu client gửi candidates thì server ưu tiên dùng candidates vì localStorage có thể mới hơn JSON tĩnh. Đây là RAG đơn giản, không dùng vector database. Các phương án còn lại sai: bước này ảnh hưởng trực tiếp tới câu trả lời, không thay thế AI, và không phải để nén dữ liệu.",
  "topic": "ai"
 },
 {
  "id": "bv12-a16",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Nếu muốn deploy chatbot lên môi trường thật để khách dùng được LLM mà không phải chạy localhost, nhóm em sẽ phải thay đổi những gì so với hiện tại, và những điểm nào trong server.js hiện tại đã sẵn sàng cho việc đó?",
  "options": [
   "Nhóm em sẽ deploy server.js lên một dịch vụ có Node (Render, Railway, VPS), đặt biến môi trường DEEPSEEK_API_KEY và DEEPSEEK_MODEL trên dashboard thay vì file .env, đổi CHAT_API_URL trong chatbot.js sang domain thật, siết CORS thay vì dấu sao, chuyển rate limit sang bộ nhớ ngoài; những gì đã sẵn sàng là server chạy độc lập, có health check, có retry, có sanitize, có rate limit cơ bản.",
   "Nhóm em chỉ cần bật GitHub Pages Pro là Pages tự chạy được Node.js, không phải sửa gì trong code.",
   "Nhóm em sẽ nhúng API key vào chatbot.js để trình duyệt gọi thẳng gateway, như vậy không cần server nữa.",
   "Nhóm em sẽ đổi toàn bộ server.js sang Express rồi deploy, vì Standard Library không deploy được lên dịch vụ đám mây."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Để deploy thật, nhóm em cần một nền tảng chạy được Node (Render, Railway, Fly, VPS...) vì GitHub Pages chỉ host tĩnh. Trên nền tảng đó, biến môi trường nên đặt qua dashboard thay vì file .env, hoặc vẫn dùng .env nếu nền tảng hỗ trợ. Trong chatbot.js phải đổi CHAT_API_URL từ localhost:3000 sang domain HTTPS thật. CORS hiện đang để dấu sao nên cần siết lại theo domain frontend. Rate limit trong Map cần chuyển sang Redis hoặc bộ nhớ ngoài để sống sót qua restart và chia sẻ giữa nhiều instance. Những gì đã sẵn sàng: server.js chạy độc lập chỉ với Node, có endpoint /api/health để nền tảng kiểm tra, có retry và reasoning variants, có sanitizeReply chặn bịa số, có rate limit cơ bản, có agent keepAlive giảm độ trễ. Các phương án còn lại sai: Pages không có bản Pro nào chạy Node, nhúng key vào client là lỗ hổng bảo mật, và Standard Library deploy được bình thường.",
  "topic": "ai"
 },
 {
  "id": "bv12-a17",
  "chapter": 12,
  "difficulty": 3,
  "type": "multiple",
  "question": "Với tình huống tổng hợp trong một buổi demo, giảng viên tắt mạng máy tính rồi bấm chatbot hỏi 'sofa dưới 10 triệu'. Những hành vi nào sau đây sẽ xảy ra đúng với code hiện tại của nhóm em? Em chọn các ý đúng và giải thích. (chọn nhiều đáp án)",
  "options": [
   "chatbot.js vẫn tìm được sản phẩm sofa dưới 10 triệu từ products.json vì nhánh local chạy trước và không cần mạng.",
   "Nếu câu hỏi rơi vào nhánh gọi API thì XHR sẽ lỗi, chatApiState chuyển false và khách nhận câu fallback hướng dẫn hỏi giá, tồn kho, mã giảm giá.",
   "Server.js sẽ tự khởi động lại và nạp lại dữ liệu khi phát hiện mất mạng.",
   "chatbot.js sẽ hiển thị lỗi 500 ra màn hình và khóa ô nhập cho tới khi có mạng lại."
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Đáp án đúng gồm hai ý đầu. Với câu hỏi sofa dưới 10 triệu, chatReply chuẩn hóa câu hỏi, chatBuildFilter nhận ra danh mục sofa và ngân sách 10 triệu, chatSearch lọc products.json và trả về sản phẩm kèm thẻ sản phẩm thật — hoàn toàn không cần mạng vì dữ liệu đã nằm trong file JSON tải về trình duyệt. Nếu câu hỏi rơi vào nhánh cần gọi API, XHR sẽ lỗi mạng, chatApiState chuyển false, và khách nhận câu fallback hướng dẫn hỏi giá, tồn kho, mã giảm giá, phí giao hàng — đúng như thiết kế. Hai ý sau sai: server.js không tự khởi động lại khi mất mạng, và chatbot.js không hiển thị lỗi 500 ra màn hình cũng không khóa ô nhập. Đây chính là điểm mạnh của kiến trúc fallback: mất mạng hay mất server thì chatbot vẫn dùng được ở mức dữ liệu tĩnh, chỉ mất phần tư vấn sâu bằng LLM.",
  "topic": "ai"
 },
 {
  "id": "bv12-a18",
  "chapter": 12,
  "difficulty": 2,
  "type": "multiple",
  "question": "Những yếu tố nào sau đây là lý do kỹ thuật khiến nhóm em phải tách server.js ra khỏi phần frontend tĩnh thay vì gộp tất cả vào chatbot.js? Em chọn các lý do đúng và giải thích ngắn gọn từng lý do. (chọn nhiều đáp án)",
  "options": [
   "API key cần được giấu ở phía server vì file JS tĩnh ai cũng đọc được, nhúng key vào client là lộ ngay.",
   "Cần một nơi chạy được logic Node như đọc .env, gọi https tới gateway, retry và sanitize trước khi trả về client.",
   "Cần một endpoint /api/health để kiểm tra server sống và đã nạp key chưa mà không lộ key.",
   "Cần server vì GitHub Pages không phục vụ được file JSON lớn hơn 1MB."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Đáp án đúng gồm ba ý đầu. Thứ nhất, API key tuyệt đối không được nằm trong file JS tĩnh vì bất kỳ ai mở DevTools hay tải file đều đọc được; đặt trong .env phía server và chỉ server đọc là cách duy nhất an toàn trong kiến trúc tĩnh. Thứ hai, các việc như đọc .env, gọi https tới gateway, retry với reasoning variants, sanitize số liệu trước khi trả về đều cần môi trường Node chạy được — trình duyệt không làm được những việc này một cách an toàn. Thứ ba, endpoint /api/health giúp nhóm em và người chấm kiểm tra nhanh server sống và đã nạp key chưa, chỉ trả true hoặc false chứ không lộ key. Ý cuối sai: GitHub Pages phục vụ file JSON lớn bình thường, products.json khoảng 1.9MB vẫn tải được; vấn đề không phải kích thước mà là bảo mật và môi trường chạy.",
  "topic": "ai"
 }
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_BV12; }
