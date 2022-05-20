let arr = JSON.parse(localStorage.getItem("data"))

let form = document.querySelector("form");

form.addEventListener("submit",function(){check()});

function check(){
    event.preventDefault();

    let email = form.email.value;
    let pass = form.pass.value;

    arr.forEach(function(el){

        if(email === el.email && pass === el.pass){
            window.location.href="./index.html"
        }else{
            alert("invalid Credentials");
        }

    });
}