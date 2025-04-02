
document.addEventListener('DOMContentLoaded', function() {
    const editIcons = document.querySelectorAll('.edit-icon');
    
    editIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const inputField = this.previousElementSibling; 
            
           
            inputField.removeAttribute('readonly');
            inputField.focus();
            
          
            if (!this.nextElementSibling || !this.nextElementSibling.classList.contains('save-btn')) {
                const saveBtn = document.createElement('button');
                saveBtn.innerText = 'Save';
                saveBtn.classList.add('save-btn');
                saveBtn.style.marginLeft = '10px';
                saveBtn.addEventListener('click', function() {
                    
                    inputField.setAttribute('readonly', true);
                    this.remove(); 
                });
                
                this.parentNode.insertBefore(saveBtn, this.nextSibling);
            }
        });
    });
});