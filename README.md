# Smart Farm — GitHub Pages Ready

เว็บไซต์ Smart Farm ธีมดำ ใช้ Next.js และ GitHub Actions เพื่อเผยแพร่แบบ Static

## วิธีใช้งาน
1. สร้าง **Public repository** ชื่อ `smart-farm` บน GitHub (branch `main`).
2. อัปโหลด **ไฟล์และโฟลเดอร์ทั้งหมดภายในโปรเจกต์นี้** ไปยัง root ของ repository (ไม่ใช่อัปโหลด ZIP ทั้งก้อน).
3. ไปที่ **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. เปิดแท็บ **Actions** แล้วรอ workflow `Deploy Smart Farm to GitHub Pages` สำเร็จ (หรือกด Run workflow).
5. เปิด `https://USERNAME.github.io/smart-farm/` โดยแทน USERNAME ด้วยชื่อผู้ใช้ GitHub.

ชื่อ repository สามารถเปลี่ยนได้ ระบบจะคำนวณ basePath จากชื่อ repository ใน GitHub Actions อัตโนมัติ

## รันบนเครื่อง
ติดตั้ง Node.js 22 แล้วใช้ `npm ci --legacy-peer-deps` และ `npm run dev` จากนั้นเปิด http://localhost:3000

> หมายเหตุ: เป็นหน้าเว็บ static; ข้อมูลตัวอย่างและปุ่ม UI ไม่ได้เชื่อมต่ออุปกรณ์ ESP32 หรือฐานข้อมูลจริง
