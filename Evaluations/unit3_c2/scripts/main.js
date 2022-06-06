let form = document.getElementById("form");
form.addEventListener("submit",function(e){
    e.preventDefault();

    let data = {
        name : form.name.value,
        email : form.email.value,
        address : form.address.value,
        amount : Number(form.amount.value),
    }
    console.log(typeof data.amount)

    localStorage.setItem("user",JSON.stringify(data));
    form.name.value=null;
    form.email.value=null;
    form.address.value=null;
    form.amount.value=null;
});