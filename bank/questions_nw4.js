// Cau hoi bo sung bam sat bao cao final - nw4 (15 cau)
const QUESTIONS_NW4 = [
 {
  "id": "nw4-a01",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "topic": "test",
  "question": "Trong kế hoạch kiểm thử của nhóm, mỗi phiên kiểm thử được tổ chức như thế nào và phiên s00 có vai trò gì đặc biệt so với các phiên còn lại?",
  "options": [
   "Mỗi phiên là một file script độc lập trong thư mục phien/ chạy bằng lệnh node phien/<tên phiên>.js; phiên s00 là phiên khởi động, được chạy đầu tiên sau mỗi lần cập nhật mã nguồn",
   "Mỗi phiên là một file Excel riêng do thành viên nhập tay, phiên s00 là phiên dành cho quản trị viên kiểm tra Dashboard",
   "Tất cả các phiên nằm chung trong một file script duy nhất, phiên s00 là phiên chạy cuối cùng để tổng hợp kết quả",
   "Mỗi phiên là một trang Google Sheet riêng biệt, phiên s00 là phiên kiểm thử chatbot trước khi kiểm thử giao diện"
  ],
  "correct": [
   0
  ],
  "explanation": "Theo báo cáo kiểm thử, mỗi phiên là một file script độc lập trong thư mục phien/, chạy bằng lệnh node phien/<tên phiên>.js. Phiên s00 (khởi động) được chạy đầu tiên sau mỗi lần cập nhật mã nguồn, gồm 40 test case mở toàn bộ 20 trang ở cả máy tính và điện thoại. Đây là bước smoke test nhanh để xác nhận hệ thống còn chạy được trước khi đi vào kiểm thử sâu các phiên s01 đến s10."
 },
 {
  "id": "nw4-a02",
  "chapter": 13,
  "difficulty": 1,
  "type": "single",
  "topic": "test",
  "question": "Tổng số test case và tỉ lệ đạt của đợt kiểm thử tự động hóa bằng Playwright trên Microsoft Edge (Phase 1) là bao nhiêu, và phân bố trên bao nhiêu phiên?",
  "options": [
   "342 test case trên 11 phiên (s00 đến s10), đạt 332/342 tương đương 97,1%",
   "394 test case trên 12 phiên (s00 đến s11), đạt 370/394 tương đương 93,9%",
   "2758 lượt kiểm thử trên 7 cấu hình, đạt 97,4% đến 98,5%",
   "78 lỗi ghi nhận qua kiểm thử thủ công, trong đó 4 lỗi nghiêm trọng"
  ],
  "correct": [
   0
  ],
  "explanation": "Báo cáo kiểm thử nêu rõ đợt Phase 1 ngày 03/11/2026 chạy 342 test case chia thành 11 phiên từ s00 đến s10, kết quả 332 Đạt (97,1%) và 10 Không đạt. Con số 394 test case x 7 cấu hình = 2758 lượt là của Phase 2, còn 78 lỗi là nhật ký Phase 0 kiểm thử thủ công. Cần phân biệt rõ ba con số này khi trình bày để tránh nhầm lẫn giữa các giai đoạn."
 },
 {
  "id": "nw4-a03",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "topic": "test",
  "question": "Phiên s00 gồm 40 test case mở toàn bộ trang, trong đó có bao nhiêu test case chạy trên điện thoại và kết quả của phiên này ra sao?",
  "options": [
   "20 test case trên điện thoại; phiên s00 đạt 38/40 (95,0%), hai test không đạt là TC-S00-01 và TC-S00-21 đều do trang chủ bị cuộn ngang",
   "10 test case trên điện thoại; phiên s00 đạt 40/40 tuyệt đối vì chỉ kiểm tra trang mở được",
   "20 test case trên điện thoại; phiên s00 đạt 30/40 do nhiều trang admin không mở được trên di động",
   "5 test case trên điện thoại; phiên s00 đạt 38/40 với hai lỗi thuộc về trang thanh toán"
  ],
  "correct": [
   0
  ],
  "explanation": "Bảng kế hoạch phiên cho thấy s00 có 40 test case, trong đó 20 test chạy trên điện thoại. Kết quả tổng hợp ghi s00 đạt 38/40 (95,0%), hai test không đạt là TC-S00-01 (mở index.html trên máy tính) và TC-S00-21 (mở index.html trên điện thoại), cả hai đều quy về BUG-01 trang chủ bị cuộn ngang. Đây là lý do s00 là phiên duy nhất ngoài s06, s08, s09, s10 có test không đạt."
 },
 {
  "id": "nw4-a04",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "topic": "test",
  "question": "Test case TC-S00-01 và TC-S00-21 trong phiên khởi động kiểm tra điều gì, và vì sao cả hai đều bị đánh Không đạt?",
  "options": [
   "Cả hai kiểm tra việc mở trang index.html (một trên máy tính, một trên điện thoại) và đều không đạt vì trang chủ bị cuộn ngang do khối slider Sản phẩm nổi bật tràn khỏi khung nhìn",
   "Cả hai kiểm tra chức năng thêm vào giỏ hàng từ hotspot và không đạt vì sản phẩm trong phòng mẫu bị hết hàng",
   "Cả hai kiểm tra việc đăng nhập tài khoản admin và không đạt vì mật khẩu mẫu đã bị đổi sau khi tăng DATA_VERSION",
   "Cả hai kiểm tra việc mở trang quản trị trên hai kích thước màn hình và không đạt vì thiếu quyền truy cập"
  ],
  "correct": [
   0
  ],
  "explanation": "TC-S00-01 mở trang index.html trên máy tính, TC-S00-21 mở trang index.html trên điện thoại. Theo mô tả BUG-01, trang chủ bị cuộn ngang ở mọi kích thước (2.460px trên máy tính, 2.968px ở 390px, 5.999px ở 768px, 2.460px ở 1440px) do khối slider .featured-track trong css/pages/index.css tràn khỏi khung nhìn. Vì tiêu chí Đạt yêu cầu không có cuộn ngang nên cả hai test case đều bị đánh Không đạt."
 },
 {
  "id": "nw4-a05",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "topic": "test",
  "question": "Trong phiên s10 kiểm thử phi chức năng, bốn test case không đạt là những test nào và cùng quy về lỗi gì?",
  "options": [
   "TC-S10-01, TC-S10-02, TC-S10-03 và TC-S10-13, đều thuộc BUG-01 về cuộn ngang ở các kích thước 390px, 768px, 1440px và khi mất mạng",
   "TC-S10-20, TC-S10-21, TC-S10-22 và TC-S10-30, đều thuộc lỗi cơ chế DATA_VERSION và resetData",
   "TC-S10-07, TC-S10-08, TC-S10-09 và TC-S10-10, đều thuộc lỗi phân quyền khách và user thường",
   "TC-S10-23, TC-S10-24, TC-S10-25 và TC-S10-26, đều thuộc lỗi hiệu năng và định dạng tiền tệ"
  ],
  "correct": [
   0
  ],
  "explanation": "Bảng kết quả s10 ghi 26/30, bốn test không đạt là TC-S10-01 (không cuộn ngang ở 390px), TC-S10-02 (768px), TC-S10-03 (1440px) và TC-S10-13 (mất mạng icon/font không vỡ bố cục). Cả bốn đều được quy về BUG-01 vì cùng nguyên nhân trang chủ tràn ngang. Các nhóm phân quyền, DATA_VERSION, định dạng formatVND và hiệu năng đều đạt, cho thấy điểm yếu của s10 tập trung ở bố cục chứ không phải logic."
 },
 {
  "id": "nw4-a06",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "topic": "test",
  "question": "Báo cáo kiểm thử ghi nhận 10 test case không đạt nhưng chỉ có 5 lỗi. Cách quy đổi từ test case không đạt sang lỗi được thực hiện như thế nào?",
  "options": [
   "Mỗi test case không đạt được xác minh lại thủ công bằng đọc mã nguồn và tái hiện, sau đó các test cùng nguyên nhân được gộp về một lỗi, ví dụ sáu test về cuộn ngang đều quy về BUG-01",
   "Mỗi test case không đạt được tính là một lỗi riêng biệt, do đó 10 test không đạt tương ứng 10 lỗi",
   "Chỉ những test case không đạt trên máy tính mới được tính là lỗi, các test trên điện thoại bị loại bỏ khỏi danh sách",
   "Các test case không đạt được giao cho mô hình AI phân loại tự động và kết quả AI đưa ra được ghi nhận thẳng vào báo cáo"
  ],
  "correct": [
   0
  ],
  "explanation": "Tiêu chí đầu ra yêu cầu 100% test case không đạt phải được xác minh lại thủ công bằng đọc mã nguồn và tái hiện để kết luận là lỗi website hay lỗi kịch bản; chỉ lỗi website đã xác minh mới được ghi nhận. Sau đó các test cùng nguyên nhân được gộp: BUG-01 gồm TC-S00-01, TC-S00-21, TC-S10-01, TC-S10-02, TC-S10-03, TC-S10-13; BUG-02 là TC-S08-13; BUG-03 và BUG-04 thuộc s09; BUG-05 là TC-S06-26. Nhờ vậy 10 test không đạt quy về 5 lỗi."
 },
 {
  "id": "nw4-a07",
  "chapter": 13,
  "difficulty": 3,
  "type": "multiple",
  "topic": "test",
  "question": "Năm lỗi BUG-01 đến BUG-05 trong báo cáo kiểm thử được phân loại mức độ như thế nào và thuộc những phiên kiểm thử nào?",
  "options": [
   "BUG-01 mức Trung bình, thuộc các phiên s00 và s10, liên quan cuộn ngang trang chủ",
   "BUG-02 mức Trung bình, thuộc phiên s08, liên quan Dashboard bỏ sót sản phẩm tồn kho bằng 0",
   "BUG-03 và BUG-04 mức Trung bình, thuộc phiên s09, liên quan chatbot xử lý ngân sách và mất lịch sử chat",
   "BUG-05 mức Nghiêm trọng, thuộc phiên s06, liên quan phân quyền hủy đơn của người khác"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Theo danh sách lỗi, BUG-01 (cuộn ngang trang chủ) mức Trung bình gắn với s00 và s10; BUG-02 (Dashboard bỏ sót sản phẩm tồn kho 0) mức Trung bình gắn với s08; BUG-03 (ngân sách dạng số đầy đủ) và BUG-04 (mất lịch sử chat sau reload) mức Trung bình gắn với s09. Riêng BUG-05 (thiếu kiểm tra quyền sở hữu đơn trong cancelOrder) được xếp mức Nhẹ chứ không phải Nghiêm trọng, vì không khai thác được qua giao diện. Đợt kiểm thử này không phát hiện lỗi Nghiêm trọng nào."
 },
 {
  "id": "nw4-a08",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "topic": "test",
  "question": "Lỗi BUG-01 về trang chủ bị cuộn ngang được mô tả với những số đo cụ thể nào ở các kích thước màn hình và trạng thái mất mạng?",
  "options": [
   "Cuộn ngang 2.460px trên máy tính, 2.968px ở khung 390px, 5.999px ở khung 768px, 2.460px ở khung 1440px và vẫn 2.460px khi mất mạng",
   "Cuộn ngang 100px trên máy tính, 200px ở 390px, 300px ở 768px và biến mất hoàn toàn khi mất mạng",
   "Cuộn ngang chỉ xảy ra ở khung 390px với 2.968px, các kích thước còn lại đều hiển thị bình thường",
   "Cuộn ngang 5.999px ở mọi kích thước màn hình do cùng một khối slider cố định chiều rộng"
  ],
  "correct": [
   0
  ],
  "explanation": "Mục BUG-01 ghi kết quả thực tế: trang bị cuộn ngang 2.460px trên máy tính, 2.968px ở khung 390px, 5.999px ở khung 768px, 2.460px ở khung 1440px; khi chặn mạng vẫn cuộn ngang 2.460px và vuốt sang phải thấy vùng trắng. Nguyên nhân là khối slider Sản phẩm nổi bật (.featured-track) trong css/pages/index.css tràn khỏi khung nhìn. Đây là lỗi ảnh hưởng nhiều kích thước nên được xếp ưu tiên sửa số một."
 },
 {
  "id": "nw4-a09",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "topic": "test",
  "question": "Vì sao nhóm chọn Playwright làm công cụ tự động hóa kiểm thử thay vì kiểm thử thủ công hoàn toàn, và công cụ này mang lại lợi ích gì cho đợt kiểm thử?",
  "options": [
   "Playwright hỗ trợ đa nhân trình duyệt và giả lập thiết bị, cho phép chạy lại 342 rồi 394 test case trên 7 cấu hình với chi phí biên thấp, đồng thời tự bắt lỗi JS, Console, alert, cuộn ngang và chụp ảnh minh chứng",
   "Playwright là công cụ duy nhất có thể đọc mã nguồn JavaScript nên giúp nhóm kiểm thử hộp trắng thay vì hộp đen",
   "Playwright tự động sửa lỗi phát hiện được nên nhóm không cần thành viên xác minh lại kết quả không đạt",
   "Playwright thay thế hoàn toàn kiểm thử thủ công vì có thể đánh giá được cảm nhận giao diện và nội dung như con người"
  ],
  "correct": [
   0
  ],
  "explanation": "Báo cáo tổng kết nêu Playwright là thư viện tự động hóa của Microsoft, hỗ trợ đa nhân trình duyệt và giả lập thiết bị. Nhóm dùng nó để chạy 342 test case trên Edge rồi mở rộng 394 test case x 7 cấu hình = 2758 lượt, kèm khung tự phát hiện lỗi JS/Console, alert, cuộn ngang, file 404 và chụp ảnh minh chứng. Tuy nhiên tài liệu cũng nhấn mạnh tự động hóa không thay thế thủ công: nó chỉ kiểm tra điều đã được lập trình, còn phán đoán cảm nhận giao diện vẫn cần con người."
 },
 {
  "id": "nw4-a10",
  "chapter": 13,
  "difficulty": 3,
  "type": "single",
  "topic": "test",
  "question": "Trong Phase 2, phần lớn lượt không đạt tại phiên s03 và s04 trên ba cấu hình di động được xác định là do nguyên nhân gì, và nhóm đã xử lý ra sao?",
  "options": [
   "Do script không bấm nút Bộ lọc vốn được thiết kế thu gọn trên màn hẹp; nhóm bổ sung bước bấm nút như người dùng thật, không nới điều kiện kiểm tra, rồi chạy lại s03/s04 trên 7 cấu hình và đều đạt 30/30",
   "Do website thực sự hỏng bộ lọc trên di động; nhóm đã sửa mã nguồn bộ lọc và giảm tiêu chí kiểm tra để các test này đạt",
   "Do dữ liệu JSON bị thiếu sản phẩm trên thiết bị di động; nhóm đã nạp lại dữ liệu sạch và loại các test này khỏi báo cáo",
   "Do trình duyệt giả lập không hỗ trợ JavaScript; nhóm đã chuyển toàn bộ kiểm thử di động sang kiểm thử thủ công trên máy thật"
  ],
  "correct": [
   0
  ],
  "explanation": "Mục 5.8 và phần Phase 3 ghi rõ: phần lớn lượt không đạt tại s03/s04 trên ba cấu hình di động là do script không bấm nút Bộ lọc, nút này được thiết kế thu gọn trên màn hẹp, tức lỗi của script chứ không phải của website. Nhóm bổ sung bước bấm nút như người dùng thật, không nới điều kiện kiểm tra, rồi chạy lại s03/s04 trên 7 cấu hình và tất cả đều đạt 30/30. Đây là minh chứng cho nguyên tắc tái lập để thanh lọc bằng chứng sai, tránh sửa một lỗi không tồn tại."
 },
 {
  "id": "nw4-a11",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "topic": "test",
  "question": "File apps-script.gs đóng vai trò gì trong quy trình kiểm thử của nhóm, và kết quả được ghi nhận vào đâu?",
  "options": [
   "Là mã Google Apps Script dùng để ghi kết quả kiểm thử và ảnh minh chứng vào Google Sheet nhóm ở tab Test case, ảnh gốc lưu trên Google Drive, đồng thời tổng hợp ra file Excel TONG-HOP.xlsx",
   "Là file cấu hình Playwright dùng để khai báo 7 cấu hình trình duyệt và thiết bị giả lập",
   "Là file script Node.js chạy máy chủ tĩnh cục bộ với cổng riêng cho mỗi phiên kiểm thử",
   "Là file mã nguồn của chatbot dùng để xử lý các câu hỏi về ngân sách và mã giảm giá"
  ],
  "correct": [
   0
  ],
  "explanation": "Mục môi trường và công cụ ghi: ghi nhận kết quả bằng Google Sheet nhóm ở tab Test case, ảnh minh chứng nằm trong ô, ảnh gốc lưu Google Drive, kèm file Excel TONG-HOP.xlsx. apps-script.gs là mã Google Apps Script phục vụ việc ghi tự động kết quả và ảnh vào Sheet, giúp nhóm tập trung bằng chứng một chỗ và đối chiếu giữa các đợt test. Nó không phải file cấu hình Playwright, không phải máy chủ tĩnh và không phải mã chatbot."
 },
 {
  "id": "nw4-a12",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "topic": "test",
  "question": "Nhóm tổ chức kiểm thử chéo giữa các thành viên như thế nào, và vì sao mọi test case không đạt đều phải qua người xác minh lại thay vì tin ngay vào kết quả script?",
  "options": [
   "Thành viên Kha, Phương Anh, Duy, Khôi tham gia kiểm thử thủ công và xác minh chéo; mọi kết quả không đạt được người đọc mã nguồn và tái hiện để phân biệt lỗi website với lỗi script, nhờ đó phát hiện cả trường hợp nút Bộ lọc và bản sửa AI làm đảo quyền admin",
   "Chỉ một thành viên duy nhất làm kiểm thử để bảo đảm tính nhất quán, các thành viên còn lại chỉ nhận báo cáo và không xác minh",
   "Nhóm giao toàn bộ việc xác minh cho mô hình AI DeepSeek vì AI phân loại chính xác hơn con người",
   "Nhóm chỉ xác minh các test case đạt, còn test case không đạt được ghi thẳng vào danh sách lỗi mà không cần kiểm tra lại"
  ],
  "correct": [
   0
  ],
  "explanation": "Báo cáo tổng kết ghi Phase 0 do bốn thành viên Kha, Phương Anh, Duy, Khôi kiểm thử thủ công thăm dò; các phase sau có kiểm thử chéo và xác minh chéo. Nguyên tắc người xác minh cuối cùng được áp dụng nhất quán: mọi kết quả không đạt đều được đọc mã nguồn và tái hiện. Nguyên tắc này đã phân biệt được lỗi sản phẩm với lỗi công cụ (vụ nút Bộ lọc) và phát hiện lỗi do bản sửa AI gây ra (đảo quyền admin), chứng minh không thể tin tuyệt đối vào kết quả tự động."
 },
 {
  "id": "nw4-a13",
  "chapter": 13,
  "difficulty": 3,
  "type": "multiple",
  "topic": "test",
  "question": "Những đặc điểm nào đúng với cách nhóm ghi nhận bằng chứng và xử lý kết quả trong đợt kiểm thử tự động hóa?",
  "options": [
   "Mỗi test case được chụp ảnh minh chứng kèm chú thích gồm mã TC, Đạt hoặc Không đạt, mong đợi, thực tế, nội dung alert và khung đỏ quanh phần tử thao tác",
   "Khung kiểm thử tự phát hiện lỗi JavaScript, lỗi Console, nội dung alert, hiện tượng cuộn ngang và file 404",
   "Các test case kiểm tra mất mạng được chạy trong điều kiện chặn kết nối Internet để xác nhận website vẫn hoạt động",
   "Mọi test case không đạt được sửa kịch bản cho đến khi đạt rồi mới ghi vào báo cáo, không giữ lại kết quả không đạt ban đầu"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Mục chiến lược chung nêu rõ khung kiểm thử tự động ghi nhận lỗi JS, lỗi Console, alert, cuộn ngang, file 404; mỗi test case chụp ảnh minh chứng có chú thích mã TC, Đạt/Không đạt, mong đợi, thực tế, alert và khung đỏ quanh phần tử thao tác; các test mất mạng chạy trong điều kiện chặn Internet. Ngược lại, nhóm không sửa kịch bản cho đến khi đạt rồi mới ghi: kết quả không đạt được giữ lại, xác minh thủ công, và chỉ lỗi website đã xác minh mới ghi nhận, còn test viết sai thì sửa và chạy lại có ghi chép."
 },
 {
  "id": "nw4-a14",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "topic": "test",
  "question": "Trong báo cáo kiểm thử, các kỹ thuật thiết kế test case nào được áp dụng cho nhóm chức năng giỏ hàng, thanh toán và quản trị, và cho ví dụ cụ thể?",
  "options": [
   "Phân vùng tương đương, phân tích giá trị biên và bảng quyết định, ví dụ TC-S05-19 và TC-S05-20 kiểm COD 10.000.000 đồng, TC-S05-13 đến TC-S05-18 kiểm phí giao theo loại hàng và vùng",
   "Chỉ dùng kiểm thử thăm dò vì các form thanh toán quá phức tạp để mô hình hóa bằng kỹ thuật có cấu trúc",
   "Chỉ dùng kiểm thử chuyển trạng thái vì giỏ hàng và thanh toán đều là máy trạng thái hữu hạn",
   "Chỉ dùng kiểm thử giao diện vì mục tiêu chính là bảo đảm bố cục không vỡ trên mọi màn hình"
  ],
  "correct": [
   0
  ],
  "explanation": "Bảng kỹ thuật kiểm thử ghi: phân vùng tương đương áp dụng cho các form đăng nhập, đăng ký, thanh toán, quản trị (ví dụ TC-S01-06 email sai định dạng, TC-S05-09 SĐT sai đầu số, TC-S07-02 giá bán bằng 0); phân tích giá trị biên cho COD 10.000.000 đồng, ngưỡng miễn phí giao hàng, lọc giá đồ cũ (TC-S05-19, TC-S05-20, TC-S05-15, TC-S05-17); bảng quyết định cho phí giao hàng theo loại hàng và vùng (TC-S05-13 đến TC-S05-18). Đây là các kỹ thuật hộp đen chuẩn được nhóm áp dụng có hệ thống."
 },
 {
  "id": "nw4-a15",
  "chapter": 13,
  "difficulty": 3,
  "type": "single",
  "topic": "test",
  "question": "Sau khi phát hiện 5 lỗi trong đợt kiểm thử, nhóm đề xuất thứ tự ưu tiên sửa và kế hoạch kiểm thử hồi quy như thế nào?",
  "options": [
   "Ưu tiên sửa BUG-01 tràn ngang trang chủ trước, rồi BUG-02 Dashboard, BUG-03 và BUG-04 chatbot, cuối cùng BUG-05 cancelOrder; hồi quy chạy lại s00 và s10 cho BUG-01, s08 cho BUG-02, s09 cho BUG-03 và BUG-04, s06 cho BUG-05, sau đó chạy lại toàn bộ s00 đến s10 trước khi phát hành",
   "Ưu tiên sửa BUG-05 trước vì liên quan bảo mật, sau đó mới đến BUG-01, BUG-02, BUG-03 và BUG-04; chỉ cần chạy lại phiên s06 là đủ",
   "Sửa đồng thời cả năm lỗi rồi chạy lại duy nhất phiên s00 vì đây là phiên khởi động bao quát mọi trang",
   "Không cần kiểm thử hồi quy vì cả năm lỗi đều ở mức Trung bình và Nhẹ, không ảnh hưởng luồng nghiệp vụ chính"
  ],
  "correct": [
   0
  ],
  "explanation": "Mục kết luận và khuyến nghị nêu danh sách ưu tiên sửa: 1) BUG-01 tràn ngang trang chủ, 2) BUG-02 cảnh báo sản phẩm hết hàng trên Dashboard, 3) BUG-03 ngân sách dạng số trong chatbot, 4) BUG-04 khôi phục lịch sử chat, 5) BUG-05 kiểm tra quyền sở hữu đơn trong cancelOrder. Khuyến nghị hồi quy: chạy lại s00 và s10 cho BUG-01, s08 cho BUG-02, s09 cho BUG-03 và BUG-04, s06 cho BUG-05; ngoài ra chạy lại toàn bộ s00 đến s10 một lượt trước khi phát hành để bảo đảm không gây hồi quy."
 }
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_NW4; }
