// Ngan hang on bao ve RoomCraft - bv4.js (16 cau) - da ap audit
const QUESTIONS_BV4 = [
 {
  "id": "bv4-a01",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Thầy hỏi: nhóm em dùng ES module trong dự án RoomCraft như thế nào, và vì sao lại chọn import/export thay vì nhúng tất cả script bằng thẻ script thường? Em trình bày cơ chế và lý do.",
  "options": [
   "Nhóm em khai báo các trang bằng thẻ script type module, mỗi file js là một module có export hàm/biến cần chia sẻ và import những gì mình dùng; nhờ vậy phạm vi biến được cô lập theo file, thứ tự nạp do trình duyệt tự lo theo đồ thị import, tránh ô nhiễm biến toàn cục và tránh lỗi phụ thuộc thứ tự như khi nhúng nhiều thẻ script thường.",
   "Nhóm em nhúng tất cả file js bằng thẻ script thường xếp tay theo thứ tự, file nào cần dùng hàm của file khác thì file đó phải nạp trước; cách này đơn giản nhưng mọi hàm đều thành biến toàn cục nên dễ trùng tên.",
   "Nhóm em dùng module chỉ để cho đẹp, còn thực tế vẫn gọi hàm qua biến window nên không có tác dụng cô lập phạm vi.",
   "Nhóm em dùng module vì GitHub Pages bắt buộc phải có type module mới chạy được, còn bản chất bên trong vẫn giống script thường."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là cách thứ nhất. Trong RoomCraft, mỗi trang nằm trong scripts/ gồm file html, css và js riêng; các hàm dùng chung như formatVND, asset, findById, getCart, addToCart, createProductCard được tách ra file dịch vụ và component rồi export, trang nào cần thì import đúng cái mình dùng. Cơ chế của ES module: trình duyệt đọc thuộc tính import để dựng đồ thị phụ thuộc, nạp theo đúng thứ tự cần thiết, và mỗi module có phạm vi riêng nên biến khai báo bên trong không rò ra ngoài trừ khi export. Nhờ vậy nhóm em tránh được lỗi kinh điển của script thường là gọi hàm trước khi file định nghĩa nó được nạp, và tránh trùng tên hàm giữa các trang. Phương án hai mô tả đúng cách script thường nhưng đó không phải cách nhóm em làm. Phương án ba sai vì module thực sự cô lập phạm vi. Phương án bốn sai vì GitHub Pages không bắt buộc type module, đó là lựa chọn kiến trúc của nhóm."
 },
 {
  "id": "bv4-a02",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Thầy yêu cầu giải thích arrow function: nhóm em dùng arrow ở đâu trong RoomCraft và nó khác function thường ở điểm nào khiến nhóm chọn dùng?",
  "options": [
   "Arrow function là cú pháp viết hàm ngắn gọn, không có this riêng nên this lấy từ phạm vi bao ngoài; nhóm em dùng arrow cho callback ngắn như map, filter, forEach, setTimeout và các hàm xử lý sự kiện đơn giản, còn hàm lớn có tên rõ ràng như createProductCard hay showCart thì vẫn viết function thường để dễ đọc và dễ gọi lại.",
   "Arrow function là cách viết tắt của function thường, hoàn toàn tương đương về mọi mặt kể cả this, nhóm em dùng arrow ở mọi chỗ vì gõ ít ký tự hơn.",
   "Arrow function có this riêng giống function thường nhưng nhanh hơn, nên nhóm em thay toàn bộ function thường bằng arrow để tăng tốc độ trang.",
   "Arrow function chỉ dùng được trong module, không dùng được trong script thường, nên nhóm em buộc phải dùng arrow ở mọi file."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Arrow function khác function thường ở ba điểm chính: cú pháp ngắn, không có this riêng (this kế thừa từ phạm vi bao ngoài), và không dùng được làm constructor với new. Trong RoomCraft, các callback ngắn như lọc mảng sản phẩm, duyệt mảng để render, hay hàm xử lý sự kiện một dòng thì nhóm em viết arrow cho gọn. Ngược lại những hàm lớn, có tên nghiệp vụ rõ như createProductCard, showCart, toggleWishlistProduct, renderWishlist thì nhóm em giữ function thường vì chúng cần tên rõ trong stack trace khi debug và đôi khi cần this trỏ theo ngữ cảnh gọi. Phương án hai sai vì arrow không tương đương function thường về this. Phương án ba sai cả về this lẫn về tốc độ, arrow không nhanh hơn. Phương án bốn sai vì arrow dùng được ở mọi nơi, không phụ thuộc module."
 },
 {
  "id": "bv4-a03",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi về destructuring: nhóm em áp dụng destructuring trong dự án ở những chỗ nào, và nếu lạm dụng thì có rủi ro gì? Em nêu ví dụ cụ thể trong RoomCraft.",
  "options": [
   "Nhóm em dùng destructuring để bóc nhanh các trường từ object sản phẩm, object đơn hàng hay tham số hàm, ví dụ lấy images, price, stock_quantity từ product, hoặc lấy product_id, quantity từ item giỏ hàng; lợi ích là code gọn và thể hiện rõ mình cần trường nào, nhưng nếu lạm dụng thì dễ che mất việc object có thể thiếu trường và gây lỗi undefined nếu không có giá trị mặc định.",
   "Nhóm em không dùng destructuring vì nó không tương thích với trình duyệt cũ, mọi chỗ đều viết product.price, product.images thủ công để an toàn.",
   "Nhóm em dùng destructuring ở mọi nơi kể cả trong vòng lặp lớn vì nó luôn nhanh hơn truy cập thuộc tính trực tiếp, và không có rủi ro gì.",
   "Nhóm em dùng destructuring chủ yếu để đổi tên biến cho đẹp, còn giá trị thực tế vẫn phải đọc lại từ object gốc nên không có lợi ích kỹ thuật."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Destructuring cho phép bóc nhiều trường trong một câu lệnh, ví dụ khi nhận một product từ products.json nhóm em có thể lấy ngay images, price, stock_quantity, product_type thay vì viết product.images, product.price nhiều lần. Trong cart.js, mỗi item giỏ hàng có product_id và quantity, destructuring giúp đọc gọn. Lợi ích là code ngắn, ý định rõ, và có thể đặt giá trị mặc định như quantity = 1 để chống undefined. Rủi ro khi lạm dụng: nếu object thiếu trường mà không có mặc định thì biến nhận undefined và lỗi chỉ nổ ở chỗ dùng sau đó, khó truy vết; ngoài ra destructuring lồng quá sâu làm code khó đọc. Phương án hai sai vì destructuring là chuẩn ES6, các trình duyệt hiện đại đều hỗ trợ và dự án chạy trên trình duyệt hiện đại. Phương án ba sai vì destructuring không nhanh hơn truy cập trực tiếp và vẫn có rủi ro undefined. Phương án bốn sai vì destructuring thực sự tạo biến mới gọn hơn, không phải chỉ để đổi tên."
 },
 {
  "id": "bv4-a04",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "question": "Thầy hỏi template string: nhóm em dùng template string ở đâu, và vì sao nhiều chỗ trong RoomCraft lại cố tình KHÔNG dùng template string mà nối chuỗi bằng dấu cộng?",
  "options": [
   "Template string dùng dấu backtick cho phép chèn biến bằng dau ngoac nhon mo va dong, nhóm em dùng ở những chỗ chuỗi ngắn, dễ đọc; còn những chỗ sinh HTML lớn như showCart hay createProductCard thì nhóm em nối bằng dấu cộng và từng dòng riêng để dễ kiểm soát dấu nháy, dễ chèn điều kiện if và tránh lỗi khi chuỗi chứa dấu backtick hoặc ký tự đặc biệt.",
   "Nhóm em dùng template string ở mọi chỗ vì nó là chuẩn hiện đại, không có lý do gì phải nối chuỗi bằng dấu cộng trong dự án này.",
   "Nhóm em không dùng template string vì trình duyệt không hỗ trợ, mọi chuỗi đều phải nối bằng dấu cộng để chạy được.",
   "Nhóm em dùng template string chỉ trong file server.js, còn toàn bộ frontend thì không được phép dùng vì GitHub Pages chặn."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Template string dùng backtick và cho phép nội suy biến, rất tiện cho chuỗi ngắn như đường dẫn product-detail.html?id= kèm id, hay thông báo nhỏ. Tuy nhiên trong RoomCraft, các hàm sinh HTML lớn như showCart trong cart.js hay createProductCard trong product-card.js lại nối chuỗi bằng dấu cộng theo từng dòng. Lý do thực tế: khi HTML có nhiều dấu nháy đơn, nháy kép, thuộc tính onclick, việc nối chuỗi từng dòng giúp nhóm em dễ chèn điều kiện if giữa các dòng, dễ đọc diff khi review code, và tránh phải escape dấu backtick nếu nội dung có ký tự đó. Đây là quyết định về khả năng đọc và bảo trì, không phải vì template string không chạy được. Phương án hai sai vì nhóm em thực tế có nối chuỗi bằng dấu cộng. Phương án ba sai vì template string được hỗ trợ rộng rãi. Phương án bốn sai vì GitHub Pages không chặn template string, đó là cú pháp JavaScript thuần."
 },
 {
  "id": "bv4-a05",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi: hàm createProductCard trong product-card.js sinh HTML bằng cách nào, và vì sao nhóm em chọn cách tạo phần tử DOM bằng createElement thay vì ghép một chuỗi HTML lớn rồi gán innerHTML?",
  "options": [
   "Hàm createProductCard tạo từng phần tử bằng document.createElement, gắn class, textContent, thuộc tính rồi appendChild lồng nhau để dựng cây thẻ sản phẩm; nhóm em chọn cách này vì an toàn với dữ liệu người dùng như tên sản phẩm, tránh chèn mã độc qua innerHTML, và cho phép gắn sự kiện onclick trực tiếp lên nút mà không phải tìm lại phần tử sau khi render.",
   "Hàm createProductCard ghép một chuỗi HTML lớn rồi gán vào innerHTML của một div tạm, sau đó mới gắn sự kiện bằng querySelector; nhóm em chọn cách này vì nhanh và ít dòng code hơn.",
   "Hàm createProductCard dùng thư viện React để render thẻ, còn createElement chỉ là lớp vỏ bọc bên ngoài.",
   "Hàm createProductCard trả về một chuỗi HTML thô, còn việc chèn vào trang do trang gọi hàm tự làm bằng innerHTML."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong product-card.js, createProductCard dựng thẻ bằng cách tạo div, a, img, h3, span lần lượt, gán className, textContent, setAttribute rồi appendChild để lồng thành cây. Cách này có ba lợi ích thực tế với RoomCraft: thứ nhất, dữ liệu như tên sản phẩm được gán qua textContent nên không bị hiểu là HTML, tránh rủi ro chèn mã; thứ hai, nhóm em gắn trực tiếp btnWish.onclick = function để xử lý bấm tim mà không phải render xong rồi querySelector lại; thứ ba, thẻ trả về là một phần tử DOM thật nên trang gọi chỉ cần appendChild vào grid, dùng lại được ở nhiều trang như products, wishlist, marketplace, room-detail. Phương án hai mô tả cách ghép chuỗi rồi innerHTML, đó không phải cách nhóm em làm ở hàm này. Phương án ba sai vì dự án không dùng React. Phương án bốn sai vì hàm trả về phần tử DOM chứ không phải chuỗi."
 },
 {
  "id": "bv4-a06",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi về sự kiện: trong cart.js, các nút tăng giảm số lượng và nút xóa được gắn sự kiện bằng cách nào, và vì sao nhóm em dùng thuộc tính onclick trong chuỗi HTML thay vì addEventListener?",
  "options": [
   "Trong cart.js, mỗi nút được sinh ra trong chuỗi HTML với thuộc tính onclick gọi thẳng hàm toàn cục như changeQty, setQty, removeItem kèm chỉ số dòng; nhóm em chọn cách này vì HTML được sinh lại toàn bộ mỗi lần đổi số lượng nên gắn onclick ngay trong chuỗi đơn giản hơn là render xong rồi đi tìm từng nút để addEventListener, và các hàm này đã nằm ở phạm vi toàn cục nên onclick gọi được.",
   "Trong cart.js, nhóm em dùng addEventListener gắn cho từng nút sau khi render bằng querySelectorAll, vì onclick trong chuỗi HTML bị trình duyệt chặn hoàn toàn.",
   "Trong cart.js, nhóm em dùng ủy quyền sự kiện bằng cách gắn một listener duy nhất lên khung giỏ hàng và đọc data-attribute của phần tử được bấm, không dùng onclick trong chuỗi.",
   "Trong cart.js, các nút không cần gắn sự kiện vì trình duyệt tự hiểu thẻ button và tự gọi hàm trùng tên với id."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong cart.js, hàm showCart dựng lại toàn bộ nội dung giỏ hàng bằng chuỗi HTML, và mỗi nút tăng giảm hay xóa đều có thuộc tính onclick gọi hàm toàn cục kèm chỉ số, ví dụ changeQty với chỉ số dòng và hướng tăng, setQty với chỉ số dòng, removeItem với chỉ số dòng. Vì mỗi lần đổi số lượng nhóm em gọi showCart để vẽ lại từ đầu, nếu dùng addEventListener thì phải render xong mới querySelector từng nút rồi gắn, vừa dài vừa dễ gắn trùng khi render lại. Dùng onclick trong chuỗi thì mỗi lần render là mỗi lần gắn mới, không lo trùng. Đánh đổi là onclick chỉ gọi được hàm toàn cục, nên các hàm này phải khai báo ở phạm vi toàn cục chứ không nằm trong module đóng kín. Phương án hai sai vì onclick không bị chặn. Phương án ba mô tả ủy quyền sự kiện, đó là cách tốt nhưng không phải cách cart.js đang làm. Phương án bốn sai vì trình duyệt không tự gọi hàm theo id."
 },
 {
  "id": "bv4-a07",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi: nút tim trong product-card.js gắn sự kiện ra sao, và vì sao trong hàm xử lý lại gọi preventDefault và stopPropagation? Em giải thích hậu quả nếu bỏ hai dòng đó.",
  "options": [
   "Nút tim được gắn bằng btnWish.onclick, và trong hàm xử lý nhóm em gọi preventDefault để chặn hành vi mặc định của phần tử cha là thẻ a điều hướng sang trang chi tiết, gọi stopPropagation để sự kiện không nổi bọt lên thẻ cha gây chuyển trang; nếu bỏ hai dòng đó thì bấm tim sẽ vừa lưu yêu thích vừa nhảy sang product-detail, làm hỏng trải nghiệm.",
   "Nút tim được gắn bằng addEventListener với tùy chọn once, và preventDefault dùng để chặn trình duyệt tải lại trang, stopPropagation dùng để chặn gửi form.",
   "Nút tim được gắn bằng thuộc tính onchange, và hai lệnh preventDefault, stopPropagation chỉ để tắt hiệu ứng hover cho đẹp.",
   "Nút tim không cần hai lệnh đó vì nút nằm ngoài thẻ a, bấm tim không ảnh hưởng gì tới điều hướng."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong product-card.js, nút tim btnWish được gắn btnWish.onclick = function, bên trong gọi e.preventDefault và e.stopPropagation trước khi gọi toggleWishlistProduct. Lý do: nút tim nằm trong khung ảnh có thẻ a bao quanh trỏ tới product-detail.html?id=, nên nếu không chặn, cú bấm sẽ vừa kích hoạt onclick vừa kích hoạt điều hướng của thẻ a, hoặc sự kiện nổi bọt lên thẻ a và trình duyệt chuyển trang. preventDefault chặn hành vi mặc định của thẻ a, stopPropagation chặn sự kiện lan lên cha. Kết quả là bấm tim chỉ lưu hoặc bỏ yêu thích và hiện thông báo, không nhảy trang. Phương án hai sai vì không có tùy chọn once ở đây và mục đích không phải chặn gửi form. Phương án ba sai vì sự kiện là click chứ không phải change, và hai lệnh này không liên quan hiệu ứng hover. Phương án bốn sai vì nút tim thực tế nằm trong vùng ảnh có thẻ a bao quanh."
 },
 {
  "id": "bv4-a08",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi về localStorage cho giỏ hàng và wishlist: nhóm em lưu dữ liệu theo cấu trúc nào, vì sao wishlist lại lưu theo từng người dùng còn giỏ hàng thì không? Em giải thích cơ chế đọc ghi.",
  "options": [
   "Giỏ hàng lưu một mảng các object gồm product_id và quantity dưới một khóa chung, còn wishlist lưu một object mà mỗi khóa là id người dùng hoặc chuỗi guest, giá trị là mảng id sản phẩm; nhóm em tách như vậy vì giỏ hàng cần dùng ngay cả khi chưa đăng nhập và chỉ có một giỏ tại một thời điểm, còn wishlist phải tách riêng theo tài khoản để mỗi người có danh sách riêng, khách chưa đăng nhập dùng khóa guest.",
   "Giỏ hàng và wishlist đều lưu chung một khóa duy nhất dạng mảng id sản phẩm, không phân biệt người dùng, vì localStorage chỉ có một phiên duy nhất trên máy.",
   "Giỏ hàng lưu theo từng người dùng còn wishlist lưu chung, vì giỏ hàng gắn với tài khoản còn wishlist ai xem cũng thấy.",
   "Cả hai đều lưu vào sessionStorage chứ không phải localStorage, và mỗi lần tải trang thì đọc lại từ file JSON trên server."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong services/cart.js, giỏ hàng được đọc ghi qua các hàm getCart, saveCart, addToCart, updateQuantity, removeFromCart; dữ liệu là mảng object có product_id và quantity, lưu dưới một khóa chung vì mỗi trình duyệt chỉ có một giỏ đang mua. Với wishlist, product-card.js dùng getObject và saveObject với khóa wishlists, giá trị là một object mà khóa con là user.id nếu đã đăng nhập, hoặc chuỗi guest nếu chưa; mỗi khóa con là mảng id sản phẩm. Cách tách này cho phép nhiều tài khoản trên cùng máy có danh sách yêu thích riêng, còn giỏ hàng thì dùng chung cho phiên mua hiện tại. Hàm checkIsWishlist và toggleWishlistProduct đọc đúng khóa theo user hiện tại rồi ghi lại toàn bộ object. Phương án hai sai vì wishlist thực tế có phân theo người dùng. Phương án ba đảo ngược so với thực tế. Phương án bốn sai vì dự án dùng localStorage chứ không phải sessionStorage, và không đọc từ file JSON trên server mỗi lần tải."
 },
 {
  "id": "bv4-a09",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy hỏi tình huống: khách bấm tim một sản phẩm khi chưa đăng nhập, sau đó đăng nhập bằng tài khoản khác. Với cách lưu wishlist trong product-card.js, danh sách yêu thích sẽ hiển thị thế nào và nhóm em giải thích ra sao nếu thầy bắt bẻ?",
  "options": [
   "Khi chưa đăng nhập, món được lưu dưới khóa guest; sau khi đăng nhập bằng tài khoản khác, hàm checkIsWishlist đọc theo user.id nên danh sách hiển thị là của tài khoản đó, còn món lưu ở guest vẫn nằm trong localStorage nhưng không hiện ra; nhóm em thừa nhận đây là điểm chưa hoàn thiện và hướng khắc phục là khi đăng nhập thì gộp danh sách guest vào tài khoản rồi xóa khóa guest.",
   "Khi chưa đăng nhập, món được lưu dưới khóa guest; sau khi đăng nhập, hệ thống tự động hiển thị luôn món đó vì wishlist không phân biệt người dùng.",
   "Khi chưa đăng nhập, hệ thống không cho bấm tim, nút tim bị khóa cho tới khi đăng nhập nên không có tình huống này.",
   "Khi chưa đăng nhập, món được lưu vào giỏ hàng thay vì wishlist, nên sau khi đăng nhập khách thấy món đó trong giỏ."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong product-card.js, checkIsWishlist lấy user hiện tại, nếu có thì dùng user.id làm khóa, nếu không thì dùng chuỗi guest. Vì vậy khách chưa đăng nhập bấm tim thì id sản phẩm được thêm vào mảng wishlists.guest. Khi đăng nhập bằng tài khoản khác, trang wishlist đọc wishlists[user.id], nên danh sách hiển thị là của tài khoản đó và không thấy món lưu ở guest. Món ở guest vẫn còn trong localStorage nhưng bị che. Đây là điểm nhóm em tự nhận là chưa hoàn thiện; hướng khắc phục là khi đăng nhập thành công thì đọc mảng guest, gộp vào mảng của user rồi xóa khóa guest để không mất dữ liệu khách đã lưu trước đó. Phương án hai sai vì wishlist có phân theo người dùng. Phương án ba sai vì nút tim không bị khóa khi chưa đăng nhập, code vẫn cho bấm và lưu dưới guest. Phương án bốn sai vì bấm tim ghi vào wishlist chứ không ghi vào giỏ hàng."
 },
 {
  "id": "bv4-a10",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy hỏi tình huống: khách mở hai tab cùng lúc, tab A thêm sản phẩm vào giỏ, tab B vẫn đang mở trang giỏ hàng cũ. Với cách lưu localStorage hiện tại, tab B có tự cập nhật không, và nhóm em xử lý hoặc giải thích thế nào?",
  "options": [
   "Tab B không tự cập nhật vì nó chỉ đọc localStorage lúc render; muốn đồng bộ thì phải lắng nghe sự kiện storage để biết tab khác vừa ghi và vẽ lại, hoặc đơn giản là khi khách bấm thao tác trên tab B thì hàm showCart đọc lại dữ liệu mới nhất nên sẽ thấy đúng; nhóm em thừa nhận chưa gắn listener storage nên trải nghiệm hai tab chưa mượt.",
   "Tab B tự cập nhật ngay lập tức vì localStorage có cơ chế tự động đẩy thay đổi sang mọi tab đang mở mà không cần viết thêm code.",
   "Tab B sẽ bị lỗi và trắng trang vì hai tab cùng ghi một khóa localStorage sẽ gây xung đột và trình duyệt chặn.",
   "Tab B luôn hiển thị đúng vì mỗi lần đổi số lượng, hàm saveCart gọi updateCartCount và hàm này tự tải lại toàn bộ các tab đang mở."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. localStorage là kho dùng chung theo origin, nhưng mỗi tab giữ một bản sao trong bộ nhớ sau khi đọc; khi tab A ghi, tab B không tự biết trừ khi tab B có lắng nghe sự kiện storage, sự kiện này chỉ bắn ở các tab khác chứ không bắn ở tab vừa ghi. Trong RoomCraft, showCart đọc getCart mỗi lần được gọi, nên nếu khách bấm tăng giảm hay xóa trên tab B thì tab B sẽ đọc lại dữ liệu mới nhất và hiển thị đúng; nhưng nếu khách chỉ nhìn mà không thao tác thì tab B vẫn hiển thị số cũ. Nhóm em thừa nhận chưa gắn listener storage, hướng khắc phục là thêm window.addEventListener cho sự kiện storage để gọi showCart khi giỏ hàng thay đổi từ tab khác. Phương án hai sai vì localStorage không tự đẩy thay đổi. Phương án ba sai vì hai tab ghi cùng khóa không gây trắng trang, chỉ ghi đè lẫn nhau. Phương án bốn sai vì updateCartCount chỉ cập nhật số đếm trên giao diện của tab hiện tại, không tải lại tab khác."
 },
 {
  "id": "bv4-a11",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi về xử lý lỗi: trong cart.js, khi khách đổi số lượng vượt tồn kho hoặc nhập số lượng không hợp lệ, nhóm em xử lý thế nào và vì sao lại dùng alert thay vì hiển thị lỗi ngay trên giao diện?",
  "options": [
   "Hàm updateQuantity trong services/cart.js trả về chuỗi lỗi rỗng nếu thành công hoặc câu thông báo nếu vượt tồn kho; cart.js kiểm tra nếu chuỗi lỗi khác rỗng thì alert rồi gọi showCart để vẽ lại số lượng cũ, còn với ô nhập thì kiểm tra rỗng, không phải số, không phải số nguyên trước khi gọi updateQuantity; nhóm em dùng alert vì nhanh và đủ rõ cho đồ án, nhưng thừa nhận hiển thị lỗi ngay dưới ô nhập sẽ tốt hơn về trải nghiệm.",
   "cart.js không kiểm tra gì cả, cứ gọi updateQuantity và để hàm này tự sửa số lượng về mức tối đa mà không báo gì cho khách.",
   "cart.js ném lỗi bằng throw và để lỗi nổi lên console, còn giao diện thì không thay đổi gì nên khách không biết mình vừa nhập sai.",
   "cart.js chặn hoàn toàn việc nhập tay vào ô số lượng, chỉ cho bấm nút cộng trừ nên không có trường hợp nhập sai."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong cart.js, hàm changeQty lấy giỏ hiện tại, gọi updateQuantity với số lượng mới, nhận về chuỗi lỗi; nếu chuỗi khác rỗng thì alert chuỗi đó, sau đó luôn gọi showCart để vẽ lại, nhờ vậy ô số lượng quay về giá trị hợp lệ. Hàm setQty đọc giá trị ô nhập, kiểm tra rỗng, isNaN, và khác Math.floor để bắt số lẻ, nếu sai thì alert yêu cầu số nguyên rồi vẽ lại; nếu đúng thì mới gọi updateQuantity. Việc trả chuỗi lỗi thay vì ném exception giúp nơi gọi dễ xử lý và hiển thị. Nhóm em dùng alert vì đơn giản và đủ rõ trong phạm vi đồ án, nhưng đúng là hiển thị lỗi ngay cạnh ô nhập sẽ thân thiện hơn và đó là hướng cải thiện. Phương án hai sai vì cart.js có kiểm tra và báo lỗi. Phương án ba sai vì không dùng throw ở đây. Phương án bốn sai vì ô nhập tay vẫn tồn tại và có hàm setQty xử lý."
 },
 {
  "id": "bv4-a12",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi về async/await và fetch JSON: nhóm em nạp dữ liệu products.json, rooms.json vào trang bằng cách nào, và vì sao phải dùng async/await thay vì đọc file đồng bộ?",
  "options": [
   "Nhóm em dùng fetch để gọi file JSON trong data/json, chờ bằng await trong hàm async, rồi parse bằng response.json và gán vào biến dùng chung; phải dùng async vì fetch trả về Promise và JavaScript trong trình duyệt không có cách đọc file đồng bộ, nếu không chờ thì code phía sau chạy trước khi dữ liệu về và biến còn rỗng, gây lỗi khi render.",
   "Nhóm em dùng XMLHttpRequest đồng bộ với tham số async bằng false để chắc chắn dữ liệu về trước khi render, nên không cần async/await.",
   "Nhóm em nhúng thẳng toàn bộ nội dung products.json vào file js dưới dạng biến, nên không cần fetch và không cần async/await.",
   "Nhóm em dùng import để nạp file JSON như một module, trình duyệt tự chờ và trả về object ngay lập tức mà không cần async."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong dự án, dữ liệu nằm ở data/json gồm products.json, rooms.json, categories.json và nhiều file khác; các trang gọi fetch tới đường dẫn tương ứng, dùng await để chờ Promise, rồi response.json để parse. Vì fetch là bất đồng bộ, nếu không await thì các dòng render phía sau sẽ chạy khi dữ liệu chưa về, biến còn rỗng và giao diện lỗi. Hàm nạp dữ liệu được khai báo async, và các trang chờ nạp xong mới gọi initPage để render header, footer, chatbot và nội dung. Cách này cũng cho phép bắt lỗi bằng try catch nếu file thiếu hoặc mạng lỗi. Phương án hai sai vì XMLHttpRequest đồng bộ bị trình duyệt cảnh báo và làm treo giao diện, nhóm em không dùng. Phương án ba sai vì dữ liệu để ở file JSON riêng, không nhúng vào js. Phương án bốn sai vì import JSON trong trình duyệt cần cấu hình đặc biệt và không phải cách nhóm em làm."
 },
 {
  "id": "bv4-a13",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy hỏi tình huống: khi fetch products.json bị lỗi mạng hoặc trả về mã 404, nếu code chỉ viết await fetch rồi response.json mà không kiểm tra gì thì chuyện gì xảy ra, và nhóm em nên xử lý thế nào cho đúng?",
  "options": [
   "fetch chỉ reject khi lỗi mạng, còn khi server trả 404 thì Promise vẫn resolve với response.ok bằng false, nên nếu không kiểm tra response.ok mà gọi response.json thì có thể parse lỗi hoặc nhận nội dung không phải JSON, sau đó biến dữ liệu rỗng và render hỏng; cách đúng là kiểm tra response.ok, bọc try catch, và hiển thị thông báo thân thiện hoặc dùng dữ liệu dự phòng.",
   "fetch sẽ tự reject với mọi mã lỗi 4xx và 5xx, nên chỉ cần await là đủ, không cần kiểm tra response.ok và không cần try catch.",
   "Khi fetch lỗi thì trình duyệt tự tải lại trang và thử lại ba lần, nên code không cần xử lý gì thêm.",
   "Khi fetch lỗi thì biến dữ liệu tự động nhận giá trị mặc định là mảng rỗng và giao diện tự hiển thị trạng thái trống, không cần viết thêm code."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Đây là điểm rất hay bị hỏi. fetch chỉ reject khi có lỗi mạng thực sự như mất kết nối; với mã 404 hay 500, Promise vẫn resolve và response.ok bằng false. Nếu code gọi thẳng response.json mà không kiểm tra, có thể gặp lỗi parse vì nội dung trả về là trang lỗi HTML chứ không phải JSON, hoặc nhận về object rỗng, rồi các hàm render như showCart hay createProductCard sẽ đọc thuộc tính của undefined và nổ lỗi. Cách xử lý đúng là kiểm tra response.ok trước khi parse, bọc toàn bộ trong try catch để bắt lỗi parse và lỗi mạng, và khi lỗi thì hiển thị thông báo cho người dùng hoặc dùng dữ liệu dự phòng. Phương án hai sai vì fetch không reject với 4xx, 5xx. Phương án ba sai vì trình duyệt không tự thử lại. Phương án bốn sai vì không có cơ chế tự gán mặc định, phải viết code mới có."
 },
 {
  "id": "bv4-a14",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "question": "Thầy hỏi: trong wishlist.js, khi khách bấm nút thêm vào giỏ trên thẻ yêu thích, luồng xử lý diễn ra thế nào và vì sao sau khi thêm lỗi nhóm em lại gọi renderWishlist?",
  "options": [
   "Hàm addWishlistToCart gọi addToCart với số lượng một, nhận chuỗi lỗi; nếu lỗi khác rỗng thì alert rồi gọi renderWishlist để vẽ lại danh sách, vì tồn kho có thể vừa đổi và nút thêm vào giỏ cần bị khóa nếu sản phẩm đã hết hàng; nếu thành công thì hiện thông báo kèm link sang giỏ hàng và giữ nguyên món trong wishlist.",
   "Hàm addWishlistToCart gọi addToCart, nếu thành công thì xóa luôn món khỏi wishlist, còn nếu lỗi thì không làm gì cả vì giỏ hàng không đổi.",
   "Hàm addWishlistToCart chỉ hiện thông báo thành công mà không thực sự thêm vào giỏ, vì wishlist và giỏ hàng là hai kho dữ liệu tách biệt không liên quan.",
   "Hàm addWishlistToCart gọi addToCart, nếu lỗi thì ném exception ra ngoài và để trang trắng, buộc khách tải lại."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong wishlist.js, addWishlistToCart gọi addToCart với productId và số lượng một; addToCart trong services/cart.js kiểm tra tồn kho và trả về chuỗi lỗi nếu không đủ hàng. Nếu chuỗi lỗi khác rỗng, hàm alert rồi gọi renderWishlist. Lý do gọi renderWishlist: hàm createWishlistCard quyết định nút thêm vào giỏ là nút thường hay nút bị khóa dựa trên stock_quantity tại thời điểm render; nếu tồn kho vừa về không hoặc giảm, cần vẽ lại để nút chuyển sang trạng thái hết hàng hoặc đã bán, tránh khách bấm mãi. Nếu thành công, hàm hiện thông báo đã thêm kèm link sang cart.html và giữ nguyên món trong danh sách yêu thích, đúng như ghi chú trong file. Phương án hai sai vì thành công không xóa khỏi wishlist. Phương án ba sai vì hàm thực sự thêm vào giỏ. Phương án bốn sai vì lỗi được xử lý bằng alert chứ không ném ra ngoài."
 },
 {
  "id": "bv4-a15",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy hỏi tình huống: khách bấm bỏ một món khỏi wishlist rồi bấm Hoàn tác. Cơ chế hoàn tác trong wishlist.js hoạt động thế nào, và có trường hợp nào hoàn tác sai vị trí hoặc mất dữ liệu không?",
  "options": [
   "Khi bỏ, hàm removeWishlistProduct lưu lại productId và vị trí cũ vào biến lastRemoved rồi mới ghi danh sách mới; khi bấm Hoàn tác, hàm undoRemoveWishlist kiểm tra món chưa có trong danh sách thì chèn lại đúng vị trí cũ, nếu vị trí không hợp lệ thì chèn cuối; nếu giữa hai thao tác khách bỏ thêm món khác thì lastRemoved bị ghi đè nên chỉ hoàn tác được món gần nhất, đó là giới hạn đã biết.",
   "Cơ chế hoàn tác lưu toàn bộ lịch sử mọi lần bỏ vào một mảng, nên khách bấm Hoàn tác bao nhiêu lần cũng khôi phục được hết các món đã bỏ trong phiên.",
   "Cơ chế hoàn tác không lưu gì cả, nút Hoàn tác chỉ tải lại trang wishlist từ đầu nên món đã bỏ sẽ mất vĩnh viễn.",
   "Cơ chế hoàn tác ghi đè lại toàn bộ danh sách yêu thích bằng bản sao lưu cũ, nên mọi thay đổi khác trong phiên đều bị mất."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Trong wishlist.js, biến lastRemoved lưu một object gồm productId và viTri của món vừa bỏ. Hàm removeWishlistProduct duyệt mảng id, giữ lại các id khác, ghi nhớ vị trí của món bị bỏ, lưu danh sách mới, vẽ lại và hiện thông báo có link Hoàn tác. Hàm undoRemoveWishlist kiểm tra nếu món chưa có trong danh sách thì splice chèn lại ở viTri, nếu viTri âm hoặc lớn hơn độ dài thì chèn cuối, sau đó lưu và vẽ lại. Giới hạn: lastRemoved chỉ giữ một món, nên nếu khách bỏ liên tiếp hai món thì chỉ hoàn tác được món sau cùng; đây là đánh đổi để code đơn giản, hướng cải thiện là dùng ngăn xếp lưu nhiều lần bỏ. Phương án hai sai vì không có mảng lịch sử. Phương án ba sai vì có lưu lastRemoved. Phương án bốn sai vì hoàn tác chỉ chèn lại một món chứ không ghi đè toàn bộ danh sách."
 },
 {
  "id": "bv4-a16",
  "chapter": 12,
  "difficulty": 3,
  "type": "single",
  "question": "Thầy hỏi tổng hợp: nếu thầy yêu cầu nhóm em bỏ localStorage và chuyển giỏ hàng, wishlist sang lưu trên server thật, thì những phần nào trong code hiện tại phải đổi, và vì sao nhóm em vẫn chọn localStorage cho phạm vi đồ án này?",
  "options": [
   "Phải đổi các hàm đọc ghi trong services/cart.js và phần wishlist trong product-card.js, wishlist.js từ đọc ghi localStorage sang gọi API bằng fetch kèm await, thêm xử lý lỗi mạng và trạng thái đang tải, đồng bộ số đếm giỏ và tim sau khi server trả về; nhóm em vẫn chọn localStorage vì đồ án deploy tĩnh trên GitHub Pages, không có backend thật cho đơn hàng, và phạm vi môn học cho phép, đổi lại nhóm em thừa nhận dữ liệu không đồng bộ giữa nhiều máy và dễ bị sửa trực tiếp.",
   "Chỉ cần đổi một dòng trong cart.js từ localStorage sang sessionStorage là xong, vì hai cơ chế này tương đương nhau và đều là lưu trên server.",
   "Không cần đổi gì cả, vì localStorage thực chất là lưu trên server và tự đồng bộ giữa các máy khi người dùng đăng nhập cùng tài khoản.",
   "Chỉ cần thêm một file JSON mới trong data/json là giỏ hàng tự động đồng bộ, vì trình duyệt sẽ tự ghi ngược lại file JSON trên GitHub Pages."
  ],
  "correct": [
   0
  ],
  "explanation": "Đáp án đúng là phương án đầu. Nếu chuyển sang server thật, các điểm phải sửa gồm: trong services/cart.js, các hàm getCart, saveCart, addToCart, updateQuantity, removeFromCart phải gọi API bằng fetch và await thay vì đọc ghi localStorage; phần wishlist trong product-card.js với checkIsWishlist, toggleWishlistProduct và trong wishlist.js với renderWishlist, addWishlistToCart, removeWishlistProduct cũng phải gọi API; đồng thời phải thêm trạng thái đang tải, xử lý lỗi mạng, kiểm tra response.ok, và cập nhật số đếm sau khi server phản hồi. Nhóm em vẫn chọn localStorage vì đồ án deploy tĩnh trên GitHub Pages, không có backend thật cho đơn hàng, và phạm vi môn học cho phép làm phía client. Đổi lại, dữ liệu không đồng bộ giữa nhiều máy, nhiều tab, và có thể bị sửa trực tiếp trong trình duyệt; nhóm em đã ghi nhận đây là điểm yếu và nêu hướng cải thiện. Phương án hai sai vì sessionStorage cũng là phía client, không phải server. Phương án ba sai vì localStorage không đồng bộ giữa các máy. Phương án bốn sai vì GitHub Pages không cho ghi ngược file JSON từ trình duyệt."
 }
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_BV4; }
