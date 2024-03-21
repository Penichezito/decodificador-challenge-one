const buttonEncrypt = document.querySelector(".btn-encrypt");
const buttonDecrypt = document.querySelector(".btn-decrypt");
const textInput = document.querySelector(".box-text-area")
const riddler = document.querySelector(".box-riddler");
const h3 = document.querySelector(".h3-box");
const paragraph = document.querySelector(".paragraph-box");
const result = document.querySelector(".result-text");

buttonEncrypt.onclick = encrypt;
buttonDecrypt.onclick = decrypt;


function encrypt() {
  hiddenBox();
  let area = recoverText();
  result.textContent = encryptText(area);
}

function decrypt() {
  hiddenBox();
  let area = recoverText();
  result.textContent = decryptText(area);
}

function recoverText() {
  let area = document.querySelector(".box-text-area");
  return area.value;
}

function hiddenBox() { 
  riddler.classList.add("hidden");
  h3.classList.add("hidden");
  paragraph.classList.add("hidden");
}

function encryptText(text) { 
  const keys = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  let encryptedText = "";
  for (let i = 0; i < text.length; i++) {
    const word = text[i]; 
    encryptedText += keys.hasOwnProperty(word) ? keys[word] : word;
  }

  return encryptedText;
}


function decryptText(text) {
  const keys = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u",
  };

  let decryptedText = "";
  for (let i = 0; i < text.length; i++) {
    const word = text[i];
    decryptedText += keys.hasOwnProperty(word) ? keys[word] : word;
  }

  return decryptedText;
}

const btnCopy = document.querySelector(".btn-copy"); 
    btnCopy.addEventListener("click", copiar = () => {
    let content = document.querySelector(".text-result").textContent;
    navigator.clipboard.writeText(content);
    console.log("copied");
    });
