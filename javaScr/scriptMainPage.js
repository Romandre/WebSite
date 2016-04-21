
$(document).ready(function(){
    	
    //******* Main Page *******//
    
    $("#c1").click(function (e){
        $('html, body').animate({
                scrollTop: $(".c1").offset().top
        }, 300);
        e.preventDefault();
    });
    
    $("#c2").click(function (e){
        $('html, body').animate({
            scrollTop: $(".c2").offset().top
        }, 300);
        e.preventDefault();
    });

    $("#c3").click(function (e){
        $('html, body').animate({
            scrollTop: $(".c3").offset().top
        }, 300);
        e.preventDefault();
    });
            
    $("#c4").click(function (e){
        $('html, body').animate({
            scrollTop: $(".c4").offset().top
        }, 300);
        e.preventDefault();
    });
            
    $("#c5").click(function (e){
        $('html, body').animate({
            scrollTop: $(".c5").offset().top
        }, 300);
        e.preventDefault();
    });
            
     //Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 700) {
			$('#scrollToTop').fadeIn(800);
                        $('#frstScreen').css('display', 'none').fadeOut();
		} else {
			$('#scrollToTop').fadeOut().css('display', 'none');
                        $('#frstScreen').css('display', 'block').fadeIn(800);
		}
	});
	
	//Click event to scroll to top
	$('#scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0}, 1000);
		return false;
	});    
          
    
        //Navigation menu on mobile devices        
        var $menuLeft = $('.pushmenu-left');
        var $nav_list = $('#nav_list');

        $nav_list.click(function() {
            $(this).toggleClass('active');
            $('.pushmenu-push').toggleClass('pushmenu-push-toright');
            $menuLeft.toggleClass('pushmenu-open');
        });
	
});


