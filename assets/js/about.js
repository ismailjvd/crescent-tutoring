$(document).ready(function() {

  $(".team-image").hover(function() {
    let this_id = "#" + $(this).attr('id');
    //$(this_id + " .team-name p").css("opacity", "0");
    $(this_id + " .team-caption p").stop(true).animate({opacity: 0}, 200);
    //$(this_id + " .team-caption p").css("opacity", "0");
    $(this_id + " .team-name p").stop(true).delay(100).animate({opacity: 0}, 200);
    //$(this_id + " .team-name").css("width", "0px");
    $(this_id + " .team-caption").stop(true).delay(100).animate({width: "0px"}, 400);
    //$(this_id + " .team-caption").css("width", "0px");
    $(this_id + " .team-name").stop(true).delay(200).animate({width: "0px"}, 400);
    $(this_id + " .team-overlay-container").stop(true).delay(400).animate({
      top: "0px"
    }, 600);
  }, function() {
    let this_id = "#" + $(this).attr('id');
    $(this_id + " .team-overlay-container").stop(true).animate({
      top: "300px"
    }, 600);
    $(this_id + " .team-name").stop(true).delay(400).animate({width: "300px"}, 400);
    $(this_id + " .team-caption").stop(true).delay(500).animate({width: "276px"}, 400);
    $(this_id + " .team-name p").stop(true).delay(600).animate({opacity: 1}, 200);
    $(this_id + " .team-caption p").stop(true).delay(700).animate({opacity: 1}, 200);
    /*
    setTimeout(function() {
      $(this_id + " .team-name").css("width", "300px");
      $(this_id + " .team-caption").css("width", "276px");
      setTimeout(function() {
        $(this_id + " .team-name p").css("opacity", "1");
      $(this_id + " .team-caption p").css("opacity", "1");
      }, 250);
    }, 600);
    */
  });
});
