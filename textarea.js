function formatText(style) {
    const textarea = document.getElementById("commentInput");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = textarea.value.substring(start, end);

    if (!selected) return;

    let wrapped = selected;
    switch(style) {
      case "italic":
        wrapped = `<i>${selected}</i>`;
        break;
      case "underline":
        wrapped = `<u>${selected}</u>`;
        break;
      case "line-through":
        wrapped = `<s>${selected}</s>`;
        break;
    }

    textarea.value = textarea.value.substring(0, start) + wrapped + textarea.value.substring(end);
    textarea.focus();
    textarea.selectionEnd = start + wrapped.length;
  }

  function openEmojiPicker() {
    alert("Nyomd meg: Win + . (pont) az emoji panel előhívásához 😊");
  }

  function submitComment() {
    const textarea = document.getElementById("commentInput");
    const text = textarea.value.trim();
    if (!text) return;

    const commentList = document.getElementById("commentList");

    const userDiv = document.createElement("div");
    userDiv.classList.add("user");
    userDiv.innerHTML = `
      <div class="user-pic">👤</div>
      <div class="user-info">
        <span>User</span>
        <p>most</p>
      </div>
    `;

    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment-content");
    commentDiv.innerHTML = text;

    commentList.appendChild(userDiv);
    commentList.appendChild(commentDiv);

    textarea.value = "";
  }