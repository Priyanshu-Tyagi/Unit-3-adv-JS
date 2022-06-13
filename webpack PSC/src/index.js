import navbar from "../components/navbar";

import { appendData } from "../components/append";

import "../styles/navbar.css"

import axios from 'axios';


let navbar_div = document.getElementById("header");
navbar_div.innerHTML = navbar();

document.querySelector("#search>i").addEventListener("click",()=>{getData()});

async function getData(){
    let val = document.querySelector("#search>input").value;
    let dat = await axios.get(`https://api.unsplash.com/search/photos?per_page=12&query=${val}&client_id=nfXrMtuCEqs0TX3m-brImcyoyDbwXGbuGx2UxARdqu4`)
    
    // (`https://api.unsplash.com/search/photos?per_page=12&query=${val}&client_id=nfXrMtuCEqs0TX3m-brImcyoyDbwXGbuGx2UxARdqu4`);

    console.log(dat.data.results);

    appendData(dat.data.results);
}

