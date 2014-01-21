$(function() {

	$('.department').on('click', function (){
		$('.department li').css('display', 'none');
		$(this).find('li').css('display', 'block');
	});

});