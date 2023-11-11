const myCarouselElement = document.querySelector('#carouselExampleDark')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})

//modal 
let date=new Date().getDay()
let days=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]
console.log(days[date]);

const modalWarn = new bootstrap.Modal('#modal-warning')
const modalFriday= new bootstrap.Modal("#modal-friday")
const butModalDino=document.querySelector("#butModalDino")

if (days[date]==="Viernes") {
    window.addEventListener("load",()=>{
        modalFriday.show()


        butModalDino.addEventListener("click",()=>{
          modalFriday.hide()
        })
      
    })
} else{
    window.addEventListener("load",()=>{
        modalWarn.show()
    })
    
    
}
