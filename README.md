# Claude for Marketing — Demo Deck

สไลด์นำเสนอสรุปการทดลองใช้ Claude Chat, Claude Cowork และ Claude Code ร่วมกันสำหรับงานวางแผน
แคมเปญการตลาด ตั้งแต่ระดมไอเดียจนถึงเว็บนำเสนอผลลัพธ์

## เปิดดู / พรีเซนต์

ไม่ต้องติดตั้งอะไร เปิด `index.html` ด้วยเบราว์เซอร์ได้ทันที (ใช้ HTML/CSS/JS ล้วน ไม่มี build step)

```bash
open index.html      # macOS
xdg-open index.html  # Linux
```

หรือรัน local server เฉย ๆ ก็ได้ (จำเป็นถ้าเปิดผ่านบางเบราว์เซอร์ที่บล็อก `file://`):

```bash
python3 -m http.server 8000
# แล้วเปิด http://localhost:8000
```

**การควบคุมสไลด์:** ปุ่ม ‹ › ที่แถบล่าง, ลูกศรซ้าย/ขวาบนคีย์บอร์ด, Space เพื่อไปหน้าถัดไป,
Home/End เพื่อไปสไลด์แรก/สุดท้าย, ปัดซ้าย-ขวาบนมือถือ/แท็บเล็ต

## โครงสร้างไฟล์

```
claude-marketing-demo-slides/
├── index.html            # เนื้อหาสไลด์ทั้ง 6 หน้า
├── assets/
│   ├── css/style.css     # ดีไซน์ทั้งหมดของ deck
│   ├── js/deck.js        # navigation / keyboard / progress bar
│   └── img/               # ใส่รูป QR code จริงที่นี่ (ดู assets/img/README.md)
└── README.md
```

## ใส่รูป QR Code

ดูรายละเอียดไฟล์ที่ต้องเตรียมใน [`assets/img/README.md`](assets/img/README.md) แล้วแก้สไลด์ที่ 4
ใน `index.html` เปลี่ยนจาก `<span class="qr-placeholder">...</span>` เป็น
`<img src="assets/img/qr-sheet.png" alt="QR Google Sheet" />` (ทำแบบเดียวกันกับอีก 3 ช่อง)

## เนื้อหาสไลด์

1. Cover
2. ใช้ Claude ทำอะไรบ้าง (Chat → Cowork → Code)
3. ผลลัพธ์ที่ได้จากแต่ละเครื่องมือ
4. QR Code — Sheet / เว็บ Visual / เว็บ Dashboard / Data Chart Dashboard (สำหรับทีมบริหาร)
5. ต่อยอดได้อย่างไรบ้าง
6. ค่าใช้จ่ายโดยประมาณ (Pro / Max / Team / Enterprise)
