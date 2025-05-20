document.addEventListener('DOMContentLoaded', function() {
  const textarea = document.getElementById("commentInput");
  if (textarea) {
    const editableDiv = document.createElement("div");
    editableDiv.setAttribute("contenteditable", "true");
    editableDiv.setAttribute("id", "commentInput");
    editableDiv.classList.add("editable-comment");
    editableDiv.setAttribute("placeholder", "Reply");
    
    textarea.parentNode.replaceChild(editableDiv, textarea);
    
    const style = document.createElement("style");
    style.textContent = `
      .editable-comment {
        min-height: 60px;
        border: none;
        outline: none;
        width: 100%;
        padding: 8px;
        font-family: inherit;
        font-size: inherit;
        line-height: 1.5;
        resize: none;
        overflow: auto;
      }
      
      .editable-comment[placeholder]:empty:before {
        content: attr(placeholder);
        color: #aaa;
        pointer-events: none;
      }
      
      .editable-comment:focus {
        outline: none;
      }
      
      .moderation-alert {
        color: #fff;
        background-color: #d9534f;
        padding: 15px;
        margin: 15px 0;
        border-radius: 4px;
        text-align: center;
        animation: fadeOut 5s forwards;
      }
      
      @keyframes fadeOut {
        0% { opacity: 1; }
        70% { opacity: 1; }
        100% { opacity: 0; display: none; }
      }
    `;
    document.head.appendChild(style);
    
    editableDiv.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        submitComment();
      }
    });
  }
});

// Offensive words filter
function containsOffensiveWords(text) {
  const offensiveWords = [
    "lúzer",
    "nigger", 
    "cigany", 
    "cigány",
    "nick grr",
    "nigga",
    "n1gga",
    "n1gger",
    "nigger",
    "fasz",
    "f4sz",
    "c1gany",
    "g*ci", 
    "bunkó", 
    "szarházi",
    "b*zi",   
    "p*cs",    
    "kurva", 
    "köcsög", 
    "nyomorult",
    "tökhülye", 
    "barom", 
    "kretén",
    "buta", 
    "szánalmas", 
    "pöcsfej",
    "faszfej", 
    "faszkodó",
    "hülye", 
    "hülyeség", 
    "gyökér",
    "retardált",
  ];
  

  const lowerText = text.toLowerCase();
  

  return offensiveWords.some(word => lowerText.includes(word));
}

function formatText(style) {
  const editableDiv = document.getElementById('commentInput');
  editableDiv.focus();
  
  const selection = window.getSelection();
  
  if (selection.rangeCount > 0 && selection.toString().length > 0) {
    document.execCommand('styleWithCSS', false, true);
    
    switch(style) {
      case "bold":
        document.execCommand('bold', false, null);
        break;
      case "italic":
        document.execCommand('italic', false, null);
        break;
      case "underline":
        document.execCommand('underline', false, null);
        break;
      case "line-through":
        document.execCommand('strikeThrough', false, null);
        break;
    }
  } else {
    const range = document.createRange();
    range.selectNodeContents(editableDiv);
    selection.removeAllRanges();
    selection.addRange(range);
    
    document.execCommand('styleWithCSS', false, true);
    
    switch(style) {
      case "bold":
        document.execCommand('bold', false, null);
        break;
      case "italic":
        document.execCommand('italic', false, null);
        break;
      case "underline":
        document.execCommand('underline', false, null);
        break;
      case "line-through":
        document.execCommand('strikeThrough', false, null);
        break;
    }
    
    selection.removeAllRanges();

    const newRange = document.createRange();
    newRange.selectNodeContents(editableDiv);
    newRange.collapse(false);
    selection.addRange(newRange);
  }
}

function openEmojiPicker() {
  alert("Nyomd meg: Win + . (pont) az emoji panel előhívásához 😊");
}

function showModerationAlert() {

  if (document.querySelector('.moderation-alert')) {
    return;
  }
  
  const textBox = document.querySelector('.text-box');
  const alertDiv = document.createElement('div');
  alertDiv.classList.add('moderation-alert');
  alertDiv.textContent = 'A hozzászólás nem engedélyezett tartalom miatt blokkolva lett. Kérjük, tartsd be a közösségi irányelveket.';
  
  textBox.insertBefore(alertDiv, textBox.firstChild);
  

  setTimeout(() => {
    alertDiv.remove();
  }, 5000);
}

function submitComment() {
  const editableDiv = document.getElementById("commentInput");
  const html = editableDiv.innerHTML.trim();
  
  if (!html || html === "<br>") return;
  

  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  const plainText = tempDiv.textContent || tempDiv.innerText;
  

  if (containsOffensiveWords(plainText)) {
    showModerationAlert();

    editableDiv.innerHTML = "";
    return;
  }
  
  const commentList = document.getElementById("commentList");
  
  const commentContainer = document.createElement("div");
  commentContainer.classList.add("comment");
  
  const now = new Date();
  const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  
  commentContainer.innerHTML = `
    <div class="user">
      <div class="user-pic">
        <svg fill="none" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linejoin="round" fill="#707277" stroke-linecap="round" stroke-width="2" stroke="#707277" d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"></path>
          <path stroke-width="2" fill="#707277" stroke="#707277" d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"></path>
        </svg>
      </div>
      <div class="user-info">
        <span>User</span>
        <p>ma, ${timeString}</p>
      </div>
    </div>
    <p class="comment-content">${html}</p>
  `;
  
  commentList.appendChild(commentContainer);
  editableDiv.innerHTML = "";
}