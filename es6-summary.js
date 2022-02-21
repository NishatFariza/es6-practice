// var number = 46;
// var number =34;//  reasign possible

let sum =34;
// let sum =45;//resign not possible
sum =54; //possible

const number =38;
// const number =38; [imposible]
// number =54; //imposible


//template-string
let firstName ='Nishat';
let lastName ='Fariza';
let massage ='How are you?'

let fullMassage = `Hi!, ${firstName}, ${lastName}, ${massage}`;
// console.log(fullMassage);

//arrow function
// one parameter 
 const oneParameter = a =>a / 5;
  
// console.log(oneParameter(30));

// two parameter 
 const twoParameter = (a, b) =>(a+2) * (b+2) ;
  
// console.log(twoParameter(30, 6));

// three parameter 
 const threeParameter = (a, b, c) =>(a * b * c) ;
  
// console.log(threeParameter(30, 6, 4));

// three parameter 
 const twoParameter2 = (a, b) =>(a+2) * (b+2) ;
  
// console.log(twoParameter2(30, 7));

//array on map
// const multiNumbers =[2, 23, 45, 65, 16, 28, 34, 89, 79, 94];
// const number1 =multiNumbers.map(a => a*5);
// console.log(number1);

//array on map odd number
const multiNumber =[2, 23, 45, 65, 16, 28, 34, 89, 79, 94];
const number2 =multiNumber.filter(a =>a % 2 !=0);
// console.log(number2);

// task--7
const inventory = [
    {name: 'apples', quantity: 2, price:500},
    {name: 'bananas', quantity: 0, price:5000},
    {name: 'cherries', quantity: 5, price:4000},
    {name: 'watch', quantity: 5, price:6000},
    {name: 'book', quantity: 5, price:5700}
  ];
  const eensive =inventory.find(a => a.price == 5000 )
  console.log(eensive);


//array disrtucting
const fish = { id: 58,
     name: 'King Hilsha', 
     price: 9000, 
     phone: '01717555555555', 
     address: 'Chandpur', 
     dress: 'silver' 
    };
//  const {phone, dress, name} =fish;
//     console.log(phone);

//chaining
const myObject ={a:3, b:4, n:5, f:6, j:9};

const {f, j} = myObject;
console.log(j);