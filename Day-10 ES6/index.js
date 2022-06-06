// class Stack{
//     constructor(){
//         this.length = 0;
//         this.stack=[];
//     }

//     push(el){
//         this.stack[this.length] = el;
//         this.length++;
//     }

//     pop(){
//         this.stack.pop();
//         this.length--;
//     }

//     peek(){
//         return this.stack[this.length-1];
//     }
// }

// let s1 = new Stack();
// s1.push(1);
// s1.push(2);
// s1.push(10);

// console.log(s1.peek());
// s1.pop();
// console.log(s1)

class Mobile{
    constructor(b,bt){
        this.brand=b;
        this.calling=true;
        this.battery = bt;
    }
}

let m1=new Mobile("Iphone",5000);
console.log(m1);

class SmartPhone extends Mobile{
    constructor(b,bt,c,s){
        super(b,bt);
        this.camera = c;
        this.screenSize =s;
    }
}

let m2 = new SmartPhone("iphone",5000,"20px","6inch");
console.log(m2);