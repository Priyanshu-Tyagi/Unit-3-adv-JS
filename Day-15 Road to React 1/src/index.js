import navbar from "../components/navbar.js"

import "../style/navbar.css"

import axios from 'axios';


let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar()


async function fetchData(){
    let data = await axios.get('https://fakestoreapi.com/products/category/electronics')

    console.log(data);
}

fetchData();