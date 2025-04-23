// 버튼 상태 표시
document.getElementById("silverToggle").addEventListener("click", function () {
  this.classList.toggle("active");

  if (this.classList.contains("active")) {
    this.querySelector(".btn-label").textContent = "글자 크기 -";
  } else {
    this.querySelector(".btn-label").textContent = "글자 크기 +";
  }
});
