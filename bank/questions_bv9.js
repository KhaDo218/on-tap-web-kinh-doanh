// Ngan hang on bao ve RoomCraft - bv9.js (28 cau) - da ap audit
const QUESTIONS_BV9 = [
 {
  "id": "bv9-a01",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Thầy sẽ hỏi: tìm kiếm không dấu trong RoomCraft hoạt động theo cơ chế nào, em trình bày từ lúc khách gõ chữ có dấu tới lúc ra danh sách sản phẩm?",
  "options": [
   "Hàm boDau dùng normalize NFD rồi xoá các ký tự tổ hợp, thay đ thành d, sau đó tachTu cắt chuỗi thành mảng từ và khopTu so từng từ với tên, thương hiệu, chất liệu, màu của sản phẩm, cuối cùng diemTimKiem cho điểm 0 tới 4 để lọc và xếp hạng",
   "Hệ thống dùng thư viện so khớp mờ bên ngoài tải từ CDN để so sánh chuỗi gốc có dấu với tên sản phẩm, không cần bỏ dấu",
   "Hệ thống lưu sẵn một cột tên không dấu trong products.json do script Python tạo từ trước, frontend chỉ so khớp chuỗi thô",
   "Hệ thống chuyển toàn bộ từ khoá và tên sản phẩm sang chữ hoa rồi so khớp tuyệt đối, không xử lý dấu tiếng Việt"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là luồng thật trong catalog-filter.js. Hàm boDau nhận chuỗi, đưa về chữ thường, gọi normalize với tham số NFD để tách nguyên âm có dấu thành ký tự gốc cộng dấu tổ hợp, rồi replace bằng biểu thức xoá dải ký tự tổ hợp, cuối cùng thay đ thành d vì đ không tách được bằng NFD. Hàm tachTu gọi boDau rồi split theo nhóm ký tự không phải chữ và số, bỏ phần tử rỗng. Hàm khopTu so từng từ khoá với mảng từ của sản phẩm: trùng hẳn thì khớp, hoặc nếu từ khoá dài từ 4 ký tự trở lên thì khớp phần đầu từ. Hàm diemTimKiem chỉ tìm trong tên, thương hiệu, chất liệu, màu và nhóm chất liệu, nhóm màu, cố tình không tìm trong mô tả để tránh nhiễu. Điểm 4 khi tên bắt đầu bằng cụm từ khoá, 3 khi tên chứa nguyên cụm, 2 khi tên có đủ các từ, 1 khi chỉ khớp trường phụ, 0 là loại. Các phương án còn lại sai vì dự án không dùng thư viện ngoài, không có cột tên không dấu dựng sẵn, và không so khớp tuyệt đối chữ hoa."
 },
 {
  "id": "bv9-a02",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi vì sao nhóm chọn normalize NFD cộng xoá ký tự tổ hợp thay vì dùng NFC hay so sánh chuỗi có dấu trực tiếp, em giải thích lý do kỹ thuật và hệ quả nếu làm khác?",
  "options": [
   "NFD tách nguyên âm thành ký tự gốc cộng dấu tổ hợp nên chỉ cần xoá dải dấu tổ hợp là ra chữ không dấu, còn NFC giữ nguyên khối ký tự có dấu nên không xoá dấu được, và so sánh có dấu trực tiếp sẽ trượt khi khách gõ không dấu",
   "NFD cho chuỗi ngắn hơn nên tiết kiệm bộ nhớ khi lưu vào localStorage, đó là lý do duy nhất nhóm chọn",
   "NFC là chuẩn mới hơn nên nhóm chọn NFD để tương thích với trình duyệt cũ, không liên quan tới việc bỏ dấu",
   "Cả hai chuẩn cho kết quả giống nhau khi xoá dấu, nhóm chọn NFD chỉ vì thói quen viết code"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là lý do NFD tách rời dấu. Trong Unicode, cùng một chữ có dấu có thể biểu diễn theo hai dạng: dựng sẵn một ký tự (NFC) hoặc ký tự gốc cộng dấu tổ hợp (NFD). Nếu dùng NFC, chữ ế là một ký tự duy nhất, biểu thức xoá dải tổ hợp không bắt được nên chuỗi vẫn còn dấu. Khi gọi normalize NFD, chữ ế tách thành e cộng dấu mũ cộng dấu sắc, hai dấu này nằm trong dải ký tự tổ hợp nên replace xoá sạch, còn lại e. Riêng đ không tách được bằng NFD vì nó là ký tự độc lập, nên nhóm phải thay thủ công đ thành d. Nếu so sánh chuỗi có dấu trực tiếp thì khách gõ ghe bành sẽ không khớp ghế bành, trải nghiệm rất kém vì đa số người dùng gõ nhanh không dấu. Phương án nói tiết kiệm bộ nhớ sai vì NFD thực ra dài hơn NFC, còn phương án nói NFC mới hơn cũng sai vì cả hai là hai dạng chuẩn hoá ngang hàng, không cái nào thay cái nào."
 },
 {
  "id": "bv9-a03",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi: hàm khopTu quy định từ khoá dài từ 4 ký tự trở lên mới được khớp phần đầu từ, vì sao nhóm đặt ngưỡng đó và nếu bỏ ngưỡng thì chuyện gì xảy ra?",
  "options": [
   "Ngưỡng 4 ký tự để từ ngắn như ban không khớp bảng hay bạn, tránh kết quả rác, còn từ dài như sofa vẫn khớp sofas; nếu bỏ ngưỡng thì từ 2 tới 3 ký tự sẽ khớp quá rộng và làm nhiễu danh sách",
   "Ngưỡng 4 ký tự là do giới hạn của hàm normalize NFD, không đặt thì trình duyệt báo lỗi",
   "Ngưỡng 4 ký tự để tiết kiệm thời gian xử lý vòng lặp, không liên quan tới độ chính xác kết quả",
   "Ngưỡng 4 ký tự là quy ước của tiếng Việt về âm tiết, nhóm lấy từ sách giáo khoa ngữ văn"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là chống nhiễu kết quả. Hàm khopTu duyệt mảng từ của sản phẩm, nếu trùng hẳn thì khớp ngay, nếu từ khoá dài từ 4 ký tự trở lên thì kiểm tra từ sản phẩm có bắt đầu bằng từ khoá không. Lý do: tiếng Việt có nhiều từ ngắn 2 tới 3 ký tự mà tiền tố của nó xuất hiện trong rất nhiều từ khác, ví dụ ban là tiền tố của bảng, bạn, bán, bàn; nếu cho khớp tiền tố thì gõ ban sẽ ra cả bảng lẫn bạn, sai ý người dùng. Với từ dài như sofa, ghế, bàn trà thì khớp tiền tố lại hữu ích vì bắt được số nhiều hoặc biến thể như sofas, ghế đơn, ghế bành. Nhóm chọn 4 vì đó là độ dài đủ để tiền tố có ý nghĩa phân biệt. Nếu bỏ ngưỡng, danh sách kết quả sẽ phình to và khách phải tự lọc lại, trải nghiệm tệ hơn nhiều so với việc gõ đủ từ. Các phương án còn lại sai vì normalize không giới hạn độ dài, vòng lặp rất nhẹ, và đây là quyết định kỹ thuật chứ không phải quy ước ngữ văn."
 },
 {
  "id": "bv9-a04",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi: vì sao diemTimKiem chỉ tìm trong tên, thương hiệu, chất liệu, màu mà không tìm trong mô tả sản phẩm, em lấy ví dụ cụ thể trong dữ liệu RoomCraft để chứng minh?",
  "options": [
   "Vì mô tả dài và nhắc nhiều thứ phụ, tìm trong đó sẽ khiến gõ bàn trà ra khăn trải bàn hay gõ ghế ra bàn ăn có nhắc tới ghế, nên nhóm giới hạn trường tìm để kết quả đúng ý người dùng",
   "Vì mô tả sản phẩm không được lưu trong products.json nên không thể tìm, nhóm buộc phải bỏ qua",
   "Vì tìm trong mô tả làm file products.json nặng thêm vài chục MB, vượt giới hạn GitHub Pages",
   "Vì mô tả viết bằng tiếng Anh còn từ khoá khách gõ bằng tiếng Việt nên không bao giờ khớp"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là tránh nhiễu ngữ nghĩa. Trong products.json, trường mô tả thường dài, kể công dụng, chất liệu, cách bày trí, đôi khi nhắc tới nhiều món khác trong phòng. Nếu đưa mô tả vào diemTimKiem, khách gõ bàn trà có thể nhận về khăn trải bàn vì mô tả khăn ghi phù hợp bàn trà, hoặc gõ ghế lại nhận về bàn ăn vì mô tả bàn ghi kèm bốn ghế. Nhóm quyết định chỉ tìm trong tên, thương hiệu, chất liệu, màu, cộng thêm nhóm chất liệu và nhóm màu đã chuẩn hoá, vì đây là các trường mô tả trực tiếp bản thân sản phẩm. Cách này đánh đổi một chút độ phủ, có món liên quan trong mô tả sẽ không lên, nhưng đổi lại độ chính xác cao hơn, đúng tinh thần thà thiếu còn hơn thừa. Các phương án còn lại sai vì mô tả có trong products.json, việc tìm không làm nặng file, và mô tả trong dữ liệu đã được Việt hoá chứ không thuần tiếng Anh."
 },
 {
  "id": "bv9-a05",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Thầy hỏi: bộ lọc nhiều tiêu chí đồng thời trong catalog-filter.js kết hợp các điều kiện theo kiểu gì, giữa các nhóm khác nhau và giữa các lựa chọn trong cùng một nhóm?",
  "options": [
   "Giữa các nhóm khác nhau là AND, trong cùng một nhóm nhiều lựa chọn là OR, ví dụ chất liệu Gỗ hoặc Da kết hợp với màu Đen và giá dưới 1 triệu phải thoả tất cả nhóm",
   "Tất cả điều kiện đều là OR, chỉ cần khớp một tiêu chí bất kỳ là sản phẩm lọt vào danh sách",
   "Tất cả điều kiện đều là AND kể cả trong cùng nhóm, chọn hai chất liệu thì sản phẩm phải vừa là Gỗ vừa là Da",
   "Hệ thống dùng điểm số cộng dồn, sản phẩm khớp càng nhiều tiêu chí điểm càng cao và chỉ lấy các món trên ngưỡng"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là AND giữa nhóm, OR trong nhóm. Trong filterProductList, mỗi tiêu chí được kiểm tra bằng một câu lệnh continue độc lập: sai giá thì bỏ, sai danh mục thì bỏ, chất liệu không nằm trong mảng đã chọn thì bỏ, màu không nằm trong mảng thì bỏ, thương hiệu khác thì bỏ, hết hàng khi bật chỉ còn hàng thì bỏ, từ khoá không khớp thì bỏ. Vì mọi điều kiện đều phải vượt qua nên giữa các nhóm là AND. Với mảng chất liệu và mảng màu, code dùng indexOf trên mảng lựa chọn, nghĩa là chỉ cần sản phẩm thuộc một trong các giá trị đã tick là qua, tức OR trong nhóm. Ví dụ khách tick Gỗ và Da, chọn màu Đen, chọn giá dưới 1 triệu thì kết quả là món thoả giá dưới 1 triệu, màu Đen, và chất liệu là Gỗ hoặc Da. Cách này khớp thói quen mua sắm: trong cùng một thuộc tính khách muốn xem nhiều lựa chọn, còn giữa các thuộc tính thì phải đồng thời đúng. Các phương án còn lại sai vì không phản ánh code thật."
 },
 {
  "id": "bv9-a06",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi: bộ lọc chung đếm số món cho từng lựa chọn bằng hàm demTheoGia và demTheoTruong, vì sao phải đếm và vì sao lựa chọn có 0 món lại bị ẩn khỏi khung lọc?",
  "options": [
   "Đếm để hiện số món bên cạnh mỗi lựa chọn giúp khách biết trước lọc ra bao nhiêu, và ẩn lựa chọn 0 món để khách không bấm vào một ô chắc chắn ra danh sách rỗng",
   "Đếm để tính tổng doanh thu dự kiến của từng nhóm hàng, phục vụ báo cáo admin",
   "Đếm để sắp xếp thứ tự các lựa chọn theo số lượng giảm dần, không liên quan tới việc ẩn",
   "Đếm là yêu cầu bắt buộc của chuẩn HTML cho thẻ select, không đếm thì select không hoạt động"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là cải thiện trải nghiệm lọc. Khi renderFilterPanel vẽ khung lọc, với mỗi khoảng giá nó gọi demTheoGia trên danh sách gốc của trang, với mỗi nhóm chất liệu và nhóm màu nó gọi demTheoTruong, rồi in số đếm vào thẻ em có class filter-count. Nhờ vậy khách thấy ngay dưới 1 triệu có bao nhiêu món, chất liệu Gỗ có bao nhiêu món, màu Đen có bao nhiêu món, giúp quyết định có nên tick hay không. Nếu số đếm bằng 0 thì code bỏ qua không vẽ lựa chọn đó, vì tick vào chắc chắn ra danh sách rỗng, gây ức chế. Lưu ý số đếm tính trên danh sách gốc chứ không phải danh sách đã lọc, nên nó là con số tham khảo toàn cục, không thay đổi theo từng bước lọc. Các phương án còn lại sai vì đếm không phục vụ doanh thu, không dùng để sắp xếp, và select vẫn chạy bình thường khi không có số đếm."
 },
 {
  "id": "bv9-a07",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi: vì sao nhóm dùng kỹ thuật debounce, đợi 150ms khi đổi bộ lọc và 300ms khi gõ ô tìm kiếm, thay vì lọc ngay từng thao tác, và nếu bỏ debounce thì hậu quả là gì?",
  "options": [
   "Debounce gộp nhiều thao tác liên tiếp thành một lần lọc, tránh render lại danh sách và ghi URL quá nhiều lần khi khách bấm nhanh hoặc gõ từng ký tự, giúp trang mượt và không bị giật",
   "Debounce để chờ dữ liệu products.json tải xong từ server, nếu không sẽ lỗi vì chưa có dữ liệu",
   "Debounce là yêu cầu của GitHub Pages để giới hạn số request, vượt quá sẽ bị chặn tạm thời",
   "Debounce để tạo hiệu ứng loading cho đẹp mắt, không ảnh hưởng tới hiệu năng thật"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là gộp thao tác để giảm tải render. Trong catalog-filter.js, scheduleFilterChange xoá timer cũ rồi đặt timer mới 150ms, chỉ khi hết 150ms không có thao tác nào nữa mới gọi onFilterChange. Tương tự onFilterSearchInput đặt timer 300ms cho ô tìm kiếm. Lý do: mỗi lần onFilterChange chạy, trang phải lọc toàn bộ danh sách, sắp xếp, xoá và dựng lại lưới sản phẩm, vẽ lại phân trang, vẽ lại nhãn lọc, và gọi history.replaceState để ghi URL. Nếu khách tick liên tiếp ba ô chất liệu mà không debounce thì ba lần render đầy đủ diễn ra trong vài chục mili giây, gây giật và lãng phí. Với ô tìm kiếm còn nặng hơn vì mỗi ký tự gõ vào là một lần lọc, debounce 300ms gom cả từ thành một lần. Đây là kỹ thuật chuẩn khi xử lý sự kiện input. Các phương án còn lại sai vì dữ liệu đã tải sẵn trong bộ nhớ, GitHub Pages chỉ phục vụ file tĩnh không giới hạn kiểu đó, và debounce là tối ưu thật chứ không phải trang trí."
 },
 {
  "id": "bv9-a08",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Thầy hỏi: trạng thái bộ lọc được lưu lên URL như thế nào, gồm những tham số nào, và vì sao phải dùng encodeURIComponent cho một số giá trị?",
  "options": [
   "filterStateToQuery ghép các tham số q, price, category, material, color, brand, stock, sort thành chuỗi truy vấn, dùng encodeURIComponent cho giá trị có dấu cách hoặc dấu phẩy như từ khoá và danh sách chất liệu để URL không bị vỡ",
   "Trạng thái lọc được lưu vào localStorage dưới dạng JSON, URL chỉ chứa số trang nên không cần encode",
   "Trạng thái lọc được gửi lên server bằng POST rồi server trả về URL mới, frontend chỉ việc chuyển hướng",
   "Trạng thái lọc được mã hoá base64 toàn bộ rồi nhét vào hash của URL để người dùng không đọc được"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là ghép tham số và encode giá trị đặc biệt. Hàm filterStateToQuery nhận state cùng mảng extra và sort mặc định, lần lượt đẩy q, price, category, material, color, brand, stock, sort vào mảng params, bỏ sort nếu trùng mặc định, rồi nối bằng dấu và và thêm dấu hỏi. Giá trị từ khoá có thể chứa dấu cách, tiếng Việt có dấu, còn danh sách chất liệu và màu được nối bằng dấu phẩy, nếu không encode thì trình duyệt có thể cắt URL hoặc hiểu sai ranh giới tham số. encodeURIComponent biến dấu cách thành mã phần trăm hai mươi, dấu phẩy thành mã phần trăm hai C, tiếng Việt thành chuỗi byte an toàn. Khi đọc lại, readFilterParams dùng getParam rồi split dấu phẩy cho material và color để khôi phục mảng. Nhờ vậy khách copy URL gửi bạn bè, bạn mở lên thấy đúng bộ lọc, đúng trang, đúng từ khoá. Các phương án còn lại sai vì dự án không lưu bộ lọc vào localStorage, không có server xử lý lọc, và không mã hoá base64."
 },
 {
  "id": "bv9-a09",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi: vì sao products.js dùng history.replaceState để ghi bộ lọc lên URL thay vì pushState hay gán thẳng location, và sự khác biệt đó ảnh hưởng gì tới nút Back của trình duyệt?",
  "options": [
   "replaceState thay URL hiện tại mà không tạo mục lịch sử mới, nên khách bấm Back sẽ về trang trước chứ không phải lùi từng bước lọc, tránh phải bấm Back hàng chục lần mới thoát trang",
   "replaceState nhanh hơn pushState vì không cần kiểm tra quyền, còn gán location thì chậm vì phải tải lại trang",
   "replaceState là cách duy nhất để đổi URL trên GitHub Pages, pushState bị chặn vì thiếu backend",
   "replaceState tự động lưu lịch sử vào localStorage, còn pushState thì không, nên nhóm chọn replaceState để không mất dữ liệu"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là tránh làm rác lịch sử trình duyệt. Mỗi khi bộ lọc thay đổi, renderProducts gọi history.replaceState với URL mới gồm products.html cộng chuỗi truy vấn. replaceState thay thế mục lịch sử hiện tại, không thêm mục mới. Nếu dùng pushState, mỗi lần tick một ô chất liệu, đổi một khoảng giá, gõ thêm một ký tự đều sinh ra một mục lịch sử, khách bấm Back sẽ phải lùi từng thao tác lọc rất mệt, trong khi ý định thật của họ là quay về trang trước đó. Nếu gán thẳng location thì trình duyệt tải lại toàn bộ trang, mất trạng thái, chậm và nháy màn hình. replaceState giữ được lợi ích là URL phản ánh bộ lọc để chia sẻ và tải lại vẫn đúng, mà không làm hỏng trải nghiệm điều hướng. Đây là đánh đổi có chủ đích: nhóm ưu tiên nút Back hoạt động tự nhiên hơn là cho phép lùi từng bước lọc. Các phương án còn lại sai vì tốc độ không phải lý do chính, pushState chạy được trên GitHub Pages, và replaceState không liên quan localStorage."
 },
 {
  "id": "bv9-a10",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Thầy hỏi: phân trang trong catalog-filter.js chia trang thế nào, hằng số nào quy định số món mỗi trang, và nút phân trang được vẽ ra sao khi có nhiều trang?",
  "options": [
   "Mỗi trang 12 món theo hằng FILTER_PAGE_SIZE, renderProducts tính pageCount bằng cách làm tròn lên tổng chia 12, cắt mảng theo start và start cộng 12, còn renderFilterPagination chỉ vẽ trang đầu, trang cuối và các trang lân cận trang hiện tại kèm dấu ba chấm",
   "Mỗi trang 20 món theo hằng FILTER_PAGE_SIZE, và vẽ đầy đủ tất cả các nút trang từ 1 tới pageCount",
   "Mỗi trang 12 món nhưng phân trang do server trả về, frontend chỉ hiển thị số trang server cung cấp",
   "Mỗi trang 8 món và chỉ có nút Trước và Tiếp, không bao giờ hiện số trang cụ thể"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là 12 món mỗi trang và vẽ rút gọn. Hằng FILTER_PAGE_SIZE bằng 12 được khai báo đầu catalog-filter.js. Trong renderProducts, pageCount bằng Math.max của 1 và Math.ceil tổng chia 12, currentPage được kẹp trong khoảng 1 tới pageCount, start bằng currentPage trừ 1 nhân 12, vòng lặp chỉ dựng thẻ cho các món từ start tới start cộng 12 hoặc hết mảng. Hàm renderFilterPagination nếu pageCount nhỏ hơn hoặc bằng 1 thì không vẽ gì, ngược lại vẽ nút Trước khi trang hiện tại lớn hơn 1, duyệt i từ 1 tới pageCount nhưng chỉ vẽ khi i bằng 1, i bằng pageCount, hoặc cách trang hiện tại không quá 1, các vị trí bị nhảy thì chèn dấu ba chấm, cuối cùng vẽ nút Tiếp khi chưa phải trang cuối. Nhờ vậy với hàng trăm sản phẩm thanh phân trang vẫn gọn, không tràn màn hình điện thoại. Các phương án còn lại sai vì số món mỗi trang là 12, không có server phân trang, và có hiện số trang cụ thể."
 },
 {
  "id": "bv9-a11",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi: hàm sortProductList xử lý sắp xếp theo nhiều tiêu chí, em trình bày thứ tự ưu tiên và vì sao món hết hàng luôn bị đẩy xuống cuối bất kể chọn kiểu sắp xếp nào?",
  "options": [
   "Hàm so sánh trước hết đẩy món hết hàng xuống dưới, sau đó mới áp tiêu chí đã chọn như giá tăng, giá giảm, tên, mới nhất, bán chạy, đánh giá, tình trạng; nếu vẫn hoà và đang tìm kiếm thì món khớp tên hơn lên trước, cuối cùng giữ vị trí gốc để ổn định",
   "Hàm sắp xếp theo giá trước, sau đó mới xét tới tồn kho, nên món hết hàng đắt tiền vẫn có thể lên đầu",
   "Hàm sắp xếp ngẫu nhiên để mỗi lần tải trang danh sách khác nhau, tạo cảm giác phong phú",
   "Hàm sắp xếp theo id sản phẩm giảm dần, các tiêu chí khác chỉ là nhãn hiển thị không có tác dụng"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là ưu tiên tồn kho rồi mới tới tiêu chí. Trong sortProductList, mỗi sản phẩm được gán vị trí gốc vào biến _viTri, sau đó hàm so sánh tính hetA và hetB dựa trên stock_quantity lớn hơn 0 hay không, nếu khác nhau thì trả về ngay, nghĩa là món còn hàng luôn đứng trước món hết hàng. Chỉ khi cùng trạng thái tồn kho mới tính tiếp ss theo sort: price-asc trừ giá, price-desc trừ ngược, name-asc dùng localeCompare tiếng Việt, newest so created_at hoặc id giảm dần, bestseller dùng bản đồ số đã bán, rating so điểm rồi tới số lượt, grade theo thứ tự Like New, Good, Fair. Nếu ss vẫn bằng 0 và có từ khoá thì so điểm tìm kiếm để món khớp tên hơn lên trước. Cuối cùng nếu vẫn hoà thì trả về hiệu vị trí gốc để thứ tự ổn định giữa các lần render. Lý do đẩy hết hàng xuống: khách vào mua sắm, thấy món không mua được ở đầu sẽ ức chế, nên ưu tiên món mua được. Các phương án còn lại sai vì tồn kho xét trước giá, không có sắp xếp ngẫu nhiên, và sort thật sự có tác dụng."
 },
 {
  "id": "bv9-a12",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi: khi khách chọn sắp xếp theo đánh giá hoặc bán chạy, dữ liệu lấy từ đâu, vì sao phải tính bản đồ một lần thay vì tra cứu trong hàm so sánh, và nếu tra cứu trực tiếp thì vấn đề gì xảy ra?",
  "options": [
   "Dữ liệu lấy từ getSoldMap và getRatingMap trong services/products.js, tính một lần thành bản đồ id tới số đã bán hoặc điểm đánh giá rồi tra trong hàm so sánh, vì tra trực tiếp trong hàm so sánh sẽ lặp lại hàng nghìn lần và làm chậm sắp xếp",
   "Dữ liệu lấy từ reviews.json và orders.json mỗi lần so sánh đọc lại file, vì file nhỏ nên không ảnh hưởng gì",
   "Dữ liệu lấy từ API bên ngoài gọi mỗi khi đổi kiểu sắp xếp, nên cần mạng mới sắp xếp được",
   "Dữ liệu lấy từ localStorage do admin nhập tay, nên chỉ đúng trên máy admin còn khách thấy số khác"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là tính bản đồ một lần để tránh lặp. Đầu sortProductList, biến daBan chỉ được gán getSoldMap khi sort là bestseller, biến danhGia chỉ được gán getRatingMap khi sort là rating, cả hai là bản đồ khoá theo id sản phẩm. Trong hàm so sánh, code tra daBan[b.id] hay danhGia[a.id] với độ phức tạp hằng. Nếu thay vào đó gọi hàm tính doanh số hay đọc reviews.json ngay trong hàm so sánh, hàm này chạy cỡ n log n lần, với hàng trăm sản phẩm là hàng nghìn lần đọc lặp, cực chậm và có thể treo trình duyệt trên điện thoại yếu. Cách tính trước một lần là mẫu tối ưu kinh điển, đổi chút bộ nhớ lấy tốc độ. Với rating, code còn so điểm trước rồi mới so số lượt để món ít lượt mà điểm cao không đè món nhiều lượt điểm khá. Các phương án còn lại sai vì không đọc file trong vòng so sánh, không gọi API ngoài, và dữ liệu không lấy từ localStorage."
 },
 {
  "id": "bv9-a13",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi: phần Complete Your Room trên trang chi tiết sản phẩm gợi ý đồ cùng phòng dựa trên tiêu chí nào, và vì sao nhóm không chỉ gợi ý các món cùng danh mục với sản phẩm đang xem?",
  "options": [
   "Gợi ý dựa trên phong cách của sản phẩm và phòng chứa nó, ưu tiên các món khác danh mục để bổ sung chứ không trùng chức năng, và loại chính sản phẩm đang xem ra khỏi danh sách; nếu chỉ gợi ý cùng danh mục thì khách xem ghế sẽ chỉ thấy toàn ghế, không giúp hoàn thiện phòng",
   "Gợi ý dựa trên giá bán gần nhau nhất, món nào có giá sát sản phẩm đang xem thì hiện trước, không xét phong cách hay danh mục",
   "Gợi ý dựa trên sản phẩm bán chạy nhất toàn hệ thống, giống nhau cho mọi sản phẩm, không cá nhân hoá theo phòng",
   "Gợi ý dựa trên đánh giá cao nhất, chỉ hiện các món có điểm đánh giá trên bốn sao rồi mới xét tới phong cách"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là gợi ý theo phong cách và bổ trợ chức năng. Complete Your Room là khối gợi ý trên trang product-detail, mục tiêu là giúp khách mua đủ bộ cho căn phòng đang bày sản phẩm. Nhóm lấy phong cách của sản phẩm, tìm các món cùng phong cách, ưu tiên món thuộc danh mục khác với sản phẩm đang xem để bổ sung chức năng, ví dụ đang xem ghế sofa thì gợi ý bàn trà, thảm, đèn, kệ, và loại chính sản phẩm đó khỏi danh sách để không tự gợi ý lại. Nếu chỉ gợi ý cùng danh mục, khách xem ghế sẽ thấy toàn ghế, không giải quyết nhu cầu hoàn thiện phòng. Cách làm này cũng khớp luồng trải nghiệm Shop the Room mà đồ án đặt làm trung tâm. Các phương án còn lại sai vì không dựa trên giá gần nhau, không phải danh sách bán chạy cố định, và không lọc theo đánh giá trước phong cách."
 },
 {
  "id": "bv9-a14",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi: khối phòng tương tự trên trang room-detail chọn các phòng gợi ý theo tiêu chí nào, và nếu hai phòng cùng phong cách nhưng khác loại phòng thì có được gợi ý cho nhau không?",
  "options": [
   "Phòng tương tự được chọn theo phong cách và loại phòng, ưu tiên phòng cùng phong cách hoặc cùng loại, loại chính phòng đang xem, và có thể nới điều kiện khi không đủ số lượng để vẫn hiện đủ gợi ý",
   "Phòng tương tự được chọn ngẫu nhiên trong 49 phòng mẫu mỗi lần tải trang để khách khám phá nhiều phòng",
   "Phòng tương tự được chọn theo id tăng dần, phòng nào có id gần phòng đang xem nhất thì hiện trước",
   "Phòng tương tự chỉ chọn phòng có cùng số lượng hotspot bằng phòng đang xem, không xét phong cách hay loại phòng"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là dựa trên phong cách và loại phòng, có nới điều kiện. Trang room-detail đọc tham số id, tìm phòng hiện tại trong rooms.json, rồi dựng khối phòng tương tự bằng cách duyệt 49 phòng mẫu, loại chính phòng đang xem, ưu tiên phòng cùng phong cách và cùng loại phòng như phòng ngủ, phòng khách, phòng ăn. Nếu sau khi lọc mà không đủ số phòng cần hiện, code nới điều kiện, ví dụ bỏ ràng buộc loại phòng để vẫn lấy đủ phòng cùng phong cách, hoặc ngược lại, mục đích là khối gợi ý không bao giờ trống. Hai phòng cùng phong cách khác loại vẫn có thể được gợi ý cho nhau ở mức ưu tiên thấp hơn, vì phong cách là tín hiệu mạnh về gu thẩm mỹ, còn loại phòng là tín hiệu về công năng. Cách này giúp khách đang xem phòng ngủ Scandinavian vẫn thấy phòng khách Scandinavian để tham khảo cách bày trí cùng gu. Các phương án còn lại sai vì không chọn ngẫu nhiên, không theo id, và không dựa trên số hotspot."
 },
 {
  "id": "bv9-a15",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy hỏi tình huống: khách gõ từ khoá bàn trà, hệ thống trả về danh sách rỗng dù trong kho có món tên Bàn Trà Mây Tre, em sẽ kiểm tra những bước nào trong chuỗi xử lý để tìm nguyên nhân?",
  "options": [
   "Kiểm tra lần lượt boDau và tachTu xem từ khoá có ra đúng hai từ ban và tra không, kiểm tra diemTimKiem với sản phẩm đó xem có trả về 0 vì tên bị lưu khác dạng hay không, kiểm tra bộ lọc khác đang bật như giá hay còn hàng có vô tình loại món đó, và kiểm tra danh sách gốc của trang có chứa sản phẩm ấy không",
   "Chỉ cần kiểm tra lại kết nối mạng, vì tìm kiếm chạy trên server và mạng yếu là nguyên nhân duy nhất gây rỗng",
   "Chỉ cần xoá localStorage rồi tải lại trang, vì mọi lỗi tìm kiếm đều do bộ nhớ đệm cũ",
   "Chỉ cần đổi sang trình duyệt khác, vì hàm normalize NFD không chạy trên một số trình duyệt"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là rà soát cả chuỗi xử lý theo thứ tự. Bước một, gọi boDau và tachTu trên từ khoá để chắc chắn ra mảng ban và tra, nếu ra khác thì lỗi ở khâu chuẩn hoá. Bước hai, gọi diemTimKiem với sản phẩm Bàn Trà Mây Tre, kiểm tra tên sản phẩm sau tachTu có chứa ban và tra không, nếu tên lưu dạng viết hoa khác thường hay có ký tự lạ thì điểm về 0. Bước ba, kiểm tra các bộ lọc khác đang bật: nếu khách đang chọn khoảng giá không chứa giá món này, hoặc tick chỉ còn hàng mà món hết hàng, hoặc chọn màu không khớp nhóm màu của món, thì món bị loại dù từ khoá khớp. Bước bốn, kiểm tra danh sách gốc của trang: products.js lấy getNewProducts hoặc getProductsByStyle theo phong cách đang chọn, nếu khách đang ở phong cách khác với phong cách của món thì món không nằm trong danh sách gốc nên không bao giờ lọt. Các phương án còn lại sai vì tìm kiếm chạy hoàn toàn phía client, không phụ thuộc mạng, không liên quan localStorage, và normalize NFD được hỗ trợ rộng rãi."
 },
 {
  "id": "bv9-a16",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy hỏi tình huống: khách lọc chất liệu Gỗ và Da, chọn màu Đen, giá từ 3 tới 6 triệu, bật chỉ còn hàng, rồi bấm chia sẻ link cho bạn. Bạn mở link thấy bộ lọc hiện đúng nhưng danh sách chỉ có vài món, em giải thích vì sao và URL lúc đó trông thế nào?",
  "options": [
   "URL chứa các tham số material với giá trị Gỗ và Da nối bằng dấu phẩy đã encode, color là Đen, price là 3000000-6000000, stock bằng 1; danh sách ít vì các điều kiện là AND nên chỉ món thoả đồng thời mọi nhóm mới lọt, đây là hành vi đúng chứ không phải lỗi",
   "URL chỉ chứa số trang, còn bộ lọc được lưu trong localStorage của máy khách gửi link nên bạn không thấy đúng, danh sách ít là do dữ liệu máy bạn khác",
   "URL chứa toàn bộ bộ lọc nhưng danh sách ít là lỗi vì đáng lẽ phải hiện tất cả món khớp bất kỳ tiêu chí nào, tức là OR giữa các nhóm",
   "URL chứa bộ lọc nhưng khi mở link hệ thống bỏ qua bộ lọc và hiện toàn bộ sản phẩm, danh sách ít là do trang bị lỗi tải dữ liệu"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là URL đầy đủ tham số và kết quả ít do AND giữa các nhóm. Khi khách thao tác, renderProducts gọi filterStateToQuery với state hiện tại, hàm này đẩy q nếu có, price là 3000000-6000000, category nếu có, material là chuỗi Gỗ phẩy Da được encodeURIComponent nên dấu phẩy thành mã phần trăm, color là Đen được encode vì có dấu, brand nếu có, stock bằng 1, sort nếu khác mặc định. Bạn mở link, readFilterParams đọc lại, split material theo dấu phẩy ra mảng hai phần tử, setFilterState tick lại đúng các ô, nên khung lọc hiện đúng. Danh sách ít vì filterProductList loại dần: món phải nằm trong khoảng giá, phải thuộc nhóm chất liệu Gỗ hoặc Da, phải thuộc nhóm màu Đen, phải còn hàng. Giao của bốn điều kiện thường chỉ còn vài món, đó là thiết kế có chủ đích giúp khách thu hẹp nhanh. Nếu khách thấy quá ít, họ bỏ bớt một nhãn lọc bằng chip trên đầu danh sách. Các phương án còn lại sai vì bộ lọc nằm trên URL chứ không trong localStorage, logic là AND chứ không OR, và link mở ra áp dụng đúng bộ lọc."
 },
 {
  "id": "bv9-a17",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy hỏi tình huống: sau khi lọc còn 0 sản phẩm, trang products hiện khối gợi ý rỗng. Em mô tả renderEmptySuggestions làm gì để cứu trải nghiệm, và vì sao nhóm chọn cách đó thay vì chỉ hiện dòng chữ không tìm thấy sản phẩm?",
  "options": [
   "renderEmptySuggestions hiện khối gợi ý gồm tối đa ba món còn hàng, ưu tiên món cùng danh mục đang lọc nếu có, nếu không thì lấy theo phong cách đang chọn hoặc toàn bộ sản phẩm mới, giúp khách có đường lui thay vì bế tắc",
   "renderEmptySuggestions tự động xoá toàn bộ bộ lọc của khách rồi tải lại trang, vì nhóm cho rằng bộ lọc của khách là sai",
   "renderEmptySuggestions chuyển hướng khách về trang chủ sau ba giây, không hiện gợi ý nào",
   "renderEmptySuggestions hiện thông báo lỗi kỹ thuật và yêu cầu khách liên hệ admin để được hỗ trợ"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là hiện gợi ý thay thế để giữ khách. Trong products.js, renderEmptySuggestions nhận tổng số kết quả, nếu lớn hơn 0 thì ẩn khối gợi ý, nếu bằng 0 thì hiện khối. Nó lấy danh sách theo phong cách đang chọn hoặc toàn bộ sản phẩm mới, nếu đang lọc theo danh mục thì thử lọc lại chỉ với danh mục đó và bật còn hàng để có danh sách cùng danh mục, rồi duyệt lấy tối đa ba món còn hàng dựng thành thẻ sản phẩm. Cách này biến ngõ cụt thành điểm gợi ý, khách có thể bấm sang món khác thay vì bỏ trang. Nếu chỉ hiện dòng chữ không tìm thấy sản phẩm, khách dễ thoát, tỷ lệ thoát cao, trong khi mục tiêu thương mại điện tử là giữ chân. Nhóm cũng không tự động xoá bộ lọc vì làm vậy là cướp quyền kiểm soát của khách, họ có thể chỉ gõ sai một chữ và muốn sửa lại. Các phương án còn lại sai vì không tự xoá lọc, không chuyển hướng, và không hiện lỗi kỹ thuật."
 },
 {
  "id": "bv9-a18",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy hỏi tình huống: khách đang ở trang 3 của danh sách, sau đó tick thêm một bộ lọc khiến tổng kết quả chỉ còn đủ 1 trang. Em giải thích code xử lý ra sao để khách không bị kẹt ở trang trống, và URL được cập nhật thế nào?",
  "options": [
   "onFilterChange đặt currentPage về 1 mỗi khi đổi bộ lọc, và ngay cả khi currentPage vượt pageCount thì renderProducts cũng kẹp lại về pageCount, nên khách luôn thấy dữ liệu; URL sau đó được ghi lại bằng replaceState với page bị bỏ nếu bằng 1",
   "Code không xử lý gì, khách sẽ thấy lưới trống và phải tự bấm về trang 1, đây là điểm yếu nhóm chấp nhận",
   "Code tự động chuyển khách về trang chủ khi currentPage lớn hơn pageCount để tránh lỗi hiển thị",
   "Code giữ nguyên trang 3 và hiện lại các món của trang 3 cũ dù bộ lọc mới không còn món nào, gây hiển thị sai dữ liệu"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là đặt lại trang và kẹp biên. Trong products.js, onFilterChange được khung lọc gọi mỗi khi khách đổi tiêu chí, hàm này commitFilterState rồi gán currentPage bằng 1 trước khi renderProducts. Nhờ vậy đổi lọc luôn quay về trang đầu, đúng thói quen: lọc mới thì xem từ đầu. Ngoài ra renderProducts còn phòng thủ hai lớp: nếu currentPage nhỏ hơn 1 thì gán 1, nếu lớn hơn pageCount thì gán pageCount, nên dù khách vào bằng URL cũ có page bằng 3 mà kết quả chỉ còn 1 trang thì vẫn hiện trang 1 chứ không trống. Sau khi render, phần ghi URL dùng filterStateToQuery với extra chỉ thêm page khi currentPage lớn hơn 1, nên URL sạch, không còn page bằng 3 thừa. Đây là chi tiết nhỏ nhưng ảnh hưởng lớn tới cảm giác mượt. Các phương án còn lại sai vì code có xử lý, không chuyển trang chủ, và không hiện dữ liệu cũ."
 },
 {
  "id": "bv9-a19",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy hỏi mở rộng: nếu nhóm muốn thêm bộ lọc theo khoảng giá tự nhập hai đầu thay vì các khoảng cố định trong PRICE_RANGES, em sẽ sửa những chỗ nào trong catalog-filter.js và cần chú ý gì khi lưu lên URL?",
  "options": [
   "Thêm hai ô nhập giá nhỏ nhất và lớn nhất vào khung lọc, sửa getFilterState và setFilterState để đọc ghi hai giá trị này, sửa filterProductList để so sánh trực tiếp thay vì trongKhoangGia theo chuỗi, và lưu lên URL bằng hai tham số riêng đã encode, đồng thời xử lý trường hợp nhập ngược đầu",
   "Chỉ cần sửa mảng PRICE_RANGES thành các khoảng nhỏ hơn, không cần đụng tới hàm nào khác vì mọi thứ tự động theo mảng",
   "Chỉ cần thêm một ô nhập giá vào HTML, không cần sửa JS vì trình duyệt tự lọc theo giá khi gõ",
   "Chỉ cần đổi FILTER_PAGE_SIZE để hiện nhiều món hơn, khách sẽ tự tìm được món trong khoảng giá mong muốn"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là sửa cả ba tầng giao diện, trạng thái và lọc. Đầu tiên trong renderFilterPanel thêm hai ô input số cho giá từ và giá đến, gắn id rõ ràng. Tiếp theo getFilterState phải đọc thêm hai giá trị này, copyFilterState phải sao chép chúng, setFilterState phải gán lại vào ô khi đọc từ URL. Trong filterProductList, thay vì gọi trongKhoangGia với chuỗi khoảng, so sánh Number price lớn hơn hoặc bằng giá từ và nhỏ hơn hoặc bằng giá đến, bỏ qua điều kiện nếu ô trống. Trong filterStateToQuery thêm hai tham số minPrice và maxPrice, nhớ encode và nhớ bỏ khi rỗng. Trong readFilterParams đọc lại hai tham số đó. Cần chú ý trường hợp khách nhập ngược, giá từ lớn hơn giá đến, nên tự hoán đổi hoặc cảnh báo; cần chú ý giá trị âm và giá trị không phải số; cần chú ý số đếm demTheoGia không còn dùng được cho khoảng tự nhập nên phải bỏ hoặc thay bằng cách khác. Các phương án còn lại sai vì không thể chỉ sửa mảng, trình duyệt không tự lọc, và tăng số món mỗi trang không giải quyết nhu cầu lọc giá."
 },
 {
  "id": "bv9-a20",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy hỏi mở rộng: nếu dữ liệu sản phẩm tăng lên vài chục nghìn món, cách lọc và tìm kiếm hiện tại chạy hoàn toàn trên trình duyệt sẽ gặp vấn đề gì, và nhóm sẽ xử lý theo hướng nào?",
  "options": [
   "Mỗi lần đổi bộ lọc hay gõ tìm kiếm, code duyệt toàn bộ mảng và tách từ từng sản phẩm nên với vài chục nghìn món sẽ chậm, tốn bộ nhớ và giật trên điện thoại; hướng xử lý là chuẩn hoá tên một lần khi tải, lưu chỉ mục tìm kiếm, hoặc chuyển lọc và tìm lên server có cơ sở dữ liệu",
   "Không gặp vấn đề gì vì JavaScript xử lý được hàng triệu phần tử trong vài mili giây, không cần thay đổi",
   "Chỉ cần tăng FILTER_PAGE_SIZE lên vài trăm là giải quyết được mọi vấn đề hiệu năng",
   "Chỉ cần nén products.json lại là đủ, vì nút thắt duy nhất là dung lượng tải file"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là chỉ ra nút thắt và hướng xử lý. Hiện tại filterProductList duyệt toàn bộ danh sách mỗi lần lọc, và với mỗi sản phẩm khi có từ khoá còn gọi diemTimKiem, bên trong lại gọi tachTu nhiều lần để bỏ dấu tên, thương hiệu, chất liệu, màu. Với vài trăm món thì ổn, nhưng vài chục nghìn món nhân với việc gõ từng ký tự sẽ tạo hàng trăm nghìn phép tách chuỗi mỗi lần, rất chậm và ngốn pin. Hướng xử lý thực tế: một là tiền xử lý khi tải dữ liệu, tính sẵn trường tên đã bỏ dấu và mảng từ cho từng sản phẩm để diemTimKiem không phải tách lại; hai là xây chỉ mục ngược từ khoá tới danh sách id để tra cứu nhanh; ba là chuyển hẳn sang backend có cơ sở dữ liệu và tìm kiếm phía server, frontend chỉ nhận trang kết quả. Với đồ án hiện tại, nhóm chọn cách client vì dữ liệu vừa phải và deploy tĩnh miễn phí, nhưng nhóm ý thức được giới hạn này. Các phương án còn lại sai vì JavaScript không nhanh vô hạn, tăng số món mỗi trang làm chậm thêm, và nén file không giải quyết chi phí xử lý."
 },
 {
  "id": "bv9-a21",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi: nhãn lọc đang chọn, các chip có dấu X, được dựng ra sao và vì sao mỗi chip lại gắn một chuỗi lệnh xoá riêng thay vì chỉ gọi resetFilterPanel để xoá tất cả?",
  "options": [
   "renderActiveFilterTags duyệt state và mảng nhãn riêng của trang để tạo từng chip, mỗi chip gắn lệnh xoá đúng một tiêu chí rồi gọi onFilterChange, nhờ vậy khách bỏ từng điều kiện mà không mất các điều kiện còn lại",
   "Mỗi chip gắn lệnh gọi resetFilterPanel để xoá toàn bộ bộ lọc, vì nhóm cho rằng bỏ một chip là bỏ hết cho đơn giản",
   "Chip chỉ để hiển thị cho đẹp, bấm vào không có tác dụng gì, khách phải tự bỏ tick trong khung lọc",
   "Chip gắn lệnh tải lại trang từ đầu để đảm bảo trạng thái sạch, không giữ bộ lọc nào"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là mỗi chip xoá đúng một tiêu chí. Hàm renderActiveFilterTags nhận container, state và mảng extraTags, lần lượt kiểm tra từ khoá, khoảng giá, danh mục, từng chất liệu, từng màu, thương hiệu, còn hàng, cộng thêm nhãn riêng của trang như phong cách, rồi tạo phần tử span có class active-tag-chip. Mỗi chip được gán thuộc tính onclick bằng chuỗi lệnh cụ thể: với từ khoá là gán rỗng ô tìm kiếm, với giá là tick lại radio đầu tiên, với chất liệu là gọi boChonOLoc trên đúng container và đúng giá trị, với phong cách là gán currentStyle rỗng và vẽ lại hàng nút phong cách. Sau lệnh xoá luôn nối thêm onFilterChange để lọc lại ngay. Cách này cho khách quyền kiểm soát chi tiết, bỏ đúng cái mình không muốn, giữ các điều kiện khác. Nếu chip nào cũng gọi resetFilterPanel thì bỏ một mà mất hết, rất bực. Các phương án còn lại sai vì không xoá toàn bộ, chip có tác dụng thật, và không tải lại trang."
 },
 {
  "id": "bv9-a22",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy hỏi tổng hợp: em hãy kể tên các file tham gia vào luồng tìm kiếm và lọc nâng cao của trang sản phẩm, mỗi file đảm nhận việc gì, và nếu thầy bấm F5 khi đang có bộ lọc thì dữ liệu đi qua các file đó theo thứ tự nào?",
  "options": [
   "products.html dựng khung trang, products.js điều phối đọc URL và render, catalog-filter.js chứa toàn bộ logic bỏ dấu, lọc, sắp xếp, phân trang, ghi URL, services/products.js cung cấp danh sách sản phẩm và bản đồ bán chạy đánh giá, dữ liệu lấy từ products.json, categories.json, styles.json; khi F5, products.js đọc tham số URL, gọi catalog-filter để lọc và sắp xếp, rồi dựng lưới và ghi lại URL",
   "Chỉ có products.js và products.json tham gia, các file khác không liên quan tới tìm kiếm và lọc",
   "Chỉ có catalog-filter.js tham gia vì nó chứa toàn bộ logic, các file khác chỉ để trang trí giao diện",
   "server.js và chatbot.js tham gia xử lý tìm kiếm phía server rồi trả kết quả về cho products.js hiển thị"
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là bốn nhóm file phối hợp. products.html là khung trang chứa các vùng filterPanel, styleFilter, productGrid, catalogPagination, divActiveTags, emptySuggestions. products.js là bộ điều phối: initPage gọi renderFilterPanel, readFilterParams, setFilterState, renderStyleFilter, renderProducts; onFilterChange và goToFilterPage xử lý tương tác; renderProducts gọi filterProductList và sortProductList của catalog-filter rồi dựng thẻ và ghi URL. catalog-filter.js chứa boDau, tachTu, khopTu, diemTimKiem, filterProductList, sortProductList, renderFilterPagination, renderActiveFilterTags, filterStateToQuery, readFilterParams. services/products.js cung cấp getNewProducts, getProductsByStyle, getSoldMap, getRatingMap, getTable. Dữ liệu đọc từ products.json, categories.json, styles.json. Khi F5, trình duyệt tải lại trang với URL còn nguyên tham số, products.js chạy initPage, đọc tham số bằng readFilterParams, áp vào khung lọc bằng setFilterState, lấy danh sách gốc, lọc và sắp xếp, dựng lưới, vẽ phân trang và nhãn, cuối cùng ghi lại URL bằng replaceState. Các phương án còn lại sai vì thiếu file hoặc nhầm sang server."
 },
 {
  "id": "bv9-a23",
  "chapter": 12,
  "difficulty": 2,
  "type": "multiple",
  "question": "Thầy hỏi: trong catalog-filter.js, những kỹ thuật nào sau đây thực sự được dùng để tăng tốc và ổn định trải nghiệm lọc, em chọn các ý đúng (chọn nhiều đáp án)",
  "options": [
   "Debounce 150ms khi đổi bộ lọc và 300ms khi gõ ô tìm kiếm để gộp thao tác",
   "Tính bản đồ bán chạy và đánh giá một lần trước khi sắp xếp thay vì tra trong hàm so sánh",
   "Dùng history.replaceState thay vì pushState để không làm rác lịch sử trình duyệt",
   "Gọi API server mỗi lần đổi bộ lọc để lấy kết quả mới nhất"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ba ý đầu đúng, ý cuối sai. Debounce được cài trong scheduleFilterChange với 150ms và onFilterSearchInput với 300ms, mục đích gộp nhiều thao tác liên tiếp thành một lần render, tránh dựng lại lưới và ghi URL quá nhiều lần. Việc tính trước bản đồ bán chạy và đánh giá nằm trong sortProductList: biến daBan và danhGia chỉ được gán một lần khi kiểu sắp xếp tương ứng, sau đó hàm so sánh chỉ tra theo id, độ phức tạp hằng, tránh đọc lặp hàng nghìn lần. replaceState được dùng trong renderProducts để cập nhật URL mà không thêm mục lịch sử, giúp nút Back hoạt động tự nhiên. Ý cuối sai vì toàn bộ lọc và tìm kiếm chạy phía client trên dữ liệu đã tải sẵn, không có API lọc nào được gọi, server.js chỉ phục vụ file tĩnh và API chatbot. Việc hiểu đúng ba kỹ thuật này quan trọng vì thầy hay hỏi vì sao trang mượt dù dữ liệu lớn và vì sao bấm Back không bị kẹt."
 },
 {
  "id": "bv9-a24",
  "chapter": 12,
  "difficulty": 3,
  "type": "multiple",
  "question": "Thầy hỏi: khi khách gõ từ khoá tìm kiếm, những trường nào của sản phẩm được đưa vào so khớp và trường nào bị loại có chủ đích, em chọn các ý đúng (chọn nhiều đáp án)",
  "options": [
   "Tên sản phẩm sau khi bỏ dấu được tách thành mảng từ để so khớp",
   "Thương hiệu, chất liệu, màu sắc và nhóm chất liệu, nhóm màu được đưa vào so khớp phụ",
   "Mô tả dài của sản phẩm bị loại khỏi so khớp để tránh kết quả nhiễu",
   "Toàn bộ nội dung file products.json được nối thành một chuỗi lớn rồi tìm chuỗi con"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ba ý đầu đúng, ý cuối sai. Trong diemTimKiem, code tách từ khoá thành mảng, tách tên sản phẩm thành mảng từ và nối lại thành chuỗi bỏ dấu để kiểm tra cụm từ khoá nằm ở đầu hay giữa tên, cho điểm 4 hoặc 3. Ngoài tên, code còn gộp thương hiệu, chất liệu, màu, nhóm chất liệu và nhóm màu thành một chuỗi từ phụ để kiểm tra từng từ khoá có xuất hiện không, cho điểm 1 nếu chỉ khớp ở đây. Trường mô tả bị loại có chủ đích vì mô tả dài, nhắc nhiều món khác, sẽ khiến gõ bàn trà ra khăn trải bàn hay gõ ghế ra bàn ăn. Ý cuối sai vì code không nối toàn bộ file thành chuỗi, làm vậy sẽ cực chậm và cho kết quả rác vì khớp cả id, giá, tồn kho. Việc nắm rõ trường nào được tìm giúp trả lời câu hỏi vì sao kết quả tìm kiếm của RoomCraft chính xác hơn tìm chuỗi thô."
 },
 {
  "id": "bv9-a25",
  "chapter": 12,
  "difficulty": 3,
  "type": "multiple",
  "question": "Thầy hỏi tình huống: khách phàn nàn bấm chip bỏ lọc mà danh sách không đổi. Em liệt kê các nguyên nhân hợp lý cần kiểm tra trong code, chọn các ý đúng (chọn nhiều đáp án)",
  "options": [
   "Chip được tạo bằng cách gán thuộc tính onclick dạng chuỗi, nếu chuỗi lệnh sai cú pháp hoặc gọi hàm không tồn tại thì bấm không có tác dụng",
   "Sau lệnh xoá phải nối thêm onFilterChange, nếu thiếu thì trạng thái đã đổi nhưng danh sách chưa được render lại",
   "Lệnh xoá phải nhắm đúng container và đúng giá trị, ví dụ boChonOLoc với divFilterMaterial và đúng tên chất liệu, nếu lệch thì ô không được bỏ tick",
   "Chip chỉ hoạt động khi có kết nối mạng vì lệnh xoá được gửi lên server xử lý"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ba ý đầu đúng, ý cuối sai. renderActiveFilterTags tạo chip bằng document.createElement, gán thuộc tính onclick bằng chuỗi lệnh cụ thể, ví dụ với chất liệu là boChonOLoc trên divFilterMaterial với đúng giá trị, với từ khoá là gán rỗng ô txtFilterSearch, với giá là tick lại radio đầu tiên, sau đó luôn nối thêm onFilterChange. Vì là chuỗi lệnh chạy qua thuộc tính, chỉ cần sai một dấu nháy, sai tên hàm, hay sai id container là bấm không có phản ứng, và trình duyệt thường im lặng hoặc chỉ báo lỗi trong console. Nếu thiếu onFilterChange thì ô đã bỏ tick nhưng lưới sản phẩm vẫn giữ kết quả cũ, khách tưởng chip hỏng. Nếu lệch container hoặc lệch giá trị thì boChonOLoc duyệt mãi không thấy ô cần bỏ. Ý cuối sai vì toàn bộ xử lý chạy phía client, không gửi gì lên server. Khi gỡ lỗi, nhóm mở console xem lỗi cú pháp, kiểm tra phần tử chip có thuộc tính onclick đúng không, và kiểm tra onFilterChange có được gọi sau lệnh xoá không."
 },
 {
  "id": "bv9-a26",
  "chapter": 12,
  "difficulty": 2,
  "type": "multiple",
  "question": "Thầy hỏi: những tham số nào sau đây thực sự xuất hiện trên URL của trang products khi khách đang lọc, theo cách filterStateToQuery ghi, em chọn các ý đúng (chọn nhiều đáp án)",
  "options": [
   "q cho từ khoá tìm kiếm đã được encode",
   "material và color là danh sách giá trị nối bằng dấu phẩy rồi encode",
   "price là chuỗi khoảng giá dạng số bắt đầu gạch số kết thúc, và stock bằng 1 khi bật chỉ còn hàng",
   "token đăng nhập và id người dùng để cá nhân hoá kết quả lọc"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ba ý đầu đúng, ý cuối sai. filterStateToQuery lần lượt đẩy q nếu có từ khoá, price nếu có khoảng giá, category nếu có danh mục, material nếu có chất liệu với các giá trị nối bằng dấu phẩy rồi encodeURIComponent, color tương tự, brand nếu có thương hiệu, stock bằng 1 khi bật chỉ còn hàng, sort nếu khác mặc định. Ngoài ra products.js còn thêm extra gồm style khi đang lọc theo phong cách và page khi đang ở trang lớn hơn 1. Nhờ vậy URL phản ánh đầy đủ trạng thái, khách copy gửi bạn hay tải lại trang vẫn giữ nguyên bộ lọc. Ý cuối sai vì dự án không có đăng nhập bắt buộc để lọc, không có token trên URL, và bộ lọc không cá nhân hoá theo người dùng, tất cả khách thấy cùng kết quả với cùng bộ lọc. Việc nắm rõ danh sách tham số giúp trả lời câu hỏi vì sao link chia sẻ của RoomCraft tái hiện đúng màn hình khách đang xem."
 },
 {
  "id": "bv9-a27",
  "chapter": 12,
  "difficulty": 3,
  "type": "multiple",
  "question": "Thầy hỏi: khi triển khai lên GitHub Pages, những điểm nào của cơ chế lưu trạng thái lọc lên URL vẫn hoạt động đúng và điểm nào cần lưu ý, em chọn các ý đúng (chọn nhiều đáp án)",
  "options": [
   "Đọc tham số URL bằng getParam và ghi bằng history.replaceState đều chạy được vì là API chuẩn của trình duyệt, không phụ thuộc server",
   "Cần đảm bảo đường dẫn tương đối như products.html để khi deploy dưới thư mục con của GitHub Pages vẫn đúng",
   "Cần chú ý tiếng Việt có dấu trong tham số phải được encode đầy đủ để không bị cắt khi chia sẻ qua ứng dụng nhắn tin",
   "Cần cấu hình server Node trên GitHub Pages để xử lý tham số truy vấn, nếu không URL sẽ bị bỏ qua"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ba ý đầu đúng, ý cuối sai. GitHub Pages chỉ phục vụ file tĩnh, không chạy Node, nhưng đọc và ghi tham số URL là việc của trình duyệt nên vẫn hoạt động bình thường. getParam đọc query string, history.replaceState đổi URL mà không tải lại trang, cả hai là API chuẩn. Điểm cần chú ý thứ nhất là đường dẫn: nếu deploy dưới thư mục con như tên repo, phải dùng đường dẫn tương đối products.html chứ không dùng đường dẫn tuyệt đối bắt đầu bằng dấu gạch chéo, nếu không sẽ trỏ sai. Điểm thứ hai là encode tiếng Việt: từ khoá và giá trị chất liệu màu có dấu phải được encodeURIComponent đầy đủ, nếu không một số ứng dụng nhắn tin hoặc trình duyệt có thể cắt URL tại dấu cách hoặc ký tự đặc biệt, làm mất bộ lọc khi chia sẻ. Ý cuối sai vì GitHub Pages không chạy server Node, và cơ chế URL không cần server. Đây là câu hỏi thầy hay dùng để kiểm tra nhóm có hiểu deploy tĩnh thật không hay chỉ chạy được trên máy local."
 },
 {
  "id": "bv9-a28",
  "chapter": 12,
  "difficulty": 3,
  "type": "multiple",
  "question": "Thầy hỏi: nếu phải bảo vệ quyết định thiết kế bộ lọc chạy hoàn toàn phía client thay vì viết backend lọc, em sẽ nêu những lý do nào là chính đáng và đúng với bối cảnh đồ án, chọn các ý đúng (chọn nhiều đáp án)",
  "options": [
   "Dữ liệu sản phẩm vừa phải, tải một lần rồi lọc trong bộ nhớ nên phản hồi tức thì, không cần chờ mạng mỗi thao tác",
   "Deploy tĩnh trên GitHub Pages miễn phí, không cần duy trì server và cơ sở dữ liệu, phù hợp phạm vi môn học",
   "Toàn bộ logic tập trung trong catalog-filter.js dùng chung cho trang sản phẩm mới và trang đồ cũ, dễ bảo trì và mở rộng",
   "Vì trình duyệt có thể chạy cơ sở dữ liệu quan hệ đầy đủ nên không cần backend cho bất kỳ tính năng nào"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ba ý đầu đúng, ý cuối sai. Bộ lọc phía client hợp lý với đồ án vì products.json khoảng 1.9MB, tải một lần rồi giữ trong bộ nhớ, mỗi thao tác lọc chỉ là duyệt mảng vài trăm tới vài nghìn phần tử, phản hồi gần như tức thì, không có độ trễ mạng. GitHub Pages phục vụ file tĩnh miễn phí, không cần thuê server, không cần cài cơ sở dữ liệu, rất phù hợp phạm vi môn Phát triển Web Kinh doanh. Việc gom logic vào catalog-filter.js giúp trang products và trang marketplace dùng chung một khung lọc, chỉ truyền phần riêng vào, giảm trùng lặp và dễ sửa một chỗ áp dụng hai nơi. Ý cuối sai vì trình duyệt không chạy cơ sở dữ liệu quan hệ đầy đủ, và đồ án vẫn cần backend cho chatbot cũng như sẽ cần backend thật nếu muốn đồng bộ đơn hàng nhiều người. Khi trả lời, nhóm nên thẳng thắn nêu giới hạn: dữ liệu lớn sẽ chậm, dữ liệu tĩnh có thể bị sửa, và hướng nâng cấp là chuyển lọc tìm kiếm lên server khi quy mô tăng."
 }
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_BV9; }
