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

    $(".child").hide();
    $(".image-description").hide();

    clicked = false;

    $(".dot").hover(
      function(){
        $(this).fadeTo(1, 1);
        clicked = false;
      },
      function(){
        if (clicked == false){
          $(this).fadeTo(1, 0);
        }
      }
    );

    $(".dot").click(function(){
      $(".dot").fadeTo(1, 0);
      $(this).fadeTo(1, 1);
      clicked = true;
    });

    $("#num1").hover(
      function(){
        $("#home").show(100);
        $("#home-desc").show(100);
      },
      function(){
        $("#home").hide(100);
        $("#home-desc").hide(100);
    });

    $("#num2").hover(
      function(){
        $("#dartmouth").show(100);
        $("#dartmouth-desc").show(100);
      },
      function(){
        $("#dartmouth").hide(100);
        $("#dartmouth-desc").hide(100);
    });

    $("#num3").hover(
      function(){
        $("#north-carolina").show(100);
        $("#nc-desc").show(100);
      },
      function(){
        $("#north-carolina").hide(100);
        $("#nc-desc").hide(100);
    });

    $("#num4").hover(
      function(){
        $("#acadia").show(100);
        $("#acadia-desc").show(100);
      },
      function(){
        $("#acadia").hide(100);
        $("#acadia-desc").hide(100);
    });

    $("#num5").hover(
      function(){
        $("#moosilauke").show(100);
        $("#moosilauke-desc").show(100);
      },
      function(){
        $("#moosilauke").hide(100);
        $("#moosilauke-desc").hide(100);
    });

    $("#num6").hover(
      function(){
        $("#pickledish").show(100);
        $("#pickledish-desc").show(100);
      },
      function(){
        $("#pickledish").hide(100);
        $("#pickledish-desc").hide(100);
    });

});
