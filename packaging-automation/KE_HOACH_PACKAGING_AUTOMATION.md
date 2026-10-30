# KẾ HOẠCH DỰ ÁN – PACKAGING AUTOMATION (TFC & DFC)

- **Người phụ trách:** Trần Đức Huy – Kỹ thuật / Cải tiến MMTB
- **Yêu cầu từ:** anh David Ho (Sales Director – Trangs Group), email *"Packaging automation"* 28–29/10/2026
- **CC theo dõi:** anh Long (DFC), anh Phú, anh Mạnh Thắng, anh Văn Quang, chị Susan Ho, chị Hoa Phan
- **Ngày lập:** 30/10/2026

> **Anh David cần gì:** **phương án đầu tư (business case)** cho từng máy, không chỉ thông tin kỹ thuật.
> Vì vậy mỗi phương án gửi đi đều phải có: giải pháp + layout/3D + báo giá NCC + số công nhân giảm + thời gian hoàn vốn.

> ⚠️ **Dữ liệu còn thiếu:** chưa có dự toán và số công nhân hiện tại của từng khâu (Trợ lý 1 chưa gom dữ liệu).
> Điểm ưu tiên bên dưới dùng **công sức giả định**, cần cập nhật khi NCC báo giá.

---

## 0. Cam kết đã gửi anh David (mốc cứng – không được trễ)

| # | Hạng mục | Xưởng | Đã cam kết gửi | Ghi chú |
|---|---|---|---|---|
| 1 | Máy dựng thùng (central line / 1 máy chia line nhỏ) | DFC | **07/11/2026** (thứ Bảy) → **gửi sớm thứ Sáu 06/11** | NCC chào giá chính thức ~1 tuần sau khi chốt PA (~14/11) |
| 2 | Máy vô hộp tự động | TFC/DFC | **10/11/2026** (thứ Ba) | NCC đang hoàn thiện 3D; chào giá ~17/11 |
| 3 | Máy dán băng keo (dán đáy gắn với máy dựng thùng) | TFC/DFC | **Sau 15/11/2026** → đề xuất chốt **18/11** | Phụ thuộc PA máy dựng thùng |
| 4 | Máy xếp pallet tự động | TFC/DFC | **30/11/2026** (thứ Hai) | Mới bắt đầu khảo sát NCC |
| 5 | Line vô hộp BULK PACK / hộp lớn (đề xuất mới) | TFC & DFC | **10/12/2026** (thứ Năm) | Phối hợp anh Thảo (Bao bì), xưởng, NCC |

### Hạn chốt nội bộ (có dự phòng)
Công thức: *Hạn chốt = Bắt đầu (30/10) + (Hạn cam kết − Bắt đầu) × 1,3 + ngày chờ NCC.*
Đây là hạn chốt **business case hoàn chỉnh kèm báo giá chính thức** – không thay thế mốc cam kết ở trên.

| Hạng mục | Số ngày | Chờ NCC (ngày) | **Hạn chốt** |
|---|---|---|---|
| Máy dựng thùng | 8 | 7 (báo giá) | **16/11/2026** |
| Máy vô hộp | 11 | 7 (báo giá) | **20/11/2026** |
| Dán băng keo | 16 | 5 | **25/11/2026** |
| Xếp pallet | 31 | 7 | **16/12/2026** |
| Vô hộp BULK PACK | 41 | 10 | **01/01/2027** |

---

## 0A. Cập nhật 30/10 – Trao đổi với NCC Hưng Phát (anh Phường)

Hưng Phát đề xuất làm **line đóng gói cuối line liên hoàn 5 module**, thay vì từng máy rời:

```
[1] Máy vô hộp ──┐
                 ├─► [3] Casepacker (hộp vô thùng – gantry X/Y) ─► [4] Case top sealer ─► [5] Palletizer
[2] Case erector ┘        (dựng thùng + dán đáy)                       (dán nắp thùng)      (cobot TQ / robot công nghiệp)
```

| Module | Công nghệ Hưng Phát đề xuất | Gắn với dự án | Ghi chú kỹ thuật |
|---|---|---|---|
| 1. Máy vô hộp | – | DA2 | Tốc độ của module này quyết định tốc độ của cả line |
| 2. Case erector / case former | Bung thùng + dán đáy | DA1 | Phải xử lý được nhiều size thùng |
| 3. Casepacker | **Gantry X/Y** | **Hạng mục mới** | Hệ X/Y dùng cho **hộp vô thùng**, không dùng cho palletizer (anh Phường đã chỉnh lại) |
| 4. Case top sealer | Dán băng keo nắp | DA1 (dán keo) | ⚠️ Thùng tráng chống thấm bị bung keo trong kho lạnh → cần test keo trước khi chốt |
| 5. Palletizer | **Cobot TQ** (giá rẻ) hoặc **robot công nghiệp** (đắt, báo giá USD) | DA3 | Chọn theo trọng lượng thùng, quy cách xếp và tốc độ |

**Thay đổi trong kế hoạch:**
- Thêm **hạng mục 3 – Casepacker (gantry X/Y)**. Hạng mục này nằm giữa máy vô hộp và máy dựng thùng, chưa có trong email gửi anh David.
- Đề nghị Hưng Phát báo giá **2 cách**:
  - **(A) Báo giá từng module:** đầu tư dần theo giai đoạn.
  - **(B) Báo giá trọn line tích hợp:** 1 NCC chịu trách nhiệm cả line.
- Palletizer báo giá **2 phương án**:
  - **Cobot TQ:** rẻ, cần kiểm tra tải trọng của cobot đã tính cả tay gắp.
  - **Robot công nghiệp:** nhanh và bền hơn, nhưng đắt hơn.
- Nếu chọn **case top sealer tự động (4)**, giải pháp "công nhân dán hoàn thiện mặt trên" sẽ không còn dùng nữa. Vì vậy **test keo/băng keo trên thùng tráng chống thấm trong kho lạnh** trở thành điều kiện bắt buộc trước khi chốt line liên hoàn.

**Dữ liệu Hưng Phát cần (gửi trước 04/11):**

| # | Thông số | Ai cung cấp |
|---|---|---|
| 1 | Danh sách SKU đi qua line (TFC & DFC) | Huy + Xưởng |
| 2 | Kích thước, trọng lượng hộp; số hộp/thùng; kiểu xếp hộp trong thùng | Xưởng + Anh Thảo |
| 3 | Kích thước thùng (tất cả size), **trọng lượng thùng đầy (kg)**, loại giấy (có tráng chống thấm) | Anh Thảo – Bao bì |
| 4 | **Quy cách xếp pallet:** loại pallet, số thùng/lớp, số lớp, chiều cao tối đa, kiểu xếp theo thị trường | Kho / Sales |
| 5 | **Tốc độ yêu cầu:** hộp/phút, thùng/phút ở giờ cao điểm; số ca/ngày | Xưởng |
| 6 | Mặt bằng cuối line: kích thước, vị trí cột, lối xe nâng, nhiệt độ phòng đóng gói | Huy |

---

## 1. Bảng ưu tiên

Điểm ưu tiên = Tác động (1–5) ÷ Công sức (1–5). Công sức hiện đang **giả định** theo mức đầu tư thường gặp.

| Hạng | Dự án | Tác động | Công sức (giả định) | Điểm | Lý do xếp hạng |
|---|---|---|---|---|---|
| 1 | **DA1 – Máy dựng thùng + dán đáy (gộp máy dán keo)** | 4 | 4 (200–300tr) | 1,00 | Mốc gần nhất (06/11); đã khảo sát xong; giải quyết luôn vấn đề băng keo bung trên thùng tráng chống thấm |
| 2 | **DA2 – Máy vô hộp tự động** | 5 | 5 (≥300tr) | 1,00 | Giảm CN nhiều nhất ở khâu đóng gói; NCC đã vào giai đoạn 3D → **ưu tiên đẩy lên** dù công sức cao |
| 3 | **DA3 – Máy xếp pallet tự động** | 4 | 5 (≥300tr) | 0,80 | Anh David hỏi trực tiếp; cần bắt đầu khảo sát ngay để kịp 30/11 |
| 4 | DA4 – Line vô hộp BULK PACK | 4 | 5 (≥300tr) | 0,80 | Đề xuất mới, chưa có dữ liệu; mở sau khi DA1 đã gửi PA |
| – | Máy dán băng keo (độc lập) | 3 | 2 | 1,50 | **Không chạy riêng** – gộp vào DA1 vì phụ thuộc PA dựng thùng |

**Nguyên tắc:** chốt DA1 & DA2 (đã ≥60% – xong khảo sát, đang 3D) trước khi mở DA4.

---

## 2. Dự án chạy tháng 11 & hàng chờ

**Đang chạy (3):**
1. **DA1 – Dựng thùng + dán đáy (DFC)**
   - *Kết quả đo được:* Bỏ khâu dựng thùng + dán đáy thủ công tại DFC, giảm ___ CN/ca, hoàn vốn ≤ ___ tháng.
   - *Tiêu chí hoàn thành:* Anh David nhận PA (layout + phương án central line/chia line + báo giá chính thức + ROI) và đồng ý trình duyệt.
2. **DA2 – Vô hộp tự động**
   - *Kết quả đo được:* Tự động hóa khâu vô hộp ___ SKU chủ lực (Tempura, tôm xẻ bướm…), giảm ___ CN/line.
   - *Tiêu chí hoàn thành:* 3D đã duyệt nội bộ + báo giá chính thức + ROI gửi anh David.
3. **DA3 – Xếp pallet tự động (giai đoạn khảo sát)**
   - *Kết quả đo được:* Có ≥2 NCC khảo sát và chào giải pháp, chọn 1 phương án cho 30/11.
   - *Tiêu chí hoàn thành:* PA gồm vị trí lắp, sơ đồ pallet theo kích thước thùng, năng suất thùng/giờ, báo giá sơ bộ, ROI.

**Hàng chờ:**
4. **DA4 – Vô hộp BULK PACK** – khởi động **16/11/2026** (sau khi DA1 chốt). Riêng việc xin danh sách SKU BULK PACK từ anh Thảo làm ngay tuần này (5 phút gửi tin nhắn).

---

## 3. Bảng nhiệm vụ

> Bước đầu tiên ghi ⏱ = việc làm được trong 5–10 phút.

| Dự án | Nhiệm vụ | Loại việc | Phụ thuộc | Người làm | Hạn |
|---|---|---|---|---|---|
| DA1 | ⏱ Gọi/nhắn NCC dựng thùng xin bản layout + 2 phương án (central line / 1 máy chia line) | Mua vật tư/báo giá | – | Huy | 02/11 |
| DA1 | Lấy số liệu hiện trạng DFC: CN dựng thùng & dán đáy/ca, số ca, sản lượng thùng/ngày, các size thùng | Thiết kế | – | Huy + Xưởng DFC | 03/11 |
| DA1 | Chọn phương án (central line hay chia line) theo mặt bằng & lưu thông | Thiết kế | Layout NCC | Huy | 04/11 |
| DA1 | Tích hợp module dán băng keo **mặt đáy** vào máy dựng thùng; xác định quy trình CN dán hoàn thiện mặt trên (chồng mép keo) | Thiết kế | PA dựng thùng | Huy + NCC | 05/11 |
| DA1 | Lập business case (đầu tư, CN giảm, hoàn vốn) & gửi anh David | Trình duyệt | 3 việc trên | Huy | **06/11** |
| DA1 | Nhận báo giá chính thức NCC, cập nhật ROI | Mua vật tư/báo giá | PA chốt | NCC → Huy | 14/11 |
| DA1 | Test băng keo/keo nóng (đáy + nắp – cho case top sealer) trên thùng tráng chống thấm, lưu kho lạnh 48–72h, kiểm tra bung keo | Chạy thử | Mẫu băng keo NCC | Huy + Anh Thảo + QA | 13/11 |
| DA1 | Chốt giải pháp dán keo, gửi cập nhật anh David | Trình duyệt | Test lưu kho lạnh | Huy | 18/11 |
| DA2 | ⏱ Nhắn NCC hỏi ngày giao bản 3D hoàn chỉnh | Thiết kế | – | Huy | 02/11 |
| DA2 | Xác nhận SKU, quy cách khay/hộp, năng suất line mục tiêu (hộp/phút) | Thiết kế | – | Huy + Xưởng TFC/DFC | 04/11 |
| DA2 | Review 3D với xưởng (vận hành, vệ sinh, an toàn thực phẩm, đổi size) | Thiết kế | 3D NCC | Huy + Xưởng | 07/11 |
| DA2 | Lập business case & gửi anh David | Trình duyệt | Review 3D | Huy | **10/11** |
| DA2 | Nhận báo giá chính thức, cập nhật ROI | Mua vật tư/báo giá | PA chốt | NCC → Huy | 17/11 |
| DA3 | ⏱ Lập danh sách 3 NCC robot/máy xếp pallet và gửi email mời khảo sát | Mua vật tư/báo giá | – | Huy | 03/11 |
| DA3 | Đo hiện trạng: điểm cuối line, kích thước thùng, kiểu xếp pallet theo khách hàng, chiều cao pallet, CN xếp/ca | Thiết kế | – | Huy + Xưởng | 06/11 |
| DA3 | NCC khảo sát thực tế TFC & DFC | Mua vật tư/báo giá | Danh sách NCC | NCC | 13/11 |
| DA3 | Nhận đề xuất + giá sơ bộ, so sánh NCC | Mua vật tư/báo giá | Khảo sát | Huy | 24/11 |
| DA3 | Lập business case & gửi anh David | Trình duyệt | So sánh NCC | Huy | **30/11** |
| DA4 | ⏱ Nhắn anh Thảo xin danh sách SKU/quy cách hộp BULK PACK | Thiết kế | – | Huy | 03/11 |
| DA4 | Khảo sát khâu vô hộp BULK PACK tại TFC & DFC (CN, năng suất, định lượng, cân) | Thiết kế | Danh sách SKU | Huy + Xưởng | 20/11 |
| DA4 | Làm việc với NCC (gửi clip tham khảo, yêu cầu PA) | Mua vật tư/báo giá | Khảo sát | Huy + NCC | 27/11 |
| DA4 | Tổng hợp phương án + business case gửi anh David | Trình duyệt | PA NCC | Huy | **10/12** |
| DA3 | ⏱ Gửi Hưng Phát (anh Phường) bộ dữ liệu: SKU, kích thước/trọng lượng thùng, quy cách xếp pallet, tốc độ, mặt bằng | Mua vật tư/báo giá | Số liệu xưởng + Bao bì | Huy | 04/11 |
| DA2 | Casepacker gantry X/Y: Hưng Phát đưa vào layout tích hợp vô hộp → vô thùng | Thiết kế | Bộ dữ liệu | Hưng Phát + Huy | 13/11 |
| DA3 | Hưng Phát báo giá palletizer 2 phương án: cobot TQ / robot công nghiệp | Mua vật tư/báo giá | Bộ dữ liệu | Hưng Phát | 13/11 |
| Chung | Hưng Phát báo giá 2 cách: (A) từng module, (B) trọn line tích hợp 5 module | Mua vật tư/báo giá | Layout tích hợp | Hưng Phát | 17/11 |
| Chung | Họp duyệt với anh Long: gom PA DA1 + DA2 (bảng dự toán + lợi ích) | Trình duyệt | DA1, DA2 gửi xong | Huy + anh Long | 19/11 |

---

## 4. Kế hoạch tuần 02/11 – 06/11/2026

**3 kết quả quan trọng nhất:**
1. Gửi anh David business case **máy dựng thùng + dán đáy (DA1)** trước 17h thứ Sáu 06/11.
2. Có bản **3D máy vô hộp (DA2)** và đã review với xưởng.
3. Đã gửi email mời **≥3 NCC xếp pallet (DA3)** và có lịch khảo sát.

| Ngày | Sáng – 90' làm sâu | Chiều – xưởng / phát sinh |
|---|---|---|
| T2 02/11 | Nhắn NCC dựng thùng & vô hộp (⏱); dựng khung file business case chung | Xưởng DFC: đếm CN dựng thùng/dán đáy, sản lượng thùng |
| T3 03/11 | Phân tích mặt bằng DFC cho 2 phương án dựng thùng | Gửi mời NCC xếp pallet; nhắn anh Thảo về BULK PACK |
| T4 04/11 | Chốt phương án dựng thùng; xác nhận SKU/năng suất cho máy vô hộp | Làm việc NCC về module dán đáy |
| T5 05/11 | Hoàn thiện business case DA1 (ROI, hoàn vốn) | Đo hiện trạng khâu xếp pallet TFC |
| T6 06/11 | Rà soát & **gửi DA1 cho anh David** | Đo hiện trạng xếp pallet DFC; chuẩn bị review 3D (07/11) |

---

## 5. Rủi ro trễ hạn & việc cần người khác làm

| Rủi ro | Ảnh hưởng | Cách xử lý |
|---|---|---|
| NCC trễ báo giá chính thức (>1 tuần) | Business case thiếu số đầu tư | Gửi PA với giá sơ bộ ± khoảng, ghi rõ "chờ giá chính thức ngày …" |
| Băng keo không bám thùng tráng chống thấm trong kho lạnh | Máy dán keo không dùng được | Test keo nóng (hot-melt) / băng keo chịu lạnh; đề nghị anh Thảo xem xét chừa vùng không tráng ở nắp thùng |
| Nhiều size thùng → máy dựng thùng đổi size chậm | Giảm năng suất, ROI kém | Gom size thùng theo nhóm; chọn máy đổi size nhanh; xem xét chuẩn hóa size với Bao bì |
| Máy xếp pallet: kiểu xếp khác nhau theo khách hàng/thị trường | Phức tạp chương trình robot | Lấy danh sách quy cách pallet theo thị trường (Úc, EU, UK, Mỹ…) từ Sales/Kho |
| Cobot TQ không đủ tải (thùng đầy + tay gắp) hoặc không đủ tốc độ cao điểm | Palletizer nghẽn cuối line | Gửi Hưng Phát trọng lượng thùng nặng nhất + tốc độ cao điểm; yêu cầu tính tải có dự phòng |
| Line liên hoàn 5 module: 1 module dừng thì cả line dừng | Mất sản lượng | Yêu cầu băng tải đệm (buffer) giữa các module; ưu tiên NCC có dịch vụ bảo trì tại chỗ |
| DA4 chưa có dữ liệu, mốc 10/12 dồn cùng DA3 | Quá tải cuối tháng 11 | Khởi động khảo sát từ 16/11, không để sau 30/11 |

| Việc cần người khác | Ai | Hạn |
|---|---|---|
| Layout + 2 phương án máy dựng thùng | NCC máy dựng thùng | 03/11 |
| Bản 3D hoàn chỉnh máy vô hộp | NCC máy vô hộp | 06/11 |
| Mẫu băng keo/keo cho thùng tráng chống thấm | NCC máy dán keo | 06/11 |
| Danh sách SKU + quy cách hộp BULK PACK; ý kiến chuẩn hóa size thùng | Anh Thảo – Team Bao bì | 06/11 |
| Số liệu CN/ca, sản lượng các khâu đóng gói | Xưởng sản xuất TFC & DFC | 04/11 |
| Quy cách xếp pallet theo thị trường | Sales / Kho | 10/11 |
| Lịch họp duyệt dự toán DA1 + DA2 | Anh Long | 19/11 |
| Ý kiến về clip tham khảo BULK PACK | Anh David | 06/11 |

---

## 6. Mẫu business case (dùng chung cho cả 5 hạng mục)

| Mục | Giá trị |
|---|---|
| Khâu / Xưởng | |
| CN hiện tại (người/ca × số ca) | |
| CN sau tự động hóa | |
| **CN giảm** | = hiện tại − sau |
| Chi phí 1 CN/năm (lương + BH + phụ cấp) | |
| **Tiết kiệm nhân công/năm** | = CN giảm × chi phí CN/năm |
| Lợi ích khác (năng suất, giảm lỗi, an toàn) | |
| Tổng đầu tư (máy + lắp đặt + điện khí + băng tải nối) | |
| Chi phí vận hành/năm (điện, vật tư, bảo trì) | |
| **Thời gian hoàn vốn (tháng)** | = Đầu tư ÷ (Tiết kiệm/năm − Chi phí vận hành/năm) × 12 |
| Rủi ro / điều kiện | |

---

**Bàn giao:** Trợ lý 3 theo dõi tiến độ hằng tuần theo bảng nhiệm vụ (`nhiem_vu.csv`) và soạn báo cáo gửi anh David / anh Long.
