$(document).ready(function(){

	$('.card').hover(function(){
		$(this).css('cursor','pointer');
	});


	$('.card-text').css('color', '#313131');

	$('#mobile-number').focus(function() {
		$(this).css({
			'box-shadow': 'none',
			'border-top-color': '#D2D2D2',
			'border-right-color': '#D2D2D2',
			'border-bottom-color': '#D2D2D2'
		});

		$('#mobile-error').hide();

	});
	

	$('#text-app-link').click(()=>{
		let mobileNumber = $('#mobile-number').val();
		let reg = '[0-9]{10}';
		let errorMessage = `Please enter a valid mobile number!`
		if(!mobileNumber.match(reg)){
			$('#mobile-error').text(errorMessage).css('color', 'red').show();
			
		}
	});

	$('.dropdown-menu>a').mouseenter(function(){
		$('#mid-nav').addClass('search-z-index');
	});

	$('.dropdown-menu>a').mouseout(function(){
		$('#mid-nav').removeClass('search-z-index');
	});	

	$('#dropdownMenuButton').click(function(){
		$(this).css('box-shadow', 'none')
	})

	$(window).resize(function(){
		if($(this).width() <= 768){
			$('#mid-nav-row>div').addClass('border');
			$('input').focus(function(){
				$('#search-text-row').css({
					'padding-top': '0',
					'padding-bottom': '3vh',
					'z-index': '1',
					 'height': '9vh'
				});
			})
		}else {
			$('#mid-nav-row>div').removeClass('border');
		}
	});
	
});