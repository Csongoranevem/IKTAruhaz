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


/*home oldal alul shipping animacio*/
(function () {

  function reveal() {
      var wrapper = document.querySelectorAll(".js-animate-wrapper");

      wrapper.forEach(function (parent, index) {
          var windowHeight = window.innerHeight;
          var elementTop = parent.getBoundingClientRect().top;
          var elementVisible = 150;

          if (elementTop < windowHeight - elementVisible) {
              var reveals = parent.querySelectorAll(".js-animate-element");

              reveals.forEach(function (ele, index) {
                  setTimeout(function () {
                      ele.classList.add("insight");
                  }, index * 500);
              });
          }
      });
  }

  window.addEventListener("scroll", reveal);
  reveal();

})(jQuery);