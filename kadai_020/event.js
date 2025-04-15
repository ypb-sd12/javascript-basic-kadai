changeTextMessage = () => {
    const message = document.getElementById("text");
    message.textContent = "ボタンをクリックしました";
}
const button = document.getElementById("btn");
button.addEventListener("click", changeTextMessage);

// function changeTextMessage () {
//     const message = document.getElementById("text");
//     message.textContent = "ボタンをクリックしました";
// }

// const message = document.getElementById("text");
// button.addEventListener(click, () => message.textContent = "ボタンをクリックしました");