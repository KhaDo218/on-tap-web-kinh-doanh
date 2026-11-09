// Cau hoi bo sung bam sat bao cao final - nw5 (15 cau)
const QUESTIONS_NW5 = [
 {
  "id": "nw5-a01",
  "chapter": 13,
  "difficulty": 1,
  "type": "single",
  "topic": "pm",
  "question": "Trong quá trình phát triển RoomCraft, nhóm đã dùng Git và GitHub để quản lý thay đổi. Em hãy trình bày cách nhóm tổ chức công việc trên kho mã, bao gồm cách phân nhánh, gửi Pull Request, xử lý xung đột và các quy ước chung mà nhóm đặt ra để hạn chế việc ghi đè mã của nhau.",
  "options": [
   "Mỗi thành viên làm việc trên nhánh riêng, gửi Pull Request để trưởng nhóm duyệt trước khi gộp vào nhánh chính; mỗi người chỉ sửa file thuộc trang mình phụ trách, file dùng chung phải được duyệt, trước buổi gộp cuối mọi người đẩy mã trước giờ hẹn rồi dừng thêm tính năng mới.",
   "Cả nhóm cùng sửa trực tiếp trên nhánh chính để tiết kiệm thời gian, chỉ tạo nhánh khi cần thử nghiệm tính năng lớn và không cần duyệt Pull Request.",
   "Mỗi thành viên giữ một bản sao repository riêng trên máy, cuối kỳ mới gộp tất cả lại một lần và không dùng Git để theo dõi thay đổi.",
   "Nhóm chỉ dùng Google Drive để chia sẻ file nén mã nguồn, không dùng Git vì cho rằng Git quá phức tạp với nhóm năm người."
  ],
  "correct": [
   0
  ],
  "explanation": "Tài liệu chương 6 ghi nhận kho mã có 164 commit trên nhánh chính và 14 yêu cầu hợp nhất đã gộp. Nhóm xử lý ba vấn đề lặp lại gồm ghi đè mã, xung đột khi gộp nhánh và thay đổi file dùng chung ảnh hưởng mọi người bằng quy ước: mỗi người chỉ sửa file thuộc trang mình phụ trách, file dùng chung phải được trưởng nhóm duyệt, mọi thay đổi đi qua nhánh riêng và Pull Request, trước buổi gộp cuối các thành viên đẩy mã trước giờ hẹn rồi dừng thêm tính năng mới. Quan sát cho thấy chia file theo người phụ trách giúp giảm xung đột nhưng các file dùng chung như store.js, base.css, header vẫn là nơi dễ phát sinh lỗi nhất."
 },
 {
  "id": "nw5-a02",
  "chapter": 13,
  "difficulty": 1,
  "type": "single",
  "topic": "pm",
  "question": "Nhóm RoomCraft gồm năm thành viên và phân công theo phân hệ. Em hãy trình bày phạm vi công việc chính của từng thành viên theo bảng phân công PCCV, và giải thích vì sao cách chia theo trang hoặc phân hệ lại giúp giảm sửa đồng thời lên cùng một tệp.",
  "options": [
   "Quỳnh Kha phụ trách khung dùng chung, xác thực tài khoản, hồ sơ và duyệt Pull Request; Bảo Duy phụ trách trang chủ, khám phá không gian, chi tiết phòng và hotspot; Nguyên Khôi phụ trách danh sách và chi tiết sản phẩm, Wishlist, thẻ sản phẩm; Phương Anh phụ trách giỏ hàng, thanh toán, đơn hàng và Dashboard; Như Huyền phụ trách Marketplace đồ cũ và chatbot. Chia theo phân hệ giúp mỗi người sở hữu một tập tệp riêng nên ít chạm vào cùng một tệp.",
   "Cả năm thành viên cùng làm mọi trang, mỗi người tự chọn phần mình thích mỗi ngày, không có phân công cố định để tăng tính linh hoạt.",
   "Mỗi thành viên phụ trách một công nghệ riêng như HTML, CSS, JavaScript, dữ liệu và kiểm thử, không ai phụ trách trọn một trang nào.",
   "Nhóm thuê ngoài toàn bộ phần lập trình, năm thành viên chỉ làm báo cáo và thuyết trình nên không cần phân công theo phân hệ."
  ],
  "correct": [
   0
  ],
  "explanation": "Bảng 4.1 trong chương 4 tóm tắt phạm vi phân công: Quỳnh Kha làm khung dùng chung, xác thực, hồ sơ và duyệt Pull Request; Bảo Duy làm trang chủ, khám phá không gian, chi tiết phòng và hotspot; Nguyên Khôi làm danh sách và chi tiết sản phẩm, Wishlist, thẻ sản phẩm; Phương Anh làm giỏ hàng, thanh toán, đơn hàng và Dashboard; Như Huyền làm Marketplace đồ cũ và chatbot. Tài liệu giải thích cách chia theo trang hoặc phân hệ giúp giảm sửa đồng thời lên cùng một tệp, và những thành phần nền tảng cần thống nhất được tích hợp trước để các phần phụ thuộc sử dụng được."
 },
 {
  "id": "nw5-a03",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "topic": "pm",
  "question": "Trong quá trình làm việc nhóm trên cùng một kho mã, nhóm RoomCraft đã gặp ba vấn đề lặp lại. Em hãy nêu ba vấn đề đó kèm ví dụ cụ thể mà tài liệu ghi nhận, và cho biết nhóm đã rút ra bài học gì về việc kiểm soát các file dùng chung.",
  "options": [
   "Ba vấn đề là ghi đè mã của người khác, xung đột khi gộp nhánh và thay đổi file dùng chung ảnh hưởng mọi người. Ví dụ commit ngày 25/10 làm mất lệnh nạp dữ liệu ở ba trang quản trị; xung đột xảy ra khi hai người cùng thêm dòng vào một vị trí trong cùng file; việc tăng phiên bản dữ liệu trong store.js từng làm mất tài khoản người dùng đã tạo. Bài học là các file dùng chung như store.js, base.css, header vẫn là nơi dễ phát sinh lỗi nhất và cần một người kiểm soát.",
   "Ba vấn đề là mất kết nối Internet, máy tính hỏng và thiếu ổ cứng lưu trữ; nhóm khắc phục bằng cách mua thêm thiết bị và không liên quan gì đến file dùng chung.",
   "Ba vấn đề là tranh cãi về màu sắc giao diện, chọn sai font chữ và đặt tên sản phẩm chưa hay; nhóm khắc phục bằng cách bỏ phiếu mỗi tuần.",
   "Ba vấn đề là quên mật khẩu GitHub, không biết dùng lệnh Git và không cài được Node.js; nhóm khắc phục bằng cách chuyển sang dùng Google Drive."
  ],
  "correct": [
   0
  ],
  "explanation": "Mục 6.3.3 ghi nhận ba vấn đề lặp lại: ghi đè mã của người khác với ví dụ commit ngày 25/10 vô tình làm mất lệnh nạp dữ liệu ở ba trang quản trị Người dùng, Đánh giá, Đồ cũ khiến các trang trống đến khi phát hiện ở đợt kiểm thử 27/10; xung đột khi gộp nhánh khi hai người cùng thêm dòng vào một vị trí trong cùng file; và thay đổi file dùng chung ảnh hưởng mọi người, ví dụ tăng phiên bản dữ liệu trong store.js từng làm mất tài khoản người dùng đã tạo. Quan sát cho thấy chia file theo người phụ trách giúp giảm xung đột nhưng các file dùng chung vẫn là nơi dễ phát sinh lỗi nhất và cần một người kiểm soát."
 },
 {
  "id": "nw5-a04",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "topic": "pm",
  "question": "Đợt kiểm thử chéo ngày 27/10 của nhóm RoomCraft đã phát hiện nhiều lỗi mà người viết mã bỏ sót. Em hãy trình bày số lượng ghi nhận, số đầu việc phát sinh, kết quả xử lý, bốn nhóm lỗi tập trung và giải thích vì sao kiểm thử chéo lại hiệu quả hơn việc người viết tự kiểm thử.",
  "options": [
   "Đợt kiểm thử chéo ghi nhận 78 dòng lỗi và góp ý, chuyển thành 42 đầu việc cho giai đoạn 28-31/10, trong đó 27 việc đã sửa, 14 việc còn lại và 1 việc bỏ qua. Lỗi tập trung ở bốn nhóm: giao diện điện thoại, ràng buộc dữ liệu nhập ở form quản trị, tính nhất quán dữ liệu giữa các trang và chức năng còn thiếu so với đặc tả. Người viết mã thường kiểm thử theo đúng luồng mình đã nghĩ khi lập trình, còn người khác dùng thử sẽ đi theo những luồng không lường trước.",
   "Đợt kiểm thử chéo ghi nhận 8 lỗi, chuyển thành 4 đầu việc và đã sửa hết; lỗi chỉ tập trung ở phần màu sắc giao diện vì các phần khác đã hoàn hảo ngay từ đầu.",
   "Đợt kiểm thử chéo ghi nhận 780 lỗi, chuyển thành 420 đầu việc, trong đó chỉ sửa được 2 việc vì thời gian quá ngắn; nhóm kết luận kiểm thử chéo không hiệu quả.",
   "Đợt kiểm thử chéo không ghi nhận lỗi nào vì mỗi thành viên chỉ kiểm tra trang của chính mình, nên nhóm bỏ qua bước này ở các đợt sau."
  ],
  "correct": [
   0
  ],
  "explanation": "Mục 6.3.4 ghi nhận trong đợt kiểm thử chéo ngày 27/10, mỗi thành viên dùng thử trang của người khác, nhóm ghi nhận 78 dòng lỗi và góp ý, chuyển thành 42 đầu việc cho giai đoạn 28-31/10, trong đó 27 việc đã sửa, 14 việc còn lại và 1 việc bỏ qua. Lỗi tập trung ở bốn nhóm: giao diện điện thoại như menu bị cắt chữ, bảng quản trị tràn ngang; ràng buộc dữ liệu nhập ở form quản trị như cho lưu giá 0 đồng; tính nhất quán dữ liệu giữa các trang như gợi ý cả sản phẩm hết hàng; và chức năng còn thiếu so với đặc tả như Wishlist chưa có nút thêm vào giỏ. Người viết mã thường kiểm thử theo đúng luồng mình đã nghĩ, còn người khác dùng thử sẽ đi theo những luồng không lường trước."
 },
 {
  "id": "nw5-a05",
  "chapter": 13,
  "difficulty": 3,
  "type": "single",
  "topic": "pm",
  "question": "Trong đợt xác nhận cuối, nhóm RoomCraft phát hiện một bản sửa lỗi phân quyền bị sai vì giả định không được kiểm chứng. Em hãy kể lại sự việc, giải thích vì sao lỗi này chỉ lộ ra khi chạy lại toàn bộ bộ kiểm thử, và nêu bài học rút ra về kiểm thử hồi quy cùng việc kiểm tra giả định dữ liệu.",
  "options": [
   "Khi sửa lỗi leo quyền, nhóm giả định mã vai trò 1 là quản trị viên trong khi dữ liệu thực tế dùng mã 2, nên bản sửa đảo ngược quyền truy cập: tài khoản quản trị bị đẩy ra ngoài còn tài khoản thường vào được. Lỗi không làm hỏng ca kiểm thử nào về leo quyền vì các ca đó vẫn báo đúng như trước, nó chỉ lộ ra khi chạy lại toàn bộ bộ kiểm thử thay vì chỉ chạy lại ca đã hỏng. Bài học là kiểm thử hồi quy phải chạy trên toàn bộ bộ ca và mọi giả định về dữ liệu phải được kiểm tra trực tiếp trong tệp dữ liệu trước khi dùng làm căn cứ sửa mã.",
   "Khi sửa lỗi phân quyền, nhóm giả định mã vai trò 1 là quản trị viên và giả định đó đúng, nên bản sửa chạy hoàn hảo; lỗi chỉ là do trình duyệt cũ chưa cập nhật nên nhóm bỏ qua.",
   "Nhóm không hề sửa lỗi phân quyền nào trong đợt cuối; sự việc được kể lại chỉ là nhầm lẫn khi đọc báo cáo và không có bài học nào liên quan tới kiểm thử hồi quy.",
   "Nhóm phát hiện lỗi phân quyền nhờ chạy lại đúng những ca đã hỏng trước đó, còn các ca vốn đã đạt thì không cần chạy lại vì chúng chắc chắn không bị ảnh hưởng."
  ],
  "correct": [
   0
  ],
  "explanation": "Mục 6.3.4 kể lại phát hiện thứ nhất: khi sửa lỗi leo quyền, nhóm giả định mã vai trò 1 là quản trị viên trong khi dữ liệu thực tế dùng mã 2 cho vai trò này, nên bản sửa không những không chặn được đường leo quyền mà còn đảo ngược quyền truy cập. Lỗi này không làm hỏng ca kiểm thử nào về leo quyền vì những ca đó vẫn báo đúng như trước; nó chỉ lộ ra khi nhóm chạy lại toàn bộ bộ kiểm thử thay vì chỉ chạy lại những ca đã hỏng. Bài học rút ra là kiểm thử hồi quy phải chạy trên toàn bộ bộ ca, và mọi giả định về dữ liệu phải được kiểm tra trực tiếp trong tệp dữ liệu trước khi dùng làm căn cứ sửa mã."
 },
 {
  "id": "nw5-a06",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "topic": "pm",
  "question": "Nhóm RoomCraft đã trải qua bốn đợt kiểm thử với mục đích khác nhau. Em hãy trình bày mục đích của từng đợt P0, P1, P2, P3 và giải thích vì sao đợt P3 không chỉ kiểm lại những ca đã hỏng mà chạy lại toàn bộ 394 ca.",
  "options": [
   "P0 là kiểm thử chéo thủ công để phát hiện lỗi sớm; P1 là tự động trên một trình duyệt để xác lập đường cơ sở; P2 là hồi quy, tương thích, đầu-cuối và audit trên bảy cấu hình; P3 là xác nhận sau sửa lỗi. P3 chạy lại toàn bộ vì một bản sửa ở phần dùng chung có thể làm hỏng phần đang chạy tốt, và thực tế đã phát hiện một bản sửa phân quyền đảo ngược quyền truy cập.",
   "P0 là kiểm thử tự động toàn bộ; P1 là kiểm thử thủ công; P2 là viết báo cáo; P3 là nộp bài. P3 chỉ cần kiểm lại các ca đã hỏng vì các ca đã đạt chắc chắn không bị ảnh hưởng bởi bản sửa.",
   "Cả bốn đợt đều có cùng mục đích là chạy lại toàn bộ bộ kiểm thử trên một cấu hình duy nhất, chỉ khác ngày thực hiện, nên không cần phân biệt mục đích từng đợt.",
   "P0 đến P3 chỉ là tên gọi khác nhau của cùng một lần chạy, nhóm đặt tên cho đủ bốn đợt để báo cáo trông đầy đủ hơn, còn thực tế chỉ chạy kiểm thử một lần duy nhất."
  ],
  "correct": [
   0
  ],
  "explanation": "Bảng 4.7 mô tả bốn đợt: P0 ngày 27/10 là kiểm thử chéo thủ công để phát hiện lỗi sớm; P1 ngày 03/11 là tự động trên Microsoft Edge ở hai bề rộng để xác lập đường cơ sở; P2 ngày 04-05/11 là hồi quy, tương thích, đầu-cuối và audit trên bảy cấu hình; P3 ngày 06/11 là xác nhận sau sửa lỗi. Tài liệu giải thích P3 không chỉ kiểm lại những ca đã hỏng mà chạy lại toàn bộ 394 ca vì một bản sửa ở phần dùng chung có thể làm hỏng phần đang chạy tốt. Quyết định này có tác dụng thực tế: ở lần chạy đầu của P3, nhóm phát hiện một bản sửa về phân quyền đã đảo ngược quyền truy cập, và lỗi này chỉ lộ ra khi chạy lại các ca vốn đã đạt trước đó."
 },
 {
  "id": "nw5-a07",
  "chapter": 13,
  "difficulty": 1,
  "type": "single",
  "topic": "deploy",
  "question": "RoomCraft là website tĩnh và nhóm dự kiến triển khai trên GitHub Pages. Em hãy trình bày cách website chạy được trên môi trường này, vai trò của tệp .nojekyll, lý do tệp products.zip không được đưa lên Git, và cách nhóm cập nhật nội dung khi đã triển khai.",
  "options": [
   "Website tĩnh chạy được trên GitHub Pages hoặc Live Server mà không cần cài đặt; tệp .nojekyll để GitHub Pages không xử lý qua Jekyll, giữ nguyên các thư mục bắt đầu bằng dấu gạch dưới; products.zip không đưa lên Git vì dung lượng lớn và không cần thiết cho bản chạy; khi cập nhật, nhóm sửa dữ liệu hoặc mã rồi đẩy lên nhánh chính để GitHub Pages tự dựng lại.",
   "Website cần cài đặt máy chủ Node.js và cơ sở dữ liệu MySQL trên GitHub Pages mới chạy được; tệp .nojekyll dùng để mã hóa mật khẩu; products.zip bắt buộc phải đưa lên Git thì trang mới hiển thị sản phẩm.",
   "GitHub Pages không chạy được website tĩnh nên nhóm phải thuê máy chủ riêng; tệp .nojekyll là tệp cấu hình cơ sở dữ liệu; products.zip chứa toàn bộ mã nguồn nên phải đưa lên Git.",
   "Website chỉ chạy được khi mở trực tiếp tệp HTML bằng cách nhấp đúp trong File Explorer; tệp .nojekyll không có tác dụng gì; products.zip là tệp bắt buộc để GitHub Pages nhận diện trang chủ."
  ],
  "correct": [
   0
  ],
  "explanation": "Chương 6 ghi nhận điểm mạnh thứ sáu là website tĩnh chạy được trên GitHub Pages hoặc Live Server mà không cần cài đặt, thư viện model-viewer, Chart.js và font chữ được lưu trong kho mã nên phần lớn chức năng vẫn hoạt động khi không có Internet, trừ đăng nhập Google và phần AI của chatbot. Tệp .nojekyll giúp GitHub Pages không xử lý qua Jekyll và giữ nguyên các thư mục đặc biệt. products.zip có dung lượng lớn, không cần thiết cho bản chạy nên không đưa lên Git. Khi cập nhật, nhóm sửa dữ liệu hoặc mã rồi đẩy lên nhánh chính để GitHub Pages tự dựng lại, và với thay đổi dữ liệu cần tăng DATA_VERSION để trình duyệt nạp lại dữ liệu mới."
 },
 {
  "id": "nw5-a08",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "topic": "deploy",
  "question": "Sau khi triển khai RoomCraft, Admin thay đổi dữ liệu trên máy mình nhưng người dùng ở máy khác không thấy thay đổi. Em hãy giải thích nguyên nhân theo kiến trúc hiện tại và trình bày quy trình nhóm phải làm để đưa thay đổi của Admin áp dụng cho mọi người.",
  "options": [
   "Vì website không có máy chủ và cơ sở dữ liệu thật, thay đổi của Admin chỉ có trên máy đang dùng do dữ liệu lưu trong localStorage. Muốn áp dụng cho mọi người, Admin phải xuất JSON, chép vào thư mục dữ liệu, tăng phiên bản dữ liệu DATA_VERSION rồi đẩy lên kho mã để GitHub Pages dựng lại.",
   "Vì GitHub Pages chặn mọi thay đổi dữ liệu sau lần triển khai đầu tiên, nên nhóm phải tạo một repository mới mỗi lần cập nhật dữ liệu.",
   "Vì người dùng chưa đăng nhập đúng tài khoản quản trị nên không thấy dữ liệu mới; chỉ cần đăng nhập lại bằng tài khoản Admin là mọi máy đều thấy thay đổi ngay lập tức.",
   "Vì dữ liệu được lưu trong cơ sở dữ liệu MySQL đặt trên máy chủ của nhóm, nên chỉ cần khởi động lại MySQL là mọi người dùng thấy thay đổi."
  ],
  "correct": [
   0
  ],
  "explanation": "Chương 6 nêu hạn chế thứ nhất: chưa có máy chủ và cơ sở dữ liệu thật, tài khoản, giỏ hàng, đơn hàng chỉ lưu trong localStorage của từng trình duyệt, không đồng bộ giữa các thiết bị. Thay đổi của Admin cũng chỉ có trên máy đang dùng; muốn áp dụng cho mọi người phải xuất JSON, chép vào thư mục dữ liệu và tăng phiên bản dữ liệu DATA_VERSION. Chương 4 cũng giải thích store.js nạp các bảng vào localStorage với khóa rc_*, DATA_VERSION dùng để nhận biết phiên bản dữ liệu cần nạp lại, và tệp SQL trong database/ chỉ là thiết kế phục vụ phân tích chứ không phải cơ sở dữ liệu website truy vấn khi chạy."
 },
 {
  "id": "nw5-a09",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "topic": "deploy",
  "question": "Trong buổi trình diễn RoomCraft, nếu nhóm chỉ chạy website trên GitHub Pages hoặc Live Server mà không bật server.js thì chatbot vẫn hoạt động nhưng bị giới hạn. Em hãy trình bày giới hạn đó, nguyên nhân và cách nhóm chuẩn bị để buổi demo vẫn thể hiện được phần AI của chatbot.",
  "options": [
   "Bản chạy trên GitHub Pages hoặc Live Server chỉ dùng được 20 câu trả lời có sẵn và bộ luật lọc sản phẩm, không trả lời được câu hỏi ngoài phạm vi đã cấu hình. Nguyên nhân là phần AI cần server.js chạy trên máy có khóa API. Để demo được phần AI, nhóm phải bật server.js trên máy có khóa API trước khi trình diễn.",
   "Chatbot không hoạt động chút nào khi thiếu server.js, kể cả các nút gợi ý nhanh cũng không hiện, nên nhóm buộc phải bỏ chatbot khỏi buổi demo.",
   "Chatbot vẫn trả lời được mọi câu hỏi kể cả ngoài bộ mẫu vì toàn bộ mô hình ngôn ngữ được nhúng sẵn trong trình duyệt, server.js chỉ để trang trí và không ảnh hưởng gì.",
   "Chatbot chỉ hoạt động khi có kết nối tới cơ sở dữ liệu MySQL, còn server.js chỉ dùng để xuất báo cáo PDF nên không liên quan tới buổi demo."
  ],
  "correct": [
   0
  ],
  "explanation": "Chương 6 nêu hạn chế thứ tư: phần AI của chatbot phụ thuộc máy chủ riêng. Để trả lời câu hỏi ngoài bộ mẫu, phải chạy server.js trên máy có khóa API. Bản chạy trên GitHub Pages hoặc Live Server chỉ dùng được 20 câu trả lời có sẵn và bộ luật lọc sản phẩm. Trong buổi trình diễn, nếu không bật máy chủ thì chatbot vẫn hoạt động nhưng không trả lời được câu hỏi nằm ngoài phạm vi đã cấu hình. Chương 4 cũng ghi nhận chatbot tra cứu FAQ/dữ liệu nội bộ và có thể chuyển câu hỏi khó tới dịch vụ Node.js nếu cấu hình, câu trả lời AI phụ thuộc dịch vụ và cấu hình."
 },
 {
  "id": "nw5-a10",
  "chapter": 13,
  "difficulty": 1,
  "type": "single",
  "topic": "sec",
  "question": "RoomCraft hiện chưa có máy chủ nên mọi kiểm tra quyền diễn ra trong trình duyệt. Em hãy trình bày rủi ro bảo mật cụ thể ở phần phân quyền, cách nhóm đã xử lý một phần, và vì sao đây được ghi nhận là giới hạn kiến trúc đã biết thay vì lỗi đã xử lý xong.",
  "options": [
   "Người dùng có hiểu biết kỹ thuật có thể sửa dữ liệu phiên lưu cục bộ để tự nhận mình là quản trị viên. Nhóm đã chặn được đường đổi vai trò qua giao diện và đưa phần kiểm tra quyền về tra từ bảng vai trò, nhưng không thể chặn hoàn toàn khi không có thành phần xác thực phía máy chủ, nên đây là giới hạn kiến trúc đã biết được ghi nhận là rủi ro chấp nhận.",
   "Người dùng không thể sửa dữ liệu phiên vì localStorage được mã hóa bằng khóa bí mật chỉ nhóm biết, nên phần phân quyền của RoomCraft an toàn tuyệt đối và không có rủi ro nào.",
   "Rủi ro duy nhất là người dùng quên mật khẩu, và nhóm đã xử lý xong bằng chức năng quên mật khẩu dùng OTP nên không còn hạn chế bảo mật nào khác.",
   "Nhóm đã chuyển toàn bộ kiểm tra quyền sang máy chủ Node.js chạy thường trực trên GitHub Pages, nên rủi ro sửa dữ liệu phiên không còn tồn tại."
  ],
  "correct": [
   0
  ],
  "explanation": "Chương 6 nêu hạn chế thứ hai: vì mọi kiểm tra quyền diễn ra trong trình duyệt, người dùng có hiểu biết kỹ thuật vẫn có thể sửa dữ liệu phiên lưu cục bộ để tự nhận mình là quản trị viên. Nhóm đã chặn được đường đổi vai trò qua giao diện và đưa phần kiểm tra quyền về tra từ bảng vai trò, nhưng không thể chặn hoàn toàn khi không có thành phần xác thực phía máy chủ. Đây là giới hạn kiến trúc đã biết, được ghi nhận là rủi ro chấp nhận chứ không phải lỗi đã xử lý xong. Chương 5 cũng ghi BUG-02 ở mức trung bình với kết luận tương tự: sửa được phần sửa vai trò nhưng giả mạo mã người dùng quản trị vẫn qua được."
 },
 {
  "id": "nw5-a11",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "topic": "sec",
  "question": "Em hãy trình bày các hạn chế bảo mật của RoomCraft liên quan tới xác thực và thanh toán, bao gồm cách lưu mật khẩu, cách xử lý OTP và mức độ của thanh toán, cùng hệ quả của những hạn chế này khi đánh giá sản phẩm.",
  "options": [
   "Mã OTP hiện ngay trên trang thay vì gửi qua email; thanh toán không phát sinh giao dịch thật; mật khẩu được băm bằng SHA-256 nhưng không có salt và việc băm diễn ra ở trình duyệt, nên chỉ đủ cho mục đích học tập. Vì vậy các chức năng này được xem là hiện thực nghiệp vụ cho nguyên mẫu học tập, không phải dịch vụ thương mại đã sẵn sàng vận hành.",
   "Mật khẩu được lưu dạng văn bản thuần trong cơ sở dữ liệu MySQL trên máy chủ; OTP được gửi qua email thật bằng dịch vụ trả phí; thanh toán kết nối cổng ngân hàng thật nên sản phẩm đã sẵn sàng thương mại.",
   "Nhóm không lưu mật khẩu ở đâu cả mà dùng đăng nhập Google cho toàn bộ người dùng, nên không có hạn chế nào về xác thực; thanh toán cũng không cần mô phỏng vì đã tích hợp ví điện tử thật.",
   "Mật khẩu được băm bằng SHA-256 có salt ngẫu nhiên ở phía máy chủ; OTP hết hạn sau 5 phút và gửi qua email thật; thanh toán đã kết nối cổng thanh toán nên không còn hạn chế."
  ],
  "correct": [
   0
  ],
  "explanation": "Chương 6 nêu hạn chế thứ hai: mã OTP hiện ngay trên trang thay vì gửi qua email; thanh toán không phát sinh giao dịch thật; mật khẩu được băm bằng SHA-256 nhưng không có salt và việc băm diễn ra ở trình duyệt, nên chỉ đủ cho mục đích học tập. Chương 4 cũng ghi trong bảng quy tắc xử lý: mật khẩu băm SHA-256 phía trình duyệt, OTP mô phỏng 6 chữ số lưu cục bộ hết hạn sau 5 phút, không gửi email OTP thật; mô hình xác thực phía client chỉ phù hợp trình diễn, không tạo bảo đảm bảo mật cho triển khai thật. Vì vậy khi đánh giá RoomCraft, các chức năng này được xem là hiện thực nghiệp vụ cho nguyên mẫu học tập, không phải dịch vụ thương mại đã sẵn sàng vận hành."
 },
 {
  "id": "nw5-a12",
  "chapter": 13,
  "difficulty": 3,
  "type": "single",
  "topic": "sec",
  "question": "Trong đợt P2, nhóm RoomCraft phát hiện lỗi BUG-02 về leo quyền quản trị và quyết định chấp nhận rủi ro thay vì sửa triệt để. Em hãy mô tả cơ chế của lỗi, cách nhóm đã xử lý một phần, lý do không thể sửa hoàn toàn, và cách nhóm phân loại trường hợp này trong hồ sơ kiểm thử.",
  "options": [
   "Lỗi cho phép leo quyền quản trị bằng cách sửa trường vai trò trong kho lưu phiên ở trình duyệt. Nhóm đã sửa hàm kiểm tra quyền để tra vai trò từ bảng người dùng và bảng vai trò thay vì tin vào trường lưu trong phiên, nhưng giả mạo mã người dùng quản trị vẫn qua được. Vì không có thành phần xác thực phía máy chủ nên không thể sửa triệt để; trường hợp này được ghi là giới hạn kiến trúc đã biết, chấp nhận rủi ro, không tính là lỗi đã xử lý xong.",
   "Lỗi cho phép người dùng đổi mật khẩu của người khác qua giao diện; nhóm đã sửa xong hoàn toàn bằng cách thêm salt vào SHA-256 nên không còn rủi ro nào và không cần chấp nhận rủi ro.",
   "Lỗi chỉ là hiển thị sai màu nút đăng nhập trên trang quản trị; nhóm đã sửa xong trong vài phút và không liên quan gì tới phân quyền hay bảo mật.",
   "Lỗi cho phép người dùng thường xem Dashboard nhưng không thao tác được gì; nhóm quyết định chấp nhận rủi ro vì cho rằng Dashboard không chứa thông tin nhạy cảm."
  ],
  "correct": [
   0
  ],
  "explanation": "Bảng 5.3 ghi BUG-02 ở mức trung bình: leo quyền quản trị bằng cách sửa trường vai trò trong kho lưu phiên ở trình duyệt. Cách xử lý là hàm kiểm tra quyền tra vai trò từ bảng người dùng và bảng vai trò thay vì tin vào trường lưu trong phiên. Kết quả: sửa được phần sửa vai trò nhưng giả mạo mã người dùng quản trị vẫn qua được, đây là giới hạn kiến trúc đã biết, chấp nhận rủi ro. Chương 6 giải thích thêm nhóm đã chặn được đường đổi vai trò qua giao diện và đưa phần kiểm tra quyền về tra từ bảng vai trò, nhưng không thể chặn hoàn toàn khi không có thành phần xác thực phía máy chủ, nên đây là rủi ro chấp nhận chứ không phải lỗi đã xử lý xong."
 },
 {
  "id": "nw5-a13",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "topic": "biz",
  "question": "Bảng đối chiếu bảy mục tiêu cụ thể cho thấy sáu trên bảy mục tiêu đạt đủ chỉ báo, riêng mục tiêu Core E-commerce chỉ đạt một phần. Em hãy trình bày nội dung còn thiếu, lý do nhóm chủ động bỏ chức năng đó, và hai tính năng có kết quả vượt kế hoạch về quy mô kèm số liệu.",
  "options": [
   "Mục tiêu Core E-commerce thiếu chức năng đăng ảnh khi đánh giá; nhóm chủ động bỏ ở giai đoạn cuối để dồn thời gian sửa các lỗi ảnh hưởng trực tiếp đến luồng mua hàng. Hai tính năng vượt kế hoạch là Shop the Room với 49/49 phòng có hotspot, tổng 1.353 điểm gắn với 597 sản phẩm khác nhau, và 3D Product Viewer với 202 model .glb nhờ tự tạo model bằng AI.",
   "Mục tiêu Core E-commerce thiếu chức năng thanh toán bằng tiền mặt; nhóm bỏ vì cho rằng COD không cần thiết. Hai tính năng vượt kế hoạch là Chatbot và Dashboard, mỗi tính năng đạt đúng 1 model 3D và 1 phòng mẫu.",
   "Mục tiêu Core E-commerce thiếu chức năng tìm kiếm sản phẩm; nhóm bỏ vì dữ liệu quá ít. Hai tính năng vượt kế hoạch là Đồ cũ với 18 sản phẩm và Admin với 8 trang, đều vượt kế hoạch gấp đôi.",
   "Cả bảy mục tiêu đều đạt đủ chỉ báo, không có mục tiêu nào đạt một phần; hai tính năng vượt kế hoạch là Wishlist và mã giảm giá với số lượng lần lượt là 2 và 2."
  ],
  "correct": [
   0
  ],
  "explanation": "Bảng 6.1 đối chiếu bảy mục tiêu: sáu trên bảy mục tiêu đạt đủ chỉ báo, mục tiêu MT1 Core E-commerce đạt một phần vì thiếu chức năng đăng ảnh khi đánh giá. Tài liệu giải thích nhóm chủ động bỏ chức năng này ở giai đoạn cuối để dồn thời gian sửa các lỗi ảnh hưởng trực tiếp đến luồng mua hàng. Hai tính năng đặc trưng có kết quả vượt kế hoạch về quy mô: Shop the Room có 49/49 phòng có hotspot, tổng cộng 1.353 điểm gắn với 597 sản phẩm khác nhau, trung bình 27,6 điểm mỗi phòng, cao hơn nhiều so với mức 3-7 dự kiến; 3D Product Viewer có 202 model .glb, 201 sản phẩm đang hiển thị, tăng từ 2-3 model mỗi thành viên lên 202 model nhờ tự tạo model bằng AI."
 },
 {
  "id": "nw5-a14",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "topic": "biz",
  "question": "So với Project Brief lúc khởi động, bản website cuối của RoomCraft có năm thay đổi về phạm vi. Em hãy trình bày năm thay đổi đó và lý do của từng thay đổi, đặc biệt là thay đổi về phong cách nội thất và về gợi ý sản phẩm.",
  "options": [
   "Năm thay đổi gồm: phong cách từ 6 ví dụ chuyển thành 7 phong cách thật thu thập được, mỗi phong cách 7 phòng; thêm khu vực đồ cũ 18 sản phẩm; gợi ý sản phẩm từ Machine Learning content-based chuyển sang quy tắc theo phong cách, danh mục, màu sắc; model 3D từ 2-3 model mỗi thành viên lấy từ nguồn có sẵn chuyển sang 202 model tự tạo bằng Hunyuan3D-2; lưu trữ từ MySQL chuyển sang JSON và localStorage. Lý do chung là phù hợp nguồn dữ liệu thật, dễ giải thích, không cần máy chủ và phù hợp thời gian một học kỳ.",
   "Năm thay đổi gồm: bỏ hoàn toàn giỏ hàng, bỏ thanh toán, bỏ đăng nhập, bỏ trang quản trị và bỏ chatbot vì nhóm không đủ thời gian; lý do là muốn tập trung làm trang giới thiệu đẹp.",
   "Năm thay đổi gồm: đổi tên thương hiệu, đổi màu chủ đạo, đổi font chữ, đổi logo và đổi ảnh nền trang chủ; lý do là nhóm thích phong cách mới hơn sau khi xem nhiều mẫu thiết kế.",
   "Năm thay đổi gồm: chuyển sang dùng React, chuyển sang dùng Node.js cho toàn bộ website, chuyển sang cơ sở dữ liệu MongoDB, thuê máy chủ riêng và thuê ngoài phần kiểm thử; lý do là muốn sản phẩm trông chuyên nghiệp hơn."
  ],
  "correct": [
   0
  ],
  "explanation": "Bảng 6.3 tóm tắt năm thay đổi phạm vi. Phong cách nội thất từ 6 phong cách ví dụ chuyển thành 7 phong cách Bohemian, Coastal, Farmhouse, Glam, Mid-century Modern, Scandinavian, Traditional, mỗi phong cách 7 phòng, chọn theo nguồn dữ liệu thật thu thập được. Khu vực đồ cũ từ không có thành 18 sản phẩm do Admin đăng sẵn, dùng lại giỏ hàng và thanh toán sẵn có. Gợi ý sản phẩm từ Machine Learning content-based chuyển sang quy tắc theo phong cách, danh mục, màu sắc và quan hệ phòng-sản phẩm vì dễ giải thích, chạy hoàn toàn bằng JavaScript, không cần máy chủ hay dữ liệu hành vi. Model 3D từ 2-3 model mỗi thành viên lấy từ nguồn có sẵn chuyển sang 202 model tự tạo bằng Hunyuan3D-2 vì model có sẵn hiếm khi khớp đúng sản phẩm đang bán. Lưu trữ từ MySQL chuyển sang JSON và localStorage vì website tĩnh không cần máy chủ, phù hợp thời gian một học kỳ."
 },
 {
  "id": "nw5-a15",
  "chapter": 13,
  "difficulty": 3,
  "type": "multiple",
  "topic": "biz",
  "question": "Chương 6 của báo cáo trình bày các hạn chế của RoomCraft và hướng phát triển. Em hãy chọn ra những nội dung đúng với các hạn chế và bài học mà nhóm đã ghi nhận, bao gồm hạn chế về dữ liệu, hiệu năng, kiểm thử và chất lượng model 3D.",
  "options": [
   "Dữ liệu mang tính mẫu: ảnh và thông tin sản phẩm lấy từ nguồn nước ngoài, được việt hóa và quy đổi giá, 150 đơn hàng, 194 đánh giá và 46 tài khoản trong Dashboard là dữ liệu mẫu do nhóm tạo.",
   "Hiệu năng trang chủ chưa đạt ngưỡng trên một số môi trường: trang chủ mở mất 9,1 giây trên Safari/WebKit và 10,8 giây trên iPhone giả lập, vượt ngưỡng 5 giây; nhóm chỉ bật tải lười mà không nén ảnh vì muốn giữ độ nét ảnh phòng.",
   "Chất lượng model 3D chưa đồng đều: mô hình tạo từ một ảnh chính diện nên mặt sau và phần bị che thường sai hình hoặc sai màu; nhóm đã loại 23 model bị lỗi hình và 13 model sai màu.",
   "Nhóm đã kiểm thử với đầy đủ người dùng ngoài nhóm, đo được trải nghiệm và tỷ lệ chuyển đổi trên khách hàng mục tiêu nên không còn hạn chế nào về kiểm thử."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Chương 6 nêu hạn chế thứ năm là dữ liệu mang tính mẫu: ảnh và thông tin sản phẩm lấy từ nguồn nước ngoài, được việt hóa và quy đổi giá, 150 đơn hàng, 194 đánh giá và 46 tài khoản trong Dashboard là dữ liệu mẫu do nhóm tạo. Hạn chế thứ sáu là hiệu năng trang chủ chưa đạt ngưỡng trên một số môi trường: trang chủ mở mất 9,1 giây trên Safari/WebKit và 10,8 giây trên iPhone giả lập, vượt ngưỡng 5 giây; nhóm chỉ bật tải lười mà không nén ảnh vì độ nét ảnh phòng quyết định cảm nhận toàn trang. Hạn chế thứ ba là chất lượng model 3D chưa đồng đều, nhóm đã loại 23 model bị lỗi hình và 13 model sai màu. Ngược lại, hạn chế thứ tám ghi rõ nhóm chưa kiểm thử với người dùng ngoài nhóm, không khảo sát và không đo trải nghiệm hay tỷ lệ chuyển đổi trên nhóm khách hàng mục tiêu, nên phương án thứ tư sai."
 }
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_NW5; }
