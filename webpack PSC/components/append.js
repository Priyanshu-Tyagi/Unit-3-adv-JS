export function appendData(data){
    let cont = document.getElementById("conatiner");

    data.forEach((el) => {

        let card = document.createElement("div");

        let thumb = document.createElement("img");
        thumb.src= el.urls.thumb;

        card.append(thumb);

        cont.append(card);

    });
}