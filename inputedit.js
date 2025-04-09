document.addEventListener('DOMContentLoaded', function() {
    const editIcons = document.querySelectorAll('.edit-icon');
   
    editIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const inputField = this.previousElementSibling;
           
            // szerkesztheto
            inputField.removeAttribute('readonly');
            inputField.focus();
           
            // img elrejtese
            this.style.display = 'none';
         
            if (!this.nextElementSibling || !this.nextElementSibling.classList.contains('save-btn')) {
                const saveBtn = document.createElement('button');
                saveBtn.innerText = 'Save';
                saveBtn.classList.add('save-btn');
                saveBtn.style.marginLeft = '10px';
                saveBtn.style.marginLeft = '10px';
                saveBtn.style.backgroundColor = '#f8f9fa';
                saveBtn.style.border = '1px solid #dee2e6';
                saveBtn.style.borderRadius = '4px';
                saveBtn.style.padding = '5px 12px';
                saveBtn.style.fontSize = '14px';
                saveBtn.style.color = '#495057';
                saveBtn.style.cursor = 'pointer';
                saveBtn.style.transition = 'all 0.2s ease';
                
                // Hover effekt
                saveBtn.addEventListener('mouseover', function() {
                    this.style.backgroundColor = '#ef9efef';
                });
                // mentes
                saveBtn.addEventListener('click', function() {
                    // readonly
                    inputField.setAttribute('readonly', true);
                    
                    this.remove();
                    
                    // show
                    const editIcon = inputField.nextElementSibling;
                    editIcon.style.display = 'inline';
                });
           
                this.parentNode.insertBefore(saveBtn, this.nextSibling);
            }
        });
    });
});