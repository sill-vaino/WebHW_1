window.addEventListener('load', () => {

    const username = localStorage.getItem("USERNAME");
    const passwrd = localStorage.getItem("PASSWORD");

    document.getElementById('result-username').innerHTML = username;
    document.getElementById('result-passwrd').innerHTML = passwrd;

})