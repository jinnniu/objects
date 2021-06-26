$(document).ready(function(){
    $("#bgmusic .music").mouseenter(function() {
        $('#bgmusic .ref').css("opacity", "1");
    });
    $('#bgmusic .ref a').mouseenter(function() {
        $('#bgmusic .ref a').css("color", "red");
    });
    $('#bgmusic .ref').mouseleave(function() {
        $('#bgmusic .ref').css("opacity", "0");
        $('#bgmusic .ref a').css("color", "white");
    });
})