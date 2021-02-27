/*
You will create a 'Now Playing' wall for a theatre to show movies they are showing
They will be able to update the now playing list with new movies when they want to

1. You will need arrays to store the movie titles and poster image links
2. Display each movie in the array with it's poster
  - forEach loops are very useful here, but you can still do without it
3. Create a simple input section for new movies
4. New movies should become the first element of the array
5. The last movie in the array should be removed when adding a new movie
6. Once a movie is added, the page should refresh with the new movies showing

How to get full point: Use forEach()!!!!!!!!!!!!!


GOOD LUCK 🤹‍♂️
*/


//This shortens the need to type document. blah blah blah


// 1. get value from inputs
// 2. update your arrays
// 3. create new HTML elements using JS and the arrays

//document.querySelector(".movie-container").innerHTML = `<div class="movie"><img src="${}"></div>`

// document.querySelector(".movie-container").innerHTML = `<div class="movie"><img src="${}"></div>`

// document.querySelector(".movie-container").innerHTML = `<div class="movie"><img src="${}"></div>`

// document.querySelector(".movie-container").innerHTML = `<div class="movie"><img src="${}"></div>`

// document.querySelector(".movie-container").innerHTML = `<div class="movie"><img src="${}"></div>`

// document.queryS elector(".movie-container").innerHTML = `<div class="movie"><img src="${}"></div>`



var links = ['https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/89058/93685/Joker-2019-Final-Style-steps-Poster-buy-original-movie-posters-at-starstills__62518.1572351179.jpg?c=2?imbypass=on','https://i.redd.it/zvkhv4x836031.jpg','https://cms.qz.com/wp-content/uploads/2020/09/mulan-china.jpg?quality=80&strip=all&w=1880','https://images-na.ssl-images-amazon.com/images/I/71YoSkShPBL._AC_SL1482_.jpg','https://en.artsdot.com/ADC/Vintage-ImgScreen.nsf/O/V-AC596P/$FILE/Movie_posters-japan_vintage_movie_poster_-_026_.Jpg','https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg?1384968217']
var names = ["Joker","X-men: Black Phoenix","Hua Mu Lan","Gemini man","Red Hell","Moonlight"]
var numbers =[1,2,3,4,5,6]
const displayname = document.querySelector(".movienames")
const displaylink = document.querySelector(".movie-container")



displayname.innerHTML = `<div class="movietext">${numbers[0]}  <br> ${names[0]}</div>`
displayname.innerHTML += `<div class="movietext">${numbers[1]} <br> ${names[1]}</div>`
displayname.innerHTML += `<div class="movietext">${numbers[2]} <br> ${names[2]}</div>`
displayname.innerHTML += `<div class="movietext">${numbers[3]} <br> ${names[3]}</div>`
displayname.innerHTML += `<div class="movietext">${numbers[4]} <br> ${names[4]}</div>`
displayname.innerHTML += `<div class="movietext">${numbers[5]} <br> ${names[5]}</div>`

displaylink.innerHTML = `<div class="movie"><img src="${links[0]}"></div>`
displaylink.innerHTML += `<div class="movie"><img src="${links[1]}"></div>`
displaylink.innerHTML += `<div class="movie"><img src="${links[2]}"></div>`
displaylink.innerHTML += `<div class="movie"><img src="${links[3]}"></div>`
displaylink.innerHTML += `<div class="movie"><img src="${links[4]}"></div>`
displaylink.innerHTML += `<div class="movie"><img src="${links[5]}"></div>`


function send(){
  let movieName = document.querySelector("#title").value;
  let movieLink = document.querySelector("#link").value;
  
  names.unshift(movieName)
  displayname.innerHTML = `<div class="movietext">${numbers[0]}  <br> ${names[0]}</div>`
  displayname.innerHTML += `<div class="movietext">${numbers[1]} <br> ${names[1]}</div>`
  displayname.innerHTML += `<div class="movietext">${numbers[2]} <br> ${names[2]}</div>`
  displayname.innerHTML += `<div class="movietext">${numbers[3]} <br> ${names[3]}</div>`
  displayname.innerHTML += `<div class="movietext">${numbers[4]} <br> ${names[4]}</div>`
  displayname.innerHTML += `<div class="movietext">${numbers[5]} <br> ${names[5]}</div>`
  names.pop()



  links.unshift(movieLink)
  displaylink.innerHTML = `<div class="movie"><img src="${links[0]}"></div>`
  displaylink.innerHTML += `<div class="movie"><img src="${links[1]}"></div>`
  displaylink.innerHTML += `<div class="movie"><img src="${links[2]}"></div>`
  displaylink.innerHTML += `<div class="movie"><img src="${links[3]}"></div>`
  displaylink.innerHTML += `<div class="movie"><img src="${links[4]}"></div>`
  displaylink.innerHTML += `<div class="movie"><img src="${links[5]}"></div>`
  links.pop()
}

