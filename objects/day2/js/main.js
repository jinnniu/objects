let mouseCursor = document.querySelector(".material img");

window.addEventListener('mousemove', cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}


//button
$(function(){
    $("#back img:gt(0)").hide();
    
    $("#next").click(function(){
        $("#back img:first").fadeOut().next().fadeIn().end().appendTo("#back");
    })

    $("#prev").click(function(){
        $("#back img:last").prependTo("#back").fadeIn().next().fadeOut()
    })
})