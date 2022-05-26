function checkContent(){
    //checking content logic

    return true;
}

let content_promise= new Promise(function(resolve,reject){
//if content is loaded, resolved
//if content is not loaded,reject.

let content = checkContent();

let time = Math.random() * 10000

setTimeout(function(){
if(content === true){
    //promise is resolved
    resolve(document.getElementById("yourorder").innerHTML=null);
}
else{
    //promise is rejected
    reject("Content failed to load");
}
},time);
});

let arr = JSON.parse(localStorage.getItem("order"));

console.log(arr)

content_promise.then(function(arr){
    arr.forEach(function(el){
        // for(let i=0;i<arr.length;i++){
            let image = document.createElement("img");
            image.src=el[i];
            console.log(image.src)
        // }
    })
});