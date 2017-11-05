function mOver(obj) {
  obj.style.color = "white";
}

function mOut(obj) {
  obj.style.color = "black";
}

$(document).ready(function() {
    $("#about-me-button").click(function(){
        $('html, body').animate({
            scrollTop: $("#about-me").offset().top},
            'slow');
    })

    $("#adventures-button").click(function(){
        $('html, body').animate({
            scrollTop: $("#adventures").offset().top},
            'slow');
    })

    $("#bookshelf-button").click(function(){
        $('html, body').animate({
            scrollTop: $("#bookshelf").offset().top},
            'slow');
    })
});
