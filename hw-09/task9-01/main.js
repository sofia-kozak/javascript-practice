const div = document.createElement('div');
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.textContent = 'Оригінальний блок';

document.body.appendChild(div);

const clone = div.cloneNode(true);

clone.textContent = 'Клон блоку';
document.body.appendChild(clone);

