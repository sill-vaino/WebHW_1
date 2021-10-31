function handleSubmit () {
    const username = document.getElementById('usrname').value;
    const password = document.getElementById('psw').value;
    console.log(username);
    console.log(password);


    localStorage.setItem("USERNAME", username);
    localStorage.setItem("PASSWORD", password);

    return;
}
