# ✏️ วาดบาร์โมเดล (Bar Model Drawing Tool)

Google Apps Script Web App สำหรับครู ให้นักเรียนวาดบาร์โมเดล (bar model) แบบลากวาดบนหน้าจอ พร้อมเครื่องมือใส่ตัวเลข/คำไทย ปีกกา วงเล็บ เส้นแบ่ง เครื่องคิดเลข และตัดบาร์

## ไฟล์ในโปรเจกต์

- `Code.gs` — เซิร์ฟเวอร์ฝั่ง Apps Script (`doGet`)
- `Index.html` — หน้าเว็บแอปทั้งหมด (HTML/CSS/JS)
- `appsscript.json` — ไฟล์ manifest ของโปรเจกต์

## วิธี Deploy

1. ไปที่ https://script.google.com > New project
2. สร้างไฟล์ให้ครบ 2 ไฟล์ (ชื่อและชนิดต้องตรงเป๊ะ):
   - `Code.gs` (คัดลอกโค้ดจากไฟล์นี้)
   - `Index.html` (ไฟล์ > New > HTML แล้ววางเนื้อหาจาก `Index.html`)
3. Deploy (มุมขวาบน) > New deployment
4. เลือกชนิด (เฟือง) > Web app
5. Execute as: Me
6. Who has access: Anyone (ให้นักเรียน/เพื่อนครูเปิดได้โดยไม่ต้องล็อกอิน)
7. กด Deploy แล้วคัดลอกลิงก์ที่ลงท้ายด้วย `/exec` ไปใช้งาน/แชร์

แก้ไขหน้าเว็บภายหลัง: แก้ใน `Index.html` แล้ว Deploy > Manage deployments > (ดินสอ) แก้ > Version: New version > Deploy (ลิงก์เดิม `/exec` ใช้ได้ต่อ ไม่ต้องแชร์ลิงก์ใหม่)

## Deploy ด้วย clasp (ทางเลือก)

```bash
npm install -g @google/clasp
clasp login
clasp create --type webapp --title "วาดบาร์โมเดล"
clasp push
clasp deploy
```
