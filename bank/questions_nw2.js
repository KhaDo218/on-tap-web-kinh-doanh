// Cau hoi bo sung bam sat bao cao final - nw2 (20 cau)
const QUESTIONS_NW2 = [
 {
  "id": "nw2-a01",
  "chapter": 12,
  "difficulty": 1,
  "type": "single",
  "topic": "uiux",
  "question": "Vi sao nhom quyet dinh bo cuc trang chu di theo trinh tu anh nen toan man hinh kem tieu de va hai nut, dai so lieu, khoi anh sang tuong tac, khoi gioi thieu ba buoc Shop the Room, san pham noi bat dang dai cuon ngang, luoi bay phong cach, khoi triet ly thiet ke dang cuon dinh, cau chuyen thuong hieu co thanh so sanh anh truoc sau va chan trang?",
  "options": [
   "Trinh tu nay dua nguoi chua biet san pham di tu an tuong hinh anh den hieu co che roi moi toi hanh dong mua, phu hop dinh huong lay anh lam trung tam cua RoomCraft",
   "Trinh tu nay duoc sap xep ngau nhien de moi thanh vien trong nhom tu chon khoi minh thich khi lam viec song song",
   "Trinh tu nay chi de lap lai cau truc cua cac website noi that khac ma khong can giai thich ve trai nghiem nguoi dung",
   "Trinh tu nay nham giam so luong hinh anh phai tai de tang toc do hien thi trang chu tren moi thiet bi"
  ],
  "correct": [
   0
  ],
  "explanation": "Tai lieu muc 3.6.3 ghi ro bố cục trang chủ đi theo trình tự ảnh nền toàn màn hình kèm tiêu đề và hai nút; dải số liệu; khối ánh sáng tương tác; khối giới thiệu ba bước Shop the Room; sản phẩm nổi bật dạng dải cuộn ngang; lưới bảy phong cách; khối triết lý thiết kế dạng cuộn dính; câu chuyện thương hiệu có thanh so sánh ảnh trước – sau; chân trang. Trình tự này đưa người chưa biết sản phẩm đi từ ấn tượng hình ảnh đến hiểu cơ chế, rồi mới tới hành động mua. Đây là quyết định thiết kế có chủ đích, không phải sắp xếp ngẫu nhiên hay sao chép, và cũng không nhằm giảm số ảnh tải về."
 },
 {
  "id": "nw2-a02",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "uiux",
  "question": "Trong phan dinh huong thiet ke, nhom chon huong lay anh lam trung tam voi bang mau trung tinh gan nhu don sac, khong bo goc, khong do bong tren cac thanh phan nen. Nhung ly do nao duoc tai lieu neu ra cho lua chon nay va viec nay giup gi khi hien thi ca anh phong rong lan anh san pham nen trang?",
  "options": [
   "Tao cam giac cua mot tap chi noi that hoac showroom nhieu khoang trang, va giup cung mot bo thanh phan hien thi duoc ca anh phong rong lan anh san pham nen trang ma khong bi lech tong",
   "Tao cam giac cong nghe hien dai voi nhieu mau nhan va do bong sau de cac khoi noi bat tren nen sang",
   "Giup giam dung luong tep CSS vi khong phai khai bao mau va do bong, tu do tang toc do tai trang tren moi thiet bi",
   "Giup dong nhat voi ban mo ta thiet ke lap luc khoi dong du an, vi ban nay cung de xuat bang mau trung tinh va khong bo goc"
  ],
  "correct": [
   0
  ],
  "explanation": "Muc 3.6.1 neu ro nhom chon huong thiet ke lay anh lam trung tam: giao dien giu bang mau trung tinh gan nhu don sac, khong dung bo goc, khong dung do bong tren cac thanh phan nen, de mau sac duy nhat trong trang den tu chinh anh san pham. Cach xu ly nay tao cam giac cua mot tap chi noi that hoac mot showroom co nhieu khoang trang, dong thoi giup cung mot bo thanh phan hien thi duoc ca anh phong rong va anh san pham nen trang ma khong bi lech tong. Ban mo ta thiet ke ban dau lai de xuat bo goc 8-16 px va bon muc do bong, nen phuong an noi ban nay cung trung tinh la sai."
 },
 {
  "id": "nw2-a03",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "uiux",
  "question": "Ban mo ta thiet ke lap luc khoi dong du an de xuat font tieu de Playfair Display, font noi dung Inter, mau nhan o-liu #7A8B6E, bo goc 8-16 px va bon muc do bong. Khi hien thuc, nhom da dieu chinh sang Cormorant Garamond, Noto Sans, mau vang dong #B18A52 va bo bo goc. Nhung ly do nao duoc tai lieu ghi ro cho ba thay doi nay?",
  "options": [
   "Cormorant Garamond va Noto Sans duoc luu san trong assets/fonts duoi dang woff2 theo giay phep SIL OFL nen hien thi dung ca khi khong co Internet; bo bo goc giup anh san pham nen trang khong bi cat goc; mau nhan doi sang vang dong de tong the van don sac nhung khong bi lanh",
   "Cormorant Garamond va Noto Sans la font he thong co san tren moi may nen khong can tai ve; bo bo goc de giam dung luong CSS; mau vang dong duoc chon vi do tuong phan cao hon o-liu",
   "Playfair Display va Inter bi loi hien thi tren di dong nen nhom phai thay bang font khac; bo bo goc de tranh loi khi anh khong tai kip; mau vang dong la mau thuong hieu bat buoc cua doi tac",
   "Nhom doi font de giong voi mot website noi that khac ma nhom tham khao; bo bo goc vi ban mo ta ban dau bi mat; mau vang dong duoc chon ngau nhien trong qua trinh lam"
  ],
  "correct": [
   0
  ],
  "explanation": "Muc 3.6.1 ghi ro ba ly do. Thu nhat, Cormorant Garamond va Noto Sans duoc luu san trong thu muc assets/fonts duoi dang tep woff2 lay tu Fontsource theo giay phep SIL Open Font License, nen website hien thi dung thiet ke ca khi khong co Internet, trong khi Playfair Display va Inter phai tai tu dich vu ben ngoai. Thu hai, bo bo goc va do bong giup anh san pham khong bi cat goc, von la chi tiet de thay khi anh co nen trang. Thu ba, mau nhan duoc doi tu o-liu sang vang dong #B18A52 va chi dung cho duong ke duoi tieu de trang va vai chi tiet nho, nho vay tong the van don sac nhung khong bi lanh."
 },
 {
  "id": "nw2-a04",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "uiux",
  "question": "Ve he thong mau sac, tai lieu neu do tuong phan giua chu #202020 tren nen #F7F7F5 dat khoang 15:1, cao hon nhieu so voi muc 4,5:1 ma WCAG 2.2 yeu cau cho van ban thuong, con cap chu phu #686868 tren nen chinh dat khoang 5,2:1. Vi sao nhom chu dong giu chu phu o muc nay thay vi cho nhat hon, va dieu do lien quan gi den kha nang truy cap?",
  "options": [
   "Nhom giu chu phu o muc 5,2:1 de khong phai hy sinh kha nang doc, vi neu cho nhat hon thi chu phu se kho doc hon tren nen sang",
   "Nhom giu chu phu o muc 5,2:1 vi day la muc toi thieu bat buoc cua WCAG 2.2 cho moi loai van ban, ke ca tieu de lon",
   "Nhom giu chu phu o muc 5,2:1 de tang do tuong phan cho dep hon, khong lien quan den kha nang doc cua nguoi dung",
   "Nhom giu chu phu o muc 5,2:1 vi mau #686868 la mau thuong hieu duoc chon tu dau, khong the thay doi duoc"
  ],
  "correct": [
   0
  ],
  "explanation": "Muc 3.6.2 giai thich do tuong phan giua chu #202020 va nen #F7F7F5 dat khoang 15:1, cao hon nhieu so voi muc 4,5:1 ma WCAG 2.2 yeu cau cho van ban thuong; cap chu phu #686868 tren nen chinh dat khoang 5,2:1. Nhom chu dong giu chu phu o muc nay thay vi nhat hon de khong phai hy sinh kha nang doc. Day la quyet dinh lien quan truc tiep den kha nang truy cap, khong phai vi muc bat buoc cho moi loai van ban hay vi ly do thuong hieu."
 },
 {
  "id": "nw2-a05",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "uiux",
  "question": "Trong thang chu, nhom ha co chu than bai tu 16 px xuong 15 px nhung van giu chieu cao dong 24 px. Vi sao nhom chon co 15 px cho than bai va viec giu chieu cao dong 24 px mang lai dieu gi cho bo cuc the san pham tren man hinh nho?",
  "options": [
   "Ha xuong 15 px de mot dong mo ta san pham dai van vua khung the o man hinh 390 px ma khong phai cat bot chu, dong thoi giu chieu cao dong 24 px nen khoang tho giua cac dong khong doi",
   "Ha xuong 15 px de tang so dong hien thi trong mot the san pham, con chieu cao dong 24 px giup chu dam hon va de doc hon",
   "Ha xuong 15 px vi day la co chu mac dinh cua trinh duyet, con chieu cao dong 24 px la gia tri bat buoc cua CSS",
   "Ha xuong 15 px de tiet kiem dien tich, con chieu cao dong 24 px giup canh deu cac the san pham theo chieu doc"
  ],
  "correct": [
   0
  ],
  "explanation": "Muc 3.6.2 ghi ro co chu 15 px cho than bai la mot lua chon co chu y: nhom ha tu 16 px xuong 15 px de mot dong mo ta san pham dai van vua khung the o man hinh 390 px ma khong phai cat bot chu, dong thoi van giu chieu cao dong 24 px nen khoang tho giua cac dong khong doi. Cac phuong an con lai deu khong dung voi ly do tai lieu neu, vi khong phai de tang so dong, khong phai co chu mac dinh cua trinh duyet va khong phai gia tri bat buoc cua CSS."
 },
 {
  "id": "nw2-a06",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "uiux",
  "question": "Ve he khoang cach, tai lieu cho biet nhom rut ve mot so it gia tri dung lap lai, va cac khoi lon cach nhau 96 px. Viec rut he khoang cach ve mot so it gia tri dung lap lai mang lai loi ich gi cho qua trinh lam viec cua nhom va cho giao dien?",
  "options": [
   "Cac khoi trong trang tu thang hang ma khong phai chinh tay tung cho, dong thoi giup nhieu thanh viên cung lam cac trang khac nhau van giu duoc nhat quan",
   "Giup giam so luong dong CSS phai viet, tu do giam dung luong tep va tang toc do tai trang tren moi thiet bi",
   "Giup cac khoi noi dung tu dong co gian theo be rong man hinh ma khong can khai bao diem ngat",
   "Giup tieu de trang co the co gian theo be rong man hinh thong qua ham clamp ma khong can chinh tay"
  ],
  "correct": [
   0
  ],
  "explanation": "Muc 3.6.2 va 3.6.3 cho biet he khoang cach duoc rut ve mot so it gia tri dung lap lai, nho vay cac khoi trong trang tu thang hang ma khong phai chinh tay tung cho. Cung trong muc 3.6.3, nhom ghi ro cau truc lap lai nay giup nguoi dung doc duoc nhip cua trang chi sau mot lan cuon, va nhom cung de giu nhat quan khi nhieu thanh viên cung lam cac trang khac nhau. Cac phuong an con lai noi ve giam dung luong tep, tu dong co gian theo man hinh hay clamp deu khong phai loi ich duoc tai lieu neu cho he khoang cach."
 },
 {
  "id": "nw2-a07",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "uiux",
  "question": "Trong quy uoc ky thuat di kem, moi thanh phan trong base.css dat border-radius 0, chi ba cho co bo goc la nhan so luong tren bieu tuong gio hang, bieu tuong trong khung trong va hop dang nhap; do bong cung chi xuat hien o the noi dung trang con va hop dang nhap. Vi sao nhom chi cho phep bo goc va do bong o nhung cho nay?",
  "options": [
   "Day la nhung khoi can noi len tren nen chuyen sac hoac can hinh tron de de nhan biet, trong khi phan con lai giu bo goc 0 va khong do bong de tong the van don sac va anh san pham khong bi cat goc",
   "Day la nhung khoi co noi dung quan trong nhat trong trang nen duoc uu tien bo goc va do bong de nguoi dung chu y",
   "Day la nhung khoi duoc tao bang component dung chung nen bat buoc phai co bo goc va do bong theo quy uoc cua component",
   "Day la nhung khoi nam ngoai vung .container nen phai co bo goc va do bong de khong bi lech voi khung luoi chung"
  ],
  "correct": [
   0
  ],
  "explanation": "Muc 3.6.2 neu quy uoc ky thuat: moi thanh phan trong base.css dat border-radius 0; chi ba cho co bo goc la nhan so luong tren bieu tuong gio hang (hinh tron 16 px), bieu tuong trong khung trong va hop dang nhap. Do bong cung chi xuat hien o the noi dung trang con (0 18px 46px rgba(43, 37, 29, 0.07)) va hop dang nhap, tuc la o nhung khoi can noi len tren nen chuyen sac. Nhu vay bo goc va do bong duoc gioi han co chu dich de tong the van don sac va anh san pham khong bi cat goc, khong phai vi noi dung quan trong hay quy uoc component."
 },
 {
  "id": "nw2-a08",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "uiux",
  "question": "Trong phan bo cuc va kha nang thich ung, tai lieu cho biet nhom khong an bot noi dung tren man hinh nho ma chi thay doi cach trinh bay; bo loc o trang San pham va trang Do cu van giu du tieu chi nhung duoc thu vao mot nut Bo loc va mo ra dang ngan keo. Rieng o tim kiem tren thanh dau trang bi an duoi 768 px. Vi sao nhom xu ly nhu vay?",
  "options": [
   "De bon bieu tuong tren thanh dau trang khong bi chen ep tren di dong, con nguoi dung van tim hang bang o tim kiem nam trong khoi bo loc cua trang San pham va trang Do cu",
   "De giam so luong tieu chi loc tren di dong vi man hinh nho khong the hien thi du cac o chon",
   "De tranh loi hien thi cua o tim kiem tren trinh duyet di dong, va bo loc duoc thu gon vi khong con can thiet tren man hinh nho",
   "De tang toc do tai trang tren di dong bang cach loai bo cac thanh phan tuong tac khoi giao dien nho"
  ],
  "correct": [
   0
  ],
  "explanation": "Muc 3.6.3 ghi ro nhom khong an bot noi dung tren man hinh nho, chi thay doi cach trinh bay. Bo loc o trang San pham va trang Do cu van giu du tieu chi, nhung duoc thu vao mot nut Bo loc va mo ra dang ngan keo. Rieng o tim kiem tren thanh dau trang bi an duoi 768 px de bon bieu tuong khong bi chen ep; tren di dong, nguoi dung tim hang bang o tim kiem nam trong khoi bo loc cua trang San pham va trang Do cu. Vi vay khong phai vi giam tieu chi loc hay loai bo thanh phan tuong tac."
 },
 {
  "id": "nw2-a09",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "uiux",
  "question": "Tai lieu cho biet cach thu gon bo loc tren di dong chinh la chi tiet khien khoang ba muoi luot kiem thu tu dong tren moi cau hinh di dong bi bao sai o dot hai, vi kich ban kiem thu khong bam vao nut thu gon truoc khi tim o chon. Su co nay noi len dieu gi ve moi quan he giua thiet ke responsive va kich ban kiem thu?",
  "options": [
   "Khi giao dien thay doi cach trinh bay tren man hinh nho, kich ban kiem thu cung phai cap nhat de thuc hien dung cac buoc mo ngan keo truoc khi tim o chon, neu khong se bao sai du chuc nang van dung",
   "Khi giao dien thay doi cach trinh bay tren man hinh nho thi nen bo kiem thu tu dong tren di dong de tranh bao sai",
   "Su co nay chung to viec thu gon bo loc la sai ve thiet ke va can bo cach thu gon de kiem thu chay dung",
   "Su co nay chung to kich ban kiem thu tu dong khong the chay tren cau hinh di dong va chi nen kiem thu thu cong"
  ],
  "correct": [
   0
  ],
  "explanation": "Muc 3.6.3 neu ro cach thu gon bo loc cung chinh la chi tiet khien khoang ba muoi luot kiem thu tu dong tren moi cau hinh di dong bi bao sai o dot hai, vi kich ban kiem thu khong bam vao nut thu gon truoc khi tim o chon. Su co nay cho thay khi thiet ke responsive thay doi cach trinh bay, kich ban kiem thu cung phai cap nhat de thuc hien dung cac buoc mo ngan keo truoc khi tim o chon; neu khong se bao sai du chuc nang van dung. No khong chung to viec thu gon la sai ve thiet ke hay phai bo kiem thu tu dong."
 },
 {
  "id": "nw2-a10",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "uiux",
  "question": "Ve cac thanh phan dung chung, tai lieu neu bon quyet dinh thiet ke: thanh dau trang dung position sticky chu khong co dinh tuyet doi; o tim kiem nam ngay tren thanh dau trang thay vi trong menu; the san pham khong chua nut them vao gio; khung trong duoc thiet ke thanh mot thanh phan rieng chu khong de trang. Vi sao nhom dat o tim kiem ngay tren thanh dau trang thay vi trong menu?",
  "options": [
   "Vi voi website co 953 san pham thi tim kiem la duong vao quan trong hon duyet danh muc",
   "Vi o tim kiem tren thanh dau trang de an hon khi xuong duoi 768 px so voi o tim kiem trong menu",
   "Vi o tim kiem trong menu khong the ho tro tim kiem khong dau va loc nhieu tieu chi nhu o tren thanh dau trang",
   "Vi menu chinh chi co bon muc nen khong con cho de dat o tim kiem ben trong"
  ],
  "correct": [
   0
  ],
  "explanation": "Muc 3.6.4 neu bon quyet dinh thiet ke trong nhom thanh phan dung chung. Ve o tim kiem, tai lieu ghi ro nhom dat o tim kiem ngay tren thanh dau trang thay vi trong menu, vi voi website co 953 san pham thi tim kiem la duong vao quan trong hon duyet danh muc. Cac phuong an con lai khong dung voi ly do tai lieu neu: khong phai vi de an tren di dong, khong phai vi o trong menu thieu chuc nang, va khong phai vi menu het cho."
 },
 {
  "id": "nw2-a11",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "uiux",
  "question": "Trong bon quyet dinh thiet ke cua cac thanh phan dung chung, nhom dat hanh dong them vao gio o trang chi tiet chu khong dat tren the san pham. Ly do nao duoc tai lieu neu ra, va dieu nay anh huong the nao den trai nghiem mua sam?",
  "options": [
   "Nhom dat hanh dong o trang chi tiet de nguoi dung buoc phai xem thong so va tinh trang ton kho truoc khi mua",
   "Nhom dat hanh dong o trang chi tiet de giam so luong nut tren the san pham, giup the gon hon va tai nhanh hon",
   "Nhom dat hanh dong o trang chi tiet vi the san pham khong du cho de hien thi nut them vao gio tren di dong",
   "Nhom dat hanh dong o trang chi tiet de tranh truong hop nguoi dung them nham san pham het hang vao gio"
  ],
  "correct": [
   0
  ],
  "explanation": "Muc 3.6.4 ghi ro the san pham khong chua nut them vao gio; nhom dat hanh dong do o trang chi tiet de nguoi dung buoc phai xem thong so va tinh trang ton kho truoc khi mua. Day la quyet dinh co chu dich ve trai nghiem mua sam, khong phai de the gon hon, khong phai vi thieu cho tren di dong va khong phai chi de tranh them nham san pham het hang."
 },
 {
  "id": "nw2-a12",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "uiux",
  "question": "Trong bon quyet dinh thiet ke cua cac thanh phan dung chung, nhom thiet ke khung trong thanh mot thanh phan rieng chu khong de trang. Ly do nao duoc tai lieu neu ra cho quyet dinh nay?",
  "options": [
   "Vi day la man hinh nguoi dung gap khi loc qua chat hoac khi gio hang rong, la hai thoi diem de bo di nhat",
   "Vi khung trong giup trang khong bi trong trang khi du lieu chua tai xong, tranh cam giac website bi loi",
   "Vi khung trong la noi dat quang cao va goi y san pham khi ket qua loc khong co san pham nao",
   "Vi khung trong giup dong bo chieu cao cac khoi noi dung tren trang danh sach san pham"
  ],
  "correct": [
   0
  ],
  "explanation": "Muc 3.6.4 neu bon quyet dinh thiet ke, trong do khung trong duoc thiet ke thanh mot thanh phan rieng chu khong de trang, vi day la man hinh nguoi dung gap khi loc qua chat hoac khi gio hang rong, la hai thoi diem de bo di nhat. Cac phuong an con lai noi ve trang thai dang tai, quang cao hay dong bo chieu cao deu khong dung voi ly do tai lieu neu."
 },
 {
  "id": "nw2-a13",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "uiux",
  "question": "Ve viec tu mockup den giao dien that, tai lieu cho biet mockup ve hotspot nhu mot diem tron co dinh, trong khi du lieu that luu toa do theo phan tram tren anh. Vi sao hotspot phai dat bang left va top theo phan tram, va dieu nay lien quan gi den kich thuoc vung cham tren anh phong?",
  "options": [
   "De hotspot khong bi lech khi anh co gian theo man hinh, vi toa do phan tram giu dung vi tri tuong doi tren anh o moi kich thuoc",
   "De hotspot co the thay doi kich thuoc vung cham theo tung thiet bi, giup de bam hon tren di dong",
   "De hotspot hien thi dung mau vang dong theo he mau cua website o moi do phan giai man hinh",
   "De hotspot khong bi che khuat boi cac thanh phan khac khi nguoi dung cuon trang tren di dong"
  ],
  "correct": [
   0
  ],
  "explanation": "Muc 3.6.5 ghi ro mot trong ba thay doi lon nhat so voi mockup: mockup ve hotspot nhu mot diem tron co dinh, trong khi du lieu that luu toa do theo phan tram tren anh; vi vay hotspot phai dat bang left va top theo phan tram de khong lech khi anh co gian theo man hinh. Dieu nay lien quan den viec giu dung vi tri tuong doi cua vung cham tren anh phong o moi kich thuoc, khong phai de thay doi kich thuoc vung cham, khong phai vi mau sac hay vi bi che khuat khi cuon."
 },
 {
  "id": "nw2-a14",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "uiux",
  "question": "Trong phan doi chieu mockup Stitch voi giao dien da hien thuc, tai lieu neu ba thay doi lon nhat deu xuat phat tu du lieu chu khong tu tham my: hotspot dat theo phan tram, them dai anh nho va doi bo hotspot theo anh dang xem, va thiet ke them nhan het hang cung cach vo hieu hoa nut mua. Vi sao nhom phai thiet ke them nhan het hang thay vi an san pham di?",
  "options": [
   "Vi khi kiem tra du lieu, nhom thay 71 trong 935 san pham dang hien thi o trang thai het hang, nen phai thiet ke nhan het hang va vo hieu hoa nut mua thay vi an san pham di",
   "Vi an san pham het hang se lam sai lech so luong san pham hien thi tren trang danh sach va anh huong den bo loc",
   "Vi nhan het hang giup nguoi dung biet san pham sap ve va co the dat truoc, nen can hien thi thay vi an",
   "Vi an san pham het hang se lam mat du lieu cua san pham do trong gio hang cua nguoi dung da them tu truoc"
  ],
  "correct": [
   0
  ],
  "explanation": "Muc 3.6.5 ghi ro ba thay doi lon nhat so voi mockup deu xuat phat tu du lieu chu khong tu tham my. Ve trang thai het hang, mockup chua co; khi kiem tra du lieu, nhom thay 71 trong 935 san pham dang hien thi o trang thai het hang, nen phai thiet ke them nhan het hang va cach vo hieu hoa nut mua thay vi an san pham di. Cac phuong an con lai khong dung voi ly do tai lieu neu."
 },
 {
  "id": "nw2-a15",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "uiux",
  "question": "Ve khung chung cho cac trang con, nhom dung main.subpage voi dai nen chuyen sac 235 px, duong dan phan cap, tieu de trang co gian theo be rong man hinh bang clamp(48px, 5vw, 76px), duong ke vang dong 72 x 2 px roi moi toi noi dung. Khung nay mang lai dieu gi cho 17 trang phia khach du noi dung ben duoi rat khac nhau?",
  "options": [
   "Giup 17 trang phia khach giu cung mot nhip mo dau du noi dung ben duoi rat khac nhau",
   "Giup 17 trang phia khach co cung chieu cao phan dau trang de de so sanh bo cuc voi nhau",
   "Giup 17 trang phia khach tu dong an bot noi dung khi man hinh nho de khong bi tran",
   "Giup 17 trang phia khach dung chung mot tep CSS duy nhat va khong can tep CSS theo trang"
  ],
  "correct": [
   0
  ],
  "explanation": "Muc 3.6.3 ghi ro o cac trang con, nhom dung mot khung chung khai bao bang main.subpage: dai nen chuyen sac 235 px, duong dan phan cap, tieu de trang co gian theo be rong man hinh bang clamp(48px, 5vw, 76px), duong ke vang dong 72 x 2 px, roi moi toi noi dung. Khung nay giup 17 trang phia khach giu cung mot nhip mo dau du noi dung ben duoi rat khac nhau. Cac phuong an con lai noi ve chieu cao, an bot noi dung hay dung chung tep CSS deu khong dung voi y tai lieu."
 },
 {
  "id": "nw2-a16",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "uiux",
  "question": "Ve cac diem ngat, tai lieu cho biet kha nang thich ung duoc xu ly bang ba diem ngat, cong them mot truy van danh cho thiet lap giam chuyen dong. Truy van danh cho thiet lap giam chuyen dong nay lien quan den nguyen tac nao trong bon nguyen tac chi phoi moi quyet dinh giao dien cua do an?",
  "options": [
   "Nguyen tac chuyen dong co muc dich: hieu ung chi dung de bao trang thai va luon ton trong thiet lap giam chuyen dong cua he dieu hanh",
   "Nguyen tac hinh anh dan duong, chu giu nhip: tieu de lon dung chu co chan, phan noi dung dung chu khong chan co nho",
   "Nguyen tac moi man hinh co mot hanh dong chinh: trang chi tiet phong day toi hotspot, trang chi tiet san pham day toi nut them vao gio",
   "Nguyen tac duong vien thay cho khoi mau: phan tach cac khoi bang duong vien 1 px mau #DADAD7 va cac dai nen #EEEEEC"
  ],
  "correct": [
   0
  ],
  "explanation": "Muc 3.6.1 neu bon nguyen tac chi phoi moi quyet dinh giao dien, trong do nguyen tac chuyen dong co muc dich ghi ro hieu ung chi dung de bao trang thai (re chuot, mo popup, chuyen anh) va luon ton trong thiet lap giam chuyen dong cua he dieu hanh thong qua @media (prefers-reduced-motion: reduce). Muc 3.6.3 cung cho biet kha nang thich ung duoc xu ly bang ba diem ngat, cong them mot truy van danh cho thiet lap giam chuyen dong. Cac phuong an con lai la ba nguyen tac khac, khong lien quan den truy van giam chuyen dong."
 },
 {
  "id": "nw2-a17",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "uiux",
  "question": "Trong phan dinh huong thiet ke, nhom neu nguyen tac moi man hinh co mot hanh dong chinh: trang chi tiet phong day nguoi dung toi hotspot; trang chi tiet san pham day toi nut them vao gio; trang gio hang day toi nut thanh toan; cac hanh dong phu dung nut vien hoac lien ket co gach chan. Cach phan cap hanh dong nhu vay mang lai dieu gi cho nguoi dung?",
  "options": [
   "Giup moi man hinh co mot hanh dong chinh ro rang de nguoi dung biet nen lam gi tiep theo, con cac hanh dong phu duoc phan biet bang nut vien hoac lien ket co gach chan",
   "Giup giam so luong nut bam tren moi trang xuong con mot nut duy nhat, loai bo hoan toan cac hanh dong phu",
   "Giup moi trang co cung mot nut chinh o cung mot vi tri, tao su dong nhat ve bo cuc giua cac trang",
   "Giup nguoi dung khong the bam nham vao cac hanh dong phu vi chung duoc an di tren man hinh nho"
  ],
  "correct": [
   0
  ],
  "explanation": "Muc 3.6.1 neu nguyen tac moi man hinh co mot hanh dong chinh: trang chi tiet phong day nguoi dung toi hotspot; trang chi tiet san pham day toi nut them vao gio; trang gio hang day toi nut thanh toan. Cac hanh dong phu dung nut vien hoac lien ket co gach chan. Cach phan cap nay giup moi man hinh co mot hanh dong chinh ro rang de nguoi dung biet nen lam gi tiep theo, dong thoi van phan biet duoc hanh dong phu. Cac phuong an con lai noi ve loai bo hanh dong phu, cung vi tri nut hay an di tren man hinh nho deu khong dung."
 },
 {
  "id": "nw2-a18",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "uiux",
  "question": "Ve cac trang con nhu San pham, Do cu, Gio hang, tai lieu cho biet chung dung them mot lop nen chuyen sac #F2EEE6 den #FAF9F6 den #ECE8DF o 235 px dau trang, kem duong ke vang dong duoi tieu de. Muc dich cua chi tiet nay la gi trong he thong giao dien?",
  "options": [
   "Phan biet trang con voi trang chu ma khong can them mau moi vao he thong mau",
   "Tao diem nhan cho moi trang con bang cach them mot mau moi chua co trong bang mau cua website",
   "Dam bao moi trang con deu co cung chieu cao phan dau trang de de so sanh bo cuc",
   "Giam do tuong phan cua tieu de trang de tieu de khong bi choi voi nguoi doc"
  ],
  "correct": [
   0
  ],
  "explanation": "Muc 3.6.2 ghi ro cac trang con nhu San pham, Do cu, Gio hang dung them mot lop nen chuyen sac #F2EEE6 den #FAF9F6 den #ECE8DF o 235 px dau trang, kem duong ke vang dong duoi tieu de; day la chi tiet phan biet trang con voi trang chu ma khong can them mau moi. Phuong an noi them mau moi la sai vi muc tieu la khong them mau; hai phuong an con lai khong dung voi y tai lieu."
 },
 {
  "id": "nw2-a19",
  "chapter": 12,
  "difficulty": 2,
  "type": "single",
  "topic": "uiux",
  "question": "Trong phan doi chieu mockup Stitch voi giao dien da hien thuc, tai lieu cho biet mockup gia dinh moi phong co mot anh, nhung du lieu co phong nhieu goc anh voi bo hotspot rieng cho tung goc. Nhom da xu ly van de nay tren giao dien nhu the nao?",
  "options": [
   "Them dai anh nho va doi bo hotspot theo anh dang xem",
   "Gop tat ca hotspot cua cac goc anh vao mot anh duy nhat de chi can mot bo hotspot",
   "Chi hien thi anh dau tien cua phong va an cac goc anh con lai de giao dien don gian hon",
   "Tach moi goc anh thanh mot trang chi tiet phong rieng voi duong dan khac nhau"
  ],
  "correct": [
   0
  ],
  "explanation": "Muc 3.6.5 ghi ro mot trong ba thay doi lon nhat so voi mockup: mockup gia dinh moi phong co mot anh, nhung du lieu co phong nhieu goc anh voi bo hotspot rieng cho tung goc, nen giao dien phai them dai anh nho va doi bo hotspot theo anh dang xem. Cac phuong an gop hotspot, an goc anh hay tach trang rieng deu khong dung voi cach nhom da lam theo tai lieu."
 },
 {
  "id": "nw2-a20",
  "chapter": 12,
  "difficulty": 2,
  "type": "multiple",
  "topic": "uiux",
  "question": "Nhin lai toan bo qua trinh tu mockup den giao dien that, tai lieu cho biet phan duoc giu on dinh nhat la he thong mau, thang chu va nhip khoang cach; phan thay doi nhieu nhat la cac trang thai gan voi du lieu nhu het hang, nhieu goc anh, dieu kien loc va cac buoc thanh toan. Nhung nhan dinh nao sau day dung voi noi dung tai lieu ve qua trinh nay?",
  "options": [
   "Mockup du de thong nhat huong nhin va bo cuc, con cac trang thai chi tiet duoc bo sung khi doi chieu voi du lieu that va trong cac dot kiem thu",
   "Toan bo 32 tep CSS cua website deu dung chung mot bo bien va mot khung luoi, nho vay du 25 trang duoc lam boi nam thanh vien, giao dien van giu duoc mot giong dieu thong nhat",
   "Ba thay doi lon nhat so voi mockup deu xuat phat tu tham my chu khong tu du lieu that cua website",
   "Phan thay doi nhieu nhat tu mockup den san pham la he thong mau, thang chu va nhip khoang cach"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Muc 3.6.5 ket luan: phan duoc giu on dinh nhat tu mockup den san pham la he thong mau, thang chu va nhip khoang cach; phan thay doi nhieu nhat la cac trang thai gan voi du lieu nhu het hang, nhieu goc anh, dieu kien loc va cac buoc thanh toan. Tai lieu cung ghi ro mockup du de thong nhat huong nhin va bo cuc, con cac trang thai chi tiet duoc bo sung khi doi chieu voi du lieu that va trong cac dot kiem thu; toan bo 32 tep CSS deu dung chung mot bo bien va mot khung luoi, nho vay du 25 trang duoc lam boi nam thanh vien, giao dien van giu duoc mot giong dieu thong nhat. Hai phuong an con lai sai vi ba thay doi lon nhat xuat phat tu du lieu chu khong tu tham my, va phan thay doi nhieu nhat khong phai he thong mau, thang chu hay nhip khoang cach."
 }
];
if (typeof module !== "undefined" && module.exports) { module.exports = QUESTIONS_NW2; }
