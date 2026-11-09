// Ngan hang on bao ve RoomCraft - bv14.js (20 cau) - da ap audit
const QUESTIONS_BV14 = [
 {
  "id": "bv14-a01",
  "chapter": 13,
  "difficulty": 1,
  "type": "single",
  "question": "Thầy hỏi: bộ kiểm thử của nhóm em được tổ chức trong thư mục tests/ như thế nào, dùng công nghệ gì và vì sao lại chọn cách đó thay vì kiểm thử thủ công bằng tay?",
  "options": [
   "Nhóm em dùng Node.js kèm Playwright để điều khiển trình duyệt thật, mỗi phiên kiểm thử là một file trong tests/phien/ chạy độc lập, khung test tự mở web ở cổng 5599 nên không cần Live Server; chọn cách này vì kiểm thử thủ công lặp lại rất mất thời gian, dễ bỏ sót trường hợp biên và không có bằng chứng ảnh tự động, còn Playwright cho phép chạy lại nhiều lần, chụp ảnh minh chứng và chạy trên nhiều cấu hình thiết bị",
   "Nhóm em kiểm thử hoàn toàn bằng tay, mở từng trang bấm thử rồi ghi lại kết quả vào file Word, không dùng công cụ tự động nào vì sợ cài đặt phức tạp",
   "Nhóm em dùng Jest và Enzyme để unit test từng hàm JavaScript, không cần mở trình duyệt vì cho rằng giao diện không cần kiểm thử",
   "Nhóm em dùng Selenium nhưng chỉ chạy trên một máy duy nhất của nhóm trưởng, các thành viên khác không chạy lại được"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là nhóm dùng Node.js kèm Playwright, mỗi phiên là một file trong tests/phien/ chạy độc lập. Theo file HUONG-DAN.md, bộ kiểm thử chạy website trên trình duyệt thật, ghi kết quả từng test case kèm ảnh minh chứng. Khung test tự mở web ở cổng 5599 nên không cần Live Server, mặc định chặn Internet để đồng thời kiểm tra web chạy khi mất mạng. Lý do chọn cách này: kiểm thử thủ công lặp lại tốn thời gian, dễ bỏ sót trường hợp biên như COD sát ngưỡng 10.000.000 đồng, và không sinh được ảnh minh chứng tự động. Các phương án còn lại sai vì nhóm không kiểm thử hoàn toàn bằng tay, không dùng Jest/Enzyme cho giao diện, và không giới hạn chạy trên một máy."
 },
 {
  "id": "bv14-a02",
  "chapter": 13,
  "difficulty": 1,
  "type": "single",
  "question": "Thầy hỏi: kế hoạch kiểm thử của nhóm em chia thành bao nhiêu phiên, mỗi phiên khoảng bao nhiêu test case và thứ tự chạy gợi ý là gì? Em giải thích vì sao phải chạy s00 đầu tiên.",
  "options": [
   "Kế hoạch có 13 phiên từ s00 đến s12, mỗi phiên khoảng 15 đến 30 test case, thứ tự gợi ý là s00 rồi s01, s03, s05, s06, s08 và các phiên còn lại; s00 là phiên khởi động phải chạy đầu tiên sau khi pull code mới vì nó mở toàn bộ trang khách, user và admin trên cả máy tính lẫn điện thoại để phát hiện sớm lỗi JS, cuộn ngang và file 404 trước khi đi vào các luồng nghiệp vụ sâu",
   "Kế hoạch có 5 phiên lớn, mỗi phiên khoảng 100 test case, chạy theo thứ tự bất kỳ vì các phiên hoàn toàn độc lập và không chia sẻ dữ liệu",
   "Kế hoạch có 13 phiên nhưng bắt buộc chạy s12 đầu tiên để kiểm tra bảo mật trước, sau đó mới chạy các phiên chức năng",
   "Kế hoạch chỉ có một phiên duy nhất gộp tất cả test case lại để chạy một lần cho nhanh, không cần chia nhỏ"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: 13 phiên s00 đến s12, mỗi phiên 15 đến 30 test case, thứ tự gợi ý s00 rồi s01, s03, s05, s06, s08, còn lại. File KE-HOACH-TEST.md ghi rõ mã test case dạng TC-S05-01, TC-S05-02. s00 là phiên khởi động đã viết sẵn, phạm vi là mở toàn bộ trang khách, user, admin trên máy tính và điện thoại, kiểm tra không lỗi JS, không cuộn ngang, không file 404. Phải chạy đầu tiên vì nếu nền tảng còn lỗi tải trang thì các phiên sau kiểm tra nghiệp vụ sẽ báo sai hàng loạt, tốn công dò lại. Các phương án còn lại sai vì số phiên, số test case và thứ tự đều không khớp kế hoạch thật của nhóm."
 },
 {
  "id": "bv14-a03",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi: sau khi chạy một phiên kiểm thử, nhóm em thu được những file kết quả gì, nằm ở đâu và mỗi file phục vụ việc gì?",
  "options": [
   "Nhóm em thu được ket-qua/<phiên>.md tóm tắt kèm lỗi Console và file 404, ket-qua/<phiên>.tsv đúng các cột của tab Test case, ảnh minh chứng anh/<Mã TC>.jpg có dải chú thích mã TC cùng kết quả mong đợi và thực tế, ảnh lỗi có đuôi _loi.jpg, và ket-qua/TONG-HOP.xlsx gộp mọi phiên đã chạy gồm các tab Tổng quan, Test case, Lỗi phát hiện, Console và 404",
   "Nhóm em chỉ thu được một file log văn bản duy nhất ghi toàn bộ quá trình chạy, không có ảnh vì Playwright không hỗ trợ chụp màn hình",
   "Nhóm em thu được file Excel duy nhất do người chạy tự gõ tay lại kết quả, ảnh chụp phải tự bấm PrtSc rồi dán vào Word",
   "Nhóm em thu được file JSON thô của Playwright, phải mở bằng công cụ riêng của Playwright mới đọc được, không có bản tóm tắt cho người đọc"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng theo mục 3 của HUONG-DAN.md: màn hình in ĐẠT hoặc KHÔNG ĐẠT từng test case, ket-qua/<phiên>.md tóm tắt kèm lỗi Console và file 404, ket-qua/<phiên>.tsv đúng các cột của tab Test case, anh/<Mã TC>.jpg là ảnh minh chứng có dải chú thích mã TC, kết quả mong đợi và thực tế, ảnh lỗi có đuôi _loi.jpg, và ket-qua/TONG-HOP.xlsx gộp mọi phiên với các tab Tổng quan, Test case, Lỗi phát hiện, Console và 404. Cách làm này giúp mỗi kết quả đều truy vết được về đúng test case và có ảnh đối chiếu. Các phương án còn lại sai vì nhóm có ảnh minh chứng tự động, không gõ tay lại kết quả và không bắt người đọc phải mở công cụ riêng của Playwright."
 },
 {
  "id": "bv14-a04",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi: file apps-script.gs của nhóm em làm gì, vì sao lại dùng Google Apps Script làm server test thay vì viết một backend Node riêng để nhận kết quả?",
  "options": [
   "apps-script.gs là đoạn mã dán vào Google Sheet qua Tiện ích mở rộng rồi Apps Script, triển khai thành ứng dụng web nhận POST từ khung test và ghi vào tab Test case; nhóm chọn cách này vì không phải dựng server, không tốn tiền thuê host, kết quả hiện ngay trên Sheet cho cả nhóm cùng xem và bình luận, ảnh minh chứng được đẩy lên Drive và chèn thẳng vào ô",
   "apps-script.gs là file cấu hình Playwright dùng để chọn trình duyệt chạy test, không liên quan gì đến Google Sheet",
   "apps-script.gs là script chạy trên máy chủ Node của nhóm, nhận kết quả rồi ghi vào file Excel cục bộ chứ không dùng Google Sheet",
   "apps-script.gs chỉ dùng để tạo biểu đồ thống kê từ dữ liệu bán hàng của RoomCraft, không liên quan đến kiểm thử"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: apps-script.gs là mã Google Apps Script dán vào Google Sheet, triển khai thành ứng dụng web, nhận kết quả từ khung test và ghi vào tab Test case. Theo chú thích đầu file, mã TC đã có dòng thì chỉ cập nhật cột I đến O, giữ nguyên phần Kha viết; mã TC chưa có thì thêm dòng mới; ảnh gốc lưu vào thư mục Drive RoomCraft - Minh chung kiem thu, ảnh nhỏ chèn vào ô cột L, cột P là link mở ảnh gốc. Lý do chọn Apps Script: miễn phí, không phải dựng server, cả nhóm xem chung một Sheet, và có sẵn LockService để tránh ghi đè khi nhiều máy gửi cùng lúc. Các phương án còn lại sai vì file này không phải cấu hình Playwright, không ghi Excel cục bộ và không liên quan dữ liệu bán hàng."
 },
 {
  "id": "bv14-a05",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi: khi khung test gửi kết quả lên Google Sheet, nếu một mã TC đã có dòng sẵn thì apps-script.gs xử lý thế nào, và vì sao phải làm như vậy thay vì cứ append dòng mới?",
  "options": [
   "Nếu mã TC đã có dòng, script chỉ cập nhật cột I đến O gồm kết quả, trạng thái, minh chứng và giữ nguyên phần Kha viết ở các cột đầu; làm vậy để không phá nội dung mô tả test case do người viết kế hoạch soạn, tránh trùng dòng khi chạy lại nhiều lần và giữ được lịch sử cột mô tả ổn định",
   "Nếu mã TC đã có dòng, script vẫn append thêm một dòng mới bên dưới vì đơn giản nhất, chấp nhận Sheet có nhiều dòng trùng mã TC",
   "Nếu mã TC đã có dòng, script xóa cả dòng cũ rồi ghi lại từ đầu để đảm bảo dữ liệu mới nhất",
   "Nếu mã TC đã có dòng, script báo lỗi và dừng toàn bộ phiên chạy, buộc người chạy phải xóa tay dòng cũ trước"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: script dựng bảng viTri ánh xạ mã TC sang số dòng, nếu tìm thấy thì gọi setValues cho vùng từ cột 9 đến cột 15 tức cột I đến O, chỉ cập nhật kết quả, trạng thái, minh chứng; nếu chưa có thì appendRow dòng mới đầy đủ 15 cột. Cách này giữ nguyên phần mô tả test case do Kha viết ở các cột đầu, tránh sinh dòng trùng khi chạy lại cùng phiên nhiều lần, và vẫn tô màu ô trạng thái xanh cho Đạt, hồng cho Không đạt. Các phương án còn lại sai vì append tràn lan sẽ làm Sheet rối và mất đối chiếu, xóa cả dòng sẽ mất phần mô tả gốc, còn báo lỗi dừng phiên thì quá cứng nhắc và không cần thiết."
 },
 {
  "id": "bv14-a06",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi: ảnh minh chứng kiểm thử của nhóm em được xử lý và lưu ở đâu, cơ chế chèn ảnh vào Google Sheet hoạt động ra sao khi có lỗi xảy ra?",
  "options": [
   "Ảnh gốc được lưu vào thư mục Drive RoomCraft - Minh chung kiem thu, ảnh nhỏ chèn vào ô cột L bằng CellImage dạng base64, cột P là link mở ảnh gốc; nếu CellImage lỗi thì dự phòng dùng công thức IMAGE trỏ tới link thumbnail của Drive sau khi chia sẻ ai có link, và ảnh cũ cùng mã TC kể cả bản _loi bị đưa vào thùng rác trước khi ghi ảnh mới",
   "Ảnh minh chứng chỉ được lưu trên máy cá nhân người chạy test, không đưa lên Drive và không chèn vào Sheet vì sợ nặng file",
   "Ảnh minh chứng được nhúng toàn bộ vào một ô duy nhất dưới dạng chuỗi base64 rất dài, không tạo file trên Drive nên không mở xem gốc được",
   "Ảnh minh chứng được gửi qua email cho nhóm trưởng, nhóm trưởng tự tải về rồi chèn tay vào Sheet mỗi lần chạy"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng theo hàm ganAnh trong apps-script.gs: bỏ ảnh cũ cùng mã TC gồm cả bản _loi, tạo file mới trong thư mục Drive của tab, chèn ảnh nhỏ vào ô cột L bằng SpreadsheetApp.newCellImage với nguồn base64, đặt link Xem ảnh gốc ở cột P bằng rich text, chỉnh chiều cao dòng 160. Nếu CellImage lỗi thì dự phòng chia sẻ file ai có link và dùng công thức IMAGE với link thumbnail. Cách làm này vừa xem nhanh được trong Sheet vừa mở được ảnh gốc chất lượng cao. Các phương án còn lại sai vì nhóm có lưu Drive, không nhúng chuỗi base64 thô vào ô và không gửi email chèn tay."
 },
 {
  "id": "bv14-a07",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi: file cau-hinh.json trong thư mục tests/ dùng để làm gì, vì sao nó bị đưa vào .gitignore và nếu thiếu file này thì kết quả kiểm thử đi về đâu?",
  "options": [
   "cau-hinh.json chứa sheetWebAppUrl là URL ứng dụng web của Apps Script để khung test gửi kết quả lên Google Sheet; file bị gitignore vì mỗi máy có thể trỏ tới Sheet khác nhau và tránh lộ URL triển khai; nếu thiếu file này thì kết quả vẫn nằm trong ket-qua/ để dán tay, chỉ là không tự động gửi lên Sheet",
   "cau-hinh.json chứa danh sách tài khoản admin và mật khẩu để test đăng nhập, bắt buộc phải commit lên git để cả nhóm dùng chung",
   "cau-hinh.json chứa cấu hình cơ sở dữ liệu MySQL của website, thiếu file này thì website không chạy được",
   "cau-hinh.json chứa danh sách sản phẩm mẫu để nạp vào giỏ hàng khi test, thiếu file này thì không chạy được phiên s05"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng theo mục 2 của HUONG-DAN.md: tạo cau-hinh.json trong thư mục tests/ với nội dung chứa sheetWebAppUrl là URL ứng dụng web đã triển khai. File này nằm trong .gitignore cùng node_modules/, anh/, ket-qua*/ vì URL triển khai là thông tin riêng của từng lần deploy và mỗi máy có thể trỏ Sheet khác nhau. Không có file này thì kết quả vẫn nằm trong ket-qua/ để dán tay, chỉ mất phần tự động gửi Sheet. Các phương án còn lại sai vì file không chứa tài khoản admin, không chứa cấu hình MySQL và không chứa danh sách sản phẩm mẫu."
 },
 {
  "id": "bv14-a08",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi: nhóm em chạy kiểm thử trên nhiều trình duyệt và thiết bị bằng cách nào, kết quả được phân tách ra sao và biến QA_DOT dùng để làm gì?",
  "options": [
   "Nhóm em chạy node tools/chay-cau-hinh.js với tên cấu hình như iphone, android, edge, chrome, firefox, webkit, ipad, có thể thêm --song-song 2 và --phien s03,s04; kết quả nằm ở ket-qua/<đợt>/<cấu hình>/ với đợt đặt bằng biến QA_DOT ví dụ QA_DOT=d3, và biến QA_KHONG_GUI=1 để không gửi Sheet",
   "Nhóm em chỉ chạy được trên Chrome vì Playwright không hỗ trợ giả lập thiết bị di động, muốn test điện thoại phải mượn máy thật",
   "Nhóm em chạy tất cả cấu hình trong một lần duy nhất và ghi đè lên cùng một thư mục ket-qua/, không cần phân tách theo đợt",
   "Nhóm em dùng biến QA_DOT để chọn số lượng test case chạy trong một phiên, ví dụ QA_DOT=3 nghĩa là chỉ chạy 3 test case đầu"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng theo mục 4 của HUONG-DAN.md: lệnh node tools/chay-cau-hinh.js iphone --song-song 2 --phien s03,s04, các cấu hình gồm edge, chrome, firefox, webkit, iphone, android là Pixel 7, ipad. Kết quả nằm ở ket-qua/<đợt>/<cấu hình>/ và đặt đợt bằng biến QA_DOT như QA_DOT=d3, thêm QA_KHONG_GUI=1 để không gửi Sheet. Cách phân tách theo đợt và cấu hình giúp so sánh kết quả giữa các lần chạy và giữa các thiết bị mà không ghi đè lẫn nhau. Các phương án còn lại sai vì Playwright có giả lập thiết bị, nhóm có phân tách thư mục, và QA_DOT là tên đợt chứ không phải số test case."
 },
 {
  "id": "bv14-a09",
  "chapter": 13,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi: khung test của nhóm em mặc định chặn kết nối Internet, vậy mục đích là gì, và khi một phiên cần mạng thật như phiên chatbot AI thì xử lý ra sao?",
  "options": [
   "Mặc định chặn Internet để đồng thời kiểm tra website chạy được khi mất mạng, tức font, icon, 3D và biểu đồ vẫn hiển thị nhờ tài nguyên cục bộ; phiên nào cần mạng thật thì đặt choMang: true trong cấu hình phiên, ví dụ phiên s09 phần AI chỉ test khi đã chạy node server.js và bật choMang",
   "Mặc định chặn Internet để tiết kiệm dung lượng 4G cho máy chạy test, không liên quan đến mục đích kiểm thử chức năng",
   "Mặc định chặn Internet vì Playwright không thể chạy khi có mạng, buộc phải ngắt mạng thì test mới ổn định",
   "Mặc định chặn Internet để tránh website gọi nhầm API thật của chatbot và tốn tiền, nhưng nhóm không có cách nào bật lại mạng cho từng phiên"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng theo mục 6 của HUONG-DAN.md: mặc định chặn kết nối Internet để đồng thời kiểm tra web chạy được khi mất mạng, phiên cần mạng đặt choMang: true. Điều này khớp với phiên s10 kiểm tra chạy khi mất mạng, font, icon, 3D, biểu đồ vẫn hiện, và phiên s09 phần AI chỉ test khi đã chạy node server.js và đặt choMang: true. Lý do là website RoomCraft tự host font, icon và model nên phải chứng minh không phụ thuộc CDN khi mất mạng. Các phương án còn lại sai vì mục đích không phải tiết kiệm 4G, Playwright vẫn chạy được khi có mạng, và nhóm có cơ chế bật mạng theo phiên bằng choMang."
 },
 {
  "id": "bv14-a10",
  "chapter": 13,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy hỏi: giả sử có nhiều máy trong nhóm cùng chạy kiểm thử và cùng gửi kết quả lên một Google Sheet một lúc, apps-script.gs chống ghi đè chéo bằng cách nào, và nếu hai máy cùng ghi một mã TC thì chuyện gì xảy ra?",
  "options": [
   "Script dùng LockService.getScriptLock và waitLock 30000 để chỉ một lần ghi được chạy tại một thời điểm, các lần gửi khác phải chờ; nếu hai máy cùng ghi một mã TC thì lần ghi sau sẽ ghi đè cột kết quả của lần trước vì cùng trỏ vào một dòng, nên nhóm quy ước mỗi người chạy phiên khác nhau hoặc dùng QA_DOT để tách đợt",
   "Script không có cơ chế khóa, hai máy ghi cùng lúc sẽ tạo ra hai dòng trùng mã TC và cả hai đều được giữ lại",
   "Script dùng LockService nhưng chỉ khóa được trong cùng một máy, hai máy khác nhau vẫn ghi đè nhau bất kể thời điểm",
   "Script tự động tạo một tab mới cho mỗi lần gửi để tránh xung đột, nên Sheet sẽ có rất nhiều tab trùng nội dung"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: doPost gọi LockService.getScriptLock rồi waitLock 30000 trong khối try, cuối cùng releaseLock trong finally, nên tại một thời điểm chỉ một lần ghi được thực thi. Tuy vậy khóa chỉ chống ghi chồng về mặt thời gian, không giải quyết xung đột nội dung: nếu hai máy cùng ghi một mã TC thì lần sau ghi đè cột I đến O của cùng dòng đó. Vì vậy nhóm quy ước chia phiên cho từng người và dùng QA_DOT để tách đợt, kết quả nằm ở ket-qua/<đợt>/<cấu hình>/ riêng. Các phương án còn lại sai vì script có khóa, khóa có tác dụng toàn cục chứ không chỉ trong một máy, và script không tự tạo tab mới cho mỗi lần gửi."
 },
 {
  "id": "bv14-a11",
  "chapter": 13,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy hỏi: trong kế hoạch có bước chốt kết quả với DUYET-LOI.md và tools/chap-nhan.js, em giải thích quy trình này giải quyết vấn đề gì và vì sao không đơn giản là sửa hết mọi test cho đạt?",
  "options": [
   "Mọi test KHÔNG ĐẠT được thành viên xác minh bằng cách đọc mã nguồn và tái hiện rồi ghi kết luận, mức độ, ghi chú vào DUYET-LOI.md; tools/chap-nhan.js khai báo các giới hạn đã biết hoặc rủi ro được chấp nhận, dữ liệu gốc vẫn giữ Không đạt nhưng khi tổng hợp không tính vào mẫu số; làm vậy để báo cáo trung thực, không che lỗi, đồng thời phân biệt lỗi thật với giới hạn đã biết của phạm vi đồ án",
   "Quy trình này để tự động sửa mã nguồn cho test đạt, nhóm chạy tools/chap-nhan.js là script sẽ sửa code và chạy lại cho tới khi tất cả ĐẠT",
   "Quy trình này để xóa các test case không đạt khỏi kế hoạch, nhờ vậy báo cáo cuối kỳ luôn đạt 100 phần trăm",
   "Quy trình này chỉ để trang trí báo cáo, thực tế nhóm không dùng DUYET-LOI.md và chap-nhan.js khi tổng hợp kết quả"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng theo mục 5 của HUONG-DAN.md: mọi test KHÔNG ĐẠT được thành viên xác minh bằng cách đọc mã nguồn, tái hiện, ghi vào ket-qua/DUYET-LOI.md theo các cột Mã TC, Kết luận, Mức độ, Ghi chú. Sau đó node tools/chot-ket-qua.js --gui áp kết luận đã duyệt, xuất TONG-HOP.xlsx và gửi Sheet. Test thuộc giới hạn đã biết hoặc rủi ro được chấp nhận khai trong tools/chap-nhan.js, dữ liệu gốc vẫn giữ Không đạt nhưng khi tổng hợp không tính vào mẫu số. Cách này giữ báo cáo trung thực, phân biệt lỗi thật với giới hạn phạm vi như quyền admin chỉ ẩn UI phía client. Các phương án còn lại sai vì công cụ không sửa code, không xóa test case và nhóm thực sự dùng hai file này."
 },
 {
  "id": "bv14-a12",
  "chapter": 13,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy hỏi: nhóm em triển khai website lên GitHub Pages như thế nào, vì sao chọn nhánh main ở root mà không dùng thư mục docs hay nhánh gh-pages, và file .nojekyll có tác dụng gì?",
  "options": [
   "Nhóm em bật GitHub Pages nguồn từ nhánh main thư mục root vì index.html ở root redirect sang scripts/index.html, không cần build; chọn root cho đơn giản, đường dẫn khớp với cấu trúc thư mục thật khi chạy Live Server; file .nojekyll để GitHub Pages bỏ qua xử lý Jekyll, nhờ vậy các thư mục và file bắt đầu bằng gạch dưới hoặc có ký tự đặc biệt vẫn được phục vụ đúng",
   "Nhóm em dùng nhánh gh-pages và thư mục docs vì GitHub Pages bắt buộc phải đặt trong docs, không cho phép root",
   "Nhóm em dùng GitHub Actions để build React rồi deploy thư mục dist, file .nojekyll dùng để tắt build tool",
   "Nhóm em deploy lên Vercel chứ không dùng GitHub Pages, file .nojekyll là file cấu hình của Vercel"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: theo context, bản chạy thử ở https://khado218.github.io/phat-trien-web-kinh-doanh-nhom7/ dùng GitHub Pages branch main root, không build. index.html ở root redirect sang scripts/index.html, toàn bộ trang nằm trong scripts/. Chọn root vì đường dẫn khớp cấu trúc thật, không phải cấu hình base path như khi build. File .nojekyll báo GitHub Pages bỏ qua Jekyll, tránh việc Jekyll bỏ qua các file hoặc thư mục bắt đầu bằng gạch dưới. Các phương án còn lại sai vì GitHub Pages cho phép root, nhóm không dùng React hay GitHub Actions build, và không deploy Vercel."
 },
 {
  "id": "bv14-a13",
  "chapter": 13,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy hỏi: file assets/products.zip nặng khoảng 426MB không được đưa lên git, vậy website lấy ảnh sản phẩm từ đâu khi chạy trên GitHub Pages, và quy trình cập nhật ảnh cho thành viên khác trong nhóm diễn ra thế nào?",
  "options": [
   "products.zip chứa ảnh gốc dung lượng lớn nên không đưa lên git để tránh vượt giới hạn repo; website dùng ảnh đã tối ưu nằm trực tiếp trong assets/ và được commit bình thường, còn zip lưu ngoài git và chia sẻ qua kênh riêng của nhóm; khi cần thêm ảnh mới thì giải nén, tối ưu, copy ảnh cần dùng vào assets/ rồi commit phần ảnh đó",
   "products.zip được đưa lên git bằng Git LFS nên website tải ảnh trực tiếp từ trong zip khi chạy trên GitHub Pages",
   "products.zip không lên git nên website không có ảnh sản phẩm nào, các ô ảnh hiện placeholder màu xám khi chạy trên GitHub Pages",
   "products.zip được đưa lên Google Drive và website gọi link Drive trực tiếp trong thẻ img để hiển thị ảnh sản phẩm"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: products.zip khoảng 426MB là ảnh gốc dung lượng lớn, không đưa lên git để tránh vượt giới hạn repo và làm chậm clone. Website dùng ảnh đã tối ưu nằm trực tiếp trong assets/ và được commit, nên trên GitHub Pages ảnh vẫn hiển thị bình thường. Khi cập nhật ảnh, thành viên giải nén zip, tối ưu ảnh cần dùng, copy vào assets/ rồi commit phần ảnh đó; zip gốc chia sẻ qua kênh riêng. Các phương án còn lại sai vì nhóm không dùng Git LFS cho zip, website vẫn có ảnh, và không gọi link Drive trực tiếp trong thẻ img vì chậm và dễ hỏng."
 },
 {
  "id": "bv14-a14",
  "chapter": 13,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy hỏi: nếu một thành viên vừa merge code mới lên main làm hỏng trang giỏ hàng, quy trình kiểm thử và cập nhật của nhóm em sẽ phát hiện và xử lý ra sao, theo đúng các bước trong tài liệu tests/?",
  "options": [
   "Sau khi pull code mới, người chạy luôn chạy node phien/s00-khoi-dong.js trước để quét toàn bộ trang phát hiện lỗi JS, 404 và cuộn ngang, rồi chạy phiên liên quan như s05-gio-thanh-toan.js; nếu có test KHÔNG ĐẠT thì thành viên xác minh, ghi vào DUYET-LOI.md, chốt bằng tools/chot-ket-qua.js --gui để xuất TONG-HOP.xlsx và gửi Sheet, từ đó báo lại người merge để sửa",
   "Nhóm em không cần chạy lại kiểm thử sau khi merge vì tin tưởng code đã được review trên pull request là đủ",
   "Nhóm em chờ đến cuối kỳ mới chạy toàn bộ kiểm thử một lần, lỗi phát hiện lúc đó sẽ sửa sau khi bảo vệ",
   "Nhóm em xóa các test case liên quan đến giỏ hàng khỏi kế hoạch để báo cáo không còn lỗi"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng theo HUONG-DAN.md mục 3 và 5: sau khi pull code mới luôn chạy s00-khoi-dong.js đầu tiên, sau đó chạy các phiên liên quan như s05-gio-thanh-toan.js. Kết quả in ĐẠT hoặc KHÔNG ĐẠT, ghi ket-qua/<phiên>.md, .tsv và ảnh minh chứng. Mọi test KHÔNG ĐẠT được thành viên xác minh, ghi vào DUYET-LOI.md, rồi node tools/chot-ket-qua.js --gui áp kết luận, xuất TONG-HOP.xlsx và gửi Sheet. Quy trình này phát hiện hồi quy sớm và có bằng chứng để báo người merge sửa. Các phương án còn lại sai vì nhóm chạy lại sau merge, không dồn đến cuối kỳ và không xóa test case để che lỗi."
 },
 {
  "id": "bv14-a15",
  "chapter": 13,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy hỏi: kế hoạch kiểm thử có phiên s12 kiểm tra bảo mật phân quyền và XSS, em giải thích vì sao với kiến trúc tĩnh của RoomCraft những test này lại quan trọng, và nhóm em chấp nhận rủi ro gì ở phần này?",
  "options": [
   "Vì quyền admin phía client chỉ ẩn UI bằng kiểm tra JavaScript, dữ liệu đơn hàng và đánh giá nằm trong file JSON tĩnh nên kẻ xấu có thể sửa rc_session hoặc chèn XSS qua họ tên, địa chỉ, tên sản phẩm; phiên s12 kiểm tra giả mạo session thành Admin, user thường mở trang admin, XSS lưu trữ, khả năng tiếp cận và toàn vẹn dữ liệu; nhóm chấp nhận rủi ro này vì phạm vi môn học và deploy tĩnh miễn phí, và đã ghi rõ hướng khắc phục là cần backend xác thực thật",
   "Vì website không có phần đăng nhập nên không có rủi ro bảo mật nào, phiên s12 chỉ kiểm tra giao diện cho đủ bộ",
   "Vì nhóm đã dùng backend Node xác thực thật cho mọi trang admin nên phiên s12 chỉ kiểm tra cho có, không có rủi ro thực tế",
   "Vì GitHub Pages tự động chặn mọi cuộc tấn công XSS và giả mạo session nên nhóm không cần quan tâm đến phần này"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: phiên s12 kiểm tra bảo mật phân quyền gồm giả mạo hoặc sửa rc_session thành Admin, user thường và khách mở trang admin, session trỏ user không tồn tại, tài khoản bị khóa; kiểm XSS lưu trữ qua họ tên, địa chỉ, tên người nhận, tên sản phẩm; kiểm khả năng tiếp cận bằng axe-core, hiệu năng, SEO, toàn vẹn dữ liệu và link hỏng. Những test này quan trọng vì quyền admin phía client chỉ ẩn UI, dữ liệu JSON tĩnh có thể bị sửa. Nhóm chấp nhận rủi ro vì phạm vi môn học và deploy tĩnh miễn phí, đã ghi hướng khắc phục là cần backend xác thực. Các phương án còn lại sai vì website có đăng nhập, không có backend xác thực thật, và GitHub Pages không tự chặn XSS."
 },
 {
  "id": "bv14-a16",
  "chapter": 13,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy hỏi: nếu thầy yêu cầu nhóm em chứng minh website chạy được khi mất mạng và trên điện thoại thật, nhóm em sẽ đưa ra bằng chứng nào từ bộ kiểm thử hiện có, và còn thiếu gì cần bổ sung?",
  "options": [
   "Nhóm em đưa kết quả phiên s10 chạy ở các độ rộng 390, 768, 1440px không cuộn ngang, chạy khi mất mạng với font, icon, 3D, biểu đồ vẫn hiện, kèm ảnh minh chứng trong anh/ và file ket-qua/<phiên>.md; với điện thoại thật nhóm dùng checklist tools/checklist-may-that.md và ảnh chụp trên máy thật, còn thiếu là chưa tự động hóa hoàn toàn phần máy thật nên vẫn phải làm tay theo checklist",
   "Nhóm em chỉ có ảnh chụp màn hình desktop, không có bằng chứng nào cho điện thoại và mất mạng vì Playwright không giả lập được",
   "Nhóm em đưa ra lời giải thích miệng là web chạy được khi mất mạng, không cần bằng chứng vì thầy có thể tự mở thử",
   "Nhóm em đưa file products.zip 426MB làm bằng chứng vì trong đó có ảnh chụp màn hình điện thoại"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng: phiên s10 kiểm tra phi chức năng gồm mọi trang ở 390, 768, 1440px không cuộn ngang, chạy khi mất mạng với font, icon, 3D, biểu đồ vẫn hiện, ảnh và model 404, lỗi Console, chặn đúng trang cần đăng nhập, tăng DATA_VERSION vẫn giữ tài khoản, thời gian mở trang. Bằng chứng là ảnh trong anh/<Mã TC>.jpg có dải chú thích và file ket-qua/<phiên>.md. Với điện thoại thật, nhóm dùng tools/checklist-may-that.md và ảnh chụp trên máy thật. Điểm còn thiếu là phần máy thật chưa tự động hóa hoàn toàn, vẫn phải làm tay theo checklist. Các phương án còn lại sai vì Playwright giả lập được thiết bị, nhóm có bằng chứng ảnh, và products.zip không phải bằng chứng kiểm thử."
 },
 {
  "id": "bv14-a17",
  "chapter": 13,
  "difficulty": 2,
  "type": "multiple",
  "question": "Thầy hỏi: trong bộ kiểm thử của nhóm em, những yếu tố nào sau đây là đúng khi nói về cách khung test vận hành và cách kết quả được tổng hợp? (chọn nhiều đáp án)",
  "options": [
   "Khung test tự mở web ở cổng 5599 nên không cần Live Server",
   "Mỗi lần chạy dùng dữ liệu sạch từ data/json, không ảnh hưởng dữ liệu trên trình duyệt cá nhân",
   "Kết quả tổng hợp được xuất ra ket-qua/TONG-HOP.xlsx gồm các tab Tổng quan, Test case, Lỗi phát hiện, Console và 404",
   "Khung test bắt buộc phải có Live Server chạy trước thì mới mở được web"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ba đáp án đúng đầu tiên: khung test tự mở web ở cổng 5599 nên không cần Live Server; mỗi lần chạy dùng dữ liệu sạch từ data/json, không ảnh hưởng dữ liệu trên trình duyệt cá nhân; kết quả tổng hợp xuất ra ket-qua/TONG-HOP.xlsx gồm các tab Tổng quan, Test case, Lỗi phát hiện, Console và 404. Đây là các ghi chú ở mục 3 và mục 6 của HUONG-DAN.md. Phương án còn lại sai vì tài liệu ghi rõ khung test tự mở web ở cổng 5599, không cần Live Server. Việc dùng dữ liệu sạch giúp kết quả lặp lại được giữa các lần chạy và giữa các thành viên, còn file TONG-HOP.xlsx là nơi chốt số liệu để đưa vào báo cáo."
 },
 {
  "id": "bv14-a18",
  "chapter": 13,
  "difficulty": 3,
  "type": "multiple",
  "question": "Thầy hỏi: khi nhóm em chốt kết quả kiểm thử để đưa vào báo cáo, những bước nào sau đây nằm trong quy trình chốt kết quả theo tài liệu tests/? (chọn nhiều đáp án)",
  "options": [
   "Mọi test KHÔNG ĐẠT được thành viên xác minh và ghi vào ket-qua/DUYET-LOI.md theo các cột Mã TC, Kết luận, Mức độ, Ghi chú",
   "Chạy node tools/chot-ket-qua.js --gui để áp kết luận đã duyệt, xuất TONG-HOP.xlsx và gửi lên Google Sheet",
   "Test thuộc giới hạn đã biết hoặc rủi ro được chấp nhận khai trong tools/chap-nhan.js, dữ liệu gốc giữ Không đạt nhưng khi tổng hợp không tính vào mẫu số",
   "Xóa khỏi kế hoạch mọi test case không đạt để báo cáo luôn đạt 100 phần trăm"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ba đáp án đúng đầu tiên nằm đúng trong mục 5 của HUONG-DAN.md: mọi test KHÔNG ĐẠT được thành viên xác minh, ghi vào ket-qua/DUYET-LOI.md với các cột Mã TC, Kết luận, Mức độ, Ghi chú; chạy node tools/chot-ket-qua.js --gui để áp kết luận đã duyệt, xuất TONG-HOP.xlsx và gửi lên Google Sheet; test thuộc giới hạn đã biết hoặc rủi ro được chấp nhận khai trong tools/chap-nhan.js, dữ liệu gốc giữ Không đạt nhưng khi tổng hợp không tính vào mẫu số. Phương án xóa test case sai vì đó là che lỗi, trái với tinh thần báo cáo trung thực của nhóm. Cách làm đúng giúp phân biệt lỗi thật với giới hạn phạm vi đồ án và vẫn giữ nguyên bằng chứng gốc để đối chiếu khi thầy hỏi lại."
 },
 {
  "id": "bv14-a19",
  "chapter": 13,
  "difficulty": 2,
  "type": "multiple",
  "question": "Thầy hỏi: khi triển khai RoomCraft lên GitHub Pages, những điểm nào sau đây đúng với cách nhóm em đang làm? (chọn nhiều đáp án)",
  "options": [
   "Nguồn Pages là nhánh main thư mục root, index.html ở root redirect sang scripts/index.html",
   "File .nojekyll được đặt để GitHub Pages bỏ qua xử lý Jekyll",
   "Website không cần bước build vì là HTML, CSS, JS thuần chạy trực tiếp",
   "Website phải chạy npm run build trước khi push lên main thì GitHub Pages mới hiển thị đúng"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ba đáp án đúng đầu tiên: nguồn Pages là nhánh main thư mục root với index.html redirect sang scripts/index.html; file .nojekyll để GitHub Pages bỏ qua Jekyll; website không cần build vì là HTML, CSS, JS thuần. Đây là cách nhóm đang làm, khớp với context pack và mục triển khai. Phương án npm run build sai vì dự án không dùng build tool cho site, đẩy code lên main là Pages phục vụ trực tiếp. Việc không build giúp đường dẫn khớp cấu trúc thư mục thật khi chạy Live Server, còn .nojekyll tránh Jekyll bỏ qua các file hoặc thư mục bắt đầu bằng gạch dưới."
 },
 {
  "id": "bv14-a20",
  "chapter": 13,
  "difficulty": 3,
  "type": "multiple",
  "question": "Thầy hỏi: về việc đưa ảnh và dữ liệu lên git trong dự án RoomCraft, những phát biểu nào sau đây đúng với cách nhóm em xử lý? (chọn nhiều đáp án)",
  "options": [
   "assets/products.zip khoảng 426MB không đưa lên git để tránh vượt giới hạn repo",
   "Website dùng ảnh đã tối ưu nằm trực tiếp trong assets/ và được commit bình thường",
   "Thư mục tests/ có node_modules/, anh/, ket-qua*/ và cau-hinh.json nằm trong .gitignore",
   "Toàn bộ ảnh gốc trong products.zip được commit lên git để đảm bảo website có đủ ảnh"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ba đáp án đúng đầu tiên: products.zip khoảng 426MB không đưa lên git; website dùng ảnh đã tối ưu nằm trực tiếp trong assets/ và được commit; tests/ có node_modules/, anh/, ket-qua*/ và cau-hinh.json trong .gitignore. Điều này khớp với context pack và mục đầu của HUONG-DAN.md ghi rõ không đưa lên GitHub các mục đó. Phương án commit toàn bộ ảnh gốc sai vì sẽ vượt giới hạn repo và làm chậm clone, trong khi website chỉ cần ảnh đã tối ưu. Cách tách này giúp repo nhẹ, clone nhanh, và vẫn đủ ảnh để GitHub Pages hiển thị đúng."
 }
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_BV14; }
