if (true){
    console.log('hello');
} else {
    console.log('hola');
}

//practical example

let age = Math.floor(Math.random()*30);
console.log(`Your age is `+age);
if (age >= 16){
    console.log('Allowed to drive');
}
 else if(age >= 14){
     console.log('Almost there')
}
 else {
    console.log("Not allowed to drive");
}


 /*
    falsy values:
        false   0   ''  Nan     undefined    null
  */

if (0){
    console.log('nope');
}else {
    console.log('yeah')
}


//ternary operator
console.log(age>16?'you can drive':'you canNOT drive');

const msg = 5 && 'hello';
console.log(msg);


