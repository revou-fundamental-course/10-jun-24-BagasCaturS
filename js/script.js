const convertButton = document.getElementById("convert");
const resultElement = document.getElementById("hasil");
const resetButton = document.getElementById("reset");
const celciusInput = document.getElementById("celciusInput");
const reverseButton = document.getElementById ("reverse")
const rumusElement = document.getElementById("rumus");
// =======================

reverseButton.addEventListener("click", function () {
    
})
convertButton.addEventListener("click", function () {
    const celcius = parseFloat(celciusInput.value);
    const result = Konversi_C_F(celcius);
    // resultElement.textContent = result;
    // digunakan untuk memasukkan javascript ke dalam sebuah elemnt html
    resultElement.textContent = result;
});


resetButton.addEventListener("click", function (){
    celciusInput.value = "";
    resultElement.textContent = "";
    rumusElement.textContent = "";

});


function Konversi_C_F(celcius) {
    let fahrenheit = (celcius * 9 / 5) + 32;
    let rumus = celcius + "*" + "9" + "/" + "5" + "+" + "32" + "=" + fahrenheit;
    rumusElement.textContent = rumus;
    return `Hasil konversi adalah: ${fahrenheit.toFixed(2)}°F`;
};

