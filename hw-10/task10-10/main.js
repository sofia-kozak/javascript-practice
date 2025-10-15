const data = [];
for (let i = 1; i <= 100; i++) {
    data.push({ id: i, name: `Об’єкт ${i}` });
}
let page = 0;
const itemsPerPage = 10;

const list = document.getElementById('list');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

function showPage() {
    list.innerHTML = '';
    const start = page * itemsPerPage;
    const end = start + itemsPerPage;
    const items = data.slice(start, end);

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name;
        list.appendChild(li);
    });
    prev.disabled = page === 0;
    next.disabled = end >= data.length;
}
prev.onclick = function() {
    page--;
    showPage();
};

next.onclick = function() {
    page++;
    showPage();
};

showPage();
