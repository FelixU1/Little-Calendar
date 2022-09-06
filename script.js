/**
 * Here I creat 4 consts with each targeting different elements
 */
const nameOfMonthItem = document.getElementById('months-name')
const nameOfDayItem = document.getElementById('Day-name')
const dayNumberItem = document.getElementById('day-number')
const yearItem = document.getElementById('year')

/**
 * here I added data from my system using 'Date function'
 * I got the date data of my computer using 'new Date()'
 */
const date = new Date();
const month = date.getMonth()
nameOfMonthItem.innerText = date.toLocaleString('en', {month: 'long'})
nameOfDayItem.innerText = date.toLocaleString('en', {weekday: 'long'})
dayNumberItem.innerText = date.getDate()
yearItem.innerText = date.getFullYear()

