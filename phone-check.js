/**
 * Kiểm tra số điện thoại Việt Nam
 * Hỗ trợ: đầu số 10 chữ số (03x, 05x, 07x, 08x, 09x)
 */

const VN_PHONE_REGEX = /^(0)(3[2-9]|5[6-9]|7[06-9]|8[0-9]|9[0-9])\d{7}$/;

function kiemTraDienThoai(soDienThoai) {
  if (!soDienThoai || typeof soDienThoai !== "string") {
    return { hopLe: false, loi: "Số điện thoại không được để trống" };
  }

  const so = soDienThoai.replace(/[\s\-\.]/g, "");

  if (!/^\d+$/.test(so)) {
    return { hopLe: false, loi: "Số điện thoại chỉ được chứa chữ số" };
  }

  if (so.length !== 10) {
    return {
      hopLe: false,
      loi: `Số điện thoại phải có đúng 10 chữ số (hiện tại: ${so.length})`,
    };
  }

  if (!VN_PHONE_REGEX.test(so)) {
    return {
      hopLe: false,
      loi: "Đầu số không hợp lệ. Phải bắt đầu bằng 03x, 05x, 07x, 08x hoặc 09x",
    };
  }

  return { hopLe: true, soDienThoai: so };
}

function layNhaMang(soDienThoai) {
  const { hopLe, soDienThoai: so } = kiemTraDienThoai(soDienThoai);
  if (!hopLe) return null;

  const dauSo = so.substring(0, 3);

  const nhaMang = {
    // Viettel
    "032": "Viettel", "033": "Viettel", "034": "Viettel", "035": "Viettel",
    "036": "Viettel", "037": "Viettel", "038": "Viettel", "039": "Viettel",
    "086": "Viettel", "096": "Viettel", "097": "Viettel", "098": "Viettel",
    // Mobifone
    "070": "Mobifone", "076": "Mobifone", "077": "Mobifone", "078": "Mobifone",
    "079": "Mobifone", "089": "Mobifone", "090": "Mobifone", "093": "Mobifone",
    // Vinaphone
    "081": "Vinaphone", "082": "Vinaphone", "083": "Vinaphone", "084": "Vinaphone",
    "085": "Vinaphone", "091": "Vinaphone", "094": "Vinaphone",
    // Vietnamobile
    "056": "Vietnamobile", "058": "Vietnamobile", "092": "Vietnamobile",
    // Gmobile
    "059": "Gmobile", "099": "Gmobile",
    // Reddi
    "055": "Reddi", "088": "Reddi",
  };

  return nhaMang[dauSo] || "Không xác định";
}

// --- Ví dụ sử dụng ---
const danhSachKiemTra = [
  "0912345678",
  "0356789012",
  "0123456789",   // đầu số cũ, không hợp lệ
  "090 123 4567", // có khoảng trắng
  "abc",
  "09123456",     // thiếu số
];

console.log("=== KIỂM TRA SỐ ĐIỆN THOẠI VIỆT NAM ===\n");

for (const so of danhSachKiemTra) {
  const ketQua = kiemTraDienThoai(so);
  if (ketQua.hopLe) {
    const nhaMang = layNhaMang(so);
    console.log(`✔ "${so}" → Hợp lệ | Nhà mạng: ${nhaMang}`);
  } else {
    console.log(`✘ "${so}" → ${ketQua.loi}`);
  }
}

module.exports = { kiemTraDienThoai, layNhaMang };
