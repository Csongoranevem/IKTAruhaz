// Format text based on selected style
function formatText(style) {
  const textarea = document.getElementById("commentInput");
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const selected = textarea.value.substring(start, end);
  
  // If no text is selected, place formatting tags with cursor in between
  let wrapped = selected;
  let cursorPosition;
  
  switch(style) {
    case "bold":
      wrapped = `<b>${selected}</b>`;
      cursorPosition = selected ? start + wrapped.length : start + 3;
      break;
    case "italic":
      wrapped = `<i>${selected}</i>`;
      cursorPosition = selected ? start + wrapped.length : start + 3;
      break;
    case "underline":
      wrapped = `<u>${selected}</u>`;
      cursorPosition = selected ? start + wrapped.length : start + 3;
      break;
    case "line-through":
      wrapped = `<s>${selected}</s>`;
      cursorPosition = selected ? start + wrapped.length : start + 3;
      break;
  }
  
  textarea.value = textarea.value.substring(0, start) + wrapped + textarea.value.substring(end);
  textarea.focus();
  
  // If text was selected, place cursor after the formatted text
  // If no text was selected, place cursor between tags
  textarea.selectionStart = selected ? cursorPosition : start + 3;
  textarea.selectionEnd = selected ? cursorPosition : start + 3;
}

// Handle emoji picker
function openEmojiPicker() {
  alert("Nyomd meg: Win + . (pont) az emoji panel előhívásához 😊");
}

// Submit comment function
function submitComment() {
  const textarea = document.getElementById("commentInput");
  const text = textarea.value.trim();
  if (!text) return;
  
  const commentList = document.getElementById("commentList");
  
  // Create comment container
  const commentContainer = document.createElement("div");
  commentContainer.classList.add("comment");
  
  // Get current date and time
  const now = new Date();
  const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  
  // Create HTML for the comment
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
    <p class="comment-content">${text}</p>
  `;
  
  commentList.appendChild(commentContainer);
  textarea.value = "";
}

// Add event listener for Enter key press
document.addEventListener('DOMContentLoaded', function() {
  const textarea = document.getElementById("commentInput");
  
  // Add event listener for Enter key
  textarea.addEventListener('keydown', function(e) {
    // Check if Enter was pressed without Shift (Shift+Enter creates a new line)
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent default behavior (new line)
      submitComment();
    }
  });
  
  // Add button for bold formatting
  const formattingDiv = document.querySelector('.formatting');
  const firstButton = formattingDiv.querySelector('button');
  
  // Create bold button
  const boldButton = document.createElement('button');
  boldButton.type = 'button';
  boldButton.innerHTML = `
    <svg fill="none" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="#707277" d="M6 12h8c2.2091 0 4-1.7909 4-4 0-2.20914-1.7909-4-4-4H6v8z"></path>
      <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="#707277" d="M6 12h9c2.2091 0 4 1.7909 4 4 0 2.2091-1.7909 4-4 4H6V12z"></path>
    </svg>
  `;
  boldButton.onclick = function() { formatText('bold'); };
  
  // Insert bold button after the first button
  if (firstButton && firstButton.parentNode) {
    firstButton.parentNode.insertBefore(boldButton, firstButton.nextSibling);
  }
});

// Function to make the existing buttons work
window.onload = function() {
  // Add click event to bold button
  const boldButton = document.querySelector('.formatting button:nth-child(2)');
  if (boldButton) {
    boldButton.onclick = function() { formatText('bold'); };
  }
  
  // Make sure the other formatting buttons work too
  const italicButton = document.querySelector('.formatting button:nth-child(3)');
  if (italicButton) {
    italicButton.onclick = function() { formatText('italic'); };
  }
  
  const underlineButton = document.querySelector('.formatting button:nth-child(4)');
  if (underlineButton) {
    underlineButton.onclick = function() { formatText('underline'); };
  }
  
  const strikeButton = document.querySelector('.formatting button:nth-child(5)');
  if (strikeButton) {
    strikeButton.onclick = function() { formatText('line-through'); };
  }
  
  // Make sure the send button works
  const sendButton = document.querySelector('.formatting .send');
  if (sendButton) {
    sendButton.onclick = submitComment;
  }
};