	//foMobil
	document.querySelector('.hamburger').addEventListener('click', () => {
        const h = document.getElementById('mobilMenu');
        const hamburger = document.querySelector('.hamburger');
        const mobilMenu = document.querySelector('#mobilMenu');
      
        h.style.display = (h.style.display === 'block') ? 'none' : 'block';
      
        hamburger.classList.toggle('open');
        mobilMenu.classList.toggle('visible');
      
        //console.log(hamburger.classList.contains('open'));
      });
      //aloldalak
        document.querySelector('.lenyit').addEventListener('click', () => {
            const hAloldal = document.querySelectorAll('.menuItemDropdown1');
    
            hAloldal.forEach(e => {
                e.style.display = (e.style.display === 'block') ? 'none' : 'block';
    
            });
            document.querySelector('.lenyit i').classList.toggle('open');
            });
    
        document.querySelector('.lenyit2').addEventListener('click', () => {
            const hAloldal2 = document.querySelectorAll('.menuItemDropdown2');
    
            hAloldal2.forEach(e => {
                e.style.display = (e.style.display === 'block') ? 'none' : 'block';
    
            });
            document.querySelector('.lenyit2 i').classList.toggle('open');	
            });
        //console.log(hamburger.classList.contains('open'));
    