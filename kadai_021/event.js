const button = document.getElementById("btn");
const delay = 2000;
button.addEventListener("click", setTimeout(() => {
    const message = document.getElementById("text");
    message.textContent = "ボタンをクリックしました"
}, delay));


