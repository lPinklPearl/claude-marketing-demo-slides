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
├── index.html            # เนื้อหาสไลด์ทั้ง 10 หน้า
├── assets/
│   ├── css/style.css     # ดีไซน์ทั้งหมดของ deck
│   ├── js/deck.js        # navigation / keyboard / progress bar
│   └── img/
│       ├── qr-*.png          # รูป QR code จริงทั้ง 4 ไฟล์ (ดู assets/img/README.md)
│       ├── chat/              # รูปหลักฐานสไลด์ Claude Chat (3 ไฟล์ — ดู assets/img/chat/README.md)
│       ├── cowork/             # รูปหลักฐานสไลด์ Claude Cowork (1 ไฟล์)
│       ├── code-visual/        # รูปหลักฐานสไลด์ Claude Code — Web Visual Driven (1 ไฟล์)
│       └── code-datachart/     # รูปหลักฐานสไลด์ Claude Code — Data Chart Dashboard (1 ไฟล์)
└── README.md
```

## เปลี่ยนรูป QR Code / รูปหลักฐาน

รูปทุกช่องเชื่อมไว้ใน `index.html` แล้ว หากต้องอัปเดต ให้อัปโหลดไฟล์ทับชื่อเดิมตามรายการใน
[`assets/img/README.md`](assets/img/README.md) (QR) หรือ README ย่อยในแต่ละโฟลเดอร์ย่อย (`chat/`,
`cowork/`, `code-visual/`, `code-datachart/`) โดยไม่ต้องแก้ `index.html` — สไลด์รูปหลักฐานจะโชว์กรอบ
placeholder ไว้ก่อนจนกว่าจะมีไฟล์รูปจริงตามชื่อนั้นวางอยู่

## เนื้อหาสไลด์

1. Cover
2. ใช้ Claude ทำอะไรบ้าง (Chat → Cowork → Code)
3. ผลลัพธ์ที่ได้จากแต่ละเครื่องมือ
4. QR Code — Sheet / เว็บ Visual / เว็บ Dashboard / Data Chart Dashboard (สำหรับทีมบริหาร)
5. ต่อยอดได้อย่างไรบ้าง
6. ค่าใช้จ่ายโดยประมาณ (Pro / Max / Team / Enterprise)
7. หลักฐานการใช้งาน — Claude Chat (3 ภาพ)
8. หลักฐานการใช้งาน — Claude Cowork (1 ภาพ)
9. หลักฐานการใช้งาน — Claude Code, Web Visual Driven (1 ภาพ)
10. หลักฐานการใช้งาน — Claude Code, Data Chart Dashboard (1 ภาพ)
