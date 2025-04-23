// server/app.js
const express = require("express");
const path = require("path");
const app = express();

// 정적 파일 경로 명시적 설정
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/views/index.html"));
});

app.listen(3000, () => {
  console.log("http://localhost:3000 에서 실행 중");
});
