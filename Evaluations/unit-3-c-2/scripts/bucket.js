// On clicking remove button the item should be removed from DOM as well as localstorage.

let savedata = JSON.parse(localStorage.getItem("coffee"))||[];

let container = document.getElementById("bucket");

savedata.forEach(function(el,index){
    let card = document.createElement("div");
    card.id="card";

    let imgdiv = document.createElement("div");
    imgdiv.id="imgdiv";
    let img = document.createElement("img");
    img.src = el.image;
    imgdiv.append(img)

    let detail = document.createElement("div");
    detail.id="detail";
    let name = document.createElement("p");
    name.innerText=el.title;
    let price = document.createElement("p");
    price.innerText=el.price;
    detail.append(name,price);

    let btn = document.createElement("button");
    btn.id="remove_coffee";
    btn.innerText="Remove"
    btn.addEventListener("click",function(){removefunc(el,index)});

    card.append(imgdiv,detail,btn);

    container.append(card);

    
});

let totalsum="";
for(let i=0;i<savedata.length;i++){
    if(i===savedata.length-1){
        totalsum+=Number(savedata[i].price);
    }
    totalsum+=savedata[i].price+"+";
}

document.getElementById("total_amount").append(eval(Number(totalsum)))

function removefunc(el,index){
    savedata.splice(index,1);
    localStorage.setItem("coffee",JSON.stringify(savedata));
    window.location.reload();
}
