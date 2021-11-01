window.addEventListener('load', () => {

    const username = localStorage.getItem("USERNAME");
    const passwrd = localStorage.getItem("PASSWORD");
    const email = localStorage.getItem("EMAIL");
    const name = localStorage.getItem("SURNAME");


    document.getElementById('result-username').innerHTML = username;
    document.getElementById('result-email').innerHTML = email;
    document.getElementById('result-surname').innerHTML = name;
    document.getElementById('result-passwrd').innerHTML = passwrd;






})