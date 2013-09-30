function pageScroll(endLocation){
    if (endLocation == 'home'){
        anchor = $('#firststop').offset().top - 50;
    } else if (endLocation == 'about'){
        anchor = $('#secondstop').offset().top - 50;
    }else if (endLocation == 'contact'){
        anchor = $('#thirdstop').offset().top - 50;
    }else{
        return;
    }
	distanceTraveled = 0;
	currentLocation = $(window).scrollTop();
	travelDistance = anchor - currentLocation;
	travelSpeed = Math.round(travelDistance/50);
	scrolldelay = setInterval('scroll()',10);	
}

function scroll() {
		if (distanceTraveled<Math.abs(travelDistance-travelSpeed)){
    	window.scrollBy(0,travelSpeed); // horizontal and vertical scroll increments
    	distanceTraveled += Math.abs(travelSpeed);
    	//alert(distanceTraveled);
    	}else{
    		distanceTraveled=0;
    		window.scrollTo(0,anchor);
    		clearTimeout(scrolldelay);
    	}
}
function stopScroll() {
    	clearTimeout(scrolldelay);
}

