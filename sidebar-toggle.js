document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const sidebar = document.querySelector('.left');
  const overlay = document.querySelector('.overlay');
  
  function toggleMenu() {
      hamburgerMenu.classList.toggle('active');
      sidebar.classList.toggle('active');
      overlay.classList.toggle('active');
      
      const expanded = hamburgerMenu.classList.contains('active') ? 'true' : 'false';
      hamburgerMenu.setAttribute('aria-expanded', expanded);
  }
  

  hamburgerMenu.addEventListener('click', toggleMenu);
  

  overlay.addEventListener('click', function() {
      toggleMenu();
  });
  

  const menuItems = document.querySelectorAll('.left a');
  menuItems.forEach(item => {
      item.addEventListener('click', function() {
          toggleMenu();
      });
  });
  

  document.addEventListener('click', function(event) {
      const isClickInside = sidebar.contains(event.target) || 
                            hamburgerMenu.contains(event.target);
      
      if (!isClickInside && sidebar.classList.contains('active')) {
          toggleMenu();
      }
  });
});