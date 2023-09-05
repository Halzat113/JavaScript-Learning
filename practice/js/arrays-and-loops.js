const myArray = [10,20,30];
console.log(myArray);

console.log(myArray[0]);
myArray[0] = 99;
console.log(myArray);

myArray.push(100);
console.log(myArray);

myArray.splice(0, 1);
console.log(myArray);


let i = 1;

while (i <= 5){
    console.log(i);
    i++;
}

for (let j = 0; j < 10; j++) {
    console.log(j);
}