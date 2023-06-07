function saveData() {
    var name, email, password;
    name = document.getElementById('name').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    console.log(name + email + password)

    // localStorage.setItem('name', name);
    // localStorage.setItem('email', email);
    // localStorage.setItem('password', password);

    var user_record = new Array();
    user_record = JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')):[]
    if (user_record.some((v) => {
        return v.email == email
    })){
        alert("Duplicate Data")
    }
    else {
        user_record.push({
            'name' : name,
            'email' : email,
            'password' : password
        })
        localStorage.setItem('users', JSON.stringify(user_record));
    }
    window.location.href='login.html'
}
