// setting time
const secondHand = document.querySelector('.second-hand');
var hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');

function setDate() {
    const now = new Date;


    const seconds = now.getSeconds();
    const secDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secDegree}deg)`;

    // const minutes= now.getMinutes();
    // const minDegree= ((minutes/60)*360) + ((seconds/60) *6)+90;
    // minuteHand.style.transform =`rotate(${minDegree}deg)`;


    // const hour= now.getHours();
    // const hourDegree= ((hour/12)*360) + ((minutes/60) *30)+90;
    // hourHand.style.transform = `rotate(${hourDegree}deg)`;
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(setDate, 1000);
setDate();

// setting date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
// console.log(today);
const date = document.querySelector('.date');
date.innerHTML= today;
