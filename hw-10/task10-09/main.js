const price = document.getElementById('price');
const now = Date.now();

let last = +localStorage.getItem("lastUpdate");
let current = +localStorage.getItem("currentPrice") || 100;

if (!last) localStorage.setItem("lastUpdate", now);

if (now - last > 10000) {
    current += 10;
    localStorage.setItem("lastUpdate", now);
    localStorage.setItem("currentPrice", current);
}
price.innerText = current + " грн";


