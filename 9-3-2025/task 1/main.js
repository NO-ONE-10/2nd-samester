function task() {

  let arr = [
  
  ]

  let name = prompt("enter your name");
  let age = prompt("enter your age");
  let city = prompt("enter your city");
  let country = prompt("enter your country");

  arr.push(name,age,city,country)

  // console.log(arr.name);
  // console.log(arr.age);
  // console.log(arr.city);
  // console.log(arr.country);

  console.log(arr);

  arr.pop(country);

  console.log(arr);

}

task();


