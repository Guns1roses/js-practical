// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   const totalPrice = (pricePerDroid * orderedQuantity);
//   if(pricePerDroid * orderedQuantity > customerCredits) {
//     message = "Insufficient funds!";
//   } else {
//     message = "You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left";
//   }

//   // Change code above this line
//   return message;
// }
// console.log(3000, 5, 23000);
// console.log(1000, 3, 15000);
// console.log(5000, 10, 8000);
// console.log(2000, 8, 10000);
// console.log(500, 10, 5000);

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic;
// const firstElement = courseTopic;
// const lastElement = courseTopic;

// // Change code above this line

// function checkForName(fullName, name) {
//  const result = fullName.includes(name); // Change this line
//   return result;
// }


// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//    return message.split(" ").length * pricePerWord;

//    // Change code above this line
// }

// console.log("JavaScript is in my blood", 10);
// console.log("JavaScript is in my blood", 20);
// console.log("Web-development is creative work", 40);
// console.log("Web-development is creative work", 20);







// const calculateEngravingPrice = function(message, pricePerWord) {
//     return message.split(" ").length * pricePerWord;
// };

// console.log(
//     calculateEngravingPrice(
//         "Proin sociis natoque et magnis parturient montes mus",
//         10
//     )
// ); // 80

// console.log(
//     calculateEngravingPrice(
//         "Proin sociis natoque et magnis parturient montes mus",
//         20
//     )
// ); // 160

// console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 40)); // 200

// console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 20)); // 100


// function slugify(title) {
//   // Change code below this line
    
// slug = title.toLowerCase().split(' ').join("-");

// return slug
//   // Change code above this line
// }

// console.log("Arrays for begginers");
// console.log("English for developer");
// console.log("Ten secrets of JavaScript");
// console.log("How to become a JUNIOR developer in TWO WEEKS");

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line


// // makeArray = firstArray.concat(secondArray);
// // makeArray = secondArray.slice(3, 4, 3, 2, 0);


// return makeArray.maxLength;

//     // Change code above this line
//   }

//   console.log(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
//   console.log(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
//   console.log(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
//   console.log(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
//   console.log(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);


// const calculateTotalPrice = [12, 85, 37, 4,];
//   let total = 0;
//   // Change code below this line

//     for (let i = 0; i < calculateTotalPrice.length; i += 1) {
//   total += calculateTotalPrice[i];
// }
//   // Change code above this line
// //   return total;
// console.log('Total: ', total);


// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);
// calculateTotalPrice();




// function calculateTotalPrice(order) {
//   let total = 0;
  
// for (let i = 0; i < calculateTotalPrice.length; i += 1) {
//   total += order[i];
// }
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);
// // calculateTotalPrice();

// const clients = [10, 11, 12];

// for (const client of clients) {
//   console.log(client);
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const totalPrice of calculateTotalPrice) {
//     totalPrice = order * 4;
//   }

//   // Change code above this line
//   return total;
// }



// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// const fruitsToIgnore = ['🍌', '🍋'];


// const filtered = fruits.filter((item) => !fruitsToIgnore.includes(item));
// console.log(filtered);



// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = ["Spacious apartment in the city center", 4, 2153];
// // Change code below this line
// // const keys = apartment;
// const keys = Object.keys(apartment);
// for (const value of values) {
// console.log(value);
// }


const book = {
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const values = [];
const keys = Object.keys(book);

for (const key of keys) {
  // Ключ
  console.log(key);
  // Значение свойства
  console.log(book[key]);
}



// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood='happy'
// user.hobby='javascript'
// user['premium']=false

// for (const key of Object.keys(user)) {
//     console.log(key+ ': '+ user[key]);
    
// }