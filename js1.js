const arvo = document.querySelector(".number__arvo");
let yksikko1 = document.querySelector("[name=yksikko__1]"); /* selects the first element by name */
let yksikko2 = document.querySelector("[name=yksikko__2]");
let tarkkuus = document.querySelector("[name=tarkkuus]");

const ekaLukuTuloste = document.querySelector("#eka__luku");
const tokaLukuTuloste = document.querySelector("#toka__luku");
const button = document.querySelector("button");


function montakoDesimaalia(luku, aste) {
    if (luku === "0__desimaalia") {
        aste = Math.round(aste);
    } else if (luku === "1__desimaalia") {
        aste = Math.round(aste * 10) / 10;
    } else {
        aste = Math.round(aste * 100) / 100;
    }
    return aste;
}
function fahrenheitCelsiuksi(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return montakoDesimaalia(tarkkuus.value, celsius);
}

function celsiusFahrenheitiksi(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32;
    return montakoDesimaalia(tarkkuus.value, fahrenheit);;
}
function showSolution() {
    let nayttaKaava = document.querySelector(".nayta__kaava");
    let paragraf = document.createElement('p');
    if (document.querySelector(".kaava").checked && yksikko1.value === "fahrenheit" && yksikko2.value === "celsius") {
        paragraf.textContent = '(' + arvo.value + ' - 32) * 5 / 9';
        nayttaKaava.appendChild(paragraf);
    } else if (document.querySelector(".kaava").checked && yksikko1.value === "celsius" && yksikko2.value === "fahrenheit") {
        paragraf.textContent = arvo.value + ' * 9 / 5 + 32';
        nayttaKaava.append(paragraf);
    }
}

function removeFormula() {
    let paragraph = document.querySelector(".nayta__kaava>p");
    if (paragraph !== null) {
        paragraph.remove();
    }
}

function muunna() {
    let luku = arvo.value;
    ekaLukuTuloste.textContent = luku;
    if (yksikko1.value === "fahrenheit" && yksikko2.value === "celsius") {
        ekaLukuTuloste.innerHTML += ' °F';
        tokaLukuTuloste.textContent = fahrenheitCelsiuksi(luku);
        tokaLukuTuloste.innerHTML += ' °C';
    } else if (yksikko1.value === "celsius" && yksikko2.value === "fahrenheit") {
        ekaLukuTuloste.innerHTML += ' °C';
        tokaLukuTuloste.textContent = celsiusFahrenheitiksi(luku);
        tokaLukuTuloste.innerHTML += ' °F';
    } else if(yksikko1.value === "celsius" && yksikko2.value === "celsius"){
        ekaLukuTuloste.innerHTML += ' °C';
        tokaLukuTuloste.textContent = luku;
        tokaLukuTuloste.innerHTML += ' °C';
    } else {
        ekaLukuTuloste.innerHTML += ' °F';
        tokaLukuTuloste.textContent = luku;
        tokaLukuTuloste.innerHTML += ' °F';
    } 
    removeFormula();
    showSolution(); 
}

button.addEventListener("click", muunna);

