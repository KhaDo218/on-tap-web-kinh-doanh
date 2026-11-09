// Ngan hang on bao ve RoomCraft - bv8.js (16 cau) - da ap audit
const QUESTIONS_BV8 = [
 {
  "id": "bv8-a01",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Thầy sẽ hỏi: nhóm em dùng định dạng model 3D nào cho sản phẩm nội thất, và vì sao lại chọn định dạng đó thay vì các định dạng khác như OBJ, FBX hay STL? Em hãy trình bày lý do kỹ thuật và cách định dạng đó được nhúng vào trang chi tiết sản phẩm.",
  "options": [
   "Nhóm em dùng glTF, cụ thể là file .glb (glTF nhị phân) vì đây là định dạng chuẩn mở của Khronos, gói gọn cả hình học, vật liệu PBR, texture và animation trong một file duy nhất nên nhẹ và tải nhanh; thẻ model-viewer của Google hỗ trợ sẵn glTF/.glb nên chỉ cần trỏ src tới file trong assets/models/ là xem được, không phải viết parser riêng.",
   "Nhóm em dùng OBJ vì định dạng này phổ biến nhất và mọi phần mềm dựng hình đều xuất được, còn glTF thì quá mới nên trình duyệt chưa hỗ trợ ổn định.",
   "Nhóm em dùng FBX vì đây là định dạng của Autodesk, có sẵn vật liệu và ánh sáng, phù hợp nhất để nhúng vào web mà không cần thư viện ngoài.",
   "Nhóm em dùng STL vì file STL rất nhẹ, chỉ chứa tam giác bề mặt nên tải cực nhanh, phù hợp với mạng yếu của người dùng Việt Nam."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu: nhóm dùng glTF nhị phân (.glb). Lý do cốt lõi là glTF là chuẩn mở do Khronos Group phát triển, được thiết kế riêng cho việc truyền tải 3D trên web: một file .glb đóng gói cả cây node, mesh, vật liệu PBR (metallic-roughness), texture nhúng và animation, nên chỉ cần một request HTTP thay vì nhiều file rời như OBJ kèm MTL và thư mục texture. Thẻ model-viewer mà nhóm dùng trong product-detail.js được Google xây trên nền Three.js và hỗ trợ glTF/.glb là định dạng chính, chỉ cần setAttribute src trỏ tới assets/models/<product-id>.glb là trình duyệt tự dựng cảnh 3D, xoay, phóng to, thậm chí AR trên điện thoại. Các phương án còn lại sai vì: OBJ không mang vật liệu PBR đầy đủ và phải kèm file MTL cùng texture rời, dễ mất màu khi deploy; FBX là định dạng nặng, thiên về pipeline làm game/phim, trình duyệt không đọc trực tiếp mà phải convert; STL chỉ có hình học thuần, không có màu, không có vật liệu nên món nội thất sẽ hiện một khối xám, mất hết ý nghĩa trưng bày."
 },
 {
  "id": "bv8-a02",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Thầy sẽ hỏi: thẻ model-viewer được nhúng vào trang chi tiết sản phẩm như thế nào trong code của nhóm, và những thuộc tính nào được bật để người dùng xoay, phóng to và xem thực tế tăng cường? Em giải thích từng thuộc tính.",
  "options": [
   "Trong product-detail.js, hàm renderMediaGallery tạo phần tử model-viewer bằng document.createElement, gắn src là đường dẫn model_3d_url đã qua hàm asset, bật camera-controls để kéo chuột xoay và cuộn phóng to, auto-rotate để tự quay, shadow-intensity bằng 1 để có bóng đổ, và ar để mở thực tế tăng cường trên điện thoại; kèm nhãn Đang tải mô hình 3D và bắt sự kiện load/error để ẩn hoặc báo lỗi.",
   "Nhóm em nhúng thẳng một thẻ iframe trỏ sang trang gltf-viewer của Don McCurdy để xem model, còn model-viewer chỉ dùng để trang trí tiêu đề.",
   "Nhóm em dùng thẻ img với src là file .glb, trình duyệt tự nhận diện và render 3D nên không cần thư viện nào cả.",
   "Nhóm em viết một canvas WebGL thuần trong product-detail.js để tự dựng model, không dùng model-viewer vì thẻ này chưa hỗ trợ glTF."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong scripts/js/pages/product-detail.js, hàm renderMediaGallery kiểm tra p.model_3d_url có phải chuỗi khác rỗng không; nếu có thì hiện nút Xem 3D và switcher, xoá nội dung divModelViewer rồi tạo phần tử model-viewer bằng document.createElement. Các thuộc tính được set: src bằng asset(modelUrl) để trỏ đúng assets/models/<product-id>.glb, camera-controls cho phép kéo chuột xoay và cuộn phóng to, auto-rotate cho model tự quay khi rảnh, shadow-intensity bằng 1 để có bóng đổ tăng cảm giác thật, ar để trên điện thoại có nút xem trong không gian thật. Nhóm còn chèn một div nhãn Đang tải mô hình 3D và gắn listener load để ẩn nhãn, listener error để đổi nhãn thành Không thể tải mô hình 3D, đây chính là cơ chế dự phòng khi model lỗi. Các phương án còn lại sai vì: iframe sang gltf-viewer là công cụ kiểm tra ngoài, không phải cách nhúng trong dự án; thẻ img không render được .glb; và nhóm không tự viết WebGL thuần mà dùng model-viewer tải từ CDN jsdelivr."
 },
 {
  "id": "bv8-a03",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: vì sao nhóm em chọn model-viewer tải từ CDN thay vì cài Three.js qua npm rồi bundle vào dự án? Điều này liên quan gì tới kiến trúc tĩnh của RoomCraft và việc deploy lên GitHub Pages?",
  "options": [
   "Vì RoomCraft là site tĩnh thuần HTML/CSS/JS không có bước build, không dùng npm cho frontend; nhúng model-viewer bằng script type module từ cdn.jsdelivr.net giúp không phải cài đặt, không phải bundle, deploy lên GitHub Pages chỉ cần push file lên là chạy, và model-viewer đã đóng gói sẵn Three.js bên trong nên nhóm không phải tự dựng scene, ánh sáng, điều khiển camera.",
   "Vì CDN luôn nhanh hơn máy chủ GitHub Pages nên nhóm chọn CDN để trang tải nhanh hơn, còn lý do kỹ thuật khác không quan trọng.",
   "Vì Three.js qua npm không hỗ trợ định dạng glTF, chỉ model-viewer mới đọc được .glb nên buộc phải dùng CDN.",
   "Vì nhóm em không biết dùng npm nên đành phải dùng CDN, chứ nếu biết thì đã cài Three.js rồi."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Kiến trúc của RoomCraft là frontend tĩnh thuần, không framework, không build tool cho site, chạy bằng Live Server hoặc GitHub Pages từ root branch main. Nếu cài Three.js qua npm thì phải có bước bundle (webpack, vite...) để trình duyệt hiểu, kéo theo node_modules, cấu hình build, và GitHub Pages sẽ phải chạy pipeline — trái với lựa chọn đơn giản hoá của nhóm. model-viewer là web component của Google, bản thân nó đã nhúng Three.js và bộ điều khiển camera, ánh sáng môi trường, nên chỉ cần một dòng script type module trỏ tới cdn.jsdelivr.net/npm/@google/model-viewer@4.0.0/dist/model-viewer.min.js là dùng được thẻ model-viewer ngay. Đánh đổi là phụ thuộc CDN: nếu CDN chết hoặc mạng chặn thì khung 3D không hiện, nhóm chấp nhận vì đây là đồ án môn học và vẫn có ảnh nhiều góc làm phương án chính. Các phương án còn lại sai về bản chất: tốc độ CDN không phải lý do chính và không phải lúc nào cũng nhanh hơn; Three.js hoàn toàn đọc được glTF qua GLTFLoader; và nhóm không phải vì không biết npm mà là chọn kiến trúc không build."
 },
 {
  "id": "bv8-a04",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: nguồn model 3D của nhóm em đến từ đâu, quy trình tạo model diễn ra thế nào, và vì sao nhóm chỉ làm 3D cho một số món nội thất nhất định mà không làm cho toàn bộ sản phẩm?",
  "options": [
   "Model được tạo bằng notebook RoomCraft3D_Kaggle.ipynb chạy trên GPU miễn phí của Kaggle: mỗi thành viên nén thư mục ảnh phong cách mình phụ trách thành zip, tải lên Kaggle làm dataset, dán danh sách product-id vào ô cấu hình, chạy nền Save and Run All để sinh file .glb, tải kết quả về rồi chép vào assets/models; nhóm chỉ làm 235 món nội thất như sofa, ghế, bàn, tủ, kệ, giường, đôn vì đồ trang trí như thảm, tranh, gối, rèm, bình, cây là dạng phẳng hoặc trong suốt, AI dựng ra không đẹp và không thêm giá trị so với ảnh.",
   "Model 3D của nhóm em mua sẵn trên các trang stock 3D rồi đổi tên file theo product-id, không tự tạo nên không cần quy trình gì.",
   "Model 3D được sinh tự động ngay trong trình duyệt bằng JavaScript mỗi khi khách mở trang, không cần lưu file .glb nào trong repo.",
   "Nhóm em làm 3D cho toàn bộ sản phẩm kể cả thảm và tranh, vì món nào cũng cần xem 3D mới đủ trải nghiệm."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Quy trình nằm trong tools/3d/README.md: mỗi thành viên phụ trách một hoặc hai phong cách, nén đúng thư mục ảnh của mình thành zip (ví dụ farmhouse 82MB, bohemian cộng mid-century-modern 96MB), tạo Dataset private trên Kaggle, import notebook RoomCraft3D_Kaggle.ipynb, bật GPU T4 x2 và Internet, gắn dataset, dán PRODUCT_IDS từ file tools/3d/product-ids/<tên>.txt, đặt PRESET là best và MAX_FACES 40000, rồi Save Version chạy nền. Kết quả là file roomcraft3d_models.zip chứa các .glb đặt tên theo product-id, chép vào assets/models và cập nhật model_3d_url trong products.json. Nhóm chỉ làm 235 món nội thất vì đồ trang trí dạng phẳng hoặc trong suốt khi dựng bằng AI cho kết quả xấu, không đáng công. Các phương án còn lại sai: không mua stock; không sinh model trong trình duyệt vì quá nặng; và không làm toàn bộ sản phẩm."
 },
 {
  "id": "bv8-a05",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: file .glb của nhóm nặng khoảng bao nhiêu, nhóm tối ưu dung lượng bằng cách nào, và việc tối ưu đó ảnh hưởng gì tới trải nghiệm người dùng khi mở trang chi tiết sản phẩm?",
  "options": [
   "Mỗi file .glb khoảng 1,5 đến 2 MB; nhóm tối ưu bằng cách giới hạn số mặt MAX_FACES 40000 trong notebook, chọn PRESET best hoặc balanced cho cân bằng chất lượng và dung lượng, chỉ dựng 3D cho món nội thất thay vì đồ trang trí, và chỉ tải model khi người dùng bấm nút Xem 3D chứ không tải ngay khi mở trang, nhờ vậy trang chi tiết vẫn nhẹ và ảnh nhiều góc vẫn là nội dung chính.",
   "Mỗi file .glb khoảng 50 MB vì nhóm giữ nguyên độ phân giải gốc, và nhóm chấp nhận vì mạng Việt Nam giờ nhanh rồi.",
   "Nhóm nén model thành file zip rồi để trình duyệt tự giải nén khi cần, nên dung lượng thực tế không quan trọng.",
   "Nhóm không tối ưu gì cả, cứ để notebook xuất ra sao thì dùng vậy, miễn model hiện được là xong."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. README tools/3d ghi rõ mỗi file .glb khoảng 1,5 đến 2 MB, và notebook có tham số MAX_FACES 40000 để chặn số tam giác, PRESET best hoặc balanced để cân bằng chất lượng với dung lượng (khi gặp lỗi CUDA out of memory thì hạ xuống balanced). Nhóm còn giới hạn phạm vi: chỉ 235 món nội thất, bỏ đồ trang trí phẳng hoặc trong suốt, vì dựng những món đó tốn dung lượng mà không đẹp. Ở phía trang, model-viewer chỉ được tạo và gắn src khi model_3d_url tồn tại, và người dùng phải bấm nút Xem 3D để chuyển sang chế độ 3D, nên file .glb không tải ngay khi mở trang — ảnh nhiều góc vẫn là nội dung tải trước. Các phương án còn lại sai: 50 MB là quá lớn so với thực tế nhóm; zip không giúp trình duyệt tự giải nén model; và nhóm có tối ưu chứ không phải thả nổi."
 },
 {
  "id": "bv8-a06",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: nếu một sản phẩm có model_3d_url nhưng file .glb bị thiếu hoặc hỏng khi deploy, giao diện trang chi tiết sản phẩm sẽ xử lý thế nào? Em mô tả luồng và chỉ ra chỗ nào trong code đảm nhận việc đó.",
  "options": [
   "Hàm renderMediaGallery vẫn tạo model-viewer và gắn listener error một lần; khi file .glb không tải được, listener đổi nhãn Đang tải mô hình 3D thành Không thể tải mô hình 3D và thêm class detail-3d-error, còn nút Xem ảnh vẫn cho quay về chế độ ảnh bình thường nên người dùng không bị kẹt ở khung trống.",
   "Trang sẽ bị treo hoàn toàn vì model-viewer ném lỗi không bắt được, người dùng phải tải lại trang.",
   "Nhóm em không xử lý trường hợp này, file thiếu thì khung 3D trống trơn và không có thông báo gì.",
   "Trang tự động chuyển hướng sang trang 404 để báo lỗi file không tồn tại."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong product-detail.js, renderMediaGallery tạo một div nhãn loadingLabel với nội dung Đang tải mô hình 3D, chèn vào divModelViewer trước model-viewer, rồi gắn modelViewer.addEventListener load để ẩn nhãn khi tải xong, và addEventListener error với option once để đổi nội dung nhãn thành Không thể tải mô hình 3D và thêm class detail-3d-error. Ngoài ra hàm switchMediaMode có kiểm tra: nếu người dùng bấm chế độ 3d mà model_3d_url rỗng hoặc không phải chuỗi thì tự ép về chế độ photo, nên không bao giờ rơi vào khung 3D trống. Đây là cơ chế dự phòng mềm: báo lỗi ngay trong khung, người dùng bấm Xem ảnh để quay lại gallery ảnh nhiều góc vẫn đầy đủ. Các phương án còn lại sai vì: model-viewer không làm treo cả trang; nhóm có xử lý lỗi rõ ràng; và không có chuyện chuyển hướng 404 chỉ vì một file model lỗi."
 },
 {
  "id": "bv8-a07",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Thầy sẽ hỏi: trang chi tiết sản phẩm hiển thị ảnh nhiều góc như thế nào, dữ liệu ảnh nằm ở đâu, và khi người dùng bấm vào ảnh thu nhỏ thì chuyện gì xảy ra trong code?",
  "options": [
   "Mảng images của sản phẩm trong products.json chứa nhiều đường dẫn ảnh; hàm renderMediaGallery lấy ảnh đầu tiên gán vào imgMain, rồi duyệt từng ảnh tạo nút thumb-btn chứa img nhỏ, nút đầu tiên có class active; mỗi nút gắn onclick đổi imgMain.src sang ảnh tương ứng, gọi switchMediaMode photo để chắc chắn đang ở chế độ ảnh, và chuyển class active sang nút vừa bấm.",
   "Trang chỉ hiển thị một ảnh duy nhất vì mỗi sản phẩm chỉ có một ảnh đại diện trong products.json.",
   "Ảnh nhiều góc được tải động từ một API bên ngoài mỗi lần người dùng bấm, không lưu trong repo.",
   "Khi bấm ảnh nhỏ, trang mở một tab mới hiển thị ảnh gốc kích thước đầy đủ chứ không đổi ảnh chính."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong renderMediaGallery, biến images lấy từ p.images, nếu có phần tử thì gán imgMain.src bằng asset(images[0]). Sau đó xoá divThumbnails và lặp qua từng ảnh, tạo button class thumb-btn (ảnh đầu thêm active) chứa thẻ img nhỏ, gắn onclick bằng một IIFE giữ lại chỉ số và đường dẫn, khi bấm thì đổi imgMain.src, gọi switchMediaMode photo để thoát khỏi chế độ 3D nếu đang xem model, rồi bỏ active ở tất cả nút và thêm active cho nút vừa bấm. Nhờ vậy người dùng xem được nhiều góc của món nội thất — rất quan trọng với đồ gỗ vì cần thấy mặt sau, chân, tay vịn. Các phương án còn lại sai: products.json có mảng images nhiều ảnh; ảnh nằm trong assets chứ không gọi API ngoài; và bấm thumbnail đổi ảnh chính ngay tại chỗ chứ không mở tab mới."
 },
 {
  "id": "bv8-a08",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: trên trang chủ, nhóm em dùng video để làm gì và vì sao chọn video thay vì chỉ dùng ảnh tĩnh? Video đó có ảnh hưởng gì tới tốc độ tải trang và nhóm xử lý ra sao?",
  "options": [
   "Video ở trang chủ dùng để dẫn dắt cảm xúc và minh hoạ luồng trải nghiệm Explore Room rồi Discover Furniture rồi View 3D, giúp khách thấy ngay không gian phòng được bài trí ra sao thay vì đọc chữ; nhóm đặt video trong khối hero, dùng thuộc tính autoplay muted loop playsinline để chạy nền không cần bấm, và giữ ảnh tĩnh làm poster để trang vẫn có nội dung ngay khi video chưa tải xong, tránh làm nặng trang chủ.",
   "Video được dùng để thay thế toàn bộ ảnh sản phẩm vì video nhẹ hơn ảnh và dễ nén hơn.",
   "Nhóm em không dùng video ở trang chủ, chỉ dùng ảnh tĩnh vì video làm trang chậm và không cần thiết.",
   "Video trang chủ được phát tự động có tiếng để gây ấn tượng mạnh với người xem ngay từ giây đầu."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trang chủ RoomCraft đặt một khối hero có video nền minh hoạ không gian nội thất, đúng tinh thần lấy không gian phòng làm trung tâm: khách nhìn thấy phòng được bài trí trước khi đọc danh mục. Về kỹ thuật, video nền phải dùng autoplay kèm muted vì trình duyệt chặn autoplay có tiếng, thêm loop để chạy lặp và playsinline để không bị phóng toàn màn hình trên iOS; kèm ảnh poster để khung hero có nội dung ngay từ đầu, và video nên nén dung lượng hợp lý để không kéo chậm trang chủ. Các phương án còn lại sai: video không thay thế ảnh sản phẩm vì ảnh nhẹ hơn nhiều và cần cho lưới sản phẩm; nhóm có dùng video; và video nền không được phát có tiếng vì trình duyệt chặn và gây khó chịu."
 },
 {
  "id": "bv8-a09",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: hotspot trên ảnh phòng ở trang room-detail hoạt động thế nào, dữ liệu toạ độ lưu ở đâu, và vì sao nhóm em chọn cách lưu toạ độ theo phần trăm thay vì toạ độ điểm ảnh tuyệt đối?",
  "options": [
   "Toạ độ hotspot của từng sản phẩm trên ảnh phòng lưu trong room_hotspots.json dưới dạng phần trăm theo chiều rộng và chiều cao ảnh; khi hiển thị, trang đặt các điểm hotspot bằng position absolute với left và top tính theo phần trăm nên ảnh co giãn ở mọi kích thước màn hình mà hotspot vẫn nằm đúng món đồ, bấm vào hotspot mở popup sản phẩm và cho thêm trọn bộ vào giỏ.",
   "Toạ độ hotspot lưu bằng số điểm ảnh tuyệt đối trong room_hotspots.json, và mỗi lần đổi kích thước màn hình trang phải tính lại bằng JavaScript.",
   "Hotspot được vẽ sẵn vào chính file ảnh phòng bằng phần mềm chỉnh ảnh nên không cần dữ liệu toạ độ riêng.",
   "Hotspot được xác định bằng cách dò màu trên ảnh mỗi khi tải trang, không cần file dữ liệu nào."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Dữ liệu room_hotspots.json khoảng 336KB chứa toạ độ của từng sản phẩm trên ảnh phòng, lưu theo phần trăm chiều rộng và chiều cao. Cách này giải quyết bài toán responsive: ảnh phòng hiển thị với nhiều kích thước khác nhau tùy màn hình, nếu lưu điểm ảnh tuyệt đối thì hotspot sẽ lệch ngay khi ảnh co giãn; còn phần trăm thì tỉ lệ luôn giữ nguyên, chỉ cần đặt điểm bằng position absolute với left và top theo phần trăm là khớp. Khi bấm hotspot, trang mở popup thông tin sản phẩm và có nút thêm trọn bộ vào giỏ, đúng luồng Explore Room rồi Discover Furniture. Các phương án còn lại sai: không dùng điểm ảnh tuyệt đối; không vẽ chết vào ảnh vì như vậy không bấm được và không đổi sản phẩm được; và không dò màu vì quá mong manh và tốn CPU."
 },
 {
  "id": "bv8-a10",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy sẽ hỏi tình huống: một thành viên chạy notebook Kaggle xong nhưng model bị méo hình, thiếu chân hoặc dính nền. Nhóm em xử lý thế nào, dùng cơ chế nào trong notebook, và khi nào thì quyết định bỏ món đó?",
  "options": [
   "Nhóm dùng hai cơ chế trong ô cấu hình: REDO_TEXTURE để chạy lại phần texture khi màu sai hoặc mặt sau có hình lạ, và IMAGE_OVERRIDE để chọn ảnh khác làm đầu vào khi hình dạng méo, thiếu chân hoặc dính nền; chạy lại bằng cách thu PRODUCT_IDS chỉ còn các món lỗi rồi Save Version chạy lại, thử hai đến ba lần vẫn hỏng thì bỏ qua món đó, ghi chú báo nhóm và để model_3d_url là null.",
   "Nhóm sửa tay file .glb bằng phần mềm dựng hình 3D chuyên nghiệp cho từng món lỗi, vì notebook không có cơ chế chạy lại.",
   "Nhóm cứ để nguyên model lỗi vì khách cũng không để ý, miễn có khung 3D là được.",
   "Nhóm xoá luôn sản phẩm đó khỏi products.json để không ai thấy model lỗi."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. README tools/3d mô tả rõ bảng sửa lỗi: nếu hình dạng đúng nhưng màu hoặc texture sai, mặt sau có hình lạ thì thêm product-id vào REDO_TEXTURE với một số bất kỳ để đổi seed; nếu hình dạng méo, thiếu chân, dính nền thì dùng IMAGE_OVERRIDE trỏ sang ảnh khác của cùng sản phẩm (ví dụ ảnh thứ ba thay vì ảnh đầu). Khi chạy lại phải thu PRODUCT_IDS chỉ còn các món cần làm lại, vì version mới chạy lại từ đầu, để cả danh sách sẽ tốn GPU vô ích. Thử hai đến ba lần vẫn hỏng thì bỏ qua, ghi chú lại báo nhóm, và model_3d_url giữ null — trang chi tiết sẽ tự ẩn nút Xem 3D và chỉ hiện ảnh nhiều góc. Các phương án còn lại sai: nhóm không sửa tay bằng phần mềm chuyên nghiệp vì không có kỹ năng và thời gian; không để model lỗi vì làm xấu trải nghiệm; và không xoá sản phẩm chỉ vì thiếu 3D."
 },
 {
  "id": "bv8-a11",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy sẽ hỏi tình huống: khách mở trang chi tiết sản phẩm bằng cách bấm đúp vào file product-detail.html trên máy, không qua Live Server. Khung 3D sẽ ra sao, vì sao, và nhóm em đã ghi chú gì để tránh chuyện này khi demo?",
  "options": [
   "Khung 3D sẽ trống hoặc báo lỗi vì mở bằng giao thức file:// thì trình duyệt chặn tải file .glb do chính sách bảo mật, trong khi ảnh nhiều góc vẫn hiện bình thường; nhóm đã ghi chú trong README tools/3d là phải mở qua Live Server hoặc GitHub Pages, và khi demo thì chạy Live Server để model-viewer tải được model.",
   "Khung 3D vẫn hiện bình thường vì model-viewer đọc file cục bộ không cần máy chủ, chỉ có ảnh là bị chặn.",
   "Trang sẽ tự động chuyển sang chế độ 3D và tải model từ CDN thay cho file cục bộ, nên không có vấn đề gì.",
   "Trình duyệt sẽ hỏi quyền truy cập file và người dùng chỉ cần bấm Đồng ý là xem được 3D."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Khi mở trang bằng file://, trình duyệt áp chính sách bảo mật cho tài nguyên cục bộ, chặn các request tải file nhị phân như .glb từ thẻ model-viewer, nên khung 3D trống hoặc hiện nhãn Không thể tải mô hình 3D do listener error. Ảnh nhiều góc vẫn hiện vì thẻ img được phép đọc file cục bộ cùng thư mục. README tools/3d ghi rõ: phải mở trang qua Live Server, mở thẳng file thì trình duyệt chặn tải .glb nên khung 3D trống. Vì vậy khi demo bảo vệ, nhóm chạy Live Server hoặc dùng bản GitHub Pages để model tải đúng. Các phương án còn lại sai: model-viewer không đọc file cục bộ khi bị chặn; trang không tự chuyển sang tải từ CDN; và trình duyệt không hỏi quyền cho trường hợp này."
 },
 {
  "id": "bv8-a12",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy sẽ hỏi: nếu thầy muốn thêm một model 3D mới cho một sản phẩm đang chưa có 3D, em sẽ làm những bước nào trong repo, sửa file nào, và làm sao để không phá vỡ trang chi tiết sản phẩm của các món khác?",
  "options": [
   "Em tạo model bằng notebook Kaggle hoặc xin file .glb đạt, chép vào assets/models giữ nguyên tên theo product-id, mở products.json tìm đúng product-id và đổi model_3d_url từ null thành assets/models/<product-id>.glb, cập nhật cột trang_thai trong tools/3d/danh-sach-3d.csv thành Đã có, rồi commit trên nhánh riêng và tạo Pull Request; vì chỉ thêm một file và sửa một trường JSON nên không ảnh hưởng sản phẩm khác, và nếu JSON sai cú pháp thì VS Code báo đỏ ngay.",
   "Em sửa thẳng file product-detail.js để hardcode đường dẫn model cho sản phẩm đó, vì sửa JSON dễ làm hỏng cả file dữ liệu.",
   "Em phải tạo lại toàn bộ products.json từ đầu bằng script tổng hợp vì file JSON không cho sửa từng trường.",
   "Em chỉ cần chép file .glb vào assets/models là xong, trang tự dò tên file và hiện 3D mà không cần sửa dữ liệu."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Quy trình nằm trong phần D của README tools/3d: checkout main, pull, tạo nhánh tên/3d, chép file .glb đạt vào assets/models giữ nguyên tên product-id, mở data/json/products.json bằng VS Code, Ctrl+F tìm product-id, đổi model_3d_url từ null thành assets/models/<product-id>.glb, sửa cột trang_thai trong danh-sach-3d.csv thành Đã có, commit và push rồi tạo Pull Request, nên đẩy theo đợt 10 đến 20 model. Cách này an toàn vì chỉ thêm file tĩnh và sửa một trường trong mảng JSON, không đụng code; nếu gõ sai cú pháp JSON thì VS Code báo đỏ ngay trước khi commit. Trang chi tiết đọc model_3d_url qua renderMediaGallery nên món nào có URL thì hiện nút Xem 3D, món không có thì ẩn, các món khác không bị ảnh hưởng. Các phương án còn lại sai: không hardcode trong JS; không phải tạo lại toàn bộ JSON; và chỉ chép file .glb thì trang không biết vì không có trường model_3d_url."
 },
 {
  "id": "bv8-a13",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: nhóm em dùng Three.js trực tiếp hay chỉ dùng model-viewer, và nếu thầy yêu cầu tự dựng một cảnh 3D tuỳ biến như đặt nhiều món đồ vào cùng một phòng thì nhóm sẽ làm thế nào dựa trên nền tảng hiện có?",
  "options": [
   "Hiện tại nhóm chỉ dùng model-viewer tải từ CDN, bản thân model-viewer đã nhúng Three.js bên trong; nếu cần cảnh tuỳ biến đặt nhiều món vào một phòng thì nhóm sẽ dùng Three.js trực tiếp từ CDN, viết loader đọc các file .glb có sẵn trong assets/models, đặt từng model theo toạ độ, thêm ánh sáng và điều khiển camera, tận dụng lại kho model đã tạo chứ không phải làm lại từ đầu.",
   "Nhóm em không dùng Three.js dưới bất kỳ hình thức nào, và cũng không thể làm cảnh nhiều món vì model-viewer chỉ xem được một model một lúc và không có cách nào mở rộng.",
   "Nhóm em đã tự viết một engine 3D riêng bằng WebGL thuần trong product-detail.js nên chỉ cần thêm vài dòng là dựng được cả phòng.",
   "Nhóm em sẽ chụp ảnh màn hình từng model rồi ghép thành ảnh 2D, vì làm cảnh 3D thật là bất khả thi với kiến trúc hiện tại."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong dự án, nhóm chỉ nhúng thẻ model-viewer qua script type module từ cdn.jsdelivr.net; model-viewer do Google xây trên Three.js nên Three.js đã có sẵn bên trong nhưng nhóm không gọi trực tiếp. Nếu cần cảnh tuỳ biến, hướng mở rộng hợp lý là import Three.js từ CDN, dùng GLTFLoader đọc các file .glb đã có trong assets/models, đặt từng model theo toạ độ trong phòng, thêm đèn, sàn, điều khiển OrbitControls. Điểm mạnh là kho model .glb đã được tạo sẵn theo product-id nên tái sử dụng được ngay, không phải làm lại. Các phương án còn lại sai: model-viewer có thể mở rộng bằng cách dùng Three.js trực tiếp; nhóm không tự viết engine WebGL thuần; và ghép ảnh 2D không phải giải pháp 3D."
 },
 {
  "id": "bv8-a14",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Thầy sẽ hỏi: trong products.json, trường model_3d_url có vai trò gì và trang chi tiết sản phẩm dựa vào trường này để quyết định hiển thị hay ẩn nút Xem 3D như thế nào? Em nói rõ điều kiện kiểm tra.",
  "options": [
   "Trường model_3d_url chứa đường dẫn tới file .glb của sản phẩm, mặc định là null với món chưa có 3D; trong renderMediaGallery nhóm kiểm tra nếu là chuỗi và sau khi trim khác rỗng thì hiện nút Xem 3D và switcher, tạo model-viewer; ngược lại thì ẩn nút, ẩn switcher và xoá nội dung khung xem, nên sản phẩm chưa có 3D vẫn hiển thị bình thường chỉ với ảnh.",
   "Trường model_3d_url chỉ để ghi chú nội bộ, trang chi tiết không đọc tới, nút Xem 3D luôn hiện với mọi sản phẩm.",
   "Trường model_3d_url chứa mã màu chủ đạo của sản phẩm để tô nền khung 3D, không liên quan tới file model.",
   "Trường model_3d_url bắt buộc phải có với mọi sản phẩm, nếu null thì trang chi tiết báo lỗi và không hiển thị sản phẩm."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong products.json, mỗi sản phẩm có trường model_3d_url, mặc định null; khi thành viên tạo xong model thì sửa thành assets/models/<product-id>.glb. Trong renderMediaGallery, biến modelUrl được tính bằng cách kiểm tra p.model_3d_url có phải chuỗi không rồi trim; nếu modelUrl khác rỗng thì bỏ class hidden ở btnShow3D và switcher, xoá divModelViewer rồi tạo model-viewer; nếu rỗng thì thêm hidden cho cả hai và xoá nội dung khung. Nhờ vậy sản phẩm chưa có 3D vẫn hiện bình thường với ảnh nhiều góc, không có nút thừa gây bấm vào khung trống. Các phương án còn lại sai: trang có đọc trường này; nó là đường dẫn file chứ không phải mã màu; và null là hợp lệ, không gây lỗi trang."
 },
 {
  "id": "bv8-a15",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy sẽ hỏi tình huống: khi demo trên GitHub Pages, mạng phòng thi chặn CDN jsdelivr nên model-viewer không tải được. Nhóm em sẽ xử lý thế nào ngay lúc đó, và về lâu dài nhóm khắc phục ra sao?",
  "options": [
   "Ngay lúc demo, nhóm chuyển sang trình bày bằng ảnh nhiều góc vì gallery ảnh không phụ thuộc CDN, đồng thời giải thích cơ chế dự phòng: nếu model-viewer không tải được thì khung 3D báo lỗi và người dùng quay về ảnh; về lâu dài nhóm có thể tự host file model-viewer.min.js trong repo thay vì gọi CDN, hoặc chạy Live Server cục bộ khi demo để không phụ thuộc mạng ngoài.",
   "Nhóm em sẽ không demo được gì cả vì toàn bộ trang phụ thuộc CDN, kể cả ảnh và dữ liệu JSON.",
   "Nhóm em sẽ nhờ thầy mở mạng cho CDN, còn nếu không được thì xin dời lịch bảo vệ sang hôm khác.",
   "Nhóm em sẽ sửa code ngay tại chỗ để thay model-viewer bằng một thư viện khác cũng tải từ CDN khác, coi như giải pháp tình thế."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trang chi tiết sản phẩm có hai kênh hiển thị độc lập: gallery ảnh nhiều góc dùng thẻ img trỏ file trong assets, và khung 3D dùng model-viewer tải từ cdn.jsdelivr.net. Nếu CDN bị chặn, chỉ khung 3D hỏng, ảnh vẫn hiện, nên khi demo nhóm chuyển sang trình bày ảnh và giải thích cơ chế dự phòng đã có sẵn trong code (listener error đổi nhãn, switchMediaMode ép về photo). Về lâu dài, cách khắc phục gọn nhất là tải file model-viewer.min.js về đặt trong repo và trỏ script tới file nội bộ, hoặc demo bằng Live Server cục bộ để không phụ thuộc mạng phòng thi. Các phương án còn lại sai: ảnh và JSON không phụ thuộc CDN; không cần dời lịch; và đổi sang CDN khác vẫn là phụ thuộc mạng ngoài, không giải quyết gốc."
 },
 {
  "id": "bv8-a16",
  "chapter": 12,
  "difficulty": 3,
  "type": "multiple",
  "question": "Thầy sẽ hỏi tổng hợp: đâu là những điểm yếu thật sự của phần 3D và đa phương tiện trong RoomCraft mà nhóm em tự nhận, và mỗi điểm yếu đó nhóm đã có biện pháp giảm thiểu nào rồi? Em chọn các ý đúng. (chọn nhiều đáp án)",
  "options": [
   "Phụ thuộc CDN jsdelivr để tải model-viewer nên nếu mạng chặn thì khung 3D hỏng, nhóm giảm thiểu bằng gallery ảnh nhiều góc làm kênh chính và listener error báo lỗi rõ ràng.",
   "Model 3D do AI dựng từ ảnh nên có món bị méo hoặc sai texture, nhóm giảm thiểu bằng quy trình kiểm tra từng file trên gltf-viewer, cơ chế REDO_TEXTURE và IMAGE_OVERRIDE, và bỏ qua món hỏng sau hai đến ba lần thử.",
   "File .glb vẫn nặng khoảng 1,5 đến 2 MB mỗi model và chỉ tải khi bấm Xem 3D, nhóm giảm thiểu bằng giới hạn MAX_FACES 40000, chọn preset phù hợp và chỉ làm 3D cho món nội thất chứ không làm đồ trang trí.",
   "Nhóm đã khắc phục triệt để mọi điểm yếu bằng cách tự host toàn bộ model và thư viện trong repo, nên không còn phụ thuộc CDN hay gặp model lỗi nữa."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ba ý đầu là ba điểm yếu thật mà nhóm tự nhận và đã có biện pháp giảm thiểu tương ứng. Thứ nhất là phụ thuộc CDN: model-viewer tải từ cdn.jsdelivr.net, nếu mạng chặn thì khung 3D hỏng, nên nhóm giữ gallery ảnh nhiều góc làm kênh chính và có listener error báo Không thể tải mô hình 3D, switchMediaMode ép về chế độ ảnh. Thứ hai là chất lượng model do AI dựng từ ảnh: có món méo hình, thiếu chân, sai texture, nên README tools/3d hướng dẫn kiểm tra từng file trên gltf-viewer, dùng REDO_TEXTURE và IMAGE_OVERRIDE để chạy lại, thử hai đến ba lần vẫn hỏng thì bỏ qua và ghi chú. Thứ ba là dung lượng: mỗi file .glb khoảng 1,5 đến 2 MB, nhóm giới hạn MAX_FACES 40000, chọn preset best hoặc balanced, chỉ làm 235 món nội thất và chỉ tải model khi người dùng bấm Xem 3D. Ý thứ tư sai vì nhóm chưa tự host model-viewer trong repo và vẫn còn model lỗi phải bỏ qua, nên không thể nói đã khắc phục triệt để."
 }
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_BV8; }
