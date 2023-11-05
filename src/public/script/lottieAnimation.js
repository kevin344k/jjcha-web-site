let animated_live=document.querySelector(".animated_live")
let ico_live=document.querySelectorAll(".ico-live")

let animation_btc=document.querySelector(".animation-btc")


bodymovin.loadAnimation({
    container:animated_live,
    path:'../assets/lottie/live-ondas.json'
})


for (let i = 0; i < ico_live.length; i++) {
    
    bodymovin.loadAnimation({
        container:ico_live[i],
        path:'../assets/lottie/live-lottie.json'
    })
}


bodymovin.loadAnimation({
    container:animation_btc,
    path:'../assets/lottie/only-btc.json'
})

