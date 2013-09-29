function pageScroll(endLocation){
	anchor = endLocation;
	distanceTraveled = 0;
	currentLocation = $(window).scrollTop();
	travelDistance = endLocation - currentLocation;
	travelSpeed = Math.round(travelDistance/50);
	scrolldelay = setInterval('scroll(travelSpeed,anchor)',10);	
}

function scroll(travelSpeed,endLocation) {
		if (distanceTraveled<Math.abs(travelDistance-travelSpeed)){
    	window.scrollBy(0,travelSpeed); // horizontal and vertical scroll increments
    	distanceTraveled += Math.abs(travelSpeed);
    	//alert(distanceTraveled);
    	}else{
    		distanceTraveled=0;
    		window.scrollTo(0,endLocation);
    		clearTimeout(scrolldelay);
    	}
}
function stopScroll() {
    	clearTimeout(scrolldelay);
}

