$(document).ready(function() {

  var scrollnow = function(e) {
    // if scrollnow()-function was triggered by an event
    if (e) {
        e.preventDefault();
        var target = this.hash;
    }
    // else it was called when page with a #hash was loaded
    else {
        var target = location.hash;
    }

    // same page scroll
    $.smoothScroll({
        offset: -20,
        scrollTarget: target,
        speed: 1500
    });
    };

    // if page has a #hash
    if (location.hash) {
        $('html, body').scrollTop(0).show();
        // smooth-scroll to hash
        scrollnow();
    }

    // for each <a>-element that contains a "/" and a "#"
    $('a[href*="/"][href*="#"]').each(function(){
        // if the pathname of the href references the same page
        if (this.pathname.replace(/^\//,'') == location.pathname.replace(/^\//,'') && this.hostname == location.hostname) {
            // only keep the hash, i.e. do not keep the pathname
            $(this).attr("href", this.hash);
        }
    });

    // select all href-elements that start with #
    // including the ones that were stripped by their pathname just above
    $('a[href^="#"]:not([href="#"])').click(scrollnow);

  $(window).scroll(function() {
    var pos = Math.max( $("html").scrollTop(), $("body").scrollTop() )
    if (pos > 88) {
      $("#fixed-navbar").css({"visibility": "visible", "opacity": 1, "top": "0px"});
    }
    else {
      $("#fixed-navbar").css({"visibility": "hidden", "opacity": 0, "top": "-36px"});
    }
  });
});
