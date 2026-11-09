// Ngan hang on bao ve RoomCraft - da phan loai topic + bien tap bo khung 'Thay' (2026-11-09)
const QUESTIONS_BV6 = [
 {
  "id": "bv6-a01",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Vì sao nhóm em chọn lưu dữ liệu bằng file JSON tĩnh thay vì dựng một cơ sở dữ liệu quan hệ như MySQL hay MongoDB? Em trình bày lý do và cơ chế đọc dữ liệu thực tế của web.",
  "options": [
   "Vì đồ án chạy tĩnh trên GitHub Pages, không có server chạy thường trực nên không thể host DB; JSON tĩnh cho phép frontend fetch trực tiếp qua đường dẫn tương đối, deploy miễn phí, không cần cài đặt, và nhóm em kiểm soát toàn bộ dữ liệu bằng Git.",
   "Vì JSON nhanh hơn mọi loại cơ sở dữ liệu nên nhóm em chọn để tối ưu hiệu năng, còn MySQL chỉ dùng khi có trên 1 triệu bản ghi.",
   "Vì nhóm em chưa học SQL nên buộc phải dùng JSON, nếu học rồi thì đã chuyển sang MySQL từ đầu.",
   "Vì JSON là định dạng duy nhất mà trình duyệt đọc được, còn cơ sở dữ liệu thì trình duyệt không đọc được nên không có lựa chọn khác."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu: chọn JSON tĩnh vì ràng buộc kiến trúc của đồ án. RoomCraft là website tĩnh thuần HTML/CSS/JS, deploy trên GitHub Pages từ branch main ở root, không có tiến trình server chạy thường trực cho phần bán hàng (server.js chỉ là backend chatbot chạy cục bộ cổng 3000). Nếu dùng MySQL hay MongoDB thì phải thuê host, phải mở cổng, phải cấu hình biến môi trường, và GitHub Pages không chạy được Node hay PHP. Vì vậy nhóm em đặt toàn bộ dữ liệu trong data/json/*.json như products.json, rooms.json, categories.json, styles.json, reviews.json, orders.json, users.json, coupons.json, shipping_methods.json, wards.json, roles.json. Frontend dùng fetch với đường dẫn tương đối để nạp, ví dụ trang products đọc products.json rồi lọc phía client. Lợi ích kèm theo là dữ liệu nằm trong Git nên mọi thay đổi đều có lịch sử commit, dễ rollback, dễ review khi làm nhóm. Các phương án còn lại sai vì JSON không nhanh hơn DB ở quy mô lớn, việc chưa học SQL không phải lý do kỹ thuật, và trình duyệt hoàn toàn có thể gọi API của DB qua HTTP.",
  "topic": "data"
 },
 {
  "id": "bv6-a02",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "File products.json của nhóm em nặng khoảng 1.9MB. Dung lượng đó ảnh hưởng gì tới trải nghiệm người dùng, và nhóm em đã xử lý hay chấp nhận đánh đổi ra sao?",
  "options": [
   "1.9MB là chấp nhận được với mạng hiện nay, nhóm em nạp một lần rồi cache lại trong bộ nhớ và lọc phía client, đổi lại phải chịu thời gian tải lần đầu chậm hơn so với việc chỉ tải đúng trang cần.",
   "1.9MB là quá lớn nên nhóm em đã cắt bớt mô tả và ảnh để file còn dưới 100KB, vì vậy không còn ảnh hưởng gì.",
   "1.9MB chỉ ảnh hưởng tới server vì trình duyệt tải file này mỗi lần chuyển trang và không bao giờ cache.",
   "1.9MB không ảnh hưởng gì vì JSON được nén tự động xuống còn vài KB trên mọi môi trường, kể cả khi mở bằng Live Server."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu: nhóm em chấp nhận đánh đổi thời gian tải lần đầu để đổi lấy việc lọc và tìm kiếm hoàn toàn phía client. Cơ chế thực tế: khi vào trang products hay trang chủ, JS gọi fetch tới data/json/products.json, nhận về mảng khoảng vài trăm sản phẩm với đầy đủ trường id, category_id, style_id, name, price, original_price, dimensions, material, color, description, model_3d_url, stock_quantity, images, style_ids, parent_category_id, board_ids, name_en, description_en, material_group, color_group. Vì mỗi sản phẩm có mô tả tiếng Việt và tiếng Anh dài nên file phình lên 1.9MB. Trình duyệt tải một lần rồi giữ trong biến toàn cục của module, các thao tác lọc theo phong cách, phòng, giá, chất liệu, màu và tìm kiếm không dấu đều chạy trên mảng đã nạp nên phản hồi tức thì, không cần gọi mạng lại. Đánh đổi là lần đầu vào trang chậm hơn, tốn băng thông di động. Các phương án còn lại sai vì nhóm em không cắt dữ liệu xuống dưới 100KB, trình duyệt có cache theo HTTP header, và Live Server không tự nén JSON xuống vài KB.",
  "topic": "data"
 },
 {
  "id": "bv6-a03",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Em hãy mô tả đường đi dữ liệu từ lúc nhóm em có 7 file CSV theo phong cách cho tới khi ra products.json mà web đang dùng, từng chặng và vai trò của từng thư mục.",
  "options": [
   "CSV thô trong data/source/raw chia theo 7 phong cách, được bổ sung mô tả và đường dẫn model 3D thành data/source/patched, rồi một script tổng hợp gộp lại thành masterdata_vi.csv, cuối cùng xuất ra JSON trong data/json để frontend đọc.",
   "CSV thô được đưa thẳng lên web, masterdata_vi.csv chỉ là bản sao lưu, còn products.json do admin nhập tay từng sản phẩm trong trang quản trị.",
   "CSV thô được nạp trực tiếp vào products.json bằng cách đổi đuôi file từ .csv sang .json, không qua bước trung gian nào.",
   "CSV thô được đưa vào cơ sở dữ liệu MySQL rồi xuất ngược ra JSON, nên masterdata_vi.csv chỉ là file log của quá trình đó."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu, mô tả đúng pipeline thực tế của nhóm. Chặng một: trong data/source/raw có 7 file CSV tương ứng 7 phong cách bohemian, coastal, farmhouse, glam, mid-century-modern, scandinavian, traditional, mỗi file chứa sản phẩm thô lấy từ nguồn. Chặng hai: nhóm em tạo data/source/patched để bổ sung các trường còn thiếu như mô tả tiếng Việt, mô tả tiếng Anh, đường dẫn model 3D glTF, nhóm chất liệu, nhóm màu, id board. Chặng ba: một script tổng hợp gộp 7 nguồn đã vá thành một file masterdata_vi.csv khoảng 550KB, chuẩn hoá id sản phẩm theo dạng product-phongcach-ten-san-pham-số thứ tự, gán category_id, style_id, parent_category_id, style_ids, board_ids. Chặng cuối: script xuất masterdata ra data/json/products.json để frontend fetch. Cách làm này giúp dữ liệu có nguồn gốc rõ ràng, tái tạo được, và khi cần sửa hàng loạt thì sửa ở CSV rồi chạy lại script thay vì sửa tay trong JSON. Các phương án còn lại sai vì CSV không lên web trực tiếp, không có chuyện đổi đuôi file, và nhóm em không dùng MySQL trong pipeline.",
  "topic": "data"
 },
 {
  "id": "bv6-a04",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Trong products.json, mỗi sản phẩm có cả style_id đơn và mảng style_ids, lại có parent_category_id và category_id. Vì sao phải lưu trùng lặp như vậy, và nếu bỏ một trong hai thì hỏng chức năng nào?",
  "options": [
   "style_id là phong cách gốc dùng để nhóm và hiển thị chính, style_ids là mảng các phong cách sản phẩm cũng phù hợp để lọc chéo; category_id là danh mục chi tiết còn parent_category_id là danh mục cha, phục vụ lọc hai cấp và gợi ý Complete Your Room.",
   "Hai trường này hoàn toàn giống nhau, nhóm em lưu dư do lỗi khi xuất dữ liệu và dự định sẽ xoá bớt một trường trong lần cập nhật tới.",
   "style_id dùng cho trang admin còn style_ids dùng cho trang khách, hai bên không liên quan gì tới nhau nên buộc phải lưu riêng.",
   "parent_category_id là khoá ngoại bắt buộc của JSON, thiếu nó thì file không parse được nên nhóm em phải thêm vào cho hợp lệ."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu: các trường này phục vụ các cách lọc khác nhau nên không thể bỏ. Ví dụ sản phẩm Bát chân cao đá cẩm thạch trắng có style_id bằng 4 tức Glam nhưng style_ids gồm 4, 6, 7 nghĩa là món này cũng hợp phong cách Scandinavian và Traditional, nhờ vậy khi người dùng lọc theo Scandinavian vẫn thấy nó xuất hiện. Tương tự category_id là danh mục chi tiết như bàn ăn, bàn phụ, gối, bình hoa, còn parent_category_id là nhóm lớn như nội thất hay trang trí, giúp bộ lọc hai cấp trong catalog-filter.js hoạt động và giúp khối Complete Your Room gợi ý đồ cùng nhóm. Nếu bỏ style_ids thì mất khả năng lọc chéo phong cách, sản phẩm đa phong cách chỉ hiện ở một nơi. Nếu bỏ parent_category_id thì bộ lọc cha con và gợi ý theo nhóm sẽ sai. Nếu bỏ style_id thì phần hiển thị nhãn phong cách chính và trang admin theo phong cách bị ảnh hưởng. Các phương án còn lại sai vì đây không phải lỗi xuất dữ liệu, không phải tách theo khách và admin, và JSON không bắt buộc trường parent_category_id.",
  "topic": "data"
 },
 {
  "id": "bv6-a05",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "File wards.json khoảng 246KB dùng cho phần địa chỉ ba cấp trong checkout. Vì sao nhóm em chọn lưu địa chỉ theo kiểu file phường xã thay vì gọi API địa chỉ trực tuyến, và cơ chế chọn ba cấp hoạt động thế nào?",
  "options": [
   "Nhóm em lưu sẵn wards.json để chọn địa chỉ hoạt động offline, không phụ thuộc API bên thứ ba có thể đổi hoặc giới hạn lượt gọi; khi người dùng chọn tỉnh thành thì JS lọc danh sách quận huyện tương ứng, chọn tiếp quận huyện thì lọc ra danh sách phường xã để chọn cấp cuối.",
   "Nhóm em gọi API địa chỉ của bên thứ ba mỗi lần người dùng mở checkout, wards.json chỉ là bản cache dự phòng khi mất mạng nên hầu như không dùng tới.",
   "Nhóm em lưu wards.json nhưng chỉ có một cấp tỉnh thành, còn quận huyện và phường xã người dùng tự gõ tay vào ô văn bản.",
   "Nhóm em dùng wards.json để tự động điền địa chỉ từ số điện thoại, còn ba cấp địa chỉ thì lấy từ hồ sơ người dùng trong users.json."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu: lưu sẵn dữ liệu địa chỉ trong wards.json để chạy độc lập. Lý do là web tĩnh trên GitHub Pages không có backend xử lý, nếu gọi API địa chỉ bên thứ ba thì phụ thuộc uptime, quota, có thể bị CORS chặn, và khi API đổi định dạng thì web hỏng. wards.json khoảng 246KB chứa danh sách phường xã của 63 tỉnh thành Việt Nam, mỗi bản ghi có mã và tên, kèm quan hệ cha con để lọc. Cơ chế trong trang checkout: khi trang nạp, JS fetch wards.json một lần, dựng sẵn cấu trúc tỉnh thành, quận huyện, phường xã. Người dùng chọn tỉnh thành thì ô quận huyện được nạp lại chỉ gồm các quận huyện thuộc tỉnh đó, chọn quận huyện thì ô phường xã nạp lại tương ứng. Địa chỉ hoàn chỉnh được ghép lại và lưu cùng đơn hàng. Vì dữ liệu nằm trong Git nên cố định, không đổi bất ngờ, dễ kiểm thử. Các phương án còn lại sai vì nhóm em không gọi API địa chỉ, không để người dùng tự gõ quận huyện phường xã, và không suy ra địa chỉ từ số điện thoại.",
  "topic": "data"
 },
 {
  "id": "bv6-a06",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Về coupons.json: cấu trúc dữ liệu mã giảm giá của nhóm em gồm những trường gì, và khi người dùng nhập mã ở trang checkout thì hệ thống kiểm tra những điều kiện nào trước khi áp dụng?",
  "options": [
   "Mỗi mã có id, code, discount_type là PERCENT hoặc FIXED, discount_value, min_order_value, expires_at và is_active; khi áp dụng hệ thống kiểm tra mã tồn tại, còn hiệu lực theo expires_at, đang bật is_active, và giá trị đơn hàng đạt min_order_value rồi mới tính giảm theo loại.",
   "Mỗi mã chỉ có code và discount_value, hệ thống chỉ so khớp chuỗi mã rồi trừ tiền, không kiểm tra hạn dùng hay giá trị đơn tối thiểu.",
   "Mỗi mã có code và discount_value, hệ thống kiểm tra thêm số lần sử dụng còn lại lưu trong users.json và chỉ cho mỗi tài khoản dùng một lần.",
   "Mỗi mã có code, discount_type và discount_value, hệ thống áp dụng ngay khi người dùng gõ đúng mã mà không cần quan tâm đơn hàng bao nhiêu tiền."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu, khớp với file coupons.json thực tế. Ví dụ mã ROOMCRAFT10 có discount_type PERCENT, discount_value 10, min_order_value 2000000, expires_at 2026-12-31T23:59:59, is_active true, nghĩa là giảm 10 phần trăm cho đơn từ 2 triệu đồng. Mã GIAM200K có discount_type FIXED, discount_value 200000, min_order_value 5000000, tức giảm thẳng 200 nghìn cho đơn từ 5 triệu. Khi người dùng nhập mã ở checkout, JS đọc coupons.json đã nạp, tìm bản ghi có code trùng, kiểm tra is_active còn bật, so sánh thời điểm hiện tại với expires_at, so sánh tổng tiền hàng với min_order_value, nếu qua hết thì tính số tiền giảm theo loại PERCENT hoặc FIXED rồi trừ vào tổng. Cách tách discount_type giúp thêm loại giảm mới mà không phải sửa logic nhiều. Các phương án còn lại sai vì file thật có đủ các trường hạn dùng và đơn tối thiểu, không có trường số lần dùng trong users.json, và hệ thống không áp dụng bừa khi chưa đạt điều kiện.",
  "topic": "data"
 },
 {
  "id": "bv6-a07",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "shipping_methods.json có ba phương thức với cách tính phí khác nhau. Nhóm em thiết kế các trường fee_city, fee_province, fee_near, fee_far, free_from, city_only để làm gì, và trang checkout chọn phí ship dựa trên những dữ kiện nào?",
  "options": [
   "Ba phương thức là tiêu chuẩn, nhanh và giao lắp đặt cồng kềnh; phí được chọn theo loại hàng và địa chỉ, phương thức tiêu chuẩn dùng fee_city hoặc fee_province tuỳ nội thành hay tỉnh và miễn phí khi đạt free_from, phương thức nhanh có city_only nên chỉ áp dụng nội thành, phương thức cồng kềnh dùng fee_city, fee_near, fee_far theo khoảng cách và miễn phí từ free_from.",
   "Cả ba phương thức dùng chung một mức phí, các trường fee khác nhau chỉ để hiển thị cho đẹp chứ logic tính tiền luôn lấy fee_city.",
   "Phí ship được tính bằng cách cộng tất cả các trường fee lại với nhau, còn city_only dùng để chặn khách ở tỉnh không được đặt hàng.",
   "Phí ship do người dùng tự nhập vào ô văn bản ở checkout, còn shipping_methods.json chỉ để admin xem tham khảo."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu, mô tả đúng thiết kế trong file. Phương thức một là Giao hàng tiêu chuẩn cho đồ trang trí, gối, chăn ga, đèn, thảm, rèm, có fee_city 35000, fee_province 50000, free_from 2000000, city_only false, thời gian 3 đến 5 ngày. Phương thức hai là Giao hàng nhanh, fee_city và fee_province đều 80000, free_from null, city_only true nên chỉ nội thành TP. Hồ Chí Minh, Hà Nội, Đà Nẵng, thời gian 1 đến 2 ngày. Phương thức ba là Giao và lắp đặt tận nơi cho nội thất cỡ lớn, có fee_city 300000, fee_near 600000, fee_far 1200000, free_from 15000000, thời gian 3 đến 7 ngày. Khi checkout, JS xét loại hàng trong giỏ để loại phương thức không phù hợp, xét địa chỉ để chọn fee_city hay fee_province hay fee_near hay fee_far, xét tổng tiền để so với free_from, và xét city_only để ẩn phương thức nhanh với khách tỉnh. Các phương án còn lại sai vì ba phương thức có mức phí khác nhau, không cộng dồn các trường fee, và phí không do người dùng tự nhập.",
  "topic": "data"
 },
 {
  "id": "bv6-a08",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "reviews.json khoảng 79KB lưu đánh giá sản phẩm. Vì sao đánh giá phải qua admin duyệt, và với cách lưu JSON tĩnh thì quy trình duyệt diễn ra thế nào trong đồ án của nhóm em?",
  "options": [
   "Đánh giá do khách gửi nên cần duyệt để tránh spam và nội dung xấu; trong đồ án tĩnh, đánh giá mới được ghi nhận qua trang admin reviews rồi nhóm em cập nhật reviews.json và deploy lại, nên việc duyệt thực chất là thao tác của admin trên file dữ liệu trước khi đưa lên.",
   "Đánh giá không cần duyệt, reviews.json tự động nhận mọi nội dung khách gửi qua biểu mẫu và hiển thị ngay lập tức cho tất cả mọi người.",
   "Đánh giá được duyệt tự động bằng cách so khớp từ khoá trong chatbot_faqs.json, nếu trùng thì cho hiển thị còn không thì xoá.",
   "Đánh giá chỉ admin mới được viết, khách không có quyền gửi đánh giá nên không cần bước duyệt nào cả."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Về nguyên tắc, đánh giá là nội dung do người dùng tạo nên phải qua kiểm duyệt để tránh spam, quảng cáo, ngôn từ không phù hợp, và để đảm bảo đánh giá gắn đúng sản phẩm. Trong đồ án của nhóm em, vì web tĩnh không có backend ghi dữ liệu, luồng thực tế là khách gửi đánh giá qua biểu mẫu ở trang product-detail, dữ liệu được xử lý ở phía admin: trang admin reviews hiển thị danh sách đánh giá chờ duyệt, admin bấm duyệt thì bản ghi được thêm vào reviews.json, sau đó nhóm em commit và deploy lại GitHub Pages. Như vậy bước duyệt chính là thao tác trên file dữ liệu trước khi công bố, đúng với tinh thần kiểm duyệt dù không có server. Điểm yếu đã thừa nhận là nếu ai đó sửa trực tiếp reviews.json khi deploy tĩnh thì có thể thay đổi nội dung, nên khi lên DB thật cần thêm bảng trạng thái duyệt và phân quyền. Các phương án còn lại sai vì đánh giá không tự hiện ngay, không duyệt bằng so khớp FAQ, và khách có quyền gửi đánh giá.",
  "topic": "data"
 },
 {
  "id": "bv6-a09",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "users.json khoảng 29KB và roles.json chỉ có hai vai trò User và Admin. Nhóm em phân quyền admin ở phía client như thế nào, và vì sao đây là điểm yếu mà nhóm đã tự nhận?",
  "options": [
   "Nhóm em lưu người dùng trong users.json với trường vai trò tham chiếu roles.json, khi đăng nhập thì kiểm tra vai trò và ẩn hoặc hiện giao diện admin; nhưng vì kiểm tra nằm hoàn toàn ở client nên người rành kỹ thuật có thể sửa JS hoặc localStorage để vào trang admin, đó là điểm yếu nhóm đã thừa nhận và đề xuất hướng sửa là có backend xác thực thật.",
   "Nhóm em phân quyền bằng cách mã hoá toàn bộ users.json bằng mật khẩu admin, nên không ai có thể đọc hay sửa file, vì vậy không có điểm yếu nào.",
   "Nhóm em phân quyền ở phía server.js, mọi request vào trang admin đều bị server kiểm tra token nên client không thể vượt qua, kể cả khi sửa mã nguồn.",
   "Nhóm em không phân quyền gì cả, mọi người dùng đều thấy trang admin và đều có thể xoá sản phẩm, nhóm chấp nhận vì đồ án chỉ để demo."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. roles.json chỉ có hai bản ghi id 1 là User và id 2 là Admin, users.json lưu tài khoản khách và admin với tham chiếu tới vai trò. Khi đăng nhập, JS đọc users.json, so khớp thông tin, lưu trạng thái đăng nhập vào localStorage, rồi các trang trong scripts/admin kiểm tra vai trò để quyết định cho vào hay chuyển hướng. Vì toàn bộ kiểm tra chạy trên trình duyệt, người dùng có thể mở DevTools sửa localStorage hoặc sửa file JS để giả vai trò admin, hoặc gọi thẳng URL trang admin. Đây là điểm yếu nhóm em đã thẳng thắn thừa nhận trong phần hạn chế: quyền admin phía client chỉ ẩn giao diện chứ không bảo vệ dữ liệu thật. Hướng khắc phục là đưa xác thực và phân quyền về backend, phát token có chữ ký, kiểm tra ở mỗi API thay đổi dữ liệu. Các phương án còn lại sai vì users.json không được mã hoá, server.js chỉ phục vụ chatbot chứ không kiểm tra quyền admin, và nhóm em có phân quyền chứ không để mở hoàn toàn."
 },
 {
  "id": "bv6-a10",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống giả sử hai khách cùng lúc đặt hàng và cả hai đơn đều được ghi vào orders.json, với cách lưu JSON tĩnh hiện tại, chuyện gì xảy ra và nhóm em giải thích thế nào về giới hạn này?",
  "options": [
   "Với JSON tĩnh, orders.json chỉ là file đọc về trình duyệt chứ không có cơ chế ghi đồng thời, nên hai đơn không thể tự động hợp nhất trên server; trong đồ án, đơn được lưu tạm ở localStorage phía khách và admin cập nhật orders.json khi xử lý, nên nếu nhiều người mua cùng lúc thì dữ liệu không đồng bộ và đây là giới hạn nhóm đã thừa nhận, hướng khắc phục là chuyển sang backend có DB.",
   "Hai đơn sẽ được ghi nối tiếp nhau an toàn vì trình duyệt tự xếp hàng các thao tác ghi file, nên không có chuyện mất đơn hay trùng đơn.",
   "Hai đơn sẽ xung đột và file orders.json bị hỏng vĩnh viễn, buộc nhóm em phải xoá toàn bộ đơn hàng và tạo lại file mới mỗi lần có sự cố.",
   "Hai đơn được gộp thành một đơn chung vì orders.json dùng khoá chính là thời điểm đặt hàng, nên hệ thống tự nhận ra và cộng dồn số lượng."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu, trả lời thẳng vào giới hạn thật của kiến trúc. Trong RoomCraft, orders.json là file dữ liệu tĩnh được fetch về để hiển thị ở trang orders, order-detail và admin orders. Trình duyệt không có quyền ghi vào file trên GitHub Pages, nên luồng thực tế là giỏ hàng và thông tin đơn tạm lưu ở localStorage, còn orders.json chỉ được cập nhật khi admin thao tác và nhóm deploy lại. Hệ quả là nếu nhiều khách đặt cùng lúc, các đơn không được đồng bộ tự động, có thể trùng mã đơn hoặc mất đơn nếu admin ghi đè. Đây chính là điểm yếu nhóm em đã tự nhận: không có backend thật cho đơn hàng, chọn vì phạm vi môn học và deploy tĩnh miễn phí. Cách trình bày với thầy là thừa nhận giới hạn, giải thích nguyên nhân kiến trúc, và nêu hướng khắc phục cụ thể: dựng backend có cơ sở dữ liệu, dùng transaction hoặc khoá khi tạo đơn, sinh mã đơn ở server, đồng bộ tồn kho. Các phương án còn lại sai vì trình duyệt không tự xếp hàng ghi file, file không hỏng vĩnh viễn, và không có cơ chế gộp đơn theo thời điểm.",
  "topic": "data"
 },
 {
  "id": "bv6-a11",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Nếu được yêu cầu chuyển toàn bộ dữ liệu JSON hiện tại lên cơ sở dữ liệu quan hệ, nhóm em sẽ thiết kế bảng như thế nào cho phần sản phẩm, phong cách và danh mục, đặc biệt là xử lý quan hệ nhiều nhiều giữa sản phẩm và phong cách?",
  "options": [
   "Nhóm em sẽ tạo bảng products, styles, categories, và bảng nối product_styles cho quan hệ nhiều nhiều; products giữ khoá ngoại category_id và parent_category_id, bảng nối lưu cặp product_id và style_id để một sản phẩm thuộc nhiều phong cách, còn ảnh và board_ids tách thành bảng phụ.",
   "Nhóm em sẽ gộp tất cả vào một bảng products duy nhất, lưu style_ids và images dưới dạng chuỗi JSON trong một cột, vì cơ sở dữ liệu quan hệ không hỗ trợ nhiều bảng.",
   "Nhóm em sẽ tạo bảng products với cột style_id là mảng, vì hầu hết cơ sở dữ liệu quan hệ hiện nay đều hỗ trợ kiểu mảng nên không cần bảng nối.",
   "Nhóm em sẽ tạo bảng styles và products, trong đó mỗi sản phẩm chỉ được gán đúng một phong cách, các phong cách phụ sẽ bị bỏ đi khi chuyển lên cơ sở dữ liệu."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu, thiết kế chuẩn hoá cho đúng nghiệp vụ. Bảng styles giữ id, slug, name, description như trong styles.json với 7 phong cách. Bảng categories giữ id, tên, và khoá ngoại parent_id để biểu diễn cây danh mục cha con, thay cho parent_category_id đang lưu phẳng trong JSON. Bảng products giữ id dạng chuỗi như product-bohemian-daukas-47-dining-table-01, name, name_en, brand, price, original_price, dimensions, material, material_group, color, color_group, description, description_en, model_3d_url, stock_quantity, product_type, is_active, created_at, category_id, parent_category_id. Vì một sản phẩm có thể thuộc nhiều phong cách qua style_ids, phải tách bảng nối product_styles gồm product_id và style_id, khoá chính ghép hai cột. Tương tự images tách thành bảng product_images với product_id, url, thứ tự, và board_ids tách thành bảng product_boards. Cách này tránh trùng lặp, cho phép truy vấn join để lọc theo phong cách, và giữ được đúng hành vi lọc chéo hiện tại. Các phương án còn lại sai vì nhồi JSON vào một cột làm mất khả năng truy vấn, mảng không phải kiểu chuẩn của mọi DB quan hệ, và bỏ phong cách phụ là làm mất dữ liệu.",
  "topic": "data"
 },
 {
  "id": "bv6-a12",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Về phần đơn hàng, giỏ hàng và mã giảm giá nếu lên cơ sở dữ liệu: nhóm em sẽ tách bảng ra sao để lưu được từng dòng sản phẩm trong đơn, và làm sao biết một mã giảm giá đã được dùng bao nhiêu lần?",
  "options": [
   "Nhóm em sẽ có bảng orders lưu thông tin chung như mã đơn, người đặt, địa chỉ, phương thức ship, tổng tiền, trạng thái; bảng order_items lưu từng dòng gồm order_id, product_id, số lượng, đơn giá tại thời điểm mua; bảng coupons giữ định nghĩa mã và bảng coupon_usages ghi mỗi lần dùng để đếm số lần và chặn lạm dụng.",
   "Nhóm em sẽ lưu cả giỏ hàng vào một cột trong bảng orders dưới dạng chuỗi JSON, nhờ vậy không cần bảng order_items và cũng không cần đếm số lần dùng mã.",
   "Nhóm em sẽ tạo bảng orders với mỗi sản phẩm là một cột riêng như product_1, product_2, product_3, và số lần dùng mã giảm giá lưu trong users.json.",
   "Nhóm em sẽ không lưu đơn hàng trong cơ sở dữ liệu mà tiếp tục dùng localStorage, chỉ chuyển coupons.json lên DB vì mã giảm giá mới là dữ liệu quan trọng."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu, thiết kế tách bảng đúng chuẩn. Bảng orders giữ id, user_id, địa chỉ giao gồm tỉnh quận phường tham chiếu wards, shipping_method_id tham chiếu shipping_methods, coupon_id có thể null, subtotal, discount_amount, shipping_fee, total, status, created_at. Bảng order_items giữ id, order_id, product_id, quantity, unit_price, và nên chụp lại tên sản phẩm tại thời điểm mua để đơn cũ không đổi khi sản phẩm bị sửa giá. Bảng coupons giữ định nghĩa như trong coupons.json gồm code, discount_type, discount_value, min_order_value, expires_at, is_active, và thêm cột max_uses nếu muốn giới hạn. Bảng coupon_usages ghi mỗi lần áp dụng gồm coupon_id, order_id, user_id, used_at, nhờ vậy đếm được số lần dùng bằng truy vấn đếm bản ghi, chặn được việc dùng lại mã quá số lần cho phép, và vẫn giữ được lịch sử. Cách này cũng giải quyết giới hạn hiện tại là orders.json tĩnh không đồng bộ khi nhiều người mua. Các phương án còn lại sai vì nhồi JSON vào một cột làm mất khả năng báo cáo, tạo cột product_1 product_2 là thiết kế sai và không mở rộng được, và bỏ đơn hàng khỏi DB là đi ngược yêu cầu chuyển lên DB.",
  "topic": "data"
 },
 {
  "id": "bv6-a13",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Trong products.json có trường model_3d_url, có sản phẩm có giá trị đường dẫn glb, có sản phẩm để null. Dữ liệu 3D được quản lý thế nào và vì sao không phải sản phẩm nào cũng có model?",
  "options": [
   "model_3d_url trỏ tới file glb trong assets/models, chỉ những sản phẩm nhóm em dựng hoặc xử lý được model 3D mới có giá trị, còn lại để null; trang product-detail kiểm tra trường này để hiện nút xem 3D, nếu null thì ẩn nút, nhờ vậy dữ liệu phản ánh đúng thực tế nguồn model giới hạn.",
   "Mọi sản phẩm đều có model 3D, các giá trị null là lỗi xuất dữ liệu và nhóm em dự định sẽ dựng model cho tất cả sản phẩm trong thời gian tới.",
   "model_3d_url để null nghĩa là sản phẩm đó đã bị xoá khỏi hệ thống, chỉ những sản phẩm còn model mới được bán.",
   "model_3d_url được sinh tự động bằng cách ghép id sản phẩm với đuôi glb, nên giá trị null chỉ xuất hiện khi id sản phẩm bị sai định dạng."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong products.json, ví dụ sản phẩm Ghế sofa đôi gỗ ngoài trời kèm nệm có model_3d_url là assets/models/product-bohemian-outdoor-wooden-loveseat-with-cushions-02.glb, còn nhiều sản phẩm khác như Bàn ăn gỗ Daukas để null. Nguyên nhân là model 3D đến từ hai nguồn: bộ dữ liệu Kaggle mà nhóm xử lý trong tools/3d và model do thành viên tự dựng, số lượng có hạn nên không phủ hết sản phẩm. Trang product-detail đọc trường này, nếu có giá trị thì hiện nút xem 3D và nạp model bằng thư viện 3D chạy trong trình duyệt, nếu null thì ẩn nút để tránh lỗi tải file không tồn tại. Cách lưu null thay vì chuỗi rỗng giúp phân biệt rõ chưa có model với đường dẫn sai. Các phương án còn lại sai vì không phải sản phẩm nào cũng có model, null không có nghĩa là sản phẩm bị xoá, và đường dẫn không được sinh tự động từ id.",
  "topic": "data"
 },
 {
  "id": "bv6-a14",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Ngoài products.json, nhóm em còn những file JSON nào trong data/json và mỗi file phục vụ trang hoặc chức năng gì? Em kể theo nhóm chức năng chứ không cần đọc thuộc danh sách.",
  "options": [
   "Nhóm dữ liệu nội dung gồm products, rooms, room_hotspots, categories, styles, used_products phục vụ duyệt và xem sản phẩm phòng; nhóm người dùng và tương tác gồm users, roles, reviews, wishlist phục vụ tài khoản và đánh giá; nhóm mua hàng gồm orders, coupons, shipping_methods, wards phục vụ giỏ hàng, checkout và đơn; nhóm hỗ trợ gồm chatbot_faqs cho chatbot.",
   "Ngoài products.json nhóm em chỉ có rooms.json và users.json, các chức năng còn lại đều lấy dữ liệu từ hai file này bằng cách lọc theo trường.",
   "Tất cả dữ liệu đều nằm trong một file duy nhất là products.json, các file khác chỉ là bản sao lưu không được dùng tới.",
   "Ngoài products.json nhóm em có thêm một file cấu hình duy nhất là config.json chứa toàn bộ mã giảm giá, phí ship và địa chỉ."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu, nhóm theo chức năng cho dễ nhớ. Nhóm nội dung: products.json khoảng 1.9MB cho danh sách và chi tiết sản phẩm, rooms.json khoảng 102KB cho 49 phòng mẫu, room_hotspots.json khoảng 336KB chứa toạ độ hotspot của từng sản phẩm trên ảnh phòng, categories.json cho danh mục, styles.json cho 7 phong cách, used_products.json cho đồ cũ ở marketplace. Nhóm người dùng và tương tác: users.json khoảng 29KB, roles.json với hai vai trò User và Admin, reviews.json khoảng 79KB cho đánh giá. Nhóm mua hàng: orders.json khoảng 216KB, coupons.json cho mã giảm giá, shipping_methods.json cho ba phương thức giao hàng, wards.json khoảng 246KB cho địa chỉ ba cấp. Nhóm hỗ trợ: chatbot_faqs.json cho câu hỏi nhanh của chatbot. Tổng dữ liệu JSON khoảng 3.5MB. Cách tách file theo miền dữ liệu giúp mỗi trang chỉ tải đúng file cần, dễ review khi làm nhóm, và dễ chuyển từng file lên bảng DB tương ứng sau này. Các phương án còn lại sai vì số file nhiều hơn hai, không có file duy nhất chứa tất cả, và không có config.json gộp chung.",
  "topic": "data"
 },
 {
  "id": "bv6-a15",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Với tình huống mở trang products, gõ tìm kiếm không dấu một từ khoá tiếng Việt và thấy kết quả đúng dù gõ thiếu dấu, dữ liệu sản phẩm đã được chuẩn bị thế nào để việc tìm kiếm này chạy được, và nếu sau này chuyển lên DB thì nên xử lý ra sao?",
  "options": [
   "Việc tìm kiếm không dấu chạy phía client bằng cách chuẩn hoá chuỗi truy vấn và tên sản phẩm về dạng không dấu rồi so khớp, dữ liệu trong products.json vẫn giữ nguyên tiếng Việt có dấu; nếu lên DB thì nên thêm cột tên đã chuẩn hoá không dấu hoặc dùng collation phù hợp để tìm nhanh bằng chỉ mục.",
   "Dữ liệu trong products.json đã được lưu sẵn ở dạng không dấu, nên web không cần xử lý gì thêm, chỉ so khớp chuỗi trực tiếp.",
   "Việc tìm kiếm không dấu do server.js xử lý bằng cách gọi mô hình AI để đoán từ khoá, nên dữ liệu sản phẩm không liên quan.",
   "Việc tìm kiếm không dấu chỉ hoạt động với từ khoá tiếng Anh vì products.json có trường name_en, còn tiếng Việt thì phải gõ đúng dấu mới ra."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong RoomCraft, tên sản phẩm trong products.json vẫn là tiếng Việt có dấu như Bàn ăn gỗ Daukas 119 cm. Khi người dùng gõ từ khoá, JS lấy cả chuỗi truy vấn và tên sản phẩm, chuẩn hoá Unicode dạng tổ hợp rồi xoá các ký tự tổ hợp để bỏ dấu, đưa về chữ thường, sau đó so khớp hoặc kiểm tra chuỗi con. Nhờ vậy gõ ban an van khop voi Bàn ăn. Cách này chạy hoàn toàn phía client trên mảng đã nạp nên không cần server. Nếu chuyển lên cơ sở dữ liệu, làm lại việc chuẩn hoá trên từng bản ghi mỗi lần tìm sẽ chậm khi dữ liệu lớn, nên hướng đúng là thêm cột name_normalized lưu sẵn dạng không dấu và đánh chỉ mục, hoặc dùng collation không phân biệt dấu của DB, khi đó truy vấn tìm kiếm vẫn nhanh. Các phương án còn lại sai vì dữ liệu không lưu sẵn dạng không dấu, tìm kiếm không đi qua chatbot, và tìm kiếm tiếng Việt không dấu vẫn hoạt động bình thường.",
  "topic": "search"
 },
 {
  "id": "bv6-a16",
  "chapter": 12,
  "difficulty": 3,
  "type": "multiple",
  "question": "Nếu được làm lại từ đầu và có điều kiện dựng backend, nhóm em sẽ thay đổi gì trong cách quản lý dữ liệu JSON hiện tại, và những thay đổi nào là ưu tiên trước? Em chọn các hướng đúng với điểm yếu đã nhận. (chọn nhiều đáp án)",
  "options": [
   "Chuyển đơn hàng, giỏ hàng và tồn kho lên cơ sở dữ liệu có backend để đồng bộ khi nhiều người mua cùng lúc",
   "Đưa xác thực và phân quyền admin về phía server thay vì kiểm tra ở client",
   "Tách dữ liệu lớn như products.json thành API có phân trang và lọc phía server để giảm thời gian tải lần đầu",
   "Giữ nguyên toàn bộ JSON tĩnh và chỉ thêm nhiều file JSON hơn để chia nhỏ dữ liệu"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ba hướng đầu là ưu tiên đúng, hướng cuối là sai. Thứ nhất, điểm yếu lớn nhất nhóm đã thừa nhận là không có backend thật cho đơn hàng: giỏ hàng lưu localStorage, đơn lưu orders.json tĩnh, nên nhiều người mua cùng lúc thì dữ liệu không đồng bộ, tồn kho không trừ chính xác. Chuyển orders, order_items, products stock lên DB có transaction sẽ giải quyết gốc rễ. Thứ hai, quyền admin hiện chỉ ẩn giao diện ở client, người rành kỹ thuật có thể sửa localStorage hoặc JS để vào trang admin, nên phải có backend xác thực, phát token và kiểm tra ở từng API thay đổi dữ liệu. Thứ ba, products.json khoảng 1.9MB phải tải trọn gói ở lần đầu, nếu tách thành API có phân trang và lọc phía server thì trang chỉ tải đúng phần cần, cải thiện rõ trải nghiệm trên mạng yếu. Phương án cuối sai vì chia nhỏ JSON tĩnh không giải quyết được đồng bộ ghi, không bảo vệ được quyền admin, và vẫn phải tải nhiều file ở client. Khi trình bày, nhóm em nên nói rõ đây là hướng đi nếu có điều kiện, còn trong phạm vi môn học thì chọn JSON tĩnh là đánh đổi hợp lý để deploy miễn phí trên GitHub Pages.",
  "topic": "data"
 }
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_BV6; }
