 


$(document).ready(function() {

	$(".button-collapse").sideNav();
	// $('.carousel').carousel();
	$('.carousel.carousel-slider').carousel({full_width: true});

	var carousel_interval = 8000;
	 setInterval(function(){
     		$('.carousel').carousel('next');
      }, carousel_interval);

if($(window).width()>768){

	$('.step-1')
	.mouseover(function(){
		$('.quotation').css('display', 'block');
	})
	.mouseout(function() {
	    $('.quotation').css('display', 'none');
	 });

	var $hero_elements_right = $('.actor-right');
  var $hero_elements_left = $('.actor-left');
  console.log('Total right cards : ' + $hero_elements_right.length)
  console.log('Total left cards : ' + $hero_elements_left.length)
  var $window = $(window);
  
  $window.trigger('scroll');
  
  $window.on('scroll resize', function(){
    
		    var window_height = $window.height();
		    var window_top_position = $window.scrollTop();
		    var window_bottom_position = (window_top_position + window_height);
		  
		  $.each($hero_elements_right, function() {
		    var $element = $(this);
		    var element_height = $element.outerHeight();
		    var element_top_position = $element.offset().top;
		    var element_bottom_position = (element_top_position + element_height);

		     if (element_top_position <= window_bottom_position) {
		      $element.addClass('fadeInRight animated');
		    } else {
		      $element.removeClass('fadeInRight animated');
		    }
		  }); // $.each($animation_elements, function()
		  
		  $.each($hero_elements_left, function() {
		    var $element = $(this);
		    var element_height = $element.outerHeight();
		    var element_top_position = $element.offset().top;
		    var element_bottom_position = (element_top_position + element_height);

		     if (element_top_position <= window_bottom_position) {
		     
		      $element.addClass('fadeInLeft animated');
		    } else {
		      $element.removeClass('fadeInLeft animated');
		    }
		  }); // end of $.each($animation_elements_left, function() 
  
    
  }); // end of $window.on('scroll resize', function(){
}
  

}); // end of $(document).ready(function()