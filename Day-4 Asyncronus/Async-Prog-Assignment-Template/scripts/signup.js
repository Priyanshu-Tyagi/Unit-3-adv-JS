let form = document.querySelector("form");

form.addEventListener("submit",function(){store()});

let arr = JSON.parse(localStorage.getItem("data")) || [];

function store(){
    event.preventDefault();

    let name = form.name.value;
    let contact = form.number.value;
    let email = form.email.value;
    let pass = form.pass.value;

    let req = {
        name : name,
        contact : contact,
        email : email,
        pass : pass,
    }

    arr.push(req);

    localStorage.setItem("data",JSON.stringify(arr));

    form.name.value = null;
    form.number.value = null;
    form.email.value = null;
    form.pass.value = null;
}