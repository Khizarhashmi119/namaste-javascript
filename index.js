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
//   .catch(() => {
//     console.log({ promise });
//   });

// Definition :- Promise is a type of object which fills after sometime in future when promise state become fulfilled.
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

//     // return res.arrayBuffer();
//     // return res.blob();
//     // return res.body;

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

const helloworldContainer = document.querySelector("#hello-world");
const helloContainer = document.querySelector("#hello");
const worldContainer = document.querySelector("#world");

helloworldContainer.addEventListener(
  "click",
  function (event) {
    console.log("hello-world");
    console.log("target", event.target);
    console.log("currentTarget", event.currentTarget);
  },
  {
    capture: false,
  }
);

helloContainer.addEventListener("click", function (event) {
  console.log("hello");
  console.log("target", event.target);
  console.log("currentTarget", event.currentTarget);
});

worldContainer.addEventListener("click", function (event) {
  console.log("world");
  console.log("target", event.target);
  console.log("currentTarget", event.currentTarget);
});
