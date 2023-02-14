// map, filter, reduce
// promise and fetch api
// weather app

// map: iterate over array and perform the action on every value
// filter : iterate over array and filter out the element
// reduce : single value


// map
// const num = [45,56,25,36,78,2,4,5,25];
// const numr = num.map((v) =>v * v);
// console.log(numr);

// const num1 = num.map((v1) =>{
//     return v1+v1;
// });
// console.log(num1);

// filter
// const value = ["india", "ierlane","finland","newzeeland","thailand"];
// const value1 = value.filter((val) => val.includes("land"));
// console.log(value1);

// const value2 = value.filter((val2) =>{
//     return val2.includes("ia");
// });
// console.log(value2);

// reduce
// const x = [10,12,13,14,15,16,17,18,19];
// const x1 = x.reduce((acc, cur) => acc+cur,1);
// console.log(x1);

// const x2 = x.reduce((acc1, cur1) =>{
//    return acc1+cur1, 1;
// });


// promise
// const makepromise = new Promise((resl, rej) =>{
//     setTimeout(() => {
//         const sub =["HTML","CSS","JAVASCCRIPT","TAILWIND"];
//         if(sub.length > 0){
//             resl("completed");
//         }else{
//             rej("incompleted");
//         }
//     }, 3000);
// });


// makepromise.then((result) =>{ console.log(result);}).catch((result) =>{console.log(result);})

// const makep = new Promise((complete, incomplete) =>{
//   const x = [1,4,5,6,7,8,9,10];
//   if(x.length >0){
//     complete("Done");
//   }else{
//     incomplete("Not Done");
//   }
// });

// makep.then((res) =>{console.log(res);}).catch((res) =>{console.log(res);})

// Fetch API

// const url = "https://api.weatherapi.com/v1/current.json?key=517887f1e16e4db6a6733244231402&q=${city}";

// fetch(url)
// .then((response) =>response.json)
// .then((data) =>console.log(data))
// .catch((error) => console.log(error));