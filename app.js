const background = document.querySelector("body");
const title = document.querySelector(".title");
const button = document.querySelector(".btn-random");

function generateHex(){
    let hex = "";
    for(let i = 0; i < 6; i++){
        hex = hex + generateHexChar();
    }
    return hex;
}

function generateHexChar(){
    const chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    return chars[Math.floor(Math.random() * chars.length)];
}

button.addEventListener("click", () => {
    let newHex = generateHex();
    title.textContent = newHex;
    background.style.backgroundColor = `#${newHex}`;
});