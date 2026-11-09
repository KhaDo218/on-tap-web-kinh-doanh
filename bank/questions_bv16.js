// Ngan hang on bao ve RoomCraft - da phan loai topic + bien tap bo khung 'Thay' (2026-11-09)
const QUESTIONS_BV16 = [
 {
  "id": "bv16-a01",
  "chapter": 13,
  "difficulty": 1,
  "type": "single",
  "question": "Vì sao nhóm em chọn đề tài RoomCraft thay vì làm một website bán nội thất thông thường? Em hãy trình bày lý do xuất phát từ bối cảnh thị trường và từ vấn đề người mua gặp phải, đồng thời nói rõ vì sao cách làm 'lấy không gian phòng làm trung tâm' lại phù hợp với nhóm em.",
  "options": [
   "Vì người mua nội thất trực tuyến bắt đầu từ ảnh phòng đẹp nhưng khó mua đúng món trong ảnh và khó hình dung sản phẩm 2D, nên nhóm chọn lấy không gian phòng làm điểm khởi đầu để rút ngắn đường từ cảm hứng đến giỏ hàng, đồng thời tận dụng lợi thế ảnh phòng và hotspot mà một website bán hàng thông thường không có.",
   "Vì nhóm muốn làm một website bán nội thất giống các sàn lớn nhưng đơn giản hơn, chủ yếu để có đủ chức năng giỏ hàng và thanh toán cho đúng yêu cầu môn học.",
   "Vì nhóm chọn đề tài này vì có sẵn dữ liệu ảnh phòng trên mạng, không cần phân tích người dùng, và mục tiêu chính là làm giao diện đẹp để lấy điểm trình bày.",
   "Vì nhóm muốn thử nghiệm công nghệ 3D là chính, còn phần bán hàng chỉ là phụ để đủ điều kiện nộp đồ án."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu: lý do cốt lõi nằm ở bối cảnh thị trường và vấn đề người mua. Theo báo cáo, người tiêu dùng Việt Nam mua sắm trực tuyến rất mạnh, nội thất chiếm khoảng 11% giá trị hàng hóa giao dịch trực tuyến, nhưng tỷ lệ bỏ giỏ hàng ngành nội thất lên tới 90%. Nguyên nhân là người mua bắt đầu từ ảnh phòng đẹp nhưng không mua được đúng món trong ảnh, và ảnh sản phẩm 2D trên nền đơn sắc không cho thấy tỷ lệ thật. RoomCraft đảo ngược điểm khởi đầu: đi từ cả căn phòng, gắn hotspot lên từng món, cho xem 3D và gợi ý hoàn thiện không gian. Ba phương án còn lại đều sai về động cơ: làm website thông thường thì không giải quyết được vấn đề phân mảnh hành trình, chọn vì có sẵn dữ liệu là bỏ qua phân tích người dùng, còn lấy 3D làm trọng tâm thì ngược với thứ tự ưu tiên của nhóm là core e-commerce trước, 3D sau.",
  "topic": "biz"
 },
 {
  "id": "bv16-a02",
  "chapter": 13,
  "difficulty": 1,
  "type": "single",
  "question": "Bốn vấn đề cốt lõi mà nhóm em đặt ra để giải quyết là gì, và mỗi vấn đề được xử lý bằng thành phần nào trong RoomCraft? Em nêu rõ cặp vấn đề - giải pháp, đừng chỉ liệt kê tên tính năng.",
  "options": [
   "Bốn vấn đề là: khó hình dung sản phẩm trong không gian thực tế, hành trình từ xem phòng đến mua bị phân mảnh, thiếu công cụ xem 3D nhiều góc, và không biết mua thêm gì để hoàn thiện không gian; tương ứng nhóm giải bằng ảnh phòng có hotspot, luồng Shop the Room, trình xem 3D model-viewer, và khối gợi ý Complete Your Room.",
   "Bốn vấn đề là: thiếu trang đẹp, thiếu giỏ hàng, thiếu thanh toán, thiếu trang quản trị; nhóm giải bằng cách làm giao diện theo phong cách tối giản, thêm giỏ hàng localStorage, thanh toán mô phỏng và tám trang admin.",
   "Bốn vấn đề là: dữ liệu sản phẩm chưa có, ảnh chưa có, model 3D chưa có, chatbot chưa có; nhóm giải bằng cách mua dữ liệu, tải ảnh, tạo model bằng AI và viết chatbot.",
   "Bốn vấn đề là: hiệu năng chậm, bảo mật yếu, thiếu backend, thiếu kiểm thử; nhóm giải bằng tải lười, ẩn nút admin, viết server.js và chạy Playwright."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu vì nó bám đúng bốn vấn đề trong báo cáo và ghép đúng với bốn thành phần đặc trưng. Vấn đề một là ảnh sản phẩm tĩnh làm mất ngữ cảnh không gian, giải bằng cách đặt sản phẩm vào ảnh phòng có hotspot. Vấn đề hai là hành trình phân mảnh, giải bằng luồng Shop the Room cho phép bấm hotspot rồi thêm vào giỏ ngay. Vấn đề ba là thiếu góc nhìn 3D, giải bằng model-viewer với 202 model glb. Vấn đề bốn là người dùng không biết mua thêm gì, giải bằng Complete Your Room gợi ý sản phẩm khác danh mục cùng phong cách. Ba phương án còn lại đều nhầm vấn đề kỹ thuật hoặc vấn đề nội bộ nhóm thành vấn đề của người dùng, trong khi bốn vấn đề cốt lõi phải là vấn đề của khách hàng thì mới biện minh được cho đề tài.",
  "topic": "biz"
 },
 {
  "id": "bv16-a03",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Nếu chỉ được giữ ba tính năng đặc trưng và bỏ hết phần còn lại, nhóm em giữ gì và vì sao? Em giải thích tiêu chí chọn, gắn với chuỗi trải nghiệm Explore Room đến Buy.",
  "options": [
   "Nhóm giữ Shop the Room, 3D Product Viewer và Complete Your Room vì đây là ba điểm nhấn tạo khác biệt so với website bán nội thất thường, và cả ba nối liền chuỗi Explore Room, Discover Furniture, View 3D, Get Recommendation, Buy; các phần như đồ cũ hay chatbot là mở rộng có thể cắt mà vẫn trọn luồng.",
   "Nhóm giữ trang chủ, trang sản phẩm và trang giỏ hàng vì đây là ba trang người dùng dùng nhiều nhất, còn các tính năng khác chỉ để trình diễn.",
   "Nhóm giữ chatbot, đồ cũ và trang quản trị vì đây là ba phần khó nhất, giữ lại để chứng minh năng lực kỹ thuật của nhóm.",
   "Nhóm giữ đăng nhập, thanh toán và đánh giá vì đây là ba chức năng thương mại điện tử bắt buộc phải có theo yêu cầu môn học."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Tiêu chí chọn là tính khác biệt và tính liên kết chuỗi trải nghiệm. Shop the Room biến ảnh phòng thành kênh bán, giải quyết vấn đề phân mảnh. 3D Viewer giảm bất định khi mua món giá trị cao. Complete Your Room tăng giá trị đơn hàng bằng gợi ý đồng bộ phong cách. Ba tính năng này cũng chính là ba mục tiêu cụ thể được xếp vào nhóm Room Experience trong báo cáo, và báo cáo ghi rõ nếu tiến độ áp lực thì nhóm thu hẹp các hạng mục Should và Could mà vẫn giữ trọn luồng từ khám phá phòng đến mua hàng. Phương án hai chỉ là trang phổ thông, không tạo khác biệt. Phương án ba chọn theo độ khó chứ không theo giá trị người dùng, và chatbot hay đồ cũ đều là Could have. Phương án bốn là chức năng bắt buộc nhưng không phải đặc trưng của RoomCraft.",
  "topic": "biz"
 },
 {
  "id": "bv16-a04",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Vì sao nhóm em chọn thanh toán mô phỏng và OTP mô phỏng thay vì tích hợp cổng thanh toán và gửi email thật? Em trình bày đánh đổi và rủi ro đi kèm.",
  "options": [
   "Nhóm chọn mô phỏng vì tích hợp cổng thanh toán và dịch vụ email thật đòi hỏi tài khoản doanh nghiệp, phí, cấu hình bảo mật và thời gian không có, trong khi giá trị học thuật nằm ở luồng nghiệp vụ; đánh đổi là không có giao dịch thật và OTP hiện ngay trên trang, rủi ro là không kiểm chứng được tích hợp thật nên khi triển khai phải làm lại phần này.",
   "Nhóm chọn mô phỏng vì nhóm không biết cách tích hợp cổng thanh toán, và mô phỏng cũng cho kết quả giống hệt thật nên không cần làm lại.",
   "Nhóm chọn mô phỏng vì môn học cấm dùng dịch vụ bên thứ ba, nên mọi thứ phải tự viết từ đầu kể cả cổng thanh toán.",
   "Nhóm chọn mô phỏng vì thanh toán thật không cần thiết cho bất kỳ đồ án thương mại điện tử nào, chỉ cần giao diện giống là đủ."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Báo cáo ghi rõ nhóm xác định rủi ro chính là sa đà vào tối ưu chi tiết như tích hợp cổng thanh toán hay gửi email thật làm mất thời gian các phần đặc trưng, nên chọn thanh toán và OTP đều mô phỏng. Đánh đổi là luồng nghiệp vụ vẫn đủ để demo và kiểm thử, nhưng không có giao dịch thật và mã OTP hiện ngay trên trang. Rủi ro là khi triển khai thật phải thay toàn bộ tầng này, và bảo mật hiện tại chỉ ở mức mô phỏng, mật khẩu băm SHA-256 không salt. Phương án hai sai vì mô phỏng không giống thật và chắc chắn phải làm lại. Phương án ba sai vì môn học không cấm dịch vụ bên thứ ba, nhóm vẫn dùng Google Identity Services và model-viewer từ CDN. Phương án bốn sai vì thanh toán thật là hướng phát triển bắt buộc khi triển khai thực tế.",
  "topic": "biz"
 },
 {
  "id": "bv16-a05",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Theo em, kỹ năng nào nhóm em học được nhiều nhất khi làm RoomCraft, và kỹ năng nào còn thiếu nếu muốn làm dự án thương mại điện tử thật? Em trả lời thẳng thắn, có dẫn chứng từ quá trình làm.",
  "options": [
   "Nhóm học nhiều nhất là làm việc nhóm với Git theo nhánh và Pull Request, cùng kỹ năng tổ chức dữ liệu JSON và component hóa; còn thiếu là backend thật với API và cơ sở dữ liệu, xác thực phía máy chủ và kiểm thử với người dùng ngoài nhóm.",
   "Nhóm học nhiều nhất là dùng React và Node.js vì dự án chủ yếu xoay quanh hai công nghệ này; còn thiếu là kỹ năng thiết kế đồ họa.",
   "Nhóm học nhiều nhất là kỹ năng thuyết trình và làm slide, vì phần lớn thời gian dành cho việc chuẩn bị báo cáo; còn thiếu là kỹ năng viết mã.",
   "Nhóm học nhiều nhất là kỹ năng tạo model 3D bằng AI, vì đây là phần tốn nhiều thời gian nhất; còn thiếu là kỹ năng dùng Excel."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Báo cáo ghi nhận ba vấn đề lặp lại khi làm nhóm trên cùng kho mã: ghi đè mã người khác, xung đột khi gộp nhánh, và thay đổi file dùng chung ảnh hưởng mọi người; nhóm xử lý bằng quy ước mỗi người chỉ sửa file thuộc trang mình phụ trách, file dùng chung phải được trưởng nhóm duyệt, mọi thay đổi đi qua nhánh riêng và Pull Request. Về dữ liệu, nhóm học cách chuẩn hóa CSV thành JSON và component hóa header, footer, product-card. Phần còn thiếu được báo cáo nêu rõ: chưa có máy chủ ứng dụng và cơ sở dữ liệu thật, xác thực và phân quyền chỉ chạy trên trình duyệt, chưa kiểm thử với người dùng ngoài nhóm. Phương án hai sai vì dự án không dùng React hay Node cho site, chỉ có server.js cho chatbot. Phương án ba và bốn đều không phản ánh đúng trọng tâm học được của nhóm.",
  "topic": "pm"
 },
 {
  "id": "bv16-a06",
  "chapter": 13,
  "difficulty": 3,
  "type": "single",
  "question": "Nếu được cho thêm một học kỳ và yêu cầu chuyển RoomCraft sang backend Node/Express với cơ sở dữ liệu thật, nhóm em sẽ làm theo thứ tự nào và vì sao? Em nêu các bước chính và lý do thứ tự đó.",
  "options": [
   "Nhóm làm trước hết là dựng API đọc sản phẩm, phòng, hotspot và chuyển dữ liệu JSON vào MySQL theo thiết kế 19 bảng đã có, rồi mới chuyển giỏ hàng, đơn hàng, xác thực và phân quyền lên máy chủ, sau đó mới tới thanh toán và gợi ý; lý do là dữ liệu và API là nền cho mọi thứ, còn xác thực phải lên máy chủ trước thanh toán để tránh lỗ hổng leo quyền.",
   "Nhóm làm ngay phần thanh toán thật trước vì đây là phần gây ấn tượng nhất khi demo, sau đó mới làm API sản phẩm và chuyển dữ liệu sau cùng.",
   "Nhóm làm chatbot trước vì đã có server.js sẵn, chỉ cần đổi sang Express, rồi mới làm API sản phẩm và cơ sở dữ liệu sau.",
   "Nhóm làm lại toàn bộ giao diện bằng React trước để hiện đại hơn, sau đó mới làm backend và cơ sở dữ liệu."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Báo cáo ở phần hướng phát triển ghi rõ máy chủ và cơ sở dữ liệu cần làm trước vì là nền cho xác thực thật, thanh toán thật và gợi ý bằng Machine Learning; hai hướng ưu tiên sau đó là đường leo quyền, phải chuyển xác thực và phân quyền về máy chủ nơi cấp token có chữ ký, và tài nguyên hình ảnh dùng srcset. Thiết kế MySQL 19 bảng đã có sẵn trong database nên bước đầu là hiện thực nó và viết API đọc dữ liệu. Phương án hai sai vì thanh toán thật đứng trên nền xác thực chưa có sẽ tạo lỗ hổng. Phương án ba sai vì chatbot không phải nền của hệ thống. Phương án bốn sai vì viết lại giao diện bằng React không giải quyết hạn chế cốt lõi và tốn thời gian vô ích.",
  "topic": "biz"
 },
 {
  "id": "bv16-a07",
  "chapter": 13,
  "difficulty": 3,
  "type": "single",
  "question": "Nhóm em đã có chatbot gọi mô hình ngôn ngữ qua server.js, vậy nếu muốn thêm tính năng 'AI gợi ý phong cách phòng' thì sẽ làm thế nào và cần dữ liệu gì? Em trình bày ý tưởng và rủi ro.",
  "options": [
   "Nhóm sẽ tận dụng dữ liệu sẵn có là 49 phòng, 7 phong cách, 953 sản phẩm và 1.353 hotspot để xây một lớp gợi ý: hỏi người dùng vài câu về sở thích, ngân sách, kích thước phòng rồi trả về phòng mẫu và danh sách sản phẩm phù hợp, có thể dùng mô hình ngôn ngữ để diễn giải câu trả lời; rủi ro là gợi ý sai phong cách hoặc vượt ngân sách nên phải kiểm tra bằng quy tắc trước khi trả về.",
   "Nhóm sẽ huấn luyện một mô hình học sâu từ đầu bằng dữ liệu ảnh phòng, cần thu thập thêm hàng trăm nghìn ảnh và thuê GPU, sau đó thay toàn bộ phần gợi ý hiện tại.",
   "Nhóm sẽ dùng chính chatbot hiện tại và chỉ cần thêm vài câu FAQ mới vào chatbot_faqs.json, không cần dữ liệu gì thêm vì mô hình ngôn ngữ đã biết hết về nội thất.",
   "Nhóm sẽ bỏ phần gợi ý theo quy tắc hiện tại và để người dùng tự chọn phong cách, vì AI không thể gợi ý tốt hơn con người trong lĩnh vực nội thất."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. RoomCraft đã có đủ nguyên liệu cho một lớp gợi ý: rooms.json với 49 phòng, styles.json với 7 phong cách, products.json với 953 sản phẩm kèm thuộc tính phong cách, chất liệu, màu, giá, và room_hotspots.json với 1.353 điểm gắn sản phẩm. Cách làm hợp lý là kết hợp quy tắc lọc theo thuộc tính với mô hình ngôn ngữ để hiểu câu hỏi tự nhiên, giống cách chatbot hiện tại đã hiểu câu hỏi ngân sách như sofa dưới 10 triệu. Rủi ro chính là gợi ý lệch phong cách hoặc vượt ngân sách, nên phải có bước kiểm tra bằng quy tắc trước khi trả kết quả, đúng tinh thần báo cáo là gợi ý hiện tại theo quy tắc và hướng phát triển là kết hợp với lọc cộng tác khi có dữ liệu hành vi. Phương án hai quá nặng và không cần thiết. Phương án ba sai vì mô hình ngôn ngữ không tự biết catalog của nhóm. Phương án bốn đi ngược mục tiêu của đề tài.",
  "topic": "biz"
 },
 {
  "id": "bv16-a08",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Nhóm em đánh giá thành công của RoomCraft bằng những chỉ số nào, và chỉ số nào nhóm em thực sự đo được trong phạm vi đồ án? Em phân biệt chỉ số lý tưởng và chỉ số đã đo.",
  "options": [
   "Chỉ số lý tưởng là tỷ lệ chuyển đổi từ xem phòng sang thêm giỏ, tỷ lệ bỏ giỏ hàng, số món trung bình mỗi đơn và tỷ lệ dùng 3D trước khi mua; nhưng trong phạm vi đồ án nhóm chỉ đo được các chỉ báo đạt mục tiêu như hotspot hoạt động ở mọi phòng, gợi ý đúng phong cách và chỉ gồm hàng còn, cùng tỷ lệ đạt kiểm thử từ 97,4 đến 98,5 phần trăm trên bảy cấu hình.",
   "Nhóm đo thành công bằng doanh thu thật và số người dùng thật đăng ký, vì đây là hai chỉ số quan trọng nhất của một website thương mại điện tử.",
   "Nhóm đo thành công bằng số dòng mã đã viết và số commit trên GitHub, vì hai chỉ số này phản ánh khối lượng công việc của nhóm.",
   "Nhóm đo thành công bằng điểm trình bày và phản hồi của thầy, vì đồ án môn học chỉ cần đánh giá qua buổi bảo vệ."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Báo cáo phân biệt rõ hai tầng: tầng chỉ báo đạt mục tiêu trong Bảng 1.6 như hotspot hoạt động ở mọi phòng, gợi ý đúng phong cách và chỉ gồm sản phẩm còn hàng, Admin tạo phòng không cần sửa mã, và tầng chỉ số kinh doanh lý tưởng như tỷ lệ chuyển đổi, tỷ lệ bỏ giỏ, số món mỗi đơn. Nhóm thừa nhận chưa kiểm thử với người dùng ngoài nhóm nên không đo được trải nghiệm hay tỷ lệ chuyển đổi trên khách hàng mục tiêu. Kết quả kiểm thử đợt cuối chạy 394 test case trên bảy cấu hình, tương đương 2.758 lượt chạy, tỷ lệ đạt 97,4 đến 98,5 phần trăm. Phương án hai sai vì dữ liệu là mẫu, không có doanh thu thật. Phương án ba đo nỗ lực chứ không đo kết quả. Phương án bốn không phải chỉ số sản phẩm.",
  "topic": "biz"
 },
 {
  "id": "bv16-a09",
  "chapter": 13,
  "difficulty": 3,
  "type": "single",
  "question": "Trong tình huống demo 5 phút trọn chuỗi Explore Room đến Buy, em hãy mô tả kịch bản từng bước, nêu rõ mỗi bước chứng minh điều gì và bước nào là điểm nhấn.",
  "options": [
   "Kịch bản là: mở trang chủ giới thiệu định hướng không gian, vào Không gian mẫu chọn một phòng theo phong cách, bấm hotspot để mở popup sản phẩm và thêm vào giỏ, mở chi tiết sản phẩm xoay 3D, xem Complete Your Room thêm một món gợi ý, rồi vào giỏ hàng thanh toán và theo dõi đơn; điểm nhấn là đoạn hotspot và 3D vì đó là khác biệt của RoomCraft.",
   "Kịch bản là: mở trang quản trị trước để chứng minh hệ thống có CRUD, sau đó mở trang sản phẩm, thêm vào giỏ, thanh toán, và kết thúc bằng việc xem Dashboard doanh thu.",
   "Kịch bản là: mở chatbot hỏi vài câu, sau đó mở trang đồ cũ, thêm một món đồ cũ vào giỏ và thanh toán, vì hai phần này là phần khó nhất của nhóm.",
   "Kịch bản là: mở trang chủ, cuộn hết trang để khoe giao diện, mở trang Về RoomCraft đọc câu chuyện thương hiệu, rồi kết thúc bằng việc giới thiệu các thành viên trong nhóm."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu vì nó bám đúng chuỗi trải nghiệm mà báo cáo đặt làm mục tiêu chung: Explore Room, Discover Furniture, View 3D, Get Recommendation, Buy. Năm phút là đủ cho khoảng sáu bước, mỗi bước chứng minh một mục tiêu cụ thể: phòng mẫu chứng minh mục tiêu khám phá không gian, hotspot chứng minh Shop the Room, 3D chứng minh trình xem, Complete Your Room chứng minh gợi ý, thanh toán và theo dõi đơn chứng minh core e-commerce. Điểm nhấn nên đặt ở hotspot và 3D vì đây là hai thành phần không website bán nội thất thường nào có. Phương án hai mở đầu bằng admin là sai vì admin không thuộc hành trình khách. Phương án ba bỏ qua phần cốt lõi là phòng và hotspot. Phương án bốn chỉ khoe giao diện, không chứng minh chức năng nào.",
  "topic": "biz"
 },
 {
  "id": "bv16-a10",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Nếu trong lúc demo, phần 3D không tải được vì mạng yếu hoặc model lỗi, nhóm em xử lý thế nào để không làm hỏng kịch bản? Em nêu cách hệ thống đã chuẩn bị và cách nhóm ứng biến.",
  "options": [
   "Hệ thống đã có thông báo khi model lỗi kèm gợi ý xem ảnh thay thế, nên nhóm chuyển sang ảnh nhiều góc của sản phẩm và nói rõ đây là cơ chế dự phòng có sẵn; nếu mạng yếu thì nhóm chọn sản phẩm có model nhẹ hoặc demo 3D trước, đồng thời giải thích model được tải từ assets/models và hiển thị bằng model-viewer.",
   "Nhóm sẽ bỏ qua bước 3D và không nhắc tới, coi như tính năng đó không có trong kịch bản demo.",
   "Nhóm sẽ dừng buổi demo và xin thầy cho chạy lại từ đầu, vì 3D là phần bắt buộc phải trình diễn được.",
   "Nhóm sẽ mở mã nguồn của model-viewer lên để thầy xem code thay vì xem sản phẩm 3D thực tế."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Báo cáo ghi rõ mục tiêu 3D đạt khi người dùng xoay và phóng to được sản phẩm, và model lỗi thì hiện thông báo kèm gợi ý xem ảnh thay thế; đây là cơ chế dự phòng nhóm đã chủ động làm chứ không phải ứng biến tùy hứng. Về kỹ thuật, 202 model glb nằm trong assets/models và được hiển thị bằng model-viewer tải từ CDN, nên mạng yếu là rủi ro thật. Cách xử lý đúng là chọn trước sản phẩm có model nhẹ, chuẩn bị sẵn ảnh nhiều góc, và nói rõ với thầy đây là fallback có thiết kế. Phương án hai che giấu tính năng, phản tác dụng. Phương án ba làm mất thời gian và không cần thiết. Phương án bốn không chứng minh được gì cho người xem.",
  "topic": "biz"
 },
 {
  "id": "bv16-a11",
  "chapter": 13,
  "difficulty": 1,
  "type": "single",
  "question": "Vì sao nhóm em nói không có backend thật cho đơn hàng là hạn chế nghiêm trọng, và nếu nhiều người cùng mua thì chuyện gì xảy ra? Em giải thích cơ chế lưu dữ liệu hiện tại.",
  "options": [
   "Vì giỏ hàng và đơn hàng lưu trong localStorage của từng trình duyệt, mỗi máy là một bản dữ liệu riêng, nên hai người cùng mua sẽ không thấy đơn của nhau, tồn kho không trừ đồng bộ và Admin sửa dữ liệu cũng không áp dụng cho mọi người; đây là hạn chế cốt lõi mà backend và cơ sở dữ liệu thật sẽ giải quyết.",
   "Vì localStorage chỉ lưu được tối đa vài kilobyte nên giỏ hàng sẽ đầy sau vài sản phẩm, khiến người dùng không mua được nữa.",
   "Vì localStorage không hỗ trợ tiếng Việt có dấu nên tên sản phẩm trong giỏ hàng bị lỗi font khi thanh toán.",
   "Vì localStorage chỉ hoạt động trên máy tính, không hoạt động trên điện thoại nên người dùng di động không mua được."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. README ghi rõ lần đầu mở web, store.js chép dữ liệu JSON vào localStorage dưới các khóa bắt đầu bằng rc_, và từ đó mọi thao tác như giỏ hàng, đơn hàng, chỉnh sửa của Admin đều ghi vào đây. Hệ quả là dữ liệu không đồng bộ giữa các thiết bị, thay đổi của Admin muốn áp dụng cho mọi người phải xuất JSON và tăng phiên bản dữ liệu DATA_VERSION. Báo cáo cũng ghi nhận việc tăng phiên bản dữ liệu trong store.js từng làm mất tài khoản người dùng đã tạo trên máy. Đây chính là lý do hướng phát triển ưu tiên số một là máy chủ và cơ sở dữ liệu MySQL. Phương án hai sai vì localStorage chứa được vài megabyte. Phương án ba sai vì localStorage lưu chuỗi Unicode bình thường. Phương án bốn sai vì localStorage có trên mọi trình duyệt di động.",
  "topic": "sec"
 },
 {
  "id": "bv16-a12",
  "chapter": 13,
  "difficulty": 3,
  "type": "single",
  "question": "Nhóm em nói key API để trong .env phía server nên không lộ ra frontend, nhưng quyền admin lại kiểm tra phía client. Vậy nếu một người dùng kỹ thuật sửa localStorage để tự nhận là admin thì sao, và nhóm em lý giải thế nào?",
  "options": [
   "Đúng là người có hiểu biết kỹ thuật có thể sửa dữ liệu phiên để tự nhận là quản trị viên, nhóm thừa nhận đây là điểm yếu và cách sửa đúng là chuyển xác thực và phân quyền về máy chủ, cấp token có chữ ký và kiểm tra quyền ở từng API; trong phạm vi đồ án nhóm chỉ ẩn giao diện admin nên chỉ đủ cho demo, không đủ cho triển khai thật.",
   "Không thể sửa được vì mật khẩu đã được băm bằng SHA-256 nên localStorage không đọc được, và việc băm cũng đủ bảo vệ quyền admin.",
   "Không thể sửa được vì GitHub Pages tự động kiểm tra quyền ở phía máy chủ GitHub trước khi cho tải trang admin.",
   "Có thể sửa được nhưng không sao, vì dữ liệu chỉ là dữ liệu mẫu nên không cần bảo vệ quyền admin trong bất kỳ trường hợp nào."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Báo cáo ghi rõ xác thực, phân quyền và thanh toán chỉ ở mức mô phỏng, người dùng có hiểu biết kỹ thuật vẫn có thể sửa dữ liệu phiên để tự nhận là quản trị viên, và README cũng ghi giới hạn là dữ liệu và phân quyền chạy hoàn toàn trên trình duyệt nên có thể sửa localStorage. Cách sửa đúng theo hướng phát triển là chuyển xác thực và phân quyền về máy chủ nơi cấp token có chữ ký, kiểm tra quyền ở từng API. Phương án hai sai vì băm mật khẩu không liên quan tới việc sửa cờ vai trò trong phiên. Phương án ba sai vì GitHub Pages chỉ phục vụ tệp tĩnh, không kiểm tra quyền ứng dụng. Phương án bốn sai về nguyên tắc bảo mật, kể cả dữ liệu mẫu vẫn phải phân quyền đúng để chứng minh thiết kế.",
  "topic": "sec"
 },
 {
  "id": "bv16-a13",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Nếu tích hợp cổng thanh toán thật, nhóm em sẽ thay đổi những gì trong luồng hiện tại, và vì sao phải làm sau khi có backend? Em nêu các điểm chạm chính.",
  "options": [
   "Nhóm sẽ thay bước xác nhận đơn mô phỏng bằng lời gọi tạo giao dịch tới cổng thanh toán, nhận callback hoặc webhook để cập nhật trạng thái đơn, đối soát số tiền và xử lý hoàn tiền khi hủy; phải làm sau backend vì cần nơi giữ khóa bí mật, xác thực người dùng và ghi trạng thái giao dịch nhất quán, không thể tin dữ liệu từ trình duyệt.",
   "Nhóm chỉ cần thêm một nút thanh toán mới trên trang checkout và giữ nguyên toàn bộ phần còn lại, vì cổng thanh toán tự xử lý mọi thứ kể cả trạng thái đơn.",
   "Nhóm sẽ thay toàn bộ trang giỏ hàng và trang đơn hàng bằng giao diện của cổng thanh toán, vì không thể tự làm giao diện khi đã tích hợp cổng.",
   "Nhóm sẽ bỏ phương thức COD và đặt cọc 30 phần trăm hiện tại vì cổng thanh toán thật không hỗ trợ các phương thức đó."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Luồng hiện tại có COD tối đa 10 triệu, đặt cọc 30 phần trăm và thanh toán mô phỏng; khi tích hợp thật phải thay bước xác nhận bằng tạo giao dịch, nhận callback hoặc webhook để cập nhật trạng thái Confirmed, xử lý đối soát và hoàn tiền khi hủy đơn. Bắt buộc làm sau backend vì khóa bí mật của cổng phải nằm ở máy chủ, xác thực người dùng phải ở máy chủ, và trạng thái giao dịch phải ghi nhất quán trong cơ sở dữ liệu chứ không thể tin dữ liệu do trình duyệt gửi lên. Phương án hai sai vì cổng thanh toán không tự quản lý trạng thái đơn của nhóm. Phương án ba sai vì tích hợp cổng không có nghĩa là mất giao diện riêng. Phương án bốn sai vì COD và đặt cọc vẫn có thể giữ song song với thanh toán trực tuyến.",
  "topic": "biz"
 },
 {
  "id": "bv16-a14",
  "chapter": 13,
  "difficulty": 1,
  "type": "single",
  "question": "Nhóm em đã có thiết kế MySQL 19 bảng nhưng web vẫn chạy JSON. Vậy thiết kế đó có bị bỏ phí không, và nó giúp gì cho hướng phát triển backend? Em giải thích mối liên hệ giữa JSON hiện tại và thiết kế CSDL.",
  "options": [
   "Không bỏ phí, vì tên trường trong JSON dùng snake_case trùng tên cột trong thiết kế CSDL, nên khi chuyển sang MySQL chỉ cần ánh xạ bảng và viết API; thiết kế 19 bảng với khóa ngoại, UNIQUE, CHECK và bảng room_hotspots là bản thiết kế sẵn cho backend, giúp nhóm không phải làm lại mô hình dữ liệu.",
   "Bị bỏ phí hoàn toàn, vì JSON và MySQL là hai thế giới khác nhau, khi chuyển sang backend nhóm phải thiết kế lại cơ sở dữ liệu từ đầu.",
   "Không bỏ phí nhưng cũng không liên quan, vì thiết kế MySQL chỉ để nộp báo cáo cho đủ phần thiết kế CSDL theo yêu cầu môn học.",
   "Bị bỏ phí vì thiết kế 19 bảng quá nhiều so với nhu cầu thực tế, khi làm backend nhóm sẽ gộp lại còn vài bảng cho đơn giản."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. README ghi rõ tên trường dùng snake_case, trùng với tên cột trong thiết kế CSDL, và database chứa script MySQL theo thiết kế CSDL. Báo cáo mô tả 19 bảng với khóa chính, khóa ngoại ON UPDATE CASCADE và ON DELETE RESTRICT, các ràng buộc UNIQUE và CHECK như giá không âm, điểm đánh giá từ 1 đến 5, tọa độ hotspot từ 0 đến 100, và bảng room_hotspots là thành phần quan trọng để triển khai Shop the Room. Nhờ vậy khi chuyển sang backend, nhóm chỉ cần hiện thực script SQL và viết API đọc ghi, không phải làm lại mô hình. Phương án hai sai vì snake_case và cấu trúc bảng đã được thiết kế để ánh xạ. Phương án ba sai vì thiết kế này có giá trị kỹ thuật thật. Phương án bốn đi ngược lại chính thiết kế nhóm đã làm.",
  "topic": "biz"
 },
 {
  "id": "bv16-a15",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Nếu được làm lại từ đầu, nhóm em sẽ thay đổi điều gì trong cách tổ chức công việc và cách chọn công nghệ? Em nêu ít nhất hai thay đổi và lý do.",
  "options": [
   "Nhóm sẽ chốt quy ước Git và phân vùng file dùng chung ngay từ đầu vì đã gặp ghi đè mã và xung đột gộp nhánh, và sẽ dựng backend tối thiểu cùng cơ sở dữ liệu từ sớm thay vì dồn về cuối, để giỏ hàng và đơn hàng không phải làm lại; ngoài ra sẽ kiểm thử chéo sớm hơn và kiểm thử với người ngoài nhóm.",
   "Nhóm sẽ chuyển sang dùng React và Node.js ngay từ đầu vì hai công nghệ này giúp mọi thứ nhanh hơn, dù môn học không yêu cầu.",
   "Nhóm sẽ bỏ phần 3D vì tốn thời gian nhất, và dồn toàn bộ thời gian cho việc làm giao diện đẹp hơn để gây ấn tượng.",
   "Nhóm sẽ thuê ngoài phần lập trình để có nhiều thời gian hơn cho việc viết báo cáo và chuẩn bị slide thuyết trình."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Báo cáo ghi ba vấn đề lặp lại khi làm nhóm trên cùng kho mã: ghi đè mã của người khác, xung đột khi gộp nhánh và thay đổi file dùng chung ảnh hưởng mọi người; nhóm đã phải xử lý bằng quy ước mỗi người chỉ sửa file thuộc trang mình phụ trách và mọi thay đổi đi qua Pull Request. Về công nghệ, hạn chế lớn nhất là không có backend thật, nên dựng backend tối thiểu từ sớm sẽ tránh phải làm lại giỏ hàng và đơn hàng. Về kiểm thử, báo cáo ghi kiểm thử chéo phát hiện nhiều lỗi mà người viết bỏ sót, và nhóm chưa kiểm thử với người dùng ngoài nhóm. Phương án hai sai vì môn học và phạm vi không cần framework. Phương án ba bỏ đi điểm khác biệt cốt lõi. Phương án bốn vi phạm tính liêm chính học thuật.",
  "topic": "pm"
 },
 {
  "id": "bv16-a16",
  "chapter": 13,
  "difficulty": 3,
  "type": "multiple",
  "question": "Trong các hướng phát triển của RoomCraft, đâu là những hướng nhóm em cho là ưu tiên làm trước và vì sao? Em chọn các hướng đúng theo lập luận trong báo cáo. (chọn nhiều đáp án)",
  "options": [
   "Hiện thực máy chủ và cơ sở dữ liệu MySQL cùng API cho sản phẩm và đơn hàng, vì đây là nền cho mọi hướng khác.",
   "Chuyển xác thực và phân quyền về máy chủ, cấp token có chữ ký để chặn đường leo quyền phát hiện được.",
   "Tối ưu hình ảnh bằng WebP, AVIF và srcset để điện thoại không phải tải bản 2000 px, vì trang chủ hiện mở chậm trên WebKit và iOS.",
   "Đổi toàn bộ giao diện sang React và thêm chế độ tối vì đây là yêu cầu bắt buộc của người dùng hiện đại."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ba đáp án đúng là máy chủ và cơ sở dữ liệu, xác thực và phân quyền phía máy chủ, và tối ưu hình ảnh. Báo cáo ghi rõ trong các hướng phát triển, máy chủ và cơ sở dữ liệu cần được làm trước vì là nền cho xác thực thật, thanh toán thật và gợi ý bằng Machine Learning; hai hướng đáng ưu tiên sau đó là đường leo quyền, phải chuyển xác thực và phân quyền về máy chủ nơi cấp token có chữ ký, và tài nguyên hình ảnh, khai báo bằng srcset để điện thoại không phải tải bản 2000 px. Trang chủ hiện mở mất 9,1 giây trên Safari/WebKit, 10,8 giây trên iPhone giả lập và 12,1 giây trên iPad giả lập, vượt ngưỡng 5 giây, nên tối ưu ảnh là việc cấp thiết. Phương án đổi sang React và thêm chế độ tối không nằm trong danh sách hướng phát triển của báo cáo và không giải quyết hạn chế nào đã nêu.",
  "topic": "biz"
 }
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_BV16; }
