let data=JSON.parse(localStorage.getItem("products"))||[];

let container=document.getElementById("all_products");


data.forEach(function(el,index){
    let card=document.createElement("div");
    card.id="card";
    let imgdiv=document.createElement("div");
    imgdiv.id="imgdiv"
    let image=document.createElement("img");
    image.src=el.image;
    imgdiv.append(image);
    let type=document.createElement("h3");
    type.innerText=el.type;
    let name=document.createElement("h4");
    name.innerText=el.desc;
    let price=document.createElement("h4");
    price.innerText=el.price;
    let btn=document.createElement("button");
    btn.id="remove_product";
    btn.innerText="Remove Product";
    btn.addEventListener("click",function(){remove(index);});
    
    card.append(imgdiv,type,name,price,btn);

    container.append(card);
});

function remove(index){
    let data=JSON.parse(localStorage.getItem("products"));

    data.splice(index,1);
    localStorage.setItem("products",JSON.stringify(data));
    window.location.reload();
}