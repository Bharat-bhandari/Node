// // -----------Create Promise--------------

// const promiseOne = new Promise((resolve, reject) => {
//   // Do an async Task
//   // DB calls, cryptography, network Call

//   setTimeout(() => {
//     console.log("Aysnc Task is Complete");
//     resolve(); // resolve ko call krne se .then se connect hoga
//   }, 1000);
// });

// // ------------Consume Promise----------------

// //resolve ka connection .then() ke saath hai

// promiseOne.then(() => {
//   console.log("Promise consumed");
// });

// // *******************************************************************************************************************

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Aysnc Task 2");
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log("promise 2 resolved");
// });

// // *******************************************************************************************************************

// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ userName: "Bharat", age: 23 });
//   }, 1000);
// });

// promiseThree.then((user) => {
//   console.log(user);
// });

// // *******************************************************************************************************************

// const promiseFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ userName: "Sandeep", password: "12" });
//     } else {
//       reject("Error: Something Went wrong");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.userName;
//   })
//   .then((name) => {
//     console.log(name);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("The Promise is either resolve aur rejected");
//   });

// // *******************************************************************************************************************

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ userName: "Vivek", password: "123" });
//     } else {
//       reject("Error: Js Went wrong");
//     }
//   }, 1000);
// });

// const consumePromiseFive = async () => {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// };

// consumePromiseFive();

// // *******************************************************************************************************************

// // Just consuming promise as fetch is a promise(matlab ya to data dega ya nhi)

// const getAllUsers = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users"); //fetch hai netwprk request hai time lagega
//     console.log(typeof response);
//     const data = await response.json(); // this also takes time
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getAllUsers();

// // *******************************************************************************************************************

// const promiseUserData = fetch("https://jsonplaceholder.typicode.com/users");

// promiseUserData
//   .then((data) => {
//     return data.json();
//   })
//   .then((convertedData) => {
//     console.log(convertedData);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finallly");
//   });

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ userName: "Sandeep", password: "12" });
    } else {
      reject("Error: Something Went wrong");
    }
  }, 1000);
});

const getSandeep = async () => {
  try {
    const data = await promiseFour;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getSandeep();
