document.addEventListener("DOMContentLoaded", function () {
    // ✅ [1] 메뉴 hover 시 서브메뉴 보여주기
    const menuGroups = document.querySelectorAll(".gsEBPf");

    menuGroups.forEach(group => {
      const tab = group.querySelector('[role="tabpanel"]');
      const submenu = group.querySelector(".hFxRwf1234");

      if (tab && submenu) {
        group.addEventListener("mouseenter", function () {
          submenu.style.display = "block";
        });

        group.addEventListener("mouseleave", function () {
          submenu.style.display = "none";
        });
      }
    });

    // ✅ [2] 수직 슬라이드 자동 전환 + 무한 루프
    const track = document.querySelector(".slick_track");
    const slides = document.querySelectorAll(".slick_slide");
    const slideHeight = 36; // 슬라이드 하나 높이(px)
    let currentIndex = 0;
    const totalSlides = slides.length;

    // 첫 슬라이드를 복제해서 맨 뒤에 붙이기 (무한 루프용)
    if (slides.length > 0) {
      const firstClone = slides[0].cloneNode(true);
      track.appendChild(firstClone);
    }

    const moveSlide = () => {
      currentIndex++;
      track.style.transition = ""; // CSS에 따라 전환시간 조절
      track.style.transform = `translateY(-${currentIndex * slideHeight}px)`;

      // 마지막(클론) 도달 시 → 처음으로 리셋 (자연스럽게)
      if (currentIndex === totalSlides) {
        setTimeout(() => {
          track.style.transition = "none"; // 순간 이동
          track.style.transform = `translateY(0px)`;
          currentIndex = 0;
        }, 500); // ← 이건 CSS의 transition 시간과 맞춰야 함 (0.5초면 500ms)
      }
    };

    setInterval(moveSlide, 2000); // 2초마다 슬라이드 전환
  });

document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".slick_tracksss");
  const slides = document.querySelectorAll(".slick_slide");
  const prevBtn = document.querySelector(".slick_prevs");
  const nextBtn = document.querySelector(".slick_nexts");

  const slideWidth = 880; // 슬라이드 하나 폭
  const maxIndex = slides.length - 1; // 마지막 슬라이드 인덱스
  let currentIndex = 0;

  function updateSlide() {
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    if (currentIndex < maxIndex) { // 마지막에서 더 이상 증가하지 않음
      currentIndex++;
      updateSlide();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) { // 처음에서 더 이상 감소하지 않음
      currentIndex--;
      updateSlide();
    }
  });

  // 초기 위치
  updateSlide();
});







