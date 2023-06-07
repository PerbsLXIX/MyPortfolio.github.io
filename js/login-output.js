function saveData() {
    var email, password;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    var user_record = new Array();
    user_record = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")):[]
    if (user_record.some((v) => {
        return v.email == email && v.password == password
    })){
        alert("Successful");
        var current_user = user_record.filter((v) => {
            return v.email == email && v.password == password
        })[0]

        localStorage.setItem('name', current_user.name);
        localStorage.setItem('email', current_user.email);
        window.location.href='index.html';
    }
    else {
        alert("Login Fail");
    }
    window.location.href='index.html'
}