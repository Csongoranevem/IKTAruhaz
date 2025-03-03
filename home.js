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
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.js-animate-element, .fastest, .shipping');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(element => observer.observe(element));
});
