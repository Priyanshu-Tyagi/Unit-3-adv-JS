let amount = JSON.parse(localStorage.getItem("amount"));
let wallet = document.getElementById("wallet_balance");
wallet.innerText = amount;
console.log(amount);

let savedata = JSON.parse(localStorage.getItem("purchase")) || [];

append(savedata);

function append(data){
    let cont = document.getElementById("purchased_vouchers");

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
        price.innerText = Number(el.price);
        details.append(name,price);

        let btn = document.createElement("button");
        btn.id = "buy_voucher";
        btn.innerText = "Buy";
        btn.addEventListener("click",function(){buyfunc(el)})

        card.append(imgdiv,details,btn)

        cont.append(card);
    });
}