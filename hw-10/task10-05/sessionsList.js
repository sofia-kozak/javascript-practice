const container = document.getElementById('sessionsContainer');
const sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];

if (sessionsList.length === 0) {
    container.innerText = 'Відвідувань ще не було.';
} else {
    for (const session of sessionsList) {
        const div = document.createElement('div');
        div.className = 'session';
        div.innerText = session;
        container.appendChild(div);
    }
}