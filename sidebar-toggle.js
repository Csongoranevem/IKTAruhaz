document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.createElement('button');
  mobileMenuBtn.className = 'mobile-menu-btn';
  mobileMenuBtn.innerHTML = '<span></span><span></span><span></span>';
  
  const routeDiv = document.querySelector('.route');
  if (routeDiv) {
    routeDiv.parentNode.insertBefore(mobileMenuBtn, routeDiv.nextSibling);
  }

  const overlay = document.createElement('div');
  overlay.className = 'menu-overlay';
  document.body.appendChild(overlay);
  
  mobileMenuBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    const sidebar = document.querySelector('.left');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });
  

  overlay.addEventListener('click', function() {
    mobileMenuBtn.classList.remove('active');
    const sidebar = document.querySelector('.left');
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('menu-open');
  });
  
  const updateMobileMenuVisibility = function() {
    if (window.innerWidth <= 870) {
      mobileMenuBtn.style.display = 'block';
    } else {
      mobileMenuBtn.style.display = 'none';
      const sidebar = document.querySelector('.left');
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  };
  
  updateMobileMenuVisibility();
  
  window.addEventListener('resize', function() {
    updateMobileMenuVisibility();
  });
});