//store the products array in localstorage as "products"

function Product(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=`₹${p}`;
    this.image=i;
}

function saveData(){
    let form=document.getElementById("products");
    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let url=form.image.value;

    let sd= new Product(type,desc,price,url);

    let data=JSON.parse(localStorage.getItem("products"))||[];

    data.push(sd);

    localStorage.setItem("products",JSON.stringify(data));
    form.type.value=null;
    form.desc.value=null;
    form.price.value=null;
    form.image.value=null;
}
