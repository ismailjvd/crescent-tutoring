$(document).ready(function()  {

	// PART 1: YOUR CODE HERE
	var innerHtml = "<div class='fruit'><img src='assets/img/fruit.jpeg' /></div>";
	for (let i = 0; i < 6; i++) {
		$("#content").append(innerHtml);
	}

	innerHtml = "<div class='water'><img src='assets/img/water.jpeg' /></div>";
	for (let i = 0; i < 12; i++) {
		$("#content").append(innerHtml);
	}

	innerHtml = "<div class='bread'><img src='assets/img/bread.jpeg' /></div>";
	for (let i = 0; i < 8; i++) {
		$("#content").append(innerHtml);
	}


	$(".nav-item").click(function() {

		let buttonName = $(this).text();
		let buttonActive = $(this).hasClass("active");

		// UNCOMMENT THE SECTION BELOW FOR PART 2



		// YOUR CODE HERE - PART 2.1
		condition = !buttonActive;

		if (condition) {
			$(this).addClass("active");
			$(this).removeClass("inactive");

			// YOUR CODE HERE - PART 2.2
			$("." + buttonName).show()

		} else {
			$(this).addClass("inactive");
			$(this).removeClass("active");

			// YOUR CODE HERE - PART 2.2
			$("." + buttonName).hide()

		}


	})
})
