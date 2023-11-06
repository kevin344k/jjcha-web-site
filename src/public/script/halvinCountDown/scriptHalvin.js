//grab a current date
let dateNow=new Date()
//grab a date halvin
let dateHalvinAprox=new Date(Date.UTC(2024,3,24,9,13,42))
console.log(dateHalvinAprox)
let diff=dateHalvinAprox.getTime()/1000-dateNow.getTime()/1000
//in the page-> https://www.bitcoinblockhalf.com/ be setted the second fron now
let clock
console.log(dateHalvinAprox)

$(document).ready(function(){
  
    clock=$('.clock').FlipClock(diff,{
        clockFace: 'DailyCounter',
        autoStart:true,
        countdown:true
        }
)})

