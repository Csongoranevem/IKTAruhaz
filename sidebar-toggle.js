document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.sidebar-hamburger');
    const sidebar = document.querySelector('.left');
    
    hamburger.addEventListener('click', function() {
      sidebar.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  });   