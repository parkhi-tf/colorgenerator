// New color on click
$(document).click(function () {
	let newColor = getRandomColor();
	$("body").css("background", newColor);
	addNewColor(newColor);
});

// Copy color on click
$(document).on("click", "span", function () {
	var color = $(this).text();
	$("input").val(color).select();
	document.execCommand("Copy");
	showAlert(color);
});

function showAlert(text) {
	$(".alert").text("Copied " + text + " !").slideDown();
	setTimeout(function () {
		$(".alert").slideUp();
	}, 1000);
}

// Add a span for color record
function addNewColor(color) {
	$(".container").prepend("<span style='background: " + color + "'>" + color + "</span>");
}

// Generate random color
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
