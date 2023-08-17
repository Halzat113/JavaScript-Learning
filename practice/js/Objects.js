const product = {
    name: 'socks',
    price: 1090
};

console.log(product);
console.log(product.name);
console.log(product.price);

product.name = 'cotton socks';
console.log(product.name);

product.newProperty = true;
console.log(product);

delete product.newProperty;
console.log(product);

const product2 = {
    name: 'shirt',
    'delivery-time': '1 day',
    rating:{
        stars: 4.5,
        count: 87
    },
    fun: function function1(){
        console.log('function inside object')
    }
};
console.log(product2);
console.log(product2.name); //default
console.log(product2['name']); //best way
console.log(product2.rating.stars);
product2.fun();

console.log(JSON.stringify(product2));
console.log('======================');
console.log(JSON.parse(JSON.stringify(product2)));
console.log("=============Auto Boxing===============");
console.log('hello'.length);
console.log('hello'.toUpperCase());

const obj1 = {
    msg: 'hello'
};
const obj2 = obj1;// obj2 makes the copy of obj's reference

obj1.msg = 'Good job!';
console.log(obj1);

const obj3 = {
    msg: 'Good job!'
};
console.log(obj3 === obj1); //Nope
console.log(obj2 === obj1);

//destructuring
const obj4 = {
    msg: 'Good job!',
    price: 799
};
//const msg = obj4.msg;
const {msg,price} = obj4;
console.log(msg);
console.log(price);

//shorthand property
const obj5 = {
    //msg: msg
    msg,
    // method: function function1(){
    //     console.log('method')
    // }
    method(){
        console.log('method')
    }
}
console.log(obj5);
obj5.method();