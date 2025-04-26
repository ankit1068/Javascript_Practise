// const elem1 = document.querySelector("#elem1");
// const img  = document.querySelector(".img")

// elem1.addEventListener("mousemove",function(dets){
//     console.log(dets)
//   img.style.left= dets.x+"px";
//   img.style.top= dets.y+"px"
// })

// elem1.addEventListener("mouseenter", function(dets){
//     img.style.opacity = 1
// })

// elem1.addEventListener("mouseleave", function(dets){
//     img.style.opacity = 0 
// })


const elem = document.querySelectorAll(".elem")


elem.forEach(function(val){
    console.log(val.childNodes[3])
    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity = 1 ; 
    })

    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity = 0 ; 
    })

    val.addEventListener("mousemove",function(dets){
        val.childNodes[3].style.left = dets.x + "px"; 
        // val.childNodes[3].style.top = dets.y + "px"; 
    })

});