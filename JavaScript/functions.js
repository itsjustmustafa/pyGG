var isMobile = false;
console.log("Now accounting for mobile!");
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
	isMobile = true;
	$('.header-bg').toggleClass('mobilePara');
}else{
	console.log("You are on Desktop!");
}

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	console.log(wScroll);
	if (wScroll <= 200) {
		$('.logo').css({
			'transform' : 'translate(0px,'+ wScroll/2+'px) scale('+((450-wScroll)/450)+','+((450-wScroll)/450)+')',
			
		});
	}else if (wScroll > 200){
		$('.logo').css({
			'transform' : 'translate(0px, 100px) scale('+(250/450)+' , '+(250/450)+')',
			
		});

	}

	if (isMobile) {
		$('.header-bg').css({
			'transform' : 'translate(0px, '+ wScroll/1 +'px)',
		});
	}

});
