let mouseCursor = document.querySelector(".key img");

window.addEventListener('mousemove', cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}
