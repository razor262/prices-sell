// task 1 --------------------
/*
let a = 4

if (a === 4) {
    console.log('work')
}*/
//fetch('http://api.openweathermap.org/data/2.5/weather?q=Krasnodar,ru&appid=4ca848bb82776e391cc1309aca8f5bfd')

fetch("https://evepraisal.com/a/corax.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
  });
