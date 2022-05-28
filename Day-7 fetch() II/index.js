const api = "63d5921dc6917871cabc863ee76a4a5b";

async function getData(){
    let city = document.getElementById("cityname").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;

    document.querySelector("#map>div>iframe").setAttribute("src",`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`);

    try{
        let res = await fetch(url);

        let weather = await res.json();
        append(weather);
        console.log(weather);
    } catch(err){
        console.log(err);
    }
}


function append(data){
    let cont = document.getElementById("container");

    cont.innerHTML=null;

    let card = document.createElement("div");

    let temp = document.createElement("h2");
    temp.innerText = (data.main.temp-273.15);

    let max = document.createElement("h3");
    max.innerText = (data.main.temp_max-273.15);

    let min = document.createElement("h3");
    min.innerText = (data.main.temp_min-273.15);

    card.append(temp,max,min);
    cont.append(card);
}