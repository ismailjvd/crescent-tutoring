$(document).ready(function() {

  var w_width = $(window).width();
  var w_height = $(window).height();
  positionImages(w_width, w_height);

  $(window).on('resize', function() {
    var w_width = $(window).width();
    var w_height = $(window).height();
    positionImages(w_width, w_height);
  });

  function positionImages(w, h) {
    if (w >= 1364) {
      if (h >= 600) {
        var h_offset = 940 - h;
      } else {
        var h_offset = 940 - 600;
      }
      var w_offset = 2*(h_offset / 3) + w - 1120;
      var width_string = w_offset.toString(10) + "px 0px";
      $("#content-section-img-1").css("background-position", width_string);
      $("#content-section-img-3").css("background-position", width_string);
    }
    else {
      $("#content-section-img-1").css("background-position", "50% 50%");
      $("#content-section-img-3").css("background-position", "50% 50%");
    }
  }

});
