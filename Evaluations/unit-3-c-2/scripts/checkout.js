document.getElementById("confirm").addEventListener("click",function(){order()})

function order(){
    setTimeout(alert("Your order is accepted"),Math.random()*10000);
    setTimeout(alert("Your order is being Prepared"),Math.random()*10000);
    setTimeout(alert("Your order is being packed"),Math.random()*10000);
    setTimeout(alert("Your order is out for delivery"),Math.random()*10000);
    setTimeout(alert("Order delivered"),Math.random()*10000);

}