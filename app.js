const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
//  const photos = ['caroline1.jpeg', 'caroline2.jpeg','caroline3.jpeg','carolline4.jpeg','caroline5.jpeg','caroline6.jpeg','caroline7.jpeg'];
 const photos = ['img/caroline1.jpeg', 'img/caroline2.jpeg','img/caroline3.jpeg','img/carolline4.jpeg','img/caroline5.jpeg','img/caroline6.jpeg','imng/caroline7.jpeg'];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
const image = document.querySelector('.image')
const stop = setInterval(changePhotoe, 1000)
document.querySelector('.btn1').addEventListener('click',()=>{
  console.log(' please stop');
  
  clearInterval(stop, 4000)
} )

document.querySelector('.btn2').addEventListener('click',()=>{
  console.log(' please restart');
  alert('refresh  the browser for slide show to restart')

} )

function changePhotoe(){

    image.src =`${photos[Math.floor(Math.random()*6)]}`
}

console.log(giveaway);
console.log(deadline);
console.log(items);

let tempDate = new Date();

let tempYear = tempDate.getFullYear();
let temMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()
//months are zero index base
const futureDate = new Date(2021, 06,1,0,0,0)

const year = futureDate.getFullYear()
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let  month = futureDate.getMonth()
 month = months[month];
const seconds = futureDate.getSeconds()
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `Caroline's Birthday  falls on ${weekday} ${date} , ${month} ${year} ${hours} ${minutes}:${seconds}`;
// future tim in ms

const futureTime = futureDate.getTime();
console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  const oneDay = 24 * 3600 * 1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;
  //calculate all values
 
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);

  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  
  //set values array
  const values = [days, hours, minutes, seconds];

function format(item) {
  if (item < 10) {
    return (item = `0${item}`);
  }
  return item;
}


  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
    
  });
}

// if(t<0) {
//     clearInterval(countdown)
//     deadline.innerHTML =' <h4 class="expired> this birthday is oer </h4> '
// }
const countdown =setInterval( getRemainingTime, 1000)

// set values array

getRemainingTime();
