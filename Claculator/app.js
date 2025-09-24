const button = document.querySelector('.change-btn');
const body = document.querySelector('body')
const color = [
    "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure",
    "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood",
    "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan",
    "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGreen", "DarkKhaki", "DarkMagenta",
    "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen",
    "DarkSlateBlue", "DarkSlateGray", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue",
    "DimGray", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro",
    "GhostWhite", "Gold", "GoldenRod", "Gray", "Green", "GreenYellow", "HoneyDew", "HotPink",
    "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon",
    "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGreen",
    "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSteelBlue",
    "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine",
    "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue",
    "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream",
    "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange",
    "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed",
    "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple",
    "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "Seashell",
    "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "Snow", "SpringGreen", "SteelBlue",
    "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke",
    "Yellow", "YellowGreen"
];

button.addEventListener('click', changeB)
function changeB() {
    const colorIndex = parseInt(Math.random() * color.length)
    body.style.backgroundColor = color[colorIndex];
}


// Display Massege

const massege = document.getElementById('massege');
const submitBtn = document.getElementById('submitBtn');
let massegeContent = document.getElementsByClassName('massegeContent');

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();

    if (massege.value.trim() === '') {
        alert('Write something');
    } else {
        // Example: put text inside the first element with class 'massegeContent'
        massegeContent[0].innerHTML = massege.value;
        massege.value = ""; // clear input
    }

    massege.value = ''; // clear input
});















// calculator

const result = document.getElementById("result");
const buttons = document.querySelectorAll(".buttons button");
const clearBtn = document.querySelector(".clear");
const equalsBtn = document.querySelector(".equals");
const changeBtn = document.querySelector(".change-btn");

let currentInput = "";

// Handle button clicks
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (button.classList.contains("number") || button.classList.contains("operator") || button.classList.contains("decimal")) {
            currentInput += value;
            result.value = currentInput;
        }
    });
});

// Clear button
clearBtn.addEventListener("click", () => {
    currentInput = "";
    result.value = "";
});

// Equals button
equalsBtn.addEventListener("click", () => {
    try {
        currentInput = eval(currentInput).toString(); // ⚠️ eval only for simple calculator
        result.value = currentInput;
    } catch {
        result.value = "Error";
        currentInput = "";
    }
});

// Optional: Theme changer
changeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
