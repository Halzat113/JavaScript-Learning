let userName = 'Halzat';
let nameLength = userName.length;
console.log(nameLength);

let firstLetter = userName.charAt(0);
console.log(firstLetter);

console.log(userName.indexOf('a'));
console.log(userName.lastIndexOf('a'));

userName = '  Halzat  ';
userName = userName.trim();
console.log(userName);

let phoneNumber = '123-456-7890';
phoneNumber = phoneNumber.replaceAll('-','');
console.log(phoneNumber);

let fullName = 'Halzat Halik';
let lastName = fullName.slice(7);
console.log(lastName);
let firstName = fullName.slice(0,6);
console.log(firstName);