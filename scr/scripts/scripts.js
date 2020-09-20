var input = document.querySelectorAll("input");

for (i = 0; i < input.length; i++) {
  input[i].addEventListener("input", () => {
    
    let colorRed = document.getElementById("red").nodeValue,
        colorGreen = document.getElementById("green").nodeValue,
        colorBlue = document.getElementById("blue").nodeValue;

    let displayBlock = document.getElementsByClassName("display");
        displayBlock.style.background = "rgb(" + colorRed + ", " + colorGreen + ", " + colorBlue + ")";
  })
};