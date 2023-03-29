const myPromise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve("I have been resolved");
    }, 1000)
  } else {
    reject("I have been rejected");
  }

});

myPromise.then(value => value + '!!!!')
  .then(resolveValue => console.log(resolveValue))
  .catch(rejectValue => console.log(rejectValue))