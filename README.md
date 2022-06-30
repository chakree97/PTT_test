# PTT_test

PTT test

GET /seat/getseat   เช็คที่นั่งทั้งหมดที่เหลือ
GET /seat/getseatdefault   เช็คที่นั่งที่ตั้งค่าไว้ ยกตัวอย่างเช่น ตั้งไว้ 100 user จะมีที่นั่งที่จองไว้ได้แค่ 100 คน
PATCH  /seat/editseat/:count   ใช้เซ็ตที่นั่งว่าจะให้มีได้มากสุดเท่าไหร่สำหรับ admin
PATCH  /seat/setseat   ใช้เซ็ตว่า user จะได้หมายเลขที่นั่งที่เท่าไหร่

GET /user/getusercount เช็คว่าตอนนี้มี user กี่คน
GET /user/getuser  เช็คว่า user มีใครบ้างแต่จะได้ข้อมูลแค่ ชื่อและนามสกุล (ของ user เท่านั้น)
GET /user/getusersearchname/:name  ใช้สำหรับ search ชื่อ
GET /user/getusersort ใช้สำหรับ sort ข้อมูลของ user เรียงตามตัวอักษรตัวหน้า a-z
GET /user/getusersortreverse ใช้สำหรับ sort ข้อมูลของ user เรียงตามตัวอักษรตัวหลัง z-a
POST /user/register ลงทะเบียน user ใส่ชื่อ นามสกุล เบอร์โทร

GET /admin/getuser  เช็คว่า user มีใครบ้างแต่จะได้ข้อมูลแค่ ชื่อนามสกุล และ เบอร์โทร (ของ admin เท่านั้น)
GET /admin/getusersearchname/:name  ใช้สำหรับ search ชื่อ
GET /admin/getusersortname ใช้สำหรับ sort ข้อมูลของ user เรียงตามตัวอักษรตัวหน้า a-z
GET /admin/getusersortnamereverse ใช้สำหรับ sort ข้อมูลของ user เรียงตามตัวอักษรตัวหลัง z-a
GET /admin/getusersortseat ใช้สำหรับ sort ข้อมูลของ user เรียงตามหมายเลขที่นั่งจากน้อยไปมาก
GET /admin/getusersortseatreverse ใช้สำหรับ sort ข้อมูลของ user เรียงตามหมายเลขที่นั่งจากมากไปน้อย
