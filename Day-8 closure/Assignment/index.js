let form = document.getElementById("form");

form.addEventListener("submit",function(e){
    
    e.preventDefault();

    let val = document.getElementById("search");

    open()

    // document.getElementsByClassName
    
    const url = `https://www.omdbapi.com/?t=${val.value.replace(/ /,"+")}&apikey=8a265d0`;
    
    getData(url);
    
    movies_div.style.display="none";
    trend_div.style.display="grid";
})

async function getData(url){
    try{
        let res = await fetch(url);

        let movie = await res.json();
        append(movie);
        console.log(movie);
    }catch(err){
        let res = await fetch(url);

        let movie = await res.json();
        append(movie);
    }
}

async function searchMovies(q){
    try {
        let url = `https://www.omdbapi.com/?s=${q}&apikey=8a265d0`;

        let res = await fetch(url);

        let data = await res.json();

        return data.Search;
    } catch (error) {
        console.log("ERROR : ",error);
    }
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
    let query = document.getElementById("search").value;

    let response = searchMovies(query);

    let data = await response;

    if(query===""){
        movies_div.style.display="none";
    }else{
        movies_div.style.display="block";
    }

    appendMovies(data)
}

let movies_div=document.getElementById("searchbox")

function appendMovies(movies){
    movies_div.innerHTML=null;

    if(movies === undefined){
        return false;
    }

    movies.forEach(function(el){
        let sediv = document.createElement("div");
        let p = document.createElement("p");
        p.innerText = el.Title;
        sediv.onclick=function(){open(el)};
        sediv.style.cursor="pointer";   
        sediv.append(p);
        movies_div.append(sediv);
    });
}

function open(el){

    let val = el.Title;
    
    const url = `https://www.omdbapi.com/?t=${val.replace(/ /,"+")}&apikey=8a265d0`;
    
    getData(url)
    
    movies_div.style.display="none";
}

trend();

function trend(){
    let trendurl = "https://api.themoviedb.org/3/trending/movie/day?api_key=7592a4c96fcb2c6c3a94217789858d16";


    trendData(trendurl);
}

async function trendData(url){
    try{
        let res = await fetch(url);

        let trendmovie = await res.json();

        trendappend(trendmovie.results)
        
        // console.log(trendmovie.results);
    }catch(err){
        let res = await fetch(url);;
    }
}

let trend_div = document.getElementById("trend");

function trendappend(trendmovie){
    trendmovie.forEach(function(el){
        let movcard = document.createElement("div");

        let img = document.createElement("img");
        img.src = `https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`;

        movcard.append(img);

        trend_div.append(movcard);
    });
}

function append(data){
    let cont = document.getElementById("container");

    cont.innerHTML = null;

    trend_div.style.display="none";

    if(data.Response==="True"){

    let mov = document.createElement("div");
    mov.id="mov";

    let image = document.createElement("div");
    image.id="image";
    let img = document.createElement("img");
    img.src=data.Poster;
    image.append(img);

    let title = document.createElement("div");
    title.id="id";
    let name = document.createElement("h3");
    name.innerText=data.Title;
    let date = document.createElement("h3");
    date.innerText=data.Released;
    let div1 = document.createElement("div");
    div1.id="div1"; 
    div1.append(name,date);
    let desc = document.createElement("p");
    desc.innerText=data.Plot;
    desc.id="desc";
    let div2 = document.createElement("div");
    div2.id="div2";
    let rate = document.createElement("p");
    rate.innerText="IMDB :   *"+data.imdbRating+"/10";
    let rating = document.createElement("div");
    rating.id="rating";
    if(Number(data.imdbRating)>=Number(8.5)){
        let recc = document.createElement("img");
        recc.src="./recommend.jpg";
        recc.id="recc";
        rating.append(rate,recc);
    }else{
        rating.append(rate);
    }
    div2.append(desc,rating);
    title.append(div1,div2)

    mov.append(image,title);

    cont.append(mov);

    }
    else if(data.Response==="False"){

        let img = document.createElement("img");
        img.src="https://giffiles.alphacoders.com/354/35481.gif";

        let error = document.createElement("h2");
        error.innerText="Enter Correct Movie/TV Show Name";

        cont.append(img,error);

    }
}