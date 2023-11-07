//grab a current date
let dateNow=new Date()
//grab a date halvin
let dateHalvinAprox=new Date(Date.UTC(2024,3,24,9,13,42))
console.log(dateHalvinAprox)
let diff=dateHalvinAprox.getTime()/1000-dateNow.getTime()/1000
//in the page-> https://www.bitcoinblockhalf.com/ be setted the second fron now
let clock
console.log(diff)



const init = async () => {
        
    const { bitcoin: { blocks } } = mempoolJS({
      hostname: 'mempool.space'
    });

    const blocksTipHeight = await blocks.getBlocksTipHeight();

   let resultHeightBlock= JSON.stringify(blocksTipHeight, undefined, 2);
   console.log(resultHeightBlock);
const blockText=document.querySelector('.text-rewards-halvin')
blockText.textContent= ` Bloque ${resultHeightBlock} de 840.000  ` 
let CurrentDate=Date.now() //fecha actual
let timeToHalvin=(840000 - resultHeightBlock)*(9.6*60)
let dateH=CurrentDate+timeToHalvin*1000
let dateHalvin=document.querySelector('.text-halvin')
dateHalvin.textContent= new Date(dateH)

console.log(timeToHalvin);
$(document).ready(function(){
  
    clock=$('.clock').FlipClock(timeToHalvin,{
        clockFace: 'DailyCounter',
        autoStart:true,
        countdown:true
        }
)})


  };








  init();






