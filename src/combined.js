// Responsive images compliant with vertical rhythm
// *********
// - Check img height
// - Check screen width
// - Compare screen width to break points
// - Get line-height (LH) & breakpoint
// - Check i x LH > img height  -- if NO -> iHeight = i x LH
// 								-- if YES -> img height = iHeight

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

	var div = Math.floor(imgOriginalHeight/lineHeight);
	var imgNewHeight = lineHeight * div;

	this.css("height", imgNewHeight);
};