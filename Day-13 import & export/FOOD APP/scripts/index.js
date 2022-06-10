import nav from "./components.js";

document.getElementById("navbar").innerHTML = nav();

document.querySelector("#search>button").addEventListener("click",()=>{getData()})

async function getData(){
    let val = document.querySelector("#search>input").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`;

    let res = await fetch(url);
    let data = await res.json();

    append(data.meals[0]);

    console.log(data.meals[0]);
}

async function searchMovies(q){

    let val = document.querySelector("#search>input").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`;

    let res = await fetch(url);

    let data = await res.json();

    return data.meals;
}

let id;

function debouncefunction(func,delay){
    if(id){
        clearTimeout(id)
    }
    id = setTimeout(function(){
        func();
    },delay)
}

async function main(){
    let query = document.querySelector("#search>input").value;

    let response = searchMovies(query);

    let data = await response;

    // if(query===""){
    //     movies_div.style.display="none";
    // }else{
    //     movies_div.style.display="block";
    // }

    console(data)
}

function append(data){
    let cont = document.getElementById("container");

    cont.innerHTML = null;

    let card = document.createElement("div");

    let img = document.createElement("img");
    img.src = data.strMealThumb;

    let details = document.createElement("div");
    let cuisine = document.createElement("p");
    cuisine.innerText = "Cuisine : "+data.strArea;
    let dish = document.createElement("p");
    dish.innerText = "Dish : "+data.strMeal;
    let head = document.createElement("h3");
    head.innerText = "Instruction";
    let instr = document.createElement("div");
    let Instruction = document.createElement("p");
    Instruction.innerText = data.strInstructions;

    instr.append(Instruction);

    details.append(cuisine,dish,head,instr);

    card.append(img , details);

    cont.append(card);
}