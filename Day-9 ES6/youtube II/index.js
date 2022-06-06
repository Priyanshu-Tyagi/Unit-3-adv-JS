
let search = async() =>{
    let query = document.getElementById("query").value;

    let URL=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=AIzaSyCB1pkEUHhD2fj7HFilUkafeRxDfdLPTxA`;

    let res= await fetch(URL);
    let data=await res.json();
    console.log(data.items);
    append(data.items);
}

let append = (data)=>{
    let cont = document.getElementById("results");
    cont.innerHTML=null;
    data.forEach(({id:{videoId},snippet:{title,thumbnails}}) => {
        let card = document.createElement("div");
        let iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        let img = document.createElement("img");
        img.src = thumbnails.medium.url;
        card.onclick = () => {playVideo(`https://www.youtube.com/embed/${videoId}`)};
        card.style.cursor="pointer";
        let h3 = document.createElement("h3");
        h3.innerText=title;
        // console.log(thumbnails.high.url)

        card.append(img,h3);

        cont.append(card);
    });
}

let playVideo = (video) => {
    localStorage.setItem("link",JSON.stringify(video));
    window.location.href="./video.html";
}

/* FOR POPULAR VIDEOS */

let popular = async() =>{
    let popurl=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=AIzaSyCB1pkEUHhD2fj7HFilUkafeRxDfdLPTxA`;

    let res= await fetch(popurl);
    let data=await res.json();
    console.log(data.items);
    popappend(data.items);
}

let popappend = (data)=>{
    let cont = document.getElementById("results");
    cont.innerHTML=null;
    data.forEach(({id:{videoId},snippet:{title,thumbnails}}) => {
        let card = document.createElement("div");
        card.id="card";
        let iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        let img = document.createElement("img");
        img.src = thumbnails.medium.url;
        card.onclick = () => {playVideo(`https://www.youtube.com/embed/${videoId}`)};
        card.style.cursor="pointer";
        let name = document.createElement("p");
        name.innerText=title;
        name.id="name";
        // console.log(thumbnails.high.url)

        card.append(img,name);

        cont.append(card);
    });
}

popular();
/* <iframe width="560" height="315" src="https://www.youtube.com/embed/9EDZixuODrw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */