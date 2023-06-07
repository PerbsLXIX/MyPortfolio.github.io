const formData = localStorage.getItem('formData');
    if (formData) {
        const data = JSON.parse(formData);
        displayData(data.name, data.email, data.number, data.message);
        localStorage.removeItem('formData');
    }

function displayData(name, email, number, message) {
    const table = document.getElementById('contact-table');
    const newRow = table.insertRow();
    const nameCell = newRow.insertCell();
    const emailCell = newRow.insertCell();
    const numberCell = newRow.insertCell();
    const messageCell = newRow.insertCell();
    nameCell.innerText = name;
    emailCell.innerText = email;
    numberCell.innerText = number;
    messageCell.innerText = message;
}