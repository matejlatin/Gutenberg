// Responsive images compliant with vertical rhythm
// *********
//
// How it works:
// - Check img height
// - Check screen width
// - Compare screen width to breakpoints
// - Get line-height (lh) for the current breakpoint
// - divide image height by line-height (div)
// - set new height for the image: lh * div

var params = [
	{
		breakpointStart: 0,  	// breakpoint to compare the screen width to (should match the breakpoint in you CSS that change the line-height)
		breakpointEnd: 600,
		lh: 23					// line height to use
	},
	{
		breakpointStart: 601,
		breakpointEnd: Infinity,
		lh: 27
	}
]

// Construct the function
$.fn.imgFixHeight = function(){
	// get image original height & screen width
	var imgOriginalHeight = this.height();
	var screenWidth = $(window).width();
	var lineHeight;

	// compare screen width to breakpoints and get the right line-height
	var breakpointsNumber = params.length;
	for (var i = 0; i < breakpointsNumber; i++){
		if (screenWidth >= params[i].breakpointStart && screenWidth <= params[i].breakpointEnd){
			var lineHeight = params[i].lh;
		};
	};

	// Calculate the new height
	var div = Math.floor(imgOriginalHeight/lineHeight);
	var imgNewHeight = lineHeight * div;

	// Apply the new height to the image
	this.css("height", imgNewHeight);
};
