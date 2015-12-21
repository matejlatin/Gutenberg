/* Toggle grid button
   ========================================================================== */

// 2. THE JAVASCRIPT WAY
var flip = 0;

function toggleGrid(){
	var body = document.getElementsByTagName("body")[0];
	var button = document.getElementById("btnToggleGrid");

	if(flip == 0){
		body.classList.add("grid");
		button.textContent = "Turn Double Grid On";
		button.classList.add("double-grid");
		flip = 1;
	} else if (flip == 1) {
		body.classList.add("grid-double");
		button.textContent = "Turn Grid Off";
		button.classList.remove("double-grid");
		button.classList.add("grid-off");
		flip = 2;
	} else if (flip == 2) {
		body.classList.remove("grid");
		body.classList.remove("grid-double");
		button.classList.remove("grid-off");
		button.textContent = "Turn Grid On";
		flip = 0;
	}
}

// 2. THE JAVASCRIPT WAY
// Construct the function
function fixImgHeight(){

	// Get all images
	var images = document.querySelectorAll('img');

	// Get line-height
	var element = document.getElementsByTagName("body")[0],
    style = window.getComputedStyle(element),
    lineHeight = parseInt(style.getPropertyValue('line-height'));

	// For each image in images get original height, calculate height rounded to baseline grid, set new height
	for (i = 0; i < images.length; ++i) {

		// Get original height
		var imgOriginalHeight = images[i].offsetHeight;

	    // Calculate new height
	    var div = Math.floor(imgOriginalHeight/lineHeight);
	    var imgNewHeight = lineHeight * div;

	    // Set new height
	    images[i].style.height = imgNewHeight + 'px';
	}
}