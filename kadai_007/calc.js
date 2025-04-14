const num = 15;
// const text = returnText(prompt("数字を入力してください"));
const text = returnText(num)
console.log(text)
function returnText(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "3と5の倍数です"
    }
    if (number % 3 === 0) {
        return "3の倍数です"
    }
    if (number % 5 === 0) {
        return "5の倍数です"
    }
    return number;
}