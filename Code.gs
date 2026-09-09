/**
 * ✏️ วาดบาร์โมเดล — Bar Model Drawing Tool
 * Google Apps Script Web App (สำหรับครู)
 * ---------------------------------------------------
 * วิธี Deploy:
 *   1) ไปที่ https://script.google.com  > New project
 *   2) สร้างไฟล์ให้ครบ 2 ไฟล์ (ชื่อและชนิดต้องตรงเป๊ะ):
 *        - Code.gs         (โค้ดนี้)
 *        - Index.html      (ไฟล์ > New > HTML  แล้ววางเนื้อหาจาก Index.html)
 *   3) Deploy (มุมขวาบน) > New deployment
 *   4) เลือกชนิด (เฟือง) > Web app
 *   5) Execute as: Me
 *   6) Who has access: Anyone   (ให้นักเรียน/เพื่อนครูเปิดได้โดยไม่ต้องล็อกอิน)
 *   7) กด Deploy แล้วคัดลอกลิงก์ที่ลงท้ายด้วย /exec ไปใช้งาน/แชร์
 *
 * แก้ไขหน้าเว็บภายหลัง: แก้ในไฟล์ Index.html แล้ว
 *   Deploy > Manage deployments > (ดินสอ) แก้ > Version: New version > Deploy
 *   (ลิงก์เดิม /exec ใช้ได้ต่อ ไม่ต้องแชร์ลิงก์ใหม่)
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('วาดบาร์โมเดล')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
