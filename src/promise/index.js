// promise example 1
const promise = new Promise(function (resolve, reject) {
  resolve("Hey Soul Sister");
});

// promise example 2
const cows = 15;
const countCows = new Promise(function (resolve, reject) {
  if (cows > 10) {
    resolve(`We have ${cows} cows in the farm`);
  } else {
    reject("There is not enough cows in the farm");
  }
});

countCows
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("Finally");
  });
