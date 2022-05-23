let img_url = ["https://i.pinimg.com/originals/66/24/96/6624960f0062bd8b8845037c6776277c.jpg","https://theknackinitiative.files.wordpress.com/2014/03/bane-batman-standoff-the-dark-knight-rises-wall-poster1.jpg","https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/03/Mortal-Kombat-Poster-Header.jpg?q=50&fit=crop&w=1400&dpr=1.5","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJ2Ol1mzhOwmSWeTDBVORWBF4Tl1hho7v5w&usqp=CAU","https://i.insider.com/5e3c5c4ddf2f66237e18f214"];

let container = document.getElementById("slideshow"),
    i=0,
    image = img_url[i];

    let img = document.createElement("img");
    img.src = image;
    img.style.width="100%";
    img.style.height="100%";

    container.append(img);

    i+=1

id = setInterval(function(){
    //acessing the image url
    if(i===img_url.length){
        i=0;
    }

    container.innerHTML = null;

    let image = img_url[i]

    //append the image

    let img = document.createElement("img");
    img.src = image;
    img.style.width="100%";
    img.style.height="100%";

    container.append(img);
    i++
},3000)


/* sort function-------------------------------- */

function lh(){
    data.sort(function(a,b){
        return b.rating - a.rating;
    })
    display(data);
}

function hl(){
    data.sort(function(a,b){
        return a.rating - b.rating;
    })
    display(data);
}

// all movies ---------------------------------------------------------

let data = [
    {
        name : "Your Name",
        date : "26 Aug 2016",
        poster : "https://m.media-amazon.com/images/M/MV5BNGYyNmI3M2YtNzYzZS00OTViLTkxYjAtZDIyZmE1Y2U1ZmQ2XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
        rating : "8.4",
    },
    {
        name : "A Silent Voice",
        date : "20 Oct 2017",
        poster : "https://m.media-amazon.com/images/M/MV5BZGRkOGMxYTUtZTBhYS00NzI3LWEzMDQtOWRhMmNjNjJjMzM4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        rating : "8.1",
    },
    {
        name : "Let Me Eat Your Pancreas",
        date : "28 July 2017",
        poster : "https://m.media-amazon.com/images/M/MV5BMDQ2ZDhhNjUtN2Y2NS00NDgwLTg3YjItNGZlOGQ2Y2VjOTQxXkEyXkFqcGdeQXVyNjgwNTk4Mg@@._V1_FMjpg_UX1000_.jpg",
        rating : "8.0",
    },
    {
        name : "Doctor Strange in the Multiverse of Madness",
        date : "6 May 2022",
        poster : "https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_FMjpg_UX1000_.jpg",
        rating : "7.4",
    },
    {
        name : "Fantastic Beasts: The Secrets of Dumbledore",
        date : "8 Apr 2022",
        poster : "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2022/02/FNBST3_VERT_MAIN_2764x4096_DOM_R03.jpg",
        rating : "6.4",
    },
    {
        name : "Sonic the Hedgehog 2",
        date : "22 April 2022",
        poster : "https://m.media-amazon.com/images/I/71p-N52eLzL._AC_SL1200_.jpg",
        rating : "6.7",
    },
    {
        name : "Uncharted",
        date : "18 Feb 2022",
        poster : "https://posterspy.com/wp-content/uploads/2020/10/Poster_Uncharted3-1500x2122.jpg",
        rating : "6.4",
    },
    {
        name : "Morbius",
        date : "1 Apr 2022",
        poster : "https://m.media-amazon.com/images/M/MV5BYjlhNTA3Y2ItYjhiYi00NTBiLTg5MDMtZDJjMDZjNzVjNjJmXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
        rating : "5.1",
    },
    {
        name : "Ambulance",
        date : "8 Apr 2022",
        poster : "https://m.media-amazon.com/images/M/MV5BYjUyN2VlZGEtNGEyZC00YjViLTgwYmQtZDJiM2FlOTU3Mjg2XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_FMjpg_UX1000_.jpg",
        rating : "6.1",
    },
    {
        name : "The Batman",
        date : "4 Mar 2022",
        poster : "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_FMjpg_UX1000_.jpg",
        rating : "8.0",
    },
]

window.addEventListener(display(data));

function display(data){

    document.getElementById("movies").innerHTML = "";

    data.forEach(function(el){
    let card = document.createElement("div");
    card.id = "card"

    let img_div = document.createElement("div");
    img_div.id = "imgdiv";

    let img = document.createElement("img");
    img.src = el.poster;
    img_div.append(img);

    let name = document.createElement("h3");
    name.innerText = el.name;
    name.id = "name"

    let date = document.createElement("p");
    date.innerText = el.date;
    
    let rating = document.createElement("p");
    rating.innerText = el.rating;

    card.append(img_div,name,date,rating);

    movies.append(card);
});
}