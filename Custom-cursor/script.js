var main = document.querySelector("#main");
var corsor = document.querySelector("#cursor");


main.addEventListener("mousemove",function(dets){
    corsor.style.left =dets.x +"px";
    corsor.style.top =dets.y +"px";


})