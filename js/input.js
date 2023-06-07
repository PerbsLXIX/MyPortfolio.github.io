const form = document.getElementById('contact-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    window.open(form.action, '_blank');
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const number = formData.get('number');
    const message = formData.get('message');
    saveData(name, email, number, message);
    form.reset();
}

function saveData(name, email, number, message) {
    const data = { name, email, number, message };
    const jsonData = JSON.stringify(data);
    localStorage.setItem('formData', jsonData);
} 
