document.addEventListener("DOMContentLoaded", function () {
  const marqueeText = document.getElementById("marquee-text");
  let position = window.innerWidth;

  function moveText() {
      position -= 2.5; // Sebesség állítható
      if (position < -marqueeText.offsetWidth) {
          position = window.innerWidth;
      }
      marqueeText.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(moveText);
  }

  moveText();
});