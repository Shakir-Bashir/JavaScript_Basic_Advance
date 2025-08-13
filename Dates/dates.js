'use strict'

// create a date
 const now = new Date()
console.log(now)

console.log(new Date('Aug 02 2020 18:05:40'))
console.log(new Date('December 24, 2025'))

// working with dates
const future = new Date(2037,10,19,15,23)
console.log(future)
console.log(future.getFullYear())
console.log(future.getMonth())// month is zero based so we should keep that thing in the mind
console.log(future.toISOString())
console.log(future.getTime())

console.log(Date.now())


// this is easy and simply way to formate dates
//we can also customize this like what we want
//we can also set the region based on the users settings 

const locale = navigator.language;

const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekDay: 'long'
};
const time = new Intl.DateTimeFormat(locale, options).format(now)


const ingridents = ['olive', 'spinach']
const pizzaTimer = setTimeout((ing1, ing2) => {
    console.log(`Here is your pizza with ${ing1} and ${ing2}`)
}, 2000, ...ingridents
);
console.log('waiting...')

if (ingridents.includes('spinach')) clearTimeout(pizzaTimer)

    /*  what  this code does here is that we have a setTimeout fun that recives two paramaters and with these we created a string and that setTimeout fun will not run immediately but it will run after 2 seconds as we mentioned there & also in the if statement we are checking if the ingridents include spinach then the settimeout fun will not run becoz we cleared it with the clearTimeout function*/