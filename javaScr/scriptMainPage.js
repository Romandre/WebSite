
$(document).ready(function(){
    	
    //******* Main Page *******//
    
    $("#c1").click(function (e){
                $('html, body').animate({
                    scrollTop: $(".c1").offset().top
                }, 400);
                e.preventDefault();
            });
    
    $("#c2").click(function (e){
                $('html, body').animate({
                    scrollTop: $(".c2").offset().top
                }, 400);
                e.preventDefault();
            });

    $("#c3").click(function (e){
                $('html, body').animate({
                    scrollTop: $(".c3").offset().top
                }, 400);
                e.preventDefault();
            });
            
     $("#c4").click(function (e){
                $('html, body').animate({
                    scrollTop: $(".c4").offset().top
                }, 400);
                e.preventDefault();
            });
            
     $("#c5").click(function (e){
                $('html, body').animate({
                    scrollTop: $(".c5").offset().top
                }, 400);
                e.preventDefault();
            });
            
     //Checking of scroll from top
	$(window).scroll(function(){
		if ($(this).scrollTop() > 700) {
			$('#scrollToTop').fadeIn();
		} else {
			$('#scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('#scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0}, 500);
		return false;
	});              
        
});


