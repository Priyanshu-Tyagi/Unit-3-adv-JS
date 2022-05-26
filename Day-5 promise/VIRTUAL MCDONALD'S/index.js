let arr=[];

let val = document.querySelectorAll("input[type='checkbox']"),
    eal = document.querySelectorAll(".id>img"),
    obj = {};

for(let i=0;i<val.length;i++){
    val[i].addEventListener("click",function(){
        // let parent = document.querySelector("div");
        if(val[i].checked===true){
            // obj.name=val[i].value;
            arr.push(eal[i].src);
        }else{
            console.log("removes")
        }
    })
}
function order(){
    localStorage.setItem("order",JSON.stringify(arr));
    window.location="./ready.html"
}
console.log()
