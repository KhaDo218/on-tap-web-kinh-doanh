// Ngan hang on bao ve RoomCraft - bv5.js (25 cau) - da ap audit
const QUESTIONS_BV5 = [
 {
  "id": "bv5-a01",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Thầy sẽ hỏi: file catalog-filter.js được nhóm em dùng ở những trang nào, và vì sao lại tách nó ra thành một component dùng chung thay vì viết riêng cho từng trang? Em trình bày cách tổ chức đó.",
  "options": [
   "File catalog-filter.js được dùng ở products.html (Sản phẩm mới) và marketplace.html (Đồ cũ) vì hai trang có cùng một khung lọc gồm mức giá, danh mục, chất liệu, màu sắc, thương hiệu, chỉ còn hàng, ô tìm kiếm, sắp xếp, nhãn lọc đang chọn và phân trang; nhóm tách ra để không lặp code, chỉ cần trang tự truyền phần lọc riêng của mình (Phong cách ở products, Tình trạng đồ cũ ở marketplace) vào tham số htmlRieng của hàm renderFilterPanel.",
   "Nhóm em viết riêng mỗi trang một file lọc vì hai trang khác nhau hoàn toàn, không có điểm chung nào.",
   "File này chỉ dùng ở trang admin products để lọc bảng quản trị, còn trang khách thì viết tay từng trang.",
   "File này chỉ là nơi khai báo mảng hằng số màu sắc và chất liệu, không chứa hàm lọc nào."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu: catalog-filter.js là bộ lọc dùng chung cho products.html và marketplace.html. Lý do tách component là hai trang có cùng khung lọc giống hệt nhau về cấu trúc: mức giá (5 khoảng PRICE_RANGES), danh mục, chất liệu (MATERIAL_GROUPS), màu sắc (COLOR_GROUPS có swatch), thương hiệu, checkbox chỉ còn hàng, ô tìm kiếm không dấu, sắp xếp và phân trang 12 món/trang. Nếu viết riêng thì mỗi lần sửa logic lọc hay sửa giao diện khung lọc phải sửa hai nơi, dễ lệch nhau. Cách nhóm làm là hàm renderFilterPanel(containerId, dsGoc, htmlRieng) nhận thêm một chuỗi HTML riêng của trang, đặt ở đầu khung lọc, nên products truyền phần chọn Phong cách còn marketplace truyền phần chọn Tình trạng đồ cũ. Các phương án còn lại sai vì hai trang thực tế có chung khung lọc, file không nằm trong admin, và nó chứa rất nhiều hàm xử lý chứ không chỉ khai báo hằng số."
 },
 {
  "id": "bv5-a02",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: khi khách bấm chọn một ô trong khung lọc, chuyện gì xảy ra từ lúc bấm đến lúc danh sách sản phẩm được vẽ lại? Em mô tả cơ chế lọc ngay (live filter) trong catalog-filter.js.",
  "options": [
   "Khung lọc gắn một listener change ở cấp khung (ganLocNgay), khi ô input hoặc select đổi giá trị thì gọi scheduleFilterChange chờ 150ms rồi mới gọi hàm onFilterChange của trang; trang đọc trạng thái bằng getFilterState, lọc bằng filterProductList, sắp xếp bằng sortProductList rồi vẽ lại danh sách và phân trang, không cần nút Áp dụng.",
   "Mỗi ô lọc có một nút Áp dụng riêng, khách phải bấm nút thì bộ lọc mới chạy, nếu không bấm thì danh sách giữ nguyên.",
   "Khi khách bấm ô lọc thì trang tải lại toàn bộ (reload) và server trả về danh sách đã lọc sẵn.",
   "Khung lọc chỉ lưu lựa chọn vào localStorage, danh sách sản phẩm chỉ đổi khi khách tải lại trang bằng tay."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Cơ chế trong catalog-filter.js là lọc ngay không cần nút Áp dụng. Cụ thể hàm ganLocNgay gắn một listener change duy nhất lên khung lọc (đánh dấu data-loc-ngay để không gắn trùng), khi phần tử bên trong đổi giá trị và không phải ô tìm kiếm thì gọi scheduleFilterChange. Hàm này dùng clearTimeout rồi setTimeout 150ms, mục đích là khi khách bấm liên tiếp nhiều ô thì chỉ lọc một lần, tránh vẽ lại nhiều lần. Hết 150ms nó gọi onFilterChange, đây là hàm do trang định nghĩa. Trang sẽ gọi getFilterState để đọc toàn bộ trạng thái (từ khóa, giá, danh mục, mảng chất liệu, mảng màu, thương hiệu, còn hàng, sắp xếp), gọi filterProductList để lọc, sortProductList để sắp xếp, rồi vẽ lại danh sách và phân trang. Ô tìm kiếm thì có timer riêng 300ms để đợi khách ngừng gõ. Các phương án còn lại sai vì giao diện không có nút Áp dụng, không reload trang, và không chỉ lưu localStorage."
 },
 {
  "id": "bv5-a03",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: hàm boDau và diemTimKiem trong catalog-filter.js xử lý tìm kiếm tiếng Việt không dấu như thế nào, và vì sao nhóm không tìm luôn trong phần mô tả sản phẩm?",
  "options": [
   "boDau dùng normalize NFD rồi xoá ký tự tổ hợp và đổi đ thành d để so sánh không dấu; diemTimKiem chấm điểm khớp theo tên, thương hiệu, chất liệu, màu với các mức 4-3-2-1, và nhóm cố ý không tìm trong mô tả để từ khóa bàn trà không trả về khăn trải bàn hay ghế không trả về bàn ăn có nhắc tới ghế.",
   "boDau chỉ đổi chữ hoa thành chữ thường, còn tìm kiếm so khớp tuyệt đối cả chuỗi nên gõ thiếu dấu là không ra kết quả.",
   "Nhóm tìm trong toàn bộ mô tả sản phẩm để kết quả nhiều nhất có thể, kể cả khi từ khóa chỉ xuất hiện trong câu quảng cáo.",
   "Nhóm dùng thư viện bên ngoài để bỏ dấu vì JavaScript thuần không làm được việc này."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Hàm boDau chuyển chuỗi về chữ thường, gọi normalize('NFD') để tách dấu ra khỏi ký tự gốc, xoá các ký tự tổ hợp bằng biểu thức chính quy, rồi thay đ thành d, nhờ vậy Ghế bành thành ghe banh. Hàm tachTu cắt chuỗi thành mảng từ. Hàm khopTu cho phép khớp hẳn hoặc khớp phần đầu nếu từ khóa dài từ 4 ký tự trở lên, nên ban chỉ khớp bàn/bán chứ không khớp bảng, còn sofa khớp được sofas. Hàm diemTimKiem chấm điểm: 4 nếu tên bắt đầu bằng cụm từ khóa, 3 nếu tên chứa nguyên cụm, 2 nếu tên có đủ các từ, 1 nếu chỉ khớp thương hiệu/chất liệu/màu, 0 là không khớp. Điểm này còn dùng để khi đang tìm kiếm thì các món khớp tên hơn được xếp lên trước trong sortProductList. Việc cố ý không tìm trong mô tả là quyết định thiết kế để tránh kết quả nhiễu, đã ghi chú rõ trong code. Các phương án còn lại sai vì boDau làm nhiều hơn đổi hoa thường, nhóm không tìm trong mô tả, và không dùng thư viện ngoài."
 },
 {
  "id": "bv5-a04",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: trạng thái bộ lọc được đồng bộ với URL như thế nào? Em nói rõ hai hàm readFilterParams và filterStateToQuery làm gì và vì sao nhóm cần đồng bộ URL.",
  "options": [
   "readFilterParams đọc các tham số q, price, category, material, color, brand, stock, sort từ địa chỉ trang (material và color tách theo dấu phẩy), còn filterStateToQuery dựng lại chuỗi ?... từ trạng thái lọc, bỏ sort nếu trùng mặc định; đồng bộ URL để khách copy link hoặc bấm Back/Forward vẫn giữ đúng bộ lọc và chia sẻ được cho người khác.",
   "Nhóm lưu bộ lọc vào một biến toàn cục duy nhất, không đụng tới URL, nên link luôn là products.html trơn.",
   "Nhóm ghi bộ lọc vào cookie để server đọc lại mỗi lần tải trang, không dùng query string.",
   "Nhóm dùng sessionStorage để lưu bộ lọc, và URL chỉ chứa số trang hiện tại."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Hàm readFilterParams gọi getParam cho từng khóa: q, price, category, material, color, brand, stock, sort; với material và color thì lấy chuỗi rồi split theo dấu phẩy thành mảng, còn stock thì so sánh bằng 1 để ra boolean inStock. Hàm filterStateToQuery làm chiều ngược lại: nhận state, mảng extra (tham số riêng của trang) và defaultSort, đẩy từng tiêu chí vào mảng params với encodeURIComponent cho các giá trị có dấu cách hoặc tiếng Việt, chỉ thêm sort khi khác mặc định, cuối cùng nối bằng dấu và trả về chuỗi bắt đầu bằng dấu hỏi. Nhờ cặp hàm này, mỗi lần khách đổi lọc trang có thể gọi history.replaceState hoặc pushState để cập nhật địa chỉ mà không reload. Lợi ích là khách copy link gửi bạn bè vẫn mở đúng bộ lọc, bấm Back/Forward trình duyệt vẫn khôi phục đúng trạng thái, và khi tải lại trang thì setFilterState(readFilterParams()) dựng lại đúng các ô đã chọn. Các phương án còn lại sai vì dự án thực tế có đồng bộ URL, không dùng cookie hay sessionStorage cho việc này."
 },
 {
  "id": "bv5-a05",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Tình huống thầy đưa: khách mở link products.html?material=Gỗ,Da&price=1000000-3000000 nhưng sau đó nhóm đổi tên nhóm chất liệu trong dữ liệu khiến giá trị cũ không còn khớp. Hệ thống sẽ hiển thị thế nào và nhóm em xử lý ra sao để không bị màn hình trắng hay lỗi?",
  "options": [
   "setFilterState sẽ gán giá trị vào các ô checkbox theo đúng chuỗi trong URL, nếu không ô nào khớp thì bộ lọc chất liệu coi như rỗng và danh sách hiển thị rộng hơn chứ không lỗi; với select danh mục và thương hiệu thì code kiểm tra lại, nếu giá trị không khớp option nào thì gán về chuỗi rỗng, nên trang vẫn chạy và nhóm chỉ cần giữ danh sách nhóm chất liệu/màu ổn định hoặc thêm bước ánh xạ khi đổi tên.",
   "Trang sẽ ném lỗi JavaScript và dừng toàn bộ việc render vì không tìm thấy checkbox tương ứng.",
   "Trình duyệt tự động sửa tham số URL cho khớp dữ liệu mới nên không có vấn đề gì xảy ra.",
   "Toàn bộ sản phẩm sẽ bị ẩn đi cho đến khi khách bấm nút Đặt lại."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong setFilterState, với danh mục và thương hiệu, sau khi gán value cho select, code kiểm tra lại nếu giá trị không khớp option nào thì gán về chuỗi rỗng, đây chính là chốt chặn để URL cũ không làm select rơi vào trạng thái không xác định. Với chất liệu và màu, setCheckedValues duyệt các input và chỉ check những ô có value nằm trong mảng truyền vào, nên nếu tên nhóm đã đổi thì không ô nào được check, bộ lọc chất liệu coi như không áp dụng và danh sách hiển thị rộng hơn, không gây lỗi. Về phía lọc, filterProductList so sánh getCatalogMaterialGroup(p) với mảng state.materials, nếu mảng chứa giá trị lạ thì không sản phẩm nào khớp và danh sách rỗng, nhưng giao diện vẫn vẽ bình thường. Cách nhóm phòng ngừa là giữ bộ nhóm chất liệu và màu cố định trong MATERIAL_GROUPS và COLOR_GROUPS, và nếu buộc phải đổi tên thì thêm bước ánh xạ giá trị cũ sang mới khi đọc URL. Các phương án còn lại sai vì code có kiểm tra fallback, trình duyệt không tự sửa URL, và trang không ẩn toàn bộ sản phẩm."
 },
 {
  "id": "bv5-a06",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: hàm filterProductList lọc theo những tiêu chí nào và thứ tự kiểm tra ra sao? Em giải thích vì sao nhóm lọc danh mục theo cả danh mục con.",
  "options": [
   "filterProductList duyệt từng sản phẩm và loại dần theo giá, danh mục (gồm cả danh mục con qua getCategoryWithChildren), chất liệu, màu, thương hiệu, còn hàng, cuối cùng là từ khóa với điểm diemTimKiem; lọc theo cả danh mục con để khách chọn danh mục cha như Ghế vẫn thấy được các loại ghế con bên trong.",
   "filterProductList chỉ lọc theo một tiêu chí duy nhất là giá, các tiêu chí khác do trang tự xử lý riêng.",
   "filterProductList lọc theo danh mục nhưng chỉ khớp đúng id danh mục cha, không bao giờ lấy danh mục con.",
   "filterProductList lọc bằng cách gọi API lên server để server trả về danh sách đã lọc."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Hàm filterProductList nhận danh sách gốc và state, chuẩn bị dsDanhMuc bằng getCategoryWithChildren nếu có chọn danh mục, rồi duyệt từng sản phẩm với chuỗi điều kiện loại trừ: không nằm trong khoảng giá thì bỏ, có chọn danh mục mà category_id không nằm trong dsDanhMuc thì bỏ, có chọn chất liệu mà getCatalogMaterialGroup không nằm trong mảng thì bỏ, tương tự với màu qua getCatalogColorGroup, thương hiệu phải trùng, nếu bật chỉ còn hàng thì stock_quantity phải lớn hơn 0, và nếu có từ khóa thì gán p._diem bằng diemTimKiem và bỏ khi điểm bằng 0. Hàm getCategoryWithChildren lấy id danh mục được chọn rồi duyệt bảng categories, thêm các danh mục có parent_id trùng id đó, nhờ vậy chọn danh mục cha vẫn ra sản phẩm của danh mục con. Điểm _diem còn được sortProductList dùng để ưu tiên món khớp tên hơn khi đang tìm kiếm. Các phương án còn lại sai vì hàm lọc nhiều tiêu chí, có xử lý danh mục con, và toàn bộ lọc chạy phía client trên dữ liệu JSON đã nạp."
 },
 {
  "id": "bv5-a07",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: hàm sortProductList hỗ trợ những kiểu sắp xếp nào và có quy tắc đặc biệt gì về sản phẩm hết hàng? Em giải thích vì sao nhóm chọn quy tắc đó.",
  "options": [
   "sortProductList hỗ trợ default, newest, bestseller, rating, price-asc, price-desc, name-asc và grade; quy tắc đặc biệt là món hết hàng luôn bị đẩy xuống cuối bất kể kiểu sắp xếp, để khách thấy món mua được trước, và khi đang tìm kiếm thì cùng thứ tự sẽ ưu tiên món khớp tên hơn qua _diem.",
   "sortProductList chỉ có hai kiểu là giá tăng và giá giảm, không hỗ trợ kiểu nào khác.",
   "sortProductList xếp món hết hàng lên đầu để khách thấy ngay và có thể đặt trước.",
   "sortProductList sắp xếp bằng cách đổi thứ tự mảng gốc trong bộ nhớ đệm của getTable nên các trang khác cũng bị ảnh hưởng."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Hàm sortProductList nhận danh sách, kiểu sort và từ khóa. Tùy kiểu, nó chuẩn bị dữ liệu phụ: nếu bestseller thì lấy getSoldMap, nếu rating thì lấy getRatingMap, và với grade thì dùng bảng thứ tự Like New, Good, Fair. Trước khi sort, nó gán _viTri cho từng phần tử để giữ thứ tự ổn định khi các tiêu chí bằng nhau. Trong hàm so sánh, việc đầu tiên là so hetA và hetB dựa trên stock_quantity, món hết hàng luôn bị đẩy xuống cuối, đây là quyết định thiết kế để khách thấy món mua được trước. Sau đó mới so theo kiểu sort: giá tăng/giảm, tên theo localeCompare tiếng Việt, newest theo created_at hoặc id, bestseller theo số đã bán, rating theo điểm rồi số lượt, grade theo tình trạng. Nếu đang tìm kiếm và các tiêu chí bằng nhau thì so _diem để món khớp tên hơn lên trước, cuối cùng mới dùng _viTri. Các phương án còn lại sai vì có nhiều kiểu sort, món hết hàng bị đẩy xuống chứ không lên đầu, và hàm sort trên mảng kết quả chứ không sửa bảng gốc."
 },
 {
  "id": "bv5-a08",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Thầy sẽ hỏi: hàm renderFilterPanel vẽ khung lọc gồm những nhóm nào, và nhóm em xử lý ra sao với những lựa chọn không có sản phẩm nào (ví dụ một nhóm màu đếm ra 0 món)?",
  "options": [
   "renderFilterPanel vẽ các nhóm Mức giá, Danh mục, Chất liệu, Màu sắc, Thương hiệu, Chỉ còn hàng, kèm dòng đếm kết quả; với mỗi lựa chọn nó đếm số món bằng demTheoGia hoặc demTheoTruong và nếu đếm ra 0 thì bỏ qua không vẽ lựa chọn đó, để khung lọc gọn và khách không bấm vào lựa chọn chắc chắn rỗng.",
   "renderFilterPanel vẽ tất cả lựa chọn bất kể có sản phẩm hay không, kèm số 0 bên cạnh để khách biết.",
   "renderFilterPanel chỉ vẽ nhóm Mức giá, các nhóm còn lại do trang tự vẽ bằng tay.",
   "renderFilterPanel vẽ khung lọc nhưng không hiển thị số lượng sản phẩm của từng lựa chọn."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Hàm renderFilterPanel nhận containerId, dsGoc và htmlRieng, dựng chuỗi HTML gồm phần header có nút Đặt lại, phần htmlRieng của trang, rồi lần lượt các nhóm: Mức giá dùng PRICE_RANGES với demTheoGia, Danh mục dùng select từ taoOptionDanhMuc, Chất liệu dùng MATERIAL_GROUPS với demTheoTruong theo trường material_group, Màu sắc dùng COLOR_GROUPS với swatch màu và demTheoTruong theo color_group, Thương hiệu dùng select từ taoOptionThuongHieu, cuối cùng là checkbox chỉ còn hàng và nút filter-live-count hiển thị số kết quả. Ở mỗi vòng lặp, nếu số đếm bằng 0 thì code dùng continue để bỏ qua lựa chọn đó, nhờ vậy khung lọc không hiện những nhóm màu hay chất liệu chắc chắn không có sản phẩm, giúp giao diện gọn và tránh khách bấm vào rồi thấy danh sách rỗng. Số đếm còn được hiển thị ngay cạnh nhãn bằng thẻ em class filter-count để khách biết mỗi lựa chọn có bao nhiêu món. Các phương án còn lại sai vì code có bỏ lựa chọn rỗng, vẽ đủ các nhóm, và có hiển thị số lượng."
 },
 {
  "id": "bv5-a09",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: hàm getCatalogMaterialGroup và getCatalogColorGroup trong catalog-filter.js làm gì, và vì sao nhóm cần hai hàm này thay vì so sánh trực tiếp trường material và color của sản phẩm?",
  "options": [
   "Hai hàm quy đổi trường material và color tự do của sản phẩm về một nhóm chuẩn trong MATERIAL_GROUPS và COLOR_GROUPS, ưu tiên dùng material_group/color_group nếu có sẵn, nếu không thì dò bằng biểu thức chính quy trên chuỗi đã bỏ dấu; nhờ vậy bộ lọc chỉ có vài nhóm cố định thay vì hàng trăm giá trị chất liệu/màu khác nhau trong dữ liệu.",
   "Hai hàm này chỉ để đổi màu hiển thị của ô tròn swatch, không liên quan gì đến việc lọc.",
   "Hai hàm này gọi lên server để hỏi nhóm chất liệu và màu của từng sản phẩm.",
   "Hai hàm này chỉ trả về đúng chuỗi material và color gốc, không quy đổi gì cả."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Dữ liệu sản phẩm có trường material và color viết tự do, ví dụ gỗ sồi, da bò, vải linen, nên nếu đưa thẳng vào bộ lọc sẽ có hàng trăm giá trị khác nhau, khách không biết chọn gì. Hàm getCatalogMaterialGroup kiểm tra nếu sản phẩm đã có material_group hợp lệ trong MATERIAL_GROUPS thì dùng luôn, nếu không thì lấy material chuyển chữ thường rồi dò lần lượt các biểu thức chính quy cho đá và bê tông, gốm sứ, thủy tinh, mây tre cói, gỗ, da, kim loại, vải và sợi, cuối cùng trả về Khác. Hàm getCatalogColorGroup làm tương tự nhưng dùng boDau trên color rồi dò các nhóm màu như trắng kem, đen, xám, xanh lá, xanh dương, vàng đồng, hồng đỏ cam, be nâu, nhiều màu. Nhờ vậy bộ lọc chỉ có 9 nhóm chất liệu và 9 nhóm màu cố định, đếm số món bằng demTheoTruong cũng dựa trên hai hàm này. Các phương án còn lại sai vì hai hàm phục vụ lọc chứ không chỉ swatch, chạy phía client, và có quy đổi thật."
 },
 {
  "id": "bv5-a10",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: hàm renderActiveFilterTags hiển thị nhãn lọc đang chọn như thế nào, và khi khách bấm dấu X trên một nhãn thì chuyện gì xảy ra? Em giải thích cơ chế bỏ lọc từng nhãn.",
  "options": [
   "renderActiveFilterTags duyệt state và extraTags để tạo các chip, mỗi chip gắn onclick là một câu lệnh xoá đúng tiêu chí đó (ví dụ xoá ô tìm kiếm, chọn lại radio giá đầu tiên, bỏ check một ô chất liệu bằng boChonOLoc) rồi gọi onFilterChange để lọc lại ngay, nên khách bỏ từng nhãn mà không phải bấm Đặt lại toàn bộ.",
   "renderActiveFilterTags chỉ hiển thị chữ, không gắn sự kiện nào, khách phải tự mở khung lọc để bỏ tiêu chí.",
   "Khi bấm dấu X trên một nhãn thì trang tải lại và mất toàn bộ bộ lọc, kể cả các nhãn khác.",
   "Mỗi nhãn khi bấm sẽ mở một hộp thoại xác nhận rồi mới bỏ lọc."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Hàm renderActiveFilterTags nhận containerId, state và extraTags, xoá nội dung cũ rồi dựng mảng tags. Với từ khóa thì nhãn có lệnh xoá giá trị ô txtFilterSearch; với giá thì tìm khoảng giá tương ứng trong PRICE_RANGES và lệnh chọn lại radio đầu tiên; với danh mục thì xoá select cboFilterCategory; với từng chất liệu và màu thì gọi boChonOLoc với containerId và giá trị để bỏ check đúng ô đó; với thương hiệu thì xoá select; với còn hàng thì bỏ check checkbox. Mỗi chip được tạo bằng createElement span với class active-tag-chip, gắn thuộc tính onclick bằng chuỗi lệnh xoá cộng thêm onFilterChange, và title Bỏ lọc này. Nhờ vậy khách có thể bỏ từng tiêu chí một cách trực quan ngay trên dải nhãn, không phải mở khung lọc hay bấm Đặt lại. Các phương án còn lại sai vì chip có gắn sự kiện, không reload trang, và không có hộp thoại xác nhận."
 },
 {
  "id": "bv5-a11",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: hàm renderFilterPagination vẽ phân trang như thế nào và vì sao nhóm chọn cách hiển thị có dấu ba chấm thay vì liệt kê hết các trang?",
  "options": [
   "renderFilterPagination chỉ vẽ khi có hơn một trang, luôn hiện trang đầu, trang cuối và các trang quanh trang hiện tại, chèn dấu ba chấm ở khoảng cách xa, kèm nút Trước và Tiếp; cách này giữ thanh phân trang gọn khi danh sách có nhiều trang mà khách vẫn nhảy nhanh được về đầu hoặc cuối.",
   "renderFilterPagination liệt kê toàn bộ số trang từ 1 đến hết, không bao giờ dùng dấu ba chấm.",
   "renderFilterPagination chỉ hiện nút Trước và Tiếp, không hiện số trang nào.",
   "renderFilterPagination dùng vô hạn cuộn (infinite scroll) thay cho nút số trang."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Hàm renderFilterPagination nhận containerId, page và pageCount, nếu pageCount nhỏ hơn hoặc bằng 1 thì xoá nội dung và không vẽ gì. Ngược lại nó dựng chuỗi HTML: nếu page lớn hơn 1 thì thêm nút Trước, rồi vòng lặp từ 1 đến pageCount, chỉ vẽ số trang khi là trang đầu, trang cuối, hoặc cách trang hiện tại không quá 1, còn nếu cách đúng 2 thì chèn dấu ba chấm, cuối cùng nếu chưa phải trang cuối thì thêm nút Tiếp. Mỗi nút gọi goToFilterPage với số trang, nút đang chọn có class active và aria-current page để hỗ trợ trình đọc màn hình. Kích thước trang là FILTER_PAGE_SIZE bằng 12 món. Cách hiển thị có dấu ba chấm giúp thanh phân trang không bị tràn khi có nhiều trang, đồng thời khách vẫn nhảy nhanh về trang đầu hoặc trang cuối. Các phương án còn lại sai vì code có dùng dấu ba chấm, có hiện số trang, và không dùng infinite scroll."
 },
 {
  "id": "bv5-a12",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Thầy sẽ hỏi: component header.js và footer.js được nhúng vào các trang như thế nào, và vì sao nhóm em chọn cách inject bằng JavaScript thay vì copy HTML header/footer vào từng trang?",
  "options": [
   "Mỗi trang chỉ đặt một khung rỗng rồi gọi hàm renderHeader và renderFooter trong component để inject HTML header/footer vào, nhờ vậy chỉ cần sửa một file là toàn bộ các trang cập nhật theo, tránh lệch menu giữa các trang và giảm số dòng HTML lặp lại.",
   "Nhóm copy nguyên khối HTML header và footer vào từng trang để trang tải nhanh hơn, chấp nhận phải sửa nhiều nơi khi đổi menu.",
   "Header và footer được server Node.js render sẵn rồi trả về trong mỗi lần tải trang.",
   "Header và footer được nhúng bằng iframe trỏ tới một file HTML riêng."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong dự án, mỗi trang HTML chỉ có một phần tử khung, sau khi nạp dữ liệu thì hàm initPage gọi renderHeader với tên mục đang active (ví dụ khong-gian ở room-detail) và renderFooter, hai hàm này nằm trong scripts/components/header.js và footer.js, dựng HTML rồi gán vào khung. Cách làm này có ba lợi ích: một là chỉ sửa một file là mọi trang cập nhật menu, logo, link; hai là tránh lệch nhau khi một trang quên cập nhật; ba là giảm số dòng HTML lặp lại trong từng trang. Tham số tên mục giúp header tô đậm đúng mục đang xem, ví dụ trang room-detail truyền khong-gian. Nhược điểm là header/footer phụ thuộc JavaScript, nếu tắt JS thì không hiện, nhóm chấp nhận vì toàn bộ site vốn chạy bằng JS module. Các phương án còn lại sai vì nhóm không copy HTML vào từng trang, không render phía server cho site tĩnh, và không dùng iframe."
 },
 {
  "id": "bv5-a13",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: hàm createRoomCard trong room-card.js tạo thẻ phòng gồm những phần nào, và nhóm xử lý ra sao để thẻ phòng hiển thị đúng số sản phẩm và nhãn Shop the Room?",
  "options": [
   "createRoomCard tạo thẻ gồm ảnh phòng có link sang room-detail, các nhãn phong cách và nhãn Shop the Room nếu phòng có hotspot, phần thân có dòng overline, tên phòng, mô tả, số sản phẩm và link Khám phá; số sản phẩm lấy từ getHotspotProductIds để đếm món khác nhau chứ không đếm số chấm, còn nhãn Shop the Room chỉ hiện khi soHotspot lớn hơn 0.",
   "createRoomCard chỉ tạo một thẻ ảnh đơn giản, không có tên, mô tả hay số sản phẩm.",
   "Số sản phẩm trên thẻ đếm tất cả hotspot kể cả trùng sản phẩm ở nhiều góc chụp, nên một món gắn ba góc bị tính ba lần.",
   "Nhãn Shop the Room luôn hiện trên mọi thẻ phòng bất kể phòng có hotspot hay không."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Hàm createRoomCard nhận room và soThuTu. Nó lấy style qua getStyleOfRoom, lấy danh sách hotspot qua getRoomHotspots (đã bỏ sản phẩm ẩn hoặc đã xoá), tính soSanPham bằng độ dài getHotspotProductIds và soHotspot bằng độ dài danh sách hotspot. Thẻ được tạo bằng createElement article với class room-card card. Khung ảnh là thẻ a trỏ tới room-detail.html?id=..., bên trong có img dùng asset(room.image_url) với loading lazy và decoding async, rồi tới khung nhãn chứa badge phong cách và badge-dark Shop the Room nếu soHotspot lớn hơn 0. Phần thân có dòng overline là Không gian kèm số thứ tự có số 0 đằng trước nếu nhỏ hơn 10, hoặc tên phong cách nếu không truyền số thứ tự, tiếp theo là tên phòng có link, mô tả, và dòng room-meta hiển thị số sản phẩm cùng link Khám phá. Việc đếm theo getHotspotProductIds là để một món gắn ở nhiều góc chụp chỉ tính một lần, đúng với ý nghĩa số sản phẩm trong phòng. Các phương án còn lại sai vì thẻ có đủ thông tin, đếm món khác nhau, và nhãn Shop the Room có điều kiện."
 },
 {
  "id": "bv5-a14",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: hàm sortRoomsForDisplay và countHotspotsByRoom trong room-card.js giải quyết vấn đề gì, và vì sao nhóm cần đếm hotspot một lần thay vì gọi getRoomHotspots cho từng phòng khi sắp xếp?",
  "options": [
   "countHotspotsByRoom đọc bảng room_hotspots một lần và đếm số hotspot theo từng phòng, sortRoomsForDisplay dùng bảng đếm đó để đưa phòng có hotspot lên trước và giữ nguyên thứ tự trong từng nhóm; đếm một lần để tránh gọi getRoomHotspots lặp lại cho từng phòng, vì mỗi lần gọi lại đọc và parse cả bảng hotspot nên rất chậm với danh sách dài.",
   "sortRoomsForDisplay sắp xếp phòng theo tên alphabet, không liên quan đến hotspot.",
   "countHotspotsByRoom gọi getRoomHotspots cho từng phòng rồi cộng lại, nên càng nhiều phòng càng chậm nhưng nhóm chấp nhận.",
   "sortRoomsForDisplay đưa phòng chưa có hotspot lên trước để khách thấy phòng mới."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong room-card.js có ghi chú rõ rằng findById đọc và parse cả bảng mỗi lần gọi nên rất chậm khi gọi trong vòng lặp, và cách nhóm xử lý là đọc một lần rồi tra theo id. Tinh thần đó áp dụng cho hotspot: countHotspotsByRoom đọc bảng room_hotspots một lần, duyệt qua và cộng dồn vào đối tượng dem theo room_id. sortRoomsForDisplay gọi countHotspotsByRoom một lần, rồi chia danh sách phòng thành hai mảng coHotspot và chuaCo dựa trên dem, sau đó trả về coHotspot.concat(chuaCo), giữ nguyên thứ tự gốc trong từng nhóm. Mục đích là phòng đã gắn hotspot (tức là dùng được tính năng Shop the Room) được ưu tiên hiển thị trước, vì đó là điểm mạnh của đồ án. Nếu gọi getRoomHotspots cho từng phòng thì mỗi lần lại đọc và parse cả bảng hotspot, với 49 phòng sẽ thành 49 lần parse, rất chậm. Các phương án còn lại sai vì hàm sắp theo hotspot chứ không theo tên, không gọi lặp, và đưa phòng có hotspot lên trước."
 },
 {
  "id": "bv5-a15",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Tình huống thầy đưa: một phòng có 5 hotspot nhưng 2 hotspot trỏ tới sản phẩm đã bị ẩn (is_active bằng false). Hỏi: thẻ phòng và trang chi tiết phòng sẽ hiển thị thế nào, và nhóm em xử lý ra sao để không hiện sản phẩm đã ẩn?",
  "options": [
   "getRoomHotspots lọc bỏ hotspot trỏ tới sản phẩm không tìm thấy hoặc có is_active bằng false, nên thẻ phòng chỉ đếm 3 món còn hiển thị và trang chi tiết chỉ vẽ 3 chấm; nếu phòng không còn hotspot nào sau khi lọc thì thẻ mất nhãn Shop the Room và trang chi tiết chuyển sang hiển thị danh sách sản phẩm trong phòng thay vì chấm trên ảnh.",
   "Cả 5 hotspot vẫn hiện bình thường, chỉ khác là popup của sản phẩm bị ẩn sẽ báo lỗi khi bấm vào.",
   "Thẻ phòng vẫn hiện nhãn Shop the Room nhưng trang chi tiết báo không tìm thấy phòng.",
   "Toàn bộ phòng bị ẩn khỏi danh sách vì có hotspot lỗi."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Hàm getRoomHotspots trong room-card.js duyệt bảng room_hotspots, chỉ giữ hotspot có room_id trùng, sau đó gọi findProduct cho product_id, nếu sản phẩm không tìm thấy hoặc is_active bằng false thì bỏ qua. Vì vậy với phòng có 5 hotspot mà 2 hotspot trỏ sản phẩm ẩn, danh sách trả về chỉ còn 3. Ở thẻ phòng, soSanPham tính từ getHotspotProductIds của danh sách đã lọc nên hiện 3 sản phẩm, và soHotspot bằng 3 nên vẫn có nhãn Shop the Room. Ở trang chi tiết, initPage gán hotspots bằng getRoomHotspots nên showStage chỉ tạo 3 nút chấm, showHotspotProducts chỉ tạo 3 thẻ, showTotals tính tổng trên 3 món. Nếu cả 5 hotspot đều trỏ sản phẩm ẩn thì danh sách rỗng, thẻ phòng không có nhãn Shop the Room, còn trang chi tiết hiện dòng hướng dẫn phòng chưa được gắn sản phẩm và chuyển sang danh sách sản phẩm trong phòng. Các phương án còn lại sai vì code lọc ngay từ đầu, không hiện hotspot lỗi, và không ẩn cả phòng."
 },
 {
  "id": "bv5-a16",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Thầy sẽ hỏi: dữ liệu hotspot của phòng được lưu trong file room_hotspots.json với cấu trúc ra sao, và toạ độ được hiểu theo đơn vị nào khi vẽ chấm lên ảnh?",
  "options": [
   "Mỗi hotspot là một bản ghi gồm room_id, product_id, image_url và position_x, position_y; toạ độ là phần trăm so với kích thước ảnh, nên khi vẽ chấm trang chi tiết gán style left và top bằng position_x cộng % và position_y cộng %, nhờ vậy chấm đúng vị trí dù ảnh co giãn theo màn hình.",
   "Toạ độ lưu bằng pixel tuyệt đối trên ảnh gốc, nên khi ảnh co giãn chấm sẽ lệch.",
   "Mỗi hotspot chỉ lưu room_id và product_id, còn vị trí chấm do CSS tự chia đều trên ảnh.",
   "Toạ độ lưu bằng đơn vị em hoặc rem, không liên quan đến kích thước ảnh."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. File room_hotspots.json chứa các bản ghi hotspot, mỗi bản ghi có room_id cho biết thuộc phòng nào, product_id trỏ tới sản phẩm, image_url cho biết hotspot gắn lên ảnh nào trong bộ ảnh nhiều góc của phòng, và position_x, position_y là toạ độ. Trong room-detail.js, hàm showStage tạo nút button class hotspot, gán nut.style.left bằng position_x cộng % và nut.style.top bằng position_y cộng %, nên toạ độ là phần trăm so với khung ảnh. Cách lưu phần trăm có lợi là ảnh hiển thị ở kích thước nào thì chấm vẫn nằm đúng vị trí tương đối, không bị lệch khi màn hình co giãn hay ảnh responsive. Hàm getHotspotImage xử lý trường hợp dữ liệu cũ chưa có image_url thì hiểu là ảnh chính của phòng. Hàm placePopup cũng dùng position_x và position_y nhân với offsetWidth, offsetHeight của khung để đặt popup cạnh chấm. Các phương án còn lại sai vì toạ độ là phần trăm, có lưu image_url, và vị trí không do CSS chia đều."
 },
 {
  "id": "bv5-a17",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: khi khách bấm vào một chấm hotspot trên ảnh phòng, hàm openHotspot làm những việc gì? Em mô tả luồng từ lúc bấm đến lúc popup sản phẩm hiện ra và được đặt cạnh chấm.",
  "options": [
   "openHotspot chuyển khung lớn sang đúng ảnh chứa hotspot nếu cần, bỏ active chấm cũ, đánh dấu chấm mới, lấy sản phẩm và danh mục để dựng HTML popup gồm ảnh, tên, giá, tồn kho, thông số, nút Chi tiết, Thêm vào giỏ, nút 3D nếu có model, thanh chuyển điểm, rồi gán vào hotspotPopup và gọi placePopup để đặt popup cạnh chấm.",
   "openHotspot chỉ đổi màu chấm đang chọn, còn popup sản phẩm do một trang khác đảm nhiệm khi khách bấm nút Chi tiết.",
   "openHotspot chuyển hẳn sang trang product-detail.html của sản phẩm, không hiện popup tại chỗ.",
   "openHotspot chỉ hiện tên sản phẩm trong một alert, không có ảnh hay nút thêm giỏ."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Hàm openHotspot nhận viTri, kiểm tra hợp lệ, gọi goToHotspotImage để nếu hotspot nằm ở góc chụp khác thì chuyển khung lớn sang ảnh đó qua changeImage. Sau đó nếu đang có popup cũ thì bỏ active chấm cũ, gán activeIndex bằng viTri và gọi setHotspotActive để đổi class và aria-expanded. Tiếp theo nó lấy sản phẩm bằng findProduct, danh mục bằng findById, kiểm tra còn hàng qua stock_quantity, dựng link sang product-detail. Chuỗi HTML popup gồm nút đóng, khối ảnh và thông tin có thương hiệu, danh mục, tên, giá, giá gốc nếu có, nhãn còn hàng hoặc hết hàng, dòng thông số kích thước, chất liệu, màu, hàng nút Chi tiết, Thêm vào giỏ hoặc nút Hết hàng bị disable, nút 3D chỉ hiện khi model_3d_url khác null, và thanh chuyển điểm với số thứ tự trên tổng số điểm cùng ảnh. Cuối cùng gán vào hotspotPopup, đổi class thành rd-popup và gọi placePopup. Hàm placePopup tính vị trí chấm theo phần trăm nhân kích thước khung, đặt popup bên phải nếu chấm ở nửa trái, bên trái nếu chấm ở nửa phải, kẹp trong khung, còn màn hình nhỏ hơn hoặc bằng 768 thì để CSS đưa popup xuống đáy. Các phương án còn lại sai vì popup hiện tại chỗ, không chuyển trang, và có đầy đủ ảnh cùng nút."
 },
 {
  "id": "bv5-a18",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Tình huống thầy đưa: khách mở room-detail.html?id=room-glam-4190768&sp=sp-abc123, trong đó sp-abc123 là sản phẩm có hotspot nhưng nằm ở góc chụp thứ ba của phòng. Hỏi: trang xử lý tham số sp như thế nào và vì sao nhóm cần tham số này?",
  "options": [
   "initPage đọc tham số sp, duyệt mảng hotspots tìm hotspot có product_id trùng, nếu thấy thì gọi openHotspot với vị trí đó, mà openHotspot lại gọi goToHotspotImage nên khung lớn tự chuyển sang góc chụp thứ ba chứa hotspot, rồi cuộn khung stage vào giữa màn hình; tham số sp dùng để từ trang chủ hay trang khác mở thẳng popup sản phẩm trên ảnh phòng.",
   "Tham số sp bị bỏ qua hoàn toàn, trang chỉ mở phòng và khách phải tự tìm chấm.",
   "Tham số sp dùng để chọn phòng khác, không liên quan đến sản phẩm.",
   "Khi có tham số sp trang sẽ chuyển hẳn sang product-detail.html của sản phẩm đó."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong initPage, sau khi nạp room, hotspots, hotspotProductIds và gọi các hàm hiển thị, code lấy sp bằng getParam, rồi vòng lặp qua hotspots, nếu hotspot có product_id bằng sp thì gọi openHotspot với chỉ số đó và gọi scrollIntoView block center trên stage. Vì openHotspot bắt đầu bằng goToHotspotImage, hàm này lấy ảnh của hotspot qua getHotspotImage, nếu ảnh khác currentImage thì tìm vị trí ảnh trong room.images và gọi changeImage, nên khung lớn tự chuyển sang góc chụp thứ ba. Nhờ vậy khách đến từ một link có sp sẽ thấy ngay popup sản phẩm đúng trên ảnh phòng, không phải tự tìm chấm. Tham số này hữu ích khi trang chủ hoặc một chiến dịch muốn dẫn thẳng khách tới một món cụ thể trong không gian. Nếu sp không khớp hotspot nào thì vòng lặp không làm gì, trang vẫn mở bình thường ở ảnh chính. Các phương án còn lại sai vì tham số sp có được xử lý, dùng để mở popup sản phẩm, và không chuyển sang trang chi tiết sản phẩm."
 },
 {
  "id": "bv5-a19",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: hàm placePopup đặt popup sản phẩm cạnh chấm hotspot như thế nào, và trên điện thoại thì popup hiển thị ra sao? Em giải thích cách nhóm xử lý để popup không bị tràn khỏi khung ảnh.",
  "options": [
   "placePopup tính vị trí chấm theo phần trăm nhân kích thước khung, mặc định đặt popup bên phải chấm, nếu chấm ở nửa phải hoặc popup tràn khung thì đặt sang trái, kẹp trái và trên trong khoảng 12 pixel để không tràn, còn khi màn hình rộng tối đa 768 pixel thì xoá left và top để CSS đưa popup xuống đáy.",
   "placePopup đặt popup cố định ở góc trên bên phải màn hình, không phụ thuộc vị trí chấm.",
   "placePopup dùng position fixed và toạ độ chuột lúc bấm, nên popup đi theo con trỏ.",
   "Trên điện thoại popup bị ẩn hoàn toàn, khách phải xoay ngang màn hình mới thấy."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Hàm placePopup lấy popup và stage, nếu window.innerWidth nhỏ hơn hoặc bằng 768 thì xoá style left và top rồi return, để CSS đưa popup xuống đáy màn hình cho dễ đọc trên điện thoại. Với màn hình lớn, nó lấy hotspot đang mở qua activeIndex, tính x bằng position_x nhân offsetWidth của stage chia 100, y bằng position_y nhân offsetHeight chia 100, lấy kích thước popup qua offsetWidth và offsetHeight. Mặc định trai bằng x cộng 32, nhưng nếu chấm ở nửa phải hoặc trai cộng rộng vượt quá rộng khung trừ 12 thì đặt trai bằng x trừ 32 trừ rộng, tức là sang bên trái chấm. Sau đó kẹp trai không nhỏ hơn 12, tính tren bằng y trừ nửa cao, kẹp tren không nhỏ hơn 12 và không vượt quá cao khung trừ 12 trừ cao. Cuối cùng gán left và top theo pixel. Hàm này được gọi lại khi resize nếu đang mở popup, để popup luôn bám đúng chấm. Các phương án còn lại sai vì popup bám theo chấm, không dùng toạ độ chuột, và trên điện thoại vẫn hiện ở đáy."
 },
 {
  "id": "bv5-a20",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy sẽ hỏi: hàm showTotals trong room-detail.js tính tổng giá và nút thêm trọn bộ như thế nào? Em giải thích cách nhóm xử lý món hết hàng khi tính tổng và khi thêm cả bộ vào giỏ.",
  "options": [
   "showTotals đếm số món còn hàng trong hotspotProductIds, tính tổng bằng getRoomTotal chỉ cộng giá các món còn hàng, hiển thị tổng ở ô tóm tắt và dải mua trọn bộ, ghi chú số món còn hàng trên tổng số, đổi nhãn nút thành Thêm cả N món, và disable nút nếu không còn món nào; hàm addAllToCart cũng bỏ qua món hết hàng và báo số món đã thêm cùng số món bị bỏ.",
   "showTotals cộng giá tất cả món kể cả hết hàng, và nút thêm trọn bộ sẽ báo lỗi khi gặp món hết hàng.",
   "showTotals chỉ hiển thị số món, không tính tổng tiền và không có nút thêm trọn bộ.",
   "Nút thêm trọn bộ luôn bật, kể cả khi mọi món trong phòng đều hết hàng."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Hàm showTotals duyệt hotspotProductIds, đếm soConHang bằng cách kiểm tra stock_quantity lớn hơn 0. Nếu danh sách rỗng thì ẩn ô tóm tắt và dải mua trọn bộ bằng cách gán class có hidden. Ngược lại nó lấy tổng qua getRoomTotal, hàm này trong room-card.js chỉ cộng giá các món có stock_quantity lớn hơn 0, rồi gán vào roomTotal và bundleTotal bằng formatVND. Ghi chú roomTotalNote hiện dạng soConHang trên tổng số món còn hàng, bundleNote nói rõ gồm bao nhiêu món còn hàng và nếu thiếu thì thêm câu bỏ qua món đã hết hàng. Nhãn nút btnAddAllText đổi thành Thêm cả N món vào giỏ, và nếu soConHang bằng 0 thì disable cả btnAddAll và btnAddAllTop. Hàm addAllToCart cũng duyệt hotspotProductIds, bỏ qua món hết hàng, gọi putProductInCart cho từng món còn hàng, đếm số thêm được và gom lỗi, sau đó hiện toast báo số món đã thêm và số món bị bỏ nếu có. Các phương án còn lại sai vì tổng chỉ tính món còn hàng, có tính tiền, và nút bị disable khi hết hàng."
 },
 {
  "id": "bv5-a21",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Tình huống thầy đưa: khách đang xem popup sản phẩm ở hotspot số 2, bấm nút mũi tên phải trong popup, rồi bấm phím Escape. Hỏi: hệ thống xử lý hai thao tác này thế nào, và vì sao nhóm giới hạn mũi tên chỉ chuyển trong cùng một góc chụp?",
  "options": [
   "Nút mũi tên gọi stepHotspot với bước 1, hàm này lấy danh sách chỉ số hotspot cùng ảnh đang xem qua getImageHotspotIndexes, tính vị trí tiếp theo có quay vòng bằng phép chia lấy dư rồi gọi openHotspot nên chỉ chuyển giữa các điểm của cùng góc chụp; phím Escape do pageKeyDown bắt, nếu modal 3D đang mở thì đóng modal, ngược lại đóng popup, giới hạn trong cùng ảnh để khách không bị nhảy ảnh bất ngờ khi đang xem một góc.",
   "Nút mũi tên chuyển sang hotspot kế tiếp trong toàn bộ phòng kể cả góc chụp khác, và Escape tải lại trang.",
   "Nút mũi tên không làm gì, còn Escape chỉ đóng modal 3D chứ không đóng popup.",
   "Phím Escape đóng popup nhưng nút mũi tên mở sang trang product-detail của sản phẩm kế tiếp."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong popup, hai nút mũi tên gọi stepHotspot(-1) và stepHotspot(1). Hàm stepHotspot lấy ds bằng getImageHotspotIndexes, tức là các chỉ số hotspot có ảnh trùng currentImage, tìm vị trí của activeIndex trong ds, tính tiep bằng viTri cộng buoc cộng độ dài ds rồi chia lấy dư cho độ dài ds, nhờ vậy quay vòng được cả khi ở đầu hoặc cuối, rồi gọi openHotspot với chỉ số đó. Vì ds chỉ chứa hotspot cùng ảnh nên mũi tên không nhảy sang góc chụp khác, tránh việc khách đang xem một góc bị đổi ảnh bất ngờ. Số thứ tự trong popup cũng tính theo ds nên hiện đúng dạng vị trí trên tổng số điểm cùng ảnh. Về bàn phím, pageKeyDown được gắn trong initPage, khi bấm Escape thì kiểm tra modal3d có đang mở không, nếu có thì closeViewer, nếu không thì closePopup; khi popup đang mở và modal 3D đóng thì ArrowRight gọi stepHotspot(1), ArrowLeft gọi stepHotspot(-1). Các phương án còn lại sai vì mũi tên giới hạn trong cùng ảnh, Escape đóng popup, và không chuyển trang."
 },
 {
  "id": "bv5-a22",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy sẽ hỏi: nhóm em dùng createProductCard của component product-card.js rồi chỉnh lại cho trang chi tiết phòng bằng hàm createRoomProductCard. Vì sao không viết thẻ sản phẩm riêng cho room-detail, và cách chỉnh lại đó có điểm yếu gì cần lưu ý?",
  "options": [
   "createRoomProductCard gọi createProductCard để tái dùng phần ảnh, tên, giá, đánh giá rồi thay hàng nút mặc định bằng hàng nút Chi tiết và Thêm vào giỏ hoặc Hết hàng, thêm nhãn Điểm n và hiệu ứng hover làm sáng chấm tương ứng; tái dùng để giao diện đồng nhất và không lặp code, nhưng điểm yếu là phụ thuộc cấu trúc class bên trong product-card.js nên nếu component đó đổi cấu trúc thì room-detail dễ vỡ.",
   "Nhóm viết thẻ sản phẩm riêng hoàn toàn cho room-detail vì thẻ dùng chung không đủ chức năng.",
   "createRoomProductCard chỉ đổi màu nút, không thay đổi gì khác so với thẻ mặc định.",
   "Nhãn Điểm n trên thẻ là số thứ tự sản phẩm trong phòng, không liên quan đến hotspot trên ảnh."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Hàm createRoomProductCard nhận sản phẩm và soDiem, gọi createProductCard(sp) để có thẻ chuẩn gồm ảnh, tên, giá, đánh giá. Sau đó nó lấy product-card-body và product-card-actions, đổi nút chi tiết thành nút nhẹ với chữ Chi tiết, gỡ hàng nút mặc định ra khỏi body, tạo hàng rd-card-actions chứa nút Chi tiết và nút Thêm vào giỏ hoặc Hết hàng bị disable, rồi gắn lại vào body. Nếu soDiem khác null thì thêm nút rd-point với chữ Điểm n, gắn onclick showOnImage để cuộn lên ảnh và mở popup, đồng thời gắn onmouseenter và onmouseleave gọi highlightHotspot để chấm trên ảnh sáng lên khi rê chuột. Lý do tái dùng là để thẻ sản phẩm ở mọi trang có cùng giao diện và chỉ viết một lần logic hiển thị. Điểm yếu cần lưu ý là cách chỉnh này phụ thuộc vào cấu trúc class bên trong product-card.js như product-card-body, product-card-actions, product-card-img, nên nếu component đó đổi cấu trúc thì room-detail có thể lỗi khi lấy phần tử. Cách giảm rủi ro là giữ các class này ổn định hoặc bổ sung tham số tuỳ biến cho createProductCard. Các phương án còn lại sai vì có tái dùng, có thay đổi nhiều phần, và nhãn Điểm n gắn với hotspot."
 },
 {
  "id": "bv5-a23",
  "chapter": 12,
  "difficulty": 2,
  "type": "multiple",
  "question": "Thầy sẽ hỏi: những chỗ nào trong catalog-filter.js giúp giảm số lần đọc và parse dữ liệu JSON khi khách thao tác lọc, sắp xếp và phân trang? Em chọn các cơ chế đúng. (chọn nhiều đáp án)",
  "options": [
   "Gắn listener change một lần cho cả khung lọc và đánh dấu data-loc-ngay để không gắn trùng",
   "Dùng scheduleFilterChange chờ 150ms gộp nhiều lần bấm liên tiếp thành một lần lọc",
   "Dùng MutationObserver theo dõi dòng đếm kết quả để chép sang nút filter-live-count thay vì tự đếm lại",
   "Mỗi lần đổi ô lọc đều gọi getTable cho toàn bộ bảng products để lấy dữ liệu mới nhất"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ba phương án đầu là các cơ chế thật trong catalog-filter.js giúp giảm thao tác thừa. Thứ nhất, ganLocNgay kiểm tra thuộc tính data-loc-ngay, nếu đã gắn thì return, nên dù renderFilterPanel được gọi lại thì listener change cũng chỉ gắn một lần trên khung, tránh nhân đôi sự kiện. Thứ hai, scheduleFilterChange dùng clearTimeout rồi setTimeout 150ms trước khi gọi onFilterChange, nên khi khách bấm liên tiếp nhiều checkbox thì chỉ có một lần lọc và vẽ lại cuối cùng, giảm số lần duyệt danh sách và số lần đọc dữ liệu phụ như getSoldMap hay getRatingMap. Thứ ba, ganLocNgay dùng MutationObserver theo dõi phần tử productCount hoặc lblResultCount, mỗi khi nội dung đổi thì chép sang nút filter-live-count, nhờ vậy không phải tự đếm lại kết quả cho khung lọc. Phương án còn lại sai vì code không gọi getTable cho bảng products mỗi lần đổi lọc; dữ liệu gốc được nạp một lần khi trang khởi động và truyền vào renderFilterPanel qua dsGoc, còn findProduct trong room-card.js cũng có cache riêng để tránh parse lặp."
 },
 {
  "id": "bv5-a24",
  "chapter": 12,
  "difficulty": 3,
  "type": "multiple",
  "question": "Thầy sẽ hỏi: khi thiết kế luồng hotspot cho room-detail, nhóm em đã xử lý những trường hợp biên nào để trang không bị lỗi hoặc hiển thị sai? Em chọn các trường hợp đúng với code thực tế. (chọn nhiều đáp án)",
  "options": [
   "Hotspot trỏ tới sản phẩm đã bị ẩn hoặc không tồn tại thì bị getRoomHotspots loại bỏ trước khi vẽ",
   "Dữ liệu hotspot cũ chưa có image_url thì getHotspotImage hiểu là ảnh chính của phòng",
   "Sản phẩm không có model_3d_url thì popup không hiện nút 3D",
   "Nếu một phòng không có hotspot nào thì trang chi tiết vẫn vẽ chấm rỗng và báo lỗi cho khách"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ba phương án đầu đúng với code. getRoomHotspots duyệt bảng room_hotspots, gọi findProduct cho product_id, nếu sản phẩm null hoặc is_active bằng false thì continue, nên hotspot trỏ sản phẩm ẩn hoặc đã xoá không bao giờ được vẽ. getHotspotImage kiểm tra image_url null hoặc rỗng thì trả về room.image_url, đây là cách tương thích ngược với dữ liệu cũ chưa có trường image_url. Trong openHotspot, nút 3D chỉ được thêm vào chuỗi HTML khi model_3d_url khác null, đúng với ghi chú UC3.3 A1 là không có model 3D thì không hiện nút 3D. Ngoài ra còn các trường hợp biên khác như openHotspot kiểm tra viTri hợp lệ, placePopup kẹp popup trong khung, showViewerError báo lỗi khi không tải được model. Phương án còn lại sai vì khi hotspots rỗng thì showHotspotProducts ẩn cả section hotspot, updateStageForImage hiện dòng hướng dẫn phòng chưa được gắn sản phẩm và ẩn bộ đếm, chứ không vẽ chấm rỗng hay báo lỗi."
 },
 {
  "id": "bv5-a25",
  "chapter": 12,
  "difficulty": 2,
  "type": "multiple",
  "question": "Thầy sẽ hỏi: các hàm trong room-card.js như findProduct, getRoomProducts, getRoomTotal và showRoomToast phục vụ những việc gì trong luồng xem phòng? Em chọn các mô tả đúng. (chọn nhiều đáp án)",
  "options": [
   "findProduct đọc bảng products một lần rồi tra theo id qua cache, tránh parse lại cả bảng mỗi lần gọi",
   "getRoomProducts trả về các sản phẩm đang bán có trong room.product_ids, bỏ sản phẩm đã ẩn",
   "getRoomTotal cộng giá các sản phẩm gắn hotspot còn hàng để hiện tổng ở ô tóm tắt và dải mua trọn bộ",
   "showRoomToast tạo một modal chặn toàn bộ màn hình cho đến khi khách bấm đóng"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ba phương án đầu đúng. findProduct có biến productCache, lần đầu gọi thì đọc getTable products và dựng object theo id, các lần sau tra thẳng, đây là cách nhóm tránh việc findById parse cả bảng 950+ sản phẩm mỗi lần gọi trong vòng lặp. getRoomProducts duyệt room.product_ids, gọi findProduct, chỉ giữ sản phẩm tìm thấy và is_active khác false, dùng để hiện danh sách phối thêm cùng bộ sưu tập. getRoomTotal lấy getHotspotProductIds của getRoomHotspots, cộng giá các món có stock_quantity lớn hơn 0, dùng trong showTotals để hiện tổng tiền và nhãn nút thêm trọn bộ. Phương án còn lại sai vì showRoomToast không phải modal chặn màn hình; nó tạo hoặc lấy phần tử roomToast, gán nội dung, đổi class thành room-toast show, rồi sau 3000ms tự đổi lại class để ẩn, có role status và aria-live polite để trình đọc màn hình đọc thông báo, không chặn thao tác của khách."
 }
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_BV5; }
