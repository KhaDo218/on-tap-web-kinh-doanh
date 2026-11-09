// Ngan hang on bao ve RoomCraft - da phan loai topic + bien tap bo khung 'Thay' (2026-11-09)
const QUESTIONS_BV7 = [
 {
  "id": "bv7-a01",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Nhóm em dùng fetch để đọc các file JSON cục bộ như products.json, rooms.json, chatbot_faqs.json ở đâu trong mã nguồn, và vì sao phải dùng fetch thay vì nhúng thẳng dữ liệu vào file JS? Em trình bày cơ chế và lý do.",
  "options": [
   "Nhóm em để dữ liệu trong data/json và nạp bằng fetch (hoặc helper getTable/loadJSON trong chatbot.js và các trang) vì dữ liệu tách khỏi code: sửa JSON là toàn site cập nhật, nhiều trang dùng chung một nguồn, và fetch trả về Promise nên nạp bất đồng bộ không chặn render trang; nhúng thẳng vào JS sẽ phình file, khó cập nhật và trộn dữ liệu với logic.",
   "Nhóm em nhúng toàn bộ JSON vào file JS vì fetch không đọc được file cục bộ trên máy, nên phải copy dữ liệu vào biến cho chắc.",
   "Nhóm em dùng fetch nhưng chỉ để gọi API bên ngoài, còn dữ liệu sản phẩm thì hard-code trong từng trang HTML.",
   "Nhóm em dùng XMLHttpRequest đồng bộ để đọc JSON vì fetch không hỗ trợ đọc file trong thư mục data."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là cách nhóm em thực làm: dữ liệu nằm trong data/json (products.json, rooms.json, chatbot_faqs.json...) và được nạp bằng fetch bất đồng bộ, thường qua helper dùng chung như getTable/loadJSON trong chatbot.js hoặc hàm nạp dữ liệu của từng trang. Lý do tách dữ liệu: một nguồn sự thật duy nhất cho nhiều trang, sửa JSON là cả site cập nhật mà không đụng code, file JS gọn hơn nhiều so với nhúng cứng hàng trăm KB dữ liệu. fetch trả về Promise nên trang vẫn render được trong lúc chờ dữ liệu, không bị treo như cách nhúng đồng bộ. Các phương án sai: nhúng cứng vào JS làm phình file và khó bảo trì; hard-code trong HTML thì mỗi trang một bản sao, sửa một chỗ không đồng bộ; XMLHttpRequest đồng bộ thì trình duyệt cảnh báo và chặn trên trang chính, không phải cách nhóm em chọn.",
  "topic": "code"
 },
 {
  "id": "bv7-a02",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Khi mở website bằng cách double-click file HTML (giao thức file://) thay vì qua Live Server hay GitHub Pages, chuyện gì xảy ra với các lệnh fetch đọc JSON cục bộ? Em giải thích cơ chế lỗi và cách nhóm em xử lý.",
  "options": [
   "Trình duyệt chặn fetch với file:// vì coi mỗi file là origin riêng (origin null), nên fetch báo lỗi CORS/không đọc được; nhóm em xử lý bằng cách chạy qua Live Server hoặc GitHub Pages (http/https) và trong code có fallback dữ liệu để chatbot vẫn trả lời được khi không nạp được JSON.",
   "Trình duyệt vẫn cho fetch đọc file:// bình thường, chỉ khi nào file JSON bị hỏng mới báo lỗi, nên nhóm em không cần xử lý gì.",
   "Lỗi xảy ra là do thiếu thư viện jQuery, nhóm em cài thêm jQuery là fetch chạy được trên file://.",
   "Nhóm em đổi sang dùng XMLHttpRequest thì đọc được file:// còn fetch thì không, nên chỉ cần thay hàm là xong."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: khi mở bằng file://, trình duyệt coi mỗi file là một origin riêng (origin null) và chặn fetch đọc file khác vì lý do bảo mật, lỗi hiện ra dưới dạng CORS hoặc không đọc được tài nguyên. Nhóm em xử lý bằng cách luôn chạy site qua Live Server khi phát triển và deploy lên GitHub Pages (http/https) khi nộp, đồng thời trong chatbot.js có nhánh fallback: nếu không nạp được dữ liệu hoặc không gọi được API thì vẫn trả lời bằng FAQ và dữ liệu có sẵn, không để khung chat treo. Các phương án sai: trình duyệt không cho fetch file:// mặc định nên không thể bỏ qua; lỗi không liên quan jQuery; XMLHttpRequest cũng bị chặn tương tự với file:// nên đổi hàm không giải quyết được gốc vấn đề.",
  "topic": "code"
 },
 {
  "id": "bv7-a03",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Vì sao nhóm em chọn fetch thay vì XMLHttpRequest cho việc đọc JSON và gọi API chatbot? Em so sánh hai cách và nêu lý do thực tế trong dự án.",
  "options": [
   "Nhóm em chọn fetch vì cú pháp gọn, trả về Promise nên dùng được async/await, đọc JSON bằng một bước response.json(), và dễ xử lý lỗi bằng try/catch; XMLHttpRequest phải gắn sự kiện onload/onerror, xử lý trạng thái thủ công và lồng callback, dài dòng hơn nhiều.",
   "Nhóm em chọn fetch vì fetch chạy được trên file:// còn XMLHttpRequest thì không, đây là lý do duy nhất.",
   "Nhóm em chọn fetch vì fetch tự động lưu cache và tự parse JSON, còn XMLHttpRequest phải cài thêm thư viện ngoài.",
   "Nhóm em chọn fetch vì XMLHttpRequest đã bị trình duyệt hiện đại xóa bỏ hoàn toàn, không còn dùng được nữa."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: fetch dựa trên Promise nên viết được theo kiểu async/await, mã tuyến tính dễ đọc, đọc JSON chỉ cần await response.json(), bắt lỗi bằng try/catch. XMLHttpRequest dùng sự kiện onload/onerror, phải tự kiểm tra status, tự JSON.parse, và khi cần nhiều bước thì callback lồng nhau khó theo dõi. Trong dự án, chatbot.js gọi /api/chat bằng fetch POST và chờ kết quả, các trang nạp dữ liệu JSON cũng bằng fetch nên thống nhất một phong cách. Các phương án sai: fetch không chạy được trên file:// nên đó không phải lý do; fetch không tự lưu cache theo ý muốn và XMLHttpRequest không cần thư viện ngoài; XMLHttpRequest vẫn tồn tại trong trình duyệt, chỉ là ít dùng hơn.",
  "topic": "code"
 },
 {
  "id": "bv7-a04",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Trong chatbot.js, nhóm em gọi API /api/chat bằng fetch POST như thế nào? Em mô tả các bước từ lúc khách gửi câu hỏi đến lúc nhận câu trả lời.",
  "options": [
   "Nhóm em dùng fetch với method POST, header Content-Type application/json, body JSON.stringify gồm message, history và candidates; chờ response, kiểm tra response.ok rồi response.json() để lấy trường reply, sau đó đưa qua hàm kiểm tra chatCheckAiReply trước khi hiển thị.",
   "Nhóm em dùng fetch GET kèm query string chứa câu hỏi, server đọc req.url rồi trả về chuỗi thuần, client hiển thị luôn không cần parse.",
   "Nhóm em dùng fetch POST nhưng gửi body dạng FormData, server đọc bằng req.on data rồi JSON.parse, không cần header gì cả.",
   "Nhóm em dùng fetch POST nhưng không chờ kết quả, cứ hiển thị câu trả lời mặc định rồi server tự ghi đè sau."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: chatbot.js gọi fetch tới http://localhost:3000/api/chat với method POST, header Content-Type application/json, body là JSON.stringify của object chứa message, history (ngữ cảnh hội thoại) và candidates (sản phẩm gợi ý). Sau khi chờ, code kiểm tra response.ok, gọi response.json() để lấy trường reply, rồi cho qua chatCheckAiReply để chặn câu trả lời bịa số liệu trước khi hiển thị. Có timeout và cơ chế tạm ngưng gọi AI khi lỗi để không treo giao diện. Các phương án sai: server chỉ nhận POST ở /api/chat nên GET sẽ không khớp; FormData không phải cách nhóm em dùng và server cần JSON; không chờ kết quả thì không thể hiển thị câu trả lời thật của AI.",
  "topic": "ai"
 },
 {
  "id": "bv7-a05",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Nhóm em dùng async/await ở đâu trong mã nguồn, và vì sao chọn async/await thay vì chuỗi .then()? Em nêu ví dụ trong server.js hoặc chatbot.js.",
  "options": [
   "Nhóm em dùng async/await ở các hàm gọi API như callGemini trong server.js và các hàm nạp dữ liệu/gọi chat phía client, vì await giúp viết tuần tự dễ đọc, bắt lỗi bằng try/catch, tránh lồng .then() nhiều tầng khi vừa chờ mạng vừa xử lý dữ liệu.",
   "Nhóm em không dùng async/await mà chỉ dùng callback, vì async/await không chạy được trong trình duyệt cũ.",
   "Nhóm em dùng async/await chỉ để làm code chạy nhanh hơn, còn bản chất nó vẫn là đồng bộ nên chặn trang.",
   "Nhóm em dùng async/await nhưng không cần try/catch vì await tự động bắt mọi lỗi và trả về null."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: async/await xuất hiện ở những chỗ phải chờ thao tác mạng, ví dụ hàm callGemini trong server.js chờ postDeepSeek trả về rồi mới xử lý kết quả, và phía client các hàm nạp JSON hay gọi /api/chat cũng viết theo kiểu async. Lợi ích: mã đọc như tuần tự, dễ đặt try/catch bao quanh cả khối, tránh callback hell khi vừa chờ fetch vừa parse vừa cập nhật giao diện. Các phương án sai: async/await được hỗ trợ rộng rãi trong trình duyệt hiện đại và nhóm em dùng thật; nó không làm code nhanh hơn mà chỉ làm dễ viết, và bản chất vẫn bất đồng bộ không chặn trang; await không tự bắt lỗi, vẫn cần try/catch hoặc .catch.",
  "topic": "code"
 },
 {
  "id": "bv7-a06",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Nếu server.js chưa chạy hoặc API /api/chat trả lỗi, chatbot phía client xử lý thế nào để khách vẫn nhận được câu trả lời? Em mô tả luồng fallback.",
  "options": [
   "Chatbot thử gọi API, nếu lỗi kết nối hoặc timeout thì đánh dấu API không dùng được trong một khoảng thời gian, đồng thời trả lời bằng dữ liệu cục bộ: FAQ từ chatbot_faqs.json và tìm kiếm sản phẩm trong products.json, nên khách vẫn có câu trả lời thay vì khung chat treo.",
   "Chatbot hiển thị thông báo lỗi đỏ và yêu cầu khách tải lại trang, không có phương án trả lời thay thế.",
   "Chatbot tự bịa câu trả lời bằng cách đoán giá và tồn kho để khách không bị làm phiền.",
   "Chatbot chuyển hướng khách sang trang liên hệ và dừng hoạt động cho đến khi server bật lại."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: chatbot.js có cơ chế fallback rõ ràng. Khi gọi /api/chat thất bại (server chưa chạy, lỗi mạng, timeout), code ghi nhận trạng thái API không dùng được và tạm ngưng gọi trong một khoảng thời gian để không chờ đợi vô ích mỗi lần khách hỏi. Trong lúc đó, các câu hỏi vẫn được trả lời bằng dữ liệu thật trong máy: FAQ từ chatbot_faqs.json, tìm kiếm sản phẩm trong products.json, tính phí giao từ shipping_methods.json. Nhờ vậy trên GitHub Pages (không có server) chatbot vẫn hoạt động ở chế độ fallback. Các phương án sai: báo lỗi rồi bắt tải lại là trải nghiệm kém và không phải cách nhóm em làm; bịa số liệu vi phạm nguyên tắc không bịa của dự án; chuyển hướng và dừng hẳn thì mất tính năng tư vấn.",
  "topic": "ai"
 },
 {
  "id": "bv7-a07",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Vì sao nhóm em phải kiểm tra response.ok trước khi gọi response.json() khi fetch? Nếu bỏ qua bước này thì chuyện gì xảy ra với một phản hồi lỗi 500 từ server?",
  "options": [
   "fetch chỉ reject khi lỗi mạng, còn phản hồi 500 vẫn resolve bình thường, nên nếu không kiểm tra response.ok thì code sẽ cố parse body lỗi thành JSON và hiển thị sai hoặc ném lỗi khó hiểu; kiểm tra ok giúp rẽ nhánh xử lý lỗi rõ ràng.",
   "fetch tự động reject mọi mã trạng thái khác 200 nên không cần kiểm tra response.ok, chỉ cần try/catch là đủ.",
   "response.ok chỉ dùng để kiểm tra định dạng JSON, không liên quan đến mã trạng thái HTTP.",
   "Nếu bỏ qua response.ok thì trình duyệt sẽ tự hiển thị trang lỗi 500 thay cho ứng dụng, không ảnh hưởng gì."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: fetch chỉ reject khi có lỗi mạng thật sự (mất kết nối, DNS...), còn phản hồi HTTP như 404 hay 500 vẫn resolve với response.ok bằng false. Nếu code cứ gọi response.json() thì sẽ cố parse body lỗi, có thể ném SyntaxError hoặc trả về object lỗi mà giao diện tưởng là câu trả lời hợp lệ. Vì vậy nhóm em kiểm tra response.ok trước, nếu không ok thì rẽ sang nhánh fallback hoặc báo lỗi thân thiện. Các phương án sai: fetch không tự reject theo mã trạng thái; response.ok là thuộc tính boolean theo mã 200-299 chứ không phải kiểm tra định dạng; trình duyệt không tự thay trang khi fetch nhận 500.",
  "topic": "code"
 },
 {
  "id": "bv7-a08",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "JSON.parse được dùng ở đâu trong dự án và vì sao nhóm em phải bọc nó trong try/catch? Em nêu tình huống dữ liệu hỏng có thể xảy ra.",
  "options": [
   "JSON.parse được dùng khi đọc dữ liệu từ localStorage và khi server đọc body request; nhóm em bọc try/catch vì nếu chuỗi không phải JSON hợp lệ (dữ liệu bị sửa tay, localStorage hỏng, body rỗng) thì JSON.parse ném SyntaxError làm sập luồng xử lý, còn bọc lại thì trả về giá trị mặc định an toàn.",
   "JSON.parse không bao giờ ném lỗi nên không cần try/catch, chỉ cần gọi là xong.",
   "JSON.parse chỉ dùng để chuyển object thành chuỗi trước khi gửi đi, nên không có rủi ro gì.",
   "Nhóm em bọc try/catch chỉ để che giấu lỗi, không có tình huống thực tế nào gây lỗi parse trong dự án."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: JSON.parse xuất hiện khi đọc dữ liệu từ localStorage (ví dụ lịch sử chat, giỏ hàng) và khi server.js đọc body của request POST /api/chat. Nếu chuỗi đầu vào không hợp lệ, JSON.parse ném SyntaxError ngay lập tức. Các tình huống thực tế: người dùng hoặc dev sửa tay giá trị trong localStorage, dữ liệu lưu từ phiên bản cũ khác cấu trúc, body request rỗng hoặc bị cắt. Bọc try/catch giúp trả về mảng rỗng hoặc object mặc định, ứng dụng tiếp tục chạy thay vì trắng trang. Các phương án sai: JSON.parse chắc chắn ném lỗi với chuỗi sai; nó là parse chứ không phải stringify; và trong dự án có thật các tình huống dữ liệu hỏng nên không thể bỏ qua.",
  "topic": "code"
 },
 {
  "id": "bv7-a09",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống khách mở site trên GitHub Pages (không có server.js) mà chatbot vẫn cố gọi http://localhost:3000/api/chat, trình duyệt sẽ báo gì, và nhóm em đã xử lý để tránh khách phải chờ lâu như thế nào?",
  "options": [
   "Trình duyệt chặn hoặc không kết nối được tới localhost:3000 nên fetch reject, có thể kèm lỗi CORS/mixed content; nhóm em xử lý bằng cách đánh dấu API không khả dụng sau lần lỗi đầu, tạm ngưng gọi trong một khoảng thời gian và trả lời ngay bằng dữ liệu cục bộ để khách không phải chờ.",
   "Trình duyệt tự chuyển hướng localhost:3000 sang GitHub Pages nên không có lỗi gì xảy ra.",
   "Lỗi chỉ là cảnh báo trong console, khách vẫn nhận câu trả lời từ AI bình thường vì GitHub Pages có sẵn backend.",
   "Nhóm em không gặp tình huống này vì đã nhúng API key vào file JS để gọi thẳng dịch vụ AI từ trình duyệt."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: trên GitHub Pages không có server.js chạy ở cổng 3000, nên fetch tới localhost:3000 sẽ thất bại (không kết nối được, hoặc bị chặn do khác origin, thậm chí mixed content nếu trang https gọi http). Nhóm em xử lý bằng cờ trạng thái API và thời điểm tạm ngưng: lần lỗi đầu tiên đánh dấu API không dùng được, các câu sau trả lời ngay bằng FAQ và dữ liệu sản phẩm cục bộ, sau một khoảng thời gian mới thử lại. Nhờ vậy khách không phải chờ timeout mỗi lần hỏi. Các phương án sai: trình duyệt không tự chuyển hướng localhost; GitHub Pages không có backend nên không thể trả lời bằng AI thật; nhúng API key vào JS là việc nhóm em cố tình tránh vì lộ key.",
  "topic": "ai"
 },
 {
  "id": "bv7-a10",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Vì sao nhóm em đặt API key trong file .env ở phía server thay vì gọi thẳng dịch vụ AI từ JavaScript phía client? Em liên hệ với cách fetch /api/chat hoạt động.",
  "options": [
   "Vì nếu gọi thẳng từ trình duyệt thì key nằm trong file JS công khai, ai xem source cũng lấy được và lạm dụng; nhóm em để key trong .env chỉ server.js đọc, client chỉ fetch tới /api/chat nội bộ, server đứng ra gọi dịch vụ AI nên key không bao giờ lộ ra frontend.",
   "Vì trình duyệt không hỗ trợ gọi HTTPS nên buộc phải qua server trung gian, không liên quan đến bảo mật key.",
   "Vì đặt key trong .env giúp website chạy nhanh hơn nhờ cache, còn gọi trực tiếp thì chậm.",
   "Vì dịch vụ AI chỉ cho phép gọi từ Node.js, còn trình duyệt thì bị nhà cung cấp chặn vĩnh viễn."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: đây là nguyên tắc bảo mật cơ bản. Nếu client gọi thẳng API của nhà cung cấp AI, key phải nằm trong mã JS và bất kỳ ai mở DevTools cũng đọc được, dẫn đến bị lạm dụng và tốn tiền. Nhóm em đặt DEEPSEEK_API_KEY trong .env (đã git-ignore), server.js đọc bằng loadEnv rồi tự gọi dịch vụ AI qua module https, client chỉ fetch tới /api/chat nội bộ. Nhờ vậy key ở lại phía server, frontend không bao giờ thấy. Các phương án sai: trình duyệt có hỗ trợ HTTPS; .env không liên quan tốc độ; nhà cung cấp không chặn trình duyệt tuyệt đối, vấn đề là bảo mật key chứ không phải kỹ thuật."
 },
 {
  "id": "bv7-a11",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Trong server.js, nhóm em xử lý CORS cho endpoint /api/chat như thế nào và vì sao phải làm vậy khi phát triển cục bộ?",
  "options": [
   "Nhóm em đặt các header Access-Control-Allow-Origin, Allow-Methods, Allow-Headers cho mọi phản hồi và trả 204 cho request OPTIONS; cần vậy vì khi trang chạy ở cổng khác (Live Server) gọi tới localhost:3000 là khác origin, trình duyệt sẽ chặn nếu server không cho phép.",
   "Nhóm em không cần CORS vì fetch cùng origin luôn, chỉ khi deploy lên GitHub Pages mới cần.",
   "Nhóm em xử lý CORS bằng cách tắt bảo mật trình duyệt khi demo, không đụng gì tới server.",
   "Nhóm em thêm header Access-Control-Allow-Origin chỉ cho request GET, còn POST thì trình duyệt tự cho qua."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: server.js đặt Access-Control-Allow-Origin, Access-Control-Allow-Methods và Access-Control-Allow-Headers cho mọi phản hồi, đồng thời xử lý request OPTIONS (preflight) bằng cách trả 204. Lý do: khi phát triển, trang chạy ở Live Server cổng khác (ví dụ 5500) còn API ở localhost:3000, đây là hai origin khác nhau nên trình duyệt áp chính sách same-origin và chặn nếu server không khai báo cho phép. Các phương án sai: fetch không tự cùng origin khi khác cổng; tắt bảo mật trình duyệt không phải cách làm đúng và không đưa vào đồ án; POST có preflight nên cần xử lý OPTIONS chứ không thể chỉ khai báo GET.",
  "topic": "ai"
 },
 {
  "id": "bv7-a12",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Request OPTIONS (preflight) là gì và vì sao khi gọi fetch POST /api/chat với header Content-Type application/json, trình duyệt lại gửi thêm một request OPTIONS trước?",
  "options": [
   "Preflight là request kiểm tra mà trình duyệt tự gửi trước các request không đơn giản (như POST kèm Content-Type application/json) để hỏi server có cho phép origin, method, header đó không; server trả 204 kèm header CORS thì trình duyệt mới gửi request POST thật.",
   "Preflight là request do lập trình viên tự viết để kiểm tra server còn sống, không liên quan đến CORS.",
   "Preflight chỉ xảy ra với GET, còn POST thì trình duyệt gửi thẳng không cần kiểm tra.",
   "Preflight là bước nén dữ liệu trước khi gửi, giúp body JSON nhỏ hơn và nhanh hơn."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: preflight là cơ chế của trình duyệt theo chuẩn CORS. Khi request không thuộc loại đơn giản (ví dụ POST kèm Content-Type application/json, hoặc có header tùy chỉnh), trình duyệt gửi trước một request OPTIONS tới cùng URL để hỏi server: origin này có được phép không, method POST có được phép không, header Content-Type có được phép không. Nếu server trả lời đúng các header Access-Control-Allow-* thì trình duyệt mới gửi request POST thật. server.js của nhóm em xử lý OPTIONS bằng cách trả 204 kèm các header cho phép. Các phương án sai: preflight do trình duyệt tự sinh chứ không phải dev viết; nó xảy ra với các request không đơn giản chứ không phải chỉ GET; nó không phải bước nén dữ liệu.",
  "topic": "ai"
 },
 {
  "id": "bv7-a13",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống khách bấm gửi liên tục nhiều câu hỏi trong lúc AI đang trả lời, nhóm em chống spam và chống treo giao diện ở phía client như thế nào? Em nêu cơ chế cụ thể trong chatbot.js.",
  "options": [
   "Chatbot dùng cờ chatDangXuLy: khi đang chờ trả lời thì bỏ qua các lần gửi thêm, hiện chỉ báo đang gõ, và khi có kết quả hoặc lỗi thì tắt cờ; nhờ vậy không gửi trùng request và không treo khung chat.",
   "Chatbot cho gửi thoải mái, mỗi câu tạo một request song song và hiển thị theo thứ tự server trả về, không cần chống gì.",
   "Chatbot chặn bằng cách vô hiệu hóa nút gửi vĩnh viễn sau câu đầu tiên, khách phải tải lại trang mới hỏi tiếp.",
   "Chatbot dùng alert để cảnh báo khách mỗi lần bấm nhanh, không xử lý gì thêm."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: chatbot.js dùng biến chatDangXuLy làm cờ. Khi khách gửi câu hỏi, cờ bật lên, hiện chỉ báo đang gõ (typing indicator), và mọi lần bấm gửi hay Enter trong lúc đó đều bị bỏ qua. Khi nhận được câu trả lời hoặc gặp lỗi (được bọc try/catch) thì chỉ báo được gỡ và cờ tắt, khách hỏi tiếp được. Cách này tránh gửi trùng request, tránh xếp hàng nhiều câu chờ AI, và đảm bảo dấu ba chấm không quay mãi. Các phương án sai: cho gửi song song sẽ rối thứ tự và tốn quota; vô hiệu hóa vĩnh viễn là trải nghiệm tệ; alert không phải cách nhóm em làm và không giải quyết gốc.",
  "topic": "ai"
 },
 {
  "id": "bv7-a14",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Nhóm em dùng timeout cho fetch /api/chat và cho lệnh gọi AI phía server như thế nào? Vì sao cần timeout ở cả hai phía?",
  "options": [
   "Phía server đặt timeout cho request https tới dịch vụ AI (khoảng 30 giây mỗi lần) và có thử lại; phía client chờ tối đa lâu hơn tổng thời gian đó rồi bỏ cuộc và trả lời fallback, nhờ vậy nếu mạng chậm hay AI treo thì khách vẫn nhận phản hồi thay vì chờ vô hạn.",
   "Nhóm em không đặt timeout vì fetch tự hủy sau 5 giây mặc định, không cần cấu hình gì.",
   "Nhóm em chỉ đặt timeout ở client, còn server cứ chờ AI bao lâu cũng được vì không ảnh hưởng ai.",
   "Nhóm em đặt timeout rất ngắn 1 giây để tiết kiệm tài nguyên, chấp nhận AI gần như luôn bị hủy."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: timeout cần ở cả hai phía vì mỗi tầng có rủi ro riêng. Phía server, lệnh gọi dịch vụ AI qua https có timeout khoảng 30 giây cho mỗi lần thử, kèm cơ chế thử lại khi lỗi mạng hoặc quá giờ, tránh treo một request mãi. Phía client, chatbot chờ tối đa lâu hơn tổng thời gian server có thể dùng, hết hạn thì bỏ cuộc và trả lời bằng dữ liệu cục bộ. Nhờ vậy dù AI chậm hay mạng chập chờn, khách vẫn có phản hồi. Các phương án sai: fetch không tự hủy sau 5 giây; chỉ timeout một phía thì phía kia vẫn có thể treo; timeout 1 giây quá ngắn khiến AI gần như không bao giờ kịp trả lời.",
  "topic": "ai"
 },
 {
  "id": "bv7-a15",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống câu trả lời AI trả về có chứa thẻ HTML hoặc số tiền không khớp dữ liệu, nhóm em xử lý hai rủi ro này ở đâu và như thế nào?",
  "options": [
   "Nhóm em xử lý ở hai lớp: phía server có sanitizeReply chặn số tiền không nằm trong dữ liệu thật và link sản phẩm không tồn tại; phía client có chatCheckAiReply kiểm tra lại, còn khi hiển thị thì escapeHtml đổi ký tự đặc biệt trước khi định dạng, nên thẻ HTML lạ không chèn được vào giao diện.",
   "Nhóm em tin tưởng AI hoàn toàn nên hiển thị nguyên văn câu trả lời, không kiểm tra gì.",
   "Nhóm em chỉ chặn ở client, còn server trả gì cũng được vì client luôn kiểm tra lại.",
   "Nhóm em dùng innerHTML trực tiếp cho câu trả lời AI vì như vậy mới hiển thị được định dạng đẹp."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: nhóm em phòng thủ nhiều lớp. Phía server, hàm sanitizeReply quét các cụm số tiền trong câu trả lời, nếu số tiền không khớp giá sản phẩm hay phí giao trong dữ liệu thật thì thay bằng câu trả lời chuẩn, đồng thời kiểm tra link product-detail.html?id=... có tồn tại trong kho không. Phía client, chatCheckAiReply kiểm tra thêm lần nữa trước khi hiển thị. Về HTML, hàm escapeHtml đổi các ký tự đặc biệt thành thực thể trước khi áp định dạng markdown đơn giản, nên thẻ lạ từ AI không chèn được. Các phương án sai: tin tưởng AI hoàn toàn là rủi ro bịa số liệu; chỉ chặn một phía thì phía kia vẫn lọt; dùng innerHTML trực tiếp cho câu trả lời AI là lỗ hổng chèn mã.",
  "topic": "ai"
 },
 {
  "id": "bv7-a16",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Khi fetch đọc products.json, nhóm em xử lý trường hợp file không tồn tại hoặc JSON hỏng ra sao để trang không bị trắng? Em nêu cách làm thực tế.",
  "options": [
   "Nhóm em bọc phần nạp dữ liệu trong try/catch, kiểm tra response.ok trước khi parse, nếu lỗi thì trả về mảng rỗng hoặc dùng dữ liệu dự phòng, và giao diện hiển thị trạng thái trống thay vì sập; nhờ vậy trang vẫn render được khung và các phần khác.",
   "Nhóm em để lỗi nổi lên và trình duyệt tự hiển thị trang lỗi, khách tự hiểu và tải lại.",
   "Nhóm em dùng vòng lặp while thử fetch lại mãi cho đến khi thành công, không có giới hạn số lần.",
   "Nhóm em không cần xử lý vì products.json luôn tồn tại trên GitHub Pages, không bao giờ hỏng."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: cách nhóm em làm là bọc phần nạp dữ liệu trong try/catch, kiểm tra response.ok trước khi gọi response.json(), và nếu có lỗi thì trả về mảng rỗng hoặc dùng dữ liệu dự phòng. Giao diện khi đó hiển thị trạng thái không có dữ liệu thay vì sập cả trang, các phần khác như header, footer, khung lọc vẫn hoạt động. Với chatbot, nếu không nạp được dữ liệu thì vẫn còn FAQ và câu trả lời mặc định. Các phương án sai: để lỗi nổi lên làm trắng trang là trải nghiệm kém; fetch lại vô hạn có thể treo trình duyệt và spam server; dữ liệu vẫn có thể hỏng do sửa tay hoặc deploy thiếu file nên không thể bỏ qua.",
  "topic": "code"
 },
 {
  "id": "bv7-a17",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Fetch trả về Promise, vậy nhóm em dùng await ở đâu và điều gì xảy ra nếu quên await khi gọi response.json()? Em giải thích bằng ví dụ đọc JSON.",
  "options": [
   "Nếu quên await thì biến nhận được là một Promise chứ không phải dữ liệu, nên khi truy cập thuộc tính hay lặp mảng sẽ ra undefined hoặc lỗi; nhóm em luôn await cả fetch lẫn response.json() để có dữ liệu thật trước khi dùng.",
   "Quên await không sao vì JavaScript tự chờ Promise xong rồi mới chạy dòng tiếp theo.",
   "Quên await chỉ ảnh hưởng hiệu năng, dữ liệu vẫn đúng vì Promise tự bung ra giá trị.",
   "Quên await thì trình duyệt báo lỗi cú pháp ngay khi tải trang, không chạy được gì."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: fetch trả về Promise, response.json() cũng trả về Promise. Nếu quên await, biến nhận được là đối tượng Promise chứ không phải mảng sản phẩm, nên khi gọi .length hay lặp sẽ ra undefined hoặc ném lỗi kiểu cannot read property. Nhóm em luôn viết await cho cả hai bước: await fetch(...) để có response, rồi await response.json() để có dữ liệu thật, sau đó mới xử lý. Các phương án sai: JavaScript không tự chờ Promise; Promise không tự bung giá trị khi truy cập thuộc tính; quên await không phải lỗi cú pháp nên trang vẫn tải nhưng logic sai âm thầm.",
  "topic": "code"
 },
 {
  "id": "bv7-a18",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống mở thẳng file scripts/index.html bằng file:// và thấy chatbot không tải được FAQ, còn khi chạy Live Server thì bình thường, em giải thích nguyên nhân và cách nhóm em khuyến nghị chạy đồ án.",
  "options": [
   "Nguyên nhân là fetch bị chặn với giao thức file:// do chính sách origin, nên JSON không nạp được; nhóm em khuyến nghị chạy qua Live Server khi phát triển và GitHub Pages khi nộp, đồng thời README ghi rõ cách chạy để thầy và người chấm không gặp lỗi này.",
   "Nguyên nhân là file JSON bị hỏng khi copy sang máy khác, chạy Live Server thì tự sửa lại file nên hết lỗi.",
   "Nguyên nhân là Live Server có sẵn dữ liệu dự phòng, còn file:// thì không, nên nhóm em phải chép dữ liệu vào HTML.",
   "Nguyên nhân là do thiếu quyền quản trị trên máy, chạy bằng quyền admin là file:// hoạt động bình thường."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: với file://, trình duyệt coi mỗi file là origin riêng và chặn fetch đọc tài nguyên khác, nên các file JSON trong data/json không nạp được, kéo theo chatbot thiếu FAQ và sản phẩm. Khi chạy qua Live Server (http) hoặc GitHub Pages (https), fetch hoạt động bình thường vì cùng giao thức và origin hợp lệ. Nhóm em khuyến nghị trong README là chạy bằng Live Server khi phát triển, dùng link GitHub Pages khi nộp, và có fallback để chatbot vẫn trả lời được phần nào khi thiếu dữ liệu. Các phương án sai: Live Server không sửa file JSON; không có dữ liệu dự phòng tự động trong Live Server; quyền admin không thay đổi chính sách bảo mật của trình duyệt.",
  "topic": "code"
 },
 {
  "id": "bv7-a19",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Nhóm em gửi kèm history và candidates trong body của fetch POST /api/chat để làm gì? Em giải thích vai trò của từng trường và vì sao server cần chúng.",
  "options": [
   "history giúp AI hiểu ngữ cảnh các câu trước (ví dụ còn mẫu khác không, cái nào rẻ hơn), candidates là danh sách sản phẩm client đã lọc sẵn để server ưu tiên dùng thay vì tự tìm lại, nhờ vậy câu trả lời bám đúng dữ liệu và ngữ cảnh khách đang xem.",
   "history dùng để lưu vào file log trên server, còn candidates là danh sách sản phẩm cấm AI nhắc tới.",
   "history là danh sách sản phẩm đã xem, còn candidates là lịch sử tin nhắn, hai trường chỉ để đổi tên cho đẹp.",
   "Cả hai trường chỉ để trang trí, server bỏ qua và luôn tự tìm sản phẩm từ đầu mỗi lần."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: history là mảng các lượt hội thoại gần nhất (role user và model) để AI hiểu các câu nối tiếp như còn mẫu khác không hay cái nào rẻ hơn. candidates là danh sách sản phẩm client đã lọc từ dữ liệu cục bộ, gửi lên để server dùng làm ngữ cảnh ưu tiên, vì localStorage phía client có thể mới hơn file JSON trên server. server.js đọc cả hai, cắt history còn vài lượt gần nhất để tiết kiệm token, và nếu có candidates thì dùng luôn thay vì tìm lại. Các phương án sai: history không phải để log và candidates không phải danh sách cấm; hai trường không bị đảo vai trò; server thực sự dùng chúng chứ không bỏ qua.",
  "topic": "ai"
 },
 {
  "id": "bv7-a20",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống nhóm em muốn chuyển từ fetch sang XMLHttpRequest cho endpoint /api/chat thì phải viết lại những gì, và vì sao nhóm em vẫn giữ fetch? Em so sánh mức độ phức tạp.",
  "options": [
   "Phải tạo đối tượng XHR, gọi open với method POST và URL, setRequestHeader Content-Type, gắn onload để kiểm tra status rồi JSON.parse responseText, gắn onerror và timeout thủ công; phức tạp hơn fetch nhiều nên nhóm em giữ fetch vì gọn, dùng await và try/catch tự nhiên hơn.",
   "Chỉ cần đổi chữ fetch thành XMLHttpRequest là xong vì hai API có cùng tham số và cùng trả Promise.",
   "Phải viết lại toàn bộ server.js vì XMLHttpRequest không gửi được JSON lên server Node.js.",
   "Không cần viết lại gì vì XMLHttpRequest và fetch dùng chung một đối tượng toàn cục, chỉ khác tên gọi."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: chuyển sang XHR đòi hỏi nhiều bước thủ công: new XMLHttpRequest, open với method và URL, setRequestHeader cho Content-Type, gắn onload để kiểm tra status và JSON.parse(responseText), gắn onerror và đặt timeout. Không có Promise nên muốn dùng await phải tự bọc lại. fetch gọn hơn nhiều: một lời gọi trả Promise, await hai bước là có dữ liệu, try/catch bắt lỗi tự nhiên. Vì vậy nhóm em giữ fetch cho cả việc đọc JSON lẫn gọi /api/chat. Các phương án sai: hai API khác hẳn nhau về tham số và kiểu trả về; XHR gửi JSON bình thường nên không phải viết lại server; chúng không dùng chung đối tượng.",
  "topic": "code"
 },
 {
  "id": "bv7-a21",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Vì sao nhóm em phải escape nội dung trước khi hiển thị câu trả lời từ AI, và escapeHtml trong chatbot.js làm gì? Em liên hệ với rủi ro bảo mật.",
  "options": [
   "Vì câu trả lời AI là văn bản không tin cậy, có thể chứa thẻ HTML hoặc script; escapeHtml đổi các ký tự đặc biệt thành thực thể trước khi áp định dạng, nhờ vậy nội dung hiển thị đúng chữ mà không chèn được mã độc vào trang.",
   "Vì escapeHtml giúp câu trả lời hiển thị đẹp hơn bằng cách thêm màu và icon, không liên quan bảo mật.",
   "Vì nếu không escape thì trình duyệt sẽ không hiển thị được tiếng Việt có dấu trong câu trả lời.",
   "Vì escapeHtml dùng để nén câu trả lời trước khi lưu vào localStorage cho nhẹ dung lượng."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: câu trả lời từ AI là dữ liệu không tin cậy, có thể chứa thẻ HTML hoặc đoạn script do mô hình sinh ra hoặc do kẻ tấn công chèn vào. Nếu gán thẳng vào innerHTML thì trình duyệt sẽ thực thi, gây lỗ hổng chèn mã. Hàm escapeHtml đổi các ký tự đặc biệt thành thực thể HTML trước, sau đó mới áp các định dạng đơn giản như in đậm, in nghiêng, xuống dòng, nên nội dung hiển thị đúng chữ mà không chèn được mã. Các phương án sai: escape không phải để làm đẹp; tiếng Việt có dấu không liên quan đến escape; escape không phải để nén dữ liệu."
 },
 {
  "id": "bv7-a22",
  "chapter": 12,
  "difficulty": 3,
  "type": "multiple",
  "question": "Trong luồng fetch /api/chat của nhóm em, những biện pháp nào giúp câu trả lời vừa an toàn vừa không bịa số liệu? Em chọn các ý đúng và giải thích. (chọn nhiều đáp án)",
  "options": [
   "Server kiểm tra số tiền trong câu trả lời AI phải khớp dữ liệu thật trước khi trả về",
   "Client kiểm tra lại câu trả lời AI bằng hàm chatCheckAiReply trước khi hiển thị",
   "Nội dung câu trả lời được escape trước khi chèn vào giao diện",
   "Cho AI tự do trả lời mọi số tiền vì AI luôn chính xác"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ba biện pháp đúng tạo thành nhiều lớp phòng thủ. Thứ nhất, phía server hàm sanitizeReply quét các cụm số tiền trong câu trả lời, nếu không khớp giá sản phẩm hay phí giao trong dữ liệu thật thì thay bằng câu trả lời chuẩn, đồng thời kiểm tra link sản phẩm có tồn tại. Thứ hai, phía client chatCheckAiReply kiểm tra thêm lần nữa trước khi hiển thị, phòng trường hợp server bị bỏ qua hoặc phiên bản cũ. Thứ ba, escapeHtml đổi ký tự đặc biệt trước khi định dạng và chèn vào giao diện, chặn rủi ro chèn mã từ nội dung AI. Phương án cho AI tự do trả lời mọi số tiền là sai vì mô hình ngôn ngữ có thể bịa giá, và dự án đã ghi nhận đây là rủi ro cần chặn. Nhờ ba lớp này, câu trả lời hiển thị cho khách vừa an toàn về mã vừa trung thực về số liệu.",
  "topic": "ai"
 }
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_BV7; }
