const input = document.querySelector("input");
const fahrenheitTuloste = document.querySelector("#fahrenheit");
const celsiusTuloste = document.querySelector("#celsius");
const button = document.querySelector("button")

function fahrenheitCelsiuksi(fahrenheit) {
    let celsius = Math.round((fahrenheit - 32) * 5 / 9);
    return celsius;
}

function muunna() {
    let far = input.value;
    fahrenheitTuloste.textContent = far;
    celsiusTuloste.textContent = fahrenheitCelsiuksi(far);
}

button.addEventListener("click", muunna);
