const hexBtn = document.querySelector(".hex-btn");
const hexColorValue = document.querySelector(".hex-color-value");
const hexColorContainer = document.querySelector(".hex-color-container");
const hexCopyBtn = document.querySelector(".copy-hex-color");

// create random hex color

hexBtn.addEventListener("click", () => {

    let characterSet = "0123456789ABCDEF";
    let hexColorOutput = "";

    for (let i = 0, charSetLength = characterSet.length; i < 6; i++) {
        hexColorOutput += characterSet.charAt(
            Math.floor(Math.random() * charSetLength)
        );
    }

    hexColorValue.textContent = `#${hexColorOutput}`;
    hexColorContainer.style.background = `#${hexColorOutput}`

    console.log(hexColorOutput);
});


// RGB color generator

const rgbBtn = document.querySelector(".rgb-btn");
const getRedInputRange = document.querySelector("#red");
const getGreenInputRange = document.querySelector("#green");
const getBlueInputRange = document.querySelector("#blue");
const rgbColorContainer = document.querySelector(".rgb-color-container");
const rgbCopyBtn = document.querySelector(".copy-rgb-color");
const rgbColorValue = document.querySelector(".rgb-color-value");

rgbBtn.addEventListener("click", () => {

    let extractRedValue = getRedInputRange.value;
    let extractGreenValue = getGreenInputRange.value;
    let extractBlueValue = getBlueInputRange.value;

    rgbColorValue.textContent = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
    rgbColorContainer.style.backgroundColor = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
    rgbBtn.style.color = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
});


function copyHexColorToClipBoard() {

    navigator.clipboard.writeText(hexColorValue.textContent);
    alert("Hex color is copied to clipboard");
}


hexCopyBtn.addEventListener("click", copyHexColorToClipBoard);
function copyRgbColorToClipBoard() {

    navigator.clipboard.writeText(rgbColorValue.textContent);
    alert("rgb color is copied to clipboard");

}

rgbCopyBtn.addEventListener("click", copyRgbColorToClipBoard);
