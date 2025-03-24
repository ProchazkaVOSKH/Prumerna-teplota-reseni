const btnPrumer = document.querySelector("#btnPrumer");
const btnVloz = document.querySelector("#btnVloz");
const btnOdstranit = document.querySelector("#btnOdstranit");
const pPrumer = document.querySelector("#pPrumer");
const pSeznam = document.querySelector("#pSeznam");
const txtTeplota = document.querySelector("#txtTeplota");

let temperatures = [];

btnVloz.onclick = function() {
    const teplota = parseFloat(txtTeplota.value);
    if (!isNaN(teplota)) {
        temperatures.push(teplota);
        txtTeplota.value = '';
        pSeznam.innerText = `Zadané teploty: ${temperatures.join(', ')}`;
    }
}

btnPrumer.onclick = function() {
    if (temperatures.length === 0) return;
    const sum = temperatures.reduce((a, b) => a + b, 0);
    const average = sum / temperatures.length;
    pPrumer.innerText = `Průměrná teplota: ${average.toFixed(2)} °C`;
}

btnOdstranit.onclick = function() {
    if (temperatures.length === 0) return;
    temperatures.pop();
    pSeznam.innerText = temperatures.join(', ');
    pPrumer.innerText = '';
}

