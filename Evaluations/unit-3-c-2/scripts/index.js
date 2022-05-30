// Add the coffee to local storage with key "coffee"
getData()
async function getData(){
    const URL = `https://masai-mock-api.herokuapp.com/coffee/menu`;
    let res = await fetch(URL);
    let data = await res.json();
    console.log(data.menu.data);
    append(data.menu.data);
}



function append(data){
    let container = document.getElementById("menu");

    data.forEach(function(el,index){

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
        btn.id="add_to_bucket";
        btn.innerText="Add to bucket"
        btn.addEventListener("click",function(){bucketfunc(el,index)});

        card.append(imgdiv,detail,btn);

        container.append(card);
    })
}

let savedata = JSON.parse(localStorage.getItem("coffee"))||[];

document.getElementById("coffee_count").innerText=savedata.length;

function bucketfunc(el){
    savedata.push(el);
    localStorage.setItem("coffee",JSON.stringify(savedata))
    window.location.reload();
}