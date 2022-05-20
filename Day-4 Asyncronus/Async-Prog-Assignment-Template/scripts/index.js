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