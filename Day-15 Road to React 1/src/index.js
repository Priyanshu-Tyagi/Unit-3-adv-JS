import navbar from "../components/navbar.js"

import "../style/navbar.css"

import axios from 'axios';


let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar()


async function fetchData(){
    let data = await axios({
        method: 'post',
        url: 'https://api.unsplash.com/search/photos?per_page=12&query=office&client_id=nfXrMtuCEqs0TX3m-brImcyoyDbwXGbuGx2UxARdqu4',
        data: bodyFormData,
        headers: {'Content-Type': 'multipart/form-data' }
        })

    console.log(data);
}

fetchData();