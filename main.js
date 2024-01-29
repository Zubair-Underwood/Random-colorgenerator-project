const hexBtn = document.querySelector(".hex-btn");
const hexColorValue = document.querySelector(".hex-color-value");
const hexColorContainer = document.querySelector(".hex-color-container");

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

rgbBtn.addEventListener("click", () => {

    let extractRedValue = getRedInputRange.value;
    let extractGreenValue = getGreenInputRange.value;
    let extractBlueValue = getBlueInputRange.value;

    rgbColorContainer.style.backgroundColor = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`
});