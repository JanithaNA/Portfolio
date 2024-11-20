/*var x = 10;
  {
    var x = 7;
  }


console.log(x);

//ES5

var x =function(x,y){
    return x*y;
}
//ES6
const x = (x,y) => x*y;

const x =(x,y) =>{
    return x*y
};

const cars = ["bmw","audi","bence"];

let text ='';

for (let x of cars){
    text += x+ "";
}
*/
let language = "language";
let code = "";

for (let x of language){
    code += x + "";
}

const apples ={name:'apple'};

const user1 = { name:"Janitha"};
const banana = {name:"banana"};

const fruits = new Map();

fruits.set(apples,500);
fruits.set(user1,300);
fruits.set(banana,200);



const  letters = new set();

letters.add("a");
letters.add("b");
letters.add("c");

class car {
    constructor(name,year){
        this.name = name;
        this.year = year;
    };
};

//javascript class is not a object it is a template for object

const mycar1 = new car(
    "ford",2014
);

const mycar2 = new car(
    "vagonR",2020
);

//using this template make that object mycar and mycar2






const myPromise2 = new Promise(function(myResolve,myReject){
    myResolve();
    myReject();

});

myPromise2.then(
    function(value){
// write code like expres js
    },
    function(error){
//write code like express js
    }
    
);

//Here's the promises exAmple

const myPromise = new Promise(function(myResolve,myReject){
    setTimeout(function(){
        myResolve("I love you");
    },3000);

    myPromise.then(function(value){
        document.getElementById("demo").innerHTML= value;
    });
});

const person1 = {
    firsnatme :"janihta",
    lastname :"naveen"
};

let id =Symbol('id');
person1[id]= 1405.


function sum(...args){
    let sum =0;
    for (let arg of args) sum += arg;
    return sum;
}

let x = sum(4,6,9,44,2,546,1001);


