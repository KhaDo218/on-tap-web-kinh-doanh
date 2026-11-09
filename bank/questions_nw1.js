// Cau hoi bo sung bam sat bao cao final - nw1 (20 cau)
const QUESTIONS_NW1 = [
 {
  "id": "nw1-a01",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "topic": "kt",
  "question": "Trong hệ thống RoomCraft, nhóm xác định ba Actor chính là Guest, User và Admin. Vì sao User được xem là trường hợp đặc biệt của Guest trên sơ đồ Use case, còn Admin lại là Actor độc lập không kế thừa từ User?",
  "options": [
   "Vì User kế thừa toàn bộ quyền của Guest (mọi thao tác Guest làm được thì User cũng làm được) nên dùng quan hệ generalization, còn Admin có mục đích quản trị hoàn toàn khác với mua sắm nên đứng độc lập",
   "Vì User và Guest dùng chung một trang đăng nhập nên phải gộp làm một, còn Admin đăng nhập ở trang riêng biệt hoàn toàn",
   "Vì Guest không có tài khoản nên không được vẽ trên sơ đồ, còn User và Admin đều có tài khoản nên ngang hàng nhau",
   "Vì Admin cũng mua sắm như User nhưng bị ẩn giao diện, nên Admin là con của User trong sơ đồ Use case"
  ],
  "correct": [
   0
  ],
  "explanation": "Tài liệu mục 3.1.1 nêu rõ User là trường hợp đặc biệt của Guest vì mọi thao tác Guest làm được thì User cũng làm được, biểu diễn bằng quan hệ generalization trên sơ đồ Use case. Admin là Actor độc lập, không kế thừa từ User, vì mục đích quản trị hoàn toàn khác với mua sắm; Admin đăng nhập cùng trang với User nhưng được chuyển thẳng tới Dashboard và tương tác qua khu vực quản trị riêng. Cách tách này giúp sơ đồ phản ánh đúng bản chất quyền hạn từng tác nhân."
 },
 {
  "id": "nw1-a02",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "topic": "kt",
  "question": "Guest là người truy cập website RoomCraft nhưng chưa đăng nhập. Theo tài liệu phân tích thiết kế, Guest bị giới hạn ở những chức năng nào và vì sao giỏ hàng, wishlist của Guest vẫn dùng được?",
  "options": [
   "Guest bị giới hạn ở thanh toán, theo dõi đơn hàng và đánh giá sản phẩm vì các chức năng này cần xác định danh tính; giỏ hàng và wishlist vẫn dùng được, dữ liệu lưu tạm dưới khóa riêng và gộp vào tài khoản khi đăng nhập",
   "Guest bị chặn hoàn toàn khỏi mọi chức năng mua sắm, chỉ được xem trang chủ và không thêm được gì vào giỏ hàng",
   "Guest được thanh toán bình thường nhưng không được đánh giá, còn giỏ hàng bị xóa ngay khi đóng trình duyệt",
   "Guest chỉ bị giới hạn ở trang quản trị, còn mọi chức năng mua sắm kể cả thanh toán và theo dõi đơn đều dùng được"
  ],
  "correct": [
   0
  ],
  "explanation": "Mục 3.1.2 nêu Guest bị giới hạn ở những chức năng cần xác định danh tính: thanh toán, theo dõi đơn hàng và đánh giá sản phẩm. Tuy nhiên giỏ hàng và danh sách yêu thích của Guest vẫn dùng được, dữ liệu lưu tạm dưới khóa riêng và được gộp vào tài khoản khi đăng nhập. Riêng nút thêm vào giỏ trong popup của trang chi tiết phòng có kiểm tra đăng nhập trước vì thao tác đó thêm cả bộ sản phẩm của một căn phòng. Đây là thiết kế cân bằng giữa trải nghiệm khám phá và yêu cầu định danh."
 },
 {
  "id": "nw1-a03",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "kt",
  "question": "Trong tài liệu Use case, nhóm quy ước ba loại quan hệ trên sơ đồ gồm association, include và extend. Em hãy phân biệt hướng mũi tên và ý nghĩa của quan hệ include so với extend, cho ví dụ đúng theo quy ước nhóm đã dùng.",
  "options": [
   "Include là nét đứt mũi tên hở hướng từ use case gốc sang use case được bao gồm (hành vi bắt buộc), còn extend là nét đứt mũi tên hở hướng từ use case mở rộng về use case gốc (hành vi tùy chọn hoặc có điều kiện)",
   "Include và extend đều là nét liền không mũi tên, chỉ khác nhau ở màu sắc hình ellipse thể hiện nhóm chức năng",
   "Include hướng từ use case được bao gồm về use case gốc, còn extend hướng từ use case gốc sang use case mở rộng, cả hai đều là hành vi bắt buộc",
   "Include dùng mũi tên tam giác rỗng giống generalization, còn extend dùng nét liền không mũi tên nối tác nhân với use case"
  ],
  "correct": [
   0
  ],
  "explanation": "Mục 3.2.2 quy ước rõ: association là nét liền không mũi tên nối tác nhân với use case; include là nét đứt mũi tên hở hướng từ use case gốc sang use case được bao gồm, biểu diễn hành vi bắt buộc; extend là nét đứt mũi tên hở hướng từ use case mở rộng về use case gốc, biểu diễn hành vi tùy chọn hoặc có điều kiện; generalization là nét liền mũi tên tam giác rỗng hướng từ con về cha. Việc phân biệt đúng hướng mũi tên giúp sơ đồ Use case thể hiện chính xác luồng hành vi bắt buộc và tùy chọn."
 },
 {
  "id": "nw1-a04",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "kt",
  "question": "Tài liệu chia chức năng RoomCraft thành 7 nhóm Use case. Nhóm 3 là Trải nghiệm phòng, được xem là nhóm tạo nên sự khác biệt của RoomCraft so với website nội thất thông thường. Vì sao nhóm lại đặt nhóm chức năng này lên trước trong định hướng thiết kế?",
  "options": [
   "Vì thay vì bắt đầu từ sản phẩm đơn lẻ, người dùng bắt đầu từ không gian sống, đi theo chuỗi Explore Room → Discover Furniture → View 3D → Get Recommendation, tạo trải nghiệm khác biệt",
   "Vì nhóm này dễ lập trình nhất nên được ưu tiên làm trước để kịp tiến độ, các nhóm khác làm sau",
   "Vì nhóm này chỉ dành cho Admin nên phải đặt lên đầu để phân quyền rõ ràng trong sơ đồ Use case",
   "Vì nhóm này thay thế hoàn toàn nhóm Catalog và tìm kiếm, nên các sản phẩm không cần trang danh mục riêng"
  ],
  "correct": [
   0
  ],
  "explanation": "Mục 3.2.5 mô tả nhóm 3 gồm Khám phá phòng, Xem chi tiết phòng, Tương tác Hotspot (Shop the Room), Xem sản phẩm 3D và Nhận gợi ý hoàn thiện không gian (Complete Your Room). Đây là nhóm đặc trưng tạo nên sự khác biệt: thay vì bắt đầu từ sản phẩm đơn lẻ, người dùng bắt đầu từ không gian sống. Định hướng này cũng thể hiện trong sitemap khi nhánh Khám phá phòng được đặt lên đầu, cho thấy đồ án đi từ cảm hứng không gian đến sản phẩm chứ không chỉ là catalog thông thường."
 },
 {
  "id": "nw1-a05",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "kt",
  "question": "Trong phần BPMN, nhóm xác định phạm vi áp dụng rõ ràng. Vì sao các quy trình kỹ thuật thuần túy như xử lý mã nguồn, cấu hình máy chủ hay thiết kế cơ sở dữ liệu không được biểu diễn bằng BPMN mà trình bày ở chương Phương pháp thực hiện?",
  "options": [
   "Vì BPMN chỉ dùng mô tả quy trình nghiệp vụ chính, không đi sâu thao tác giao diện nhỏ lẻ hay quy trình kỹ thuật thuần túy; nguyên tắc này giữ tài liệu đủ chi tiết mà không sa đà",
   "Vì BPMN không có ký hiệu cho các bước kỹ thuật nên nhóm buộc phải chuyển sang chương khác để vẽ",
   "Vì thiết kế cơ sở dữ liệu là quy trình nghiệp vụ quan trọng nhất nên phải tách riêng thành một chương độc lập",
   "Vì môn học yêu cầu mỗi chương chỉ được dùng một loại sơ đồ, nên BPMN không được xuất hiện cùng chương thiết kế CSDL"
  ],
  "correct": [
   0
  ],
  "explanation": "Mục 3.3.1 nêu rõ BPMN chỉ dùng mô tả các quy trình nghiệp vụ chính, không đi sâu vào thao tác giao diện nhỏ lẻ như hover, scroll hay click chuột. Các quy trình mang tính kỹ thuật thuần túy như xử lý mã nguồn, cấu hình máy chủ hay thiết kế cơ sở dữ liệu được trình bày ở chương Phương pháp thực hiện. Nguyên tắc này giúp tài liệu BPMN vừa đủ chi tiết để hiểu luồng nghiệp vụ, vừa không sa đà vào chi tiết không cần thiết cho mục tiêu đánh giá của môn học."
 },
 {
  "id": "nw1-a06",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "kt",
  "question": "Mỗi BPMN trong dự án RoomCraft được giới hạn trong khoảng 10–13 bước xử lý chính và tối đa 3–4 gateway. Nhóm dùng những thành phần BPMN 2.0 cơ bản nào và phân biệt Pool nội bộ với Pool bên ngoài ra sao?",
  "options": [
   "Dùng Pool, Lane, Start Event, End Event, Task, Gateway, Sequence Flow; Pool nội bộ là RoomCraft System chứa các Lane User/System/Admin, Pool bên ngoài là Google Identity Services và Chatbot API nối bằng Message Flow",
   "Chỉ dùng Task và Gateway, không dùng Pool hay Lane vì hệ thống chỉ có một tác nhân duy nhất là User",
   "Pool nội bộ chứa Google Identity Services và Chatbot API, còn Pool bên ngoài là RoomCraft System nối với người dùng",
   "Dùng Pool và Lane nhưng mọi kết nối giữa các Pool đều là Sequence Flow đường liền nét, không phân biệt Message Flow"
  ],
  "correct": [
   0
  ],
  "explanation": "Mục 3.3.1 liệt kê các thành phần BPMN 2.0 nhóm dùng gồm Pool, Lane, Start Event, End Event, Task, Gateway và Sequence Flow. Pool nội bộ là RoomCraft System chứa các Lane đại diện User, System, Admin tùy quy trình. Pool bên ngoài là các dịch vụ độc lập như Google Identity Services và Chatbot API, không thuộc quyền kiểm soát của RoomCraft nên chỉ được gọi qua Message Flow đường đứt nét, khác với Sequence Flow đường liền nét dùng trong cùng một Pool. Cách tách này thể hiện đúng bản chất tương tác với dịch vụ bên ngoài."
 },
 {
  "id": "nw1-a07",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "kt",
  "question": "BPMN 9 mô tả quy trình Mua hàng nhưng thanh toán chỉ ở mức mô phỏng. Vì sao nhóm không có Pool Payment Gateway trong sơ đồ và hệ thống xử lý bước thanh toán như thế nào khi người dùng xác nhận đơn?",
  "options": [
   "Vì hệ thống không kết nối cổng thanh toán hay ngân hàng thực tế; khi xác nhận, hệ thống kiểm tra tồn kho, tạo đơn trạng thái Confirmed và trừ tồn kho, với chuyển khoản hoặc ví điện tử chỉ hiển thị thông tin thanh toán giả lập",
   "Vì nhóm chưa kịp vẽ Pool Payment Gateway nên tạm bỏ, còn hệ thống vẫn gọi ngân hàng thật khi người dùng bấm xác nhận",
   "Vì thanh toán được xử lý hoàn toàn ở phía Admin sau khi đơn được giao, nên phía người dùng không cần bước xác nhận nào",
   "Vì hệ thống dùng ví điện tử thật nên không cần Pool riêng, mọi giao dịch đều trừ tiền trực tiếp trong tài khoản người dùng"
  ],
  "correct": [
   0
  ],
  "explanation": "Mục 3.3.1 nêu BPMN 9 mô tả thanh toán ở mức mô phỏng, hệ thống không kết nối cổng thanh toán hay ngân hàng nên không có Pool Payment Gateway. Khi người dùng xác nhận đơn, hệ thống kiểm tra tồn kho, tạo đơn với trạng thái Confirmed và trừ tồn kho; với chuyển khoản hoặc ví điện tử, hệ thống chỉ hiển thị thông tin thanh toán giả lập. Đây là cách mô hình hóa phù hợp với giới hạn của đồ án môn học, đồng thời vẫn đảm bảo tính đầy đủ của luồng nghiệp vụ mua hàng."
 },
 {
  "id": "nw1-a08",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "kt",
  "question": "Trong BPMN 8 (Shop the Room), chỉ sản phẩm đã được Admin cấu hình model 3D mới hiển thị nút View in 3D. Nhóm mô tả điều kiện này bằng cách gộp vào task Truy vấn SP và hiển thị popup (kèm nút 3D nếu có) thay vì tách gateway riêng. Vì sao chọn cách mô tả đó?",
  "options": [
   "Vì task gộp cả hai hành vi: có model 3D thì hiển thị nút, không có thì ẩn nút; cách mô tả này giúp BPMN gọn hơn, tránh tách hai gateway riêng cho một điều kiện đơn giản",
   "Vì nhóm muốn giấu điều kiện hiển thị nút 3D khỏi người đọc để sơ đồ trông ngắn hơn dù sai bản chất",
   "Vì mọi sản phẩm trong hệ thống đều có model 3D nên điều kiện này không bao giờ xảy ra và không cần mô tả",
   "Vì BPMN không cho phép dùng gateway cho điều kiện liên quan đến thuộc tính dữ liệu của sản phẩm"
  ],
  "correct": [
   0
  ],
  "explanation": "Mục 3.3.1 giải thích BPMN 8 thể hiện điều kiện dùng 3D qua task Truy vấn SP và hiển thị popup (kèm nút 3D nếu có). Task này gộp cả hai hành vi: nếu sản phẩm có model 3D thì hiển thị nút, nếu không có thì ẩn nút. Cách mô tả này giúp BPMN gọn hơn, tránh việc tách thành hai gateway riêng cho một điều kiện đơn giản, đồng thời vẫn phản ánh đúng ràng buộc dữ liệu là chỉ sản phẩm có model .glb hoặc .gltf mới dùng được tính năng xem 3D."
 },
 {
  "id": "nw1-a09",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "kt",
  "question": "Trong BPMN 10 (Theo dõi và Hủy đơn hàng), đơn hàng chỉ có thể hủy khi ở trạng thái Confirmed hoặc Packing. Hệ thống xử lý các trường hợp còn lại như thế nào và khi hủy thành công thì làm gì với tồn kho?",
  "options": [
   "Nếu đơn đang Shipping hoặc Delivered thì hệ thống thông báo Không thể hủy và quay lại gateway chọn hành động; nếu hủy được thì cập nhật đơn thành Cancelled và hoàn lại tồn kho",
   "Đơn ở mọi trạng thái đều hủy được, hệ thống chỉ đổi trạng thái sang Cancelled mà không đụng đến tồn kho",
   "Đơn chỉ hủy được khi đã Delivered, còn khi đang Confirmed hay Packing thì hệ thống khóa nút hủy",
   "Hệ thống tự động hủy mọi đơn sau 24 giờ bất kể trạng thái, và tồn kho được cộng lại khi Admin xác nhận thủ công"
  ],
  "correct": [
   0
  ],
  "explanation": "Mục 3.3.3.10 mô tả gateway Có thể hủy chỉ cho phép hủy khi đơn ở trạng thái Confirmed hoặc Packing. Nếu không thể hủy (đang Shipping hoặc Delivered), hệ thống thông báo Không thể hủy và quay lại gateway chọn hành động. Nếu có thể hủy, hệ thống thực hiện task Cập nhật đơn thành Cancelled và hoàn lại tồn kho, sau đó thông báo hủy thành công và quay lại danh sách đơn hàng để người dùng thấy trạng thái mới. Quy tắc này bảo vệ tính toàn vẹn của đơn đã giao và tồn kho."
 },
 {
  "id": "nw1-a10",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "kt",
  "question": "BPMN 11 (Marketplace đồ cũ) có bốn lane gồm User, System, Admin và System (Admin). Em hãy mô tả hai luồng riêng biệt trong quy trình này và cách hệ thống xử lý khi Admin nhập thông tin đồ cũ không hợp lệ.",
  "options": [
   "Luồng User xem, lọc, xem chi tiết và thêm đồ cũ vào giỏ rồi có thể chuyển sang BPMN 9; luồng Admin thêm/sửa/xóa đồ cũ, hệ thống kiểm tra thông tin nhập, nếu không hợp lệ thì báo lỗi và yêu cầu nhập lại",
   "Chỉ có một luồng duy nhất do Admin điều khiển, người dùng không được xem hay thêm đồ cũ vào giỏ hàng",
   "Luồng User và luồng Admin chạy tuần tự, Admin phải duyệt từng món trước khi người dùng nhìn thấy bất kỳ sản phẩm nào",
   "Khi Admin nhập thông tin không hợp lệ, hệ thống tự động lưu bản ghi với giá trị mặc định thay vì báo lỗi"
  ],
  "correct": [
   0
  ],
  "explanation": "Mục 3.3.3.11 mô tả BPMN 11 có hai luồng riêng biệt. Luồng User bắt đầu khi mở trang Đồ cũ, hệ thống hiển thị danh sách, User lọc và xem chi tiết, món đã bán bị khóa nút mua, User có thể thêm vào giỏ (khách chưa đăng nhập được lưu tạm) rồi chuyển sang BPMN 9. Luồng Admin mở trang quản lý đồ cũ, chọn Thêm/Sửa/Xóa, hệ thống kiểm tra thông tin nhập và đưa vào gateway Hợp lệ; nếu không hợp lệ thì thông báo lỗi và yêu cầu nhập lại, nếu hợp lệ thì cập nhật DB và thông báo."
 },
 {
  "id": "nw1-a11",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "kt",
  "question": "Trong BPMN 12 (Chatbot AI), quy trình có hai Pool là RoomCraft System và Chatbot API. Khi Chatbot API không trả lời hoặc câu hỏi nằm ngoài phạm vi, hệ thống xử lý thế nào và người dùng có những lựa chọn gì sau đó?",
  "options": [
   "Hệ thống hiển thị fallback và gợi ý liên hệ Admin; người dùng xem câu trả lời rồi chọn hỏi tiếp hoặc đóng cửa sổ chat",
   "Hệ thống tự động gửi lại câu hỏi cho đến khi có phản hồi, người dùng không thể đóng cửa sổ chat",
   "Hệ thống chuyển toàn bộ cuộc hội thoại cho Admin xử lý trực tiếp và khóa cửa sổ chat của người dùng",
   "Hệ thống hiển thị lỗi kỹ thuật và yêu cầu người dùng tải lại trang, không có gợi ý liên hệ Admin"
  ],
  "correct": [
   0
  ],
  "explanation": "Mục 3.3.3.12 mô tả System gửi request đến Chatbot API dưới dạng Send Task qua Message Flow, Chatbot API xử lý và gửi kết quả trở lại. System nhận phản hồi và đưa vào gateway Có phản hồi; nếu có thì hiển thị câu trả lời, nếu không (API không trả lời hoặc câu hỏi ngoài phạm vi) thì hiển thị fallback và gợi ý liên hệ Admin. Sau đó người dùng xem câu trả lời và chọn hỏi tiếp hoặc đóng cửa sổ chat. Cơ chế fallback giúp chatbot không rơi vào trạng thái im lặng khi gặp câu hỏi khó."
 },
 {
  "id": "nw1-a12",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "kt",
  "question": "BPMN 13 (Quản lý sản phẩm và phòng) có hai nhánh song song là sản phẩm và phòng. Ở nhánh phòng, Admin thực hiện task Khai báo ảnh và gắn hotspot sản phẩm. Hệ thống kiểm tra những gì và sau khi hoàn thành một tác vụ thì gateway nào điều hướng Admin?",
  "options": [
   "Hệ thống validate thông tin phòng và hotspot, nếu không hợp lệ thì báo lỗi và yêu cầu nhập lại, nếu hợp lệ thì cập nhật DB phòng và thông báo; gateway Tiếp tục hay thoát cho phép quay lại menu quản lý hoặc thoát",
   "Hệ thống chỉ lưu ảnh phòng mà không kiểm tra hotspot, sau đó tự động đóng phiên làm việc của Admin",
   "Hệ thống bỏ qua bước validate vì dữ liệu phòng do Admin nhập nên luôn đúng, và chuyển thẳng sang nhánh sản phẩm",
   "Hệ thống yêu cầu Admin nhập lại toàn bộ thông tin phòng sau mỗi lần lưu thành công để đảm bảo tính nhất quán"
  ],
  "correct": [
   0
  ],
  "explanation": "Mục 3.3.3.13 mô tả nhánh phòng: Admin chọn Thêm/Sửa/Xóa phòng, thực hiện task Khai báo ảnh và gắn hotspot sản phẩm; System thực hiện task Validate thông tin phòng và hotspot rồi đưa vào gateway Hợp lệ. Nếu không hợp lệ thì thông báo lỗi và yêu cầu nhập lại; nếu hợp lệ thì cập nhật DB phòng và thông báo. Sau khi hoàn thành một tác vụ, gateway Tiếp tục hay thoát cho phép Admin quay lại menu quản lý để tiếp tục công việc khác hoặc thoát khỏi quy trình."
 },
 {
  "id": "nw1-a13",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "kt",
  "question": "BPMN 14 (Quản lý đơn hàng, người dùng, đánh giá và Dashboard) có bốn nhánh chức năng. Khi Admin cập nhật trạng thái đơn hàng sang Cancelled thì hệ thống làm gì thêm, và trạng thái mới hiển thị ở đâu?",
  "options": [
   "Hệ thống cập nhật DB đơn hàng, nếu chuyển sang Cancelled thì hoàn lại tồn kho, và trạng thái mới hiển thị ở trang theo dõi đơn của User",
   "Hệ thống chỉ đổi trạng thái trong DB quản trị, còn trang theo dõi đơn của User giữ nguyên trạng thái cũ",
   "Hệ thống xóa hẳn đơn hàng khỏi DB khi chuyển sang Cancelled và không hoàn lại tồn kho",
   "Hệ thống gửi email thật cho người dùng và yêu cầu Admin xác nhận lại lần hai trước khi lưu trạng thái"
  ],
  "correct": [
   0
  ],
  "explanation": "Mục 3.3.3.14 mô tả nhánh đơn hàng: System hiển thị danh sách đơn, Admin cập nhật trạng thái, System cập nhật DB đơn hàng (nếu chuyển sang Cancelled thì hoàn lại tồn kho) và trạng thái mới hiển thị ở trang theo dõi đơn của User. Điều này đảm bảo tính nhất quán giữa khu vực quản trị và khu vực khách hàng, đồng thời bảo toàn số lượng tồn kho khi đơn bị hủy. Ba nhánh còn lại là người dùng (khóa/mở khóa tài khoản), đánh giá (ẩn/xóa đánh giá vi phạm) và Dashboard (thống kê doanh thu, đơn hàng, sản phẩm bán chạy, người dùng)."
 },
 {
  "id": "nw1-a14",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "kt",
  "question": "Cơ sở dữ liệu RoomCraft được thiết kế theo mô hình quan hệ với script SQL dùng MySQL 8.0.16 trở lên, gồm 19 bảng chia thành 6 nhóm. Vì sao trong phạm vi môn học website vẫn chạy tĩnh bằng JSON và localStorage mà nhóm vẫn thiết kế script SQL?",
  "options": [
   "Vì script SQL mô tả cấu trúc CSDL chính thức gồm tên bảng, trường, khóa và quan hệ, làm cơ sở tích hợp MySQL khi phát triển tiếp; website tĩnh hiện chưa kết nối trực tiếp MySQL",
   "Vì website thực tế đã kết nối MySQL từ đầu, còn JSON chỉ là bản sao lưu dự phòng khi mất kết nối",
   "Vì môn học bắt buộc phải có script SQL dù không dùng, còn nhóm không có ý định phát triển backend sau này",
   "Vì JSON không lưu được khóa ngoại nên nhóm phải dùng SQL để thay thế hoàn toàn cơ chế lưu dữ liệu của website"
  ],
  "correct": [
   0
  ],
  "explanation": "Mục 3.4.1 nêu trong phạm vi môn học website được xây dựng dạng web tĩnh, dữ liệu lưu bằng JSON và localStorage, chưa kết nối trực tiếp MySQL. Script SQL dùng để mô tả cấu trúc CSDL chính thức gồm tên bảng, tên trường, khóa và quan hệ, làm cơ sở cho việc tích hợp với MySQL khi phát triển hệ thống ở giai đoạn tiếp theo. Cách làm này vừa phù hợp giới hạn đồ án môn học vừa thể hiện tư duy thiết kế CSDL đầy đủ, không chỉ dừng ở mức lưu JSON tạm thời."
 },
 {
  "id": "nw1-a15",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "kt",
  "question": "Trong mô hình CSDL RoomCraft, bảng products là thành phần trung tâm của nhóm catalog và đồ cũ trên Marketplace cũng được lưu trong products với product_type = USED. Vì sao nhóm chọn cách lưu chung này thay vì tách bảng riêng cho đồ cũ?",
  "options": [
   "Vì dùng chung bảng products giúp đồ cũ dùng chung giỏ hàng và quy trình đặt hàng với sản phẩm mới, còn thông tin riêng của đồ cũ nằm ở bảng used_product_details",
   "Vì đồ cũ không cần thông tin riêng nên nhóm bỏ hoàn toàn bảng used_product_details để giảm số bảng",
   "Vì tách bảng riêng sẽ khiến đồ cũ không thể thêm vào giỏ hàng, nên nhóm buộc phải gộp chung",
   "Vì product_type = USED chỉ là nhãn hiển thị, còn dữ liệu đồ cũ thực chất lưu trong bảng rooms"
  ],
  "correct": [
   0
  ],
  "explanation": "Mục 3.4.1 giải thích đồ cũ trên Marketplace cũng được lưu trong products (đánh dấu bằng product_type = USED) nên dùng chung giỏ hàng và quy trình đặt hàng với sản phẩm mới; phần thông tin riêng của đồ cũ nằm ở bảng used_product_details gồm tình trạng (Like New, Good, Fair) và thời gian sử dụng. Cách lưu chung này tránh nhân đôi logic giỏ hàng, đơn hàng và thanh toán, đồng thời vẫn giữ được thuộc tính đặc thù của đồ cũ ở bảng phụ."
 },
 {
  "id": "nw1-a16",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "kt",
  "question": "Quan hệ giữa rooms và products trong chức năng Shop the Room được thiết kế nhiều-nhiều thông qua bảng room_hotspots. Bảng này lưu thêm hai trường position_x và position_y theo phần trăm. Vì sao nhóm chọn lưu tọa độ theo phần trăm thay vì theo pixel?",
  "options": [
   "Vì ảnh phòng co giãn theo màn hình, lưu tọa độ theo phần trăm giúp hotspot không bị lệch khi ảnh thay đổi kích thước hiển thị",
   "Vì pixel là đơn vị không lưu được trong MySQL nên nhóm buộc phải dùng phần trăm",
   "Vì phần trăm giúp giảm dung lượng lưu trữ so với pixel, đây là lý do duy nhất nhóm chọn",
   "Vì tọa độ phần trăm cho phép mỗi hotspot gắn với nhiều phòng cùng lúc mà không cần bảng liên kết"
  ],
  "correct": [
   0
  ],
  "explanation": "Mục 3.4.1 nêu room_hotspots là bảng liên kết nhiều-nhiều giữa rooms và products, đồng thời lưu vị trí hotspot trên ảnh phòng bằng hai tọa độ position_x và position_y theo phần trăm. Mục 3.6.5 cũng giải thích mockup vẽ hotspot cố định nhưng dữ liệu thật lưu theo phần trăm, vì vậy hotspot phải đặt bằng left và top theo phần trăm để không lệch khi ảnh co giãn theo màn hình. Đây là quyết định thiết kế gắn chặt với yêu cầu responsive của giao diện."
 },
 {
  "id": "nw1-a17",
  "chapter": 12,
  "difficulty": 3,
  "type": "multiple",
  "topic": "kt",
  "question": "Tài liệu mô tả nhóm tài khoản trong CSDL RoomCraft gồm roles, users và verification_codes. Em hãy chọn các phát biểu đúng về cách nhóm thiết kế nhóm bảng này theo tài liệu phân tích thiết kế.",
  "options": [
   "Bảng roles chỉ có hai giá trị User và Admin, dùng để phân quyền khi đăng nhập",
   "Bảng users có ràng buộc CHECK yêu cầu mỗi tài khoản phải có ít nhất một cách đăng nhập, tức password_hash hoặc google_id không được cùng trống",
   "Bảng verification_codes lưu mã OTP theo email vì lúc đăng ký tài khoản chưa được tạo, và mã được hiển thị mô phỏng chứ không gửi email thật",
   "Tài khoản Admin được tạo qua trang đăng ký thông thường giống User và không cần thiết lập riêng"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Mục 3.4.3.1 nêu roles chỉ có hai giá trị User và Admin dùng phân quyền khi đăng nhập. Bảng users có ràng buộc CHECK: mỗi tài khoản phải có ít nhất một cách đăng nhập (password_hash hoặc google_id không được cùng trống); tài khoản chỉ đăng nhập Google có thể để password_hash NULL và lưu google_id. Bảng verification_codes lưu OTP theo email vì lúc đăng ký tài khoản chưa được tạo, mã hiển thị mô phỏng không gửi email thật. Tài khoản Admin không đăng ký qua trang đăng ký thông thường mà được thiết lập riêng qua dữ liệu khởi tạo hoặc câu lệnh quản trị, nên phát biểu thứ tư sai."
 },
 {
  "id": "nw1-a18",
  "chapter": 12,
  "difficulty": 3,
  "type": "multiple",
  "topic": "kt",
  "question": "Về nhóm catalog trong CSDL RoomCraft, em hãy chọn các phát biểu đúng theo tài liệu phân tích thiết kế về categories, styles và products.",
  "options": [
   "Bảng categories lưu danh mục sản phẩm theo hai cấp, danh mục con trỏ về danh mục cha qua parent_id, khớp với hai cột Danh mục và Danh mục con trong bộ dữ liệu",
   "Bảng styles lưu 7 phong cách nội thất gồm Bohemian, Coastal, Farmhouse, Glam, Mid-century Modern, Scandinavian và Traditional",
   "Bảng products tham chiếu đến categories qua category_id và styles qua style_id, đồng thời lưu cả sản phẩm mới lẫn đồ cũ",
   "Bảng products không lưu đường dẫn model 3D vì tính năng 3D được xử lý hoàn toàn ở phía giao diện mà không cần dữ liệu"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Mục 3.4.3.2 mô tả categories lưu danh mục hai cấp, danh mục con trỏ về danh mục cha qua parent_id, khớp hai cột Danh mục và Danh mục con trong bộ dữ liệu. Bảng styles lưu 7 phong cách: Bohemian, Coastal, Farmhouse, Glam, Mid-century Modern, Scandinavian, Traditional. Bảng products tham chiếu categories qua category_id và styles qua style_id, lưu cả sản phẩm mới và đồ cũ, đồng thời có cột đường dẫn model 3D nếu có cùng số lượng tồn kho. Vì vậy phát biểu thứ tư sai: products có lưu đường dẫn model 3D để phục vụ chức năng xem 3D và quy tắc chặn mua khi hết hàng."
 },
 {
  "id": "nw1-a19",
  "chapter": 12,
  "difficulty": 3,
  "type": "multiple",
  "topic": "kt",
  "question": "Sitemap website RoomCraft gồm 9 nhánh cấp 1 với 25 trang, trong đó có 17 trang khách hàng và 8 trang quản trị. Em hãy chọn các phát biểu đúng về cấu trúc sitemap và luồng điều hướng chính theo tài liệu.",
  "options": [
   "Khách chưa đăng nhập vẫn mở được trang Giỏ hàng, thêm được vào giỏ từ trang chi tiết sản phẩm, trang Đồ cũ và mục Complete Your Room, và bấm tim được; dữ liệu lưu tạm và gộp vào tài khoản khi đăng nhập",
   "Các chỗ bắt buộc đăng nhập gồm nút thêm giỏ trong popup hotspot của phòng mẫu, bước Thanh toán và các trang thuộc nhánh Tài khoản của tôi",
   "Toàn bộ nhánh Quản trị chỉ mở cho tài khoản Admin, và nhánh Khám phá phòng được đặt lên đầu để thể hiện định hướng đi từ cảm hứng không gian đến sản phẩm",
   "Thanh điều hướng chỉ xuất hiện ở trang chủ, còn các trang con như Sản phẩm hay Đồ cũ không có header để tăng không gian hiển thị"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Mục 3.5.2 và 3.5.3 nêu khách chưa đăng nhập vẫn mở được Giỏ hàng, thêm vào giỏ từ trang chi tiết sản phẩm, trang Đồ cũ và Complete Your Room, bấm tim được; dữ liệu lưu tạm và gộp vào tài khoản khi đăng nhập. Các chỗ bắt buộc đăng nhập là nút thêm giỏ trong popup hotspot của phòng mẫu, bước Thanh toán và các trang thuộc nhánh Tài khoản của tôi. Toàn bộ nhánh Quản trị chỉ mở cho Admin, nhánh Khám phá phòng đặt lên đầu thể hiện định hướng của đồ án. Thanh điều hướng xuất hiện trên mọi trang khách hàng nên phát biểu thứ tư sai."
 },
 {
  "id": "nw1-a20",
  "chapter": 12,
  "difficulty": 3,
  "type": "multiple",
  "topic": "kt",
  "question": "Về luồng dữ liệu từ thiết kế CSDL sang JSON phục vụ giao diện, em hãy chọn các phát biểu đúng theo cách nhóm RoomCraft đã làm trong đồ án.",
  "options": [
   "Dữ liệu CSV 7 phong cách được xử lý thành masterdata rồi xuất ra JSON để website tĩnh đọc trực tiếp, thay vì truy vấn cơ sở dữ liệu quan hệ khi chạy",
   "Các tệp JSON tĩnh như products, rooms, hotspots, wards, coupons, shipping, reviews, users, roles đóng vai trò nguồn dữ liệu cho giao diện và được nạp bằng fetch",
   "Vì dữ liệu nằm trong JSON tĩnh nên orders và reviews có thể bị sửa trực tiếp trên client, đây là hạn chế nhóm ghi nhận thẳng thắn và có hướng cải thiện",
   "Vì dùng JSON tĩnh nên website không cần cơ chế DATA_VERSION hay store/resetData để quản lý phiên bản dữ liệu"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Theo mục dữ liệu và phần bảo mật hạn chế, dữ liệu CSV 7 phong cách được xử lý thành masterdata rồi xuất ra JSON để website tĩnh đọc trực tiếp thay vì truy vấn CSDL quan hệ khi chạy. Các tệp JSON tĩnh như products, rooms, hotspots, wards, coupons, shipping, reviews, users, roles là nguồn dữ liệu cho giao diện và được nạp bằng fetch. Vì dữ liệu nằm ở JSON tĩnh nên orders và reviews có thể bị sửa trực tiếp trên client, đây là hạn chế nhóm ghi nhận thẳng thắn kèm hướng cải thiện. Phát biểu thứ tư sai vì nhóm vẫn dùng DATA_VERSION và store/resetData để quản lý phiên bản dữ liệu và làm mới trạng thái khi cần."
 }
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_NW1; }
