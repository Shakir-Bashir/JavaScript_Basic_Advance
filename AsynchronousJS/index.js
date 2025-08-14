'use strict'



// const  p = document.querySelector('.p');
// it is asynchronous code  the timer will run in the background without perventing the main code from executing  we also register a cb func that will not be executed now  but only the timer has finished running(little more details (trust issues with setTimeout))
//Callback funcs alone do not make code asynchronous0
setTimeout(function () {
    // p.textContent = `My name is shakir`
}, 5000);
// p.style.color = 'red'





// CallBack Hell

const getCountryNeighbour = function(country) {
    const request = new XMLHttpRequest();
        request.open('GET', `https://restcountries.com/v2/name/${country}`)
        request.send();


    request.addEventListener('load', function(){
    const [data] = JSON.parse(this.responseText)
    console.log(data)

    // const neighbour country
    const [neighbour] = data.borders

    if(!neighbour) return;
    // AJAX Call 2
    const request = new XMLHttpRequest();
        request.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`)
        request.send();

    request.addEventListener('load', function() {
        const data2 = JSON.parse(this.responseText)
        console.log(data2)
    })


})
}

getCountryNeighbour('china')

// Promises And fetch Api
// A container for a future value
// A container for an asynchronously delivered value

// const request = fetch('https://restcountries.com/v2/name/pakistan')
// console.log(request)

const getCountryData1 = function (country) {
    fetch(`https://restcountries.com/v2/name/${country}`).then(function(respones) {
        console.log(respones)
        return respones.json().then(function(data){
            console.log(data)
        })
    })
}

getCountryData1('germany')
/* from the fetch function we get the promise so to handle that promise we use the then method and in that then method we we use response.json which also returns a promise so we then use the then handler next time*/

// Handling rejected promises 
/* we can handle rejected promise multiple ways first way is that we shold pass second cb func to the then handler that recives the error Second way is using the .catch method we can use the same cb function  becoz the cb func will get called with the Error object that occured */

// Another method that we can use on promises is finally
/* the cb function that we will define in the finally will get always call no matter if the promise is fullfilled or rejected */

//Event Loop
console.log('start')
setTimeout(()=> console.log('0 sec timer'),0)
Promise.resolve('Resolved Promise 1').then(res => console.log(res))
console.log('end')
/* how that works is firstly the top level code will get executed and after that setTimeout and the Promise will get into the webapi now we both of them got ready at a same time but the cb fun of the setTime will be sent to the callbackqueue & and the cb func of the promise is sent to the microtask queue  and the microtask has higher prioriy than normal queue so that is the reason the settimeout's cb func will get executed at last*/

// now we can check other way also
console.log('start')
setTimeout(()=> console.log('0 sec timer'),0)
Promise.resolve('Resolved Promise 1').then(res => {
    // for(let i = 0; i <  1000; i++)
        console.log(res)
})
console.log('end')
// here it is nicely clear in that code


// Building a promise
/* The promise constructor takes exactly one argument and that is so-called (executor function)*/
const lotteryPromise = new Promise(function(resolve, rejected) {
    setTimeout(function() {
        if(Math.random() >= 0.5){
        resolve('You win')
    }else {
        rejected(new Error( 'You lost your money'))
    }
    }, 2000)
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err))