
let i1 = document.querySelector('.i-1')
let i2 = document.querySelector('.i-2')
let nameSistem1 = document.querySelector('.result')
let minPrice = document.querySelector('.min-price')
let maxPrice = document.querySelector('.max-price')
let orderCount = document.querySelector('.order-count')
let image = document.querySelector('.image')

let b2 = document.querySelector('.b-2')
b2.onclick = f1 

function f1() {
  let currentSelect = i1.value
  currentSelect = currentSelect.toLowerCase()
  console.log(currentSelect)
  image.innerHTML = `<img  src="img/${currentSelect}.png">`
  i1.value = ''

  let currentSistem = i2.value
  currentSistem = currentSistem
  console.log(currentSistem)
  i2.value = ''

  if (currentSistem == 'Jita') {
    currentSistem = '0'
  }
  else if (currentSistem == 'Perimeter') {
    currentSistem = '1'
  }
  else if (currentSistem == 'Universe') {
    currentSistem = '2'
  }
  else if (currentSistem == 'Amarr') {
    currentSistem = '3'
  }
  else if (currentSistem == 'Dodixie') {
    currentSistem = '4'
  }
  else if (currentSistem == 'Hek') {
    currentSistem = '5'
  }
  else if (currentSistem == 'Rens') {
    currentSistem = '6'
  }


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
       // console.log(object[0])


      }
      if (currentSistem == '0') {
        console.log(object[0])
        nameSistem1.textContent = ' СИСТЕМА ' + object[0].market_display_name
        minPrice.textContent = ' минимальная цена ' + object[0].prices.sell.min + ' ISK'
        maxPrice.textContent = ' максимальная цена ' + object[0].prices.sell.max + ' ISK'
        orderCount.textContent = ' предложений ' + object[0].prices.sell.order_count
      }
      else if (currentSistem == '1') {
        console.log(object[1])
        nameSistem1.textContent = ' СИСТЕМА ' + object[1].market_display_name
        minPrice.textContent = ' минимальная цена ' + object[1].prices.sell.min + ' ISK'
        maxPrice.textContent = ' максимальная цена ' + object[1].prices.sell.max + ' ISK'
        orderCount.textContent = ' предложений ' + object[1].prices.sell.order_count
      }
      else if (currentSistem == '2') {
        console.log(object[2])
        nameSistem1.textContent = ' СИСТЕМА ' + object[2].market_display_name
        minPrice.textContent = ' минимальная цена ' + object[2].prices.sell.min + ' ISK'
        maxPrice.textContent = ' максимальная цена ' + object[2].prices.sell.max + ' ISK'
        orderCount.textContent = ' предложений ' + object[2].prices.sell.order_count
      }
      else if (currentSistem == '3') {
        console.log(object[3])
        nameSistem1.textContent = ' СИСТЕМА ' + object[3].market_display_name
        minPrice.textContent = ' минимальная цена ' + object[3].prices.sell.min + ' ISK'
        maxPrice.textContent = ' максимальная цена ' + object[3].prices.sell.max + ' ISK'
        orderCount.textContent = ' предложений ' + object[3].prices.sell.order_count
      }
      else if (currentSistem == '4') {
        console.log(object[4])
        nameSistem1.textContent = ' СИСТЕМА ' + object[4].market_display_name
        minPrice.textContent = ' минимальная цена ' + object[4].prices.sell.min + ' ISK'
        maxPrice.textContent = ' максимальная цена ' + object[4].prices.sell.max + ' ISK'
        orderCount.textContent = ' предложений ' + object[4].prices.sell.order_count
      }
      else if (currentSistem == '5') {
        console.log(object[5])
        nameSistem1.textContent = ' СИСТЕМА ' + object[5].market_display_name
        minPrice.textContent = ' минимальная цена ' + object[5].prices.sell.min + ' ISK'
        maxPrice.textContent = ' максимальная цена ' + object[5].prices.sell.max + ' ISK'
        orderCount.textContent = ' предложений ' + object[5].prices.sell.order_count
      }
      else if (currentSistem == '6') {
        console.log(object[6])
        nameSistem1.textContent = ' СИСТЕМА ' + object[6].market_display_name
        minPrice.textContent = ' минимальная цена ' + object[6].prices.sell.min + ' ISK'
        maxPrice.textContent = ' максимальная цена ' + object[6].prices.sell.max + ' ISK'
        orderCount.textContent = ' предложений ' + object[6].prices.sell.order_count
      }
  });
}


