document.getElementById('checkBtn').addEventListener('click', function (){
    const age = document.getElementById('ageInput').value;
    const result = document.getElementById('result');

    if(!age) {
      result.textContent = 'Будь ласка, введіть свій вік!';
      result.style.color ='orange';
    } else if (age < 18) {
        result.textContent = 'Вибачте, вам ще немає 18.';
        result.style.color = 'red';
    } else {
        result.textContent = 'Доступ дозволено.';
        result.style.color = 'green';
    }
});
