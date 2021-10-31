(function(){
    let button = document.getElementById("login_button");
    console.log(button);
    button.addEventListener("click", function(event){
        event.preventDefault();
        $.getJSON("https://955u06d6fa.execute-api.eu-west-1.amazonaws.com/latest/%5B%0A%7B%0A%20%20%20%20%22username%22%3A%20%22katarinafromlol1%22%2C%0A%20%20%20%20%22password%22%3A%20%22123401%22%2C%0A%20%20%20%20%22email%22%3A%20%22katarina.fromlol%40gmail.com%22%0A%7D%2C%0A%7B%0A%20%20%20%20%22username%22%3A%20%22Catcatlynlyn32%22%2C%0A%20%20%20%20%22password%22%3A%20%22123402%22%2C%0A%20%20%20%20%22email%22%3A%20%22Catlyn.miau%40gmail.com%22%0A%7D%2C%0A%7B%0A%20%20%20%20%22username%22%3A%20%22JasonVoorhees%22%2C%0A%20%20%20%20%22password%22%3A%20%22123403%22%2C%0A%20%20%20%20%22email%22%3A%20%22Jason.Voor%40gmail.com%22%0A%7D%2C%0A%7B%0A%20%20%20%20%22username%22%3A%20%22ToomasThePresident%22%2C%0A%20%20%20%20%22password%22%3A%20%22123404%22%2C%0A%20%20%20%20%22email%22%3A%20%22Toomas.Hernik%40gmail.com%22%0A%7D%2C%0A%7B%0A%20%20%20%20%22username%22%3A%20%22VahtramaeEmily%22%2C%0A%20%20%20%20%22password%22%3A%20%22123405%22%2C%0A%20%20%20%20%22email%22%3A%20%22Emily.Magi%40gmail.com%22%0A%7D%2C%0A%7B%0A%20%20%20%20%22username%22%3A%20%22MarksonMark%22%2C%0A%20%20%20%20%22password%22%3A%20%22123406%22%2C%0A%20%20%20%20%22email%22%3A%20%22Mark.Markson%40gmail.com%22%0A%7D%2C%0A%7B%0A%20%20%20%20%22username%22%3A%20%22Lisafromidk%22%2C%0A%20%20%20%20%22password%22%3A%20%22123407%22%2C%0A%20%20%20%20%22email%22%3A%20%22Liisa.Juur%40gmail.com%22%0A%7D%2C%0A%7B%0A%20%20%20%20%22username%22%3A%20%22MargaretThatcher%22%2C%0A%20%20%20%20%22password%22%3A%20%22123408%22%2C%0A%20%20%20%20%22email%22%3A%20%22Margaret.PM%40gmail.com%22%0A%7D%2C%0A%7B%0A%20%20%20%20%22username%22%3A%20%22Kevinfromtheoffice%22%2C%0A%20%20%20%20%22password%22%3A%20%22123409%22%2C%0A%20%20%20%20%22email%22%3A%20%22Kevin.Malone%40gmail.com%22%0A%7D%2C%0A%7B%0A%20%20%20%20%22username%22%3A%20%22Rasmusmagi%22%2C%0A%20%20%20%20%22password%22%3A%20%22123410%22%2C%0A%20%20%20%20%22email%22%3A%20%22Rasmus.Magi%40gmail.com%22%0A%7D%0A%5D%0A", function(data) {
            for (var i = 0; i < data.length; i++) {
                var kasutaja = document.getElementById("usrname").value;
                var pasword = document.getElementById("psw").value;
                var datakas = data[i].username;
                var datapar = data[i].password;
                if (kasutaja === datakas && pasword === datapar) {
                    handleSubmit();
                    window.location.replace("user_view.html")
                    return;
                }
            }
            alert("Wrong Password or Username!")

        });
    });



})();