function myArray(){

    Object.defineProperty(this,"length",{
        value:0,
        writable:true,
        enumerable:false,
    });

    this.length=arguments.length

    for(let i=0;i<arguments.length;i++){
        this[i]=arguments[i];
    }
}

let arr3=new myArray(1,5,3,4,2) 


/*
push : 押す
pop : ポップ
top : 上
print : 印刷
print reverse : 逆印刷
size : 寸法
*/

myArray.prototype.押す=function(value){
    this[this.length]=value;
    this.length++;
    console.log(Object.values(this))
};
myArray.prototype.ポップ=function(){
    delete this[this.length-1];
    this.length--;
    console.log(Object.values(this))
};
myArray.prototype.上=function(){
    console.log(this[this.length-1]);
};
myArray.prototype.印刷=function(){
    console.log(Object.values(this));
}
myArray.prototype.逆印刷=function(){
    let p=[];
    for(let i=this.length-1;i>=0;i--){
        p.push(this[i]);
    };
    console.log(Object.values(p));
}
myArray.prototype.寸法=function(){
    console.log(this.length);
}



arr3.押す(9);
arr3.ポップ();
arr3.上();
arr3.印刷();
arr3.逆印刷();
arr3.寸法();

// console.log(Object.values(arr3))