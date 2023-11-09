const myCarouselElement = document.querySelector('#carouselExampleDark')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})

const myModal=document.querySelector("#exampleModal")
//MODAL CODE

window.addEventListener("load",()=>{
  myModal.show()

})