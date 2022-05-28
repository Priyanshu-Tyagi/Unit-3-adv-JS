const api = "63d5921dc6917871cabc863ee76a4a5b";

async function getData(){
    let city = document.getElementById("cityname").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;

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

    document.querySelector("#map>div>iframe").setAttribute("src",`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`);

    let d = new Date();
    const day = d.getDay();
    let days = ["Monday","Tuesday","wednesday","Thursday","Friday","Saturday","Sunday"];

    let card = document.createElement("div");
    let weter = document.createElement("div");
    let weting = document.createElement("div");
    let image = document.createElement("div");


    let wet = document.createElement("img");
    if(data.weather[0].main==="Clouds"){
        wet.src="./cloudy.png"
    }else if(data.weather[0].main==="Snow"){
        wet.src="./snow.png"
    }else if(data.weather[0].main==="Rain"){
        wet.src="./rain.png"
    }else{
        wet.src="./sunny.png"
    }

    let dayname = document.createElement("p");
    dayname.innerText=days[day-1];

    let hum = document.createElement("p");
    hum.id="hum";
    hum.innerText=data.main.humidity;

    let temp = document.createElement("h1");
    temp.innerText = Math.round(data.main.temp-273.15)+"°C";

    let max = document.createElement("p");
    max.innerText = "Max Temp  :  "+Math.round(data.main.temp_max-273.15)+"°C";

    let min = document.createElement("p");
    min.innerText = "Min Temp  :  "+Math.round(data.main.temp_min-273.15)+"°C";

    let name = document.createElement("h1");
    name.innerText=data.name;

    let desc = document.createElement("p");
    desc.innerText=data.weather[0].main;

    card.id="card";
    weting.id="weting";
    weter.id="weter";
    image.id="image";

    image.append(wet,temp);
    weter.append(image,max,min)
    weting.append(name,dayname,desc)
    card.append(weter,weting);
    cont.append(card);
}