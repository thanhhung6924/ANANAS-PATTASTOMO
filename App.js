var imgTransition1 = document.querySelector(".transition1");
var imgTransition2 = document.querySelector(".transition2");
var shadow = document.querySelector(".shadow");

window.addEventListener("scroll", function (e) {
  let value = window.scrollY;

  // Cập nhật vị trí của imgTransition2 dựa trên giá trị cuộn
  imgTransition2.style.transform = `translateY(${value * -0.4}px)`;
  console.log(imgTransition2.style.transform);

  // Kiểm tra nếu giá trị translateY lớn hơn -133px
  if (value * -0.3 < -133) {
    imgTransition2.style.transform = "translateY(-133px)";
  }
  console.log(imgTransition2.style.transform);
});
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelectorAll(".intro__heading").forEach((element) => {
  let originalText = element.dataset.value; // Lấy văn bản gốc từ thuộc tính data-value

  element.onmouseover = function (event) {
    let iterations = 0;
    const interval = setInterval(() => {
      let newText = ""; // Chuỗi mới sau khi thay đổi

      // Tạo chuỗi ngẫu nhiên từng ký tự cho đến khi đủ độ dài
      for (let i = 0; i < originalText.length; i++) {
        if (i < Math.floor(iterations)) {
          newText += originalText[i]; // Giữ nguyên ký tự từ văn bản gốc
        } else {
          newText += letters[Math.floor(Math.random() * 26)]; // Chọn ngẫu nhiên một ký tự từ letters
        }
      }

      event.target.innerText = newText; // Gán văn bản mới vào phần tử

      if (iterations >= originalText.length) {
        clearInterval(interval); // Dừng interval khi đã hoàn thành
      }

      iterations += 1 / 3; // Tăng số lần lặp
    }, 100);
  };
});
setInterval(function () {
  $(".intro__heading").trigger("mouseover");
}, 5000);

//
gsap.registerPlugin(ScrollTrigger);
const slider = document.querySelector(".slider");
const sections = gsap.utils.toArray(".slider section");
const shoes = gsap.utils.toArray(".img__shoe");
let tl = gsap.timeline({
  defaults: {
    ease: "none",
  },
  scrollTrigger: {
    trigger: slider,
    pin: true,
    scrub: 2,
    // snap: 1 / (sections.length - 1),
    end: () => "+=" + slider.offsetWidth,
  },
});
//smooth scroll
tl.to(slider, {
  xPercent: -66,
},"<");
sections.forEach(function (stop, index) {
  tl.from(stop.querySelector(".shoe__content"), {
    yPercent: -50,
    opacity: 0,
    scrollTrigger: {
      trigger: stop.querySelector(".shoe__content"),
      start: "left center",
      end: "center center",
      containerAnimation: tl,
      scrub: true,
      //  markers:true
    },
  }).from(stop.querySelector(".imgz__shoe"), {
    xPercent: 40,
    yPercent: -80,
    ease: "elastic.out(1,1)",
    scrollTrigger: {
      trigger: stop.querySelector(".imgz__shoe"),
      scrub: 2,
      containerAnimation: tl,
    },
  },"<");
});
shoes.forEach(function (shoe, index) {
  gsap.from(shoe,{
    xPercent:shoe.dataset.distance,
    scrollTrigger: {
      scrub:2
    }
  }
  )
})
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
