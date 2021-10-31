(function(){
    let button = document.getElementById("login_button");
    console.log(button);
    button.addEventListener("click", function(event){
        event.preventDefault();
        $.getJSON("https://955u06d6fa.execute-api.eu-west-1.amazonaws.com/latest/%5B%7B%22username%22%3A%22katarinafromlol1%22%2C%0A%20%20%22password%22%3A%22123401%22%2C%0A%20%20%22email%22%3A%22katarina.fromlol%40gmail.com%22%2C%0A%22ID%22%3A%20%221%22%7D%2C%7B%22username%22%3A%22Catcatlynlyn32%22%2C%22password%22%3A%22123402%22%2C%22email%22%3A%22Catlyn.miau%40gmail.com%22%2C%22ID%22%3A%20%222%22%7D%2C%7B%22username%22%3A%22JasonVoorhees%22%2C%22password%22%3A%22123403%22%2C%22email%22%3A%22Jason.Voor%40gmail.com%22%2C%22ID%22%3A%20%223%22%7D%2C%7B%22username%22%3A%22ToomasThePresident%22%2C%22password%22%3A%22123404%22%2C%22email%22%3A%22Toomas.Hernik%40gmail.com%22%2C%22ID%22%3A%20%224%22%7D%2C%7B%22username%22%3A%22VahtramaeEmily%22%2C%22password%22%3A%22123405%22%2C%22email%22%3A%22Emily.Magi%40gmail.com%22%2C%22ID%22%3A%20%225%22%7D%2C%7B%22username%22%3A%22MarksonMark%22%2C%22password%22%3A%22123406%22%2C%22email%22%3A%22Mark.Markson%40gmail.com%22%2C%22ID%22%3A%20%226%22%7D%2C%7B%22username%22%3A%22Lisafromidk%22%2C%22password%22%3A%22123407%22%2C%22email%22%3A%22Liisa.Juur%40gmail.com%22%2C%22ID%22%3A%20%227%22%7D%2C%7B%22username%22%3A%22MargaretThatcher%22%2C%22password%22%3A%22123408%22%2C%22email%22%3A%22Margaret.PM%40gmail.com%22%2C%22ID%22%3A%20%228%22%7D%2C%7B%22username%22%3A%22Kevinfromtheoffice%22%2C%22password%22%3A%22123409%22%2C%22email%22%3A%22Kevin.Malone%40gmail.com%22%2C%22ID%22%3A%20%229%22%7D%2C%7B%22username%22%3A%22Rasmusmagi%22%2C%22password%22%3A%22123410%22%2C%22email%22%3A%22Rasmus.Magi%40gmail.com%22%2C%22ID%22%3A%20%2210%22%7D%5D%0A", function(data) {
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