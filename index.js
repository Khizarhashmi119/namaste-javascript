// var x = 10;

// console.log(x);
// var d = addTwoNumber();
// console.log(d);

// function addTwoNumber() {
//   var a = 20;
//   var b = 20;
//   var c = a + b;
//   return c;
// }

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

// var z = 120;
// a();
// b();

// function a() {
//   var x = 20;
//   console.log("Function a()");
// }

// function b() {
//   var x = 10;
//   var y = 31;
//   console.log("Function b()");
//   c();

//   function c() {
//     var x = 30;
//     console.log(y);
//     console.log(z);
//     console.log("Function c()");
//     d();

//     function d() {
//       console.log(x);
//       console.log(y);
//       console.log(z);
//       console.log("Function d()");
//     }
//   }
// }

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

// console.log(a);
// var a = 10;

// b = 10; Error 🤯
// console.log(b); Error 🤯
// let b;
// b = 30;
// console.log(b);

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

// for (var i = 1; i <= 3; i++) {
//   (function (i) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   })(i);
// }

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

// async function getCountryName(code) {
//   async function fetchCountries(page) {
//     const url = `https://jsonmock.hackerrank.com/api/countries?page=${page}`;

//     const res = await fetch(url, {
//       method: "GET",
//     });

//     const data = await res.json();
//     return data.data;
//   }

//   let page = 1;

//   while (true) {
//     const countries = await fetchCountries(page);

//     for (const country of countries) {
//       if (country.alpha2Code === code) {
//         return country.name;
//       }
//     }

//     page++;
//   }
// }

// getCountryName("AR").then((countryName) => console.log(countryName));

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

// Call function only one time.
// function outer() {
//   count = 0;

//   return function () {
//     if (count === 0) {
//       console.log("Inner function");
//     }

//     count++;
//   };
// }

// const innerFunction = outer();

// innerFunction();
// innerFunction();
// innerFunction();

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

// Tracking using XHR
// async function main() {
//   const blob = new Blob([new Uint8Array(10 * 1024 * 1024)]); // any Blob, including a File

//   const xhr = new XMLHttpRequest();

//   return new Promise((resolve, reject) => {
//     xhr.upload.addEventListener("progress", (event) => {
//       if (event.lengthComputable) {
//         console.log("upload progress:", event.loaded / event.total);
//       }
//     });

//     xhr.addEventListener("progress", (event) => {
//       if (event.lengthComputable) {
//         console.log("download progress:", event.loaded / event.total);
//       }
//     });

//     // xhr.addEventListener("loadend", () => {
//     //   if (xhr.status === 200) {
//     //     if (xhr.responseType === "text" || xhr.responseType === "json") {
//     //       resolve(xhr.responseType);
//     //     } else {
//     //       resolve(xhr.response);
//     //     }
//     //   } else reject(xhr.response);
//     // });

//     xhr.addEventListener("load", () => {
//       if (xhr.responseType === "text" || xhr.responseType === "json") {
//         resolve(xhr.responseText);
//       } else {
//         resolve(xhr.response);
//       }
//     });

//     xhr.addEventListener("error", () => {
//       reject(xhr.response);
//     });

//     xhr.open("PUT", "https://httpbin.org/put", true);
//     xhr.setRequestHeader("Content-Type", "application/octet-stream");
//     xhr.send(blob);
//   });
// }

// main().then(console.log).catch(console.error);

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

// const radii = [2, 34, 54, 6];

// const areaOfCircle = (radius) => Math.PI * radius * radius;
// const circumferenceOfCircle = (radius) => 2 * Math.PI * radius;

// const calculate = (radii, callback) => {
//   const results = [];
//   radii.forEach((radius) => results.push(callback(radius)));
//   return results;
// };

// console.log(calculate(radii, areaOfCircle));
// console.log(calculate(radii, circumferenceOfCircle));

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

// const obj1 = {
//   name: "John Doe",
//   gender: "M",
//   getIntro: function () {
//     return `Name: ${this.name} Gender: ${this.gender}`;
//   },
// };

// const obj2 = {
//   name: "Jane Doe",
// };

// Never do this
// obj2.__proto__ = obj1;

// Object.prototype = { hello: "world" }; This won't work
// Object.prototype.hello = "world"; This will work

// console.log(obj1);
// console.log(obj2);

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

// const titleUsingGetElementByClassName =
//   document.getElementsByClassName("title");
// const titleUsingQuerySelector = document.querySelectorAll(".title");

// console.log({
//   titleUsingGetElementByClassName,
//   titleUsingQuerySelector,
//   titleUsingGetElementByClassNameArray: Array(titleUsingGetElementByClassName),
//   titleUsingQuerySelector: Array(titleUsingQuerySelector),
// });

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

// console.log(0123);

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

// let x = 10;

// function fun() {
//   console.log(x);
//   let x = 20;
// }

// fun();

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

// foo();
// var foo = 10;
// foo();

// function foo() {
//   console.log("Foo is calling.");
// }

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

// function abc() {
//   console.log("Hi");
// }

// const value = new abc();
// console.log(value);

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

// const user = {
//   "user-name": "John Doe",
//   age: 26,
// };

// const { "user-name": username, age } = user;

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

// const promise = new Promise(function (resolve, reject) {
//   console.log("Before timeout.");

//   setTimeout(() => {
//     function randomIntFromInterval(min, max) {
//       return Math.floor(Math.random() * (max - min + 1) + min);
//     }

//     const randomNumber = randomIntFromInterval(1, 10);

//     if (randomNumber > 5) {
//       console.log("Resolved.");
//       resolve("resolved data");
//     } else {
//       console.log("Rejected.");
//       reject("rejected data");
//     }
//   }, 3000);

//   console.log("After timeout.");
// });

// console.log({ promise });

// promise
//   .then(() => {
//     console.log({ promise });
//   })
//   .then(() => {
//     console.log("Hello");
//   })
//   .then(() => {
//     console.log("World");
//   })
//   .catch(() => {
//     console.log({ promise });
//   });

// Definition :- Promise is a type of object which fills with data after sometime in future when promise state become fulfilled.
// Promise object is immutable
// Promise states 👇
// pending, fulfilled, rejected

// const githubUrl = "https://api.github.com/users/khizarhashmi119";
// const fetchPromise = fetch(githubUrl);
// console.log(fetchPromise);

// fetchPromise
//   .then((value) => {
//     console.log(fetchPromise);
//     console.log({ value });

//     // return value.arrayBuffer();
//     // return value.blob();
//     // return value.body;

//     if (!value.ok) {
//       return Promise.reject(value.status);
//       // return new Promise((_, reject) => reject(value.status));
//     }

//     return value.json();
//   })
//   .then((value) => {
//     console.log({ value });
//   })
//   .catch((reason) => {
//     console.log({ reason });
//   });

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
// Event capturing, event bubbling and event delegation

// const helloworldContainer = document.querySelector(".hello-world");
// const helloContainer = document.querySelector(".hello");
// const worldContainer = document.querySelector(".world");

// HTML content 👇
// console.log(helloworldContainer.innerHTML);
// Text content on browser screen and this content is also affect by CSS 👇
// console.log(helloworldContainer.innerText);
// Text content in HTML file with every white space and new line 👇
// console.log(helloworldContainer.textContent);

// helloworldContainer.addEventListener(
//   "click",
//   function (event) {
//     console.log("hello-world");
//     console.log("target", event.target);
//     console.log("currentTarget", event.currentTarget);
//   },
//   {
//     capture: false,
//   }
// );

// helloContainer.addEventListener("click", function (event) {
//   console.log("hello");
//   console.log("target", event.target);
//   console.log("currentTarget", event.currentTarget);
// });

// worldContainer.addEventListener("click", function (event) {
//   console.log("world");
//   console.log("target", event.target);
//   console.log("currentTarget", event.currentTarget);
// });

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

// async function getData() {
//   const response = Promise.resolve({
//     data: ["john_doe_123"],
//   });

//   return response;
// }

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
// Error

// console.log(x)
// x = 10;

// function hi() {
//   console.log(x);
//   x = 10;
// }

// hi();

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

// console.log(a);
// console.log(b);
// var a = (b = 10);

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
// call, apply and bind

// var name = "John";

// var person = {
//   name: "Jane",
// };

// function sayHi(message) {
//   console.log("Hi", this.name, message);
// }

// sayHi.apply(person, ["This is message."]);
// sayHi.call(person, "This is message.");

// // const anotherSayHi = sayHi.bind(person, "This is message");
// const anotherSayHi = sayHi.bind(person);
// anotherSayHi("This is another message");

// console.log(sayHi.length);
// console.log(sayHi.name);

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
// Some Object methods

// const user = {
//   name: "John Doe",
//   age: 26,
//   gender: "male",
//   address: {
//     house: 537,
//     street: "6A",
//     city: "Delhi",
//   },
// };

// const targetUser = {};

// Object.assign(targetUser, user);

// user.name = "Jane Doe";
// user.address.street = "7";
// user.address = "537, 6A, Delhi";

// console.log({ user, targetUser });

// Object.defineProperty(user, "name", {
//   writable: false,
// });

// Object.defineProperties(user, {
//   name: {
//     writable: false,
//   },
// });

// user.name = "Hello World";

// console.log({ user });

// console.log(Object.getOwnPropertyDescriptors(user));
// console.log(Object.getOwnPropertyDescriptor(user, "name"));
// console.log(Object.getOwnPropertyNames(user)); //  This also includes Symbol key

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
// Debounce function

function debounce(func, time) {
  let timeout = null;

  return (...args) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      func(...args);
    }, time);
  };
}

// function greet(message = "this is default message.") {
//   console.log("Hello", message);
// }

// const debouncedGreet = debounce(greet, 5000);
// debouncedGreet();
// debouncedGreet();

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
// Rate Limiter

function rateLimiter(func, time) {
  let isCalled = false;

  return (...args) => {
    if (!isCalled) {
      func(...args);
      isCalled = true;

      setTimeout(() => {
        isCalled = false;
      }, time);
    }
  };
}

// const rateLimitedGreet = rateLimiter(greet, 5000);
// rateLimitedGreet();
// rateLimitedGreet();

const handleChangeInput = (value) => {
  console.log({ value });
};

const debouncedHandleChangeInput = debounce(handleChangeInput, 1000);
const rateLimitedHandleChangeInput = rateLimiter(handleChangeInput, 5000);

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
// Polyfill of map and bind

// Array.prototype.myMap = function (callback) {
//   for (let index = 0; index < this.length; index++) {
//     callback(this[index], index, this);
//   }
// };

// [1, 2, 3].myMap((value, index, array) => {
//   console.log({ value, index, array });
// });

// Function.prototype.myBind = function (obj, ...args1) {
//   const func = this;

//   return function (...args2) {
//     func.call(obj, ...(args1.length ? args1 : args2));
//   };
// };

// greet.myBind({}, "bye")("hi");

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
// Deep copy

// function deepCopy(value) {
//   return JSON.parse(JSON.stringify(value));
// }

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
// Call by value and call by reference
let myName = "Mohd. Khizar Hashmi";
let myAge = new Number(26);

let person = {
  name: "Jane Doe",
  age: 26,
};

function func1(name, age, person) {
  name = "John Doe";
  age = 27;
  person.name = "Hello World";
  console.log({ name, age, person });

  return [name, age, person];
}

console.log(func1(myName, myAge, person));
console.log({ myName, myAge, person });

console.log({
  number1: 10,
  number2: Number(10),
  number3: new Number(10),
});

console.log({
  string1: "10",
  string2: String("10"),
  string3: new String(10),
});

console.log({
  "typeof number1": typeof 10,
  "typeof number2": typeof Number(10),
  "typeof number3": typeof new Number(10),
});

class Person {}

console.log(typeof Person);
