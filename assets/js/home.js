$(document).ready(function() {
    let currentImage = 0;
    let NUM_IMAGES = 2;
    let user_click = 0;

    var w_width = $(window).width();
    fixImageWidth(w_width);

    $(window).on('resize', function() {
      var w_width = $(window).width();
      fixImageWidth(w_width);
      correctImageOffset();
    });

    setInterval(function() {
      if (!user_click) {
        if (currentImage != NUM_IMAGES) {
          currentImage += 1;
          correctImageOffset();
          //headingFadeIn();
        }
        else {
          currentImage = 0;
          correctImageOffset();
          user_click = 1;
        }
      }
    }, 10000);

    $(".heading-container").click(function() {
      user_click = 1;
    });

    $("#left-arrow").click(function() {
      user_click = 1;
      if (currentImage != 0) {
        currentImage -= 1;
        correctImageOffset();
      }
    });

    $("#right-arrow").click(function() {
      user_click = 1;
      if (currentImage != NUM_IMAGES) {
        currentImage += 1;
        correctImageOffset();
        //headingFadeIn();
      }
    });

    function fixImageWidth(w) {
      $(".heading-container").css("width", w);
    }

    function correctImageOffset() {
      var image_width = $(window).width();
      var offset = -1 * currentImage * image_width;
      $("#carousel-strip").css("left", offset.toString() + "px");
    }

/*
    function headingFadeIn() {
    //  $(".heading-content").css("animation-fill-mode", "forwards");
      $(".heading-content").delay(900).animate({
        opacity: 1,
        top: "50%"
      }, 1000 );
      $(".heading-button").delay(1700).animate({
        opacity: 1,
        top: "0px"
      }, 1000);
    }
*/

    $(".main-page").hover(function() {
      let this_id = "#" + $(this).attr('id');
      $(this_id + " .underline-bar").css("width", "100px");
    }, function() {
      let this_id = "#" + $(this).attr('id');
      $(this_id + " .underline-bar").css("width", "40px");
    });

});
