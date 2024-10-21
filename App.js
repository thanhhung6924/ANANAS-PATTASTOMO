var imgTransition1 = document.querySelector(".transition1");
var imgTransition2 = document.querySelector(".transition2");
var shadow = document.querySelector(".shadow");

window.addEventListener("scroll", function (e) {
  let value = window.scrollY;

  // Cập nhật vị trí của imgTransition2 dựa trên giá trị cuộn
  imgTransition2.style.transform = `translateY(${value * -0.4}px)`;
  console.log(imgTransition2.style.transform);

  // Kiểm tra nếu giá trị translateY lớn hơn -133px
  if (value * -0.3 < -130) {
    imgTransition2.style.transform = "translateY(-133px)";
  }
  console.log(imgTransition2.style.transform);
});
