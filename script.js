// task 1 --------------------
/*
let a = 4

if (a === 4) {
    console.log('work')
}*/
//fetch('http://api.openweathermap.org/data/2.5/weather?q=Krasnodar,ru&appid=4ca848bb82776e391cc1309aca8f5bfd')
let i1 = document.querySelector('.i-1')

let b1 = document.querySelector('.b-1')
b1.onclick = f1

function f1() {
  let currentSelect = i1.value
  console.log(currentSelect)
  i1.value = ''

  fetch(`https://evepraisal.com/item/${currentSelect}.json`)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    let element
    console.log(data.summaries)
    let object = data.summaries
    console.log(object)
    for (const key in object) {
        
        element = object[key]

        console.log(element)
        console.log(element.market_display_name)
    }
   
 
    /*
    console.log(' Покупка ' + data.totals.buy)
    console.log(' Продажа ' + data.totals.sell)
    */
  });
}


