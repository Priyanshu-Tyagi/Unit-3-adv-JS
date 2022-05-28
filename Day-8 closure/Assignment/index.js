let form = document.getElementById("form");
form.addEventListener("submit",function(e){
    e.preventDefault();
    let val = document.getElementById("search");
    const url = `https://www.omdbapi.com/?t=${val.value.replace(/ /,"+")}&apikey=8a265d0`;
    getData(url)
    // console.log(val.value.replace(/ /,"+"));
    // console.log(url);
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

function append(data){
    let cont = document.getElementById("container");

    cont.innerHTML = null;

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