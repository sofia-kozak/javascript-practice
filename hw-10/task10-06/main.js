const input = document.getElementById('converter');
const resultDiv = document.getElementById('result');
input.oninput = function () {
    const kg = +this.value;
    const pounds = kg * 2.2;
    resultDiv.innerText = `Фунти: ${pounds}`;
};
