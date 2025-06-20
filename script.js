var p5 = document.querySelectorAll(".ele")


p5.forEach(function(val){
    //  console.log(val.childNodes[2])   here my image childnode is at 2
    val.addEventListener("mouseenter",function(){
      val.childNodes[2].style.opacity = 1
    })
    val.addEventListener("mouseleave",function(){
        val.childNodes[2].style.opacity = 0
    })
      val.addEventListener("mousemove",function(dets){
        val.childNodes[2].style.left = dets.x+"px"
        // val.childNodes[2].style.top = dets.y+"px"
    })
})