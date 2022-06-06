async function getData(){
    const URL = `https://masai-vouchers-api.herokuapp.com/api/vouchers`;
    let res = await fetch(URL);
    let data = await res.json();
    console.log(data[0].vouchers);
    append(data[0].vouchers);
}
getData();


function append(data){
    let cont = document.getElementById("voucher_list");

    data.forEach(el => {
        let card = document.createElement("div");
        card.id = "voucher";

        let imgdiv = document.createElement("div");
        imgdiv.id = "imgdiv";
        let img = document.createElement("img");
        img.src = el.image;
        imgdiv.append(img);
        
        let details = document.createElement("div");
        details.id = "details";
        let name = document.createElement("p");
        name.innerText = el.name;
        let price = document.createElement("p");
        price.innerText = el.price;
        details.append(name,price);

        let btn = document.createElement("button");
        btn.id = "buy_voucher";
        btn.innerText = "Buy";
        btn.addEventListener("click",function(){buyfunc(el)})

        card.append(imgdiv,details,btn);

        cont.append(card);
    });
}


let savedata = JSON.parse(localStorage.getItem("purchase")) || [];




let userdata = JSON.parse(localStorage.getItem("user"));
let wallet = document.getElementById("wallet_balance");
wallet.innerText = userdata.amount;


function money(sd){
    wallet.innerText -=sd;

    localStorage.setItem("amount",JSON.stringify(wallet.innerText))
    console.log(typeof sd)
}


function buyfunc(el){
    if(Number(wallet.innerText)>el.price){
        savedata.push(el);
        localStorage.setItem("purchase",JSON.stringify(savedata));
        alert("Hurray! purchase successful")
        money(el.price);
    }else{
        console.log(typeof wallet.innerText);
        console.log(typeof el.price)
        alert("Sorry! insufficient balance")
    }
}