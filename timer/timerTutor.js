// {
//   console.log("First");

// setTimeout(() => {
//   console.log("Second");
// }, 0);

// console.log("Third");
// }


// {
//   let i = 0;
//   setInterval(() => {
//     while (i < 10) {
//       i++;
//       console.log("tick: ", i);
//     }
//   }, 1000);
// }


// {
//   let i = 0;
//   setInterval(() => {
//     i++;
//     timer.innerText = i;
//   }, 1000);
// }


// {
//   const id = setInterval(() => {
//     console.log("tick");
//   }, 1000);

//   console.log(id);
// }


// {
//   const id = setInterval(() => {
//     console.log("tick");
//   }, 1000);

//   setTimeout(() => {
//     clearInterval(id);
//   }, 5000)
// }


function printStrSomeTimes(str, n) {
  let count = 0;

  const id = setInterval(() => {
    console.log(str);

    count++;

    if (count >= n) {
      clearInterval(id);
    }
  }, 1000);
}

printStrSomeTimes("stretch", 5);
