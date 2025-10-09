const userForm = document.forms.userForm;
const result = document.getElementById('result');

userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = userForm.name.value;
    const surname = userForm.surname.value;
    const age = +userForm.age.value;

    const user = { name, surname, age };

    const userBlock = document.createElement('div');
    userBlock.style.border = '1px solid #ccc';
    userBlock.style.padding = '10px';
    userBlock.style.marginTop = '10px';
    userBlock.style.borderRadius = '8px';
    userBlock.style.backgroundColor = '#f9f9f9';
    userBlock.innerHTML = `
    <strong>Name</strong> ${user.name} <br>
    <strong>Surname:</strong> ${user.surname} <br>
    <strong>Age:</strong> ${user.age}`;

    result.appendChild(userBlock);
});