
document.addEventListener('DOMContentLoaded', function() {

    if (!document.querySelector('.mobile-menu-btn')) {
      const mobileMenuBtn = document.createElement('button');
      mobileMenuBtn.className = 'mobile-menu-btn';
      mobileMenuBtn.innerHTML = '<span></span><span></span><span></span>';

      const routeDiv = document.querySelector('.route');
      if (routeDiv) {
        routeDiv.parentNode.insertBefore(mobileMenuBtn, routeDiv.nextSibling);
      }
      
      mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        
        const sidebar = document.querySelector('.left');
        sidebar.classList.toggle('active');
      });
    }
  });