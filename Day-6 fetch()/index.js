// const url = "https://reqres.in/api/users";

// fetch(url)
//     .then(function(res){
//         return res.json(); // collect the data
//     })
//     .then(function(res){
//         console.log(res.data); //again .then the res to get the data in array of object.
//     })
//     .catch(function(err){
//         console.log(err);
//     });

// Async Await use this way.

// async function getData(){
//     try{
//         let res = await fetch(url);

//         let users = await res.json();
//         append(users.data)
//         console.log(users.data);
//     } catch(err){
//         console.log(err);
//     }
// }

// getData()

// function append(data){
//     let cont = document.getElementById("cont");
//     data.forEach(function(el){
//         let img = document.createElement("img");
//         img.src = el.avatar;

//         let div = document.createElement("div");

//         let h2 = document.createElement("h2");
//         h2.innerText=el.first_name;

//         let p = document.createElement("p");
//         p,innerText=el.email;

//         div.append(img,h2,p);

//         cont.append(div);
//     })
// }


const url = "https://fakestoreapi.com/products"
async function getData(){
    try{
        let res = await fetch(url);

        let products = await res.json();
        append(products)
        console.log(products);
    } catch(err){
        console.log(err);
    }
}
getData();

function append(data){
    let cont = document.getElementById("cont");
    
    data.forEach(function(el){
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src=el.image;

        let name = document.createElement("h2");
        name.innerText=el.title;

        let price = document.createElement("p");
        price.innerText=el.price;

        div.append(img,name,price)

        cont.append(div)
    })
}