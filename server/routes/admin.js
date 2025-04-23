// server/routes/admin.js
const express = require("express");
const router = express.Router();

// 관리자 로그인 처리
router.post("/login", (req, res) => {
  const { id, password } = req.body;
  if (id === "admin" && password === "secure123") {
    req.session.isAdmin = true;
    res.redirect("/admin/dashboard");
  } else {
    res.status(401).send("로그인 실패");
  }
});

// 대시보드 접근 제어 미들웨어
function checkAdminAuth(req, res, next) {
  if (req.session.isAdmin) return next();
  res.redirect("/admin/login");
}

router.get("/dashboard", checkAdminAuth, (req, res) => {
  res.sendFile("admin/dashboard.html", { root: "public/views" });
});
