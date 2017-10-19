

$(document).ready(function(){
	
	 $('fieldset').first().addClass('animateClass'); 
	
	 $('.next').click(function(){
		  
		  var allField = $(this).parent();
		  var nextField = $(this).parent().next();
		  allField.removeClass('animateClass');
		  nextField.addClass('animateClass');
		  console.log(nextField);
	 }); 

 $('.previous').click(function(){
		  var allField = $(this).parent();
		  var previousField = $(this).parent().prev();
		  allField.removeClass('animateClass');
		  previousField.addClass('animateClass');
	 }); 	 
	
});

