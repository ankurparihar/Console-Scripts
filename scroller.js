// initializing variables
var pix = 1;					// pixals to move
var time = 50;					// in milliseconds
var scroll_Y = window.scrollY;	// initial scroll index
window.scrollBy(0,1);
function scrollPage(){
	scroll_Y = window.scrollY;
	window.scrollBy(0,pix);
	// if(window.scrollY == 0 || window.scrollY == document.body.offsetHeight - window.innerHeight){
		if(window.scrollY == scroll_Y){
			console.log("reverting...");
		revert();
	}
}
function revert(){
	if(pix === 0){
		console.log("pix is 0.\nChange it first.");
	}
	else if(pix > 0){
		time2 = (window.scrollY)*time/pix;
	}
	else{
		time2 = -(document.body.offsetHeight - window.innerHeight - window.scrollY)*time/pix;
	}
	pix = -pix;
}
// scrollPage();
setInterval(scrollPage,time);