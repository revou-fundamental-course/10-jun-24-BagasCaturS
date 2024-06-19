const convertButton = document.getElementById("convert");
const resultElement = document.getElementById("hasil");
const resetButton = document.getElementById("reset");
const celciusInput = document.getElementById("celciusInput");
const reverseButton = document.getElementById("reverse")
const rumusElement = document.getElementById("rumus");

reverseButton.addEventListener("click", function () {
    const fahrenheit = parseFloat(celciusInput.value);
    const result = Konversi_F_C(fahrenheit);
    resultElement.textContent = result;
});

convertButton.addEventListener("click", function () {
    const celcius = parseFloat(celciusInput.value);
    const result = Konversi_C_F(celcius);
    resultElement.textContent = result;
});

resetButton.addEventListener("click", function (){
    celciusInput.value = "";
    resultElement.textContent = "";
    rumusElement.textContent = "";
});

function Konversi_C_F(celcius) {
    let fahrenheit = (parseFloat(celcius) * 9 / 5) + 32;
    let rumus = `${celcius} * 9 / 5 + 32 = ${fahrenheit.toFixed(2)}`;
    rumusElement.textContent = rumus;
    return `Hasil konversi adalah: ${fahrenheit.toFixed(2)}°F`;
}

function Konversi_F_C(fahrenheit) {
    let celcius = (parseFloat(fahrenheit) - 32) * 5 / 9;
    let rumus = `(${fahrenheit} - 32) * 5 / 9 = ${celcius.toFixed(2)}`;
    rumusElement.textContent = rumus;
    return `Hasil konversi adalah: ${celcius.toFixed(2)}°C`;
}